import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  nome:        string = ''
  sobrenome:   string = ''
  username:    string = ''
  cpf :        string = ''
  telefone:    string = ''
  endereco:    string = ''
  complemento: string = ''
  pass1:       string = ''
  pass2:       string = ''
  

  constructor() { }

  ngOnInit(): void {
  }

  

}
