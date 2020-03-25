export interface UserModel {
    token?: any;
    name?: any;
    lastname?: any;
    email?: string;
    password?: string;
    isLogin: boolean;
    gotError: boolean;
}