import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = new FormControl('');

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Panda');
  }
}
