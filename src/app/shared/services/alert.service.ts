import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Alert {
  type: 'danger' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertSubject = new Subject<Alert>();

  constructor() { }

  show(type: 'danger' | 'warning' | 'info', message: string) {
    this.alertSubject.next({ type, message });
  }
}
