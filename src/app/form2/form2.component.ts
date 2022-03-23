import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  nome        : FormControl = new FormControl('',[Validators.required])
  sobrenome   : FormControl = new FormControl('',[Validators.required])
  cpf         : FormControl = new FormControl('',[Validators.required])
  username    : FormControl = new FormControl('',[Validators.required])
  telefone    : FormControl = new FormControl('',[Validators.required])
  endereco    : FormControl = new FormControl('',[Validators.required])
  complemento : FormControl = new FormControl('',[Validators.required])
  pass1       : FormControl = new FormControl('',[Validators.required])
  pass2       : FormControl = new FormControl('',[Validators.required])

  usuarioForm: FormGroup = new FormGroup({
    nome: new FormControl('',[
      Validators.required, 
      Validators.minLength(5)
    ]),
    sobrenome: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    cpf: new FormControl('',[
      Validators.required,
      Validators.minLength(11)
    ]),
    telefone: new FormControl('',[
      Validators.required,
      Validators.minLength(11)
    ]),
    endereco: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    complemento: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    pass1: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    pass2: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      
    ]),

    telefones: new FormArray([
      new FormControl('',Validators.required),
      
    ])
  })
  telefones : FormArray = new FormArray([
      new FormControl('')
  ])
  formGroup: any;

  add():void{
    this.telefones.push(new FormControl('',Validators.required))
  }
 
  
  constructor(
    public dialog: MatDialog
  ){}

/*   nome        : FormControl = new FormControl('',[Validators.required])
  sobrenome   : FormControl = new FormControl('',[Validators.required])
  cpf         : FormControl = new FormControl('',[Validators.required])
  username    : FormControl = new FormControl('',[Validators.required])
  telefone    : FormControl = new FormControl('',[Validators.required])
  endereco    : FormControl = new FormControl('',[Validators.required])
  complemento : FormControl = new FormControl('',[Validators.required])
  pass1       : FormControl = new FormControl('',[Validators.required])
  pass2       : FormControl = new FormControl('',[Validators.required])
 */


  addDialog() : void {
    let ref = this.dialog.open(LiveFormDialogComponent)
          
    ref.componentInstance.nome        =        this.nome.value
    ref.componentInstance.sobrenome   =   this.sobrenome.value
    ref.componentInstance.username    =    this.username.value
    ref.componentInstance.cpf         =         this.cpf.value
    ref.componentInstance.telefone    =    this.telefone.value
    ref.componentInstance.endereco    =    this.endereco.value
    ref.componentInstance.complemento = this.complemento.value
    ref.componentInstance.pass1       =       this.pass1.value
    ref.componentInstance.pass2       =       this.pass2.value
  }

  confirmarSenha(s1:string, s2:string):void{

    if(s1 === s2){
     alert('Formulário enviado!')
    } else {
      alert('Senhas Incorretas')
    }
}

  submit(x:string, y:string):void{
    let pass1 = x
    let pass2 = y
    if(pass1 === pass2){
      alert('Formulário enviado!')
      console.log(pass1, pass2)
    } else {
      alert('Senhas diferentes')
      console.log(pass1, pass2)
    }
  }

  












}