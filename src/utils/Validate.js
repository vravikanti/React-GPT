export const checkValidation=(email,password)=>{
    var isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    var isPassowrdValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    console.log(isEmailValid);
    if(!isEmailValid){
        return "Email is not valid";
    }
    if(!isPassowrdValid)
        return "Password is not valid";

    return null;

}