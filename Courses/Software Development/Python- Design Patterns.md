---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-design-patterns-24559831
url: "https://www.linkedin.com/learning/python-design-patterns-24559831"
duration_minutes: 150
duration: 2h 30m
level: Intermediate
updated: 3/3/2025
learners: 2149
skills:
  - Python (Programming Language)
  - Design Patterns
exercise_files: true
github: "https://github.com/LinkedInLearning/python-design-patterns-2422610"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGh8swRcFJa6Q/learning-public-crop_675_1200/B4DZUB1jqVGcAY-/0/1739492572584?e=2147483647&amp;v=beta&amp;t=cSXxtUFHGPtSuSN0hyodH3llHMdDdlbJrv3yJ59_FeM"
linkedin_topic: Software Development
learning_paths:
  - '[Advance Your Skills in Python](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20Python.md)'
prev_courses:
  - '[Hands-On Introduction- Python](Hands-On%20Introduction-%20Python.md)'
next_courses:
  - '[Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md)'
path_nav: '[{"path":"Advance Your Skills in Python","position":2,"total":7,"prev":"Hands-On Introduction- Python","next":"Python Data Structures and Algorithms"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/design-patterns
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python-%20Design%20Patterns.md)

![Python: Design Patterns](https://media.licdn.com/dms/image/v2/D4D0DAQGh8swRcFJa6Q/learning-public-crop_675_1200/B4DZUB1jqVGcAY-/0/1739492572584?e=2147483647&amp;v=beta&amp;t=cSXxtUFHGPtSuSN0hyodH3llHMdDdlbJrv3yJ59_FeM)

# Python: Design Patterns

> Explore the world of Python design patterns and learn how to implement them to save time. Instructor Jungwoo Ryoo introduces 15 essential creational, structural, and behavioral patterns to help you solve common coding challenges, while introducing best practices that will keep your solutions consistent, complete, and correct. Learn how to use these patterns to structure your code more efficiently 

> [LinkedIn Learning](https://www.linkedin.com/learning/python-design-patterns-24559831) | 2h 30m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Explore design patterns](#explore-design-patterns)
  - [What you should know](#what-you-should-know)
  - [CoderPad placeholder video](#coderpad-placeholder-video)
- [**1. Understanding Design Patterns**](#1-understanding-design-patterns) (6 videos)
  - [What is a design pattern?](#what-is-a-design-pattern)
  - [Types of design patterns](#types-of-design-patterns)
  - [Understanding object-oriented programming](#understanding-object-oriented-programming)
  - [Working with inheritance and polymorphism](#working-with-inheritance-and-polymorphism)
  - [Understanding pattern context](#understanding-pattern-context)
  - [Working with pattern language](#working-with-pattern-language)
- [**2. Creational Patterns**](#2-creational-patterns) (12 videos)
  - [Factory](#factory)
  - [Factory example](#factory-example)
  - [Solution: Factory](#solution-factory)
  - [Abstract Factory](#abstract-factory)
  - [Abstract Factory example](#abstract-factory-example)
  - [Singleton](#singleton)
  - [Singleton example](#singleton-example)
  - [Solution: Singleton](#solution-singleton)
  - [Builder](#builder)
  - [Builder example](#builder-example)
  - [Prototype](#prototype)
  - [Prototype example](#prototype-example)
- [**3. Structural Patterns**](#3-structural-patterns) (12 videos)
  - [Decorator](#decorator)
  - [Decorator example](#decorator-example)
  - [Solution: Decorator](#solution-decorator)
  - [Proxy](#proxy)
  - [Proxy example](#proxy-example)
  - [Adapter](#adapter)
  - [Adapter example](#adapter-example)
  - [Composite](#composite)
  - [Composite example](#composite-example)
  - [Solution: Composite](#solution-composite)
  - [Bridge](#bridge)
  - [Bridge example](#bridge-example)
- [**4. Behavioral Patterns**](#4-behavioral-patterns) (12 videos)
  - [Observer](#observer)
  - [Observer example](#observer-example)
  - [Solution: Observer](#solution-observer)
  - [Visitor](#visitor)
  - [Visitor Example](#visitor-example)
  - [Iterator](#iterator)
  - [Iterator example](#iterator-example)
  - [Strategy](#strategy)
  - [Strategy Example](#strategy-example)
  - [Solution: Strategy](#solution-strategy)
  - [Chain of Responsibility](#chain-of-responsibility)
  - [Chain of Responsibility example](#chain-of-responsibility-example)
- [**5. Design Best Practices**](#5-design-best-practices) (2 videos)
  - [Consistency](#consistency)
  - [Programmer's mindset](#programmers-mindset)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore design patterns](https://www.linkedin.com/learning/python-design-patterns-24559831/explore-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/explore-design-patterns?u=76281980&t=0)** - Reuse is critical to saving time and adopting the best solution available in software engineering. Luckily, we have a strong community of like-minded people who actively share the knowledge and wisdom gained from many years of experience through [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). Hi, I'm Jungwoo Ryoo. After my real life experience as a soft engineer, I have taught software engineering since 2005 as a college professor. There are many fascinating [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) specific shortcuts in implementing design patterns, and I'm excited to share these trade secrets with you. Now, let's get started with Python design patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Speakers:** - reuse (1)

#### [What you should know](https://www.linkedin.com/learning/python-design-patterns-24559831/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/what-you-should-know?u=76281980&t=0)** - This course is not about teaching you how to be up and running with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) as a beginner. However, even if you're new to Python, you should be able to follow along and run the Python scripts I provide without a problem. If you know the basics well, that will be the best-case scenario for jumping into this course. I provide code templates I begin with for each lecture, therefore, you can code with me while I explain how the code works and complete the initial script. The completed scripts are also available. All you need on your computer is a Python interpreter, which you can download for free. You can edit your code using any editor you like. I'm using Sublime Text, which you can download for free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4)
> **Tools:** sublime (1)
> **Definitions:** is a  (1)
> **Speakers:** - this (1)

#### [CoderPad placeholder video](https://www.linkedin.com/learning/python-design-patterns-24559831/coderpad-placeholder-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/coderpad-placeholder-video?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas: instructions in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and a console for output in the bottom left. You can use these drag handles to allocate space as you like. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description of the challenge
>
> **[1:34](https://www.linkedin.com/learning/python-design-patterns-24559831/coderpad-placeholder-video?u=76281980&t=94)** and the challenge's parameters and desired result. Parameters are values that will be passed into your code, and they have to be of a particular type. The return value also has to be of a particular type, and you'll also see that noted in the instructions. The constraints section has useful information about the parameters that will be passed in. The examples show different parameter values and what result would be returned for each of those test cases. Create your answer in the top-right code editor. There are comments in the starting code showing where to put your solution. When you click Test My Code, you'll see a message indicating whether your code returned a correct result. If your code isn't successful, you can ask for help. The show_expected_result and show_hints variables determine whether you see the expected result and any hints. Change them to a value of True to control the output.
>
> **[3:12](https://www.linkedin.com/learning/python-design-patterns-24559831/coderpad-placeholder-video?u=76281980&t=192)** The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases. The expected value to be returned is the biggest number in the list here, which is 19. But the code keeps returning zero. So the expected answer here is, max, parenthesis, numbers.
>
> **[3:52](https://www.linkedin.com/learning/python-design-patterns-24559831/coderpad-placeholder-video?u=76281980&t=232)** We should be getting 19 as our correct answer. Click Test My Code. And we got our answer. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all the text. When you have finished each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** show_expected_result (1), show_hints (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Design Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a design pattern?](https://www.linkedin.com/learning/python-design-patterns-24559831/what-is-a-design-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/what-is-a-design-pattern?u=76281980&t=0)** - [Narrator] When developing software, you'll often observe the same problem occurring over and over again. These common problems imply that there may already be established solutions. [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) are well-known solutions to recurring problems. These are widely accepted solutions by the [Software Development](../../Topics/Software%20Development.md) community. Why do we use design patterns instead of individualized solutions? Here are some excellent reasons. First, there's no need to reinvent the wheel and waste your time when there's already a perfect solution for you out there. Second, design patterns allow us to reuse design ideas and encourage us to use the best practices, lowering the cost and promoting the higher quality of the software you're developing. Let's have a brief history lesson on design patterns. The creator of this concept, design pattern, is Christopher Alexander, a building architect who has little to do with software development. The software development community then picked up the design pattern idea. Gamma and his colleagues, also known as the Gang of four, immortalized it in their famous book called "Design Patterns." Here are some essential characteristics of design patterns
>
> **[1:35](https://www.linkedin.com/learning/python-design-patterns-24559831/what-is-a-design-pattern?u=76281980&t=95)** you should know. First, design patterns are language neutral. You could use them in any [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) language. Second, design patterns are dynamic because there are always new ones coming up. You could also be revising the existing design patterns if there is a need. Finally, design patterns are intentionally incomplete to promote customization. These days, professional software developers must master design patterns because these patterns are becoming a core vocabulary when discussing design decisions for a software application among seasoned software developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (11), [Software Development](../../Topics/Software%20Development.md) (3), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [narrator] (1)

#### [Types of design patterns](https://www.linkedin.com/learning/python-design-patterns-24559831/types-of-design-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/types-of-design-patterns?u=76281980&t=0)** - [Instructor] There are three different types of [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). One is creational, the other is structural, and another is behavioral. We use creational design patterns to build objects systematically. The main benefit behind creational patterns lies in their flexibility. For example, different subtypes of objects from the same class can be created at runtime when you use creational patterns. We use structural patterns to establish relationships between software components, in particular, settings or configurations. The goal here is to satisfy specific functional or non-functional requirements. Functional requirements refer to what software does. Non-functional requirements are how well it completes its job. The question of how fast or slow software functions belongs to the non-functional domain. Different requirements lead to various structures implemented in structural patterns. Behavioral patterns are the best practices of how you make your objects interact with each other. The focus here is defining the protocols between these objects when trying to work together
>
> **[1:37](https://www.linkedin.com/learning/python-design-patterns-24559831/types-of-design-patterns?u=76281980&t=97)** to accomplish a common goal. Some core object-oriented mechanisms or concepts are foundations for developing design patterns, whether creational, structural, or behavioral. In the creational patterns, polymorphism is often in use. Structural patterns take advantage of inheritance a lot. Behavioral patterns heavily use methods and their signatures. Interfaces are at work across all these different types of design patterns. I'll explain each of these concepts in dedicated lessons. Knowing the design pattern types is helpful because it allows you to locate the design patterns you need quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (5)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understanding object-oriented programming](https://www.linkedin.com/learning/python-design-patterns-24559831/understanding-object-oriented-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/understanding-object-oriented-programming?u=76281980&t=0)** - [Instructor] [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) is a mainstream [Software Development](../../Topics/Software%20Development.md) methodology today. Many modern programming languages support object-oriented programming, including [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) require the use of object-oriented programming, therefore design patterns are almost irrelevant to the non-object-oriented programming languages, such as C. Understanding the core concepts of object-oriented programming involves learning concepts such as objects and classes. Objects represent entities in both problem and solution domains. In other words, when you're building a piece of software, you need to have components representing all the moving pieces of your solution. In addition, you need to represent all these entities interacting with the software in the problem domain. Take a conference registration system. In this scenario, you can think of the conference participants as being in the problem domain. The registration form the participants are using is in the solution domain. You need both represented in your software. Classes are templates used to create objects to avoid making them from scratch every time you need them. Think of classes as cookie cutters
>
> **[1:36](https://www.linkedin.com/learning/python-design-patterns-24559831/understanding-object-oriented-programming?u=76281980&t=96)** for replicating the objects. Classes define objects in terms of attributes and behaviors. Attributes represent the properties of an entity. Attributes also capture the current state of the entity. On the other hand, methods represent the behaviors of an entity. Let's go back and think about our registration system example one more time. In such a system, participants have attributes such as age, while they also have behaviors such as canceling the registration. Understanding the concepts like classes and objects is critical in object-oriented programming. I'd like you to revisit this topic and invest more time in learning them if you're unclear about what they truly mean.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (6), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** such as (4)
> **CLI Commands:** python (1)
> **Definitions:** in other words (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Working with inheritance and polymorphism](https://www.linkedin.com/learning/python-design-patterns-24559831/working-with-inheritance-and-polymorphism?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/working-with-inheritance-and-polymorphism?u=76281980&t=0)** - [Instructor] There are some additional key concepts to master in [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md). We'll get started with inheritance. Inheritance establishes relationships between classes as parent and child. The child class keeps all the attributes and methods of its parent. It can also add new attributes or methods of its own to the parent class definition. The child class can also override the existing methods of its parent. Let's say that we have a pet class with two child classes, Dog and Cat. These child classes share a common attribute, the name they're inheriting from their parent class, pet. However, the child classes override the speak method in their definition. The dog class overrides its speak method to produce the barking sound, while the cat class overrides the same method to create the meow sound. Another object-oriented class concept important to understand is polymorphism. Polymorphism relies on inheritance and it allows us to instantiate a child class and treat it as the same type as its parent.
>
> **[1:36](https://www.linkedin.com/learning/python-design-patterns-24559831/working-with-inheritance-and-polymorphism?u=76281980&t=96)** In other words, polymorphism enables a parent class to be a placeholder for its child classes. Let's say that you're coding the pet class and you want to let users choose if their pet object will be dog or cat during runtime. This situation warrants using polymorphism. If the object is a dog, it'll be making the woof sound. The object will be producing the meow sound if it happens to be a cat object. All the [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) we cover in this course fully take advantage of the core object-oriented programming concepts. Therefore, it's a must for you to understand what classes, objects, inheritance and polymorphism are before moving on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** cat (4)
> **Definitions:** in other words (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding pattern context](https://www.linkedin.com/learning/python-design-patterns-24559831/understanding-pattern-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/understanding-pattern-context?u=76281980&t=0)** - [Instructor] To use [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) effectively, you need to know the context in which the design patterns work best. Let's start by learning how to describe the design pattern context. A pattern context consists of the following: participants, quality attributes, forces, and consequences. Participants refer to the classes involved to form a design pattern. They play different roles to accomplish the goals of the design pattern. Quality attributes refer to non-functional requirements such as usability, modifiability, reliability, performance, and so on. Quality attributes have an impact on the entire software, and architectural solutions address them. Forces are various factors or trade-offs you consider when trying to adopt a particular design pattern. Quality attributes manifest forces. If you don't reason about these forces very well, you're likely to end up facing some unintended consequences. These consequences could be worse performance when you're trying to use one of the design patterns
>
> **[1:33](https://www.linkedin.com/learning/python-design-patterns-24559831/understanding-pattern-context?u=76281980&t=93)** introduced in this course. The ultimate responsibility really falls on the decision-makers who are expected to choose a design pattern after thoroughly considering its consequences. Knowing when to use a design pattern and when not to use it is crucial, especially because they can cause more problems than solving them when they're misused.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with pattern language](https://www.linkedin.com/learning/python-design-patterns-24559831/working-with-pattern-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/working-with-pattern-language?u=76281980&t=0)** - [Tutor] The process of mastering terms used to describe [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) is like learning a new language. Therefore, we can safely say that these terms constitute a pattern language. The pattern language consists of name, context, problem, solution, and related patterns. The names of patterns should capture the gist of each pattern, and these names become an essential part of a vocabulary during a design process. Therefore, pattern names need to be especially meaningful and memorable. The context provides a scenario in which we may use these patterns. It also offers more insights on when to use the pattern. The problem part of the pattern language describes the design challenge a pattern is trying to address. And the solution part of the pattern language specifies the pattern itself. Patterns are specified in terms of their structures and behaviors. The structure in this case specifies the relationships between the elements used in a pattern. The behaviors specify all the interactions between the pattern elements.
>
> **[1:34](https://www.linkedin.com/learning/python-design-patterns-24559831/working-with-pattern-language?u=76281980&t=94)** The last part of the pattern language is related patterns. These list other patterns used together with the pattern being described or similar patterns. In these related patterns, sections of the pattern language, it's crucial to precisely describe the subtle differences between the patterns. That's it. This sums up my explanation of a typical pattern language. We'll be using the same pattern language to describe the patterns in this course. Once you get a handle on the pattern language you should also be able to define a pattern of your own creation if necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Speakers:** - [tutor] (1)


### 2. Creational Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Factory](https://www.linkedin.com/learning/python-design-patterns-24559831/factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/factory?u=76281980&t=0)** - [Narrator] Factory encapsulates object creation. That is factory is an object specializing in creating other objects. The factory pattern is useful, especially when you're not sure about what type of objects you'll be needing eventually in your system. Another possibility is that your application needs to decide on what class to use at runtime. Here is a scenario we'll be using in our coding exercise. Your pet shop was only selling dogs, but now, you need to sell cats too. Therefore, your system needs to be able to handle cats as well as dogs. It's supposed to show how each of the pets you sell speaks.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### [Factory example](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=0)** - [Instructor] Here, I just defined my dog class. The dog class, whenever created, calls the init method, setting the name of the dog. It also has a method called speak that returns a string woof. Now, let's create a new method called get_pet. Type def space get_pet, open parentheses,
>
> **[0:40](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=40)** we're passing a key to indicate the pet we want. The default key is dog, so, type pet="dog" and don't forget the colon.
>
> **[0:58](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=58)** Let's define this function by adding some internal documentation first. Since this is our factory method we'll be using to create our object, we'll say The Factory Method. In the factory method, the mission is to create objects and return them to their user. We'll be storing those objects being created into a dictionary data structure called pets. That's why we use the keyword dict. So, type pets equal sign dict, D-I-C-T, open parentheses.
>
> **[1:44](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=104)** For now, we'll store one object instantiated from the dog class. So, type dog, which is the key for the dictionary. Then, a dog object instantiated by calling the dog class constructor like this, equal sign dog class, open parentheses. Every time, we instantiate a dog object, we have to provide its name. In this case, the name is Hope. We'll be returning whatever object needed out of the dictionary object. Therefore, return pets, but not the actual dictionary object, but an item stored in the dictionary object indicated by the pet key value, P-E-T. We've just provided the key, which is stored in the pet variable. Therefore, this will return an object that was stored in the dictionary object and also identified by the key provided. Now, we're done with our factory method. Now, let's imagine a situation in which you have to provide a new object instantiated from a new class called cat. Since we already have this get_pet method,
>
> **[3:22](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=202)** adding a new class is not a problem. All you have to do is to create a new class. Select the whole dog class definition and we'll just copy and paste. We'll call it cat this time, so, it's a simple cat class. Then, in addition to changing the name of the class, we'll also return a different value when it comes to the speak method. We'll use meow, because it's a cat. Now, all you have to do is add a new instance of the cat in the dictionary object. By the way, the indentation of our get_pet method needs to be corrected. Because this is not part of the class. The key is cat, C-A-T, equal sign, we're instantiating a cat object from this cat class, C-A-T, open parentheses. We have to provide the name of the cat, which is Peace. Don't forget the double quotation marks. As you can see, adding a new class cat is not a problem at all. Because all you really have to do is adding this new object instantiated
>
> **[4:57](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=297)** from the cat class into the dictionary object. Now, let's see if this works. Let's invoke the get_pet method. First, I'll try to retrieve a dog object, which is why I'm using the dog key. I'm storing the dog object in this variable d = get_pet() and then the key is dog.
>
> **[5:32](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=332)** Just to test it, we'll print what the dog says. Type print, open parentheses and then type d.speak.
>
> **[5:46](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=346)** This will be invoking the speak method of the dog object. Let's see if this works. Go to tools, click on build. It does work. Now, let's see if the cat object can be instantiated from the cat class. Type c = get_pet. Now, instead of getting a dog, we are getting a cat. That's why I'm using the key cat. Now, let's test it. All we have to do is print what the cat says. Just type print(c.speak()). Let's run the program. Go to tools and build. The script works. One thing I'd like to mention here, is that since we have this get_pet method, which is our factory method, the addition of new pet types, such as cat is really, really easy. And as the user of this get_pet method, or the factory method, you don't really see what's going on in terms of all these new types of objects being added. That's what is nice about the use of the factory pattern. The way the factory pattern is implemented here,
>
> **[7:23](https://www.linkedin.com/learning/python-design-patterns-24559831/factory-example?u=76281980&t=443)** is slightly different from the factory method in a typical [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) language. Because we are trying to fully take advantage of all the built-in features of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** cat (17), python (1)
> **Code Identifiers:** get_pet (9)
> **UI Navigation:** go to (2), select the (1), click on (1)
> **Best Practices:** don't forget (2), the key is (2)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Factory](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=0)** - [Instructor] So how did it go? Did you figure out the code challenge? You may have noticed that I left out the entire pig class code. Let's copy the cat class code and paste it here.
>
> **[0:22](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=22)** Ctrl + C Ctrl + V. Change cat to pig here (keyboard clicks) and here. (keyboard clicks) The sound is Oink. (keyboard clicks)
>
> **[1:08](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=68)** Now let's add a pig object to the dictionary. Type comma, pig = Pig("Love").
>
> **[1:30](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=90)** So that's the pig's name. Since we want to return a pig object, replace the unknown Pet object with the get_pet method.
>
> **[1:50](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=110)** Type get_pet, open parentheses, close parentheses.
>
> **[2:01](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=121)** And then the key is pig, so type pet = "pig".
>
> **[2:15](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-factory?u=76281980&t=135)** That's it, let's test the code by clicking on Test my code. The code works beautifully. If you didn't get this first try, give it another go. What's essential is your understanding of how the code flows and works.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (2)
> **Code Identifiers:** get_pet (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Abstract Factory](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory?u=76281980&t=0)** - [Narrator] As its name suggests, abstract factory builds on the factory pattern. Abstract factory is useful when its user expects to receive a family of related objects at a given time, but doesn't have to know which family it is until runtime. Here is the scenario we'll be using. We'll first build a pet factory whose concrete factories include dog factory and cat factory. Both dog and cat factories produce dogs and cats as well as related [products](../../Skills/Software%20Development/Microsoft%20Products.md) such as dog food and cat food. In theory, our solution abstract factory consists of abstract factory, concrete factory, abstract product, and concrete product. For the abstract factory, we use pet factory. For concrete factory, we use dog factory and cat factory. And finally, for the concrete products, we'll be creating dogs, the type of pet and dog food, and also cats and cat food. We implement our abstract factory without using inheritance because [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is a dynamically typed language and therefore does not require abstract classes. Abstract factory is related to the factory pattern
>
> **[1:37](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory?u=76281980&t=97)** in a sense that it creates objects. Concrete factories are often singletons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** cat (5), python (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Abstract Factory example](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980&t=0)** - [Instructor] We'll start with the Dog object that our concrete factory will return. Let's first define the Dog class to instantiate the Dog object. It has our favorite speak method. Next is the DogFactory, and this is our concrete factory that returns two objects. The first object we're returning is a Dog object, and the second one is a Dog Food object. Let's add some internal documentation by saying here, returns Dog object, returns a Dog Food object.
>
> **[0:55](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980&t=55)** Now let's complete this code by typing return, the name of the class Dog, and parenthesis, and then we'll be returning the Dog Food string object. Type return, double quotes, Dog Food. Please note that our concrete [products](../../Skills/Software%20Development/Microsoft%20Products.md) are the Dog object and Dog Food. Unlike the factory pattern that creates one object, our DogFactory produces a group of two related items, Dog and Dog Food, in the context of the abstract factory pattern. The next class is the PetStore class that will act as our abstract factory. The first attribute of the PetStore class is _pet_factory. Type self._pet_factory.
>
> **[2:07](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980&t=127)** The concrete factory class we're talking about in this example is the DogFactory. Let's initialize the _pet_factory attribute, space, assignment, pet_factory. The pet_factory is the argument we are getting from the init method, which is a concrete pet factory. That's all we need to do to store an instance of the Dog concrete factory class. Next is adding a utility method that will display all the details of the objects returned by the DogFactory, our concrete factory. We'll need a variable pet, and we'll be storing a Pet object. Type equal sign, space, self._pet_factory.get_pet,
>
> **[3:21](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980&t=201)** and parenthesis. The get_pet method allows us to get our pet. We'll also get pet food. Type pet_food, assignment, space, self._pet_factory.get_food,
>
> **[3:52](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980&t=232)** and parentheses, since you're getting pet food. Now our utility method show_pet is complete, because we already have all the necessary print statements here, which will be printing all the details. Let's move on to the part where we're using all these classes we just defined. First, we'll be instantiating our concrete factory to be used by our abstract factory. That's why we type factory, our variable, space, assignment, space, and create our concrete factory DogFactory. So type DogFactory, parentheses. Next we'll be creating a PetStore, our abstract factory, type shop, space, assignment, space, and PetStore, parentheses. The PetStore class is getting a concrete factory object as an argument here. So type factory here. Once we have our PetStore object, we can invoke its utility method, show_pet, and that's all there's to it.
>
> **[5:24](https://www.linkedin.com/learning/python-design-patterns-24559831/abstract-factory-example?u=76281980&t=324)** So type shop.show_pet, parentheses. Let's run the code and see what happens. Go to Tools, click on Build. And as you can see, the code worked beautifully. Adding another concrete factory such as a cat factory is easy and elegant, which is one of the benefits of using the abstract factory pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Code Identifiers:** show_pet (3), pet_factory (2), get_pet (2), pet_food (1), get_food (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** cat (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Singleton](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton?u=76281980&t=0)** - [Presenter] According to the Gang of Four definition, singleton is the pattern you need when you want to allow only one object to be created from a class. It's an object-oriented way of providing global variables. A similar concept called Borg exists in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) community. Unlike singleton, Borg allows multiple object instances, but they all share the same state, which means the same attribute values in the objects. Borg is a short for Cyborg, prominently featured in the "Star Trek" series. They share collective thoughts like objects in the Python Borg pattern. Why would you need a pattern like singleton or Borg? Let's say that there is a need for keeping a cache of information to be shared by various elements of your software system. By keeping this information in a single object like singleton or sharing it constantly in Borg objects, there's no need to retrieve the information from its original sources each time. All modules in Python act as singletons. In our scenario, Borg acts as an information cache for networking acronyms
>
> **[1:36](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton?u=76281980&t=96)** and their spelled-out versions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2), short for (1)
> **Speakers:** - [presenter] (1)

#### [Singleton example](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=0)** - [Instructor] To implement the Singleton pattern, we use this Borg class, that makes its attributes global. Let's see how we can make our class attributes global. First, we'll be declaring an attribute that is a dictionary. Type _shared_data, and then we'll make it a dictionary, so equal sign, space, squiggly brackets. Then we'll use this user-defined dictionary data structure to initialize the attribute of the class. Type def __init__(self):.
>
> **[1:01](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=61)** Now type self.__dict__,
>
> **[1:11](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=71)** space, assignment, space, self._shared_data. This arrangement makes the _shared_data our attribute dictionary. Once we define our Borg class, we can inherit from it by putting Borg right here as an argument for the Singleton class constructor. By inheriting from the Borg class, the Singleton class can share the attributes among all its various instances. Whenever we create an instance of the Borg class, it will share the same set of attributes in the dictionary. This setup essentially makes the Borg object an object oriented form of global variables. Our example, Borg object here, is to maintain a dictionary of acronyms. Type def __init__(self, **kwargs):
>
> **[2:38](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=158)** Borg.__init__(self).
>
> **[2:47](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=167)** Now type self._shared_data.update(kwargs).
>
> **[3:01](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=181)** What we're doing here is to use the argument of the init method to accept a dictionary item and then update our attribute dictionary with a newly provided dictionary item. Essentially, we're keeping our dictionary of acronyms every time a new object gets created. The last method is returning the attribute dictionary for printing when the print function is used. Type def __str__(self): return str(self._shared_data).
>
> **[4:01](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=241)** So this returns the attribute dictionary for printing.
>
> **[4:11](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=251)** Let's test our Singleton class by first creating a Singleton object and adding our first acronym. Type x, our variable, space, assignment, space, and we'll create a Singleton object to contain its first acronym. Type Singleton(HTTP = "Hyper Text Transfer Protocol").
>
> **[4:51](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=291)** Note that HTTP is our key. The equal sign associates the key with the string value: Hyper Text Transfer Protocol. Next, we'll print the object. Type print x, print(x). Let's run the program and see what happens. Go to Tools, click on Build. It works. The output shows the content of the Borg attribute dictionary, which is a key and value pair of our acronym and its spelled out version. Let's see what happens when we try to create the second Singleton object and add another acronym. We use variable y, space, equal sign, space, Singleton, parentheses. The acronym is SNMP, space, equal sign, double quotes, "Simple Network Management Protocol".
>
> **[6:14](https://www.linkedin.com/learning/python-design-patterns-24559831/singleton-example?u=76281980&t=374)** We're using the same attribute dictionary and adding a new item to it. What's going to happen is that the attribute dictionary will retain the previous acronym and then add this new acronym to itself. Let's print it and see the result. Type print(y). Let's run the script. Go to Tools, Build. As you can see, the second Borg object kept HTTP and its spelled out version, Hyper Text Transfer Protocol, and it added the new acronym definition pair, SNMP, Simple Network Management Protocol. The way we implement Singleton here is different from its classic version, but [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s way still does the job, maybe even better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** http (3), snmp (2)
> **CLI Commands:** make (2), python (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Singleton](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-singleton?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-singleton?u=76281980&t=0)** - [Instructor] How was your coding? Was it more challenging than you thought? As instructed, let's create our first singleton object. Type s1, space. Assignment, space, Singleton. Parentheses. The key value pair to go in between the parentheses is this.
>
> **[0:42](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-singleton?u=76281980&t=42)** Let's copy it. And paste it. UX equal sign [User Experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Let's create the second singleton object. Type s2 equal sign. Singleton. Parenthesis. This time the acronym definition pair is API equal sign, Application Programming Interface. So let's copy this, Ctrl + C. And then put it in between the parentheses, Ctrl + V.
>
> **[1:43](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-singleton?u=76281980&t=103)** Here, we want to return a singleton object. Because the object is a singleton, it doesn't matter which one we return. Let's return s1. Let's test the code by clicking Test My Code.
>
> **[2:09](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-singleton?u=76281980&t=129)** It produces the correct result and shows all the acronym definition pairs we have entered. We did it again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Builder](https://www.linkedin.com/learning/python-design-patterns-24559831/builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/builder?u=76281980&t=0)** - [Instructor] Builder is a solution to an anti-pattern called telescoping constructor. An anti-pattern is the opposite of the best programming practice and what we want to avoid. The telescoping constructor anti-pattern occurs when a software developer attempts to build a complex object using an excessive number of constructors. The Builder pattern is trying to solve this problem. Think of a scenario in which you're trying to build a car. This test requires various car parts to be first constructed individually and then assembled. The Builder pattern brings order to this chaotic process to remove unnecessary complexity as much as possible. It partitions the process of building a complex object into four different roles. The first role is the Director in charge of actually building a product. The second role provides all the necessary interfaces required in building an object. We call this one an Abstract Builder because there'll be a Concrete Builder inheriting from it. The Concrete Builder class inherits from the Abstract Builder class and actually implements the details of the interfaces of the Abstract Builder class for the specific type of a product.
>
> **[1:36](https://www.linkedin.com/learning/python-design-patterns-24559831/builder?u=76281980&t=96)** The Product role represents an object being built. The Builder pattern does not rely on polymorphism, unlike Factory and Abstract Factory. The focus of the Builder Pattern is instead on reducing the complexity of building an elaborate object through a divide-and-conquer strategy.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), we call this (1)
> **Speakers:** - [instructor] (1)

#### [Builder example](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=0)** - [Instructor] In this exercise, our goal is to build a car object and print its details. We'll do so by using the builder patterns, various participants, including director, abstract builder, concrete builder, and the object being built. The abstract builder class, called builder here, creates a car object and keep it as its attribute. The concrete builder class, called Skylark builder, inherits from the abstract builder class and provides methods to be used by the director class. Let's add one more method to the concrete builder class, which is the add_engine method. So type def add_engine, parentheses, self, colon,
>
> **[1:13](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=73)** type self.car.engine, and set it to "Turbo Engine."
>
> **[1:24](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=84)** The next part is to go back to the director class and complete the definition of the construct_car method. The director object is what actually builds a car. Let's create a new car object to get started. Type self._builder. This attribute is where the concrete builder object is stored, therefore type.create_new_car, parentheses.
>
> **[2:07](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=127)** Then we'll add the model by typing self._builder.add_model, parentheses.
>
> **[2:24](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=144)** The model name is Skylark. We'll be adding the tires next. Type self._builder.add_tires, parentheses.
>
> **[2:42](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=162)** Finally, we'll be adding the engine, self._builder.add_engine.
>
> **[2:56](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=176)** The director class will be returning a completed car through the get_car method. Let's finish the method by typing return, space, self._builder.car.
>
> **[3:20](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=200)** We just finished creating all the classes/parts necessary to assemble our car object. Let's go ahead and build it next. To allow the director to orchestrate the process of building a car, let's create a concrete builder first here. Type builder, assignment, and then the name of the concrete builder is Skylark builder. SkyLarkBuilder, parentheses. The director then takes the concrete builder and puts it to work. Type director, assignment. The variable director will hold the director object. The director object will, in turn, take the builder as its argument, so type director, parentheses. The argument is builder. Now, we can construct our car by invoking the construct_car method. Type director.construct_car, parentheses.
>
> **[4:43](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=283)** Finally, the director gets a reference to the car object by invoking the get_car method. Type car, space, assignment, director.get_car,
>
> **[5:05](https://www.linkedin.com/learning/python-design-patterns-24559831/builder-example?u=76281980&t=305)** Whatever we're getting from this method, get_car, we're putting it in the car variable. Now, we're ready to print the car object. Type print, parentheses, car. Let's test it. Go to tools and then click on build, and it works. The builder pattern separates a class from the process of building complex objects. This way, it makes creating similar objects that require the same steps more efficient and elegant. Let's say that you want to build a Mustang instead of Skylark. All you have to do is add another concrete builder for Mustang.

> [!info]- Semantic Content
>
> **Code Identifiers:** get_car (4), add_engine (3), construct_car (3), create_new_car (1), add_model (1)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Prototype](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype?u=76281980&t=0)** - [Narrator] Prototype clones objects according to a prototypical instance. Here the keyword is cloning. Note that we're talking about making a copy instead of building. Prototype is useful when instantiating many identical objects individually, which could be expensive in terms of computing power. Cloning could be a good alternative because it makes a carbon copy in the memory space instead of building individual objects respectively from scratch the usual way. Let's assume that we are building a car. We can mass produce cars more easily and quickly if the cars have the same color and options. Similarly, in our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming scenario, you can clone the objects by making a copy of a prototype object instead of building them through constructors as long as they're supposed to be identical without variations. Our solution consists of creating a prototypical instance first and then cloning it whenever you need a replica. The pattern related to the prototype pattern is the abstract factory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Prototype example](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=0)** - [Instructor] The prototype class has four different methods, and we'll start with an in __init__ method. In the __init__ method, all we are doing is creating a dictionary object. The dictionary object will contain the objects to be cloned. Let's create the dictionary object by typing self._objects = {}.
>
> **[0:38](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=38)** The second method is register_object. This method takes two arguments. The first one is the name. The second one is the object to be cloned. The name will be used as a key when storing an object in the dictionary object. Our next step is to store the object we're receiving as an item into the dictionary object. Type self._objects. This is our dictionary. Our key will be name. And using this key, we'll store the object to be cloned, which is obj. Next is the unregister_object method, and this method will delete objects from the dictionary object. Let's delete the object by using the del keyword. Type del self._objects.
>
> **[2:02](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=122)** We want to delete a particular object using its key, in this case name. Let's move on to the final method, clone, which is the most important method. This method clones the prototypical object. Type obj. This is where our copied object will be stored. We copy it by using the deep copy method, = copy.deepcopy.
>
> **[2:43](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=163)** The prototypical object is already stored in our dictionary object. We reference it by saying self._objects,
>
> **[2:57](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=177)** and then we need to get the object by using its key name, so .get(name).
>
> **[3:09](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=189)** This is perfectly fine when you don't have to change anything in the object being cloned, but if you want to change some attributes of the object you're cloning, then it's nice to have a way to update the attributes, which is what obj.__dict__ refers to
>
> **[3:39](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=219)** like this obj.__dict__
>
> **[3:50](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=230)** will update the object based on the attribute dictionary object you're receiving as an optional argument. That's why we type update(attr) here.
>
> **[4:08](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=248)** Lastly, we're returning the object we just replicated. Return obj. Now the definition of our prototype class is complete. Let's move on to defining the prototypical object we'll be cloning. In this case, we'll be cloning a car object, therefore, we have to define the class for the car object. We initialize each car object using these attributes and their default values. For example, the name will be Skylark. The color will be red. The option is ex. This method will return the attributes of the object as strings for printing. Now, let's actually clone the prototype class we just created. Let's instantiate the car class first and put it in a variable c. c = Car, this is the prototypical object to be cloned. Next, we'll create an instance of the prototype class. Type prototype, which will be our variable, and then we create the prototype object
>
> **[5:46](https://www.linkedin.com/learning/python-design-patterns-24559831/prototype-example?u=76281980&t=346)** out of the prototype class. So = Prototype. We'll then register our prototypical object, which is stored in the variable c. Type prototype.register_object. The key for the object is Skylark. The prototypical object is passed, and the second argument, which is C. Let's see if we can clone the object. We'll put a cloned object in the variable c1. Type prototype and call the clone method. What we want to clone is the one associated with the Skylark key. That's why I just typed Skylark here, which has cloned the prototypical object. Finally, it's time to print the cloned object. Type print(c1) Let's build the program and see what happens. Go to Tools, Build, and it worked. As you can see, our script is printing all the attributes of the cloned object.

> [!info]- Semantic Content
>
> **Code Identifiers:** register_object (2), unregister_object (1)
> **UI Navigation:** go to (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Structural Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Decorator](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator?u=76281980&t=0)** - [Instructor] The Decorator design pattern is a structural pattern that allows users to add new features to existing objects without changing their structures. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) makes implementing the Decorator pattern very straightforward due to its built-in language feature. Our challenge here is to add additional features to an existing object dynamically without using subclassing. Here is our scenario. We start with a function displaying a "Hello, World!" message. We want to make the message look fancier by decorating it with additional tags, such as blink, as you can see here. Functions are objects in Python, and we can add additional features to these functions using the built-in Decorator in Python. Patterns such as Adapter, Composite, and Strategy are related to the Decorator pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3)
> **CLI Commands:** python (3), make (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Decorator example](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator-example?u=76281980&t=0)** - [Instructor] Let's define our decorator first. We use the special [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) keyword @wraps and pass the function we're decorating. By doing this, whatever we are using to decorate the function and its effect will be transparent. Now let's define what the decorator is doing by working on the inner function definition. First, we'll grab the return value of the function being decorated. Type ret, our variable, space, assignment, space, and whatever is being returned from the function we're getting in the decorator. Next, we'll do our magic to further process the return value of the function being decorated. In this case, we add a new HyperText Markup Language or [HTML](../../Skills/Web%20Development/HTML.md) tag blink around the original string. Type return, space, and the blink tag, we'll append the blink tag to the return value of the original function, which is ret. And then we'll close the tag. Now, whatever we did in the inner function
>
> **[1:37](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator-example?u=76281980&t=97)** will be returned by this statement, return decorator. Before we apply our decorator, let's try our plain function, hello_world, and see what happens. This function prints a string, "Hello, World." Let's use our print statement to print the return value of the hello_world function before applying our decorator. Type print hello_world parentheses. Let's run the script by going to tools and build. As expected, the Hello, World string is displayed. Next, let's apply the decorator, and the way we apply the decorator is by typing an @ sign and then the name of the decorator. In this case, make_blink. Let's run the script again to check the effect of the decorator. Go to tools, build. And as you can see, the new text has been added to the original string. Let's check if the function name is still the same
>
> **[3:11](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator-example?u=76281980&t=191)** as the original function being decorated. We print the function name by typing print hello_world.__name__.
>
> **[3:32](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator-example?u=76281980&t=212)** We'll also print the docstring of the function. Type print hello_world.__doc__.
>
> **[3:51](https://www.linkedin.com/learning/python-design-patterns-24559831/decorator-example?u=76281980&t=231)** Let's run the script again, go to tools, click on build. As you can see, the function name is hello_world instead of the decorators. The name of the decorator was make_blink. The docstring of the decorator was define the decorator. However, the output is the docstring of the original function, which is original function and exclamation mark. As demonstrated here, we can use the decorator pattern to add additional features transparently to an existing function very easily in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** hello_world (6), make_blink (2)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** python (2)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Decorator](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980&t=0)** - [Instructor] How did it go? Was it easier than you thought? That's the power of using [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). As indicated, let's create a decorator class that adds the [HTML](../../Skills/Web%20Development/HTML.md) bold text. Copy the make_blink decorator code first.
>
> **[0:28](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980&t=28)** Ctrl + C. And then paste it here, Ctrl + V. Change the name to make_bold.
>
> **[0:50](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980&t=50)** And change the text to instead of blink, b. And then close tag, b. Which makes text bold in HTML.
>
> **[1:11](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980&t=71)** Now it's time to apply the decorators. Let's add the blink text by typing @make_blink.
>
> **[1:29](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980&t=89)** And next our bold text. Type @make_bold. That's it. It's time to test the code by clicking Test My Code.
>
> **[1:50](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-decorator?u=76281980&t=110)** It shows the correct results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Code Identifiers:** make_blink (2), make_bold (2)
> **Env Vars:** html (2)
> **Speakers:** - [instructor] (1)

#### [Proxy](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy?u=76281980&t=0)** - [Instructor] Proxy becomes handy when creating a highly resource-intensive object. The problem we need to solve here is postponing our object creation as long as possible due to the high-resource requirement of the object we are creating. Therefore, there's a need for a placeholder that will in turn create the object when its creation is absolutely necessary. Here's our scenario. We create an instance of a producer class only when it's available, because only a fixed number of producer objects can exist at a given time. Our proxy is an artist who is checking to see if the producer becomes available for a guest. And the proxy design pattern clients interact with a proxy object most of the time until the resource intensive object becomes available. The proxy object is in charge of creating the resource intensive objects. Adapter and decorator are related to the proxy design pattern.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Proxy example](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy-example?u=76281980&t=0)** - [Tutor] Let's first define our producer class. We expect it to be more resource intensive when we are trying to instantiate it. Here, being resource intensive means using more computing resources, such as memory or CPU. The producer class prints the messages shown here. There are two methods defined. The first one is printing the current status of the producer, stating, "Producer is working hard!" The second method prints a statement saying that the producer now has time to meet a guest. The goal here is not to bother the producer until the producer is available, because the producer is very expensive to instantiate. Next, let's define the proxy class. The proxy class is relatively less resource intensive when instantiated. That's why we use the proxy object as a middle person to handle the request for the producer until the producer becomes available. Let's see what happens in the proxy class. We have two attributes. One is occupied. The default value for that attribute is no.
>
> **[1:37](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy-example?u=76281980&t=97)** We have another attribute that stores an instance of the producer class. Under the produce method, we have this if statement, where we'll be checking if the producer is available. Let's add the logic we need here. We have this if statement that says, self.occupied == 'No'. This way, if the producer is not occupied, then that's when we'll be instantiating the expensive producer class. Type self.producer = and then we're creating an object from the producer class. Producer(). We let the program wait a little bit, by typing time.sleep(2).
>
> **[2:45](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy-example?u=76281980&t=165)** Since we now have the producer object created, the producer can meet guests. Type self.producer and then invoke the meet method. Otherwise, we're not going to be doing anything because the producer is not available. Let's test the code to see if it works. Instantiate a proxy first, because the proxy is really the one handling all the requests from our guest to see if the producer object is available or not. We'll give a variable name p for proxy, and then we'll make the proxy work until the producer is available. That's what this statement p.produce does. Note that we're invoking the produce method on the proxy, not the producer. The producer object hasn't even been created yet. Remember that the current state of the producer is not occupied, meaning not busy, therefore, in this case, when I invoke this produce method on the proxy object, the proxy object will be able to instantiate a producer and then relay the message from the guest
>
> **[4:22](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy-example?u=76281980&t=262)** to the producer object. The result will be the producer being able to spend some time with a guest. Let's run the code and see if it works. Go to Tools. Click on Build. As you can see, the producer is now available. Let's now move on to the next steps. Try to change the state of the producer into being occupied by typing p.occupied = 'Yes'
>
> **[5:01](https://www.linkedin.com/learning/python-design-patterns-24559831/proxy-example?u=76281980&t=301)** and then we'll make the proxy produce again. Type p.produce(). Let's run the program again. Click on Build. Producer is busy!

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Env Vars:** cpu (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [tutor] (1)

#### [Adapter](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter?u=76281980&t=0)** - [Instructor] The adapter pattern converts the interface of a class into another one a client is expecting. This time, our problem is that the interfaces are incompatible between a client and a server. In our scenario, we have Korean and British objects that have different method names for speaking. The client would like to use a uniform interface that is the speak method. Our solution is use the adapter pattern that translates the method names between the client and the server code. Bridges and decorators are related to the adapter pattern.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Adapter example](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=0)** - [Instructor] Let's start by defining the classes whose methods will be used by our adapter class. We have this class called Korean. It has the attribute name, which is set to Korean. And it has a method that returns a string object that says an-neyong, which means hello in English. We also have the British class that has the same attribute. However, in this case, the method name is different. It is speak_english instead of speak_korean.
>
> **[0:47](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=47)** Let's finish the definition of this class. Here we'll say self.name, which is set to British,
>
> **[1:02](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=62)** and the method will return a string object because this is an English speaker, will return hello. Now, let's define the adapter class that changes the generic method name into individualized method names. Let's start by defining the init method. In the init method, all we're doing is setting the attribute underscore object to the value of the argument we're receiving called object. Whatever instance of a class we're receiving is going to initialize the underscore object, so self._object object.
>
> **[1:59](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=119)** The next part is the most important one in the adapter class definition, which is where we add a new dictionary item that establishes a mapping between a generic method name. In this case, speak in a concrete method name, such as speak Korean or speak English. All you have to do here is add this one line, self.__dict__.update.
>
> **[2:40](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=160)** And then we'll be using the adapted underscore method argument from the init method. I'll just copy and paste it right here. This method will accept a dictionary item that consists of key and value pairs. The key will be the name of a generic method, the value will be individualized method names. Other than this, we're not changing anything in the attributes or the methods of the received object. We're returning the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the attributes and the getattr method here. Type return getattr self._object attr.
>
> **[3:42](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=222)** Now, we're ready to test our adapter. Let's move on to the rest of the code. Here we've declared a list called objects. We'll create new objects and add them to this list later. Let's first create a Korean object, type Korean. Next, we'll create a British object, type British, and then we'll append these objects to the object list. Type objects.append, parentheses. When we append these objects to the object list, we want to change the mapping between the generic method called speak and the individualized method names, that's why we're using the adapter pattern here, type adapter. The first argument of the adapter is the object itself, so Korean will then provide the mapping between the generic and individualized method names, speak=Korean speak_korean.
>
> **[5:14](https://www.linkedin.com/learning/python-design-patterns-24559831/adapter-example?u=76281980&t=314)** The generic method name, speak, when it gets invoked is translated into speak_korean. We'll do the same thing with the British object. Note that the equal sign here means it's a dictionary item, which consists of the key, in this case speak, and its value, which comes next like this. Now, we're finally ready to test our code. Let's use a for loop to invoke the individualized speak methods. We use speak here, which is the generic method. However, the end result is the individualized methods getting involved. Go to Tools, click on Build. And as you can see, the code worked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Code Identifiers:** speak_korean (3), speak_english (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Composite](https://www.linkedin.com/learning/python-design-patterns-24559831/composite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/composite?u=76281980&t=0)** - [Instructor] The composite design pattern maintains a tree data structure to represent part whole relationships. Here we want to build a recursive tree data structure so that an element of the tree can have its own sub-elements. An example of this problem is creating menu and submenu items. The submenu items can also have their own submenu items. Our coding challenge is to display menu and submenu items using the composite design pattern. Our solution consists of three major elements. The first one is component, the second one is child, and the third one is composite. The component element is an abstract class. A concrete class called child inherits from the component class. And then we have another concrete class called composite, which also inherits from the component class. Finally, our composite class maintains child objects by adding and removing them to and from a tree data structure.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Composite example](https://www.linkedin.com/learning/python-design-patterns-24559831/composite-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/composite-example?u=76281980&t=0)** - [Instructor] Let's start by defining our abstract class, which is component. Nothing too much is done in the component class definition except for defining our interface method. Component underscore function. Let's move on to the child class definition. Since this one inherits from the component class, we'll have to say its parent is component. Right here. We'll have an attribute to store the name of the child. Type self dot name space assignment space args.
>
> **[0:56](https://www.linkedin.com/learning/python-design-patterns-24559831/composite-example?u=76281980&t=56)** The index is zero. What we're doing here is getting an argument from the instantiation process of the child class whose first argument happens to be the one we are going to be using for setting the name attribute. The second method here implements the abstract method component underscore function. Our implementation prints the name of the child. Let's move on to the composite class that also inherits from the abstract class component. We also need another attribute to store the name of the component object. Type self dot name and args. The index is zero, meaning that we'll be using the first argument to get the name of the composite object. This time we have another attribute, a list that will keep all our child items in the composite object. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the methods we're defining are utility methods. For example, we have this method called append underscore child to add the new child. We also have the remove underscore child method. In our definition of the abstract method
>
> **[2:33](https://www.linkedin.com/learning/python-design-patterns-24559831/composite-example?u=76281980&t=153)** component underscore function, we print the name of the composite object. The second thing we are doing is iterating through all the child objects and then invoking their component function to print their names. Now we are ready to go ahead and use these classes we just defined. First, we'll be building a composite sub menu that is not a top level menu, but a sub menu. It's a composite itself and has its own children. We also build the child items and then we add the child items to the composite sub menu one. Next, we'll do some more coding to create the top level composite menu here. The variable name is top space assignment and composite, which is the class we're using. It has an argument that is the name of the composite object top underscore menu. We'll then build a plain sub menu, which is not a composite. We'll call this sub2 space assignment child because it's a child
>
> **[4:10](https://www.linkedin.com/learning/python-design-patterns-24559831/composite-example?u=76281980&t=250)** and we'll name it submenu2. Now let's add the composite submenu1 to the top level composite menu by using the append underscore child method top dot append underscore child sub1.
>
> **[4:36](https://www.linkedin.com/learning/python-design-patterns-24559831/composite-example?u=76281980&t=276)** Next, add a plain submenu2 to the top level composite menu, top append underscore child sub2. Finally, all we have to do is to test if our composite pattern works by invoking this component underscore function on the composite object. Go to tools, click on build. The code works beautifully and demonstrates well that the composite pattern is effective when you have a tree structure in which you could have both plain child items and composite child items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Composite](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-composite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-composite?u=76281980&t=0)** - [Instructor] Did you figure out the answer? Let's create a subdirectory first. It's a composite object that can contain other objects. Therefore, type sub = Composite("sub").
>
> **[0:29](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-composite?u=76281980&t=29)** A file is not a container, therefore it should use the child type. Type file = Child("file").
>
> **[0:55](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-composite?u=76281980&t=55)** Next, add a subdirectory to the file system by typing root.append_child(sub).
>
> **[1:11](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-composite?u=76281980&t=71)** And then root.append_child().
>
> **[1:23](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-composite?u=76281980&t=83)** And in between the parentheses, we're going to add the file to the file system. So type file. That's all. Click on Test my code. We got this one right too.

> [!info]- Semantic Content
>
> **Code Identifiers:** append_child (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Bridge](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge?u=76281980&t=0)** - [Instructor] The bridge pattern helps untangle an unnecessarily complicated class hierarchy, especially when implementation-specific classes are mixed with implementation-independent classes. The problem here is that there are two parallel or orthogonal abstractions. One is implementation-specific and the other is implementation-independent. Our scenario involves implementation-independent circle abstraction and implementation-dependent circle abstraction. The implementation-dependent circle abstraction involves how to draw a circle. And the implementation-independent circle abstraction involves defining the properties of a circle and scaling it. Our solution is avoiding abstracting both implementation-specific and implementation-independent classes in a single class hierarchy. The abstract factory and adapter patterns are the related patterns to the bridge design pattern.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Bridge example](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=0)** - [Instructor] Let's first define our implementation-specific classes. The first one is DrawingAPIOne, it has a method called draw_circle, and accepts three arguments, x-coordinate, y-coordinate, and radius. It prints a message saying, "API 1 drawing a circle at coordinate x and y with radius." There's another implementation-specific class we need to define, DrawingAPITwo. We'll start with the method by typing def. The name of the method is draw_circle.
>
> **[1:00](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=60)** Its arguments are self, x, y, and radius.
>
> **[1:12](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=72)** The interface is the same, but the implementation will be different. Type print. We'll Copy, Paste. The difference in the implementation lies in the message to be printed. So instead of API 1, we'll say API 2. Now let's define our implementation-independent class Circle. How to draw a circle is implementation-dependent, but some things are implementation-independent when defining a Circle. The very first part of the Circle class definition is initializing its attributes. We have x-coordinate being initialized, y, and radius.
>
> **[2:17](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=137)** The last argument is drawing_api. This is the argument accepting an instance of our DrawingAPIOne or Two classes. These attributes are implementation-independent. However, how to draw these circles is implementation-dependent, and it depends on the last argument we're accepting. Type self._drawing_api,
>
> **[2:56](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=176)** which is the attribute containing our drawing_api object. And then, we'll invoke the draw_circle method. So that draw_circle. Finally, we'll be passing our arguments based on what we just received, (self._x, self._y, self._radius).
>
> **[3:40](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=220)** These are all the values already stored in our attributes. The next method, scale, is implementation-independent, because scaling a circle, whether it's bigger or smaller, has nothing to do with how to implement a circle. After defining these classes, we're now ready to create a circle object. Let's use the Circle class and pass our arguments. In the argument list, the most important one is DrawingAPIOne, because this decides what kind of implementation we're using to draw a circle. When we're done, we're invoking the draw method on the circle object. We'll do the same thing for the second Circle. Type circle2 = Circle, the x-coordinate is 2, the y-coordinate is 3, and the radius is 4. We'll be using a different implementation method this time, DrawingAPITwo. Invoke the draw method on circle2. Let's run the code. Go to Tools, click on Build. The code works.
>
> **[5:17](https://www.linkedin.com/learning/python-design-patterns-24559831/bridge-example?u=76281980&t=317)** The Bridge Pattern is effective when you have so many different kinds of classes involved in your hierarchy, and it makes sense to separate these classes into different hierarchies.

> [!info]- Semantic Content
>
> **Code Identifiers:** draw_circle (4), drawing_api (2)
> **Env Vars:** api (3)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [instructor] (1)


### 4. Behavioral Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Observer](https://www.linkedin.com/learning/python-design-patterns-24559831/observer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/observer?u=76281980&t=0)** - [Instructor] The observer pattern establishes a one to many relationship between a subject and multiple observers. Our problem here is that a subject needs to be monitored, and other observer objects should be notified when there is a change in the subject. In our scenario, we keep track of the core temperatures of reactors at a power plant. When there is a change in the core temperature, registered observers must be notified. Our solution uses an abstract class called subject, which has the interface that allows operations such as attaching, detaching, and notifying observers. We also need concrete subject classes inheriting from the abstract subject class. Singleton is related to the observer design pattern.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Observer example](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980&t=0)** - [Instructor] We start with the subject class that represents what is being observed. The subject class keeps this list called _observers, where references to all the observers are being kept. Note that this is a one to many relationship. There'll be only one subject to be monitored by multiple observers. Next is defining the attached method. This method accepts an observer as an argument. With this observer object we'll first check if the observer is not already on the observer list. Type, if observer not in self._observers: we'll try to append the observer to the list only when it's not already on the list. And that's our next statement. Type, self._observers append parenthesis, observer. The next method is the detach method that removes an observer from the observer list. The last method is our notify method.
>
> **[1:36](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980&t=96)** This is the most important method in the subject class because it notifies all the observers when there is a change in the subject. Type, for observer in self._observers:
>
> **[2:02](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980&t=122)** Next you want to say now to notify the observer who's actually updating the temperature. Type, if modifier not equal observer: then we can alert the observers. Therefore, type observer.update parentheses, self, close parentheses.
>
> **[2:39](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980&t=159)** The next class is our core class that inherits from the subject class. By putting subject between the parentheses here, we're indicating that the core class inherits from the subject class. In the init method of the core class, we set the name attribute based on the argument passed. We set the temperature to zero initially. The most important attribute of the core class is temperature. If the temperature changes, the observers of the core class will be notified. Next, we define the getter that gets the core temperature and the setter that sets the core temperature like this. The TempViewer class is our observer class. The only method we're defining in the observer class is this method called update that gets invoked whenever the temperature value changes. This is our alert method to be invoked whenever the notify method in our concrete subject class core is invoked. So right here, type, self.notify.
>
> **[4:11](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980&t=251)** All this does is display this message saying that temperature viewer so and so in this case, a particular object has temperature value such and such based on the actual core temperature. We're done with defining our classes. Let's try to use them by first creating our subjects. There are going to be two subjects, core one and core two. We'll use the core class to instantiate them. Core one, core two, and then it's time to create our observers. The class representing our observer is TempViewer type TempViewer here, and also here. Now let's attach these observers to our first core. Type attach and v1, our first observer. We'll attach the second observer, v2. Type, attach v2. Now we are ready to test our code by changing the temperatures, because that's when the observers get notified. We set the temperature to 80 first
>
> **[5:46](https://www.linkedin.com/learning/python-design-patterns-24559831/observer-example?u=76281980&t=346)** and then set it to 90. Let's see what happens. In this scenario, none of the observers is changing the temperatures themselves. Therefore, both observers will get notified every time the core temperature changes. We should have four outputs. Go to tools, click on build. The code worked, and the results are what we expected.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Observer](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980&t=0)** - [Instructor] How was the coding for the code challenge? Not too bad, right? We already created our subject, which is the code to monitor here. The viewer is our observer and is also created here. To attach the viewer to the core, type c.attach, parentheses, v.
>
> **[0:32](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980&t=32)** Let's set the temperature to 100, which will trigger the viewer to generate a string that says viewer, colon, space, core colon, space, 100,
>
> **[0:48](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980&t=48)** and vertical line. So type c.temp, assignment, 100.
>
> **[1:01](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980&t=61)** Now, let's detach the viewer by typing c.detach,
>
> **[1:10](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980&t=70)** parentheses, and then the viewer, v. Here, we'll set the core temperature to 90, c.temp, assignment, 90, which will not affect the viewer
>
> **[1:29](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-observer?u=76281980&t=89)** because it's now detached, therefore, no string will be generated in this case, therefore, the overall result is the notification that was generated earlier when the temperature was set to 100, which is viewer, colon, space, core, colon, space, 100, and a vertical line. Click the test my code button. We did it again.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Visitor](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor?u=76281980&t=0)** - [Presenter] The visitor design pattern allows adding new features to an existing class hierarchy without changing it. It's sometimes necessary to add new operations dynamically to existing classes with minimal changes. For our scenario, we present a House class. Visitors in this scenario include an HVAC specialist and an electrician. The HVAC specialist in our scenario is visitor type one, and the electrician is visitor type two. The visitor pattern represents new operations to be performed on the various elements of an existing class hierarchy. Visitors can also provide operations on a composite object.

> [!info]- Semantic Content
>
> **Env Vars:** hvac (2)
> **Speakers:** - [presenter] (1)

#### [Visitor Example](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor-example?u=76281980&t=0)** - [Instructor] We'll start with defining the class that's being visited. The class is called House. One of the main features of the House class is this method that triggers the visiting operation. The method is called accept, and we'll be defining the method here. It gets this visitor instance and then invokes the visit method on a visitor instance. Type visitor.visit, is the name of the method, self. For the visitor to be able to visit, it needs a reference to an instance of the House class. That's why we type self here. We'll invoke this method called work_on_hvac only when the visitor is hvac_specialist. We have another method called work_on_electricity, an electrician visitor calls. We already defined the work_on_hvac method, it displays this message, "worked on by", so and so,
>
> **[1:38](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor-example?u=76281980&t=98)** which will be the name of the object, in this case, the hvac_specialist object. We'll be doing the same thing for the work_on_electricity method. Copy this and paste it here. Instead of hvac_specialist, now the visitor is an electrician. That's why here we have to say electrician. I want you to note that we now have a reference to the electrician object in the House object because one of the arguments is a reference to the electrician object. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the class is pretty straightforward. The string method returns what to print when the object is being printed. In this case, we'll be printing the name of the object when it's printed by a print statement. Let's move on Visitor class. This is our abstract visitor, an abstract class for our concrete visitors. All we do here is define the string method where we decide on what to be displayed when a concrete visitor object
>
> **[3:14](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor-example?u=76281980&t=194)** is being printed by a print statement. Next is the HvacSpecialist class. Note that this class inherits from the Visitor class. This is a concrete visitor and that's why it inherits from the Visitor class, which is our abstract visitor. This class has one method called visit that invokes the work_on_hvac method on the House object. Note that the visitor now has a reference to the House object because you're getting the House object as an argument here. Another concrete visitor is the visitor called Electrician. Type house, which is a reference to the House object, and then invoke the method called work_on_electricity. And then we pass the reference to self. We're done with the class definitions, now let's test our classes. First, we'll create an HVAC specialist, which is a concrete visitor. Let's start with a variable, hv, assignment. We'll instantiate the HvacSpecialist class here.
>
> **[4:51](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor-example?u=76281980&t=291)** Let's also create an electrician. We'll use variable e, assignment, instantiate the electrician class. We need the House to be worked on by either an electrician or HVAC specialist. We'll name it home, assignment, House. The next step is letting the House accept the HVAC specialist and letting the HVAC specialist work on the house by invoking the visit method. Type home.accept. We also need to pass our HvacSpecialist object as an argument, which is hv. Let's run this and see what happens. Go to Tools, click on Build, and it works. It displays this message, "House worked on by HvacSpecialist" because the visitor is HVAC specialist. Now, we'll try the same thing with the electrician and see what happens. Type home.accept(e). This time we'll accept an electrician, which is represented by this variable e. Go to Tools, click on Build, and it works again,
>
> **[6:26](https://www.linkedin.com/learning/python-design-patterns-24559831/visitor-example?u=76281980&t=386)** "House worked on by Electrician." The visitor pattern is very versatile in the sense that you can make it work on various elements of a class hierarchy and add new features to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** work_on_hvac (3), hvac_specialist (3), work_on_electricity (3)
> **Definitions:** is a  (4), is called (2), is an  (1)
> **Env Vars:** hvac (5)
> **UI Navigation:** go to (2), click on (2)
> **Warnings:** note that (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Iterator](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator?u=76281980&t=0)** - [Narrator] The iterator pattern allows a client to have sequential access to the elements of an aggregate object without exposing its underlying structure. The problem is that some programmers overcrowd the traversal interfaces of an aggregate object for every possible way of iteration. We'll be building our own iterator that takes advantage of a built-in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) iterator called zip. The iterator goes through a list of German counting words. It will iterate only up to a certain point based on client input. The iterator isolates access and traverses of features from the aggregate object. It also provides an interface for accessing the elements of an aggregate object. An iterator keeps track of the objects being traversed. Our solution is to make the aggregate object create an iterator for a client. The composite design pattern is related to the iterator pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), make (1)
> **Speakers:** - [narrator] (1)

#### [Iterator example](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980&t=0)** - [Instructor] Now, let's define our iterator. We start with creating a list. The list contains German words counting up to five.
>
> **[0:17](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980&t=17)** Here, we'll use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s built-in iterator. The iterator will create tuples consisting of pairs of numbers and equivalent German words, for example, one and the German [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) eins. The tuple here means a pair. One and eins, that's a tuple, two and zwei, that's another tuple. The built-in iterator provided by Python is zip. We have to generate numbers up to five, so we use the function range here. So type range. The argument of the function is the number of German words to display, which is count, so type count. This is the first argument of the zip iterator. The second argument is the list itself. The numbers in German is our list. Type numbers_in_german. The range function here is important because it allows us to know up to what number we can count. We use a variable called iterator to store a zip instance.
>
> **[1:54](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980&t=114)** Now, using this iterator, we'll iterate through a list, in this case, numbers in German. We'll extract the German numbers and put them in a generator called number. To send the generator, we use the keyword yield. The generator number contains numbers in German. Now, it's time to test our code. Let's test the generator returned by our iterator by using a for loop. Type for and a placeholder, num, in count_to,
>
> **[2:49](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980&t=169)** which is the function we just defined, and then we'll have to decide on counting up to what number. We'll try to count up to three, so type three and colon. The function call, count_to, will return a generator we can use in this for loop, and then we use a print statement. Type print .format(num).
>
> **[3:25](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980&t=205)** The num variable we are using here contains the German numbers that are going to be returned by the generator. Let's now test the code. Go to tools, click on build, and it works. We counted up to three, eins, zwei, drei, but we can also try to count up to four. Let's try. Copy and paste.
>
> **[4:04](https://www.linkedin.com/learning/python-design-patterns-24559831/iterator-example?u=76281980&t=244)** Now, count up to four. Go to tools, click on build, and it is counting up to four, eins, zwei, drei, and vier. The nice thing about Python is that it provides its own built-in iterator, which makes it easier to develop a customized iterator, like the one we just used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** python (3)
> **Code Identifiers:** count_to (2), numbers_in_german (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Strategy](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy?u=76281980&t=0)** - [Narrator] The strategy pattern offers a family of interchangeable [Algorithms](../../Skills/Software%20Development/Algorithms.md) to a client. The problem we often see is that there is a need for dynamically changing the behavior of an object. We offer our strategy class with its default behavior. When there is a need, we provide another variation of the strategy class by dynamically replacing its default method with a new one. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) allows adding methods dynamically by importing the types module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [narrator] (1)

#### [Strategy Example](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy-example?u=76281980&t=0)** - [Instructor] This is our strategy class. Note that we're importing the types module here. This code doesn't work without the types module. The types module supports the dynamic creation of new types. In this case, we dynamically create a new method type. The very first thing we'll do in this strategy pattern class is defining the init method. All we're doing here is initializing the attribute called name. We set it to Default Strategy every time the strategy class is initiated. The strategy class also comes with a default method called execute. This default method prints the current value of the name attribute. Now, here is the most important part of this strategy class definition. This is where we say, if a reference to a function is provided as an argument here, we're replacing the default execute method with a given function. So how do we say that in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)? Type if, space, function. Which means, if there is a function
>
> **[1:37](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy-example?u=76281980&t=97)** being passed as an argument, then set the default execute method to the new function being provided. Type self.execute. An assignment. Next, we use the types module, type types.MethodType.
>
> **[2:06](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy-example?u=76281980&t=126)** Function, comma, self. This allows us to add a new method for a class dynamically. If you don't get any reference, we're not doing anything. So by default, if you don't get any argument, the method will execute the default execute method. Now let's define the replacement method, which is strategy_one. You can see it right here. In the replacement method, we use the print function to display the current value of the name attribute as well as the name of the replacement method, which is method 1. This is how you know that the strategy_one method is used. We'll do the same thing for the second strategy, which is why I'm copying and pasting this. But you still have to make some changes. We still use the print statement. However, I'm changing the method name because this is method 2, not method 1. Now we are ready to create our default strategy object and also create other strategy objects. Let me create our default strategy first, which is Strategy.
>
> **[3:43](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy-example?u=76281980&t=223)** We'll then execute it and see what happens. Next, we'll create other strategies, but, this time, instead of not passing anything as an argument, we'll pass the name of the function or method we want to use. Type Strategy, parentheses. Now we pass the name of the function, in this case, strategy_one. And then we'll set the name of the strategy, which is Strategy One. Next, we have to invoke the execute method on this one. Type execute. And we'll create another strategy here with a different function name. Strategy, strategy_two. And then we'll set the name to Strategy Two. Finally, we'll invoke the execute method again. Let's run the script and see what happens. Go to Tools, click on Build. As you can see, the program works beautifully. The first message being displayed says, "Default Strategy used!" The second message says, "Strategy One is used to execute method 1." And then the third message states,
>
> **[5:20](https://www.linkedin.com/learning/python-design-patterns-24559831/strategy-example?u=76281980&t=320)** "Strategy Two is used to execute method 2." Note that the execute method is the one that's being replaced dynamically. Implementing the strategy pattern is straightforward when using Python because of its built-in feature such as the types module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Code Identifiers:** strategy_one (3), strategy_two (1)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (1), click on (1)
> **Warnings:** note that (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Strategy](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=0)** - [Instructor] Authentication is an excellent example of how we can apply the strategy pattern. In this code challenge, we use three authentication strategies. They are passcodes, facial recognition, and fingerprints. The default strategy we use here is passcode.
>
> **[0:26](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=26)** We'll now create a strategy using fingerprints here by typing s1, space, equal sign, strategy, parentheses,
>
> **[0:44](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=44)** and then the strategy method, which is strategy_finger.
>
> **[0:57](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=57)** We also need to set its name by typing s1.name,
>
> **[1:10](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=70)** assignment, strategy_finger.
>
> **[1:20](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=80)** The fingerprint strategy method is defined here. Next, we'll create a strategy using facial recognition by typing s2, space, equal sign, strategy, parentheses,
>
> **[1:41](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=101)** and then strategy_face.
>
> **[1:51](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=111)** Set its name by typing s2.name, assignment, strategy,
>
> **[2:06](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=126)** space, face. The facial recognition strategy method is defined here. Now, here, we need to add a conditional statement that allows the code to switch the authentication strategy based on a user's preference. Type if, space, preference, two equal signs,
>
> **[2:39](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=159)** finger in between the double quotation marks, colon,
>
> **[2:48](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=168)** return, s1.execute.
>
> **[2:59](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=179)** What this says is, when the strategy preference is fingerprints, execute the fingerprint strategy method. Else, if preference, space, two equal signs, face, colon,
>
> **[3:26](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=206)** now, return s2.execute, meaning executing the facial recognition strategy method, and then type else, and we could use the default strategy,
>
> **[3:50](https://www.linkedin.com/learning/python-design-patterns-24559831/solution-strategy?u=76281980&t=230)** which is s0, passcode. Once again, the else return statement covers the default strategy, which is passcode. That's all. Click the test my code button. The code works.

> [!info]- Semantic Content
>
> **Code Identifiers:** strategy_finger (2), strategy_face (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Chain of Responsibility](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility?u=76281980&t=0)** - [Instructor] The strategy pattern offers a family of interchangeable [Algorithms](../../Skills/Software%20Development/Algorithms.md) to a client. The problem we often see is that there is a need for dynamically changing the behavior of an object. We offer our strategy class with its default behavior. When there is a need, we provide another variation of the strategy class by dynamically replacing its default method with a new one. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) allows adding methods dynamically by importing the types module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Chain of Responsibility example](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility-example?u=76281980&t=0)** - [Instructor] Let's start by first defining our handler class, which is an abstract handler. Since the point of a handler is to find its successor if the current handler cannot handle a request, we need an attribute to store a successor handler. Type self._successor. The successor handler is coming in as an argument in the init method. The next method is the handle method in which we'll first try to handle the request. To handle the request we call _handle method. If this method is able to handle the request, it will return a true value. The next part of our code is checking the value in the handled variable as you can see here. If the _handle(request) method couldn't handle the request, then, we have to do something else, which is using a successor. That's why we type self._successor.handle(request).
>
> **[1:45](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility-example?u=76281980&t=105)** This _handle method provides an interface to be implemented by the following ConcreteHandler classes. Let's go ahead and define our ConcreteHandler classes. In our first ConcreteHandler definition or ConcreteHandler1 definition, you see this conditional statement. If the request is between 0 and 10, then it will print this message, request so and so handled in handler 1. And then it will return this true value to the caller of the method, basically indicating that the request was handled properly. The next ConcreteHandler class is the default handler class, in which we'll try to be covering the case where no handler can handle the request. That's why we don't have any conditional statement in the _handle method here. No matter what, we'll always print this message. End of chain, no handler for such and such, and this method will always return the true value just to make sure that handling process is over. Finally, we have this client class to define.
>
> **[3:23](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility-example?u=76281980&t=203)** The client class uses our handlers. Here, we'll create our handlers first, and then we'll try to use them in the sequence we want. Let's create our handler by typing ConcreteHandler1. The ConcreteHandler needs to specify who is its successor. Our successor here is the default handler, and the default handler has no successor, which is why we use none here. And then we'll store the instance of the ConcreteHandler in a variable called handler, so type self.handler assignment.
>
> **[4:18](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility-example?u=76281980&t=258)** The next part of the client class is this delegate method. Here, what we're doing is receiving the request, and then based on the number of requests, we'll iterate through the request list and try to handle these requests one at a time. That's what's happening in this for loop. We're finally done with the definition of all the classes we need. Now we are ready to move on to actually using the classes. Let's create our client first. Type C = client. Next, we'll provide our request in the form of a list. We'll use some integers as a request. Type 2, 5 and 30. We'll now invoke our delegate method on the client object, c, c.delegate, and then we'll pass the request. Let's go ahead and run the script. Go to tools, click on build, and the script works fine. Remember that the chain of responsibility pattern is used not to tie a specific solution to a request,
>
> **[5:53](https://www.linkedin.com/learning/python-design-patterns-24559831/chain-of-responsibility-example?u=76281980&t=353)** and that is well demonstrated in this code example.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Design Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Consistency](https://www.linkedin.com/learning/python-design-patterns-24559831/consistency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/consistency?u=76281980&t=0)** - [Speaker] In addition to using [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md), there are also universal principles you should apply whenever you develop software applications. Consistency is one of the hallmarks of sound software engineering. One of the reasons we recommend using design patterns is to promote the consistency of the code. If an identical solution is used repeatedly to solve the same problem, developers need to modify only one piece of code when there is a need to change the code. Otherwise, you end up spending much more time developing different strategies for different solutions implemented throughout the code to accommodate a change requirement. The benefit of promoting consistency also include reducing the risk of making mistakes since the same piece of code is used over and over again. Another benefit is increasing the possibility of detecting errors since more sets of eyes looking at the same code may spot the mistakes more quickly. Saving the cost of [Software Development](../../Topics/Software%20Development.md) is another benefit since you reuse the well-established design solutions in the form of patterns and their in-house or third party implementations. A larger scale way of accomplishing consistency
>
> **[1:38](https://www.linkedin.com/learning/python-design-patterns-24559831/consistency?u=76281980&t=98)** is by creating a [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) and trying to stick to it. This could be as simple as identifying a pattern to be used throughout your software coherently. Another way of enforcing consistency is using frameworks. Frameworks consist of design patterns put together in a specific fashion to accomplish a particular goal. For example, there are frameworks specializing in improving software security while there are frameworks whose focus is providing a related set of functionalities, such as building an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) website. Consistency is one of the most critical software engineering principles and the use of design patterns makes your job easier to keep your code consistent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (4), [Software Development](../../Topics/Software%20Development.md) (1), [Software Architecture](../../Skills/Web%20Development/Software%20Architecture.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### [Programmer's mindset](https://www.linkedin.com/learning/python-design-patterns-24559831/programmers-mindset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/programmers-mindset?u=76281980&t=0)** - [Narrator] Using [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) also promotes the other ideal qualities of software, such as completeness and correctness. Completeness refers to how much a software solution meets its requirements. Since design patterns are community-driven, and validated according to the desired requirements, you can safely assume they meet the baseline requirements. However, one thing to note is that design patterns are intentionally under defined to allow potential customization and extension efforts. Correctness is another essential quality of well-developed software. If the software produces incorrect results, although it does most of what it's expected to do, it's still problematic since the error can lead to catastrophic consequences such as loss of human lives. The correctness quality is especially vital in mission-critical systems such as power plants and water treatment facilities. Coupling and cohesion are also what design patterns address. The term coupling means how many different elements of your software are related. If there is a strong coupling within the software elements, changes in one of them affect the others significantly,
>
> **[1:38](https://www.linkedin.com/learning/python-design-patterns-24559831/programmers-mindset?u=76281980&t=98)** which means a lot of additional work. On the other hand, cohesion refers to how independent a software component is. Therefore more cohesion is better, but less coupling is desirable, which is the goal of design patterns. Simplicity and generality trade-offs are the lasting I'd like to point out. The trade-off between simplicity and generality is also what design patterns consider. For wider adoption, design patterns may attempt to satisfy too many requirements and become too complicated for it to be truly useful. However, it's also important to be general enough for reusability purposes. Design patterns should be simply enough to be quickly mastered and highly usable for practitioners. When considering using design patterns, keep in mind these design principles to ensure that you're actually improving the quality of your software by adopting them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (9)
> **Definitions:** refers to (2), is a  (1)
> **Analogies:** such as (3)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-design-patterns-24559831/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-design-patterns-24559831/next-steps?u=76281980&t=0)** - If you want to learn more about other implementations of [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), check out the many active open source communities out there that develop and maintain [Accessible Design](../../Skills/Web%20Development/Accessible%20Design.md) patterns. If you want to learn more design patterns, I recommend watching my Python Advanced Design Patterns course. In the next course, we'll build on the design pattern concepts we learned in this course and pursue more advanced topics such as architectural and domain specific patterns. We'll also cover the remaining gang of four patterns to complete our exploration of classic design patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Accessible Design](../../Skills/Web%20Development/Accessible%20Design.md) (1)
> **CLI Commands:** python (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - if (1)


## Instructor

- [Jungwoo Ryoo](../../Instructors/Cybersecurity/Jungwoo%20Ryoo.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-design-patterns-2422610)

## Skills Covered

- Python (Programming Language)
- Design Patterns

## Path Context

### In [Advance Your Skills in Python](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20Python.md)
← [Hands-On Introduction- Python](Hands-On%20Introduction-%20Python.md) | **2 of 7** | [Python Data Structures and Algorithms](Python%20Data%20Structures%20and%20Algorithms.md) →

## Appears In

- [Advance Your Skills in Python](../../Paths/Software%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20Python.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)