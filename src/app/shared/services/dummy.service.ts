import { Injectable } from '@angular/core';
import { SportEvent } from '../models/sportevent.model';
import { Zone } from '../models/zone.model';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  events: SportEvent[] = [
    new SportEvent(
      'Tekma1',
      'Datum1',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma2',
      'Datum2',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma3',
      'Datum3',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma4',
      'Datum4',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma5',
      'Datum5',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma6',
      'Datum6',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma7',
      'Datum7',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
    new SportEvent(
      'Tekma8',
      'Datum8',
      '../../assets/logo.png',
      'ad;lakdas;ldkasl;dkasd;laskd;laskdas;ldkas;ldka',
      [new Zone('Jug', 100), new Zone('Sever', 200)]
    ),
  ];

  constructor() {}
}
