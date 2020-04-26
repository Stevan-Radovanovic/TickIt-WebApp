import { Zone } from './zone.model';

export class SportEvent {
  constructor(
    // tslint:disable-next-line: variable-name
    public _id: string,
    public name: string,
    public date: string,
    public description: string,
    public zones: Zone[]
  ) {
    this._id = _id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.zones = zones;
  }
}
