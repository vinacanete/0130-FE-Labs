var loggedIn = false;
var lockedOut = false;
var logInAttempts = 0;

while (loggedIn == false && lockedOut == false) {

    var username = prompt('Username:');

    var password = prompt('Password:');

    if (username == 'samy123' && password == '12345') {

        alert('Welcome back, ' + username);

        loggedIn = true;

    } else {

        alert('Inaccurate credentials!');
        logInAttempts++;
        if (logInAttempts >= 3) {
            lockedOut = true;
            alert('You have been locked out!');
        }

    } 

}