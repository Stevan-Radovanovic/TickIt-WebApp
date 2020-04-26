import { Injectable } from '@angular/core';
import { SportEvent } from '../models/sportevent.model';
import { Zone } from '../models/zone.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  events: SportEvent[] = [
    new SportEvent(
      '0',
      'Newcastle vs Partizan [Football]',
      '27.08.2003.',
      'Partizan in the first leg, at home, to a far superior opponent. Can they turn the game around at St. James Park?',
      [
        new Zone('South', 3),
        new Zone('North', 3),
        new Zone('West', 6),
        new Zone('East', 6),
      ]
    ),
    new SportEvent(
      '1',
      'Partizan vs Maccabi [Basketball]',
      '01.04.2010.',
      'Potentialy the last game in the series. Can Partizan break the odds and advance to the Final Four?',
      [
        new Zone('South', 4),
        new Zone('North', 4),
        new Zone('West', 8),
        new Zone('East', 8),
      ]
    ),
    new SportEvent(
      '2',
      'Cibona vs Partizan [Basketball]',
      '25.04.2010.',
      'Aba League Finals! Flying high from their EuroLeague success, Partizan goes to Zagreb to secure a clean sweep!',
      [
        new Zone('South', 3),
        new Zone('North', 3),
        new Zone('West', 6),
        new Zone('East', 6),
      ]
    ),
    new SportEvent(
      '3',
      'Partizan - Barcelona [Basketball]',
      '03.02.2010.',
      'The spanish giant comes to Belgrade. Can they survive the fire of Pionir?',
      [
        new Zone('South', 5),
        new Zone('North', 5),
        new Zone('West', 10),
        new Zone('East', 10),
      ]
    ),
    new SportEvent(
      '4',
      'Manchester United - Manchester City [Football]',
      '23.10.2011.',
      'The Manchester derby is here! Can the noisy neighbours finally dethrone Fergie and his Red Devils?',
      [
        new Zone('South', 15),
        new Zone('North', 15),
        new Zone('West', 30),
        new Zone('East', 30),
      ]
    ),
    new SportEvent(
      '5',
      'Manchester City - Qpr [Football]',
      '13.05.2012.',
      `One win. That's all it takes for the 44 year wait to end. Can City rise up to the challenge?`,
      [
        new Zone('South', 10),
        new Zone('North', 10),
        new Zone('West', 30),
        new Zone('East', 30),
      ]
    ),
    new SportEvent(
      '6',
      'Manchester City - West Ham [Football]',
      '11.05.2014',
      `Another trophy hangs is in reaching distance. Can the Cityzens snag it right in front of Liverpool's face?`,
      [
        new Zone('South', 10),
        new Zone('North', 20),
        new Zone('West', 30),
        new Zone('East', 30),
      ]
    ),
    new SportEvent(
      '7',
      'Golden State - Cleveland [Basketball]',
      '19.06.2016',
      'LBJ or Curry? Irving or Thompson? One game will decide the champion.',
      [
        new Zone('South', 100),
        new Zone('North', 100),
        new Zone('West', 4000),
        new Zone('East', 4000),
      ]
    ),
  ];

  constructor(private http: HttpClient) {}

  saveEvents() {
    for (const event of this.events) {
      this.http
        .post('http://localhost:3000/sportEvents', event)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }

  getById(id: number) {
    return this.events[id];
  }
}
