import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "../classi/UserResponse";

@Injectable()
export class UserService {

    private _url: string = "http://localhost:8084/user"
    
    constructor(private http: HttpClient) {}

    getListaUtenti(): Observable<UserResponse[]>{
        return this.http.get<UserResponse[]>(this._url + "/users");
    }
}