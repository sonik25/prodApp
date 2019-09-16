export class LoginRegx{
    static UserName(control){
        let regx = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-|.)[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {username:true}
    }
    static Password(control){
        let regx = /^([1-zA-Z0-1@.\s]{1,255})$/;
        let valid = regx.test(control.value);
        return valid ? null : {address:true}
    }
}