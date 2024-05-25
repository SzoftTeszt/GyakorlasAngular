import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  teendok:any

  oszlopNevek=[
    {key:"userId", text:"Felhasználó Azon", type:"plain"},
    {key:"title", text:"Feladat", type:"text"},
    {key:"completed", text:"Teljesítve", type:"bool"},
  ]

  kszo=""
  constructor(private base:BaseService){
    this.base.getTodos().subscribe(
      (adatok)=>this.teendok=adatok
    )

  }
  muveletek(todo:any){
    console.log(todo)
  }
}
