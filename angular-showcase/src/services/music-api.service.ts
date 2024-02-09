import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../app/modules/models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(private http: HttpClient) { }

  getAccountDetails() {
    let url = 'http://localhost:8080/api/Users/accountDetails'

    return this.http.get<UserProfile>(url);
  }
}
