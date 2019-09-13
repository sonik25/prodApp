export class RegistrationRegx {
    static FirstName(control){
        let regx = /^[a-z]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {firstname:true}
    }
    static LastName(control){
        let regx = /^[a-z]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {lastname:true}
    }
    static MobileNo(control){
        let regx = /^[1-9]{1}[0-9]{9}$/;
        let valid = regx.test(control.value);
        return valid ? null : {mobileno:true}
    }
    static EmailId(control){
        let regx =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let valid = regx.test(control.value);
        return valid ? null : {emailid:true}

    }
    static Address(control){
        let regx = /^[a-z\.0-9 ]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {address:true}
    }
    static UserName(control){
        let regx = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
        let valid = regx.test(control.value);
        return valid ? null : {username:true}
    }
    static Password(control){
        let regx = /^([1-zA-Z0-1@.\s]{1,255})$/;
        let valid = regx.test(control.value);
        return valid ? null : {address:true}
    }
}