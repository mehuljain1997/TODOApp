import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';
import { SelectByIdComponent } from './select-by-id/select-by-id.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AlloperationComponent } from './alloperation/alloperation.component';
import { LoginComponent } from './login/login.component';
import { LoginresisterComponent } from './loginresister/loginresister.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/loginregister',
  pathMatch: 'full'
},
{path: 'loginregister', component: LoginresisterComponent},
{ path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'select', component: SelectComponent },
  { path: 'selectByPId', component:  SelectByIdComponent},
  { path: 'deleteById', component:  DeleteComponent},
  { path: 'update', component:  UpdateComponent},
  {path: 'all', component: AlloperationComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
