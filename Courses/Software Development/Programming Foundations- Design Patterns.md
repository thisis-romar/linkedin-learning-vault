---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-design-patterns-2
url: "https://www.linkedin.com/learning/programming-foundations-design-patterns-2"
duration_minutes: 165
duration: 2h 45m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGioJ473fzHuQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669791879?e=2147483647&amp;v=beta&amp;t=hS27rzezTdIQUJxzm2xerXVmvMuiIUfPi7JuEbLOTJE"
linkedin_topic: Software Development
learning_paths:
  - Become a Programmer- Foundations
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-04-20
---

![Programming Foundations: Design Patterns](https://media.licdn.com/dms/image/v2/C4E0DAQGioJ473fzHuQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669791879?e=2147483647&amp;v=beta&amp;t=hS27rzezTdIQUJxzm2xerXVmvMuiIUfPi7JuEbLOTJE)

# Programming Foundations: Design Patterns

> Design patterns are reusable solutions that solve the challenges software developers face over and over again. Rather than reinventing the wheel, learn how to make use of these proven and tested patterns that will make your software more flexible and resilient to change. This course introduces you to design patterns and takes you through several of the most used object-oriented patterns. Elisabeth

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2) | 2h 45m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Elisabeth Robson]]
- [[Eric Freeman]]

## Table of Contents

### Introduction

#### Don't reinvent the wheel
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=0)** - Object-oriented design experience often doesn't come easy.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=5)** Even for experienced developers it can take a lot of trial and error to come up with designs that are flexible, extensible, more maintainable, or even just easier to communicate to your teammates.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=18)** But chances are some developer has already encountered a design challenge similar to yours, and they've come up with a solution and captured it in a design pattern, a design pattern that's well documented and ready for you to use.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=35)** - Design patterns are general solutions to common object-oriented problems.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=40)** You can use design patterns to create software that is more flexible, maintainable, and resilient to change.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=47)** Central to these design patterns are a whole new set of design principles that go beyond the core object-oriented principles.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=54)** These design principles will help you to avoid problematic designs and help you understand how design patterns work.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=62)** - Hi, I'm Eric Freeman.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=64)** - And I'm Elisabeth Robson.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/don-t-reinvent-the-wheel?u=76281980&t=66)** We hope you'll join us to learn how to improve your object-oriented skills with design patterns.

> [!info]- Semantic Content
>
> **Speakers:** - object (1), - design (1), - hi (1), - and (1)
> **Analogies:** similar to (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=0)** - To be successful in this course, you should have experience with a programming language like Java, C#, Python, Swift or another object-oriented language.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=12)** During the course, we'll be looking at small snippets of code.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=16)** We've also provided the examples we talk about in this course as complete examples that you can download in the exercise files.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=24)** There, you'll be able to see the full context of how that code is implemented in Java and how each snippet interacts with the larger body of code.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=33)** - You'll be using simple, UML style class diagrams to describe each of the patterns and Java to implement the examples.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=41)** You don't need prior experience with Java but it will be helpful.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=45)** We've kept examples fairly simple, so you should be able to easily transfer the ideas to your favorite object-oriented programming language.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=53)** - We won't be using a specific IDE for this course, so if you'd like any additional information on how to compile and run Java code on your own, we'd recommend you take a look at some of the Java courses available like Java Essential Training or Java IDE Overview courses.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=72)** Both of these courses will get you started with Java if you want to compile and run the examples.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know?u=76281980&t=78)** - This course builds on the principles of object-oriented programming, but at any point during this course you need a review of inheritance, polyno-rithms, abstraction or encapsulation, take a look at Programming Foundations Object-Oriented Design for a good overview.

> [!info]- Semantic Content
>
> **Speakers:** - to (1), - you (1), - we (1), - this (1)
> **Env Vars:** ide (2), uml (1)
> **CLI Commands:** python (1)
> **Exercise Files:** exercise files (1)


### 1. Design Patterns

#### Object-oriented design experience
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=0)** - Object-oriented design experience doesn't come easy, and it can take a lot of trial and error to come up with designs that are flexible and extensible.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=10)** We're all taught the importance of the fundamental properties of object-oriented programming, namely inheritance, polymorphism, abstraction, and encapsulation.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=21)** When these are the only tools in your toolbox, your design process can quickly go off the rails.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=27)** In fact, it can lead to software that is downright difficult to design, maintain, and extend.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=35)** - No doubt, you're already familiar with off-the-shelf libraries, modules, and frameworks.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=41)** This is packaged up code that you compile into your application so that you can benefit from code that other developers have written.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=50)** Design patterns, on the other hand, give us packaged up design insight and experience.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=56)** Design patterns provide paths to solutions for some of the most common object-oriented design conundrums.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=64)** They're solutions developed over time through trial and error that are well-documented and can be applied to your specific design problem.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=74)** - We like to say design patterns don't go directly into your code.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=77)** Instead, they first go into your brain.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=80)** Once you've studied patterns and you have a good working knowledge of them, you can then start to apply them in your own object-oriented designs.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=89)** In this course, we're going to start to get those patterns into your brain.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=94)** - Design patterns were first described in the book Design Patterns: Elements of Reusable Object-Oriented Software Design.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=103)** This book was written by four software engineers affectionately known as the gang of four.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=108)** In their book, they catalog 23 of these patterns and began a whole new way of thinking about object-oriented design and programming.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=117)** While the list of design patterns has grown over the last couple of decades these original 23 patterns are still among the most commonly used today.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=130)** - So what will using design patterns get you?
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=133)** Design patterns will first and foremost help you to not reinvent the wheel.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=138)** By using patterns, you can often shortcut your design process by leveraging the hard work of other developers who have already gone through a similar exercise and found good solutions that you can use.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=150)** - [Woman] There's another big advantage to using design patterns.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=154)** Using patterns will often help you to create software that is resilient to change.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=159)** That's an important consideration because software requirements are always changing.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=165)** New features are always being added, and environments are constantly evolving.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=170)** Design patterns can protect you from the changes and additions you'll need to make in the future.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/object-oriented-design-experience?u=76281980&t=174)** you'll need to make in the future.

> [!info]- Semantic Content
>
> **Speakers:** - object (1), - no (1), - we (1), - design (1), - so (1)
> **CLI Commands:** make (2), rails (1)
> **Prerequisites:** you'll need (2)
> **Definitions:** known as (1)

#### What are design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=0)** - [Instructor] Design patterns are all about reusing experience, design experience.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=5)** Design patterns aren't algorithms, and they're not code.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=9)** A design pattern is an approach to thinking about software design that incorporates the experience of developers who've had similar problems, as well as fundamental design principles that guide how we structure software designs.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=24)** A design pattern is usually expressed by a definition, and a class diagram, and collected into a catalog of patterns.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=32)** In these catalogs, you'll find example scenarios when a pattern might be applicable, the consequences of using a pattern, and even some sample code.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=44)** As you'll see, patterns are pretty abstract.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=47)** It's up to you to determine if the pattern is right for your situation, and your specific problem.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=53)** And once you've figured that out, how best to implement it.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=57)** Design patterns are not specific solutions for specific kinds of software.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=62)** There isn't one design pattern for banking software, and a different design pattern for game software, and another pattern for social media software.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=72)** Rather, design patterns are general solutions for common problems that crop up in all kinds of applications.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=80)** For instance, you might be working through your class design and discover that if one object changes, several other objects need to know about that change.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=90)** Is there a way to structure objects so they aren't too tightly dependent on one another?
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=95)** This is the kind of problem that you'll encounter in software systems across all domains.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=101)** And while there are many different ways that you could solve this problem, there's a proven way to solve it.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=107)** A best practice called the observer design pattern.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=111)** We'll be learning more about the observer pattern later.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=115)** In this course, we'll be focusing on six of the 23 original patterns in the Gang of Four Catalog.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=122)** These are the patterns you're likely to find most useful, because they're approaches to the most common problems that crop up as you design and develop a software system.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=133)** Once you've learned how to read and understand these six patterns, you'll be able to explore more patterns on your own.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=140)** You'll find a more complete treatment of the original 23 patterns in our book, "Head First Design Patterns," a brain friendly guide to design patterns.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=150)** We'll describe each pattern conceptually, talk about it's object oriented design in the form of a class diagram, and then show code snippets to show you the key features of a pattern implemented in code.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-patterns?u=76281980&t=163)** Our goal is to demonstrate each pattern as simply as possible so that you can apply it to your own problems.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Keywords:** abstract (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### What are design principles?
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=0)** - [Instructor] Although this course is about design patterns, you'll also find it beneficial to learn a set of object-oriented design principles.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=8)** These principles go beyond the object-oriented basics you already know, like inheritance, polymorphism, abstraction, and encapsulation.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=17)** And these principles really give you a set of guidelines that will help you to avoid bad object-oriented design.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=24)** These might be designs that are too rigid, inflexible, too fragile, too hard to understand.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=30)** You might be saying to yourself that sounds a lot like a design pattern, and they do share a common goal, good object-oriented design.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=39)** But principles and patterns are different.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=41)** Principles are general guidelines while patterns are specific design solutions often aimed at solving common object-oriented problems.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=49)** As we see more of each, you'll start to understand the difference.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=54)** Let's look at one example of an important principle we'll be touching on throughout the course, encapsulate what varies.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=60)** This principle tells us to look for parts of our code that are frequently changing and to pull out those parts in order to separate them from all the other code that isn't changing.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=70)** And sometimes code changes with every new set of requirements.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=74)** The principle doesn't tell us at all how to actually do this.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=77)** There are a number of ways you could separate the code that varies from the code that stays the same.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=83)** Instead, principles tell us to strive for a particular quality in our design, and this is often where patterns come in.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=90)** Design patterns often demonstrate different ways of, for example, separating what varies in our design.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=97)** We'll see this principle at play in our first pattern, the strategy pattern, which shows us how to separate out an object's behavior.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=103)** It's algorithm, if you will, in a flexible and extensible way.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=108)** This also won't be the last you see of the encapsulate what varies principle.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=112)** This one principle forms the basis for almost every design pattern.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=117)** Almost all patterns provide a way to let some part of the system vary independently from the other parts.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-are-design-principles?u=76281980&t=124)** And as you'll see, different patterns do this in different ways depending on the problems they're solving.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. The Strategy Pattern

#### Revisiting inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=0)** - Inheritance is one of the core concepts of object-oriented design.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=5)** Through inheritance, you can express class relationships that allow you to reuse and extend the behavior and properties of other classes.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=14)** And code reuse is often touted as the main benefit of inheritance in object-oriented design.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=22)** Typically you think of one class inheriting from another if they share an IS-A relationship.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=27)** For instance, if a cat is an animal, then a cat should inherit from the animal class.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=34)** We can extend this further with other types of animals.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=37)** In each case, we're reusing the implementation of the classes we inherit from.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=43)** This is a powerful technique, and there are many designs where inheritance is exactly the right choice.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=50)** While inheritance is a core concept in object-oriented programming, it's also easy to overdo inheritance and make it the basis of all your object-oriented design.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=61)** It's easy to treat inheritance as a hammer, making every design look like it needs superclasses and subclasses, in other words, your nails.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=70)** So pay attention.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=76)** it might be time to take a closer look at your design.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=79)** Why?
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=80)** Because as we're going to see, when you overuse inheritance, you can end up with designs that are inflexible and difficult to change.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/revisiting-inheritance?u=76281980&t=87)** and difficult to change.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **CLI Commands:** cat (2), make (1)
> **Code Keywords:** class. (1), case, (1), from. (1)
> **Analogies:** for instance (1)
> **Speakers:** - inheritance (1)

#### Limitations of inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=0)** - [Instructor] What we really need at this point is an example to demonstrate the problems with inheritance, so let's take a look at a class design for a duck simulator.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=11)** Let's say we want to design a duck simulator.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=13)** To do that we need a set of Duck classes.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=16)** It would be natural to think that you could start with a Duck superclass.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=20)** You might give the superclass a quack method and a swim method because those are the things that you'd guess all ducks are going to want to do.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=29)** Let's also give it a display method.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=31)** But we'll keep that abstract meaning each subclass will need to implement it because each duck will want to implement its own unique appearance.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=40)** Now because display is abstract, that makes our duck class abstract too meaning that we cannot instantiate a duck directly.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=49)** To create a duck, we need some concrete classes.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=52)** Let's add a concrete class MallardDuck and implement its display method so it looks like a mallard.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=59)** And we'll also add a redheaded duck and display its display method so it looks like a redheaded duck.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=65)** So far this looks like a good design, right?
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=68)** Well, let's see.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=70)** Ask yourself, what happens sooner or later in every object-oriented design?
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=75)** Well, the unexpected of course.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=78)** Let's say we get a request to add another new duck type, a RubberDuck, simple enough, right?
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=84)** First we'll implement the duck's display method to make it look like a rubber duck.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=88)** But then we have a slight problem because rubber ducks don't quack.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=92)** In fact, they usually squeak but we can handle that by overriding the quack method and making the rubber duck squeak.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=100)** So far our design's holding up pretty well, don't you think?
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=103)** Here's another common occurrence that happens when we develop object-oriented systems.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=108)** We get a feature request.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=111)** Let's imagine we get a feature request to make ducks fly.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=114)** Well, now we can leverage inheritance by adding flying to the base duck superclass and then all ducks will be able to inherit or reuse this behavior.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=126)** Once we've added a fly method to duck, then MallardDuck and RedheadDuck and oops, the RubberDuck can now fly too but we all know that rubber ducks don't actually fly.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=138)** We need to fix the RubberDuck again by overriding the fly method.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=142)** And then we'll add some code to make sure that the RubberDuck does nothing in the method when it's called.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=148)** Okay, any real duck simulator probably needs to deal with decoy ducks too, so let's see how a decoy duck fits into our design.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=157)** First, we need a display method and decoy ducks don't quack, so we'll override the quack method with an implementation that's silent.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=167)** Oh and we'll also need to override fly so that the decoy duck doesn't fly.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=172)** We're able to make all these additions within the framework of our design but is this really the best design?
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=179)** Let's step back and think about this.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=181)** Because we're overriding most of the methods now in the superclass, we're not getting a whole lot of benefit from inheritance, at least for some ducks.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=190)** Let's step through some of the problems in detail.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=193)** First, while we are keeping ducks organized in a hierarchy of classes, we don't seem to be getting a huge reuse benefits and things are getting a little messy including.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=204)** Also, we're starting to get code duplicated across the classes.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=209)** We've got code that keeps ducks from flying.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=211)** We've got code that keeps ducks from quacking or has them making other types of sounds.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=216)** And another thing, we can't really look at our superclass and get a whole lot of direct knowledge about the ducks.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=223)** We have to go into each concrete class to learn more about what the code does.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=228)** And as we saw with fly, a simple change to the superclass can lead to unintended side effects with the other ducks.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=236)** Finally, notice that all the ducks' behavior is assigned at compile time and because of this, we can't change a particular duck instance at runtime say to not be able to fly if it's been injured or captured.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=250)** So, this design isn't providing much flexibility.
>
> **[4:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/limitations-of-inheritance?u=76281980&t=253)** The flexibility that we might need as the application becomes more sophisticated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), abstract (3), override (2), type, (1), this. (1)
> **CLI Commands:** make (4)
> **Cross-References:** as we saw (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Trying interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=0)** - [Instructor] Now if you're a well-schooled Java developer, you might be saying, hey, let's use interfaces instead.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=7)** You might remember that an interface defines the methods an object must implement in order to be a particular type.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=15)** For instance, if a duck implements a flyable interface with one method fly, then duck must implement the method fly to be considered the flyable type.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=26)** So interfaces allow different classes to share similarities like ducks sharing a fly behavior.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=33)** Interfaces also allow for having two classes that are alike, but don't have the same behavior, for some ducks being able to fly and some not.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=43)** So interfaces actually sound perfect for our design.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=47)** Let's rework our duck interfaces and see how well this works out.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=51)** We'll begin by creating two interfaces, flyable and quackable, if I'm a duck and I fly, I implement the flyable interface, and if I'm a duck and I quack, I implement the quackable interface.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=64)** And our duck superclass now just needs a swim method since all ducks do that and also an abstract display method.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=72)** Mallard and Redhead ducks, they both inherit from duck, and they implement both the flyable and the quackable interfaces.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=80)** RubberDuck on the other hand just implements quack, it makes a squeak sound but it doesn't fly and DecoyDuck doesn't need to implement either, it just needs a display method.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=91)** This design looks pretty nice doesn't it?
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=94)** Unfortunately it too is problematic.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=98)** On paper, this design solves part of our issue, but it also absolutely destroys any possibility of code reuse.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=106)** Imagine having 20 or 30 or 40 ducks, every single duck will have to implement its own fly and quack methods.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=115)** Worse, any changes needed to flying or quacking would cause a maintenance nightmare as we'll probably have to look at the code in every one of those classes and make changes.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=125)** And another thing, we can't easily make runtime changes to our behaviors should we want to, if wanted a duck to start life not being able to fly and then for that duck to acquire the ability to fly midway through the simulation.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=140)** How would we do that in an elegant way?
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/trying-interfaces?u=76281980&t=144)** Let's look at this problem from a slightly different perspective.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (3), type. (2), implements (2), abstract (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### Get inspiration from design principles
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=0)** - [Instructor] At this point, we really don't have a clear design direction for our duck simulator.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=4)** Let's step back for a moment and review what we've tried.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=8)** We started by implementing our ducks with inheritance.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=11)** Only as the variety of ducks and behaviors increased, we found this didn't support our design very well.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=17)** In fact, what was appropriate for one concrete subclass like the MallardDuck, wasn't necessarily appropriate for another, like the RubberDuck.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=25)** This led to code duplication and actually limited our ability to make use of inheritance.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=30)** We also tried using interfaces but that didn't work very well either.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=34)** While using interfaces cleaned up our design from an object-oriented perspective, using interfaces totally destroyed our ability to reuse code.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=42)** In fact, every concrete subclass needed to implement its own flying and quacking behavior.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=46)** So, where do we go from here?
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=48)** Have we reached some fundamental limit to object-oriented design?
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=52)** Well, not at all.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=53)** In fact, let's return to the encapsulate what varies design principle for a little inspiration.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=59)** So, in the previous chapter, we introduced this design principle.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=62)** Encapsulate what varies.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=64)** This principles says that if some aspect of your code is changing, for instance, say you find yourself altering the flying and quacking code every time you add a new type of duck, well, that's a strong indication that you need to pull out those parts that are changing and to separate them from the rest of your code.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=80)** How does that help?
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=81)** Well, think about it like this.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=83)** Once you separate out the parts that are frequently changing, you can then modify those parts without affecting the rest of your code.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=90)** As an example, if we can separate out what's varying in our ducks, like their flying and quacking behaviors, then we can isolate all the changes we'll need to make to those behaviors in the future.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=101)** As we've said, this idea of separating what varies is an idea you're going to see over and over with design patterns and in general with good object-oriented design and each pattern tends to provide a unique way of achieving this.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=115)** Now let's see if we can apply the encapsulate what varies principles to our duck simulator.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=119)** To do that, let's check out our class diagram again.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=122)** Looking at the duck class, we know that quack varies because some ducks quack and some squeak and some make no sound at all and in the future, it seems like there will probably be other ways for ducks to make sound as well.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=134)** Fly also varies over the subclasses.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=137)** Some ducks fly and some don't and perhaps in the future, some ducks will fly in other ways.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=142)** Swim though, swim seems to be consistent across all the ducks.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=146)** There's no indication of it varying here and while display is implemented in each individual duck, it's really done by design.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=154)** Okay, so we've identified what varies, namely the flying and quacking.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=158)** Now what?
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=159)** Well, we need to pull out those behaviors and separate them from the rest of the duck.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=163)** But how do we do that?
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=166)** Again, we're going to look to a new design principle for inspiration for how to separate the flying and quacking behaviors of the ducks.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=172)** This new principles says to program to an interface, not an implementation.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=178)** Remember that an interface is essentially a super type.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=181)** So, this principle tells us that we should use the super type to refer to objects rather than their specific type.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=188)** How will this help us with the duck behavior?
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=190)** Well, if we can apply this to our ducks' behavior, it means we won't be tied to a specific implementation of behavior, so we will in theory have more flexibility in how our ducks behave.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=202)** But didn't we just try to use interfaces and run into problems?
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=205)** We did but it was the way we were using interfaces that caused the problems.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=210)** We were still relying on the ducks to provide the concrete implementations of flying and quacking.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/get-inspiration-from-design-principles?u=76281980&t=215)** Let's try a different way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), interface (2), super (2), type. (2)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Programming to an interface
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=0)** - [Instructor] Let's go back to the original duck design and rethink this from the perspective of separating what varies and programming to an interface.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=7)** To separate what varies, we're going to move the implementations of quack and fly out of the duck class.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=13)** We're also going to make sure that we're programming to an interface rather than an implementation by using two interfaces, quack behavior and fly behavior.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=22)** Now let's use these interfaces by implementing some concrete quacking and flying subclasses.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=27)** For quacking, we'll implement a quack subclass, a squeak subclass, and also a class that doesn't make any sound at all, which we'll call mute.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=36)** For flying, we'll implement a fly with wings subclass and a fly no way subclass.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=42)** Obviously, we could've added more concrete implementations to both of these.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=45)** But for now this is all we need.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=48)** Now that we have these behaviors in place, we can rework the duck class.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=52)** To do that, we'll add two properties to the duck superclass, a reference to a fly behavior and a reference to a quack behavior.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=60)** These will hold references to concrete instances of quack and fly.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=65)** Notice this is a has a relationship.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=67)** That is, a duck has a fly behavior and a duck has a quack behavior.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=72)** We'll also add some setter methods for the fly and quack behaviors.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=76)** And to avoid confusion, we'll rename the quack and file methods to perform quack and perform fly.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=83)** Notice that each duck subclass now only needs to implement the display method.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/programming-to-an-interface?u=76281980&t=87)** Now with all of the design out of the way, let's see how this works in some sample code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), class. (2)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Applying the principles
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=0)** - [Instructor] Let's take a look at some sample code to demonstrate how we implement our new design and pull out and separate what varies in our code.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=9)** For this sample code, we'll just Java.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=13)** We'll be showing just a few snippets of code.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=15)** To see the full working examples, download the exercise files.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=20)** We'll begin by looking at the flying and quacking behaviors we've pulled out from the ducks.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=25)** Recall one of the design principles we've talked about.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=28)** Program to an interface, not an implementation.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=32)** For both our behaviors, we'll define interfaces that all behaviors will implement.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=37)** So, all fly behaviors will implement the flyBehavior interface.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=41)** For example, we might implement a FlyWithWings behavior that implements regular flying and a FlyNoWay behavior that implements no flying for a duck that can't fly.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=52)** Likewise all quack behaviors will implement the quack behavior interface.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=57)** We might implement quacking behaviors like regular quaking for a real duck and squeaking for the rubber duck.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=64)** Another quacking behavior we might implement is silence for ducks that don't quack at all like the decoy duck.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=70)** One thing to notice about these behaviors is that they're completely separate from our ducks.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=75)** We could use these behaviors with any code that needs duck behaviors.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=81)** Now let's take a look at the code for the ducks.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=84)** We'll begin with the Duck superclass.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=86)** This is the superclass of all ducks in the system.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=90)** It's an abstract class with an abstract method display meaning we must subclass this class with concrete ducks like mallard ducks and rubber ducks and those classes must implement the display method.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=103)** Notice that the swim method works for all the concrete ducks, so we didn't need to pull that method out into separate behavior.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=110)** We've got two variables in the Duck class, flyBehavior and quackBehavior.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=115)** We'll use these variables to compose a duck with its flying and quacking behavior.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=121)** Notice that we're using the interface types for these variables, so we can store any flying and quacking behavior in these variables.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=129)** Now when we want a duck to fly, we'll call performFly.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=133)** This method then delegates to the composed flyBehavior.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=137)** And we do the same for quack.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=139)** To get a duck to quack, we call performQuack which delegates to the composed quackBehavior.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=146)** Now let's take a look at a concrete duck to see how we compose behaviors with ducks.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=151)** Here we've got a MallardDuck.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=154)** It extends Duck so it inherits the two properties, flyBehavior and quackBehavior as well as the performFly and performQuack methods.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=164)** We're initiating the MallardDuck with the quackBehavior and the FlyWithWings behavior.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=170)** We do this in the constructor so a MallardDuck is initialized when we first create it.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=175)** We could instead pass in the behaviors we'd like but for this example, we're just setting the default behaviors in the constructor.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=182)** Finally, we bring everything together in the MiniDuckSimulator which is where we create ducks and test their behaviors.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=190)** Here we're creating a MallardDuck and then asking it to quack and fly.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=194)** To get the duck to quack, we call performQuack.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=198)** And recall that performQuack delegates to the quackBehavior quack method that's composed with the duck.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=205)** For MallardDuck that's a regular quack behavior.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=208)** So, we should see quack in the simulator.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=211)** And to get the ducks to fly, we call performFly.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=215)** performFly delegates to the flyBehavior fly method that's composed with the duck and for MallardDuck, that's the FlyWithWings behavior so we should see I'm flying in the simulator.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=227)** Here again is our design for the ducks showing the fly behaviors and of course we have an analogous set of quack behaviors too.
>
> **[3:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=235)** Rather than having our ducks rely on specific implementations of quack and fly, we're now relying on interfaces within the ducks to give us the flexibility we need.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=247)** Each duck will have a flyBehavior and a quackBehavior and we won't know precisely which ones until that's set at runtime.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=255)** And because we're using interfaces to specify those behaviors, we'll have the flexibility to change them as we need to and the ducks no longer need to know any details of how specific behaviors are implemented.
>
> **[4:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-the-principles?u=76281980&t=269)** With all that design out of the way, let's now see how this works in some sample code.

> [!info]- Semantic Content
>
> **Code Identifiers:** flybehavior (6), quackbehavior (6), performfly (4), performquack (4)
> **Code Keywords:** let (4), interface (4), implements (2), abstract (2), class, (1)
> **Exercise Files:** sample code (3), download the (1), exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Exploring the strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=0)** - [Instructor] We had an initial design for a duck simulator that used inheritance, but we quickly ran into problems with this design.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=9)** We were having to change a lot of code in the subclasses when we added new ducks and we were duplicating code.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=16)** We fixed the design by pulling out the flying and quacking behaviors and composing those behaviors with the ducks, that way each duck could use the behaviors that is right for that duck.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=29)** The class design that we created for the duck simulator is an implementation of the strategy pattern.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=35)** Let's take a look at the class diagram for the strategy pattern.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=39)** We have an inheritance hierarchy that defines the type of the objects that need a behavior and we have a HASA relationship between those objects and their behaviors.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=51)** These behaviors can be anything.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=53)** Any algorithm that an object might need to perform.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=57)** By moving these algorithms out from the main inheritance hierarchy, we get the benefit of being able to choose which algorithm each object gets.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=66)** We can change these algorithms at runtime and if multiple objects need to use the same algorithm, we get the benefit of code reuse too.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=75)** Now that you know how the strategy pattern works and what problems it solves, let's take a look at the official definition of the pattern.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=85)** The strategy pattern defines a family of algorithms, encapsulates each one and makes them interchangeable.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=93)** Strategy lets the algorithm vary independently from clients that use it.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=98)** Now this definition doesn't tell us how to implement the pattern, but it does give us a good idea of the intent of a pattern.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/exploring-the-strategy-pattern?u=76281980&t=107)** You've seen how we implemented the pattern in the duck simulator and how that design allowed our ducks to be more flexible and made the overall system more resilient to change.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** hasa (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Why HAS-A is better than IS-A
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=0)** - [Instructor] Let's take a step back, for a second, and look what we've done in the design of the duck simulator.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=5)** One thing we've done is we're now using a HAS-A relationship to associate a duck with it's flying and quacking behavior.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=12)** Remember, IS-A is an inheritance relationship.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=16)** A mallard duck is a duck.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=18)** And HAS-A is a relationship of composition.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=21)** A mallard duck has a fly behavior.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=25)** So now, instead of ducks inheriting their fly behavior, we're now composing the ducks with a fly behavior.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=32)** Same with a quacking behavior.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=34)** So keep in mind, that when you put two classes together, with composition, instead of inheriting behavior, an object can then instead delegate that behavior, to the composed object.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=46)** We now see that composition results in a more flexible design.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=49)** That let's us easily reuse flying and quacking behavior.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=53)** This idea, of using composition rather than inheritance, is another important design principle.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=59)** This principle says, if you have a choice, use composition rather than inheritance because typically, composition leads to a more flexible design.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=69)** Let's look at another benefit in our new design, based on composition.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=73)** With inheritance, in the old design, we were locked into compile time decisions about behavior.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=79)** Our ducks had only one way to fly.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=81)** Whether they were mallard ducks or rubber ducks.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=84)** With composition, each duck has a fly behavior.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=88)** Rather than limiting us to one specific implementation of behavior, we can make use of any appropriate concrete behavior, that's been implemented as a fly behavior.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=98)** In fact, we can say that composition gives us a whole new family of algorithms, that we can make use of.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=104)** Now if you've happily been using inheritance, in your designs, this principle may surprise you.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=109)** But by using composition, we do tend to get more flexible and extensible designs than we did with inheritance.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=115)** So pay close attention to each design pattern as you learn them.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/why-has-a-is-better-than-is-a?u=76281980&t=118)** Because as you'll see, composition is often used as a design technique.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: The Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=6)** - [Instructor] Take a look at the class diagram on this slide.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=9)** We have an abstract class, PhoneCameraApp, with four methods: take, edit, save and share.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=16)** And, we have two concrete classes that extend PhoneCameraApp.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=21)** BasicCameraApp, and CameraPlusApp.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=24)** The edit method in the superclass is abstract, because each camera app will provide its own specialized editor, but the rest of the methods can be inherited by the subclasses.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=36)** We get a lot of code reuse, because the taking, saving and sharing are the same across many apps.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=42)** That way, the apps can implement custom editors that get the other functionality for free from the superclass.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=49)** The share method in the superclass lets the user pick how they want to share the photo, and then uses that algorithm to share.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=57)** Right now, the share method allows the user to share photos by text and by email.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=63)** We're running into a problem, however.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=65)** We keep having to open up the PhoneCameraApp class to modify the share method every time a new way to share photos crops up.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=74)** You've been tasked to add another way of sharing photos to social media, but you're worried that every time you open the superclass to edit the share method code, you risk creating bugs in the system.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=87)** You'd love to separate that sharing code from the rest of the PhoneCameraApp superclass so you don't risk causing a problem each time you have to edit the class.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=97)** Your challenge is to redesign this class design to use the Strategy pattern, to encapsulate what's varying, that is, the sharing algorithm, and make it easy to modify the code and add new sharing algorithms without having to open up the superclass to do so.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-strategy-pattern?u=76281980&t=114)** And, while you're at it, go ahead and add the social media sharing to the class design, too.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (2), class, (1), class. (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)

#### Solution: The Strategy pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=6)** - [Narrator] Here's our solution to the challenge.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=8)** We've pulled out the different ways of sharing into a separate family of classes that implement sharing by texting, sharing by email, and sharing on social media.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=18)** This is our family of algorithms.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=20)** We've also added a property to the PhoneCameraApp superclass that will be composed with a strategy that the user selects.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=27)** Now when the share method is called, the super class is going to delegate sharing to the user's preferred share strategy.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-strategy-pattern?u=76281980&t=35)** So this design allows us to more easily add, change, and remove sharing strategies without have to modify any code in the camera app or any code in the concrete camera app classes.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (energetic music) (1)


### 3. The Adapter Pattern

#### Understanding the adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=0)** - We just learned about the strategy pattern so you might have this idea that all design patterns are abstract and un-intuitive.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=8)** Well, that's not the case.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=9)** Let's look at another Gang of Four pattern, the Adapter pattern.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=13)** Let's say that you need to plug an American style electrical cord into a European style outlet, well you can't, they have different interfaces.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=22)** So to make this work, we use an adapter that adapts the European style outlet into the American style plug.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=29)** It translates the outlets interface into one the American plug expects.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=35)** From the perspective of the plug and the outlet, nothing has changed.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=39)** They do what they've always done.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=42)** Let's look at a more software oriented case.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=44)** Let's say we're using a Vendor's class to achieve some goal and that class has it's own specific interface.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=51)** At some point, you may want to use a different Vendor class.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=55)** Perhaps you found one that's better, cheaper or faster.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=59)** The only problem is that the new Vendor class has a different interface than your existing Vendor class, so how do you use it to make the system and the new Vendor class work together?
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=70)** Well, you create an Adapter class that implements the existing interface and then talks to the Vendor's class to carry out request.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=80)** If we do our job right, the existing system and the new Vendor class will do what they've always done without the need for code changes.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-adapter-pattern?u=76281980&t=90)** It's the Adapter class that will handle the work of translating the request to the new Vendor class.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (4), case. (2), class. (2), abstract (1)
> **CLI Commands:** make (2)
> **Speakers:** - we (1)

#### The Adapter pattern defined
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=0)** - [Instructor] Now that we have a conceptual idea of what Adapter does, let's take a look at the formal definition and the structure of the pattern from the Gang of Four Catalog.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=8)** First, let's take a look at the definition.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=11)** So, the Adapter Pattern is used to convert the interface of a class into another interface that clients expect.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=17)** Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=23)** So, this pattern's going to give us a way to have two classes work together when they have incompatible interfaces.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=30)** Remember that for every pattern, we have a class diagram that explains the pattern structurally.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=35)** Let's walk through the Adapter Pattern's class diagram.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=38)** First, we have a client that is expecting to make a call on a target interface.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=42)** In our example, the target interface would be the old vendor's interface.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=46)** Next, we have an Adapter class that implements that target interface.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=51)** This class is composed with an Adaptee class which the Adapter is going to make calls on.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=56)** In our example, the Adaptee would be the new vendor class.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=59)** So, when the client makes a call on the Adapter, using the target interface, the Adapter converts that call into one or more calls on the Adaptee.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=68)** So, how does this work.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=70)** Let's step through how this works at runtime.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=72)** First, our client makes a request to the Adapter.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=75)** In this case, by calling the request method which is part of the target interface.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=80)** Next, the Adapter translates that call to the equivalent call on the Adaptee.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=85)** This may take one or more calls to the Adaptee depending on the granularity of each interface.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=91)** We'll see an example of this in a moment.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=94)** After the Adaptee call is complete, the Adapter then returns the result, if any, to the client.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-adapter-pattern-defined?u=76281980&t=100)** The client receives the results of the call and never knows an Adapter's translating the calls to calls on the Adaptee's interface at its request.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (10), let (4), implements (1), class. (1), case, (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Using the Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Let's implement an example of the adapter pattern in code.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=4)** We'll begin with a client which is a duck simulator class, a duck interface with just two methods, quack and fly, and a mallard duck that implements the duck interface.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=16)** If we test the mallard duck in the simulator, that's easy.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=19)** We can just pass the duck to the test duck method and the simulator implements the duck interface so the simulator already knows how to make a duck quack and fly by calling the quack and fly methods.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=33)** Now what if we have a turkey and we want to use the turkey in the duck simulator?
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=38)** The turkey class has a slightly different interface from a duck, so we can't just plug a turkey into the duck simulator.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=46)** We can't use turkeys in the duck simulator because the duck simulator test method is expecting objects that have the duck interface with the quack and fly methods.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=57)** Turkeys use a different interface with the method gobble that's used to make sound instead of quack.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=63)** So we can't just pass a turkey to the test method or call quack on a turkey.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=67)** That won't work.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=69)** So what do we do?
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=70)** Well we create an adapter.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=73)** We'll do that by making an adapter class that converts the turkey interface to the duck interface.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=80)** As you can see here, the duck simulator is the client, the duck is the target interface, the turkey adapter is the adapter, and the turkey is the adaptee.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=92)** The turkey adapter implements the duck interface so that the duck simulator will know how to make the turkey quack and fly.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=99)** And the turkey adapter is composed with the turkey so it can convert calls to quack and fly into gobble and fly.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=109)** Here's the turkey adapter in code.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=111)** The turkey adapter class implements the duck interface.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=115)** So this class must implement the two methods in this interface, quack and fly.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=120)** The adapter is composed with the adaptee, that is, the turkey, and we pass the turkey into the constructor and save it there.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=129)** The quack method delegates to the turkey's gobble method and likewise, the fly method delegates to the turkey's fly method.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=137)** Only because turkeys don't fly as well as ducks, we're going to call the turkey's fly method five times, so it flies a bit longer.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=145)** So that's how the turkey adapter adapts a turkey to the duck interface.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=150)** This adapter is pretty simple.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=152)** We didn't have to make too many changes to make the turkeys fit into the duck simulator, although we did modify fly just a little bit.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=160)** Some adapters may require multiple calls to convert from one interface to another correctly.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=166)** And some adapters may return values from the adaptee to the client.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=171)** Now let's bring it all together by taking another look at the client, the duck simulator.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=177)** In this version, we've added code to make a wild turkey, but we can't pass a wild turkey to test duck because the test duck method expects a duck.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=187)** And the wild turkey has the wrong interface.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=191)** So we create a turkey adapter and pass in the wild turkey to the adapter.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=197)** Notice that because the turkey adapter implements the duck interface, we can treat the turkey adapter as a duck.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=205)** Then we can pass the turkey adapter to test duck to test the turkey in the simulator.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=212)** As we did in the strategy pattern, we're once again using composition to get flexibility in our design.
>
> **[3:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=219)** We have a client that's expecting to make calls on a class with a given interface.
>
> **[3:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=224)** So we compose that client with an adapter and we compose the adapter with the adaptee.
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=230)** The adaptor sits in the middle of the client and the adaptee and delegates the client's calls to the adaptee.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=238)** The advantage of the adapter pattern is that you can add an adapter easily without having to modify the adaptee at all and only modify the client to add the adapter.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=249)** Say you have a vendor class that you can't modify and it uses a different interface than you expect, but you really need to make the vendor class work with your system.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-adapter-pattern?u=76281980&t=258)** Well, the adapter pattern makes this easy.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (18), pass (6), implements (5), let (2), class, (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: The Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=6)** - [Instructor] You've just learned how you can use the Adaptor pattern to create an adapter that adapts turkeys to ducks.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=13)** In this challenge, you are going to create an adapter to adapt a drone to a duck.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=18)** A drone is a small robot that can fly and is used to take photographs and videos from above.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=24)** It makes a beeping sound, and it can fly by spinning its rotors and taking off.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=30)** But the drone's interface is a bit different from the duck interface.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=34)** So your challenge is to create an adapter for the drone so we can use the drone in the duck simulator.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=41)** Here's the drone class.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-adapter-pattern?u=76281980&t=43)** Can you create an adaptor class that allows it to run in the simulator?

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), class. (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)

#### Solution: The Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=6)** - [Narrator] Here's our solution for the drone adapter.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=9)** Remember that the adapter needs to implement the interface of the object it's adapting to.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=15)** Which in this case, is the duck.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=17)** So the adapter must implement the two duck interface methods quack and fly.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=23)** The drone adapter takes a drone.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=26)** The quack method of the drone adapter delegates to the beep method of the drone.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=30)** So the drone makes a sound.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=32)** The fly method of the drone adapter is a little more complex.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=36)** To fly the drone, we actually need to call two methods: spin rotors and take off.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=42)** So one method in the duck interface corresponds to two method calls in the drone's interface.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=49)** Now that we have the drone adapter that implements the duck interface, we can add the drone to the duck simulator.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=56)** Here's how we do that.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=58)** We first create a drone and then create a drone adapter, passing the drone to the adapter.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=64)** What we get back is a drone adapter, but remember, it's also a duck, since the adapter implements the duck interface.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=72)** So we can treat the adapter as a duck.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-adapter-pattern?u=76281980&t=75)** Now we can pass the drone adapter to the test duck method and it'll work fine.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), implements (2), case, (1), pass (1)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (electronic music) (1)


### 4. The Observer Pattern

#### Understanding the Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=0)** - The observer pattern exemplifies the design principle of loose coupling.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=5)** This principle tells us to strive for loosely coupled designs between objects that interact.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=11)** What are loosely coupled objects?
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=14)** We say that objects are loosely coupled when they interact with one another, which makes them coupled, but they don't know a lot about each other, which makes them loosely coupled.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=24)** With loose coupling, objects don't become too dependent on each other.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=29)** As we'll see, this helps to keep our design more flexible.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=33)** For instance, with the observer pattern, loose coupling helps us to minimize the complexity of a scenario where there are a lot of objects coming and going during a computation, and those objects need to be kept up to date on an important piece of data or a set of events.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=51)** The observer pattern is one of the most commonly used patterns.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=55)** You'll use it in your own code, and you'll see it used in many libraries and frameworks.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=59)** And, like the adapter pattern, the observer pattern is easily explained in the form of a real world analogy.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=67)** Think about your standard newspaper or magazine subscription.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=70)** A published creates a newspaper, and starts publishing it.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=74)** You subscribe to the newspaper, and, as long as you stay subscribed, you get each issue.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=80)** You can unsubscribe at any time, and you'll stop receiving issues.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=84)** Other readers can subscribe, too, and you'll all receive issues, as long as they're published, and as long as you remain subscribers.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=92)** To make this example a little bit more formal, let's start with a publisher object.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=98)** Any object can send a request to subscribe to the publisher object.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=102)** When the request is received by the publisher, the requesting object immediately becomes a subscriber.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=109)** Any object can ask to be a subscriber, meaning: we don't really care what kind of object makes the request.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=116)** Obviously, there'll be objects that aren't subscribers.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=120)** And any object that's currently a subscriber, can unsubscribe at any time by making a request to the publisher.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=127)** The publisher typically holds some data of interest.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=130)** That could be a stock quote, or weather temperature, or an entire data structure, any type of data that could be interesting.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-observer-pattern?u=76281980&t=137)** And when the data changes, all the subscribers are notified.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Analogies:** for instance (1)
> **Speakers:** - the (1)

#### The Observer pattern defined
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=0)** - Thinking about subscribers and publishers is a great way to visualize the observer pattern but if you look at the definition of the observer pattern you'll see something like this.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=9)** The observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=19)** Let's step through what that means.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=21)** First, the definition says that the observer pattern defines a one-to-many relationship between a set of objects.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=27)** We often call these objects the subject and the dependent, which is analogous to publisher and subscriber in our example and we call it a one-to-many because if the state changes in the subject, then the many dependents are notified of that state change.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=42)** All dependent means here is that these objects are dependent on the subject for data.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=48)** We often call the dependent the subscriber or more commonly the observer.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=52)** The subject owns the data in the sense that there's only one copy of it and by making the subject the sole owner, we end up with a design that's cleaner than many objects owning the same data.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=63)** And finally, the observers, because they are observing, will get notified anytime the subject's state changes.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=72)** There's a few different ways to approach the class design for the observer pattern so let's look at a common one.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=77)** In this class diagram, we have a subjects interface which includes two methods that allow observers to register and to remove themselves as subscribers.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=86)** It also includes a notify observers method which is responsible for notifying each observer of data changes.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=92)** Concrete subjects must implement these methods.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=96)** We also have an observer interface that has an update method which all concrete observers need to implement.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=102)** A concrete observer can be any class that wants to implement the observer interface.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=106)** The update method will be called by the subject when the subject's data changes.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=111)** Now depending on your implementation, when update is called, the observers may be sent a new value as part of the update call or the observers might have to explicitly ask the subject for the new value.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-defined?u=76281980&t=122)** Now that we've seen what the class diagram looks like, let's take a look at it in code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), this. (1), finally, (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** analogous to (1)
> **Speakers:** - thinking (1)

#### Using the Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=0)** - [Instructor] Let's take a look at the Java code to implement our basic observer pattern design.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=6)** We'll start with the Subject interface.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=8)** This specifies the three methods the concrete subject must implement, registerObserver, to allow observers to register themselves, removeObserver, to allow observers to stop participating, and notifyObservers, which will make sure all the observers are notified if the data in the subject changes.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=29)** The concrete subject, named SimpleSubject here, implements that interface, and so must implement those three methods.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=37)** The SimpleSubject manages the list of observers, in this case, using an ArrayList.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=44)** And, it manages the data that the observers are interested in.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=48)** Here, that's just an integer, value.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=52)** Observers call registerObserver to add themselves to the list of observers in the subject.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=58)** And they call removeObserver to remove themselves from the list.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=62)** Let's say the value in the subject changes.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=65)** Perhaps, another object calls setValue to change the value.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=70)** Now, the subject must notify all the observers that are participating.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=74)** This is where the notifyObservers method is used.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=78)** In that method, we iterate through all the observers in the list, and call update on each one, passing it the new value.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=87)** All observers that want to participate, that is, get notified when the subject's data changes, must implement the Observer interface.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=96)** This has one method, update.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=98)** Observers can be any type.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=101)** As long as they implement the Observer interface, they can participate in the pattern.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=106)** A concrete observer, here, the SimpleObserver, implements that Observer interface.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=112)** The observer needs a reference to the subject so it can add itself to the list of observers, by calling registerObserver.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=120)** In this example, we pass the subject to the observer in the constructor, and register the observer right away.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=127)** And, of course, the observer must implement that update method.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=132)** This is the method that the subject will call when its data changes.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-observer-pattern?u=76281980&t=136)** The subject passes the newly updated value to the observer which saves the value and displays it.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), let (2), implements (2), case, (1), type. (1)
> **Code Identifiers:** registerobserver (3), removeobserver (2), notifyobservers (2), setvalue (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### The Observer pattern and loose coupling
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=0)** - [Instructor] Let's talk about how the observable pattern helps make our design loosely coupled.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=5)** We can say that the subjects and observers are loosely coupled because, while they interact, which makes them coupled, they really don't know a lot about each other, which makes them loosely coupled.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=16)** If you look at the subject, the subject knows only that the observer implements a certain interface.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=21)** It doesn't need to know the concrete class of the observer.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=24)** In fact, any class can implement the observable interface and effectively subscribe to the subject.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=31)** So what about the observer?
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=33)** Well, the subject doesn't know any details of the observer.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=36)** All the subject knows is that it has a list of objects that implement the observable interface.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=42)** And it uses that list to notify those observers when something changes.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=47)** The observers are free to add themselves to the list at any time, they can also remove themselves, or even be replaced by another observer at any time.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=55)** The subject just doesn't care.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=57)** All it does is maintain a list and notify the objects on that list as necessary.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=63)** If we ever want to add a new type of observer, we can do that without ever touching the code of the subject.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=69)** As long as the observer implements the observable interface, it can participate and get notified.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=76)** Any changes we make to the subject or the observers never affect the other.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-observer-pattern-and-loose-coupling?u=76281980&t=80)** That's true loose coupling.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), implements (2), let (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Challenge: The Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=0)** (high energy music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=6)** - [Narrator] The observer pattern can be used to loosely couple objects together.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=10)** Whenever you have objects that want to be notified when another object is updated.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=15)** In this challenge, you'll design a weather station and various classes that are interested in the weather station's data.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=22)** Including a user interface, a logger, and an alert system.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=27)** The weather station has a set of sensors that are used to measure temperature, wind speed, and pressure.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=34)** The user interface, logger, and alert system are all interested in the data, and want to be notified when the weather station gets new data from the sensors.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=45)** Make sure your design allows for other observers to easily be added to the design.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-observer-pattern?u=76281980&t=50)** For instance, you might want your business to get notified by the weather station too, and you don't want to have to change the code in the weather station.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (high energy music) (1)

#### Solution: The Observer pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=6)** - [Instructor] Here's our solution to the challenge.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=9)** We created a new subject interface that the weather station implements, and we added a list of observers to the weather station.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=17)** We created implementations of the methods required by the subject interface to allow observers to come and go and to notify observers when the weather station's data changes.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=29)** We also added a new observer interface with an update method and had each of the classes interested in the weather data implement that interface.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=39)** That means each class needs to implement the update method.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-observer-pattern?u=76281980&t=43)** In addition, each class gets a reference to the weather station to access the methods in the weather station to add and remove themselves whenever they want from the list of observers.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), implements (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)


### 5. The Decorator Pattern

#### Creating chaos with inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=0)** - We're now going to explore a pattern called the decorator pattern, and to get a better understanding for this pattern we're going to start with a small example.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=8)** Let's say you want to build an order system for a small coffee shop, one which serves and takes payments for beverages.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=15)** The shop has four main types of beverages on the menu, each of which has a description and a cost.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=20)** And to each beverage you can add a number of condiments like soy or milk or whip or mocha.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=26)** Each of these condiments has a small cost which needs to be added to the cost of the coffee.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=31)** Let's sketch out a design for the coffee shop's order system.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=36)** We'll start with a beverage superclass which has a description field and a corresponding getter method as well as a cost method.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=44)** Now let's add some subclasses like house blend, dark roast, decaf, and espresso.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=51)** Note that each coffee is a beverage.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=54)** In other words, we have an is-a relationship between the coffees and the beverage superclass.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=60)** Also in each subclass we're overriding the cost method to calculate the cost of each particular coffee.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=68)** So far this looks like a nice, simple design that we can extend to other drinks in the future.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=73)** But we're forgetting that there are many variants of these beverages.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=78)** Customers might want to add condiments to their order, say a decaf with soy or a dark roast with whip and mocha.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=85)** One way we could take care of those variants is by adding some concrete subclasses like a house blend with steamed milk or house blend with mocha or house blend with whip and soy, and so on.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=96)** And we'll need variants for a dark roast and decaf and espresso as well.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=102)** You probably get the picture.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=104)** This is going to be a lot of classes and we haven't even scratched the surface of all the possible combinations we can have.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=111)** And what happens when we add new drinks or condiments or what if we encounter some change like when the cost of a condiment increases?
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=119)** That's a lot of changes to our code.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=122)** Let's take a different approach.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=124)** What we've done in this design is to add some properties in the superclass to track the condiment in the order.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=131)** So here for each condiment we have a boolean field and a corresponding method to track if that condiment is being used in the coffee.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=140)** Now let's subclass the beverage superclass again for each type of beverage.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=144)** Let's see how this is going to work for an example order like a house blend with soy and whip.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=150)** We first create the house blend beverage.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=152)** Then to add soy and whip we can call the set soy and set whip methods respectively.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=159)** After that, we can compute its cost.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=162)** All this depends on the cost method in each beverage subclass, which is going to get rather complicated because we always have to test every possible condiment.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=171)** But this might work so let's analyze it.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=174)** Well, it looks much simpler but we have to consider that the price changes will potentially affect every single class.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=183)** And if we add a new condiment we have to open up the code in the superclass and change it.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=190)** Some condiments aren't appropriate for beverages and so we'll have to add complex logic in the cost method to enforce that.
>
> **[3:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=196)** And we can't even handle orders like double mocha without adding some more logic in the cost method.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=202)** We've got a design but it doesn't feel very flexible or maintainable at this point.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=208)** The decorator pattern can help.
>
> **[3:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=211)** Using the decorator pattern to solve this problem will give us a lot of flexibility in the design.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=216)** We'll be able to add new drinks and condiments without having to change a lot of code.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=221)** And remember how we talked about favoring composition over inheritance?
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=227)** The decorator pattern shows us how we can use composition to get the flexibility we want without all the complexity.
>
> **[3:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=235)** We've tried two approaches to our design and neither worked very well.
>
> **[3:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=239)** So let's give the decorator pattern a try.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/creating-chaos-with-inheritance?u=76281980&t=243)** Before we dive into the pattern though we'll need to take a look at one more principle that can help us understand the problem we're trying to solve.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), class. (1), try. (1)
> **Definitions:** is a  (1), in other words (1)
> **Cross-References:** we talked about (1)
> **Analogies:** picture (1)
> **Warnings:** note that (1)
> **Speakers:** - we (1)

#### Understanding the open-closed principle
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=0)** - [Instructor] So where do we go from here?
>
> **[0:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=2)** Let's begin by getting some insight from our next design principle, the open-closed principle.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=8)** This principle says that classes should be open for extension but closed for modification.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=15)** What does that mean?
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=17)** Well, think about our current design for the coffee shop.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=20)** We know in the future we'll need to support new beverage types and new condiments but that means we'll have to modify existing code, and that's exactly what we don't want.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=31)** We want to leave our design open for new beverage types and condiments but closed in the sense that we don't want to touch existing code.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=40)** Let's look at this principle in a little more detail.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=44)** Again, the open-closed principle says that code should be open for extension but closed for modification.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=51)** If we can do that, we have flexibility and maintainability because we can add new behavior but without the risk of introducing new bugs into the code we've already written.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=62)** So our goal is to have designs that we can augment at any time but do it without touching existing code.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=69)** This sounds like a great quality for our designs to have but it begs the question, "How do we design object systems that adhere "to the open-closed principle?
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=79)** "How do we allow something to be extended "that can't be modified?"
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=84)** Well, that's one place that design patterns can help and we already know we're going to apply the decorator pattern to this problem.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=91)** But before we actually introduce the pattern let's get some hints from some things that we've already learned in this course.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=99)** We'll start with inheritance.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=101)** Despite its power, inheritance is not always the remedy.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=105)** In fact, it can cause problems.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=107)** We know that it often leads to fragile designs that can't adapt to change and we know that when we subclass we make static compile time decisions that we're stuck with, and all classes have to inherit the same behavior.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=122)** As we saw with the strategy pattern, when we use composition instead we get more flexible and adaptable designs.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=130)** When we use composition we can still take on new behavior but we do it by composing objects together.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=138)** We can also make runtime decisions and add behavior without altering existing code.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=144)** We can even go as far as adding new behavior the creator of the classes never even thought of.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=151)** The end result often proves to have far fewer bugs and side effects, and overall we get more flexible designs.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=160)** Now, with decorator we're going to apply composition in a totally new way that's different from the strategy pattern.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-open-closed-principle?u=76281980&t=167)** Let's see how that's done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (1)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### Extending behavior with composition
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=0)** - [Instructor] Before we jump into a formal definition of the Decorator pattern, let's first get a conceptual feel for how Decorator works and in particular see how we might use composition to solve our problems.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=11)** To do that, let's go back to our original beverage design.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=16)** Now, let's say a customer wants to order DarkRoast with Mocha and Whip.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=20)** So, let's start simply by instantiating a DarkRoast object, shown here.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=25)** Let's also call this object our base object, the coffee itself.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=30)** Next, the customer wants Mocha, so let's create a second object, a Mocha object and wrap it around or compose it with the DarkRoast object.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=41)** We'll call Mocha a Decorator and as to the hint to the structure of all this, Mocha's type is going to mirror the type of the object that it's composed with.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=51)** Which, in this case, is a beverage.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=53)** So, Mocha also has type beverage.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=55)** Note that means it also has a cost method, so keep that in mind.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=60)** Now the customer also wants Whip, so let's create a Whip object and wrap it around or compose it with the Mocha object.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=67)** Like Mocha, Whip also mirrors the type of the object it decorates, which is of type beverage.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=74)** So remember, that also means Whip is going to have a cost method.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=77)** So, now we have an interesting set of objects composed together.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=81)** Reading the object names from the inside out they also happen to match our drink order.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=86)** DarkRoast, with Mocha and Whip.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=88)** And as you can see, each of these objects has a cost method and is also responsible for their part of the cost.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=95)** The DarkRoast knows it costs $0.99.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=98)** The Mocha knows it costs $0.20.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=100)** And the Whip knows a cost $0.10.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=102)** So, let's see how this works.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=104)** We can call cost on the outermost object Whip and then it's going to delegate that cost to the next object, which is Mocha.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=112)** Which then delegates that cost to the next object which is the DarkRoast, our base coffee.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=118)** But the base class is a little different.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=120)** All it does is return its cost.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=123)** Each time we delegate, we get a value back and then we add that cost to our own and finally return the cost.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=133)** back to the caller.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=134)** Now it's time to look at how this is actually achieved in classes and code.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=138)** But before we do, note how flexible this design is.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=142)** We can add as many condiments as we want.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=145)** How about espresso with Mocha, Steamed Milk and triple Whip?
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/extending-behavior-with-composition?u=76281980&t=145)** How about espresso with Mocha, Steamed Milk and triple Whip?

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1), case, (1)
> **Versions:** 0.99 (1), 0.20 (1), 0.10 (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Understanding the decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=0)** - [Narrator] Now that you're familiar with the decorator pattern, let's take a look at the definition from the Gang of Four catalog.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=7)** The decorator pattern attaches additional responsibilities to an object dynamically.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=13)** Decorators provide a flexible alternative to subclassing for extending functionality, and we have a sense of how this design pattern can help us make a flexible design from our coffee example.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=27)** As you're seeing, the formal definition of a pattern usually describes the role of the pattern, but it doesn't necessarily help us know how to implement it in our own designs.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=39)** As with all design pattern definitions, we really need to look at a class diagram to get a better sense for how the pattern works.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=48)** There are two important parts to the decorator pattern.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=51)** There are the components which are the beverages in our example and the decorators which are the condiments in our example.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=59)** Starting at the top of this diagram, you can see that we have a component class.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=64)** This is an interface, or abstract class, that's implemented by the concrete components.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=71)** So in our example, the component class will be the beverage, and the concrete components will be the different types of coffees.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=79)** The decorators also implement the component, and that's an important piece of the decorator pattern which we'll come back to a couple of times as we look how to implement the pattern.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=90)** We have a decorator class which is often an abstract class and then we have the concrete decorators that implement it, and these are the milk, the soy, and whip condiments in our example.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=101)** The reason it's so important for both the concrete components and the decorators to implement the component's superclass is because we want to make sure that we can treat each class in the same way.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=115)** That is, we want to be able to wrap any decorator around any of the components.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=121)** For instance, in the coffee shop example, we want to be able to wrap any of the condiments around any of the coffees and then call the cost and get description methods on any of these wrapped objects.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=133)** We should also be able to call cost on an unwrapped object and get the correct result.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-decorator-pattern?u=76281980&t=138)** This will become a lot more clear when we look at some code, and we'll do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (2), let (1), class. (1), interface (1), class, (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Using the Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=0)** - [Female Instructor] Here's how we implement Starbuzz Coffee using the decorator pattern.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=4)** Remember, our new design uses a common super class beverage for both the coffees and the decorators.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=11)** And each decorator is composed with the beverage it is wrapping.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=15)** We'll start at the top with the beverage class.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=19)** This is our component super class.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=21)** It implements a get description method that returns the string unknown beverage.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=27)** But hopefully the concrete component classes will override this to a better description.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=32)** And it specifies an abstract method cost that subclasses must implement.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=38)** Now let's take a look at one of the concrete components.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=41)** These are the coffees that extend the beverage class.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=45)** For instance, the dark roast class extends beverage and sets the description string it inherits from beverage to dark roast coffee, so we get a good description of the coffee.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=56)** Then, dark roast implements the cost method and simply returns 99 cents, which is the cost of a basic dark roast coffee with no added condiments.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=67)** That takes care of the coffees, so now let's take a look at the decorators.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=72)** First, we'll add that condiment decorator class.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=75)** This class extends the beverage class, meaning it inherits the get description method.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=81)** But we're going to override the get description method with an abstract method, so we force all concrete decorators to implement that method.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=90)** Because condiment decorator is abstract, it does not need to implement cost.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=95)** But any concrete decorators will need to do that because cost is abstract in beverage.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=101)** Now let's implement some decorators.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=103)** Each condiment that can be added to a coffee is implemented as a decorator class.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=109)** Here's an example of a condiment, the whip condiment.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=113)** It extends condiment decorator, so it must implement the get description method and the cost method.
>
> **[1:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=119)** Each decorator is composed with the beverage that it's wrapping.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=123)** And the type of the beverage is beverage, meaning the super class of both the concrete beverages, that is the coffees, as well as the decorators.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=133)** That means that we can wrap a condiment around either a basic coffee or a decorated coffee.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=140)** We pass the beverage that we want the condiment to wrap into the constructor class, and store it.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=146)** Then in get description, we first get the description of the beverage we're wrapping, and then add whip to that.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=153)** So if we're wrapping a dark roast, we'll get the string dark roast coffee from the beverage and add on, comma whip.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=161)** Finally, to get the cost, we first get the cost of the beverage we're wrapping, and then add 10 cents to that.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=168)** Again, if we're wrapping a dark roast coffee, we'll get 99 cents and we'll add 10 cents and return the total cost of $1.09 for a dark roast with whip.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=178)** Let's look at an example of how to put everything together.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=182)** In the main Starbuzz Coffee class, we've received an order of a double mocha dark roast with whip.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=189)** We first create the dark roast coffee.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=192)** We store that beverage in a variable of type beverage.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=195)** Next, we pass that beverage to the mocha constructor to create a mocha decorator.
>
> **[3:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=201)** It's important to notice here that we also store this in the variable of type beverage.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=206)** That's so we can continue to decorate the beverage.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=210)** Remember, that decorators are composed with beverages.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=214)** Next, we do that again to get a double mocha decorator with a dark roast.
>
> **[3:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=219)** Finally, we pass that beverage to the whip constructor.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=222)** And we get back whip decorated beverage.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=225)** At this point, we have a dark roast coffee, decorated by two mochas and a whip.
>
> **[3:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=231)** Now it's time to compute the final description and cost.
>
> **[3:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=235)** We call get description on the outermost decorator, the whip decorator.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=240)** Remember that whip delegates to the beverage it's wrapping to get the description, and then adds on comma whip.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=247)** And the mochas do the same.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=249)** And finally, the inner mocha delegates to the dark roast and gets back a string, dark roast coffee.
>
> **[4:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=256)** This is where the delegation stops, so the resulting string propagates back out and we get dark roast coffee, comma mocha, comma mocha, comma whip.
>
> **[4:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=268)** The same thing happens when we compute the cost.
>
> **[4:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=270)** Each decorator delegates to the beverage it's wrapping to get the cost.
>
> **[4:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=274)** And then adds on the cost of the decorator, so the result we get back is the total cost of the beverage.
>
> **[4:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=281)** By using composition, we get flexibility in how we add condiments or capabilities to our beverages.
>
> **[4:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=288)** And by using a common beverage super type with inheritance we get the type structure we need to treat coffees and decorated coffees both as beverages.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-decorator-pattern?u=76281980&t=298)** So we can decorate beverages multiple times and call get description and cost on basic coffees or decorated coffees.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), super (4), abstract (4), let (4), extends (3)
> **Versions:** 1.09 (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [female (1)

#### Challenge: The Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980&t=0)** (energetic electronic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980&t=6)** - [Instructor] Let's say you want to start up a pizza store, offering both thick and thin crust pizzas.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980&t=11)** You'd like to offer a variety of toppings for the pizza that can be combined in any way the customer wants, and you'd like to be able to easily add and remove toppings from the menu over time as you determine what your customers like.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980&t=22)** You'll need to be able to get a description of the pizza to hand to the chef and a total cost of the pizza to charge the customer for their order.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980&t=29)** Your challenge is to design a system for the pizza store using the Decorator pattern.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-decorator-pattern?u=76281980&t=34)** Have fun, and feel free to get a snack while you're working on the challenge just in case you're hungry.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic electronic music) (1)

#### Solution: The Decorator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=0)** (funky upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=6)** - Here's our solution for creating pizzas with the decorator pattern.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=9)** In this solution, we've closely followed the decorator pattern structure.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=13)** First, we define a Pizza class that has a getDescription method and an abstract cost method.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=19)** Then we added ThinCrustPizza and ThickCrustPizza concrete subclasses, which both extend the Pizza class.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=25)** We also created a ToppingDecorator class that, again, following the structure of the decorator pattern, extends the Pizza abstract class.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=33)** Note that ToppingDecorator has a property Pizza and an abstract method getDescription.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=39)** Extending the ToppingDecorator, we've created classes Cheese, Olives, and Peppers for our toppings.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=45)** We'll pass in the pizza the toppings are decorating and the constructor, and store the pizza in the Pizza variable that's inherited from the ToppingDecorator class.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=54)** The cost method in the pizza classes return the cost of the basic thin or thick crust pizza, while the cost method in the toppings classes returns the cost of the pizza plus the topping.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=66)** This works just like in our coffee example.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-decorator-pattern?u=76281980&t=69)** Remember that with decorator, we use inheritance to get a common supertype for pizzas and decorated pizzas and we use composition to add topping decorators to our pizza.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (3), class. (3), extends (1), pass (1)
> **Code Identifiers:** getdescription (2)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - here (1)
> **Non-Speech:** (funky upbeat music) (1)


### 6. The Iterator Pattern

#### Encapsulating iteration
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=0)** - We have many ways to store collections of objects in data structures.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=5)** For example, most modern programming languages provide arrays.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=10)** If you're using Java, you could store menu items for a menu in an array like this.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=16)** Most languages provide additional structures for storing collections of objects like lists, dictionaries and sets.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=24)** For example, Java provides an ArrayList, which is a lot like an array, but has some list like capabilities too.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=32)** Here we're storing our menu items in an ArrayList.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=36)** Simple enough, but what if we need to write code that operates over several of these collection types?
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=43)** Let's say you want to write a print method to print any menu.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=47)** To print a menu, we need to iterate over the collection that's storing the menu items.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=53)** If you're using an array to store your menu items, you'll write code like this.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=58)** Now if you decide to change the representation of menus from an array to an ArrayList, you end up rewriting all that code to print the menus because the code depends on the concrete type that we're using for the collection.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=73)** We need different code to iterate through and print the menu items when they're stored in an ArrayList, like they are here.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=81)** Is there a way that we can avoid rewriting the iteration code if we change our collection type?
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=88)** Let's use the same tactic we've been using and separate out what varies and encapsulate it.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=94)** What's varying here?
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=96)** Our iteration.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=98)** But how do we encapsulate iteration?
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/encapsulating-iteration?u=76281980&t=101)** That's what the iteration pattern helps us do.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### Understanding the Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=0)** - [Instructor] As we've seen, we've got two menus with two different implementations.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=4)** One uses an Array, and the other uses an ArrayList.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=8)** That means that the class responsible for printing the menus, the cafe, needs to use two different methods of entering through the menu items.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=17)** So the two menus are exposing the details of how they're implemented to the cafe, which means that the cafe is dependent on those implementations.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=26)** If someone decides to change the implementation of a menu, or say, add another type of menu, or say, add another type of menu, that will require code changes to the cafe.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=32)** that will require code changes to the cafe.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=35)** We can reduce the dependency between the cafe We can reduce the dependency between the cafe and the menu implementations by using the iterator pattern.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=37)** and the menu implementations by using the iterator pattern.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=41)** Here's the definition for iterator pattern.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=41)** Here's the definition for iterator pattern.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=44)** The iterator pattern provides a way The iterator pattern provides a way to access the elements of an aggregate object sequentially to access the elements of an aggregate object sequentially without exposing its underlying representation.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=49)** without exposing its underlying representation.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=53)** So this pattern gives you a way to access the elements of an aggregate object, and to do it sequentially, and it does it without exposing that underlying representation.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=61)** that underlying representation.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=63)** So that sounds like what we need for the cafe.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=66)** Let's step through that.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=66)** Let's step through that.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=68)** First, what is an aggregate object?
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=68)** First, what is an aggregate object?
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=71)** Well that's just a collection of objects, like an Array, Well that's just a collection of objects, like an Array, or in Java, the Collection classes, like an ArrayList.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=74)** or in Java, the Collection classes, like an ArrayList.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=77)** But, aggregate objects aren't limited to Java.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=77)** But, aggregate objects aren't limited to Java.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=80)** You'll find aggregate objects like list, and sets, and maps, and dictionaries in most modern languages.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=83)** and maps, and dictionaries in most modern languages.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=87)** So we know what an aggregate object is, So we know what an aggregate object is, but we need to be able to access its elements but we need to be able to access its elements without having to know exactly without having to know exactly how the aggregate is implemented.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=94)** how the aggregate is implemented.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=96)** In other words, we don't need to know In other words, we don't need to know if a menu is implemented as an Array, or an ArrayList, if a menu is implemented as an Array, or an ArrayList, or another aggregate type, we just want or another aggregate type, we just want to access its elements, and do it in a sequential manner.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=103)** to access its elements, and do it in a sequential manner.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=107)** To accomplish this, To accomplish this, the aggregate object provides an iterator object.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=108)** the aggregate object provides an iterator object.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=112)** The iterator object knows how to iterate over the aggregate, The iterator object knows how to iterate over the aggregate, but the client, that is the object using the iterator, but the client, that is the object using the iterator, which is the cafe in our example, which is the cafe in our example, doesn't have to know the details.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=120)** doesn't have to know the details.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=122)** It just has to know how to ask for, It just has to know how to ask for, and how to use that iterator.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=124)** and how to use that iterator.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=127)** So, to iterate over an aggregate object, So, to iterate over an aggregate object, using iterator pattern, the client asks using iterator pattern, the client asks an aggregate object first for its iterator, an aggregate object first for its iterator, and then it uses it to iterate through each of its elements.
>
> **[2:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=135)** and then it uses it to iterate through each of its elements.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=139)** Because every aggregate object Because every aggregate object provides the same kind of iterator, provides the same kind of iterator, the client can use the same code to iterate the client can use the same code to iterate over any kind of aggregate object.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/understanding-the-iterator-pattern?u=76281980&t=145)** over any kind of aggregate object.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (2), type, (2), this, (2), for, (2)
> **Definitions:** means that (2), is an  (2), in other words (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Using the Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=0)** - [Instructor] Let's take a look at the class diagram for the iterator pattern and then we'll see how to implement it for the menus.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=7)** In our example, the aggregate object is a menu which uses an array list or an array to store the menu items.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=15)** We have an aggregate interface and a concrete aggregate class that implements that interface, providing a method, create iterator, that creates and returns an iterator object.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=27)** The client stores that iterator and then, when it needs to iterate over the items in the aggregate object, it can use the methods defined by the iterator interface to do so.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=39)** The hasNext method figures out if there are more items to iterate over and the next method just returns the next item.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=47)** Here's how we'll design our menus example to use the iterator pattern.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=52)** Our aggregate object will be the menu.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=55)** We'll add a menu interface that defines one method, create iterator, and both the pancake house menu and the diner menu will implement that menu interface.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=65)** When the cafe wants to iterate over the menu items it will ask the menus for their iterators using the create iterator method.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=73)** The cafe doesn't care about how the iterators work under the covers because now, it can use the same interface to iterate over both menus.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=83)** The iterators that the two menus create both implement the iterator interface, which specifies the two methods, hasNext and next, so the specific implementations of how to iterate over the menu items for each type of menu are encapsulated in the two iterators, one for each type of menu.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=104)** Right now, the iteration responsibilities are with the cafe.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=108)** The cafe has to know the details of how each menu is stored, so it can iterate one way through the menu using an array and another way through the menu using the array list.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=120)** We can remove this responsibility from the cafe using the iterator pattern.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=125)** By building iterators for the two menus, we'll move the details of the iteration to the iterators and out of the cafe.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=134)** Now, each menu will implement a menu interface that specifies a create iterator method.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=140)** This method creates an iterator for that menu and returns it.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=144)** Let's take a look at the iterator for the diner menu.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=148)** This is the menu that uses an array to store menu items.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=152)** The iterator implements the iterator interface, which specifies a common API for iterating through a collection of items, the next and hasNext methods.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=161)** The next method gets the next item from the array and returns it.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=166)** The hasNext method checks to see if there's another item in the array and returns true or false.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=173)** Now the cafe can use one method, print menu, to iterate through any menu it uses and every menu implements the menu interface.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=183)** So we can get a menu's iterator and pass it to a new print menu method and in that method, we use the iterator interface, that is the next and hasNext methods, to iterate through the menu items.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=197)** By moving the responsibility of iteration to the iterators, we've made the cafe more flexible.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-iterator-pattern?u=76281980&t=204)** Now the cafe can work with any kind of menu, as long as that menu implements the menu interface and has an iterator that knows how to iterate through the menu items collection.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (12), implements (4), let (2), pass (1)
> **Code Identifiers:** hasnext (5)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using built-in iterators
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=0)** - [Instructor] Java offers a built-in iterator interface.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=3)** Java.util.iterator.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=5)** We can use this interface instead of building our own if we want to.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=9)** The java.util.iterator interface acts both as an interface that your own iterator classes can implement as well as the type of the Java collection classes built-in iterators.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=21)** Classes like ArrayList, Vector and LinkedList all have an iterator method that returns a ready built iterator with a type java.util.iterator.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=32)** Now if you're asking, well, why did we build our own iterator for the diner menu?
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=37)** Well, we wanted you to see how to create an iterator from scratch, but now that you know how to do that, you should also know how to use the built-in iterator interface and the collection iterators.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=50)** It's worth noting that Java arrays don't have built-in iterators in the same way the collection classes do.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=57)** So building an iterator for an array or custom collection is a good way to see how the iterator pattern works.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-built-in-iterators?u=76281980&t=64)** In our cafe example, the Pancake House menu stores menu items in an ArrayList, so instead of creating our own iterator for this menu, we can simply get the iterator for the ArrayList and use that.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The single responsibility principle
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=0)** - [Narrator] Let's think about responsibility for a minute.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=3)** One thing to remember about giving responsibilities to a class, is that for every additional responsibility, a class has another reason it might have to change in the future.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=12)** So by giving a class multiple responsibilities we give the class more than one reason it might have to change.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=19)** And we know we want to minimize change where we can.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=23)** This brings us to another design principle.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=25)** The Single Responsibility Principle.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=27)** Which says that a class should have only one reason to change.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=31)** Adhering to this principle minimizes the chances that a class is going to need to change in the future.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=37)** Now let's think about collections and iterators.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=40)** If we allow a class to handle both the responsibilities of managing a collection, and managing the iteration, then we have two areas of potential change.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=50)** That's why we separate the iteration responsibility into its own class.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=55)** Now be careful.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=56)** We're humans, and in general, our brains like to combine things and not separate them.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=60)** We look for commonality, rather than finding differences.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=63)** And this is where you need to be diligent, and to examine your class designs, to look for multiple responsibilities.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=70)** If you see more than one, well then, you need to examine those areas and see if you find the potential for change there.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-single-responsibility-principle?u=76281980&t=76)** If you do, then it's probably a good idea to separate them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class, (1), class. (1)
> **CLI Commands:** find (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)

#### The iterator pattern as language feature
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=0)** - [Instructor] The iterator pattern is one of those patterns that is so useful it's become built-in to languages as language features.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=8)** Languages provide built-in iterators as we saw with Java collections and they use iterators in language statements too.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=16)** These statements hide the iterator pattern and it's iterators behind the scenes and make it easy to iterate through collections of values.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=24)** Java, Python and JavaScript all have statements that use the iterator pattern behind the scenes.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=31)** Java's enhanced for statement is designed for iteration through collections and arrays.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=37)** So this code will work whether animals is an ArrayList of animal objects or an array of animal objects.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=45)** Python's for/in statement can be used with any iterable aggregate object such as string, list and tuple and JavaScript's for/of statement can be used with strings, arrays, maps and sets.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=59)** All of which are iterable objects meaning there are iterators associated with these objects that the for/of statement can use to iterate.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=68)** Just as with the cafe example we went through in detail, these statements move the responsibility of the iteration away from the main code that's using the aggregate objects.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-iterator-pattern-as-language-feature?u=76281980&t=79)** In the case of built-in statements, the implementation details are already taken care of so all you have to do is use the statement to take advantage of the iterator pattern.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: The Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=0)** (energetic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=6)** - [Narrator] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=8)** For the iterator pattern, we're going to try something a little different.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=12)** For this challenge, you'll need to do a little research before writing code.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=17)** Most modern programming languages incorporate the iterator pattern.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=21)** So it's valuable to learn how the iterator pattern is used in languages that are important to you.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=28)** So pick one of your favorite programming languages.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=31)** In that language, identify how the Iterator pattern is used to iterate over collections of objects.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=38)** You might have to do a little bit of research to figure out which types are iterable, and what statements are used to iterate over those types of objects.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-iterator-pattern?u=76281980&t=47)** After you've done your research, implement a small code example to iterate through an aggregate object like an array or a list in the language of your choice.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (energetic music) (1)

#### Solution: The Iterator pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-iterator-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-iterator-pattern?u=76281980&t=0)** - [Narrator] For our challenge solution, we chose the Swift programming language.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-iterator-pattern?u=76281980&t=10)** And Swift aggregate objects, like arrays and sets and dictionaries, are all sequences, and they all provide built-in iterators.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-iterator-pattern?u=76281980&t=20)** You can use the for in statement, like we're doing here in the short example, that iterates over an array of animals.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-iterator-pattern?u=76281980&t=25)** Or you can use the underlying iterator supplied by the sequence and use that iterator's interface to iterate.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-iterator-pattern?u=76281980&t=32)** However, most of the time, you'll just use the for in statement.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. The Factory Patterns

#### The need for factory patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=0)** - We've talked about programming to interfaces, not implementations.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=4)** When we program to an implementation, we get locked into concrete types, and more importantly, our code will require changes if our set of concrete types ever gets extended.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=17)** It might seem interesting that by using the new operator, we're forcing ourselves into a concrete implementation.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=24)** Like here where we assign duck to a new mallard duck.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=28)** We'd like to use an interface like duck as the type for the variable, but ultimately, we have to create a concrete type, like mallard duck, to create a duck object.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=39)** Quite often, we end up writing code like this.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=43)** Here we have a duck variable and we use conditional logic to pick the concrete type of the duck.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=50)** For instance, if we're at a picnic, we create a mallard duck, and if we're hunting, then we create a decoy duck, and if this is a bathtub, we create a rubber duck.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=61)** With this code, we're making runtime decisions about which class to instantiate.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=67)** When we see code like this, we know that if requirements change and we want to add new duck types, we're going to have to open up this code and change it and that violates the open closed principle.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=80)** We might also end up writing this same code in several places in this application, making the situation even worse.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=88)** So what do we do?
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=89)** As usual, let's look at what varies and encapsulate it.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=94)** Let's say we have a pizza restaurant.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=96)** We make the pizzas by calling a method to order a pizza.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=100)** That method takes the string type, and depending on the value of that type, whether it's cheese, Greek, or pepperoni, we create a pizza of that type and then we prepare it, cook it, and return it to the customer.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=115)** Of course, the restaurant is going to continue to grow and change over time, adding and removing pizzas.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=121)** So in our second version, we've removed the Greek pizza and we've added a veggie.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=127)** Clearly, our pizza types are getting in the way of closing this code for modification.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=132)** As long as the pizza restaurant is in business, this code is going to be open, so let's think about how we can encapsulate the code to create pizzas and move that code out into a separate class.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=146)** We're going to take the pizza creation code, encapsulate it, separate it, and put it in an object called a factory.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=153)** Why a factory?
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=155)** Because this is an object whose sole responsibility is creating pizzas.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=159)** It's a pizza factory.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=162)** To do that, we'll take this conditional code for creating pizzas, pull it out, and put it in a simple pizza factory class with a method name, create pizza.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=172)** Any time we want a pizza, we'll call this method and pass it a type.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=177)** And the method will make the pizza for us and return and object that implements the pizza interface.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=183)** All this creation code is now in one place, nicely separated from the rest of the restaurant code.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=189)** Let's integrate this back into the original restaurant code.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=193)** To do that, we'll assume we've created a factory object already.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=197)** We'll call the method create pizza to create the pizza, passing it the type variable.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=203)** The order pizza method no longer has to worry about the concrete type of the pizza.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=209)** It could be a veggie pizza, a cheese pizza, or a pizza we haven't even heard of yet.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=214)** Because we know that whatever type gets returned from the factory, it implements the pizza interface and that's all we care about.
>
> **[3:42](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=222)** We call this design the simple factory pattern and it's a very common way to deal with object creation.
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=230)** Here's the class diagram that represents a simple factory for pizzas.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=234)** We start with a client of the factory, the pizza restaurant, which we'll call Pizza Store.
>
> **[4:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=241)** And then we have our factory.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=243)** The factory is the only place the concrete types of pizzas are known, and then we have a product the factory makes, our pizzas.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=251)** And there could be many concrete types of those.
>
> **[4:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=255)** Now to generalize this a bit, here's the same diagram without the pizzas.
>
> **[4:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=260)** Here we have a client, a factory, and a set of products that implement a product interface.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-need-for-factory-patterns?u=76281980&t=267)** The simple factory pattern is pretty simple, but it's a common way to deal with creating objects, and it's the first step to understanding some of the more powerful factory patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (4), type, (3), implements (2), require (1)
> **Definitions:** is a  (1), is an  (1), we call this (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1)
> **Speakers:** - we (1)

#### The Factory Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=0)** - [Instructor] We just used a simple factory to create our pizza store.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=5)** Notice that the Simple factory allows us to decouple the process of creating objects from the clients that use those objects.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=11)** In our case, we used a simple factory to create pizzas so that the pizza store didn't have to worry about the details of the various pizza types.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=20)** Instead it could focus on the pizza preparation and delivery.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=24)** This approach works well.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=26)** But what happens if we have multiple store franchises?
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=30)** Let's say we have two pizza stores and one wants to make New York-style pizza and the other one wants to make Chicago-style pizza.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=38)** Now we're in the situation where we're going to need to use two different factories to make two different styles of pizza.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=44)** We know the downside of that, code duplication.
>
> **[0:47](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=47)** It's also presumably our process.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=50)** That is all that code that isn't changing that has made it successful and we want to keep that common to both stores while giving the stores the flexibility to make the kinds of pizzas that are appropriate for the local markets.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=63)** The simply factory just isn't going to work for that.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=67)** Let's step back.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=68)** We need for our store to share the same time-tested algorithm for making pizzas but to have the flexibility to create different types of pizza objects.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=77)** In our case, one that creates New York-style pizzas while the other creates Chicago-style pizzas.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=83)** To create store franchises, we'll change our design to use the factory method pattern.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=89)** This pattern defines an interface for creating an objet but lets subclasses decide which classes to instantiate.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=97)** Factory method lets a class defer instantiation to the subclasses.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=101)** Let's see what this means by taking a look at a new design for the pizza store.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=105)** First, we're going to change the PizzaStore class so it's an abstract class.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=110)** All the pizza stores in their franchise will extend this class and because we want all stores to use the same method of preparing pizzas, the PizzaStore abstract class will implement the orderPizza method.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=121)** This is the shared code that is used by all the stores to prepare the pizza.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=126)** Our New York pizza store and the Chicago pizza store are now going to subclass the PizzaStore and implement their own createPizza methods.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=133)** That way each store gets to decide what kinds of pizzas to make.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=137)** The New York-style pizza store will make New York-style pizzas while the Chicago pizza store will make Chicago-style pizzas.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=144)** This is what is meant in the factory method pattern definition when we say that the factory method lets a class defer instantiation to subclasses.
>
> **[2:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=153)** Here the abstract pizza store is deferring instantiation of the concrete pizzas to the individual pizza stores that extend it.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=161)** Our pizza class is basically the same.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=163)** But now we're going to have many more types of pizzas.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=166)** A set of pizzas for the New York-style pizza store and a set of pizzas for the Chicago-style pizza store.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=173)** The New York-style pizza store will be responsible for creating the New York-style pizzas and the Chicago-style pizza store will be responsible for creating the Chicago-style pizzas.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/the-factory-method-pattern?u=76281980&t=182)** Now that we've seen how this works conceptually, let's look at some code to further our understanding.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), abstract (3), case, (2), interface (1), class. (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** orderpizza (1), createpizza (1)
> **Speakers:** - [instructor] (1)

#### Using the Factory Method pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=0)** - [Instructor] To create a pizza, we first need to instantiate the kind of store we want.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=5)** Imagine you're choosing between walking into a New York-style pizza store, or a Chicago-style pizza store.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=12)** Once we're in the store, we can order a pizza.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=16)** Remember, this method is implemented by the abstract class, PizzaStore.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=21)** No matter which pizza store we're in when we make an order, we're guaranteed to get the same, brilliant pizza-making algorithm to produce quality pizzas.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=31)** The first step in the orderPizza algorithm is to create the pizza.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=36)** The createPizza method is implemented by the individual stores.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=40)** So, in a New York pizza store, we'll get the method implemented by that store.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=46)** We pass the type of pizza along to the createPizza method.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=50)** This method creates the right kind of pizza based on the type.
>
> **[0:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=54)** And once it's returned to the orderPizza method in the store, the orderPizza method can prepare the pizza for the customer.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=63)** Let's get a better sense of how the Factory Method pattern defers instantiation to subclasses.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=69)** Remember that the pizza store is defining the orderPizza method, but leaving the createPizza method to be implemented by the subclasses.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=78)** Let's see how this works in practice.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=81)** Here's the code for the New York pizza store.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=83)** This class implements the createPizza method, and based on the type of pizza passed into the method, creates the right kind of New York-style pizza.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=94)** Likewise, the Chicago-style pizza store creates the right kind of Chicago-style pizza in the createPizza method.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=101)** Both the New York store and the Chicago store extend the PizzaStore, which is where the orderPizza method is implemented.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=110)** This method is inherited by each concrete pizza store.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=114)** So when we call createPizza from the orderPizza method, we use the createPizza method that's in the concrete store.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=122)** So, if we create a New York pizza store, we'll use the createPizza method in that class and get New York-style pizzas.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=130)** And if we create a Chicago pizza store, we'll use the createPizza method in that class and get Chicago-style pizzas.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/using-the-factory-method-pattern?u=76281980&t=138)** So it's the concrete stores, that is, the subclasses that get to decide which type of pizza to make.

> [!info]- Semantic Content
>
> **Code Identifiers:** createpizza (9), orderpizza (6)
> **Code Keywords:** let (2), abstract (1), class, (1), pass (1), type. (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Challenge: The simple Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=0)** (futuristic electronic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=6)** - [Instructor] Take a look at this design.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=8)** We have a ZoneFactory whose job is to create the right kind of time zone for our calendar app.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=13)** Let's say you're instantiating a calendar for a user in the Pacific Time Zone.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=17)** Then you'd ask the ZoneFactory to create the appropriate zone for the calendar to use.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=22)** The time zones the Factory knows how to create are the U.S. time zones, Eastern Time, Central Time, Mountain Time, and Pacific Time, and each has a corresponding zoneid.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=33)** The zone displayName is just the name of the time zone, like USPacific, and the offset is the numeric offset of the time zone from GMT which is minus five for Eastern, minus six for Central, minus seven for Mountain, and minus eight for Pacific.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=49)** Your challenge is to write the code for the Zone classes, that is the Zone class and its subclasses and the ZoneFactory that will create the correct zone based on the zone id that you pass to its createZone method, and here's a hint.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/challenge-the-simple-factory-pattern?u=76281980&t=64)** For this design, we're using the simple Factory pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), pass (1)
> **Code Identifiers:** displayname (1), createzone (1)
> **Env Vars:** gmt (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (futuristic electronic music) (1)

#### Solution: The simple Factory pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=6)** - [Instructor] Here's our challenge solution.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=8)** We created a Zone class with a String display name and an integer offset.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=15)** We also implemented the two getter methods for those fields.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=19)** Each specific zone subclass extends zone and sets the appropriate display name and offset for each specific time zone.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=29)** And here's the Zone Factory class.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=32)** This factory has one method, create zone, which takes the string zone ID.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=38)** We test the zone ID for each of the possible zone classes we can create, and create the appropriate concrete zone class and return that.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=48)** The calendar will use the factory to create a zone, and then use that zone class to display the calendar appointments.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/solution-the-simple-factory-pattern?u=76281980&t=55)** The calendar doesn't have to worry about the specific type of the zone, and if we want to add support for more time zones, we can do that by updating the Zone Factory without having to modify any calendar code.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (1), class. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### Glossaries


### Conclusion

#### Applying patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=0)** - After a long discussion of design patterns, it's easy to see design patterns can be powerful.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=6)** And it's easy to see all kinds of ways you can use design patterns in your current and future designs.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=13)** Developers love to create beautiful architectures that are ready to take on change from any direction.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=19)** But is that how we should think about patterns?
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=22)** Don't think of patterns as a magic bullet.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=25)** When you see the need for one, you'll sleep well knowing many developers have been there before and solved the problem using similar techniques.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=33)** However, patterns aren't the solution to every problem.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=37)** - So how do you know which patterns to use?
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=40)** If you've got a good knowledge of patterns, you may know of a pattern that is a good match.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=45)** Otherwise, review patterns that look like they might solve the problem.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=50)** Once you've found a pattern that appears to be a good match, make sure it has a set of consequences you can live with and study its effects on the rest of your design.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=60)** If everything looks good, go for it.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=63)** Use patterns when you have a practical need to support change in a design today.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=69)** However, if your problem is only hypothetical, don't add the pattern.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=74)** It's only going to add complexity to your system, and you might never need it.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=79)** - Remember, always solve things in the simplest way you can.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=84)** Your goal should always be simplicity, not how can I apply a pattern to this problem?
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=90)** Don't feel like you aren't a sophisticated developer if you don't use a pattern to solve a problem.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=95)** Other developers will appreciate and admire the simplicity of your design.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=100)** That said, sometimes the best way to keep your design simple and flexible is to use a pattern.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=108)** - As we've discussed, object oriented design does not always come easy, even for experts.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/applying-patterns?u=76281980&t=114)** And design principles and patterns give us some useful tools that help us create software that is truly more flexible and resilient to change.

> [!info]- Semantic Content
>
> **Speakers:** - after (1), - so (1), - remember (1), - as (1)
> **Code Keywords:** match. (1), match, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### Where to go from here
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=0)** - [Elisabeth] Here are a couple of resources for taking your study further.
>
> **[0:03](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=3)** Starting with the definitive book by the gang of four.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=7)** This is a catalog of the 23 original design patterns.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=11)** You'll find each pattern outlined in the catalog including each pattern's historical examples in C++ and Smalltalk.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=20)** As we've said, this book is very much a catalog and not particularly focused on learning patterns and principles.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=28)** To remedy that, we'd also like to suggest our book, Head First Design Patterns, published by O'Reilly Media.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=35)** Our book is a learners guide to design patterns and design principles.
>
> **[0:40](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=40)** The book has become the go-to book for learning about design patterns.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=45)** You'll get a deep introduction to the gang of four patterns and many related design principles.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=51)** Of course, you'll also find many online resources for patterns with a good internet search.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=57)** In this course, we've just scratched the surface of design patterns and to truly take advantage of design patterns, you'll want to build up your repertoire of design patterns and principles and remember, even if you aren't using a pattern, just knowing the principles will go a long way towards improving your design skills.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=77)** To continue your journey, understanding the remaining gang of four patterns is a great place to start and from there, you'll be in good shape to tackle design patterns from other domains like enterprise patterns and distributed computing patterns.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-design-patterns-2/where-to-go-from-here?u=76281980&t=91)** We hope you enjoyed this course and you're inspired to go out and write some great software.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Code Keywords:** continue (1)
> **Speakers:** - [elisabeth] (1)


## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- Data Structures]] | **6 of 12** | [[Programming Foundations Databases]] →

## Appears In

- [[Become a Programmer- Foundations]]

---

[↑ Back to top](#)