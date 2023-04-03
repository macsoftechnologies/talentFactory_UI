import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private httpClient: HttpClient) {}

  public studentSingup(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/student/createStudent',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  public institutionSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/learning-org/AddlearnOrg',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  public professionalSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/learning-org/AddlearnOrg',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  public employerSignUp(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/organization/createOrganization',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // institution SignIn

  public institutionSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/learning-org/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // Admin SignIn

  public adminSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/admin/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // employer SignIn

  public employerSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/organization/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }

  // student SignIn

  public studentSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/student/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }
  // professional SignIn

  public professionalSignIn(data: any): Observable<any> {
    try {
      return this.httpClient.post(
        'https://talent-factories-core-app-xbamn.ondigitalocean.app/professional/login',
        data
      );
    } catch (error) {
      return throwError('error');
    }
  }
}
