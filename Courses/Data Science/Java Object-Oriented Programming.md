---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: java-object-oriented-programming-2
url: "https://www.linkedin.com/learning/java-object-oriented-programming-2"
duration_minutes: 122
duration: 2h 2m
level: Beginner
updated: 11/13/2023
learners: 58687
skills:
  - Object-Oriented Programming (OOP)
  - Java
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQG6dQ0gh0wiAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622221555885?e=2147483647&amp;v=beta&amp;t=xMXtc5_DxQJ4qpstpY5PpuaGtxpJcodx_K7fEjknnHg"
linkedin_topic: Data Science
learning_paths:
  - '[[Java Foundations Professional Certificate by JetBrains]]'
prev_courses:
  - '[[Java Essential Training- Objects and APIs]]'
next_courses:
  - '[[Java- Data Structures]]'
path_nav: '[{"path":"Java Foundations Professional Certificate by JetBrains","position":3,"total":5,"prev":"Java Essential Training- Objects and APIs","next":"Java- Data Structures"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/object-oriented-programming-oop
  - skill/java
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java%20Object-Oriented%20Programming.md)

![Java Object-Oriented Programming](https://media.licdn.com/dms/image/v2/C4D0DAQG6dQ0gh0wiAw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622221555885?e=2147483647&amp;v=beta&amp;t=xMXtc5_DxQJ4qpstpY5PpuaGtxpJcodx_K7fEjknnHg)

# Java Object-Oriented Programming

> Are you familiar with Java but want to get the most out of your Java programs? In this course, Kathryn Hodge teaches the basics of object-oriented programming in Java, so you can write code that’s secure, scalable, and easier to troubleshoot. Kathryn begins by showing how object-oriented principles are embedded into the Java language from the first code file you create. She looks at how classes, i

> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2) | 2h 2m | Beginner | 59K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Classes and Objects in Java** (7 videos)
- **3. 2. Encapsulation in Java** (6 videos)
- **4. 3. Inheritance in Java** (6 videos)
- **5. 4. Polymorphism in Java** (8 videos)
- **6. 5. Abstraction in Java** (6 videos)
- **7. Conclusion** (2 videos)

### 1. Introduction

#### Why learn about object-oriented programming in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=0)** - [Instructor] Are you familiar with Java but want to write code that's reusable and maintainable?
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=5)** Then this is the course for you.
>
> **[0:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=8)** I'll show you how to use the object oriented programming model to write code that's secure, scalable and easier to troubleshoot.
>
> **[0:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=16)** We'll start by exploring what object orientation means and show how it's embedded into the Java language from the first code file you create.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=24)** Then we'll discover how classes, instances and constructors embody the idea of representing objects in code.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=32)** We'll also explore how built-in Java libraries leverage object orientation behind and scenes.
>
> **[0:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=39)** In this course we'll try get away from the abstract and focus on concrete practical examples that make the theoretical idea of object orientation real.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=50)** The best design model to follow will depend on what you're building but it's essential to recognize that Java is an object oriented language.
>
> **[0:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=59)** Hi, my name is Kathryn and I'm a software engineer.
>
> **[1:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=62)** Okay, ready?
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/why-learn-about-object-oriented-programming-in-java?u=76281980&t=63)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), let (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### What is object orientation?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=0)** - [Instructor] Everything we see, hear and experience in everyday life can be represented in code.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=6)** In fact, it can be represented in a variety of different ways, depending on how the program's designed.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=13)** Object-oriented programming is a programming model that can help make your code more flexible, reusable and easier to maintain.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=22)** It's based around writing code that's modeled around objects and data.
>
> **[0:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=27)** For example, if we wanted to represent a tree in code we could give it a height, trunk diameter, and anything else we wanted to know about the tree.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=36)** These would be attributes, or data points of the tree.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=40)** We could also give the tree a behavior, the ability to grow and this could change the value of its height and possibly other attributes.
>
> **[0:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=49)** If these attributes and behaviors about the tree were contained in a single unit, we could say that it's organized around the tree object rather than a specific action or behavior.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=61)** That's what makes this object-oriented.
>
> **[1:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=65)** Object-oriented programming comes with its own set of four pillars that define object-oriented design, abstraction, inheritance, encapsulation, and polymorphism.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=77)** We'll explore each of these principles throughout the course.
>
> **[1:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-object-orientation?u=76281980&t=80)** We'll also look at how to achieve these principles in our custom programs, as well as how the Java source code uses these concepts to reduce complexity and encourage code reusability.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Classes and Objects in Java

#### Using classes as blueprints
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=0)** - [Instructor] Almost anything in real life can be represented in code, but how well something is represented is up to us in what we decide to program.
>
> **[0:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=9)** Classes in Java give us a way to model or represent physical objects in code via a blueprint.
>
> **[0:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=17)** A blueprint, or class, contains a set of attributes and behaviors that define an object.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=24)** Let's design a tree object in code using a class.
>
> **[0:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=28)** The attributes might be height, trunk diameter, and maybe even tree type.
>
> **[0:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=34)** Every tree has these properties or attributes, but their values might not be the same.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=40)** That's what makes this Class a blueprint.
>
> **[0:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=43)** It contains the definition of what a Class should be.
>
> **[0:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=47)** As for the behaviors, growing could be a behavior for the tree.
>
> **[0:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=52)** It's an action that the tree takes, rather than an attribute representing the current state of the tree.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=58)** Let's create a blueprint for a tree using a Class in Java.
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=63)** I'm on a Mac, so I'll go ctrl click, and this will allow me to create a new Java Class.
>
> **[1:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=69)** We'll call this Tree.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=71)** And our IDE sets up this Class as an empty Class named Tree.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=77)** A Class doesn't have to have attributes or behaviors, it could be completely empty as we see here.
>
> **[1:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=84)** It could also just have attributes, or just have behaviors.
>
> **[1:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=88)** However, most of the time, a given class will have both.
>
> **[1:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=93)** Let's add some code to the Tree Class so that it actually represents a tree.
>
> **[1:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=98)** Starting with the attributes, we'll have a height and trunk diameter.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=104)** These will have the data type double, meaning they can be represented by decimal values.
>
> **[1:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=111)** While we could represent the type of Tree with a string, we'll represent it with its own enum here called TreeType.
>
> **[2:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=120)** To create an enum, we'll ctrl click on the source folder, select New Java Class, and then Enum.
>
> **[2:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=128)** We'll call this enum TreeType.
>
> **[2:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=133)** An enum is a special type that represents a group of constants.
>
> **[2:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=138)** Here, we'll want those constants to be different TreeTypes.
>
> **[2:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=142)** These are the only values we can give to a variable with the tree data type.
>
> **[2:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=148)** By using an enum, no one can create a macaroni tree, or a money tree, which would be the case, if we used a string.
>
> **[2:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=156)** The only TreeTypes that can exist are those listed in the enum Class.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=163)** To use this enum, all we have to do is use the data type TreeType for a given attribute or variable, which is what we've done here.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=172)** Now our Class has attributes.
>
> **[2:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=175)** Let's add the grow behavior to finish up our definition of a tree.
>
> **[2:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=179)** A behavior is represented by a function.
>
> **[3:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=183)** Our function will return void, and be called grow.
>
> **[3:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=186)** In the implementation, we'll access the height, and trunk diameter of the tree, and increment them accordingly.
>
> **[3:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=195)** To keep things simple, we'll say all trees will grow 10 feet in height, and one inch in diameter when this behavior is used.
>
> **[3:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=204)** However, you could use the type attribute, or other data to inform how much the tree grows.
>
> **[3:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=211)** There are many different ways a tree can be represented in code.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=215)** Great.
>
> **[3:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=216)** Now we've combined the attributes and behaviors related to a tree into a single unit, the Tree Class.
>
> **[3:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=224)** Remember it's a blueprint, because we're only defining the attributes and behaviors of a tree.
>
> **[3:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=231)** We haven't created any trees yet.
>
> **[3:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints?u=76281980&t=233)** Our Class says, "If we wanted to create a tree, this is how it would be represented in our program."

> [!info]- Semantic Content
>
> **Code Keywords:** enum (8), let (4), class. (4), class, (2), type. (2)
> **Env Vars:** ide (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Building objects with a constructor
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=0)** - [Instructor] Classes only represent a general blueprint but they become more tangible when you use a constructor to bring your blueprint to life.
>
> **[0:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=9)** To create trees from our tree class we'll need to add a special type of function called a constructor to construct our tree objects.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=20)** To create a constructor, we'll use the class name tree.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=24)** We don't need a return type because the name of the function, tree, counts as the return type as well, since tree is the class name.
>
> **[0:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=33)** This classifies it as a constructor.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=36)** To build a tree we'll need to know what its height, diameter and tree type should be.
>
> **[0:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=43)** This means we'll need to add inputs to the constructor so that we can construct a custom tree with the appropriate height, diameter and type.
>
> **[0:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=53)** Of course, the body of the function doesn't do anything yet.
>
> **[0:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=57)** We'll need to set up the tree we're building with the appropriate values.
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=63)** Using the, this keyword, we access the tree we're in the midst of creating, and set the height, trunk and type on the left equal to the inputted values on the right.
>
> **[1:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=76)** When this constructor is used, it will create a tree with the inputted height, trunk, and tree type values, let's try it.
>
> **[1:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=85)** To keep our tree class separate from the program we want to execute, we'll create a new class called main.
>
> **[1:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=92)** This will contain our main method where we'll execute the program from.
>
> **[1:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=100)** To create a tree we'll use the constructor, tree with the inputs 25 for the height, 5 for the diameter and our tree will be an oak tree.
>
> **[1:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=111)** In addition to using the name of the constructor we'll also need to add the new keyword.
>
> **[1:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=117)** This will create a new tree from our tree class.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=122)** So, right now, we create the tree but then we throw it away, we don't save it in a variable anywhere.
>
> **[2:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=129)** To save it we'll create a tree variable called myFavoriteOakTree.
>
> **[2:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=134)** We've created our first tree.
>
> **[2:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=136)** If we write myFavoriteOakTree, we'll be able to see all of the attributes, as well as the behaviors we can use on the tree.
>
> **[2:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=146)** To start off, we'll just print out the tree's type.
>
> **[2:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=150)** We'll use system.out.println and run the program.
>
> **[2:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=157)** And it's an oak tree.
>
> **[2:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor?u=76281980&t=158)** By adding a constructor to our tree class and using the constructor in a main method we were able to create our first tree in code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), type. (2), let (1), from. (1), class. (1)
> **Code Identifiers:** myfavoriteoaktree (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (typing) (1)

#### Using concrete instances for application logic
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=0)** - [Instructor] With our first tree created in code we can begin to write out some application logic.
>
> **[0:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=7)** Let's create a program that prints a message if the tree is taller than a 100 feet.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=12)** All right if then access the height of the oak tree.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=18)** And if it's greater than 100 feet we'll print out a message.
>
> **[0:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=23)** We say my favorite oak tree is an instance of the tree class.
>
> **[0:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=28)** It was created from the tree class using the tree constructor and it has all of the attributes and behaviors of a tree.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=36)** Let's create another tree instance.
>
> **[0:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=41)** This tree will be a little shorter and a little wider and it will be a maple tree.
>
> **[0:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=49)** Then we'll add logic to print out if that tree is tall.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=54)** My favorite maple tree, we can access that height attribute again and print out the message if it's tall.
>
> **[1:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=66)** Now, it might be hard to tell between the two print statements in the console.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=71)** So let's add the tree type to the message.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=77)** While we could hard-code oak and maple directly into the string.
>
> **[1:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=82)** Let's dynamically use the instance to resolve the tree type.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=87)** Let's run the code.
>
> **[1:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=90)** It looks like the oak tree is tall but no message from the maple tree.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=94)** So it must not be tall enough to warrant a print statement.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=99)** The maple tree is also an instance of the tree class meaning it has tree attributes and tree behaviors.
>
> **[1:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=106)** However, the values of these attributes differ from the oak tree.
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=112)** These two trees could be the same height or a different height, but the values of these attributes are independent and represent the current state of that tree.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=122)** However, if we added a new attribute or behavior to the tree class it would affect both the maple tree and the oak tree because these are instances of the tree class.
>
> **[2:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=134)** If you change the blueprint it affects the instances created with that blueprint.
>
> **[2:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=141)** Now let's say we wanted to add a behavior to the tree class then announced if the tree was tall.
>
> **[2:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=148)** We've already written the code to do this for our oak and maple tree in the main method, but we can add it to the tree class to make this code usable by all trees.
>
> **[2:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=161)** To add this behavior, we'll create a function in the tree class.
>
> **[2:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=165)** Since we're only printing to the console we'll have it returned nothing or void.
>
> **[2:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=171)** Then we'll call it, announced tall tree.
>
> **[2:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=174)** For our implementation, we can copy one of the if statements from our main class into this function.
>
> **[3:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=183)** Of course, we see a bit of red because the oak tree does not exist in this context.
>
> **[3:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=189)** When a given tree uses this behavior will want to access that trees height, and that trees type.
>
> **[3:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=197)** To do that, we'll replace my favorite oak tree.
>
> **[3:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=200)** The key word this, will use the height and tree type of whatever tree is using this behavior.
>
> **[3:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=207)** To use this function as my favorite oak tree, we'll call it in our main method.
>
> **[3:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=214)** All we have to do is write the name of the tree variable, myFavoriteOakTree and then use the behavior by name with the parentheses.
>
> **[3:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=223)** Since our new behavior announces when a tree is tall we can delete the duplicate code from earlier.
>
> **[3:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=231)** We can also do the same with our maple tree.
>
> **[3:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=234)** Reusing the functionality that's built into the tree class.
>
> **[3:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=238)** That's so much cleaner.
>
> **[4:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=240)** Let's run the code and we get the same output.
>
> **[4:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=244)** With the tree blueprint.
>
> **[4:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=245)** We're able to define a series of attributes and behaviors that are reusable.
>
> **[4:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=251)** And with the instances, we're able to keep track of various trees with their current states.
>
> **[4:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=257)** By using classes and instances in this way we're able to bind state and behavior into one unit.
>
> **[4:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-concrete-instances-for-application-logic?u=76281980&t=264)** This not only makes our program readable to other software developers but also maintainable for when new trees come along.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (4), function (3), type. (2), this, (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** myfavoriteoaktree (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Understanding the difference between class and instance members
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=0)** - [Instructor] So far, we've created a class blueprint and built instances using a constructor.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=6)** We can continue to organize our code by using static and non-static members.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=12)** In fact, we've already been writing code that's non-static.
>
> **[0:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=16)** Non-static members are parts of a class that are accessible via an instance and belong to that instance.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=24)** This means you'll need to create an instance in order to access a non-static member.
>
> **[0:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=30)** In our Tree example, the height, trunk and treeType are all examples of non-static members.
>
> **[0:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=37)** Or specifically, non-static attributes.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=40)** You'll have to create a tree in order to access the values of these attributes.
>
> **[0:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=46)** The announceTallTree behavior is also a non-static member.
>
> **[0:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=51)** It's a non-static method that uses an instance's height and treeType in order to announce whether the tree is tall.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=58)** We could also refer to these non-static members as instance members because you have to create an instance in order to use it or access it.
>
> **[1:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=67)** So what about a static member?
>
> **[1:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=69)** A static member is accessible via the class and belongs to the class.
>
> **[1:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=75)** It should be an attribute or behavior that's not based on a particular instance, but rather belongs to all of the instances of that class.
>
> **[1:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=85)** Height, trunkDiameter and treeType can all vary between different instances, making them non-static members.
>
> **[1:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=93)** One static attribute we can create in our Tree class is trunk color.
>
> **[1:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=98)** Every Tree instance should have this specific trunk color, whether it's a super tall maple tree or an oak tree that's just been planted.
>
> **[1:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=107)** To create a static trunk color attribute, we'll use the keyword static and also give it the data type Color.
>
> **[1:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=114)** For the name, we'll call it TRUNK_COLOR and give the value of a new color using the Color constructor with the appropriate values to create the color brown.
>
> **[2:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=125)** We just created our first static attribute or class attribute, TRUNK_COLOR.
>
> **[2:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=131)** In order to access its value, we'll go to our Main class and use the class name to access it.
>
> **[2:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=139)** This is different from our non-static members because we use the class name, rather than a specific instance name to access the static attribute.
>
> **[2:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=149)** Now, just like we can have non-static instance-based behaviors, we can also have static class behaviors.
>
> **[2:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=157)** Static behaviors or static methods do not rely on a given instance's members.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=163)** Rather, they only rely on class members.
>
> **[2:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=167)** Let's add a static behavior to our Tree class called announceTree.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=172)** To create it, we'll use the keyword static, and all it's going to do is print out a message.
>
> **[2:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=178)** Look out for that tree.
>
> **[3:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=181)** Notice, it does not rely on any instance methods or instance attributes in its implementation.
>
> **[3:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=188)** If it did, we'd get an error saying that the attribute cannot be referenced from a static context.
>
> **[3:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=195)** It also wouldn't make sense because all trees aren't of a certain type.
>
> **[3:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=200)** It varies based on the instance.
>
> **[3:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=203)** If we wanted to use the treeType attribute in this method, we'd have to make this a non-static function.
>
> **[3:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=210)** If it did, we'd get an error saying that the attribute cannot be referenced from a static context.
>
> **[3:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=217)** It also wouldn't make sense because all trees aren't of a certain type.
>
> **[3:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=222)** It varies based on the instance.
>
> **[3:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=224)** If we wanted to use the treeType attribute, we'd have to make this function a non-static method.
>
> **[3:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=231)** However, we could add the TRUNK_COLOR to this implementation since TRUNK_COLOR is a static attribute.
>
> **[3:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=239)** We could write it as Tree.TRUNK_COLOR or simply TRUNK_COLOR since we're in the Tree class.
>
> **[4:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=246)** To use the static method, we simply use the class name and access the behavior.
>
> **[4:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=252)** Let's try it in our Main class.
>
> **[4:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=255)** Tree.announceTree.
>
> **[4:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=258)** You might notice that our Main method is also static and that's because it doesn't rely on any instance members of the Main class.
>
> **[4:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=267)** Typically, if a given method does not rely on instance members, it should be static.
>
> **[4:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=273)** By organizing our code with static and non-static members, we're able to make it easier for others to contribute and make changes.
>
> **[4:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members?u=76281980&t=282)** With this implementation, it's very clear that the TRUNK_COLOR is a property of the class, while height, trunkDiameter and treeType vary depending on the instance.

> [!info]- Semantic Content
>
> **Code Keywords:** static (35), class. (5), let (2), type. (2), function (2)
> **Code Identifiers:** treetype (6), trunkdiameter (2), announcetree (2), announcetalltree (1)
> **Env Vars:** trunk_color (7)
> **CLI Commands:** make (6)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)

#### Exploring a built-in Java class
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of classes and instances, we'll explore the implementation of a built in Java class.
>
> **[0:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=9)** One class we've already seen is the color class.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=12)** We used it by importing Java dot EWT dot color into our tree class and had color represent the color of our tree trunk.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=22)** While we could look at the documentation to learn more about the color class, one of my favorite tips is to use an IDE to click into the class.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=32)** I'm using the IntelliJ IDE to write my Java code but there are many other IDEs that also support this feature.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=40)** To see the source code of the color class, we can command click into the class and go right to the source.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=48)** This class has around 1200 lines of code including the comments, but let's take a look around and see what concepts we recognize.
>
> **[0:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=57)** The color class has a few static attributes or class attributes.
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=63)** These attributes allow us to easily set a default color for a given variable.
>
> **[1:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=69)** Just like we used our trunk color in a previous lesson, we can use the white from the color class.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=77)** Here, we use the static attribute to generate a default white color.
>
> **[1:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=83)** Going back to the color class, let's keep looking around.
>
> **[1:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=86)** We have defaults for almost every common color which makes them easy to reference.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=95)** In addition to the static attributes, the color class also has a few non-static attributes whose values vary depending on the instance.
>
> **[1:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=105)** These attributes have to do with representing a given color value and most of them have been given defaults that can be overwritten using the constructor or another behavior from the class.
>
> **[1:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=117)** Each of these attributes have a fairly verbose comment that gives more details on what the attribute represents.
>
> **[2:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=125)** If these interest you, I encourage you to take some time to read through these comments and get a better understanding of the color class.
>
> **[2:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=133)** This class also has several behaviors.
>
> **[2:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=137)** There's a static method to test whether a given color range is valid with red, green, blue and alpha values.
>
> **[2:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=146)** We also have the constructor we use to create our trunk color along with other ways to construct Java colors.
>
> **[2:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=156)** As for the instance methods, there are ways to retrieve the amount of green, red and blue in a given color.
>
> **[2:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=164)** There are also ways to create a new color based on the current color, with the brighter and darker methods.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=172)** To use the features of the built in color class, we do exactly what we did with our tree class.
>
> **[2:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=178)** To use an instance method, we simply use the instance name and the name of the method.
>
> **[3:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=184)** Let's create a default blue.
>
> **[3:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=189)** Then to create a brighter blue, we can take the default and use the brighter functionality.
>
> **[3:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=200)** With the instance name and a dot, the IDE automatically pops up with the available instance methods.
>
> **[3:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=207)** This is one of the benefits to using an IDE as well as organizing your code with instances in classes.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=215)** We can also directly command click on the instance method and be taken directly to its implementation, wherever it may live.
>
> **[3:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=224)** This can help you become more familiar with the code a given program is using.
>
> **[3:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=229)** Ultimately, exploring the Java source code is a great way to get more familiar with how to code in Java.
>
> **[3:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-a-built-in-java-class?u=76281980&t=236)** With both our tree class and the color class, we saw how to bind state and behavior by using classes and instances.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (7), class, (5), static (5), let (3)
> **Env Vars:** ide (4), ewt (1)
> **Exercise Files:** source code (2)
> **Documentation:** the documentation (1)
> **Tools:** intellij (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### Challenge: Build an employee class
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=5)** - [Instructor] It's time to practice representing objects in code by creating an employee with Java.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=12)** In this challenge, you'll represent an employee in Java by creating an employee class.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=18)** The class should have attributes for the employee's name, age, salary and location.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=24)** Feel free to get creative and add more attributes if you'd like.
>
> **[0:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=28)** The employee class should also have a raise behavior that raises the employee's salary.
>
> **[0:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=34)** Whether this behavior has a parameter or not is up to you.
>
> **[0:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=39)** As a part of this challenge you'll have to determine which members if any, should be static versus non-static.
>
> **[0:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=46)** Once you've created your employee class you should create another class for building your employee instances.
>
> **[0:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=53)** In the main function of the main class create at least two employees and give one employee a raise then print out the salaries of both employees to ensure the raise took effect.
>
> **[1:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-build-an-employee-class?u=76281980&t=66)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (3), static (2), class. (1), function (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Build an employee class
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=0)** - [Instructor] Let's represent an employee, in Java, with a class.
>
> **[0:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=10)** We'll create a new class, call it employee, and give it the appropriate attributes.
>
> **[0:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=15)** We'll say it has a name that's a string, a location that's also a string, a double salary, and an age that's an int.
>
> **[0:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=26)** These will all be non-static attributes, because they vary based on each employee instance.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=32)** One might say, all employees are based in a single location, in which case the location might be static.
>
> **[0:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=39)** Another option is to make an enum for the location, so there are only a set of places where a given employee might work from.
>
> **[0:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=47)** It's all up to you on how you want to represent an employee object in code.
>
> **[0:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=53)** To create employees, we'll need a constructor.
>
> **[0:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=57)** We'll write Employee, and we'll want to create a custom employee with given name, location, salary, and age attributes, so we'll need to pass those in as parameters, then we'll set up our employee.
>
> **[1:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=79)** We'll also add a raise salary function that increases a given employees salary by 20%.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=87)** We could add a parameter, to this function, where the user provides a given percentage to raise the salary, or change the function to increment the salary a constant amount, say $10,000.
>
> **[1:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=100)** Since our requirements were not very specific as to how much to raise the salary, the implementation is up to you.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=108)** With the employee class finished, let's create some employees and code.
>
> **[1:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=113)** We'll create a main class, with the main method and create two employees.
>
> **[2:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=124)** Using the constructor we'll create one employee, Sally Roberts, the location will be Los Angeles and Sally will make $70,000 a year.
>
> **[2:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=138)** Sally is also 34.
>
> **[2:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=142)** For the second employee we'll have Matt Johnson who will be based in New York, make $65,000 a year and be 32.
>
> **[2:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=155)** We'll give employee two a raise.
>
> **[2:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=157)** So we'll access the instance and use the raise salary behavior, then we'll print out the salaries of each employee.
>
> **[2:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=166)** Let's run the code.
>
> **[2:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=169)** We see that the second employee has a salary of 78,000, up from 65,000.
>
> **[2:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=175)** The first employee's salary remains the same.
>
> **[2:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-build-an-employee-class?u=76281980&t=179)** In our Java class, we were able to implement a core concept in object oriented programming by combining the attributes and behaviors of an employee into a single reusable unit.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (5), let (3), class, (3), function (3), static (2)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. 2. Encapsulation in Java

#### What is encapsulation?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=0)** - [Instructor] Encapsulation is one of the forming principles in object-oriented programming.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=6)** It refers to the idea of binding an object state and behavior together into one unit.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=12)** In other words, encapsulation is about wrapping data and code acting on that data together.
>
> **[0:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=19)** This may sound familiar and it should.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=22)** In the last chapter, we bound together data and methods in the form of a Java class.
>
> **[0:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=28)** Now we're giving this idea a formal name, encapsulation.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=32)** While we saw the beginnings of how to perform encapsulation by pure organization of the code, in this chapter, we'll expand upon that concept, as well as look at some of the benefits of this approach.
>
> **[0:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=44)** One benefit is we can prevent classes from being tightly coupled.
>
> **[0:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=49)** This means we can easily modify one class, either in the data it contains or its behaviors, without affecting the rest of the program.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=58)** However, this can only happen if we have a clear interface between the class and the rest of the program.
>
> **[1:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=65)** Everything can't have direct access.
>
> **[1:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=68)** We'll need to restrict some of the components of a given class.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=72)** In the last chapter, we directly accessed the tree type attribute along with other attributes of the tree class.
>
> **[1:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=80)** If the name of this attribute or the way it's stored changed, the classes using this attribute would likely need to change to.
>
> **[1:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=89)** To make our program more robust to changes, we can make class's attributes hidden from other classes using encapsulation.
>
> **[1:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=98)** The data would still be accessible but only indirectly through the methods of the class.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=104)** This would allow us to create specific pathways for the classes to communicate without making them heavily dependent on each other.
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=112)** By preventing other classes from having direct access to certain attributes, our programs become more secure and less error prone because when a given change has to be made, it will result in less code changed.
>
> **[2:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-encapsulation?u=76281980&t=126)** Furthermore, with more restricted access, it's less likely than an attribute would be overwritten with an invalid value or null unexpectedly.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), class, (1), interface (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (2)
> **Definitions:** refers to (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### Discovering access modifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=0)** - In Java, we can achieve encapsulation by using access modifiers.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=6)** Different access modifiers determine where certain variables and methods can be accessed in your code.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=12)** In other words, they allow you to restrict to the scope of specific functionality in your program.
>
> **[0:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=19)** The three different access modifiers in Java are private, protected, and public.
>
> **[0:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=25)** We use these key words on pieces of a given class to give it a certain access or visibility level.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=32)** Private variables and methods are only visible in the class that they live in.
>
> **[0:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=37)** Protected variables and methods are visible to the package and all subclasses.
>
> **[0:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=43)** Public members are accessible everywhere within the program.
>
> **[0:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=47)** If no modifiers provided, it's only visible to the package it lives in.
>
> **[0:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=53)** In the main class, the main method has the public access modifier.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=58)** This allows it to be invoked by the JVM or Java Virtual Machine in order to execute a program.
>
> **[1:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=65)** In the tree class, we didn't add any access modifiers, making each member only visible to its own package.
>
> **[1:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=74)** Let's try adding an access modifier.
>
> **[1:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=76)** We'll make our static attribute protected, our instance attributes private and our methods public including the constructor.
>
> **[1:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=89)** Most of the time, each attribute and behavior of the class will have an access modifier that's either private or public.
>
> **[1:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=97)** In fact, if we look at the color class, these are the two main access modifiers used throughout the class.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=108)** So what's the effect of adding these access modifiers?
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=112)** Looking at our main class, the methods still work, because we've given those the public access modifier, but we can no longer print out each attribute directly.
>
> **[2:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=123)** With our printouts, we directly access the tree type, height and trunk attributes.
>
> **[2:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=129)** Since we made these attributes private, this code will no longer work, because we've restricted the access of these attributes to only the tree class.
>
> **[2:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=141)** If we want other classes to still have access to this attribute data, we'll need to create an indirect way for them to access it.
>
> **[2:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-access-modifiers?u=76281980&t=150)** This will allow us to achieve true encapsulation in our programs.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), private (5), class, (4), protected (3), class. (2)
> **CLI Commands:** make (1)
> **Env Vars:** jvm (1)
> **Definitions:** in other words (1)
> **Speakers:** - in (1)

#### Implementing encapsulation with access modifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=0)** - [Narrator] With encapsulation we want to make data hidden from other classes so they cannot use it directly.
>
> **[0:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=7)** However, we still want it to be accessible indirectly through a clear pathway.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=13)** in Java, one way we can achieve encapsulation for our attributes is to declare each attribute as private then write public methods to get and set the value of each attribute.
>
> **[0:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=26)** With this, other classes will still be able to access the hidden data, but they can only do so through a public method of a given class.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=36)** Let's continue working with our tree class and create three public methods that retrieve each attribute value.
>
> **[0:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=45)** To make the first, we'll write public, double for the return type and we'll have it be getHeightFt and this will retrieve the height feet attribute.
>
> **[0:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=57)** We'll also create a method for the trunk diameter then as we type it in, you'll notice our IDE comes up with some code completion.
>
> **[1:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=68)** And it fills in the code for us writing a public method to access a private attribute is a pretty common practice.
>
> **[1:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=76)** Given what we're writing our IDE can predict that's what we're going to do.
>
> **[1:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=81)** We'll also create one for the tree type.
>
> **[1:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=84)** We call these three methods getters because they allow us to get the value of a given attribute.
>
> **[1:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=91)** Let's use these getters in our main class.
>
> **[1:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=96)** You might notice that our printouts still won't work.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=99)** These attributes are private so we cannot access them directly.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=104)** However we can access them indirectly using the getters.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=108)** So instead of myfavoritemapletree.treetype we'll use the get tree type method on that instance.
>
> **[1:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=117)** The same goes for our height and our trunk diameter.
>
> **[2:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=124)** Let's run the program and we see our attributes in the console.
>
> **[2:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=130)** These getters allow us to retrieve the attributes but the attribute values can only be modified within the class.
>
> **[2:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=139)** This means we can't change the height or any other attribute directly in the main class with a hard coded value.
>
> **[2:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=147)** Instead, we'd have to use the grow method inside of the tree class on that instance.
>
> **[2:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=153)** That's the only way we can modify the height and diameter.
>
> **[2:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=157)** And both of these values can only increase according to the implementation of grow.
>
> **[2:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=165)** So if we wanted to increase the size of our maple tree we would use the grow method with myfavoritemapletree.grow.
>
> **[2:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=173)** This encapsulates our attributes and how they can change to the tree class only.
>
> **[2:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=179)** The height will never be set to negative one unexpectedly.
>
> **[3:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=183)** The implementation of how a tree can be modified lives in the tree class only.
>
> **[3:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=189)** If we wanted to allow other classes to set a particular value to one of these attributes we would create a setter.
>
> **[3:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=198)** A setter is just like a getter method but it allows you to set the value for that attribute.
>
> **[3:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=205)** Let's create a setter for trunk diameter.
>
> **[3:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=208)** The body of the method looks pretty similar to our constructor except all we do is set the trunk diameter attribute to the inputted value.
>
> **[3:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=217)** Now our trunk diameter can be modified through the setter or through the grow method but our height can still only be modified through the grow method.
>
> **[3:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=227)** So what about tree type?
>
> **[3:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=229)** Well we have a getter for tree type to retrieve the value there is no way to modify the value once the tree is created and that's done on purpose.
>
> **[4:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=240)** Have you ever seen an Oak tree turn into a maple tree or vice versa?
>
> **[4:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=244)** I think not.
>
> **[4:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/implementing-encapsulation-with-access-modifiers?u=76281980&t=246)** By using access modifiers in this way we can encapsulate what it means to be a tree and restrict the ways a tree can change in a single unit, the tree class making our programs more scalable and secure.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), let (4), private (3), class. (3), this, (1)
> **CLI Commands:** make (2)
> **Env Vars:** ide (2)
> **Code Identifiers:** getheightft (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### Exploring encapsulation in Java string class
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=0)** - With the good foundation of encapsulation, we can begin to explore how the Java programming language, uses encapsulation in some of its built-in classes.
>
> **[0:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=10)** Exploring more examples will help you better understand this object oriented principle, and recognize the scenarios it should be used in.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=18)** One common Java class that uses encapsulation, is the string class.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=24)** To find out more about the string class, we'll click into it using our IDE.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=29)** I'm on a Mac, so I'll do Command Click, but it may be different on your machine.
>
> **[0:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=35)** This class is pretty large at over 3000 lines, but we'll break it into parts and work through it, to see how it uses encapsulation.
>
> **[0:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=46)** A string is made up of characters, and those character values actually live in the form of bytes and a byte array.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=54)** This is all hidden away from us and the way we use strings in everyday programs.
>
> **[0:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=59)** This means, even if things inside the string class change, it won't affect the rest of the program, as long as the input, output and result of the public behaviors stay the same.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=71)** There are a few other private attributes in this class, but we'll be focusing on this value attribute.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=78)** With Control + F or Command F, we can see how it's used throughout this class.
>
> **[1:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=85)** The string class has several constructors, and ways to initialize a given instance.
>
> **[1:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=90)** So these first few methods will be about setting up the value attribute with its initial value.
>
> **[1:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=98)** One common instance method in the string class, is the length method, which retrieves the number of characters in the string.
>
> **[1:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=106)** This is a public method, so we're able to use it outside the string class.
>
> **[1:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=111)** To use it, we can go to our main class, use our string variable, and run Dot Length.
>
> **[1:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=118)** In running this method, we don't need to know anything about how the string works, or how it stores its values behind the scenes.
>
> **[2:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=127)** In fact, strings used to char array for the value attribute and tell Java nine.
>
> **[2:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=134)** In the JDK enhancement proposal 254 or GEP 254 Java nine introduced compact strings, which used a byte array instead of a char array for the value storage.
>
> **[2:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=148)** If the internal array was exposed outside the string class with a public modifier, then this change would have been much harder to make, because it would have affected any programs that used to this attribute.
>
> **[2:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=161)** With encapsulation, we can achieve loose coupling, and that's what enabled the Java developers to make this change without significantly impacting other Java programs.
>
> **[2:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=174)** This value array is also used in several other public instance methods, as a way to retrieve data from it.
>
> **[3:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=182)** IsEmpty, charAt, all of these are common methods we use to work with strings, and we work with them using public methods that access private methods or private attributes.
>
> **[3:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=195)** However, you won't find any methods in this class, that modify the value array and that's because strings are immutable.
>
> **[3:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-encapsulation-in-java-string-class?u=76281980&t=204)** With the value array as private and access to it only available through public methods, we can fully encapsulate this attribute in the behaviors that change it, to the string class only.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), class, (5), private (4), class. (3)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** ide (1), jdk (1), gep (1)
> **Code Identifiers:** charat (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### Challenge: Banking application
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=5)** - [Instructor] Let's practice using encapsulation.
>
> **[0:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=8)** In this challenge, you'll put your encapsulation skills to the test by modifying a Java program to use this object oriented principle.
>
> **[0:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=17)** We'll start off with a bank account class.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=20)** It has two attributes, owner and balance.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=24)** Your job is to add behavior to this program so that the owner and balance attributes can be encapsulated in the bank account class while still being accessible to other classes indirectly.
>
> **[0:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=37)** Specifically you should add a withdrawal method as well as the deposit method.
>
> **[0:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=42)** You might also add a few getters to retrieve the balance or the owner of the account.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=48)** In order to create a new bank account instance, you'll also need to add a constructor to the class.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=55)** Once you've set up your bank account class, create a main class that creates a bank account.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=61)** Withdraw a certain amount from the bank account and then print out the resulting balance to the console.
>
> **[1:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=66)** The attributes of the bank account class should not be directly accessible.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-banking-application?u=76281980&t=72)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), let (1), class, (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Banking application
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=0)** - [Instructor] To add encapsulation to this Java program, the first thing we'll do is make the owner and balance attributes private.
>
> **[0:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=14)** Then we'll make these indirectly accessible through public behaviors.
>
> **[0:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=25)** In order to create a BankAccount, we need a constructor.
>
> **[0:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=31)** With this constructor, we'll input an owner, as well as a startingBalance.
>
> **[0:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=42)** For the balance, the user may input an invalid value, such as a negative number.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=48)** To combat against this, we'll take the max of the startingBalance and zero.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=54)** This will set the balance to whichever number's higher, either the startingBalance or zero, forcing the balance to be set as a positive number.
>
> **[1:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=64)** Now for the setters.
>
> **[1:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=66)** We'll make the owner of the BankAccount immutable for now, so no setter is needed.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=71)** But what about the balance?
>
> **[1:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=73)** For the balance, the user should be able to withdraw and deposit money.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=78)** So instead of creating a setter, we'll create deposit and withdrawal methods that act as setters to modify the balance attribute value.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=87)** Starting off with that deposit method, we'll make this a public method that returns a double and takes in an amount.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=95)** If the amount is greater than zero, we'll add it to the balance and return the added value.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=104)** Otherwise, nothing will be added because we don't want to add a negative amount to the balance, so we'll return zero.
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=112)** The withdraw method will be very similar.
>
> **[1:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=114)** We'll create a public method that returns a double and takes in an amount.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=122)** If the amount is greater than the balance, then we won't withdraw because there's not enough funds in the account.
>
> **[2:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=129)** Instead, we'll return zero.
>
> **[2:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=132)** Great, now we can use our BankAccount class to create a BankAccount instance.
>
> **[2:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=139)** Let's create a Main class for our Main method.
>
> **[2:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=145)** Then we'll create our instance.
>
> **[2:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=148)** We'll use the BankAccount class and the constructor and we'll say this is Wonder Woman's account.
>
> **[2:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=157)** And the startingBalance will be 1,000.
>
> **[2:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=160)** Then we'll withdraw 500, deposit 5,000, and then withdraw another 2,000.
>
> **[2:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=175)** At the end, we'll display the owner and resulting balance.
>
> **[3:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=181)** Notice, we're not accessing the attributes directly.
>
> **[3:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=185)** We're using the public methods to access then indirectly.
>
> **[3:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=190)** Let's run the code.
>
> **[3:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=192)** We started off with 1,000, then took away 500, leaving us with 500, then we deposited 5,000, giving us a balance of 5,500.
>
> **[3:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=203)** Then when you deposit another 2,000, we're left with 3,500.
>
> **[3:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=208)** Let's see what we get in our console.
>
> **[3:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=211)** Wonder Woman, 3,500.
>
> **[3:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=213)** There are so many different ways you could write this program.
>
> **[3:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=217)** The deposit and withdrawal methods don't have to return anything.
>
> **[3:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=221)** That's just a design choice we've made here.
>
> **[3:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=224)** You could also add an ID attribute or other attributes and behaviors that better represent a bank account in code.
>
> **[3:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=232)** The important thing is that the implementation should encapsulate the owner and balance attributes in the BankAccount class while making them accessible through public methods.
>
> **[4:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=243)** This encapsulation allows us to include safety checks whenever the balance is modified, either through the withdrawal method or deposit method.
>
> **[4:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=252)** We also get the bonus side effect of the owner being immutable after account creation.
>
> **[4:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-banking-application?u=76281980&t=258)** To add on to this program, you could extend the functionality to include account transfers or create an owner class that allows owners to have multiple bank accounts.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), let (3), private (1), this, (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** startingbalance (4)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Inheritance in Java

#### What is inheritance?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=0)** - [Instructor] Another key object-oriented principle is Inheritance.
>
> **[0:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=4)** Inheritance allows us to create class hierarchies where classes inherit properties and behaviors from other classes.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=13)** With Inheritance, we have two main players, the subclass and the superclass.
>
> **[0:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=19)** We call the class that inherits the properties the subclass or child class.
>
> **[0:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=26)** The class that's being inherited from is called the superclass or the parent class.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=32)** In Inheritance, the child class inherits properties from the parent class, or the subclass inherits properties from the superclass.
>
> **[0:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=41)** For example, let's say we have an employee class.
>
> **[0:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=45)** The class has name, ID, and salary attributes.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=50)** Now what if we wanted to represent a salesperson in code?
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=54)** A salesperson would also have a name, ID, and salary, but they might also have a commission percentage or other attributes and behaviors.
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=63)** While we could create a fresh new class for the salesperson with name, ID, and salary attributes, we could also use Inheritance to help reduce code in our program.
>
> **[1:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=75)** Since a salesperson is an employee and will have all of the attributes and behaviors of an employee, we can have the salesperson class inherit from the employee class.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=87)** This allows us to avoid duplicating the code from the employee class in the salesperson class.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=94)** Instead, we would just create a new class with the custom functionality of a salesperson, inheriting the employee functionality from the employee class.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=104)** This is beneficial because if there's ever something we want to add to the employee class, it will automatically affect our salesperson because a salesperson is an employee.
>
> **[1:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=115)** We call the relationship between the salesperson and the employee an is a relationship because the salesperson should have all the functionality that the employee has.
>
> **[2:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=126)** However, the reverse is not true.
>
> **[2:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=129)** Not all employees are salespersons.
>
> **[2:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=132)** This is what makes the employee class the superclass and the salesperson class the subclass.
>
> **[2:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=139)** Ultimately, inheritance allows for code reusability because we can write the common properties and functionality in one class and have other classes with unique features inherit from it.
>
> **[2:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-inheritance?u=76281980&t=151)** This also makes our code more scalable because we can write the common functionality once and then have whatever class needs the functionality inherit from it.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (6), class, (2), let (1)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Leveraging different types of inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=0)** - Inheritance can be applied in many different ways, and it's important to choose the right form for your use case.
>
> **[0:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=7)** With the employee-salesperson example, we were using single-level inheritance.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=13)** The employee was the superclass and the salesperson was its only subclass.
>
> **[0:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=19)** We can extend this inheritance example by adding additional types of employees.
>
> **[0:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=25)** We could add an analyst class.
>
> **[0:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=27)** Instead of receiving commission on sales, an analyst receives bonuses each year depending on their performance.
>
> **[0:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=35)** An analyst is also an employee, but an analyst is not a salesperson.
>
> **[0:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=41)** This type of inheritance is called hierarchical inheritance, where one parent class has many subclasses, and this is also supported in Java.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=50)** Another type of inheritance we have is multi-level inheritance.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=55)** A class can inherit from one class, but also be the parent of another class.
>
> **[1:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=60)** Let's say we add a person class to the mix an employee is a person, an analyst is a person, and a salesperson is a person.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=71)** We can have the employee class inherit from the person class, and in turn, the analyst and salesperson will also inherit from the person class indirectly.
>
> **[1:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=82)** Since the name attribute is more of a person attribute rather than an employee attribute, we can move that over to the person class.
>
> **[1:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=90)** With this structure, attributes and behaviors dealing with a person live in the person class, while details associated with the employee live in the employee class.
>
> **[1:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=103)** There are a few other types of inheritance, including multiple inheritance and hybrid inheritance, but they are not supported in Java.
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=112)** Multiple inheritance can cause unnecessary complexity, especially in casting, constructor chaining.
>
> **[1:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=118)** and other Java operations.
>
> **[2:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=121)** There are very few scenarios where multiple or hybrid inheritance are actually needed, so it's been removed entirely for simplicity.
>
> **[2:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=130)** Ultimately, in Java, a class can only have one super class, but it can have multiple subclasses.
>
> **[2:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=137)** If you want a class to have several super classes, one option is what we've shown here with multi-level inheritance, where a given class inherits from multiple classes indirectly.
>
> **[2:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=149)** Later on in the course, we'll also encounter interfaces and abstract classes, which are other ways classes can share code.
>
> **[2:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/leveraging-different-types-of-inheritance?u=76281980&t=158)** However, understanding the different forms of inheritance available to you in Java can help you design better systems that reduce code for your use case.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), class, (4), case. (2), super (2), let (1)
> **Definitions:** is a  (3), is called (1)
> **Speakers:** - inheritance (1)

#### Using inheritance to reduce code duplication
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=0)** - [Instructor] In Java, we can achieve inheritance by using the keyword extends.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=6)** The subclass will use this keyword with the superclass in its class definition to inherit all the properties and behaviors of the superclass.
>
> **[0:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=15)** Let's take a look at an example in Java.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=18)** Here we have a Salesperson class with name, salary, age and commissionPercentage attributes.
>
> **[0:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=25)** We have a constructor, getter methods and methods to raise the salary and commission.
>
> **[0:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=31)** In addition to the Salesperson class, we also have the Analyst class.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=36)** An Analyst has some of the attributes and behaviors as the Salesperson class but some are different.
>
> **[0:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=42)** For example, an Analyst has the concept of an AnnualBonus, which does not exist for the Salesperson class.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=50)** But the Analyst also has the same name, age and salary attributes and behaviors.
>
> **[0:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=56)** Instead of having the name, age and salary code duplicated across two classes, we can create an Employee class that holds this common code and both classes can inherit from this common Employee class.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=72)** To do that, we'll create a new class called Employee and copy over the appropriate code.
>
> **[1:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=83)** This includes the getters and the raiseSalary method.
>
> **[1:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=88)** We'll also need to create a constructor that initializes a given employee instance.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=95)** Every employee will have a name, salary and age.
>
> **[1:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=101)** In turn, we'll also remove the name, age and salary code from the Salesperson and Analyst classes.
>
> **[1:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=111)** To have the Salesperson class inherit from the Employee class, we'll use the keyword extends.
>
> **[1:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=117)** We'll say the Salesperson class extends the Employee class.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=122)** Now our Salesperson has all of the attributes and behaviors of an employee.
>
> **[2:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=128)** The Salesperson class only contains code that is associated with the salesperson making it easier to iterate upon and modify.
>
> **[2:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=136)** There's one more thing we have to do to finish this implementation.
>
> **[2:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=141)** We need to modify the constructor.
>
> **[2:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=142)** Instead of setting up the name, age and salary attributes in the Salesperson constructor, we'll set them up with the Employee constructor.
>
> **[2:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=154)** To access the employee's constructor, we use the keyword super, which refers to the superclass's constructor.
>
> **[2:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=162)** The Employee constructor takes in a name, salary and age, and that's what we have here.
>
> **[2:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=168)** The commissionPercentage still refers to the Salesperson class.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=172)** So we'll keep it set up right here in the Salesperson constructor.
>
> **[2:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=176)** Great, we've reduced the duplicate code in the Salesperson class.
>
> **[3:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=181)** Now let's set up our Analyst so that it inherits from the Employee.
>
> **[3:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=187)** The Analyst class will extend the Employee class and use the super constructor to set up the name, salary and age.
>
> **[3:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=199)** To fix the error with the salary and getAnnualBonus, we'll need to change the access modifier of the attribute in the Employee class.
>
> **[3:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=209)** Currently, the access modifier is private.
>
> **[3:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=213)** To make this attribute available to its subclass, we'll make it protected instead.
>
> **[3:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=219)** Going back to our Analyst class, the error has gone away.
>
> **[3:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=223)** Another option, instead of using the keyword this, you can use the keyword super to designate that this property is coming from the superclass.
>
> **[3:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=232)** But either implementation works.
>
> **[3:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=234)** Great, now the name, age and salary code is in one place, the Employee class, rather than spread and duplicated across multiple classes.
>
> **[4:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=245)** If you want to continue with this example, try adding a Person class that the Employee inherits from.
>
> **[4:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=252)** The Person class would contain the name and age attributes and behaviors, while the Employee class would contain the members associated with the salary.
>
> **[4:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=262)** With this implementation, if we ever need to modify the behavior of an Employee, it would affect both the Analyst and the Salesperson.
>
> **[4:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=271)** If we didn't use inheritance, we would have to change code in two places, the Salesperson and Analyst classes, creating more work, more tests and more room for error.
>
> **[4:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-inheritance-to-reduce-code-duplication?u=76281980&t=283)** Inheritance can not only make your programs more secure, but it can also make it easier to change your program later on.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (7), class, (4), extends (3), super (3), let (2)
> **CLI Commands:** make (4)
> **Code Identifiers:** commissionpercentage (2), raisesalary (1), getannualbonus (1)
> **Prerequisites:** set up (3)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Discovering inheritance in foundational Java classes
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=0)** - [Instructor] With a good foundation of inheritance, we can begin to explore how the Java programming language uses inheritance.
>
> **[0:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=8)** Exploring more examples will help you better understand this object-oriented concept and recognize the scenarios it should be used in.
>
> **[0:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=17)** One common Java class is the Stack class.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=20)** Stack is the data structure and while we won't be exploring data structures too much in this course, we'll explore how this class uses inheritance to inherit behaviors and attributes from its superclass.
>
> **[0:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=34)** Here we have a stack of characters and we've added a few characters to the stack with the push method.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=40)** Then we've removed the characters with the pop method.
>
> **[0:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=44)** When the characters are removed, they'll be removed in reverse order, meaning t will be removed, then a, then c.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=55)** Running the code, we'll see cat displayed in reverse order.
>
> **[0:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=59)** That's what makes this a stack.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=61)** We can plop things on top and remove them in order of last added.
>
> **[1:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=67)** To see how the stack works in code, we can click into it with Command + click on Mac.
>
> **[1:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=74)** The Stack class extends the Vector class.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=77)** This means that the Stack is the subclass and Vector is the superclass.
>
> **[1:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=83)** The Stack class inherits functionality from the Vector class.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=87)** Let's see what inherits.
>
> **[1:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=91)** And it looks like the Vector also inherits functionality.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=94)** We'll explore the AbstractList class later on in the course but let's see what Stack directly inherits from Vector.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=108)** The Stack class has no attributes, only a few behaviors and many of these behaviors use functionality from the Vector class.
>
> **[1:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=119)** Let's take a look at the push behavior.
>
> **[2:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=121)** Push uses a method called addElement and this method's implementation actually lives in the Vector class.
>
> **[2:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=129)** It's used by the Vector, as well as the Stack.
>
> **[2:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=133)** The unique behavior of the Stack comes in the pop method where when an item is removed, it's removed at a specific place in the Vector, at the end, rather than just anywhere in the Vector.
>
> **[2:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=147)** The actual implementation of the removal is done in the Vector class with removeElementAt.
>
> **[2:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=154)** So a Stack is very similar to a Vector but it provides additional functionality so that you can work with an object as a stack.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=163)** You can easily add and remove items from the top of the stack.
>
> **[2:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=167)** While the removeElementAt and addElement methods could be duplicated in the Stack class, we take advantage of the already tested implementation in the Vector class.
>
> **[3:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=180)** With this code, we can decide to work with a vector directly or work with the stack that has a few extra behaviors included.
>
> **[3:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-inheritance-in-foundational-java-classes?u=76281980&t=189)** This implementation gives us flexibility on the type of data structure we can use, while also reducing duplicate code.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (6), let (3), extends (1), class, (1)
> **Code Identifiers:** addelement (2), removeelementat (2)
> **CLI Commands:** cat (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Reduce redundant code with inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=0)** (upbeat chiming music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=5)** - [Instructor] One common error when using the ArrayList class is sometimes you might try to retrieve an item that's at an invalid index.
>
> **[0:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=14)** To avoid this, usually you'll add an if statement in order to check that the index is valid before retrieving the item from the list.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=22)** However, sometimes those checks can get annoying and another developer might forget to do the check.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=29)** To provide a foolproof way of accessing items in a given list, we want to create a ModArrayList class with a getUsingMod method that takes in an index and retrieves an item from the list at that index.
>
> **[0:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=44)** If the index is invalid, then the implementation should use the mod operation and mod the index based on the length of the list.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=54)** If the index is negative, then it should be made positive.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=58)** If you're unfamiliar with mod, mod is similar to division.
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=63)** However, it returns the remainder rather than the quotient when given two numbers of the same sign as input, so either both positive or both negative.
>
> **[1:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=73)** This means if someone uses the method with index four and the list only has three items, the first item would be returned because four mod three equals one.
>
> **[1:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=85)** That's the remainder of four divided by three.
>
> **[1:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=88)** The ModArrayList class should have all the functionality of an ArrayList with the additional functionality of the getUsingMod method.
>
> **[1:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=97)** While you could write lots of code in the ModArrayList class to have it work the same as an ArrayList, I encourage you to use inheritance to avoid adding redundant code.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-redundant-code-with-inheritance?u=76281980&t=108)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Code Identifiers:** getusingmod (2)
> **Code Keywords:** this, (1)
> **Analogies:** similar to (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat chiming music) (1)

#### Solution: Reduce redundant code with inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[2:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=161)** In addition to modding the size, we'll also want to make the index positive.
>
> **[2:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=166)** To do that, we can use math.abs to make this index positive.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=172)** Great, we have a valid index.
>
> **[2:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=175)** Now we can just use the ArrayList functionality to retrieve the item.
>
> **[3:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=181)** Since the get method is an instance method, we'll use the keyword this.get and pass in that validIndex.
>
> **[3:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=189)** Whatever this returns is what we'll want to return from the function.
>
> **[3:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=194)** Our implementation of getUsingMod is complete.
>
> **[3:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=197)** Let's use it on our list in the Main function.
>
> **[3:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=201)** We'll use it with a valid index, say one.
>
> **[3:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=205)** We'll also try with a negative index, -2.
>
> **[3:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=210)** And a large index, say 40.
>
> **[3:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=217)** We'll also print these out to the console.
>
> **[3:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=221)** The item at index one is 10.
>
> **[3:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=224)** The item at a positive index 2 is 20.
>
> **[3:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=227)** And since 40 is divisible by 4 with a remainder zero, it should retrieve the item at index zero.
>
> **[3:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=235)** Let's run it.
>
> **[3:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=238)** And we get the output we're expecting.
>
> **[4:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=241)** Inheritance allowed us to use the ArrayList functionality and focus on the core implementation of the mod in our ModArrayList class.
>
> **[4:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=251)** We didn't have to worry about how the retrieval actually happens because the ArrayList class does it for us.
>
> **[4:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=258)** We just had to calculate the correct index.
>
> **[4:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=262)** Furthermore, while we could have written all of the ArrayList functionality ourselves, it's unproductive.
>
> **[4:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-redundant-code-with-inheritance?u=76281980&t=268)** It's better to reuse and enhance what we've already written so we can reduce the amount of code required, preventing bugs and mistakes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), this. (1), pass (1), class. (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** validindex (1), getusingmod (1)
> **Definitions:** is an  (1)


### 5. 4. Polymorphism in Java

#### What is polymorphism?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=0)** - [Instructor] Polymorphism is the ability for an object or function to take many forms.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=6)** Depending on the context and situation, the form may be different, making your code more flexible and reducing complexity.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=13)** In fact, we've already started using it in this course, even if we didn't realize it.
>
> **[0:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=19)** If we look at our example from the previous challenge, the ModArrayList instance takes a few different forms.
>
> **[0:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=26)** When we use its getUsingMod functionality, we are using it in the form of a ModArrayList.
>
> **[0:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=33)** However, when we use the add functionality, we're using it as an array list.
>
> **[0:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=38)** In fact, if we click into the add functionality, it won't take me to the ModArrayList class, rather the ArrayList class.
>
> **[0:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=47)** This is where that functionality is defined.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=50)** The idea that an object can use functionality from different classes depending on the context is a key idea that's essential to understanding polymorphism.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=61)** Java supports two types of polymorphism, runtime polymorphism and compile-time polymorphism.
>
> **[1:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=68)** We'll be exploring both in this chapter.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-polymorphism?u=76281980&t=71)** Polymorphism will not only help us reduce complexity in our Java programs, making them easier to understand, but they'll also help us write more reusable code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), class, (1), class. (1)
> **Code Identifiers:** getusingmod (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Writing reusable algorithms with runtime polymorphism
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=0)** - [Instructor] Let's explore how to implement polymorphism in Java.
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=5)** We'll look at a similar example to our ModArrayList but this time, we'll create an OddArrayList that will only contain odd numbers.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=13)** We'll want it to have all of the functionality of an ArrayList.
>
> **[0:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=17)** So we'll extends ArrayList.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=20)** We also know it will only contain odd whole numbers, so we can have it extended with the integer data type.
>
> **[0:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=30)** In order to make it so that only odd numbers can be added to the list, we'll need to override some of the ArrayList functionality.
>
> **[0:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=39)** Methods like the constructor, add, addAll, set, and replaceAll will need to be modified so that only odd numbers are added.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=48)** To override the function implementations, we'll need to match the method signatures from the ArrayList exactly.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=55)** We can still use the original functionality with the keyword super to access the original implementation.
>
> **[1:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=62)** Let's take a look at how this works.
>
> **[1:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=65)** To override the add method, we'll use the @Override annotation.
>
> **[1:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=70)** Then we'll write out the signature for the add method.
>
> **[1:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=75)** This comes from the ArrayList class.
>
> **[1:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=79)** From here, we can implement the modified add functionality.
>
> **[1:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=83)** To start, we'll check to see if the item is odd, using the mod operator.
>
> **[1:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=89)** If the absolute value of the element has a remainder one when divided by two, then the item must be odd and can be added to our list.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=99)** The actual implementation of adding an item already lives in the ArrayList class.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=104)** So we'll access its implementation with the super keyword and then add the element.
>
> **[1:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=111)** We'll continue to do this for all of the other methods.
>
> **[1:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=114)** First checking if the item is odd and then leveraging the already implemented functionality from the ArrayList class.
>
> **[2:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=128)** Since the odd check functionality will be the same for all of these methods, we can separate it out into its own public static function.
>
> **[2:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=137)** Then we'll use it in each function we're overriding.
>
> **[2:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=145)** Next, we'll override the addAll methods, which lets you add collections to your ArrayList.
>
> **[2:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=156)** In the implementation, we use some of the Java Streams functionality introduced in newer versions of Java.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=163)** If this interests you, I encourage you to check out some of our Java Streams and Java collection courses on LinkedIn Learning.
>
> **[2:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=171)** Next, we'll modify the set functionality so that only valid elements can be inserted.
>
> **[2:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=178)** If the item is not valid, we'll return the minimum value for an integer.
>
> **[3:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=185)** For the replaceAll method, we'll run the operation and then immediately remove the invalid elements.
>
> **[3:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=196)** The last method we need to create is the constructor.
>
> **[3:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=199)** We'll have it take in a series of numbers and this will become an array for us to use in our implementation.
>
> **[3:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=207)** Then we'll use the ArrayList constructor with the keyword super and then pass in the array with the odd numbers only.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=215)** Let's try this out in a separate Main class.
>
> **[3:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=223)** In the Main method, we initialize our OddArrayList with numbers.
>
> **[3:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=228)** Then we create a regular ArrayList and add items to that.
>
> **[3:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=235)** The oddListy has all of the functionality of the ArrayList class, including those methods we haven't overridden.
>
> **[4:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=245)** When we print out the lists, the OddArrayList should only have odd numbers while the regular ArrayList should have all of the numbers added.
>
> **[4:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=255)** Let's run the program.
>
> **[4:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=257)** Two and four were filtered out of the OddArrayList and this is as expected.
>
> **[4:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=262)** With inheritance, we were able to reuse the functionality of a given class.
>
> **[4:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=268)** Then we added onto to it by creating new methods in the new class.
>
> **[4:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-reusable-algorithms-with-runtime-polymorphism?u=76281980&t=273)** With runtime polymorphism, we not only reused the functionality of a given class but we override it with new functionality as needed while leveraging the superclass's implementation.

> [!info]- Semantic Content
>
> **Code Keywords:** override (6), class. (6), let (4), function (3), super (3)
> **Code Identifiers:** addall (2), replaceall (2), oddlisty (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Exploring different forms in a single object
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=0)** - [Teacher] Depending on the context, a given instance can take many different forms.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=6)** With the odd listy, it takes the form of an odd ArrayList when the add method is used, only adding odd numbers.
>
> **[0:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=14)** The other list, listy, takes the form of an ArrayList, adding all of the numbers to the list.
>
> **[0:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=21)** Now what happens when we use the size method on both of these lists?
>
> **[0:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=25)** Both of these take the form of an ArrayList since Odd ArrayList doesn't have a custom implementation for the size.
>
> **[0:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=34)** We can leverage this to create common functionality that can work with both types of lists.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=40)** For example, let's say we wanted to create a universal function that adds a random number to any integer ArrayList regardless of if it's odd or regular.
>
> **[0:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=52)** We can create a function called addRandomNumber and have its input be an ArrayList.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=58)** To generate the random number, we'll use the random class to create a random instance.
>
> **[1:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=66)** Then we'll use it in call nextInt.
>
> **[1:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=69)** This will generate a random whole number.
>
> **[1:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=73)** We don't want the number to be too big so we'll put a bound on it. A thousand.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=78)** The number we generate will be between zero and 999.
>
> **[1:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=84)** To add the number, we'll use the add method on our list since it is an ArrayList.
>
> **[1:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=91)** Then we're done.
>
> **[1:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=92)** An item is added to the list.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=95)** Let's try this with our oddListy and Listy instances.
>
> **[1:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=102)** We're able to do this because oddListy and Listy are both ArrayLists.
>
> **[1:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=107)** They both have all the functionality of an ArrayList, including that add functionality.
>
> **[1:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=113)** However, the implementations of each add algorithm are different and are determined at runtime based on the instances original type, hence why it's called runtime polymorphism.
>
> **[2:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=126)** With this program, we should get three and the output for both of the sizes.
>
> **[2:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=131)** Let's run it.
>
> **[2:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=136)** Sometimes we get two in the printout for oddListy.
>
> **[2:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=141)** This means a number was not added to the list in our function.
>
> **[2:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=145)** When we run the add random number function with our oddListy, the add functionality in the oddArrayList class is used.
>
> **[2:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=154)** This means if nextInt outputs an even number, although we tactically call the add function, it does not add the item to the list.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=163)** To fix this, we can modify our add random number implementation so that a number is always added.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=172)** We consider a number to be added if the ArrayList size increases by one.
>
> **[2:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=177)** So let's create a variable called original size and give it the value of the list size.
>
> **[3:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=188)** Then we'll wrap our number generation in our list addition into a while loop where the code continues to run until the list size equals the original list size plus one.
>
> **[3:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=201)** If we've run our code again, it works as expected.
>
> **[3:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=206)** We can even print out the contents of the list to ensure the odd list only has odd numbers.
>
> **[3:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=212)** Let's run the code again.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=215)** With runtime polymorphism we were able to override the add method functionality so that only odd numbers are added to odd ArrayLists.
>
> **[3:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=225)** By having our random add number function taken an ArrayList rather than the more specific odd ArrayList, we were also able to create common functionality.
>
> **[3:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-different-forms-in-a-single-object?u=76281980&t=236)** This functionality can be used for a variety of different instance types as long as they extend the ArrayList class, making our code more reusable.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (5), type, (1), this, (1), override (1)
> **Code Identifiers:** oddlisty (4), nextint (2), addrandomnumber (1), oddarraylist (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [teacher] (1)

#### Accessing specific object forms with instanceof
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=0)** - [Instructor] With the OddArrayList class, we created a very specific condition.
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=5)** An item is added depending on whether it's odd or not.
>
> **[0:09](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=9)** We can broaden this class by making it a condition ArrayList where items are added based on a given condition.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=18)** Let's rename this class to ConditionArrayList.
>
> **[0:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=21)** We'll left click on the name, hover over Refactor and rename the references.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=29)** This is a feature of IntelliJ.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=32)** Now, since items will be added based on a condition, we'll need to include that condition in the constructor.
>
> **[0:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=39)** This condition will be a predicate, something that takes in a value and returns true or false.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=48)** The predicate could be whether or not the number is positive, whether it's divisible by three or whatever we want.
>
> **[0:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=56)** It's defined on creation and that's what we filter our list on.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=61)** Now, since we'll want to access this predicate in a variety of instance methods, we should make this predicate an instance variable and then we can set it up in our constructor.
>
> **[1:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=73)** We'll call it condition.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=78)** Then in the constructor, we'll set this.condition equal to the inputted predicate.
>
> **[1:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=85)** If we scroll down, the isOdd function no longer makes sense.
>
> **[1:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=91)** In fact, we could change this to isEligible so that we can see if an item is eligible before adding it.
>
> **[1:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=101)** Then we'll use the predicate in our implementation.
>
> **[1:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=105)** If the predicate returns true, then the implementation will use our predicate.
>
> **[1:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=110)** If the predicate returns true, then the item must be eligible.
>
> **[1:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=114)** The isEligible method now needs to be non-static because it's using an instance variable.
>
> **[2:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=120)** We can make it non-static by removing that static keyword.
>
> **[2:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=125)** This will also require a few other changes in the class file so that the isEligible method is used in the this keyword context.
>
> **[2:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=137)** Let's try it out in our Main class.
>
> **[2:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=143)** In the Main method, the ConditionArrayList is much more reusable.
>
> **[2:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=148)** We have an oddListy and an evenListy with the appropriate conditions.
>
> **[2:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=154)** We also have a regular ArrayList.
>
> **[2:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=157)** With each condition ArrayList, we provide a condition, since we don't provide a series of numbers, both lists start off as empty.
>
> **[2:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=167)** Now, sometimes, we might want to access a specific form of a given instance if it has unique behavior.
>
> **[2:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=175)** In our addRandomNumber function, we use the size of the list in order to determine if a number has been added.
>
> **[3:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=182)** What if this method is overridden and does not act as expected?
>
> **[3:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=187)** To ensure an item is eligible before adding it, we should use the predicate in our ConditionArrayList.
>
> **[3:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=195)** However, our input has the form of an ArrayList.
>
> **[3:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=199)** If a given instance is a ConditionArrayList, we can access its unique functionality with the instanceof operator.
>
> **[3:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=207)** We'll write if the input is an instanceof the ConditionArrayList, then we'll cast it to a ConditionArrayList and use its unique functionality.
>
> **[3:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=220)** With this form, we can see if the int n is eligible.
>
> **[3:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=224)** If not, we'll continue to loop until it finally is.
>
> **[3:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=228)** Then we'll add the eligible number to the list.
>
> **[3:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=233)** If a given ArrayList is not a ConditionArrayList, then the if statement will be skipped and the item is just added.
>
> **[4:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=240)** Let's use this function with each list.
>
> **[4:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=245)** Let's run it.
>
> **[4:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=247)** Even items are added to the even list, odd to the odd and any to the regular ArrayList.
>
> **[4:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/accessing-specific-object-forms-with-instanceof?u=76281980&t=254)** With the instanceof operator, we can safely cast an object to a more specific form and use more nuanced functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), static (3), class, (1), this. (1)
> **Code Identifiers:** iseligible (3), isodd (1), oddlisty (1), evenlisty (1), addrandomnumber (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Writing flexible code with compile-time polymorphism
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=0)** - [Instructor] Java also supports compile-time polymorphism to make your code faster and cleaner.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=6)** With compile-time polymorphism we can have more than one method with the same name, let's take a look.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=13)** With the ConditionArrayList, we can create a new list with a predicate.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=18)** In this case, the condition is if the number isDivisibleByThree.
>
> **[0:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=23)** We can also create a ConditionArrayList by providing a series of numbers, in addition to the predicate.
>
> **[0:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=30)** Only those that satisfy the condition will be added to the list.
>
> **[0:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=37)** We're able to use the constructor in this way, because the second input to our constructor is a variable argument.
>
> **[0:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=44)** You can input zero numbers, one number, or as many as you want.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=48)** However, they do have to be in a series or array format.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=55)** If you want to add another list or collection to the ConditionArrayList, it's currently not possible.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=61)** In fact, when we try we get an error saying it cannot resolve the constructor, and that's because there's no constructor that takes in a list.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=72)** To solve this issue, we can implement compile-time polymorphism with method overloading.
>
> **[1:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=79)** What we'll do is add another constructor with the same name, but give it a different set of parameters.
>
> **[1:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=86)** With this, it will have to have the same name and return type or else the method wouldn't be overloaded, it would just be a different method.
>
> **[1:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=98)** Since an array list works a little differently, we'll need to modify some of the implementation for streaming through the lists contents.
>
> **[1:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=106)** We'll write super(arrayList), we'll stream through the contents and filter based on the predicate.
>
> **[1:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=115)** We'll also need to add that as a parameter.
>
> **[2:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=125)** Great, we've overloaded the constructor method by adding a second method signature with different parameters.
>
> **[2:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=132)** This will allow us to construct a ConditionArrayList with a predicate and an array list.
>
> **[2:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=138)** If you ever want to have multiple ways to create or manipulate an object with different sets of inputs, method overloading provides a way and we'll see this in our main method.
>
> **[2:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=152)** Going back to that main class, the error has gone away.
>
> **[2:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=156)** We've used compile-time polymorphism to initialize our ConditionArrayList in different ways.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=163)** In fact, since a ConditionArrayList is another form of an array list, we can further this by initializing the instance with a different ConditionArrayList.
>
> **[2:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=174)** For example, let's say we had another predicate, isDivisibleBySix.
>
> **[3:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=182)** We could use this predicate and create a new ConditionArrayList from our divisibleByThree array list.
>
> **[3:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=193)** So how does Java decide which constructor to use?
>
> **[3:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=197)** It's based on the inputs type and the number of parameters used at compile time, hence compile-time polymorphism.
>
> **[3:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=207)** We can continue to expand our overloaded constructor by having one call the other.
>
> **[3:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=213)** Instead of having our constructor take in an array list, it can take in a list which is a more basic form.
>
> **[3:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=222)** We can use that because this form guarantees that the stream method, which is used on the list, will be implemented.
>
> **[3:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=230)** In fact, it simplifies our implementation because now we are dealing with a more basic object, a plain list, rather than the more nuanced and complex array list.
>
> **[4:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=242)** We don't use functionality specific to an array list, so why should that be the inputs type.
>
> **[4:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=248)** From here, we can have the other constructor use this functionality by calling it directly.
>
> **[4:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=258)** Now the filtering, as well as the setting up of the condition, is all done in one place making our implementation more maintainable and leaving less room for error.
>
> **[4:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/writing-flexible-code-with-compile-time-polymorphism?u=76281980&t=269)** Furthermore, the overloaded constructor makes our code more flexible, giving us more ways to use the same functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), this, (1), super (1), class, (1)
> **Code Identifiers:** isdivisiblebythree (1), arraylist (1), isdivisiblebysix (1), divisiblebythree (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Exploring how built-in Java classes use polymorphism
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=0)** - [Instructor] The Java programming language uses both runtime and compile-time polymorphism under the hood, let's take a look at the ArrayList class.
>
> **[0:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=11)** The ArrayList class has two methods with the name addAll, but they have different sets of parameters.
>
> **[0:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=18)** The first addAll takes in one parameter, a collection.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=22)** In the implementation, it adds all the elements from that collection to the end of the ArrayList.
>
> **[0:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=30)** Scrolling down, we can see that the second addAll takes in two parameters, the index and the collection.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=40)** We want to add all the elements to the list, but the index allows us to specify a specific location to add them.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=48)** We could add the items at the beginning of the list, the end of the list, or somewhere in the middle, and we'd specify where, using that index.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=58)** The first implementation assumes we want to add the collection to the end, but the second implementation gives us a little more control over where we add the items, this is compile-time polymorphism.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=71)** We have two options for adding the items in a collection to the list.
>
> **[1:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=76)** It's not a question of which implementation is better, in fact both are needed.
>
> **[1:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=82)** Using the first implementation removes complexity because we want to add items, but it doesn't really matter where.
>
> **[1:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=89)** The second implementation gives us specificity when needed, allowing us to be more specific on where we add the item.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=99)** The ArrayList class also has examples of runtime polymorphism.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=104)** In the class definition, we see that the ArrayList class extends abstract class.
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=112)** One of the methods that the ArrayList class overrides is the add method, with the index and element parameters.
>
> **[2:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=121)** This implementation is specific to the ArrayList class.
>
> **[2:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=130)** In the abstract list class we can find the same method signature, however, the implementation is very different, it throws an exception.
>
> **[2:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=140)** This forces the ArrayList class to override the method with an implementation, and this is done on purpose.
>
> **[2:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=147)** It's a pattern that requires subclasses to override certain methods, forcing runtime polymorphism, otherwise, when called, the add method will return an exception.
>
> **[2:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=160)** So which polymorphism is better to use?
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=163)** Both options make your code more flexible by providing multiple ways to use similar functionality.
>
> **[2:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=170)** Overloaded methods are faster because they are bonded during compile-time, which is an earlier phase than runtime.
>
> **[2:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=178)** They also keep everything in one place, while with overridden methods you might be jumping all over the place in your code.
>
> **[3:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=185)** Ultimately, it depends on your use case and you'll likely need both.
>
> **[3:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=190)** Sometimes you just want another way to input into the same functionality, in that case you'll probably use compile-time polymorphism.
>
> **[3:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=200)** Other times you might want to change a few method implementations, but keep the same core functionality, in that case runtime polymorphism would be a good place to start.
>
> **[3:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/exploring-how-built-in-java-classes-use-polymorphism?u=76281980&t=212)** Both are core concepts in polymorphism, and they're used throughout the Java programming language.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), abstract (2), override (2), let (1), extends (1)
> **Code Identifiers:** addall (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Reduce complexity with polymorphism
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=0)** - [Instructor] Let's practice leveraging polymorphism in Java to reduce application complexity.
>
> **[0:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=11)** Let's say you want to add a series of contacts to your phone.
>
> **[0:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=16)** For some contacts, you have a name, phone number and email.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=20)** For others, you just have a name and phone number.
>
> **[0:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=23)** There are also a few where you only have a name and an email address.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=29)** In this challenge, you'll create a program that allows you to create contact instances in a variety of ways.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=36)** After creating a contact instance, you should print it out to the console.
>
> **[0:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=41)** In the printout, display the information about the contact.
>
> **[0:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-reduce-complexity-with-polymorphism?u=76281980&t=45)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Reduce complexity with polymorphism
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=0)** - [Instructor] To start off we'll create a contact class to represent a contact we might add in our phone.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=12)** The contact we'll have name, phone number, and email address attributes.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=20)** All three will be strings.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=22)** We can represent the phone number as a numerical type, but then we'd have to use a fairly large number.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=29)** For simplicity we use a string.
>
> **[0:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=31)** A given contact could also have a bunch of different phone numbers and email addresses so we could make these lists.
>
> **[0:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=38)** But in this example, we'll just say a contact can have one phone number and one email address.
>
> **[0:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=44)** For this challenge, we want to be able to create our contacts with different sets of inputs.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=50)** Sometimes, we'll have access to just a name and a phone number, other times, a name and an email and sometimes all the data.
>
> **[0:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=58)** To do this, we'll need to implement compile time polymorphism and overload our constructor.
>
> **[1:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=64)** We'll create one constructor that sets up all of the attributes.
>
> **[1:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=68)** So this is when we would have all of the data available.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=78)** Then we'll create a constructor that just sets up the name and the phone number.
>
> **[1:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=89)** We'll have one more constructor for when the name and email address are available.
>
> **[1:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=94)** Hmm, now we have a problem, that's because the phone number and email address are of the same type.
>
> **[1:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=101)** We have a duplicate constructor rather than another way to construct the object.
>
> **[1:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=107)** If we call this constructor, the program can't tell which one we're using since both have the same number of arguments and the same type of arguments.
>
> **[1:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=117)** One option is to just have a constructor with the name and you setters to directly set the email address and phone number attributes.
>
> **[2:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=127)** However, if we want to use compile time polymorphism, we'll need to change the data type of either the phone number or the email address.
>
> **[2:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=135)** Let's say we want to pull out the country code for a given phone number and make it its own attribute.
>
> **[2:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=142)** In doing that, we would be enhancing the way we represent a phone number in our program.
>
> **[2:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=148)** We could add a country code attribute to this class, but it really has to do with the phone number rather than the full contact.
>
> **[2:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=156)** To keep the phone number data together, we can create a phone number class that encapsulates the number and the country code.
>
> **[2:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=164)** Let's create a new class called phone number.
>
> **[2:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=167)** We'll give it country code and phone number attributes.
>
> **[2:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=174)** We could present the country code with a string, but country codes are not large as phone numbers.
>
> **[3:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=181)** So we'll use an (indistinct) If you want to further enhance this class, you can add in an area code.
>
> **[3:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=187)** For the constructor, sometimes we may initialize a phone number with just the number and other times, with the country code separately.
>
> **[3:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=195)** So let's create two constructors to represent that.
>
> **[3:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=202)** In the second case, the implementation is fairly straightforward.
>
> **[3:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=206)** We just set the country code and the phone number attributes as expected.
>
> **[3:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=211)** If you wanted to enhance this program, you could also add additional air checking.
>
> **[3:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=216)** You could check if the phone number only contains digits, or if the country code is valid, but we'll keep this as is for now.
>
> **[3:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=225)** Back to the first constructor, the phone number could include the country code, or it could not include the country code.
>
> **[3:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=233)** And the cases where it does include the code, we know the number of digits and the phone number must be greater than 10.
>
> **[4:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=242)** Since the phone number is a string, it's super easy to get the length.
>
> **[4:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=246)** If there are more than 10 digits then the last 10 digits, represent the phone number and whatever digits are in the beginning, must be the country code.
>
> **[4:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=256)** To grab the country code, we'll grab a sub string of the phone number starting at zero and going to the length of minus 10
>
> **[4:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=268)** Then to grab the core phone number, we'll get the digits following the country code.
>
> **[4:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=278)** If the inputted phone number does not include a country code, we'll assume the country code is one and we'll set that up in our L's case.
>
> **[4:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=291)** Now that we have our phone number class set up, we'll modify the data type and the contact class.
>
> **[5:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=301)** And the error with our constructor goes away.
>
> **[5:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=303)** Let's use this overloaded method in our main class.
>
> **[5:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=312)** We've created a few contacts.
>
> **[5:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=314)** We have contacts that are initialized with a name and phone number, name, and email address as well as one with all three attributes.
>
> **[5:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=322)** By creating an overloaded constructor, we've reduced complexity because we only have to input the values we want to initialize in the method.
>
> **[5:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=331)** Then we print out all the contacts to the console.
>
> **[5:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=335)** Let's run the code.
>
> **[5:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=341)** Hmm, we get references to the contact objects, but we can't see the actual data.
>
> **[5:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=348)** If we want to see what the phone number is as well as the name and email address, we'll need to override the two string method.
>
> **[5:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=355)** To do this, we'll go to our class and write public and the two string method pops up for us.
>
> **[6:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=362)** We'll want to display the name, phone number and email address in the console.
>
> **[6:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=367)** So we'll leave all of these checked.
>
> **[6:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=370)** If we click okay, the IDE will generate the code to override the two string function.
>
> **[6:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=378)** Here, we're using runtime polymorphism to override the default object two string functionality and we provide a more specific implementation for the contact class.
>
> **[6:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=390)** Let's do the same for the phone number class.
>
> **[6:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=394)** It pops up again, two string, we'll write public.
>
> **[6:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=399)** It pops up for us.
>
> **[6:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=401)** We'll want to display the phone number and the country code.
>
> **[6:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=404)** So we'll click okay, and it's generated.
>
> **[6:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=407)** Let's run the program again.
>
> **[6:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=411)** We can see the data for each contact in the console.
>
> **[6:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-reduce-complexity-with-polymorphism?u=76281980&t=415)** This completes the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (4), override (3), this, (2), class, (2)
> **CLI Commands:** make (2)
> **Definitions:** we call this (1), is a  (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. 5. Abstraction in Java

#### What is abstraction?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=0)** - [Instructor] In software development we use abstraction to hide implementation complexity.
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=5)** This complexity could be from an algorithm, EPI or design.
>
> **[0:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=10)** And the goal of abstraction is to generalize the features of a given system.
>
> **[0:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=15)** If a software product uses abstraction it should be able to provide a user with an example input, output in a broad description of what the system does without going into the technical details.
>
> **[0:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=28)** Consider someone making coffee with a pod coffee machine.
>
> **[0:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=32)** The person knows they need to provide the machine with water and the specific coffee pod but they don't know exactly how the coffee is made.
>
> **[0:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=41)** They don't need to know how the coffee machine works internally in order to brew a fresh cup of coffee.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=48)** Someone else created the pod coffee machine to hide all the details of exactly how the coffee is made.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=55)** If you want to make a cup of coffee, you just interact with the simple interface, providing the inputs and you get your output, a cup of coffee.
>
> **[1:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=64)** You can do all of this without having any knowledge of the coffee machine's internal implementation.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=72)** Looking at abstraction and Java specifically, we have abstract classes and interfaces and we'll be looking at these in more detail in later lessons.
>
> **[1:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=81)** When systems are abstract, it's easier for engineers to add code contributions because they don't have to know every single detail of each system they're working with.
>
> **[1:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=92)** They just need to know the inputs, the outputs and a general idea of what the system does.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/what-is-abstraction?u=76281980&t=99)** This allows engineers to focus on what features they want to add to the application without getting bogged down in the details.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (2), interface (1)
> **CLI Commands:** brew (1), make (1)
> **Env Vars:** epi (1)
> **Speakers:** - [instructor] (1)

#### Using abstract classes in Java to reduce code complexity
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=0)** - [Instructor] An abstract class allows us to add abstraction to our Java programs.
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=5)** It's like a template for a class where some of the functionality is not implemented yet.
>
> **[0:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=11)** This means you cannot instantiate an abstract class but other classes can extend the abstract class and implement the appropriate functionality.
>
> **[0:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=21)** One way we might use abstract classes in Java is for reading a file.
>
> **[0:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=26)** Let's say you want to read a file in several different ways.
>
> **[0:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=30)** Some hold secret messages, some have information we want to redact.
>
> **[0:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=35)** So it's important to be able to retrieve the contents of a file in different ways.
>
> **[0:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=42)** To start off, we'll create an abstract file reader class.
>
> **[0:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=47)** This class will have the basic operations for interacting with the file and retrieving the files contents.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=54)** It will also have one attribute called file path.
>
> **[1:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=60)** It will have the data type path which is built into Java.
>
> **[1:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=65)** Once it's set, it will not change for the instance.
>
> **[1:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=68)** So that's why we've added the keyword final.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=71)** For the constructor, we'll have the user input a string which represents the file path.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=77)** Then in the constructor, we'll convert this into a path object and we'll set it equal to our file path attribute.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=87)** We can add additional error handling here to make sure the file path is valid, but we'll keep this simple for now.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=95)** Then we'll add a getter for the user to retrieve the path
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=104)** For this abstract class, we'll include a key algorithm called read file.
>
> **[1:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=113)** This will read the file and turn the output into a list of strings.
>
> **[1:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=117)** For the implementation, we'll iterate through the lines of the file on the file path.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=122)** For each line, we'll parse it.
>
> **[2:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=125)** This will be a custom method we'll create in a minute.
>
> **[2:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=128)** Then we'll collect the parsed results into a list that we returned to the user.
>
> **[2:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=138)** For the parse line implementation, this really shouldn't be done in the base class since other classes will always override this method with different implementations.
>
> **[2:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=149)** The base parsing would be no parsing at all.
>
> **[2:32](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=152)** To force the subclasses to implement parse line, we can make this method abstract by adding the keyword abstract.
>
> **[2:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=161)** You may have noticed now we have some errors.
>
> **[2:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=164)** That's because we need to make the base file reader class abstract.
>
> **[2:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=169)** Classes with abstract methods must be denoted as abstract with the abstract keyword.
>
> **[2:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=176)** Now, since there's no implementation for the parse line method, we cannot instantiate an instance of the abstract file reader class.
>
> **[3:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=184)** Instead, we'll need to create a subclass that extends abstract file reader in order to use it.
>
> **[3:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=192)** Let's say someone is sending us a numerical secret message and they've placed it in the contents of a file, to retrieve the message, we just need to look at the numbers and filter out all of the other letters and symbols.
>
> **[3:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=206)** To do this, we can create a digits only file reader.
>
> **[3:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=210)** This will be a concrete class that extends abstract file reader.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=215)** As a part of that extension, it will need to implement parse line.
>
> **[3:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=223)** We'll also need to create a constructor.
>
> **[3:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=226)** That's because we need some way to get the abstract file reader access to a file path.
>
> **[3:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=232)** For the parse line implementation, we'll replace all of the non-numerical characters with the empty string.
>
> **[4:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=241)** We'll use a regular expression.
>
> **[4:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=246)** Let's try using this in a separate main class.
>
> **[4:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=254)** We'll create a file reader with a file message.txt.
>
> **[4:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=263)** We're finding our code with IntelliJ.
>
> **[4:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=265)** So the message file is in the IntelliJ's project folder.
>
> **[4:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=271)** Let's read the file and point out its contents.
>
> **[4:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=278)** Let's run it.
>
> **[4:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=282)** And there's our secret message.
>
> **[4:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=284)** So what makes the abstract file reader class useful?
>
> **[4:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=288)** One major reason is that this class allows us to place the file reader algorithm in one place.
>
> **[4:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=295)** Other concrete file reader classes can use the algorithm without worrying about the implementation.
>
> **[5:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=303)** They just have to override the parse line method.
>
> **[5:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=308)** With the abstract file reader, we can easily create functionality that reads the file and converts its contents to all uppercase, lowercase or whatever we want.
>
> **[5:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=319)** All we need to do is create a new class that extends the abstract file reader class and implements the parse line functionality.
>
> **[5:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=328)** In other subclasses, we also have the functionality to continue adding custom methods.
>
> **[5:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=334)** Ultimately, there's a bunch of different ways you can read a file in your program but one of the main goals you should have in contributing to a code base is writing code that's easy to read and easy to contribute to.
>
> **[5:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=347)** With this implementation, if there's ever a new type of file reader that needs to be created, a new engineer can just extend the abstract file reader class.
>
> **[5:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-abstract-classes-in-java-to-reduce-code-complexity?u=76281980&t=357)** It's that easy.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (20), let (5), class. (4), extends (3), override (2)
> **CLI Commands:** make (3)
> **Tools:** intellij (2)
> **File Paths:** message.txt (1)
> **Exercise Files:** template (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Using interfaces in Java to provide conformity
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=0)** - [Instructor] Another way we can add abstraction to our Java programs is through interfaces.
>
> **[0:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=6)** An interface is a set of method signatures for to-be-implemented functionality.
>
> **[0:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=11)** It's kind of like a specification for a set of behavior without the implementation.
>
> **[0:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=17)** So like an abstract class, an interface cannot be instantiated.
>
> **[0:22](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=22)** Let's take a look at an example.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=24)** Here we have an event interface.
>
> **[0:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=27)** Any class that wants to use the event interface must implement the getTimeStamp and process methods and return the appropriate type.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=36)** To use an interface, another class implements it, using the implements keyword.
>
> **[0:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=42)** Let's create a class that uses this interface.
>
> **[0:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=45)** We'll call it PasswordChangeEvent.
>
> **[0:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=50)** This event is created when a user changes their password.
>
> **[0:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=55)** To have it use the event interface, we'll use the keyword implements.
>
> **[1:01](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=61)** Of course, we aren't done yet.
>
> **[1:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=63)** In order for this class to properly implement the event interface, it must have implementations for all of the specifications.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=72)** Those are the getTimeStamp and process methods.
>
> **[1:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=76)** We can hover over the error and click implement methods.
>
> **[1:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=80)** IntelliJ will create basic implementations for us.
>
> **[1:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=84)** There's debate in the software community on whether to use @Override.
>
> **[1:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=88)** It's technically not overriding any default functionality but since the specifications are defined somewhere else, it's added here.
>
> **[1:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=97)** Let's add some attributes to this class.
>
> **[1:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=100)** We'll add a timestamp and a customer ID.
>
> **[1:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=104)** These should not change after they're set by the constructor.
>
> **[1:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=107)** So we have the keyword final.
>
> **[1:49](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=109)** Speaking of that constructor, we'll have it take in an id.
>
> **[1:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=115)** For the timestamp, we'll want to create it dynamically.
>
> **[2:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=120)** If we wanted to enhance the class, we could also create another constructor that takes in a timestamp in case the event was created at an earlier time.
>
> **[2:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=130)** Now onto the methods.
>
> **[2:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=133)** Let's return out timestamp attribute with getTimeStamp.
>
> **[2:19](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=139)** Then in process, we'll print out a custom message for processing this customer's event.
>
> **[2:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=147)** Let's create two more types of events.
>
> **[2:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=150)** We'll create MissedPaymentEvent and AccountTransferEvent.
>
> **[2:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=171)** For the MissedPaymentEvent, most of the code will look pretty similar.
>
> **[2:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=176)** The main difference is that we process the event in a different way.
>
> **[3:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=184)** Same goes for AccountTransferEvent.
>
> **[3:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=188)** Similar attributes but a different implementation for process.
>
> **[3:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=192)** The getTimeStamp signature forces each class to have a timestamp attribute that marks the timestamp when the event was created.
>
> **[3:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=201)** So although we can't define attributes in the interface, this is one way to get around that.
>
> **[3:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=206)** Let's go to our Main class and create some instances.
>
> **[3:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=215)** Here we have three events.
>
> **[3:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=217)** One with each type with the different IDs.
>
> **[3:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=221)** Now, since all of these are events, we can put them together in an event array.
>
> **[3:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=227)** This mixes a little bit with the polymorphism principle, since we're classifying them as event objects, rather than their specific type.
>
> **[3:56](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=236)** From here, we can iterate through the events array and process each event individually.
>
> **[4:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=247)** Using the event interface here abstracts away the actual implementation of how an event is processed.
>
> **[4:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=254)** All we know is that this functionality will take each event and process it after printing the timestamp that was created.
>
> **[4:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=263)** This reduces complexity and makes your code easier to read.
>
> **[4:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=267)** Furthermore, by using the event interface, if we ever want all events to have another method specification, we can just add it to the interface.
>
> **[4:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=278)** Adding a new spec to the interface forces all of the classes that implement the interface to conform and implement the new method as well.
>
> **[4:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=287)** This provides conformity for all of your event classes and makes it fairly straightforward to add a new type of event.
>
> **[4:55](https://www.linkedin.com/learning/java-object-oriented-programming-2/using-interfaces-in-java-to-provide-conformity?u=76281980&t=295)** All the developer has to do is use the event interface and implement the specified methods.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (15), let (6), implements (3), class, (2), type. (2)
> **Code Identifiers:** gettimestamp (4)
> **Documentation:** specification (2), spec (1)
> **Tools:** intellij (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Discovering abstraction in Java source code
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=0)** - [Instructor] To find some more examples of abstraction, We can look at the Java source code.
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=5)** Java uses abstract classes and interfaces to reduce complexity.
>
> **[0:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=11)** Let's jump in.
>
> **[0:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=12)** We've taken a look at the ArrayList class a few times now.
>
> **[0:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=17)** In its definition, we see it extends AbstractList, which is an abstract class.
>
> **[0:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=23)** It also implements a few interfaces.
>
> **[0:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=27)** In Java, a class can only extend one other class, but it can implement several interfaces.
>
> **[0:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=34)** Let's take a look at the AbstractList class.
>
> **[0:37](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=37)** This extends Abstract Collection because a list is a specific type of collection.
>
> **[0:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=44)** Going into Abstract Collection, we see a few abstract methods as well as a few methods that are already implemented.
>
> **[0:53](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=53)** For example, is empty takes whatever the size returns and checks if it's zero.
>
> **[0:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=59)** This is a base algorithm that is the same for all collections.
>
> **[1:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=64)** Many of the implemented methods use the abstract methods in order to calculate various things such as whether the collection contains a given item or for converting the collection into an array.
>
> **[1:18](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=78)** When another class extends this class and implements the iterator in size functionality, it will get all of these other collection algorithms for free without worrying about their implementation.
>
> **[1:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=93)** The abstract class also has an add method that throws an unsupported operation exception.
>
> **[1:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=100)** If another class extends this class, then they could override this method and enhance their class with the add functionality.
>
> **[1:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=108)** Let's take a look at collection.
>
> **[1:50](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=110)** The interface that Abstract Collection uses.
>
> **[1:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=114)** Interfaces can extend other interfaces.
>
> **[1:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=118)** This means whatever implements the collection interface must also implement all the functionality in the Iterable interface.
>
> **[2:06](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=126)** These are separated out because a given object might be Iterable, but not necessarily a collection.
>
> **[2:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=133)** However, here, all collections are Iterable.
>
> **[2:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=137)** Scrolling down, all of the methods are things that the Abstract Collection implements or makes abstract for a subclass to implement.
>
> **[2:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=146)** Inside of Iterable, we see the iterator specification.
>
> **[2:33](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=153)** Let's take a step back and go to our ArrayList.
>
> **[2:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=159)** The ArrayList extends AbstractList which extends Abstract Collection.
>
> **[2:44](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=164)** This gives the ArrayList access to various functionality in AbstractList and in Abstract Collection.
>
> **[2:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=172)** We can also say that the ArrayList implements the Iterable and collections interface because it's superclass up the chain implements these interfaces.
>
> **[3:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=183)** At the ArrayList level, we only have to override or implement functionality that is specifically associated with the ArrayList.
>
> **[3:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=192)** Things that should work with any type of list or collection, should live in the AbstractList and Abstract Collection classes.
>
> **[3:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=200)** For functionality that's unique to the ArrayList type, we use abstraction to leave the implementation up to this class.
>
> **[3:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=208)** We abstract away the details to the concrete type while promising certain functionality such as the size method.
>
> **[3:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=216)** The implementation just might be different depending on the concrete list or collection.
>
> **[3:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=222)** This is a common pattern in the Java source code.
>
> **[3:45](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=225)** First, create an interface with method specifications then create an abstract class that implements the interface with base implementations and some abstract methods.
>
> **[3:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=237)** At the ArrayList level, we only have to override or implement functionality that is specifically associated with the ArrayList.
>
> **[4:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=245)** Anything that should work with any type of list or collection should live in the AbstractList or Abstract Collection classes.
>
> **[4:14](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=254)** And this is a common pattern in the Java source code.
>
> **[4:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=257)** First, create an interface with method specifications then create an abstract class that implements the interface with base implementations and some abstract methods.
>
> **[4:30](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=270)** Finally, create a concrete class that implements the abstract methods.
>
> **[4:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=275)** With this pattern, we get base implementations for free on the concrete class level, and complexity is reduced, by leaving the specific unique details to the concrete class.
>
> **[4:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/discovering-abstraction-in-java-source-code?u=76281980&t=287)** I encourage you to explore more of the Java source code to see this pattern in other built-in Java classes.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (20), implements (9), interface (8), extends (6), let (4)
> **Definitions:** is a  (4), is an  (1)
> **Exercise Files:** source code (4)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** find (1)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Leverage abstraction to write simpler applications
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=5)** - [Instructor] In this challenge, you'll practice using abstraction to reduce application complexity and code duplication.
>
> **[0:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=13)** Earlier in the chapter, we created an event interface with two method specifications.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=20)** We had three different classes extend this interface, password change event, missed payment event, and account transfer event.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=29)** All three of these classes have duplicated code for the get timestamp method.
>
> **[0:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=35)** They also have the same attributes, create a timestamp and ID.
>
> **[0:40](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=40)** Can you refractor this code so that the get timestamp functionality and the attributes live in one place?
>
> **[0:47](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=47)** Note, all of the duplicated code has to do with what it means to be an event rather than a specific missed payment or password change event.
>
> **[0:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=57)** Given this refactoring, the code in the main class should not change significantly.
>
> **[1:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=62)** We should still be able to work with the events as event objects.
>
> **[1:07](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=67)** In this challenge, I encourage you to play around with abstract classes and consider using the abstraction pattern we saw in the Java source code.
>
> **[1:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/challenge-leverage-abstraction-to-write-simpler-applications?u=76281980&t=76)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), abstract (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Leverage abstraction to write simpler applications
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=0)** - [Instructor] Let's reduce complexity and code duplication in our event program.
>
> **[0:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=10)** We started off with the event interface and this will remain the same.
>
> **[0:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=15)** However, instead of each custom event class implementing the interface, we'll have an abstract event class that implements event.
>
> **[0:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=24)** Before the timestamp and ID attributes were duplicated across each event.
>
> **[0:29](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=29)** Here, we've put the attributes in a single place, the abstract event class.
>
> **[0:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=35)** The implementation of getTimestamp was also duplicated, so we've put it in this common class.
>
> **[0:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=43)** Now this is an abstract class, so we can not create instances from it directly, rather other event classes we'll extend this class with more functionality.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=54)** In that extension the abstract method process will need to be implemented.
>
> **[0:59](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=59)** Let's take a look at how the password change event has changed.
>
> **[1:05](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=65)** Instead of implementing the event interface, this class extends abstract event.
>
> **[1:11](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=71)** In its constructor, it calls AbstractEvents constructor, which handles the setup of the created timestamp and ID attributes.
>
> **[1:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=80)** This class also overrides the process method with the custom implementation specific to the PasswordChangeEvents.
>
> **[1:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=88)** With this implementation, all of the logic regarding any event lives in the abstract event class, while logic regarding to the specific event lives in its appropriate class.
>
> **[1:39](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=99)** Since the abstract class implements the event interface, and the specific class extends it, PasswordChangeEvent also implements the event interface indirectly.
>
> **[1:52](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=112)** This means in our main method, we can still classify PasswordChangeEvent as a general event, while using its custom process functionality.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=122)** The other event classes look pretty similar, with MissedPayment, we see it extends the AbstractEvent class and implements the abstract method with the custom implementation.
>
> **[2:16](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=136)** For the account transfer class, it also extends abstract event and implements the process method with a unique implementation.
>
> **[2:25](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=145)** By using interfaces and abstract classes, we're able to remove duplicate code, and simplify the custom event implementations.
>
> **[2:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=154)** If an engineer wants to add a new type of event, all they have to do is extend abstract event, and implement the custom functionality.
>
> **[2:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/solution-leverage-abstraction-to-write-simpler-applications?u=76281980&t=163)** This makes it clear that data and functionality belonging to all events should live in the abstract event class, or event interface, while items associated with specific events should live in their own concrete classes.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (12), interface (6), implements (5), class, (4), extends (4)
> **Code Identifiers:** gettimestamp (1)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Conclusion

#### Identifying code smells and anti-patterns in OOP code
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=0)** - [Instructor] When used correctly, object-oriented programming or OOP can be a great tool for writing maintainable and efficient code.
>
> **[0:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=8)** However, developers may accidentally introduce issues known as code smells.
>
> **[0:15](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=15)** Code smells are indicators or warning signs in your code that suggest potential problems.
>
> **[0:21](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=21)** They do not necessarily indicate a bug, but rather areas where your code could be improved.
>
> **[0:28](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=28)** One example of this is class bloat.
>
> **[0:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=31)** Class bloat happens when a class becomes too large and handles many responsibilities.
>
> **[0:38](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=38)** A large class can be challenging to maintain and understand because you might not understand the side effects it has or what could break by changing it.
>
> **[0:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=48)** It's important to consider refactoring it into smaller classes when your team has bandwidth.
>
> **[0:54](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=54)** This is also the case for long methods.
>
> **[0:57](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=57)** A given software application should have many small components, each with their own independent responsibilities.
>
> **[1:04](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=64)** Large components can be difficult to read and understand.
>
> **[1:08](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=68)** Another example of a code smell is a god object.
>
> **[1:12](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=72)** A god object is a class that knows and does too much.
>
> **[1:17](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=77)** It often has many attributes and methods, making it a single point of failure for the application.
>
> **[1:23](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=83)** This could be seen in combination with class bloat.
>
> **[1:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=87)** One of the five solid principles of object-oriented programming in design is the single responsibility principle.
>
> **[1:35](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=95)** This states that a class or module should have a single, well-defined responsibility or job within a software system, encapsulating a single piece of functionality.
>
> **[1:46](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=106)** It should not be responsible for multiple unrelated tasks.
>
> **[1:51](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=111)** By following this principle, your code will avoid having these code smells relating to large classes.
>
> **[1:58](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=118)** The last code smell we'll cover is called feature envy.
>
> **[2:02](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=122)** This happens when a method in one class has a strong interest in the internal details or attributes of another class, more so than in its own class.
>
> **[2:13](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=133)** If a given method frequently accesses or manipulates the properties of another class, it creates excessive coupling, making the two classes less independent.
>
> **[2:24](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=144)** There's a few options to fix this.
>
> **[2:27](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=147)** One is to move the method over to the class it envies.
>
> **[2:31](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=151)** Another is to create an interface to better define a contract between the two classes, so the one relies less on the internal details of the other.
>
> **[2:41](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=161)** Which refactoring option you choose will depend on the design of your code base and the scenario.
>
> **[2:48](https://www.linkedin.com/learning/java-object-oriented-programming-2/identifying-code-smells-and-anti-patterns-in-oop-code?u=76281980&t=168)** Ultimately, identifying code smells early and creating a plan to address them can help you maintain a high standard of code quality.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), module (1), class. (1), this. (1), interface (1)
> **Definitions:** is a  (2), known as (1), is called (1)
> **Env Vars:** oop (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=0)** - [Kathryn] Congratulations! You finished the course.
>
> **[0:03](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=3)** Now you know how to use object oriented programming to write code that's reusable, secure and maintainable.
>
> **[0:10](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=10)** As a part of this course, you discovered the four pillars of object oriented programming, encapsulation, abstraction, polymorphism and inheritance.
>
> **[0:20](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=20)** You leveraged these to reduce complexity and duplicate code in your applications.
>
> **[0:26](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=26)** You also explored Java source code and witnessed how Java uses object oriented programming behind the scenes.
>
> **[0:34](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=34)** Thank you for watching this course.
>
> **[0:36](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=36)** I really enjoyed creating it to help you discover how object oriented programming works in Java.
>
> **[0:42](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=42)** Good luck.
>
> **[0:43](https://www.linkedin.com/learning/java-object-oriented-programming-2/next-steps?u=76281980&t=43)** And I hope the knowledge you've gained in this course comes in handy whenever you're building Java programs.

> [!info]- Semantic Content
>
> **Exercise Files:** source code (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available

## Skills Covered

- Object-Oriented Programming (OOP)
- Java

## Path Context

### In [[Java Foundations Professional Certificate by JetBrains]]
← [[Java Essential Training- Objects and APIs]] | **3 of 5** | [[Java- Data Structures]] →

## Part of

- [[Java Foundations Professional Certificate by JetBrains]]

## Appears In

- [[Java Foundations Professional Certificate by JetBrains]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)