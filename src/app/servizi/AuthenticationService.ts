import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../classi/User";

@Injectable()
export class AuthenticationService {

    private _url: string = "http://localhost:8084/auth"
    user!: User;
    
    constructor(private http: HttpClient) {}

    createUser(sub:string, token:string, exp:Date){
        this.user = new User(sub, token, exp) 
    }

    login(loginRequest: {username: string, password: string, rememberMe: boolean}): Observable<string> {
        return this.http.post<string>(this._url + "/login", loginRequest);
    }

    registrazione(registrazioneRequest: {username: string, password: string, role:number}): Observable<string> {
        return this.http.post<string>(this._url + "/register", registrazioneRequest)
    }
}