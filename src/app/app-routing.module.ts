import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path:"user-profile", component:UsersComponent},
  {path:"search-repo", component:RepositoriesComponent},
  {path:"", redirectTo:"/user-profile", pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
