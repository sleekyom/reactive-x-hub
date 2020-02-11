import { HubEvents } from './enums';

export interface HubMessage extends MessageEvent {
    data: {
      value: any,
      header: HubEvents,
      id: number
    };
  }
