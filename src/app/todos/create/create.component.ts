import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Items } from '../items';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  todoInput:string=""

  newData!:Items

  constructor(private crud:CrudService){}

  get todoList(){
    return this.crud.todoList
  }

  addData(){
    this.newData={
      id:this.todoList.length? (Number(this.todoList[this.todoList.length-1].id)+1).toString() :"1",
      checked:false,
      data:this.todoInput,
      toggleEdit:false
    }
    this.crud.create(this.newData).subscribe(res=>{
      this.todoList.push(this.newData)
      this.todoInput=""
    })
  }
}
