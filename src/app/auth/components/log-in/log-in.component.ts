import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  userInfo = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userInfo.value);
    // check if terms is true and the form is completed
    if (this.userInfo.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
      this.alertService.show('danger', 'You need to compile the form to proceed!');
      // show an alert
    }
  }

  checkRequiredField(fieldName: string): boolean {
    return this.userInfo.get(fieldName)!.invalid && (this.userInfo.get(fieldName)!.dirty || this.userInfo.get(fieldName)!.touched) && this.userInfo.get(fieldName)!.hasError('required')
  }
}
