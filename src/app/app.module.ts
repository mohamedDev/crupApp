import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Component
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";

// extra Module
import { FreelancerModule } from "./freelancer/freelancer.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FreelancerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
