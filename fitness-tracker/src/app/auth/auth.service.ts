import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private user: User | any;

    constructor(private router: Router) {}

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }

    Login(authData: AuthData){
        this.user = {
          email: authData.email,
          userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authSuccessfully();
    }

    Logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/Login']);
    }

    getUser(){
        return { ...this.user };
    }

    isAuth(){
        return this.user != null;
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}