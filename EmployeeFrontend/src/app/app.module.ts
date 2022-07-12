import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationService } from './services/notification.service';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { TerminateFormComponent } from './terminate-form/terminate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    NavbarComponent,
    CreateEmployeeComponent,
    EmployeeFormComponent,
    NotificationsComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    TerminateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
