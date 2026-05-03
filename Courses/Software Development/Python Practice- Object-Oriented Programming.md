---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: python-practice-object-oriented-programming
url: "https://www.linkedin.com/learning/python-practice-object-oriented-programming"
duration_minutes: 12
duration: 12m
level: Advanced
updated: 9/13/2023
learners: 77221
skills:
  - Python (Programming Language)
  - Object-Oriented Programming (OOP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH7193iBIAhRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902250796?e=2147483647&amp;v=beta&amp;t=wYPtpWYN0JZsAvinlsPMrB-UXjQyO_mi4Lxme3YxQdU"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
prev_courses:
  - '[[Python Practice- Collections]]'
next_courses:
  - '[[Building the Classic Snake Game with Python]]'
path_nav: '[{"path":"Python Hands-On Practice","position":5,"total":14,"prev":"Python Practice- Collections","next":"Building the Classic Snake Game with Python"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/object-oriented-programming-oop
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Practice-%20Object-Oriented%20Programming.md)

![Python Practice: Object-Oriented Programming](https://media.licdn.com/dms/image/v2/D560DAQH7193iBIAhRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692902250796?e=2147483647&amp;v=beta&amp;t=wYPtpWYN0JZsAvinlsPMrB-UXjQyO_mi4Lxme3YxQdU)

# Python Practice: Object-Oriented Programming

> Python is a popular programming language that can be used to work with data, build applications, and solve problems, on many types of devices. This code challenge with Scott Simpson, Senior Staff Instructor at LinkedIn Learning, is designed to help you test your knowledge of object-oriented programming in Python. The course includes five code challenges that cover the concepts around object-orient

> [LinkedIn Learning](https://www.linkedin.com/learning/python-practice-object-oriented-programming) | 12m | Advanced | 77K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Try your Python programming skills](#try-your-python-programming-skills)
  - [What you should know](#what-you-should-know)
  - [Exploring the Lab environment](#exploring-the-lab-environment)
- [**1. Code Challenges**](#1-code-challenges) (5 videos)
  - [Solution: Define a class and create objects](#solution-define-a-class-and-create-objects)
  - [Solution: Add a method to a class](#solution-add-a-method-to-a-class)
  - [Solution: Refactor a class](#solution-refactor-a-class)
  - [Solution: Protect an attribute](#solution-protect-an-attribute)
  - [Solution: Compare instances](#solution-compare-instances)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Try your Python programming skills](https://www.linkedin.com/learning/python-practice-object-oriented-programming/try-your-python-programming-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/try-your-python-programming-skills?u=76281980&t=0)** - [Scott] [[Python (Programming Language)|Python]] is one of the most popular programming languages in the world. Knowledge of Python opens the door to working with data, building applications, and solving problems with code that can run on many types of devices. In this Code Challenge course, you can test your knowledge of [[Object-Oriented Programming (OOP)|object-oriented programming]] and Python to build your confidence working with the objects in classes that allow us to model real world systems in code. And I've put together five code challenges that cover the concepts around object-oriented programming that you'll use when working in Python. Build and test your solutions to these challenges in the built-in interactive coding environment. No special software required. And when you finish your solution to each challenge, take a look at my solution videos to see how I solved them. I'm Scott Simpson, senior staff instructor at [[LinkedIn]] Learning. If you're ready to try out your [[Python Object-Oriented Programming]] skills, let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), [[LinkedIn]] (1)
> **CLI Commands:** python (5)
> **Speakers:** - [scott] (1)

#### [What you should know](https://www.linkedin.com/learning/python-practice-object-oriented-programming/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/what-you-should-know?u=76281980&t=0)** - [Instructor] In this Code Challenge course, I expect you to be familiar with using objects in [[Python (Programming Language)|Python]]. We'll work with various aspects of [[Object-Oriented Programming (OOP)|object-oriented programming]] like classes, instances, inheritance, and so on. The challenges start out with the fundamentals and become more involved as the course moves on. If you need to refresh your Python knowledge, take a look at these courses in the [[LinkedIn]] Learning Library. To work on these challenges, you don't need to install any separate software. The coding challenge environment is part of the LinkedIn Learning course page. We'll explore how that works in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** python (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the Lab environment](https://www.linkedin.com/learning/python-practice-object-oriented-programming/exploring-the-lab-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/exploring-the-lab-environment?u=76281980&t=0)** - [Instructor] This course consists of automated code challenges that appear when you click on the challenge links in the courses table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the courses videos. We recommend using a desktop browser for the best experience with code challenges but you can use the [[LinkedIn]] Learning mobile app if you prefer. The code challenge has four areas. Instructions are in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left. You can use these drag handles to allocate space as you like. To get even more horizontal space for the code editors, you can collapse the courses table of contents on the left. Each challenge has instructions that included description of the challenge and the challenges parameters and desired result. Parameters are values that are passed into your code and they have to be of a particular data type. The return value also has to be of a particular type and you'll also see that noted in the instructions. The constraints section has useful information about the parameters that will be passed in. The examples show different parameter values and what result would be returned for each of those test cases. Create your answer in the top right code editor. There are comments in the starting code showing where to put your solution.
>
> **[1:39](https://www.linkedin.com/learning/python-practice-object-oriented-programming/exploring-the-lab-environment?u=76281980&t=99)** When you click test my code, you'll see a message indicating whether your code returned a correct result. If your code isn't successful, you can ask for help.
>
> **[1:57](https://www.linkedin.com/learning/python-practice-object-oriented-programming/exploring-the-lab-environment?u=76281980&t=117)** The show expected result and show hints variables determine whether you see the expected output and any hints. Change them to a value of true to control the output. The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases.
>
> **[2:25](https://www.linkedin.com/learning/python-practice-object-oriented-programming/exploring-the-lab-environment?u=76281980&t=145)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you finish each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Code Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Solution: Define a class and create objects](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-1-define-a-class-and-create-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-1-define-a-class-and-create-objects?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge. First, I defined a class called cake. Within that I built an initializer that takes four terms, the object itself and kind, price and slices. These last three values are assigned to instance attributes with self.kind, self.price and self.slices. When a new object is instantiated from this class we'll pass in values that will become assigned as attributes to that new instance. Then I defined an instance method called describe, which also takes the object itself as an argument. That returns a formatted string using the instance attributes. Once the class is defined, I moved on to create two new instances of that class, spice cake and chocolate cake. When I run this, the system will check whether the described method for each of these instances returns what it should and it also checks whether these items are instances of the cake class. I'll click and there we go. My solution passes the tests.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Add a method to a class](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-2-add-a-method-to-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-2-add-a-method-to-a-class?u=76281980&t=0)** - [Instructor] To solve this challenge, we need to create a way of keeping track of how many slices remain. So here in the initializer, I'll set self.slices remaining to the value of slices when the instance is created. Then I'll define the method sell, which takes self as an argument because it's an instance method and I'll add the variable count to represent how many slices are being sold when the method is called. Within this method, we'll run a few checks. First, we'll see if the count of slices being sold is less than or equal to zero. If it is, we'll return the string that says we can't sell zero or negative slices, and we won't do anything to the value of self.slices remaining. Next, we'll check whether subtracting the count of slices sold from our slices remaining would result in a negative number. If it does, we'll return the string that says we can't sell more slices than we have. It's fine if this situation results in zero slices remaining because then we'll have sold our whole cake and it'll be time to bring in a new cake. And again, here we won't do anything to the value of self.slices remaining. Finally, with those two checks out of the way, we'll reduce the number of slices remaining by the count of slices we're selling in this transaction, and we'll return this string that says how many slices remain. Every time I run this code, we'll set up two brand new cakes. That's part of the initial code though. It's not something I added. Looking at how the code will be called, we can see that we'll sell five slices of the spice cake which because it started with eight slices will result in three slices remaining. Then we'll try to sell four slices and that should fail because we only have three left. Then we'll try to sell zero and negative one slices of chocolate cake, which has six slices to start.
>
> **[1:36](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-2-add-a-method-to-a-class?u=76281980&t=96)** Alright, I'll run my code and see if it's correct. Looks like it is.

> [!info]- Semantic Content
>
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Refactor a class](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-3-refactor-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-3-refactor-a-class?u=76281980&t=0)** - [Instructor] To solve this challenge, I first created a class called item. This class has an initializer that takes three properties; self, item type, and price. Then, I set the item type and price attributes. This will act as my super class for any other classes that need to inherit these type and price attributes. Next, I modified the cake class with parentheses and the item class to tell it to inherit from item. Within the cake initializer, I make a call to super, which is item in this case, and I call that super class or parent class's initializer with a value cake, a lowercase, as the challenge asked, and the price that is passed into the cake class initializer when an object is instantiated. Because the price attribute is being handled by the super class, I removed it from this class. Instances of cake will still have a price attribute but now that comes from the parent class instead of this one. Then, I use these lines here to create my two cake instances. Looking at the evaluation down here, I should have four results, all of which should be true. We'll be checking if the spice cake is an instance of the cake class and whether cake is a subclass of item. We'll also check that the spice cake has a price and we'll check that the spice cake has the item of type cake. Remember that both of these are coming from the super class now. I'll run my code, and great, all four are true. This answer passes the test.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Protect an attribute](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-4-protect-an-attribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-4-protect-an-attribute?u=76281980&t=0)** - [Instructor] Here's how I solved this challenge, and there's two things going on here that we need to recognize. First, we'll change the price attribute to start with an underscore. In [[Python (Programming Language)|Python]], a leading underscore is a convention to say, even though you can access this, please don't, pretend it's not there, pretend it's private. Other languages make this more robust, but Python doesn't. And so, that's all we can do to sort of make a private attribute. Second, I added a method called price, which when called returns self._price, our semi-private attribute that stores the price of the item. However, above that, I added the at property decorator, which treats this method like the getter for a regular attribute. Ordinarily, when we define an attribute, it has a getter and setter method. In our case here, we don't want price to have a setter method. So we can use at property, which is a shorthand for basically only having a getter method defined. We could further define a setter, but if we don't want this price property to be changed, because there's no setter for price, when we try to get price, we get an attribute error. The same as if we had tried to set cake.giraffe, or cake.moonbase, or whatever, there's no setters for those either. It's also important to recognize that if we had tried to just use self.price without the underscore, and then use this property here to only ever return a value and never have a setter for it, instantiating this class would always fail because its own initialization would run up against this property here, and we'd never be able to make a new cake object. And cake objects are delicious, so we use the underscore semi-private attribute trick to get around that.
>
> **[1:34](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-4-protect-an-attribute?u=76281980&t=94)** Okay, that was a lot of explanation for not very much code. So let's see if this works. I'll run this, and there we go. I get the correct answer, true, which I can see comes from this try accept block down here. When we tried to set the spice cake price to a new value, and we got an attribute error back, that changed the result here to true.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** make (3), python (2)
> **Definitions:** is a  (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Compare instances](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-5-compare-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-5-compare-instances?u=76281980&t=0)** - [Instructor] To solve this challenge, I used double underscore methods or dunder methods to define the behavior of a quality comparison, greater than comparison, and less than comparison. These are represented by __eq__, __gt__, and __lt__. Instances of a class do have an equality comparison already but it doesn't operate the way we need it to, so we're overriding that here. Instances don't have greater than or less than comparisons predefined, so we define the behavior of those here too. Each of my methods takes an argument of self, which is the instance that the comparison is being called on, what we would think of as the left side of a comparison operation. The methods also take a value of other, which is the value on the right side of the comparison. So, when we ask if spice_cake is equal to chocolate_cake spice_cake is on the left and is self, and chocolate_cake is on the right and is other. Within the methods, I return the value of the self item compared with the value of the other item. So in the equality check, I use ==, in greater than, I use >, and in less than, I use <. Each of these calculations will result in either true or false. Here in the code that checks the result, we can see that each comparison is being checked to see if it raises an exception. If it does, we'll return that exception and continue with the program, setting whichever result had a problem to none. Once all the cases are handled, we'll get back a true or false value for each of them.
>
> **[1:34](https://www.linkedin.com/learning/python-practice-object-oriented-programming/solution-5-compare-instances?u=76281980&t=94)** I'll run this and see if the result is correct. Looks like it is. In most cases, it doesn't make sense to simply ask whether two instances of a class are larger or smaller than one another. So we need to define our own logic to return that result.

> [!info]- Semantic Content
>
> **Code Identifiers:** spice_cake (2), chocolate_cake (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-practice-object-oriented-programming/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-practice-object-oriented-programming/next-steps?u=76281980&t=0)** - [Narrator] If you were able to solve these challenges, congratulations, and if not, take some time to refresh your knowledge of [[Python (Programming Language)|Python]] and come back and try again. If you're ready to move on and solve more challenges, take a look at our other interactive Python Code challenge courses here on [[LinkedIn]] Learning. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Python (Programming Language)
- Object-Oriented Programming (OOP)

## Path Context

### In [[Python Hands-On Practice]]
← [[Python Practice- Collections]] | **5 of 14** | [[Building the Classic Snake Game with Python]] →

## Appears In

- [[Python Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Python Object-Oriented Programming]] — Python (Programming Language), Object-Oriented Programming (OOP)
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)

---

[↑ Back to top](#)