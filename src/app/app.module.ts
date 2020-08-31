import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
// import { FormRepoComponent } from './form-repo/form-repo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    UserComponent,
    FormSearchComponent,
    // FormRepoComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FormRepoComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
