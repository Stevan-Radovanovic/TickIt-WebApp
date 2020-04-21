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
      'Newcastle vs Partizan [Football]',
      'Datum1',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [
        new Zone('South', 100),
        new Zone('North', 200),
        new Zone('West', 300),
        new Zone('East', 300),
      ]
    ),
    new SportEvent(
      1,
      'Partizan vs Maccabi [Basketball]',
      'Datum2',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [
        new Zone('South', 100),
        new Zone('North', 200),
        new Zone('West', 300),
        new Zone('East', 300),
      ]
    ),
    new SportEvent(
      2,
      'Cibona vs Partizan [Basketball]',
      'Datum3',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      3,
      'Partizan - Barcelona [Basketball]',
      'Datum4',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      4,
      'Manchester United - Manchester City [Football]',
      'Datum5',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      5,
      'Qpr - Manchester City [Football]',
      'Datum6',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      6,
      'Manchester City - West Ham [Football]',
      'Datum7',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      7,
      'Golden State - Cleveland [Basketball]',
      'Datum8',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
  ];

  constructor() {}

  getById(id: number) {
    return this.events[id];
  }
}
