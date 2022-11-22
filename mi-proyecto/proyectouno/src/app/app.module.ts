import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './static/footer/footer.component';
import { HeaderComponent } from './static/header/header.component';
import { NavComponent } from './static/nav/nav.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
