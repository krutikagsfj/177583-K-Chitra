import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators }from "@angular/forms";

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  )
   { }
  play : FormGroup;

  ngOnInit() {
    this.play = this.formBuilder.group({
      
      name: ['' ],
      Address: ['' ],
      Amount : ['', [Validators.required]]

    });
  }

}
