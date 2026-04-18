---
type: course
slug: c-plus-plus-design-patterns-structural-22183029
url: "https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029"
duration_minutes: 107
duration: 1h 47m
level: Intermediate
updated: 5/5/2023
learners: 7164
skills:
  - Data Structures
  - Software Design Patterns
  - C++
exercise_files: true
github: "https://github.com/LinkedInLearning/cpp-design-patterns-structural-4360277"
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/data-structures
  - skill/software-design-patterns
  - skill/c
status: not-started
created: 2026-04-17
---

# C++ Design Patterns: Structural

> Design patterns allow you to solve common software development problems in a reusable way, making your code more robust and scalable. In this course, Károly Nyisztor explores the structural design patterns from the Gang of Four. He shows you how to leverage these patterns in modern C++ code and how they can help you design more robust and scalable software. He also discusses the seven structural d

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029) | 1h 47m | Intermediate | 7K learners

## Instructor

- [[Károly Nyisztor]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/cpp-design-patterns-structural-4360277)

## Skills Covered

- Data Structures
- Software Design Patterns
- C++

## Table of Contents

### Introduction

#### Structural design patterns in C++
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=0)** - [Karoly] Structural design patterns can help us maintain and scale our code as our project grows more complex.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=7)** Design patterns are proven solutions to recurring software design problems and the structural patterns in particular help you simplify and keep the design of large object structures flexible and efficient.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=20)** In this course, we'll delve into the world of C++ structural design patterns and explore how they can help you create more elegant and scalable software.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=31)** Hi, I'm Karoly Nyisztor, a software engineer with over 10 years of experience in C++ programming.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=38)** I've helped numerous developers improve their code quality and design skills and I'm excited to share my knowledge with you.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=46)** If you are ready to take your coding and object-oriented design skills to the next level, join me in my LinkedIn Learning course as we explore the seven structural design patterns defined by the Gang of Four and learn how to leverage them in modern C++.

> [!info]- Semantic Content
>
> **Speakers:** - [karoly] (1)


### 1. The Adapter

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=0)** - [Instructor] The adapter design pattern is a software design pattern that allows two incompatible interfaces to work together by converting one class's interface into another.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=11)** This pattern is often used in situations where a client is expecting a specific interface but the object the client is trying to use as a different interface.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=21)** One common use case for the adapter design pattern is when you have to integrate legacy code into your existing code base.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=28)** Since you usually don't have access to the source code for this legacy code, you need to refactor your own code to match the existing APIs, right?
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=38)** Well, not so fast.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=40)** With the adapter design pattern, you can define the class of the adapter that wraps the incompatible interface code and exposes an interface that matches your existing design.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=52)** The adapter class acts as a bridge between the incompatible interfaces, allowing them to interact seamlessly with each other.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=60)** Here's a UML diagram that illustrates how the adaptor design pattern works.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=65)** We have our own component class which is incompatible with the legacy code's API, represented by the LegacyComponent class.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=74)** But with the adaptor design pattern, we can easily integrate the two APIs using an adaptor class called LegacyAdapter.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=82)** LegacyAdapter inherits from component, thus it exposes the interface known to our code base.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=89)** At the same time, it wraps the LegacyComponent's instance and forwards the cause to this instance, called the adoptee.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=98)** Instead of using LegacyComponent instances in our code, we'll now use LegacyAdapter objects.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=104)** As a consequence, there'll be no need to refactor our code to match LegacyComponent's API.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=111)** Overall, the adapter design pattern provides a simple and elegant solution for integrating incompatible APIs into our existing design.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=120)** Now, are there any pitfalls to be aware of when using the adaptor design pattern?
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=125)** One I can think of is that we introduce a new intermediary class into our design.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=130)** Although this is a better solution than manually refactoring our code to match the legacy API, there are still a risk of introducing additional complexity and unexpected behavior.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=142)** And since the adapter class is essentially a wrapper around another class, it can make your code harder to understand and maintain.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=151)** Additionally, the adapter pattern can result in performance overhead since it involves creating an extra layer of abstraction.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=160)** So if you have access to the legacy code and there are no design constraints or other factors preventing you from refactoring the legacy code to match your design, it is preferable to adapt the incompatible interface instead of introducing an intermediary adapter class.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=177)** But if you decide to use the adapter design pattern, just keep in mind that it's essential to carefully design and thoroughly test your adapter class.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=186)** By doing this, you'll prevent any unexpected issues from arising and ensure that your code base stays clean.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=194)** Overall, the adapter is a simple, yet powerful design pattern, that can help you seamlessly integrate incompatible interfaces into your existing design.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=204)** And the benefits of being able to use a familiar interface, outweigh the potential drawbacks of using the adaptor pattern.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=211)** Next, I'll walk you through an actual code example to show you the problem we're trying to solve.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), class. (3), class, (1), this, (1)
> **Env Vars:** api (3), uml (1)
> **Definitions:** is a  (3)
> **Warnings:** be aware (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### When should you use the Adapter pattern?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Let me show you a scenario where the adapter design pattern may come in handy.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=5)** Say that you're working on a project that contains an abstract class called component.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=11)** It exposes a pure virtual method called run that must be implemented by sub-classes.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=18)** Concrete component A and concrete component B inherit from component and implement the run method.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=28)** The main function creates an array of component pointers initialized with one smart pointer of concrete component A and one of concrete component B.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=38)** Afterward, the code iterates over each element in the array and cause its run method.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=45)** This is possible because of polymorphism.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=47)** Both concrete component A and concrete component B inherit from component, exposing the same run method.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=55)** The run method is resolved at runtime depending on the actual type of each pointer, so this code will execute just fine.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=65)** And here in the console, we can see the result executing concrete component A and executing concrete component B run.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=77)** So far so good, but let's now consider a scenario in which we have to integrate a legacy class called legacy component into our design.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=90)** This class offers functionality similar to component, yet, it doesn't share the same interface, specifically legacy component exposes a go method instead of run.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=101)** As a result, we can't use it in the same way we used component and its subclasses before.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=107)** In other words, we can't just store legacy component in an array of component pointers.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=115)** If I try to add it here by calling make unique and the type should be a legacy component, I will trigger a compiler error.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=130)** Let's try it out.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=137)** Indeed, here's the compiler error.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=140)** Fortunately, we can use the adapter design pattern to solve this problem.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=145)** In the following videos, I'll show you two approaches to designing an adapter class that allows us to integrate legacy component into our design without modifying it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), abstract (1), function (1), interface (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Implementing an object adapter
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=0)** - [Instructor] In this video, I'll show you how to integrate the legacy component class in our design using an object adapter.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=8)** An object adapter works by wrapping the adaptee, in this case, the legacy component in an adapter class that implements the target interface, our component abstract class.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=21)** Thus the adapter exposes the same interface as the component class, making it compatible with our design.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=29)** However, internally, the adapter delegates the call to its adaptee, calling the legacy component objects go method.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=37)** Let's see how this works in practice.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=41)** First, I'll create a new class called legacy adapter that inherits from component, class LegacyAdapter
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=55)** and it should inherit publicly from component.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=63)** This adapter class needs to wrap the legacy component object, so I'll add a data member of type legacy component.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=72)** I'll make it a private field, as this adapter object will be the only one to access it.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=77)** We don't want to expose it to our clients and I'll make it a smart pointer.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=90)** Unique pointer of type, legacy component.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=98)** And I call it m_adaptee.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=103)** Next I initialize this data member in the constructor's initializer list.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=108)** So let's define the constructor in the public section, LegacyAdapter.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=119)** And here comes the initializer list where I'll initialize the m_adaptee data member.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=128)** I'll call make_unique to create our smart pointer and the type should be LegacyComponent.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=141)** And I provide an empty implementation for our legacy adapter constructor.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=147)** The only thing left to do is to implement the component classes run method, virtual void run.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=157)** And let's specify that we do override the method from the base class first.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=169)** And here I'll print a diagnostic message saying that we are executing legacy adapters run method which in turn forwards the call to legacy component go.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=184)** See out LegacyAdapter run which calls LegacyComponents go method.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=200)** And finally, let's call m_adaptee->go.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=205)** Let's see if our code compiles.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=209)** So far so good.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=213)** And that's it.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=214)** Now I can add a legacy adapter object to the array of components.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=221)** I'll delete this line.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=222)** Instead, I'll call make_unique.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=227)** And the type should be the adapter, LegacyAdapter.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=235)** And since legacy adapter is derived from component this code should work without conflicts or compiler errors.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=244)** Note that in the for loop I call run on each element in the array.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=249)** Even the legacy adapter object.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=253)** The output shows that the call to legacy adapter run was correctly delegated to legacy component go.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=260)** The best part is that we didn't have to modify the legacy component class.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=264)** Yet I can use it in my code without any compatibility issues.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=269)** In the following video, I show you how to design a class adapter, another way to integrate incompatible types into our design.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (2), class. (2), case, (1), implements (1)
> **Code Identifiers:** m_adaptee (3), make_unique (2)
> **CLI Commands:** make (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Implementing a class adapter
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=0)** - [Instructor] Another way to design an adapter is by using a class adapter.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=4)** This approach works by inheriting from both the target interface, in this case, the Component abstract class, and the adaptee, the LegacyComponent class.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=15)** The resulting adapter class will have the same interface as the target, but it will contain all the functionality of its adaptee.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=23)** Let's see how this works in code.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=27)** First, I'll define the class adapter.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=30)** I'll name it LegacyClassAdapter.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=34)** I'll make it inherit from both Component and LegacyComponent.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=39)** I'll inherit publicly from Component as I want the adapter to expose its interface.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=46)** Public, Component.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=50)** But I'll inherit privately from LegacyComponent as I don't want to expose its internals.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=57)** Now I can implement the Component's run method inside the adapter class.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=63)** It should be public, virtual, void, run.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=71)** And let's specify that we override it.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=77)** It's an overridden method.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=79)** And first, I'll output a diagnostic message so that we'll know that LegacyClassAdapter's run method is executing.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=94)** LegacyClassAdapter, run.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=98)** Which in turn calls the LegacyComponent's go method.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=105)** Calling LegacyComponent, go.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=114)** And finally, let's forward the request to the adaptee's go method.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=120)** I can simply invoke it because we inherited from LegacyComponent.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=128)** Now I can add the adapter to the array of components.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=136)** In our main method.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=138)** make_unique.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=142)** The type should be LegacyClassAdapter, and the code should work without issues.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=155)** When I run it, all the components execute their respective methods, including the adaptee.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=162)** Whether you design a class adapter or an object adapter, the purpose is the same: To integrate incompatible classes without changing their code.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=172)** The object adapter uses composition to delegate requests to the adaptee, while the class adapter relies on multiple inheritance to adapt one interface to another.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=183)** I hope this video was helpful in understanding how to design an adapter using C++.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=189)** The following challenge will help you practice the knowledge you just gained.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=193)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (3), class. (2), public (2), case, (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** make_unique (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Refactor using the Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Here's a challenge for you.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=2)** Design an adapter that integrates a third party class into your design.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=7)** The project consists of three classes.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=11)** The cloud storage abstract class that provides the common interface that all cloud storage services must expose, it has two methods, upload contents, which uploads the specified content to cloud storage and get free space, which returns the amount of free space left on cloud storage.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=31)** There are two classes that implement this interface, cloud drive and fast share.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=39)** Your challenge is to design an adapter that integrates a new cloud storage service.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=44)** Let's call it virtual drive.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=47)** This class exposes a similar yet, incompatible interface.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=51)** It has two methods, upload data and used space and a static constant that holds the total storage space.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=60)** Note that used space returns the used cloud storage space and not the free available space.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=69)** Now, we can't just add the virtual drive class as it is to our design since its interface doesn't match that of our existing cloud drive and fast share classes.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=79)** But you already know how to solve this, right?
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=83)** By creating an adaptor that converts the incompatible interface of virtual drive to the interface of cloud storage.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=91)** I'll leave it up to you to decide which adaptor type to use, an object adaptor or a class adaptor.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=98)** Give yourself 5 or 10 minutes to implement the adaptor then compare your approach with my solution.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=104)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), abstract (1), let (1), static (1), this, (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Solution: Refactor using the Adapter pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=1)** How did it go?
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=3)** Did you figure out how to design an adapter for the VirtualDrive class?
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=7)** Let's take a look at my solution.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=10)** I chose to design a class adapter as it requires less code.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=14)** I named the adapter class VirtualDriveAdapter.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=18)** It inherits publicly from cloud storage to provide the expected interface, and privately from the VirtualDrive class to delegate requests to it.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=28)** uploadContents forwards the request to uploadData.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=33)** However, I had to implement a helper method for generating the unique identifier, the extra argument required by the uploadData method.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=43)** Here's our private helper method, generateUID.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=49)** So uploadContents forwards the request to uploadData by passing in the content and this unique identifier.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=59)** The getFreeSpace method should return the free available space.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=64)** But as you know, the VirtualDrive class exposes a method that returns the usedSpace.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=70)** Thus, I subtracted the usedSpace from the total available space and returned the result.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=79)** We can now use this adapter as a drop in replacement for the VirtualDrive class.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=85)** So I added an instance of the VirtualDriveAdapter to our CloudServices array.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=95)** This array of smart pointers of CloudStorage type.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=99)** The for loop should print the same output as before except now we're also seeing the output from the adapter and the VirtualDrive class.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=111)** Indeed, we can see it here.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=116)** This adapter neatly solved the problem of integrating the incompatible class into our design.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=123)** Next, we'll delve into the bridge design pattern.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=126)** Stay tuned.

> [!info]- Semantic Content
>
> **Code Identifiers:** uploaddata (3), uploadcontents (2), usedspace (2), generateuid (1), getfreespace (1)
> **Code Keywords:** class. (2), let (1), interface (1), private (1), type. (1)
> **Speakers:** - [instructor] (1)


### 2. The Bridge

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=0)** - [Instructor] Bridge is a structural design pattern that can solve design problems that involve complex class hierarchies also known as the inheritance explosion problem.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=11)** You will know you have this problem if the number of derived classes keeps growing as the design evolves.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=17)** The bridge pattern solves the exploding class hierarchy problem by separating common and specific parts of a design into separate hierarchies.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=26)** Here's an example of an inheritance explosion.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=30)** In this design, each user interface element can have a different style.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=35)** The design requires four classes for each element: a concrete implementation of the element and three variations in style.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=45)** The design is already becoming very complex, and it will only get worse as more elements and styles are added.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=53)** The bridge design pattern solves this problem by separating the class hierarchy into two hierarchies, one for the element implementations and one for the style variations.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=66)** Element holds a reference to style, making it possible to compose the design from any combination of element and style.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=74)** This reference acts as a bridge between the two hierarchies.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=78)** By favoring composition over inheritance, the design is much simpler, more flexible, and open to future changes.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=87)** To add a new style, say bold style, we just need to create a new style class and we're good to go.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=94)** In summary, the bridge design pattern attempts to solve the inheritance explosion problem by switching from inheritance to object composition.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=104)** In the following videos, we're going to refactor a C++ design using the bridge design pattern.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), known as (1)
> **Code Keywords:** interface (1)
> **Speakers:** - [instructor] (1)

#### Exploding class hierarchies
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=0)** - I've created a C++ project to illustrate the design problem we're trying to solve with the bridge pattern.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=7)** The design uses a class hierarchy to represent the different ways we can share text.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=12)** IText Share is an abstract class that declares a pure virtual method, share text.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=20)** Email share and SMS share are complete implementations of IText Share used to share text messages.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=27)** For the sake of this demo the share text methods simply print the text passed as an argument to the console.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=36)** A new feature request is to add an encryption mechanism for the messages before they are shared.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=42)** A naive approach would be to add two subclasses, one for each type of text sharing.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=49)** Email share encrypted and SMS share encrypted.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=57)** The subclasses use a simple X or algorithm to obfuscate the messages and call their super classes share text methods to complete the task.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=66)** This design is fine if we only have two types of messages but what happens when we need to support new types of messages, like messages that expire after a certain amount of time?
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=78)** We need to create two more subclasses, email share auto expiring, and SMS share auto expiring.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=87)** The design will start becoming more and more complex until it becomes unmanageable.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=93)** In the following video, we'll see how to use the bridge design pattern to solve this problem.

> [!info]- Semantic Content
>
> **Env Vars:** sms (3)
> **Code Keywords:** abstract (1), super (1)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)

#### The Bridge pattern in action
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=0)** - [Instructor] As we've seen, this design has a severe problem.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=4)** Adding new features requires us to create new classes for each variation.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=9)** The bridge design pattern helps us solve this problem.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=13)** We'll start by separating the design into two distinct hierarchies.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=18)** One for the features that are common across all implementation classes, and one for the features specific to each variation.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=27)** So what's common across all these classes?
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=31)** The code logic of sharing text messages.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=34)** And what's different?
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=36)** The way the messages are prepared for sharing and handled.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=40)** We have plain messages, encrypted and expiring messages.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=45)** Thus, we can introduce two abstractions.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=51)** ITextHandler for message preparation and handling, and ITextSharer for the core message sharing functionality.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=60)** I start by defining the ITextHandler abstract class.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=69)** It is a single pure virtual method prepare message, let's make it public, that takes a plain text string as an argument and returns its modified version.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=86)** So it returns a string and it takes an argument reference to a string.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=97)** Let's call it text, and it's pure virtual.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=103)** I declare it as const because I don't want to modify any class members.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=110)** I'll also add the default destructor.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=116)** Next, I'll create the ITextSharer abstract class.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=124)** Let's define the virtual destructor first.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=130)** This abstraction should provide an interface to share text messages.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=134)** So I'll add a public share text method.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=141)** This method will use an object of type ITextHandler to process the message before sharing it.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=147)** For that, I'll add a private data member reference to an ITextHandler.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=154)** The bridge is a design pattern that uses has a relationships.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=157)** That is composition to replace inheritance.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=165)** Should be an ITextHandler and reference.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=172)** Let's call it m_textHandler.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=176)** Now I can use m_textHandler to call the prepare message method from within share text and get the modified version of the text.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=188)** And I call its prepare message method by passing in the input argument.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=195)** The actual message sharing will be done in the derived classes.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=200)** I declare it as protected because I do not want to expose it into the public interface of the class.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=211)** Okay, let's format our document.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=216)** Now it looks better.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=219)** Okay, and now I can call it in share text, passing prepared text as an argument.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=227)** The only thing left is to initialize m_textHandler into constructor of ITextSharer.
>
> **[3:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=232)** So I'll go ahead and define an explicit constructor that takes a reference to an ITextHandler as an argument.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=240)** The data member gets initialized in the constructor's initializer list.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=249)** Based on these abstractions, we can now implement derived classes that share messages using different services and handlers.
>
> **[4:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=257)** For instance, to share unmodified plain text messages via email, we'll need two concrete classes.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=264)** An ITextHandler class that implements the prepare message method to do nothing but return the unchanged text, and an ITextSharer class that implements the share prepared text method to send an email.
>
> **[4:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=283)** Similarly, if we want to share encrypted messages through email, we'll need to use a different ITextHandler class that implements the prepare message method to encrypt the text.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=299)** And this is our encrypted text handler.
>
> **[5:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=307)** The class responsible for sharing the encrypted text email share encrypted is almost identical to email share, except that it takes an encrypted text handler as a constructor argument.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=320)** Okay, now let's test our solution.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=329)** It works as expected.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=331)** We can add as many variations as we need by defining new ITextSharer and ITextHandler classes.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=338)** This design is much more flexible and easier to maintain than one based on inheritance.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=344)** All right, ready for a coding challenge?

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (3), public (3), implements (3), abstract (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Enhancing a design using the Bridge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=0)** - [Instructor] And here's the challenge for this module.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=8)** Implement a program that creates different types of vehicles, like cars, trucks, bikes, with different types of engines, such as gas, electric, hybrid.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=20)** Without the bridge pattern, the program would require a class hierarchy for each type of vehicle and engine, such as car/gas, car/electric, truck/gas, truck/electric, and so on.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=33)** Instead of this design, you can use the bridge pattern to design an interface-based solution that supports various combinations of vehicles and engines.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=42)** You will need an abstract interface for each of the two main concepts, IVehicle and IEngine.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=49)** IEngine should define a pure virtual start method, whereas IVehicle should expose a public drive method and an abstract drive vehicle method.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=60)** The drive method will call the start method of a concrete IEngine instance, followed by a call to the drive vehicle method.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=69)** Next, you'll create several concrete IVehicle and IEngine classes that implement the start and drive vehicle methods respectively.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=78)** Your design should follow the bridge pattern so you can create any combination of vehicles and engines.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=84)** Now pause the video to give this design challenge a try.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=88)** Once you're done, resume the video for my solution.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=92)** Good luck, and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), abstract (2), module (1), require (1), public (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Enhancing a design using the Bridge pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=5)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=6)** How did you design your solution?
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=9)** Here's how I approached this challenge.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=12)** First, I created two abstract interfaces, IEngine and IVehicle.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=18)** IEngine defines a pure, virtual start method.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=22)** This method will be implemented by all concrete engine classes.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=26)** IVehicle defines the public drive method and the pure virtual drive vehicle method.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=33)** Drive calls the start method of a concrete IEngine instance, represented by the private m_engine member variable, which is initialized in the constructor.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=44)** Then, it calls drive vehicle, which is also a pure virtual method, to be implemented by each concrete vehicle class.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=56)** The IEngine and IVehicle classes are now ready to be extended by concrete implementations.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=62)** For IEngine, I created three classes, GasEngine, ElectricEngine, and HybridEngine.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=72)** Their corresponding start method implementations will print out some text to the console, indicating that the engine has been started.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=81)** For IVehicle, I created three classes, Car, Truck, and Bike.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=93)** Each of them implements the drive vehicle method, printing out specific diagnostic messages.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=104)** And finally, the main method is used to create an instance of each concrete engine class.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=114)** Then for each engine, an instance of car, truck, and bike is created, to demonstrate how the design pattern works.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=122)** The for loop iterates over the array of vehicles and calls the drive method for each vehicle.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=130)** Running this code produces the following output.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=141)** Now, did you come up with a similar solution?
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=145)** Okay, that's it for the bridge.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=147)** In the upcoming videos, we'll talk about the composite design pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), abstract (1), public (1), private (1), implements (1)
> **Code Identifiers:** m_engine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### 3. The Composite

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=0)** - [Instructor] The composite design pattern is a structural design pattern that allows us to compose objects into tree-like structures to represent whole-part hierarchies.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=10)** The pattern provides a unified interface for both individual objects and compositions of objects which makes it easier to treat them uniformly.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=20)** The composite pattern is useful when we have a complex object hierarchy that consists of multiple levels of objects.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=27)** The pattern defines two types of objects, composite and leaf objects.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=33)** The composite objects are containers that can contain other composite and leaf objects.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=38)** The leaf objects are the basic building blocks that cannot contain other objects.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=44)** A good example of the composite design pattern is the filesystem.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=48)** The filesystem is composed of folders and files.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=52)** The folder represents a composite object that can contain other folders, the composites and files which are the leaf objects.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=62)** One of the primary benefits of the composite pattern is that it makes it easier to treat composite and leaf objects uniformly.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=71)** This means that we can iterate over a composite object and perform operations on all its child objects, regardless of whether they are composite or leaf objects.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=81)** This is particularly useful when we want to apply the same operations to all objects in a hierarchy.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=87)** Say that we want to find out how much space a folder uses on the disc.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=92)** One way to do this is to iterate over all the files within that folder and add up the sizes of each file.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=100)** If the folder contains other folders, we need to iterate over them and add up the sizes of all their files as well.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=109)** And if those subfolders have other subfolders, we need to iterate over those as well.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=116)** During this process, we need to know which objects are folders and which are files.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=122)** Thus, our code has to check for the object type at each level of the hierarchy.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=129)** The composite design pattern simplifies this process by allowing us to treat both composite and leaf objects uniformly.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=138)** We start by defining a common interface for the folder and file classes.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=143)** This interface should define operations that can be applied to both objects such as size.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=149)** We then implement the size operation for each type.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=153)** In the case of file objects, size returns the size of the file.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=157)** For folder objects size iterates over all its child objects, which can be subfolders or files, calls their size methods, and sums up the results.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=170)** The process continues until all the subfolders and their files have been processed.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=176)** Using the composite design pattern, we can now easily calculate the size of a folder and all its subfolders in a uniform way.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=184)** Since we don't need type checks to determine which objects are folders and which ones are files, our code becomes simpler and more efficient.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=194)** In the following videos, we'll explore the composite pattern in detail and see how to implement it using C++.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), type. (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Implementing a hierarchical structure
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=0)** - [Instructor] Consider a company that sells different items.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=3)** Each item is modeled as a separate class, book, toy, and so on.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=9)** These classes expose a method that allows us to query their price, double price for book, and get price for toy.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=21)** Each item can be sold individually or in a box.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=25)** A box may contain multiple books, toys, or even other boxes.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=31)** The box class model is a container of items.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=34)** It provides an interface to add books, toys, and other boxes.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=39)** These items get stored in vectors of dedicated pointers.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=44)** The class also exposes a method that returns the total price of all items in the box.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=51)** The total price method goes through all the items in the box and returns their sum.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=57)** If the item is another box, we call its own total price method recursively until all items in the hierarchy have been visited.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=69)** In the main function, I create a few items and place them in the box labeled small box.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=76)** Then I instantiate another box, big box, and add the previously created small box and a toy to it.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=84)** After the setup, I call total price on the top level box.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=92)** Running this code will get the following output.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=97)** Although this design works, it has a fundamental problem.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=101)** If we need a new type of item, we have to modify the box class by adding a new data member to store items of the new type.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=115)** We'd also need to process the new type in the total price method.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=121)** This design tightens the coupling between the box and its items, making it harder to extend.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=127)** This code can be substantially improved by using the composite pattern.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=132)** See you in the next video for a design makeover.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (1), interface (1), function (1), type. (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Redesigning with the Composite pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=0)** - [Instructor] The composite pattern is a design pattern used to represent a part-whole hierarchy that deals with objects composed of other objects.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=9)** It allows us to design systems that can contain a mixture of composite and leaf objects, which can be manipulated in a uniform manner.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=18)** This seems to be exactly what we need.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=21)** In our project, Box is the composite object, that can contain books and toys, which are leaf objects, and also other boxes.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=30)** To redesign the system using the composite pattern, we'll have to define a common interface for both composite and leaf objects.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=38)** This interface should provide the methods common to all objects, the price method in our case.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=45)** I go ahead and create a new abstract class called Product.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=52)** It has a public pure virtual method price.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=59)** And I'll also add a default destructure.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=67)** Next, I refactor the Book class to inherit from Product.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=76)** Its current price method matches exactly the interface of the Product class.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=81)** So no changes are needed here.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=85)** Except I'll add the override keyword.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=92)** The Toy class comes next.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=95)** I'll also make it inherit from Product.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=101)** I'll make the required changes to its price method.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=106)** So instead of getPrice, it should be called price.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=113)** And we're done.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=115)** The Box class will also inherit from Product.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=125)** Let's adjust the name of the method responsible for calculating the total price of the box.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=134)** Now it's called price, and let's add the override keyword.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=141)** As mentioned earlier, Box represents our composite object.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=145)** Therefore, it should contain a collection of product objects.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=149)** I'll add a new private data member, the m_Products vector for that purpose.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=158)** We won't need the type specific storage members anymore, so I go ahead and delete them.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=166)** We can also remove the addBox, addBook, and addToy methods.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=173)** So let's get rid of them.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=176)** Instead, I'll create an addProduct method that takes a product reference as its argument.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=183)** void addProduct.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=192)** And the argument is called product.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=196)** And I'll add it to the m_Products vector.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=202)** m_Products.push_back.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=208)** This method will be used to add books, toys, other boxes, and any other type of product we may design in the future.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=217)** Finally, I need to refactor the price method.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=221)** These for loops have become obsolete, as we don't have type specific storage members anymore.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=229)** Instead, I'll iterate through the m_Products vector and sum up the prices of each product it contains.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=244)** We almost finished refactoring our design using the composite design pattern.
>
> **[4:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=249)** I'll have to modify the main function though.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=252)** Instead of addBook, we need to call addProduct. Same here.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=261)** And we'll call price.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=264)** So we just finished refactoring our design using the composite design pattern.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=270)** We have a product, abstract class, and three concrete classes.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=277)** Book, toy, and box.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=281)** The box class turned into a composite, a container of product objects, and its price method can calculate the total price of the items it contains, and it does so without any type specific code.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=295)** The code is also shorter and cleaner.
>
> **[4:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=298)** These are huge improvements over the original design.
>
> **[5:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=302)** However, the biggest benefit of the composite pattern is that it allows us to add new product types without modifying the existing code.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=311)** Now our design adheres to the open-closed principle, which states that classes should be open for extension but closed for modification.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (3), abstract (2), override (2), case. (1)
> **Code Identifiers:** addproduct (3), addbook (2), getprice (1), addbox (1), addtoy (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Drawing shapes
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=0)** (bouncy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=5)** - [Instructor] Here's the C++ project that allows us to draw shapes.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=9)** The design is based on classes implementing the abstract Shape class which is a single draw method.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=17)** The concrete classes are Circle, Rectangle, and Triangle.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=24)** They contain the properties that describe their shapes such as Radius for Circle, Width and Height for Rectangle, and Side lengths for Triangle.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=36)** These classes also implement the draw method responsible for drawing the shapes on the screen.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=42)** Now there's just a dummy cout statement, but implementing the actual drawing code is out of scope for this demo.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=52)** We can draw individual shapes by creating objects of the respective classes and calling their draw methods as demonstrated in the main function.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=63)** At this point, our design works flawlessly.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=66)** But what if you want to draw a complex shape such as a house?
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=71)** The design lacks the capability of representing and manipulating complex structures.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=77)** Your task is to improve this project using the composite design pattern to make it possible to create aggregate shapes.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=86)** Start by implementing a CompositeShape class that allows for creating complex shapes made up of other shapes.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=93)** Your solution should meet the following requirements: the CompositeShape class implements the shape interface; the CompositeShape must contain a collection of shape objects; the CompositeShape class should expose methods for adding and removing shape objects; and finally, the main function should demonstrate the creation and drawing of composite shapes.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=122)** Here's an example of how the refactor code might be used.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=128)** This code creates a Circle, Rectangle, and Triangle object and then creates a CompositeShape object and adds these primitive shapes to it.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=137)** The draw method of the CompositeShape object is then called to draw on shapes in the collection.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=144)** The Rectangle object is then removed from the CompositeShape object and the draw method is called again to show that the removed shape is no longer drawn.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=156)** Pause the video and give it a try.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=158)** Once you're done, compare your solution with the design shown in the following video.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=163)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), abstract (1), implements (1), interface (1), finally, (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bouncy upbeat music) (1)

#### Solution: Drawing shapes
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=0)** - [Instructor] Hello, and welcome back.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=7)** In this video, I'll show you the design I have come up with for drawing aggregate shapes using the composite design pattern.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=15)** So we've got our initial code base with the abstract shape class and the concrete shape classes circle, rectangle, and triangle.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=23)** To make it possible to create aggregate shapes, I added a new class, composite shape.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=33)** The composite shape class implements the shape interface.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=37)** Let's have a closer look at the design of this class.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=41)** The private data member of the class is a vector of shape objects.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=50)** The add shape and remove shape methods allow us to add or remove individual shapes from the composite shape.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=58)** And finally, the draw method iterates through this vector and draws each individual shape.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=67)** The main function shows how to draw a composite shape.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=70)** First, we create some primitive shapes: a circle, a rectangle, and a triangle.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=76)** Next, we create an instance of the composite shape class, add the primitive shapes to it using the add shape method, and call the composite shapes draw method to draw all shapes in the collection.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=90)** We then remove one of the shapes from the composite shape and call it draw method again to show that the removed shape is no longer drawn.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=101)** This refactored code allows for creating composite shapes made up of other shapes demonstrating the benefits of using the composite design pattern.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=110)** The composite design pattern is a great tool to have in your design arsenal.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=115)** Next, we'll look into the decorator design pattern to learn how it can be used to add functionality to objects at drawing time.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=122)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (2), abstract (1), implements (1), interface (1), let (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. The Decorator

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=0)** - [Instructor] The decorator is a structural design pattern that allows adding new behavior to an object dynamically without entering its structure.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=9)** The pattern involves wrapping an object inside a decorator object, which adds the required behavior.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=16)** This design pattern is best suited for projects where we want to extend the functionality of an object without sub classing.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=24)** The UML diagram of the decorator looks similar to the composite design pattern.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=29)** We have a common base class or interface called component.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=33)** This interface is implemented by concrete component classes.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=39)** We also have a decorator class which implements the component interface and maintains a single reference to the component object.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=47)** That's the difference between the composite design pattern and the decorator design pattern.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=52)** Instead of having a collection of components, the decorator only has a single reference to the component.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=59)** That's because the decorator's purpose is to extend the functionality of a single object not a tree of objects.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=66)** Finally, we have decorator subclasses that enhance the component objects responsibilities by providing additional state or behavior.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=76)** It's important to note that the decorator can add new methods or data members to an object without changing its interface.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=84)** Also, the decorator hides the original component object so we can't access the wrapped object directly.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=92)** Now let's also mention the potential pitfalls of this design pattern.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=97)** First, it can lead to a large number of small classes if many decorators are used which can make the code harder to read and maintain.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=106)** Second, the design can get out of control if multiple levels of decorators are used.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=113)** Despite these potential challenges the decorator design pattern is useful for enhancing an object without entering its structure.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=122)** Now that we have an overview of the decorator pattern, let's look at a practical example to see how we can use this design pattern in practice.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (2), implements (1), finally, (1)
> **CLI Commands:** make (1)
> **Env Vars:** uml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Computer shop demo using inheritance
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=0)** - [Instructor] Suppose we have a computer shop that sells different types of computers, such as desktops and laptops.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=7)** We could represent these computers as classes that inherit from a base computer class.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=12)** For example, the Computer abstract class could define methods for displaying the computer's price and description.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=19)** The child classes Desktop and Laptop would then override these methods and provide their own implementation.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=28)** We can then use these classes to create different types of computers and print out their descriptions and prices.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=35)** However, there are some design problems with this approach.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=39)** Suppose we want to add additional functionalities to our computers, such as upgrading the memory or adding a graphics card.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=47)** We could create new classes for each combination of computer and functionality, such as desktop with graphics card and laptop with memory upgrade.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=61)** This approach can quickly become unmanageable if we have different types of upgrades.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=67)** Moreover, it is not a very flexible design.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=70)** Since we need to create a new class for every combination of computer and upgrade.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=77)** This is where the decorator design pattern comes in.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=80)** Instead of creating many different classes for each combination of computer and upgrade, we can use the decorators to assign new behaviors or functionalities to the computers in a more flexible and dynamic way.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=95)** For example, we could create decorator classes for each upgrade, such as memory upgrade decorator and graphics upgrade decorator that wrap around the computer object and add new functionalities.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=109)** Let's take a look at how this design pattern works in practice.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (2)
> **Code Keywords:** class. (1), abstract (1), override (1), let (1)
> **Speakers:** - [instructor] (1)

#### Computer shop demo using the Decorator design pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=0)** - [Instructor] We need to define a class hierarchy of decorators that wrap our computer objects to dynamically add upgrades to our computers.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=9)** Each decorator will add new functionality to the wrapped object.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=13)** As a result, we can create combinations of computers and upgrades without having to create many different computer subclasses.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=24)** So let's remove these classes first.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=30)** We won't need them anymore.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=34)** Let's start by defining a computer decorator class.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=42)** It should inherit from computer and it needs a reference to the wrapped computer object.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=52)** So I'll go ahead and create a protected member of type computer pointer.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=62)** Let's call it m_computer.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=66)** Next, I'll define the constructor.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=72)** Let's make it explicit and it takes a single computer pointer as a parameter and assigns it to the wrapped object in its initializer list.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=94)** The class also needs to override the description and price methods of the computer class.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=107)** I simply delegate the corresponding calls to the wrapped object, return m_Computer
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=118)** and let's call it description method and I implement the price method similarly, double price return m_Computer
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=142)** and I call it price method.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=147)** Next, I'll create decorator classes for each upgrade.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=151)** Let's start with the memory upgrade.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=157)** The memory upgrade class extends the computer decorator and overrides the description and price methods.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=164)** The description method calls the base classes description method first, and adds the name of the upgrade.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=172)** So it says ComputerDecorator::description, the base classes description method plus and it depends the string with memory upgrade.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=185)** Similarly, the price method returns the sum of the base objects price, and the memory upgrade cost.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=192)** This is an overly simplified example, but you get the idea.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=199)** The same approach can be used for the graphics upgrade decorator.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=205)** The only difference is that we must adjust the price and description methods accordingly.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=211)** Now that we have the decorator classes in place, creating a computer with memory or graphics upgrades is easy.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=224)** First, I create a desktop and a laptop computer.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=228)** Next, I print out the description and price of each computer.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=233)** Then I create a memory upgraded desktop and a graphics upgraded laptop by initializing a memory upgrade decorator and a graphics upgrade decorator object.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=244)** The memory upgrade decorator wraps the desktop object and the graphics upgrade decorator gets initialized with the laptop object.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=254)** Finally, I print out the description and price of each upgrade.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=264)** The output of this program tells us that the design works as expected.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=269)** The decorator design pattern is a powerful way to extend objects with additional functionality without relying on inheritance or changing their interface.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=279)** Next, it's your turn to design a similar solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (2), protected (1), override (1), extends (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** m_computer (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Pizza toppings
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=0)** - [Instructor] Now that we've seen how the decorator pattern can be used to add new functionalities to objects dynamically, how about solving a design problem on your own?
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=16)** The challenge is to design a pizza ordering system that allows customers to order pizzas with different toppings.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=23)** The design should allow customers to choose any combination of toppings and calculate the final price at runtime.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=31)** Here's the starter project for this challenge.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=35)** We have a pizza abstract class and three concrete classes for margherita pizza, Hawaiian pizza, and pepperoni pizza.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=48)** Your task is to come up with a decorator based solution that allows customers to add one or more toppings to the pizzas and calculate the final price at runtime.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=59)** Here are some hints to get you started.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=62)** You'll need a topping decorator class that implements and reps the pizza class to add additional toppings.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=69)** You will also need classes for each type of topping that extends the topping decorator class, such as mushroom decorator, tomato decorator, and extra cheese decorator.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=82)** The final design should allow customers to order a pizza with any combination of toppings and calculate the total price accordingly.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=91)** For example, a customer could order a margherita pizza with mushrooms and extra cheese, and the design should be able to calculate the total cost of this order.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=103)** Okay, hit pause and implement your solution now.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=107)** When you are done, come back and review my solution.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=110)** Have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), implements (1), extends (1), class, (1)
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** starter project (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Pizza toppings
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=0)** - [Narrator] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=6)** How did you do?
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=8)** Now let's take a look at the solution I have come up with for this design challenge.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=13)** As discussed in the previous video, we need to design a decorator based solution that allows customers to order pizzas with additional toppings and calculate the final price accordingly.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=27)** First, I created a base topping decorator class that wraps the pizza class.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=34)** The topping decorator class takes an appointer to the pizza object and provides implementations of the description and price methods.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=42)** Note that I use unique pointers instead of raw pointers.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=46)** The constructor takes ownership of the pointer using the move function.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=52)** The description and the price methods delegate the call to the wrapped pizza object.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=58)** The actual decoration of the pizza is done by the concrete topping decorator classes that extend topping decorator.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=65)** The following is the design for the mushroom decorator class.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=70)** The mushroom decorator's constructor passes the pointer to the pizza object to its base class topping decorator.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=78)** Again, we need to use the move function to transfer the ownership of the unique pointer.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=84)** The description and price methods call the topping decorator objects methods while appending additional information to the description and including an additional cost for mushrooms.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=96)** A similar design can be implemented for other toppings like extra cheese decorator and tomato decorator.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=104)** The solution allows customers to order pizzas with any combination of toppings, and the design should be able to calculate the final cost accordingly.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=116)** For example, a customer may order a margherita pizza with mushrooms and extra cheese.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=122)** The corresponding code would create a margherita pizza object, wrap it in a mushroom decorator and then further wrap the result into extra cheese decorator.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=133)** How about a pepperoni pizza with mushrooms, tomatoes and extra cheese?
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=139)** This design should be able to handle this combination as well, and it works exactly as we'd expect it to.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=149)** Decorator is a powerful pattern that allows adding new functionalities to objects dynamically without altering their structure.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=157)** It is particularly useful when we have a large number of combinations of objects and functionalities and we want to avoid creating new classes for each combination.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), function (2), let (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. The Façade

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=0)** - [Instructor] Facade is a structural design pattern that provides a simplified interface to a complex subsystem.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=6)** In other words, it hides the complexity of the underlying components behind a higher level, easier to use API.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=14)** As a consequence, clients don't need to understand the details of the subsystem to leverage its functionality.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=21)** Instead, they access the subsystem through a single entry point provided by the Facade, which in turn forwards the request to the appropriate components.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=32)** The Facade pattern can help simplify specific tasks while decoupling the consumer site from the underlying frameworks or types.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=41)** It's also helpful to narrow down the functionality of a library so clients are exposed only to what is necessary for their tasks.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=50)** The perfect candidates for the Facade pattern are libraries, frameworks, or any subsystems that are still evolving and may require changes in the future.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=61)** To protect our clients from these changes, we can design a Facade that wraps the entire subsystem and provides a stable interface.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=70)** Thus, changes to the underlying subsystem won't affect clients as long as the public interface of the Facade remains intact.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=82)** The Facade design pattern includes two main components, the Facade class, that exposes a simplified interface to the underlying subsystems, and the subsystem classes, that provide the actual functionality.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=96)** Here's a practical example to demonstrate the Facade pattern better.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=100)** Consider a smartphone.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=102)** A smartphone has many parts such as a processor, battery, memory, cameras, and more.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=110)** As users, we don't need to understand how each part works, instead, we can use a single interface, the touchscreen.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=118)** The touchscreen is a good analogy for the Facade.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=121)** It provides a simple unified interface to access the features of our smartphone.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=127)** The Facade design pattern is straightforward to implement as you will soon see.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=131)** There are a couple of pitfalls, though.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=134)** The most common design issue is that the Facade may become too big and integrate too many features, breaking the single-responsibility principle.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=144)** To avoid this, design the Facade with a specific purpose and ensure it is well scoped.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=150)** Exposing the underlying types is another potential problem when implementing a Facade.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=156)** By doing so, clients may bypass the Facade, rendering it useless.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=161)** To prevent this, design the Facade is an opaque black box and don't expose any underlying types.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), this, (2), require (1), public (1), class, (1)
> **Definitions:** is a  (2), in other words (1), is an  (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Complex interface demo
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=0)** - [Instructor] Now, let's look at a demo project that will help us understand the need for the facade pattern.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=6)** Let's say we are building a hotel reservation system.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=10)** The system needs to coordinate the work of several existing components, such as a database library, a payment gateway, and a messaging service.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=20)** Here's the source code of our demo project.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=23)** We can see that each component or subsystem is implemented as a separate class.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=29)** We have a database class to store reservations, a payment gateway to process payments, and a messaging service class to notify customers about their reservations.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=41)** To keep the demo straightforward, these classes do not implement the actual functionality.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=46)** Instead, they just log a message to the console.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=51)** When a customer books a reservation, the system needs to store the details in the database, process their payment with the payment gateway, and notify them with the messaging service, as demonstrated in the main function.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=66)** Thus, we have to instantiate each class and call their corresponding methods in a specific order.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=73)** This requires us to add a lot of code to achieve the desired result.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=77)** Our code is tightly coupled with these components, another design issue.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=82)** Plus, we need to understand the interface of each class, as well as their interactions.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=89)** Although this is a simplified example, it highlights the problems we can face when working with complex systems.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=96)** Fortunately, we can simplify the use of these components by applying the facade design pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), class. (1), function (1), interface (1), class, (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Applying the Facade design pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=0)** - [Instructor] Let's refactor our code and apply the facade design pattern.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=4)** First, we'll create a facade class.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=7)** Let's call it ReservationsystemFacade.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=14)** This class will encapsulate the functionality of our existing component classes and provide a single simplified interface for making reservations.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=23)** So we'll need to add the members of each component class as private data members.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=33)** First, the database.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=37)** Let's call this data member m_Database.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=42)** We'll also need a PaymentGateway.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=50)** And finally, a MessagingService data member.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=56)** Next, I create a constructor and initialize these data members as required.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=64)** The constructor should be public.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=69)** And I'll initialize these data members in the Initializer list, m_Database first followed by m_PaymentGateway and finally, the MessagingService data member.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=89)** Next, I'll define the simplified interface, a method for making reservations.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=95)** Let's call it makeReservation.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=99)** Now what are its arguments?
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=104)** Let's revisit the old sequence of calls to see what needs to be done here.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=109)** So first, we'll store the reservation info in the database.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=113)** The second step is to process payment with the payment gateway.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=116)** And the third step is to notify the customer with the messaging service.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=121)** So I need to pass in the reservation and payment information as parameters.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=128)** The message will be generated inside the make reservation method.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=134)** Both are strings for the simple demo.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=138)** So that's the reservationInfo, and it should be a reference.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=150)** And the second argument also string, is the paymentInfo.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=161)** And now I'll call the corresponding methods of my wrapped components to implement the desired functionality.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=169)** First, I store the reservation using the database.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=179)** Then I'll use my payment gateway data member to process the payment and finally send the confirmation message.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=194)** How about, Reservation confirmed.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=202)** And the final step is to use the reservation system facade class to simplify our code.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=207)** Instead of directly interacting with the underlying classes, clients can now use the simplified interface provided by the reservation system facade class.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=217)** So I'll go ahead and remove the old code and use the newly created facade class instead.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=227)** I'll create an instance of the reservation system facade class.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=235)** Okay, let's fix this typo.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=238)** It should become a case slate. Also here.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=241)** And finally the constructor.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=243)** Okay, so let's call this instance reservationSystem.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=254)** I am going to borrow these strings from the old code and the payment info, too.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=264)** And now let's call the reservation system facades Instance, makeReservation method.
>
> **[4:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=275)** I need to pass in the reservation info and the payment info, perfect.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=284)** With just a little extra effort, we've created a facade that will save us time, each time we need to make reservation.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=292)** Clients don't need to interact with multiple classes and learn their methods and dependencies.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=297)** Instead, they can make their reservations quickly and easily through a single interface and method call.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (4), class. (3), finally, (2), pass (2)
> **Code Identifiers:** makereservation (2), reservationinfo (1), paymentinfo (1), reservationsystem (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### Challenge: Hide complexity with a facade
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=5)** - [Instructor] Now it's your turn.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=7)** Here's an application that retrieves the current temperature, humidity, and weather description for a given location.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=14)** The project relies on three different weather APIs to request the data.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=20)** Each web service exposes a different method and returns slightly different results.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=25)** World Weather only returns the temperature and wind speed.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=31)** Free Weather returns temperature and a brief textual description.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=35)** And Realtime Weather Service returns humidity, temperature, and verbose textual weather conditions.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=44)** The application combines the results from these APIs to display the local temperature, humidity, and a short textual description of the weather.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=55)** However, merging the results from the different APIs requires a lot of manual coding, due to the differences in their interfaces.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=64)** The challenge is to simplify the application's design and provide a simpler interface to the user, by using the facade pattern.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=73)** Your task is to create a facade class that exposes a single method, currentWeather, that takes a single argument, the location.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=84)** The class should wrap all three web services and call their methods to retrieve weather information.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=90)** The current weather method will combine the results into a unified format, and return a tuple that includes the local temperature, humidity, and a short textual description of the weather.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=102)** Finally, your solution should demonstrate the use of the facade.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=106)** Okay, pause the video and give it a try.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=109)** I'll wait.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), finally, (1), try. (1)
> **Code Identifiers:** currentweather (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)

#### Solution: Hide complexity with a facade
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=5)** - [Instructor] We have our WeatherFacade class which wraps all three web services, WorldWeatherAPI, FreeWeather, and RealtimeWeatherService.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=17)** The class exposes a single public method current weather, which takes a location as an argument and returns a string.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=26)** The method internally cause the web services stores their results in three different variables and combines the relevant weather data into a single string.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=38)** I used the string stream object to easily build the string.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=42)** Finally, I return the generated string from the method.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=47)** Using this new facade class is extremely easy.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=52)** So here's the main function.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=55)** I just create an instance of this class and call the current weather method.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=63)** The output of this code is the same as before.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=66)** The goal of simplifying the design and making it easier to interact with the weather API has been achieved by using the facade design pattern.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=76)** Now you know how to use the facade design pattern in C++.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=80)** Next up, we'll dive into the flyway design pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), finally, (1), function (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. The Flyweight

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=0)** - [Instructor] The flyweight is a structural design pattern that aims to reduce the memory usage and creation costs of objects by sharing common data instead of replicating it in each instance.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=12)** This pattern is suitable for situations where a large number of objects need to be created and each object has common properties that can be shared.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=23)** The flyweight pattern can be applied to various scenarios including graphical user interfaces, game development and database management systems.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=32)** It helps to improve the performance and efficiency of these applications by reducing the number of objects created and the amount of memory used.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=42)** The flyweight design pattern consists of three main components.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=46)** The Flyweight.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=48)** This interface defines the operations that can be performed on the flyweight objects.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=54)** ConcreteFlyweight.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=56)** This is the actual flyweight class that implements the interface defined by the flyweight.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=62)** It encapsulates the object's shared immutable state, also called the intrinsic state.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=68)** The instance specific extrinsic state is externalized and must be set up and supplied to the flyweight object by the client.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=77)** And the FlyweightFactory which maintains the pool of flyweight objects and provides a way to retrieve them.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=84)** Clients must use the factory to request flyweight objects.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=88)** Now, before we continue, I want to clarify two important concepts because they are crucial to implementing this pattern correctly.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=99)** Intrinsic state is the data that's shared among all flyweight instances.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=105)** This data is immutable and is typically passed during the construction of the flyweight object.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=112)** Extrinsic state, on the other hand, is the data that is specific to each instance of a flyweight class.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=119)** This data is not shared among instances and can vary from object to object.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=124)** The extrinsic state is managed by the client code and passed to the flyweight instance through a dedicated method call.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=134)** The flyweight design pattern can reduce memory usage by sharing common data among objects.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=140)** By reducing the number of objects created, this pattern can also help to improve the performance and efficiency of applications.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=149)** While these benefits are substantial, the flyweight design pattern should only be used when we deal with the large number of objects and these objects have common properties that can be shared.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=161)** Otherwise, the added complexity may not be worth the effort.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), implements (1), continue (1), class. (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Introducing sprites
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=0)** - [Instructor] I've gone ahead and created a sample application called Sprite.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=5)** A Sprite is a two-dimensional graphical object, used in computer graphics and games.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=9)** It usually has a texture, an image, stretched over its surface, which adds detail and realism to the object.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=18)** Let's start with the Texture class.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=21)** We're not building an actual graphic engine, so I kept it simple.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=25)** Instead of loading the image and creating a texture, the constructor of this class just stores the name of the image file and assigns a random integer value to its MID data member.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=38)** The description method returns the combined value of these properties as a string.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=43)** We'll use this method to differentiate between texture objects, and it will help us reveal a severe flaw in the design of our application.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=52)** Next, let's move on to the Sprite class.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=57)** The Sprite class has five data members, width, height, X and Y coordinates, and the name of the image file used to create the texture.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=67)** These members get initialized in the constructor's initializer list.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=72)** The render method prints out a message that also includes the texture objects description.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=78)** Now, let's create a few surprise.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=84)** In the main function, I populated a vector with 10 Sprite objects.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=91)** Each Sprite gets initialized with the same texture file name, spaceship.png.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=101)** The second for loop iterates through the vector and calls the render method on each Sprite instance.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=108)** Let's run this code.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=114)** This is where we first encounter the flaw in our design.
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=118)** Although the Sprites get initialized with the same image file, a new texture instance gets assigned to each Sprite.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=126)** The texture identifiers are different for each Sprite.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=130)** This approach may work fine for our demo, but it can lead to unnecessary memory usage and performance issues, when dealing with a large number of Sprites.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=139)** We'll use the facade design pattern to optimize this code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (2), function (1)
> **Env Vars:** mid (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reducing memory usage: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=0)** - [Instructor] Facade uses sharing to avoid unnecessary object creation and minimize memory usage.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=6)** Let's demonstrate how to apply this design pattern to improve our demo code.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=11)** First, we'll need to identify the intrinsic state of our sprite class.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=19)** The intrinsic state is the state that can be shared between sprite instances.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=24)** Let's have a look at the data members in the sprite class.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=27)** The width and height of the sprite as well as its coordinates X and Y are specific to each instance.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=35)** Thus, sharing them with other sprite objects doesn't make sense.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=40)** We can consider these properties part of sprite's extrinsic state, which should be set by the client code and shouldn't be shared.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=48)** Now, the texture is a different story.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=51)** Sprites with the same texture are common in video games.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=55)** Just think of particle effects used to simulate fire, rain, or smoke.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=60)** These effects are created by spawning a large number of sprites with the same texture.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=66)** So the texture is definitely part of sprite's intrinsic state and can be shared between instances.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=74)** Now that we know which state should be shared, let's design our flyweight factory.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=79)** I'll call it SpriteFactory.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=87)** Clients will use this factory to retrieve sprite objects.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=91)** These sprites should have their shared or intrinsic states set by the factory, while the client code is responsible for setting the extrinsic state.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=101)** The intrinsic state is the sprite's texture.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=104)** Thus, I'll create a public method that returns a sprite pointer and takes as an argument the texture file name.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=116)** I'll make it a public method and it should return a sprite pointer, makeSprite.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=126)** And it takes a single argument a constant string reference.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=136)** Sprite factory needs a way to associate sprite instances with a specific file name.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=141)** The simplest way to do this is to use a map data structure.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=145)** I'll introduce a new private data member of type unordered map.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=150)** The unordered map is an associative container that contains key value pairs with unique keys.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=159)** Unordered_map, the key is of type string, and the value is a sprite pointer.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=170)** And let's call it m_SpritePool.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=176)** So this map will store image file name sprite pointer pairs.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=181)** This data structure will ensure that each file name is associated with only one sprite instance.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=188)** This is crucial for our design as we want to create exactly one instance of the sprite class per image file.
>
> **[3:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=197)** To use this data type, I will need to import unordered_map.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=204)** Next, I'll call the map's find method to check if there's an entry for the given key in the map.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=215)** M_SpritePool, and I call its find method by passing in the file name.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=223)** If there's no such entry, find returns the pass to end iterator.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=227)** That's why I need to check if the iterator is not the end iterator.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=234)** If iterator is not equal to m_SpritePool.end.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=245)** Now, if find returns a valid iterator, I'll return the sprite pointer by accessing its second element.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=253)** The map stores pairs of keys and values, so the value is the second element.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=264)** If find returns the end iterator, there is no sprite associated with this file name.
>
> **[4:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=270)** In this case, I'll create a new sprite instance and add it to the map.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=274)** However, I will need to refactor the sprite class first.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (2), public (2), private (1), type, (1)
> **CLI Commands:** find (5), make (2)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** makesprite (1), unordered_map (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Reducing memory usage: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=0)** - [Instructor] Since it'll turn into a flyweight the Sprite class should contain only intrinsic properties.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=6)** The extrinsic properties like coordinates and size should be passed to this class as arguments.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=13)** So I will modify the constructor to take a single argument, a pointer to a texture.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=21)** And initialize the m_Texture data member using this texture.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=30)** And I'll output a simple diagnostic message to see when the Sprite is created.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=37)** To allow clients to set the extrinsic properties, I'll add a new method, setPositionSize.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=48)** It takes four integers as parameters.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=52)** The X and Y coordinate, width and height.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=61)** And we assign these values to m_X, m_Y, m_Width and m_Height.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=78)** And I'll have to remove the constant qualifier from the corresponding data members.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=87)** Now I can go back to the Sprite factory and continue implementing the makeSprite method.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=94)** So we stopped when find returned the end iterator.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=98)** So now I'll create a new Sprite instance and add it to the map.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=103)** The updated Sprite constructor takes a single argument, a texture pointer.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=108)** We should manage textures the same way we manage sprites.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=112)** Therefore, let's use the same data structure as before.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=116)** An unordered map of string texture pointer pairs.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=122)** I'll reuse this line but let's change Sprite to Texture pointer.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=127)** And I call this one m_TexturePool.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=135)** and I'll add a new private method to handle textures, getTexture.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=143)** The logic is the same as makeSprite.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=145)** If there's no texture associated with the given file name, create one and add it to the map.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=153)** I used the unordered map's emplace method to add a new element to the map.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=158)** This function constructs the object directly in the map's internal data structure, making it more performant than insert which requires an extra copy or move step.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=169)** Finally, I return the newly created texture object.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=174)** Let's finish the makeSprite function.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=177)** I call get texture to get a pointer to the texture object and then create a new Sprite instance.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=187)** I call getTexture with the file name.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=194)** I've stored the Sprite in the pool using emplace as well.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=201)** Our pair of iterator and the value we're not interested in, equals m_SpritePool, emplace, and I pass in the file name and a new Sprite.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=226)** And finally, I return the Sprite pointer by accessing the the iterator's second element.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=234)** Return newIt, second.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=241)** Let's not forget to deallocate the memory.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=244)** I'll define the des disruptor and iterate through both maps to free up all the sprites and textures we created by calling delete on each element.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=256)** So let's add the destructure here.
>
> **[4:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=263)** The last part of our refactoring is to create the Sprite using the factory.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=267)** So let's crawl down to the main function and I'll create the SpriteFactory instance.
>
> **[4:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=276)** SpriteFactory factory.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=281)** And I'll call its makeSprite method to create the Sprite objects.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=290)** And let's pass in the textureFile.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=295)** And I set each sprite's position and size the extrinsic properties by calling the newly added setPositionSize method.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=305)** Sprite, setPositionSize, 10 for x, 10 for y, 10 times i for width, and 10 times i for the height.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=323)** And the rest of the code remains unchanged.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=326)** Let's see if everything works as expected.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=332)** Yeah, right.
>
> **[5:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=333)** We don't need the cleanup code anymore because we have that in the factory's destructure.
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=345)** We can see that a single Sprite gets created and the diagnostic message printed from the Sprite render method confirms that all sprite share the same texture.
>
> **[5:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=358)** Mission accomplished.
>
> **[5:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=359)** Next, we'll talk about the proxy design pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), finally, (2), pass (2), continue (1)
> **Code Identifiers:** makesprite (4), setpositionsize (3), gettexture (2), newit (1), texturefile (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 7. The Proxy

#### Overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=0)** - [Instructor] The Proxy Structural Design Pattern allows us to provide a surrogate or placeholder for another object to control access to it.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=9)** The proxy acts as an intermediary between the client and the real object intercepting all requests and performing any necessary operations before or after forwarding the request to the actual object.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=23)** Introducing an additional level of indirection can provide many benefits such as lazy loading, access control, and caching.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=32)** The Proxy Design Pattern is often used in scenarios where you want to limit direct object exposure or enable additional functionality.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=41)** There are three main types of proxies.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=44)** Virtual, remote, and protective.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=47)** Virtual proxies are used to delay the creation of large objects until they are actually needed, a process also known as lazy loading.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=56)** They act as placeholders for objects that might be expensive to create, such as objects that require significant resources to initialize or have complex dependencies.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=67)** By using a virtual proxy, we can avoid the costs of creating and initializing the object until it is actually needed.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=75)** Instead, we create a lightweight placeholder that can be instantiated quickly and easily.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=81)** For example, a virtual proxy could be used to represent a large image or video file that would take a long time to load into memory.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=89)** Instead of loading the entire file at once, the virtual proxy can display a low resolution preview or thumbnail image and only load the full image when the user requests it.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=102)** Remote proxies provide a local placeholder that is used to control and optimize access to remote resources such as web services.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=110)** In this case, the proxy acts as a local representative for the remote resource intercepting method calls from the client application and forwarding them to the remote resource over a network connection.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=124)** By using a remote proxy, the client code can interact with the resource using a familiar local object interface while the proxy handles the details of the network communication.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=135)** For instance, a remote proxy could be used to access a web service without the need to write any network-related code or understand the web service's interface.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=147)** And finally, protective proxies are used to control access to a resource and impose certain restrictions.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=154)** The proxy can be configured to allow only users with valid credentials or permissions to access the resource.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=161)** In this case, the proxy acts is a gatekeeper that authenticates users and grants or denies access to the resource accordingly.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=171)** For instance, a protective proxy could be used to ensure that only authenticated users are allowed to access a bank's online services.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=181)** The benefits of the Proxy Design Pattern are undeniable.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=184)** Lazy loading of expensive objects, access control to remote resources, and security of sensitive data.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=192)** The proxy doesn't come without drawbacks though.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=195)** The introduction of new classes increases the complexity of the system, adds more code to maintain and debug, and increases the potential for errors.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=206)** Additionally, since proxies are intermediaries between the client and the real object, they can introduce latency and decrease the overall performance of the system.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), interface (2), require (1), finally, (1)
> **Analogies:** such as (3), for instance (2), for example (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### What problem does the proxy solve?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=0)** - [Instructor] I've created a demo to highlight an issue that might not be as obvious at first.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=5)** The program loads a configuration file into memory, and prints out the contents.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=9)** Let's take a look at the code.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=12)** We've got an abstract base class config file, which has a pure virtual method guest settings that returns a vector of strings.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=20)** This is the interface that concrete implementations of the config file class have to implement.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=26)** The program defines a concrete implementation of the config file class called RealConfigFile.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=36)** Now, this class has a constructor that takes a file name as an argument, opens the file, and reads its contents into a vector of strings.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=46)** It also overrides the guest settings method to return the vector of strings that was read from the file.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=55)** In the main function, I've created a real config file object with the file name of config.txt.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=63)** The program uses a Boolean variable use settings to decide whether or not to retrieve the configuration file settings.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=71)** Let's see how this works.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=73)** If use settings is true, the program retrieves the settings from the real config file object and prints them to the console using the for loop.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=85)** And if I run the program, we can see that the real config file object was created.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=92)** Three settings were loaded.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=94)** And here are their values, as printed from within the for loop.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=100)** Now, I'll change use settings to false and run the program again.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=107)** Let's see.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=111)** The program prints a message indicating that the configuration was not used.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=116)** However, there are two consol entries that precede this message.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=121)** These messages indicate that the real config file object was still constructed and its constructor read the configuration file into memory, even though the configuration was not used.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=133)** That's because the constructor of real config file reads and stores the configuration, regardless of whether it will be used or not.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=144)** The problem with this program is that it eagerly loads the entire configuration file into memory even if the settings are not needed.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=153)** One way to solve this problem is to use lazy loading.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), abstract (1), interface (1), function (1)
> **File Paths:** config.txt (1)
> **Speakers:** - [instructor] (1)

#### The virtual proxy
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=0)** - [Instructor] The problem we just saw can be solved using the virtual proxy design pattern.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=5)** It works by creating a proxy object that wraps around the real config file class and delays loading the settings until they are actually needed, minimizing the costs of creating expensive objects.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=18)** Let's see how this works.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=20)** First, I'll create a new class called config file proxy that derives from the config file class.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=31)** (keyboard clicking)
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=37)** - [Instructor] And it should inherit from config file.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=43)** The config file proxy class will wrap an instance of the real config file class.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=49)** To do this, it will hold a pointer to an instance of the real config file object.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=54)** So, I'll add a unique pointer to the real config file object as a private member.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=62)** (keyboard clicking)
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=66)** - [Instructor] And let's call it real config file.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=73)** Memory is already included, okay.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=76)** Now, the idea behind the virtual proxy design pattern is to delay the creation of the real config file object until it is needed.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=85)** And when do we need the actual real config file instance?
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=88)** When someone calls the get settings method of config file proxy, right?
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=94)** So, let's implement this method next.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=99)** (keyboard clicking)
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=102)** - [Instructor] It returns a vector of strings.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=106)** Get settings.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=108)** And when the proxies method gets invoked, I need to forward the call to the wrapped real config file instance.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=116)** But first, I need to make sure that the real config file object exists.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=121)** So, I have check the real config file pointer.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=130)** If it's a new pointer and this case I need to create it.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=138)** I'll call "make unique" to instantiate our unique pointer.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=144)** It should be of type real config file.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=148)** And I pass in the file name.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=151)** (keyboard clicking)
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=154)** - [Instructor] But there is no file name, so let's add that next.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=160)** I'll add it as a new private data member of type string.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=165)** (keyboard clicking)
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=168)** - [Instructor] And I'll initialize it in the constructor.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=173)** So, I'll add a constructor as well.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=181)** It takes file name as input parameter.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=188)** Now, I can initialize my file name member, and I'll also initialize the wrapped real config file pointer to null, because we don't like uninitialized pointers.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=206)** And finally, let's output a console message to see when the proxy gets created.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=215)** Config file proxy created.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=222)** There is a typo here, and now I can complete my get settings method.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=230)** Return, and now I forward the call to the real config file, the wrapped instance and call it get settings method.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=244)** And now that I delegated the call to real config file, we're almost done.
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=252)** The only thing left is to use the proxy in place of the real config file object in the main function.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=262)** So, I create an instance of config file proxy and comment out the code that creates the real config file object.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=274)** I keep the name of the object so, we don't have to modify the rest of our code.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=280)** And now, let's execute the program again.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=285)** So, use settings is set to false.
>
> **[4:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=287)** Let's see what happens.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=292)** - There are only two messages in the console.
>
> **[4:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=296)** The first one indicates that the proxy was created and the second says that our configuration was not used.
>
> **[5:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=304)** Now, since use settings is false, the proxies get settings method doesn't get called.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=310)** Thus, the real config file object isn't created.
>
> **[5:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=313)** And that's exactly what we wanted.
>
> **[5:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=316)** I'll try again with use settings set to true.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=323)** And running the demo gives us the following output.
>
> **[5:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=328)** So in this case, the get settings method is called which in turn triggers the creation of the real config file object and the proxy forwards the call to this object.
>
> **[5:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=339)** We just saw how the virtual proxy design pattern could be used to delay the creation of expensive objects until they are needed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (2), private (2), this, (1), pass (1)
> **Speakers:** - [instructor] (6), - there (1)
> **Non-Speech:** (keyboard clicking) (5)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)

#### Challenge: Implement a protective proxy
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=0)** - [Instructor] In this C++ challenge your goal is to implement a protective proxy to limit access to a resource.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=12)** The protective proxy acts as an intermediary between the client and the actual resource and adds access control rules to ensure that only authorized clients can access the protected resource.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=26)** Here's the starting demo featuring the class we want to protect from unauthorized access.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=32)** The SecureStorage class inherits from storage and initializes its string data member in the constructor.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=39)** The get contents method returns this string.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=41)** That's a pretty straightforward design.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=44)** Your task is to implement a protective proxy that limits access to the SecureStorage class, allowing only users who know the secret code to access the protected resource.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=57)** You can use a similar approach, as in the previous example.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=60)** Create a proxy class that exposes the same public interface as SecureStorage, but with access control rules in place.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=68)** When clients call the proxy's get contents method, it should first verify that the code is correct before delegating calls to the protected SecureStorage instance.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=80)** Pause the video and give it a try.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=82)** Come back to check out my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (3), class, (1), public (1), interface (1), try. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Implement a protective proxy
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=5)** - [Instructor] I hope you had to go at the challenge before checking out my solution.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=10)** Here's the design of the Protective Proxy class I came up with.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=16)** Secure storage proxy is derived from storage and exposes the same public interface as the secure storage class, with an additional constructor parameter for the secret code.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=28)** The class wraps a secure storage instance that gets initialized in the constructor.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=34)** I used a unique pointer to ensure that the instance gets automatically destroyed when the proxy is deleted.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=41)** The get contents method contains the access control logic.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=44)** The proxy requires clients to provide a valid code before granting access to the secure resource.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=51)** The private authorized method performs a single string comparison, to verify that the provided code matches the secret code, which is 42.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=61)** If there is a match, the method returns true and get contents forwards the card to the secure storage object.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=68)** Otherwise, it returns the string access denied.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=73)** Now, bear in mind that I use this basic approach exclusively for demonstration purposes.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=79)** It goes without saying that comparing strings and using hard-coded passwords is not how you should implement authentication mechanisms for real world applications.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=92)** In the main function, I instantiate a secure storage proxy instance with the same string data as in the initial project.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=99)** But this time I also provide the secret code.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=103)** Let's run the demo to see if it works as expected.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=110)** Yep, it works as intended.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=112)** Now, let's pass a wrong code, to see if the access control rules kick in.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=120)** How about 41?
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=125)** And there you go, Access Denied.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=129)** The proxy design pattern can solve various design problems, involving access control, lazy loading, and optimized usage of remote resources.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=139)** It's a design pattern worth knowing, along with other design patterns from the gang of four.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1), interface (1), class, (1), private (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=0)** - [Karoly] Congratulations, you've completed the C++ Design Patterns Structural course and learned how to use structural design patterns to create more elegant, efficient, and scalable software.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=13)** I hope you found the course informative, engaging, and rewarding.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=18)** To solidify your understanding of the concepts covered in this course, I encourage you to practice implementing the structural design patterns in your own code.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=28)** By applying these patterns in real-world projects, you'll gain valuable experience and expertise that will set you apart as a skilled and knowledgeable developer.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=38)** Also, don't hesitate to revisit the course from time to time to refresh your knowledge and deepen your understanding of the material.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=46)** The lessons and exercises in this course are designed to be valuable and relevant for years to come.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=53)** If you enjoyed this course and want to learn more about software development and design, be sure to check out my other LinkedIn Learning courses.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=61)** I cover a wide range of topics from Swift and iOS programming to software architecture and object-oriented design.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=70)** To deepen your C++ knowledge, I recommend checking out Advanced C++ Topics with Bill Weinman and C++ Code Clinic with Olivia Stone.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=82)** These courses cover advanced C++ concepts and practical coding challenges that will help you take your skills to the next level.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=90)** Thank you for watching this course and investing in your programming education.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=95)** I'm honored to have been your instructor, and I hope you found the course valuable and enjoyable.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=101)** Good luck with your coding projects and keep exploring the exciting world of software development.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (1)
> **Speakers:** - [karoly] (1)


## Path Context

### In [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]
← [[C Plus Plus Essential Training]] | **2 of 3** | [[C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices]] →

## Part of

- [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]

## Appears In

- [[C++ Programming Professional Certificate by OpenEDG C++ Institute]]

## Related Courses

_Courses sharing skills:_

- [[C++ Design Patterns- Behavioral]] — Software Design Patterns, C++
- [[Python Data Structures- Trees]] — Data Structures
- [[Python Data Structures- Linked Lists]] — Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Data Structures
- [[Python Data Structures and Algorithms]] — Data Structures
