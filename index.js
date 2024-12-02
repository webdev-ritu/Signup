function signUp(username){
    const registeredUsers = ["user","user1","user2"];
    if (registeredUsers.includes(username)){
        return "User Already Registerd, Please login";
    }else {
        registeredUsers.push(username);
        return "Sigup successful, please login";
    }
}
// example
console.log(signup("newuser")); //output: Sigup successful, please login
console.log(signup("user")); //output: User Already Registerd, Please login
