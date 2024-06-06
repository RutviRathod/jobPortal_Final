import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavitemComponent } from './shared/navbar/navitem/navitem.component';
import { BannerComponent } from './banner/banner.component';
import { NotificationComponent } from './notification/notification.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { HighlightDirective } from './highlight.directive';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavitemComponent,
    BannerComponent,
    NotificationComponent,
    LayoutComponent,
    SidebarComponent,
    BlogComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
