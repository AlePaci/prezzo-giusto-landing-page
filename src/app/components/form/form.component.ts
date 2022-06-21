import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  number: string ="";

  constructor() { 
 
  }

  ngOnInit(): void {
   


  }
  save(data:NgForm){
    console.log(data.value)
    this.number = data.value.number;

  }

}
