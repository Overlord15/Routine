function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
  
    if (username == " ") {
      alert("Please enter a username");
      return false;
    }
    else if(password.length < 8){
        alert("Password must be more than 8 char long");
        return false;
    }
    return true;
  }
  