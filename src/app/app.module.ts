import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from '../app/components/users/users.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { SearchFormComponent } from '../app/components/search-form/search-form.component';
import { RepositoriesComponent } from '../app/components/repositories/repositories.component';
import { NotfoundComponent } from '../app/components/notfound/notfound.component';
import { UserserviceService } from '../app/userservice';
import { HighlightDirective } from '../app/highlight.directive';
import { DatePipePipe } from '../app/date-pipe.pipe';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    SearchFormComponent,
    RepositoriesComponent,
    NotfoundComponent,
    HighlightDirective,
    DatePipePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
