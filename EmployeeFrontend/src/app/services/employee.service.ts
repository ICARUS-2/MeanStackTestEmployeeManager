import { HttpClient } from '@angular/common/http';
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

  getEmployees() : Observable<EmployeeModel[]>
  {
    return this.http.get<EmployeeModel[]>(this.URL);
  }

  getEmployeeById(id: string) : Observable<EmployeeModel>
  {
    return this.http.get<EmployeeModel>(this.URL+id)
  }

  createEmployee()
  {

  }

  createTestEmployee()
  {
    return this.http.post<EmployeeModel>(this.URL+"testnew", {}, {responseType:'text' as 'json'} )
  }

  editEmployee()
  {

    //Return getEmployees()
  }

  deleteEmployee()
  {

  }

  terminateEmployee()
  {

  }
}
