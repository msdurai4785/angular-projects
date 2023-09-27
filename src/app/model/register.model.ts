export interface RegisterUsersModel{
    username: string;
    email: string;
    password?: string;
    contact: string;
    salary?: number;
    gender?:string;
    country?:string;

}
export interface updateNewArray{
    updateName:string;
    updateEmail:string;
    updateSalary:string;
    updateContact:string
  }
  export interface customer{
    name: string;
    email: string;
    password: string;
    gender: string;
    salary: string;
    contact: string;
    country: string;
    id?:string;
  }
