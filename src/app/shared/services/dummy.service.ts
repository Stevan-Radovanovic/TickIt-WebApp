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
  ];

  constructor() {}
}
