import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { Member } from  '../auth/member';
import { AuthResponse} from "../auth/auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
   // authSubject  =  new  BehaviorSubject(false);
  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }
  register(user: Member): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
        tap(async (res:  AuthResponse ) => {
            console.log(res);
          if (res.member) {
            await this.storage.set("ACCESS_TOKEN", res.member.access_token);
            await this.storage.set("EXPIRES_IN", res.member.expires_in);
          //  this.authSubject.next(true);
          }
        })

    );
  }

    login(user: Member): Observable<AuthResponse> {
        return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
            tap(async (res: AuthResponse) => {

                if (res.member) {
                    await this.storage.set("ACCESS_TOKEN", res.member.access_token);
                    await this.storage.set("EXPIRES_IN", res.member.expires_in);
                   // this.authSubject.next(true);
                }
            })
        );
    }

    async logout() {
        await this.storage.remove("ACCESS_TOKEN");
        await this.storage.remove("EXPIRES_IN");
       // this.authSubject.next(false);
    }

    isLoggedIn() {
        //return this.authSubject.asObservable();
    }

}
