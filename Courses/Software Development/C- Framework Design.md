---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: c-sharp-framework-design-17295804
url: "https://www.linkedin.com/learning/c-sharp-framework-design-17295804"
duration_minutes: 72
duration: 1h 12m
level: Advanced
updated: 1/4/2023
learners: 34861
skills:
  - Framework Design
  - C#
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGznvMzGXwAWg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671650523568?e=2147483647&amp;v=beta&amp;t=GSpV3J8ZSdkcFSJuXMRaQ3Fr2g_ItNr4Hf7ehug0as8"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
prev_courses:
  - '[[Asynchronous Programming in C-]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":6,"total":6,"prev":"Asynchronous Programming in C-","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/framework-design
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C-%20Framework%20Design.md)

![C# Framework Design](https://media.licdn.com/dms/image/v2/C560DAQGznvMzGXwAWg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671650523568?e=2147483647&amp;v=beta&amp;t=GSpV3J8ZSdkcFSJuXMRaQ3Fr2g_ItNr4Hf7ehug0as8)

# C# Framework Design

> Discover how to design C# frameworks for personal, enterprise, and open-source projects. In this course, join instructor Jesse Freeman as he discusses key framework design concepts, how to organize your code into stand-alone source code, and how to document and share your frameworks online. Jesse covers code encapsulation and modular classes as well as how to extend a framework and enforce an arch

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-framework-design-17295804) | 1h 12m | Advanced | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Framework design with C#](#framework-design-with-c)
  - [What you should know](#what-you-should-know)
- [**1. Framework Design**](#1-framework-design) (4 videos)
  - [Design frameworks](#design-frameworks)
  - [Code encapsulation](#code-encapsulation)
  - [Design interfaces](#design-interfaces)
  - [Modular clases](#modular-clases)
- [**2. Extending Frameworks**](#2-extending-frameworks) (3 videos)
  - [Create independent modules](#create-independent-modules)
  - [Enforce an architecture pattern](#enforce-an-architecture-pattern)
  - [Extend a framework](#extend-a-framework)
- [**3. Hosting Code**](#3-hosting-code) (4 videos)
  - [Share framework](#share-framework)
  - [Hosting frameworks](#hosting-frameworks)
  - [Document a framework](#document-a-framework)
  - [Setting up Github](#setting-up-github)
- [**4. Continuous Integration**](#4-continuous-integration) (3 videos)
  - [What is CI](#what-is-ci)
  - [Custom build scripts](#custom-build-scripts)
  - [Using Github actions](#using-github-actions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Share framework with the community](#share-framework-with-the-community)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Framework design with C#](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/framework-design-with-c-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/framework-design-with-c-sharp?u=76281980&t=1)** - [Jesse] Hello, my name is Jesse Freeman, and in C# [[Framework Design]], you'll learn some strategies for creating your own frameworks. I'll start by teaching you what a framework is, how to organize your code so it's self-contained and solutions for documenting, sharing and hosting online for others to use. These are all strategies I've used in commercial and my own projects over the past 20 years as a developer. I hope you enjoy this course as much as I did making it. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Framework Design]] (1)
> **Speakers:** - [jesse] (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/what-you-should-know?u=76281980&t=0)** - [Narrator] Before you get started, this course assumes you're familiar with C# and coding in general, and that you're using Visual Studio or some other IDE that has C# support. While we won't be coding, we will be walking through some concepts of [[Object-Oriented Programming (OOP)|object-oriented programming]], API design, and general code maintenance. Finally, you should have some experience with [[Version Control]], to help keep your project safe and to make it easier to share with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Version Control]] (1)
> **Env Vars:** ide (1), api (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [narrator] (1)


### 1. Framework Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Design frameworks](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-frameworks?u=76281980&t=0)** - [Instructor] Let's talk about designing frameworks. A software framework in computer programming is an abstraction in which common code provides generic functionality that can be selectively overridden or specialized by a user's code providing specific functionality. A framework can be a library of code that performs a special task or a much more complicated foundation to your code base that handles complicated systems and even rendering logic critical for your application to run. Since we are focusing on C#, to write a framework, it's important to realize that you're already writing your code on top of another framework, which is .NET. .NET is a collection of APIs and services that helps you speed up your own development. And ideally, a framework is designed to help remove repetitive tasks or to allow you to speed up your own development when doing common functionality. When writing a framework, it's important to keep in mind that you'll want to create a goal and find the simplest solution to achieve it. Designing frameworks require a lot of planning and special architectural considerations. A framework is a lot different than just generic code that runs inside of an application. Since it has to be reusable or scalable, you'll have to think ahead and plan it out before you start writing. A framework represents a core pillar of a project's code. It needs to be bug free, easy to implement,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-frameworks?u=76281980&t=95)** and more, important scale for future changes or additions to the code base. And the final component of any good framework is portability. Can you isolate your framework and share it easily with others? Or do you have other dependencies that your framework requires? Making sure that your framework is easily shareable, so that others can use it, will ensure that your framework is adopted by other developers. Good code architecture isn't just about coding, it's about not trying to reinvent the wheel. While you may come up with a particular solution for a problem, make sure the problem actually exists. Are there other frameworks out there that do what you're trying to do? If so, see how you can modify them and build on top of them, instead of creating a similar framework, unless you have a better way of solving that problem. Some things to keep in mind when creating your own framework is to try to answer the following things. Is there an existing library that does what you're trying to do? If so, see if it's popular and try to use that. Next, can the framework stand on its own? If not, what does it depend on, and will others be able to use it? If your framework requires a lot of additional libraries, it may be too difficult for other developers to get up and running with, or it may add more code to project than they want. Make sure that your framework is as self-contained as possible. And finally, how can you simplify the functionality of the framework to its core components
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-frameworks?u=76281980&t=190)** and only include those in your code base? A lot of the times we try to put the kitchen sink into our frameworks. Try to keep your framework paired down and as optimized to only what it needs as much as possible.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** net (2)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### [Code encapsulation](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/code-encapsulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/code-encapsulation?u=76281980&t=1)** - When building frameworks that developers need to use in their own code, it's important to think about encapsulation. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties direct access to 'em. Encapsulation is a key concept in [[Object-Oriented Programming (OOP)|object-oriented programming]], or OOP. And it helps not only protect the data inside of your framework, but simplifies the external interaction with the underlying code. Here are some ways that we can encapsulate data better. First, we can define strict scope for our framework's, APIs. Second, any externally facing code should be made public. Third, internal code should be made protected. Fourth, code that is designed to be extended or changed, should be marked as virtual. And fifth, anything that is final, should be marked as read only, static, or sealed. Scope always starts at the class level. Any class can be made public, private, or internal. If you're using classes that shouldn't be accessible outside of the framework itself, be sure to mark them as internal. Anything that can be used outside of the framework, can be made public. Next, take a look at your class's own API's,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/code-encapsulation?u=76281980&t=94)** and see which one should be exposed to the user by making them public, and hide the [[Representational State Transfer (REST)|rest]] through protected scope. The next thing to keep in mind is to avoid private scope. While code can be made hidden from public methods, try to create protected methods that can still be extended and changed, by using the protected virtual scope. And finally, it's important to keep in mind, that you should always be protecting the data that your framework touches. Avoid directly manipulating data passed into methods. You don't want your framework to corrupt that data. Make a copy, and manipulate that instead of the actual source. If you can't make a copy of the data, use the ref argument to clearly state that properties passed into a method, will directly be manipulated by the objects themselves. And finally, while clean encapsulation helps isolate your frameworks code from the larger code base it is used in, some of these techniques can create performance issues. For mission critical code, try to find the fastest solution possible, and document the trade-off when using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** oop (1), api (1)
> **Warnings:** keep in mind (2)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Speakers:** - when (1)

#### [Design interfaces](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-interfaces?u=76281980&t=1)** - [Narrator] When it comes to encapsulation, a big part of your framework's design should revolve around building clean interfaces. Interfaces provide an opportunity to build a very modular framework and offer developers additional ways to extend and enhance what may be a very closed system. Let's look through a few examples of how interfaces can help clean up the public-facing APIs of a framework. For a simple example, we're going to focus on three files: one that saves, one that loads, and a class to handle saving and loading combined. First, we're going to take a look at a save interface. We'll start by designing a class called ISave. Here is what it looks like. It's a public interface called ISave and it has one public method that returns a string value and it's called Save. Whenever you call the Save method, it'll return the value to be saved by another class. We don't need to worry about what the data is. All we need to know is that whenever we call Save, we'll get a string and we can use that string and put it wherever the main application saves its data. The next class we're going to look at is the ILoad interface. As you can see, this is very similar to our save except whenever we call load, it doesn't return a value. It simply accepts a value as a string
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-interfaces?u=76281980&t=95)** that we can use to get data into our class. Now that we have our two interfaces, let's take a look at a concrete class and see how both of these APIs can be used and we could extend their logic. Here is a class called MyClass. It implements the ISave and ILoad interface. In addition to implementing these two methods, which it must have in order to use these interfaces, it also has its own custom method. Now this class is able to save and load and do its own logic. Now, we can take this system a little bit further, and if you're thinking about your own framework, there may be some custom classes that implement different interfaces and create custom logic. In this case, we could create an interface for our custom class and have that interface also enforce the ISave and ILoad interfaces. For example, here is an interface for IMyClass that extends the ISave and ILoad interface. As you can see, we now define the public custom method that is unique to the MyClass itself. If we were to implement this in our concrete example, you would see that we can now remove the ISave and ILoad interfaces and simply use the IMyClass interface. Remember, this also includes the Save method
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/design-interfaces?u=76281980&t=193)** and the Load method and now defines the custom method of MyClass. Now, wherever we implement the IMyClass' interface, we can also use it anywhere the IMyClass, ISave, or ILoad Interface is accepted in the framework. While this is a simple example, it is a powerful illustration of how to allow users to not only extend your framework's functionality, but also use external classes along with native ones. Your framework should do its best to type to interfaces. This way, developers can implement their own solution in wrapper classes that can still be used inside of a sealed framework.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [narrator] (1)

#### [Modular clases](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/modular-clases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/modular-clases?u=76281980&t=1)** - [Instructor] By definition, a class is a module in any [[Object-Oriented Programming (OOP)|object-oriented programming]] language. When we talk about building modular classes for a framework, I refer to how they are used, interacted with, and scale as the framework itself grows. While frameworks are generally designed to solve a specific task or collection of tasks, you should try to capture more edge cases. What are the questions you should try to answer early on in a framework's development process? Does the framework do what others need? What happens when someone needs to do X, Y, and Z, and how do you plan to account for it? Can it scale? Can your framework scale to the needs of the users, or are you building a tool that is not flexible? And finally, can it be extended? Can users extend what you've done, and build on top of it easily? Here are some tips for building modular classes. First, use interfaces. Does your class implement any type of interface? Interfaces allow you to interchange other classes. So if a developer needs to create a custom class with its own logic, but still work within your framework, they can adopt the interface your framework requires. Two, do your classes support extending? Is the class sealed, or do you expect developers to extend it?
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/modular-clases?u=76281980&t=94)** Are you using virtual in your public and protected method scopes? Three, do you have abstract classes? Are you creating abstract classes and base classes as a layer of foundation, or is the class a concrete implementation with no inheritance? You should be building basic classes that other classes in your framework extend on, so if developers need to create new classes, they can use the abstract or the base class as a starting point instead of having to implement all of the business logic from scratch by implementing an interface. Four, do you have utilities? What kind of utility classes do you provide? Are they singletons or can they be extended. Five, primitive classes? What are the primitive classes of your framework? Are they enough, and can they be used outside of the framework, or are they closely tied to the intended use case? What are the basic classes of data that your framework requires, and are these useful enough for developers as is, or should they have to provide their own primitive classes? And six, sharing the code. Are you sharing the code of your framework, and do you intend others to extend it beyond its original design? Or would you rather keep it private? Take some time to answer these questions and refer back to them while you architect your framework's code. I find that just like creating a business plan
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/modular-clases?u=76281980&t=187)** for a company, you should have a mission statement for the framework itself. This mission statement should outline the intended use of the framework, and what you expect of it over time. Define what you think makes the framework successful, and what are the things that your framework is trying to solve? As you build out the code base and add functionality, check your mission statement and see that you're staying true to your vision for the framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Extending Frameworks

[↑ Back to Table of Contents](#table-of-contents)

#### [Create independent modules](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/create-independent-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/create-independent-modules?u=76281980&t=1)** - [Instructor] So now that we've talked about architecting your framework let's switch gears and think through how others will need to use it and extend your framework in their own projects. Whether you intend for it to happen or not, developers that use your framework will need to customize it to their own needs. Here are some high level things to keep in mind when thinking through ways for others to build on top of your framework's foundation. First, what are you solving? What are the use cases your framework solves that others will use it for? Having a clear understanding of what the intention is for people to use your framework will help make sure that its focus is narrow enough to be useful. Second, what are the gaps in your framework? What are the things that your framework doesn't solve, but are still a problem developers will need to fix? And third, what are the kind of fixes you intend for developers to use when trying to overcome the gaps that your framework doesn't provide a solution for? It's impossible to capture every use case. The best you can do is provide a clean code base with extending in mind. This will not only allow you to add more code to the project over time, but to let developers that implement it in their own projects also come up with solutions that work best for their needs. This means using virtual methods, implementing interfaces where possible,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/create-independent-modules?u=76281980&t=95)** and creating base and abstract classes to build off of. While designing a framework, it helps that you also use it yourself. When I designed Pixel Vision 8, it became the base framework for the other games that I was creating. This ensured that as I built my own games, I was also able to find the bugs and missing features of my own framework and fix them along the way. Whenever you create your own framework, it's best to use code that you already have. Some of the best frameworks are those that are pulled out of an existing or previous project that you feel will be reusable enough to stand on its own. This means cleaning up the dependencies. Once you've separated out a module from the framework, you can clean up any of the dependencies and make sure that it's self-contained. And finally, after you've created a self-contained module, you can reintroduce it back into the project you are working on and test out how it holds up. There are lots of different ways of separating out framework modules so that it can be used in larger projects. If you're hosting your framework on [[Git]], try considering using sub-modules that allow you to have dependencies on other Git projects so that you can still use [[Version Control]] while you're maintaining your framework's code base and using it in a larger project. While cleaning up your framework,
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/create-independent-modules?u=76281980&t=187)** these are the questions you should try to answer. Do you need to add more code to the project? Have you made it independent enough to be portable from one code base to another? And can this be used by other developers?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Version Control]] (1)
> **CLI Commands:** make (2), git (2), find (1)
> **Best Practices:** it's best to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Enforce an architecture pattern](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/enforce-an-architecture-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/enforce-an-architecture-pattern?u=76281980&t=0)** - [Instructor] One of the most important parts of any framework architecture is creating a consistent API and design pattern. You'll want to pay special attention to how you create your classes, interfaces, and public APIs. The goal is to make everything consistent. Each developer approaches code differently. While it's impossible to anticipate how someone will want to use your code in their project, you should make sure that the framework is consistent. Then, once the developer learns the [[Design Patterns]], they can feel more comfortable working with the code. As an example in the [[Object-Oriented Programming (OOP)|object-oriented programming]] adventure text game each Action uses the same register and execution logic so it's easy to add new Actions without having to change the underlying code. All Actions have a public Name property that is overridden by a child class and it uses it to identify the Action when the player enters it into the console. When you register an Action, it goes into the Actions singleton and is made available to the player when the game is running. There's a lot of business logic going on that the end user never needs to know about. They only care that when they type in the name of a command and a target, the engine routes it to the correct Action or displays an error. Let's take a look at how the object-oriented programming adventure game works. You can download it from its [[GitHub]] repo in order to follow along. If we compile the game it'll start by asking us what our name is. (keyboard clicks) Then we can enter in commands that route to each of the Action classes inside of our source directory.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/enforce-an-architecture-pattern?u=76281980&t=96)** For example, if we want to move around and look for the key, we can simply type go south and it'll take us to a new room. If we move down one more room, we'll find the key. We can use the take Action in order to add it to our inventory. (keyboard clicks) Now I'm going to move to the room that has the chest and we can use the use Action to open the chest with a key. (keyboard clicks) Now that we've unlocked the chest, 100 gold coins have been added to the player's inventory, and if we use the backpack Action we should see the player's inventory. Once we're done with the game we can simply type quit and exit it. So that's a quick overview of how the game actually works. Let's take a look at the Action class. As you can see, we have an abstract Action and all of the children Action classes extend this and they override the Name property and the Execute method. If we take a look at the Actions class, which is the manager for each of the Actions, you'll see that it is a singleton so it's responsible for creating a single instance of the Action class, and then there are two methods, register and execute. Register accepts an Action and execute looks for the Action based on the name you provide and then calls the Execute method and passes in all the other arguments
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/enforce-an-architecture-pattern?u=76281980&t=189)** that the player entered when they called the command. If we take a look at the go Action, you'll see that it extends the Action class. It overrides the name, setting it to go, and then it overrides the Execute method and performs all the logic necessary in order to move the player from one room to the next. As you can see, each of the Actions follow the same design pattern. They extend the abstract Action class, override the name property, and add their own logic to the overridden Execute method. For more advanced developers, they can dig into the separate internal API design pattern but it's not needed to add new Actions to the game. You just need to override the Execute method and register it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2), [[Design Patterns]] (1), [[GitHub]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Extend a framework](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=0)** - [Instructor] Let's go over an example of how we can clean up the [[Object-Oriented Programming (OOP)|object-oriented programming]] adventure game's action system to be extended so that others can easily build their own. The base Action is an abstract class. This provides the foundation for executing commands that the player enters into the console. But the Actions class, which is responsible for executing actions, is hard coded to the Action class instead of an interface. The Abstract class really doesn't contain any business logic. Even worse, it's confusing with the Actions class that's responsible for executing them. What if we want to create a new command that doesn't extend the Action class? We need to create an interface to decouple our dependence on the Action class and enable our Actions class to accept any command that implements the correct interface. Now let's go back into our object-oriented programming adventure game. You could also follow along if you download the source code from its [[GitHub]] repository. Let's go ahead and open up the Actions class. As you can see, we have a simple Abstract class that provides a Name and an Execution method. All the other actions, such as the Backpack, Go, Take, and Use, all extend this class. If we look at the Go action, you see that it extends the Action class, and it overrides the Name and overrides the Execute method. Normally, when we have an Abstract class, the idea is to have some sort of business logic
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=94)** that all children classes can share when they extend the class and override methods. But in this game, the Action class really doesn't do anything. So let's take a look at how we can refactor this, turn it into an interface, and make it easier for any one of the actions to inherit from another class, but still allow them to be registered and executed with the Actions class just like they do now. We can start by right-clicking on the class name, refactoring, and extracting an interface. Visual Studio is going to automatically show us the property for Name and the method for Execute. It'll also rename it "IAction". So let's hit OK. Now it's created an interface inside of our Actions folder. If we go back and look at the Action class, you'll see that it now extends IAction, but we no longer need this. Let's go ahead and delete it.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=160)** Now, if we open up our Actions class, which manages all the actions, you'll see that we need to replace the action with the interface. Now the Actions class looks for the interface IAction, and any class that now implements IAction interface can be registered and executed. Let's go and fix all the other actions so the game works as it should. (keyboard clicking)
>
> **[3:36](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=216)** Now, all of our actions use the IAction interface, and the Actions Manager will still be able to register them and execute 'em. Let's run the game, go through it, and make sure that all the actions work.
>
> **[3:55](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=235)** (keyboard clicking) Now, if we use the Go action and move to the room where the key is, we're able to take the key, move to the room where the chest is, (keyboard clicking) use the key to open the chest, and then once the chest gives the player the gold, we can look at the player's backpack to see that the gold is in their inventory, and we're still able to quit the game. Now that you've seen how we've been able to remove the Action class and replace it with an interface, let's take a look at another area of the code that uses a similar concept, which is the Inventory class. In the object-oriented programming adventure game, there is an interface that defines all of the APIs for the inventory, such as adding items, getting the total items, finding items, and removing items. Let's take a look at the Inventory class and the IInventory interface in order to see how this works. First, let's look at the IInventory interface. As you can see, this contains all the public properties and methods needed in order for something to act like an inventory. You can get a total, you can get an inventory list, which is the string of all the items in the inventory by name, there's an Add that contains Find, Remove, Take, and Use. These are all the actions required for the player to interact with an inventory as well as the game to use an inventory
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=329)** to give the player what they need. If we take a look at the implementation, you'll see that the Inventory class implements Iinventory, and the inventory uses composition in order to add additional logic to .NET's list class. Here, you can see that the property Total simply returns the Items.Count property. If you look at the Add method, it calls the Items' Add method and the same thing for Remove. All the additional logic that is unique to the inventory handles everything it needs to do so that it never exposes the items list to any other class outside of itself. Now, all we need to do is have a class implement an IInventory, give it a reference to an Inventory class internally, and simply route all of the interface methods to that instance. Now that we've looked at the inventory, the Player and the Room classes have their own inventories. So instead of exposing a public inventory property, these classes implement the IInventory interface and use composition to abstract out the logic that manages the inventory under the hood. To the game engine, a Player and a Room are inventories, in addition to their own types. Good frameworks are architected in a way that allows the most flexibility when integrating with a larger codebase. Think through the holes in your design where you have tightly coupled relationships between classes.
>
> **[7:02](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/extend-a-framework?u=76281980&t=422)** While it's not always possible to fix all of them, try to provide the tools that others can use to add additional functionality or customization in their implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3), [[GitHub]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (2), just like (1)
> **Non-Speech:** (keyboard clicking) (3)
> **Tools:** github (1), visual studio (1)
> **Exercise Files:** download the (1), source code (1)
> **Definitions:** is an  (2)
> **Env Vars:** net (1)


### 3. Hosting Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Share framework](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework?u=76281980&t=1)** - [Instructor] By its nature, a framework is designed to be shared and used by other developers. While it may make sense to create a framework to help you speed up your own development or to use internally in a project with a team, a framework should be portable enough to still be set up and used by others. Here's some things to keep in mind when sharing a framework. First, it should have a clean API architecture. This means that all the public facing methods are easy to understand, use, and implement in another person's code base. The second thing is that it should be very well documented. Just having public APIs alone isn't enough to make it easy to use. Those APIs should be documented with examples of how they're used. And three, your framework should provide clear functionality. What does it do, what problem does it solve, and how will it make another developer's code base better if it's included and used in their project. While frameworks can be small, such as a set of drawing APIs or large like .NET itself you should have a clearly defined scope for what your framework does and how others should use it. One of the most important things to keep in mind is to not boil the ocean. Most software is made up of several frameworks. It's okay to design several self-contained frameworks that together work as a larger whole which is how .NET itself works. If you find that in your own project
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework?u=76281980&t=95)** you are seeing that other pieces of code can be compartmentalized and be reusable, break them off and turn them into a smaller framework. You can always link smaller frameworks together with an overarching framework or a specific code layer to help them work together. But the key to reusability is to make sure that each piece is self-contained and reusable in the next project. One of the ways to achieve this is to limit the dependencies that your framework has. When encapsulating frameworks by functionality, it helps to limit these dependencies. Figure out what libraries your code needs in order to work and see if there are ways around it so that you can actually create frameworks that don't depend on other frameworks. And finally, clearly state the dependencies. It's okay for frameworks to depend on other frameworks. Just be clear about what is needed to run the library for developers looking to use it in their own code. Some of the dependencies that you have in your framework may create conflicts in other frameworks or in other developers' projects. By clearly stating what dependencies you require, you'll let developers know upfront what they're getting themselves into. When it comes to sharing a framework with developers, there are several options for sharing your framework's code. The most common way of sharing code, without the source itself, is by creating a dynamic link library. These are usually referred to as DLLs.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework?u=76281980&t=191)** This is a compiled binary of your code that can be used in any Visual Studio project when linked correctly. In Visual Studio, simply create a new project and select the shared project template. If you're using code from an existing base for your own framework, you can also break that code out of your project, create a new project or a new shared library, and then reintegrate it back into the original project. This way, as your frameworks become more self-contained you can move them into an easier place to work on and then link them back into a bigger project. The next way to share your project is through NuGet. NuGet is the package manager for .NET. The NuGet client provides the ability to produce and consume packages. These packages are easy to distribute, and since most C# and .NET developers are already using a tool with NuGet built in, it's easy for them to consume them and use them in their own projects. From the NuGet site itself, you can browse all the packages that are part of the repository, or you can load this inside of Visual Studio itself in order to bring any of these projects into your own code. The final option, which we'll talk a little bit more about later, is hosting it online. You can host your code online in a number of sites that make it easy for others to discover your framework and see its source, file bugs, supply fixes, and make their own versions of your code base.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework?u=76281980&t=286)** Sites like [[GitHub]] or creating your own website can help facilitate this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** net (4), api (1)
> **Tools:** visual studio (3), github (1)
> **Definitions:** means that (1), is a  (1)
> **Warnings:** keep in mind (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)

#### [Hosting frameworks](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/hosting-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/hosting-frameworks?u=76281980&t=1)** - [Instructor] If you've decided to open source your project, or at least share its source code, you'll want to host it online. One of the best ways to do this is to use [[Version Control]]. It's best to use a version control system when building your framework in general. And the best online code repository sites are also tied to a specific version control system, making it easy for you to keep your online code base up to date with your local build. Earlier we spoke about [[GitHub]], and here is an example of a game engine I've been working on in C# called PixelVision8. Here you can see my GitHub repo and each of the projects I've uploaded to my account. I've broken out different pieces of the game engine itself so that developers can use what they need. The SDK is the core of it which is written in C# and is completely open source. One of the great things about GitHub is that once you've put your project under your version control, you can easily upload it to a GitHub repo and host it online. As you can see, the source code for my game engine is up and since I have a README file, there's also some basic documentation that's automatically shown in the repo itself on GitHub. GitHub is also great for tracking issues, filing bugs, or keeping track of what milestones you need to complete. Others are able to branch off of your code
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/hosting-frameworks?u=76281980&t=95)** and create their own versions, and also put fixes back into your project. In this case, here are some poll requests that people have opened up for my project and I can copy their code fixes into the existing code base. Finally, GitHub offers some good insight into the contributions to a project itself. As you can see, these are the commits that I performed over the past year of development. And you can gauge a project's health by seeing how active its developer community is. If you're using [[Git]] as your primary version control system there are also some great alternatives to hosting your code online instead of using GitHub. One of these alternatives is [[Bitbucket]]. Bitbucket offers a lot of the same features as GitHub, but you can actually have private repos as part of their free tier. They also have more extensive issue tracking through [[Jira]]. And finally, a new alternative to GitHub and Bitbucket is GitLab, this combines the best features of both other sites and has more team building and [[Team Collaboration]] tools built in. It's important to note that each of these sites have free and paid tiers. So whenever you're looking a place to host your code make sure you understand what it's going to cost you in the long-term to maintain your code base. Here are some things to look for
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/hosting-frameworks?u=76281980&t=188)** whenever you're uploading your code to a site to share with others. One of the most important features is being able to track bugs. Can you file and write your own bugs and close them? Or can others contribute bugs back to the project in a way that's easy to manage? The last thing you want are people tweeting to you and emailing you the issues they find and no way of sharing the fixes with others. The second thing is can you see the progress that the framework is making? Are you able to define each of the milestones, the feature roadmap, and share with developers what's going on when you're building the framework itself? Sharing this progress also cuts down on additional chatter from people asking what's going on? Find a site that allows you to clearly show the progress you're making so that others know that the project is still active and healthy. And finally, the third thing, since you can't do everything yourself find a site that allows you to have contributions. Can others contribute code, or fixes back to the main project itself and can you build a developer community from an open source project? The last thing you need to consider when open sourcing a project is a license for the project itself. While I'm no lawyer, I am able to tell you that you should have a license that you feel comfortable with that defines how other developers can use your code, whether they can ship it in their own project, whether they have to pay for it,
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/hosting-frameworks?u=76281980&t=280)** or whether it's freely used any way that they see fit. A great resource is the [opensource.org](https://opensource.org) licenses page which will walk you through each of the different types of commonly used licenses and explain to you in clear, easy to understand language what each license does. A license is critical when open sourcing a project because it helps define how others can use the code in their own project. Picking the right license is critical when open sourcing your code. The license you choose can make a huge difference in a company's ability to adopt your framework in their own project. And it could mean more users if you're looking to scale it without monetizing the code base directly. One thing to keep in mind when you open source a project is that lots of framework developers have been very successful by open sourcing their code and finding a good market to sell their skills to implement it, maintain it, or extend it based on user's needs. While you may think that sourcing a project removes your ability to make money from it, you will find that very successful open source projects have good communities built around them for companies that are looking for developers to implement them and use their skills to add additional functionality that could help assist other projects in the future. So, in general, using an online code repository allows you to not only share the code with others but you can crowdsource bug fixing
>
> **[6:15](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/hosting-frameworks?u=76281980&t=375)** and create a business model around other companies, or people using the framework itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (10), [[Version Control]] (5), [[Bitbucket]] (3), [[Git]] (1), [[Jira]] (1)
> **Tools:** github (10), bitbucket (3), jira (1), gitlab (1)
> **CLI Commands:** find (4), make (3), git (1)
> **Exercise Files:** source code (2), github repo (2)
> **Env Vars:** sdk (1), readme (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** note that (1), keep in mind (1)
> **URLs:** [opensource.org](https://opensource.org) (1)

#### [Document a framework](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/document-a-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/document-a-framework?u=76281980&t=1)** - [Instructor] Framework adoption is made or broken based on how well it's documented. If developers don't know how to use your framework, chances are they won't. At a high level, any public API should be documented. C# frameworks use XML-style commenting. This is actually built into Visual Studio itself. Simply type three forward slashes above a class or method you want to comment and an XML template will be generated. Here you can see the My class example from earlier and a summary node has automatically been generated with text inside that says My class. You can add as much text as you want in between the open and closed nodes. When it comes to methods, especially those that return values or accept values, the common template will automatically include those when it gets generated. So here we have a load method and I typed out three forward slashes and Visual Studio automatically created a summary, a return, and the parameter nodes for me. One of the reasons it's important to comment public methods is that the comments in the summary node will show up in the code completion. As an example, here is the load method from before. And as I start typing out load,
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/document-a-framework?u=76281980&t=95)** you'll see that Visual Studio is giving me a summary, which is the text inside of the summary node. The more you document, the more you'll be able to tell others how to use your framework inside of the editor itself. Once the public APIs are documented, you can move on to some of the inner code if this is an open source project or it's being used by others on a team. As I mentioned earlier, it's critical that public APIs are always documented. But if you're working with other developers who need access to the underlying logic, you should document those as well. Documenting code is critical, not just for others using it, but so you can also remind yourself how things work or why you design code in a particular way. I've been working on Pixel Vision 8 for almost two years. There are parts of the framework I haven't touched in months, and if it wasn't for some of the comments, I would be lost as to why I wrote things the way that I did. Another thing that you can do when commenting code is to add task comments. The TODO comment is probably the most common task you'll see in code. Simply type two forward slashes and you can use a space or no space and write the [[Microsoft Word|word]] TODO. Here, you can use a TODO in order to remind yourself about something you need to do later. Visual Studio also accepts TODOs, fix me, hack, and undo.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/document-a-framework?u=76281980&t=193)** You can also define your own types of tasks inside of Visual Studio too. Not only are TODOs helpful, but they also allow you to make notes in the code for fixing things that are incomplete or places you need to return to in order to fix later. You can use Visual Studio's taskbar in order to highlight all the TODOs inside of a particular class or through the entire project itself. I'm constantly using TODOs as a way of reminding myself or others who are looking through the code that something is unfinished and will need my attention later. As I continue to develop, I'll go through Visual Studio's task list and work off some of the TODOs I need to fix in order to keep myself focused on what is still outstanding. The final advice I have for you is to simply document your code while you're writing it. The more you document the code, the easier it'll be for others to use it. To illustrate this, one technique I use is to actually write comments out before I write the code itself. This way, I can go back through each of the comments in the code and write the logic step by step in order to keep track of what I need to do. This helps me work out my ideas and also get a jumpstart on the documentation process. So for the CustomMethod, I'll start with the first comment, hit Return below it and start writing out the code
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/document-a-framework?u=76281980&t=284)** I feel will complete the first step. Now I have the comments in, I've sketched out the logic I need to write, and as I write the logic, I can go back and clean up the comments to reflect the code that I've written.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Tools:** visual studio (7)
> **Env Vars:** todo (3), xml (2), api (1)
> **CLI Commands:** node (3), make (1)
> **Exercise Files:** template (2)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up Github](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=0)** - [Instructor] Now let's take a look at how we can put our framework on [[GitHub]]. For the next few videos, I'm going to be using Visual Studio Code because I find it easier to work with the web files we'll need to create in order to add this to GitHub and to build any automation scripts we may need. I also like to use it because it has a built-in terminal so I can do all of this work in one editor. Let's switch over to GitHub and create a new project. I'm going to name this project oop-adventure-framework. And this'll be the imaginary repo if I was to turn this game into a framework for others to use. We're going to skip all the other settings and just go ahead and create the repository. As you can see, there's nothing in our repository and GitHub is telling us what we need to do in order to add the new repo. Let's go ahead and copy the line that tells us how to add the remote origin. Back in Visual Studio Code, we can paste this line and hit return. Now our local [[Git]] project is connected to the remote project on GitHub. All we need to do is push it and now you can see all of our files have been uploaded and when we go back to GitHub, if we refresh the browser, you'll see that our project is now there. Whenever you create a new project like this, you'll see that it's going to be a little bit bare.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=93)** So why don't we go ahead and add a README file?
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=106)** GitHub uses Markdown in order to let you format the text that you'll be adding to the README file. So now I'm going to paste in some lorem ipsum text to fill out our README file. If you save this, commit it and push it to GitHub and now you'll see that the README file will be displayed when people come to check out your framework. (keys typing)
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=151)** All you need to do is hit refresh. This is why adding a README file to your project is important because anyone who comes to check out your framework can see all the instructions you have for how to download it, how to set it up and any other dependencies they may need in order to get your framework up and running. The other advantage of using GitHub is the issue tracker. You can use this to file bugs and to keep track of work in progress. If you or anyone who's working with your framework clicks New Issue, they'll be able to give it a title, leave a comment and assign it to a person, add a label or assign it to any projects that have been defined inside of the project tab. One thing we can do is create a issues template in order to make it easier for people to submit bugs, ask questions, or even request new features. Let's go back into Visual Studio and create a new folder called .github. This is going to be a hidden folder where we store GitHub-specific files in order for them to display correctly on the website. Let's right click and create a new folder and we're going to call this ISSUE_TEMPLATE.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=238)** Now let's create a new Markdown file. We'll call this bug_report.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=253)** Now I'm going to paste in a template that I use in my own projects. As you can see, we have a name for the template, some information about it, a title if we wanted to pre-populate that, the label it should get attached to and who it should be assigned to. Anything below that will instruct the person what to do in order to file the issue. Let's add this to a repo and push it back to GitHub. (text typing)
>
> **[5:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=301)** Now, back in our repo, if we click on the Issues tab and click New Issue, you'll see that bug report shows at the top instead of just going directly to opening a blank issue. If you click Get Started, you'll now see that some of the fields and the label have been pre-populated and now it's clear for what you expect someone to submit when they file a bug. While we're on the topic of issues, there's another file we can add to our repo to instruct people how to contribute back to the project. At the root of the .github folder, let's create a new Markdown file and we're going to call this contributing.
>
> **[5:53](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=353)** Now, let's paste in some lorem ipsum, save it and push it to GitHub. (text typing)
>
> **[6:14](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=374)** If we go back to our repo, refresh the browser, you'll now see in the helpful resources section, a contributing link, and if we click that, it'll show you the contributing Markdown file you just uploaded. The last thing we should do when asking others to come and contribute to our project is to create a code of conduct. In the root of our .github folder, let's go ahead and create a new Markdown file called CODE_OF_CONDUCT. And let's paste in some lorem ipsum. Again, we'll add this to our repo and push it live. (text typing)
>
> **[7:16](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/setting-up-github?u=76281980&t=436)** Now, if we go back to the root of our project, you'll see in the about section underneath our README that there's a code of conduct. This is very important when you're working with communities in order to lay down the ground rules for how people should interact with each other and everyone understands how you expect them to behave as part of your community. The last thing I want to talk about is the Wiki tab. This is a section where you can add Markdown files that add documentation to your framework. The Wiki is critical for any open source framework in order to give all the documentation and keep it together with the actual project on GitHub itself. Remember, when people try to use a framework for the first time, they're going to go to the closest source of information, and if they're already on the repo, why not send them to the Wiki so that they can get all the documentation they need? There are a lot of other settings that you can tweak inside of GitHub in order to make your framework easier for others to use. We'll talk a little bit more about using actions in the next few videos, but for now, go through, look up what you can do on GitHub, and I hope you take advantage of all the free features that they provide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (18), [[Git]] (1)
> **Tools:** github (18), visual studio (3), terminal (1)
> **Env Vars:** readme (6), issue_template (1), code_of_conduct (1)
> **CLI Commands:** make (2), find (1), git (1)
> **Cross-References:** go back to (3), in the next (1)
> **Documentation:** the readme (2), the documentation (2)
> **Non-Speech:** (text typing) (3), (keys typing) (1)
> **Exercise Files:** template (3)


### 4. Continuous Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [What is CI](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/what-is-ci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/what-is-ci?u=76281980&t=0)** - [Instructor] A [[Continuous Integration (CI)|continuous integration]] system, or CI for short, is a way to automate the building, testing, and deployment of your code. There are several tools to allow you to do this, or you can create your own system from scratch. Since .NET 6 was designed to run across different platforms via the command line it can easily be integrated into any system that can execute shell scripts. The same build commands that you use in the terminal can be triggered externally by a script or a more complex system that automatically runs based on specific events like checking-in code. CI systems help with creating a consistent and reproducible way to publish your code. This can be done when you push to a [[Git]] repo, or it can be triggered by other developers on your team. Integrating continuous integration when you commit your code allows you to trigger tests and validate that the framework functions as expected. A lot of projects on [[GitHub]] that use continuous integration systems will usually have a badge showing you whether their code has passed or failed the automated testing. This ensures anyone that's using the framework that the code that they download is stable and ready to be used. Continuous integration systems also remove the human error when it comes to building DLLs or other compiled executables that your framework produces. You can string several steps together to make more complex build systems as easy as running a single script or stagger each step of the build process to account for compiling other dependent code
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/what-is-ci?u=76281980&t=93)** before the final executable or DLL is created. There are several commercial continuous integration systems available, such as Travis CI, [[Microsoft Azure|Azure]] Pipelines, and you can even use GitHub Actions. If you're looking to build your own custom continuous integration workflows, [[Node.js]] plus gulp is a great solution. You can also use any Node.js libraries that enable the automation of command line arguments that are required to compile your .NET framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (6), [[GitHub]] (2), [[Node.js]] (2), [[Git]] (1), [[Microsoft Azure|Azure]] (1)
> **Tools:** command line (2), github (2), terminal (1)
> **CLI Commands:** node (2), git (1), make (1)
> **Env Vars:** net (2), dll (1)
> **File Paths:** node.js (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)

#### [Custom build scripts](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=0)** - [Instructor] One of the advantages of .NET is that we can use it on the command line. While the majority of your time is probably going to be spent in Visual Studio, you can still trigger each of the build commands via the terminal. Let's take a look at a simple command to publish this object-oriented adventure game. As you can see, I'm using the .NET [[CLI]]. I'm telling it to publish. I'm using an output flag, and I'm going to have it published into a releases default folder. If we hit return, .NET will compile our program and put it into the folder. Let's take a look at what it gave us. We can right-click and go right to the default folder and inside you'll see it created our OOP adventure DLL. And since I'm on a Mac, it automatically created a Mac executable. If you double-click on it, you'll see that it loads our game and we can play our game, just like we would if we ran it inside of Visual Studio. Let's take a look at something a little bit more advanced. If we go back to the command we previously ran and add a target for Mac OS. Set the publish flag to publish a single file and set a flag for it to be self-contained. Then, put it in a new folder. You'll see that we get a single executable for our game.
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=93)** (keyboard clicking)
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=105)** Now, inside of our releases folder, we have a folder called single. Let's go ahead and take a look at what's inside of this folder. And as you can see, we now have a single executable to run our game. Looks like everything still works. One thing to note though, if we take a look at the size of this file, you'll see that it's 64 megs, and that's pretty big for a simple text adventure game. Let's take a look if we can fix that. (keyboard clicking) We can use a new publish flag called trimmed
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=151)** (keyboard clicking) and we'll output it to a trim folder.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=170)** Let's take a look at what .NET compiled. If we now look at the object oriented adventure game and get its info, you'll see now it's 13 megs, which is a little bit more acceptable for a simple text adventure game. While all this makes sense for publishing an app or a game, what if we want to create a framework and share that with others? Previously, I talked about Nuget packages. Well, we can use the .NET CLI to create one of those too. All we need to do is type in dotnet pack and give it an output. We'll output it to the root of our releases folder.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=225)** As you can see, we now have a Nuget package and if we reveal it in the finder, we now have a file that we can upload to Nuget or we can share with others and it makes it easier to install our framework. So now that we've gone through some basic commands, let's take a look at how we can automate this.
>
> **[4:09](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=249)** Since all this is done on the command line, one of my favorite tools to use for automating any command line actions is Node. I have Node installed already and I'm going to show you how to create a very simple Gulp script to automate building your .NET framework. We'll start by initializing an [[npm]] package. I'm going to pass in the Y argument, to accept all the default questions so we can speed up this process. Next, I'm going to install the two packages we need. Let's install Gulp and Gulp Shell.
>
> **[5:02](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=302)** Now, we can go ahead and create a new Gulp file.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=310)** The Gulp files can contain all the [[JavaScript]] we need to automate the build process. Let's go ahead and create a very simple task. (keyboard clicking)
>
> **[5:33](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=333)** We'll start by creating two variables, so we can reference Gulp and Gulp Shell and then we'll build our default task. (keyboard clicking)
>
> **[6:01](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=361)** Now, we can just pass in the same command line argument we used to build our Nuget project. (keyboard clicking)
>
> **[6:19](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=379)** We'll save our file. Let's go ahead and delete the releases folder and run our Gulp script. All we need to do is type in gulp and it'll automatically trigger the default task.
>
> **[6:41](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=401)** As you can see, we now have a Nuget package inside of our releases folder.
>
> **[6:51](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/custom-build-scripts?u=76281980&t=411)** This is just a simple example of what you could do with the .NET CLI, [[Node.js]] and Gulp. Any command line argument that you can use in order to build out a .NET project can be automated and can be used in conjunction with any other Node code or Node packages. Even better, now that you have a build script, all you need to do is share how to run it with others and you can make it easy for any developer that downloads your framework and wants to compile it for the first time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (3), [[npm]] (1), [[JavaScript]] (1), [[Node.js]] (1)
> **Env Vars:** net (8), cli (3), oop (1), dll (1), npm (1)
> **CLI Commands:** node (5), dotnet (1), npm (1), make (1)
> **Tools:** command line (5), visual studio (2), terminal (1)
> **Non-Speech:** (keyboard clicking) (6)
> **Prerequisites:** install (3)
> **UI Navigation:** right-click (1), double-click (1)
> **File Paths:** node.js (1)

#### [Using Github actions](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=0)** - [Instructor] So before we can start using [[GitHub]] Actions, we're going to need to commit our code and push our new build script up to our GitHub repo. But before we do that, we need to clean up a few things. Let's go ahead and delete the package-lock.[[JSON]]. And if we look inside of the package.json, you'll see that since we skipped all of the questions, [[npm]] decided to install every single package it thought we would need. Some of these are going to create problems so let's go ahead and just delete all the ones that we don't need.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=43)** (text typing)
>
> **[0:59](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=59)** We can save this, run npm install
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=67)** and then gulp just to make sure everything still works.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=81)** Looks like everything is good. So let's go ahead, commit our code and push it to our repo. (text typing)
>
> **[1:41](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=101)** Once we add a commit message, we can push it. Let's go back to our project on GitHub. And now you'll see we have the Gulp file as well as the package.json file we'll need to run Node remotely. Let's go into the Actions tab. As you can see, there's already some templates you can use. There's ones for .NET, for Gulp, and for .NET Desktop. We're going to go ahead and create our own from scratch. Action files live inside of the .github/workflows folder. By default, your action will be called Main with a yml extension. GitHub Action files are very picky about the indention and how you format the files. So I'm going to go ahead and write a very simple one that'll create an [[Ubuntu]] instance, check out our code, set up .NET, set up Node, install all of our project's dependencies, run Gulp and upload the NuGet package as an artifact to the final output of our action. Let's get started by giving it a name. (text typing)
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=191)** Next, we're going to set up a trigger. We want this to happen every time we commit code back to our project. (text typing)
>
> **[3:27](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=207)** Next, we're going to need to give this a job, so we'll call this Create Release. (text typing) And we'll also tell it to run on the latest version of Ubuntu. (text typing)
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=246)** Now we need to give it the steps to perform. We're going to start by checking out our code. (text typing)
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=262)** Next, we're going to set up .NET and tell it which version to use. (text typing)
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=293)** Now we can set up Node.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=308)** Then we're going to pass it command line arguments. We're going to tell npm to install, which will go ahead and download all the dependencies on our project. And then we're going to call Gulp in order to run our script. (text typing)
>
> **[5:43](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=343)** Finally, we're going to take the NuGet package that was created and upload it to GitHub as an artifact. We'll take everything that's inside of the releases folder, zip it up, and name it oop-adventure-package. Now, let's go ahead and save our file by committing it. (text typing)
>
> **[6:17](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=377)** Let's go to the Actions tab and see it run. As you can see, we have one workflow running and if we click on it and then click on it again, you'll see all the commands that are running so you can keep track and make sure nothing goes wrong.
>
> **[6:57](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=417)** Looks like all the actions in our workflow ran. So let's go back to the summary. Take a look at the annotations, and as you'll see, at the bottom, we now have an oop-adventure-package. Let's download this and take a look at what's inside.
>
> **[7:27](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/using-github-actions?u=76281980&t=447)** And there you have it. We now have our NuGet package. This is just a small example of what you can do with GitHub Actions in order to build your own [[Continuous Integration (CI)|continuous integration]] system. The advantages of coupling this with Node is that you can do everything local, have it run the way you want, do all your development and then when you're done, simply commit it back to the GitHub repo, and the actions will execute the exact ones that you did locally. You can also take this artifact and attach it as a release, create new tags, or any number of different actions, the building, the automated testing and the publishing of your NuGet package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[JSON]] (3), [[npm]] (3), [[Ubuntu]] (2), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Non-Speech:** (text typing) (10)
> **CLI Commands:** node (4), npm (3), make (2)
> **Tools:** github (8), command line (1)
> **Prerequisites:** set up (5), install (4)
> **Env Vars:** net (4)
> **File Paths:** package.json (2), package-lock.json (1)
> **UI Navigation:** click on (2), go to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Share framework with the community](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework-with-the-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-framework-design-17295804/share-framework-with-the-community?u=76281980&t=0)** - [Instructor] Now that we've taken a look at how to build better C# frameworks it's time for you to review your own code libraries, or look at the [[Object-Oriented Programming (OOP)|object-oriented programming]] adventure game and apply what you've learned. A lot of times I end up reusing the same code from project to project until I realize it would be better to turn it into a code library that's easier to maintain. You also don't know if your code might be able to solve another developer's problem, or help get them started. That's why it's important for you to share your code. So once you're happy with your C# framework, create a build script, upload it to [[GitHub]] and share it with the [[Representational State Transfer (REST)|rest]] of the .net community.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[GitHub]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jesse Freeman]]

## Skills Covered

- Framework Design
- C#

## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
← [[Asynchronous Programming in C-]] | **6 of 6**

## Appears In

- [[C- Excellence- Architecting High-Performance Solutions]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)