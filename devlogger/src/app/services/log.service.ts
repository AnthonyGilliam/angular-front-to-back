import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/log';

const logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
const stateSource = new BehaviorSubject<boolean>(true);

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  logSelected = logSource.asObservable();
  stateCleared = stateSource.asObservable();

  constructor() {
    this.logs = [];
    // this.logs = [
    //   { id: '1', text: 'Generated Components', date: new Date('12/26/2017 12:54:23')},
    //   { id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
    //   { id: '3', text: 'Added logs Component', date: new Date('12/27/2017 12:00:00')},
    // ];
  }

  getLogs(): Observable<Log[]> {
    if(localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs);
  }

  setFormLog(log: Log){
    logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log);
    // Add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  update(log: Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
  }

  clearState() {
    stateSource.next(true);
  }
}
