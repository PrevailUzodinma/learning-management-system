class User {
  constructor(id, password, role) {
    this.id = id;
    this.password = password;
    this.role = role;
    this.loginStatus = false;
    this.registerDate = new Date();
  }

  verifylogin(enteredID, enteredPassword) {
    if (enteredID === this.id && enteredPassword === this.password) {
      console.log(`Success! Access granted`);
    } else {
      {
        `Incorrect login details! Access denied, please check login details.`;
      }
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
}
