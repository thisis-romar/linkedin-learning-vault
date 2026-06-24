---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: javascript-practice-object-oriented-programming
url: "https://www.linkedin.com/learning/javascript-practice-object-oriented-programming"
duration_minutes: 15
duration: 15m
level: Advanced
updated: 9/13/2023
learners: 20265
skills:
  - JavaScript
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFaDTDoJostiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692903082788?e=2147483647&amp;v=beta&amp;t=G_Umkq2gwOUQY-kQE9Q5I_1JzvD5zj8gLRI8DZsr4Bc"
linkedin_topic: Software Development
learning_paths:
  - '[Explore a Career as a JavaScript Developer](../../Paths/Software%20Development/Learning%20Paths/Explore%20a%20Career%20as%20a%20JavaScript%20Developer.md)'
prev_courses:
  - '[JavaScript- Five Advanced Challenges and Concepts](JavaScript-%20Five%20Advanced%20Challenges%20and%20Concepts.md)'
path_nav: '[{"path":"Explore a Career as a JavaScript Developer","position":5,"total":5,"prev":"JavaScript- Five Advanced Challenges and Concepts","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript%20Practice-%20Object-Oriented%20Programming.md)

![JavaScript Practice: Object-Oriented Programming](https://media.licdn.com/dms/image/v2/D560DAQFaDTDoJostiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692903082788?e=2147483647&amp;v=beta&amp;t=G_Umkq2gwOUQY-kQE9Q5I_1JzvD5zj8gLRI8DZsr4Bc)

# JavaScript Practice: Object-Oriented Programming

> Unlike class-based programming languages like Java, JavaScript is a prototype-based procedural language. This means it supports functional and object-oriented programming—with less rigid syntax, greater extensibility, and fewer rules. In this hands-on, interactive course, join instructor Emma Bostian to practice performing basic object-oriented programming tasks in JavaScript to boost your technic

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming) | 15m | Advanced | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Object oriented programming in JavaScript](#object-oriented-programming-in-javascript)
  - [What you should know](#what-you-should-know)
  - [Introduction to CoderPad](#introduction-to-coderpad)
- [**1. CoderPad Challenges**](#1-coderpad-challenges) (5 videos)
  - [Solution: Create a roster with functions](#solution-create-a-roster-with-functions)
  - [Solution: Create a function with Object.create()](#solution-create-a-function-with-objectcreate)
  - [Solution: Create a country with classes](#solution-create-a-country-with-classes)
  - [Solution: Create a class with get and set](#solution-create-a-class-with-get-and-set)
  - [Solution: User/admin class with private properties](#solution-useradmin-class-with-private-properties)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Object oriented programming in JavaScript](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/object-oriented-programming-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/object-oriented-programming-in-javascript?u=76281980&t=0)** - [Instructor] This coding challenge will test your knowledge of [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) concepts with [JavaScript](../../Skills/Software%20Development/JavaScript.md). You'll learn how to create JavaScript objects with function syntax and class syntax. You'll learn how to declare private variables and functions and how to use getters and setters. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/what-you-should-know?u=76281980&t=0)** - [Instructor] Before jumping into this coding challenge, it's important to have some experience with [JavaScript](../../Skills/Software%20Development/JavaScript.md) variables and functions. Additionally, it will be helpful if you're comfortable working with JavaScript arrays and objects. We'll use array methods like filter, reduce, and map. You also may want to learn about JavaScript objects before taking these challenges. While we'll learn some high level concepts, this course isn't meant to teach you all about [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md). To learn more about JavaScript object-oriented programming check out this course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to CoderPad](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/introduction-to-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/introduction-to-coderpad?u=76281980&t=0)** - [Instructor] On the top left, you'll see a list of parameters and functions that your [JavaScript](../../Skills/Software%20Development/JavaScript.md) objects will take. Parameters are values that will be passed into your code and they have to be of a particular data type. The return value also has to be of a particular type. You'll also see that noted here. The constraints section has useful information about the parameters that will be passed in. The examples show different parameter values and what results would be returned for each test case. Create your answer in the top right of the code editor. There are comments in the starting code showing you where to put your solution. When you click Test my code, you'll see a message indicating whether your code returned a correct result. If your code isn't successful, you can ask for help. The showExpectedResult and showHints variables determine whether you'll see the expected result and any hints. Change them to a value of true to control the output.
>
> **[1:13](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/introduction-to-coderpad?u=76281980&t=73)** The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases.
>
> **[1:28](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/introduction-to-coderpad?u=76281980&t=88)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you've finished each code challenge, return to the course's table of contents, and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** showexpectedresult (1), showhints (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. CoderPad Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Create a roster with functions](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-course-roster-with-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-course-roster-with-functions?u=76281980&t=0)** - [Instructor] First, let's create our student object. We'll use [JavaScript](../../Skills/Software%20Development/JavaScript.md) functions for this. Student takes two parameters, name and grades, which is an array of integers from 0 to 100.
>
> **[0:18](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-course-roster-with-functions?u=76281980&t=18)** Next, let's create the getGrades function. We'll use the prototype dot notation on the student function to create this. It will return the students' grades. We can create the checkIsPassing function in the same way. We'll use the calculateGPA function that was provided to us to get the students' GPA. The calculateGPA function takes a list of the students' grades and uses array.reduce to sum the total of all the grades. It then divides that sum by the total number of grades and floors the decimal value. This gives us the GPA. Once we get the GPA, we'll return true if the GPA is greater than 70.
>
> **[1:19](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-course-roster-with-functions?u=76281980&t=79)** Now we're ready to create our CourseRoster object. CourseRoster takes two parameters: roster, which is a list of student objects, and a teacher, which is a string. Let's define the getRoster function on the CourseRoster prototype. It will iterate through each student in the roster using array.forEach and concatenate their names with a comma.
>
> **[2:19](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-course-roster-with-functions?u=76281980&t=139)** Lastly, we can create the returnGraduatingStudents function. We'll filter the array of students in the roster to return only those who are passing. We'll use student.checkIsPassing to check if the student will graduate.
>
> **[2:51](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-course-roster-with-functions?u=76281980&t=171)** If we run our code, we can see all of our tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** checkispassing (2), calculategpa (2), getgrades (1), getroster (1), foreach (1)
> **Env Vars:** gpa (4)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a function with Object.create()](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980&t=0)** - [Instructor] Let's first create the book object. We'll use [JavaScript](../../Skills/Software%20Development/JavaScript.md) functions to do this. The book function takes four parameters. Title, author, quantity, and edition. We'll use this.property name to set the properties on the instance of the book object. (keyboard keys clicking)
>
> **[0:28](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980&t=28)** Now, we can define the set addition function using object.define property. This function allows us to either define a new property on an object, or modify an existing property. (keyboard keys clicking)
>
> **[1:03](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980&t=63)** Now, we can create the cell method on the book prototype. We can set this method on the prototype with book.prototype.cell. If the quantity is greater than 0, we will reduce the quantity by 1.
>
> **[1:25](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980&t=85)** Now we're ready to create the comic book object. We'll also use a JavaScript function to define this object. Comic book will take four parameters, title, author, quantity, and graphic artist. (keyboard keys clicking) It will not have an edition. Since there is an inherited relationship between book and comic book, as all comic books are books, but not all books are comic books, we must use the call method to pass three inherited properties, title, author, and quantity up to the book constructor.
>
> **[2:01](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980&t=121)** Lastly, we need to set the prototype of the comic book object to the book object. We will use the object.create function to do this. We'll pass book.prototype as the first argument to object.create to create the inherited relationship. Then, we'll establish the constructor for comic book as the comic book object. (keyboard keys clicking)
>
> **[2:33](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-book-function-with-object-create?u=76281980&t=153)** When we run our code, we can see all of the test cases pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Non-Speech:** (keyboard keys clicking) (4)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a country with classes](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-country-with-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-country-with-classes?u=76281980&t=0)** - [Instructor] To create the Country class, we'll use [JavaScript](../../Skills/Software%20Development/JavaScript.md) class notation. The Country class constructor takes four parameters: name, continent, currency, and population. We'll place these inside the constructor function.
>
> **[0:37](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-country-with-classes?u=76281980&t=37)** To get the overview of a country, we can create a getOverview function inside of a class. This will return the template literal provided in the requirement section of this challenge.
>
> **[1:17](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-country-with-classes?u=76281980&t=77)** Lastly, we'll create the setPopulation function on the class. It takes one parameter newPopulation and updates the population property.
>
> **[1:38](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-country-with-classes?u=76281980&t=98)** If we run our solution, we can see all the tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** getoverview (1), setpopulation (1), newpopulation (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a class with get and set](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-food-ordering-class-with-getters-and-setters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-food-ordering-class-with-getters-and-setters?u=76281980&t=0)** - [Instructor] To create the Order class, we'll use the Class keyword. Inside the constructor function, the object takes three parameters: restaurant, total, and customer. There are two additional properties we need to add to the class: foodStatus, which is initialized to zero, and validFoodStatuses, which is an array containing the integers zero through three.
>
> **[0:51](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-food-ordering-class-with-getters-and-setters?u=76281980&t=51)** Now we can make the getter function for orderStatus. To show the appropriate orderStatus message, I'll use a switch statement that returns a different string for different food status codes.
>
> **[1:54](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-food-ordering-class-with-getters-and-setters?u=76281980&t=114)** Lastly, I'll create the setter function for orderStatus. It takes one parameter, the new status. I'll first check if the food status is valid by searching the validFoodStatuses array for the new status value. If it's a valid status, update the food status value. Otherwise, set food status to null.
>
> **[2:37](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-food-ordering-class-with-getters-and-setters?u=76281980&t=157)** When we run the code, we can see all of our tests are passing.

> [!info]- Semantic Content
>
> **Code Identifiers:** orderstatus (3), validfoodstatuses (2), foodstatus (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: User/admin class with private properties](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-user-admin-class-with-private-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-user-admin-class-with-private-properties?u=76281980&t=0)** - [Instructor] We'll create the user object using [JavaScript](../../Skills/Software%20Development/JavaScript.md) class syntax. The user class constructor takes two parameters, username and password. Since password is a private variable, we'll prepend the property name with a hash symbol. Additionally, we'll declare password as a private variable above the constructor. (keyboard clacking)
>
> **[0:32](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-user-admin-class-with-private-properties?u=76281980&t=32)** Now we can create the resetPassword function. This takes one parameter, newPassword. We don't want the user to be able to directly alter the password, so we'll create another private function that will do the updating. We'll call our private function updatePassword. It will take the newPassword parameter as well. To make this function private, we'll prepend a hash symbol to the function name like we did with our password variable. (keyboard clacking)
>
> **[1:14](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-user-admin-class-with-private-properties?u=76281980&t=74)** Back inside our resetPassword function, we can call our private updatePassword function and pass a new password. Then we'll return the string, Your password has been updated. (keyboard clacking)
>
> **[1:36](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-user-admin-class-with-private-properties?u=76281980&t=96)** Now we can create the admin class. Since admin is a special type of user, we'll inherit from the user class with the extends keyword. Admin also takes a username and password. We need to pass these values up the prototype chain to the user class. To do this, we'll call the super function, and pass username and password through. We'll also add a variable to the admin constructor called isAdmin. We'll set this property to true. (keyboard clacking)
>
> **[2:16](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/solution-create-a-user-admin-class-with-private-properties?u=76281980&t=136)** Lastly, we need to create our deleteUser function. It takes one parameter, a string containing the username to delete. This function just returns a template literal stating that the user we passed into the function has been deleted. (keyboard clacking) When we run our code, we can see all of our tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** resetpassword (2), newpassword (2), updatepassword (2), isadmin (1), deleteuser (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-practice-object-oriented-programming/next-steps?u=76281980&t=0)** - [Instructor] Congratulations! You finished [JavaScript](../../Skills/Software%20Development/JavaScript.md) Coding Labs for [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md). You are now ready to continue on with your JavaScript journey. If you haven't learned any JavaScript frameworks or libraries, now is a great time to start. I recommend learning one, like [Vue](../../Skills/Web%20Development/Vue.js.md),js or [React](../../Skills/Web%20Development/React.js.md). I hope you enjoyed this short coding lab. For more fun challenges, check out the full library of coding challenges on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Vue](../../Skills/Web%20Development/Vue.js.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Emma Bostian](../../Instructors/Software%20Development/Emma%20Bostian.md)

## Skills Covered

- JavaScript

## Path Context

### In [Explore a Career as a JavaScript Developer](../../Paths/Software%20Development/Learning%20Paths/Explore%20a%20Career%20as%20a%20JavaScript%20Developer.md)
← [JavaScript- Five Advanced Challenges and Concepts](JavaScript-%20Five%20Advanced%20Challenges%20and%20Concepts.md) | **5 of 5**

## Appears In

- [Explore a Career as a JavaScript Developer](../../Paths/Software%20Development/Learning%20Paths/Explore%20a%20Career%20as%20a%20JavaScript%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)