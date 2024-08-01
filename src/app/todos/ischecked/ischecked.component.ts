import { Component, Input } from '@angular/core';
import { CrudService } from '../crud.service';
import { Items } from '../items';

@Component({
  selector: 'app-ischecked',
  templateUrl: './ischecked.component.html',
  styleUrls: ['./ischecked.component.css']
})
export class IscheckedComponent{
  @Input() id!:string
  @Input() ischecked!:boolean

  data!:Items
  constructor(private crud:CrudService){
    
  }

  handleChecked(){
    console.log(this.ischecked)
    this.crud.todoList.filter(item=>item.id==this.id)[0].checked=!this.crud.todoList.filter(item=>item.id==this.id)[0].checked
    this.crud.getElement(this.id)
    this.crud.update(this.id,this.crud.getElement(this.id)).subscribe()
  }
}
