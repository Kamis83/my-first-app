import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
// import {HttpMoule} from '@angular/http'
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
