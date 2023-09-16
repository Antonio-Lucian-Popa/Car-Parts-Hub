import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userInfo = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    terms: [false, Validators.required]
  });

  constructor(private fb: FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  createAccount() {
    console.log(this.userInfo.value);
    // check if terms is true and the form is completed
    if (this.userInfo.valid && this.userInfo.value.terms) {
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
