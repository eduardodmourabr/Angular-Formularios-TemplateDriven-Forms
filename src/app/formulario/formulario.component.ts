import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'formulario1',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
  
    
  
})
export class FormularioComponent {

  

  personalData: FormGroup = new FormGroup({
    name: new FormControl('',[
      Validators.required, 
      Validators.minLength(3)
    ]),
    email: new FormControl('',[
      Validators.required, 
      Validators.email, 
      Validators.minLength(8)]),
    lastName: new FormControl('', [
      Validators.required, 
      Validators.minLength(3)]),
    sex: new FormControl('',[
      Validators.required]),
    telefone: new FormControl('',[
      Validators.required, 
      Validators.minLength(11)]),

    tels: new FormArray([
      new FormControl('',Validators.required),
      
    ])
  })


  constructor(
    private snack:MatSnackBar,
    private fb: FormBuilder
  ){}
  

}
