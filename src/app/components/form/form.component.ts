import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ValidationApiService } from 'src/app/service/validation-api.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  number: string ="";
  showModal:boolean = false;

  constructor(private validationService: ValidationApiService,
    ) { 
 
  }

  ngOnInit(): void {
   


  }
  save(data:NgForm){
    console.log(data.value);
    this.validationService.getValidtion(data.value.number).subscribe({
      next: (res)=> {
        console.log(res);
        if(res.valid){
           this.number = data.value.number;
           console.log(this.showModal)
        }
      }
    })
    
   

  }

}
