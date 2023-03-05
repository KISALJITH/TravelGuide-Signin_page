var user = [
    {
        username : "Devid Robinsan",
        password : "dev1234*"
    },
    {
        username : "Neha Dias",
        password : "nd1122**"
    },
    {
        username : "John Michel",
        password : "john9090##"
    }

]

// User Login
function login() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i=0; i<user.length; i++) {
        if(username == user[i].username && password == user[i].password){
            console.log(username + "is logged in!!")
            window.location.href = 'http://localhost/travelGuide/view/pages/homePage.html';
            return
        }
    }
    console.log('Incorrect username or password')
}

// Redirect to create user page
function createUser() {
    window.location.href = 'http://localhost/travelGuide/view/pages/addUser.html';
}

// Create new user
function addNewUser() {
    Event.preventDefault();
    console.log('Calling add new user')

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    var user = {
        username : username,
        password : password
    }

    var json = JSON.stringify(user);
    localStorage.setItem(user, json);
    console.log('User added succefully !!')

}

//Logout
function logout() {
    window.location.href = 'http://localhost/travelGuide/view/pages/login.html';
}

// User added successfully popup
var modal = document.getElementById("myModal");
var btn = document.getElementById("addUserBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

