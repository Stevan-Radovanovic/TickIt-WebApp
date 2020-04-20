import { Injectable } from '@angular/core';
import { SportEvent } from '../models/sportevent.model';
import { Zone } from '../models/zone.model';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  events: SportEvent[] = [
    new SportEvent(
      0,
      'Tekma1',
      'Datum1',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      1,
      'Tekma2',
      'Datum2',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      2,
      'Tekma3',
      'Datum3',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      3,
      'Tekma4',
      'Datum4',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      4,
      'Tekma5',
      'Datum5',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      5,
      'Tekma6',
      'Datum6',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      6,
      'Tekma7',
      'Datum7',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      7,
      'Tekma8',
      'Datum8',
      '../../assets/NBA-5.jpg',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
  ];

  constructor() {}

  getById(id: number) {
    return this.events[id];
  }
}
