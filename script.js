function login() {
    // get form values
    var userType = document.getElementById("user-type").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // validate form values
    if (userType === "" || username === "" || password === "") {
      alert("Please enter all fields");
      return false;
    }
    
    // check user credentials
    if (userType === "student" && username === "8834868994" && password === "test") {
      console.log("Inputs are valid!"); // Debugging statement
      window.open("https://myapps.classlink.com/home", "_self");
    } else if (userType === "staff" && username === "8834868994" && password === "test") {
      window.open("https://myapps.classlink.com/home", "_self");
    } else {
      document.getElementById("auth-failed").style.display = "block";
      return false;
    }
  }
  