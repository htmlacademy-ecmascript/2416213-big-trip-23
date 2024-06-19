import { render, replace, remove } from '../framework/render.js';
import { Mode, UserAction, UpdateType } from '../constants.js';
import { isMinorChange } from '../utils/event.js';
import PointEditView from '../view/point-edit-view.js';
import TripPointView from '../view/trip-point-view.js';

export default class PointPresenter {
  #pointListContainer = null;
  #destinationModel = null;
  #offersModel = null;
  #point = null;
  #pointComponent = null;
  #editPointComponent = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({ pointListContainer, destinationModel, offersModel, onPointChange, onModeChange }) {
    this.#pointListContainer = pointListContainer;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onPointChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new TripPointView({
      destination: this.#destinationModel.getById(point.destination),
      eventPoint: this.#point,
      offers: this.#offersModel.getByType(point.type),
      onEditClick: this.#pointEditHandler,
      onFavoriteClick: this.#pointFavoriteHandler,
    });

    this.#editPointComponent = new PointEditView({
      destinations: this.#destinationModel.destinations,
      eventPoint: this.#point,
      offers: this.#offersModel.offers,
      onCloseClick: this.#pointCloseEditHandler,
      onFormSubmit: this.#pointEditSubmitHandler,
      onDeleteClick: this.#pointDeleteHandler,
    });

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointComponent, prevEditPointComponent);
      this.#mode = Mode.DEFAULT;
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#editPointComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#editPointComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#editPointComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#pointComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#editPointComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#editPointComponent.shake(resetFormState);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#editPointComponent.reset(this.#point);
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #pointEditHandler = () => {
    this.#replacePointToForm();
  };

  #pointCloseEditHandler = () => {
    this.#replaceFormToPoint();
  };

  #pointEditSubmitHandler = (point) => {
    const isMinorType = isMinorChange(point, this.#point) ? 'MINOR' : 'PATCH';
    this.#handleDataChange(UserAction.UPDATE_POINT, isMinorType, point);
  };

  #pointFavoriteHandler = () => {
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH, {
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });
  };

  #pointDeleteHandler = () => {
    this.#handleDataChange(UserAction.DELETE_POINT, UpdateType.MINOR, this.#point);
  };
}
