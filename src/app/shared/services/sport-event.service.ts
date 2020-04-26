import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SportEvent } from '../models/sportevent.model';

@Injectable({
  providedIn: 'root',
})
export class SportEventService {
  constructor(private http: HttpClient) {}

  sportEvents: SportEvent[] = [];

  getSportEvents() {
    return this.http.get<{ documents: SportEvent[] }>(
      'http://localhost:3000/sportEvents'
    );
  }

  getSportEventById(id: string) {
    console.log(id);
    for (const eve of this.sportEvents) {
      console.log(eve._id);
      if (eve._id === id) {
        return eve;
      }
    }

    return null;
  }
}
