import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UsersComponent } from './components/users/users.component';
import { DatePipePipe } from './date-pipe.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UsersComponent,
    DatePipePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
