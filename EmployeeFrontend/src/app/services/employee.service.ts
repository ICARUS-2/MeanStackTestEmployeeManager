import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import EmployeeModel from 'src/models/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL: string = "http://localhost:5004/employees/"

  constructor(private http: HttpClient) {
    
  }

  getStatuses() : Observable<String[]>
  {
    return this.http.get<String[]>(this.URL + "statuses")
  }

  getEmployees() : Observable<EmployeeModel[]>
  {
    return this.http.get<EmployeeModel[]>(this.URL);
  }

  getEmployeeById(id: string) : Observable<EmployeeModel>
  {
    return this.http.get<EmployeeModel>(this.URL+id)
  }

  createEmployee(employee: EmployeeModel) : Observable<HttpResponse<EmployeeModel>>
  {
    return this.http.post<EmployeeModel>(this.URL+"new", 
    { 
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      email: employee.email,
      salary: employee.salary,
      department: employee.department,
      hiringDate: employee.hiringDate,
      terminationDate: employee.terminationDate,
      status: employee.status,
      info: employee.info
    },
    {observe: 'response', responseType: 'text' as 'json'})
  }

  createTestEmployee()
  {
    return this.http.post<EmployeeModel>(this.URL+"testnew", {}, {responseType:'text' as 'json'} )
  }

  editEmployee(employee: EmployeeModel)
  {
    return this.http.post<EmployeeModel>(this.URL+employee._id+"/edit", 
    { 
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      email: employee.email,
      salary: employee.salary,
      department: employee.department,
      hiringDate: employee.hiringDate,
      terminationDate: employee.terminationDate,
      status: employee.status,
      info: employee.info
    },
    {observe: 'response', responseType: 'text' as 'json'})
  }

  deleteEmployee()
  {

  }

  terminateEmployee()
  {

  }
}
