import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  todoList:Items[]=[]
  toggleEdit:boolean=false

  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<Items[]>('http://localhost:3000/todos')
  }

  create(data:Items){
    return this.http.post('http://localhost:3000/todos',data)
  }

  delete(id:string){
    return this.http.delete<Items>(`http://localhost:3000/todos/${id}`)
  }
  update(id:string,data:Items){
    return this.http.put<Items>(`http://localhost:3000/todos/${id}`,data)
  }

  getElement(id:string){
    return this.todoList.filter(item=>item.id==id)[0]
  }
}
