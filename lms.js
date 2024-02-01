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
