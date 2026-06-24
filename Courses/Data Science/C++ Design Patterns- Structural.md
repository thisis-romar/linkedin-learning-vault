---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH8V651keIfeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683141155361?e=2147483647&amp;v=beta&amp;t=-vEFGmbj6Pe1-qJWo9ikuPCbS2snbhPNq00Znajvsic"
linkedin_topic: Data Science
learning_paths:
  - '[C++ Programming Professional Certificate by OpenEDG C++ Institute](../../Paths/Data%20Science/Professional%20Certificates/C%2B%2B%20Programming%20Professional%20Certificate%20by%20OpenEDG%20C%2B%2B%20Institute.md)'
prev_courses:
  - '[C Plus Plus Essential Training](C%20Plus%20Plus%20Essential%20Training.md)'
next_courses:
  - '[C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices](../Software%20Development/C%2B%2B%20Development-%20Advanced%20Concepts%2C%20Lambda%20Expressions%2C%20and%20Best%20Practices.md)'
path_nav: '[{"path":"C++ Programming Professional Certificate by OpenEDG C++ Institute","position":2,"total":3,"prev":"C Plus Plus Essential Training","next":"C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/data-structures
  - skill/software-design-patterns
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/C%2B%2B%20Design%20Patterns-%20Structural.md)

![C++ Design Patterns: Structural](https://media.licdn.com/dms/image/v2/D560DAQH8V651keIfeg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683141155361?e=2147483647&amp;v=beta&amp;t=-vEFGmbj6Pe1-qJWo9ikuPCbS2snbhPNq00Znajvsic)

# C++ Design Patterns: Structural

> Design patterns allow you to solve common software development problems in a reusable way, making your code more robust and scalable. In this course, Károly Nyisztor explores the structural design patterns from the Gang of Four. He shows you how to leverage these patterns in modern C++ code and how they can help you design more robust and scalable software. He also discusses the seven structural d

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029) | 1h 47m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Structural design patterns in C++](#structural-design-patterns-in-c)
- [**1. The Adapter**](#1-the-adapter) (6 videos)
  - [Overview](#overview)
  - [When should you use the Adapter pattern?](#when-should-you-use-the-adapter-pattern)
  - [Implementing an object adapter](#implementing-an-object-adapter)
  - [Implementing a class adapter](#implementing-a-class-adapter)
  - [Challenge: Refactor using the Adapter pattern](#challenge-refactor-using-the-adapter-pattern)
  - [Solution: Refactor using the Adapter pattern](#solution-refactor-using-the-adapter-pattern)
- [**2. The Bridge**](#2-the-bridge) (5 videos)
  - [Overview](#overview)
  - [Exploding class hierarchies](#exploding-class-hierarchies)
  - [The Bridge pattern in action](#the-bridge-pattern-in-action)
  - [Challenge: Enhancing a design using the Bridge pattern](#challenge-enhancing-a-design-using-the-bridge-pattern)
  - [Solution: Enhancing a design using the Bridge pattern](#solution-enhancing-a-design-using-the-bridge-pattern)
- [**3. The Composite**](#3-the-composite) (5 videos)
  - [Overview](#overview)
  - [Implementing a hierarchical structure](#implementing-a-hierarchical-structure)
  - [Redesigning with the Composite pattern](#redesigning-with-the-composite-pattern)
  - [Challenge: Drawing shapes](#challenge-drawing-shapes)
  - [Solution: Drawing shapes](#solution-drawing-shapes)
- [**4. The Decorator**](#4-the-decorator) (5 videos)
  - [Overview](#overview)
  - [Computer shop demo using inheritance](#computer-shop-demo-using-inheritance)
  - [Computer shop demo using the Decorator design pattern](#computer-shop-demo-using-the-decorator-design-pattern)
  - [Challenge: Pizza toppings](#challenge-pizza-toppings)
  - [Solution: Pizza toppings](#solution-pizza-toppings)
- [**5. The Façade**](#5-the-faade) (5 videos)
  - [Overview](#overview)
  - [Complex interface demo](#complex-interface-demo)
  - [Applying the Facade design pattern](#applying-the-facade-design-pattern)
  - [Challenge: Hide complexity with a facade](#challenge-hide-complexity-with-a-facade)
  - [Solution: Hide complexity with a facade](#solution-hide-complexity-with-a-facade)
- [**6. The Flyweight**](#6-the-flyweight) (4 videos)
  - [Overview](#overview)
  - [Introducing sprites](#introducing-sprites)
  - [Reducing memory usage: Part 1](#reducing-memory-usage-part-1)
  - [Reducing memory usage: Part 2](#reducing-memory-usage-part-2)
- [**7. The Proxy**](#7-the-proxy) (5 videos)
  - [Overview](#overview)
  - [What problem does the proxy solve?](#what-problem-does-the-proxy-solve)
  - [The virtual proxy](#the-virtual-proxy)
  - [Challenge: Implement a protective proxy](#challenge-implement-a-protective-proxy)
  - [Solution: Implement a protective proxy](#solution-implement-a-protective-proxy)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Structural design patterns in C++](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/structural-design-patterns-in-c-plus-plus?u=76281980&t=0)** - [Karoly] Structural [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) can help us maintain and scale our code as our project grows more complex. Design patterns are proven solutions to recurring [Software Design](../../Skills/Software%20Development/Software%20Design.md) problems and the structural patterns in particular help you simplify and keep the design of large object structures flexible and efficient. In this course, we'll delve into the world of C++ structural design patterns and explore how they can help you create more elegant and scalable software. Hi, I'm Karoly Nyisztor, a software engineer with over 10 years of experience in C++ programming. I've helped numerous developers improve their code quality and design skills and I'm excited to share my knowledge with you. If you are ready to take your coding and object-oriented design skills to the next level, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course as we explore the seven structural design patterns defined by the Gang of Four and learn how to leverage them in modern C++.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (4), [Software Design](../../Skills/Software%20Development/Software%20Design.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [karoly] (1)


### 1. The Adapter

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=0)** - [Instructor] The adapter design pattern is a [Software Design](../../Skills/Software%20Development/Software%20Design.md) pattern that allows two incompatible interfaces to work together by converting one class's interface into another. This pattern is often used in situations where a client is expecting a specific interface but the object the client is trying to use as a different interface. One common use case for the adapter design pattern is when you have to integrate legacy code into your existing code base. Since you usually don't have access to the source code for this legacy code, you need to refactor your own code to match the existing APIs, right? Well, not so fast. With the adapter design pattern, you can define the class of the adapter that wraps the incompatible interface code and exposes an interface that matches your existing design. The adapter class acts as a bridge between the incompatible interfaces, allowing them to interact seamlessly with each other. Here's a UML diagram that illustrates how the adaptor design pattern works. We have our own component class which is incompatible with the legacy code's API, represented by the LegacyComponent class. But with the adaptor design pattern, we can easily integrate the two APIs using an adaptor class called LegacyAdapter. LegacyAdapter inherits from component, thus it exposes the interface known to our code base. At the same time, it wraps the LegacyComponent's instance and forwards the cause to this instance, called the adoptee.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=98)** Instead of using LegacyComponent instances in our code, we'll now use LegacyAdapter objects. As a consequence, there'll be no need to refactor our code to match LegacyComponent's API. Overall, the adapter design pattern provides a simple and elegant solution for integrating incompatible APIs into our existing design. Now, are there any pitfalls to be aware of when using the adaptor design pattern? One I can think of is that we introduce a new intermediary class into our design. Although this is a better solution than manually refactoring our code to match the legacy API, there are still a risk of introducing additional complexity and unexpected behavior. And since the adapter class is essentially a wrapper around another class, it can make your code harder to understand and maintain. Additionally, the adapter pattern can result in performance overhead since it involves creating an extra layer of abstraction. So if you have access to the legacy code and there are no design constraints or other factors preventing you from refactoring the legacy code to match your design, it is preferable to adapt the incompatible interface instead of introducing an intermediary adapter class. But if you decide to use the adapter design pattern, just keep in mind that it's essential to carefully design and thoroughly test your adapter class. By doing this, you'll prevent any unexpected issues from arising and ensure that your code base stays clean.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22182030?u=76281980&t=194)** Overall, the adapter is a simple, yet powerful design pattern, that can help you seamlessly integrate incompatible interfaces into your existing design. And the benefits of being able to use a familiar interface, outweigh the potential drawbacks of using the adaptor pattern. Next, I'll walk you through an actual code example to show you the problem we're trying to solve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Design](../../Skills/Software%20Development/Software%20Design.md) (1)
> **Env Vars:** api (3), uml (1)
> **Definitions:** is a  (3)
> **Warnings:** be aware (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [When should you use the Adapter pattern?](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Let me show you a scenario where the adapter design pattern may come in handy. Say that you're working on a project that contains an abstract class called component. It exposes a pure virtual method called run that must be implemented by sub-classes. Concrete component A and concrete component B inherit from component and implement the run method. The main function creates an array of component pointers initialized with one smart pointer of concrete component A and one of concrete component B. Afterward, the code iterates over each element in the array and cause its run method. This is possible because of polymorphism. Both concrete component A and concrete component B inherit from component, exposing the same run method. The run method is resolved at runtime depending on the actual type of each pointer, so this code will execute just fine. And here in the console, we can see the result executing concrete component A and executing concrete component B run. So far so good, but let's now consider a scenario in which we have to integrate a legacy class called legacy component into our design. This class offers functionality similar to component, yet, it doesn't share the same interface,
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/when-should-you-use-the-adapter-pattern?u=76281980&t=96)** specifically legacy component exposes a go method instead of run. As a result, we can't use it in the same way we used component and its subclasses before. In other words, we can't just store legacy component in an array of component pointers. If I try to add it here by calling make unique and the type should be a legacy component, I will trigger a compiler error. Let's try it out. Indeed, here's the compiler error. Fortunately, we can use the adapter design pattern to solve this problem. In the following videos, I'll show you two approaches to designing an adapter class that allows us to integrate legacy component into our design without modifying it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Implementing an object adapter](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=0)** - [Instructor] In this video, I'll show you how to integrate the legacy component class in our design using an object adapter. An object adapter works by wrapping the adaptee, in this case, the legacy component in an adapter class that implements the target interface, our component abstract class. Thus the adapter exposes the same interface as the component class, making it compatible with our design. However, internally, the adapter delegates the call to its adaptee, calling the legacy component objects go method. Let's see how this works in practice. First, I'll create a new class called legacy adapter that inherits from component, class LegacyAdapter
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=55)** and it should inherit publicly from component.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=63)** This adapter class needs to wrap the legacy component object, so I'll add a data member of type legacy component. I'll make it a private field, as this adapter object will be the only one to access it. We don't want to expose it to our clients and I'll make it a smart pointer. Unique pointer of type, legacy component. And I call it m_adaptee. Next I initialize this data member in the constructor's initializer list. So let's define the constructor in the public section, LegacyAdapter.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=119)** And here comes the initializer list where I'll initialize the m_adaptee data member. I'll call make_unique to create our smart pointer and the type should be LegacyComponent. And I provide an empty implementation for our legacy adapter constructor. The only thing left to do is to implement the component classes run method, virtual void run. And let's specify that we do override the method from the base class first. And here I'll print a diagnostic message saying that we are executing legacy adapters run method which in turn forwards the call to legacy component go. See out LegacyAdapter run which calls LegacyComponents go method.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=200)** And finally, let's call m_adaptee->go. Let's see if our code compiles. So far so good. And that's it. Now I can add a legacy adapter object to the array of components. I'll delete this line. Instead, I'll call make_unique. And the type should be the adapter, LegacyAdapter.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-an-object-adapter?u=76281980&t=235)** And since legacy adapter is derived from component this code should work without conflicts or compiler errors. Note that in the for loop I call run on each element in the array. Even the legacy adapter object. The output shows that the call to legacy adapter run was correctly delegated to legacy component go. The best part is that we didn't have to modify the legacy component class. Yet I can use it in my code without any compatibility issues. In the following video, I show you how to design a class adapter, another way to integrate incompatible types into our design.

> [!info]- Semantic Content
>
> **Code Identifiers:** m_adaptee (3), make_unique (2)
> **CLI Commands:** make (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Implementing a class adapter](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=0)** - [Instructor] Another way to design an adapter is by using a class adapter. This approach works by inheriting from both the target interface, in this case, the Component abstract class, and the adaptee, the LegacyComponent class. The resulting adapter class will have the same interface as the target, but it will contain all the functionality of its adaptee. Let's see how this works in code. First, I'll define the class adapter. I'll name it LegacyClassAdapter. I'll make it inherit from both Component and LegacyComponent. I'll inherit publicly from Component as I want the adapter to expose its interface. Public, Component. But I'll inherit privately from LegacyComponent as I don't want to expose its internals. Now I can implement the Component's run method inside the adapter class. It should be public, virtual, void, run. And let's specify that we override it. It's an overridden method. And first, I'll output a diagnostic message so that we'll know that LegacyClassAdapter's run method is executing. LegacyClassAdapter, run.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=98)** Which in turn calls the LegacyComponent's go method. Calling LegacyComponent, go. And finally, let's forward the request to the adaptee's go method. I can simply invoke it because we inherited from LegacyComponent. Now I can add the adapter to the array of components. In our main method. make_unique. The type should be LegacyClassAdapter, and the code should work without issues. When I run it, all the components execute their respective methods, including the adaptee. Whether you design a class adapter or an object adapter, the purpose is the same: To integrate incompatible classes without changing their code. The object adapter uses composition to delegate requests to the adaptee, while the class adapter relies on multiple inheritance to adapt one interface to another. I hope this video was helpful in understanding how to design an adapter using C++. The following challenge will help you practice
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-class-adapter?u=76281980&t=192)** the knowledge you just gained. See you in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** make_unique (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Refactor using the Adapter pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Here's a challenge for you. Design an adapter that integrates a third party class into your design. The project consists of three classes. The [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) abstract class that provides the common interface that all cloud storage services must expose, it has two methods, upload contents, which uploads the specified content to cloud storage and get free space, which returns the amount of free space left on cloud storage. There are two classes that implement this interface, cloud drive and fast share. Your challenge is to design an adapter that integrates a new cloud storage service. Let's call it virtual drive. This class exposes a similar yet, incompatible interface. It has two methods, upload data and used space and a static constant that holds the total storage space. Note that used space returns the used cloud storage space and not the free available space. Now, we can't just add the virtual drive class as it is to our design since its interface doesn't match that of our existing cloud drive and fast share classes. But you already know how to solve this, right? By creating an adaptor that converts the incompatible interface of virtual drive to the interface of cloud storage. I'll leave it up to you to decide
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-refactor-using-the-adapter-pattern?u=76281980&t=92)** which adaptor type to use, an object adaptor or a class adaptor. Give yourself 5 or 10 minutes to implement the adaptor then compare your approach with my solution. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (7)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Refactor using the Adapter pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=0)** - [Instructor] Welcome back. How did it go? Did you figure out how to design an adapter for the VirtualDrive class? Let's take a look at my solution. I chose to design a class adapter as it requires less code. I named the adapter class VirtualDriveAdapter. It inherits publicly from [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) to provide the expected interface, and privately from the VirtualDrive class to delegate requests to it. uploadContents forwards the request to uploadData. However, I had to implement a helper method for generating the unique identifier, the extra argument required by the uploadData method. Here's our private helper method, generateUID. So uploadContents forwards the request to uploadData by passing in the content and this unique identifier. The getFreeSpace method should return the free available space. But as you know, the VirtualDrive class exposes a method that returns the usedSpace. Thus, I subtracted the usedSpace from the total available space and returned the result. We can now use this adapter as a drop in replacement for the VirtualDrive class. So I added an instance of the VirtualDriveAdapter to our CloudServices array.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-refactor-using-the-adapter-pattern?u=76281980&t=95)** This array of smart pointers of CloudStorage type. The for loop should print the same output as before except now we're also seeing the output from the adapter and the VirtualDrive class. Indeed, we can see it here. This adapter neatly solved the problem of integrating the incompatible class into our design. Next, we'll delve into the bridge design pattern. Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Code Identifiers:** uploaddata (3), uploadcontents (2), usedspace (2), generateuid (1), getfreespace (1)
> **Speakers:** - [instructor] (1)


### 2. The Bridge

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=0)** - [Instructor] Bridge is a structural design pattern that can solve design problems that involve complex class hierarchies also known as the inheritance explosion problem. You will know you have this problem if the number of derived classes keeps growing as the design evolves. The bridge pattern solves the exploding class hierarchy problem by separating common and specific parts of a design into separate hierarchies. Here's an example of an inheritance explosion. In this design, each user interface element can have a different style. The design requires four classes for each element: a concrete implementation of the element and three variations in style. The design is already becoming very complex, and it will only get worse as more elements and styles are added. The bridge design pattern solves this problem by separating the class hierarchy into two hierarchies, one for the element implementations and one for the style variations. Element holds a reference to style, making it possible to [compose](../../Glossary/Framework/Jetpack%20Compose.md) the design from any combination of element and style. This reference acts as a bridge between the two hierarchies. By favoring composition over inheritance, the design is much simpler, more flexible, and open to future changes. To add a new style, say bold style, we just need to create a new style class and we're good to go.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181026?u=76281980&t=94)** In summary, the bridge design pattern attempts to solve the inheritance explosion problem by switching from inheritance to object composition. In the following videos, we're going to refactor a C++ design using the bridge design pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Exploding class hierarchies](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=0)** - I've created a C++ project to illustrate the design problem we're trying to solve with the bridge pattern. The design uses a class hierarchy to represent the different ways we can share text. IText Share is an abstract class that declares a pure virtual method, share text. Email share and SMS share are complete implementations of IText Share used to share text messages. For the sake of this demo the share text methods simply print the text passed as an argument to the console. A new feature request is to add an encryption mechanism for the messages before they are shared. A naive approach would be to add two subclasses, one for each type of text sharing. Email share encrypted and SMS share encrypted.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/exploding-class-hierarchies?u=76281980&t=57)** The subclasses use a simple X or algorithm to obfuscate the messages and call their super classes share text methods to complete the task. This design is fine if we only have two types of messages but what happens when we need to support new types of messages, like messages that expire after a certain amount of time? We need to create two more subclasses, email share auto expiring, and SMS share auto expiring. The design will start becoming more and more complex until it becomes unmanageable. In the following video, we'll see how to use the bridge design pattern to solve this problem.

> [!info]- Semantic Content
>
> **Env Vars:** sms (3)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)

#### [The Bridge pattern in action](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=0)** - [Instructor] As we've seen, this design has a severe problem. Adding new features requires us to create new classes for each variation. The bridge design pattern helps us solve this problem. We'll start by separating the design into two distinct hierarchies. One for the features that are common across all implementation classes, and one for the features specific to each variation. So what's common across all these classes? The code logic of sharing text messages. And what's different? The way the messages are prepared for sharing and handled. We have plain messages, encrypted and expiring messages. Thus, we can introduce two abstractions. ITextHandler for message preparation and handling, and ITextSharer for the core message sharing functionality. I start by defining the ITextHandler abstract class.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=69)** It is a single pure virtual method prepare message, let's make it public, that takes a plain text string as an argument and returns its modified version. So it returns a string and it takes an argument reference to a string. Let's call it text, and it's pure virtual. I declare it as const because I don't want to modify any class members. I'll also add the default destructor. Next, I'll create the ITextSharer abstract class.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=124)** Let's define the virtual destructor first. This abstraction should provide an interface to share text messages. So I'll add a public share text method. This method will use an object of type ITextHandler to process the message before sharing it. For that, I'll add a private data member reference to an ITextHandler. The bridge is a design pattern that uses has a relationships. That is composition to replace inheritance. Should be an ITextHandler and reference. Let's call it m_textHandler. Now I can use m_textHandler to call the prepare message method from within share text and get the modified version of the text. And I call its prepare message method by passing in the input argument. The actual message sharing will be done in the derived classes. I declare it as protected because I do not want to expose it into the public interface of the class.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=211)** Okay, let's format our document. Now it looks better. Okay, and now I can call it in share text, passing prepared text as an argument. The only thing left is to initialize m_textHandler into constructor of ITextSharer. So I'll go ahead and define an explicit constructor that takes a reference to an ITextHandler as an argument. The data member gets initialized in the constructor's initializer list. Based on these abstractions, we can now implement derived classes that share messages using different services and handlers. For instance, to share unmodified plain text messages via email, we'll need two concrete classes. An ITextHandler class that implements the prepare message method to do nothing but return the unchanged text, and an ITextSharer class that implements the share prepared text method to send an email. Similarly, if we want to share encrypted messages through email, we'll need to use a different ITextHandler class that implements the prepare message method to encrypt the text. And this is our encrypted text handler. The class responsible
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=308)** for sharing the encrypted text email share encrypted is almost identical to email share, except that it takes an encrypted text handler as a constructor argument. Okay, now let's test our solution.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-bridge-pattern-in-action?u=76281980&t=329)** It works as expected. We can add as many variations as we need by defining new ITextSharer and ITextHandler classes. This design is much more flexible and easier to maintain than one based on inheritance. All right, ready for a coding challenge?

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Enhancing a design using the Bridge pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=0)** - [Instructor] And here's the challenge for this module. Implement a program that creates different types of vehicles, like cars, trucks, bikes, with different types of engines, such as gas, electric, hybrid. Without the bridge pattern, the program would require a class hierarchy for each type of vehicle and engine, such as car/gas, car/electric, truck/gas, truck/electric, and so on. Instead of this design, you can use the bridge pattern to design an interface-based solution that supports various combinations of vehicles and engines. You will need an abstract interface for each of the two main concepts, IVehicle and IEngine. IEngine should define a pure virtual start method, whereas IVehicle should expose a public drive method and an abstract drive vehicle method. The drive method will call the start method of a concrete IEngine instance, followed by a call to the drive vehicle method. Next, you'll create several concrete IVehicle and IEngine classes that implement the start and drive vehicle methods respectively. Your design should follow the bridge pattern so you can create any combination of vehicles and engines. Now pause the video to give this design challenge a try. Once you're done, resume the video for my solution. Good luck, and have fun.

> [!info]- Semantic Content
>
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Enhancing a design using the Bridge pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=5)** - [Instructor] Welcome back. How did you design your solution? Here's how I approached this challenge. First, I created two abstract interfaces, IEngine and IVehicle. IEngine defines a pure, virtual start method. This method will be implemented by all concrete engine classes. IVehicle defines the public drive method and the pure virtual drive vehicle method. Drive calls the start method of a concrete IEngine instance, represented by the private m_engine member variable, which is initialized in the constructor. Then, it calls drive vehicle, which is also a pure virtual method, to be implemented by each concrete vehicle class. The IEngine and IVehicle classes are now ready to be extended by concrete implementations. For IEngine, I created three classes, GasEngine, ElectricEngine, and HybridEngine. Their corresponding start method implementations will print out some text to the console, indicating that the engine has been started. For IVehicle, I created three classes, Car, Truck, and Bike. Each of them implements the drive vehicle method, printing out specific diagnostic messages.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=104)** And finally, the main method is used to create an instance of each concrete engine class. Then for each engine, an instance of car, truck, and bike is created, to demonstrate how the design pattern works. The for loop iterates over the array of vehicles and calls the drive method for each vehicle. Running this code produces the following output.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-enhancing-a-design-using-the-bridge-pattern?u=76281980&t=141)** Now, did you come up with a similar solution? Okay, that's it for the bridge. In the upcoming videos, we'll talk about the composite design pattern.

> [!info]- Semantic Content
>
> **Code Identifiers:** m_engine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### 3. The Composite

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=0)** - [Instructor] The composite design pattern is a structural design pattern that allows us to [compose](../../Glossary/Framework/Jetpack%20Compose.md) objects into tree-like structures to represent whole-part hierarchies. The pattern provides a unified interface for both individual objects and compositions of objects which makes it easier to treat them uniformly. The composite pattern is useful when we have a complex object hierarchy that consists of multiple levels of objects. The pattern defines two types of objects, composite and leaf objects. The composite objects are containers that can contain other composite and leaf objects. The leaf objects are the basic building blocks that cannot contain other objects. A good example of the composite design pattern is the filesystem. The filesystem is composed of folders and files. The folder represents a composite object that can contain other folders, the composites and files which are the leaf objects. One of the primary benefits of the composite pattern is that it makes it easier to treat composite and leaf objects uniformly. This means that we can iterate over a composite object and perform operations on all its child objects, regardless of whether they are composite or leaf objects. This is particularly useful when we want to apply the same operations to all objects in a hierarchy. Say that we want to find out how much space a folder uses on the disc. One way to do this is to iterate over all the files
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=96)** within that folder and add up the sizes of each file. If the folder contains other folders, we need to iterate over them and add up the sizes of all their files as well. And if those subfolders have other subfolders, we need to iterate over those as well. During this process, we need to know which objects are folders and which are files. Thus, our code has to check for the object type at each level of the hierarchy. The composite design pattern simplifies this process by allowing us to treat both composite and leaf objects uniformly. We start by defining a common interface for the folder and file classes. This interface should define operations that can be applied to both objects such as size. We then implement the size operation for each type. In the case of file objects, size returns the size of the file. For folder objects size iterates over all its child objects, which can be subfolders or files, calls their size methods, and sums up the results. The process continues until all the subfolders and their files have been processed. Using the composite design pattern, we can now easily calculate the size of a folder and all its subfolders in a uniform way. Since we don't need type checks to determine which objects are folders and which ones are files,
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22180031?u=76281980&t=190)** our code becomes simpler and more efficient. In the following videos, we'll explore the composite pattern in detail and see how to implement it using C++.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Implementing a hierarchical structure](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=0)** - [Instructor] Consider a company that sells different items. Each item is modeled as a separate class, book, toy, and so on. These classes expose a method that allows us to query their price, double price for book, and get price for toy. Each item can be sold individually or in a box. A box may contain multiple books, toys, or even other boxes. The box class model is a container of items. It provides an interface to add books, toys, and other boxes. These items get stored in vectors of dedicated pointers. The class also exposes a method that returns the total price of all items in the box. The total price method goes through all the items in the box and returns their sum. If the item is another box, we call its own total price method recursively until all items in the hierarchy have been visited. In the main function, I create a few items and place them in the box labeled small box. Then I instantiate another box, big box, and add the previously created small box and a toy to it. After the setup, I call total price on the top level box. Running this code will get the following output.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=97)** Although this design works, it has a fundamental problem. If we need a new type of item, we have to modify the box class by adding a new data member to store items of the new type.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/implementing-a-hierarchical-structure?u=76281980&t=115)** We'd also need to process the new type in the total price method. This design tightens the coupling between the box and its items, making it harder to extend. This code can be substantially improved by using the composite pattern. See you in the next video for a design makeover.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Redesigning with the Composite pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=0)** - [Instructor] The composite pattern is a design pattern used to represent a part-whole hierarchy that deals with objects composed of other objects. It allows us to [Design Systems](../../Skills/Web%20Development/Design%20Systems.md) that can contain a mixture of composite and leaf objects, which can be manipulated in a uniform manner. This seems to be exactly what we need. In our project, Box is the composite object, that can contain books and toys, which are leaf objects, and also other boxes. To redesign the system using the composite pattern, we'll have to define a common interface for both composite and leaf objects. This interface should provide the methods common to all objects, the price method in our case. I go ahead and create a new abstract class called Product. It has a public pure virtual method price. And I'll also add a default destructure. Next, I refactor the Book class to inherit from Product.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=76)** Its current price method matches exactly the interface of the Product class. So no changes are needed here. Except I'll add the override keyword. The Toy class comes next. I'll also make it inherit from Product. I'll make the required changes to its price method. So instead of getPrice, it should be called price. And we're done. The Box class will also inherit from Product.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=125)** Let's adjust the name of the method responsible for calculating the total price of the box. Now it's called price, and let's add the override keyword. As mentioned earlier, Box represents our composite object. Therefore, it should contain a collection of product objects. I'll add a new private data member, the m_Products vector for that purpose. We won't need the type specific storage members anymore, so I go ahead and delete them. We can also remove the addBox, addBook, and addToy methods. So let's get rid of them. Instead, I'll create an addProduct method that takes a product reference as its argument. void addProduct.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=192)** And the argument is called product. And I'll add it to the m_Products vector. m_Products.push_back. This method will be used to add books, toys, other boxes, and any other type of product we may design in the future. Finally, I need to refactor the price method. These for loops have become obsolete, as we don't have type specific storage members anymore. Instead, I'll iterate through the m_Products vector and sum up the prices of each product it contains.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=244)** We almost finished refactoring our design using the composite design pattern. I'll have to modify the main function though. Instead of addBook, we need to call addProduct. Same here.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/redesigning-with-the-composite-pattern?u=76281980&t=261)** And we'll call price. So we just finished refactoring our design using the composite design pattern. We have a product, abstract class, and three concrete classes. Book, toy, and box. The box class turned into a composite, a container of product objects, and its price method can calculate the total price of the items it contains, and it does so without any type specific code. The code is also shorter and cleaner. These are huge improvements over the original design. However, the biggest benefit of the composite pattern is that it allows us to add new product types without modifying the existing code. Now our design adheres to the open-closed principle, which states that classes should be open for extension but closed for modification.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Systems](../../Skills/Web%20Development/Design%20Systems.md) (1)
> **Code Identifiers:** addproduct (3), addbook (2), getprice (1), addbox (1), addtoy (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Drawing shapes](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=0)** (bouncy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=5)** - [Instructor] Here's the C++ project that allows us to draw shapes. The design is based on classes implementing the abstract Shape class which is a single draw method. The concrete classes are Circle, Rectangle, and Triangle. They contain the properties that describe their shapes such as Radius for Circle, Width and Height for Rectangle, and Side lengths for Triangle. These classes also implement the draw method responsible for drawing the shapes on the screen. Now there's just a dummy cout statement, but implementing the actual drawing code is out of scope for this demo. We can draw individual shapes by creating objects of the respective classes and calling their draw methods as demonstrated in the main function. At this point, our design works flawlessly. But what if you want to draw a complex shape such as a house? The design lacks the capability of representing and manipulating complex structures. Your task is to improve this project using the composite design pattern to make it possible to create aggregate shapes. Start by implementing a CompositeShape class that allows for creating complex shapes made up of other shapes. Your solution should meet the following requirements: the CompositeShape class implements the shape interface;
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-drawing-shapes?u=76281980&t=103)** the CompositeShape must contain a collection of shape objects; the CompositeShape class should expose methods for adding and removing shape objects; and finally, the main function should demonstrate the creation and drawing of composite shapes. Here's an example of how the refactor code might be used. This code creates a Circle, Rectangle, and Triangle object and then creates a CompositeShape object and adds these primitive shapes to it. The draw method of the CompositeShape object is then called to draw on shapes in the collection. The Rectangle object is then removed from the CompositeShape object and the draw method is called again to show that the removed shape is no longer drawn. Pause the video and give it a try. Once you're done, compare your solution with the design shown in the following video. Good luck.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bouncy upbeat music) (1)

#### [Solution: Drawing shapes](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=0)** - [Instructor] Hello, and welcome back. In this video, I'll show you the design I have come up with for drawing aggregate shapes using the composite design pattern. So we've got our initial code base with the abstract shape class and the concrete shape classes circle, rectangle, and triangle. To make it possible to create aggregate shapes, I added a new class, composite shape. The composite shape class implements the shape interface. Let's have a closer look at the design of this class. The private data member of the class is a vector of shape objects. The add shape and remove shape methods allow us to add or remove individual shapes from the composite shape. And finally, the draw method iterates through this vector and draws each individual shape. The main function shows how to draw a composite shape. First, we create some primitive shapes: a circle, a rectangle, and a triangle. Next, we create an instance of the composite shape class, add the primitive shapes to it using the add shape method, and call the composite shapes draw method to draw all shapes in the collection. We then remove one of the shapes from the composite shape
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-drawing-shapes?u=76281980&t=93)** and call it draw method again to show that the removed shape is no longer drawn. This refactored code allows for creating composite shapes made up of other shapes demonstrating the benefits of using the composite design pattern. The composite design pattern is a great tool to have in your design arsenal. Next, we'll look into the decorator design pattern to learn how it can be used to add functionality to objects at drawing time. See you in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. The Decorator

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=0)** - [Instructor] The decorator is a structural design pattern that allows adding new behavior to an object dynamically without entering its structure. The pattern involves wrapping an object inside a decorator object, which adds the required behavior. This design pattern is best suited for projects where we want to extend the functionality of an object without sub classing. The UML diagram of the decorator looks similar to the composite design pattern. We have a common base class or interface called component. This interface is implemented by concrete component classes. We also have a decorator class which implements the component interface and maintains a single reference to the component object. That's the difference between the composite design pattern and the decorator design pattern. Instead of having a collection of components, the decorator only has a single reference to the component. That's because the decorator's purpose is to extend the functionality of a single object not a tree of objects. Finally, we have decorator subclasses that enhance the component objects responsibilities by providing additional state or behavior. It's important to note that the decorator can add new methods or data members to an object without changing its interface. Also, the decorator hides the original component object so we can't access the wrapped object directly. Now let's also mention the potential pitfalls
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22181031?u=76281980&t=95)** of this design pattern. First, it can lead to a large number of small classes if many decorators are used which can make the code harder to read and maintain. Second, the design can get out of control if multiple levels of decorators are used. Despite these potential challenges the decorator design pattern is useful for enhancing an object without entering its structure. Now that we have an overview of the decorator pattern, let's look at a practical example to see how we can use this design pattern in practice.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** uml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Computer shop demo using inheritance](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=0)** - [Instructor] Suppose we have a computer shop that sells different types of computers, such as desktops and laptops. We could represent these computers as classes that inherit from a base computer class. For example, the Computer abstract class could define methods for displaying the computer's price and description. The child classes Desktop and Laptop would then override these methods and provide their own implementation. We can then use these classes to create different types of computers and print out their descriptions and prices. However, there are some design problems with this approach. Suppose we want to add additional functionalities to our computers, such as upgrading the memory or adding a graphics card. We could create new classes for each combination of computer and functionality, such as desktop with graphics card and laptop with memory upgrade. This approach can quickly become unmanageable if we have different types of upgrades. Moreover, it is not a very flexible design. Since we need to create a new class for every combination of computer and upgrade. This is where the decorator design pattern comes in. Instead of creating many different classes for each combination of computer and upgrade, we can use the decorators to assign new behaviors or functionalities to the computers in a more flexible and dynamic way.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-inheritance?u=76281980&t=95)** For example, we could create decorator classes for each upgrade, such as memory upgrade decorator and graphics upgrade decorator that wrap around the computer object and add new functionalities. Let's take a look at how this design pattern works in practice.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (2)
> **Speakers:** - [instructor] (1)

#### [Computer shop demo using the Decorator design pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=0)** - [Instructor] We need to define a class hierarchy of decorators that wrap our computer objects to dynamically add upgrades to our computers. Each decorator will add new functionality to the wrapped object. As a result, we can create combinations of computers and upgrades without having to create many different computer subclasses. So let's remove these classes first. We won't need them anymore. Let's start by defining a computer decorator class.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=42)** It should inherit from computer and it needs a reference to the wrapped computer object. So I'll go ahead and create a protected member of type computer pointer. Let's call it m_computer. Next, I'll define the constructor. Let's make it explicit and it takes a single computer pointer as a parameter and assigns it to the wrapped object in its initializer list.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=94)** The class also needs to override the description and price methods of the computer class.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=107)** I simply delegate the corresponding calls to the wrapped object, return m_Computer
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=118)** and let's call it description method and I implement the price method similarly, double price return m_Computer
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=142)** and I call it price method. Next, I'll create decorator classes for each upgrade. Let's start with the memory upgrade. The memory upgrade class extends the computer decorator and overrides the description and price methods. The description method calls the base classes description method first, and adds the name of the upgrade. So it says ComputerDecorator::description, the base classes description method plus and it depends the string with memory upgrade. Similarly, the price method returns the sum of the base objects price, and the memory upgrade cost. This is an overly simplified example, but you get the idea. The same approach can be used for the graphics upgrade decorator. The only difference is that we must adjust the price and description methods accordingly. Now that we have the decorator classes in place, creating a computer with memory or graphics upgrades is easy.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/computer-shop-demo-using-the-decorator-design-pattern?u=76281980&t=224)** First, I create a desktop and a laptop computer. Next, I print out the description and price of each computer. Then I create a memory upgraded desktop and a graphics upgraded laptop by initializing a memory upgrade decorator and a graphics upgrade decorator object. The memory upgrade decorator wraps the desktop object and the graphics upgrade decorator gets initialized with the laptop object. Finally, I print out the description and price of each upgrade. The output of this program tells us that the design works as expected. The decorator design pattern is a powerful way to extend objects with additional functionality without relying on inheritance or changing their interface. Next, it's your turn to design a similar solution.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** m_computer (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Pizza toppings](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=0)** - [Instructor] Now that we've seen how the decorator pattern can be used to add new functionalities to objects dynamically, how about solving a design problem on your own? The challenge is to design a pizza ordering system that allows customers to order pizzas with different toppings. The design should allow customers to choose any combination of toppings and calculate the final price at runtime. Here's the starter project for this challenge. We have a pizza abstract class and three concrete classes for margherita pizza, Hawaiian pizza, and pepperoni pizza. Your task is to come up with a decorator based solution that allows customers to add one or more toppings to the pizzas and calculate the final price at runtime. Here are some hints to get you started. You'll need a topping decorator class that implements and reps the pizza class to add additional toppings. You will also need classes for each type of topping that extends the topping decorator class, such as mushroom decorator, tomato decorator, and extra cheese decorator. The final design should allow customers to order a pizza with any combination of toppings and calculate the total price accordingly. For example, a customer could order a margherita pizza
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-pizza-toppings?u=76281980&t=94)** with mushrooms and extra cheese, and the design should be able to calculate the total cost of this order. Okay, hit pause and implement your solution now. When you are done, come back and review my solution. Have fun.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** starter project (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Pizza toppings](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=0)** - [Narrator] Welcome back. How did you do? Now let's take a look at the solution I have come up with for this design challenge. As discussed in the previous video, we need to design a decorator based solution that allows customers to order pizzas with additional toppings and calculate the final price accordingly. First, I created a base topping decorator class that wraps the pizza class. The topping decorator class takes an appointer to the pizza object and provides implementations of the description and price methods. Note that I use unique pointers instead of raw pointers. The constructor takes ownership of the pointer using the move function. The description and the price methods delegate the call to the wrapped pizza object. The actual decoration of the pizza is done by the concrete topping decorator classes that extend topping decorator. The following is the design for the mushroom decorator class. The mushroom decorator's constructor passes the pointer to the pizza object to its base class topping decorator. Again, we need to use the move function to transfer the ownership of the unique pointer. The description and price methods call the topping decorator objects methods while appending additional information to the description and including an additional cost
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-pizza-toppings?u=76281980&t=94)** for mushrooms. A similar design can be implemented for other toppings like extra cheese decorator and tomato decorator. The solution allows customers to order pizzas with any combination of toppings, and the design should be able to calculate the final cost accordingly. For example, a customer may order a margherita pizza with mushrooms and extra cheese. The corresponding code would create a margherita pizza object, wrap it in a mushroom decorator and then further wrap the result into extra cheese decorator. How about a pepperoni pizza with mushrooms, tomatoes and extra cheese? This design should be able to handle this combination as well, and it works exactly as we'd expect it to. Decorator is a powerful pattern that allows adding new functionalities to objects dynamically without altering their structure. It is particularly useful when we have a large number of combinations of objects and functionalities and we want to avoid creating new classes for each combination.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. The Façade

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=0)** - [Instructor] Facade is a structural design pattern that provides a simplified interface to a complex subsystem. In other words, it hides the complexity of the underlying components behind a higher level, easier to use API. As a consequence, clients don't need to understand the details of the subsystem to leverage its functionality. Instead, they access the subsystem through a single entry point provided by the Facade, which in turn forwards the request to the appropriate components. The Facade pattern can help simplify specific tasks while decoupling the consumer site from the underlying frameworks or types. It's also helpful to narrow down the functionality of a library so clients are exposed only to what is necessary for their tasks. The perfect candidates for the Facade pattern are libraries, frameworks, or any subsystems that are still evolving and may require changes in the future. To protect our clients from these changes, we can design a Facade that wraps the entire subsystem and provides a stable interface. Thus, changes to the underlying subsystem won't affect clients as long as the public interface of the Facade remains intact. The Facade design pattern includes two main components, the Facade class, that exposes a simplified interface to the underlying subsystems, and the subsystem classes,
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview?u=76281980&t=93)** that provide the actual functionality. Here's a practical example to demonstrate the Facade pattern better. Consider a smartphone. A smartphone has many parts such as a processor, battery, memory, cameras, and more. As users, we don't need to understand how each part works, instead, we can use a single interface, the touchscreen. The touchscreen is a good analogy for the Facade. It provides a simple unified interface to access the features of our smartphone. The Facade design pattern is straightforward to implement as you will soon see. There are a couple of pitfalls, though. The most common design issue is that the Facade may become too big and integrate too many features, breaking the single-responsibility principle. To avoid this, design the Facade with a specific purpose and ensure it is well scoped. Exposing the underlying types is another potential problem when implementing a Facade. By doing so, clients may bypass the Facade, rendering it useless. To prevent this, design the Facade is an opaque black box and don't expose any underlying types.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (1), is an  (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Complex interface demo](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=0)** - [Instructor] Now, let's look at a demo project that will help us understand the need for the facade pattern. Let's say we are building a hotel reservation system. The system needs to coordinate the work of several existing components, such as a database library, a payment gateway, and a messaging service. Here's the source code of our demo project. We can see that each component or subsystem is implemented as a separate class. We have a database class to store reservations, a payment gateway to process payments, and a messaging service class to notify customers about their reservations. To keep the demo straightforward, these classes do not implement the actual functionality. Instead, they just log a message to the console. When a customer books a reservation, the system needs to store the details in the database, process their payment with the payment gateway, and notify them with the messaging service, as demonstrated in the main function. Thus, we have to instantiate each class and call their corresponding methods in a specific order. This requires us to add a lot of code to achieve the desired result. Our code is tightly coupled with these components, another design issue. Plus, we need to understand the interface of each class, as well as their interactions. Although this is a simplified example, it highlights the problems we can face
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/complex-interface-demo?u=76281980&t=93)** when working with complex systems. Fortunately, we can simplify the use of these components by applying the facade design pattern.

> [!info]- Semantic Content
>
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Applying the Facade design pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=0)** - [Instructor] Let's refactor our code and apply the facade design pattern. First, we'll create a facade class. Let's call it ReservationsystemFacade. This class will encapsulate the functionality of our existing component classes and provide a single simplified interface for making reservations. So we'll need to add the members of each component class as private data members. First, the database. Let's call this data member m_Database. We'll also need a PaymentGateway. And finally, a MessagingService data member. Next, I create a constructor and initialize these data members as required. The constructor should be public. And I'll initialize these data members in the Initializer list, m_Database first followed by m_PaymentGateway and finally, the MessagingService data member. Next, I'll define the simplified interface, a method for making reservations.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=95)** Let's call it makeReservation. Now what are its arguments? Let's revisit the old sequence of calls to see what needs to be done here. So first, we'll store the reservation info in the database. The second step is to process payment with the payment gateway. And the third step is to notify the customer with the messaging service. So I need to pass in the reservation and payment information as parameters. The message will be generated inside the make reservation method. Both are strings for the simple demo. So that's the reservationInfo, and it should be a reference. And the second argument also string, is the paymentInfo.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=161)** And now I'll call the corresponding methods of my wrapped components to implement the desired functionality. First, I store the reservation using the database.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=179)** Then I'll use my payment gateway data member to process the payment and finally send the confirmation message. How about, Reservation confirmed. And the final step is to use the reservation system facade class to simplify our code. Instead of directly interacting with the underlying classes, clients can now use the simplified interface provided by the reservation system facade class. So I'll go ahead and remove the old code and use the newly created facade class instead. I'll create an instance of the reservation system facade class. Okay, let's fix this typo. It should become a case slate. Also here. And finally the constructor. Okay, so let's call this instance reservationSystem.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/applying-the-facade-design-pattern?u=76281980&t=254)** I am going to borrow these strings from the old code and the payment info, too. And now let's call the reservation system facades Instance, makeReservation method. I need to pass in the reservation info and the payment info, perfect. With just a little extra effort, we've created a facade that will save us time, each time we need to make reservation. Clients don't need to interact with multiple classes and learn their methods and dependencies. Instead, they can make their reservations quickly and easily through a single interface and method call.

> [!info]- Semantic Content
>
> **Code Identifiers:** makereservation (2), reservationinfo (1), paymentinfo (1), reservationsystem (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### [Challenge: Hide complexity with a facade](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=5)** - [Instructor] Now it's your turn. Here's an application that retrieves the current temperature, humidity, and weather description for a given location. The project relies on three different weather APIs to request the data. Each web service exposes a different method and returns slightly different results. World Weather only returns the temperature and wind speed. Free Weather returns temperature and a brief textual description. And Realtime Weather Service returns humidity, temperature, and verbose textual weather conditions. The application combines the results from these APIs to display the local temperature, humidity, and a short textual description of the weather. However, merging the results from the different APIs requires a lot of manual coding, due to the differences in their interfaces. The challenge is to simplify the application's design and provide a simpler interface to the user, by using the facade pattern. Your task is to create a facade class that exposes a single method, currentWeather, that takes a single argument, the location. The class should wrap all three web services and call their methods to retrieve weather information. The current weather method will combine the results into a unified format, and return a tuple that includes the local temperature, humidity,
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-hide-complexity-with-a-facade?u=76281980&t=99)** and a short textual description of the weather. Finally, your solution should demonstrate the use of the facade. Okay, pause the video and give it a try. I'll wait.

> [!info]- Semantic Content
>
> **Code Identifiers:** currentweather (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)

#### [Solution: Hide complexity with a facade](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-hide-complexity-with-a-facade?u=76281980&t=5)** - [Instructor] We have our WeatherFacade class which wraps all three web services, WorldWeatherAPI, FreeWeather, and RealtimeWeatherService. The class exposes a single public method current weather, which takes a location as an argument and returns a string. The method internally cause the web services stores their results in three different variables and combines the relevant weather data into a single string. I used the string stream object to easily build the string. Finally, I return the generated string from the method. Using this new facade class is extremely easy. So here's the main function. I just create an instance of this class and call the current weather method. The output of this code is the same as before. The goal of simplifying the design and making it easier to interact with the weather API has been achieved by using the facade design pattern. Now you know how to use the facade design pattern in C++. Next up, we'll dive into the flyway design pattern.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 6. The Flyweight

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=0)** - [Instructor] The flyweight is a structural design pattern that aims to reduce the memory usage and creation costs of objects by sharing common data instead of replicating it in each instance. This pattern is suitable for situations where a large number of objects need to be created and each object has common properties that can be shared. The flyweight pattern can be applied to various scenarios including graphical user interfaces, [Game Development](../../Skills/Software%20Development/Game%20Development.md) and [Database Management](../../Topics/Database%20Management.md) systems. It helps to improve the performance and efficiency of these applications by reducing the number of objects created and the amount of memory used. The flyweight design pattern consists of three main components. The Flyweight. This interface defines the operations that can be performed on the flyweight objects. ConcreteFlyweight. This is the actual flyweight class that implements the interface defined by the flyweight. It encapsulates the object's shared immutable state, also called the intrinsic state. The instance specific extrinsic state is externalized and must be set up and supplied to the flyweight object by the client. And the FlyweightFactory which maintains the pool of flyweight objects and provides a way to retrieve them. Clients must use the factory to request flyweight objects. Now, before we continue, I want to clarify two important concepts
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22184026?u=76281980&t=93)** because they are crucial to implementing this pattern correctly. Intrinsic state is the data that's shared among all flyweight instances. This data is immutable and is typically passed during the construction of the flyweight object. Extrinsic state, on the other hand, is the data that is specific to each instance of a flyweight class. This data is not shared among instances and can vary from object to object. The extrinsic state is managed by the client code and passed to the flyweight instance through a dedicated method call. The flyweight design pattern can reduce memory usage by sharing common data among objects. By reducing the number of objects created, this pattern can also help to improve the performance and efficiency of applications. While these benefits are substantial, the flyweight design pattern should only be used when we deal with the large number of objects and these objects have common properties that can be shared. Otherwise, the added complexity may not be worth the effort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Game Development](../../Skills/Software%20Development/Game%20Development.md) (1), [Database Management](../../Topics/Database%20Management.md) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Introducing sprites](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=0)** - [Instructor] I've gone ahead and created a sample application called Sprite. A Sprite is a two-dimensional graphical object, used in computer graphics and games. It usually has a texture, an image, stretched over its surface, which adds detail and realism to the object. Let's start with the Texture class. We're not building an actual graphic engine, so I kept it simple. Instead of loading the image and creating a texture, the constructor of this class just stores the name of the image file and assigns a random integer value to its MID data member. The description method returns the combined value of these properties as a string. We'll use this method to differentiate between texture objects, and it will help us reveal a severe flaw in the design of our application. Next, let's move on to the Sprite class. The Sprite class has five data members, width, height, X and Y coordinates, and the name of the image file used to create the texture. These members get initialized in the constructor's initializer list. The render method prints out a message that also includes the texture objects description. Now, let's create a few surprise. In the main function, I populated a vector with 10 Sprite objects. Each Sprite gets initialized with the same
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/introducing-sprites?u=76281980&t=94)** texture file name, spaceship.png. The second for loop iterates through the vector and calls the render method on each Sprite instance. Let's run this code. This is where we first encounter the flaw in our design. Although the Sprites get initialized with the same image file, a new texture instance gets assigned to each Sprite. The texture identifiers are different for each Sprite. This approach may work fine for our demo, but it can lead to unnecessary memory usage and performance issues, when dealing with a large number of Sprites. We'll use the facade design pattern to optimize this code.

> [!info]- Semantic Content
>
> **Env Vars:** mid (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Reducing memory usage: Part 1](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=0)** - [Instructor] Facade uses sharing to avoid unnecessary object creation and minimize memory usage. Let's demonstrate how to apply this design pattern to improve our demo code. First, we'll need to identify the intrinsic state of our sprite class. The intrinsic state is the state that can be shared between sprite instances. Let's have a look at the data members in the sprite class. The width and height of the sprite as well as its coordinates X and Y are specific to each instance. Thus, sharing them with other sprite objects doesn't make sense. We can consider these properties part of sprite's extrinsic state, which should be set by the client code and shouldn't be shared. Now, the texture is a different story. Sprites with the same texture are common in video games. Just think of particle effects used to simulate fire, rain, or smoke. These effects are created by spawning a large number of sprites with the same texture. So the texture is definitely part of sprite's intrinsic state and can be shared between instances. Now that we know which state should be shared, let's design our flyweight factory. I'll call it SpriteFactory. Clients will use this factory to retrieve sprite objects. These sprites should have their shared
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=93)** or intrinsic states set by the factory, while the client code is responsible for setting the extrinsic state. The intrinsic state is the sprite's texture. Thus, I'll create a public method that returns a sprite pointer and takes as an argument the texture file name. I'll make it a public method and it should return a sprite pointer, makeSprite. And it takes a single argument a constant string reference.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=136)** Sprite factory needs a way to associate sprite instances with a specific file name. The simplest way to do this is to use a map data structure. I'll introduce a new private data member of type unordered map. The unordered map is an associative container that contains key value pairs with unique keys. Unordered_map, the key is of type string, and the value is a sprite pointer. And let's call it m_SpritePool. So this map will store image file name sprite pointer pairs. This data structure will ensure that each file name is associated with only one sprite instance. This is crucial for our design as we want to create exactly one instance of the sprite class per image file. To use this data type, I will need to import unordered_map. Next, I'll call the map's find method to check if there's an entry for the given key in the map. M_SpritePool, and I call its find method by passing in the file name. If there's no such entry, find returns the pass to end iterator. That's why I need to check if the iterator
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=230)** is not the end iterator. If iterator is not equal to m_SpritePool.end.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=245)** Now, if find returns a valid iterator, I'll return the sprite pointer by accessing its second element. The map stores pairs of keys and values, so the value is the second element.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-1?u=76281980&t=264)** If find returns the end iterator, there is no sprite associated with this file name. In this case, I'll create a new sprite instance and add it to the map. However, I will need to refactor the sprite class first.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (2)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** makesprite (1), unordered_map (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Reducing memory usage: Part 2](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=0)** - [Instructor] Since it'll turn into a flyweight the Sprite class should contain only intrinsic properties. The extrinsic properties like coordinates and size should be passed to this class as arguments. So I will modify the constructor to take a single argument, a pointer to a texture. And initialize the m_Texture data member using this texture.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=30)** And I'll output a simple diagnostic message to see when the Sprite is created. To allow clients to set the extrinsic properties, I'll add a new method, setPositionSize. It takes four integers as parameters. The X and Y coordinate, width and height. And we assign these values to m_X, m_Y, m_Width and m_Height. And I'll have to remove the constant qualifier from the corresponding data members. Now I can go back to the Sprite factory and continue implementing the makeSprite method. So we stopped when find returned the end iterator. So now I'll create a new Sprite instance and add it to the map. The updated Sprite constructor takes a single argument, a texture pointer. We should manage textures the same way we manage sprites. Therefore, let's use the same data structure as before. An unordered map of string texture pointer pairs. I'll reuse this line
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=123)** but let's change Sprite to Texture pointer. And I call this one m_TexturePool. and I'll add a new private method to handle textures, getTexture. The logic is the same as makeSprite. If there's no texture associated with the given file name, create one and add it to the map. I used the unordered map's emplace method to add a new element to the map. This function constructs the object directly in the map's internal data structure, making it more performant than insert which requires an extra copy or move step. Finally, I return the newly created texture object. Let's finish the makeSprite function. I call get texture to get a pointer to the texture object and then create a new Sprite instance. I call getTexture with the file name. I've stored the Sprite in the pool using emplace as well. Our pair of iterator and the value we're not interested in, equals m_SpritePool, emplace,
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=217)** and I pass in the file name and a new Sprite. And finally, I return the Sprite pointer by accessing the the iterator's second element. Return newIt, second. Let's not forget to deallocate the memory. I'll define the des disruptor and iterate through both maps to free up all the sprites and textures we created by calling delete on each element. So let's add the destructure here. The last part of our refactoring is to create the Sprite using the factory. So let's crawl down to the main function and I'll create the SpriteFactory instance. SpriteFactory factory. And I'll call its makeSprite method to create the Sprite objects. And let's pass in the textureFile. And I set each sprite's position and size the extrinsic properties by calling the newly added setPositionSize method. Sprite, setPositionSize,
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=310)** 10 for x, 10 for y, 10 times i for width, and 10 times i for the height. And the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code remains unchanged. Let's see if everything works as expected. Yeah, right. We don't need the cleanup code anymore because we have that in the factory's destructure.
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/reducing-memory-usage-part-2?u=76281980&t=345)** We can see that a single Sprite gets created and the diagnostic message printed from the Sprite render method confirms that all sprite share the same texture. Mission accomplished. Next, we'll talk about the proxy design pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** makesprite (4), setpositionsize (3), gettexture (2), newit (1), texturefile (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 7. The Proxy

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=0)** - [Instructor] The Proxy Structural Design Pattern allows us to provide a surrogate or placeholder for another object to control access to it. The proxy acts as an intermediary between the client and the real object intercepting all requests and performing any necessary operations before or after forwarding the request to the actual object. Introducing an additional level of indirection can provide many benefits such as lazy loading, access control, and caching. The Proxy Design Pattern is often used in scenarios where you want to limit direct object exposure or enable additional functionality. There are three main types of proxies. Virtual, remote, and protective. Virtual proxies are used to delay the creation of large objects until they are actually needed, a process also known as lazy loading. They act as placeholders for objects that might be expensive to create, such as objects that require significant resources to initialize or have complex dependencies. By using a virtual proxy, we can avoid the costs of creating and initializing the object until it is actually needed. Instead, we create a lightweight placeholder that can be instantiated quickly and easily. For example, a virtual proxy could be used to represent a large image or video file that would take a long time to load into memory. Instead of loading the entire file at once, the virtual proxy can display a low resolution preview
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=95)** or thumbnail image and only load the full image when the user requests it. Remote proxies provide a local placeholder that is used to control and optimize access to remote resources such as web services. In this case, the proxy acts as a local representative for the remote resource intercepting method calls from the client application and forwarding them to the remote resource over a network connection. By using a remote proxy, the client code can interact with the resource using a familiar local object interface while the proxy handles the details of the network communication. For instance, a remote proxy could be used to access a web service without the need to write any network-related code or understand the web service's interface. And finally, protective proxies are used to control access to a resource and impose certain restrictions. The proxy can be configured to allow only users with valid credentials or permissions to access the resource. In this case, the proxy acts is a gatekeeper that authenticates users and grants or denies access to the resource accordingly. For instance, a protective proxy could be used to ensure that only authenticated users are allowed to access a bank's online services. The benefits of the Proxy Design Pattern are undeniable. Lazy loading of expensive objects, access control to remote resources,
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/overview-22185033?u=76281980&t=189)** and security of sensitive data. The proxy doesn't come without drawbacks though. The introduction of new classes increases the complexity of the system, adds more code to maintain and debug, and increases the potential for errors. Additionally, since proxies are intermediaries between the client and the real object, they can introduce latency and decrease the overall performance of the system.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for instance (2), for example (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [What problem does the proxy solve?](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=0)** - [Instructor] I've created a demo to highlight an issue that might not be as obvious at first. The program loads a configuration file into memory, and prints out the contents. Let's take a look at the code. We've got an abstract base class config file, which has a pure virtual method guest settings that returns a vector of strings. This is the interface that concrete implementations of the config file class have to implement. The program defines a concrete implementation of the config file class called RealConfigFile. Now, this class has a constructor that takes a file name as an argument, opens the file, and reads its contents into a vector of strings. It also overrides the guest settings method to return the vector of strings that was read from the file. In the main function, I've created a real config file object with the file name of config.txt. The program uses a Boolean variable use settings to decide whether or not to retrieve the configuration file settings. Let's see how this works. If use settings is true, the program retrieves the settings from the real config file object and prints them to the console using the for loop. And if I run the program, we can see that the real config file object was created. Three settings were loaded.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/what-problem-does-the-proxy-solve?u=76281980&t=94)** And here are their values, as printed from within the for loop. Now, I'll change use settings to false and run the program again. Let's see. The program prints a message indicating that the configuration was not used. However, there are two consol entries that precede this message. These messages indicate that the real config file object was still constructed and its constructor read the configuration file into memory, even though the configuration was not used. That's because the constructor of real config file reads and stores the configuration, regardless of whether it will be used or not. The problem with this program is that it eagerly loads the entire configuration file into memory even if the settings are not needed. One way to solve this problem is to use lazy loading.

> [!info]- Semantic Content
>
> **File Paths:** config.txt (1)
> **Speakers:** - [instructor] (1)

#### [The virtual proxy](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=0)** - [Instructor] The problem we just saw can be solved using the virtual proxy design pattern. It works by creating a proxy object that wraps around the real config file class and delays loading the settings until they are actually needed, minimizing the costs of creating expensive objects. Let's see how this works. First, I'll create a new class called config file proxy that derives from the config file class. (keyboard clicking)
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=37)** - [Instructor] And it should inherit from config file. The config file proxy class will wrap an instance of the real config file class. To do this, it will hold a pointer to an instance of the real config file object. So, I'll add a unique pointer to the real config file object as a private member. (keyboard clicking)
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=66)** - [Instructor] And let's call it real config file. Memory is already included, okay. Now, the idea behind the virtual proxy design pattern is to delay the creation of the real config file object until it is needed. And when do we need the actual real config file instance? When someone calls the get settings method of config file proxy, right? So, let's implement this method next. (keyboard clicking)
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=102)** - [Instructor] It returns a vector of strings. Get settings. And when the proxies method gets invoked, I need to forward the call to the wrapped real config file instance. But first, I need to make sure that the real config file object exists. So, I have check the real config file pointer.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=130)** If it's a new pointer and this case I need to create it. I'll call "make unique" to instantiate our unique pointer. It should be of type real config file. And I pass in the file name. (keyboard clicking)
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=154)** - [Instructor] But there is no file name, so let's add that next. I'll add it as a new private data member of type string. (keyboard clicking)
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=168)** - [Instructor] And I'll initialize it in the constructor. So, I'll add a constructor as well. It takes file name as input parameter. Now, I can initialize my file name member, and I'll also initialize the wrapped real config file pointer to null, because we don't like uninitialized pointers. And finally, let's output a console message to see when the proxy gets created. Config file proxy created. There is a typo here, and now I can complete my get settings method. Return, and now I forward the call to the real config file, the wrapped instance and call it get settings method. And now that I delegated the call to real config file, we're almost done. The only thing left is to use the proxy in place of the real config file object in the main function. So, I create an instance of config file proxy and comment
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=268)** out the code that creates the real config file object. I keep the name of the object so, we don't have to modify the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of our code. And now, let's execute the program again. So, use settings is set to false. Let's see what happens.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/the-virtual-proxy?u=76281980&t=292)** - There are only two messages in the console. The first one indicates that the proxy was created and the second says that our configuration was not used. Now, since use settings is false, the proxies get settings method doesn't get called. Thus, the real config file object isn't created. And that's exactly what we wanted. I'll try again with use settings set to true. And running the demo gives us the following output. So in this case, the get settings method is called which in turn triggers the creation of the real config file object and the proxy forwards the call to this object. We just saw how the virtual proxy design pattern could be used to delay the creation of expensive objects until they are needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Speakers:** - [instructor] (6), - there (1)
> **Non-Speech:** (keyboard clicking) (5)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)

#### [Challenge: Implement a protective proxy](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/challenge-implement-a-protective-proxy?u=76281980&t=0)** - [Instructor] In this C++ challenge your goal is to implement a protective proxy to limit access to a resource. The protective proxy acts as an intermediary between the client and the actual resource and adds access control rules to ensure that only authorized clients can access the protected resource. Here's the starting demo featuring the class we want to protect from unauthorized access. The SecureStorage class inherits from storage and initializes its string data member in the constructor. The get contents method returns this string. That's a pretty straightforward design. Your task is to implement a protective proxy that limits access to the SecureStorage class, allowing only users who know the secret code to access the protected resource. You can use a similar approach, as in the previous example. Create a proxy class that exposes the same public interface as SecureStorage, but with access control rules in place. When clients call the proxy's get contents method, it should first verify that the code is correct before delegating calls to the protected SecureStorage instance. Pause the video and give it a try. Come back to check out my solution.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implement a protective proxy](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=5)** - [Instructor] I hope you had to go at the challenge before checking out my solution. Here's the design of the Protective Proxy class I came up with. Secure storage proxy is derived from storage and exposes the same public interface as the secure storage class, with an additional constructor parameter for the secret code. The class wraps a secure storage instance that gets initialized in the constructor. I used a unique pointer to ensure that the instance gets automatically destroyed when the proxy is deleted. The get contents method contains the access control logic. The proxy requires clients to provide a valid code before granting access to the secure resource. The private authorized method performs a single string comparison, to verify that the provided code matches the secret code, which is 42. If there is a match, the method returns true and get contents forwards the card to the secure storage object. Otherwise, it returns the string access denied. Now, bear in mind that I use this basic approach exclusively for demonstration purposes. It goes without saying that comparing strings and using hard-coded passwords is not how you should implement authentication mechanisms for real world applications. In the main function, I instantiate a secure storage proxy instance with the same string data as in the initial project.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/solution-implement-a-protective-proxy?u=76281980&t=99)** But this time I also provide the secret code. Let's run the demo to see if it works as expected. Yep, it works as intended. Now, let's pass a wrong code, to see if the access control rules kick in. How about 41? And there you go, Access Denied. The proxy design pattern can solve various design problems, involving access control, lazy loading, and optimized usage of remote resources. It's a design pattern worth knowing, along with other [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) from the gang of four.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=0)** - [Karoly] Congratulations, you've completed the C++ [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) Structural course and learned how to use structural design patterns to create more elegant, efficient, and scalable software. I hope you found the course informative, engaging, and rewarding. To solidify your understanding of the concepts covered in this course, I encourage you to practice implementing the structural design patterns in your own code. By applying these patterns in real-world projects, you'll gain valuable experience and expertise that will set you apart as a skilled and knowledgeable developer. Also, don't hesitate to revisit the course from time to time to refresh your knowledge and deepen your understanding of the material. The lessons and exercises in this course are designed to be valuable and relevant for years to come. If you enjoyed this course and want to learn more about [Software Development](../../Topics/Software%20Development.md) and design, be sure to check out my other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses. I cover a wide range of topics from [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) and iOS programming to [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) and object-oriented design. To deepen your C++ knowledge, I recommend checking out Advanced C++ Topics with Bill Weinman and C++ Code Clinic with Olivia Stone. These courses cover advanced C++ concepts and practical coding challenges that will help you take your skills to the next level. Thank you for watching this course
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-structural-22183029/next-steps?u=76281980&t=92)** and investing in your programming education. I'm honored to have been your instructor, and I hope you found the course valuable and enjoyable. Good luck with your coding projects and keep exploring the exciting world of software development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (3), [Software Development](../../Topics/Software%20Development.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1), [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [karoly] (1)


## Instructor

- [Károly Nyisztor](../../Instructors/Software%20Development/K%C3%A1roly%20Nyisztor.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/cpp-design-patterns-structural-4360277)

## Skills Covered

- Data Structures
- Software Design Patterns
- C++

## Path Context

### In [C++ Programming Professional Certificate by OpenEDG C++ Institute](../../Paths/Data%20Science/Professional%20Certificates/C%2B%2B%20Programming%20Professional%20Certificate%20by%20OpenEDG%20C%2B%2B%20Institute.md)
← [C Plus Plus Essential Training](C%20Plus%20Plus%20Essential%20Training.md) | **2 of 3** | [C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices](../Software%20Development/C%2B%2B%20Development-%20Advanced%20Concepts%2C%20Lambda%20Expressions%2C%20and%20Best%20Practices.md) →

## Part of

- [C++ Programming Professional Certificate by OpenEDG C++ Institute](../../Paths/Data%20Science/Professional%20Certificates/C%2B%2B%20Programming%20Professional%20Certificate%20by%20OpenEDG%20C%2B%2B%20Institute.md)

## Appears In

- [C++ Programming Professional Certificate by OpenEDG C++ Institute](../../Paths/Data%20Science/Professional%20Certificates/C%2B%2B%20Programming%20Professional%20Certificate%20by%20OpenEDG%20C%2B%2B%20Institute.md)

## Related Courses

_Courses sharing skills:_

- [C++ Design Patterns- Behavioral](../DevOps/C%2B%2B%20Design%20Patterns-%20Behavioral.md) — Software Design Patterns, C++
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Data Structures
- [Python Data Structures- Linked Lists](../Software%20Development/Python%20Data%20Structures-%20Linked%20Lists.md) — Data Structures
- [Python Data Structures- Stacks, Deques, and Queues](../Software%20Development/Python%20Data%20Structures-%20Stacks%2C%20Deques%2C%20and%20Queues.md) — Data Structures
- [Python Data Structures and Algorithms](../Software%20Development/Python%20Data%20Structures%20and%20Algorithms.md) — Data Structures

---

[↑ Back to top](#)