import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

export class AuthService{
    authChange = new Subject<boolean>();
    private user: User | any;

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
    }

    Login(authData: AuthData){
        this.user = {
          email: authData.email,
          userId: Math.round(Math.random() * 10000).toString(),
        };
        this.authChange.next(true);
    }

    Logout(){
        this.user = null;
        this.authChange.next(false);
    }

    getUser(){
        return { ...this.user };
    }

    isAuth(){
        return this.user != null;
    }
}