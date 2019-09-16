export interface IuserLogin{
   UserLogin: {
      UserName:string;
      Password:string
  };
  UserIdentity?:string;
  FirstName?:string;
  LastName?:string;
  MobileNo?:string;
  Error?:string;
}