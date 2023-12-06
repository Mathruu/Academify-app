import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlunosComponent } from './create-alunos/create-alunos.component';
import { EditAlunosComponent } from './edit-alunos/edit-alunos.component';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component:MainComponent},
  { path: 'main', component:MainComponent},
  { path: 'list-alunos', component: ListAlunosComponent},
  { path: 'create-alunos', component: CreateAlunosComponent},
  { path: 'edit-alunos/:id', component: EditAlunosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
