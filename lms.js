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
      console.log(`Login successful! Access granted.`);
    } else {
      console.log(
        `Incorrect login details! Access denied, please check login details.`
      );
    }
  }
}

class Student extends User {
  constructor(id, username, email, password, role, studentName, trackId) {
    super(id, username, email, password, role);
    this.studentName = studentName;
    this.trackId = trackId;
  }

  login(email, password) {
    this.verifylogin(email, password);
  }

  logout() {
    this.loginStatus = false;
    console.log(`${this.username} has been logged out.`);
  }

  subscribe(courseId) {}
}

class Teacher extends User {
  constructor(id, username, email, password, role, studentName, trackId) {
    super(id, username, email, password, role);
    this.TeacherName = studentName;
  }

  login(email, password) {
    this.verifylogin(email, password);
  }

  uploadCourse(courseId) {}
}

class Course {
  constructor(courseId, title, description) {
    this.courseId = courseId;
    this.title = title;
    this.description = description;
  }
}

let student1 = new Student(
  1,
  "jamesquinn",
  "jamesquinn@gmail.com",
  "student1",
  "student",
  "James Quinn",
  "B"
);
student1.login("jamesquinn@gmail.com", "student1");
console.log(student1.loginStatus);
student1.logout();
console.log(student1.loginStatus);
//console.log(student1)
