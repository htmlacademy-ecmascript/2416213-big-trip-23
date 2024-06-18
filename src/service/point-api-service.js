import ApiService from '../framework/api-service.js';
import { Methods, ServiceUrl } from '../constants.js';

export default class PointApiService extends ApiService {
  get points() {
    return this._load({ url: ServiceUrl.POINTS }).then(ApiService.parseResponse);
  }

  get offers() {
    return this._load({ url: ServiceUrl.OFFERS }).then(ApiService.parseResponse);
  }

  get destinations() {
    return this._load({ url: ServiceUrl.DESTINATIONS }).then(ApiService.parseResponse);
  }

  async updatePoint(point) {
    const response = await this._load({
      url: `${ServiceUrl.POINTS}/${point.id}`,
      method: Methods.PUT,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const parsedResponse = await ApiService.parseResponse(response);
    return parsedResponse;
  }

  async addPoint(point) {
    const response = await this._load({
      url: ServiceUrl.POINTS,
      method: Methods.POST,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const parsedResponse = await ApiService.parseResponse(response);
    return parsedResponse;
  }

  async deletePoint(point) {
    await this._load({
      url: `${ServiceUrl.POINTS}/${point.id}`,
      method: Methods.DELETE,
      body: JSON.stringify(point),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
  }

  #adaptToServer(point) {
    const adaptedPoint = {
      ...point,
      // eslint-disable-next-line camelcase
      base_price: parseInt(point.basePrice, 10),
      // eslint-disable-next-line camelcase
      date_to: point.dateTo.toISOString(),
      // eslint-disable-next-line camelcase
      date_from: point.dateFrom.toISOString(),
      // eslint-disable-next-line camelcase
      is_favorite: point.isFavorite,
    };

    delete adaptedPoint.basePrice;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.dateFrom;
    delete adaptedPoint.isFavorite;
    return adaptedPoint;
  }
}
