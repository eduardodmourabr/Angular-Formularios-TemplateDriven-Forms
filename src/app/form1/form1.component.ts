import { Component }from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})


export class Form1Component  {


  constructor(
    public dialog: MatDialog
  ){}

  nome        : FormControl = new FormControl('',[Validators.required])
  sobrenome   : FormControl = new FormControl('',[Validators.required])
  cpf         : FormControl = new FormControl('',[Validators.required])
  username    : FormControl = new FormControl('',[Validators.required])
  telefone    : FormControl = new FormControl('',[Validators.required])
  endereco    : FormControl = new FormControl('',[Validators.required])
  complemento : FormControl = new FormControl('',[Validators.required])
  pass1       : FormControl = new FormControl('',[Validators.required])
  pass2       : FormControl = new FormControl('',[Validators.required])


  nomeV       : string = ''
  sobrenomeV  : string = ''
  cpfV        : number = 0
  usernameV   : string = ''
  telefoneV   : number = 0
  enderecoV   : string = ''
  complementoV: string = ''
  pass1V      : string = ''
  pass2V      : string = ''

  

  confirmarSenha(s1:any, s2:any):void{

    if(s1 === s2){
     alert('Formulário enviado!')
    } else {
      alert('Senhas Incorretas')
    }
}




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







}


