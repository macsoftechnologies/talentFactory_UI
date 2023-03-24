import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private httpClient: HttpClient) { }

  public UserSingup(data: any): Observable<any> {
    try {
      return this.httpClient.post("https://talent-factories-core-app-xbamn.ondigitalocean.app/student/createStudent", data)
    } catch (error) { 
      return throwError('error')
    }
  }

  }
