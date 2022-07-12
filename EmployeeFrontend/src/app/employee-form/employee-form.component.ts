import { Component, OnInit } from '@angular/core';
import EmployeeModel from 'src/models/EmployeeModel';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeModel: EmployeeModel = new EmployeeModel("", "", "", 0, "", null, null, null, "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
