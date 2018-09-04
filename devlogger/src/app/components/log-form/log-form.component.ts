import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: Date;
  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.logService.logSelected.subscribe(log => {
      if(log.id != null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit(){
    // Check if new log
    if(this.isNew){
      // Create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      };
      //Add log
      this.logService.addLog(newLog);
    } else {
      // Create log to be updated
      let updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      // Update log
      this.logService.update(updLog);
    }
    // Clear form state
    this.clearState();
  }

  onClear() {
    this.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = null;
    this.logService.clearState();
  }
}
