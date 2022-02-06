import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   name: new FormControl(),
    //   email: new FormControl(),
    //   password: new FormControl(),
    // });

    //create form using formBuilder
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    let userObject = {
      name: 'mahesh bodhgire',
      // 'email': 'mahesh@gmail.com',
      password: '123456',
    };

    // this.registerForm.setValue(userObject);
    // this.registerForm.patchValue(userObject)
  }

  register() {
    // console.log(this.registerForm.valid);

    console.log(this.registerForm.value);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  resetForm() {
    this.registerForm.reset();
  }
}
