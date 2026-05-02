---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: java-generic-classes-14576260
url: "https://www.linkedin.com/learning/java-generic-classes-14576260"
duration_minutes: 158
duration: 2h 38m
level: Intermediate
updated: 2/10/2022
learners: 45390
skills:
  - Generic Programming
  - Java
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF4tQxK1or_Qg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1644347162461?e=2147483647&amp;v=beta&amp;t=82M3Js_qxbEHJ5o5nibZaO8oOAvz54kUEsiIibnqYCA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Building Your Java Skills]]'
prev_courses:
  - '[[Java Lambdas And Streams]]'
next_courses:
  - '[[Java- Testing with JUnit]]'
path_nav: '[{"path":"Building Your Java Skills","position":2,"total":6,"prev":"Java Lambdas And Streams","next":"Java- Testing with JUnit"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/generic-programming
  - skill/java
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Java-%20Generic%20Classes.md)

![Java: Generic Classes](https://media.licdn.com/dms/image/v2/C560DAQF4tQxK1or_Qg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1644347162461?e=2147483647&amp;v=beta&amp;t=82M3Js_qxbEHJ5o5nibZaO8oOAvz54kUEsiIibnqYCA)

# Java: Generic Classes

> Generics in Java are popular and widely used in all kinds of project development—Core Java projects, web application projects, web services, and more. It’s an indispensable capability in the Java language and provides the power of eliminating errors at compile time itself instead of resulting in runtime problems. In this course, Ketkee Aryamane goes hands-on with generics in Java. She starts with 

> [LinkedIn Learning](https://www.linkedin.com/learning/java-generic-classes-14576260) | 2h 38m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Generics in Java](#generics-in-java)
  - [Prerequisites for this course](#prerequisites-for-this-course)
- [**1. Fundamentals of Generics**](#1-fundamentals-of-generics) (5 videos)
  - [Understand the need for generics](#understand-the-need-for-generics)
  - [Understand generics in Java](#understand-generics-in-java)
  - [Terms in generics](#terms-in-generics)
  - [Rules and naming conventions](#rules-and-naming-conventions)
  - [Advantages of generics](#advantages-of-generics)
- [**2. Generic Classes and Methods**](#2-generic-classes-and-methods) (7 videos)
  - [Generic classes/interface use case](#generic-classesinterface-use-case)
  - [Create a generic class demo](#create-a-generic-class-demo)
  - [Understand generic methods and constructors](#understand-generic-methods-and-constructors)
  - [Implement a generic method as a utility](#implement-a-generic-method-as-a-utility)
  - [Using bounded types](#using-bounded-types)
  - [Challenge: Write code using generic classes/bounded types](#challenge-write-code-using-generic-classesbounded-types)
  - [Solution: Write code using generic classes/bounded types](#solution-write-code-using-generic-classesbounded-types)
- [**3. Generics: Deep Dive**](#3-generics-deep-dive) (7 videos)
  - [Generic class hierarchies](#generic-class-hierarchies)
  - [Type argument hierarchies](#type-argument-hierarchies)
  - [Understand type erasure in generics](#understand-type-erasure-in-generics)
  - [Understand bridge methods](#understand-bridge-methods)
  - [Understand type inference and target types](#understand-type-inference-and-target-types)
  - [Applying wildcard arguments](#applying-wildcard-arguments)
  - [Restrictions on generics](#restrictions-on-generics)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here](#where-to-go-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Generics in Java](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=0)** - [Ketkee] When you write code, it is always better to have bugs and programming issues identified and addressed at compile time, rather than them showing up at runtime.
>
> **[0:11](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=11)** Generics in [[Java]] provides a way to define parameterized types.
>
> **[0:16](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=16)** It implements strict type safety checks at compile time and helps eliminate bugs at runtime.
>
> **[0:22](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=22)** It also lets you impose restrictions on parameterized types to ensure that your application becomes more robust.
>
> **[0:30](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=30)** The feature of wild cards in generics further helps to build flexible solutions.
>
> **[0:36](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=36)** It is an indispensable feature in the Java language today and one of the most powerful tools in a Java developer's toolkit.
>
> **[0:45](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=45)** I am Ketkee Aryamane.
>
> **[0:47](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=47)** I work as a Java developer, technical trainer, and writer.
>
> **[0:51](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=51)** Join me in my course, where we will start off with the fundamentals, then do a deep dive and implement code examples to understand these concepts better.
>
> **[1:01](https://www.linkedin.com/learning/java-generic-classes-14576260/generics-in-java?u=76281980&t=61)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4)
> **Definitions:** is an  (1)
> **Speakers:** - [ketkee] (1)

#### [Prerequisites for this course](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=0)** - [Instructor] In order to make the most out of this course, there are a few things to consider.
>
> **[0:05](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=5)** You should have a solid foundation of [[Object-Oriented Programming (OOP)|object-oriented programming]] concepts in [[Java]].
>
> **[0:10](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=10)** This includes classes, objects, inheritance, encapsulation, and polymorphism.
>
> **[0:17](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=17)** Beginner-level knowledge of Java version 1.8 or above is required, along with the ability to write classes, methods, and run applications.
>
> **[0:27](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=27)** You should have the JDK, that is Java Development Kit Version 1.8, up and running in your environment.
>
> **[0:34](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=34)** It would be nice to have a good understanding of the collections framework in Java.
>
> **[0:39](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=39)** There are many demos in the course that cover a basic use of this framework.
>
> **[0:44](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=44)** Lastly, hands-on experience with any IDE, like IntelliJ or Eclipse would be great.
>
> **[0:50](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=50)** We will use IntelliJ Community Edition for this course.
>
> **[0:55](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=55)** It can be downloaded for free.
>
> **[0:57](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=57)** You can also use any other IDE of your choice.
>
> **[1:01](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=61)** Let us take a look at the exercise files for this course.
>
> **[1:05](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=65)** They have been listed movie-wise.
>
> **[1:07](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=67)** Each movie has two folders, One that is suffixed with b, which stands for beginning.
>
> **[1:13](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=73)** This would have the start state of the project.
>
> **[1:16](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=76)** The other folder is suffixed with e, which stands for end, and this contains the end state of the project.
>
> **[1:24](https://www.linkedin.com/learning/java-generic-classes-14576260/prerequisites-for-this-course?u=76281980&t=84)** All right then, with this information, let's dive right in and start learning Java Generics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Env Vars:** ide (2), jdk (1)
> **Versions:** version 1 (2)
> **Tools:** intellij (2)
> **Definitions:** stands for (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Fundamentals of Generics

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the need for generics](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=0)** - [Instructor] Let us understand the need for generics.
>
> **[0:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=3)** But before that, we will have to know a couple of things well, the first one is recap of a few common terms that we use in the [[Java]] language.
>
> **[0:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=11)** The first term is type.
>
> **[0:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=13)** Type is any class, interface or enumerated datatype.
>
> **[0:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=17)** And this type could be inbuilt, that is from the Java APIs, or it could be custom, that is developed by you.
>
> **[0:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=23)** An example of an inbuilt type from the Java APIs is the class string, the class object, or even the interfaces, like list, set, map, et cetera.
>
> **[0:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=34)** In your application, if you have a class called product, that is a type.
>
> **[0:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=38)** If somewhere in your code you have an interface called Bounceable that you coded, that is also a type.
>
> **[0:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=43)** The next term is object type reference.
>
> **[0:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=46)** This means that you have a variable which is of the object type.
>
> **[0:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=51)** Now object as we know is the super class of all the classes in Java.
>
> **[0:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=55)** So if we write code like this, object name equal to new object, this means that we have a variable name which is of the type object, so name becomes object type reference.
>
> **[1:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=69)** And then we have instance.
>
> **[1:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=71)** In Java, whenever you create an object of any class using the new keyboard, then we say we created an instance of the class, or alternately, we instantiated the class.
>
> **[1:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=83)** So for example, if you want to create an object of the ArrayList class, you would use the new keyword, followed by the name of the class, and then a pair of round brackets.
>
> **[1:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=92)** The round bracket signify the construct of call responsible for object creation process in Java.
>
> **[1:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=98)** Similarly, if you have a class called product and you want to create an object of that, you would say new product, followed by a pair of round brackets, and you would refer to it by a variable of the product type.
>
> **[1:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=110)** Let's go ahead and understand one more concept of generalized code.
>
> **[1:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=114)** In Java, one can always write generalized code using the object oriented programming principles of inheritance and polymorphism.
>
> **[2:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=122)** This means that if you have a logic that is implemented for a parent class, it will be available to all the child classes extending that parent.
>
> **[2:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=131)** So for example, if we write code like this, number number equal to new integer, and in a pair of round brackets, the value 10, this means that we created an object of the class integer, and we are referring to it by a variable which is of the number type.
>
> **[2:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=149)** Now number is a class in Java, and it is also the parent class of the integer class.
>
> **[2:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=155)** So we can create an object of the sub class and we can refer to it by a variable of the super class.
>
> **[2:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=162)** So all the implementation that is available in a number class will be carried ahead to the integer class.
>
> **[2:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=168)** taking a step further to this, since we know that object is the super class of all the other classes in Java, we can always write generalized code using object type references as well.
>
> **[3:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=180)** That is because an object type reference can point to an instance of any class.
>
> **[3:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=186)** So for example, if we write code like this, object value equal to new string, and in a pair of round brackets "Java," this means that we created an object of the string class, but we are to it by a variable value, which is of the object type.
>
> **[3:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=202)** So same thing again, you're creating instances of child classes, but you can definitely point to them by variables of the parent.
>
> **[3:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=211)** Let's write a simple piece of code in order to understand this better.
>
> **[3:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=215)** Let's go to the IDE, we are going to use the IntelliJ IDE, and let's create a fresh project.
>
> **[3:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=221)** So click on the new project button, and we'll create a Java project, a simple Java project.
>
> **[3:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=226)** We will choose Java 11 version for this course.
>
> **[3:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=230)** We do not want to select any library, let's just click on next.
>
> **[3:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=235)** We do not want to create the project from any kind of a template, so we'll skip option as well and click on next.
>
> **[4:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=242)** And let's give it a name, let's call it Generics, and then let's click on finish.
>
> **[4:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=248)** So now the project will open up in a window.
>
> **[4:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=252)** Under this, you have the source folder, the SRC folder, let's right click on it and create a package first.
>
> **[4:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=258)** So we'll call it com.[[LinkedIn]].generics.
>
> **[4:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=266)** And on this, I will write a class, let's call this NonGenericsCode.
>
> **[4:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=275)** Let's write the main method here so we can test out something quickly.
>
> **[4:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=279)** Inside this main method, let's create a variable of the list type.
>
> **[4:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=283)** So list is an interface coming from the collections API, Java.util package.
>
> **[4:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=288)** So let's do that.
>
> **[4:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=289)** And let's name this variable as languages.
>
> **[4:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=294)** Further, let's instantiate this to an ArrayList object.
>
> **[4:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=299)** Now, the list that we created on line number eight is a non-generics list.
>
> **[5:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=305)** This means, that you can add any type of data to this list.
>
> **[5:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=310)** So you can add string values, you can add integer values, or you could even add objects of your product class.
>
> **[5:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=318)** However, all the data that you add in this list will be treated as the object type.
>
> **[5:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=324)** This list is also ultimately called as a raw list, or a raw type.
>
> **[5:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=330)** Let's come on the next line and say languages.ad.
>
> **[5:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=334)** And if you look at the method signature of the ad, then you see that it is asking you to add something of the object type.
>
> **[5:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=343)** Let's go ahead and add languages, let's add English first.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=348)** On the next line, you could also do something like this, create a variable of the object type, let's call it value, and point this to an instance of the string type, and let's feed in a language to it, let's name it Swedish.
>
> **[6:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=367)** And then on the next line, you can say languages.add value.
>
> **[6:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=372)** This is also fine.
>
> **[6:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=373)** This is how basically you go ahead and write generalized code.
>
> **[6:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=377)** However, this approach of writing generalized code comes in with a couple of limitations, and those are the problems that we are trying to understand without generics.
>
> **[6:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=386)** The first one is, whenever you try to process these values that have been written with generalized code, you will need to do an explicit casting.
>
> **[6:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=397)** What does that mean?
>
> **[6:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=398)** Let's go back to the IDE, and let's write a method call here, say processLanguages, and let's pass that languages list to it.
>
> **[6:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=410)** This method does not exist as of now, so we will come out of the main method, and on line 15, let's write that process language as method.
>
> **[6:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=419)** So we'll say private static.
>
> **[7:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=422)** This method does not need to return anything as of now, so we will label the written type as void, and the name of the method, and a parameter of the type list, let's call it data.
>
> **[7:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=435)** So we chose a parameter of the type list because online number 12, we are passing list as an argument.
>
> **[7:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=441)** When we come inside this method on line 16, let's try to retrieve the value at the zeroth index of that data parameter, and take it into a string variable.
>
> **[7:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=453)** Now, why do we need a string variable?
>
> **[7:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=455)** That is because on line's number nine and 10, we added values of this string type, so we know that the list contains string values.
>
> **[7:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=464)** So let's go ahead and take a string variable and say, language.
>
> **[7:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=468)** And the way you get any value from any index inside a list is by the get method.
>
> **[7:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=474)** So data.get specify the index number zero in this case.
>
> **[7:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=479)** Unfortunately, this line does not compile.
>
> **[8:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=481)** And the error that you get is, the required type is string and you provided object.
>
> **[8:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=488)** So, as we said earlier, the list on line number eight is a raw list, you can add values of any type.
>
> **[8:16](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=496)** But anything that you add will be considered to be of the object type.
>
> **[8:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=502)** So on line 16, when you say data.get zero, the value that it yields is of the object type, but we are trying to capture it into a variable of the string type.
>
> **[8:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=514)** Now this is an incompatible operation, so the compiler stops you right there and doesn't allow it.
>
> **[8:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=520)** So then what do we do?
>
> **[8:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=521)** A simple solution to this is, you can cast the data.get zero value to the string type.
>
> **[8:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=528)** And casting is as simple as doing this, mentioning the type name in a pair of round brackets.
>
> **[8:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=536)** That's all.
>
> **[8:57](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=537)** So you took data.get zero, you cast it into the string type, and now you're okay to capture it into a string variable.
>
> **[9:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=545)** Let's go on the next line and just print that value to the console.
>
> **[9:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=551)** And let's run this method, and observe the console output.
>
> **[9:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=555)** Everything should go well, and we should get the data at the zeroth index, which is in our case, English.
>
> **[9:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=562)** So there we go.
>
> **[9:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=563)** We did get the English as an output on the console.
>
> **[9:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=566)** So what we did is, whenever we tried to process the values from that list data, the parameter that you have on line 15, we had to perform an explicit casting to the string type on line 16.
>
> **[9:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=578)** So if you do this everywhere in your application, then you're going to introduce a lot of clutter in your code, and that's not good.
>
> **[9:45](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=585)** The second problem with this approach of writing object type implementation, is that this code lacks type safety.
>
> **[9:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=593)** What is that?
>
> **[9:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=594)** Let's go back to the IDE, and on line number nine, instead of this English string, I will add a number, let's say 23, and let's run this code again.
>
> **[10:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=606)** And now let's see what we have on the console.
>
> **[10:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=609)** This time, we get an exception, class cast exception, and it says that java.lang.integer cannot be cast to Java.lang.String.
>
> **[10:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=621)** Hmm, so what happened here?
>
> **[10:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=623)** On line number nine, you added a number, an in integer, 23 to this list, and this is totally okay.
>
> **[10:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=629)** Because as we said earlier, you can add any type of values to that list.
>
> **[10:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=634)** However, when you came inside the process languages method on line 16, you try to say data.get zero, and cast that to a string type.
>
> **[10:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=646)** Now, the problem is, that Java detected that data.get zero is yielding you a number, and that number cannot be taken inside a string variable, and that is why it threw the class cast exception at run time.
>
> **[11:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=660)** But the question here is, if this is the case, why was the compilation on line number 16 successful?
>
> **[11:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=668)** That is because, when we cast data.get zero to a string type, the compiler trusted us.
>
> **[11:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=675)** The compiler assumed that we know what we are doing, that we were confident enough to cast that value to a string type.
>
> **[11:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=682)** However, when the code ran, Java runtime detected that you were trying to take the integer 23 into a string variable, and that is why it went ahead and threw that exception.
>
> **[11:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=694)** So this is the problem of type safety.
>
> **[11:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=697)** On line number nine, I just went ahead and added the value 23.
>
> **[11:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=702)** There was no safety ensured that I'm trying to add the correct thing in that list.
>
> **[11:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=708)** This is the type safety problem that comes in with the generalized code.
>
> **[11:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=713)** And then you see that the type safety problem leads you to that class cast exception, which is a runtime issue, and that's even more embarrassing for your application.
>
> **[12:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=721)** So, we have two issues: one is, when you try to process values with generalized code, you will need to perform explicit casting.
>
> **[12:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=729)** Second is, when you write such code, you do not have any kind of type safety guarantee.
>
> **[12:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-the-need-for-generics?u=76281980&t=734)** To solve these two problems, we have a very powerful feature in Java which is generics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (19), [[LinkedIn]] (1)
> **Definitions:** is a  (5), means that (5), is an  (2)
> **Env Vars:** ide (4), src (1), api (1)
> **UI Navigation:** click on (5), go to (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **Code Identifiers:** processlanguages (1)
> **Versions:** java 11 (1)

#### [Understand generics in Java](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=0)** - [Instructor] Let us now understand what is this generics feature all about.
>
> **[0:04](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=4)** Generics in [[Java]] gives you a way to define parameterized types.
>
> **[0:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=8)** This means that you can have classes and interfaces with parameters enabled on them.
>
> **[0:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=13)** These kind of classes and interfaces exist in the Java APIs Today.
>
> **[0:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=17)** You can also write such classes and interfaces of your own.
>
> **[0:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=21)** Let us understand this better by comparing pre and post generics code of the ArrayList class from the collections API.
>
> **[0:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=28)** Before the advent of generics the ArrayList definition looked like this, public class ArrayList and it is followed by an extends clause, and implements clause which is indicated by those dots on the slide, and then you have the curly pair of braces in which you have the entire code.
>
> **[0:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=44)** But we are not concerned about those details.
>
> **[0:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=46)** What we are interested in is this part at the beginning, public class ArrayList.
>
> **[0:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=52)** After the generics feature got introduced in the language, the definition of ArrayList changed to something like this, public class ArrayList, and now it is followed by a of angle brackets.
>
> **[1:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=63)** In between those angle brackets sits E that is marked in bold.
>
> **[1:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=67)** This E is called the type parameter.
>
> **[1:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=71)** And this is the parameter that has now been enabled on the class.
>
> **[1:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=75)** So if you look at the detailed code implementation of the ArrayList class, you'll find that this E will be replaced by any desired type argument that you pass when you instantiate the ArrayList class.
>
> **[1:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=89)** Let us now understand how can you invoke this generic type ArrayList.
>
> **[1:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=94)** So here we have the generic class, public class ArrayList of E, and now let's say you want to create an ArrayList which can hold values of integer type only.
>
> **[1:47](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=107)** In this case, you will instantiate ArrayList like this, new ArrayList, followed by a pair of angle brackets, and in between those brackets you mention the type argument.
>
> **[1:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=119)** In this case it'll be in integer because you want to create an ArrayList of integers.
>
> **[2:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=123)** This will be followed by a pair of round brackets and then the semicolon.
>
> **[2:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=127)** The round brackets is the constructor call which is part of the object creation process in Java.
>
> **[2:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=132)** So now you can think of this integer type replacing that parameter E that we saw in the ArrayList definition.
>
> **[2:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=141)** Similarly, let's say you want to create an a that holds string values.
>
> **[2:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=145)** Then you will invoke that ArrayList generic type by instantiating the ArrayList class like this.
>
> **[2:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=151)** New ArrayList of String followed by a pair of round brackets.
>
> **[2:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=155)** So now you can think of this String type replacing that parameter E in the ArrayList definition.
>
> **[2:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=163)** So you may think of this approach as restricting the kind of values that you're inserting in the ArrayList.
>
> **[2:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=169)** Not really, in most of the typical coding scenarios that we have, we do not want to mix values of integer and string type together in the same collection.
>
> **[3:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=180)** We always want that the collection or let's say a particular collection holds values only of a certain type.
>
> **[3:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=188)** If you're wondering what was that E in the definition of the ArrayList and why was it named like that.
>
> **[3:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=194)** Don't bother too much about it.
>
> **[3:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=195)** It is a part of the naming convention for type parameter which we will get to later.
>
> **[3:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=201)** This kind of a generic class can then hold all kinds of operations to be performed on a varied number of types.
>
> **[3:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=209)** And this offers developers an opportunity to develop generic [[Algorithms]].
>
> **[3:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=214)** Generics feature was introduced as a part of Java JDK 5.0 version, and it is one of the most indispensable features in the language today.
>
> **[3:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=224)** All the code of the collection API is written with generics.
>
> **[3:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=228)** Pick any framework from Java or the enterprise edition of Java and you'll see that generic is all over the place.
>
> **[3:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=235)** It is a vital feature that every Java developer should know and learn.
>
> **[4:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=240)** In order to understand generics invocation and the basic definition better, we can compare this with the method definition and invocation.
>
> **[4:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=248)** Let's see how.
>
> **[4:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=249)** Let's say you have a class Product and you have a method defined in it, public void additem, and it takes a parameter of the type item.
>
> **[4:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=258)** If you want to call this a or invoke this method you're going to do this.
>
> **[4:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=263)** You'll create an object of the Product class and after that, you'll call the method additem and this time you're going to pass an argument of the item type.
>
> **[4:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=272)** In this case an object of the item class.
>
> **[4:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=274)** Generic definition and invocation is very similar to this.
>
> **[4:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=278)** Let's see how.
>
> **[4:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=279)** If you look at the List generic type it looks like this, public interface List of E extends collection of E.
>
> **[4:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=286)** If you look at the ArrayList generic type it looks like this, public class ArrayList of E, extends AbstractList of E, implements List of E, et cetera.
>
> **[4:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=296)** If you want to invoke this generic definition you will write code like this.
>
> **[5:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=300)** List of Product data equal to new ArrayList of Product.
>
> **[5:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=305)** Let's see this piece by piece.
>
> **[5:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=307)** When you say List of Product data it means you created a reference variable data which is of the type List.
>
> **[5:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=314)** And this List is going to hold values only of the Product type.
>
> **[5:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=319)** So the Product type that is mentioned in the angle brackets is going to replace the parameter E that we saw in the List generic type.
>
> **[5:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=327)** Similarly, when you created an object of the ArrayList class, you said ArrayList of Product.
>
> **[5:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=333)** So now the Product type mentioned in the angle brackets again is going to replace E that we saw in the declaration of the ArrayList generic type.
>
> **[5:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=342)** Let's do one thing.
>
> **[5:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=343)** Let's rewrite a previous code with the generics feature and see the difference that it makes.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=348)** Let's go back to the IDE and I'll create a class.
>
> **[5:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=351)** This time let's label this as GenericsCode.
>
> **[5:58](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=358)** In this class we are going to write the same code more or less but we are going to write everything with the generics feature.
>
> **[6:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=363)** So let's start and create the List type of variable.
>
> **[6:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=368)** But this time, in addition to just writing List I'm going to follow it with a pair of angle brackets and I'm going to mention the type String, and then let's give a variable name to this.
>
> **[6:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=378)** Let's say Languages.
>
> **[6:20](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=380)** So what we did is we created a reference variable Languages which is of the List type, but this List is now going to hold values of the String type only.
>
> **[6:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=389)** So we invoked the generic type List on line number seven.
>
> **[6:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=394)** This is just a reference.
>
> **[6:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=395)** Let's also create the objects.
>
> **[6:36](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=396)** So we'll say new ArrayList.
>
> **[6:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=401)** Now the [[Microsoft Word|word]] ArrayList will again be followed by a pair of angle brackets, and I'm going to mention the type here as well, followed by the pair of round brackets, the constructor call which is the object creation process in Java.
>
> **[6:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=413)** And please note that the type argument String is exactly the same on both the sides of the assignment operator.
>
> **[7:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=421)** If you give it any different, it won't work.
>
> **[7:04](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=424)** Now let's come on the next line and say Languages.add.
>
> **[7:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=428)** Now if you look at the method signature, you observe that it is asking you to add something of the type String as opposed to object that we saw in our previous video.
>
> **[7:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=439)** So let's go ahead and add our languages.
>
> **[7:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=445)** Add Swedish.
>
> **[7:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=451)** Let's also call the method, ProcessLanguages.
>
> **[7:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=453)** It's the same thing that we did in the previous video and pass that Languages list as an argument.
>
> **[7:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=460)** Let's come out of the main method and write the private static void ProcessLanguages method and take a parameter of the type List.
>
> **[7:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=473)** So on line number eight we created a list with generics.
>
> **[7:58](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=478)** On line number 14, we have a parameter data which is of the type List.
>
> **[8:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=482)** But if you observe on line 14 the parameter List is not followed by angle brackets, and there are no arguments mentioned for types.
>
> **[8:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=491)** So this is still a raw type but the code compiles well, we are all good.
>
> **[8:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=497)** Now let's come on line 15 and say String Language equal to data.get zero.
>
> **[8:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=508)** Unfortunately this line still doesn't come by but we thought that we are using generics and now we don't have to do the casting, correct?
>
> **[8:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=515)** But the problem here is that on line number 14 the parameter data, which is of the list type is still a raw type.
>
> **[8:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=522)** If you want utilize the complete power of generics we need to invoke the generics even for this parameter.
>
> **[8:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=528)** So I'm now going to modify, follow this List with a pair of angle brackets and mention the type here as well.
>
> **[8:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=536)** The moment we do this, the compilation on line 15 is successful, and then you can go ahead and print the Language variable to the console.
>
> **[9:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=548)** So if you run this code everything will definitely go well and we will have English printed on a console.
>
> **[9:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=557)** So the first issue that we were talking about in the previous video is solved.
>
> **[9:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=561)** We do not have to do any kind of explicit casting on line number 15, that's gone.
>
> **[9:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=567)** So the clutter that we introduced is gone.
>
> **[9:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=570)** The second issue was about type safety.
>
> **[9:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=572)** Let's understand how that works with generics.
>
> **[9:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=574)** So on line number nine let's do the same thing instead of the string value, let's add a number 23.
>
> **[9:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=580)** And this time we are getting a compilation problem.
>
> **[9:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=584)** It says that the required type is String but you're providing an integer.
>
> **[9:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=589)** So this is the magic that generic spins for you.
>
> **[9:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=592)** On line number eight, since you already declared that the Languages list must contain values only of the String type.
>
> **[10:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=600)** The moment you try to add an integer value on line number nine, the compilation stage itself fails.
>
> **[10:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=608)** The compiler says you are adding a wrong value into the collection, and I will not permit that.
>
> **[10:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=614)** So now, since this code does not compile I will have to ensure that I add values only of the String type.
>
> **[10:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=622)** So this is how the type safety is guaranteed using generics.
>
> **[10:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=626)** Since the compilation does not allow us to add wrong values to the collection, we will never run into any kind of potential problems like the class cast exception at run type.
>
> **[10:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=637)** So there we go.
>
> **[10:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=638)** That's how generics solves those two issues that we talked about.
>
> **[10:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generics-in-java?u=76281980&t=642)** When we wrote this generic called class what we actually did is generify the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8), [[Algorithms]] (1), [[Microsoft Word|Word]] (1)
> **Cross-References:** previous video (3), go back to (1), we talked about (1)
> **Env Vars:** api (2), jdk (1), ide (1)
> **Definitions:** is a  (2), means that (1), is called (1)
> **CLI Commands:** find (1)
> **Versions:** 5.0 (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Terms in generics](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=0)** - [Instructor] In our previous videos, we have understood the concept of generics, we have written some sample code with generics, and during that process, we used certain terms back and forth.
>
> **[0:11](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=11)** Let's clearly understand those terms so, that it helps us going further in this course.
>
> **[0:16](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=16)** The first few terms are related to types.
>
> **[0:19](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=19)** First one, among them is generic types.
>
> **[0:21](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=21)** So, these are classes or interfaces whose declaration consists of single or multiple parameters.
>
> **[0:30](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=30)** So, for example, it is the name of the interface, List, in this case, followed by a pair of angle brackets, and in between those angle brackets you have a type parameter, which is E, in this case.
>
> **[0:42](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=42)** So, when you take this together, List of E, that is one generic type.
>
> **[0:47](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=47)** List of E, extends collection of E.
>
> **[0:50](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=50)** So, collection of E, is another generic type that has been defined in the [[Java]] APIs.
>
> **[0:56](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=56)** Let's also see the Map interface of Java APIs.
>
> **[0:59](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=59)** You read this as Map of K comma V.
>
> **[1:03](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=63)** Now, this Map generic type has two parameters defined.
>
> **[1:07](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=67)** One is K for the keys, and the other is V for the values.
>
> **[1:12](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=72)** So far, we have looked at generic types from the inbuilt Java APIs, but we can also write our own generic types, which we will do in the next module.
>
> **[1:22](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=82)** The next term is parameterized types.
>
> **[1:25](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=85)** Each generic type defines a set of parameterized types.
>
> **[1:28](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=88)** When you invoke a generic type, you create a parameterized type.
>
> **[1:33](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=93)** So, parameterized types are also names of classes or interfaces, followed by a pair of angle brackets, and in between those angle brackets you mention the type argument that you pass when you invoke the generic type.
>
> **[1:47](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=107)** So, for example, when you say List of String languages, the part which says, List of String, that is a parameterized type.
>
> **[1:56](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=116)** Languages in this case is just a reference variable of the List type.
>
> **[2:00](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=120)** The next term is raw types.
>
> **[2:01](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=121)** Each generic type also defines a set of raw types.
>
> **[2:05](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=125)** Raw types are merely classes or interfaces that you write without any type arguments.
>
> **[2:11](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=131)** So, if you mention in your code just the name of the interface, likes say, List, then we say that you created a raw type.
>
> **[2:18](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=138)** Let's rewind and go back to the non-generic code example that we wrote in our previous video.
>
> **[2:24](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=144)** Let's go to the IDE.
>
> **[2:25](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=145)** And if you look at the Non-generics Code Class on line number eight, we created a list of languages.
>
> **[2:31](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=151)** When we wrote this line, we did not mention the angle brackets, we did not mention any type arguments.
>
> **[2:37](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=157)** So, this is called a raw List or alternately, raw type.
>
> **[2:41](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=161)** Now, a fair warning, never use raw types in your code.
>
> **[2:46](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=166)** If you do, then you lose the benefits of safety and expressiveness that the generics concept comes along with.
>
> **[2:53](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=173)** Then the question is, why do we even need these raw types in the language?
>
> **[2:58](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=178)** This is to support legacy code.
>
> **[3:00](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=180)** Let's understand this.
>
> **[3:02](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=182)** Before the advent of generics, all the code in Java was written with raw types.
>
> **[3:07](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=187)** When the generics feature got introduced, Java could not ignore that legacy code.
>
> **[3:12](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=192)** It could not do away with it.
>
> **[3:14](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=194)** Java needed to ensure that you can pass parameterized types to methods with raw types and vice versa.
>
> **[3:22](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=202)** So, in order to maintain this compatibility with the pre-generics code, raw types exist in the language even today.
>
> **[3:30](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=210)** Today, if you write code with generics and still continue to use raw types, then the compiler is going to generate a fair number of warnings.
>
> **[3:39](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=219)** You will have to sit through and solve each one of those warnings, to ensure that your code is truly safe and does not have any potential problems at run time.
>
> **[3:49](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=229)** The next couple of terms are with respect to parameters and arguments.
>
> **[3:54](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=234)** In one of our previous videos, we had discussed the analogy between method definition invocation and generics definition and invocation.
>
> **[4:04](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=244)** So, whenever you define a method, you have parameters.
>
> **[4:08](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=248)** Whenever you invoke a method, you pass arguments.
>
> **[4:12](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=252)** Similarly, when you have a generics definition, you do that with the help of type parameters.
>
> **[4:19](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=259)** And when you invoke a generic type, you pass type arguments.
>
> **[4:24](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=264)** Let's look at those couple of terms.
>
> **[4:26](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=266)** First one is Formal type parameters.
>
> **[4:29](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=269)** Alternately known as type parameters or type variables.
>
> **[4:34](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=274)** So, these are the place holders that you find in the definition of your generic type.
>
> **[4:39](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=279)** So, for example, in List of E, E is the type parameter.
>
> **[4:44](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=284)** Type parameters are generally written in single uppercase letters.
>
> **[4:49](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=289)** You must be wondering why have they labeled the type parameter E in this case.
>
> **[4:53](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=293)** This is a part of the naming convention that Oracle has laid out for the type parameters.
>
> **[4:58](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=298)** We will get to that in a bit.
>
> **[4:59](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=299)** The E that you see, the type parameter, is not a class, it is just a placeholder, so it cannot be instantiated.
>
> **[5:07](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=307)** And then the other term is Actual type arguments, alternately known as type arguments.
>
> **[5:13](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=313)** This is the concrete type that you pass when you invoke a generic type.
>
> **[5:19](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=319)** So, for example, if you want to invoke the List generic type, you could say, List of String, and then the String here becomes the type argument.
>
> **[5:29](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=329)** Other than these terms, let us also take a look at the diamond operator.
>
> **[5:33](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=333)** This operator was introduced as a part of Java version 1.7, and it provides you a way to eliminate the need for duplicate declaration.
>
> **[5:42](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=342)** For example, in this line of code, List of String data equal to new ArrayList.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=348)** And then the [[Microsoft Word|word]] ArrayList is followed by a pair of empty angle brackets, and after that, you have the constructor call, which is responsible for the object creation.
>
> **[5:59](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=359)** This pair of empty angle brackets that are marked in red, is called the diamond operator.
>
> **[6:05](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=365)** Let's go and look at the generic code that we wrote in our previous videos, to understand this better.
>
> **[6:09](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=369)** So, let's go to the IDE, and I will open the Generics Code Class.
>
> **[6:14](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=374)** On line number eight, we see that have a generics List, and the type argument String has been mentioned on both the sites of the assignment operator.
>
> **[6:25](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=385)** If you see, you have a warning that the compiler is generating on the right hand side.
>
> **[6:29](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=389)** It says explicit type argument String can be replaced with empty angle brackets.
>
> **[6:37](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=397)** So, this pair of angle brackets, which is empty is the diamond operator.
>
> **[6:42](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=402)** So, let's go ahead and remove this type argument from here.
>
> **[6:46](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=406)** This is what diamond operator is for.
>
> **[6:48](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=408)** The diamond operator, will completely eliminate the requirement of declaring that type argument again on the right hand side of the assignment operator.
>
> **[6:59](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=419)** This is because, since on the left hand side of the operator we have already mentioned the type argument String, the compiler has inferred that it must be the same type argument on the right hand side as well.
>
> **[7:11](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=431)** This process, by which the compiler infers the type arguments, based on the context is called type inference.
>
> **[7:19](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=439)** We will look at type inference in a little more detail in a subsequent module.
>
> **[7:24](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=444)** There is one thing that we have to remember, and that is we have to use these pair of empty angle brackets, that is, the diamond operator.
>
> **[7:33](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=453)** If you remove it, then you will end up creating a raw List.
>
> **[7:38](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=458)** For example, the compilers already generated a warning saying, raw use of parameterized class ArrayList.
>
> **[7:46](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=466)** Do not forget to use the diamond operator, otherwise, you are still creating raw types.
>
> **[7:52](https://www.linkedin.com/learning/java-generic-classes-14576260/terms-in-generics?u=76281980&t=472)** So, I'll restore that angle bracket pair, and we are good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Microsoft Word|Word]] (1)
> **Definitions:** is called (3), is a  (2), known as (2)
> **Analogies:** for example (6)
> **Cross-References:** in the next (1), go back to (1), previous video (1)
> **UI Navigation:** go to (2), open the (1)
> **Warnings:** warning (3)
> **Env Vars:** ide (2)
> **CLI Commands:** find (1)

#### [Rules and naming conventions](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=0)** - [Instructor] There are a couple of rules that you must know at this point in order to apply or use generics in your code.
>
> **[0:07](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=7)** Let's look at them.
>
> **[0:08](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=8)** The first rule is that generics works only with reference types.
>
> **[0:12](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=12)** This essentially means that you can never use primitives with generics.
>
> **[0:16](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=16)** Let's go to the IDE and write some code for this.
>
> **[0:19](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=19)** So let's create another class here on the same package as the previous one, and let's name this class as Rules.
>
> **[0:28](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=28)** In this, I'll write the main method.
>
> **[0:31](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=31)** And now, let's create a list of ints, and this would be primitive ints, so List, that is [[Java]].util, the angle brackets, and this time, the type argument is the primitive int.
>
> **[0:43](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=43)** Let's name this variable as integers, and let's create new ArrayList.
>
> **[0:52](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=52)** Similarly, let's also label the type argument as int here, but since now, we have the diamond operator, there is no need to do that, so we can eliminate this.
>
> **[1:02](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=62)** Now, if you see, you have compilishing problem on this line, and it says that the type argument cannot be of primitive type.
>
> **[1:10](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=70)** So this is what it is, when you use generics, you will never be able to use primitives, you only have to use reference types.
>
> **[1:18](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=78)** So, this code now can be changed to the integer wrapper type that we have in Java.
>
> **[1:25](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=85)** Now, let's come on the next line and say integers.add, let me add a number, 10.
>
> **[1:33](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=93)** And then, on the next line, let me take a primitive int variable, int number and retrieve the value at the zeroth index of that list, so I'll say integers.get zero.
>
> **[1:48](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=108)** So, a minute ago, we said that generics does not work with primitives, but then, what happened on lines number nine and 10?
>
> **[1:54](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=114)** I directly added the number 10 into the list on line number nine, and on line number 10, I retrieved the value from the list into a primitive variable.
>
> **[2:04](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=124)** So, how is this working?
>
> **[2:05](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=125)** This is because the autoboxing and unboxing feature in Java is in action.
>
> **[2:12](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=132)** On line number nine, autoboxing is in action, which means the primitive number 10 will be wrapped inside an integer-type object, and then that object will be inserted into the collection.
>
> **[2:25](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=145)** On line number 10, when we try to retrieve the value at the zeroth index, it actually fetched an integer object, but then, it unwrapped the primitive from that object and made it available to us.
>
> **[2:38](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=158)** So, autoboxing and boxing is how you're going to deal with the generic objects in case of primitives.
>
> **[2:45](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=165)** The second rule is generic types differ based on their type arguments.
>
> **[2:51](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=171)** This means that if you have two references created by passing different type arguments to the same generic type, they will not be the same.
>
> **[3:03](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=183)** Now, this may be a little confusing to understand, so let's go to the IDE, write some code, and understand this quickly.
>
> **[3:09](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=189)** Let's say, in addition to the list of integers that we have created on line number eight, let's create a list of String as well, like that, and let's call this languages and instantiate this to an ArrayList object, and we'll use that diamond operator again.
>
> **[3:32](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=212)** Let's add some values.
>
> **[3:39](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=219)** And now, we have two references.
>
> **[3:42](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=222)** One reference is integers on line number eight.
>
> **[3:46](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=226)** This reference variable was created by invoking the list generic type, and the type argument passed was the integer wrapper type.
>
> **[3:55](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=235)** On line number 12, we created another reference, languages, and this was a list of String.
>
> **[4:03](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=243)** So, we passed the String argument type to the list generic type in order to get that variable.
>
> **[4:10](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=250)** Now, the reference integers and the reference languages on line number 12 are not the same, even if they are born out of the same generic type, they are still different references.
>
> **[4:24](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=264)** So, if I try to do something like this, integers equal to languages, this will not work.
>
> **[4:33](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=273)** It tells me that the required type is list of Integer, and you're providing list of String.
>
> **[4:38](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=278)** So, this is the rule, if you have two different references that were create with different type arguments, but you invoke the same generic type, that does not mean that those references can be equated with each other, that's the rule.
>
> **[4:52](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=292)** Further to this, let's also see the naming conventions for type parameters.
>
> **[4:56](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=296)** In most of our previous videos, we're already seen E as the parameter name on the list generic type.
>
> **[5:03](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=303)** We have seen K and V as type parameters on the Map interface.
>
> **[5:08](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=308)** So, as we said earlier, there is a convention that Oracle as laid out for naming your type parameters, and this is what we're talking about now.
>
> **[5:17](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=317)** The first one is the alphabet E.
>
> **[5:19](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=319)** So, this can be used for elements, and this is specifically used in all the collection classes.
>
> **[5:26](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=326)** If you want to design your own collection framework, you can use E as the name of your type parameter.
>
> **[5:32](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=332)** Next is for K and V, key and value.
>
> **[5:36](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=336)** So, if you're designing a class or let's say an API like the Map, then you should use K and V to designate keys and values for your type parameter names.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=348)** N is used for numbers.
>
> **[5:50](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=350)** So, if you have a generic class that deals entirely with numbers, then you can use N as the name if your type parameter.
>
> **[5:57](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=357)** Next one is T.
>
> **[5:59](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=359)** So, if you're designing your own generic class, you can always use T.
>
> **[6:03](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=363)** T can refer to any type in Java.
>
> **[6:08](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=368)** Lastly, S, U and V.
>
> **[6:11](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=371)** If you have a scenario for multiparameters in your generic types, then the second, third and fourth type parameters are named S, U and V, respectively.
>
> **[6:24](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=384)** This naming convention that you see is very different from what Java usually recommends.
>
> **[6:29](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=389)** Java recommends that you give elaborate names for your variable, methods, etc., but this kind of a naming convention was designed or laid down to differentiate your type parameters from the [[Representational State Transfer (REST)|rest]] of your Java code.
>
> **[6:41](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=401)** At the end of the day, this is just a convention.
>
> **[6:44](https://www.linkedin.com/learning/java-generic-classes-14576260/rules-and-naming-conventions?u=76281980&t=404)** If you choose to follow your own standard, you can always go ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ide (2), api (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Advantages of generics](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=0)** - [Instructors] Let us now talk about the advantages of the benefits of the Generics concept.
>
> **[0:04](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=4)** The first one is compile and runtime protection.
>
> **[0:07](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=7)** We know now that Generics always will do the type safety checks at the compilation stage itself.
>
> **[0:14](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=14)** These type safe checks will then avoid all the potential problems that you encounter at runtime.
>
> **[0:20](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=20)** So it gives you compile and runtime protection.
>
> **[0:23](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=23)** Secondly, you do not have to do any kind of explicit casting in order to process your values inside the Generics code.
>
> **[0:29](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=29)** The compiler will do that implicit casting for you.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=32)** This essentially means that you do not introduce any kind of clutter, and your code is always clean and robust.
>
> **[0:40](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=40)** Lastly, Generics have a way to define operations that can be performed on a varied number of types.
>
> **[0:46](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=46)** This essentially will give you a chance to develop generic [[Algorithms]].
>
> **[0:51](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=51)** Generics is a very powerful feature in the [[Java]] language.
>
> **[0:54](https://www.linkedin.com/learning/java-generic-classes-14576260/advantages-of-generics?u=76281980&t=54)** Ensure that you always write your code with Generics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Java]] (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructors] (1)


### 2. Generic Classes and Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [Generic classes/interface use case](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=0)** - [Instructor] In this module, we are going to build our own generic class.
>
> **[0:04](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=4)** For this, let us understand the most common use case that is implemented with generic classes.
>
> **[0:10](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=10)** Let's say you have a box.
>
> **[0:11](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=11)** This box could contain anything.
>
> **[0:13](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=13)** It could be a box of fruits or books or chocolates.
>
> **[0:18](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=18)** Similarly, if you have a bottle, it could hold water, milk or juice.
>
> **[0:24](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=24)** So let's say that you have to implement this scenario.
>
> **[0:27](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=27)** You have an object that has to be passed throughout your application.
>
> **[0:30](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=30)** Let's say, for example, the book object.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=32)** And this object should be encapsulated within a container, for example, the box.
>
> **[0:39](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=39)** Now, why do we need a container?
>
> **[0:40](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=40)** That is because it'll help us do all the operations on the objects that it contains.
>
> **[0:46](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=46)** So let's say the container should be able to store an object, retrieve an object and perform any other tasks that your application desires.
>
> **[0:54](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=54)** Furthermore, there is another requirement.
>
> **[0:57](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=57)** This container should have the capability of holding objects of multiple types.
>
> **[1:03](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=63)** So at one point of time in your application, the box could contain books.
>
> **[1:08](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=68)** And it could be a box of chocolates at another point in time.
>
> **[1:11](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=71)** So how do we implement this?
>
> **[1:13](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=73)** Well, we have the object type approach implementation that we have talked about before.
>
> **[1:18](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=78)** You can design a container and write code such that your container deals with object types only.
>
> **[1:24](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=84)** But then we know the limitations that come with this approach.
>
> **[1:27](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=87)** We've discussed this before.
>
> **[1:28](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=88)** First is, there is no type safety.
>
> **[1:31](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=91)** You can end up adding any wrong thing into that box.
>
> **[1:35](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=95)** Secondly, whenever you try to retrieve an object from that container, you will have to perform an explicit casting to process it further.
>
> **[1:43](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=103)** And even if you do all of this right, we definitely know that there is a possibility that you can encounter problems at runtime.
>
> **[1:51](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=111)** So this kind of use case is implemented with generics.
>
> **[1:55](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=115)** So what we can do is, we write a class called box of T.
>
> **[1:59](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=119)** We take T as the type parameter name.
>
> **[2:01](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=121)** That is because T can refer to any type.
>
> **[2:04](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=124)** This box class will have all the methods to operate on that T.
>
> **[2:09](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=129)** For example, storing the object, retrieving the object, et cetera.
>
> **[2:12](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=132)** When we invoke box of T, we can pass either fruit, or book, or chocolate as the type argument so that we can create different kinds of boxes in the application.
>
> **[2:26](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=146)** So at one time it could be box of fruits, the other time box of books.
>
> **[2:30](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=150)** Similarly, we can write a class bottle of T and water, milk and juice will become the type arguments when we invoke the generic class bottle.
>
> **[2:41](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=161)** This slide shows you an overview of everything that we need to do in order to get this demo up and running.
>
> **[2:48](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=168)** So the first thing we will do is write the class box of T.
>
> **[2:51](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=171)** Remember this box will hold multiple items of a specific type.
>
> **[2:57](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=177)** Next, we will write methods in this box class so we can have a method to add an item to the box.
>
> **[3:03](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=183)** We can also have a method get latest item which fetches you the latest item from the box.
>
> **[3:08](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=188)** And yet another method to get the count of items from the box.
>
> **[3:13](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=193)** After this, we will write the types which will behave as type arguments to work box of T.
>
> **[3:19](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=199)** So we'll write a class fruit and another class book.
>
> **[3:23](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=203)** And these two classes will have all the desired properties and their respective methods.
>
> **[3:28](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=208)** Once we understand the setup and we write the code for it, the next step will be to test it out.
>
> **[3:34](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=214)** In order to test it, we will invoke box of T, and we'll create two kinds of boxes.
>
> **[3:39](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=219)** Box of fruit, box of book.
>
> **[3:42](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-classes-interface-use-case?u=76281980&t=222)** So fruit and book will become the type arguments for the invocation in our test class.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Create a generic class demo](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=0)** - [Instructor] In our previous video, we have already seen the overview of everything that we need to do in order to build our generic class box.
>
> **[0:08](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=8)** We will split this demo into two parts for the sake of simplicity.
>
> **[0:12](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=12)** In the first part, we'll code everything on the box class, and we'll also code our type arguments, which is Book and Fruit.
>
> **[0:20](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=20)** We'll test this out.
>
> **[0:21](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=21)** In the subsequent videos, we will add methods, and then test everything together as a whole unit.
>
> **[0:28](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=28)** Now, I have steps mentioned on the slide in order to get started for building the generic class box.
>
> **[0:33](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=33)** So let's execute those steps one by one.
>
> **[0:35](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=35)** The first step is to create a class box and define a type parameter T for it.
>
> **[0:41](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=41)** Let's head back to the IDE.
>
> **[0:43](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=43)** And on this package, let's create a class called box.
>
> **[0:47](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=47)** And this time, it is going to have a type parameter.
>
> **[0:49](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=49)** So you have to enclose that type parameter in a pair of angle brackets like that, done.
>
> **[0:55](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=55)** The second step is to declare a list of T items instance variable.
>
> **[1:00](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=60)** So as we said earlier, this box can contain multiple items of the same type.
>
> **[1:05](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=65)** So we need to incorporate that by means of an instance variable declaration.
>
> **[1:10](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=70)** So let's go ahead and say private, all your instance variables should always be private in [[Java]].
>
> **[1:16](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=76)** So private, list.
>
> **[1:19](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=79)** This will be list of T.
>
> **[1:22](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=82)** And let's call this, items.
>
> **[1:25](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=85)** We'll do one more thing.
>
> **[1:26](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=86)** We will create a constructor for this box class and inside this constructor, we'll access the items property using the this operator and instantiate this to an empty array list.
>
> **[1:42](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=102)** Because when we declare the instance variable on line number seven, this is going to be having the default value of null.
>
> **[1:49](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=109)** So I'm going to instantiate that to an empty array list on line number 10.
>
> **[1:53](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=113)** And if you see, we have the diamond operator in action.
>
> **[1:56](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=116)** Next, let's go ahead and also make a getter method in order to access the items property outside the box class.
>
> **[2:04](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=124)** So I can just go ahead and say right click, Generate, choose the Getter, select the field and say OK.
>
> **[2:13](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=133)** That's all that we need to do in the box class as of now.
>
> **[2:17](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=137)** Let's go to the next step.
>
> **[2:18](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=138)** We have to create classes Book and Fruit in order to test the box generate type.
>
> **[2:23](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=143)** So let's go ahead and create those POJOs, plain old Java objects.
>
> **[2:27](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=147)** So let's right click on this package, create a Java class and name it, Book.
>
> **[2:34](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=154)** Let's quickly add properties to the Book class.
>
> **[2:37](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=157)** So I'll say private string name, private string author, and we'll also take the weight of the Book as a property.
>
> **[2:49](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=169)** So that'll be a double, like that.
>
> **[2:52](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=172)** Now there are a few things that I want to do for the Book class.
>
> **[2:55](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=175)** One is I want to create a constructor, so you can say right click, Generate, a Constructor, select all the three fields, because we want all the three fields to have values during instantiation, click OK, and your constructor is ready.
>
> **[3:09](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=189)** Next, we want the getter methods to access all the three properties.
>
> **[3:14](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=194)** So again, right click, Generate, Getter, select all the three fields, we want methods for each one of them, say OK.
>
> **[3:23](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=203)** So now you have getName, getAuthor, and getWeight.
>
> **[3:29](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=209)** The last step that we'll do here is we'll generate the toString method for this POJO.
>
> **[3:35](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=215)** So right click, Generate, say toString, and select all the three fields and click on OK.
>
> **[3:41](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=221)** So whenever you're trying to print the Book object, you will be able to see the values of the name, author, and weight properties, instead of some random string representation that Java gives you by default.
>
> **[3:53](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=233)** So there we go. We have the Book class ready.
>
> **[3:55](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=235)** Let's also create the Fruit class.
>
> **[3:56](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=236)** So I'll right click again on the package, create another Java class and name this as Fruit.
>
> **[4:04](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=244)** Let's define properties here as well.
>
> **[4:06](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=246)** Private string, that'll be the name of the Fruit.
>
> **[4:10](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=250)** Yes, that's right.
>
> **[4:11](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=251)** Next is private string, let's call this field as country of origin, the country where this fruit originated.
>
> **[4:23](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=263)** Next will be private string, let's also have the color of the fruit as a property, and then we'll have the weight of the fruit.
>
> **[4:32](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=272)** So that'll be a double type, like that.
>
> **[4:35](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=275)** And we'll do the same ritual for the Fruit class as we did for the Book.
>
> **[4:39](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=279)** So let's go ahead.
>
> **[4:41](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=281)** Right click, Generate, a Constructor, select all the four fields, click OK.
>
> **[4:47](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=287)** So your constructor is ready.
>
> **[4:49](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=289)** Next, we'll define the getter methods.
>
> **[4:51](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=291)** Right click again on line 16, Generate, Getter, select all the four fields, we want methods for each one of them, say OK.
>
> **[5:00](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=300)** There we go.
>
> **[5:01](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=301)** You have getName, getCountryOfOrigin, getColor, and getWeight.
>
> **[5:08](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=308)** Lastly, we need the toString method, again, to print the Fruit object in any case.
>
> **[5:13](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=313)** So let's go ahead.
>
> **[5:14](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=314)** Right click, Generate, select toString, select all four fields and then click OK.
>
> **[5:21](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=321)** So there we go.
>
> **[5:22](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=322)** We have the Book and the Fruit types ready.
>
> **[5:24](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=324)** We'll also do one more thing.
>
> **[5:26](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=326)** In our Box class, we have the constructor, we have the getter method.
>
> **[5:31](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=331)** Here as well, we will generate the toString method.
>
> **[5:34](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=334)** So let's right click, Generate, say toString, select the items property and say OK.
>
> **[5:42](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=342)** So there we go. We are all set.
>
> **[5:43](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=343)** The last step will be to create a test class in order to invoke the box generic type for the classes that we define just now, the Book and the Fruit.
>
> **[5:53](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=353)** So we'll create two different boxes.
>
> **[5:55](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=355)** One is box of Books, the other box of Fruits.
>
> **[5:59](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=359)** So let's go to the IDE and create a test class.
>
> **[6:03](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=363)** Let's call this test box generics.
>
> **[6:08](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=368)** Let's write the main method.
>
> **[6:10](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=370)** And now let's go ahead and create a box of Books first.
>
> **[6:13](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=373)** So let's say box.
>
> **[6:15](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=375)** And this time we are going to pass the type argument of Book.
>
> **[6:22](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=382)** This will be Book box.
>
> **[6:25](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=385)** The variable name generally gets generated by the IDE.
>
> **[6:27](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=387)** So you really don't have to strain much in order to decide to name your variables.
>
> **[6:32](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=392)** Let's instantiate this.
>
> **[6:35](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=395)** And again, we have the diamond operator in action.
>
> **[6:37](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=397)** So you need not declare the type argument Book again on the right-hand side of the assignment operator.
>
> **[6:45](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=405)** So what we did on line number five is we invoked the box generic type and we did this for the type argument Book.
>
> **[6:53](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=413)** So now you can think of something like this that this Book is going to replace that T type parameter that we have on the Box class.
>
> **[7:02](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=422)** So if you take a look at the Box class and go right up, so everywhere that you see the T type parameter, Book is going to replace it.
>
> **[7:10](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=430)** That's what you can think that this is doing.
>
> **[7:13](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=433)** Similarly, let's also create a box of Fruits.
>
> **[7:18](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=438)** So it's the same thing.
>
> **[7:20](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=440)** This time, the type argument will be different.
>
> **[7:22](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=442)** Let's call this Fruit box, new box.
>
> **[7:28](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=448)** That's all.
>
> **[7:30](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=450)** And now, let's do one more thing.
>
> **[7:32](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=452)** On line number six, let's print the Book box.
>
> **[7:36](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=456)** On line number nine, let's print the Fruit box.
>
> **[7:43](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=463)** Right. And let's go ahead and run this program now.
>
> **[7:47](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=467)** And let's observe what the console output is. Right.
>
> **[7:53](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=473)** So if you see, so right now we have just created two boxes.
>
> **[7:59](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=479)** We have invoked the box generic type for the Book and the Fruit.
>
> **[8:02](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=482)** We have not added any items to either of the boxes.
>
> **[8:07](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=487)** We will do that when we start adding methods to the generic class.
>
> **[8:11](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=491)** So that's all.
>
> **[8:12](https://www.linkedin.com/learning/java-generic-classes-14576260/create-a-generic-class-demo?u=76281980&t=492)** This is the generic class box that you wrote and we have everything set for the class level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5)
> **Code Identifiers:** tostring (6), getname (2), getweight (2), getauthor (1), getcountryoforigin (1)
> **UI Navigation:** select the (2), go to (2), click on (2)
> **Env Vars:** ide (3), pojo (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Understand generic methods and constructors](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=0)** - [Instructor] The next part of the demo is to add generic methods to the box generic type.
>
> **[0:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=6)** But before that, let's understand the concept of generic methods.
>
> **[0:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=10)** So the way you define generics on the class level you can always extend that to the method level, as well.
>
> **[0:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=15)** And there are two parts here that we have to talk about.
>
> **[0:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=18)** Generic methods inside a generic class and generic methods outside the generic class.
>
> **[0:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=24)** Let's first talk about the generic methods inside the generic class.
>
> **[0:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=28)** So a method inside generic class will always have access to the type parameter that was defined on the class level.
>
> **[0:36](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=36)** And hence, it automatically becomes a generic method relative to that type parameter.
>
> **[0:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=41)** In addition to this, a method which is inside a generic class can always use more type parameters other than the ones defined on the class level.
>
> **[0:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=51)** So for example, if your class has a type parameter T defined, then the method inside your generic class can definitely use T because that is available on the class level.
>
> **[1:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=62)** But additionally, it can also use more parameters for its own logic.
>
> **[1:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=66)** For example, S-U-V can definitely be defined on that method.
>
> **[1:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=72)** Now let's talk about methods outside a generic class.
>
> **[1:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=75)** Let's say you have a utility class for the box generic type called BoxUtils and you want to define a method in the utility class which gives you access to the type parameter T of your box generic type.
>
> **[1:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=89)** It is then possible to have the type parameter declared on that method as well.
>
> **[1:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=95)** So you can write generic methods even outside a generic class.
>
> **[1:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=99)** Lastly, as we know, constructors are very similar to methods except that they do not have a return type.
>
> **[1:45](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=105)** So all the rules that we saw with generic methods naturally get applied to constructors, as well.
>
> **[1:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=111)** Now let's go ahead and start the second part of our demo.
>
> **[1:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=115)** Let's add methods to the generic type box.
>
> **[1:58](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=118)** So I have a series of steps here.
>
> **[1:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=119)** Let's execute them one by one.
>
> **[2:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=121)** The first one is add method to the box class.
>
> **[2:04](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=124)** The first method is additem.
>
> **[2:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=127)** This method is supposed to add an item to the box.
>
> **[2:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=130)** So let's go back to the IDE and inside the box class, let's open that, let's come after this constructor and on line number 13 we are now going to define a generic method which is going to add an item in the list for this box.
>
> **[2:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=148)** So we can say public, we don't need to return anything, so this can be labeled void, the return type and the name of the method, which will be additem.
>
> **[2:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=159)** Now, this additem will take a parameter of the type T and we just have to access the list and say, items.add T.
>
> **[2:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=174)** There we go.
>
> **[2:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=174)** That is all.
>
> **[2:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=175)** So you have defined a method inside the generic class.
>
> **[2:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=179)** And as I said earlier, that this method will be able to access the T type parameter that you've defined on the class level.
>
> **[3:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=186)** So it automatically becomes a generic method.
>
> **[3:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=189)** The next method that we have to add is getting the latest item from the box.
>
> **[3:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=193)** So we'll define a method called getLatestItem.
>
> **[3:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=197)** Let's go on the next line and say public and let's understand this.
>
> **[3:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=204)** Now you're trying to return the latest item.
>
> **[3:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=206)** So you're trying to return a T from this method.
>
> **[3:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=210)** So the return type will now be T and say getLatestItem.
>
> **[3:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=218)** And what you have to simply do is, return, take the items variable, like that, sorry, it should be this.items.get and I can specify the index like that.
>
> **[3:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=235)** Items.size minus one.
>
> **[4:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=240)** Since you want the latest item from the box you just have to calculate the size of the items, subtract one and that will be the index number you need to provide to the get API, to get the latest item.
>
> **[4:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=252)** So that is all.
>
> **[4:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=253)** So if you note online 17, the return type of this method is a T because we are trying to get a T out of our box of T.
>
> **[4:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=262)** And then the next step will be to test each of these methods on the box instances that we already created.
>
> **[4:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=267)** So let's go back and let's go to our test box generics class.
>
> **[4:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=272)** And now here, let's go ahead and add items first to the book box.
>
> **[4:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=277)** So I'll say book box.additem and I'll have to add a book object.
>
> **[4:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=284)** So that'll be new book.
>
> **[4:47](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=287)** And you already defined a constructor in a previous demo for the book class, so we just have to specify the values for the fields now.
>
> **[4:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=294)** So let's say "Harry Potter and the Half Blood Prince"
>
> **[5:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=305)** and this was JK Rowling, and let's say the weight of that book was 0.5 kilograms.
>
> **[5:16](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=316)** Okay, let's add another item to the book box.
>
> **[5:20](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=320)** Add item.
>
> **[5:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=321)** Let's say new book again.
>
> **[5:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=324)** I recently read a book which is called "Deep Work", it's an excellent book and the author is Cal Newport
>
> **[5:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=338)** and let's say 0.25.
>
> **[5:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=341)** Okay, so we have two books added to the book box.
>
> **[5:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=346)** Let's go ahead and invoke the other method.
>
> **[5:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=350)** So we can just CIS out this to the console, say, bookbox.getlatestitem.
>
> **[5:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=359)** So there we go.
>
> **[5:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=359)** We have utilized both the methods on the book box.
>
> **[6:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=361)** We have been able to add items using the ad item method and we have been able to get the latest book, using the get latest item method.
>
> **[6:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=370)** We'll do the same thing for the fruit box, as well.
>
> **[6:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=373)** So let's come down here and say fruit box.aditem and this will be now a fruit object.
>
> **[6:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=381)** So let's go ahead and say name.
>
> **[6:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=384)** So let's say mango.
>
> **[6:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=386)** I am going to say country of origin, let's say India.
>
> **[6:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=391)** Then we want the color, that will be yellow.
>
> **[6:36](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=396)** And let's say the weight 0.5 again.
>
> **[6:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=401)** Let's add one more.
>
> **[6:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=403)** Fruitbox.additem new fruit, let's call this banana.
>
> **[6:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=416)** Let's say it originated in Brazil.
>
> **[7:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=421)** Color, let's say green this time.
>
> **[7:04](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=424)** It's a raw banana.
>
> **[7:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=425)** Let's say.
>
> **[7:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=426)** And then the weight is 0.3.
>
> **[7:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=430)** Okay, so there we go.
>
> **[7:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=432)** We have added fruits to the fruit box, as well.
>
> **[7:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=435)** And let's go ahead and invoke the get latest item on the fruit box, as well.
>
> **[7:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=439)** So fruitbox.getlatest item.
>
> **[7:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=444)** So now let's go ahead and run this program.
>
> **[7:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=447)** So, after you run this program, both the books should be added successfully to the book box and you should be able to get the latest item out of the book box and the same kind of output you'll observe even for the fruit box.
>
> **[7:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=459)** So let's run this.
>
> **[7:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=462)** Okay, so now if you observe the output, if you see the first output is book name, "Deep Work" and that is the output of the line number eight, which was the latest item that we added in the book.
>
> **[7:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=475)** So yes, the latest item indeed was the "Deep Work" book that's what is printed on the console.
>
> **[7:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=479)** And then we also printed the book box on line number nine in our code.
>
> **[8:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=483)** So that the entire content of the box.
>
> **[8:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=488)** That is both the books, "Harry Potter" and "Deep Work".
>
> **[8:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=492)** Similarly, when it comes to fruit, the latest item that we added was indeed the banana object, so that's printed on the console and we printed the entire fruit box.
>
> **[8:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=502)** So it printed all the items in that box of fruits, which is mango and banana, both.
>
> **[8:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=507)** There we go.
>
> **[8:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-generic-methods-and-constructors?u=76281980&t=508)** So we have now generic methods defined inside the box generic type, which we have been successfully able to invoke and test out.

> [!info]- Semantic Content
>
> **Versions:** 0.5 (2), 0.25 (1), 0.3 (1)
> **Env Vars:** ide (1), api (1), cis (1)
> **Analogies:** for example (2), similar to (1)
> **Code Identifiers:** getlatestitem (2)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Implement a generic method as a utility](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=0)** - In our previous video, we added methods inside the generic class.
>
> **[0:04](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=4)** Let's also do one more bit of this demo where we add a method outside the generic class box.
>
> **[0:10](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=10)** So I have the steps to mention on this slide let's execute them, one by one.
>
> **[0:14](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=14)** Let's first add a utility class called BoxUtils.
>
> **[0:18](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=18)** So let's head back to the IDE and on the same package, I will create a class.
>
> **[0:23](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=23)** Let's call it BoxUtils.
>
> **[0:28](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=28)** The next step will be add a generic method getCountOfItems.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=32)** So the method that I'm going to add in the utility class is to get a count of items from any box that we want to measure the count on.
>
> **[0:40](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=40)** So let's go back to the IDE and here let's add a method, public and they should return int.
>
> **[0:48](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=48)** Let's name the method getCountOfItems and they should have some parameter and then the definition.
>
> **[0:56](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=56)** So now let's try to understand this.
>
> **[0:58](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=58)** We are trying to get the count of items from the box.
>
> **[1:02](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=62)** So this method should be able to access the type parameter of the box generic type, which in our case is T.
>
> **[1:10](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=70)** Now in order that the method is able to access that type parameter, you will have to explicitly define that type parameter on the method level.
>
> **[1:19](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=79)** Why is that so?
>
> **[1:21](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=81)** Because we are in a utility class of BoxUtils and BoxUtils does not have the type parameter T mentioned on the class level.
>
> **[1:28](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=88)** So now, the first thing that we have to do is, we have to mention this generics type parameter on the method level like that.
>
> **[1:37](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=97)** The moment you have T then getCountOfItems knows or is aware that there is a type parameter T that it is going to access.
>
> **[1:46](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=106)** Only then you will be able to define a parameter to this method which is of the box T like that.
>
> **[1:56](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=116)** And then what we have to do is, we just have to return the count.
>
> **[1:59](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=119)** So that'll be return box.getItems.size. That is all.
>
> **[2:08](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=128)** So this is how you write a generic matter outside the generic class.
>
> **[2:12](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=132)** Unless and until you specify this generic declaration on the method level, your get count of items method will not be able to access the type parameter.
>
> **[2:22](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=142)** And this is merely done because you are inside the generic class now.
>
> **[2:27](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=147)** You're outside.
>
> **[2:28](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=148)** So when you're outside the class you'll have to define this explicitly.
>
> **[2:32](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=152)** Once you do this, only then you'll be able to define any parameters with respect to that generic type.
>
> **[2:38](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=158)** Please also note, that this T in angle brackets that we mentioned, is not the return type.
>
> **[2:44](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=164)** The return type of this method is int.
>
> **[2:47](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=167)** It's account that we are returning from this method.
>
> **[2:50](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=170)** Now, the third step is to test this program for the getCountOfItems method.
>
> **[2:55](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=175)** So let's go ahead to our test box generics class again and let's come down and say, System out let's put a string, Book count, simple and let's call the BoxUtils class.
>
> **[3:16](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=196)** And if you see, you'll still are not able to see the method that is because I'm trying to access the method on the class level.
>
> **[3:22](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=202)** So we have forgotten to do one thing, that is, we need to declare this method static.
>
> **[3:28](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=208)** Now let's go back to the test class, and now we should be able to access the getCountOfItems method.
>
> **[3:34](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=214)** And to this I'm going to now pass bookBox.
>
> **[3:37](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=217)** So the box of T in this invocation is going to be the box of book that we created on line number 5.
>
> **[3:44](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=224)** Similarly, I can come down and I can print the count of the fruitBox as well.
>
> **[3:51](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=231)** So I'll say Fruit count and call the same BoxUtils method
>
> **[4:00](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=240)** and this time, the box of T parameter that I'm going to pass is going to be the fruitBox, which is this.
>
> **[4:08](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=248)** So we are good.
>
> **[4:08](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=248)** Now let's go ahead and run this and look at the output on the console.
>
> **[4:14](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=254)** There we go.
>
> **[4:15](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=255)** You have the Book count 2 and you have the Fruit count 2.
>
> **[4:19](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=259)** So that's how you add a method outside a generic class.
>
> **[4:22](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=262)** Now just one small point here, I wanted to show a demo where I would be able to teach you how to add a method outside the generic class.
>
> **[4:32](https://www.linkedin.com/learning/java-generic-classes-14576260/implement-a-generic-method-as-a-utility?u=76281980&t=272)** GetCountOfItems method could have easily gone inside the box generic type itself.

> [!info]- Semantic Content
>
> **Code Identifiers:** getcountofitems (5), fruitbox (2), getitems (1), bookbox (1)
> **Cross-References:** go back to (2), previous video (1), we mentioned (1)
> **Env Vars:** ide (2)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Using bounded types](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=0)** - [Instructor] Let us now look at bounded types.
>
> **[0:03](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=3)** But before that, let's understand why we need them.
>
> **[0:06](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=6)** At times in certain situations, it is more useful to put restrictions on the types that you pass to your type parameters.
>
> **[0:14](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=14)** For example, in our case, we developed box of T generic type and then we invoked it to create a a box of fruits and a box of books.
>
> **[0:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=24)** But since we've defined it as box of T, that T could refer to any type which means I can go ahead and create a box of integers.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=32)** But then, this box of integers would not hold much relevance in our practical application.
>
> **[0:38](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=38)** So now I want to put a restriction on this Box class.
>
> **[0:41](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=41)** I want that this box should contain only those items that have a certain attribute.
>
> **[0:46](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=46)** Let's call it weight for example.
>
> **[0:48](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=48)** So how do you implement this?
>
> **[0:50](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=50)** [[Java]] in conjunction with inheritance provides a very powerful and elegant solution to define bounded types in order to implement such scenarios.
>
> **[1:00](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=60)** So bounded types help you to add restrictions and these restrictions can be specified using the extends keyword.
>
> **[1:09](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=69)** Extends is a preexisting keyword in the Java language which is used for inheritance.
>
> **[1:14](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=74)** This keyboard allows you to create an upper bound that specifies a superclass.
>
> **[1:20](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=80)** And the superclass is the one from which all your type arguments must be derived.
>
> **[1:26](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=86)** So for example, if your box definition looks like this, Box of T followed by the extends keyboard, followed by the superclass name, then this means that when you invoke the Box generic type, T can be replaced by anything that is a superclass or any of its subclasses.
>
> **[1:45](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=105)** So you can thus create an upper limit and the superclass is inclusive of that limit.
>
> **[1:51](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=111)** Just as it is with classes, you can also specify interfaces in bounded types.
>
> **[1:57](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=117)** So for example let's say you have an interface called interface1 and it is specified in the box definition like this; Box of T extends interface1.
>
> **[2:07](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=127)** This means when you invoke this Box generic type, T can be replaced by anything that implements interface1.
>
> **[2:14](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=134)** The thing to note here is that the extends keyword is used for both class as well as the interface whenever you try to define bounded types in Java.
>
> **[2:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=144)** Furthermore, you can also specify multiple bounds.
>
> **[2:28](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=148)** This is done using the & operator.
>
> **[2:31](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=151)** Let's see a couple of examples.
>
> **[2:33](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=153)** So let's say your box definition is like this, Box of T extends interface1 & interface2.
>
> **[2:39](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=159)** This means when you invoke this box, T can be replaced by anything that implements both interface1 and interface2.
>
> **[2:47](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=167)** So this is an example where you can specify multiple interfaces as bounds in your generic types.
>
> **[2:54](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=174)** Let's look at another example.
>
> **[2:55](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=175)** Box of T extends superclass & interface1 & interface2.
>
> **[3:02](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=182)** Now this would mean that T can be replaced by anything that is a superclass or any of its subclasses and implements both interface1 and interface2.
>
> **[3:12](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=192)** So this example specifies a combination of one class and multiple interfaces.
>
> **[3:18](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=198)** Just remember one thing here.
>
> **[3:20](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=200)** When you have a combination of a class and multiple interfaces, then you will have to specify the class first when you define those bounded types.
>
> **[3:28](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=208)** If you don't do that, you will end up getting a compilation problem.
>
> **[3:31](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=211)** Lastly, needless to say, since Java provides inheritance by extending only one class at a time, even when you define bounded types, you can specify only one class but you could use multiple interfaces.
>
> **[3:45](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=225)** Now let's go ahead and extend our box demo to include a bounded type.
>
> **[3:51](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=231)** This is the structure that we have implemented so far.
>
> **[3:54](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=234)** We have the Box class, we have those three methods: additem, getlatestitem and getCountOfItems.
>
> **[4:00](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=240)** And then you have the type argument classes: fruit and book and we'll pick up the same use case that we discussed before.
>
> **[4:06](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=246)** Now, we are going to restrict our box to have items which have the weight attribute.
>
> **[4:11](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=251)** For this, we'll create an interface called Boxable.
>
> **[4:15](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=255)** Here, we'll declare a method called getWeight and these type arguments fruit and book must implement this Boxable interface.
>
> **[4:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=264)** This will ensure that both fruit and book will have the weight property defined in them.
>
> **[4:31](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=271)** After this, we'll change the definition of the Box generic type to this Box of T extends Boxable.
>
> **[4:39](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=279)** So when we invoke the Box generic type, T can be replaced by anything that implements the Boxable interface.
>
> **[4:46](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=286)** Lastly, we'll add one more method to the Box class which is getTotalWeight.
>
> **[4:52](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=292)** And as the name suggests, it'll get the total weight of all the items inside the box.
>
> **[4:56](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=296)** This will give us a chance to use the getWeight method from the Boxable interface.
>
> **[5:02](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=302)** Now let's go ahead and execute the steps for the bounded types demo.
>
> **[5:05](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=305)** The first step is to create an interface Boxable and declare that method that we need which is getWeight.
>
> **[5:12](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=312)** So let's head back to the IDE and on a source folder, we'll create an interface this time.
>
> **[5:18](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=318)** Let's choose the option of interface here and name this Boxable.
>
> **[5:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=324)** And inside this, we'll declare a method.
>
> **[5:27](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=327)** This is an interface so it'll be a declaration of the method.
>
> **[5:30](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=330)** Let this method return a type of double and let's call it getWeight.
>
> **[5:39](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=339)** So that's the interface.
>
> **[5:40](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=340)** The next step is to add Boxable bound to the Box class.
>
> **[5:45](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=345)** So let's go back and open the Box class.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=348)** Let's go right at the top and on line number six, instead of Box of T, now we'll say Box of T extends Boxable like that.
>
> **[5:59](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=359)** Now we'll have to be a little patient here because the moment we change the definition of the Box class on line number six, we'll get a series of related problems.
>
> **[6:07](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=367)** Let's look at them one by one.
>
> **[6:10](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=370)** If you click on Related Problems and let's see where it lands.
>
> **[6:14](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=374)** So it's Box Utils that's going to have the problem.
>
> **[6:17](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=377)** So let's open Box Utils class and we are getting a compilation error on line number five.
>
> **[6:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=384)** It says that the type parameter T is not within its bound.
>
> **[6:28](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=388)** Should implement T Boxable interface.
>
> **[6:31](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=391)** Yes, that's correct.
>
> **[6:32](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=392)** Now since we changed the box declaration to go ahead and include a bounded type, which means the generic method which is trying to access that T parameter of box should also have the corresponding changes made.
>
> **[6:45](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=405)** So now we'll have to go ahead and say T extends Boxable here as well.
>
> **[6:53](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=413)** So this spare of angle brackets in which you're mentioning the bounded type is the T that you're declaring for this method.
>
> **[7:01](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=421)** And once this is correct, only then you'll be able to use the T in the parameter here.
>
> **[7:07](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=427)** Now once we make this change, we have two related problems.
>
> **[7:10](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=430)** So let's click that and it gives us problem in the TestBoxGenerics class.
>
> **[7:15](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=435)** So let's go ahead and open that and let's see what the problems are.
>
> **[7:22](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=442)** So first problem is on line number five.
>
> **[7:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=444)** We say that the book type argument that is passed on line five is giving us a problem.
>
> **[7:30](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=450)** So let's see what that problem is.
>
> **[7:32](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=452)** Let's read the error.
>
> **[7:33](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=453)** It says that type parameter book is not within its bound.
>
> **[7:38](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=458)** Should implement the Boxable interface.
>
> **[7:41](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=461)** That's what we want. Correct?
>
> **[7:42](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=462)** We want that our type arguments must definitely implement the Boxable interface.
>
> **[7:47](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=467)** If they do, then it'll be ensured that they have that property weight.
>
> **[7:52](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=472)** So let's go ahead and make sure that the book implements the Boxable interface.
>
> **[7:57](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=477)** So let's change the declaration on line number three and say Book implements Boxable like that.
>
> **[8:06](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=486)** Now in Java, whenever you implement an interface, yes you will have to give an implementation to the method that was declared in the interface.
>
> **[8:13](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=493)** Now if you look in Boxable, the method is getWeight.
>
> **[8:17](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=497)** And if you come back to book, fortunately we already have the weight property on line number six for which we already have the getWeight method implemented.
>
> **[8:26](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=506)** So if we do not really have to code any other logic here.
>
> **[8:29](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=509)** We are all set.
>
> **[8:30](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=510)** Let's go to the TestBoxGenerics class again and we see that the error on line number five is gone.
>
> **[8:36](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=516)** There is another error on line number 12 and it is as expected.
>
> **[8:39](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=519)** It's the other type argument that we're talking about.
>
> **[8:42](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=522)** So let's go ahead and ensure that fruit as well implements Boxable.
>
> **[8:50](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=530)** Now here as well, since we already have the weight property, we have a getWeight method that's available on line 28.
>
> **[8:58](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=538)** So we do not have to give any special logic to this method.
>
> **[9:01](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=541)** We are good there as well.
>
> **[9:03](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=543)** So now the errors are gone.
>
> **[9:06](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=546)** The next step will be to add a method to the Box class which is the getTotalWeight and this should use the Boxable API.
>
> **[9:15](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=555)** So we are going to add this getTotalWeight method to the Box class.
>
> **[9:21](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=561)** Yes and if you see, now that we're inside Box class, all the related problems here have vanished as well.
>
> **[9:28](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=568)** So let's go ahead and add that method.
>
> **[9:30](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=570)** Let's say public.
>
> **[9:33](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=573)** This will return a value of of the type double and let's call this getTotalWeight.
>
> **[9:42](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=582)** What we're going to do here is we are going to iterate that list of items that we have on line Number seven, pick up each item, get the weight of each individual item, sum it up and return that as a double value.
>
> **[9:55](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=595)** This is what we want to do in this method.
>
> **[9:57](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=597)** Now there are two approaches to this.
>
> **[9:59](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=599)** You can either use traditional Java code where you iterate that list of items using the for loop and then you grab the weight of every item and keep adding it to the weight property.
>
> **[10:11](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=611)** But the other way is to use the stream API which is very exciting.
>
> **[10:15](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=615)** This is the feature that is available in Java eight.
>
> **[10:17](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=617)** So we will go ahead with that.
>
> **[10:19](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=619)** We'll say return this start items.
>
> **[10:24](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=624)** So the first part is we access the items list.
>
> **[10:27](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=627)** Now we are going to run the stream method on it.
>
> **[10:30](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=630)** This will give us a stream of those items.
>
> **[10:32](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=632)** And every item that we get in the stream, we are going to map it to a double value.
>
> **[10:39](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=639)** Why double value?
>
> **[10:40](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=640)** Because the weight data type is double.
>
> **[10:43](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=643)** And when you say map to double, you'll have to provide this method of function which will ensure that you get a double value.
>
> **[10:49](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=649)** So the double value could be returned by the getWeight method of the Boxable class.
>
> **[10:56](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=656)** So let's feed that here, Boxable.
>
> **[10:59](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=659)** I'm going to use method references concept and access the getWeight method.
>
> **[11:05](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=665)** Once you get that double value, you just have to invoke the sum method which is going to sum up all the weights and return that as a double value to you.
>
> **[11:14](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=674)** So it is as simple as writing this one line of code which will give you the total weight.
>
> **[11:19](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=679)** If you're not very comfortable with this Java eight streams API, you can definitely write code something like this.
>
> **[11:27](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=687)** So you'll iterate the list of items.
>
> **[11:29](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=689)** So we say for every T in this .items.
>
> **[11:37](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=697)** You need to calculate the weight.
>
> **[11:39](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=699)** And before that, just on line number 26, we will take a double property and set this to 0.0.
>
> **[11:50](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=710)** This is a local variable and on line 27, we have the for loop.
>
> **[11:55](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=715)** Please note that we are using the enhanced for loop here.
>
> **[11:58](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=718)** And then you can just say TotalWeight plus equal to t.getWeight.
>
> **[12:07](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=727)** That is all that you have to do.
>
> **[12:09](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=729)** So this is how you'll traditionally write the code in order to calculate the weight but I'll still prefer the streams API.
>
> **[12:15](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=735)** So I'm going to take this off and save the score which will return us the total weight.
>
> **[12:22](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=742)** Let's also delete the extra line that we have and we are good.
>
> **[12:31](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=751)** Let's go ahead and execute the last step which is testing the program output.
>
> **[12:34](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=754)** So we will now go to the TestBoxGenerics class and on line number 11, we'll say sys out and say total weight of book box and then call the getTotalWeight on the bookBox variable.
>
> **[12:59](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=779)** Let's copy this line and come down and on line number 19, I'll paste it.
>
> **[13:06](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=786)** And I'll just change all the references here to the fruit box.
>
> **[13:10](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=790)** So you'll invoke the getTotalWeight method on the fruit box.
>
> **[13:16](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=796)** All right, so we are all set.
>
> **[13:17](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=797)** Let's go ahead and run this program and everything should work well.
>
> **[13:21](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=801)** Let's observe the output.
>
> **[13:25](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=805)** Okay, so we have the output.
>
> **[13:26](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=806)** I'm just going to expand this console a little bit so that we are able to see everything.
>
> **[13:31](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=811)** Right so in the box we had two items.
>
> **[13:34](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=814)** One was the Harry Potter book which weighed 0.5 and then the Deep Work book, which weighed 0.25.
>
> **[13:40](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=820)** So if you see the total weight is now 0.75 which is correct.
>
> **[13:44](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=824)** And then we had the box of fruits.
>
> **[13:46](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=826)** One item was 0.5 and the other was 0.3 and we've got a total weight of 0.8.
>
> **[13:54](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=834)** Right so that's your demo.
>
> **[13:55](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=835)** This is what we did.
>
> **[13:56](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=836)** We implement a bounded type on a Box generic class.
>
> **[13:59](https://www.linkedin.com/learning/java-generic-classes-14576260/using-bounded-types?u=76281980&t=839)** So now it's ensured that anything that you try to add in the box will always have the weight property.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (8)
> **Code Identifiers:** getweight (10), gettotalweight (6), getcountofitems (1), bookbox (1)
> **Versions:** 0.5 (2), 0.0 (1), 0.25 (1), 0.75 (1), 0.3 (1)
> **Definitions:** is a  (4), is an  (2), means that (1)
> **Env Vars:** api (4), ide (1)
> **UI Navigation:** go to (2), open the (1), click on (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)

#### [Challenge: Write code using generic classes/bounded types](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=6)** - [Instructor] Now it is your turn to solve a programming challenge based on all we learned in the course so far.
>
> **[0:12](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=12)** Here's how the problem statement reads.
>
> **[0:14](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=14)** You need to write a class which performs numerical operations.
>
> **[0:18](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=18)** The constraint on this class is that it should accept only Number and its subtype of values.
>
> **[0:24](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=24)** Then you add a constructor to this class which accepts multiple values for your operands and initializes the corresponding instance variable in your class.
>
> **[0:33](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=33)** After this, you need to add a method which will return you a sorted list of the numbers.
>
> **[0:39](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=39)** Then add yet another method to calculate the maximum value among them.
>
> **[0:44](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=44)** And to do the above, you could always use standard APIs in [[Java]] as far as possible to perform your mathematical operations.
>
> **[0:51](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=51)** So there is no need to sit and write your own logic for either sorting or getting the maximum value among the numbers.
>
> **[0:58](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=58)** Once your solution is ready, you can test it out using a list of Long values.
>
> **[1:02](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=62)** A couple of hints, in case you want a harder challenge, you can skip ahead.
>
> **[1:07](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=67)** You can use the Collections utility class to sort the numbers and get maximum value among the numbers.
>
> **[1:13](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=73)** There are ready-made APIs available in this utility in order to do those functions for you.
>
> **[1:18](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=78)** You will need to use both the Number class and the Comparable interface in your generic type parameter declaration that you do for your class.
>
> **[1:26](https://www.linkedin.com/learning/java-generic-classes-14576260/challenge-write-code-using-generic-classes-bounded-types?u=76281980&t=86)** So pause the video now and go ahead and take the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Write code using generic classes/bounded types](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=0)** - [Instructor] So, how did it go?
>
> **[0:08](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=8)** Were you able to solve the challenge?
>
> **[0:10](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=10)** Let us see one possible solution that I came up with in order to approach our problem statement.
>
> **[0:15](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=15)** For that, let's create a new project.
>
> **[0:19](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=19)** This project will hold only our challenge solution.
>
> **[0:22](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=22)** It's a [[Java]] version 11 project.
>
> **[0:24](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=24)** Let's say next and give it a name.
>
> **[0:27](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=27)** So we will call that ChallengeSolution.
>
> **[0:31](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=31)** The project opens up in a new Window and under the source folder, let's create a package first which is com.[[LinkedIn]].generics.solution.
>
> **[0:48](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=48)** Let's get started now with building the solution.
>
> **[0:50](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=50)** I'll create a class on this package which we will call NumericalOperations.
>
> **[0:58](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=58)** That was the first step, to write a class which handles your mathematical operations.
>
> **[1:03](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=63)** And the constraint on this class was that it should accept number and its subtypes.
>
> **[1:09](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=69)** So now I'm going to define a type parameter for this class and I will choose the letter N for it because this class is supposed to handle mathematical operations.
>
> **[1:20](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=80)** So the convention says that if you are trying to deal with numbers, you always use the type parameter to be named as N.
>
> **[1:27](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=87)** So I'll say N and then I'll define bounded types so that this class accepts only number and its subtypes.
>
> **[1:34](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=94)** So I'll say N extends Number, like that.
>
> **[1:39](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=99)** So now this class will accept anything that is a number or any of its subtypes.
>
> **[1:44](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=104)** The next step was to add a constructor which will accept multiple operands and assign them to an instance variable.
>
> **[1:51](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=111)** So let's create that instance variable first, let me put a command here.
>
> **[1:57](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=117)** So that will be private List of N and let's call this operands.
>
> **[2:04](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=124)** Let's also input the Java.util list interface.
>
> **[2:09](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=129)** Then we add a constructor, NumericalOperations and this should take an argument again of the list type because we want multiples operands to be accepted.
>
> **[2:22](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=142)** So we'll say List of N, let's call this operands as well.
>
> **[2:28](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=148)** Now inside this, the incoming argument operands should be assigned to the instance variables operands that we declared on line number seven.
>
> **[2:36](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=156)** So we will access the instance variable using the, this operator, and we'll create a fresh ArrayList which takes in the incoming operands argument like that.
>
> **[2:49](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=169)** Now, the question is why did we create a new ArrayList This is because in some cases, if somebody tries to pass an immutable list to test a class, then we are trying to set a defense against it.
>
> **[3:01](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=181)** So if there is an immutable list coming in, we are trying to make a copy of that ArrayList so that we can change it later when we try to sort the list.
>
> **[3:10](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=190)** If you take in the immutable list as it is, then you will not be able to change the list.
>
> **[3:14](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=194)** So that's why I create a new ArrayList here.
>
> **[3:18](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=198)** The next step will be to add the method which will help us return a list of sorted numbers.
>
> **[3:23](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=203)** So let's go ahead and do that.
>
> **[3:25](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=205)** This will be public.
>
> **[3:26](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=206)** It has to return a list of sorted numbers.
>
> **[3:29](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=209)** So the return type will be List of N and let's call the method sortNumbers.
>
> **[3:38](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=218)** Now, inside this method, I choose to use the Collections utility class.
>
> **[3:45](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=225)** This class gives me a ready-made API sort which will help me sort my numbers.
>
> **[3:49](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=229)** So I need not write my own logic to get my numbers sorted.
>
> **[3:52](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=232)** To this method, I need to pass my operands, like that.
>
> **[3:57](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=237)** Now, if I do this, I get a compilation problem on line 16 which reads as, that there no instance of type variability that exists so that your N, which is your type parameter, conforms to comparable.
>
> **[4:09](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=249)** So the reason here is that the Collection.sort method internally uses the comparable interface to perform a logic to sort your numbers.
>
> **[4:18](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=258)** So in order to do that, my class NumericalOperations will also have to conform to that comparable interface.
>
> **[4:26](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=266)** So the way to do it is on line seven, let me include the comparable interface using the and operator, like that.
>
> **[4:35](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=275)** So Comparable of N.
>
> **[4:37](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=277)** So this is a case of multiple bounds that we are trying to specify.
>
> **[4:41](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=281)** The class is specified first and then it is followed by the interface.
>
> **[4:45](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=285)** The moment I do this declaration, line number 16 error is gone and we are good.
>
> **[4:50](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=290)** Then we'll just go ahead and return this list so that we have it on our output.
>
> **[4:57](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=297)** Then we had to add yet another method which was to get the maximum value among the numbers.
>
> **[5:03](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=303)** So let's go ahead and do that.
>
> **[5:04](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=304)** Say public, it has to return a number.
>
> **[5:07](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=307)** So the return type has to be N and let's call this, getMax.
>
> **[5:13](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=313)** And I'm again, going to choose the Collections utility classes, getMax method.
>
> **[5:22](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=322)** It's the max method, which will take in your operands as the argument, calculate the maximum value out of it, and then return it to you.
>
> **[5:31](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=331)** So that is all, this is it.
>
> **[5:33](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=333)** This is our NumericalOperations class.
>
> **[5:35](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=335)** We have bounded types, which are multiple that are defined on a class.
>
> **[5:40](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=340)** We have the instance variable, the constructor, and the two methods that we were supposed to add.
>
> **[5:45](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=345)** Now, let's test this out, let's create a test class.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=348)** Let's call it TestSolution, write the main method there.
>
> **[5:54](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=354)** And the test was supposed to be run with the help of a list of long type of values.
>
> **[6:00](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=360)** So let's create that list of long.
>
> **[6:03](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=363)** No, we want the list interface, which is this one.
>
> **[6:07](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=367)** So we will go and eliminate this unwanted input.
>
> **[6:11](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=371)** Okay, so this will be List of Long type of values as we said, let's call this longList, okay.
>
> **[6:18](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=378)** And then instantiate this to newer list.
>
> **[6:21](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=381)** But in Java, you can actually pass a ready-made set of values to the list, using the List.of method.
>
> **[6:30](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=390)** So you can either make a new array list and feed in values, one by one, using the add API or you can directly feed in all the numbers using the List.of API.
>
> **[6:41](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=401)** Let's now insert a comma separated list of values that we wish to insert into the List of Long.
>
> **[6:49](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=409)** So let's say 12, and I'll have to suffix the number with the L letter to indicate that it is a long value.
>
> **[6:56](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=416)** Otherwise it'll be treated as an in integer.
>
> **[6:59](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=419)** So let's go ahead and put in some numbers, right.
>
> **[7:04](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=424)** So those are our numbers.
>
> **[7:06](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=426)** Then we will create an instance of our NumericalOperations.
>
> **[7:09](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=429)** So we'll invoke our generic type.
>
> **[7:12](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=432)** So let's say NumericalOperations of Long because we want the long values to be processed.
>
> **[7:20](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=440)** Let's create a variable and instantiate this, using the diamond operator.
>
> **[7:27](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=447)** And we have to pass the list of course for the constructor (indistinct) So we do that.
>
> **[7:35](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=455)** On the next line, now let's just go ahead and call our methods.
>
> **[7:38](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=458)** So I'm going to say numericalOperations.sortNumbers and print it to the console.
>
> **[7:46](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=466)** Similarly, I will call the numericalOperations.getMax and print that output to the console.
>
> **[7:54](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=474)** So now let's go ahead and run this test and find out if it works well, there we go.
>
> **[8:01](https://www.linkedin.com/learning/java-generic-classes-14576260/solution-write-code-using-generic-classes-bounded-types?u=76281980&t=481)** So we have the list of sorted numbers that was returned to us and it looks perfectly sorted and then the max number that is calculated from that list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[LinkedIn]] (1)
> **Code Identifiers:** getmax (3), sortnumbers (2), numericaloperations (2), longlist (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (3)
> **Versions:** version 11 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Generics: Deep Dive

[↑ Back to Table of Contents](#table-of-contents)

#### [Generic class hierarchies](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=0)** - [Instructor] Let us now understand generic class hierarchies but before that, let's do a quick recap of [[Java]] inheritance.
>
> **[0:06](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=6)** When you implement inheritance with Java, you can always assign an object of the child class to a reference variable of the parent class.
>
> **[0:15](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=15)** So let's say you have a class called Animal.
>
> **[0:18](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=18)** This is the super class, and you're going to have a Dog, class which is derived out of Animal.
>
> **[0:23](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=23)** So Dog is the sub-class.
>
> **[0:24](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=24)** When you have this kind of a relationship, you can write a line of code like this, Animal animal = new Dog, which means you have an object of the dog, which is the sub-class, and you can refer to it by a variable of the type Animal, which is the superclass.
>
> **[0:41](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=41)** Additionally, in inheritance with Java, you can always pass child class as an argument to a method that accepts the parent class as a parameter.
>
> **[0:53](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=53)** Let's understand this.
>
> **[0:54](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=54)** Let's say you have a class called AnimalUtils and inside that, you have a static method called walk.
>
> **[1:00](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=60)** This walk method accepts a parameter of the Animal type, which in our case is the super class.
>
> **[1:06](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=66)** When you invoke this method, you can write code like this, AnimalUtils.walk and inside that, you're passing an argument, which is an object of the Dog class.
>
> **[1:17](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=77)** Now, let's talk about generic class hierarchies.
>
> **[1:20](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=80)** Generic classes can always be a part of any hierarchy.
>
> **[1:23](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=83)** So they behave the same as non-generic classes, and the rules of inheritance that we saw a minute ago will apply to all generic class hierarchies as well.
>
> **[1:32](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=92)** However, there are key differences and some rules that we need to take care of.
>
> **[1:37](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=97)** Let's see them one by one.
>
> **[1:39](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=99)** The first is a generic sub-class must always pass the type-parameters up the hierarchy.
>
> **[1:47](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=107)** Let's understand this.
>
> **[1:48](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=108)** We know that list of E and ArrayList of E are connected together by the inheritance relationship in the Java APIs.
>
> **[1:56](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=116)** Now, let's say you choose to write your custom list implementation that extends the ArrayList class.
>
> **[2:03](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=123)** In that case, your code should look like this, public class.
>
> **[2:07](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=127)** The custom list implementation class is CustomList.
>
> **[2:10](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=130)** So CustomList of E extends ArrayList of E.
>
> **[2:15](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=135)** So the type-parameter, E, that we have defined on the CustomList class is also defined as the type-parameter for the super class ArrayList in the extends clause.
>
> **[2:27](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=147)** It is perfectly all right if you do not want to use this E type-parameter anywhere in the CustomList class.
>
> **[2:34](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=154)** So even if the sub-class need not be generic, it still has to pass the type-parameters to support the super class.
>
> **[2:42](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=162)** If you choose not to do this, then you write code like this, public class CustomList extends ArrayList but in that case, you are making a raw use of the parameterized ArrayList class, and we've already learned in our first module, never use raw types when we write code with generics.
>
> **[3:01](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=181)** The next rule is that a generic sub-class can always extend a non-generic parent class.
>
> **[3:09](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=189)** So let's say you have a line of code like this, public class, sub-class of T extends Superclass.
>
> **[3:15](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=195)** Now, the super class here is a non-generic class but on the sub-class, we have a type-parameter, T, defined, and this is perfectly fine.
>
> **[3:24](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=204)** A special case is when you have a generic sub-class that specifies a type-argument on the super class directly in the extents or implements clause.
>
> **[3:36](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=216)** Let's see how.
>
> **[3:37](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=217)** There's a class called IntComparator, and this implements the comparator interface of Java.
>
> **[3:43](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=223)** If you see in the implements clause, we have specified the type-argument of Integer.
>
> **[3:50](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=230)** This is totally possible.
>
> **[3:51](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=231)** This also means that IntComparator class is a generic class.
>
> **[3:56](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=236)** However, these kind of situations are really rare.
>
> **[4:00](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=240)** The next rule is sub-class can always declare more type-parameters.
>
> **[4:05](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=245)** So if you have a declaration like this, public class CustomList of E, S extends ArrayList of E.
>
> **[4:14](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=254)** In this case, we see that the E type-parameter is definitely declared on the custom list because it has to support the E type-parameter of the super class, but CustomList also has an additional type-parameter that is S, which it uses for its own implementation.
>
> **[4:31](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=271)** Lastly, casting is permitted.
>
> **[4:33](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=273)** This means that an object of a generic sub-class can be referred to by a variable of a generic super class.
>
> **[4:41](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=281)** Let's understand that with an example.
>
> **[4:43](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=283)** Let's say you have a variable data which is off the type List of String.
>
> **[4:47](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=287)** On the next line, you write a line like this, ArrayList of String.
>
> **[4:51](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=291)** The variable name is Languages, and that is instantiated to an ArrayList class that is new ArrayList of String.
>
> **[4:58](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=298)** You can always then assign the Language is variable to the data variable.
>
> **[5:04](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=304)** This is totally possible, and this is the same inheritance rule that we anyway see with Java inheritance.
>
> **[5:09](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=309)** Let's do a quick and short demo for the generic class hierarchies.
>
> **[5:13](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=313)** The first step is to create a class, CardboardBox, that extends Box.
>
> **[5:19](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=319)** So now, we are going to create an inheritance relationship between our generic classes.
>
> **[5:22](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=322)** For that, we'll have to create a new class, CardboardBox.
>
> **[5:26](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=326)** So let's head back to the IDE and on a package, let's create a class.
>
> **[5:31](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=331)** Let's call it CardboardBox, and this should extend the Box class.
>
> **[5:38](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=338)** Now, observe something here.
>
> **[5:40](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=340)** If I just say extends Box, I immediately get a warning from the compiler, and it says that I'm making raw use of the parameters-class Box.
>
> **[5:49](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=349)** This is something that you do not want to do.
>
> **[5:52](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=352)** We never want to use raw types in our code.
>
> **[5:54](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=354)** So this has to be Box of T.
>
> **[5:58](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=358)** The class that we are extending has to be Box of T and now, when you extend from a generic super class, then the rule is that the sub-class, which is CardboardBox in our case, has to specify the type-parameters up the hierarchy.
>
> **[6:14](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=374)** Means it has to specify the type-parameters that were already defined on the super class, Box.
>
> **[6:20](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=380)** So we will do that.
>
> **[6:22](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=382)** So we'll say T extends Boxable because that was the pounded type that was defined on our Box class.
>
> **[6:34](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=394)** So we are all set.
>
> **[6:35](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=395)** This is how you create a generic sub-class.
>
> **[6:37](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=397)** Remember that you always need your sub-class to pass those type-parameters that have already been defined on the super class.
>
> **[6:45](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=405)** Next step is to override the getTotalWeight method.
>
> **[6:50](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=410)** Now that we've created an inheritance relationship, we can always go and override methods in the sub-class.
>
> **[6:56](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=416)** So let's go ahead and do that.
>
> **[6:58](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=418)** Let's come inside this CardboardBox class, and I'm just going to type in the getTotalWeight words, and the method definition should get generated.
>
> **[7:06](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=426)** So this is the overridden method.
>
> **[7:09](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=429)** We are not going to implement any special logic in this method.
>
> **[7:12](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=432)** What I can only do is.
>
> **[7:14](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=434)** Let's say, return super.getTotalWeight and let's add 100 grams of weight to this.
>
> **[7:22](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=442)** Why 100 grams?
>
> **[7:23](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=443)** Because this is the weight of the cardboard box itself.
>
> **[7:25](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=445)** So that gets added to the total weight.
>
> **[7:28](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=448)** Right, so that's the simple logic, and the last step will be, then we'll create an instance of the cardboard box, and we will assign it to a Box reference.
>
> **[7:38](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=458)** So this casting now, should totally work.
>
> **[7:40](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=460)** Let's go ahead.
>
> **[7:42](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=462)** Let's create a new test class because this is a separate module.
>
> **[7:45](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=465)** So let's create a fresh test class now.
>
> **[7:47](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=467)** Let's say TestGeneric. Let's spell that correctly.
>
> **[7:53](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=473)** Hierarchies. Let's write the main method.
>
> **[7:57](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=477)** Now, we are going to create two boxes.
>
> **[7:59](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=479)** Let's say CardboardBox of Fruit.
>
> **[8:04](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=484)** Let's call it CardboardBox, and then let's go ahead and say CardboardBox instantiation with the diamond operator.
>
> **[8:11](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=491)** So you don't have to mention the type-argument again.
>
> **[8:15](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=495)** Next, let's also create a box of Fruit, the same type-argument.
>
> **[8:20](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=500)** Let's call it FruitBox and instantiate that again, and what we are going to try now is we'll say FruitBox is equal to CardboardBox.
>
> **[8:34](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=514)** So what we did is we assigned the CardboardBox variable to the FruitBox variable, and this is totally possible.
>
> **[8:41](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=521)** This is casting that is allowed in generic class hierarchies.
>
> **[8:45](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=525)** You have an object of the generic sub-class on line number five that you are trying to refer to by a variable of the generic super class.
>
> **[8:56](https://www.linkedin.com/learning/java-generic-classes-14576260/generic-class-hierarchies?u=76281980&t=536)** That's what we did, and this is totally allowed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6)
> **Definitions:** is a  (4), means that (2), is an  (1)
> **Code Identifiers:** gettotalweight (3)
> **Env Vars:** ide (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Type argument hierarchies](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=0)** - [Instructor] In the previous video, we saw the hierarchies for generic classes.
>
> **[0:04](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=4)** But then what happens to the type arguments?
>
> **[0:07](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=7)** Remember that whenever we invoke a generic class, the type argument is always passed along with it.
>
> **[0:12](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=12)** And type arguments at the end of the day are types, so they'll also have parent-child classes.
>
> **[0:18](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=18)** Well, it is not as straightforward as it is with generic classes.
>
> **[0:23](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=23)** When it comes to type arguments, generics is quite strict.
>
> **[0:27](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=27)** And it requires an exact an match.
>
> **[0:29](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=29)** Let's see how.
>
> **[0:30](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=30)** We know that the class double is a subclass, of the class number in the [[Java]] APIs.
>
> **[0:36](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=36)** Now, just because this relationship is true, that does not mean that an array list of double, becomes a subtype of list of number.
>
> **[0:46](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=46)** This is not possible.
>
> **[0:47](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=47)** That is because, the type argument that was used in the invocation of list is number, and the one which was used in a real is double.
>
> **[0:55](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=55)** And these arguments do not match.
>
> **[0:57](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=57)** This means, that you cannot pass an array list of double argument, to a method that accepts a list of number parameter.
>
> **[1:07](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=67)** Let's see a piece of code for this.
>
> **[1:09](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=69)** Let's say you have a class called Mathutility, and inside that there is a static average method.
>
> **[1:15](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=75)** This method accepts a parameter, of the type list of number.
>
> **[1:19](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=79)** Now, when you invoke this method, like this, Mathutility.average, you cannot pass an argument, which is new array list of double.
>
> **[1:30](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=90)** Why?
>
> **[1:31](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=91)** Because, the type argument that is used in that method argument, is not the same as the type argument, in the method parameter.
>
> **[1:40](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=100)** Consequently, you will not be able to do casting as well.
>
> **[1:44](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=104)** Let's understand how.
>
> **[1:45](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=105)** Let's say you have this piece of code, there is a variable numbers, which is of the type list of number.
>
> **[1:52](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=112)** And there is another variable doubles on the next line, which is of the type array list of double.
>
> **[1:57](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=117)** And it is instantiated to an array list of double object.
>
> **[2:01](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=121)** Given these two lines, you will not be able to assign the doubles variable, to the numbers variable.
>
> **[2:07](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=127)** The reason is the same again.
>
> **[2:09](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=129)** The type argument that was used with the array's class, is not the same as the type argument used with the list.
>
> **[2:16](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=136)** Now, these restrictions that we saw on type arguments, could be a little more relaxed, when we use wildcards.
>
> **[2:22](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=142)** And we're going to look at wildcards, in the subsequent videos in this module.
>
> **[2:27](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=147)** So given all these rules, what are then the valid cases for generic hierarchies?
>
> **[2:32](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=152)** There's one rule that we have to absolutely remember.
>
> **[2:35](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=155)** That is, your subtype relationships are going to be preserved, only when your type arguments have an exact match.
>
> **[2:43](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=163)** Let's see a couple of examples.
>
> **[2:44](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=164)** We know that list and array list, are in a parent-child relationship.
>
> **[2:48](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=168)** So if you create a list of double, and then if you create an array list of double, since the type argument is an exact match here, that's why a real of double is a correct subtype, of list of double.
>
> **[3:01](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=181)** Let's see one more example, which is from our box application.
>
> **[3:04](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=184)** In the previous demo, we created a subclass called cardboard box, which extended the box class.
>
> **[3:11](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=191)** And when we tested that example, we created a box of fruit, and a cardboard box of fruit.
>
> **[3:16](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=196)** So again, the type of argument is the same here in both cases, which is fruit.
>
> **[3:21](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=201)** And that's why this relationship is also valid.
>
> **[3:25](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=205)** Let us do a very quick demo, for the type argument hierarchies.
>
> **[3:29](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=209)** So the first step is to create a class apple, which extends fruit.
>
> **[3:34](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=214)** So now we are trying to create a parent-child relationship, for a type arguments that we pass when we invoke our generic types.
>
> **[3:40](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=220)** So let's head back to the IDE, and create a class apple.
>
> **[3:45](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=225)** This will be a class, not an annotation.
>
> **[3:48](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=228)** Okay.
>
> **[3:49](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=229)** And let this extend the fruit class.
>
> **[3:53](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=233)** And the moment you do this, it'll tell you that there is no default constructor available in the fruit class, So you will have to create a constructor, matching the super class constructor.
>
> **[4:03](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=243)** So there we go.
>
> **[4:05](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=245)** The next step will be to create a box of apple instance.
>
> **[4:09](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=249)** So let's go to our test class now.
>
> **[4:12](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=252)** Test generic hierarchies.
>
> **[4:15](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=255)** And I'm just going to put a comment here, type argument Hierarchies.
>
> **[4:23](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=263)** So we know, that this demo specifically for type arguments.
>
> **[4:26](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=266)** So let's go ahead and create a box of apple instance.
>
> **[4:30](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=270)** Like that.
>
> **[4:33](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=273)** Say apple box, and just instantiate this to the box object.
>
> **[4:39](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=279)** Next step is to assign a box of apple reference, to a box of fruit reference.
>
> **[4:47](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=287)** And on line number seven, we already have a fruit box variable, which is of the type, box of fruit.
>
> **[4:53](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=293)** So we are going to say fruit box, equal to apple box.
>
> **[4:58](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=298)** We want to assign the box of apple variable, to the box of variable.
>
> **[5:03](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=303)** And if you see, you get a compilation problem.
>
> **[5:06](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=306)** It says that the required type is box of fruit, but you're providing box of apple.
>
> **[5:10](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=310)** And this is because, there is no exact match, on the type argument that you passed, when you created both of those boxes.
>
> **[5:19](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=319)** So this is how it works for type arguments.
>
> **[5:21](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=321)** And we've already seen the valid cases for hierarchies.
>
> **[5:26](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=326)** Do not forget that the type argument, must be an exact match.
>
> **[5:30](https://www.linkedin.com/learning/java-generic-classes-14576260/type-argument-hierarchies?u=76281980&t=330)** So let's comment out this quote, because it'll lead to a compilation error, and the project will not build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** ide (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Understand type erasure in generics](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=0)** - [Instructor] Let us now understand what type erasure is.
>
> **[0:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=3)** When you write code with generics.
>
> **[0:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=5)** And then when you compile that code the generics information is erased or removed.
>
> **[0:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=11)** This process is called type erasure.
>
> **[0:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=13)** This essentially means that generics provides type safety checks only at the compile time.
>
> **[0:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=19)** And this information is not carried in the bytecode that gets executed at runtime.
>
> **[0:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=26)** So what really happens in the type erasure process.
>
> **[0:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=28)** In this the [[Java]] compiler is going to replace your type parameters.
>
> **[0:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=33)** And there are two scenarios here.
>
> **[0:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=35)** One is when your generic type has unbounded type parameters.
>
> **[0:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=39)** In that case the compiler will re place those type parameters with the Object type.
>
> **[0:45](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=45)** The second scenario is when your generic type has bounded type parameters.
>
> **[0:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=49)** In that case, the parameters will be replaced with the corresponding bounds.
>
> **[0:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=54)** In addition to this, the compiler also ensures that it applies all the appropriate casts to maintain the compatibility with the types that specify your type arguments.
>
> **[1:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=67)** This means that the type safety checks and the implicit costs that were available at the compile time will apply at runtime as well.
>
> **[1:16](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=76)** Let us see a couple of examples and then let's see how the source and compiled code differs in type erasure.
>
> **[1:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=83)** Let's say you have a class Box of T or example in the application.
>
> **[1:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=88)** And inside that you have an instance variable data which is of the type T.
>
> **[1:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=93)** When this code compiles it will look like this, public class Box.
>
> **[1:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=99)** And now you see that the type parameter that was defined is gone.
>
> **[1:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=104)** It's erased.
>
> **[1:45](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=105)** When you come inside that class the data variable that you had the type of that data is now changed to Object.
>
> **[1:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=114)** So this is what happens.
>
> **[1:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=115)** The type parameter T is going to be replaced by the object type.
>
> **[2:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=120)** And that is because this Box of T is an unbounded generic type.
>
> **[2:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=126)** The other example is with the bounded types.
>
> **[2:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=128)** So let's say you have a class Box of T extends Boxable.
>
> **[2:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=132)** And inside you have a data variable again, the instance variable, which is of the type T.
>
> **[2:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=137)** When this code compiles it'll look like this, public class Box, again, that bounded type in formation is gone and inside the T is replaced by the Boxable type.
>
> **[2:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=150)** That is because Boxable is the first bound that it found in your generics source code.
>
> **[2:36](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=156)** So this is how the source and compiled code will look like.
>
> **[2:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=159)** And please note that this compiled code that you see is not the exact bytecode, it a representation of how the compiled code would look like.
>
> **[2:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=168)** So now the question is why is this type erasure needed?
>
> **[2:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=172)** There are a few reasons, let's understand.
>
> **[2:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=174)** First is to maintain or support legacy code.
>
> **[2:57](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=177)** But before the advent of generics all the code was written in Java with raw types.
>
> **[3:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=183)** When generics came in Java could not introduce any breaking changes in the older code.
>
> **[3:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=189)** It could not ignore it.
>
> **[3:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=190)** It could not do away with it.
>
> **[3:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=192)** It also needed a mechanism to ensure that today when you write code with generics, you are able to pass parameterized types to methods with raw types and vice versa.
>
> **[3:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=204)** So in order to maintain this compatibility with the pre generics code, and to ensure that the old and the new code work in harmony with each other.
>
> **[3:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=214)** The type erasure process was formulated.
>
> **[3:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=217)** The other reason was to ensure that there are no new classes created for parameterized types.
>
> **[3:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=223)** So when you invoke a generic type, let's say box of fruit or list of integer, there are no separate classes that get created for these invocations.
>
> **[3:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=232)** The last reason is to ensure that there is no runtime overhead.
>
> **[3:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=236)** This means that the type safety checks and the implicit casts that you got at compile time.
>
> **[4:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=241)** None of them will apply at runtime.
>
> **[4:04](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=244)** So there is no additional processing, no overhead.
>
> **[4:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=247)** Also, there is neither an improvement in the performance nor a reduction.
>
> **[4:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=252)** So at the end of the day, the performance of a generics list will be exactly the same as that of the raw list.
>
> **[4:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=259)** Type erasure process applies to generic types which means generic classes, generic interfaces, and methods.
>
> **[4:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=267)** There is one last bit of information that we need to understand in type erasure.
>
> **[4:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=272)** That is generic's [[Metadata]] in the .class files.
>
> **[4:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=275)** In order to do this let's look at the decompiled version of the ArrayList class in our IntelliJ IDE.
>
> **[4:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=282)** So let's head back to the IDE and let's open the ArrayList class.
>
> **[4:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=286)** So let's open GenericsCode and somewhere we have referenced the ArrayList class.
>
> **[4:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=290)** Yeah, on line number eight.
>
> **[4:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=291)** So I'm just going to say, Ctrl + Click.
>
> **[4:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=295)** This file that you see is the decompiled class that is provided by IntelliJ IDE.
>
> **[5:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=302)** And in this you would assume, or you would expect that the generics information is missing.
>
> **[5:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=309)** So let's go and see the declaration.
>
> **[5:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=311)** Let's scroll at the top.
>
> **[5:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=313)** And if you see on line 108 you still see the generics information.
>
> **[5:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=317)** You still see ArrayList of E, AbstractList off E, et cetera.
>
> **[5:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=322)** So this information that you see is actually the metadata information about generics that is preserved in your .class file.
>
> **[5:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=330)** Now your .class file does not have only the bytecode.
>
> **[5:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=333)** It also has a lot of metadata.
>
> **[5:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=335)** And one piece of this metadata is the generics information.
>
> **[5:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=339)** Question is why do you need it?
>
> **[5:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=342)** This is needed in case when your code is going to be used or consumed by somebody else.
>
> **[5:47](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=347)** Let's understand this scenario.
>
> **[5:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=349)** Let's say you have Box APIs all coded and ready to be shipped.
>
> **[5:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=352)** Now there is a third party that wants to consume the Box APIs.
>
> **[5:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=356)** So this third party is going to refer all your .class files in their project.
>
> **[6:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=361)** And let's say there is a developer in the environment of the third party who wants to write a code line like this.
>
> **[6:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=367)** Box of chocolate, chocolates equal to new Box.
>
> **[6:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-erasure-in-generics?u=76281980&t=371)** Now in order that the local compiler on that developer's machine understands that your Box APIs do support generics We need that generics information preserved in the .class files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (4), [[Java]] (3)
> **Definitions:** means that (2), is a  (2), is called (1), is an  (1)
> **Env Vars:** ide (3)
> **Tools:** intellij (2)
> **UI Navigation:** open the (1)
> **Exercise Files:** source code (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Understand bridge methods](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=0)** - [Instructor] One effect of the type erasure process is a generation of bridge methods.
>
> **[0:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=5)** This is applicable in certain unanticipated situation where some subclasses extend generic classes and they're needed, because the type erasure for the overriding method in the subclass is different from the type erasure of the method in the superclass.
>
> **[0:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=21)** So in order to handle this kind of a situation, [[Java]] compiler generates a synthetic method for you which is the bridge method.
>
> **[0:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=29)** Now, this is just an implementation detail.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=32)** You are never going to see this method, you are never going to invoke it either.
>
> **[0:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=37)** This is just an interesting thing that you need to be aware of.
>
> **[0:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=41)** Let's explain bridge methods to ourselves with an example, we know of the Java API interface comparator it's used to compare to objects and it looks like this, public interface comparator of T, T is the type parameter here.
>
> **[0:55](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=55)** And inside we have a method compare which has got two parameters of the T type.
>
> **[1:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=61)** Now let's say you to write your own competitor implementation, to compare two integer objects.
>
> **[1:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=66)** In that case you can write a class like this, public class int comparator, implements comparator of integer.
>
> **[1:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=74)** So if you recollect a generic class hierarchy's discussion we had stated that sometimes a sub class can specify a type argument directly for the super type in the implements clause.
>
> **[1:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=86)** This is that case.
>
> **[1:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=87)** Because of this, int competitor becomes a generic clause, and that's why the compare method of int comparator has parameters of the integer type.
>
> **[1:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=97)** Now, when both of these entities get compiled, after type erasure this is they look like.
>
> **[1:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=104)** The comparator interface looks like this, public interface comparator and now the type parameter T is erased.
>
> **[1:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=111)** And inside, we are left with the compare method whose parameters are of the object type.
>
> **[1:57](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=117)** As far as our class is concerned which is int comparator, it looks like this, public class int comparator implements comparator, and now the type argument for the comparator interface in the implements clause is erased.
>
> **[2:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=130)** Inside we are left with a compare method whose parameters are of the in type.
>
> **[2:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=135)** So now you see that the type erasure process in both of these yields different results, the parameters in the compare method of the subclass are of integer type.
>
> **[2:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=145)** Whereas the parameters in the compare method of the comparator interface are of the object type.
>
> **[2:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=151)** This means that your int comparator class does not technically override the compare method because the signatures are different.
>
> **[2:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=160)** So in order to make this work the compiler will add an additional method for you which is the bridge method.
>
> **[2:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=166)** And it looks like this, the line that is marked in red is the bridge method that was generated by the compiler.
>
> **[2:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=172)** The signature of this method is exactly same as the one that you'll find in the super class version.
>
> **[2:57](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=177)** Then this bridge method internally calls the subclass version of the compare method.
>
> **[3:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-bridge-methods?u=76281980&t=182)** So this is how Java compiler solves the type erasure issue for you and preserves polymorphism in generic types after type erasure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** api (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Understand type inference and target types](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=0)** - [Narrator] Let us understand what type inference is.
>
> **[0:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=3)** We have introduced ourselves to this topic in the first module when we use the diamond operator.
>
> **[0:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=8)** In order to know this concept better we need to know a term called type witness.
>
> **[0:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=13)** This is a way of informing the compiler about the type argument that you intend to use in a generic type invocation.
>
> **[0:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=21)** Let's understand this quickly with a piece of code.
>
> **[0:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=23)** Let's go back to the IDE and I will create a class which is called test type inference.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=32)** So we do all the testing for the type inference demos in this class.
>
> **[0:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=37)** And inside that, let's try the main method.
>
> **[0:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=39)** Let's put a comment here.
>
> **[0:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=41)** That this is the type witness demo.
>
> **[0:45](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=45)** Now I'll write a single line of code.
>
> **[0:47](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=47)** I'll grab the collections utility package.
>
> **[0:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=49)** And in that there is a method called empty list.
>
> **[0:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=53)** Now, if I just invoke this method, I do not know what type of list is returned out of this method.
>
> **[1:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=60)** Well, the compiler already knows about it, it has detected it, but we as observers don't know about it.
>
> **[1:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=66)** So now, I'm going to find out what is the type of list that was returned.
>
> **[1:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=70)** And I will do that using a [[Java]] 11 feature of the var keyboard or the var keyboard, as they say.
>
> **[1:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=77)** the var keyboard, which is this allows you to create a local variable without mentioning a data type to it.
>
> **[1:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=85)** So I'll say var, and I'll give this variable a name, let's say list and then assign collections dot empty list to that variable.
>
> **[1:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=93)** The moment I do this, you see that intelligent hint and tells me that this is a list of object.
>
> **[1:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=99)** So now I know that this was list of object, but all this while the compiler knew about it.
>
> **[1:45](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=105)** Now let's say I intended to return a list of strings out of this method invocation.
>
> **[1:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=111)** In that case, I will have to explicitly place a pair of angle brackets like that in front of the name of the method and then put in the type that I wish to use, like that.
>
> **[2:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=123)** The moment do that, the IDE is going to hint that this is a list of string.
>
> **[2:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=129)** So this type that I mentioned in a pair of angle brackets just before the name of the method is called the type witness.
>
> **[2:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=137)** Where you're telling the compiler about the type argument that you wish to use.
>
> **[2:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=141)** Now, in most of the typical coding scenarios we do not need to do this.
>
> **[2:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=145)** That is because the compiler is smart enough and infer these type arguments for us.
>
> **[2:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=151)** And that is through a process called type inference.
>
> **[2:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=155)** So type inference is the compiler's capability to look at your method definition, look at its invocation and in further type argue accordingly.
>
> **[2:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=166)** The inference algorithm runs in such a manner that it always picks the most specific type that satisfies both the arguments that you pass and the written type where you collect the result.
>
> **[2:58](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=178)** Let's understand this with another code example.
>
> **[3:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=181)** We are going to come out of this main method and write a method here.
>
> **[3:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=185)** Let's say, pick one, that's the name of the method.
>
> **[3:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=188)** It'll take in two objects as parameters and return one of them at random.
>
> **[3:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=194)** So let's go ahead and write that method.
>
> **[3:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=195)** Public static.
>
> **[3:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=197)** This is a generic method.
>
> **[3:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=198)** So we'll declare the T, it returns a T as well.
>
> **[3:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=203)** And let's call this pick one and the parameters will be T one and T two of the type T.
>
> **[3:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=211)** We'll write a simple logic inside this.
>
> **[3:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=212)** We'll say, if math dot random is greater than 0.5 then we return T one, else we return T2.
>
> **[3:47](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=227)** So the math taught random call that we did on line number 12 returns numbers between zero and one randomly.
>
> **[3:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=233)** So 50% of the times this method will return T one the other 50% times it'll return T2.
>
> **[3:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=239)** Now let's in this method, pick one from a main method.
>
> **[4:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=242)** So let's go here on line number 10, I will put a comment saying this is type inference demo, and let's call pick one.
>
> **[4:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=253)** Now I will pass in two arguments to this, one is the integer type, and the other let's say is of the double type, like that.
>
> **[4:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=263)** And let's grab the result of this method in a number type.
>
> **[4:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=269)** So now the inference algorithm will see your line number 11 which is the invocation, looks at your definition which is line 14.
>
> **[4:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=277)** And now it wants to decide, what should be in this T.
>
> **[4:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=282)** And it has three choices.
>
> **[4:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=283)** One is the number type that we see on the return value.
>
> **[4:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=286)** The other is the in integer, which was one of the arguments.
>
> **[4:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=290)** And the third one was a double, which is the other argument.
>
> **[4:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=294)** And number is the one that will suit all three the return as well as the arguments.
>
> **[4:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=299)** And that is why this code compiles well.
>
> **[5:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=301)** However, let's say if you try to change this type to an integer value, like that, we get a compilation error.
>
> **[5:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=310)** It says that required type is integer but you provided a number.
>
> **[5:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=315)** So that is a problem here.
>
> **[5:16](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=316)** It knows that this is an integer.
>
> **[5:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=319)** This is well is an integer, but this is a double.
>
> **[5:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=322)** And it cannot cost integer to double.
>
> **[5:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=324)** So then, that operation becomes incompatible.
>
> **[5:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=328)** And that is why it is insisting you to change this return type.
>
> **[5:32](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=332)** So number is the one that will suit all three in this case.
>
> **[5:36](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=336)** And that's why this works well.
>
> **[5:38](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=338)** Let's take another example.
>
> **[5:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=340)** Let's create a fruit object.
>
> **[5:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=344)** And in order to do that I'll have to pass in those constructive arguments.
>
> **[5:47](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=347)** So let's quickly do that.
>
> **[5:48](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=348)** Mango, India, the color was yellow and 0.5 let's say is the weight.
>
> **[5:58](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=358)** This is one object.
>
> **[6:00](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=360)** And the other is an apple object that we create new apple.
>
> **[6:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=367)** Let's give this a name, Royal Gala Brand Apple, the country, let's say Sweden, green apples and weight is 0.3.
>
> **[6:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=382)** And now let's go ahead and call the pick one method.
>
> **[6:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=386)** I'm just going to scroll down a little bit and then say pick one, we pass in fruit and we pass in apple.
>
> **[6:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=393)** Let's also collect the result in a fruit variable, like that.
>
> **[6:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=402)** And if you see this line works well.
>
> **[6:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=404)** So the inference algorithm is again in action.
>
> **[6:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=406)** It looks at line number 16 and it looks at your definition on line number 19.
>
> **[6:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=411)** And now it has two choices.
>
> **[6:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=412)** Fruit was the return type, fruit was also the argument and apple was the other argument.
>
> **[6:58](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=418)** So now we're just trying to decide, which is the most suitable.
>
> **[7:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=422)** And it knows, that you can definitely cast an apple to a fruit.
>
> **[7:05](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=425)** So fruit is now the most suitable that it finds among the arguments, as well as the return type.
>
> **[7:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=431)** Let's say, if we change this to apple.
>
> **[7:16](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=436)** We'll start getting a compilation problem.
>
> **[7:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=437)** It says, "Required type is apple, but you provided fruit."
>
> **[7:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=443)** So again, the inference is in action.
>
> **[7:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=445)** It'll look at apple as a return type, fruit as one argument and apple is another argument.
>
> **[7:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=450)** And now the problem here is that it knows, that it can cost an apple to fruit but it cannot cost this fruit down to apple.
>
> **[7:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=461)** So that's why it is giving you that compilation problem and asks you to change that return type.
>
> **[7:46](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=466)** So it is only going to work with fruit.
>
> **[7:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=469)** Additionally, it'll also work with any type which is up the hierarchy of apple.
>
> **[7:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=474)** So let's say if I take boxable, like that this will also work well because boxable now is the one that's most suitable for both the arguments, as well as the return type.
>
> **[8:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=489)** So this is how that inference algorithm works.
>
> **[8:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=492)** Let us also look at types of type inference.
>
> **[8:15](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=495)** There are three ways in which type inference works.
>
> **[8:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=498)** One is, with instantiation of generic types.
>
> **[8:21](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=501)** And this is done using the diamond operator.
>
> **[8:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=505)** Let's go back to the IDE.
>
> **[8:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=507)** And in our test type inference class, let's go on the next line.
>
> **[8:33](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=513)** I'll put a comment here saying, type inference with instantiation.
>
> **[8:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=520)** And here I'll write a very simple piece of code.
>
> **[8:43](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=523)** I'll create a box instance.
>
> **[8:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=524)** So I'll say box of fruit, fruit box equal to new box of fruit again, and then the constructor call.
>
> **[8:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=536)** Now the code on line number eight in is perfectly fine.
>
> **[8:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=539)** We have a variable fruit box, which is of the type box of fruit and the type argument used there is the fruit type.
>
> **[9:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=547)** Then on the right hand side when we instantiated the box class we passed the type argument fruit again.
>
> **[9:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=554)** While this code will work fine we still want to eliminate that duplicate declaration.
>
> **[9:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=559)** So we could just do a way with the type argument here and retain that pair of empty angle brackets.
>
> **[9:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=567)** So this pair of angle brackets, which is empty there is the diamond operator.
>
> **[9:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=571)** And because of the diamond operator the compiler is now going to run in inference like this.
>
> **[9:36](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=576)** It will look at this variable fruit box.
>
> **[9:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=579)** It knows that it is type of box of fruit.
>
> **[9:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=582)** So now it knows that the type argument is fruit and then it enfers from this context that it is going to be the same type argument on the right hand side as well.
>
> **[9:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=592)** This is how type inference works with instantiation of generic types.
>
> **[9:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=596)** Note however, that you have to use the spare of empty angle brackets.
>
> **[10:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=601)** If you do not do that, then you'll end up creating a raw box.
>
> **[10:06](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=606)** We do not want to use raw types.
>
> **[10:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=608)** So be careful about that.
>
> **[10:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=609)** So I'll just go back and insert that diamond operator again.
>
> **[10:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=613)** The next type is with method arguments.
>
> **[10:16](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=616)** Which means the type inference is going to infer your types with the help of the method arguments that you pass when you invoke the method.
>
> **[10:25](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=625)** So let's go back to the IDE.
>
> **[10:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=627)** So let me open the box class.
>
> **[10:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=630)** And in this class, we'll write a new method, which is called of.
>
> **[10:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=635)** So we are trying who have this method return a box of something.
>
> **[10:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=642)** So let's go ahead and write that method.
>
> **[10:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=644)** Public static, define the bound T extends boxable
>
> **[10:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=653)** let this method return a box of T and let's name this method of.
>
> **[10:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=659)** And the parameter it'll take is of the type T.
>
> **[11:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=663)** So what we'll do inside is, first create an instance of the box.
>
> **[11:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=668)** Box of T equal to new box of T.
>
> **[11:12](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=672)** That will be the diamond operator usage again, after that we invoke the add item method that we've already developed before, and passed that incoming argument T to it, and then return this box.
>
> **[11:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=686)** That is all.
>
> **[11:27](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=687)** A couple of things here, if you observe this method, that we wrote just now does not have any information whatsoever of what type of box it is supposed to return.
>
> **[11:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=700)** We don't know as of now.
>
> **[11:41](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=701)** Secondly, you may be wondering that we are already inside the general class box, then why do we need to define these bounds again?
>
> **[11:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=711)** Well, this is a static method.
>
> **[11:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=713)** For static methods, you always have to declare those bounds.
>
> **[11:57](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=717)** Only instance methods become automatically generic for the generic class.
>
> **[12:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=723)** All right, so now let's go back to the test class and we'll invoke this method.
>
> **[12:09](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=729)** Let's put a comment.
>
> **[12:10](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=730)** This is type inference with method arguments.
>
> **[12:17](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=737)** And let's call that box, of method.
>
> **[12:22](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=742)** And to this I'll pass the fruit object that I created on line number 13, like that.
>
> **[12:29](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=749)** Now, when this invocation happened I really don't know what kind of a box was created.
>
> **[12:34](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=754)** How do I check it?
>
> **[12:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=755)** So we will use that var option again.
>
> **[12:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=759)** And say var box and assign box of, to it.
>
> **[12:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=764)** So now you see intelligent quickly hints me that it is a box of fruit.
>
> **[12:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=769)** Now, why is it a box of fruit?
>
> **[12:51](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=771)** That is because the method argument that we passed when we invoked the of method was the fruit object.
>
> **[12:59](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=779)** So on the basis of this argument, the compiler inferred that the return type must be a box of fruit.
>
> **[13:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=787)** We can do this one more time.
>
> **[13:08](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=788)** Let's say var another box, and say, box dot of, and this time let's pass the apple object.
>
> **[13:19](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=799)** And if you see, now intelligent tells me that it is a box of apple.
>
> **[13:24](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=804)** So on the basis of the method argument that you pass to the of method, the compiler is going to infer what return type it'll have.
>
> **[13:35](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=815)** So this is how type inference with method arguments works.
>
> **[13:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=819)** Let's look at the last one, that is with target types.
>
> **[13:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=822)** This means, that the compiler is going to infer the types based on the target that you're using in order to [[Fetch]] the value of the method invocation.
>
> **[13:53](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=833)** Let's see this with an example.
>
> **[13:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=834)** Let's go back to the IDE.
>
> **[13:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=836)** And for this let us create a new method in the boxUtils class.
>
> **[14:02](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=842)** We are going to write a method in boxUtils class which is going to create an empty box for us.
>
> **[14:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=847)** So let's go ahead and say public static, same thing.
>
> **[14:11](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=851)** T extends boxable and let this return box of T.
>
> **[14:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=858)** Let's call this method empty box.
>
> **[14:23](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=863)** And we are going to do nothing special, just return a new box of T.
>
> **[14:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=868)** That is all.
>
> **[14:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=871)** Again, this method does not have any information of what type of empty box it is going to return.
>
> **[14:37](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=877)** Now let's go ahead and test this out.
>
> **[14:39](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=879)** Let's go to test type inference on the next line.
>
> **[14:42](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=882)** First, I'll put a comment.
>
> **[14:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=884)** This is type inference with target types.
>
> **[14:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=890)** And now let's invoke the boxUtils dot empty box method.
>
> **[14:56](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=896)** So again, when this invocation happens on line 25, I don't know what type of empty box it is.
>
> **[15:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=903)** So let's go ahead and use the var option again in order to find out.
>
> **[15:07](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=907)** Let's say, box equal to.
>
> **[15:13](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=913)** It's a duplicate variable.
>
> **[15:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=914)** Let's go ahead and say empty box.
>
> **[15:18](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=918)** And if you see, intelligent gave me the hint that it is a box of boxable but then you see there is no argument and there was no return type that was captured correctly.
>
> **[15:28](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=928)** So then how is this box of boxable?
>
> **[15:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=931)** That is because if you go back to the empty box method again and you see the bounds defined here, they say T extends boxable.
>
> **[15:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=940)** So that's how it picks up the boxable type to be the return type.
>
> **[15:44](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=944)** And that's why you see box of boxable that was hinted by the intelligent IDE.
>
> **[15:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=950)** Now we'll change this code to something like this.
>
> **[15:52](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=952)** We eliminate the var option.
>
> **[15:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=954)** And instead we'll say, box of fruit.
>
> **[16:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=961)** Fruit box one.
>
> **[16:03](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=963)** And now if you see the empty box invocation yielded me available fruit box one, which is of type box of fruit, and this code compiles perfectly well.
>
> **[16:14](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=974)** So this means that this time the compiler inferred the type based on the target variable inside which you fetched the result of the method invocation.
>
> **[16:26](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=986)** So this is type inference with the target types.
>
> **[16:30](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=990)** Let's try one more time.
>
> **[16:31](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=991)** Box of, let's say apple call this apple box and then say, boxUtils dot empty box.
>
> **[16:40](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=1000)** You see this code compiles perfectly well again and this time, the empty box that was returned out of that method invocation, was a box of apple.
>
> **[16:49](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=1009)** How?
>
> **[16:50](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=1010)** Because the target type was box of apple.
>
> **[16:54](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=1014)** So based on this target type, the compiler inferred that you are trying to return an empty box of apples.
>
> **[17:01](https://www.linkedin.com/learning/java-generic-classes-14576260/understand-type-inference-and-target-types?u=76281980&t=1021)** So this is how type inference works based on the target types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Fetch]] (1)
> **Definitions:** is a  (11), is called (3), is an  (3), means that (1)
> **Env Vars:** ide (6)
> **Cross-References:** go back to (6)
> **Code Identifiers:** boxutils (4)
> **Versions:** 0.5 (2), java 11 (1), 0.3 (1)
> **UI Navigation:** scroll down (1), open the (1), go to (1)
> **CLI Commands:** find (2)

#### [Applying wildcard arguments](https://www.linkedin.com/learning/java-generic-classes-14576260/applying-wildcard-arguments?u=76281980)

#### [Restrictions on generics](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=0)** - [Narrator] We have looked at a couple of rules in generics in the first module, but there is an additional set of restrictions that you need to be aware of.
>
> **[0:08](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=8)** The first one is with type parameters.
>
> **[0:10](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=10)** The rule is that you cannot instantiate a type parameter.
>
> **[0:14](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=14)** This means you cannot write code like this, Tt = new T().
>
> **[0:20](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=20)** Remember that T is just a placeholder and will be replaced by the desired type argument that you pass when you invoke your generic type.
>
> **[0:29](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=29)** The next restriction is for static fields.
>
> **[0:32](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=32)** You cannot declare static fields in your code whose types are type parameters.
>
> **[0:38](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=38)** Static fields or methods are always defined for the class level.
>
> **[0:42](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=42)** They are never associated with any particular instance of the class.
>
> **[0:47](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=47)** So let's say, in your box class, you declare a static field like this, private static T t; and then you create two instances of the box class, Box<Fruit> and Box<Book>.
>
> **[0:59](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=59)** In that case, it is not possible to determine which of these type arguments will replace that T for your static field, so this is not allowed.
>
> **[1:09](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=69)** The next restriction is on the instanceof operator.
>
> **[1:12](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=72)** instanceof operator in [[Java]] is used to check if a variable is an instance of a certain class and this check happens at runtime.
>
> **[1:21](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=81)** Let's say, if you write code like this, Box<fruit>fruitBox = new Box<>(); and then you make a check like this, if (fruitBox instanceof Box<Fruit>).
>
> **[1:33](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=93)** Well, this check will not make any sense because after type erasure, the type argument fruit is going to be erased.
>
> **[1:40](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=100)** So in the end, you will just check whether the fruit box is an instance of the box type.
>
> **[1:45](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=105)** So the compiler does not allow this operation at all.
>
> **[1:49](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=109)** This operator, however, works with unbounded wildcards.
>
> **[1:53](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=113)** For example, let's look at this piece of code, Box<fruit>fruitBox = new Box<>(); and then you make a check where you say if (fruitBox instanceof CardboardBox<?>) and you insert a wildcard character this time.
>
> **[2:07](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=127)** Now, since this is a wildcard character, we really do not care what type argument will replace it.
>
> **[2:14](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=134)** But the type argument fruit will definitely get erased after type erasure.
>
> **[2:18](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=138)** So you will end up checking whether the fruit box is an instance of cardboard box type, which is totally fine, and is allowed by the compiler.
>
> **[2:27](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=147)** The next restriction is on arrays.
>
> **[2:29](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=149)** You are not allowed to create arrays of parameterized types.
>
> **[2:33](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=153)** So a line of code, like this, will not work, Box<Fruit>, which is an array, the name of the array is []fruitBoxArray and that is equal to new Box<Fruit> with a capacity of 10 for that array.
>
> **[2:45](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=165)** This will not work.
>
> **[2:46](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=166)** It's not allowed by the compiler.
>
> **[2:48](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=168)** The next restriction is on method overloading.
>
> **[2:51](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=171)** The rule is that you cannot create an overloaded method, which has got the same type erasure as your original method.
>
> **[2:57](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=177)** Let's say, you have a method called private static void add(Box<Fruit>fruitBox).
>
> **[3:04](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=184)** And then you create an overloaded version of this method by changing the parameter, like this, private static void add(Box<Book>bookBox).
>
> **[3:14](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=194)** After type erasure, both of these methods will look exactly the same.
>
> **[3:19](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=199)** They will be termed as duplicate methods and that is something that's not allowed in Java.
>
> **[3:24](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=204)** The last restriction is with throwables.
>
> **[3:27](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=207)** The first rule is you cannot create a genetic subclass that extends throwable or any of its subtypes.
>
> **[3:34](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=214)** For example, code, like this, class BoxException<T>extends Throwable will not work.
>
> **[3:41](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=221)** The second rule to this is that you cannot use a type parameter in the catch clause when you write code for exceptions in your applications.
>
> **[3:49](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=229)** However, the throws clause with a type parameter totally works.
>
> **[3:54](https://www.linkedin.com/learning/java-generic-classes-14576260/restrictions-on-generics?u=76281980&t=234)** For example, if you have a class, GenericClass<T extends Throwable>, then you can use that type parameter, T, in the throws clause for all methods inside that generic clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **Code Identifiers:** fruitbox (5), fruitboxarray (1), bookbox (1)
> **Definitions:** is an  (5), is a  (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=0)** - [Ketkee] Now that you are equipped with the fundamental knowledge of generics, it would be beneficial for you to pick up and learn the collections framework in detail if you haven't already done so.
>
> **[0:12](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=12)** You can use the course, "Learning Collections in [[Java]]," right here on [[LinkedIn]] Learning.
>
> **[0:17](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=17)** Even if you know the collections framework, it would still make a of sense to look at it again in order to understand the best practices that Java collections framework uses with generics.
>
> **[0:29](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=29)** You can grab the book, "Effective Java" by Joshua Bloch, which covers best practices on all topics in Java.
>
> **[0:37](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=37)** Additionally, you should now be able to read and understand code with generics in any Java or JEE frameworks.
>
> **[0:45](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=45)** Thank you for joining me on this course.
>
> **[0:48](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=48)** Feel free to connect with me on LinkedIn.
>
> **[0:51](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=51)** I'd love to hear your stories on how you apply the learning from this course in your projects.
>
> **[0:57](https://www.linkedin.com/learning/java-generic-classes-14576260/where-to-go-from-here?u=76281980&t=57)** Happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[LinkedIn]] (2)
> **CLI Commands:** make (1)
> **Env Vars:** jee (1)
> **Speakers:** - [ketkee] (1)


## Instructor

- [[Ketkee Aryamane]]

## Resources

- Exercise files available

## Skills Covered

- Generic Programming
- Java

## Path Context

### In [[Building Your Java Skills]]
← [[Java Lambdas And Streams]] | **2 of 6** | [[Java- Testing with JUnit]] →

## Appears In

- [[Building Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)