import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    AuthComponent,
    UserComponent,
    AdminComponent,
    UserDashboardComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminSettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
