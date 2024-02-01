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
      console.log(`Incorrect login details! Access denied, please check login details.`);
    }
  }

  login(email, password) {
    this.verifylogin(email, password);
  }

  logout() {
    this.loginStatus = false;
  }
}

/* INHERITANCE: STUDENT Class inherits the features of USER class*/
class Student extends User {
  constructor(id, username, email, password, role, studentName, trackId) {
    super(id, username, email, password, role);
    this.studentName = studentName;
    this.trackId = trackId;
    this.subscribedCourses = [];
  }
  /* POLYMORPHISM: Applying Polymorphism by overriding the functionality of the login
and logout method for Student Class*/

  login(email, password) {
    this.verifylogin(email, password);
    console.log(`\nWelcome to Teachable, ${this.studentName}, happy learning!`);
  }

  logout() {
    this.loginStatus = false;
    console.log(`${this.studentName} just logged out.`);
  }

  subscribe(course) {
    this.subscribedCourses.push(course);
    console.log(`Course subscribed by ${this.studentName}: ${course.title}`);
  }

  /*ENCAPSULATION: wrapping up a bunch of code into a single unit called getCourseDetails to enable you view the details of
  courses a student has subscribed to */
  
  getCourseDetails() {
    console.log(`\nLIST OF COURSES ${this.studentName} HAS SUBSCRIBED TO:`);
    for (let course of this.subscribedCourses) {
      for (let key in course) {
        console.log(`${key}: ${course[key]}`);
      }
      console.log(`************`);
    }
  }
}

/* INHERITANCE: TEACHER Class inherits the features of USER class*/
class Teacher extends User {
  constructor(id, username, email, password, role, teacherName) {
    super(id, username, email, password, role);
    this.teacherName = teacherName;
    this.uploadedCourses = [];
  }

  login(email, password) {
    this.verifylogin(email, password);
    console.log(`\nWelcome to Teachable, ${this.studentName}, happy learning!`);
  }

  logout() {
    this.loginStatus = false;
    console.log(`${this.teacherName} just logged out.`);
  }

  postCourse(course) {
    this.uploadedCourses.push(course);
    console.log(
      `Course uploaded by ${this.teacherName}: ${course.title}`
    );
  }
}

class Course {
  constructor(courseId, title) {
    this.courseId = courseId;
    this.title = title;
  }
}








let mathcourse = new Course("MTH101", "Calculus");
let englishcourse = new Course("ENG101", "INTRODUCTION TO ENGLISH");
let chemcourse = new Course("CHEM101", "INTRODUCTION TO CHEMISTRY");

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

student1.subscribe(mathcourse);
student1.subscribe(englishcourse);
student1.subscribe(chemcourse);

student1.getCourseDetails();

student1.logout();
