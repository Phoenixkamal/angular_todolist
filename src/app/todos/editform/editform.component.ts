import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent {

  constructor(private crud:CrudService){}

  @Input() data!:string
  @Input() id!:string

  handleEditSubmit(editform:NgForm){
    this.crud.todoList.filter(item=>item.id==this.id)[0].data=this.data
    this.crud.update(this.id,this.crud.getElement(this.id)).subscribe()
    this.crud.todoList.filter(item=>item.id==this.id)[0].toggleEdit=!this.crud.todoList.filter(item=>item.id==this.id)[0].toggleEdit
    this.crud.getElement(this.id)
    this.crud.update(this.id,this.crud.getElement(this.id)).subscribe()
  }
}
