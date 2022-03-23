import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  cadastroForm: FormGroup = this.fb.group({
    nome:[''],
    email:[''],
    senha1:[''],
    senha2:[''],
    telefones : this.fb.array ([
      ['']
    ]),
  })

  telefones : FormArray = this.cadastroForm.get('telefones') as FormArray;

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  meuControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
    

    ])

}
