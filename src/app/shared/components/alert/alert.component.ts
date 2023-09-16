import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  message: string = '';
  type: 'danger' | 'warning' | 'info' = 'info';

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alertSubject.subscribe(alert => {
      this.message = alert.message;
      this.type = alert.type;
      setTimeout(() => this.message = '', 5000); // Auto dismiss after 5 seconds
    });
  }

  ngOnDestroy() {
    this.alertService.alertSubject.unsubscribe();
  }

  closeAlert() {
    this.message = '';
  }
}
