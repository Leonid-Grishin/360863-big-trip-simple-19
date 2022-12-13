import {POINTS_COUNT} from '../const';
import ScheduleView from '../view/schedule-view.js';
import AddPointView from '../view/add-point-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';

import {render} from '../render.js';

export default class SchedulePresenter {
  scheduleComponent = new ScheduleView();

  constructor({scheduleContainer, DATA_MODEL}) {
    this.scheduleContainer = scheduleContainer;
    this.dataModel = DATA_MODEL;
  }

  init() {
    this.points = [...this.dataModel.getPoints()];
    this.destinations = [...this.dataModel.getDestinations()];
    this.offersByType = [...this.dataModel.getOffersByType()];
    this.offers = [...this.dataModel.getOffers()];
    this.blankPoint = [...this.dataModel.getBlankPoint()];

    render(this.scheduleComponent, this.scheduleContainer);
    render(new EditPointView({offers: this.offers, destinations: this.destinations, point: this.blankPoint[0], offersByType: this.offersByType}), this.scheduleComponent.getElement());
    render(new AddPointView({offers: this.offers, destinations: this.destinations, point: this.blankPoint[0], offersByType: this.offersByType}), this.scheduleComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      render(new PointView({point: this.points[i], destinations: this.destinations, offers: this.offers}), this.scheduleComponent.getElement());
    }
  }
}
