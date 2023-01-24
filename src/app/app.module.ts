import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PortalModule} from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ActionAreaComponent } from './action-area/action-area.component';
import { HeaderComponent } from './header/header.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionAreaComponent,
    HeaderComponent,
    OrdersPageComponent,
    SidebarComponent,
    UsersPageComponent,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
