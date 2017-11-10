export class User {
    guid:string;
    constructor(
        private name:string,
        private email:string,
        private phone:string
    ) { }
}