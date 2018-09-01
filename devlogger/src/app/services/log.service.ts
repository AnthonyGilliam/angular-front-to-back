import { Injectable } from '@angular/core';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  getLogs() : Log[] {
    return [
      { id: '1', text: 'Generated Components', date: new Date('12/26/2017 12:54:23')},
      { id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
      { id: '3', text: 'Added logs Component', date: new Date('12/27/2017 12:00:00')},
    ];
  }
}
