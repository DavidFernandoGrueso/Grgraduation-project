import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './modules/user/user.component';
import { UserheaderComponent } from './modules/user/userheader/userheader.component';
import { UserfooterComponent } from './modules/user/userfooter/userfooter.component';
import { UsercontentComponent } from './modules/user/usercontent/usercontent.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserheaderComponent,
    UserfooterComponent,
    UsercontentComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
