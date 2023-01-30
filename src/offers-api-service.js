import ApiService from './framework/api-service.js';

const Method = {
  GET: 'GET',
};

export default class OffersApiService extends ApiService {
  get offers() {
    return this._load({url: 'offers'})
      .then(ApiService.parseResponse);
  }
}
