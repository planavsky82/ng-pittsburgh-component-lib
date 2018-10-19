import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'pgh-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      field: new FormControl('ngPittsburgh')
    });
  }

}
