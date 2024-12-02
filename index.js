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

//feature

function login(username, password) {
    const registeredUsers = ["user1", "user2", "user3"];
  
    if (registeredUsers.includes(username)) {
      if (password === "Emp@123") {
        return "Login Successful...";
      } else {
        return "Wrong Password...";
      }
    } else {
      return "User Not Found, Please Signup";
    }
  }
  
  // Example :
  console.log(login("user1", "Emp@123"));   // Output: Login Successful...
  console.log(login("user4", "Emp@123"));   // Output: User Not Found, Please Signup
  console.log(login("user1", "wrongPassword"));  // Output: Wrong Password...