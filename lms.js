class User {
  constructor(id, username, email, password, role) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.loginStatus = false;
    this.registerDate = new Date();
  }

  verifylogin(enteredEmail, enteredPassword) {
    if (enteredEmail === this.email && enteredPassword === this.password) {
      this.loginStatus = true;
      console.log(
        `Success! Access granted. \n\nWelcome ${this.username}, happy learning!`
      );
    } else {
      console.log(
        `Incorrect login details! Access denied, please check login details.`
      );
    }
  }
}

// INHERITANCE: creating Student Class to inherit the features of the User Class
class Student extends User {
  constructor(id, email, password, role, studentName, trackId) {
    super(id, email, password, role);
    this.studentName = studentName;
    this.trackId = trackId;
  }

  login(email, password) {
    this.verifylogin(email, password);
  }
}
