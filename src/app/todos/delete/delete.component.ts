import { Component, Input } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private crud:CrudService){}

  @Input() id!:string

  get todoList(){
    return this.crud.todoList
  }

  handleDelete(){
    this.crud.delete(this.id).subscribe(
      {
        next:()=>{
         this.crud.todoList=this.todoList.filter(item => item.id!=this.id)
        }
      }
    )
  }

}