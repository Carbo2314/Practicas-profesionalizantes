import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [ 
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: '', component: LoginComponent,  },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
{ path: 'user', component: UserComponent,  resolve: { data: UserResolver}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

