import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private httpClient: HttpClient) { }

  public studentSingup(data: any): Observable<any> {
    try {
      return this.httpClient.post("https://talent-factories-core-app-xbamn.ondigitalocean.app/student/createStudent", data)
    } catch (error) { 
      return throwError('error')
    }
  }

  public institutionSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post("https://talent-factories-core-app-xbamn.ondigitalocean.app/learning-org/AddlearnOrg", data)
    } catch (error) { 
      return throwError('error')
    }
  }

  public professionalSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post("https://talent-factories-core-app-xbamn.ondigitalocean.app/learning-org/AddlearnOrg", data)
    } catch (error) { 
      return throwError('error')
    }
  }

  public employerSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post("https://talent-factories-core-app-xbamn.ondigitalocean.app/organization/createOrganization", data)
    } catch (error) { 
      return throwError('error')
    }
  }

  }
