import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [{
  path: '',
  component: TodosComponent,
},
{
  path: 'details/:id',
  component: DetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
