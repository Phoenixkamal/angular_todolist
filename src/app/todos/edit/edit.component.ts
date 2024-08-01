import { Component, Input } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() id!:string

  constructor(private crud:CrudService){}

  
  handleToggle(){
    this.crud.todoList.filter(item=>item.id==this.id)[0].toggleEdit=!this.crud.todoList.filter(item=>item.id==this.id)[0].toggleEdit
    this.crud.getElement(this.id)
    this.crud.update(this.id,this.crud.getElement(this.id)).subscribe()
  }
}
