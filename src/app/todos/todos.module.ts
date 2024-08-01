import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { FormsModule } from '@angular/forms';
import { IscheckedComponent } from './ischecked/ischecked.component';
import { EditformComponent } from './editform/editform.component';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DeleteComponent,
    EditComponent,
    TodoAppComponent,
    IscheckedComponent,
    EditformComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
