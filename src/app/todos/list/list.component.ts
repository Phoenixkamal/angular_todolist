import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  toggle!:boolean

  get todoList() {
    return this.crud.todoList
  }

  constructor(private crud: CrudService) { }


  ngOnInit(): void {
    this.crud.getAll().subscribe((response) => {
      response.map((item) => {
        this.crud.todoList.push(item)
      })
    })
  }
}
