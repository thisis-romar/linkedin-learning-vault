---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: complete-guide-to-java-design-patterns-creational-behavioral-and-structural
url: "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural"
duration_minutes: 306
duration: 5h 6m
level: Intermediate
updated: 3/29/2024
learners: 15761
skills:
  - Software Design Patterns
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/guide-to-java-design-patterns-4512383/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEyFMOVuMzMew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711582600788?e=2147483647&amp;v=beta&amp;t=YBz0MV8GpITY1ZTexxO46TKWdUq2WVinqDqnejxcwz8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Building Your Java Skills]]'
prev_courses:
  - '[[Java- Testing with JUnit]]'
next_courses:
  - '[[Continuous Delivery for Cloud Native Java Apps]]'
path_nav: '[{"path":"Building Your Java Skills","position":4,"total":6,"prev":"Java- Testing with JUnit","next":"Continuous Delivery for Cloud Native Java Apps"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/software-design-patterns
  - skill/java
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Complete%20Guide%20to%20Java%20Design%20Patterns-%20Creational%2C%20Behavioral%2C%20and%20Structural.md)

![Complete Guide to Java Design Patterns: Creational, Behavioral, and Structural](https://media.licdn.com/dms/image/v2/D4D0DAQEyFMOVuMzMew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1711582600788?e=2147483647&amp;v=beta&amp;t=YBz0MV8GpITY1ZTexxO46TKWdUq2WVinqDqnejxcwz8)

# Complete Guide to Java Design Patterns: Creational, Behavioral, and Structural

> In this course, developer Bethan Palmer guides you through using creative, behavioral, and structural design patterns in Java. Find out how design patterns help you write cleaner, more elegant code, and explore a wide range of patterns with real world examples. Practice and reinforce what you learn with hands-on challenges in each chapter. The best way to learn a language is to use it in practice.

> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural) | 5h 6m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Design Patterns]]** (1 videos)
- **[[#3. 2. Creational Design Patterns]]** (1 videos)
- **[[#4. 3. The Builder Pattern]]** (6 videos)
- **[[#5. 4. The Singleton Pattern]]** (5 videos)
- **[[#6. 5. The Prototype Pattern]]** (5 videos)
- **[[#7. 6. The Factory Method]]** (5 videos)
- **[[#8. 7. Abstract Factories]]** (6 videos)
- **[[#9. 8. Structural Design Patterns]]** (1 videos)
- **[[#10. 9. The Adapter Pattern]]** (5 videos)
- **[[#11. 10. The Bridge Pattern]]** (4 videos)
- **[[#12. 11. The Composite Pattern]]** (4 videos)
- **[[#13. 12. The Decorator Pattern]]** (5 videos)
- **[[#14. 13. The Facade Pattern]]** (4 videos)
- **[[#15. 14. The Flyweight Pattern]]** (4 videos)
- **[[#16. 15. The Proxy Pattern]]** (6 videos)
- **[[#17. 16. Behavioral Design Patterns]]** (1 videos)
- **[[#18. 17. The Chain of Responsibility Pattern]]** (5 videos)
- **[[#19. 18. The Command Pattern]]** (5 videos)
- **[[#20. 19. The Interpreter Pattern]]** (5 videos)
- **[[#21. 20. The Iterator Pattern]]** (5 videos)
- **[[#22. 21. The Mediator Pattern]]** (5 videos)
- **[[#23. 22. The Memento Pattern]]** (4 videos)
- **[[#24. 23. The Observer Pattern]]** (5 videos)
- **[[#25. 24. The State Pattern]]** (5 videos)
- **[[#26. 25. The Strategy Pattern]]** (5 videos)
- **[[#27. 26. The Template Method Pattern]]** (4 videos)
- **[[#28. 27. The Visitor Pattern]]** (4 videos)
- **[[#29. Conclusion]]** (1 videos)

### 1. Introduction

#### Improve your code with design patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=0)** Using design patterns can make you a faster and more effective developer.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=4)** If you want to write simple, maintainable, and effective code, this course will show you some shortcuts to doing just that.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=10)** Knowing the different patterns and when to use them will speed up the development process and save you from reinventing the wheel.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=17)** I'll share the specific details of the most well-known design patterns.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=20)** I'll also discuss when to use them to improve your code.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=23)** I'll teach you each pattern by using some real Java code examples to demonstrate how they can be used.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=28)** I'll also be giving you a short hands-on exercise to practice for each pattern, which you'll be able to do in GitHub Codespaces or in your own IDE.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=36)** Then for each one, I'll walk through the solution so you can check your answers and your working.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=41)** My name is Bethan Palmer, and I'm a senior Java developer and member of the Java Champions.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-your-code-with-design-patterns?u=76281980&t=46)** So join me in my course to learn how to write cleaner, simpler, and more maintainable code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** ide (1)
> **Tools:** github (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-you-should-know?u=76281980&t=0)** Before you get started with this course, there are a few things you should know.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-you-should-know?u=76281980&t=3)** You should already be familiar with writing code in Java.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-you-should-know?u=76281980&t=6)** I won't be explaining any basic syntax, so if you're new to Java, I'd suggest watching the course: Learning Java.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-you-should-know?u=76281980&t=13)** If you're comfortable with the basics of writing Java code, is time to open Codespaces or your favorite IDE.

> [!info]- Semantic Content
>
> **Env Vars:** ide (1)


### 2. 1. Design Patterns

#### What is a design pattern?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=0)** As developers, we're constantly having to make decisions about the best way to design our code.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=4)** Sometimes it can be difficult to know the best way to structure something.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=8)** We want our code to be flexible and efficient and reusable, which can be tricky.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=12)** Luckily, most of the time someone else has had the same problem or at least a similar one.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=17)** And over time, people have come up with the best ways to solve these design problems and given them names and shared them.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=22)** This means that when you're stuck on trying to work out the best way to do something, the good news is that you can reuse other people's knowledge and experience.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=29)** Knowing some well-established design patterns can save you from having to reinvent the wheel.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=34)** Imagine someone who wants to cook lasagna.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=36)** They don't have to come up with how to make it themselves.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=39)** Lots of people have already made lasagnas, so instead they can follow a recipe and reuse the knowledge of someone who's already taken the time to come up with a good way to do it.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=47)** Similarly, in coding, solutions to problems that have already been solved by others can be used to save time.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=54)** So a design pattern is a solution to a common problem that developers have when writing code.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=59)** The other good news is that learning design patterns doesn't require any knowledge of a specific technology.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=64)** It doesn't matter if you're designing a brand new web application using Spring or you're working on a huge legacy desktop application or working on a gaming app.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=72)** What the program does isn't important when it comes to using design patterns.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=76)** Going back to the lasagna analogy, a cookbook doesn't provide you with an actual lasagna.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=81)** It just gives you guidelines on how to make one.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=83)** Similarly, a design pattern doesn't give you any actual code to use.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=87)** It's just a guideline or template on how to solve a common problem.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=91)** Some of the most well-known design patterns are described in a book called Design Patterns: Elements of Reusable Object-Oriented Software.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=98)** The authors of the book are often referred to as the Gang of Four, and the book is often credited with being a milestone in how software is written.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=105)** In this course, we'll cover all of these well-known design patterns.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=108)** You'll learn how to use them, and just as important, recognize when to use them.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-is-a-design-pattern?u=76281980&t=112)** Knowing this will make you a much more efficient and confident Java developer.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** means that (1), is a  (1)
> **Code Keywords:** require (1)
> **Exercise Files:** template (1)
> **Analogies:** imagine (1)


### 3. 2. Creational Design Patterns

#### What are creational design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=0)** When we first start writing programs, it's quite common to put a lot of the logic in the class.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=4)** But as applications grow, this becomes less practical.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=7)** Creational design patterns are a set of patterns that help you to manage this complexity.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=12)** This is the first of the three types of design pattern that I'm going to be looking at in this course.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=17)** As an example, say that I start creating an application to keep track of invoices for a store.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=22)** In the beginning, I might just create a class called invoice, and I'd keep all my logic in that class.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=27)** Then over time, I would add new classes that use my invoice class.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=31)** So in lots of places in the code, I would have the words "new invoice."
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=35)** Then one day I might need to change how invoice objects are created.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=39)** For example, I might want to change the constructor, or I might want to have different configurations for different types of invoice.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=46)** This is tricky because now all my code is tightly coupled to this invoice class and how new invoice objects are created.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=53)** So I have to change it everywhere.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=55)** And that starts a domino effect of changes that need to be made.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=58)** Creational design patterns provide various techniques for avoiding problems like this one.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=62)** There are two main themes that are common to most creational design patterns.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=66)** The first is that they encapsulate knowledge about which concrete class the system should use.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=71)** The second is that they conceal how objects are created and put together.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=75)** Abstracting this information makes the code much more flexible.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-creational-design-patterns?u=76281980&t=78)** The system is much less constrained by what gets created, how it gets created, and when it gets created.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3)
> **Analogies:** for example (1)


### 4. 3. The Builder Pattern

#### Avoiding complex constructors
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=0)** As classes grow in size, one common problem is that you end up with large constructors where you have to pass in lots of different parameters.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=6)** Let's take an example of a class that represents a person.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=10)** A person can have lots of different attributes.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=12)** For example, they can have a first name, last name, date of birth, email address, and so on.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=17)** Some of the attributes could be mandatory and others could be optional.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=21)** So, for example, let's say a person has to have a first name, a last name, and a date of birth, but they don't have to have a middle name or an email address and so on.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=29)** So one time when I'm creating a person object, I might want to create one with a name, a date of birth, and a middle name.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=36)** But another time, I might want to create one with just the first name, last name, and an email address.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=41)** And another time, I might want first name and last name, date of birth, middle name, and email.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=46)** So there are lots of possible combinations I could have.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=49)** Let's assume that a person object is immutable.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=52)** This means that once I've set these fields when I create the person objects, I can't come back and change them later.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=58)** So how might the constructor of a person object look in Java code?
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=62)** It might look something like this with a long list of things that I need to pass into the constructor, and for the optional ones that I don't want, I'd have to pass in null.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=70)** There are a few problems with this.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=72)** It's quite messy and it's easy to get things in the wrong order.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=75)** If we look at an example of how this code looks when the constructor is called, it's almost impossible to know what things are being passed in, and it would be really easy to pass the wrong parameter in the wrong place.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=86)** So what's the alternative?
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=88)** One other option is to create different constructors for all the different combinations, but this isn't practical either.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=94)** You'd end up with loads of different constructors, one for each combination, and that would be really hard to read.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=99)** It's also might not be possible if some of the arguments have the same types.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=103)** Java won't know the difference between two different constructors that pass in three different strings, for example.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=109)** The solution to this problem is the builder pattern.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=112)** In this pattern, you have a separate class that's used to construct the object using just the fields that you want, and this class is called the builder.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=119)** In the traditional pattern, there's an interface for the builder and then a concrete implementation.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=125)** The product is the class that would otherwise have the big constructor.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=128)** So in this example, it would be the person class.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=131)** And the director is the class that uses the builder to create the object.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=135)** So, for example, the class where you'd be creating a new person object. In Java, is normally possible to simplify this pattern so you only have the concrete builder without the interface.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors?u=76281980&t=145)** So let's see how this looks with a real example in Java.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), interface (2), this. (1), class. (1)
> **Analogies:** for example (4)
> **Definitions:** is called (2), means that (1)

#### Recognize where to use the Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=0)** Let's have a look at an example of an application that would benefit from using the builder pattern.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=5)** So in this example, there's a class called person, and this has six different fields.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=10)** So first name, middle name, last name, date of birth, email address, and phone number.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=15)** And this is what the constructor for the person class looks like.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=18)** So I'm passing in six different things, and then I'm setting each of those things to the six fields.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=23)** And then there's also a check to see if first name or last name is null.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=27)** And if either of them are null, then it throws an illegal argument exception, and there's a message saying, "First name and last name must not be null."
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=35)** So this means that first name and last name are required fields, but everything else is optional.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=40)** So for all of the others, you could pass in null, if you wanted to.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=43)** The only other thing in this class is a two-string method which just prints out the details of the person object.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=50)** So let's see what it looks like when we use this person class.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=53)** So here's a class called SalesLeadTracker.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=56)** And this class has a method called addPersonToLeadTracker.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=60)** So it takes a person as an argument, and then there's a message that says, "A new lead was added to the lead tracker."
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=65)** And then it just prints out the person's details.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=68)** And above this, there's a main method.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=70)** And in here, I'm creating two people.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=72)** So person1 who has a first name, a last name, a date of birth, and an email, and then I'm adding person1 to the lead tracker.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=80)** And then there's a person2 which has a first name, middle name, last name, and a phone number.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=86)** And then I'm also adding person2 to the lead tracker.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=90)** So as you can see, it's a bit difficult to see which fields are which in this constructor.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=95)** So in GitHub Codespaces, I'm hopefully given this hint that says that this is the middle name.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=100)** But if your IDE doesn't have this feature, you might not know what this is supposed to be.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=104)** So it's quite hard to tell from just the word "null" that this is supposed to be a middle name, and it would be quite easy to pass in something like a last name here instead.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=113)** But let's just run this and see what happens.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=117)** And in the console, it prints out two messages.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=120)** One that says, "A new lead was added to the lead tracker," and it prints out person1's details.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=124)** And then again, "A new lead was added to the lead tracker," and then it prints out person2's details.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=129)** So this works fine, but it's just quite difficult to read and to maintain.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=133)** And although there's only six fields at the moment, you could see that this could become larger over time.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=138)** So people could also have an address, an ID number, and things like that, which would make it even harder to read and maintain.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern?u=76281980&t=145)** So this is a classic example of an application that would benefit from being refactored to use the builder pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), class. (1), this, (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** addpersontoleadtracker (1)
> **Env Vars:** ide (1)
> **Tools:** github (1)

#### Implement a complete Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=0)** I'm going to refactor this SalesLeadTracker to use the builder pattern, and that's so that I don't have to use this constructor for person objects, which is quite difficult to read.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to create a new builder class.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=13)** I could create this as a completely new separate class, but I'm actually going to put it inside the person class.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=20)** So I'm going to scroll to the bottom of person and create a new class inside this one.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=24)** And it's going to be a static class.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=26)** Making it a static nested class means that the builder class can't be used by itself.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=31)** It can only be used when person objects are created.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=34)** So down here, I'm going to say "public static class," and I'm going to call it "PersonBuilder."
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=41)** It's a common convention with the builder pattern to name the builder as something builder.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=45)** So, for example, PersonBuilder to build person objects.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=50)** And this class is going to have all of the same fields as the person class.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=54)** So I'm actually going to scroll to the top of person again and copy all of the fields, and then back down in the person builder, I'm going to paste them.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=62)** So they're going to be exactly the same.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=64)** Next, I need a constructor.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=66)** So I'm going to say "public PersonBuilder."
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=70)** And this is only going to take the required fields.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=73)** So first name and middle name.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=75)** So I'm going to pass in these two fields; String firstName and String lastName.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=81)** And then inside the constructor, I'm going to set those fields.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=84)** So I'm going to say this.firstName equals firstName, and this.lastName equals lastName.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=93)** So because I'm passing in these two things in the constructor, these two fields can both stay as final, but the other ones are going to be optional ones that I'm going to set later with methods.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=103)** So I'm going to remove the final from middle name, date of birth, email address, and phone number, because these can all change.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=115)** So the way this builder is going to work is it's going to have optional methods to set each of these optional fields, and then it's going to have a build method which is going to create a person object using all of these fields and return that person.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=128)** So let's start with that build method.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=132)** So I'm going to say "public" and it's going to return a person objects and I'm going to call it "build."
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=138)** Which, again, is a common naming convention in the builder pattern.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=142)** And then I'm going to return a new person objects, and I'm going to pass in each of the fields in the person builder.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=150)** So first name, middle name, last name, date of birth, email address, and phone number.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=159)** So that build method is going to create a person object and return it.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=163)** So now I just need a way to set these optional fields.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=166)** So I'm going to add some methods to do that.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=168)** I'm going to start with the middle name.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=171)** So these methods are actually going to return a person builder object.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=176)** So, for example, for the middle name one, I'm going to say "public PersonBuilder," and I'll call the method "middleName."
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=184)** And it's going to take a string argument called middleName.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=188)** Then inside here, I'm going to set that field.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=190)** So I'm going to say "this.middleName equals middleName."
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=196)** And then I'm going to return this object.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=200)** So for each method is going to set the field and then return the current object.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=204)** So I just need to do this for the other ones now as well.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=207)** So I'm going to copy this middleName method and I'm going to paste it and then I'm just going to rename this for each of the different fields.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=215)** So I've also got date of birth.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=217)** So let's do that one next.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=219)** So for this one, I'm going to change it to dateOfBirth.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=224)** And then I'm also going to change the name of the variable I'm passing into dateOfBirth and inside here set the date of birth field.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=232)** So now I'll do the same for the others.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=235)** So I'm going to copy the middleName method again and paste it.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=238)** And this time I'm going to change it to emailAddress, and change all of the instances of middleName to emailAddress.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=247)** And then I'm going to copy this emailAddress method one more time, paste it, and I'm going to change emailAddress to phoneNumber.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=257)** So it's going to be a method called phoneNumber, and I'm going to pass in a phone number and then set the phone number field.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=264)** So now I have methods to set each of the optional fields as well.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=268)** So the last thing to do is to go back to the SalesLeadTracker and update my person objects to use my new builder.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=274)** So for person1, I'm going to get rid of this whole constructor, and after new Person, I'm going to put .PersonBuilder and then pass in the two required fields.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=284)** So Tracy was the first name, and then the surname was Westbay.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=289)** And then I'm going to set the fields that were set previously.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=293)** So this one had a date of birth which was local date of 1985 and then 1st of January, and then they also had an email address.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=305)** So I'm going to call the emailAddress method and pass in the email which was tracy@[example.com](https://example.com).
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=312)** And then finally, I just need to call the build method to actually return the person objects.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=317)** So I'm going to put at the end .build.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=322)** Then I can do the same for person2.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=324)** So again, I'm going to get rid of the constructor, and after new Person put PersonBuilder.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=329)** And then pass in the first name, which was Jerome, and the surname, which was Donaldson.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=335)** And then this one also had a middle name.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=338)** So I'm going to call the middleName method and pass in the middle name, which was Henry.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=344)** And then they also had a phone number.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=347)** So I'm going to pass that, their phone number which was 123456789.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=353)** And then again, I just need to call the build method at the end.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=357)** So if I run this, it should work the same as before.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=360)** So I'm just going to run this again.
>
> **[6:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=363)** And it's failed because I haven't changed the turn type of the dateOfBirth method.
>
> **[6:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=368)** So I need to go back to my person builder class, and this should have been a local date instead of a string.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=378)** So if I go back to the SalesLeadTracker and try and run this again, I can see that I get the same output as before.
>
> **[6:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern?u=76281980&t=389)** So now that I've refactored it to use the builder pattern, it's much clearer when I'm creating person objects which of the fields are set. So it's much more readable and much more maintainable.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), class. (4), public (4), class, (3), static (3)
> **Code Identifiers:** middlename (8), emailaddress (5), firstname (3), lastname (3), dateofbirth (3)
> **Cross-References:** go back to (3)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (2)
> **URLs:** [example.com](https://example.com) (1)

#### Improving the Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=0)** In this example application, I now have a fully working builder pattern.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=4)** However, it could still be improved a bit.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=6)** One problem is that this person class still has a public constructor, so anyone can come along and use that directly instead of using my builder.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=15)** So as a first step, I'm going to make that private.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=19)** The other small problem is that I still have to use this big constructor inside the person builder class.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=25)** So down here, if I look inside person builder inside the build method, I'm still using this long difficult-to-read constructor.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=34)** And this is the problem that I was trying to avoid in the first place.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=39)** So to fix this, I'm going to change the constructor of the person class.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=43)** And instead of passing in all these fields, I'm just going to pass in a single field, which is going to be a PersonBuilder.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=50)** So I'm going to replace all of those with PersonBuilder, personBuilder.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=54)** And then for each of the fields, I'm going to set the field from the PersonBuilder.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=58)** So, for example, this.firstName is going to equal personBuilder.firstName.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=64)** So I'm just going to copy this personBuilder.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=67)** and put that in front of each of the assignments.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=74)** So now I need to use this constructor inside my build method.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=78)** So I'm going to go back down to the PersonBuilder class.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=81)** And in here, instead of passing in all of these fields, I'm just going to pass in this.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=88)** So now I've completely got rid of that difficult-to-read constructor.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=92)** And just to check everything still works, I'm going to go back to the SalesLeadTracker and I'm going to run the application again.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=100)** And I can see that everything is still working as before.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=103)** I get the same output in the console.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improving-the-builder-pattern?u=76281980&t=106)** So this is a slightly improved version of the builder pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), pass (2), this. (2), public (1), private (1)
> **Code Identifiers:** personbuilder (3), firstname (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Challenge: The Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=5)** Now, you'll get the chance to have a go at implementing the builder pattern yourself.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=9)** So in this example application, there is a class called StoreItem which has several fields.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=15)** So name, price, shortDescription, longDescription, stockAvailable, and packagingType.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=21)** So this has a big long constructor where everything is passed in and all of the fields are set, and name and price are required fields.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=30)** Then there's a two-string method which prints out the details of a StoreItem.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=35)** Next, there's a class called ItemRegistry, which has a method called addToItemRegistry, which takes a storeItem as an argument and then it prints out a message saying, "Aa new item was added to the registry" and it prints out the storeItem.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=50)** So in here, two StoreItems are created; item1 and item2.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=56)** So in this exercise, you should implement the builder pattern.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=59)** You should create a builder class that handles the construction of StoreItem objects.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=64)** And then you should use that inside this ItemInventory class.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=67)** There's a lot to remember.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=68)** So if you get stuck, it's totally fine to go back and look at the example in the previous videos in this chapter for some inspiration.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=74)** And I'll also be going through the full solution in the next video as well.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-builder-pattern?u=76281980&t=79)** So good luck and have fun!

> [!info]- Semantic Content
>
> **Code Identifiers:** storeitem (2), shortdescription (1), longdescription (1), stockavailable (1), packagingtype (1)
> **Code Keywords:** class. (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)

#### Solution: The Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=5)** Let's have a look at my solution to this builder pattern exercise.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=9)** If you've done yours slightly differently, that's totally fine.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=12)** So the first thing I've done is inside the StoreItem class, I've created a new static class called StoreItemBuilder, and this has all the same fields as a StoreItem.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=22)** And inside the constructor, I'm passing in a name and a price, and I'm making sure that neither of those are null.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=29)** And then I have methods for setting all of the optional fields.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=32)** So, for example, I have a method called shortDescription which takes a string and sets the shortDescription fields to that string that's passed in.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=40)** And this returns a StoreItemBuilder object.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=43)** And I have one of these for each of these optional fields.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=46)** And then finally, I have a build method where I'm creating a new StoreItem and I'm passing in a StoreBuilder.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=54)** So the constructor for the StoreItem has also changed, so if I go back up to the top.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=59)** So instead of passing in all those different fields, this is now a private constructor which takes one single StoreItemBuilder as an argument.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=67)** And finally, if I go to the ItemRegistry class, I'm now using my StoreBuilder to create this item1 and item2 objects.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-builder-pattern?u=76281980&t=75)** So that's how I went about implementing the builder pattern for this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), finally, (2), let (1), static (1), private (1)
> **Code Identifiers:** shortdescription (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### 5. 4. The Singleton Pattern

#### When to use the Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=0)** The singleton pattern is probably one of the most well-known design patterns.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=4)** It's also sometimes known as an anti-pattern because there are some issues which can be caused by using it.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=9)** But when used correctly, there are situations where it is useful.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=12)** So I'll talk about some of the common pitfalls with this pattern and how you can avoid them.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=17)** But firstly, what is the singleton pattern?
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=20)** Normally, when you create a class in Java, you expect to instantiate many different objects of that class.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=25)** For example, if you have a class called car, you'd probably have several places in your code where you create new car objects, but with a singleton pattern you prevent this from happening.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=35)** You make sure there can only ever be one instance of that class.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=38)** For example, only ever one car object.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=41)** The next question is: Why would you want to do this?
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=44)** Say you have a resource that's shared across your application like a database.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=48)** You might have a class that controls access to the database, and in that case, you would only want one object of that class.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=54)** Otherwise, you could have a situation where multiple objects are trying to write to the same table using different instances of your DatabaseAccessor class.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=62)** So some examples of where it might make sense to use the singleton pattern are controlling the connection to a database or access to configuration files or other hardware resources, such as a printer.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=73)** And one of the most well-known use cases is for loggers.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=76)** One of the things to consider when implementing this pattern is thread safety.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=81)** If you have multiple threads in your application, each one could create a new instance of the singleton, which defeats the point.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=87)** So this is something I'll show you how to handle later in this chapter.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=91)** There's also the question of if you should use singletons at all.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=94)** Often there are better alternatives, and refactoring your code might be a nicer solution.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=99)** One of the reasons that people don't like the singleton pattern is that an object-oriented programming, a class should only do one thing.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=106)** But with a singleton class, it does two things.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=109)** It does whatever logic the class is supposed to do, for example, control access to a database, and it also ensures only one instance is created.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=117)** Singletons also make your codes difficult to test, because the objects that use the singleton are tightly coupled to the singleton objects.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=124)** So sometimes you can use other solutions, for example, dependency injection instead of using the singleton pattern.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern?u=76281980&t=131)** However, if you do have a use case where you want to have only one single instance of a class, the singleton pattern will allow you to do this.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), class, (2), case, (1), this. (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (3)
> **Definitions:** known as (1)

#### Implementing the Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=0)** Let's have a look at how to implement the singleton pattern in an existing application.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=5)** So in this example, there's a class called PrintSpooler.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=8)** And this is used to connect to a printer and print things out.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=11)** So in real life it would be a bit more complex than this.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=14)** But just to keep things simple, this just has a method called print which prints out the words "Pinting."
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=20)** But the idea is that there should only be one PrintSpooler object which controls access to the printer with this print method.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=27)** So at the moment, this class is used in two different places.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=30)** Firstly, there's another class called DocumentPrinter and this has a method called printDocuments which creates a new PrintSpooler object and then calls spooler.print.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=40)** And then secondly, there's a class called ImagePrinter, which has a method called printImage.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=45)** And this also creates a new PrintSpooler object and then calls spooler.print.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=50)** So I want to make it impossible to have this new PrintSpooler call, because I don't want the DocumentPrinter and the ImagePrinter both to create separate PrintSpooler objects.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=60)** So I'm going to go back to the PrintSpooler class, and I'm going to implement the singleton pattern here.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=65)** So the first thing I'm going to do is I'm going to make this a final class.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=69)** So after public and before class, I'm going to put final.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=73)** And this means that the class can't be extended.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=77)** And next, I'm going to create a private constructor.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=81)** So normally in Java if you don't have any constructor, it just creates a public one for you.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=85)** So I explicitly need to create a private one.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=88)** And this means that I won't be able to have any new PrintSpoolers anywhere else in the code.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=93)** It can only be created from inside this class itself.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=96)** So I'm going to create my private constructor and just say "private PrintSpooler."
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=103)** And then it's just going to be an empty constructor.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=106)** So I still need a way to create the one single instance that's going to be used, which is going to be done inside this class.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=113)** So underneath my constructor, I'm going to create a field and it's going to be a private static field.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=119)** And it's going to be static because I only want one instance to be created.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=124)** And it's going to be a PrintSpooler object and I'm going to call it "INSTANCE."
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=128)** And because it's static, I'm going to put it all in capitals.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=132)** So now I need a way to access this instance.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=136)** So I'm going to create a new method underneath this field.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=138)** And it's going to be a public method.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=141)** And it's going to be a static method.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=144)** So static methods are methods that belong to the class, which means you can call them without creating instances of the class, which is essential for me here, because I won't be able to create new instances of this class.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=154)** So it's going to be a public static method, which is going to return the PrintSpooler INSTANCE, and I'm going to call the method getInstance.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=162)** So the first thing I'm going to do in this method is I'm going to check if the instance has been instantiated already or not.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=168)** So I'm going to say, if INSTANCE is equal to null, then that means this is the first time this method has been called.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=175)** So I need to create a new INSTANCE object.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=177)** So here I'm going to say, "INSTANCE equals new PrintSpooler."
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=185)** And I don't need an else statement because if the instance has already been initialized, then I don't need to do anything else.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=190)** All I need to do now is return the instance.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=193)** So underneath the if statement, I'm just going to say, "return INSTANCE."
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=197)** So now all I need to do is update my DocumentPrinter and ImagePrinter classes. So I can see inside my DocumentPrinter class that it no longer compiles where I have new PrintSpooler, which is good.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=208)** So I'm going to get rid of that, and I'm going to replace it with my static method.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=211)** So I'm going to say, var spooler equals PrintSpooler.getInstance.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=217)** Then I'll do the same in ImagePrinter.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=220)** So again, I'm going to get rid of the new PrintSpooler and say instead PrintSpooler.getInstance.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=230)** So now I've implemented the singleton pattern in this application.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=235)** However, this current solution isn't thread-safe.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern?u=76281980&t=237)** So in the next video, I'm going to show another solution which is thread-safe.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), private (5), class, (4), public (4), class. (3)
> **Env Vars:** instance (6)
> **Code Identifiers:** getinstance (3), printdocuments (1), printimage (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** means that (2)

#### Thread safety with the Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=0)** A common pitfall when implementing the singleton pattern is not making the solution thread-safe.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=5)** So, for example, in this PrintSpooler class, you can imagine a scenario where two threads are using this application, and they both call this getInstance method at the same time.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=15)** And then they both check if INSTANCE is equal to null at the same time.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=19)** And now the thread has actually created this new PrintSpooler yet.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=22)** So in both cases, this is true.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=24)** So they both come in here and they both create a new PrintSpooler objects.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=28)** So then I've ended up with two PrintSpoolers when I should only ever be able to create one.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=32)** So one easy way to solve this issue would be to make this method a synchronized method.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=38)** And this means that only one thread at a time would be able to come inside this method.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=43)** But one thing to be cautious of is that if you're expecting that this method is going to be called lots of times, it can slow down the execution of the program.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=51)** So another solution to this problem is to make this class into an enum.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=55)** So the first thing I'm going to do is where it says "public final class PrintSpooler" is I'm going to get rid of final class and change that to enum.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=63)** Then, instead of my instance being a field, is going to be an enum value.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=68)** So I'm just going to get rid of the private static PrintSpooler and just leave the word "INSTANCE."
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=73)** So that's a value of the enum.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=76)** And then the next thing to do is inside this getInstance method is I can actually remove this whole if statement.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=83)** So I'm just left with return INSTANCE.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=86)** So this will create an instance of the class when the enum is first used, and the next time it will just use the existing one, which is why I can get rid of that if statement.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=95)** So it basically does what I had before, but with less code.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=98)** And the nice thing is that enums in Java are guaranteed to always be thread-safe.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=102)** So this is a nice way of making sure it definitely works as I intended without having to implement that thread-safe guarantee myself.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=109)** And it's actually a simpler solution to the one I had before with less code.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=112)** One thing to note is that you wouldn't be able to use this approach if the singleton class has to implement a superclass, for example.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern?u=76281980&t=119)** But otherwise, this is probably the better approach for implementing the singleton pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** enum (5), class, (1), public (1), private (1), static (1)
> **Env Vars:** instance (3)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** getinstance (2)
> **Definitions:** means that (1), is a  (1)
> **Warnings:** pitfall (1)

#### Challenge: The Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=5)** Now, it's time to practice implementing the singleton pattern in a short challenge.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=10)** So in this example application, there's a class called Logger.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=13)** And this has a single method called log which takes a string as an argument and then it just prints out that message.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=20)** So in a real world, this would probably be a bit more complex.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=22)** But the idea here is to practice the singleton pattern rather than learn how loggers work internally.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=28)** So there's a simple Logger class, and then there are two more classes that use it called Cat and Dog.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=33)** So, for example, if I look inside the Dog class, there's a field called Logger where it creates a new Logger object.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=39)** And then there's a woof method which logs the word "Woof."
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=43)** And then the Cat class is exactly the same, but the method is called meow, and it logs the word "Meow" instead of Woof.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=49)** And then finally, there's a main class with a main method inside it.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=53)** So this creates a new Dog object and then calls dog.woof, and then a Cat object and calls cat.meow.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=60)** So if I run this, I can see in the console that it prints out Woof and Meow.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=66)** So the purpose of this exercise is to refactor this Logger class to make it into a singleton.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=72)** So have a go at doing it from memory, and if you get stuck, you can always see the example in the previous video for a reminder about how to implement this pattern.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=79)** And I'll also be going through the solution to this exercise in the next video as well.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-singleton-pattern?u=76281980&t=84)** So good luck and have fun!

> [!info]- Semantic Content
>
> **CLI Commands:** cat (4), make (1)
> **Code Keywords:** class, (2), finally, (1), this, (1)
> **Cross-References:** previous video (1), next video (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### Solution: The Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=5)** Let's have a look at a solution to this singleton pattern exercise.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to change this Logger class into an enum.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=13)** So I'm just going to change the word "class" to enum.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=17)** And then I need a value, which is going to be the instance of my logger.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=21)** So I'm going to call it "INSTANCE."
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=22)** So just all in capitals, the word "INSTANCE," followed by a semicolon.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=27)** And next, I'm going to create a method to get hold of this instance.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=30)** So I'm going to say, public static, and it's going to return a logger.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=35)** And I'm going to call it "getInstance."
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=39)** Then I can just say, "return INSTANCE."
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=43)** So that's all I need to do in the Logger class.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=45)** So now I just need to update my Dog and Cat classes.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=48)** So let's start with the Dog class.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=50)** And instead of new Logger, I'm going to get rid of that, and I'm going to say, "Logger.getInstance."
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=59)** And actually, another thing you can do is you can just say, "Logger.INSTANCE."
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=63)** So you don't actually need the getInstance method at all, but it's nice to have it explicit.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=67)** So either way, is completely fine.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=70)** And then the same in the Cat class.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=72)** I'm going to change new Logger to Logger.getInstance.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=79)** One thing I didn't do is I didn't create a constructor in the Logger class.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=83)** And this is because for enums, loggers are actually private by default.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=87)** But if you did create a private constructor, that's great because it makes it really explicit.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=92)** So that's one way to implement the singleton pattern in the Logger class.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=96)** So you might have done it differently, and you might have created a normal class instead of an enum.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-singleton-pattern?u=76281980&t=100)** And that also works completely fine.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), enum (3), let (2), private (2), public (1)
> **Code Identifiers:** getinstance (4)
> **Env Vars:** instance (4)
> **CLI Commands:** cat (2)


### 6. 5. The Prototype Pattern

#### Understand the Prototype pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=0)** Imagine a scenario where you have to create lots of very similar objects.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=4)** As an example, say you're creating a user interface which displays a forest of trees.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=8)** To create the display, you'd need to create lots of Tree objects.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=11)** For example, say you need to create 50 fir trees, 50 oak trees, and 50 silver birch trees to create the scene.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=18)** Let's think about how this might look when it's implemented in code.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=21)** The class structure might look something like this with an interface at the top called Graphic.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=26)** And then there might be a class that extends this called Tree, which has a constructor that takes the type of tree and the heights.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=32)** And the code to create all the Tree objects would then be a long list of new Tree variables, where we pass in lots of the same information repeatedly.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=40)** So I do this for all the fir trees, which are the same height, and then I need to do the same for all the oak trees, which are also the same height as each other.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=48)** One way to help solve this repetitiveness would be to add a new layer to the class hierarchy.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=53)** So below Graphic, you have Tree, and below Tree, you would have the different types of Tree.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=58)** This means I wouldn't have to repetitively set the type and the heights of all the new Tree objects I created, because the fir tree would already have the height set and oak tree and silver birch tree and so on.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=67)** However, one drawback to this is that it makes the hierarchy more complex, especially if I start adding new types of trees later.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=75)** So the other option is to use the prototype pattern.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=78)** With this pattern, the interface at the top of the hierarchy defines a clone method, and then the Tree class also has a clone method.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=85)** This clone method means that we can copy the configuration of an existing objects without having to complicate the class hierarchy.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=92)** Think of Dolly, the sheep that was cloned.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=94)** The prototype pattern essentially does this for Java objects, so that similar objects don't have to be configured multiple times.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=101)** One thing to note is that there is an interface called Cloneable in Java.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=105)** One way to implement this pattern is to use this Cloneable interface.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=108)** However, there are some issues with this interface that is worth knowing about.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=112)** Firstly, it has no clone method, so using it doesn't really tell us much about what the implementing class is going to do, and it's also a bit of a hassle to implement.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=122)** We have to implement the interface and handle the exception it throws without any real benefits.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=126)** So for these reasons, the Cloneable interface is often avoided in Java.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-prototype-pattern?u=76281980&t=130)** In my examples, I'm going to be using an approach called the copy constructor, which is a bit simpler to implement.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), let (1), extends (1), pass (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **Analogies:** imagine (1), for example (1)

#### Implement the Prototype pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=0)** Let's see how the prototype pattern works with a real example.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=3)** This is an app that keeps track of orders placed at a restaurant.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=7)** So the first class we're going to look at is a class called Meal.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=10)** This is an abstract class which has a single fields of type int called price, and it has a simple constructor that sets the price, and then a getter and a setter for the price.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=21)** And so far, there's one class that extends this abstract class and that's the Pizza class.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=26)** So a pizza is a type of meal.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=28)** So it has a price, and it also has this extra field called PizzaFlavor.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=33)** And this class just has a constructor where you pass in the price and flavor and then a getter and setter for the flavor and then a two-string method to print out the Pizza object in a nice way.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=44)** So let's have a look at this PizzaFlavor class.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=48)** This is a class that has a field called Name, which is a string, and this is passed into the constructor and set there.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=55)** And then again, there's a getter and a setter and a two-string method.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=59)** So there's an abstract class called Meal and then a concrete implementation which is Pizza.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=63)** And then Pizza has a PizzaFlavor, which is just the name of the flavor of the pizza.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=68)** There's one final class which is the OrderTracker class.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=71)** So this has a main method where I'm creating all of the different pizzas for the order.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=76)** So first of all, it creates a pizza flavor called Hawaiian.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=79)** And then it creates five new pizzas with the price of four and the flavor "Hawaiian."
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=85)** Then I do the same with pepperoni.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=87)** So I'm creating a pizza flavor called pepperoni, and then five pepperoni pizzas with the price of five and the flavor "pepperoni."
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=94)** Then I'm adding all of the pizzas to a list, and then I'm calling a method called placeOrder, which just prints out a message saying "Order placed," and then it prints out all of the items in the list.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=104)** So let's just run this quickly to see what that looks like.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=108)** So here, I've got a list of all my 10 pizzas.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=111)** So as you can see, there's a lot of duplicated efforts here. For each of the Hawaiian pizzas, I have to set the price and the flavor the same way five times, and then, again, for the pepperoni pizza below that.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=122)** So this is where the prototype pattern can help to remove this duplication.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=126)** So the first thing I'm going to do to implement this pattern is I'm going to go back to the Meal class, which is the abstract class.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=132)** And in here, I'm going to define a clone method.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=135)** So I'm just going to scroll to the bottom and create a public abstract method called clone.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=143)** And it's going to return a Meal object.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=147)** And it's a common convention to call the method clone when using the prototype pattern.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=153)** So now I need to go to my Pizza class, and because it extends Meal, it doesn't compile anymore because I haven't implemented the clone method yet.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=160)** So I'm going to scroll to the bottom of this class and add that clone method.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=164)** So I'm going to add the annotation "Override" and then I'm going to say "public" and this is going to return a Pizza object.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=174)** So a pizza is a type of meal.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=175)** So I can return this type here, and I'm going to call it "clone."
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=180)** And then inside this method, I'm going to return a new Pizza object, but using the fields from the current object.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=186)** So I'm going to say "return new Pizza."
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=189)** And I'm going to pass in this.getPrice and this.getFlavor.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=199)** So that will create a new pizza, but with the fields set from the current objects.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=204)** So now I just need to update my OrderTracker class.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=208)** So I'm going to create hawaiianPizza1 in the same way as before.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=211)** But then for the others, I'm going to clone it.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=213)** So for hawaiianPizza2, I'm going to get rid of the new Pizza part and I'm going to say, "hawaiianPizza1.clone."
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=220)** And then I'm just going to copy that for all of the other ones.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=223)** So for Pizza3, I'm going to call clone again.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=226)** And then for Pizza4, the same again, and the same again for Pizza5.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=231)** Then I'm going to do the same with the pepperoni pizzas.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=235)** So for pepperoniPizza1, I'm going to create my pizza with the correct configuration.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=240)** And then for pepperoniPizza2, I'm going to say, "pepperonipizza1.clone."
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=246)** And then, again, I'm going to copy that for Pizza3, Pizza4, and for Pizza5.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=256)** And just to check it still works as before, I'm going to run this again.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=261)** And I can see I still get my list of five Hawaiian pizzas and five pepperoni pizzas.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=267)** So these clones Pizza objects are actually still their own separate Java objects, but they have the same field sets as the original one.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-prototype-pattern?u=76281980&t=274)** So this is a simple implementation of the prototype pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (5), class. (5), let (3), extends (2), pass (2)
> **Code Identifiers:** hawaiianpizza1 (2), placeorder (1), getprice (1), getflavor (1), hawaiianpizza2 (1)
> **Definitions:** is a  (6), is an  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Handling mutability
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=0)** In this example app, I'm using the prototype pattern to remove duplication when creating pizza orders in a restaurant.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=7)** So I'm using this clone method on the Pizza class to clone the original pizza.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=11)** However, this clone method I've implemented only creates a shallow copy of the Pizza object.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=16)** I've assumed that none of the pizzas fields are going to change, so let's have a look at one of the drawbacks of this approach.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=23)** So in this OrderTracker class, I've created a Hawaiian pizza and cloned it several times.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=28)** But let's say that later on I want to change the flavor of the first pizza after I've cloned it.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=33)** So underneath all of these clones, I'm going to change the Hawaiian pizza flavor.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=37)** So I'm going to say, hawaiian.setName, and now I want to call it Hawaiian with extra cheese.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=48)** So let's see what happens when I run the app now.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=52)** And I can see in the output that it's actually changed the flavor for all of the clones pizzas, as well as for the original pizza.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=59)** This is because the PizzaFlavor field for each cloned pizza is the same PizzaFlavor object, and if that's the functionality that you want, then everything is fine and you don't need to change anything.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=70)** But if you want to avoid accidentally updating all of the cloned objects, then a deep copy needs to be made instead of a shallow copy.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=77)** So to fix this, I need to change my clone method.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=81)** So I'm going to go back to my Pizza class.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=84)** And I'm going to scroll down to the bottom where I have my clone method implemented.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=88)** So in here, I'm returning a new Pizza and I'm passing in this.getPrice and this.getFlavor, which means that I'm actually passing in the original flavor objects.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=98)** So I need to change this.getFlavor.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=101)** So I'm going to remove that, and instead, I'm going to create a new pizza flavor object.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=105)** So I'm going to say, new PizzaFlavor, and then inside here, I'm going to pass in this.getFlavor and then .getName.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=117)** So I'm essentially cloning the pizza flavor as well as the pizza.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=121)** So now if I go back to the OrderTracker and I run this again, I can see that this time the flavor has only updated for the first pizza, and the clone ones still have the original flavor.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability?u=76281980&t=133)** This is because the flavor field is now a separate object, so it can't be changed by accident any longer.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (3), class, (1), this, (1), class. (1)
> **Code Identifiers:** getflavor (3), setname (1), getprice (1), getname (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** means that (1)

#### Challenge: The Prototype pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=5)** In this challenge, you'll be implementing the prototype pattern in an application that creates graphics for a display.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=11)** So let's have a quick look at the classes involved in this app.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=14)** So the first one to look at is the Graphic class.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=17)** This is an abstract class which has a field called heightInPixels and a getter and a setter a method.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=24)** Then there's also a Building class which extends the Graphic class.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=28)** And this also has a field called buildingType.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=31)** So let's have a look at the buildingType class.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=35)** This is a class that has a string field called type, and that's set in the constructor.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=40)** And then it also has a getter and the setter.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=43)** And then finally, there's a class called Cityscape.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=47)** So in here, there's a main method where there's a BuildingType called houseBuildingType.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=51)** And then it's creating five different houses, but the heightInPixels of 21 and the houseBuildingType.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=57)** And then it's setting the type to a different name house with the odd.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=61)** And then there's a BuildingType called skyscraperBuildingType.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=65)** And then it's creating five skyscraper buildings with the heights of 86 and the type of skyscraperBuildingType.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=72)** So if I run this app, I can see in the output that it constructs a cityscape and there's five buildings that are 21 pixels high and they're of type "House with yard."
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=83)** And then there's five buildings of type "skyscraper" which are 86 pixels high.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=87)** So in this exercise, you should implement the prototype pattern so that we don't have to keep repeating the configurations for houses and buildings.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=95)** And as a bonus goal, you should also make sure that the house type only changes to "House with yard" for the first house, and the other ones should still just say "house."
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=103)** So I'll be going through the full solution to this exercise in the next chapter.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-prototype-pattern?u=76281980&t=107)** Good luck and have fun!

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), let (2), abstract (1), extends (1), type, (1)
> **Code Identifiers:** heightinpixels (2), buildingtype (2), housebuildingtype (2), skyscraperbuildingtype (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)

#### Solution: The Prototype pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=5)** Now, I'm going to talk through my solution to the prototype pattern exercise.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to go to the Graphic class.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=13)** And at the bottom of this class, I'm going to add a new method called clone.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=17)** So I'm going to say, "public abstracts Graphic clone."
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=23)** And then I need to implement this method in the Building class.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=26)** So I'm going to go to the Building class and scroll to the bottom.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=30)** And here I'm going to add an @Override.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=33)** And I'm going to say, "public Building clone."
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=38)** And then inside this method, I'm going to return a new building object with the field set as the same as the current one.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=44)** So I'm going to say, "return new Building."
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=48)** And I'm going to pass in this.getHeightInPixels.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=55)** And then for the BuildingType, I'm actually going to create a new BuildingType object.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=59)** So I'm going to say, "new BuildingType," and then I'm going to pass in this.getBuildingType().getType.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=70)** And that means that if the building type changes for the original objects, the ones that are cloned won't also update.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=77)** So now let's see if it works.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=78)** So I'm going to go back to my Cityscape.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=82)** And instead of having a new Building each time, I'm going to say, "house1.clone."
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=91)** And then I'm just going to copy that and paste it for all the other houses.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=95)** So house3 is also going to be house1.clone.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=98)** And the same for house4 and the same for house5.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=102)** And then for the skyscrapers, I'm going to keep skyscraper1 as the same.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=106)** And then for the others, I'm going to say, "skyscraper1.clone."
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=112)** And then, again, I'm going to copy that for skyscraper3 and for skyscraper4 and for skyscraper5.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=121)** So let's run this and see what we get.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=124)** So it creates all of my 10 buildings, and it also changes the house type only for the first one after I've cloned the others.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=132)** So that's one way of implementing the prototype pattern.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-prototype-pattern?u=76281980&t=135)** As usual, if you've implemented this slightly differently, that's totally fine.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), public (2), pass (2), this. (2), let (2)
> **Code Identifiers:** getheightinpixels (1), getbuildingtype (1), gettype (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)


### 7. 6. The Factory Method

#### Understand the Factory Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=0)** The factory method is a pattern that handles deciding which type of concrete class needs to be created by another class.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=5)** This is best explains with an example.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=8)** So imagine there's an application called a ticket machine, which creates tickets for public transport.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=13)** Initially, the ticket machine might only create bus tickets, so that's fairly straightforward to implement.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=19)** I would have a TicketMachine class and a Ticket class, and the TicketMachine class creates Ticket objects.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=25)** So far so good.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=26)** But later, I might want to have ticket machines that sell different types of tickets, for example, train tickets.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=32)** So in my code, I might introduce a ticket interface with two concrete implementations called bus ticket and train tickets.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=38)** The problem is that the TicketMachine class doesn't know in advance which type of ticket it needs to create; bus tickets or train tickets.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=45)** This is the problem that the factory method pattern solves.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=48)** There are a couple of different variations of this pattern.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=51)** One variation is to have a factory method inside the creator.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=54)** So in this case, the TicketMachine would have a createTicket methods that can return different types of tickets.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=60)** So in this createTicket method, you would pass in a parameter that would be either bus or train, and then it would return the correct concrete type based on that parameter.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=69)** The alternative is to create different types of ticket machine that are responsible for creating different types of tickets.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=75)** So bus ticket machines could create bus tickets and train ticket machines could create train tickets.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=80)** Both approaches work well, and you can use either depending on your use case and your preference. In the language of the factory method pattern, the TicketMachine classes are the factories and the tickets are the products that they're creating.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=92)** So to summarize, you use the factoring method pattern when you have a class that's responsible for creating objects of another type of class, but that class doesn't know in advance which concrete types of the class it should create.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern?u=76281980&t=103)** A nice side effect of this pattern is that the creation of the object is encapsulated in one place, so if it changes, the call to new is only in that one place and only needs to be changed there.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), class. (1), public (1), interface (1), case, (1)
> **Code Identifiers:** createticket (2)
> **Analogies:** imagine (1), for example (1)
> **Definitions:** is a  (1)

#### Implement the Factory Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=0)** This is an example of an application where the factory method pattern might come in useful.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=4)** It's an app for selling different types of tickets.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=8)** So let's have a look at the classes we've got at the moment.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=10)** So the first one is a class called Tickets.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=13)** And this is actually an interface which defines a single method called getPrice.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=18)** At the moment, there's only one class that implements this interface which is the BusTicket class.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=22)** So this overrides the getPrice method and returns the value three.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=26)** Next, there's a class called TicketMachine.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=29)** And this has a method called createTicket, which returns a new BusTicket.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=34)** So this is all fine if I have an app that wants to use the ticket machine to print bus tickets.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=39)** So to represent that app, I have another class here called TicketOffice.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=43)** And this has a field called ticketMachine where I'm creating a new TicketMachine.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=48)** Then it has a method called buyABusTicket.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=51)** So it creates a new ticket using the ticketMachines method to create tickets.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=54)** And then it prints out a message saying, "One bus ticket purchased.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=57)** The price is" and then it uses the ticket.getPrice to get the price.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=61)** So if I run this, I can see in the output it says, "One bus ticket purchased.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=68)** The price is $3."
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=70)** So what if I want to be able to buy train tickets from this ticket office?
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=74)** So let's see how that would work.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=76)** So the first thing I'm going to do is I'm going to create a new class, and it's also going to implement the ticket interface.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=83)** So I'm going to create a new file called TrainTicket.Java.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=90)** So after TrainTicket, I'm going to add implement Ticket.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=94)** So I need to override the getPrice method.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=96)** So I'm going to put @Override, and then it's going to be public int getPrice.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=103)** And let's say train tickets are $7, so I'm going to say, "return 7."
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=107)** So now the ticket machine has to be able to return either a bus ticket or a train ticket.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=113)** But it doesn't know in advance which one it should return.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=116)** So I'm going to make this createTicket method into a factory methods.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=120)** So now it's going to take an argument which is going to be either bus or train.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=124)** So I'm going to use a string and I'm going to call it ticketType.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=127)** Then inside this method, I'm going to check if it's bus or train.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=131)** So I'm going to say, "if ticketType.equals," and I'm actually going to use .equalsIgnoreCase just in case.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=140)** And I'm going to pass in bus.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=143)** Then in that case, I want to return a new BusTicket.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=147)** So I'm going to cut that and paste that inside the if statement.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=152)** Then the only other type of ticket at the moment is a train ticket, so I can just add else.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=156)** And then I'm going to say, "return new TrainTicket."
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=161)** And I'm missing a brackets up there.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=164)** So now I need to go back to my TicketOffice class.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=167)** And inside this createTicket method, I now need to pass in the type.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=171)** So I want it to be a bus ticket.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=172)** So I'm going to pass in bus.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=174)** And now I can also create a method to buy train tickets as well.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=178)** So I'm going to copy this buyABusTicket method and just paste it underneath.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=183)** And then I'm going to call it "buyATrainTicket" instead of buyABusTicket.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=188)** And when I'm calling createTicket, instead of passing in Bus, I'm going to pass in the word "Train."
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=194)** And let's call that inside the main method as well, just to check it works.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=198)** So underneath buyABusTicket, I'm going to add buyATrainTicket.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=204)** So if I run this now, I can see it says, "One bus ticket purchased.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=210)** The price is $3." And then it says the same again, "One bus ticket purchased.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=213)** The price is $7."
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=214)** So I need to update where it says "bus" to train inside the TrainTicket method.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=220)** And if I run it again, this time it works as expected.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=225)** So it says, "One bus ticket purchased.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=227)** The price is $3." And "One train ticket purchased.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=229)** The price is $7."
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=231)** So if I add more ticket types, I just need to update the createTicket method inside my TicketMachine class.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-factory-method-pattern?u=76281980&t=239)** So this is how the factory method pattern can be used to decide which concrete classes to return in a flexible and extensible way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (4), interface (3), class. (3), override (2)
> **Code Identifiers:** getprice (5), createticket (5), buyabusticket (4), tickettype (2), buyatrainticket (2)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** trainticket.java (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### Improve the Factory Method pattern with functional programming
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=0)** This application implements the factory method pattern.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=3)** So this createTicket method is my factory method, and it works totally fine.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=8)** But one slight drawback is that every time I add a new ticket type, I have to add it to this if-else statement.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=14)** So if in the future I have loads of different ticket types, this is going to be quite long and probably not very readable.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=20)** So let's have a look at an alternative way to implement the pattern.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=23)** So in this version, I'm going to create a HashMap in this TicketMachine class to store the possible types of tickets.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=29)** So the key is going to be the ticket type and the value is going to be a supplier, which is basically a snippet of code that's going to create a new ticket of the right type for me.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=38)** So let's show you what that looks like.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=40)** So first of all, I'm going to create the map.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=42)** So I'm going to say, "private static final Map," and the key is going to be a string.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=49)** And the value is going to be a Supplier which is going to return a ticket type.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=54)** So I'm going to put Ticket in angle brackets, and I'm going to call it ticketMap.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=59)** Then I just need to say, "equals new HashMap."
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=64)** And they also need to make sure that I import the Map class and the Supplier.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=74)** And HashMap's already been imported.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=78)** So this is a static final field because it belongs to this TicketMachine class and it's not going to be different for different ticketMachine objects.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=85)** So next, I need to put some values inside the Map.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=88)** So I'm going to create a static block, so put the word static and then a pair of curly braces, and then for the first one, I'm going to say, "ticketMap.put."
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=99)** And for bus tickets, the key is going to be the string "Bus," and then the value is my Supplier.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=106)** So Supplier is a type of functional interface that doesn't take any arguments and returns an objects of the type specified up here.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=113)** So here I need to put a lambda so it doesn't take any arguments.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=117)** So I just need to put a pair of empty brackets and then an arrow and then I can just put new BusTickets.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=124)** So that's saying if I get to the bus key, then the value it should return is a bit of code to return a BusTicket object.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=131)** And actually, I can simplify this lambda a bit further.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=134)** So I can use method references to create this ticket.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=137)** So instead of the brackets and the arrow and the new, I can get rid of that and the brackets off the BusTicket and instead put two colons and the word "new."
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=146)** So this is shorthand for saying create a new BusTicket object.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=150)** Then I just need to do the same for train tickets.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=152)** So I'm going to copy that whole line and paste it underneath.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=155)** And then this time, the key is going to be Train.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=159)** And it's going to return a new TrainTicket instead of BusTicket.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=163)** Next, I need to update the createTicket method.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=166)** So at the moment, I'm passing in a parameter which is the ticketType.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=171)** And then I'm saying if it's a bus, then I return a new BusTicket and if it's train, then I return a new TrainTicket.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=178)** But now I want to check if the ticketType is inside the Map, and if it is, then return the value which creates the object for me.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=185)** So I'm going to change this whole if statement.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=189)** So I'm going to get rid of everything inside the brackets.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=191)** And I'm going to check if the ticketType is a key in the Map.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=195)** So I'm going to say, "if ticketMap.get" and then pass in ticketType.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=202)** And then I'm going to check that it's not equal to null which means it's inside the Map.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=207)** So if it's not null, then I want to return the value.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=211)** So I'm going to say, "return ticketMap.get" and pass in ticketType.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=219)** And I also need to put another .get at the end to actually get the value from the Supplier.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=225)** So if I pass in bus, it's going to check if bus is in the Map and it is.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=230)** So that means it's going to return a new BusTicket.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=233)** And if its train passed in, then it will check if train is in the ticketMap and it is, so it will return a new TrainTicket object.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=240)** So in the else statement, I'm just going to throw an exception if the value passed in is not inside the Map.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=247)** So I'm just going to say, "throw new IllegalArgumentsException."
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=252)** And inside the brackets, I'm going to put a message that says, "Invalid ticket type."
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=259)** So if I get back to my TicketOffice class and run this, I should get the same outputs as before.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=266)** So I can see it still says, "One bus ticket purchased.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=268)** The price is $3," and "One train ticket purchased.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=271)** The price is $7."
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=273)** So this works the same as before, but it's slightly neater having a Map instead of all the values in the if-else statements.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=280)** So if I add new types later, I just need to add it inside this static block and put it inside the Map.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-factory-method-with-functional-programming?u=76281980&t=286)** And then I don't need to do anything with my actual factory method. That can just stay exactly as it is.

> [!info]- Semantic Content
>
> **Code Keywords:** static (5), pass (3), let (2), type. (2), lambda (2)
> **Code Identifiers:** ticketmap (5), tickettype (5), createticket (2), ticketmachine (1)
> **Definitions:** is a  (4)
> **Best Practices:** the key is (4)
> **CLI Commands:** make (1)

#### Challenge: The Factory Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=5)** In this challenge, you'll get to implement the factory method pattern in an app which represents a vending machine that dispenses various snacks.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=12)** So let's have a look at the code you'll be working with.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=14)** First of all, there's an interface called Snack, which has a method called getPrice.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=19)** Then there are three classes which implement this interface.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=22)** So one of them is Chips, the other one is ChocolateBar, and the third one is Drink.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=27)** So these three classes all implement Snack and they override the getPrice method and return different values.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=33)** Then there's the VendingMachine class.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=36)** This class has a method called getSnack, which takes in arguments of type string, which is the snackType. And at the moment, this just returns null.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=44)** But for this challenge, you'll need to implement the logic in this method so that it returns the right type of snack depending on what's passed in.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=51)** So this method is going to be the factory method.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=54)** And this VendingMachine class is the place where you'll be working on the solution to this challenge.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=58)** Finally, there's the class that uses the VendingMachine, and that's a class called Store.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=63)** So this class has a method called buySnack, and you pass in a string which is the snackType.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=68)** And then it uses this VENDING_MACHINE.getSnack method to get the snack.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=73)** And then it prints out a message saying what was bought and how much it cost.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=77)** And then in the main method, this buySnack method is called three times.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=80)** So the first time ChocolateBar is passed in and then Chips and then Drink.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=85)** So if I run this at the moment, I get a null pointer exception.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=90)** And that's because this getSnack method just returns null at the moment.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=93)** So when it tries to do snack.getPrice, it can't call this method on null.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=97)** But once you've implemented the factory method pattern, it should print out the message saying which snack has been bought and the price.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=104)** You can choose to either implement the pattern with or without functional programming.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=108)** Either way is totally fine, so choose whichever you're most comfortable with.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-factory-method-pattern?u=76281980&t=112)** I'll be showing a solution to this in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** getprice (3), getsnack (3), snacktype (2), buysnack (2)
> **Code Keywords:** interface (2), let (1), override (1), class. (1), finally, (1)
> **Env Vars:** vending_machine (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)

#### Solution: The Factory Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=5)** With this challenge in particular, there are a few different ways that this can be solved.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=9)** So this is just one of the ways to implement the factory method pattern here.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=12)** But there are, of course, other ways.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=14)** So the first thing I'm going to do is I'm going to go to the VendingMachine class.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=19)** And inside here, I'm going to create a Map to store all the possible types of snack.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=24)** So I'm going to create a new field which is going to be a private static final field.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=30)** And it's going to be a Map where the key is a string and the value is a Supplier which is going to return a Snack.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=38)** So I'm going to put Snack in angle brackets.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=41)** And I'm going to call this snackMap.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=44)** Then I'm going to say, "equals new HashMap."
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=49)** So I just need to import Map and also Supplier.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=58)** And the next thing I'm going to do is I'm going to populate the values in the Map.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=64)** So I'm going to create a static block.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=67)** And inside the curly braces, I'm going to first put snackMap.put.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=73)** And the key for the first one is going to be ChocolateBar.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=78)** And then the value, I'm going to use a method reference and I'm going to say, "ChocolateBar::new."
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=86)** Then I'm going to copy that and paste it below.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=90)** And for the second one, I'm going to change the key to Chips and the Supplier to Chips::new.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=98)** Then I'm going to paste it again.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=100)** And for the third one, I'm going to change the key to Drink, and change the Supplier to Drink::new.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=109)** So now I've got my Map and I've populated it.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=111)** So now I need to update my getSnack method.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=114)** So I'm going to get rid of this return null, and I'm going to check if the snackType is in my Map.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=120)** So I'm going to say if snackMap.getSnackType is not equal to null, so if it is in the Map, then I want to get the value.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=129)** So I'm going to return snackMap.get and again pass in the snackType.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=134)** And I also need to add a .get at the end as well to get the actual value.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=138)** And if it's not in there, I'm going to throw an illegal argument exception.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=141)** So I'm going to say else and then throw new IllegalArgumentException.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=147)** And I'm going to put a message in the exception saying, "Snack type not available."
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=153)** So if I go back to the Store class now and if I run this and now prints out that one ChocolateBar was purchased.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=162)** The price was $3. One Chips purchased.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=164)** The price is $2. And one Drink purchased.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=167)** The price is $4.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=168)** So well done if you completed this exercise.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-factory-method-pattern?u=76281980&t=170)** And again, if you did it in a different way, that's as usual, completely fine.

> [!info]- Semantic Content
>
> **Code Keywords:** new. (3), static (2), throw (2), class. (1), private (1)
> **Code Identifiers:** snackmap (4), snacktype (2), getsnack (1), getsnacktype (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Best Practices:** the key is (1)


### 8. 7. Abstract Factories

#### Understand abstract factories
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=0)** Sometimes we have frameworks that use groups of classes together, and there might be different flavors of the framework that should be available for the clients using it to choose from.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=8)** This framework would be made up of a family of classes.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=12)** So to explain this with an example, imagine a user interface that can come in different color schemes.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=18)** The framework to render the interface is made up of a family of objects.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=22)** For example, there would be an interface called button and then concrete classes for each different color, and then the same for other parts of the interface, for example, scrollbars and toolbars and so on.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=32)** The user interface should be able to return the right objects to create the right color scheme.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=37)** If the client wants a blue application, it should return a blue button, a blue toolbar, a blue scrollbar, and so on.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=43)** There are a few constraints that need to be enforced to make this work.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=47)** The first is that the system should be independent of how objects are created, so the user interface shouldn't be coupled to things like how button objects are created.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=56)** The second is that it should be configured with one of multiple families of objects.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=60)** So, for example, the user interface should either use groups of blue objects or groups of red objects.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=65)** Thirdly, the family of related objects should all be used together, so they should either be all blue or all red.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=72)** If you have a group of objects with different variations that should be used together like this, the abstract factory pattern is a good way to go.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=79)** The class diagram for this pattern can look quite complex, mainly because there are so many classes involved.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=85)** So let's break it down step by step and see how it would work with this user interface example.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=90)** First of all, you'd have an interface that defines a factory for creating a user interface, or UI for short, with a specific color scheme.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=98)** Then you'd have concrete implementations for each color, so you'd have a blue UI factory, a red UI factory, and so on.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=105)** These would be responsible for creating all the different elements of the UI.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=108)** So, for example, the blue UI factory would create a blue button and a blue toolbar and so on.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=114)** And the red UI factory would return the red versions of those.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=117)** The next part of the pattern is to have a factory that the overall application can use to determine which of these color scheme factories to use. The application composite the color scheme at once and the factory will return the right one.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=130)** So if the application passes in red, it will use the red UI factory, and if it passes in blue, it will use the blue UI factory.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=137)** So this pattern is essentially a factory of factories.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=141)** As you can see, one drawback is that there are a lot of classes in this pattern implementation which can make it a bit hard to keep track of.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=147)** And each time I add a new color or a new UI element, there are lots of new classes to create.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=153)** However, the positive is, this means that the application itself doesn't need to know anything about all the different families and how the objects are created behind the scenes.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=161)** It only needs to know about the user interface factory and everything else is hidden, and in turn, the user interface factory only needs to know about its concrete implementations.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=171)** They handle the actual creation of the UI objects like buttons and so on.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=174)** So a lot of the complexity is abstracted away.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=177)** Another nice thing about this pattern is that each part of it is quite easy to unit test.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-abstract-factories?u=76281980&t=182)** Concrete classes are injected as dependencies, which means they can easily be mocked.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (12), from. (1), this, (1), abstract (1), let (1)
> **Analogies:** for example (4), imagine (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)

#### Recognize where to use abstract factories
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=0)** Let's start by looking at an application that doesn't use the abstract builder pattern, and then we can see how it can be improved.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=6)** So this is an application that's used to represent the creation of different types of bicycle by a bike manufacturer.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=12)** So the first class I'm going to look at is the Bike class.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=16)** So this is a class that has four different fields handlebars, pedals, frontTire, and backTire.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=21)** And these all set by passing the values into the constructor.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=25)** And then there are getter methods for each of these fields and a two-string method.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=29)** So as there are different kinds of bike that can be built, each of these fields is actually an interface.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=34)** So, for example, if I look at the Handlebars class first, this is an interface with a single method called getType.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=41)** And then there are two different implementations of this interface.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=44)** So one of them is the MountainBikeHandlebars, and this returns the word "FLAT."
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=50)** So mountain bikes have flat handlebars.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=52)** And then the other one is the RoadBikeHandlebars which returns the word "DROP."
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=56)** And then it's the same for the other fields in this Bike class.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=60)** So if I look at pedals, this is another interface, and again there are MountainBikePedals.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=66)** So this returns SPD which is the type of pedal used by mountain bikes.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=70)** And then there's also RoadBikePedals which returns SPD-SL, which is a type of pedal used by road bikes.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=77)** And then the other two fields are of type tire.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=80)** So Tire is another interface with a method called getWidth.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=86)** And then, again, there's two different implementations.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=88)** So there's the MountainBikeTire which returns 29 for the width.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=92)** And then there's the RoadBikeTire which returns 23 for the width.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=96)** So that's the general structure of the application.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=99)** So if you find that you have a structure similar to this, where you have an object with lots of fields that can be of different types, that might be a sign that your application might benefit from using the abstract builder pattern.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=110)** And the final class that I haven't looked at yet is the BikeManufacturer class.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=115)** So this is a class with the main method in it.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=118)** And this has a method called buildBike.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=121)** So this takes a string which is the bikeType.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=124)** And if the word "ROAD" is passed in, it creates a new bike and it passes in RoadBikeHandlebars, RoadBikePedals, and RoadBikeTire for the front tire and back tire.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=134)** And then if MOUNTAIN is passed in, then it returns a new bike, but with MountainBikeHandlebars, MountainBikePedals, and MountainBikeTires.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=142)** And if something else is passed in, then it throws a new IllegalArgumentException.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=147)** So this is a kind of factory method for creating Bike objects.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=151)** And then in the main method, I'm using the buildBike method, and first passing in the word "ROAD" and then the word "MOUNTAIN."
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=159)** So if I run this, I can see at the bottom there that it prints out the first bike, and this has all the features of a road bike.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=168)** And then the second one has all the features of a mountain bike.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=171)** So this works fine, but it's not a great design.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=174)** So if I have a look again at this buildBike method, this method is tightly coupled to all the different bike parts.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=182)** So if I added a new type of bike later, for example a hybrid bike, I'd have to remember to update this method.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=189)** Or if one of the constructors changes for any of the bike parts, I'd have to change it in all of the different places it's used in this method.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=196)** So, for example, if I now need to pass in an argument for the RoadBikeHandlebars constructor, I'd have to change it in the first if statement and in the second if statement and in all the other if statements if I add new bike types later.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=208)** Or if I add a new bike part, for example, I'd again have to update every if statements.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=213)** So there's some annoying type coupling here.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=215)** It would also be quite easy to make a mistake.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=217)** And, for example, I could pass in a mountain bike tire for a road bike, for example.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-abstract-factories?u=76281980&t=223)** So if you find yourself doing something like this to construct different families of objects depending on a type, it's worth considering using abstract factories to reduce the coupling.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), abstract (3), class. (3), this, (2), pass (2)
> **Code Identifiers:** buildbike (3), fronttire (1), backtire (1), gettype (1), getwidth (1)
> **Env Vars:** spd (2), road (2), mountain (2), flat (1), drop (1)
> **Analogies:** for example (6), similar to (1)
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** find (2), make (1)
> **Best Practices:** remember to (1)

#### Create factories for families of objects
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=0)** This is an example of an application that has families of objects.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=4)** So it's an application that creates bikes from different bike parts.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=7)** And there's a family of bike parts that go together.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=10)** But one way I can improve this application is by using factories to create bikes with all the right bike parts together.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=16)** The idea is to have a different factory for each different type of bike.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=20)** So the first thing I'm going to do to implement this pattern is I'm going to define an interface for creating bike factories.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=26)** So first of all, I'm going to create a new class, and I'm going to call it BikeFactory.Java.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=34)** And this is going to be an interface.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=37)** So I'm going to change class to interface.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=39)** And then in here, I'm going to define methods for creating each of the different bike parts.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=44)** So I'll start with the Handlebars.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=46)** So this method is going to return handlebars, and I'm going to call it "createHandlebars."
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=53)** Then I'm going to have another one for the pedals.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=55)** So this time I'm going to say Pedals CreatePedals.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=60)** And then finally, I need one for creating tires.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=62)** So I'm going to say Tire createTire.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=67)** So that's my factory interface defined.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=69)** And now I need to implement this for all the different types of bike.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=72)** So I'll start with the road bike.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=74)** So again, I'm going to create a new class, and I'm going to call this one "RoadBikeFactory."
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=82)** And this class is going to implement the BikeFactory class that I just created.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=90)** So now I need to override those three methods and make sure that I return the right bike part for a road bike.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=96)** So I'm going to start with the handlebars.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=98)** So I'm going to say public Handlebars createHandlebars.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=105)** And in this one, I'm going to say "return new RoadBikeHandlebars."
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=110)** And I'll add the override annotation above it as well, just to make it clear that it's overriding this from the interface.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=117)** Then I'm going to do the same for the other two.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=120)** So I'm going to say @Override, and this time, I'm going to say "public Pedals createPedals."
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=132)** And in here, I'm going to return new RoadBikePedals.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=139)** And I think that needs to be a lowercase b.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=142)** And then finally, I do the same for the tires.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=145)** So I'm going to say @Override, and then public Tire createTire.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=152)** And then in here, I'm going to say "return new RoadBikeTire."
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=158)** So I've implemented my factory for the road bikes, and now I just need to do the same again for the mountain bikes.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=163)** So to save some time, I'm just going to copy this class and paste it in the same package.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=170)** And then I'm just going to rename this.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=172)** So I'm going to right-click and go to rename.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=176)** And I'm going to call this one MountainBikeFactory.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=181)** And I need to rename the name of the class itself inside the file.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=186)** So now I just need to make sure that I'm returning the right types.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=189)** So instead of returning RoadBikeHandlebars, I'm going to return MountainBikeHandlebars.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=193)** And instead of RoadBikePedals, I'm going to return MountainBikePedals.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=198)** And instead of a RoadBikeTire, I'm going to return a MountainBikeTire.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=204)** So now I've encapsulated the knowledge about how the different bike parts are created in their own classes, specifically for that purpose.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=210)** So now I just need to update the BikeManufacturer class.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=213)** So I'm going to open up that class, and inside this buildBike method, I'm actually going to use those factories that I just created.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=221)** So if it's a road bike, I'm going to create a new road bike factory.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=224)** So I'm going to say "var roadBikeFactory equals new RoadBikeFactory."
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=232)** And then I'm going to create each of the different parts.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=234)** So first of all, I'm going to say var handlebars equals roadBikeFactory.createHandlebars and then var pedals equals roadBikeFactory.createPedals.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=254)** And then var frontTire equals roadBikeFactory.createTire.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=263)** And then I'm going to copy that line and paste it and change this one to backTire.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=270)** And then I can use all of these parts when I create my new bike.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=275)** So inside the constructor, I'm going to pass in my new handlebars variable and then the pedals and then the frontTire and finally, backTire.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=290)** And then I'm going to copy all of this and paste it inside the else if bikeType equals MOUNTAIN block.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=300)** But this time, I'm going to change the factory to a MountainBikeFactory.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=305)** So I'm going to rename the first variable.
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=307)** And this is going to be a new MountainBikeFactory.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=312)** Then everywhere where I've got RoadBikeFactory, I'm just going to replace that with MountainBikeFactory.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=318)** And I can actually copy the constructor from the if block above as well.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=327)** So let's just run the app to check I haven't broken anything.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=332)** And that's good.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=333)** I can see I get the same output as before, so it creates a road bike and then a mountain bike.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=339)** So this is a good step forward.
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=341)** This BikeManufacturer class no longer needs to know how different types of handlebars and pedals and so on are created.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=347)** However, I still have the issue that I need to copy and paste lots of boilerplate code for each of the different bike types.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=353)** So to get the full benefits of the abstract factory pattern, I need to create a factory to encapsulate how the bike parts are put together.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-factories-for-families-of-objects?u=76281980&t=360)** So there's still one more step to do, which I'll show you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), override (4), var (4), class, (3), finally, (3)
> **Code Identifiers:** roadbikefactory (4), createhandlebars (3), createtire (3), createpedals (2), fronttire (2)
> **CLI Commands:** make (3)
> **UI Navigation:** right-click (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** bikefactory.java (1)
> **Env Vars:** mountain (1)
> **Cross-References:** in the next (1)

#### Implement the complete Abstract Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=0)** Now, I have an application that uses factories for creating different types of bikes.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=4)** So, for example, if I want to create a road bike, I can use my RoadBikeFactory class, and if I want to create a mountain bike, I can use my MountainBikeFactory class.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=13)** However, in this BikeManufacturer class, I still have lots of boilerplate code for creating the right type of bike factory depending on the bike type.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=21)** So what I'm going to do is I'm going to create another factory to handle that logic.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=25)** So I'm going to create a new class, and I'm going to call this one FactoryMaker.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=33)** So in here, I'm going to implement a factory method to return the right type of bike factory.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=39)** So the first thing I'm going to do is I'm going to create a Map to store the bike types that I have.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=44)** So I'm going to say "private static final Map," and the key is going to be a string.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=52)** And the value is going to be a Supplier, which is going to return a type of BikeFactory.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=60)** And I'm going to call this Map "bikeTypes."
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=64)** And then I'm just going to say "equals new HashMap."
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=71)** And then I'm just going to make sure that I've imported the Map class and the Supplier class.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=83)** So then I need to populate the Map with my different types of bike.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=88)** So I'm going to create a static block.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=90)** So I'm going to say "static" and then a pair of curly braces.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=93)** And then in here, I'm going to say "bikeTypes.put."
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=98)** And I'm going to put for the key for the first one the word "ROAD."
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=104)** And then a supplier is basically a piece of code that's going to return an object for me.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=109)** So I'm going to say "RoadBikeFactory::new."
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=116)** Then I'm just going to do the same for mountain bikes.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=120)** So underneath that, I'm going to say "bikeTypes.put."
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=123)** And this time, I'm going to pass in the word "MOUNTAIN" for the key.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=128)** And then for the value, this supplier is going to be MountainBikeFactory::new.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=136)** And then finally, I need to create my factory method to create the right bike type.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=141)** So in here, I'm going to create a new method.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=143)** And it's going to be a public static method that returns a bike factory, and it's going to be called createFactory.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=151)** I'm just going to take a string argument, which is going to be the bike type.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=155)** So I'm going to call that bikeType.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=157)** Then in here, I'm going to check if that bikeType is inside my Map.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=161)** So first of all, I'm going to say "bikeTypes.get" and then pass in the bikeType.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=170)** And then I'm going to check that that's not equal to null.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=174)** So if it is in the Map, then I'm going to return the value for that type.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=179)** So I'm going to say "return bikeTypes.get" and pass in the bikeType again.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=186)** And then I need to call .get to get the value from the Supplier.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=190)** And then if it's not in there, then I'm just going to throw an illegal argument exception.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=194)** So I'm going to say else and then throw new IllegalArgumentException.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=199)** And as a message inside the exception, I'm going to say "Bike type not supported."
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=207)** So what this method is doing is it's saying if this bike type is inside the Map that I populated here, then get the value from that key and the value will actually create a new object of that type for me.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=218)** So there is quite a bit going on here.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=220)** And if you want to learn in more detail about how this works, I go through this step-by-step in the Factory Method chapter in more detail.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=227)** So now in the BikeManufacturer class, I can really simplify this big method.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=234)** So I'm going to create the right type of factory based on the type that's passed in using my new FactoryMaker.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=241)** So at the top, I'm going to add a new line and say "var bikeFactory equals FactoryMaker.createFactory" and pass in the bikeType.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=256)** And this is a static method, so I don't need to create a new FactoryMaker.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=260)** I can just call the createFactory method directly.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=263)** And then for each bike parts, I can use that bikeFactory.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=267)** So actually, I can copy everything from the first if statement where I'm creating all the different bike parts, and I'm going to paste that up here and just format that so it's a bit easier to read.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=278)** And then instead of using the roadBikeFactory, I'm going to use this bikeFactory variable.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=283)** So I'm going to replace everywhere where it says roadBikeFactory with bikeFactory.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=288)** And then I can also copy this line where I creates the new bike.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=291)** So where it says "return new Bike," I'm going to copy that and put that at the top here.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=296)** And then I can actually get rid of this whole if-else block.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=303)** So now I'm creating the right type of factory using my createFactory method, and then each of the bike parts is going to be returned as the correct type of bike parts.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=313)** So let's just run this to make sure it still works.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=317)** And I can see that for the first one, it uses all the right values for a road bike, and the second one, all the right values for a mountain bike.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=326)** So this method is now much shorter and a bit more readable, but more importantly is actually much more flexible.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=333)** So if I add a new bike type with all the different bike parts, I don't need to change the BikeManufacturer class at all.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=339)** I don't need to change anything in this method, it's just really nicely decoupled.
>
> **[5:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=342)** Instead, I would have to create a new factory for the new bike type and add that type to the Map in the FactoryMaker class.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=349)** So in here, I would just add a new value to the Map inside this static block.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-complete-abstract-factory-pattern?u=76281980&t=353)** So the client, which in this case is the bike manufacturer, doesn't need to know anything about how the different types of bike are created.

> [!info]- Semantic Content
>
> **Code Keywords:** static (6), class, (4), type. (4), pass (4), class. (3)
> **Code Identifiers:** biketypes (5), biketype (5), createfactory (4), bikefactory (4), roadbikefactory (2)
> **CLI Commands:** make (2)
> **Env Vars:** road (1), mountain (1)
> **Exercise Files:** boilerplate (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)

#### Challenge: The Abstract Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=5)** In this exercise, you can have a go at implementing the abstract factory pattern for an existing application.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=11)** There are quite a few steps to do to implement this, so if you want to have a look back at the previous video again, or skip forward to the next video to see my solution, that's completely fine.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=21)** So in this example, there's an app with a user interface.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=25)** So I'm going to open up that UserInterface class.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=28)** And to avoid this getting too much, I've only included a few classes to represent this interface.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=34)** So if I look in here, there are only two elements; a button and a scrollbar.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=39)** And for each of these, they're available in two different colors, red and blue.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=43)** So you can see there's a class called BlueButton.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=46)** And there's also one called RedButton, a BlueScrollBar, and a RedScrollBar.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=51)** Then there's a class called App, which has a main method in it, and this has another method called createUserInterface.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=60)** So this creates the user interface depending on the color that's passed in.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=64)** So in this exercise, you should have a go at implementing the abstract factory pattern for this application.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=70)** So first of all, there should be a factory for creating each element.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=73)** So one factory for creating blue user interfaces and another factory for creating red user interfaces.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=80)** Then there should be a FactoryMaker class that returns the right factory depending on the color passed in.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=85)** So give it a go and see how many of the steps you can remember for implementing this pattern.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=90)** This is quite a tricky one, so don't worry if you do get stuck.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-abstract-factory-pattern?u=76281980&t=94)** But good luck, and I hope you have fun!

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), abstract (2), this, (1), class. (1)
> **Cross-References:** previous video (1), next video (1)
> **Code Identifiers:** createuserinterface (1)

#### Solution: The Abstract Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=5)** I'm going to talk through my solution to the abstract factory pattern exercise.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=10)** So the first thing I did was I created an interface for creating user interface factories.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=16)** So that's a class called UserInterfaceFactory.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=19)** And in here, I created two methods; createButton and createScrollbar.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=23)** And then I implemented this interface for each color.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=27)** So first of all, I created a BlueUserInterfaceFactory.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=30)** And in this one, I returned a blue button in the createButton method and a blue scroll bar in the createScrollbar method.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=37)** Then I did the same for red.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=39)** So I have a RedUserInterfaceFactory, and in this one, I'm returning a red button and a red scroll bar.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=46)** Then I needed a factory to create the right factory.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=50)** So I created a new class called FactoryMaker.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=53)** And in this class, I created a new Map.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=56)** And the key is a string, and the value is a supplier that returns a UserInterfaceFactory.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=61)** And I call this UserInterfaceFactories and this is a HashMap.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=66)** Then I had a static block to populate the Map.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=69)** So first, I put the key "BLUE" and the value BlueUserInterfaceFactory::new.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=75)** And then I put the key "RED" and the value RedUserInterfaceFactory::new.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=81)** Then I have my static method called createFactory which passes in a color which is a string, and then it checks if that color is inside my Map.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=90)** So it says "userInterfaceFactories.get" and passes in the color and checks that it's not null.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=96)** So if that color is in the Map, it returns the value.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=100)** So, for example, if I pass in blue then it creates a new BlueUserInterfaceFactory.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=104)** And if I pass in red, it returns a new RedUserInterfaceFactory.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=109)** And if the color is not in the Map, it throws a new IllegalArgumentException that just says "Color not supported."
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=115)** So then all I needed to do was update the App class.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=118)** So if I look in the App class, I've now updated this createUserInterface method, so I'm still passing in the color.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=126)** But then I've got a new variable called userInterfaceFactory and I'm using my static createFactory method in the FactoryMaker class to create the right user interface factory.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=137)** Then I'm using that to create the right type of button and the right type of scroll bar, and I'm using those to create a new user interface.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=145)** So that's one way of implementing the abstract factory pattern.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=149)** This is the most complex exercise so far.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-abstract-factory-pattern?u=76281980&t=151)** So very well done if you did complete it.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), static (3), abstract (2), class, (2), new. (2)
> **Code Identifiers:** createbutton (2), createscrollbar (2), createfactory (2), userinterfacefactories (1), createuserinterface (1)
> **Definitions:** is a  (4)
> **Env Vars:** blue (1), red (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)


### 9. 8. Structural Design Patterns

#### What are structural design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=0)** Structural design patterns are all to do with how classes and objects are put together to form larger structures.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=5)** As these structures get bigger over time, they can often get more complex.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=9)** So these patterns are ways of tackling that complexity and simplifying these structures.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=13)** There are two different categories of structural design pattern.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=16)** There are ones that focus on classes and ones that focus on objects.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=20)** You can think of the difference between class patterns and object patterns as the difference between "is a" relationships and "has a" relationships.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=28)** For example, a car is a vehicle and a car has an engine.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=32)** Class patterns are concerned with the "is a" relationships.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=35)** They're all to do with how classes are structured and interacts, and there's a particular focus on how inheritance is used to create structures.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=43)** Several of these patterns make use of interfaces to define shared functionality.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=48)** Structural object patterns, on the other hand, are concerned with the "has a" relationships.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-structural-design-patterns?u=76281980&t=52)** They're all about how to use objects, and structural patterns can allow you to change the behavior of individual objects at runtime.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 10. 9. The Adapter Pattern

#### Understand the Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=0)** The adapter pattern allows classes to work together when they normally wouldn't be able to. Imagine a plug adapter.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=7)** If you have a US plug and you travel to Europe, you can't put your plug straight in the socket.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=11)** You need an adapter, and this allows the US plug and the European plug socket to work together.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=17)** This is the concept that the adapter pattern is all about.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=20)** You have two classes that can't normally work together because they have incompatible interfaces, and then you put an adapter in between them so that they can work together.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=30)** This is a pattern that's most often used when working with existing code, rather than writing new code.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=36)** If you are writing something new, you just make sure that the classes you wanted to communicate would be able to.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=41)** But if you're working with existing code and you can't or don't want to change it, the adaptive pattern can be a nice solution.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=48)** One example is where you have a legacy code base and you need to add some new features to it.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=53)** You might not want to change the existing code base because you don't want to risk breaking something, especially if there are no tests, or you might not even have access to it if it's in a third-party library.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=63)** There are two different types of adaptive pattern; the class version and the object version.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=68)** The object version is more common in Java because the class version relies on multiple inheritance.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=73)** This isn't technically possible in Java, because you can't have classes that extend more than one other class, but a version of this can be achieved by using interfaces.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=82)** The object's version of the pattern uses composition.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=85)** This means that the adapter has an instance of the adaptee as a field for that class.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=90)** So that's an example of a "has a" relationship.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=93)** The class version uses inheritance, so in this case the adapter is a subclass of the adaptee.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=98)** So that's an "is a" relationship.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=100)** These two patterns can both be useful depending on the specific use case.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=104)** So in this chapter, I'll show you both ways of doing it.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-adapter-pattern?u=76281980&t=107)** And I'll talk about the drawbacks and the benefits of each one.

> [!info]- Semantic Content
>
> **Code Keywords:** new, (1), class, (1), class. (1), case. (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)

#### Implement the object Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=0)** Here, I have an app for submitting online job applications.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=3)** When an application is submitted, it has to have a document attached.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=7)** The problem is that some of the classes are incompatible and don't work together.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=12)** So first of all, I have a class called OnlineApplication.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=15)** And this class has a field called DocumentUploader.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=18)** And then in the constructor, a documentUploader object is passed in and the field is set to that object.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=24)** Then there's a method called uploadDocument.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=26)** And inside here, I'm saying "documentUploader.upload."
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=30)** So let's have a look at this DocumentUploader.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=33)** This is actually just an interface, and this defines this upload method.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=37)** And there's one class that implements this and that's the PdfDocumentUploader class.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=42)** So this overrides the upload method.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=44)** And inside here, it prints out two messages. One saying "Preparing PDF document," and then another saying "Uploading PDF document."
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=52)** And then there's an App class.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=53)** So this has a main method in it.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=55)** And inside here, I'm creating a new PdfDocumentUploader.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=59)** Then I'm creating a new OnlineApplication and passing in the PdfDocumentUploader.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=64)** And then I'm saying "onlineApplication.uploadDocument."
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=68)** So if I run the app, I can see in the console that it says "Preparing PDF document" and then "Uploading PDF document."
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=78)** So there's one more class that I haven't talked about yet, and that's the WordDocumentUploader class.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=84)** So this class does something very similar to the PDF version, but it uploads word documents instead of PDFs.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=90)** And the problem is that I can't use it with the OnlineApplication class because it doesn't implement document uploader, and that class expects a document uploader in its constructor.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=99)** And I've decided I'm not going to touch any of the code in this WordDocumentUploader class.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=104)** I'm just going to leave it as it is.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=105)** So I'm going to solve this by creating an adapter.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=109)** So I'm going to create a new Java class, and I'm going to call it "WordDocumentAdapter."
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=118)** And this new class is going to implement the DocumentUploader interface.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=125)** So first of all, this class is going to have a field of type "WordDocumentUploader."
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=129)** So I'm going to say "private final WordDocumentUploader wordDocumentUploader."
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=136)** And then I'm going to have a constructor.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=138)** So I'm going to say "public class WordDocumentAdapter."
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=143)** And then inside here, I'm going to initialize the uploader.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=146)** So I'm going to say "wordDocumentUploader equals new WordDocumentUploader."
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=154)** And I just need to get rid of class from the constructor.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=158)** And then finally, to make this class compile, I need to override the upload method.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=163)** So at the bottom, I'm going to add @Override.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=166)** And then I'm going to say "public void upload."
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=171)** And then inside this method, I'm going to say "wordDocumentUploader.uploadWordDocument."
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=177)** So this means that I can use this as a document uploader and call the upload method.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=182)** And then that in turn will call the uploadWordDocument method, which is not compatible with the OnlineApplication class.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=189)** So now let's give it a go and see if it works.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=191)** So I'm going to go back to the App class.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=193)** And inside this main method, I'm first of all going to say "var wordDocumentUploader equals new WordDocumentAdapter.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=206)** And then I'm going to say "var onlineApplication2 equals new OnlineApplication."
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=214)** And into the constructor, I'm going to pass in my wordDocumentUploader.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=219)** And then I'm going to say "onlineApplication2.uploadDocument."
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=225)** So if I run this now, it should print out that it's preparing and uploading a PDF.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=229)** And then also that is preparing and uploading a Word document.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=233)** So I'm going to run this.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=236)** And I can see that it says "Preparing PDF document," "Uploading PDF document," and then "Preparing Word document" and "Uploading Word document."
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-object-adapter-pattern?u=76281980&t=245)** So that's how you can use the adapter pattern to allow classes to work together when they otherwise wouldn't be able to.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (6), let (2), interface (2), public (2), override (2)
> **Code Identifiers:** worddocumentuploader (5), uploaddocument (3), documentuploader (2), uploadworddocument (2), onlineapplication2 (2)
> **Env Vars:** pdf (8)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** similar to (1)

#### Implement the class Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=0)** My app for uploading online job applications now uses the adapter pattern so that it can upload Word documents as well as PDF documents.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=8)** But there's one small drawback.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=9)** So if I run the app, I can see in the output that there's a very small difference between the messages it prints out.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=16)** So it says "Preparing PDF document" and then three dots.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=19)** But when it says "Preparing Word document," there's no three dots at the end.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=24)** And I can't actually do anything about this because in the adapter, it just calls the method on the wordDocumentUploader objects.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=31)** So if I want to be able to override the behavior of the adaptive class, it might be better to use the class AdapterPattern.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=38)** So let's have a look at the Adapter class.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=40)** So this is WordDocumentAdapter.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=42)** And at the moment, it just calls wordDocumentUploader.uploadWordDocument, and there's nothing I can do to change the behavior inside this method, because the point of this pattern is that I'm not touching the code inside wordDocumentUploader.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=56)** So the first thing I'm going to do to be able to override this method is I'm going to make this WordDocumentAdapter class extend the WordDocumentUploader class.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=67)** So I've added extends WordDocumentUploader.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=70)** And I'm still keeping implements DocumentUploader because I still need this upload method to be overridden.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=76)** And the next thing I'm going to do is I'm going to remove this constructor and the private final field.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=82)** And now I can actually just call uploadWordDocument directly.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=86)** And that's because it now extends WordDocumentUploader where this method is defined.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=92)** So this is a bit nicer already because there's less code and there's one less objects that I need to create.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=97)** And the other nice thing is that if I want to change the uploadWordDocument method, I can actually override it now in this class.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=104)** So I'm going to go to the bottom of the class and I'm going to add another @Override.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=108)** And then I'm going to say "public void uploadWordDocument," and now I can put whatever I want inside that method.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=116)** So I'm going to say "System.out.println," and then inside here, I'm going to say "Preparing Word document."
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=123)** And then I can put the three dots at the end.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=126)** And then I also still want the message that says "Uploading Word document."
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=131)** So I'm going to have another System.out.println and pass in that second message as well.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=136)** So now if I go back to the App class and I run this again, in the console output this time, I can see it says "Preparing PDF document" and three dots and then to match, it says "Preparing Word document" and the same three dots.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=150)** So that's the class version of the adapter pattern.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=153)** One drawback compared to the object version is that with the object version, a single adapter can work with multiple adaptees.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=160)** So, for example, with this WordDocumentAdapter, I can only use it now with WordDocumentUploaders.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=165)** So, for example, if I had other file types, I wouldn't be able to use this adapter with them.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=169)** I'd need different adapters for each one.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-class-adapter-pattern?u=76281980&t=171)** So those are the differences between the two implementations, and which one you use depends on which of the drawbacks matters less to you for your use case.

> [!info]- Semantic Content
>
> **Code Keywords:** override (4), class. (3), extends (2), class, (1), let (1)
> **Code Identifiers:** uploadworddocument (4), worddocumentuploader (3)
> **Env Vars:** pdf (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Challenge: The Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=5)** In this exercise, you'll get to try out implementing the adapter pattern in an app that prints out greetings in different languages.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=12)** So the first class to look at here is the Greeting class.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=15)** So this has a field called localizedMessage, and it passes in a localizedMessage object in the constructor.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=22)** And then it has a print method where it says "localizedMessage.sayHello."
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=26)** So if we look at this LocalizedMessage class, this is actually an interface with a single method called sayHello.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=33)** And there's one class that implements this interface, and that's the EnglishLocalizedMessage class.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=38)** So this overrides sayHello and it has System.out.println and then it just prints out the word "Hello."
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=44)** Then there's a class called App.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=46)** So in here, I'm creating a new EnglishLocalizedMessage, then a new Greeting, and passing in englishLocalizedMessage.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=52)** And then I'm saying "englishGreeting.print."
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=55)** So if I run this, I can see it prints out "Hello."
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=59)** There's also a class called FrenchLocalizedMessage.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=63)** This class has a method called sayBonjour and it has System.out.println and it prints out the word "Bonjour."
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=70)** So I can't use a frenchLocalizedMessage inside my Greeting class because it's expecting a localizedMessage, and frenchLocalizedMessage doesn't implement that interface.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=81)** So for this challenge, you should implement the adapter pattern so that French messages can also be printed out.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=86)** And then when you've done that, in the App class what you can do is you can add a new Greeting, a bit like this English one above here, but pass in a frenchLocalizedMessage instead of an englishLocalizedMessage.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=97)** So one thing to point out is that you shouldn't change any of the code inside this FrenchLocalizedMessage class.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=102)** This should stay exactly the same.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=104)** So you should implement the adapter pattern to solve this challenge.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=108)** In my solution, I'll be using the object's version of the pattern.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=111)** You can do this too.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=112)** Or if you want to try the class version, you can have a go at that as well.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-adapter-pattern?u=76281980&t=116)** You can even try doing both versions if you want a bit more of a challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** localizedmessage (4), sayhello (3), frenchlocalizedmessage (3), englishlocalizedmessage (2), englishgreeting (1)
> **Code Keywords:** class. (3), interface (3), class, (1), implements (1), this, (1)

#### Solution: The Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=5)** I'm going to walk through my solution to this adapter pattern challenge.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=9)** So the first thing I'm going to do is create my adapter.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=12)** So I'm going to create a new class, and I'm going to call it "FrenchMessageAdapter."
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=20)** And this class is going to implement the LocalizedMessage interface.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=23)** So at the end I'm going to add implements LocalizedMessage.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=28)** And this class is going to have a field of type frenchLocalizedMessage.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=32)** So I'm going to say "private final FrenchLocalizedMessage frenchLocalizedMessage."
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=39)** And I'm going to set that inside a constructor.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=42)** So then I'm going to say "public FrenchMessageAdapter" and inside the constructor, I'm going to say "frenchLocalizedMessage equals new FrenchLocalizedMessage."
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=53)** Now, I need to override the sayHello method.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=56)** So at the bottom, I'm going to add an @Override, and then I'm going to say "public void sayHello."
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=65)** And inside this method, I'm going to say "frenchLocalizedMessage.sayBonjour."
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=73)** So now let's see if it works.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=74)** So I'm going to go back to the App class.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=77)** And inside this main method, I'm going to create a new French localized message using my adapter.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=82)** So I'm going to say "var frenchLocalizedMessage equals new FrenchMessageAdapter."
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=91)** Then I'm going to say "var frenchGreeting equals new Greeting."
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=98)** And I'm going to pass in my frenchLocalizedMessage.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=101)** Then I can say "frenchGreeting.print," and let's run this.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=110)** And now I can see in the output that it says "Hello" and then Bonjour.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=115)** So that's my solution to the adapter pattern.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=118)** If you managed to do it this way then congratulations.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-adapter-pattern?u=76281980&t=120)** And also, if you managed to do it using the class version, congratulations as well. And particularly, well done if you managed to try out both different versions.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), override (2), let (2), var (2), class, (1)
> **Code Identifiers:** frenchlocalizedmessage (6), sayhello (2), frenchgreeting (2), saybonjour (1)
> **Cross-References:** go back to (1)


### 11. 10. The Bridge Pattern

#### Understand the Bridge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=0)** The bridge pattern is all about using inheritance while maintaining flexibility.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=4)** When we inherit from other classes, those classes become quite closely coupled together.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=9)** But what if we want the child classes to have more flexibility about how they're maintained?
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=14)** Let's say there's a hierarchy of shapes.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=16)** So at the top is the shape interface.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=18)** And below that, there are the classes that extend shape like circle and square and so on.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=23)** But then say the different types of shape can also be different colors.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=26)** So there's a separate hierarchy with an interface called color and different implementations called red, blue, etc.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=32)** So how do we handle this?
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=34)** One option would be to add new classes for all the different shapes and all the different color combinations, but this would quickly lead to the need for lots of new classes.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=42)** The solution is to use the bridge pattern. In this pattern, the shape interface has a color field, and this can be set for all the different objects.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=50)** So that means we don't have to make all those extra classes.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=53)** Instead, when a new concrete shape is created, the color is set as a field.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=58)** So the main idea for the bridge pattern is to use composition over inheritance.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=63)** In this case, a shape has a color rather than a shape is a color.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-bridge-pattern?u=76281980&t=67)** So you'd use this pattern when you have a class hierarchy, but you want to keep it flexible and allow the different concrete implementations to be configured in different ways.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (1), case, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### Implement the Bridge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=0)** In this example, I have an app for a store that creates custom clothing.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=4)** So there's an interface called ClothingItem and this has a single method called getType.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=10)** And then there are two classes that implements this interface which are Hoodie and Shirt.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=14)** So if I look in the Hoodie class, this overrides the getType method and prints out the word "Hoodie."
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=19)** And in the Shirt class, it overrides the getType method and prints out the word "Shirt."
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=24)** Then I have a class called App which has a main method in it, and inside there, I'm creating a new Hoodie object and saying "hoodie.getType" and then a new Shirt object and saying "shirt.getType."
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=35)** So if I run this, it prints out the word "Hoodie" and then the word "Shirt."
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=41)** However, I also want the ClothingItem to be available in multiple sizes.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=45)** So I also have an interface called Size.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=48)** And this has a single method called get.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=51)** And then there are two implementations of the Size interface, which are AdultSize and ChildSize.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=57)** So in the AdultSize class in the get method, it prints out the word "Adult."
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=61)** And in the ChildSize class in the get method, it prints out the word "Child."
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=66)** So I want to be able to have adult size hoodies, child size hoodies, adult size shirts, and child size shirts.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=73)** But what's the best way to do this?
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=76)** I could refactor this so I have four different concrete implementations of ClothingItem, but that would mean that every time I create a new ClothingItem, I would have to create two new classes for it, one for each size. And if I add more sizes later on, I'd have to create a new class for each different clothing type.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=92)** So instead, I'm going to use the bridge pattern.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=95)** So I'm going to go to the ClothingItem interface.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=98)** And in here, I'm going to create a new method called getSize.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=102)** And it's going to return a size type.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=104)** So I'm going to say "Size" and then getSize.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=108)** So now I need to update the concrete classes.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=111)** So I'm going to start with the Hoodie class.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=112)** So let's go to that one.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=114)** And the first thing I'm going to do is I'm going to create a field for the size.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=118)** So inside here, I'm going to say "private final Size size," and the size is going to be set by passing a size into the constructor.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=127)** So this class doesn't have a constructor yet, so I'm going to create one.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=131)** And I'm going to say "public Hoodie" and then pass in a Size object.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=137)** And then inside this constructor, I can say "this.size equals size."
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=143)** And now I need to override the getSize method.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=145)** So at the bottom of the class, I'm going to add an @Override, and then I'm going to say "public Size getSize."
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=154)** And then in here, I'm just going to return the size field.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=157)** So I'm going to say "return size."
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=160)** And now I just need to do the same for the Shirt class.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=163)** So I'm going to go to shirts, and again I'm going to add a field called size.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=168)** So I'm going to say "private final Size size," and then again I need a constructor.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=173)** So I'm going to say "public Shirt" and then pass in a size.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=179)** And inside the constructor, I'm going to say "this.size equals size."
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=184)** And then again, I need to override the getSize method.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=188)** And in fact, I think I can copy that from the Hoodie class.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=191)** So I'm going to go back to Hoodie, copy everything in the getSize method, go back to Shirt again, and paste that in here.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=199)** So finally, I'm going to go back to the App class, and now I need to pass a size into the constructor for the clothing items.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=206)** So let's say I want a child size hoodie.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=209)** So inside the Hoodie constructor, I'm going to say "new ChildSize."
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=213)** And let's make the shirt an adult size.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=215)** So inside the constructor for this one, I'm going to say "new AdultSize."
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=219)** And just to check that it's worked, I'll print out the size of each.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=222)** So under hoodie.getType, I'm going to say "hoodie.getSize.get."
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=229)** And then at the bottom of the method, I'm going to say "shirt.getSize.get."
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=236)** And now if I run this again, I can see that it says "Hoodie" and "Child" and then "Shirt" and "Adult."
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=245)** So this is how the bridge pattern can be used to avoid ending up with a complex hierarchy.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-bridge-pattern?u=76281980&t=250)** Instead, I've used composition to pass in the configuration to the different classes.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), class, (4), pass (4), class. (3), let (3)
> **Code Identifiers:** getsize (8), gettype (6)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (1)

#### Challenge: The Bridge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=5)** Now, you can have a go at implementing the bridge pattern.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=8)** So in this example, there's an interface called Shape which has a single method called getType.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=13)** And then there are two implementations of this which are circle and square.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=17)** So in the Circle class, it prints out the word "circle."
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=20)** And in the Square class, it prints out the word "Square."
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=23)** Then there's the App class which has the main method in it.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=25)** So in here, there's a new Circle object, and then it prints out circle.getType.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=30)** Then there's a new Square object and then it calls square.getType.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=33)** So if I run this, I can see that it prints out circle and then square.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=37)** However, each different type of shape should be able to come in two different types of color.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=42)** So there's also an interface called Color which has a method called get.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=46)** And then there are two color implementations which are blue which prints out the word "Blue," and red which prints out the word "Red."
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=54)** So for this exercise, you should use the bridge pattern to make different shapes have different color configurations.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=61)** And to test it out, so you can go to the App class, and you should make sure that you have a red circle and a blue square.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-bridge-pattern?u=76281980&t=68)** So I hope you enjoy having a go at this and I'll go through the solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (3), interface (2), this, (1)
> **Code Identifiers:** gettype (3)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Solution: The Bridge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=5)** Now, I'm going to show you how I'd go about implementing the bridge pattern for this exercise.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=10)** So the first thing I'm going to do is I'm going to go to the Shape interface.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=14)** And in here, I'm going to create a method to return a color for the shape.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=18)** So I'm going to say "Color," and I'm going to call the method "getColor."
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=23)** And now I need to update the concrete implementations.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=26)** So let's start with circle.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=29)** So first of all, in this Circle class, I'm going to create a field for the color.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=32)** So I'm going to say "private final Color color."
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=38)** And then I'm going to set that inside a constructor.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=41)** So underneath that I'm going to say "public Circle" and then pass in a color.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=50)** And then inside the constructor, I'm going to say "this.color equals color."
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=57)** And then I need to override the getColor method.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=59)** So at the bottom of the class, I'm going to add @Override.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=63)** And then I'm going to say "public Color getColor."
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=68)** And inside here, I'm going to say "return color."
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=72)** And now I need to do the same for the Square class, so I'm going to open that one.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=76)** And again inside here, I'm going to create a new private final field called color.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=83)** And again, I'm going to have a constructor where that's set.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=85)** So I'm going to say "public Square" and pass in a color.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=90)** Then again, inside the constructor, I'm going to say "this.color equals color."
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=97)** And now I need the getColor method, so I can copy that from the circle one.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=101)** So I'm going to go back to Circle, copy the getColor method, and then back in the Square class, I'm just going to paste that.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=108)** So now I need to update the App class.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=111)** So I'm going to go back to App, and I'm going to make this a circle.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=115)** So inside the constructor for new Circle, I'm going to say "new Red."
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=120)** And then inside the constructor for square, I'm going to say "new Blue."
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=125)** And then just to check it's worked, I'm going to print out the color for each shape.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=128)** So under circle.getType, I'm going to add circle.getColor.get.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=135)** And then under square.getType, I'm going to say "square.getColor.get."
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=142)** So if I run this, I can see that now it says "Circle" and "Red" and "Square" and "Blue."
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-bridge-pattern?u=76281980&t=150)** So that's how I'd go about implementing the bridge pattern for this application.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (4), public (3), private (2), pass (2), this. (2)
> **Code Identifiers:** getcolor (7), gettype (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)


### 12. 11. The Composite Pattern

#### Understand the Composite pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=0)** The composite pattern allows you to trace objects and groups of objects in the same way.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=4)** Let's see how this looks with an example.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=7)** Say you have a checklist app that contains a checklist made up of to-do items.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=11)** So there'd be a class called Checklist, and that class would contain a collection of ToDoItem objects.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=16)** And let's say I want to have a method that will tell me if a to-do item has been completed or not.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=21)** And I also want to have the same method in the Checklist class.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=25)** The checklist is complete if all of the to-do items in the checklist are also complete.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=30)** The way I do this is with the composite pattern, so you'd have either an interface or an abstract class that both the composite and the parts of the composite both inherit from.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=39)** So in the interface, I could have a method called isComplete.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=43)** The ToDo class can implement this.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=44)** And then in the Checklist class, it can also implement this same method.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=48)** And for each to-do item in the list, it can call this isComplete method for each of those items.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=54)** So the composite pattern lets you treat objects and composites of objects in the same way.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=59)** And it also means that the clients using the composites can ignore differences between the composite and its parts.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern-23224165?u=76281980&t=64)** For example, a client could use the isComplete method for the checklist and also for the individual to-do items in the same way, because they inherit from the same interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2), class. (1), abstract (1), from. (1)
> **Code Identifiers:** iscomplete (3)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### Implement the Composite pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=0)** The app I have here is an implementation of a checklist, and I'm going to be using the composite pattern to make it easy to handle groups of to-do items in the checklist.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=9)** So the first class I have here is the TodoItem class.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=12)** This has a string field called description which is set in the constructor.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=16)** And then there's also a field called completed, which is set to false when a new to-do item is created.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=22)** And then there's a method called complete which sets the completed field to true.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=26)** Next, there's a class called Checklist.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=29)** So this Checklist has an array list of items called todoItems.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=33)** So it's initialized with an empty array list.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=36)** And then there's a method called addTodoItem which adds a to-do item to the list.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=40)** Finally, there's a class called App.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=43)** So this class has a main method inside it where I'm creating a new checklist, and then I'm adding three to-do items to the list.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=50)** And then I'm calling the complete method on the first to-do item.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=54)** So the checklist has one completed item and two uncompleted items.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=58)** A checklist in this case is a composite because it contains a collection of other similar items.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=63)** And now I want to be able to see if an item is complete.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=66)** But I also want to see if a checklist is complete.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=69)** So I want the same functionality to check if to-do items are complete, and if a checklist is complete, which is essentially a list of to-do items.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=77)** So I'm going to create an interface that both classes are going to extend.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=82)** So I'm going to create a new class and I'm going to call it "Completable."
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=88)** And this new class is going to be an interface.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=92)** I'm going to give it a single method, which is going to be a void method called isCompleted.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=99)** So first, I'm going to make this TodoItem class implement this interface.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=103)** So I'm going to go to the TodoItem, and at the top, I'm going to add implements Completable.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=110)** So I need to override the isCompleted method.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=112)** So at the bottom of the class, I'm going to add a new method.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=115)** And I'm going to say "@Override" and I'm going to say "public void isCompleted."
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=124)** In this method, I'm just going to print out a message saying what the to-do item is and if it's completed or not.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=130)** So I'm going to say "System.out.println," and in here, I'm going to say "Todo item."
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=137)** And then I want to print out the description inside quote marks.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=141)** So to escape the quote mark, I'm going to have a backslash and then a quote and then I'm going to say "+ description."
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=149)** And then again, I'm going to have an escaped quote mark and I'm going to say "is completed."
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=158)** And then I want to print out the completed field.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=160)** So I'm just going to say "+ completed."
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=163)** Then I'm going to do the same for the Checklist class.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=166)** So I'm going to go to Checklist, and again, I'm going to say "implements completable."
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=172)** And at the bottom, I'm going to add the isCompleted method.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=175)** So I'm going to say "@Override" and then public void isCompleted.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=181)** And in this isCompleted method, I'm going to loop through each of the to-do items in the list and call the isCompleted method on each one.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=188)** So I'm going to say "todoItems.forEach," and then I'm actually going to use a method reference.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=197)** So I'm going to say "TodoItem" and then two colons and then I'm going to say "isCompleted."
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=205)** So that's going to loop through the array list and call the isCompleted method for each to-do item.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=210)** So now if I go back to the App class, I'm going to test this out.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=215)** So in the main method at the bottom, I'm going to say "checklist.isCompleted."
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=223)** So this isCompleted method is going to call the isCompleted method on all of the items in the checklist.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=229)** So if I run this, I can see it prints out all of the to-do items, and the first one is completed and the last two are incomplete.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator?u=76281980&t=238)** So that's how the composite pattern lets you treat groups or composites of objects in a uniform way.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), override (3), class. (2), implements (2), class, (2)
> **Code Identifiers:** iscompleted (12), todoitems (2), addtodoitem (1), foreach (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** go back to (1)

#### Challenge: the Composite pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=5)** In this challenge, you'll need to implement the composite pattern for an app for playing the notes of a song.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=10)** The songs are composites made up of musical note objects.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=13)** So to explain how this app works, first there's a class called Notes, which takes a char as an argument in the constructor, and this is the value of the notes.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=22)** Then there's also a method called play, which prints out the value of that note.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=26)** And then there's a class called Song, which contains a list of notes. And there's a method called addNote, which adds a note to the list.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=33)** And then there's a method called getNotes, which returns the list of notes.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=38)** Finally, there's the App class, and this has a main method in it.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=43)** So at the top of this method, all the possible notes are added from A to G.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=47)** And then there's a new song variable, which is a song called doReMe.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=52)** Then all the notes for the song are added using the addNote method.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=56)** Then to play the song, at the moment, we have to get each note individually and call the play method for each one.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=62)** So for this challenge, you should finish implementing the composite pattern so that the song also has a play method.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=68)** And then in this main method, you can replace all of these calls to play with a single call to song.play.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=74)** So you should have an interface that both notes and song implements which defines the play method.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=79)** And when you run the app, you should still get the same output.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=82)** So if I run the app now, I can see in the console I get, CDECECE.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=89)** So that's the first note of the song.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=91)** And when you've finished implementing the composite pattern, you should still get the same output in your terminal.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=96)** So as usual, I'll be going through the solution to this in the next video.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern?u=76281980&t=99)** So good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), class, (1), interface (1), implements (1)
> **Code Identifiers:** addnote (2), getnotes (1), doreme (1)
> **Env Vars:** cdecece (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### Solution: the Composite pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=5)** This is my solution to the composite pattern challenge.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=8)** So the first thing I'm going to do is I'm going to create an interface to define the play method.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=13)** So I'm going to create a new Java class and I'm going to call it "MmusicalItem."
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=18)** So you might have called this something different, which is totally fine.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=21)** You can call it whatever you like.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=23)** And I'm going to make this class an interface.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=27)** And this class is going to have a single void method called play.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=31)** And first, I'm going to make my Note class implements this interface.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=34)** So I'm going to go to Note, and at the top, I'm going to add implements MusicaItem.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=40)** And this already compiles because I already have a play method here, but I'm just going to add an @Override annotation just to make it clear that it overrides the play method in the interface.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=50)** And now I'm going to make the Song class also implements MusicalItems.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=54)** So at the top, I'm going to add implements MusicalItem.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=58)** And now I need to override the play method in this class.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=61)** So at the bottom, I'm going to add a new method with @Override.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=66)** And I'm going to say "public void play."
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=69)** So in this play method, I'm going to iterate over each of the notes in the list and call the play method on each one.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=75)** So I'm going to say "notes.forEach," and then I'm going to use a method reference.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=80)** So I'm going to say "MusicalItem" and then two colons and then play.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=85)** Now, I'm going to go back to the App class.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=89)** And I can actually get rid of all these calls to play on all the individual notes, and instead I'm going to replace it with doReMe.play.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=99)** So now if I run this, I see I still get the same output as before.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=104)** So CDECECE.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern-23218143?u=76281980&t=107)** So well done if you managed to complete this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), implements (4), override (3), class. (2), public (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** foreach (1), doreme (1)
> **Env Vars:** cdecece (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 13. 12. The Decorator Pattern

#### Understand the Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=0)** The decorator pattern change the behavior of an object without having to create a new subclass for that behavior.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=6)** So say, for example, that you have an app for creating rooms that are decorated in different styles.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=10)** So you might start off with a blank EmptyRoom class, but then you want to have a room with a couch in it.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=16)** So you'd have a room with Couch class.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=18)** And then you might have a room with a couch and a table in it.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=21)** So you'd have a class representing a room with a couch and a table.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=24)** And then there might be lots of different combinations for lots of different types of furniture.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=28)** You can see that if I had different subclasses for all these different possible combinations, it would get out of hand very quickly.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=34)** This slide only shows a few different possible combinations of decorated rooms, and there's already a lot on there.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=40)** So the solution is to use a decorator pattern.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=43)** The first part of this pattern is that you have an interface at the top.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=46)** So in this case, a Room interface, and then a concrete implementation of that Room interface.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=51)** In this case, this room implementation represents an empty room with no decoration.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=56)** Next, there's another interface or an abstract class underneath the Room interface called RoomDecorator.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=62)** Then there were concrete implementations of this decorator class for each of the different decorations you want to have.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=68)** These decorations take a concrete room object as an argument to their constructor.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=72)** So, for example, you create a room object and then a room with a sofa decorator and pass in the room objects.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=78)** And you can do this as many times as you want.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=81)** For example, you can create a room with a lamp and then pass in a room with a sofa objects.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=85)** So then you'd end up with a room with a sofa and a lamp.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=88)** So this design cuts down on the number of classes we need, because you don't need one for each different combination of decorations.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-decorator-pattern?u=76281980&t=94)** Each new object that's created can have its own specific functionality without affecting other objects.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), case, (2), pass (2), class, (1), class. (1)
> **Analogies:** for example (3)

#### Change behavior dynamically with a decorator
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=0)** In this example, I have a simplified version of an app for logging in users to an application, and I'm going to use the decorator pattern to be able to create users with different privileges.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=9)** So at the moment, I have an interface called User which defines a method called printPrivileges.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=15)** And then there's a class called BasicUser which implements user.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=18)** And inside the printPrivileges method, it prints out a message saying "Can log in."
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=23)** So that means that a basic user has the privilege to log in to the app.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=27)** So I want to be able to have users with different combinations of privileges.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=30)** So I'm going to create a Decorator class to handle that.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=33)** I'm going to create a new Java class and I'm going to call it UserDecorator.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=39)** And this is going to be an abstract class.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=41)** So I'm going to add the word "abstract" before class.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=44)** And then I'm going to add at the end, implements User.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=47)** So it implements the user interface as well.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=50)** This class is going to have a field of type user, which is the user that's going to be decorated.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=56)** So I'm going to add a fields and say "private final User user."
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=61)** And then I'm going to have a constructor to set the user that's passed in.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=65)** So I'm going to say "public UserDecorator," and then pass in a user objects.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=71)** And inside the constructor, I'm going to say "this.user equals user."
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=76)** And I still need to override the printPrivileges method.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=80)** So at the bottom of this class, I'm going to add an @Override, And then I'm going to say "public void printPrivileges."
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=90)** And inside this method, I'm going to say "user.printsPrivileges."
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=95)** So that's going to print out the privileges of the user that I pass in to the constructor.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=100)** Now, I need to create concrete implementations of this abstract class.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=103)** So let's say I want to give a user admin privileges.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=107)** So I'm going to create another new Java class and I'm going to call this one AdminUser.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=112)** And this class is going to extend the UserDecorator class.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=116)** So I'm adding extends UserDecorator.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=120)** So first of all, I'm going to create a constructor in this class that passes in a user object.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=125)** So I'm going to say "public AdminUser" and pass in a user objects.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=131)** And then inside this constructor, I'm just going to say "super" and then pass in that user.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=138)** So that's just going to set the user field from the UserDecorator to the user that's passed into this constructor.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=144)** Next, I need to override the printPrivileges method again.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=147)** So I'm going to say "@Override" and then public void printPrivileges.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=154)** And first inside this method, I'm going to say "super.printPrivileges."
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=159)** So that's going to print out the privileges of the user that I passed into the constructor.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=163)** Then I'm going to add my own custom privileges here.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=166)** So let's say that because they're an admin user, they can also create new users.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=170)** So I'm going to add System.out.println and I'm going to print out a message that says, "Can create new users."
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=179)** So now I can update the Login class to test it works.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=181)** So I'm going to go to Login, and in here, I'm creating a new basic user and then saying "user.printPrivileges."
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=190)** So if I run this at the moment, I can see that at the moment the user can log in.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=195)** So I'm going to add a new line.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=197)** And first of all, I'm just going to print out an empty line to make it a bit easier to read.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=201)** And then I'm going to say "var adminUser equals new AdminUser."
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=208)** And I'm going to pass in the basic user.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=211)** Then I'm going to say "adminUser.printPrivileges."
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=217)** And if I run this again, I can see that this time it says "Can log in."
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=222)** And then for the second user, it says "Can log in" and then "Can create new users."
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=227)** So that means I've added admin privileges to the user.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/change-behavior-dynamically-with-a-decorator-23218147?u=76281980&t=231)** So that's how you can use the decorator pattern to add functionality dynamically to objects.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), class. (4), public (4), override (4), implements (3)
> **Code Identifiers:** printprivileges (9), adminuser (2), printsprivileges (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)

#### Add multiple decorations to an object
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=0)** In this login app, I'm using the decorator pattern to add other privileges to a basic user.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=5)** So so far, I've added admin privileges to a user.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=8)** But let's see how it would work if I wanted to add other privileges on top of that as well.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=13)** So for this example, I've created another decoration called DeveloperUser.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=17)** So this class is very similar to the AdminUser class.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=20)** But in the printPrivileges method, it has a different custom privilege.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=23)** So for this one it says "Can deploy to production."
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=27)** So now I've got two types of decorators; AdminUser and DeveloperUser.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=31)** So I'm going to go back to the Login class, and I could create another user that has basic user privileges and developer privileges.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=40)** Or let's say that I want the user to have admin privileges so that they can create users, but also developer privileges, so they can deploy to production as well.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=49)** So first of all, I'm just going to add another System.out.println.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=54)** Let's make it a bit easier to read in the output.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=56)** And then I'm going to say "var developerUser equals new DeveloperUser."
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=64)** And this time in the constructor, I'm going to put the adminUser object.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=69)** So I'm chaining different user privileges together.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=73)** And then at the bottom, I'm going to say "developerUser.printPrivileges."
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=79)** So if I run this, so the first user can just log in, the second user can log in and create new users, and the third user can log in, create new users, and they can deploy to production.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/add-multiple-decorations-to-an-object?u=76281980&t=91)** So that's how the decorator pattern can be used to flexibly add multiple different functionalities to objects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), class, (1), var (1), this, (1)
> **Code Identifiers:** printprivileges (2), developeruser (2), adminuser (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)

#### Challenge: The Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=5)** In this exercise, you'll be implementing the decorator pattern in an app that creates rooms in a house.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=11)** So at the moment, there's an interface called Room, which has a method called printFurniture.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=15)** And then there's a class called BasicRoom which implements the Room interface.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=19)** And inside the printFurniture method, it just prints out the word "Carpet."
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=23)** So a basic room just has a carpet in it.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=25)** And then there's also a class called House.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=28)** So this has a main method in it.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=29)** And in here, we're creating a new basic room, and then we're saying "room.printFurniture."
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=34)** So this will just print out carpets.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=36)** And then in the comments, it tells you what you should do to complete this exercise.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=40)** So you should be able to create a room with a carpet and a couch.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=43)** And then you should create a room with a carpet, a couch, and a table.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=46)** And obviously, you should use the decorator pattern to implement this exercise.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=50)** So if I run this at the moment, it just prints out the red carpets.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=56)** But when you've completed this, it should print out carpets and then it should print out carpet and couch and then it should print out carpets, couch, and table.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=65)** So in the next video, I'll show you how I'd go about completing this challenge.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-decorator-pattern-23221135?u=76281980&t=68)** So good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), implements (1), this, (1)
> **Code Identifiers:** printfurniture (3)
> **Cross-References:** in the next (1)

#### Solution: The Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=5)** So this is how I'd go about solving the decorator pattern challenge.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to create a new Java class, and I'm going to call it RoomDecorator.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=16)** And this is going to be an abstract class.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=19)** I'm also going to make this class implement the Room interface.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=22)** So after RoomDecorator, I'm going to add implements Room.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=26)** So this class is going to have a field of type Room, which is the room that's going to be decorated.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=30)** So I'm going to say "private final Room room."
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=36)** And that's going to be set inside the constructor.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=38)** So I'm going to add a constructor and say "public RoomDecorator" and then pass in a room objects.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=46)** Then inside the constructor, I'm going to say "this.room equals room."
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=52)** And I also need to override the printFurniture method.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=55)** So at the bottom, I'm going to add @Override.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=57)** And then I'm going to say "public void printFurniture."
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=63)** And then inside this method, I'm just going to say "room.printFurniture."
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=69)** So that's my abstract decorator class.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=71)** And now I need to make some concrete implementations of it.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=74)** So I'll start with the room with a couch.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=76)** So I'm going to add one more Java class, and I'm going to call this one "RoomWithCouch."
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=82)** And this class is going to extend the RoomDecorator class.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=87)** So now I need a constructor for this.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=89)** So I'm going to say "public RoomWithCouch," and I'm going to pass in a room object.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=97)** And then inside the constructor, I'm going to say "super" and pass in room.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=101)** And now I need to override the printFurniture method.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=104)** So at the bottom, again, I'm going to say "@Override" and then public void printFurniture.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=111)** And first, I'm going to call super.printFurniture, then I'm going to add my own custom message.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=118)** So at the bottom here, I'm going to say "System.out.println" and I'm going to put the word "Couch."
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=124)** So that's my first decorator done.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=126)** And now I need to also add one for a room with a table.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=129)** So again, I'm going to add a new Java class.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=131)** And I'm going to call this one "RoomWithTable."
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=136)** And again, this is going to extend the RoomDecorator class.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=141)** And I'm going to add my constructor.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=143)** So I'm going to say "public RoomWithTable" and then pass in a room object.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=149)** And then inside the constructor, I'm going to say "super" and pass in room.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=154)** And now I can override the printFurniture method again.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=157)** So at the bottom, I'm going to say "@Override" and then public void printFurniture.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=164)** And then inside this method, again I'm going to say "super.printFurniture."
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=169)** Then I'm going to add my custom decorations.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=171)** I'm going to say "System.out.println" and I'm just going to pass in the word "Table."
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=177)** So now I've got everything in place and I can go back to the House class and update that.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=182)** So in this main method, underneath the comment where it says "create a room with a carpet and a couch," I'm going to create a new variable and say "var roomWithCouch equals new RoomWithCouch," and pass in the room object.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=202)** Then to check it worked, I'm going to say "roomWithCouch," and I'm just going to change that to a lowercase r, so I'm going to say "roomWithCouch.printFurniture."
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=214)** And then underneath the next comments where it says, "create a room with a carpet, a couch, and a table," I'm going to create another variable called roomWithCouchAndTable.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=225)** And I'm going to say "equals new RoomWithTable," and then I'm going to pass in the roomWithCouch object.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=235)** Then I'm going to say "roomWithCouchAndTable.printFurniture."
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=242)** So let's run this.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-decorator-pattern?u=76281980&t=244)** And in the output, I can see I get carpet and then carpet and couch for the second room and then carpet, couch, and table for the final room.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), public (6), override (6), class. (5), super (4)
> **Code Identifiers:** printfurniture (11), roomwithcouch (4), roomwithcouchandtable (2)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)


### 14. 13. The Facade Pattern

#### Understand the Facade pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=0)** The word facade can mean a deceptive outward appearance, and in this case, it means that you have a simple interface that hides the complexity of the code behind it.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=8)** For example, think about when you write an email and click on "Send."
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=11)** There's a lot going on behind the scenes when we click on that send button, but most people aren't thinking about the technical things behind the scenes every time they send an email.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=19)** And we certainly don't need to know how email protocols work in order to send one.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=24)** So in this example, the send button is a facade that hides the complexity of sending an email.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=29)** Facades are needed in software because it's common to break large systems down into smaller parts, often with lots of dependencies between them.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=36)** This is generally a good thing because it makes systems more reusable and easier to customize, but it can also make it harder to use.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=43)** A client that wants to use a system like this would have to interact with all the classes underneath.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=48)** This means that it can make the most of the possible customizations, but sometimes the client might not care about those and it still has to use all the classes anyway.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=57)** So a facade is used as a single, simpler interface to these complex systems.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=62)** Then the client can just use this simple facade interface to do everything at once.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=66)** As well as being simpler, it helps to minimize the dependencies between the client and the subsystems.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=71)** The other nice thing is that you don't have to use the facade if you don't want to just because it's there.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=76)** You can directly access the classes or subsystems underneath if you want to.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-facade-pattern?u=76281980&t=80)** So to summarize, the facade pattern can be helpful when you want to provide a simple interface to a complex subsystem.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), case, (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)

#### Implement the Facade pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=0)** I have an application here that's used for encrypting strings.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=3)** Encryption is quite a complicated process in Java with quite a few steps in it, and I'm using lots of different classes from the JDK here to do this.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=10)** So, for example, I'm using key generator, secret key, secure random, IV parameter spec, and so on.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=17)** So don't worry if you don't understand what this code is doing, and I'm not going to talk it through and explain it, but the point is that it's complicated and uses lots of different classes.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=26)** So basically, what this code does is it takes a string, so I've given it an input string of some text to encrypt, and then at the bottom, it prints out the string that it's encrypted.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=35)** So it says "Encrypted String" and then the result.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=39)** So if I run the app, I can see it prints out encrypted string and then basically a series of random characters.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=47)** So this is useful functionality, and I might want to use it in lots of different places in my app, but it would be a bit of a pain having to go through all this setup every time I want to use it, especially as I don't care about how the encryption is done.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=59)** So I'm going to create a facade.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=61)** So I'm going to create a new Java class and I'm going to call it EncryptionFacade.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=68)** And inside this class, I'm going to create a new method called encrypt.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=72)** So I'm going to say "public void encrypt."
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=76)** And it's going to take a string called inputs as an argument.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=80)** And now I'm going to copy and paste all the code from the clients that does the encryption into this method.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=85)** So I'm going to go back to the Client class and I'm just going to copy everything inside this main method and paste it inside the EncryptionFacade, encrypt method.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=101)** And I'm actually going to get rid of that string input, because I'm going to be passing that in as an argument to the method.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=107)** And I also need to copy across the exceptions.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=110)** So I'm going to go back to Client and copy all of these exceptions from the method signature and I'm going to paste them next to this encrypt method.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=123)** So now I'm going to go back to the Client class again, and I'm going to remove all of this code inside the main method except for the input string.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=133)** And I'm going to create a variable for my EncryptionFacade.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=136)** So I'm going to say "var encryptionFacade equals new EncryptionFacade."
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=143)** Then I can say "encryptionFacade.encrypt" and then pass in the input string.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=150)** So if I run this again, I can see that it still works the same as before.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=156)** It encrypts the string and prints out this string of random characters.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-facade-pattern?u=76281980&t=161)** So in this case, I've created a facade to hide code that uses lots of classes from the JDK, but it's also a common use case to use a facade that calls your own classes as well.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), class, (1), public (1), var (1), pass (1)
> **Cross-References:** go back to (3)
> **Code Identifiers:** encryptionfacade (2)
> **Env Vars:** jdk (2)
> **Documentation:** spec (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)

#### Challenge: The Facade pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=5)** In this exercise, you'll be implementing the facade pattern in an app that has some code for sending a message.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=11)** So there are several classes here involved with sending the message.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=14)** There's the Client class, the ClientServer, the RecipientServer, and the Recipient.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=19)** So if I run this main method inside the App class, I can see that it prints out several messages about how this works.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=26)** So it says, "Connecting to server, authenticating clients, routing to recipients, authenticating recipients, sending message, and message received."
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=34)** In this exercise, you should implement the facade pattern so that this App class doesn't need to know how the internals of sending a message works.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=41)** It should just be able to use a single facade object to do all of this.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-facade-pattern?u=76281980&t=45)** And as usual, I'll be going through the solution to this exercise in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), this. (1)
> **Cross-References:** in the next (1)

#### Solution: The Facade pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=5)** Now, I'm going to walk through the facade pattern challenge.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to create a class for my facade.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=12)** So I'm going to create a new Java class and I'm going to call it "SendMessageFacade."
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=19)** And inside this class, I'm going to create a new method called sendMessage.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=23)** So I'm going to say "public void sendMessage."
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=28)** Then I'm going to get back to my App class, and I'm just going to copy everything inside the main method.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=34)** And then inside my SendMessageFacade, I'm just going to paste all of that inside the sendMessage method.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=41)** So now I can go back to the App class again, and I can actually delete everything inside the main method.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=46)** And instead, I'm going to say "var sendMessageFacade equals new SendMessageFacade."
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=54)** Then I can say "sendMessageFacade.sendMessage."
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=60)** So if I run this again, I can see I still get the same output as before.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=64)** So connecting to server, authenticating clients, routing to recipients, authenticating recipients, sending message, and message received.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-facade-pattern?u=76281980&t=72)** So that's how you can use the facade pattern to hide complexity behind another class.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), public (1), delete (1), var (1), class. (1)
> **Code Identifiers:** sendmessage (4), sendmessagefacade (2)
> **Cross-References:** go back to (1)


### 15. 14. The Flyweight Pattern

#### Understand the Flyweight pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=0)** The flyweight pattern is all about minimizing memory usage.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=3)** It does this by reusing objects that have already been created rather than using new ones.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=8)** One example of where this pattern might be used is in a word processor app.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=12)** When someone types a sentence, each letter could be a new object.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=15)** So if someone writes a long documents, there are going to be lots of objects.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=19)** But with a flyweight pattern, you have only one object for each letter, so one a object, one b object, and so on, and these can be reused.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=27)** This way, less memory is used for storing all the different letters as typed.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=30)** The way this is usually implemented in Java is that you have a factory class with a map, for example a HashMap.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=37)** Then when someone types the letter a, it checks if there's an object with the key "a" inside the map.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=42)** If not, then it creates one and puts it in the map.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=45)** If there's one already there, it reuses that one.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=47)** The only thing that's different about each letter a, for example, is its position in the document.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=52)** So the object has states, which is immutable, for example the name of the letter.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=56)** This immutable state should only be controlled through the factory.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=60)** And then there should be mutable states, for example the position.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=63)** This is a similar concept to a cache.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=65)** The idea is that if the data is already there and can be reused, it should be.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-flyweight-pattern?u=76281980&t=69)** This is especially useful if it's computationally expensive to create new objects, so you should use this pattern when you want to save memory by reusing objects instead of creating new ones.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **Definitions:** is a  (1)

#### Implement the Flyweight pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=0)** This is an app that's used for placing orders in a restaurant.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=3)** So first of all, there's a class called Order which has a string field called name.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=7)** And then I'm passing the name into the constructor.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=10)** And inside the constructor, I'm saying "this.name equals name."
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=14)** Also, inside the constructor, there's a call to thread.sleep for three seconds.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=18)** So this means that it waits three seconds each time while the order is being prepared.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=22)** So each time it creates a new order object, it takes at least three seconds to actually create it.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=27)** So if someone places a lot of orders, that's going to slow my app down quite a bit.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=30)** And I also have a System.out.println before and after the three seconds, just so I can see when the object was first starting to be created and when it's finished being created.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=41)** Then there's a class called the Restaurant class, which has a main method in it.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=45)** Inside the main method, I'm creating three new order objects and they're all pizza orders.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=49)** And then later, I'm creating three new burger order objects.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=52)** Underneath the orders, I'm also printing out the objects reference for each one.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=56)** And that's just to show that a new object is being created for each new order.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=60)** So if I run the app, I can see that it's taking a while to run because it's waiting three seconds each time it creates a new objects.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=69)** So it's finished creating the Pizza objects, and now it's moved on to the Burger objects.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=73)** Another is finished running, I can see that the object's reference is different for each one.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=78)** So that's just to show that it's creating six different separate objects here.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=82)** But actually, I don't really need six new objects.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=84)** I could have one Pizza object that I can reuse, and one Burger object that I could reuse.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=89)** So I'm going to implement the flyweight pattern to help with this.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=93)** So first of all, I'm going to create a new class, and I'm going to call it OrderFactory.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=99)** And inside this class, I'm going to create a new map.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=102)** So I'm going to say "private" and is going to be a static map because it belongs to the class.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=107)** Then I'm going to say "final Map."
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=110)** And the key is going to be a string, which is the name of the order, and then the value is going to be the order object itself.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=118)** And I'm going to call this orderCache.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=121)** Then I'm going to say "equals new HashMap."
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=125)** So next, I need a method to create the order.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=128)** So I'm going to say "public" and it's going to be a static method.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=131)** So I'm going to say "static Order," and then I'm going to call it "createOrder."
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=138)** And this method is going to take the name of the order as an argument.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=142)** So I'm going to say "String name" inside the brackets.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=145)** So the first thing I need to do inside this method is I need to check if an order objects with the same name already exists in the map.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=151)** So first of all, I'm going to say "if orderCache.containsKey" and pass a name.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=160)** Then if the name is already in the map, I can return the object associated with that name.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=164)** So then I can say "return orderCache.get" and pass in the name.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=169)** Then if it hasn't found an order, I'm going to create a new one.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=172)** So I'm going to say "var order equals new Order," and pass in the name to the constructor.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=183)** Then I'm going to save the new Order object in the map.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=186)** So I'm going to say "orderCache.put" and pass in the name and then the new Order object that I just created as the value.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=197)** Then I returned that new order.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=199)** So at the end I can say "return order."
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=202)** So if I create a Pizza object for the first time, for example, it will create the new order with pizza as the name, then it will put it inside the map and then it will return that new pizza order.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=213)** And then the second time it tries to create a pizza, it will look in the map, see that there's already one with the name pizza, and it will return that to existing objects.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=222)** So the nice thing is, I can actually simplify this quite a bit by using a handy method on the Map class called computeIfAbsent.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=228)** And this basically does all of the logic I have inside this method for me.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=232)** So what I can do is I can actually replace all of this.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=237)** So delete all of that and I can say "return orderCache.computeIfAbsent" and then the first argument is going to be the name.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=247)** And then the second argument is a function.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=249)** So I want to create a new order in this case.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=251)** So I can use a method reference and say "Order::new."
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=256)** And that basically does the same as all of the logic that I just wrote out and then deleted.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=261)** So it will check if the name is in the map, and if it is, then return the value associated with it.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=265)** And if it's not, then it creates a new object, saves it in the map with that name, and returns the new object's.
>
> **[4:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=272)** Some people might prefer the way I had it before, as it's a bit more obvious what the code is doing, especially if you don't know how this computeIfAbsent method works.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=281)** So which one you use is down to you and your personal preference.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=284)** So now I can go and update the Restaurant class to use my new OrderFactory.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=288)** So I'm going to go back to restaurants and instead of saying new Order and passing in pizza, I can use my new static method.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=295)** So I'm going to replace that with OrderFactory.createOrder and pass in pizza.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=301)** And then I can copy this for pizza2 and pizza3.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=305)** So each time I'm going to replace the call to new Order and instead use my OrderFactory.createOrder.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=312)** Then I can do the same for the burgers.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=315)** But I'm going to pass in the word "burger" instead of pizza.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=319)** So I'm going to copy and paste this for burger2 and for burger3 as well.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=325)** So now if I run the app again, it's a bit quicker to run this time because it only has to wait three seconds once for the pizza and once for the burger object.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=335)** And I just want to show you that the object's reference is the same for each one.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-fyweight-pattern?u=76281980&t=338)** So instead of creating six new objects, it's just creating one pizza object and reusing it and one burger object and reusing it.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), static (4), this. (3), class, (3), private (1)
> **Code Identifiers:** ordercache (5), createorder (3), computeifabsent (3), containskey (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)

#### Challenge: The Flyweight pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=5)** For this challenge, you'll be implementing the flyweight pattern for an app that simulates growing flowers.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=10)** So first of all, there's a class called Flower, which has a field called name.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=14)** And in the constructor, it sets the name field, and then it takes a few seconds to finish creating the objects.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=19)** Then there's a class called Garden.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=22)** And inside the main method inside this class is creating three new sunflower objects and then it's creating three rose objects.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=29)** So if I run this, you can see that it's taking a while to run because it waits a few seconds before it creates every new object.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=36)** So for this challenge, you should implement the flyweight pattern so that it should only create one sunflower object and one rose object.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=42)** And you should be able to tell if it's working.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=44)** If you run that app and you see that the object references are the same for the sunflower objects, and the rose objects also have the same reference as each other.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=52)** So, for example, at the moment, you can see the rose objects all have different objects references, but after you've implemented the flyweight pattern, they should all be the same.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=60)** If you get stuck, feel free to look at the example in the previous movie as a reminder.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-flyweight-pattern?u=76281980&t=64)** And I'll also be going through the solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### Solution: The Flyweight pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=5)** Now, I'm going to walk through my implementation of the flyweight pattern for this exercise.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to create a new Java class, and I'm going to call it FlowerFactory.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=18)** Then inside this class, I'm going to create a map.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=22)** So I'm going to say "private static final Map."
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=28)** And the key is going to be a string, and the value is going to be a flower object.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=34)** And I'm going to call this flowerCache.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=36)** Then I'm going to say "equals new HashMap."
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=40)** So next, I need my method to create the flower.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=43)** So I'm going to say "public static Flower createFlower," and this method is going to take the name of the flower as an argument.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=53)** Now, I'm going to use the compute if absent methods to either populate the map or use an existing entry.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=59)** So I'm going to say "return flowerCache.computeIfAbsent," and the first document is going to be the name and the second one is going to be a method reference.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=70)** So I'm going to say "Flower::new."
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=74)** So this computerIfAbsent method is going to check if the name that I've passed in is a key in the map.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=79)** If it is, it returns the flower object.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=81)** That's the value. And if not, then it creates a new flower, saves it in the map with the name as the key, and returns it.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=87)** So if you did this without functional programming, but the functionality is the same, then that's another perfect solution.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=94)** So just to check it worked, I'm going to go back to the Garden class, and instead of creating a new flower, I'm going to say "FlowerFactory.createFlower" and pass in the name "Sunflower."
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=107)** And then I'm going to do the same for the other sunflowers.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=109)** So I'm going to copy that and paste it for sunflower2 and for sunflower3.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=117)** And I missed a bit when I copied it, so I just need to add the end of the line.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=122)** Then I'm going to do the same for the roses.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=125)** So instead of having new Flower and passing in rose, I'm going to say "FlowerFactory.createFlower" and pass in rose.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=134)** Then I'm going to copy that and paste it for rose2 and also for rose3.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=141)** So if I run the app again now, and I just need to remove the word "new" in front of FlowerFactory.createFlower for rose3.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=151)** So let's try running that again, and in the output now, I can see only creates the sunflower objects once and also the rose objects once.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=160)** And I can see that the object references are the same for all the roses -- and I can see that the object references are the same for all the sunflowers, and the same for all the roses as well.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-flyweight-pattern?u=76281980&t=169)** So well done if you manage to get this working too.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (3), static (2), pass (2), private (1), public (1)
> **Code Identifiers:** createflower (4), flowercache (2), computeifabsent (1), computerifabsent (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)


### 16. 15. The Proxy Pattern

#### Understand the Proxy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=0)** In the proxy pattern, a proxy is a class that controls access to the functionality of another class.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=5)** For example, imagine that you have a class that does some expensive setup when you create a new instance of it.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=10)** When describing this pattern, this class is sometimes referred to as the subject.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=14)** So let's say, for example, that the first time the subject is used, it has lots of expensive calls to a database, and then later it does something with the data.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=22)** This code might be in a third-party library, so you might not have access to it.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=26)** In this case, you only want the expensive setup to happen once, the first time the object is created.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=31)** After that, you just want to do the part where it processes the data.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=34)** You don't really want the classes that call this code to have to implement the logic about only doing this setup once.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=40)** So in this case, you'd have a proxy object in between, and that controls access to the class with the expensive setup.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=46)** Then the client just calls the proxy.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=48)** It doesn't need to know about this complex setup.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=51)** So the proxy can be used to only initialize objects on demand for optimization.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=55)** Or for example, if you only want people with certain privileges to be able to do something, the proxy could be used to control who performs a certain action.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=63)** Another use case is when you have an object that resides in a different address space.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=67)** You could use a proxy to hide that fact from the client.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-proxy-pattern?u=76281980&t=70)** So essentially, a proxy controls access to another objects, which you might want to do for a number of different reasons.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (5)
> **Code Keywords:** case, (2), class. (1), let (1)
> **Analogies:** for example (3), imagine (1)
> **Definitions:** is a  (1)

#### Recognize where to use the Proxy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=0)** In this app, I have a music player that shows song recommendations to users based on their listening activity.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=6)** I want to use the proxy pattern to optimize the process of showing those recommended songs to users.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=10)** So at the moment, I have an interface called recommendations, and this defines a single method called showRecommendations.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=18)** Then I have a class that implements this called SongRecommendations.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=22)** So this implements recommendations.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=24)** And I'm passing a user into the constructor.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=26)** And then I have a method called getData.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=29)** So this getData method does three calls to the database; one to get the user's top tracks, one to get the user's top artists, and one to get the user's top genres.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=37)** So this will happen every time the constructor is called.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=41)** And then there's a public method called showRecommendations, which overrides the method from the interface.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=46)** And this just prints out a message saying showing song recommendations for the user's name and then based on their top tracks, artists, and genres.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=54)** And the user class is a simple class with a string field called name, and that's set by passing it into the constructor.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=60)** And then there's a getName method.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=62)** Finally, there's a class called MusicPlayer.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=66)** So this has a main method.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=68)** And it also has two other methods, one called loadHomePage and one called loadDiscoverPage.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=73)** So in the loadHomePage method, it prints out a message saying loading home page.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=77)** And then I'm creating a new song recommendations objects.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=80)** And then I'm saying recommendations.showRecommendations.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=84)** And then in the loadDiscoverPage, it prints out a message saying loading discover page.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=89)** Then again I'm creating a new song recommendations objects.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=92)** And then again I'm saying recommendations.showRecommendations.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=96)** Then in the main method, I'm creating a new user called Jill, and then Jill loads the home page and then she loads the discover page.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=103)** So if I run this, I can see it loads the home page then it does the three calls to the database and then it shows the recommendations for Jill.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=112)** And then again when she goes to the discover page, it does the three calls to the database again and again it shows the song recommendations for Jill based on their top tracks, artists, and genres.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=122)** So I can see that when both the pages are loaded, it does the expensive operation of fetching all the data from the database both times.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=128)** So one thing I could do is I could make a single song recommendations objects that I reuse.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=134)** So let's do that.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=134)** So I'm going to close this terminal.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=137)** And inside this main method, after I create the new user, I'm going to create my song recommendations here.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=143)** So I'm going to say var recommendations = new SongRecommendations, and then pass in the user.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=151)** So now I can pass this recommendations object into my two methods instead of creating it inside the methods.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=157)** So I'll start with the loadHomePage one.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=159)** So I'm going to add a new argument to the method which is going to be a song recommendations objects which I'll call recommendations.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=167)** And then I'm just going to copy that and also put it as an argument inside the loadDiscoverPage method.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=174)** And then I can get rid of the bit where I'm creating a recommendations objects inside each method.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=180)** And now I need to pass in my recommendations object as an argument when I call the method.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=186)** So I'm going to add that for the loadHomePage method and again for the loadDiscoverPage method.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=192)** So if I run this again.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=195)** Now I can see that this time it does the three calls to the database only once, and then it loads the home page and shows the recommendations, and then it loads the discover page and shows the recommendations.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=205)** So this is a bit better.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=207)** But then what if the user never opens the home page or the discover page?
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=211)** They might open the music player on some other page, like a playlist page, for example.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=215)** And in that case, I've done the expensive calls for no reason at all.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=219)** So the solution to this problem is to use a proxy object.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognize-where-to-use-the-proxy-pattern?u=76281980&t=222)** So this is a use case where the proxy pattern can be used to help optimize an application.

> [!info]- Semantic Content
>
> **Code Identifiers:** showrecommendations (4), loadhomepage (4), loaddiscoverpage (4), getdata (2), getname (1)
> **Code Keywords:** pass (3), interface (2), implements (2), public (1), finally, (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)

#### Use a proxy to create objects on demand
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=0)** I'm going to use the proxy pattern to optimize my app that gives suggestions to users based on the songs they've listened to.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=5)** So the first thing I'm going to do is I'm going to make a proxy class that will make sure the expensive setup is only done the first time the object is used.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=13)** So I'm going to create a new Java class and I'm going to call it RecommendationsProxy.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=20)** And this class is going to implement the recommendations interface.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=23)** So I'm going to add implements Recommendations.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=28)** And this class is going to have a field of type recommendations as well.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=31)** So I'm going to say private Recommendations recommendations; and then I need to override the showRecommendations methods.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=41)** So I'm going to say @Override and then public void showRecommendations and I need to pass in a user object.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=51)** So in this method, I'm going to check if the recommendations field has already been initialized.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=56)** If not, then I'll create a new one and the expense of database calls will be done.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=60)** If it's already been created, then I can just reuse it and I don't need to make the expensive calls again.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=65)** So first I'm going to check if recommendations is initialized or not.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=68)** So I'm going to say if recommendations is equal to null.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=72)** And if it is, then I should initialize it.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=74)** So I'm going to say recommendations = new songRecommendations and pass in the user.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=81)** If it's not null, then it's already been initialized and I don't need to do anything else.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=85)** So then I can go on and say recommendations.showRecommendations and pass in the user again.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=93)** So now I'm going to go back to the MusicPlayer class.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=96)** And in here I'm going to add a new field for my proxy.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=98)** So at the top, I'm going to say private, and I'm going to make it static so that I can use it inside my main method.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=105)** And it can be final and it's going to be a RecommendationsProxy objects.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=111)** So I'll call it recommendationsProxy with a lowercase r.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=115)** And then I can say = new RecommendationsProxy.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=121)** And then I can use it in my loadHomePage method and my loadDiscoverPage method.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=127)** So I'll start with the loadHomePage method.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=130)** And I don't need to pass in a SongRecommendations object anymore.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=133)** So I'm going to remove that from the method signature.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=136)** And instead of saying recommendations.showRecommendations, I'm going to say recommendationsProxy.showRecommendations.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=144)** Then I'll do the same for loadDiscoverPage.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=146)** So I'm going to remove the song recommendations from the arguments for the method.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=150)** And I'm going to say recommendationsProxy.showRecommendations.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=156)** And then where I'm calling these methods inside the main method, I can remove the recommendations from the list of arguments.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=164)** So in both cases I'm just passing in user again. And I can remove this recommendations variable.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=171)** So if I run this main method again, this time I can see it says loading home page, and then it gets Jill's top tracks from the database and top artists and top genres.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=182)** And then it says showing recommendations for Jill.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=184)** Then it loads the discover page and again it says showing recommendations for Jill.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=188)** So it only does the expensive calls to the database once and that's only after it loads the home page.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=193)** So it knows it's definitely going to need that data.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-create-objects-on-demand?u=76281980&t=196)** So this is one use for a proxy, making sure that expensive object initialization is only done on demand.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), private (2), override (2), interface (1), implements (1)
> **Code Identifiers:** showrecommendations (6), recommendationsproxy (3), loadhomepage (2), loaddiscoverpage (2), songrecommendations (1)
> **CLI Commands:** make (4)
> **Prerequisites:** setup (1), initialization (1)
> **Cross-References:** go back to (1)

#### Use a proxy to control access
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=0)** In my music app, I'm using the proxy pattern to optimize the expensive initialization of objects that show song recommendations to a user based on what they've listened to before.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=9)** But let's say that I only want the song recommendations feature to be available to premium users.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=14)** So first of all, I'm going to update my user class and I'm going to add a new field called isPremium.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=20)** So it's going to be a private final Boolean fields called isPremium.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=26)** And I'm going to set this by passing it into the constructor.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=29)** So I'm going to add a second argument which is going to be a Boolean called isPremium.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=34)** And then inside the constructor I'm going to add this.isPremium = isPremium.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=41)** And I'm also going to add a getter method for this field as well.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=44)** So at the bottom, I'm going to say public boolean isPremium and then inside that method I'm going to return isPremium.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=53)** So now I'm going to need to update the user in the MusicPlayer class.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=56)** So I'm going to go to music player and where I'm creating a new user I'm going to say that Jill is a premium user.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=62)** So I'm going to add the argument true to the constructor.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=66)** And finally, I need to update the proxy class.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=69)** So I'm going to go to RecommendationsProxy and I'm going to update this showRecommendations method.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=75)** I'm going to wrap the whole of this method inside an if statement and only do all of this if the user is a premium user.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=82)** So at the top of the method, I'm going to add if user.isPremium and then I'm going to put the whole content of the method inside that if and then if they're not a premium user, I'm just going to print out a message.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=97)** So I'm going to add an else block.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=100)** And in the else I'm going to say System.out.println, and I'm going to print out the message upgrade to premium to see song recommendations.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=112)** So now if I go back to the Music Player app again and I run the app again, I can see that it still prints out Jill's recommendations as usual, as before, and that's because she is a premium user.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=124)** So if I change isPremium to false and run the app again.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=129)** This time I can see it says loading home page and then upgrade to premium to see song recommendations and then loading discover page and then upgrade to premium to see song recommendations.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=140)** So this is another use case for using a proxy, controlling access to the functionality of another object.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-a-proxy-to-control-access?u=76281980&t=146)** And as we can see, the proxy can be used to do multiple checks before performing operations.

> [!info]- Semantic Content
>
> **Code Identifiers:** ispremium (9), showrecommendations (1)
> **Code Keywords:** class. (2), let (1), private (1), this. (1), public (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** initialization (1)

#### Challenge: The Proxy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=5)** In this exercise, you'll be using the proxy pattern to improve an application that plays videos.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=10)** So first of all, there's this interface called MediaPlayer, which has a method called playMedia.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=15)** And then there's the MovieMediaPlayer class which implements media player.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=19)** So this overrides the playMedia method and it just prints out a message saying playing video.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=25)** And then inside the constructor for this class, it calls a method called loadVideo and loadVideo prints out a message saying loading up large video.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=33)** So that represents a method with an expensive operation.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=36)** Finally, there's the app class.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=38)** So this has a main method in it.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=40)** And in the main method, its calling two other methods, goToMovieLibrary and goToFavoriteMovies.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=46)** So in the goToMovieLibrary method, it prints out a message saying loading movie library, then it creates a movie media player and then it calls the playMedia method on that.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=55)** And then similarly, in the goToFavoriteMovies method, it prints out a message saying loading favorite movies.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=62)** Then it again creates a movie media player and then it calls the playMedia method again.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=67)** So at the moment, if I run this app, I can see it says loading up large video twice, once when it loads up the movie library and again when it loads up the favourite movies.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=78)** So in this exercise, you should implement the proxy pattern so that instead of using a media player directly, the app should use a proxy object instead.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=86)** The proxy object should only create a new movie media player once, the first time it's used.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=91)** So when you run the app after completing the exercise, you should see the same output, except for you should only see the message saying loading up large video once instead of twice.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-proxy-pattern?u=76281980&t=101)** If you get stuck, feel free to look back at the previous videos in this chapter, and I'll also be going through the solution in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** playmedia (4), loadvideo (2), gotomovielibrary (2), gotofavoritemovies (2)
> **Code Keywords:** interface (1), implements (1), class, (1), finally, (1), class. (1)
> **Cross-References:** in the next (1)

#### Solution: The Proxy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=5)** Let's have a look at the solution to the proxy pattern exercise.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=9)** So the first thing I'm going to do is I'm going to create a class for my proxy.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=13)** So I'm going to add a new Java class and I'm going to call it MediaPlayerProxy.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=19)** And this class is going to implement the media player interface.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=23)** So I'm going to add implements MediaPlayer. And this class is also going to have a field of type movieMediaPlayer.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=31)** So I'm going to say private MovieMediaPlayer movieMediaPlayer, then I need to override the playMedia method.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=38)** So I'm going to say @Override and then public void playMedia.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=46)** So inside this method I'm going to see if MovieMediaPlayer has been initialized.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=50)** So I'm going to say if movieMediaPlayer = null, and if it is null, then I initialize it.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=57)** So then I can say movieMediaPlayer = new MovieMediaPlayer(); So now it's definitely been initialized.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=63)** So then I can go ahead and say movieMediaPlayer.playMedia(); So now I've got my proxy object and now I need to go back and update the App class.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=72)** So I'm going to go back to app.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=74)** And in here I'm going to create a new field.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=76)** So I'm going to say private static final MediaPlayerProxy = new MediaPlayerProxy(); and then I can use that inside my other methods.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=91)** So inside the goToMovieLibrary method, I'm going to remove this where I say var movieMediaPlayer = new MovieMediaPlayer(); and instead I'm going to say MediaPlayerProxy.playMedia(); and I've forgotten to actually give the field a name, so I'm going to call it mediaPlayerProxy.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=112)** And then in the method, I just need to change that to a lowercase m.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=116)** So that should compile now. And then for the goToFavoriteMovies method, I'm going to remove where it says var movieMediaPlayer = new MovieMediaPlayer(); And instead I'm going to say mediaPlayerProxy.playMedia(); So if I run this.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=134)** So I can see it says loading up large video only once after it says loading movie library, and then when it says playing video and then loading favorite movies, it goes straight to playing video again.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-proxy-pattern?u=76281980&t=146)** So well done if you manage to complete this exercise.

> [!info]- Semantic Content
>
> **Code Identifiers:** moviemediaplayer (7), playmedia (5), mediaplayerproxy (2), gotomovielibrary (1), gotofavoritemovies (1)
> **Code Keywords:** private (2), override (2), var (2), let (1), interface (1)
> **Cross-References:** go back to (1)


### 17. 16. Behavioral Design Patterns

#### What are behavioral design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=0)** Behavioral design patterns are about how objects assign responsibilities between each other.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=5)** They're concerned with how objects are connected, how they communicate with each other, and how responsibilities are assigned between them.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=12)** And they're often to do with complex control flows.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=15)** Like with structural design patterns, there are some behavioral patterns that are focused on classes and some that are focused on objects.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=22)** Class behavioral patterns use inheritance to share behavior between different classes.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=27)** But most of the behavioral patterns I'll be showing you are object patterns.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=31)** Some of these look at how objects can work together to do things that couldn't be done by a single object on its own.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/what-are-behavioral-design-patterns?u=76281980&t=36)** Some other object patterns are more focused on encapsulating behavior in a single object, and then delegating requests to it.


### 18. 17. The Chain of Responsibility Pattern

#### Understand the Chain of Responsibility pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=0)** The aim of the chain of responsibility pattern is to decouple the centre of a request from the receiver of the request.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=6)** Say, for example, you have a logger.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=8)** Sometimes you want the logger to print output to the console, and sometimes you want it to write to a file.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=13)** So when you have some code that logs something, at that point, it needs to know whether to write the log to the console or to a file.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=19)** The chain of responsibility pattern can be used as a way of working out which one to send it to at runtime.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=25)** For example, it could first check if the logger is a type of logger that prints to the console.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=29)** If it is, then it prints the log to the console and that's the end of the chain.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=32)** However, if the answer is no, it could pass it along the chain and check if it's a logger that prints to a file.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=37)** If it is, then it prints the log to the file and that's the end of the chain.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=41)** In this scenario, it's the responsibility of the logger that prints to the console to pass it along the chain to the next possible option.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=48)** One thing to be careful of is making sure you don't accidentally end up stuck in a circle.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=52)** So, for example, if the file logger has a reference to the console logger as the next one to check, you would end up in an endless loop.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=59)** If you have lots of links in the chain, this could accidentally happen quite easily.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=63)** The advantage of using this pattern is that it decouples the center of the request from the receiver.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=68)** For example, the logger doesn't need to know in advance of its writing to the console or a file.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-chain-of-responsibility-pattern?u=76281980&t=73)** One thing to consider is that there's no guarantee that the request is going to be handled. If it reaches the end of the chain and hasn't found an option that fits, then nothing will happen with the request.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **Code Keywords:** pass (2)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### Recognize where to use the Chain of Responsibility pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=0)** In this app, I have a logger that can either print to the console or to a file.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=4)** When you want to log something in the app, you send a logger request which specifies the message you want to log and the type of logger you want to use.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=11)** At the moment, the type of logger in the request is coupled to the object that receives the request.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=16)** So the first class to look at is the LoggerRequest.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=19)** This class has two fields.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=20)** It has a string field called message and then a field called loggerType.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=24)** And both of these fields are set in the constructor.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=27)** And then there are getter methods for both of these fields.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=30)** And the loggerType is actually an enum at the bottom of the class, so a loggerType can either be console or file.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=36)** Next there is the logger itself.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=39)** So this is an abstract class which has a single method called log.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=42)** And that takes a LoggerRequest as an argument.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=45)** Then there are two implementations of this logger class.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=48)** So the first one is the ConsoleLogger.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=51)** This extends logger and overrides the log method, and in this one it prints out the requests message to the console.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=58)** Then there's the FileLogger class.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=60)** So this also extends logger and also overrides the log method.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=65)** And in this one it's slightly more complicated.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=67)** It writes the log message to a log file called log.txt.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=71)** So this just writes the message to the file plus a new line and then closes the right connection.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=77)** Then to show how it works, I've got a class called App which has a main method.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=81)** And in here I'm creating a message called "Hello World", which is the thing that I want to log.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=86)** Then I'm creating a logger request.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=88)** So I'm passing in the message and then the logger type, which at the moment I've got as console.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=93)** Then I'm creating a new logger object.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=95)** So I'm saying logger = new ConsoleLogger(); and then I'm setting logger.log and passing in the request.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=102)** So if I run the app, I can see that at the moment, it prints out my message Hello World to the console because it's using the ConsoleLogger.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=111)** So now let's say I want to change this to print it to the log.txt file instead.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=115)** So in the request, I need to change the type from console to file.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=120)** And then I also need to change the logger from a console logger to a file logger.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=126)** So the fact that I'm having to update the logger, which is the thing that receives the request, is a sign that these two things are tightly coupled.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=132)** So if I run the app again, this time it doesn't print anything to the console, but if I look inside the log.txt file, I can see it's put my message inside that file instead.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=144)** So the functionality does work as I expect it to, but I want to decouple the logging request from the concrete logger type.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-chain-of-responsibility-pattern?u=76281980&t=151)** And one good way to do that is to use the chain of responsibility pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), extends (2), enum (1), class, (1), abstract (1)
> **File Paths:** log.txt (3)
> **Code Identifiers:** loggertype (3)
> **Definitions:** is an  (1), is a  (1)

#### Implement a successor chain
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=0)** This is a logging app that would benefit from using the chain of responsibility pattern to decouple the sender of the logging request from the concrete logger that's going to handle it.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=8)** I'm going to create a chain of loggers to handle this scenario.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=12)** The first thing to change is in the logger class.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=14)** So I'm going to go to logger.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=16)** And I'm going to make sure it has a reference to the next logger in the chain.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=20)** So I'm going to create a new field and say public final logger and I'll call it nextLogger.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=28)** Then I'm going to create a constructor to set this field.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=31)** So I'm going to say public logger and then pass in a logger called nextLogger.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=38)** Then inside the constructor I'm going to say this.nextLogger = nextLogger.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=45)** Now I need to update the concrete implementations of this class.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=49)** So I'm going to go to ConsoleLogger.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=51)** And now I need to add a constructor in here as well.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=53)** So I'm going to say public ConsoleLogger and pass in a logger called nextLogger.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=60)** And then inside this constructor I'm going to say super and pass in nextLogger.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=66)** So that's just going to call the constructor from the logger class.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=70)** I also need to update the log method.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=72)** So inside here, the first thing I'm going to do is check the type of the logger in the request.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=78)** If the type is console, I'll handle it here, and if not, then I'll pass it along the chain.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=83)** So I'm going to say if request.getLoggerType == LoggerType.CONSPLE then I'm going to go ahead and print the message to the console.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=96)** So I'm going to cut where it says System.out.println and I'm going to paste that inside the if statement.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=103)** And if it's not the right type, then I'll try and pass it along the chain.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=107)** So next I'm going to check if next logger is null.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=109)** So I'm going to say else if nextLogger != null, then I pass it along and I say nextLogger.log and pass in the request.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=122)** If the next logger is null, then that's the end of the chain and nothing happens.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=127)** Now I need to do the same for FileLogger.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=129)** So I'm going to open up FileLogger.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=132)** And again I need to add a constructor.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=134)** So I'm going to say public file logger and pass in a logger object called nextLogger.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=140)** And again inside this constructor I'm going to say super and pass in nextLogger.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=146)** And I'm going to update the log method here as well.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=149)** So inside the log method, at the top, I'm going to say if request.getLoggerType = LoggerType.file.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=161)** Then I handle it as I would before.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=164)** So I'm going to cut and paste this try and catch block inside the if statement.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=170)** And then I'm going to check if nextLogger is null.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=173)** So I'm going to say else if nextLogger != null, and then I use the nextLogger to log.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=181)** So I'm going to say nextLogger.log and pass in the request.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=187)** Now I need to update the app class, so I'm going to go back to app.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=191)** And I'm going to introduce a new method to build the chain in the order that I want it.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=197)** So I'm going to create a new private method, and I'm going to make it static so that I can call it inside the main method.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=204)** And it's going to return a logger.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=206)** And I'm going to call it buildChain.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=209)** I'm going to start at the end of the chain and work my way backwards.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=213)** So I want the file logger to be the last one that I check.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=215)** So first I'm going to say var fileLogger = new FileLogger.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=222)** And this is the end of the chain.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=223)** So I'm just going to pass a null for the next logger.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=226)** Then I'm going to create a ConsoleLogger.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=229)** So I'm going to say var consoleLogger = new ConsoleLogger.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=235)** And this time I'm going to pass in the file logger as the next logger to check.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=240)** Then I'm going to return ConsoleLogger.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=243)** And in my main method, where I'm creating the logger variable, I'm going to get rid of where it says new ConsoleLogger and instead I'm going to call my buildChain method.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=252)** So that means that I no longer have to hardcode the type of the logger, which means it's now nicely decoupled from the request.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=259)** And if I run the app, at the moment it prints to the console because I'm sending a console request.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=266)** But if I change this to file and rerun it, this time it doesn't print to the console, but it does print to the log.txt file.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-successor-chain?u=76281980&t=280)** So this is how the chain of responsibility pattern can be used to decouple the sender and receiver of a request, and adapts to the correct type dynamically.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (12), public (4), class. (3), super (2), var (2)
> **Code Identifiers:** nextlogger (14), getloggertype (2), buildchain (2), filelogger (1), consolelogger (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** log.txt (1)
> **Env Vars:** consple (1)

#### Challenge: The Chain of Responsibility pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=5)** In this exercise, you'll use the Chain of Responsibility pattern to improve an app that dispenses money from an ATM in different currencies, depending on what's requested.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=14)** So there's a class called withdrawal request, which has a constructor which takes an amount, and a currency.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=20)** Currency is an enum inside the class, which can either be a U.S. dollar, so USD or Euro, which is EUR.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=27)** Then there's an abstract class called ATM.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=30)** This has a method called dispense, which takes a withdrawal request as an argument.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=36)** And then there are two implementations of this U.S.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=39)** dollar ATM and Euro ATM.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=40)** So U.S. dollar ATM overrides the dispense method and prints out a message saying dispensing and then the amount in dollars.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=47)** And then EU ATM is very similar, but it prints out a message saying dispensing and then the amount in euros.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=54)** Finally, there's the app class.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=57)** So this has a main method.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=58)** And inside the main method, there's a withdrawal request for an amount of 20 and that's in U.S. dollars.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=65)** Then it's creating a U.S. dollar ATM, and then it's saying atm.dispense and passing in the request.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=72)** So if I run this, I can see that it says dispensing 20 U.S. dollars. At the moment, the type of the currency in the request is tightly coupled to the concrete type of the ATM that's used to handle the request.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=84)** So in this challenge, you should refactor this code so that it uses the chain of responsibility pattern to dynamically choose the correct type of ATM.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=91)** You can make the chain in any order that you want, and you can also have a go at changing the order to see how that would look if you like.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=98)** There are quite a few steps to remember in this one, so you might need to look back at the example in the previous video.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-chain-of-responsibility-pattern?u=76281980&t=103)** And I'll also be going through the solution to this in the next video as well.

> [!info]- Semantic Content
>
> **Env Vars:** atm (9), usd (1), eur (1)
> **Code Keywords:** enum (1), class, (1), abstract (1), finally, (1), class. (1)
> **Cross-References:** previous video (1), next video (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)

#### Solution: The Chain of Responsibility pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=5)** The first thing I need to do to implement the chain of responsibility pattern for this exercise is I need to update the ATM class.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=12)** So I'm going to open up ATM, and I'm going to make sure it has a reference to the next ATM in the chain.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=17)** So I'm going to create a new field and say public ATM and I'm going to call it nextATM.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=25)** Then I'm going to create a constructor.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=28)** So I'm going to say public ATM and then I'm going to pass in an ATM called nextATM.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=34)** And inside the constructor I'm going to say this.nextATM = nextATM.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=41)** Next, I'm going to update the EuroATM class.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=44)** So I'm going to go to EuroATM and I need to add a constructor here.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=48)** So I'm going to say public EuroATM and pass in an ATM called nextATM.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=55)** And then inside the constructor I'm going to say super and pass in nextATM.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=62)** And now I need to update the dispense method.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=67)** So first of all I'm going to check the currency type.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=70)** So at the top of the method I'm going to say if request.getCurrency = currency.EUR, then in that case, I have my System.out.println.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=83)** So I'm going to cut and paste that inside the if statement.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=87)** Then I'm going to say else if nextATM != null, then I can say nextATM.dispense and pass in the request.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=99)** Now we need to do the same for the USDollarATM.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=102)** So I'm going to go to the USDollarATM and add a constructor.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=105)** So I'm going to say public USDollarATM and pass in an ATM called nextATM.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=113)** And inside the constructor I'm going to say super and pass in nextATM.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=118)** Then I'm going to update the dispense method again.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=122)** So inside here at the top, I'm going to say if request.getCurrency = Currency.USD.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=132)** Then I have my System.out.println.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=137)** And if not, I'm going to say else if nextATM != null, and in that case, I can say nextATM.dispense and pass in the request.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=149)** Finally, I need to update the app class.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=152)** So I'm going to go back to app, and I'm going to create a new method to create my chain of ATMs.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=158)** So I'm going to say private static ATM and I'll call this buildChain.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=166)** So I want to check for US dollars first and then euros.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=169)** So I'm going to start at the end of the chain and create a euroATM.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=173)** So I'm going to say var euroATM = new euroATM.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=179)** And I'm going to pass in now because it's the end of the chain.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=183)** Then I'm going to create a US dollar ATM.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=186)** So I'm going to say var USD ATM or USDollarATM = new USDollarATM.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=194)** And this time I'm going to pass in the euroATM to the constructor.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=198)** Then I'm going to return my USDollarATM and I'm going to make that variable begin with a lowercase u.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=206)** Now in my main method where I have var ATM, I'm going to get rid of new USDollarATM and replace that with my call to buildChain.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=214)** So now if I run the app, I can see that it prints out dispensing 20 USD and in the request, if I change USD to EUR and run it again, this time I can see it says dispensing 20 euros.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=230)** So very well done if you manage to complete this challenge.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-chain-of-responsibility-pattern?u=76281980&t=233)** It was a particularly tricky one, as there are quite a few different elements that you do need to remember to implement this pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), public (4), class. (3), var (3), super (2)
> **Code Identifiers:** nextatm (12), euroatm (4), getcurrency (2), buildchain (2)
> **Env Vars:** atm (12), usd (4), eur (2)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Best Practices:** remember to (1)


### 19. 18. The Command Pattern

#### Understand the Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=0)** Sometimes when writing software, you need to issue a request, but you might not know in advance what's being requested or what's receiving the request.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=8)** So let's think about a real-world example.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=10)** Imagine someone has written an app for buying and selling things online.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=14)** The app could be used by lots of different companies selling different things.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=18)** One example might be a restaurant using it to allow customers to order food online.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=22)** Another company might use it for selling clothes online.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=25)** In both cases, the user journey is pretty much the same.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=28)** The customer is browsing online and they decide they want to order something.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=32)** So they input their order into the app and that information gets passed from the app to the company.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=37)** But when the app is being written, we can't say explicitly what kind of thing the customer is going to order.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=42)** It might be a pizza or it might be a pair of shoes.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=45)** What exactly they're ordering is down to the different companies using the app.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=49)** We also don't know what will happen after the order is sent, so there might be an immediate response saying the order is on its way or there might be some checks to see if it's in stock or there might be a reply saying that the order will arrive in a month.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=61)** The command pattern is a way of making requests when you don't know anything about what exactly is being requested or what exactly is receiving it.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=68)** It does this by encapsulating the request inside an object.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=71)** This might seem a bit counterintuitive when you're used to object-oriented design.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=75)** Normally, a command is something you would put in a method, not a class.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=79)** But this is a useful way of decoupling the objects that invokes the command from the objects that know how to handle it and perform that command.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=86)** So the command pattern is especially useful for commands that you might want to perform later on.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-command-pattern?u=76281980&t=91)** For example, they're sometimes used to support undo and redo operations and things like queuing or logging requests to be performed at different times.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), class. (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)

#### Implement the Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=0)** This is an app for adding items to a basket in an online store.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=4)** So at the moment, there are only two classes; Item and OnlineStore.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=8)** So this is the Item class and it has a field called id which is passed into the constructor.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=13)** Then it has two methods; addToBasket and removeFromBasket.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=17)** So in the addToBasket method, it just prints out a message saying, "Item id added to basket," and removeFromBasket prints out a message saying, "Item id removed from basket."
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=27)** Then in the OnlineStore class, I have a main method, and inside the main method, I'm creating three items; item1, item2, and item3.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=36)** And then I'm adding all three items to the basket.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=39)** And then I'm removing item2 from the baskets.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=41)** So if I run this, I can see it says item1, item2, and item3 were all added to the basket, and then item2 was removed from the basket.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=51)** But let's say that I don't want my OnlineStore class to know anything about the actions.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=56)** At the moment, the OnlineStore is tightly coupled to how items are added to or removed from the baskets.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=62)** So instead of calling them methods directly, I'm going to create classes for these actions.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=67)** So the first thing I'm going to do is I'm going to create a new Java class, and I'm going to call it ItemOperation.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=76)** And this class is going to be an interface with a single void method called execute.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=83)** Then I'm going to create a class for adding items to the basket and another one for removing them.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=89)** So first, I'm going to create another new class called AddItemToBasketOperation.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=98)** And this class is going to implement the ItemOperation interface.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=102)** So I'm going to add implements ItemOperation.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=105)** This class is going to have a field of type item.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=108)** So I'm going to say private final Item item, and this is going to be set inside a constructor.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=115)** So I'm going to add a constructor and say public AddItemToBasketOperation and pass in an item objects.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=122)** Then inside the constructor, I can say this.item equals item.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=129)** Now I need to override the execute method.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=131)** So I'm going to say @Override, and I'm going to say public void execute.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=141)** And then inside here, I'm going to call the addToBasket method on the item.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=145)** So I'm going to say item.addToBasket.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=149)** So now I've encapsulated everything I need to do to add an item to a basket in its own class.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=154)** So I'll do the same for removing an item.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=156)** So I'm going to create another new class called RemoveItemFromBasketOperation.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=165)** And again, this class is going to implement the ItemOperation interface.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=172)** So it's going to have a field of type item.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=174)** So I'm going to say private final Item item.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=180)** And that's going to be set in a constructor.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=182)** So I'm going to say public RemoveItemFromBasketOperation, pass in an item, and inside the constructor, I'm going to say this.item equals item.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=194)** And then I need to override the execute method again.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=197)** So I'm going to say @Override and then public void execute.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=204)** And this time, I'm going to say items.removeFromBasket.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=209)** Next, I need a class to execute these commands.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=212)** So I'm going to create one more class, and I'm going to call this one ItemOperationExecutor.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=220)** This class is going to have a single method.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=223)** So I'm going to say public void, and I'm going to call this doOperation.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=228)** And it's going to take an item operation as an argument to that method.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=233)** Then inside this method, I'm just going to say itemOperation.execute.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=240)** So that gives me another level of abstraction between the store and the item operations.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=246)** So now I can use this executor in my OnlineStore class.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=249)** So I'm going to go back to OnlineStore, and after I've created the items, I'm going to create a new variable called ItemOperationExecutor.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=260)** And then I can use that to perform the operations.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=263)** So first of all, I want to add item1 to the basket.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=266)** So I'm going to say itemOperationExecutor.doOperation, and then I'm going to pass in a new AddItemToBasketOperation.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=277)** And then pass in item1 to that constructor.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=281)** Then I can do the same for item2.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=283)** So I'm going to copy that line and paste it and instead pass in item2.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=288)** Then I'm going to paste it again, and this time, I'm going to pass in item3.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=293)** So now I can remove the lines where I'm saying item1.addToBasket and the same for item2 and item3.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=299)** And then to remove an item, I'm going to say itemOperationExecutor.doOperation and then I'm going to pass in a new RemoveItemFromBasketOperation and I'm going to pass in item2.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=314)** And then I can remove that last line where it says "item2.removeFromBasket."
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=319)** So if I run this again, I can see I get the same output as before, so items one, two, and three are added to the basket and then item2 is removed from the basket.
>
> **[5:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-command-pattern?u=76281980&t=330)** So now I've used the command pattern to decouple the online store from the internal workings of adding and removing items from a basket.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), public (5), override (4), class, (3), interface (3)
> **Code Identifiers:** addtobasket (5), removefrombasket (4), dooperation (3), itemoperationexecutor (2), itemoperation (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)

#### Use the Command pattern to delay operations
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=0)** In this app, I've used the command pattern to decouple the store from the way items are added or removed from a basket.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=6)** So I now have separate command classes for those two things, and I have a class called ItemOperationExecutor, which is used to execute them.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=14)** But let's say that I don't want to perform the commands immediately.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=17)** I want to wait until the customer goes to the checkout and then update the items in the baskets.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=22)** The command pattern actually makes this quite easy to do.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=24)** So I'm going to go to the ItemOperationExecutor class and I'm going to add a list for storing the commands in as a new field.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=32)** So at the top, I'm going to say list, and it's going to contain ItemOperation objects.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=39)** So I'm going to call it itemOperations, then I'm going to say equals new ArrayList.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=44)** Then in the doOperation method, instead of executing the operation, I'm just going to add it to the list.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=49)** So I'm going to remove where it says "itemOperation.execute," and I'm going to replace that with itemOperations.add and pass in the itemOperation.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=62)** And I'm also going to rename this method to make it a bit clearer that it's not doing the operation, it's saving it for later.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=68)** So I'm going to right-click on it and go to Rename Symbol and I'm going to call it queueOperation, instead.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=76)** Then I'm going to add a new method for calling all of the operations in the list.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=80)** So I'm going to have a new public method and it's going to have a void return type and I'm going to call it checkout.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=88)** Then inside this method, I'm going to iterate over all the operations in the list and execute each one.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=93)** So I'm going to say itemOperations.forEach, and then I'm going to use a method reference.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=100)** So I'm going to say ItemOperation, two colons, and then execute.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=105)** Then I'm going to clear the list.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=107)** So I'm going to say itemOperations.clear.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=110)** So now I'm going to go back to my OnlineStore class.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=114)** And if I run that up again now, nothing happens because I'm only queuing the operations.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=120)** I'm not actually executing them.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=122)** So now I'm going to add another call at the end of this main method to the checkout method.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=127)** So I'm going to say itemOperationExecutor.checkout.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=133)** And if I run that up again, when I call the checkout method, it then executes all of the operations. So it adds items one, two, and three to the basket, and then it removes item2. So some extra functionality can be added to the Executor class.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/use-the-command-pattern-to-delay-operations?u=76281980&t=148)** Sometimes commands are added to a list or a stack or some other type of collection so that there can be undone later if needed.

> [!info]- Semantic Content
>
> **Code Identifiers:** itemoperations (4), itemoperation (2), dooperation (1), queueoperation (1), foreach (1)
> **Code Keywords:** class. (2), let (1), pass (1), public (1)
> **UI Navigation:** go to (2), right-click (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### Challenge: The Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=5)** In this exercise, you'll be implementing the command pattern in an app for turning a light on and off.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=10)** So at the moment there's a class called Light and there's a Boolean field called isOn, which is set to false when you first create a light object.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=17)** Then there's a method called turnOnLight which sets isOn to true and turnOffLight, which sets isOn to false.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=23)** And then there's a method called isOn, which prints out a sentence saying light is either on or off, depending on the value of the Boolean.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=31)** Then there's a class called App, and this has a main method in it.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=34)** So we're creating a new light object in here which is initially off.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=38)** Then we're seeing if it's off, turning the light on, seeing if it's on or off again, turning the light off, and then again printing out if it's on or off.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=46)** So if I run this, we can see that initially the light is off, then it gets turned on and then it gets turned off again.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=54)** So you should implement the command pattern in this app so that you have a command for turning the lights on, and a command for turning the lights off.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=60)** After you've implemented the pattern, you should run the app again and check that you get the same output as before.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=66)** So you should use the command pattern to make sure the App class isn't coupled to the methods for turning the lights on or off.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=71)** Instead, it should use command classes to do this.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-command-pattern?u=76281980&t=75)** So good luck and I'll be walking through the solution in my next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** ison (4), turnonlight (1), turnofflight (1)
> **Code Keywords:** this, (1), this. (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)

#### Solution: The Command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=5)** So this is my solution to the command pattern exercise.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=8)** The first thing I'm going to do is create an interface for executing commands.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=12)** So I'm going to create a new Java class and I'm going to call it LightCommand.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=20)** So I'm going to change class to interface.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=23)** And in here, I'm going to define a single void method called execute.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=27)** Then I'm going to create concrete implementations of this for turning the lights on and off.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=32)** So I'll start with turning the lights on.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=34)** So I'm going to create another new class and I'm going to call this one TurnOnLightCommand.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=42)** And this class is going to implement the LightCommand interface.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=48)** So first of all, this is going to have a field of type light.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=51)** So I'm going to say private final Light light.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=56)** And this is going to be set in a constructor.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=58)** So I'm going to say public TurnOnLightCommand and pass in a light object.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=65)** And inside the constructor, I'm going to say this.light equals light.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=73)** And now I need to override the execute method.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=75)** So I'm going to say @Override, then I'm going to say public void execute.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=81)** And in here, I'm going to call the turnOnLight method on the light.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=84)** So I'm going to say light.turnOnLight.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=88)** So now I'm going to do the same for turning off the lights.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=91)** So I'm going to create another new Java class, and I'm going to call this one TurnOffLightCommand.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=100)** So this is also going to implement the LightCommand interface.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=104)** So I'm going to add implements LightCommand.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=107)** And again, this is going to have a private final field of type Light, which I'll call light.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=112)** And again, this is going to be set in the constructor.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=115)** So I'm going to say public TurnOffLightCommand, pass in a light object.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=121)** And in the constructor, I'm going to say this.light equals light.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=127)** And again, I'm going to override the execute method.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=129)** So I'm going to say @Override and then public void execute.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=135)** And this time in the method, I'm going to say light.turnOffLight.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=139)** Now, I need a class for executing the commands.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=142)** So I'm going to create one more class, and I'm going to call this one LightCommandExecutor.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=150)** And this is going to have a method called execute as well.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=153)** So I'm going to say public void execute, and I'm going to pass in a LightCommand.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=159)** Then inside the method, I'm just going to say lightCommand.execute.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=164)** And finally, I need to update the App class.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=166)** So I'm going to go back to App.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=169)** And under the first time I'm saying light.isOn, I'm going to make a new LightCommandExecutor variable.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=175)** So I'm going to say var lightCommandExecutor equals new LightCommandExecutor.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=183)** Then instead of saying light.turnOnLight, I'm going to say lightCommandExecutor.execute, and then I'm going to pass in a new TurnOnLightCommand.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=195)** And into the constructor for TurnOnLightCommand, I'm going to pass in my light object.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=199)** Then I'm going to copy this line and paste it over the light.TurnOffLight line.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=204)** But instead of passing in a new TurnOnLightCommand, in this one, I'm going to pass in a new TurnOffLightCommand.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=211)** So if I run that up again, I can see I still get the same output as before.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=216)** So the light is off, then it's turned on, and then it's turned off again.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-command-pattern?u=76281980&t=220)** So well done if you manage to complete this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), public (5), interface (4), override (4), private (2)
> **Code Identifiers:** turnonlight (3), lightcommandexecutor (2), turnofflight (1), lightcommand (1), ison (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)


### 20. 19. The Interpreter Pattern

#### Understand the Interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=0)** Imagine a scenario where two people are trying to communicate, but they don't speak the same language.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=5)** A translator or an interpreter can join them and translates everything they say to each other.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=9)** The interpreter pattern is a way of translating one language into another.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=13)** So if you think of Google Translate, for example, it takes the input language and interpret it into a new language.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=18)** There are many different and varied scenarios where the interpreter pattern might be used.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=23)** It could be used to write custom regular expressions or even write your own compiler.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=27)** Or you could use it to translate human languages or parse SQL or even create a simple calculator.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=33)** The idea of the interpreter pattern in Java is that if the same problem keeps coming up, then you can express that problem as a sentence and interpret it.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=41)** The interpreter defines a grammar for the language and then uses an abstract syntax tree to interpret it.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=46)** This is quite a complicated concept, so let's see what it actually looks like.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=50)** The first component in the interpreter pattern is the context.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=54)** If you are translating a sentence into another language, the context would be the sentence.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=58)** So the context is often just a string.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=61)** The next part is an AbstractExpression class.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=64)** This is an interface or an abstract class that defines a method used for interpreting the context.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=69)** Each time the interpret method is called, the context is changed in some way.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=73)** There are two different possible implementations of the AbstractExpression; terminal and non-terminal.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=79)** A non-terminal expression calls the interpret method, which alters the context, and then it passes the context on to another expression until it reaches the terminal expression.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=88)** A terminal expression is the last time the interpret method gets called.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=92)** So, for example, if you were translating a language, the context could be "Hello world."
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=97)** The non-terminal operations translate each word into the correct word in the new language.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=102)** And when it gets to some punctuation, like a period or exclamation mark, it returns that and stops.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=108)** This structure makes it easy to extend and implement the grammar.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=111)** However, the interpreter pattern works best when the grammar being interpreted is simple.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-interpreter-pattern?u=76281980&t=116)** Complex grammars can be difficult to maintain because you would need a new expression class for every new rule you introduce.

> [!info]- Semantic Content
>
> **Tools:** terminal (6)
> **Code Keywords:** abstract (2), let (1), class. (1), interface (1)
> **Definitions:** is an  (2), is a  (1), is called (1)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** sql (1)
> **Cross-References:** coming up (1)

#### Creating an interpreter for a language
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=0)** One of the possible uses of the interpreter pattern is interpreting code itself.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=4)** You might have come across features in your IDE that show you hints when there are things in your code that it thinks could be improved.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=10)** So one example is the organized input feature, where your IDE will rearrange your import statements in alphabetical order, and it will remove any unused ones.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=19)** In this example, I'm going to implement a new feature similar to those used by your IDE to alter variable names so that they meet Java naming conventions.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=28)** And I'm going to use the interpreter pattern.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=30)** So the first thing I need to do is create an interface to define and interpret method.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=35)** So I'm going to create a new Java class and I'm going to call it Expression.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=41)** I'm going to change class to interface.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=45)** And I'm going to define a method which is going to return a string, and I'll call the method interpret.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=53)** And it's going to take another string as an argument, which I'm going to call context.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=59)** So the context is going to be the variable name I'm checking, which will be a string.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=63)** And it's going to return the interpreted version of it, which will also be a string.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=68)** Now, I'm going to implement this for my first rule, which is that there should be no whitespace in the variable name.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=73)** So I'm going to create another new Java class, and I'm going to call this one NoWhitespace.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=80)** And this class is going to implement the Expression interface.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=83)** So I'm going to add implements Expression.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=88)** And I'm going to override the interpret method.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=91)** So I'm going to say @Override, then I'm going to say public string interpret, and pass in a string called context.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=101)** This is going to be a terminal operation, which means it will be the last check I do on the variable.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=107)** So I'm just going to return the context, but with whitespace replaced with an empty string.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=111)** So I'm going to say return context.replaceAll.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=117)** And for the first argument, I'm going to put a string with a whitespace.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=122)** And the second argument is the replacement, so I'm just going to put an empty string.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=127)** Next, I'm going to make sure that the variable name doesn't begin with a capital letter.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=132)** So I'm going to create another new class, and I'm going to call this one FirstLetterShouldNotBeLowerCase.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=142)** And again, this is going to implement the Expression interface.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=146)** So I'm going to add implements Expression.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=148)** Then I'm going to override the interpret method again.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=151)** So I'm going to say @Override and public String interpret.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=158)** And I'm going to pass in a string called context.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=163)** So this time I'm going to make sure that the first letter of the variable is lowercase.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=167)** So I'm going to say context equals context.substring and pass in zero for the first character and one for the second character, then I'm going to say .toLowerCase.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=183)** Then I need to add to the rest of the string.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=185)** So I'm going to say + context.substring and pass in one.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=192)** So this basically says take the first letter of the string, make sure it's lowercase, and then append the rest of the string to that.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=199)** However, this time I'm not just going to return the context directly.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=203)** After checking the first letter, I wanted to check for whitespace.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=206)** So in this class, I'm going to add a new field for NoWhitespace.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=209)** So I'm going to say private final NoWhitespace noWhitespace equals new NoWhitespace.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=219)** Then in the interpret method, I'm going to say return noWhitespace.interpret and pass in the new context.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=228)** Now, I'm going to add one more rule to the chain, which is that the variable name should not start with an underscore character.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=234)** So I'm going to create another new class and I'm going to call it FirstLetterShouldNotBeUnderscore.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=246)** So again, this is going to implement the Expression interface.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=249)** And this time this class is going to have a field of type FirstLetterShouldNotBeLowercase.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=254)** So I'm going to say private final FirstLetterShouldNotBeLowercase firstLetterShouldNotBeLowercase equals new FirstLetterShouldNotBeLowercase.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=265)** And then I need to override the interpret method again.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=268)** So I'm going to say @Override, and then public String interpret.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=276)** And I'm going to pass in a string called context.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=280)** Then first, I'm going to make sure that the context doesn't start with an underscore.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=285)** So I'm going to say if context.startsWith and pass in underscore.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=293)** Then I'm going to say context equals context.substring, one.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=299)** So that's essentially removing the first character if it's an underscore. Then I'm going to say return firstLetterShouldNotBeLowercase.interpret and pass in the new context.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=311)** So now I've created an interpreter for the language.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=314)** As you can see, it would be quite easy to add new rules to the chain, but if there were hundreds of different rules, this would get quite complex.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=321)** And so I just need to make sure I've spoke return rights in that last line.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=325)** So now I have an interpreter for the language.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=329)** And now the next step is to actually interpret some variables.
>
> **[5:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/creating-an-interpreter-for-a-language?u=76281980&t=332)** So I'll be doing that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), override (6), interface (5), class, (3), public (3)
> **Code Identifiers:** nowhitespace (2), firstlettershouldnotbelowercase (2), replaceall (1), tolowercase (1), startswith (1)
> **CLI Commands:** make (5)
> **Env Vars:** ide (3)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Analogies:** similar to (1)

#### Interpreting a variable
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=0)** Now I've got an interpreter that will apply some rules to variable names to make sure they follow Java naming conventions.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=6)** So I just need a client to try it out now.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=8)** So I'm going to create a new Java class.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=12)** And I'm going to call it up.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=14)** And I'm going to create a main method in here.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=18)** So to test out my interpreter, I'm going to create a variable name that deliberately breaks all of the rules I've implemented.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=24)** So I'm going to say var context =, and my variable name is going to start with an underscore and then a capital M and then have a white space and then the variable.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=38)** Now I'm going to create a variable of type.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=40)** First letter should not be underscore as this is the first check in the chain.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=44)** So I'm going to say var firstLetterShouldNotBeUnderscore = new FirstLetterShouldNotBeUnderscore.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=55)** Then I'm going to use that to interpret my variable name.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=58)** So I'm going to say var result = firstLetterShouldNotBeUnderscore .interpret and pass in my context, which is my variable name.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=71)** And then I'm going to print it out.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=73)** So I'm going to say System.out.println and pass in the result.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=78)** So if I run this, I can see that it's applied all three of my rules, so it doesn't begin with an underscore, and then it doesn't begin with the capital M, it's a lowercase m and there's no whitespace in it.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/interpreting-a-variable?u=76281980&t=90)** So that's a full implementation of the interpreter pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** var (3), pass (2), class. (1), type. (1), this, (1)
> **Code Identifiers:** firstlettershouldnotbeunderscore (2)
> **CLI Commands:** make (1)

#### Challenge: The Interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=5)** In this exercise, you'll be using the interpreter pattern to make sure that the sentence follows some grammar rules.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=11)** So at the moment, there's a class called App which has a main method.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=14)** And in here, there's a context which just says "hello world," and then it prints out the context.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=19)** So if I run this, it just prints out the phrase "hello world."
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=23)** The aim of this exercise is to implement the interpreter pattern so that the sentence begins with the capital letter and ends with a period.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=30)** There's already an interface here called Expression, which defines a method called interpret.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=37)** So you should create two implementations of this. One to check that the string starts with a capital letter, and one to check that it ends with a period.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=44)** You should then use your interpreter to change the "hello world" sentence in the App class.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=49)** It doesn't matter what order you do the checks in in your implementation, but you should be able to print out your updated context and it should say "Hello world." with a capital H at the beginning, and it should have a period at the end.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=60)** So good luck.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-interpreter-pattern?u=76281980&t=61)** I hope you enjoy it, and I'll go through the solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), interface (1), this. (1), class. (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)

#### Solution: The Interpreter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=5)** This is how I'd approach the interpreter pattern exercise.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=8)** The first thing I need to do is implement the Expression interface for the two rules.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=12)** So I'll start with the rules that the first letter should be a capital.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=16)** So I'm going to create a new Java class, and I'm going to call it FirstLetterShouldBeACapital.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=25)** And this class is going to implement the Expression interface.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=29)** So I'm going to add implements Expression.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=32)** Then I need to override the interpret method.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=35)** So I'm going to say @Override and then public String interpret.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=43)** And I'm going to pass in a string called context.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=48)** Then first of all, I'm going to get the first letter of the string.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=51)** So I'm going to say var firstLetter equals context.substring and then pass in zero and one.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=62)** Then I'm going to say return firstLetter.toUpperCase, then I'm going to append the rest of the string.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=71)** So I'm going to say + context.substring and pass in one.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=77)** So that makes sure that the first letter is a capital.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=80)** And you might have done this slightly differently, which is totally fine as long as it works.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=84)** So now I'll do the rule that it should end with a period.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=87)** So I'm going to create another new class, and I'm going to call this one SentenceShouldEndWithAPeriod.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=98)** And again, this class is going to implement the Expression interface.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=103)** So I'm adding implements Expression.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=106)** And first of all in this class, I'm going to create a field of type FirstLetterShouldBeACapital.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=111)** So I'm going to say private final FirstLetterShouldBeACapital firstLetterShouldBeACapital equals new FirstLetterShouldBeACapital.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=122)** Then I'm going to override the interpret method.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=125)** So I'm going to say @Override and then public String interpret and pass in a string called context.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=134)** Then I'm going to check the last letter of the string and see if it's a period.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=139)** So I'm going to say if not context.endsWith and then pass in a period.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=146)** Then in that case, I'm going to say context + equals period.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=155)** And again, you might have done this slightly differently, which again, is totally fine.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=160)** And then I'm going to say return firstLetterShouldBeACapital.interpret and pass in my new context.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=171)** And I just need to fix a spelling mistake in the name "FirstLetterShouldBeACapital."
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=177)** Now, I can try it out in the App class.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=179)** So I'm going to go to the App class.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=182)** And at the bottom of the main method, I'm going to say var sentenceShouldEndWithAPeriod equals new SentenceShouldEndWithAPeriod.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=193)** Then I'm going to say sentenceShouldEndWithAPeriod.interpret and pass in the context.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=201)** And I'm going to assign that to a variable.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=203)** So I'm going to say var results equals at the front.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=206)** Then I'm going to print that out.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=208)** So I'm going to say System.out.println and pass in result.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=212)** So if I run this, I can see that after it's been interpreted, the string says "Hello world." with a capital H and it ends with a period.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=221)** So that's how I'd implement this pattern.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-interpreter-pattern?u=76281980&t=223)** And well done if you managed to do that too.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), override (4), interface (3), class, (3), var (3)
> **Code Identifiers:** firstletter (2), firstlettershouldbeacapital (2), sentenceshouldendwithaperiod (2), touppercase (1), endswith (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 21. 20. The Iterator Pattern

#### Understand the Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=0)** You've probably used the iterator pattern in Java quite a lot.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=3)** In fact, maybe even more than you realize.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=5)** If you've ever used collections, which you probably have is likely you've used the iterator pattern extensively.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=10)** This for-each loop is commonly used in Java to iterate over a collection of objects, and under the hood is actually using the iterator pattern.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=18)** The Collection interface implements another interface called Iterable, which is what the for each loop is using.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=24)** One of the benefits of the iterator pattern that's shown in this example is that it doesn't matter what type of collection the sentence object is, it could be an ArrayList or a HashSet or a LinkedBlockingQueue or whatever, as long as it's something that implements the collection interface, the for-each loop works the same on all of them, and it's irrelevant what the underlying structure looks like.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=43)** So say I have a list or collection like this list of countries here, for example. I might want to traverse this list and access the items in it for some app that I'm making, and there might be different ways I want to traverse it.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=54)** For example, I might want to skip all of the countries in Europe or all of the countries with a certain population size and so on.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=61)** I could add a load of methods to the List class to sort through the list in different ways, but I don't want to just add them all in there because it will turn into one big class with loads of stuffing.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=71)** I also don't know yet which kinds of iteration I need, so I might end up including loads of unused code.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=76)** So this is where the iterator comes in.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=78)** The iterator is a separate object that takes all of the responsibility for moving along the list and accessing the objects inside it.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=85)** It's responsible for keeping track of which elements have already been traversed.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=90)** So to summarize, the iterator pattern provides a way to access the items in a list or collection of some type without exposing the underlying structure.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=97)** In Java, there are interfaces called Iterable and Iterator which do a lot of the heavy lifting for you.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-iterator-pattern?u=76281980&t=103)** But it's also important to know how it works because you might want to write your own custom iterators, and it will help you to understand how the iterators you use day-to-day work under the hood.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), implements (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### Create an Iterable
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=0)** In this example, I have an app that keeps track of items sold by a stationary store.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=4)** So first of all, I have a class called Item, which has fields for the name and the quantity.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=9)** These two fields are both sets by arguments passed into the constructor.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=12)** And then there are getter methods for each field.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=14)** So there's one called getName and one called getQuantity.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=17)** Then I have an App class which has a main method in it, and in the main method I'm creating three items.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=23)** So first of all, a pen which has a quantity of 20, then a pencil which has a quantity of zero, and then an eraser which has a quantity of 15.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=32)** I want to be able to iterate over the items and only return the ones that are in stock.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=36)** So the first step is to create an iterable, which is a collection that can be iterated over.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=41)** So I'm going to create a new Java class and I'm going to call it inventory.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=47)** Normally, in iterator pattern, you would create your own interface for iterables and iterators.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=52)** But as Java already has its own for each of these already included in the JDK, I'm going to make use of these pre-made ones.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=59)** So I'm going to add implements iterable, which is a class from the JDK.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=64)** And I'm going to put item in the angle brackets after iterable, because this is going to be a collection of items.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=71)** So because I've implemented the iterable interface, I need to override one of its methods, which is the iterator method.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=78)** So I'm going to add a new method with an @Override annotation and I'm going to say public Iterator, and I'm going to put item in angle brackets again.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=91)** And then the method is called iterator.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=95)** I haven't created my iterator yet, so I'm just going to return null for now and I'm going to come back to this later.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=102)** And I need to make sure that I've imported the iterator class from Java.util.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=107)** Next, this class is going to have an array of item objects as a field.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=111)** So at the top, I'm going to create a new field, and I'm going to say private final item[] items.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=121)** And I'm going to create a constructor where I can pass in an array of items or as many single item objects as I want.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=127)** So I'm going to say public inventory.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=130)** And then I'm going to make use of the var args feature in Java.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=133)** So I'm going to say item... So that will allow me to pass in either an array of items or a single item object or comma-separated item objects.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=144)** Then inside the constructor, I'm going to say this.items = items, and I just need to fix the typo in public.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=153)** And finally, I'm going to add a getter method for the items array.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=157)** So at the bottom, I'm going to say, public items[] getItems() and then inside the method, I'm just going to say return items.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterable?u=76281980&t=168)** So now I have a class that represents the collection I want to iterate over, and the next step is going to be to create the iterator itself.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), interface (2), override (2), pass (2), implements (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** getname (1), getquantity (1), getitems (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** jdk (2)

#### Create an Iterator
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=0)** I want to be able to iterate over my collection of items using the iterator pattern.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=4)** I've already created an iterable, and now I'm going to create a class to do the iteration.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=9)** So I'm going to create a new Java class and I'm going to call it StockIterator.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=15)** And this class is going to implement an interface from the JDK.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=19)** So I'm going to say implements iterator.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=23)** And in angle brackets I'm going to put item.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=26)** Then I need to make sure that I've imported the iterator class.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=30)** So I'm going to add import Java.util to iterator at the top.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=35)** So this class isn't going to compile yet, because there are a couple of methods from the iterator interface that I need to override.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=41)** But before I do that I'm going to add a couple of fields.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=44)** So the first one is going to be a private inventory called inventory.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=51)** And then the second one is going to be a private int called index.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=56)** This is going to be used to keep track of where the iterator is, one that traverses the list.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=61)** And I'm also going to create a constructor.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=63)** So I'm going to say public StockIterator.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=65)** And I'm going to pass in an inventory object.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=69)** Then inside the constructor I'm going to say this.inventory = inventory.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=75)** Then I'm going to set the index to zero.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=77)** So I'm going to say this.index = 0.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=82)** Now I need to implement a couple of methods from the iterator interface.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=86)** So the first one is a method called hasNext.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=88)** And I'm going to put an @Override.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=91)** Then I'm going to say public boolean hasNext().
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=98)** And this method.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=99)** I want to check if the items collection has more objects in it.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=102)** So first I need to get the items.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=104)** So I'm going to say var items equals inventory dot get items.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=111)** Then I'm going to check if the current index is smaller than the length of the array.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=116)** If it is, it means there are more items to iterate over.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=119)** So I'm going to say return index is smaller than items.length.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=127)** Now I'm going to implement another method called the next method.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=130)** So I'm going to say @Override and then public item next.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=137)** First, I need to get the array of items I'm iterating over.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=140)** So first of all I'm going to say var items = inventory.getItems.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=148)** And what I'm going to do now is check that there is a next item using my hasNext method that I've just written.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=154)** So I'm going to say if hasNext, and I'm going to say var item = items.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=163)** And then in the square brackets I'm going to say index++.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=169)** So this will give me the next item in the array.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=172)** Normally at this point, I would just return this item, but in my iterator I only want to return items that are in stock and ignore the others.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=180)** So I'm going to add another if under this and I'm going to say if item.getQuantity is greater than zero, then I will return the item.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=190)** So I'm going to say return item.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=193)** If it's not, then I'm going to skip it by calling the next method again.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=196)** So I'm going to say else and then return and call this next method again.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=203)** Now I just need to handle the scenario where it's the last item in the inventory.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=207)** So if hasNext is false then I need an else block.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=210)** And in here I'm just going to say return null.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=214)** So now I can go back to my inventory class and inside the iterator method where I'm saying return null, I can now return my StockIterator.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=223)** So I'm going to say return new StockIterator.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=227)** And this needs to take an inventory as an argument, so I'm going to pass in this.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=232)** Now I can test it out in my app class.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=235)** So I'm going to go back to app.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=237)** And first of all, I'm going to create an inventory and a stock iterator.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=241)** So I'm going to say var inventory = new Inventory.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=247)** And I'm going to pass in my three item objects into the constructor.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=252)** So I'm going to pass in pen, pencil, and eraser.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=256)** Then I'm going to create my stock iterator.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=259)** So I'm going to say var StockIterator = inventory.iterator.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=265)** Then I'm going to use a while loop to iterate over the collection.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=271)** So I'm going to say while and then I'm going to say StockIterator.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=277)** And I'm just going to change the StockIterator variable to begin with a lowercase s.
>
> **[4:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=282)** And then inside the while loop, I'm going to say while stockIterator.hasNext.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=288)** And then inside that block I'm going to say var item = stockIterator.next Then I'm going to print out the item name for each one.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=301)** So I'm going to say System.out.println and pass in item.getName.
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=307)** So if I run the app, I can see it prints out the items in the collection, but only the ones where the quantity isn't zero.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=315)** So it prints out pen and eraser, but not pencil because the quantity of pencils is zero.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-an-iterator?u=76281980&t=321)** So this is how you can use the iterator pattern to traverse the items in a collection.

> [!info]- Semantic Content
>
> **Code Keywords:** var (6), pass (5), interface (3), override (3), public (3)
> **Code Identifiers:** hasnext (6), stockiterator (2), getitems (1), getquantity (1), getname (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** jdk (1)

#### Challenge: The Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-iterator-pattern?u=76281980&t=5)** In this challenge, you'll be using the iterator pattern to traverse over a collection of countries.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-iterator-pattern?u=76281980&t=10)** A country has a single field called name, and then in the App class, there's a main method and five countries are being created.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-iterator-pattern?u=76281980&t=18)** For this challenge, you should create a custom iterator to loop over the countries and prints out the name of each one to the console.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-iterator-pattern?u=76281980&t=24)** If you want a bit more of a challenge, you can also add some custom filters, for example, removing countries that begin with a certain letter.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-iterator-pattern?u=76281980&t=31)** I'll be going through the solution to this exercise in the next movie, so if you get stuck, do feel free to skip ahead.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (1)
> **Analogies:** for example (1)

#### Solution: The Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=5)** This is my solution to the Iterator pattern challenge.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=8)** So the first thing I'm going to do is create an iterable.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=11)** I'm going to create a new class and I'm going to call this CountryCollection.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=17)** And this class is going to implement the iterable interface.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=20)** So at the top I'm going to add implements iterable.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=23)** And in a pair of diamond brackets I'm going to put country.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=27)** So to begin with I'm going to add a field, which is going to be an array of countries.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=31)** So I'm going to say private final country[] and I'll call it countries.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=38)** Then I'm going to add a constructor.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=39)** So I'm going to say public CountryCollection, and I'm going to pass in country... And I'll call this countries.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=47)** Then inside the constructor I'm going to say this.countries = countries.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=53)** And I'm also going to add a getter method for the countries array.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=56)** So I'm going to say public country[] getCountries.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=63)** And inside the method I'm going to say return countries.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=68)** Now I need to override the iterator method.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=70)** So I'm going to say @Override and then public iterator.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=75)** And in the angle brackets I'm going to put country and the method name is iterator.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=80)** Then for now I'm just going to return null because I haven't actually created my iterator yet.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=85)** And I'm just going to make sure that the correct iterator has been imported.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=90)** So if I've accidentally imported the wrong one, so I'm just going to re-import this and make sure it's from Java.util.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=97)** So the next thing I'm going to do is create the iterator.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=100)** So I'm going to create another new Java class and I'm going to call this one CountryIterator.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=105)** And this class is going to implement the iterator interface.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=111)** So at the top, I'm going to put implements Iterator.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=116)** And again, I'm going to make sure that I've imported Java.util.iterator.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=121)** So first of all, I'm going to add a couple of fields and a constructor.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=124)** So the first field is going to be a private final CountryCollection, which I'll call CountryCollection.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=131)** And the second one is going to be a private int index.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=136)** So for the constructor I'm going to say public CountryIterator.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=140)** And I'm going to pass in a country collection.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=144)** Then inside the constructor I'm going to say this.countryCollection = CountryCollection.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=151)** And I'm going to say this.index = 0.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=156)** Then I'm going to implement the hasNext method.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=159)** So I'm going to say @Override and then public boolean hasNext.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=166)** And then firstly in here I'm going to get my list of countries.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=169)** So I'm going to say var country list = countryCollection.getCountries(); then I'm going to say return index is smaller than countryList.length.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=182)** And next I need to override the next method.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=184)** So I'm going to say @Override and then public country next.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=192)** So in here I'm going to get my list of countries again.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=194)** So I'm going to say var countryList list equals country collection dot get countries.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=199)** Then I'm going to check the hasNext method.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=202)** So I'm going to say if hasNext, then in that case I return countryList.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=207)** And inside the square brackets I say index++.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=212)** So if you wanted to try out some custom filtering, you would put that inside this hasNext block as well.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=217)** But I'm going to go straight on and add the else block.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=221)** So I'm going to say else and then in that case I'm going to return null.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=225)** So now I'm going to go back to my App class to try this out.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=229)** So inside the main method I'm going to create a new country collection.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=232)** So I'm going to say var countryCollection = new CountryCollection, and I'm going to pass in all of my countries.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=239)** So India, Poland, Nigeria, Canada, and Argentina.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=247)** Then I'm going to create my iterator.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=249)** So I'm going to say var countryIterator = new CountryIterator.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=255)** And I'm going to pass in CountryCollection.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=258)** Then I'm going to create my while loop.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=260)** So I'm going to say while CountryIterator, and I'm just going to change this variable name to begin with a lowercase c.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=268)** So I'm going to say while countryIterator.hasNext then I'm going to say var country = countryIterator.next(); and then I'm going to print out the country's name.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=286)** So I'm going to say System.out.println and pass in country.getName.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=293)** And there is one step that I forgot to do, actually, and that's inside the CountryCollection class.
>
> **[4:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=298)** Instead of returning null, I'm actually going to return a new CountryIterator and pass in this.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=306)** So now I'm going to go back to the App class again and I'm going to run this.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=313)** And I can see it prints out each of the countries.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-iterator-pattern?u=76281980&t=317)** So well done if you managed to complete this exercise, there are a lot of parts to it, so it was a particularly tricky one.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), pass (6), this. (5), override (5), var (5)
> **Code Identifiers:** hasnext (6), countrycollection (3), countrylist (3), countryiterator (3), getcountries (2)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2)


### 22. 21. The Mediator Pattern

#### Understand the Mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=0)** The definition of a mediator is someone who tries to make people come to an agreement when they're in conflicts.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=5)** They act as a neutral party who sits in between all of the others so that they don't have to speak to each other directly.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=11)** As another kind of analogy, imagine a restaurant, the customers are at their table, and they need to communicate what they want to eat.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=17)** The chefs are in the kitchen and they need to know what to cook, and then the meals need to be brought out.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=22)** The owner of the restaurant needs to make a profit to run the restaurant, so money needs to be collected from the customers.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=28)** Imagine how this would work if there was no waiter or waitress.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=31)** The customer would have to go to the kitchen to tell the chefs what they want.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=35)** Then the chefs would have to bring out the food, and at the end of the meal, the owner would have to come into the restaurant to collect the payments.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=41)** In this scenario, a waiter or waitress is like a mediator handling all of these interactions so that these groups of people don't have to interact with each other directly.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=50)** So if we go back to coding and object-oriented design, you often end up with large applications that have lots of different objects.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=56)** We're told that classes should be small and self-contained, so you often have lots of different ones, which leads to lots of different objects.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=63)** This is a good thing, as it means that each class is focused on its one thing, and the behavior of the application as a whole is split into small chunks.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=71)** But one of the downsides that can occur is that you end up with a system with lots of different objects that all know about each other and are all interconnected.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=79)** You might even end up with a situation where every object knows about every other objects.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=83)** Apart from the fact that it might become a nightmare to understand what's actually going on, this leads to tight coupling between objects, and changes to one might result in the need for changes to another.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=93)** It might also make it difficult to reuse objects because they might have to communicate with so many others.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=98)** The idea of the mediator pattern is to have an object that sole purpose is to handle these interactions between all of the different objects.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=106)** It sits in the middle of them all and handles the communications between them.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-mediator-pattern?u=76281980&t=110)** This provides a loose coupling between the objects, and this makes the program simpler to understand and to maintain.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (2)
> **Code Keywords:** self (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Avoid tight coupling between objects
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=0)** This app is an example of where objects are tightly coupled and would benefit from using the mediator pattern.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=5)** It's an app for keeping track of tickets that developers are working on, and there are three main classes.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=10)** The first one is the ticket class, so this class has a field of type assignee, which is the person who's working on the ticket.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=16)** Then there's an enum called status, so a ticket can either be submitted, in progress, or done.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=21)** And then there's a field to store the status.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=23)** And you can see in the constructor that when you first create a ticket the status is set to submitted.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=29)** Then there's a method to get the status and method to set the status, and a method to set the assignee.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=35)** Next there's the board class.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=37)** So this is the board where tickets are kept.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=39)** There are two lists, one called inProgressTickets, which is an array list, and another array list called doneTickets.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=46)** Then there's a method to get the done tickets, and there's a method called addTicketToInProgressTickets.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=53)** So this adds the ticket to the in-progress list and then it sets the status of the ticket to in-progress, and then it prints out a message saying that the ticket was added to the in-progress tickets.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=63)** Then there's a method called addTicketToDoneTickets.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=66)** So this sets the status of the tickets that are done, it adds it to the done tickets, prints out a message saying ticket added to done tickets.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=73)** Then it removes it from the in-progress tickets and then prints out a message saying the ticket was removed from in-progress tickets.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=81)** Next there's the Assignee class.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=83)** So this is essentially the developer.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=85)** So this class has an array list called tickets which is a list of ticket objects.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=90)** Then there's a method called pickUpTickets.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=92)** So this prints out a message saying the ticket was picked up by the assignee.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=96)** It adds the ticket to the list of tickets.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=98)** It sets the assignee to this developer, and then it adds the ticket to the in-progress tickets on the board.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=104)** Then there's the resolvedTicket method.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=107)** So this removes the ticket from the developer's list of tickets, and then it adds the ticket to the list of done tickets on the board, and then it prints out a message saying the ticket was resolved.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=117)** And finally, there's an app class with a main method.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=120)** So in here I'm creating a board, a ticket, and an assignee.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=123)** So the assignee picks up the tickets and then the ticket is resolved.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=127)** So if I run this, I can see that it says the ticket was picked up by assignee, the status was changed to in progress, the ticket was added to in-progress tickets.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=136)** Then the ticket status was changed to done, the ticket was added to done tickets, the ticket was removed from in-progress tickets on the ticket was resolved.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=144)** So the assignee class in particular is having to do lots of updating of the states of ticket and board classes, which means that they're tightly coupled.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=152)** And in the board class is also updating the states of the tickets.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=155)** This means that if something changes in the ticket class, there are several different places that I need to check to make sure everything still compiles and works properly.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=163)** It's also generally a really confusing structure, and I wouldn't be surprised if you found that explanation quite confusing to follow.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoid-tight-coupling-between-objects?u=76281980&t=169)** The states of the different objects is being updated in quite a few different places, so this app is a good candidate for implementing the mediator pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), class. (2), enum (1), finally, (1), this, (1)
> **Code Identifiers:** inprogresstickets (1), donetickets (1), addtickettoinprogresstickets (1), addtickettodonetickets (1), pickuptickets (1)
> **Definitions:** is an  (2), means that (2), is a  (1)
> **CLI Commands:** make (1)

#### Create a Mediator object
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=0)** In this app for keeping track of tickets that developers are working on, the classes are already tightly coupled.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=5)** So I'm going to create a mediator.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=7)** This mediator is going to act as a sort of middleman and handle all of the different things that need to be handled for a ticket to be picked up or set to done.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=15)** So I'm going to create a new class.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=18)** And I'm going to call it Mediator.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=22)** And this class is going to have a field for each of the three things that need to be updated.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=26)** So I'm going to say private Tickets tickets; private Assignee assignee; and private Board board.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=37)** And these are all going to be set by values passed in to a constructor.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=41)** So I'm going to create a constructor and say public mediator, and I need to pass in a ticket and assignee, and the board.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=51)** Then inside the constructor I can say this.ticket = ticket.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=56)** And then this.assignee = assignee.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=60)** And this.board = board.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=65)** And the two methods that are really problematic are the two methods in the assignee class.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=69)** So pickUpTicket and resolveTicket because these involve an assignee, a ticket, and a board.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=74)** So there's lots of tight coupling going on here.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=76)** So I'm going to define a method for each of these in the mediator.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=80)** So first of all, I'm going to go back to the mediator and I'm going to create a method for picking up a ticket.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=85)** So I'm going to say public void pickUpTicket.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=89)** And the first thing that needs to happen when a ticket is picked up is the assignee needs to pick up the ticket.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=94)** So I'm going to say assignee.pickUpTicket and I need to pass in the ticket and the board.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=101)** Then I need to set the assignee on the ticket.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=103)** So I'm going to say ticket.setAssignee and pass in the assignee.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=108)** And then I need to set the status on the ticket.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=110)** So I'm going to say ticket.setStatus and I'm going to pass in a status of in-progress.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=118)** And finally, the ticket needs to be added to the right list on the board.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=122)** So I'm going to say board.addTicketToInProgressTickets and pass in the tickets.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=128)** Now I'm going to create the method for resolving a ticket.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=130)** So I'm going to say public void resolve ticket.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=133)** And in this one, the first thing I need to do is say assignees resolve tickets and pass in the ticket on the board.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=140)** Then I need to set the status on the ticket to done.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=143)** So I'm going to say tickets dot set status and I'm going to pass in a status I've done.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=151)** Then I need to put the ticket in the done tickets list on the board.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=155)** So I'm going to say board dot, add ticket to done tickets and pass in the tickets.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=161)** Now I can remove some code from the places it's been used in other classes.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=164)** So first of all, I'm going to go to the board class.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=167)** And I no longer need to update the ticket status in either of these methods.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=171)** So in the add ticket to in-progress tickets, I'm going to remove the line where it says ticket set status, and also in the add ticket to done tickets, I'm going to remove the first line where it sets the status to done.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=183)** Because that's now being done by the mediator.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=186)** And in the assignee class.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=190)** I no longer need to set the assignee on the ticket or add it to the list on the board.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=195)** So I'm going to remove the last two lines of the pickUpTicket method.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=198)** And in the resolveTicket method, I no longer need to add the ticket to the done ticket on the board so I can remove that line as well.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=205)** And that actually means that I don't need to pass in a board object to either of these methods anymore.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=210)** So I'm going to remove that from the resolveTicket method and also from the pickUpTicket method.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=216)** So now I can go back to my mediator and where I'm calling pickUpTicket, I no longer need to pass in the board.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=222)** And the same with resolve ticket.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=225)** So that's nice because it means I've removed some of the coupling between the objects.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=229)** So now I'm going to go to the App class.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=232)** And inside this main method, after I've created my three variables, I'm going to create another variable for my mediator.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=238)** So I'm going to say var mediator = new mediator.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=244)** And I'm going to pass in my tickets, the assignee, and the board.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=251)** Then instead of saying assignee.pickUpTickets, I'm going to remove that and instead I'm going to say mediator.pickUpTickets.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=259)** And then instead of saying assignee.resolveTickets, I'm going to say mediator.resolveTickets.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=268)** And if I run this, I can see I get the same output as before, so the ticket is picked up, it's set to in-progress and it's added to in-progress tickets.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=278)** Then it's resolved, the status is set to done, it's added to the done tickets, and it's removed from the in-progress tickets.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=284)** So I get the same output, but my classes are no longer tightly coupled together.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/create-a-mediator-object?u=76281980&t=288)** All these interactions are handled by the mediator class instead.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (11), class. (5), private (3), public (3), this. (3)
> **Code Identifiers:** pickupticket (6), resolveticket (3), pickuptickets (2), resolvetickets (2), setassignee (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1)

#### Challenge: The Mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=5)** In this challenge, you'll be updating a traffic light control system to use the mediator pattern.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=10)** At the moment, there are a couple of classes to look at.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=12)** The first is this PedestrianCrossingLights class.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=15)** So this can be two colors, either red or green.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=18)** Initially, the color field is set to red, and then there are two methods one to set the color to red and the other to set it to green.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=24)** Then there's the TrafficLight class.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=26)** A traffic light can be either red, amber, or green.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=30)** And there are methods to set each of these colors, too.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=33)** But when the light changes to red or green, it also needs to change the pedestrian light color.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=38)** For example, when the traffic light is set to red, it sets the color of this light to reds and then it prints out a message saying traffic light is red and then it says pedestrianCrossingLights.changeToGreen.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=49)** And in the changeToGreen method, for example, it first sets the pedestrian crossing light to red and then it changes the color of this light to green.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=56)** This does work, but it means that the two different lights are tightly coupled.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=60)** And finally, there is the App class.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=63)** So this has a main method where a traffic light and a pedestrian crossing lights are both created.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=68)** And then first of all, the traffic light changes to amber, then it changes to green.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=72)** And it also needs a reference to a pedestrianCrossingLight to do that.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=76)** Then it changes to amber and then it changes to red.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=78)** And again it needs a pedestrianCrossingLight object passed in.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=81)** So if I run this, I can see it says traffic light is amber, pedestrian crossing light is red, traffic light is green, traffic light is amber, traffic light is red, and then pedestrian crossing lights is green.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=94)** So for this challenge, you should implement the mediator pattern so that the traffic lights and pedestrian light classes are no longer tightly coupled, and both light changes happen in one place in the mediator class. You should then be able to use your mediator objects in the App class, and you should still get exactly the same output when you run the app afterwards.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-mediator-pattern?u=76281980&t=111)** Good luck with this one and I'll be going through the solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), finally, (1), this, (1), class, (1)
> **Code Identifiers:** changetogreen (2), pedestriancrossinglight (2), pedestriancrossinglights (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)

#### Solution: The Mediator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=5)** This is my solution to the mediator patent exercise.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=8)** So the first thing I'm going to do is I'm going to create a new Java class called Mediator.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=14)** And this class is going to have fields for both of the types of lights.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=18)** So first of all, I'm going to say private PedestrianCrossingLight pedestrianCrossingLight.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=24)** And then secondly private TrafficLight trafficLight.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=29)** Then I'm going to set these in a constructor.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=32)** So I'm going to say public Mediator and pass in a pedestrianCrossingLight and a trafficLight.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=43)** Then in the constructor I'm going to say this.pedestrianCrossingLight = pedestrianCrossingLight.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=51)** And this.trafficLight = trafficLight.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=54)** Then I'm going to have a method for changing the traffic lights to red.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=57)** So I'm going to say public void changeTrafficLightToRed.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=63)** And inside this method I'm going to say trafficLight.changeToRed.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=68)** And at the moment, I need to pass in a pedestrianCrossingLight object.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=72)** And then underneath I'm going to say pedestrianCrossingLight.changeToGreen.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=78)** Then I'm going to have a method for changing the traffic light to amber.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=82)** So I'm going to say public void changeTrafficLightToAmber.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=88)** And this one, I don't need to update the pedestrian crossing lights, only the traffic lights.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=92)** So I'm going to say trafficLight.changeToAmber.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=96)** And finally, I'm going to have a method for changing the traffic light to green.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=100)** So I'm going to say public void changeTrafficLightToGreen.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=106)** And in this one I'm first going to change the pedestrian crossing lights of red.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=110)** So I'm going to say pedestrianCrossingLight.changeToRed and then trafficLight.changeToGreen and pass in the pedestrianCrossingLight.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=121)** Now I can update the TrafficLight class.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=123)** I'm going to go to that class and when it says change to red, I don't need to change the pedestrian crossing lights anymore because that's now done by the mediator.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=131)** And the same in the ChangeToGreen class.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=133)** I no longer need to change the pedestrian crossing light to green.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=137)** So now I'm going to go back to the App class.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=140)** And actually sorry, one more thing I need to do is go back to the Mediator class first.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=144)** And I no longer need to pass in the pedestrianCrossingLight to the changeToRed method, or the changeToGreen method for the traffic lights. And in the TrafficLight class, I'm not going to pass in this argument anymore because I don't need it, so I'm going to remove that from the changeToRed method and from the changeToGreen method.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=163)** And now I'm going to go back to the TrafficLight class.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=166)** And underneath where I've created my two types of lights, I'm going to create a mediator.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=170)** So I'm going to say var mediator = new mediator.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=177)** And I'm going to pass in the pedestrianCrossingLight and the trafficLight.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=183)** Then I'm going to use that to change the colors of the lights.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=186)** So first of all I'm going to say mediator.changeTrafficLightToAmber, then I'm going to say mediator.changeTrafficLightToGreen, then I'm going to say mediator.changeTrafficLightToAmber again and then mediator.changeTrafficLightToRed.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=209)** And then I'm going to remove the last four lines where I was calling the methods directly on the traffic lights.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=215)** So if I run this, I can see I get the same output as before.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=221)** So traffic light is amber, pedestrian light is red, traffic light is green, traffic light is amber, traffic light is red, and pedestrian crossing light is green.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-mediator-pattern?u=76281980&t=230)** So well done if you managed to complete this challenge.

> [!info]- Semantic Content
>
> **Code Identifiers:** pedestriancrossinglight (10), trafficlight (8), changetored (4), changetogreen (4), changetrafficlighttoamber (3)
> **Code Keywords:** pass (6), public (4), class. (4), private (2), this. (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1)


### 23. 22. The Memento Pattern

#### Understand the Memento pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=0)** Imagine you want to create an undo operation, and to do that you need to save the state of an object.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=5)** But you also don't want to break the principle of encapsulation.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=8)** The Memento pattern allows you to do exactly this.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=11)** There are some cases where you need to keep a record of the states of an object.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=15)** For example, say you're writing in a text document and at some point you click on save and then you reword what you've written.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=21)** But later you decide you want to go back to that previous version.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=25)** You'd need to have a record of the state that document was in before you saved it.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=28)** This is what the Memento pattern does.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=30)** It's externalize the state of an object at a given time in case you need to go back to it later.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=36)** But the main challenge is how you do this without breaking encapsulation.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=39)** One of the benefits of encapsulation is that it ensures objects hide their states from other objects.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=44)** Classes often contain several fields that should be kept in a consistent state.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=48)** So, for example, in Java, you often have private fields with public getter methods, and this is so that other objects can't interfere with the states of those private fields.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=57)** If they're encapsulated, it prevents anyone else using the objects from messing with the states.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=61)** Encapsulation also means you can change the underlying structure of the objects without causing breaking changes for anything else using it.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=68)** So in the Memento pattern, you create a copy of that state in a separate object.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=73)** First of all, you have an object whose states are going to be changing, and this is called the originator.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=79)** Then you have the object which is going to be changing it, which is called the caretaker.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=83)** For example, in the document example, the document would be the originator and the person editing it would be the caretaker.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=90)** The Memento object sits between these two.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=93)** So the objects doing the changing has access to the memento, which provides the saved states. The implementation of the originator state is a black box.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=101)** The Memento object just knows what the state was at a given time.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=104)** It's worth bearing in mind that if the object whose states you want to capture contains a lot of data, using the Memento pattern can result in an increase in memory usage, and this might outweigh the benefits of using it.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-memento-pattern?u=76281980&t=115)** But if the object state is fairly simple and you want to be able to save it and restore it later, the Memento pattern is a good way to do this without exposing the structure of the objects.

> [!info]- Semantic Content
>
> **Code Keywords:** private (2), this. (1), public (1)
> **Definitions:** is called (2), is a  (2)
> **Analogies:** for example (3), imagine (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1)

#### Restoring an object's state
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=0)** This is an app for displaying documents and a document viewer.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=3)** I want to amend it so that I can save and undo text in the documents.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=7)** So the first class I have here is the TextDocument class.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=10)** And this has a string field called text, which is initially set to an empty string.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=15)** Then there's the write method, which takes another string as an argument, and it adds it to the end of the text field.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=20)** And finally, there's a method called print, which prints out the text to the console.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=25)** Then there's a class called DocumentViewer.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=27)** This class has a main method, and inside this main method, I'm creating a textDocument objects.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=32)** And then I'm adding the text "Hello, world!" to the document.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=35)** Then I'm printing it, and then I'm adding "How are you?" to the end of the document.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=39)** And then I'm printing the whole thing again.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=41)** So if I run this, I can see I get "Hello, world!" and then I get "Hello, world!
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=46)** How are you?"
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=47)** Now, I want to be able to save the text document and then undo to go back to that state later.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=53)** And I'm going to use the Memento pattern to do that.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=56)** So I'm going to create a new class, and I'm going to call it TextDocumentState.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=62)** This class is going to be the Memento that saves the state.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=66)** So it's going to save the text in the TextDocument at a specific moment.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=70)** Firstly, it's going to have a field called state which represents the text I want to save.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=75)** So I'm going to say private String state.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=79)** And this value is going to be set in a constructor.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=82)** So I'm going to add a constructor and say public TextDocumentState and then pass in a string called state.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=90)** And then inside the constructor, I can say this.state equals state.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=95)** Now, I need getter and setter methods for the state.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=98)** So I'm going to add a method which is going to be public String getState.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=105)** And this is going to return the state.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=108)** Then for the setter method, I'm going to say public void setState, and this is going to take a string called state as an argument.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=118)** And inside here, I'm going to say this.state equals state.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=125)** Now, I can use this Memento to implement save and undo methods in my TextDocument class.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=130)** So I'm going to go back to that class.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=133)** And in here, I'm going to add a new field for the state.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=136)** So underneath the text fields, I'm going to have a new one that's going to be a private TextDocumentState field, which I'll call state.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=145)** Then I'm going to say equals new TextDocumentState.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=148)** And I'm going to pass in the text field as an argument to its constructor.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=153)** Next, I'm going to implement the save method.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=155)** So at the bottom of this class, I'm going to add a new method.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=158)** And I'm going to say public void save.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=161)** Then inside this method, I can say state.setState and pass in the current text in the document.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=171)** And I can also have an undo method.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=173)** So I'm going to say public void undo.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=176)** And then this one I'm going to get to that state.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=178)** So I'm going to say text equals state.getState.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=184)** So that's going to revert the text to whatever was saved in the state object.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=188)** So let's test this out in the DocumentViewer class.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=191)** So I'm going to go back to that class.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=193)** And after I've written "Hello, world," I'm going to say textDocument.save.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=199)** And then after I've printed out the final document, I'm going to go back to that state.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=203)** So I'm going to say textDocument.undo.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=206)** And then to check it worked, I'm going to print the document again.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=209)** So I'm going to say textDocument.print.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=213)** So it should remove the "How are you?" sentence because I haven't saved it and go back to just the "Hello, world!" sentence.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=219)** So if I run this, I can see I get "Hello, world!" and then "Hello, world!
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=225)** How are you?"
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=226)** And then back to the previous state, which is "Hello, world!"
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/restoring-an-object-s-state?u=76281980&t=229)** So this is how the Memento pattern can be used to implement save and undo operations.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), public (5), pass (3), this, (2), class, (2)
> **Code Identifiers:** textdocument (4), getstate (2), setstate (2)
> **Cross-References:** go back to (5)
> **Definitions:** is an  (1)

#### Challenge: The Memento pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=5)** In this challenge, you'll be implementing the Memento pattern so that you can change the price of an item in a store and then revert it to the old price.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=13)** So in this app, there's a class called item, and this has a field called price.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=18)** And this price is set in the constructor.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=20)** And then there are methods to set the price and get the price.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=23)** Then there's a class called Store, and this class has a main method where we're creating an item which is initially set to the price of 20.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=32)** And then we're printing out what the price of the item is.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=35)** Then it's set to 10 and then we print it out again.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=38)** You should implement the Memento pattern and then uncomment the comments in this main method. It should print out that the price of the item is 20, then that it changes to 10, and then it should go back to 20 again.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-memento-pattern?u=76281980&t=49)** So good luck with the exercise and I'll show you how I approached it in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1), in the next (1)

#### Solution: The Memento pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=5)** I'm now going to implement the Memento pattern for this challenge.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=9)** The first thing I'm going to do is I'm going to create a class to save the states of the price of an item.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=14)** So I'm going to create a new class and I'm going to call it ItemState.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=20)** And this class is going to have a field of type int, which is going to be the state of the price.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=24)** So I'm going to say private int state.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=28)** And this is going to be set in a constructor.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=31)** So I'm going to create a constructor and say public ItemState and pass in an int called state.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=38)** Then inside the constructor I'm going to say this.state = state.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=44)** Then I'm going to add getter and setter methods for the state.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=47)** So first of all I'm going to say public int getState.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=50)** And in here I'm going to return the state.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=54)** Then I'm going to add a setter method.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=56)** So I'm going to say public void setState and I'm going to pass in an int called state.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=63)** Then inside this one I'm going to say this.state = state.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=68)** Now I can use this in the item class.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=71)** So I'm going to go to item and I'm going to add a new field under the price fields which is going to be an itemState field which I'll call state.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=82)** Then I'm going to say = new itemState and pass in the price.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=89)** Now I can create my save and undo methods.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=92)** So first of all, I'll create the save method and say public void save.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=96)** Then inside this method I can say state.setState and pass in the price.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=103)** Now I'm going to do the undo method.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=105)** So I'm going to say public void undo.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=107)** And in this one I'm going to say price = state.getState.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=114)** Now I'm going to go back to the store class and I'm going to uncomment the commented outlines.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-memento-pattern?u=76281980&t=120)** And if I run this, I can see that the item price is 20 and then it's 10, and then it goes back to 20 again.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), pass (4), this. (2), private (1), class. (1)
> **Code Identifiers:** getstate (2), setstate (2), itemstate (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 24. 23. The Observer Pattern

#### Understand the Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=0)** As the name of this pattern suggests, the observer pattern is all about objects watching or observing other objects.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=6)** In object-oriented design, you often end up with a system broken up into lots of classes that work together.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=11)** One of the challenges is making those classes interact and cooperate while avoiding tight coupling between them.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=17)** The observer pattern provides a way to do this.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=19)** You have an object that's being watched called the subject or the observable, and then you have the observers which watch the objects.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=26)** As a real-life example, think about social media sites where you're connected to people or follow people.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=31)** If you post something, rather than sitting and watching to see if anyone comments, you'll receive a notification if someone does.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=38)** In this example, the post is the observable and you are the observer.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=42)** The observer pattern is quite a common pattern in Java applications.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=46)** You would use it when you have one or more objects that need to be notified of changes made by another object and updated accordingly.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=53)** For example, if you have a dashboard that shows several different types of charts, you'd want all the graphs to updates when the data is updated.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=60)** Or for example, you have an application that has a list of people on a waiting list for a product to be in stock, and they all need to be notified when it becomes available.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=68)** In Java, you may have come across classes called observer and observable, which have been commonly used to implement the observer pattern in Java.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=75)** However, these were deprecated in Java 9 and are no longer recommended for use.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=79)** One of the problems was that they could be used to tell you that something had changed, but they didn't give you any details about what had changed.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-observer-pattern?u=76281980&t=86)** Another option is to implement these interfaces yourself, or you can use the property change listener and property change support classes, which is what I'll be using in my example.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Code Keywords:** this. (1)
> **Versions:** java 9 (1)
> **Best Practices:** recommended (1)

#### Implementing an Observer
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=0)** This app is a simplified version of a social media site.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=3)** I want to use the observer pattern to make sure the newsfeed updates when the user posts a status from their accounts.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=9)** So in this app, there's a class called User which has a string field called status.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=13)** And then there's a method called setStatus to set the status to a new string.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=17)** Then there's a class called Newsfeed.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=20)** This class has an ArrayList of statuses as a field.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=23)** And then there's a method called printStatuses, which prints out all of the statuses in the list.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=29)** And finally, there is an App class.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=31)** And in here, there's a main method where I'm creating two users and a newsfeed, and then user1 is setting their status to going for a walk and then user2 sets the status to enjoying a coffee.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=41)** And then I say newsfeed.printStatuses.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=45)** At the moment, this won't actually do anything because the User and Newsfeed classes are just separate classes with no link to each other.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=51)** So if I run this, I don't get any output in the console.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=59)** But I want the feed to update when a user updates their status.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=63)** I could maintain a list of users inside the Newsfeed class, but that would make the classes tightly coupled.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=69)** If I change the implementation of the User class, I might have to go back and change something in the Newsfeed class as well.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=75)** So I'm going to use the observer pattern.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=77)** And to do this, I'm going to make use of the PropertyChangeListener and PropertyChangeSupport classes which come as part of the JDK.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=83)** In this example, the user is the observable and the newsfeed is the observer.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=88)** So let's start with the observer, which is the Newfeed class.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=92)** The first thing I'm going to do is I'm going to make this class implement the PropertyChangeListener class.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=98)** This is going to allow me to listen for changes in any objects that it's observing.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=102)** So I'm going to add implements PropertyChangeListener.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=107)** I'll also need to implement a method from this interface called PropertyChange.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=111)** So at the bottom of the class, I'm going to add a new method and say @Override and then public void propertyChange.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=122)** And this method takes a property change event as an argument.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=125)** So in the brackets I'm going to put PropertyChangeEvents, and I'll call it events.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=134)** My User class is going to fire an events when the status field changes.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=138)** So when that happens, I want to add it to my list of statuses in this class.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=142)** So I'm going to say statuses.add and I'm going to pass in events.getNewValue.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=150)** And the getNewValue method actually returns an object.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=153)** So I need to cast this to the type that I want.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=156)** And my statuses are going to be string values, so I'm going to cast this to a string.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observer?u=76281980&t=161)** So now I've taken the first step towards implementing the observer pattern by implementing an observer.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), class, (3), this, (2), finally, (1), let (1)
> **Code Identifiers:** printstatuses (2), getnewvalue (2), setstatus (1), propertychange (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** jdk (1)

#### Implementing an Observable
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=0)** Now, I've made the newsfeed in my social media app into an observer.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=4)** So the next step is to implement an observable for it to watch.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=7)** In this example, the observable is the User class.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=10)** So I'm going to open up that class.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=13)** And the first thing I'm going to do is I'm going to add a new fields of type PropertyChangeSupport.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=17)** So underneath the status field, I'm going to say private PropertyChangeSupport, and I'll call it support.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=27)** Then I'm going to say equals new PropertyChangeSupport, and I'm going to pass in this.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=33)** This PropertyChangeSupport is going to notify the observer when a property in this class changes.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=39)** Now, I need to edit this setStatus method.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=43)** In this method, I'm passing in a string and setting the status field to that value.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=47)** I also want to let the observer know that the field has changed, so I need to add a line at the start of the method.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=52)** And I'm going to say support.firePropertyChange.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=57)** I need to pass in three arguments to this method.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=60)** The first one is a string, which is the name of the property that has changed.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=63)** So I'm going to pass in the string status.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=66)** In my example, I'm going to be listening for all properties, but sometimes you might want to listen only for specific ones, which is why I need to pass in the name of the property here.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=75)** The second argument is the old value.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=77)** So I'm going to pass in this.status because I haven't updated it yet.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=81)** And the third argument is the new value that it's changing to.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=85)** So I'm going to pass in the status object.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=88)** If the old and new values are the same, this method will do nothing.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=92)** But if they're different, it will notify the observer that the status has changed.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=96)** The last thing I need to do in this class is I need to create a method to add a listener so that observers can listen for changes.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=104)** So at the bottom, I'm going to say public void addPropertyChangeListener.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=110)** My Newsfeed class already implements the PropertyChangeListener class.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=114)** So that's what I'm going to be parsing into this method.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=117)** So in the brackets, I'm going to say Newsfeed newsfeed.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=121)** And inside this method, I'm going to say support.addPropertyChangeListener and I'm going to pass in the newsfeed object.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=131)** So now I need to go back to my App class.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=134)** And in here, after I've created my two users and my newsfeed, I'm going to add another line and say user1.addPropertyChangeListener and pass in the newsfeed.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=145)** Then I'm going to do the same for user2.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=147)** So underneath, I'm going to say user2.addPropertyChangeListener and pass in the newsfeed again.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=154)** Now the observer, which is the newsfeed, is going to be listening to any property changes from user1 or user2.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=161)** So if I run that up, I can see it says "Going for a walk" and "Enjoying a coffee" which is user1 status and then user2 status.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-an-observable?u=76281980&t=171)** So this is how you can use the observer pattern to watch for changes in other objects without coupling them together.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), class. (4), this. (2), private (1), let (1)
> **Code Identifiers:** addpropertychangelistener (4), setstatus (1), firepropertychange (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### Challenge: The Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=5)** Let's have a look at the next challenge.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=7)** In this one, you'll be refactoring an app that sends weather warnings when there are unusual weather events expected.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=13)** So let's have a look at the code so far.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=15)** First of all, there's a class called Location which has a string field called weatherEvent.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=20)** And there's a method called setWeatherEvent to update that field.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=23)** This class is going to be the observable.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=26)** Then there's the WeatherUpdates class.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=28)** This class has an ArrayList of strings called weatherUpdates.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=33)** And this class is going to post a message when there's a new weather event at a location.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=38)** So it also has a method called printUpdates, which prints out all of the strings in the weather updates list.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=43)** Finally, there's a class called App, and this has a main method in it, where there are two locations being created and then a weatherUpdates object also being created.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=53)** Then location1 has a new weather event called Risk of Flooding, and then location2 has a weather event called Risk of Drought.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=61)** Then I'm printing all of the weather events for the weather updates.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=65)** Then I'm printing all of the updates for the weather updates.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=69)** You should implement the observer pattern so that the WeatherUpdates class is notified when a new weather events happens at either of the locations.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=77)** There is quite a bit to remember here, but this is similar to the example I showed in the previous videos.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=82)** So if you get stuck, I'd recommend going back and watching them again.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=85)** And I'll also be going through the solution in the next video.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-observer-pattern?u=76281980&t=88)** So good luck and have fun.

> [!info]- Semantic Content
>
> **Code Identifiers:** weatherupdates (2), weatherevent (1), setweatherevent (1), printupdates (1)
> **Code Keywords:** let (2), class. (1), finally, (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)

#### Solution: The Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=5)** This is how I'd go about implementing the observer pattern for this challenge.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=9)** The first thing I'm going to do is I'm going to go to the WeatherUpdates class.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=13)** And this is going to be the observer.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=16)** So I'm going to make this class implement the PropertyChangeListener class.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=20)** So at the top, I'm going to add implements PropertyChangeListener.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=26)** Then I need to override the property Change method.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=30)** So at the bottom of the class, I'm going to say @Override and then public void propertyChange.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=38)** And I'm going to pass in a PropertyChangeEvent, which I'll call event.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=46)** Then inside this method, I'm going to say whetherUpdates.add and I'm going to pass in event.getNewValue.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=57)** And my updates are strings, so I'm going to cast this to string.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=61)** Now, I need to update the Location class, which is going to be the observable.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=65)** So I'm going to open up location, and the first thing I'm going to do is add a field for the PropertyChangeSupport.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=72)** So underneath the weatherEvent fields, I'm going to say private PropertyChangeSupport support equals new PropertyChangeSupport, and I'm going to pass in this.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=83)** Then I need to update this setWeatherEvent method.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=87)** I'm going to fire on events when this method is called.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=89)** So I'm going to say support.firePropertyChange, and I'm going to pass in the string "weatherEvent."
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=99)** And then the second argument is going to be this.weatherEvent.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=103)** And the third argument is going to be the weatherEvent.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=106)** Now, I need to add the property change listener to the support.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=110)** So at the bottom, I'm going to add another new method.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=112)** And I'm going to say public void addPropertyChangeListener.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=119)** And I'm going to pass in a WeatherUpdates, which I'll call weatherUpdates.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=124)** Then inside here, I'm going to say support.addPropertyChangeListner and pass in weatherUpdates.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=132)** Now, I'm going to go back to the App class.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=134)** And underneath where I've created the two locations and the WeatherUpdates, I'm going to say location1.addPropertyChangeListner and pass in the weatherUpdates objects.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=144)** And then I'm going to say location2.addPropertyChangeListner and again pass in the weatherUpdates objects.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=152)** So now if I run that up, I can see it says risk of flooding for location1 and then risk of drought for location2.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-observer-pattern?u=76281980&t=161)** Congratulations if you managed to complete this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), class. (3), override (2), class, (2), public (2)
> **Code Identifiers:** weatherevent (4), weatherupdates (4), addpropertychangelistner (3), propertychange (1), whetherupdates (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)


### 25. 24. The State Pattern

#### Understand the State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=0)** Sometimes you'll have an object that needs to behave differently depending on its internal state.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=4)** The state pattern allows the object to alter its behavior when its state changes.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=9)** Imagine a play or pause button on a media player.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=12)** If someone clicks the play button, what happens will depend on the state of the media player.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=16)** For example, it could be already playing or paused or rewinding, and so on.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=20)** If you write a media player in Java, you might end up with loads of if statements about the state of the player.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=26)** For example, you check if it was playing and then have the code to handle that scenario, and then you check if it was paused and then have some code to handle that scenario, and so on.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=34)** This can get quite lengthy and complex.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=36)** You'd also need these long if statements at every method you created.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=40)** So in the pause method and the rewind method and so on, as well as the play method.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=45)** The state pattern provides a better solution to this problem.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=48)** The state is separated out as a separate objects from the clients.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=51)** Usually there's an interface for the state and then concrete implementations for each different states.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=57)** So for example, in the media player example, the media player itself would be the client.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=61)** And then there would be a concrete implementation of states for playing and stopped and so on.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=66)** Any of the operations performed by the clients that depend on the state of its are handled by these concrete implementations of the state interface.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=74)** So the state pattern is a way of avoiding huge if else blocks or switch statements.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=78)** And in this way, it can help simplify the code.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-state-pattern?u=76281980&t=80)** The state pattern allows an object to change its runtime behavior when its internal state changes.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), imagine (1)
> **Code Keywords:** interface (2), switch (1)
> **Definitions:** is a  (1)

#### Avoiding multiple if-else statements
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=0)** In this example, I have an auction app where the auction can either be open or closed, and people can place bids in the auction.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=6)** So to demonstrate how this works, I have an app class with a main method.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=10)** And here I'm creating an auction objects and then I'm calling various methods on it.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=15)** So first I say start auction, then place bids, then start auction again, then close auction place bid again, and then close auction again.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=26)** So if I run this, I can see it says auction started, bid placed.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=32)** Auction already started because I try and start it after it's already started.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=37)** And then auction closed, and then I try and place a bid and then I say bid not placed because auction is closed.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=44)** And then I try and close it again and it says auction already closed.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=48)** So now let's look at the auction class to see how that's implemented.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=52)** This class has a boolean field called isOpen and initially this is set to false in the constructor.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=58)** Then in the star auction method, I check if it's open and if it is, then I print out auction already started.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=64)** If it's not, then I set isOpen to true and then I print out auction started.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=70)** A common theme in all of these methods is that I have to check if the auction is open and implement different logic depending on that boolean.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=77)** It's a bit repetitive having to have lots of if else statements everywhere, and if I want to add more states later on, then this is going to get a bit more complex.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=85)** Let's say I also want to be able to pause an auction, and people won't be able to place bids while it's paused.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=91)** Firstly, a boolean won't work anymore because I now have a third state that is neither open nor closed.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=96)** And also I'm going to have to add another if else block to all of my methods, as well as another method for pause.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-multiple-if-else-statements?u=76281980&t=102)** So this is a good candidate for using the state pattern, where the state is separated out into a separate object.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Code Identifiers:** isopen (2)
> **Definitions:** is a  (1)

#### Allowing an object to change its behavior
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=0)** In my auction app, I'm going to refactor the code so that it stores the state in a separate object.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=5)** So the first thing I'm going to do is I'm going to create a new class, and I'm going to call it AuctionState.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=11)** And this is actually going to be an interface.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=14)** So I'm going to change class to interface.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=17)** Then I'm going to define methods for all the actions in the auction class that depend on the state.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=22)** So for example, first of all, I'm going to say void startAuction and I'm going to pass in an auction object.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=28)** Then I'm going to say void closeAuction and pass in an auction object.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=33)** And finally, I'm going to say void placeBid.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=37)** For the placeBid method, I don't need to change the states of the auction, I just need to access it so I don't need to pass in any auction objects.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=45)** Now I'm going to implement this interface for when the auction is started and again for when it's closed.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=50)** So I'll start by creating another new class and I'm going to call this one AuctionStartedState.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=58)** And this is going to implement the auction state interface.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=61)** So I'm going to add implements AuctionState.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=67)** So I need to override the three methods from this interface.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=70)** So first of all I'm going to say @Override and then public void startAuction and pass in an auction object.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=78)** And in this case the auction is already in a started state.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=82)** So they can't start again.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=83)** So I'm going to say System.out.println and pass in auction already started.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=88)** Then I'm going to override the closeAuction method.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=91)** So I'm going to say @Override and then public void closeAuction and pass in an auction object.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=98)** And then in this one, I'm first going to set the state of the auction to closed.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=102)** So I'm going to say auction.setState and I'm going to pass in a new AuctionClosedState object.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=113)** So this won't compile yet for a couple of reasons.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=115)** Firstly, I haven't created this setState method in the Auction class yet.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=119)** And secondly, I haven't created this AuctionClosed class yet.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=122)** But when I have created that class and the setState method, then this should compile.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=127)** So I'm then going to add a message and say System.out.println and in here I'm going to say auction closed.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=135)** Then I'm going to override the placeBid method.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=137)** So I'm going to say @Override and then public void placeBid.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=142)** And in this one I'm just going to say System.out.println and I'm going to pass in the message bid placed.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=152)** So now I'm going to create my AuctionClosedState class.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=156)** So I'm going to create a new class and call it AuctionClosedState.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=163)** And again this is going to implement the AuctionState interface.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=168)** So I need to override the three methods again.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=170)** So firstly I'm going to say @Override and then public void startAuction and pass in my auction object.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=177)** And for this one, I'm going to set the state of the auction to start at first.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=181)** So I'm going to say auction.setState and pass in a new AuctionStartedState object.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=190)** And again, this won't compile yet because I haven't created this setState method yet.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=194)** And then I'm going to print out a message that says Auction started.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=200)** Then I'm going to override the closeAuction method.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=203)** So I'm going to say at override.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=206)** and then public void closeAuction And pass in an auction.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=212)** Objects.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=213)** And this time the auction is already closed, so I'm going to say System.out.println and then pass in auction already closed.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=222)** Then finally, I need to override the placeBid method again.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=226)** So I'm going to say @Override and then public void placeBid.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=230)** And in this case the auction is closed, so they're not actually able to place a bid.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=234)** So I'm going to say System.out.println and in this one I'm going to say bid not placed because auction is closed.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=244)** Now I need to update the auction class.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=247)** So I'm going to go back to that class.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=250)** And first of all, instead of having this boolean isOpen fields, I'm going to change this to an AuctionState object.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=256)** So I'm going to change boolean to auction state.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=260)** And I'm going to rename this isOpen field.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=263)** So I'm going to right click on it and say rename symbol and I'm going to call this state.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=269)** And then inside the constructor, instead of saying this.state = false, I'm going to say this.state = new AuctionClosedState.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=278)** Now, in each of my methods, I can simply call the methods I want on the state object.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=283)** So, for example, in the startAuction method, I'm going to remove everything inside this and instead I'm going to say state.startAuction and pass in this.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=294)** Then for the closeAuction method, I'm again going to remove all the contents, and this time I'm going to say state.closeAuction and pass in this.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=304)** And finally, for the placeBid method, I'm again going to remove the contents, and this time I'm going to say state.placeBid.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=312)** And the last thing I need to do is add that setter method for the state.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=316)** So I'm going to say public void setState and pass in an AuctionState object, which I'll call state.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=329)** And then inside this method, I can say this.state = state.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=335)** Now, if I get back to my app class and I run this again, I can see I get the same output as before.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=344)** So auction started, bid placed, auction already started, auction closed, bid not placed because auction is closed, and then auction already closed.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=353)** So now if I wanted to add a new state in the future, I would just need to add another implementation of the auctionState interface.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/allowing-an-object-to-change-its-behavior?u=76281980&t=360)** So this is how the state pattern can let you change the behavior of an object when its external state changes.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (15), override (12), interface (7), public (7), this. (5)
> **Code Identifiers:** placebid (8), closeauction (7), setstate (6), startauction (5), isopen (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### Challenge: The State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=5)** In this challenge, you're going to be implementing the state pattern in a music player application.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=10)** So in this app class there's a main method where we have a media player object.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=14)** And then the button is pressed on the media player twice.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=17)** So if I run this, when the button is first pressed, the state is changed to playing and the button becomes a pause button.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=25)** And then when it's pressed for a second time, the state is changed to pause and the button becomes a play icon.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=30)** So in this media player class, there's a boolean field called isPlaying and this is initially set to false.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=38)** Then in the press button method it behaves differently depending on the state.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=42)** If it's playing, it causes the pause method and then sets isPlaying to false.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=46)** If not, then it calls the play method and it sets isPlaying to true.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=50)** So you should implement the state pattern so that you have an interface that defines a press button method.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=55)** And you should have two different states, one for playing and one for paused.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=59)** When you run the app after implementing this pattern, you should get the same output as before.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-state-pattern?u=76281980&t=63)** So good luck and I'll talk you through the solution in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), class, (1), interface (1)
> **Code Identifiers:** isplaying (3)
> **Cross-References:** in the next (1)

#### Solution: The State pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=5)** So this is my solution to the State Pattern challenge.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=8)** The first thing I'm going to do is I'm going to create an interface for the state.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=12)** So I'm going to create a new class and I'm going to call it PlayerState.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=16)** And you might have called it something slightly different, which is totally fine.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=21)** And I'm going to change class to interface.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=25)** Then in here I'm going to define a method which is going to be void, and it's going to be called pressButton, and it's going to take a media player object as an argument.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=36)** Now I need to implement this for the two different states.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=39)** So first of all that implements the PlayingState.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=42)** So I'm going to create a new class and I'm going to call it PlayingState.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=48)** And this class is going to implement the PlayerState interface.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=51)** So I'm going to add implements PlayerState.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=57)** Then I need to override the pressedButton method.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=59)** So I'm going to say @Override and then public void pressButton.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=65)** And pass in my MediaPlayer object.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=69)** And then in this case, I'm going to say player.pause and then I'm going to say player.setState and I'm going to pass in a new PausedState object.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=82)** So this won't compile until I've actually created this PausedState class and also this setState method in the player.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=89)** So now I'm going to do the same for the PausedState and I'm going to create a new class called PausedState.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=97)** And this is going to implement the player state interface.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=101)** So I'm going to add implements PlayerState.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=105)** Then I need to override the pressButton method again.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=107)** So I'm going to say @Override and then public void pressButton and pass in my media player.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=115)** Then in this one, I'm going to say player.play and then I'm going to say player.setState.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=123)** And in this case, I'm going to pass in a new playing state object.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=127)** So now I need to go back to the MediaPlayer class, and instead of having Boolean isPlaying, I'm going to change this to a PlayerState field.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=138)** And I'm going to rename this to State.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=143)** So I'm going to say rename symbol and change it to state.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=147)** Then inside the constructor, I'm going to say this.state = new PausedState.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=154)** And then inside the pressButton method, I'm going to remove all of the contents.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=158)** And instead I'm just going to say state.pressButton and then pass in this.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=165)** And finally, one more thing I need to do is add a setter method for the state.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=169)** So at the bottom, I'm going to say public void setState and pass in a player state object.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=177)** Then inside that method I can say this.state = state.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=184)** So now if I go back to the App class and I rerun the app, I can see I get the same output as last time.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=190)** So playing, displaying pause icon, and then paused, and then displaying play icon.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=195)** So well done if you managed to complete this exercise.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=197)** It was slightly different to my example in the previous movie.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-state-pattern?u=76281980&t=200)** So well done if you managed to get this one completed.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), interface (4), override (4), implements (3), public (3)
> **Code Identifiers:** pressbutton (6), setstate (4), pressedbutton (1), isplaying (1)
> **Cross-References:** go back to (2)


### 26. 25. The Strategy Pattern

#### Understand the Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=0)** In the strategy pattern, the word strategy usually refers to an algorithm.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=4)** When you use this pattern, you define a family of algorithms and make them interchangeable. As a real-life example, say you have a video game and the person you're controlling has different powers they can use.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=14)** For example, they can fly, they can climb things, they can swim, and so on.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=19)** The action the player takes, or the strategy they use will depend on the situation they find themselves in during the game.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=24)** They'll need to decide dynamically which one to use.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=27)** This is a bit like how the strategy pattern works. In Java, there are many different scenarios where you might need the strategy pattern.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=35)** For example, if you want to encrypt files but have different ways of encrypting them depending on the situation, or if you have different types of validation that you could use, or different sorting algorithms that you want to use or want to save to different file types, and so on.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=48)** This is quite a common pattern in Java, and it's relatively simple to implement.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=52)** So let's see what this would look like.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=54)** You would have the context which maintains a reference to the strategy objects.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=58)** The strategy is usually defined in an interface.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=61)** And then there are different concrete implementations for different strategies.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=64)** This is cleaner than having all the different strategies defined inside the context, and allows them to be used interchangeably at runtime.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=72)** Since this pattern was first described by the Gang of Four, new features in Java have been implemented which make this pattern even simpler to implement.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=79)** With the use of functional programming features that were introduced in Java 8, such as lambdas and static methods in functional interfaces, we can actually remove the need for the concrete implementations of the interface altogether.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-strategy-pattern?u=76281980&t=91)** I'll be demonstrating how this works in my examples.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (1), static (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** refers to (1), is a  (1)
> **Versions:** java 8 (1)

#### Implement the Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=0)** In this example, I want to implement a login page that has different options for logging in.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=4)** Users can log in with their username and password, or they can use a technique called single sign-on to log in, where they use a third-party applications to access multiple different apps without their password every time.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=15)** I'm going to be implementing this from scratch using the strategy pattern, and the first thing I'm going to do is create an interface for the logging in strategy.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=23)** So I'm going to create a new class and I'm going to call it Authenticator.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=30)** And this is actually going to be an interface.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=32)** So I'm going to change class to interface.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=35)** Then in here I'm going to define a method which is going to be void and it's going to be called log in.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=42)** Now there are going to be two implementations of this, and the first one is going to be the username and password option.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=48)** So I'm going to create a new class and I'm going to call it PasswordAuthenticator.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=54)** And this is going to implement the authenticator interface.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=57)** So I'm going to add implements Authenticator.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=61)** And I need to override the login method.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=63)** So I'm going to say @Override.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=65)** And then I'm going to say public void login.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=69)** And then here, I'm going to say System.out.println and pass in logging in with username and password.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=78)** In real life, there would be some more complex logic in here for the strategy, but I'm just going to have a simple System.out.println.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=85)** Now I'll do the same for single sign-on.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=87)** So I'm going to create another class and I'm going to call this one SingleSignOnAuthenticator.java.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=93)** And again this is going to implement the authenticator interface.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=98)** So I'm going to add implements authenticator.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=102)** And again I'm going to override the login method.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=104)** So I'm going to say @Override and then public void login.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=109)** And this time I'm going to say System.out.println and pass in logging in with single sign-on.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=117)** Now I need a login page where the users login, which will use one of these algorithms.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=123)** So I'm going to create another new class and I'm going to call it login page.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=128)** This is going to have a method to log in the user.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=131)** So I'm going to say public void logInUser.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=136)** And this is going to take an authenticator as an argument.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=140)** So this could either be a password authenticator or a single sign-on authenticator.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=145)** And inside the method, I'm going to say authenticator.login.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=149)** Now I need somewhere to try it out.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=151)** So I'm going to create one more class called App.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=154)** And inside here I'm going to create a main method.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=158)** And inside the main method I'm going to create a login page.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=161)** So I'm going to say var loginPage = new LoginPage.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=166)** Then I'm going to try out both my different login strategies.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=169)** So first, I'm going to say loginPage.loginUser and pass in a new password authenticator.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=177)** Then I'm going to say loginPage.loginUser, and this time I'm going to pass in a new single sign-on authenticator.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=184)** And if I run the app, I can see it says logging in with username and password and then logging in with single sign-on.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-strategy-pattern?u=76281980&t=193)** So there are now different strategies that the user can use to log in, and the login page doesn't need to know about the different implementations.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), override (4), pass (4), public (3), implements (2)
> **Code Identifiers:** loginuser (3), loginpage (3)
> **File Paths:** singlesignonauthenticator.java (1)

#### Improve the Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=0)** I've now implemented an app that lets users log in using two different strategies, with username and password or with single sign-on.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=7)** I can actually remove a lot of the code I have by making use of functional programming features in Java.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=12)** If I look at the authenticator interface, I can see that this only defines a single method, and that means that I could actually make use of lambdas instead of creating concrete implementations.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=24)** So if I go back to the App class again, I can use lambdas in here to implement the login functionality.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=31)** So for example, instead of passing in a new password authenticator to the login method, I can actually remove this and instead define a lambda for the functionality.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=40)** So I'm going to have a pair of brackets and then an arrow.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=44)** And then I'm going to say System.out.println and I'm going to pass in the message logging in with username and password.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=52)** Then I can do the same for single sign-on authenticator.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=56)** So I'm going to remove where it says new single sign-on authenticator.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=60)** And instead in here I'm going to have another lambda and I'm going to have a pair of brackets and arrow.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=66)** And I'm going to say System.out.println, and this time I'm going to have the message logging in with single sign-on.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=75)** So if I run this, I can see I get the same output as before, logging in with username and password and then logging in with single sign-on.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=85)** Another option I have is making use of static methods in interfaces.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=90)** So if I go back to authenticator again, I can define the method in here to return an authenticator that uses username and password to login.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=97)** So I'm going to say authenticator and I'll call this passwordAuthenticator.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=102)** Then I'm going to say equals, and then I'm going to implement my lambda.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=106)** So I'm going to say a pair of brackets and then an arrow, and then I'm going to have System.out.println.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=113)** And this time I'm going to say logging in with username and password.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=120)** Then I can do the same for single sign-on.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=122)** So I'm going to say authenticator singleSignOnAuthenticator =, then I'm going to have my lambda implementation.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=132)** So I'm going to say a pair of brackets, an arrow, and then this time I'm going to say System.out.println and pass in signing in with single sign-on.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=145)** Now I'm going to go back to the App class.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=148)** And instead of implementing the logic again here, I'm going to remove this lambda.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=154)** And this time I'm just going to say authenticator.passwordAuthenticator.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=161)** And then for the single sign-on one I'm again going to remove the lambda implementation from here.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=166)** And this time I'm going to say authenticator.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=170)** singleSignOnAuthenticator.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=174)** I can also go ahead and delete the concrete implementations of the authentication interface.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=179)** So I'm going to remove password authenticator.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=184)** And I'm also going to remove single sign on authenticator.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=190)** And if I run the app again, I can see I get the same output as before, so logging in with username and password and then logging in with single sign-on.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=200)** And that should say logging in instead of signing in.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=204)** So I'm just going to change that in the authenticator interface.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=209)** So I've got the same output as before, but I've significantly reduced the amount of code I had by deleting those two classes.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/improve-the-strategy-pattern?u=76281980&t=216)** And if I want to add more authentication types, I can just keep defining them inside this interface.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (6), interface (4), pass (2), this, (1), static (1)
> **Code Identifiers:** passwordauthenticator (2), singlesignonauthenticator (2)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### Challenge: The Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=5)** In this challenge, you'll be implementing the strategy pattern in an app for making payments.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=10)** Users can either pay by card or by bank transfer.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=13)** At the moment, there are two classes.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=15)** So the first class is the CheckoutPage class.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=18)** In here, there are two methods, one called payWithCard and one called payByBankTransfer.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=23)** And then there's a class called the App class which has a main method.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=26)** So inside this main method there's a new CheckoutPage object.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=30)** And then both payWithCard and payWithBankTransfer are called.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=34)** So if I run this, I can see it says payment made with card and then payment made by bank transfer.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=40)** The problem is that the checkout page is tightly coupled to the different payment methods, which isn't ideal.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=46)** If I wanted to use the payment methods on some other page as well, I'd have to copy and paste all the code for making the different types of payments.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=53)** So you should implement the strategy pattern so that the strategy used for the payment is decoupled from the CheckoutPage class.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=60)** When you've implemented the strategy pattern, you should run the app again and check you have the same output as before.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-strategy-pattern?u=76281980&t=66)** In my solution, I'll be using functional programming, but you can also do this without and still come up with a perfect solution.

> [!info]- Semantic Content
>
> **Code Identifiers:** paywithcard (2), paybybanktransfer (1), paywithbanktransfer (1)
> **Code Keywords:** class. (2), this, (1)

#### Solution: The Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=5)** This is my solution to the strategy pattern exercise.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=8)** First of all, I'm going to create a new Java class and I'm going to call it PaymentMethod, but any reasonable name is fine.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=16)** And I'm going to change class to interface.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=20)** Then in here I'm going to define a method called pay.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=23)** So I'm going to say void pay.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=25)** Then I'm going to create a method for returning a card payment.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=29)** So I'm going to say PaymentMethod and I'll call it card.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=33)** Then I'll say equals, then I'm going to implement a lambda.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=38)** So I'm going to have a pair of brackets and then an arrow and then System.out.println and pass in payments made with card.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=46)** Then I'll do the same for bank transfer payments.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=48)** So I'm going to say PaymentMethod, and I'll call this one bankTransfer.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=54)** Then I'm going to say equals and again I'm going to implement a lambda and have a pair of brackets, then an arrow, then System.out.println and pass in payments made by bank transfer.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=67)** Now I'm going to go to the CheckoutPage class.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=70)** And I'm going to remove the second method, and I'm going to rename the first one to pay for items.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=77)** So that's a bit more generic and can cover paying with either a card or by bank transfer.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=83)** And I'm going to pass in an argument now and it's going to be a payment method object, which I'll call PaymentMethod.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=90)** Then inside the body of the method, I'm going to remove the System.out.println and instead I'm going to say paymentMethod.pay.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=99)** And finally, I need to update the app class.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=102)** So I'm going to go back to app.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=104)** And for this first one, instead of saying checkoutPage.payWithCard, I'm going to say checkoutPage.payForItems and I'm going to pass in paymentMethod.card.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=117)** And for the second one, instead of saying pay by bank transfer, I'm going to say checkoutPage.payForItems, and this time I'm going to pass in PaymentMethod.bankTransfer.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=129)** Now if I run the app again, I can see I get the same output as before, so payment made with card and then payment made by bank transfer.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-strategy-pattern?u=76281980&t=139)** So well done if you managed to complete this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), lambda (2), class. (2), interface (1), finally, (1)
> **Code Identifiers:** checkoutpage (3), banktransfer (2), paymentmethod (2), payforitems (2), paywithcard (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 27. 26. The Template Method Pattern

#### Understand the Template Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=0)** The template method pattern is all about defining the common steps in an algorithm in a superclass, and redefining some of those steps in a subclass.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=7)** This is actually one of the most commonly used design patterns.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=11)** Imagine there's a recipe for making pizza.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=13)** Some steps in the recipe are the same for every pizza.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=16)** For example, how to make the base and how long to leave the pizza in the oven will be the same for all of them, but the instructions for adding the toppings will be different for each type of pizza order.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=24)** In terms of how this would look in Java code, you would have an abstract class which has methods for creating the base and cooking in the oven.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=31)** The method for adding the topping would be an abstract method without an implementation.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=35)** Then you would have different concrete subclasses for the different types of pizza, and they would have their own implementations of the addTopping method.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=42)** For example, you could have a Hawaiian pizza that adds ham and pineapple in the addTopping method.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=47)** This pattern is fairly common in frameworks, but there are some reasons why not everyone is a fan of the template method pattern.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=54)** It can be difficult to communicate to users of the framework what the intent is.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=58)** If you came across the use of this pattern, it might not be immediately obvious which parts are meant to be changed, and it can also be quite difficult to follow the flow of the program as the functionality can jump between different classes.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=69)** However, this is certainly not a reason not to use it if it fits your use case. And it is a useful pattern to know as it is so commonly used.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=78)** It can definitely be useful when you want to implement the common parts of an algorithm once, and leave the varying parts to subclasses.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-template-method-pattern?u=76281980&t=85)** In particular, if you find that you have classes which duplicate the same code, you might be able to refactor some of these steps into an abstract class.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (3), case. (1), class. (1)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** addtopping (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)

#### Implement the Template Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=0)** In this example, I have an app for sending emails with different templates.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=4)** I have two different types of email, one called welcome email and one called unsubscribe email.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=9)** So in the WelcomeEmail class, there's a method called sendGreeting, which is the beginning of the email.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=14)** So that prints out the word hello.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=16)** Then there's the sendMessageBody method which prints out thank you for signing up for our service.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=21)** And then there's the sendClosing method which prints out best regards, Sam.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=25)** Then there's the UnsubscribeEmail class.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=28)** So the sendGreeting method is exactly the same, it prints out hello.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=31)** Then the sendMessageBody is different, it says we are sorry to see you go.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=35)** And then the sendClosing method is the same as the welcome email and it says best regards, Sam.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=41)** And then in the App class, I have a main method where I'm creating a welcome email, and then I'm sending the greeting, the message body, and the closing parts.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=51)** And then I'm creating an unsubscribe email.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=53)** And again I'm sending the greeting, the message body, and the closing part.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=56)** So if I run this, I can see it prints out the welcome email first.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=61)** So it says hello, thank you for signing up for our service, best regards, Sam.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=64)** And then the unsubscribe email says hello, we are sorry to see you go.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=68)** Best regards, Sam.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=70)** So there is some duplication in these emails as the welcome part and the closing parts are the same.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=75)** And it would be easy to imagine that I might want to send other emails for my service with the same beginning and end, but with a different message body.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=82)** So I'm going to create an abstract class to put the duplicated logic in.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=87)** So I'm going to create a new class and I'm going to call it Email.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=92)** And first of all, I'm going to copy the welcome and closed parts of the email from one of the other classes.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=98)** So I'm going to go to the UnsubscribeEmail class, and I'm going to copy the sendGreeting method and paste it inside the Email class.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=109)** Then I'm going to go back to UnsubscribeEmail and paste the send closing method.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=116)** And I'm also going to paste that inside this Email class.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=122)** So those parts are the same but the same message body is different in both.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=125)** So I'm going to create an abstract class for this.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=128)** And I also need to make this class an abstract class.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=130)** So I'm going to say public abstract class email.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=134)** Then I'm going to create an abstract method for sending the message body.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=137)** So I'm going to say public abstract void sendMessageBody.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=146)** And now I'm going to make my UnsubscribeEmail class extend the Email class.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=150)** So at the top I'm going to add extends email.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=153)** And then I can get rid of the sendGreeting method because I've already got that defined in email.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=158)** And I can also get rid of the sendClosing method.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=162)** And I'll put an @Override on top of the sendMessagBody method.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=167)** Now I'm going to do the same for the welcome email.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=170)** So I'm going to go to that class and I'm going to add extends email.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=175)** Then I'm going to get rid of the sendGreeting method and the sendClosing method, and I'm going to put an @Override on top of the sendMessageBody method signature.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=190)** So now if I go back to the App class and I run this again, I can see I get the same output as before.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=198)** So the welcome email content and then the unsubscribe email content.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-template-method-pattern?u=76281980&t=203)** So now I've removed my duplicate codes and if I want to create more email templates, I can simply extend my email class to reuse the welcome and closing parts of the email.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (6), class. (5), class, (3), public (2), extends (2)
> **Code Identifiers:** sendgreeting (5), sendmessagebody (4), sendclosing (4), sendmessagbody (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Analogies:** imagine (1)

#### Challenge: The Template Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=5)** In this exercise, you will implement the template method pattern in an app for generating pizza recipes.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=11)** So at the moment, we've got this recipe class with a main method in it.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=14)** And inside the main method, we're creating a vegetarian pizza, and then we're making the base, adding the toppings, and cooking it.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=20)** And then we're creating a meat feast pizza, and then again making the base, adding the toppings and cooking it.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=26)** So if I run this, it prints out, first of all, a recipe for making a vegetarian pizza and then it prints out a recipe for making a meat feast pizza.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=35)** If you look into the two pizza classes, you'll see that there's some duplication in the code, so you should implement the template method pattern to remove this duplication, and that will make it easier to create more pizzas with different toppings in the future.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=47)** When you've implemented the pattern, you should be able to run the app again and see the same output as before.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-template-method-pattern?u=76281980&t=52)** So have fun and I'll go through the solution in the next video.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Code Keywords:** this, (1)
> **Cross-References:** in the next (1)

#### Solution: The Template Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=5)** Now, I'm going to implement my solution for the template method pattern exercise.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=9)** So first of all, I'm going to create a new class, and I'm going to call it Pizza.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=15)** And I'm going to make this an abstract class.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=18)** Then I'm going to copy a couple of methods from the other Pizza classes into this one.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=22)** So I'm going to go to MeatFeastPizza and I'm going to copy the makeBase method.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=27)** And then I'm going to paste it inside the Pizza class.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=31)** Then from the MeatFeastPizza class, I'm going to copy the cook method and paste it inside the Pizza class.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=40)** Then I'm going to have an abstract method for adding the toppings.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=45)** So in between these two methods, I'm going to say public abstract void addToppings.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=54)** So now I'm going to make my two other pizza classes extend this Pizza class.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=57)** So I'm going to go to MeatFeastPizza, and at the top, I'm going to add extends Pizza.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=64)** Then I can go ahead and remove the makeBase method and the cook method.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=70)** And I'll just add an @Override on top of this addToppings method.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=75)** And then I'll do the same for the VegetarianPizza class.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=78)** So I'm going to add the extends Pizza.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=82)** Then I can remove the makeBase method and the cook method.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=90)** And I'll add an @Override above the addToppings method.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-template-method-pattern?u=76281980&t=95)** So now if I go back to the Recipe class and rerun my app, I can see I still get the same output as before.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), abstract (3), class, (2), extends (2), override (2)
> **Code Identifiers:** makebase (3), addtoppings (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)


### 28. 27. The Visitor Pattern

#### Understand the Visitor pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=0)** Imagine you have a tree structure of objects, and you want to perform an operation on all the elements of it.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=6)** The visitor pattern allows you to do this without making changes to the elements themselves.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=10)** Instead, you have a separate visitor objects, which is passed to each object to perform the operation.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=16)** As a real-world analogy, imagine someone drives a car to a mechanic.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=20)** The mechanic temporarily takes over the car to fix some things, and then the car is driven away again.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=26)** The mechanics might do different kinds of fixes depending on the problem, and there also might be different kinds of vehicles, such as trucks and buses and so on.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=33)** The different fixes might be similar for each different type of vehicle, but also slightly different.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=38)** Let's see what the visitor pattern looks like in a Java program.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=42)** So let's say you have an interface with some concrete implementations of it.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=46)** And let's say you want to apply some operation to each of the concrete implementations.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=50)** The operation will be similar but slightly different for each concrete element.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=54)** One option would be to put a method for the operation inside each element, but that gives you a structure that's difficult to understand and make changes to.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=62)** This also breaks the open or closed principle.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=65)** This is a principle in object-oriented design which says that classes should be open for extension but closed for modification.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=71)** One option here is to use the visitor pattern.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=74)** In this version, you create an interface that defines a visit method for each of the concrete implementations.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=80)** Then you have concrete implementations of the visitor interface.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=83)** The visitors have a method called visits for each of the different concrete elements, and the concrete elements have a method called accepts, which accepts a visitor.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=92)** In particular, the visitor pattern is useful if you have a composite or a list of other elements.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=98)** For example, say you have a file system interface. Directory and file both implements this interface, and a directory can contain a list of file objects.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=107)** This is known as the object structure.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=110)** The visitor pattern allows you to apply operations to each element in the list without worrying about type safety, because each will have its own separate visit method defined that performs the operation differently for each type.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=121)** It's worth noting that the visitor pattern is best used when the elements are not likely to change.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=127)** If you were to start adding more elements to the concrete implementations, you would have to go back and update the visitor interface as well as every concrete implementation of it.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=135)** This inflexibility is one of the downsides of using the visitor pattern.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=139)** It's also fairly rare to see this pattern used, partly because it's so complex and partly because it's for a very specific use case.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=146)** But if you do have this use case and you want to define new operations without making changes to the existing object structure, the visitor pattern can offer a neat and elegant solution.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=157)** It's probably best to explain this pattern with a code example.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-visitor-pattern?u=76281980&t=160)** So that's what I'm going to do in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), let (3), implements (1), type. (1), case. (1)
> **Analogies:** imagine (2), such as (1), for example (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)

#### Implement the Visitor pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=0)** In this example, I have an app which represents a file structure.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=4)** So first of all, there's an interface called FileSystemElement.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=7)** And this defines a single method called getName which returns a string.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=10)** Then there are two classes that implement this interface; File and Directory.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=14)** So if I look in the File class, this class has two fields, a string called name and an int called size, which is the size of the file, and these are both set by arguments passed into the constructor.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=25)** And then there's getter methods for the name and the size.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=29)** And if I look in the Directory class, this class also has two fields, a string called name and an ArrayList of other FileSystemElement. So that could contain other directories or files.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=42)** And the name is set by a value passed into the constructor, and then there's a getName method.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=47)** And then there's also a method called addElement, which adds an element to the list, and a method called getElements, which returns the list.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=56)** Then I have an App class with a main method.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=59)** So in here, I'm creating a directory called directory1 and adding a file called file1.txt to it.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=65)** Then I'm creating a second directory called directory2 and adding a second file called file2.txt to it.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=72)** Then I'm adding the whole of directory2 to directory1.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=76)** So directory1 contains file1.txt and directory2 which in turn contains file2.txt.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=83)** Now, let's say that I want to apply an operation to all files and directories to get the total size of the file system.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=90)** I'm going to use the visitor pattern to do this.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=93)** So first of all, I'm going to create a new class and I'm going to call it Visitor.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=98)** And this class is going to be an interface.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=102)** In here, I need to define a method for visiting each type of object in the file system.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=107)** So first of all, I'm going to say void visit and pass in a file object.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=113)** And then again, I'm going to say void visit, but this time I'm going to pass in a directory object.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=120)** Now, I'm going to create a concrete implementation of this to get the file size.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=124)** So I'm going to create another new class, and I'm going to call this one CalculateSizeVisitor.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=131)** And this class is going to to implement visitor.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=133)** So at the top, I'm going to add implements Visitor.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=137)** First of all, I'm going to create a field to keep track of the total size.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=141)** So I'm going to say private int total Size.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=146)** Now, I also need to override the methods from the interface.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=149)** So I'll start with the visit method that takes a file object and I'll say @Override and then public void visit, then I need to pass in a file object.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=159)** Then for this one, I'm going to add the size of the file to the total size.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=163)** So I'm going to say totalSize plus equals file.getSize.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=170)** Now, we'll do the same for the Directory class.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=173)** So I'm going to say @Override and then public void visit and this time I'm going to pass in a directory.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=182)** For this one, the implementation is going to be slightly different.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=186)** I want to get the size of all the files in the directory and add them to the total.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=190)** So I'm going to say directory.getElements and then I'm going to say forEach.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=197)** And then for each element, I'm going to call a method called accept on it.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=201)** So I'm going to say e and then an arrow and then e.accept and pass in this.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=209)** So this won't compile yet because I haven't created this accept method.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=212)** So let's implement that method now.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=214)** So first of all, I'm going to put it in the FileSystemElement interface.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=218)** So I'm going to go to that class, and I'm going to define a new method in here.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=223)** So I'm going to say void accept and this is going to take a visitor as an argument.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=229)** So now I need to add this method to my File and Directory classes.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=232)** So I'm going to go to the File class.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=235)** And at the bottom of the class, I'm going to add @Override and then public void accept and pass in a visitor object.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=246)** Then inside this method, I'm going to say visitor.visit and pass in this.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=253)** And I can actually copy this method and then I'm going to paste it inside the Directory class.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=259)** So at the bottom of Directory, I'm going to paste that accept method.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=264)** So my CalculateSizeVisitor class should compile now.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=268)** Now, I'm going to test it out in the App class.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=271)** So I'm going to go back to App.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=273)** And at the bottom of this method, I'm going to create my visitor.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=276)** So I'm going to say var visitor equals new CalculateSizeVisitor.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=284)** Then I'm going to say directory1.accept and pass in the visitor.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=292)** And to check it's worked, I want to print out the totalSize variable from the CalculateSizeVisitor class.
>
> **[4:58](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=298)** So I'm going to add a getter method for that variable.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=300)** So I'm going to go back to CalculateSizeVisitor.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=302)** And at the bottom, I'm going to say public int getsTotalSize.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=308)** Then I'm going to return the totalSize variable.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=312)** So now I can go back to App.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=314)** And in here, I'm going to say System.out.println and then I'm going to print out total size and then visitor.getTotalSize.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=325)** So this should print out 300, because file1.txt has a size of 100 and file2.txt has a size of 200. That's 100 plus 200 is 300.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=335)** So if I run this, I can see it prints out "Total size: 300."
>
> **[5:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-the-visitor-pattern?u=76281980&t=341)** So that's how you can use the visitor pattern to apply actions to a composite object structure.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), interface (5), class, (5), class. (5), override (4)
> **Code Identifiers:** totalsize (3), getname (2), getelements (2), addelement (1), getsize (1)
> **File Paths:** file1.txt (3), file2.txt (3)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (2)

#### Challenge: The Visitor pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=5)** In this final challenge, you'll be implementing the visitor pattern in a ticketing system app.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=10)** So firstly, there's an interface called TicketElement, which has a single method called getPrice.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=15)** Then there are two implementations of this.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=18)** So the first one is the AdultTicket class.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=20)** And in here the price is initially set to 10.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=23)** Then in the getPrice method, we return that price field, and there's also a setPrice method to change the price.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=29)** The other class that implements TicketElement is the GroupTicket class.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=33)** So in this one there's a single field called elements which is an array list of other ticket elements.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=38)** Then in the getPrice method, it actually gets all of the prices of the tickets in the list and adds them together.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=45)** Then there's a method called addElement to add a ticket elements to the list and getElements which returns the list.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=51)** Finally, there's the App class, which has a main method.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=55)** So in here we're creating a group ticket and then two adult tickets which we're then adding to the group ticket.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=61)** Then it prints out the price.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=62)** So an adult ticket is set to 10.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=64)** So a group ticket with two tickets should add up to 20.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=67)** So if I run this, it tells us that the current price is 20.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=71)** For this challenge, you should implement a visitor that applies a discounted tickets.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=76)** After the discount is applied, the price of adult tickets should be five, so the cost of the group ticket should be 10 instead of 20.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=83)** That some commented out code at the bottom of this that you should uncomment when you finish the exercise.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=88)** So you should create a visitor interface and then a discount visitor which applies the discount.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/challenge-the-visitor-pattern?u=76281980&t=94)** This is probably one of the most tricky challenges in this course, so do feel free to skip ahead to the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), class. (2), this. (1), implements (1), finally, (1)
> **Code Identifiers:** getprice (3), setprice (1), addelement (1), getelements (1)
> **Cross-References:** next video (1)

#### Solution: The Visitor pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=5)** So this is my solution to the visitor pattern challenge.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=8)** The first thing I'm going to do is I'm going to create an interface for the visitor.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=12)** So I'm going to create a new Java class and I'm going to call it Visitor.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=18)** And this is going to be an interface.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=21)** Then I'm going to define visit methods for the AdultTicket and the GroupTicket classes.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=25)** So first of all, I'm going to say void visit and pass in an adultTicket object.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=31)** Then I'm going to say void visit and this time I'm going to pass in a groupTicket object.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=39)** So now I'm going to create a concrete implementation of this called discount visitor.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=44)** So I'm going to create another class and call it DiscountVisitor.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=49)** And this class is going to implement the Visitor interface.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=52)** So I'm going to add implements Visitor.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=55)** So first of all, I'm going to override the visit method where I pass in an adult ticket.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=59)** So I'm going to say @Override and then I'm going to say public void visit and pass in an adultTicket object.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=69)** And then in this one, I'm going to set the price of the ticket to five.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=72)** So I'm going to say adultTicket.setPrice and pass in five.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=78)** Now, I'm going to override the visit method for the group ticket.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=81)** So I'm going to say @Override and then public void visit and this time pass in a groupTicket object.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=90)** So in this one, I want to set the price for all of the tickets in the list of tickets inside this group tickets.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=96)** So I'm going to say groupTickets.getElements and then forEach.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=104)** And then inside here, I'm going to say element, and then for each element, I'm going to say element.accept and pass in this.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=115)** So I haven't created this exact method yet, so it's not going to compile just yet.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=119)** So I'm going to add this accept methods to the TicketElement first.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=122)** So I'm going to go to TicketElement and I'm going to add a new method where I say void accept and I pass in a visitor object.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=132)** So now I need to add this method to the AdultTicket and GroupTicket classes.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=136)** So I'm going to go to AdultTicket.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=139)** And at the bottom, I'm going to say @Override and then public void accept and pass in a visitor object.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=149)** Then inside this method, I'm going to say visitor.visit and pass in this.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=155)** Then I'm just going to copy this method and paste it inside the GroupTicket class.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=161)** So at the bottom of that class, I'm going to paste that accept method.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=165)** So if I go back to my App class now, I can uncomment these commented outlines.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=171)** And if I run this, I can see it says the price is 20 initially and then it's halved to 10 because the ticket prices are now at five each.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/solution-the-visitor-pattern?u=76281980&t=180)** So if you did manage to complete that one, you should be very pleased with yourself as it is one of the most complex challenges.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (10), override (5), interface (3), public (3), this. (2)
> **Code Identifiers:** adultticket (3), groupticket (2), setprice (1), grouptickets (1), getelements (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)


### 29. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=0)** Well done on completing this design patterns course.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=3)** Thank you for joining me and I hope you enjoyed it and found it useful.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=6)** We've covered the most well-known design patterns in Java.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=9)** Actually, writing code yourself is the best way to learn it, so completing the exercises in this course should have helped you solidify what you've learned.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=16)** Hopefully, you now feel more confident about putting your design pattern knowledge into practice.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=21)** If you want to keep learning more about Java, check out the many other Java courses in the LinkedIn Learning library.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=26)** There are several other intermediate courses or there are many courses on more advanced topics.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/next-steps?u=76281980&t=31)** Good luck with your continued learning.


## Instructor

- [[Bethan Palmer]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/guide-to-java-design-patterns-4512383/codespaces)

## Skills Covered

- Software Design Patterns
- Java

## Path Context

### In [[Building Your Java Skills]]
← [[Java- Testing with JUnit]] | **4 of 6** | [[Continuous Delivery for Cloud Native Java Apps]] →

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