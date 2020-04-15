import { Zone } from './zone.model';

export class Event {
  constructor(
    private name: string,
    private imageUrl: string,
    private description: string,
    private zones: Zone[]
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.zones = zones;
  }

  getName() {
    return this.name;
  }

  getImageUrl() {
    return this.imageUrl;
  }

  getDescription() {
    return this.description;
  }

  getZones() {
    return this.zones;
  }
}
