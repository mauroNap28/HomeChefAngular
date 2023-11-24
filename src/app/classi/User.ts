export class User {
    constructor(
        public sub: string,
        private token: string,
        private exp: Date
    ){}

    getToken(){
        return this.token
    }

    getExp(){
        return this.exp;
    }
}