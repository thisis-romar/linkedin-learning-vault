---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-plus-plus-design-patterns-creational
url: "https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational"
duration_minutes: 146
duration: 2h 26m
level: Intermediate
updated: 10/15/2021
learners: 86969
skills:
  - Design Patterns
  - C++
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH2K0uOcqWipQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568061261682?e=2147483647&amp;v=beta&amp;t=KNCfW_gEMKn0nvczOwD78cDU4jVOIIGJeaNcNnPvOK0"
linkedin_topic: DevOps
learning_paths:
  - '[Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)'
prev_courses:
  - '[C++ Design Patterns- Behavioral](C%2B%2B%20Design%20Patterns-%20Behavioral.md)'
next_courses:
  - '[C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices](../Software%20Development/C%2B%2B%20Development-%20Advanced%20Concepts%2C%20Lambda%20Expressions%2C%20and%20Best%20Practices.md)'
path_nav: '[{"path":"Master C++","position":5,"total":6,"prev":"C++ Design Patterns- Behavioral","next":"C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/design-patterns
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C%2B%2B%20Design%20Patterns-%20Creational.md)

![C++ Design Patterns: Creational](https://media.licdn.com/dms/image/v2/C4E0DAQH2K0uOcqWipQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568061261682?e=2147483647&amp;v=beta&amp;t=KNCfW_gEMKn0nvczOwD78cDU4jVOIIGJeaNcNnPvOK0)

# C++ Design Patterns: Creational

> Design patterns solve the challenges software developers face over and over again. They are reusable, proven solutions that make your software more reliable and flexible to change. Creational design patterns move the creation of objects out of the main codebase and into separate classes-a best practice known as encapsulation. This course explores the five most popular creational design patterns fo

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational) | 2h 26m | Intermediate | 87K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Organize your code with creational design patterns in C++](#organize-your-code-with-creational-design-patterns-in-c)
  - [What you should know](#what-you-should-know)
  - [Installing Visual Studio for Windows](#installing-visual-studio-for-windows)
  - [Installing Xcode on Mac](#installing-xcode-on-mac)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
  - [Challenges in this course](#challenges-in-this-course)
- [**1. Design Patterns Overview**](#1-design-patterns-overview) (3 videos)
  - [The need for a design pattern](#the-need-for-a-design-pattern)
  - [What are design patterns?](#what-are-design-patterns)
  - [Creational patterns overview](#creational-patterns-overview)
- [**2. Creational Patterns**](#2-creational-patterns) (4 videos)
  - [Inheritance vs. composition](#inheritance-vs-composition)
  - [Composite object example](#composite-object-example)
  - [Concrete vs. abstract](#concrete-vs-abstract)
  - [Understanding UML](#understanding-uml)
- [**3. Factory Method**](#3-factory-method) (4 videos)
  - [Factory Method concept](#factory-method-concept)
  - [Factory Method implementation](#factory-method-implementation)
  - [Running the Factory Method example](#running-the-factory-method-example)
  - [Factory Method variations](#factory-method-variations)
- [**4. Abstract Factory**](#4-abstract-factory) (7 videos)
  - [Abstract Factory concept](#abstract-factory-concept)
  - [Abstract Factory pattern implementation](#abstract-factory-pattern-implementation)
  - [Using the Abstract Factory](#using-the-abstract-factory)
  - [Running the Abstract Factory](#running-the-abstract-factory)
  - [Extending the Abstract Factory](#extending-the-abstract-factory)
  - [Challenge: Abstract Factory](#challenge-abstract-factory)
  - [Solution: Abstract Factory](#solution-abstract-factory)
- [**5. Builder**](#5-builder) (5 videos)
  - [Builder concept](#builder-concept)
  - [Builder pattern setup](#builder-pattern-setup)
  - [Builder pattern implementation](#builder-pattern-implementation)
  - [Running the Builder example](#running-the-builder-example)
  - [Steps in the Builder pattern](#steps-in-the-builder-pattern)
- [**6. Prototype**](#6-prototype) (4 videos)
  - [Prototype concept](#prototype-concept)
  - [Prototype pattern implementation](#prototype-pattern-implementation)
  - [Running the Prototype example](#running-the-prototype-example)
  - [Shallow vs. deep copies](#shallow-vs-deep-copies)
- [**7. Singleton**](#7-singleton) (4 videos)
  - [Singleton concept](#singleton-concept)
  - [Singleton pattern implementation](#singleton-pattern-implementation)
  - [Running the Singleton pattern](#running-the-singleton-pattern)
  - [Is the Singleton a good pattern?](#is-the-singleton-a-good-pattern)
- [**Conclusion**](#conclusion) (2 videos)
  - [Comparing creational patterns](#comparing-creational-patterns)
  - [Thanks for watching](#thanks-for-watching)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Organize your code with creational design patterns in C++](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=1)** - As the programs you develop evolve and grow in size, the code becomes harder to maintain. And if you don't structure your program well from the beginning, you'll quickly find yourself spending more time refactoring code than adding new features. In this course, I'll introduce you to creational [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) that will help keep your code organized. And more importantly, easy to update an extent. These are commonly used structures that address issues that typically occur in [Software Development](../../Topics/Software%20Development.md). I'll explain the motivation for each creational pattern, explaining how each one works. Then I'll walk you through a simple implementation of each pattern to demonstrate the design in action. And finally, I'll dive a little deeper to show what makes each pattern unique so you'll understand when and why to use each one. Hi, I'm Olivia Chu and I'm an engineer that's had to maintain more than my fair share of poorly structured code. So if you're ready to start, let's design some code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - as (1)

#### [What you should know](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=0)** - [Instructor] Before starting this course, you should already understand the fundamentals of [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md), including the concepts of inheritance and polymorphism. Although [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) in this course leverage the power of object-oriented design to build from. If you're unfamiliar with these concepts, I recommend checking out the [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) object-oriented design first. I'll be using class diagrams to help convey the relationships between classes for each pattern. And there is a brief introduction to them, but I do not expect you to know UML. I've tried to keep things simple and easy to help get the main concepts across. I'll be using C++ to implement the patterns that I present. But even if you're not familiar with the language, you can still follow along. The main focus of this course is to present the concepts of each pattern, the motivation behind them and the relationships between the classes for each one. But I will be implementing examples for each using C++. So having some understanding of the language will help. If you wish to learn some basic C++, first, I recommend the course learning C++. If you choose to follow along with my examples, it doesn't matter which IDE or platform you choose to use. I'll be using Visual Studio when I demonstrate coding examples, but it's not necessary that you do, too. However, I do expect that, you know your way around a computer and the particular IDE
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=94)** that you choose to follow along in. As you go through this course with me, keep in mind that these patterns came about after spending a lot of time working with object-oriented designs. There are nuances to them and everyone implements them a little differently, depending on their programming needs. As you watch these videos, don't worry if you feel like you mostly understand them at a high level, but are a little fuzzy on the details. You can always come back and watch these videos again. I do strongly recommend that you try applying these concepts on your own projects. The best way to understand these patterns is to try them out in different situations. You'll quickly discover how they can benefit you and how to modify them for your purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) (1)
> **Env Vars:** ide (2), uml (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Installing Visual Studio for Windows](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=0)** - [Instructor] For this course, I'll be using the Visual Studio Community IDE, which I'll walk you through, getting and installing on your [Windows](../../Glossary/Service/Windows.md) computer. To get the installer, go to the download page at www.[visualstudio.com/vs/community](https://visualstudio.com/vs/community). Click on Download VS Community to download the installer, then click Run. So the installer will start once the download is complete. Click Continue on the [Privacy](../../Skills/Data%20Science/Privacy.md) prompt. From the installation dialogue, select Workloads, and then select the option Desktop Development with C++, then leave all the install options as default and click Install. After the installation is complete, I'm taken to the start page. Whenever creating a new project, I go to File, New, Project. From there, I select Installed, Visual C++, Windows Console Application. If I want to open up one of the example projects, I go to File, Open, Project Solution,
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=87)** and navigate to the Exercise Files. I can choose an example by double clicking on the folders. And to open up one of the solutions, I double click on one of the .sln files. Now that I have verified that Visual Studio has installed and is working properly, we can start creating programs based on different [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **UI Navigation:** go to (3), click on (2), select the (1), navigate to (1)
> **Tools:** visual studio (2)
> **Exercise Files:** download the (1), exercise files (1)
> **Prerequisites:** install (2)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### [Installing Xcode on Mac](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=0)** - [Instructor] For this course, I'll be using the Visual Studio Community IDE, but you can also follow along using [Xcode](../../Skills/Mobile%20Development/Xcode.md), which I'll walk you through getting and installing on your Mac computer. From the App Store, search for Xcode, all one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). Click on the link and then click Install for the Xcode software. Once it's done installing, click Open to open the application. To create a new project, click on Create a new Xcode project. In the template dialog, navigate to the macOS tab and select Command Line Tool and click Next. Fill in the fields with any name or identifier that you'd like, but for the language, select C++. Click on Next to create the project template. In here, under the Working folder, there's a file called main.cpp, which will not be used if you want to run the exercise files provided. So I'll go ahead and delete it. To use one of the exercise files, I'll drag the desired .cpp in from the Exercise folder into the Working folder. When the dialog comes up, I select Copy items if needed and ensure that Working is selected in the Add to targets field. Then, I click on Finish to move the desired files. Now that Xcode is all set up, we can start creating programs
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=92)** based on different [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Xcode](../../Skills/Mobile%20Development/Xcode.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **UI Navigation:** click on (4), open the (1), navigate to (1)
> **Exercise Files:** template (2), exercise files (2)
> **Tools:** visual studio (1), command line (1)
> **Prerequisites:** install (1), set up (1)
> **File Paths:** main.cpp (1)
> **Code Identifiers:** macos (1)
> **Env Vars:** ide (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] If you want to follow along with this course to implement each design pattern, I've included exercise files for you to practice with and use as a reference. They're organized into numbered directories for each chapter of the course. And within each chapter, there's a numbered directory for each video. Inside the video folders, you'll find a start and an end folder named according to the topics of the related video. They include the Visual Studio solutions and files corresponding to that particular video. I've also included the end state of each solution, so you can look at the final programs. As you go through this course, I encourage you to run the example solutions yourself, and modify them to test out different patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenges in this course](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=0)** - [Narrator] During this course, you'll run across a video labeled as a challenge. This will be an opportunity for you to practice what you're learning in this course. At the beginning of the challenge, I'll give you a clear set of objectives, and I'll show you where to find the sample files you'll need to complete the challenge. Once you've completed the challenge, come back and watch the solution video to see how I completed the challenge. My solution is just an example of one way to address the challenge. So don't worry if your implementation is a little different. Challenges are a great opportunity to practice the concepts I'm presenting, and to help solidify what you're learning. It's a chance for you to have a little bit of fun. So be sure to check it out.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 1. Design Patterns Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for a design pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=0)** - [Instructor] One of the biggest challenges in [Software Development](../../Topics/Software%20Development.md), is creating something that's flexible, maintainable and extensible. Code will undergo many changes, major and minor throughout the development process. And even after being released, most modern applications will receive updates to improve features or the fixed newly discovered bugs. Things are always changing, let's see how this may play out in a production environment. Imagine I work at a video game company where I'm creating a new adventure game with a main character that wanders around looking for treasure and fighting off little zombie creatures along the way. Each level of the game has a different theme, and the evil creature found in each level is associated with that theme. The first level takes place in the prairies where the character needs to fend off zombie dogs. The second level is in the mountains with zombie eagles. The third in the rainforest with zombie monkeys, and the fourth is underwater was zombie fish. The evil creatures in my game have a lot of properties in common. So I'll have them all derived from the same base class. The difference between them is how they look on screen, but they all share the same attributes and methods. As a player wanders around a level, the game generates different numbers
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=94)** of creatures at different locations. It does this because I've specified the exact number of creatures to instantiate at different locations in the levels. One day, my boss comes by my desk and says that each level should have more creatures. And he wants me to have a version ready for the game testers right away. So I go through the code and increase the number of creatures that are generated at each location. But in my haste, I missed one location. A few minutes later, my upset boss comes back and demands that I fix the mistake. No big deal, the following day, my boss tells me that beta users mentioned that it would be cool if some of the creatures could throw fireballs. Sure, I'll update the base class to include a method to throw a fireball, but then the testers come back asking, why are there fireballs under water? That makes no sense. Oops, by adding throw fireball to the base class, all my other classes inherit that behavior. So, I'll add a property to disable fireballs if the level happens to be underwater. The next round of tests or feedback says that having fireballs and almost every level gets kind of boring, it needs to be switched up a bit and then have it ready ASAP deadlines are coming. Okay, I'll keep the fireballs and the prairies,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=188)** but I'll add snowballs in the mountains, poison berries in the rainforest and spiny coral underwater. Again, in my haste, I forget to update some of the places in my code. And then an occasional misplaced creature is found throwing the wrong item. My boss is furious, "How can there be so many bugs?" There's got to be a better way to manage all this. I'm constantly updating code and multiple places and clearly missing some of the locations. Soon, the game will likely expand to have more levels, how am I going to keep things straight? And things get even more complicated when there are multiple developers working on the same code. This is where a design pattern can be really useful. At the end of the course, I'll come back to the scenario and see how [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) can help rein in this chaos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Env Vars:** asap (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [What are design patterns?](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=0)** - [Instructor] A design pattern is a common, repeatable solution for creating software programs. One of the biggest challenges in [Software Development](../../Topics/Software%20Development.md) is creating code that is flexible, maintainable, and extensible. As a developer, I always ask myself, how can I implement a solution that makes it easy to add new features, remove features, replace features, or apply the program in different situations? I like to think of writing good code like building a house. The first iteration of my program is like a basic one story house. Have I designed and built it so I can add another bedroom? How about adding another level? What about replacing the kitchen with a completely new layout? If the foundation, supports, and plumbing weren't laid out properly from the start, I may have to tear down my entire house and rebuild a completely new one to get my new room. There isn't only one way a house should be built. It all depends on where it will be built and who will live there. Just like there are many ways to build a good house, there are many ways to develop good code. [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) define these different code structures a developer can use to implement solutions. They're not strict standards with exact lines of code to use.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=93)** Rather there are templates and best practices that provide room for interpretation based on the programming language and use cases. While design patterns have been in use for years, they become widely adopted and popular thanks to Erich Gamma, Richard [Helm](../../Glossary/Tool/Helm.md), Ralph Johnson, and [John](../../Glossary/Tool/John%20the%20Ripper.md) Vlissides, better known as the gang of four. They wrote a book called "Design Patterns: "Elements of Reusable Object-Oriented Software," which outline 23 different design patterns. Since then, developers all around the world have used and expanded on these patterns. When the gang of four introduced their initial set of design patterns, they split them into three classifications: creational, structural, and behavioral patterns. Creational patterns are focused on instantiating objects in a way that hides the mechanisms of their creation from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program. Structural patterns simplify the relationships and hierarchies between different classes and how they can be used to build larger and more complex entities. Finally, behavioral patterns provide common ways objects can communicate and pass requests with one another. In this course, I will be focusing on five patterns that all belong to the creational patterns category: the Factory Method, Abstract Factory,
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=188)** Builder, Prototype, and Singleton design pattern. My goal is to describe the intent of each pattern and provide analogies to help cement the concept of each pattern. I'll demonstrate simple implementations for each that you can expand on and apply to your programs. Using design patterns will make your code easier to maintain and extend so you spend less time refactoring code, or worse, needing to start over from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (6), [Software Development](../../Topics/Software%20Development.md) (1), [Helm](../../Glossary/Tool/Helm.md) (1), [John](../../Glossary/Tool/John%20the%20Ripper.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creational patterns overview](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=0)** - [Instructor] The goal of creational patterns is to efficiently create objects in a way that increases the flexibility and reuse of existing code. It does this by moving the creation of objects out of the main code and into separate classes, thereby encapsulating it. The main code would no longer have explicit references to concrete classes and their instantiation. It makes the concrete classes independent of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code base. By doing this, it increases the system's flexibility to determine what, who, how, and when objects are created in an application. This allows all the logic for specifying which object to create to be in one location and thereby making it easier to maintain the code base. This allows us to avoid hard-coding behaviors into an application that would otherwise force us to refactor later when requirements and features will inevitably change. Hard-coding doesn't promote reuse and makes it hard to keep track of errors if you need to update things in multiple places. So the main code will only be aware of the abstract representation of an object and the encapsulated creators will provide the correct concrete object. This allows for decisions to be made at runtime based on inputs and the status of a system that can affect which objects are created. There are five different types of creational [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md)
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=94)** that I'll be covering in this course. Each of them emphasizes a different use case that I'll explain as I discuss each type, but they all separate the creation of objects to make your code base more maintainable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 2. Creational Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Inheritance vs. composition](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=0)** - [Instructor] One of the first concepts taught in [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) are classes and inheritance. It's a powerful paradigm that helps simplify code and encourages reuse. However, it becomes easy to fall into the trap of creating overly complicated classes that makes it difficult to maintain. Imagine I want to set up a menu for a coffee shop and the drinks that it could create. I'll start with a Drink class with a property for espresso and a method called Make that puts the drink together. From it, I create a Latte class that inherits from the Drink class. It has an additional property for milk and the Make method is overwritten to include steaming the milk. I'll create another class that inherits from the Drink class and call it Cappuccino. But it has foamed milk instead of steamed milk. Again, the Make method is overwritten to make the drink. Sometimes the latte or cappuccino needs to be made with soy, so I'll make new classes for those substitutions. Other times a drink could have a shot of caramel flavoring. So I'll make new Latte and Cappuccino classes that has the caramel property and update those make methods to add the flavor. And yet another variation is that the flavor could be a hazelnut. So again, I make additional classes for that. As you can see, this is getting a little out of hand. This is known as class explosion.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=95)** I've got so many classes it's going to be completely unwieldy to maintain and keep track of all of them. What if I changed my soy milk supplier and the new supplier adds a little sugar to the milk, then I'll want to tweak my recipes to use less soy milk so they're not going to be too sweet. One way to help remedy this is to have my Drink class contain all the possible ad-ons as properties and to use Boolean values to designate slight variations that can be specified when creating the object. This simplifies things a little, but now I want to add tea to my menu. It could be made with milk or soy, but it's not made with espresso and it makes no sense for it to have flavor shots. So those properties will never be used in an instance of a Drink that's meant to be a tea, which would be a waste of memory to include them. This also means I'll have to add a property for tea leaves, but tea leaves aren't used in other [products](../../Skills/Software%20Development/Microsoft%20Products.md). A better way to structure my classes is to use composition along with inheritance to make my code more flexible, and I won't have unneeded extra code shared by all classes. Composition is when a property is another class that's referenced by a class. Inheritance is when one class extends another. So a latte is a drink. Composition is when one class uses or consists of another.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=190)** So a latte has a flavor shot in it. So a latte doesn't inherit a flavor shot, instead it could be composed with one. This would be another way to represent my drinks. I've made a Milk abstract class that Whole and Soy inherits from, and I've made a Flavor class that None, Caramel, and Hazelnut inherit from. This allows me to easily mix and match items as needed. And if I want to add almond milk, I don't have to change my Drink classes at all, and this keeps things decoupled. The use of composition is really important in programming. It gives you more flexibility and a number of [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) take advantage of this concept to make them effective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** make (10)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Composite object example](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=0)** - [Instructor] To help show how to define a class using composition instead of inheritance, I'll create a complex object using simpler objects. A common example of a complex object with mixed and matched simpler objects is a fast food combo meal. All meals come with a main item, a side and a drink. So each of these items are the simple classes that can be used to make a more complex, combo meal object. The simple class diagram for the combo meal would look like this. The entree, side, and drink objects are properties of the more complex combo meal object. To show how to define the complex class, I've opened 02_02 Comp_Start. I've already defined my simpler classes ahead of time. At line 10 is the start of the entree class definition. It has one protective property at line 13, the name of the entree and the method at line 15 to return that name. This method will be overrided in a later chapter for the derived Entree classes. At line 23 is the start of the side class definition. And that line 26. It also has a protected property and to get method at line 28 to return that property value. Finally, the drink class is to find that line 34. It has a protected drink property at line 37, which gets updated by the constructor. The constructor whose definition starts at line 39.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=95)** We'll print the console and assign the string "soda" to the drink property to start defining my complex meal object. I'll go down to line 51 and start typing class, Meal Combo add my curly brackets. First, I'll start with the private section. So I'll type private a Meal combo consists of three items. So I'll start adding them as properties here. First is my Entree, lowercase entree below that is my Side object and low case side. Next comes, Drink, and lowercase drink, and finally something to represent the bag that all of this goes into. So add another property of type char_bag, which has a hundred characters now for the public section. So under all that I'll type public here, I'll start with the constructor. So I'll type Meal Combo, Const Char type. Add my curly brackets. The argument for this constructor is a string that describes a kind of combo this is. Maybe it's a burger combo or maybe it's hotdog combo meal. The value is added to the underscore bag property in the constructor using sprintf underscore s
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=190)** underscore bag,"/n%s meal combo", and then the type.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=206)** So the slash N starts a new line and the percent S represents a string that I'm going to place in this position, which happens to be the type variable to add the items for my meal. I need some setters. So starting at line 63, I'll edit Entree with void set, entree, entree E this method was at the entree property with the object E in my complex object. So in the next line, I'll add my curly brackets. And within this method, I'll type entree equals E. next comes my side. So starting at line 67 of the finite with Void set side side, S add my curly brackets
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=262)** and then set the property side equals S last but not least comes my drink. So my setter method for the drink, we'll start with Void set, drink, drink D the usual curly brackets lowercase drink equals D. Now I've composed my complex object with simpler objects. I'm going to add one more method to return the names of the objects. So at line 75, I'll start defining the method Const, char, openmealBag, add the curly brackets to get the objects in my meal combo. I first combined all the names into a single string variable named underscore bag using sprintf underscore s, underscore bag starting quotes,
>
> **[5:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=330)** and then present S to represent each item that I want to print to the screen. So percent S percent S percent S so I'll put present S in four times, and then outside of my quotes I'll list off the variables that will be printed in place of the percent S so underscore bag followed by entree, get entree. This will return the string. That's the name of the entree and place it in the second percent S in the string next is side get side, and finally drink, get drink. And then under all that, I returned underscore bag to get the full string. This is an example of how to create a complex object using composition, instead of inheritance by building with simpler objects to make this much more complicated one, I'll use this complex object later in chapter five, as we look at a pattern to help create objects like this.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** char_bag (1), openmealbag (1)
> **Cross-References:** in the next (1), later in (1)
> **Speakers:** - [instructor] (1)

#### [Concrete vs. abstract](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=0)** - [Instructor] When developers initially start learning about creating classes and subclasses, they start with a parent or base class. Take, for example, an Animal class with methods for eat or makeNoise. Typically these methods are implemented in the Animal class, but then the Child class will override it. For example, a Dog class inherits from animal and overrides the makeNoise method, so the dog barks. The method makeNoise will always be overwritten by the classes that inherit from Animal. So it shouldn't be necessary to define something in this base class. C++ allows me to do that with the virtual keyword. This indicates to the compiler, and other programmers, that I expect all subclasses to override this method with their own implementation. The ability to define methods in this way is incredibly useful. I can use this class as a blueprint for all classes that will inherit from it. When defining a method with the virtual keyword, I can choose to leave the curly brackets as I would typically use them, or I can use = 0, since it's understood by the compiler that this method will be overrided and there's no need to define anything in it. Since the virtual keyword indicates to the compiler that I expect all subclasses to override it. If I happen to forget to do so, I'll get a compiler error when I build my code. This way, I can avoid a situation
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=94)** where my Dog object says something generic instead of barking. The base classes that have virtual methods are also known as AbstractClasses and the derived subclasses are called ConcreteClasses. The concept of abstract and concrete classes is key when working with [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). Many patterns rely on inheritance to provide the ability to easily extend and maintain code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Code Identifiers:** makenoise (3)
> **Analogies:** for example (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding UML](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=0)** - In this course, I'll be presenting class diagrams in the Unified Modeling Language or UML. This is a common way that developers represent the classes in their system and the relationships between them. This isn't meant to be a full lesson or course on UML, which includes much more than just class diagrams. But I want to explain enough for you to understand the diagrams that I'll be presenting for each design pattern. This is an example of a class diagram. Each of these blocks represent an abstract or a concrete class. The top section is the name of the class. The second layer will contain the attributes or properties for that class. And finally, the third layer will contain the methods for the class. Notice that the method names include parentheses for the argument list. This helps differentiate this layer from the one for the properties. To help save some space and keep my diagrams from looking too cluttered. I will sometimes leave out the second or third layer. To show the relationships between the classes arrows with different styles are used. A solid line with an arrow at the end represents inheritance the arrow always points from the subclass to the parent class. It's assumed that any properties or methods shown in the parent class will be inherited by the subclasses,
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=93)** but they can be repeated in the diagram. Any additional properties or methods in the subclass belong only to the subclass itself. A dotted line with an arrow at the end represents a dependency between two elements. In most cases here, this means one class is calling another and the arrow will always point from the caller to the callee. So in this example, the derived class is calling a method in the dependent class. A solid line with a diamond at the end indicates an aggregation relationship. This is also called a Has-a association. This means one element contains one or more other elements. The arrow will always point to the element that is referenced by the other. In this example, FridgeClass contains an element of FoodClass. This is not necessarily a one-to-one relationship. It's possible to have multiple FoodClass objects as a part of the FridgeClass. And it's also possible to have a FoodClass object without an instance of the FridgeClass. There are more components and details to a class diagram. But this is all you need to understand the relationships between the elements in the [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) that I'll be going over in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Env Vars:** uml (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - in (1)


### 3. Factory Method

[↑ Back to Table of Contents](#table-of-contents)

#### [Factory Method concept](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=0)** - The factory method is one of the most used [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) because it encapsulates the creation of related objects in a single place, that's abstracted away from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program. It provides an interface for the program to create new objects without exposing the underlying creation logic to the rest of the program or other clients that use the object. I like to think of the factory method, like a coffee machine. There are some that can be used to create several different types of coffee, such as an espresso, latte or cappuccino. When the coffee machine is first turned on, it's ready to make coffee, but it doesn't know which type of coffee to make until someone comes along to use it. If someone comes up and selects an espresso, the machine will grind the beans and heat up the water to give them the perfect little cup of espresso. If a different person selects a cappuccino, the machine goes through a similar process of grinding beans and heating up water, but it also needs to steam and froth some milk. The factory method pattern works like the coffee machine because it allows a program to create objects based on parameters at runtime. This allows a program to execute without knowing ahead of time, exactly which objects it needs to create. If the coffee machine knew which type of coffee a person was going to select that day, it could have the latte or espresso already made and waiting
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=95)** In the same way, if I knew ahead of time which type of object my program will need before running it, I can simply create the object in place. But when I don't have that ahead of time knowledge, I use the factory method, which waits for specific inputs at runtime to create the appropriate object. The factory can create a number of different objects or [products](../../Skills/Software%20Development/Microsoft%20Products.md) as long as they all share the same interface or base class. How the coffee machine knows which object to make could be as simple as a button pressed. It doesn't matter if the underlying logic used to decide which type of object to create is simple or complex. The factory abstracts, all of that away from the collar. This is the generic class diagram of the factory method pattern. The product defines the interface or the base class of the object that the factory method creates With the coffee machine example, the product can be the coffee cup that I'll get from the machine. It's generic, so it can represent the different types of coffee that I can get, but it doesn't specify exactly which kind. The concrete product defines the implementation of a specific object. There are a number of different concrete products that can be defined in my coffee machine, and each will include the specific process or recipe for
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=191)** creating that object. For example, to create the concrete product of Nespresso, my coffee machine will need to grind enough beans per one shot of espresso To create the cappuccino, my coffee machine will need to grind the same amount of coffee beans and heat up some milk to make foam for the drink. Finally, to create a latte, the coffee machine will need to steam the milk instead of frothing it. All three of these concrete products inherit the same interface for coffee that define the the generic product that the machine creates On the other side, the creator is an interface that defines a factory that returns the product. This is like a schematic of a coffee machine. It defines that there needs to be a place for beans and milk. And that it needs to take in an input that specifies which coffee to make, But it's not a real coffee machine. And it won't give me an actual cup of coffee. The concrete creator overrides the creator and returns the correct product based on the type that's specified. This is the actual coffee machine that will take someone's input, like from a button and produce a proper type of coffee. If someone selects a latte, then the machine will follow the latte recipe in the concrete product to produce an actual latte. You can think of the product and concrete product as
>
> **[4:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=287)** defining how the factory creates an object. And the concrete creator defines what to create. If I want to add another item to the coffee machine, such as an Americano, I only need to define a new concrete product for it and extend the concrete creator to include it. The key here is that the factory method pattern lets the subclasses instantiate the object- instead of the main program. This allows a programmer to easily add new products or change existing ones without needing to make changes throughout an entire code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** make (6)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)

#### [Factory Method implementation](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=0)** - The goal of the FactoryMethod pattern is to separate the creation of objects from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the main application code. As a starting point, I'll have defined my [Products](../../Skills/Software%20Development/Microsoft%20Products.md) and I'll walk you through implementing the ConcreteCreator. To show this, I'm going to create a program that prompts the user to select a type of Coffee they like and return an object of what they selected. As a starting point, I've opened 03_02_Factory_Start. I've already set up my base class Coffee at line nine, which all my other products will inherit from. And below that I have two classes that inherit from it, Espresso and Cappuccino. The Espresso class at line 24 has an updated constructor that grinds and brews the beans. And at line 36, the Cappuccino class has a constructor with the added step to heat and foam the milk. Now at line 49, I'll create my CoffeeMakerFactory by typing class CoffeeMakerFactory. And then the next line, I'll add an open curly bracket and hit enter. Next, I set up the private members of my factory, so I type private. On the next line, I add a Coffee object with Coffee _Coffee. Now to specify the public members, I add the line public. For the method that'll return the specified Coffee object, I'll type Coffee GetCoffee.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=99)** And press enter and add the open curly bracket. This GetCoffee method returns a Coffee class which is my product's base class. Since both Espresso and Cappuccino inherit from the Coffee class, they can also be returned by this method. I want to create a cup of Coffee based on input from the main application. To do this, I'll prompt the user to specify the type of Coffee they want. To store the choice to user selects, I'll define the variable int choice. Now to set up the prompt for the user to select the type of Coffee they'd like. On the next line, I'll type cout "Select type of coffee to make."
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=154)** And put an end line. On the next line, I'll provide the first option with cout "1: Espresso", and end that line. The line after that is the second option cout, "2: Cappuccino."
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=185)** End line. Next to prompt the user for their selection, I use cout selection:
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=198)** end line. And on the next line I'll store the user's selection with cin choice. Note, the arrows are pointing in the opposite direction because I want to store the value in the variable choice. Now I take this input choice and use a switch statement to decide which of my derived product classes to call. so on line 64, I'll start with switch and then brackets choice, put in my curly brackets. To handle choice number one, I'll add case one. And then on the next line, return new Espresso. This will return an Espresso object if the user selected one. On the next line, I handle case two, which will give me a Cappuccino object, so I return new Cappuccino. Finally, to finish off my case statement, I need to handle the default case. So default. Here I want to inform the caller that the input was invalid. so I do that with cout "Invalid selection,"
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=290)** end line. And I'll also need to return something, so I'll return null. This is all I need for my factory to return a specific product object based on the input it was given. In the next video, I'll show you how to use this FactoryMethod in the main program and step through the running code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - the (1)

#### [Running the Factory Method example](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=0)** - To show how to use a defined factory method, I've opened three, three factory run start. In here, I've set up my coffee objects and my coffee maker factory from the previous video. The factory will prompt the user to select a type of coffee and return the specified object. In the main part of my program, I instantiate an instance of my factory by typing coffee maker factory coffee machine. On the next line, to declare a coffee variable, I add coffee cup. Now, to call my factory's get coffee method to get an instance of the type of coffee the user had asked for, I type cup equals coffee machine, dot get coffee.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=57)** On the next line to double check if the correct object was created in return, I'm adding C out end line, you had asked for, an cup get type, end line.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=84)** This will write to the console with the returned value from the method, get type. My code's all set, so I'll build by pressing control shift B. I'll add a break point here at line 80, and at line 61 to help see what's going on. To give this a whirl, I press F five to run my built application. On the console, I see the options that I had coded, and a prompt to pick a drink. Hmm, I feel like having a cappuccino. So I select number two and press enter. Over in visual studio, we see that we've stopped at the break point on line 61. So now let's see what my program does with this input. Remember, I had selected number two for a cappuccino. So when I press F 10, I'm immediately taken to line 66 under case to. Here, a new cappuccino object will be instantiated and returned. Pressing F10 again, I see the steps to make my drink printed on the console. Pressing F ten one more time takes me back to the main. Another F10 goes to the next line. When I press F10 one more time, I see the type of coffee I ordered, which was a cappuccino, on the console. To end the execution, I press F five.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=180)** I'm going to remove the break point at 61, and run this again by pressing F five. But this time I'm going to select an espresso. So I'm going to press one, enter. In the background an espresso object was returned. On the console, I can see printed on the screen, the steps to create an espresso. A press of F10, and I see the message that I've asked for an espresso. I'll press F five one more time to end the execution. So when I run it again, my factory method is able to understand which object I was asking for and promptly return the one that I requested. If I want to update my menu of coffees, I only need to define a new class at line 45 and update my factory method to include it in the choices. This is what makes the factory method so useful. I can decouple the creation of my objects from the main code, which makes it much more maintainable and extensible.

> [!info]- Semantic Content
>
> **Env Vars:** f10 (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** visual studio (1)
> **Prerequisites:** set up (1)
> **Speakers:** - to (1)

#### [Factory Method variations](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=0)** - [Instructor] The factory method pattern can be used to easily extend the type of objects that can be generated, but it also allows you to update the generation of objects in only one place or even to swap out variations of factories for the same group of objects. The standard example is to generate objects based on user input, which is a very common use case. But let's suppose I have a game that generates rocks in space that a player needs to avoid and blast away. There are three types of rocks: simple, small ones that are easy to blast away, bigger ones that will split into smaller ones once hit, and metallic ones that will need a stronger blaster to destroy. Each level could use a different rock or each level could have a different number of each type of rock. So now, my factory isn't choosing which rock to create based on user input, but rather which level the game is at. In this snippet, I've replaced the prompts with logic to determine what type of rocks to create based on the level that the player is at. The factory with the prompt could still be useful in my game. Perhaps I want to give players a practice mode where they can practice their aim specific to the rock type. In that case, I could easily swap back to the user prompt type of the factory. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program is decoupled from the underlying implementation of the factory and how it decides which objects to create.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=96)** And thanks to polymorphism, I can easily swap between these factories without changing the rest of my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Abstract Factory

[↑ Back to Table of Contents](#table-of-contents)

#### [Abstract Factory concept](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=0)** - [Instructor] The abstract factory pattern is similar to the factory method where a factory is used to create objects. However, unlike the factory method pattern, it emphasizes the creation of a family or suite of classes or [products](../../Skills/Software%20Development/Microsoft%20Products.md). It provides an interface for creating families of related or dependent objects without specifying the concrete classes. The objects from one suite or family are not compatible with the objects from another suite. And you can think of the abstract factory design as a factory of factories. Imagine a set of car manufacturing plants that can create sedan style cars. Every brand of car has their own specifications to make their version of a sedan. Typically, a factory designed to make gasoline cars is not going to be able to make electric cars or vice versa. For example, the door made at an electric car factory isn't going to fit in the gasoline car so all of the car parts need to be kept in the same family. The concept of the abstract factory pattern is similar to the car manufacturing plants. Most plants or factories will follow a similar layout with materials, molds, plans, and robotic arms, and all can produce the doors, wheels, engines, and bodies. But the factory for each brand of car
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=93)** will vary just a little on the details of the materials, molds, plans and robotic arms that they use. Each factory is designed for their specific brand of cars. The generic class diagram for the abstract factory pattern looks like this. There's a lot going on in this diagram. So I find it easier to understand the abstract factory if I build it up from the simpler factory method first. Similarly, many programming applications start off using the factory method that looks more like this class diagram, but evolve over time towards the abstract factory pattern as they grow and expand. The abstract factory is the interface that defines a concrete factories, like the floor plans of a building. So the concrete factory is like the physical concrete car manufacturing plant. And the concrete products it can create are objects like doors and engines. This factory method pattern implies that any engine can be matched with any door, but that doesn't really work because an electric engine isn't going to work in a gasoline car. So what I need to define are multiple physical concrete factories to manufacture each type of car. All of them use the abstract factory interface, but are implemented just a little differently, just as each brand of car will build their manufacturing plant just a little different.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=189)** In the class diagram I've colored each one a different color to help differentiate them more easily. And each factory will create their own variation of each concrete product. So factory one will create a variation of a door and an engine that will go together in the same brand of car. And factory two will create a variation of a door and an engine that'll go together in a different brand of car. And finally, the same applies to factory three. Notice that every factory has their own unique implementation of the concrete product, but they all make use of the same abstract interfaces. A specific concrete factory is not able to create the concrete product belonging to another concrete factory. The last thing to add to this diagram is the client, which is the top level program that requests a product from the factory. This is like the person that is buying a car. Depending on the type of car they want, a different concrete factory will be used to create the parts of the car for them. Now, if I want to add another car brand factory to my program, this pattern makes it incredibly easy to do. I just add another concrete factory and the corresponding concrete products that the new concrete factory would create. As you can see,
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=281)** this is an incredibly powerful design pattern that makes expansion easy. It's no surprise that this is one of the more widely used patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3)
> **CLI Commands:** make (4), find (1)
> **Analogies:** similar to (2), imagine (1), for example (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Abstract Factory pattern implementation](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=0)** - [Instructor] The AbstractFactory's designs goal is to have different concrete factories creating similar objects. But the exact construction of the objects are defined differently by each factory, which allows objects that belong in the same suite or family to be kept together. For this implementation, I'm going to create two car factories, one for a gas powered car, and one for an electric car. The gas powered car factory will have its own implementation of a car door and its own gas powered engine. And the electric car factory will have its own implementation of a car door and its own electric engine. To help us get started, I'll have created these [products](../../Skills/Software%20Development/Microsoft%20Products.md) ahead of time; the doors and the engines. And we'll focus on creating the factories for this example. I've opened 04_02_AbFacImp_Start. We have already implemented my base door class at line 10. It has a public method cut open that will be overrided by the derived classes. I've extended the door class with a derived gas car door at line 19 and another class electric car door at line 32. The gas car door has overrided the open method at line 26 and right clicks onto the console when it executes. The electric car door on the other hand, writes is silent, gentle :shhhhh'
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=92)** at line 41 when it executes. Scrolling down to line 46, I've also implemented my base engine class and the respective derived classes. The guest engine class is defined at line 58 and the run method is overrided to print room to the console when it runs. The electric engine derived class is defined at line 75 and it overrides the run method by writing "shhhhh" to the console. I have all my products, but I need to implement my factories that will create these products. I scroll past the products and start the finding a base factory class at line 87 with class CarFactory. I'll add my curly bracket and start defining the public members with public. All my factories will be derived from this class. Since all cars have doors and an engine, I'm adding two virtual methods to build them and return the objects. First to build a door, I type virtual Door build door=0. And on the next line to build the engine, I add virtual Engine BuildEngine = 0.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=179)** Notice I'm using the base classes for the door and the engine objects. Remember that the concrete factories are going to specify the concrete implementations of products. The first factory I'm implementing is a gas car factory since they were around first. On line 94, I specified this inherits from the base factory with class GasCarFactory:publicCarFactory, and have my open curly bracket on the next line. On line 96, I use public to start the public section. Now I specify the products that belong within the family of the gas cars. For the door, I define a method Door, BuildDoor,
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=234)** add my curly brackets. And on the next line I add return new GasCarDoor.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=247)** This will return a GasCarDoor object. Then on line 101, I'm going to add a method to build the engine. So I'll type Engine BuildEngine and below that I'll add return new GasEngine,
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=271)** and this will get the GasEngine object. Notice that I have all the products meant specifically for the gas car altogether. Next, I will do the same for the electric car factory. On line 107, I start the designing the factory with class ElectricCarFactory:public CarFactory,
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=303)** add my curly bracket and on the next line I'll type public. Next to override the bill door method with Door BuildDoor.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=318)** Since this is the electric car factory, it will build the electric car door with the line return new ElectricCarDoor.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=334)** On line 114, I'll overwrite the build engine method with Engine BuildEngine.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=348)** This time to get the electric engine, I use return new ElectricEngine. With my two factories all set up, it's time to build some cars in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (7)
> **Code Identifiers:** publiccarfactory (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Using the Abstract Factory](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=0)** - [Instructor] With my product and factory classes all defined, it's time to use them in my main program, I have opened 04_03_AbFacRun_Start. In main at line 122, I first declare a car factory object called car plant. Car factory, car plant. I use the base class here since I don't know which type of car to create just yet. I want the user to select what kind of car to make. So I'll have a variable int choice. In the next few lines, I've already set up the prompts to ask the user to pick between a gas and an electric car. To initialize a proper derived car factory, based on the input, I use a switch statement at line 132, switch choice.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=60)** Add my curly brackets. To handle when the value of choice is one, I'll add case one. And under that car plant equals new gas car factory.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=77)** And below that a break to leave the switch statement. Next, under that to handle when the choice value is equal to two, I'll type case two and car plant equals new electric car factory. And below that another break to leave the switch statement. Finally, to handle when the input doesn't match any of the cases, I use default. And I'll provide a user with an error message with C out, invalid selection, end line.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=121)** I still need to return something from this case. So on the next line I'll use car plant equals null. And one more break. With instantiating the car plant factory all set up, I need to create the proper doors and engine for the selected car type. On line 146, I check if the car type selected was valid. So I use if car plant not equal to null,
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=158)** put in my curly brackets. So if the car plant is not null, the first thing my factory will create is a car door. With door, my door equals car plant, build door.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=184)** Notice that I'm using the base door class to declare the car door. Since both the gas and electric car factories are able to create doors that inherit from the base door class, the type of door will depend on the type of factory the user had picked. Next on the next line, I create the car engine with a similar use of the base engine class. So I'll type engine, my engine,
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=215)** equals car plant, build engine. With the specified car created, it's time to take it for a test drive. First, the door needs to be open. So on line 151 I'll type my door open,
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=238)** and to start the engine on the next line, I'll use my engine run. Now that my code is complete. It's time to build it with control shift B, and now it's time to give it a spin.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Running the Abstract Factory](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=0)** - [Instructor] It's time to give my car factories a spin. To do that, I've opened four, four AbFacRun Start and I'll add a break point at line 148 and one line 32 to help show how this works. To start I'll press F five. I had served the break point here at line 132, which is the start of my switched statement. I press F10 to step to the next line. Remember, I had selected an electric car, so the car plant has become an electric car factory. I'll press F five to continue to the next break point at line 148. Here, I'll use use F 11 to step into this call to build a door. This takes me to the line 111 in the electric car factory where the electric car door is instantiated. As I step through the code using F10, I see printed on the console that the door is being made. We can also see on the console that the car belongs to an electric car. As I continue to step through the code, I'm brought back to the main at line 148. I'll press F10 one more time to go to the next line. And F11 to step into this call. I'm taken back to the electric car factory, but this time at line 115,
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=94)** where the electric engine is being instantiated, I press F10 two more times, and I see the message on the console that indicates that the electric engine is being created. I press F10 again, and I'm back in the main and I'll step one more time. Now I'm part of the code where I'm taking the car for a spin. I press F10 to execute the open method. And I see on the console that the door opens like an electric car, shh. Another press of F10, and the console output shows that it runs like an electric car. Again, shh. Now to finish the execution with an F5. I'll run this again by pressing F5, but this time I'll ask for a gas car. So I'll press one, enter. I'll step through the code again by pressing F10. And you can see in the switch statement this time I'm at line 135, where the car plant becomes a gas car factory instead, I'll press F5 to get to the next break point. As I stepped through the code using F10, I can see on the console that the gas car specific door is being made and that the gas engine is being instantiated. And when I take it for a test drive
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=190)** the console shows the door acts like a gas car door, click. And the engine runs like a gas engine, vroom. The abstract factory pattern encapsulates the creation of objects and allows you to keep objects that belong in the same family together. This is incredibly flexible and makes it easy to extend. It's no wonder it's one of the most popular creational [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Env Vars:** f10 (9), f11 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Extending the Abstract Factory](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=0)** - The abstract factory is a powerful pattern. The key to this pattern is the emphasis on the family of objects, in particular that the objects from one suite or family, are not compatible with the objects from another suite. This pattern is used a lot in GUI design to keep elements consistent and cohesive with one another. Imagine an application that allows users to pick the theme for the UI. Many IDEs have a light theme and a dark theme. Notice that the text in the dark theme is a light color and easy to read against the dark background. Imagine using that same text over in the light theme, it's not easy to see the text, which makes the application harder to use. So if the background is one object, and the text is another object in creating the UI, I would want a way to make sure that the light colored text is always paired with a dark background. And the dark text is always paired with the light background. Using an abstract factory pattern, can help me keep the correct elements together, as the UI is built at runtime. This is what the class diagram would look like for the themes. There's one concrete factory for the light theme, that has its own concrete implementation for the text and for the background. And another concrete factory for the dark theme, with different concrete implementations
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=92)** for the text and background. Often times, the class diagram for the abstract factory, depicts each factory, having one concrete product for each abstract product. Keep in mind that this is a simple representation. When creating a real application, this can become more complex and a concrete factory could be making a suite of [products](../../Skills/Software%20Development/Microsoft%20Products.md) that all come from the same abstract product. Going back to my application theme example, my text products can consist of one for the default text, one for the green text, and one for blue. However, the shade of green or blue will be different based on the theme to ensure there's enough contrast to see the text. So each of my light and dark factories will also dictate the color of the text. So now my class diagram is going to become even more complex. At its core, this is still the abstract factory pattern, but it gives me multiple ways to easily extend and grow an application. This is what makes this pattern so powerful and why it's so frequently used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Definitions:** is a  (3)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Env Vars:** gui (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - the (1)

#### [Challenge: Abstract Factory](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=0)** (upbeat tech music)
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=3)** - [Instructor] Time for a challenge. We're going to use what we've learned so far about the Abstract Factory, and extend some of the [products](../../Skills/Software%20Development/Microsoft%20Products.md) that the factories create. From the previous video, I had talked about having two different themes from my GUI, light and dark. For the light theme, the background is white, and the default text is black. And for the dark theme, the background is black, and the default text is white. So far, I've implemented a simple solution for this, that is represented by the class diagram shown here. The products are the backgrounds and text colors for each of the themes. And the light theme and dark theme factories, will instantiate the appropriate backgrounds, and text products. I have opened 04_06_AbFacFacFactory_Start, which is what I've implemented so far. When I run this, by pressing F5, the console pops up with a blue background and yellow text, prompting me to pick a theme. I'll select the dark theme by entering 2. And I see that the new lines have black backgrounds, and light colored texts. For this challenge, I want to update this application with an additional green text in both themes. Remember, the shade of green will be different based on the theme to ensure there's enough contrast
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=99)** to see the text. In summary, the objective is to add additional derived Text classes for the green text, update the factories to create the proper green text objects, and finally, write a message to the console using the appropriate green text. The class diagram that we end up with should look something like what you see here, where the green text is derived from the abstract Text class. To help, the code has been organized into regions to help identify the products and factories, as well as some hints on where to add the new class definitions. In the code, I'm using the function SetConsoleTextAttribute, to set the desired colors. The argument hConsole is a reference, or handle, to the console so I can change the background, and text colors. And the argument value is a numeric value that corresponds to a specific text color. The value 10 will give you a light green color, and the value 242 will give you a darker shade of green. This is not intended to be an actual GUI for an application. But it helps to provide some practice with the Abstract Factory. If you are using [Xcode](../../Skills/Mobile%20Development/Xcode.md) on a Mac, it does not need to call a separate function
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=193)** to change the color. So it doesn't need to get the terminal handle. Instead, color code can be used directly in the string output to set the color. This table shows the color codes needed for the challenge. This line of example code, will set the text color to black. This is not intended to be an actual GUI for an application. But, it helps to provide some practice with the Abstract Factory. Feel free to refer back to previous videos, or slides to help you. And remember, that your solution doesn't need to be the exact same as what I had come up with. So take some time to think about it, and then be sure to watch my solution video to see how I approach the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Xcode](../../Skills/Mobile%20Development/Xcode.md) (1)
> **Env Vars:** gui (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** hconsole (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Abstract Factory](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=0)** - [Instructor] How did you do on the challenge? I hope you are able to successfully extend the project to include the additional colors. I've opened four seven abstract solution to show you my solution. But remember, that this is just one way to implement the solution, and yours may look a little different. Recall I wanted to derive the additional text classes, so I'll start here in the text region of my code at line 56. And actually, I'll scroll down to the end to add my new classes. I'll begin with the dark green font, so at line 104, I'll type class DarkGreenText public text.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=57)** And under that, my curly brackets and start with the public section So public, and under that, the start of my constructor. So DarkGreenText, and as an argument, HANDLE hConsole. Remember, I need to pass the handle for the console so the colors will be updated on the screen. I'll add my curly brackets. And the first line in the constructor is SetConsoleTextAttribute hConsole, 242.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=114)** This is the function that will set the text colors on the console, and 242 will give the dark green color I want. Under that, I'll write a note to the console that the color has changed. So I'll type cout, making the text dark green,
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=142)** end line. Then online 112, I'll override the message method with void message HANDLE hConsole. Add my curly brackets. Again, I set the text color with SetConsoleTextAttribute
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=167)** hConsole, again for the dark green color, 242, and below that the message that I'll print, cout, this is the green front for the light theme.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=189)** End line. That completes the DarkGreenText class that'll be part of the light theme. Next is a light green text for the dark theme. So I'll start that online 120, I'll start defining the class with class LightGreenText
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=214)** public text, and my curly brackets and start my public section. And similar to my dark green constructor, my light green constructor will look like LightGreenText HANDLE hConsole, add my curly brackets. Now to set the proper colors with SetConsoleTextAttribute
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=252)** hConsole 10. So this time, the value 10 will give me the light green that I'm looking for. Below that, I'll add a message to the console. To see that color, I'll add a line to print a message with cout making the text light green,
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=280)** end line. So that's it for the constructor. Now to override the message method starting at line 128, I'll type void message handle. Again, I'll start with, and in this method, I'll start by setting the text color with SetConsoleTextAttribute hConsole
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=309)** and the value 10 for that bright green, and below that, the message that I'll print to the console with cout. This is the green font for the dark theme, end line. And that completes the tech section with the new derived classes. Next is onto my factories. So I'll scroll down to line 143. I'll start with the base factory and add another virtual method to create the green text object. So online 143, I'll type virtual text
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=356)** getGreenText HANDLE hConsole equals zero.
>
> **[6:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=367)** Now to update the derived factories to instantiate the correct green text object, I'll scroll down to my light theme factory and stop at 158, and add the new method for the green text by typing text getGreenText HANDLE hConsole,
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=390)** and my curly brackets. In the method, I'll return the dark green text with return new DarkGreenText hConsole.
>
> **[6:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=404)** Since this is the late theme factory, this will return the dark green text, which will have a higher contrast to the white background. Next comes the dark theme. So at line 176, I'll add Text getGreenText HANDLE hConsole.
>
> **[7:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=429)** Add my curly brackets, and in the method, I'll return new LightGreenText, hConsole.
>
> **[7:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=440)** And that's all the updates I need for my factories. The final section to update is in main. So I'll go to line 220 and I'll instantiate the green text with Text appGreenText
>
> **[7:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=460)** equals app getGreenText hConsole.
>
> **[7:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=470)** And down at line 223, to print the message to console I'll add appGreenText message hConsole.
>
> **[8:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=484)** With all my changes done, I'll press control Shift B to build and F5 to run it. On the console, I see the prompt to pick a theme. I'll pick the dark theme by entering two. Notice that the background switches to black and the text is white for the default text messages, and a bright green for the green messages. I'll hit enter to continue. And to run this again, I'll press F5. This time I'll pick the light theme by entering one. Now the background has turned white and the default text is black. The green message is in dark green this time, it shows up better against the white background. The goal of this challenge was to show how to extend a program that's using the abstract factory, and to show that a base product class can have multiple derived classes.

> [!info]- Semantic Content
>
> **Code Identifiers:** hconsole (14), getgreentext (4), appgreentext (2)
> **Env Vars:** handle (6)
> **UI Navigation:** scroll down (3), go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Builder

[↑ Back to Table of Contents](#table-of-contents)

#### [Builder concept](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=0)** - [Instructor] The builder design pattern allows us to build complex objects by separating the construction of the object from its representation. Unlike the factory or abstract factory, which builds her objects in one shot, this allows us to build a complex object one step at a time. It also allows us to use the same steps or process to create different representations of the complex object. This is a particularly useful design when creating an object that's made up of other objects. Each component can be instantiated separately and then put together before it returned to the color. Not only does separating an object into individual components help avoid a class explosion, it makes it easier to maintain. I like to think of this method of building a complex object as being similar to how a fast food combo meal is put together. The final product is given to a customer is one bag, but it contains separate components that are created separately in the kitchen. The typical fast food combo meal consists of a main item, a side and a drink. Some fast food restaurants have burgers and others have hot dogs or salads, but they all follow a similar process. They put together a main dish, then put together a side item, fill up a cup with a drink and put it altogether in a bag. And all of that gets handed over to the customer.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=100)** This is the generic class diagram for the builder pattern. The product represents the complex object that's being built one step at a time. And you can think of this as a bag with the complete meal that's handed over to the customer. The builder outlines the steps needed to create a product. It knows in general what the individual steps need to be followed to create that final product. In my analogy, each step would be the creation of each individual component of the meal, the main item, the side and the drink. This is not where to define how to build a burger or hot dog, it's just an interface that knows that some sort of main or side is a step in the process to make the final item. The concrete builder is where the implementation of the different components are specified. This is where the definition for building a burger or frying fries would be located. For example, it would have one method to build a cheeseburger, which could consist of grilling the patty, adding cheese and placing it all together in a bun, and a separate method for making fries that would include frying potatoes and seasoning them. Each concrete builder could build a slightly different product, I could have a different concrete builder that has a side salad component instead of fries. The director invokes the builder to construct the desired product and the concrete builder
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=191)** returns the product to the director. In our example, this could be the cashier or server that takes the order from the customer and communicates it to the kitchen where they put it all together. For complex objects they're made of separate components. The builder pattern enables you to encapsulate the build and to build the objects one step at a time before returning it to the caller.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Builder pattern setup](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=0)** - [Instructor] The builder pattern allows us to build a complex object one component at a time. For the example I'm about to do this is the class diagram for it. I will be building a fast food combo meal with two different types of combos, one with a burger and fries, and another with a hotdog and salad. Both meals will include a soda drink. The class diagram for the ComboMeal looks like this, where the meal has one entree, one side, and one drink. The entree could be a burger or hotdog. Both of which inherit from the Entree base class. Similarly, the side could be fries or a salad, which are derived from the Side base class. Finally, there's only one Drink class. As a starting point, I'll have all these objects defined ahead of time so we can focus on the builders. The Builder class diagram for the example will look like this. The MealBuilder provides the interface that outlines the components needed to be put together for a meal, so it includes an entree, a side, and a drink. There will be two concrete builders that specify exactly which objects are needed for a meal, a burger, fries, and drink for the burger meal, and a hotdog, salad, and drink for the hotdog meal. The product for this example is the meal combo object, which contains the meal components together. To show the classes I've predefined for my meal combo, I've opened 05_02_BuildSetUp_Start, which already has the components for the meals defined.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=97)** At line 11, I have my base class for the Entree or main item in the combo meal. It has a protected member defined at line 14 that will store the name of the main item. At line 16, I've implemented a method to return the name. I've derived the Burger class from the Entree class at line 23. And it stores the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) hamburger in the _entree property when it is instantiated, and it will write to the console how the burger is being made. At line 34, I've derived another class called Hotdog, and this one will store the string hotdog. Similarly, I've defined a base Side class at line 47, that has a protected member called _side defined at line 50 to store the name of the class. I also have a public method defined at line 52 that will return the value of the protected member. The derived Fries class is defined at line 59 with a constructor that will write to the console the process of making fries. On line 65, we'll write to the _side property the string fries. At line 70, I've defined another derived class called Salad that will store the word salad for the _side property. And the final item needed in the combo meal is a drink, which I define at line 81. It also has a protected field _drink to store the name of the drink at line 84, which is assigned when the object is instantiated.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=193)** At line 91, I've defined the public method to return the value of the property _drink. Now comes a complex class that comes from combining the simpler classes. The MealCombo class definition starts at line 98, and the private members consists of an entree object, a side object, and a drink object as well as a bag that typically goes with the meal. At line 106, I started the section that defines the public methods that'll set the meal items for a meal combo. Finally at line 123, I've added an openMealBag method that will let us see what's in the object. If the combo meal structure doesn't seem familiar to you, go check out the videos on inheritance versus composition in chapter two. With all my meal objects defined, I'll start putting my meal builders together in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Code Identifiers:** openmealbag (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Builder pattern implementation](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=0)** - [Instructor] With all my product components set up from the previous video, it's time to implement my builders. I've opened 05_03_BuildImp_Start, which has the meal combo classes all set up. To construct a meal combo object, I need builders. First thing I need is a base meal builder. At line 132, I'll start with class MealBuilder.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=30)** I'll add my curly brackets and start my protected section with protected. On the next line, MealCombo underscore meal. This will be the complex meal combo object that my builder will return when all the components have been created and added to it. On the next line comes public and a method to create the entree. I'll add virtual void. Under that, I'll create the side with virtual void cookSide. Next, I'll get the drink with virtual void fillDrink.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=87)** Finally, below all that, a get meal method for returning the completed combo meal. I'll type MealCombo getMeal. Curly brackets, and then within the curly brackets, return underscore meal. This completes my base meal builder, and this is what all my other builders will derive from. The next thing I want to do is to create the derived builders, which are based off of the meal builder I just created. The first concrete builder that's going to be derived from that is the one for the burger. I'll type class BurgerMeal public MealBuilder. Add my curly brackets. Now to start the public section with public, and under that, the constructor. BurgerMeal. Curly brackets. Within the curly brackets for my constructor, I have underscore meal equals new MealCombo burger. This will return a new combo meal object that I've called burger. Now to override the virtual methods from the base class. On line 154, I'll type void cookEntree.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=186)** Add my curly brackets below that. Since this is a burger meal, I want to return a burger. Burger lowercase burger equals new burger. Below my new burger, I'll set that as my entree for the meal with underscore meal setEntree burger. Next comes my side method. On line 159, I start with void cookSide. Within my curly brackets, the side for the burger meal is going to be fries. I'll instantiate the fries object with fries lowercase fries equals new uppercase fries. To add it to my meal object, under that, I type underscore meal setSide fries.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=247)** Finally, for the drink, I'll start on line 164 and type void fillDrink. Add my curly brackets for the method. Within the curly brackets, I type drink lowercase drink equals new uppercase drink. Under that, to add it to my meal object, underscore meal setDrink lowercase drink. That completes my builder for a burger combo meal. In a very similar way, I've already defined my hot dog meal builder. If I scroll down here, on line 173 is the start of the hot dog meal builder class. The constructor defined starting at line 176 will return a new meal combo object, just like we did with the burger meal. The over-rided cookEntree method, starting at line 180, creates a hot dog object instead of a burger, since this is, after all, a hot dog meal. Next, starting on line 185, the cookSide method will create a salad object instead of fries. Finally, the fillDrink method is the same as in the burger meal. With all my builders implemented, I can start using them in my main code, which I'll show you in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** cookside (3), filldrink (3), cookentree (2), getmeal (1), setentree (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Running the Builder example](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=0)** - [Instructor] Now that I have all the participants of my builder design defined, I'll put it altogether in main. To show how to do that, I've opened up 05_04_BuildRun_Start. At line 200, I'll first declare a builder with Meal Builder cook equals new meal builder.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=23)** I used the base class here since I don't know which type of builder to create just yet. On the next line I'll declare the product that will be returned by my builders. So I'll type meal combo, meal. I want the user to select what kind of meal they want. So I'll have a variable int choice. And the next few lines, I've already set up the prompts to ask the user to pick a meal type. So below that, to initialize the proper derived meal builder, I want to use a switch statement. So at line 213 I'll type switch choice, add my curly brackets. To handle when the user selects number one, I'll add case one and on the next line, cook equals new burger meal. So when the user selects the value one, they're asking for the burger meal, I'll add a break below that to exit the switch statement. And then on the next line I'll handle when the user selects number two. So I'll type case two and below that cook equals new hot dog meal. So if the user selects number two, they'll get a hot dog meal. Below that, I had my break to leave the switch statement and finally, to handle when the input doesn't match
>
> **[1:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=118)** any of the options that I want, I'll use default. And for that situation, I'll add a message to the user to let them know that it's an invalid input. So see out invalid selection and line.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=141)** I still have to return something. So I'll type cook equals no. And one more break. With instantiating the correct builder all set up, I need to create the proper meal based on what the user selected. So starting on line 230, I'll start calling the steps to build my meal components. First I need an entree. So add cook, cook entree
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=177)** then for my side, on the next line, it's cook cook side below that I'll need a drink. So cook fill, drink. And finally, I need my builder to give me my meal. So I'll type meal equals cook, get meal.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=204)** These four lines between 230 and 233 could be placed in a separate director class, but I chose to keep it in main to simplify this example. And the last thing I want to add to take a look at what's actually in my bag is see out meal, open meal, bag and line.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=230)** What this last line will do is write to the console what is in my bag. So I know what kind of meal I've gotten. Now to build my solution with control+shift B. To see how this all works, I'm going to put a break point at line 213 and 230
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=253)** and press F5 to start the execution,
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=261)** Over on the console, I see the prompt asking me which meal I would like to have. The hamburger is a pretty classic choice. So I'm going to go with that by pressing one and enter. The execution stopped here at line 213 at the start of my switch statement. When I press F 10, I jumped to line 216 here. A burger meal builder is being instantiated since this is the meal that I have selected. To continue to the next break point, I'm going to press F5. Here on line 230, I'm about to call the builders cook entree method. When I press F10, I see the steps to build a burger on the console, another press of F10, and I see the side being made. A step again and I see the drink being filled. Finally, on this line, I get the complex meal object back. To see what's in my meal I'll press F10. and on the console, I see that I have a burger meal with my hamburger, fries and soda. I'll go ahead and press F5 to complete this execution. I'm going to run it again by pressing F5. And this time I'm going to select the hot dog meal. So enter two and then enter. I'll step through my code again, this time I'm taking the line 219 where my hot dog meal builder is going to be instantiated.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=356)** When I press F5 to go to the next break point, I end up at line 230 just as before. As I stepped through my code pressing F10, I see this time my hot dog is being created, followed by my salad, and then following my drink, step two more times to open up my bag. And I see this time I have the hot dog meal with my hot dog, my salad and the soda. The builder pattern encapsulates the building of complex objects that are made with other objects. It allows me to separate the creation of the complex object from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my code base. So in the past three videos we've implemented and run a builder pattern. As you can see, it allows me to use the same steps to build complex objects made up of simpler objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** f10 (4)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Steps in the Builder pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=0)** - Unlike other [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md), the concrete builders can return [products](../../Skills/Software%20Development/Microsoft%20Products.md) that do not share the same interface or base class. The emphasis of the builder pattern is on the steps to create an object and not necessarily on the class hierarchy of the products. This is why when you look at the generic class diagram for the builder pattern, the method getResult is located in the concrete builders and not the abstract builder. If products happen to share the same interface, then it would be better to define the getResult method in the abstract builder like I did in the implementation video, but that may not always be the case. Think of the steps to make a custom piece of clothing. First, I would make measurements. Then I would cut pieces based on the measurements. Next, I combine the pieces. And finally, trim and put finishing touches on it. I could use the exact same steps to make a custom table, but I would never associate a shirt with a table. If these were classes in my program, they would not be derived from the same base class. A more application-based example of this would be exporting a report to different file types. Since file types vary so much, they are not likely going to share the same interface.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=97)** But the steps used to export the data are going to be the same. First, create a title, then add a summary. Next, format the data, add the table, and finally, we get the report. By focusing on the steps to build an object, the builder pattern can be useful in cases when complex, unrelated objects are needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** getresult (2)
> **Speakers:** - unlike (1)


### 6. Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### [Prototype concept](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=0)** - The prototype design allows a creation of new objects through cloning or copying existing ones. Imagine having an object that has many, many, many properties, and you want a copy of it that has all, or a lot of the same property values. If you create the copy by instantiating a new object in the traditional way, you'd have to set a lot of properties. There could also be private properties that can't be directly accessed externally. This is where having the ability to easily copy an existing object to create a new one comes in handy. The prototype design is like cell division or cloning in the biological world. There are so many traits contained in the DNA of any animal, which are like the properties of an object. Mammals like us, humans, sheep, or dogs have tens of thousands of genes that contribute to traits like hair color or size. You can think of each of these traits, like the properties of a class. A sheep class could consist of properties like wool color, wool length, tail length, size of horns, level of intelligence, stubbornness, or aggressiveness, et cetera. To create a new sheep object that is a clone of an existing one would typically mean creating a new object and setting each property individually to match the original. And like actual DNA it's not easy for us to know what all of the traits are or how they're defined within it.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=95)** However, if the prototype pattern is used. This can be done easily with a clone method. Another advantage to this pattern is when you want to create a similar object, but only one or two properties are different. This allows you to easily clone an existing object and then use fewer setters to change the desired properties. This is really useful when creating entities in a game where many of them are the same, but you need to create one that's just a little different. For example, I could create a game with many sheep and I want to have one boss sheep, that identical to all the other sheep, but has bigger horns than the others. It's much simpler to clone a sheep object and update the horn size property than to create a new object from scratch. This may sound a lot like using a copy constructor for a class, however, there's one main difference. And that is for a copy constructor. We need to know exactly what object needs to be copied. I could update my game to allow the user to choose which animal they want. Sheep, deer or cow. I don't know ahead of time, which animal I may need to clone for my boss. There are ways to do this with casting or conditional statements. However, if they all share the same base class, making a clone makes us very simple with a single call. This is what the generic prototype pattern looks like.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=189)** The client requests a new object, that's the same as an existing one, asking the prototype to clone itself. You can think of this, like the scientist, who's cloning a sheep or represented by the game system that's maintaining all the sheep objects. The prototype defines the interface for cloning. This allows a client to ask for a clone of an object without knowing exactly how it's implemented. You can think of this, like the DNA chain of a sheep. The interface for the object contains a clone method that's implemented by all concrete classes that use the interface. The concrete prototype implements the operation of the clone method, which in my example would return a new sheep with the same attributes as the original thereby creating a clone of itself. With the prototype design it's simple to make a clone of an existing object. Not only is it simple, it also allows us to copy the private fields that can't be accessed with a method externally.

> [!info]- Semantic Content
>
> **Env Vars:** dna (3)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [Prototype pattern implementation](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=0)** - [Instructor] To show how to implement the prototype pattern, I've opened six two ProtoSetUp Start. In here, I've implemented an abstract animal class that has many properties. I've divided them up between physical properties, such as hair color, weight and height and personality properties, such as intelligence and stubbornness. As I scroll down, notice the multiple setters for many of the properties in the class. I've only implemented setters for the physical properties, and there is no way to publicly set any of the personality properties. Also notice, that I haven't defined any getters, so there's no way to get any of the property values outside of the class. The first thing I need to do to implement the prototype pattern is add a clone method. So add that at line 18 with virtual, animal, clone, equals zero.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=66)** This is a virtual method, which means any derived classes will need to override it with its implementation of cloning. Scrolling down to line 53 is my first derived class, which I'm calling sheep. In the constructor starting at line 56, the personality properties are set with various values. I'm going to override the clone method here at line 63 by typing sheep, clone, add my curly brackets. And in the method, I'll return a copy of itself as a new object. So I'll type return, new sheep, this. Below this method, I'm going to add another method, though modify one of the sheep's properties. So at line 67, I'll add void, sharing, add my curly brackets. When a sheep's wool is sheared, its hair length gets shorter. So I'll update this value with something smaller by typing underscore hair length, minus equals two. So every time this method is called, the value decreases by two. That's all the updates I'm going to make to the sheep class. So next on line 74 is a start of a cow class that's also derived from the animal class.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=160)** Again, the constructor for this class will set the values for the personality properties for a cow object. At line 83, I'll override the clone method by adding cow, clone, add my curly brackets. And under that the call to clone an existing cow object is return, new cow, this Now all my classes are set up to be easily copied to create new objects. In main, I'll first start by instantiating an initial sheep object. On line 92 I'll start typing sheep, lowercase sheep zero equals new sheep. Now to set the physical properties for a sheep. I'll start with sheep, zero, set hair color, white. Followed by sheep, zero, set tail, five. And below that sheep zero, set weight, 90.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=254)** Next I'll set the height property with sheep, zero, set height, one. And finally the age will be sheep, zero, set age, five. That's quite a number of calls to setters and I'm only halfway done. The next thing I'll do is instantiate the cow. So starting at line 100, I'll type cow, lowercase cow zero equals new cow. For its properties, I'll start with cow zero, set hair color, brown. And under that, I'll add cow zero, set tail, 20. Next it's cow zero, set weight, 790. And on the next line, cow zero, set height, two. And last but not least, cow zero, set age, eight. Whew, that's a lot of properties to set. As you can tell,
>
> **[5:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=345)** this can get pretty tedious for objects that have even more properties. With my initial objects all set up, I'll show in the next video had to clone and update them.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Running the Prototype example](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=0)** - [Instructor] To clone the objects that I've set up in the previous video, I've opened 06_03_ProtoRun_Start. First thing I'm going to do is a new variable at line 107. I'll type animal farm. This small array will store the cloned objects that I'm about to create. At line 10, I'll make my first sheep clone by typing farm zero equals sheep zero clone.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=33)** And below that, I'll also clone my cow, by adding farm one, cow zero, clone.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=47)** I want to adjust the weight property of this cow clone. So at line 114, I'll use farm one, set weight 1000.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=61)** I think my initial sheep object could use a haircut. So down at line 117, I'll add the line sheep zero shearing. And below that, I want another clone of the sheep. So I'll type farm two equals sheep zero clone.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=86)** My code is now ready to build, which I'll do by pressing control shift B. I'm adding a break point at line 110 to see how this prototype pattern really works. To start writing the code, I press F5. Notice a local watch window just popped up. If it doesn't automatically pop up, you can get to it by going to Debug, [Windows](../../Glossary/Service/Windows.md), Locals.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=117)** This tool lets me see what my local variables look like at this specific point of execution. This is a pretty handy tool to watch variable values as they change during a program's execution. It's great when you need to debug code and are looking for changes to the variables. When I expand the shape zero class to view the values of its properties, I can see the values that I had assigned it using the setters, along with the values that are set by the constructor. Similarly, when I expand the cow zero object, I see the values that I set earlier in execution. Next, I'm going to press F10 to step to the next line. Back at the local window, I can expand the array and look at farm zero. I can see that the first element is a sheep object and that it has exact same property values as the original sheep zero. So I'm going to take another step in my code, and this time, cow zero was cloned. So when I look at farm one, the second element within my farm array, I can see that it's an exact clone of the initial cow zero object. Another press of F10 and I can see the update to farm one's weight property, but also notice that the initial cow zero object has the same weight as it started with. Now onto the next line.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=213)** Here, I've called the shear method, which decreases the hair length property in the original sheep object. Originally, that value was five, and now it's three. Remember, there was no setter for the hair length. It can only be modified by the shear method. So if I wanted to make an exact copy of this object using getters and setters, like I would traditionally do, it wouldn't be possible. When I step again in the code to make yet another clone, the new object is stored as a third element within my farm array. And you can see here, it's now taken the new value for the hair length property. The prototype pattern makes creating new objects that are copies of other objects much simpler. It allows us to ensure even the private property values that do not have public getters can be reflected in the new object as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Env Vars:** f10 (2)
> **Cross-References:** previous video (1), earlier in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Shallow vs. deep copies](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=0)** - [Instructor] When cloning an object, all the members of one object is clone into the new one. Consider this Barn A object whose properties include a pointer to a Sheep object. When it's clone, all the member values are copied over, and that includes the pointer to the Sheep. The referred Sheep itself is not copied since Barn A's member is storing the pointer to the Sheep and not the Sheep object itself. Since both the original object and the cloned object, both point to the same Sheep object, when Sheep is updated both Barn A and Barn B get the updated value. This is referred to as a shallow copy. Only the members of an object are copied over to the new object and any referenced objects are not copied. If unaware of this characteristic, this could lead to some unexpected behaviors in an application. If I want the reference objects to be copied as well, this is called a deep copy. In this case, any reference objects will also need to be copied, which means the clone method in the class needs to make a copy of the referenced object and assign the pointer to the newly copied reference object. This could be a recursive process if the referenced object references yet another object. So, should I use a shallow copy or a deep copy
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=96)** when implementing the prototype pattern? That depends on whether the intent is to share the reference object or not. If the reference object is a log file that both objects need to write to, then a shallow copy is sufficient. If the referenced object is a specific instance of a component of a more complex object, then the deep copy would be more appropriate. Not only does a prototype pattern allow me to copy complex objects, it also allows me to control the complexity of the copy itself.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 7. Singleton

[↑ Back to Table of Contents](#table-of-contents)

#### [Singleton concept](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=0)** - [Instructor] There are situations where an application requires an object that can be globally accessed, but requires one, and only one instance of this object. This is the perfect solution for a Singleton. You can think of a Singleton as being similar to the leader of a country. There can only ever be one at a given time. They're visible to everyone in their country and to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the world. However, they can be replaced with a new leader after a vote, at which point the old leader is no longer referred to as the leader and the new replacement takes on the role. A simple programming example of this could be a global counter that is used in multiple areas of an application. At first, it can be tempting to just use a static global variable, which is also accessible anywhere in the application. But that's asking for trouble. For example, if the global variable is complex to instantiate, I would want to wait until it's actually used before creating an instance. But if I'm not careful, I could end up having two instances of the same global object with the same name. Instead, if the class handles this itself, it frees me up from having to monitor and control that class' instance. The class diagram for the Singleton is fairly simple.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=96)** The class just contains a pointer to itself for clients to access its unique instance. And this here is a generic implementation of a Singleton class. What makes this pattern particularly unique is that its constructor is private. This means that only the Singleton itself is able to create a Singleton. I can't use the call "new Singleton" to instantiate a Singleton object. Sounds a bit circular, but this is how I can ensure there's only one, and only one instance of the class. Since the constructor can't be directly accessed, I need a different way to instantiate the Singleton. This getInstance allows me to do exactly that. It's a public method, so I'm allowed to access it outside of a class. And since it's a method in the Singleton class, it can access its own private constructor. Once the instance is created, it's stored in a static variable that I've called instance. Since it's a static variable, there can only ever be one instance of it. So this is how a Singleton maintains its unique instance. The Singleton pattern is a unique one that ensures an object is globally accessible, but only one instance of it can exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** getinstance (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Singleton pattern implementation](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=0)** - [Instructor] To demonstrate how to implement a singleton, I've opened 07_02_Singleton_Start. I'll start by defining my singleton class with class leader, and provide the open curly bracket. First, I make the private section. In here, I'm going to have a private static property, which is a pointer that points to the unique instance of the class. I'll type static leader underscore instance. Next, the private constructor, leader. Open curly bracket. In here, I'll put an output message to the console to indicate that the class was instantiated. I'll type cout new leader elected. End line. Below that, at line 17, I'll start my public section. Here, I'll have a static function for the class, which is used by clients to obtain the single instance. I'll type static leader getInstance.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=76)** I'll add my curly brackets. In this method, I want to check to see if an instance already exists. To do that, I'll use if underscore instance is equal to null. Beneath that, I have my curly brackets. If the instance doesn't exist yet, the class will instantiate it with underscore instance equals new leader. And then outside of my if statement, at line 24, I'll return the new instance to the caller with return underscore instance. At line 26, I'll also add another method that leaders typically do, such as give speeches. I'll define it as void giveSpeech. Add my curly bracket. What this method will do is print out a message to the console. I'll use cout, address the public. End line. That completes the class definition. Outside my class definition, to avoid linker errors when I compile, I'll initialize instance outside of the class definition. At line 32, I add leader underscore instance equals null. Now onto the main section of my code.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=173)** Here at line 36, I'll instantiate a new leader object by using leader elected equals new leader. I'll have my leader give a speech, so on the next line, I'll type in elected giveSpeech. Now I'm ready to build my example by pressing Ctrl+Shift+B. Wait, there's an error; cannot access private member declared in class leader. Remember, I made the constructor private. If I try to instantiate a leader object from outside of a class definition, I get this error. Instead, I need to access the singleton exclusively through the public getInstance method. To fix this, I'll remove lines 36 and 37 and use leader, getInstance, giveSpeech.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=235)** Now when I build, it's successful, because I'm now properly accessing the singleton instance through the public method. In the next video, I'll run this code and see how the singleton pattern works.

> [!info]- Semantic Content
>
> **Code Identifiers:** getinstance (3), givespeech (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Running the Singleton pattern](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=0)** - [Instructor] Let's pick up where we left off in the last video. To show how a singleton pattern all works, I've opened 07_03_Singleton. I'm going to put a break point here at line 36 and start writing the application by pressing F5. Here, we've stopped at line 36 and the program is about to access the leader instance for the first time. I step into this call by pressing F11, and we end up at line 18 where the getInstance method is going to get the instance of the singleton. I press F10 to go to the next line, where it checks to see if an instance already exists yet. Since it doesn't exist yet, when I press F10, a new instance is created on line 21. If I hit F10 one more time, notice on the console, we see the phrase, new leader elected, which means the singleton was created. Here at line 23, we'll return this instance. I'll keep pressing F10 to continue on until we end up back in the main. If I step again by pressing F11, I'm now taken to the giveSpeech method on line 26. If I continue to press F10 to step through the code, pass line 27, at which point we see the console update with the new phrase, address the public. I'll press F5 to complete the execution.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=97)** To see what happens if I tried to create another variable to access the singleton, I'm going to add a few new lines. On line 37, I'll add leader elected equals elected get instance. Underneath that, I'll have my object give a speech. Elected, giveSpeech. I'll re-build my code with Ctrl+Shift+B and I'll run it again with F5. We stop here again at line 36, where we know we will instantiate the leader singleton. I'll step past that with F10. Notice the two lines on the console that indicates that the singleton was created and we had called the method giveSpeech. Now I'm at line 37. If I step into this call with F11, I'm again at the getInstance method at line 18. Just like before, I press F10 to go to the next line, where it checks to see if an instance already exists. This time, the instance does exist, so when I press F10 again, it skips to line 23. At this point, I've already called getInstance once, so the singleton has already been instantiated.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=191)** It's that same instance that's going to be returned by this line. I'll continue stepping through my code by pressing F10. Just as before, the singleton's giveSpeech is called. We can see the expected text over on the console, address the public. I'll press F5 one last time to finish the execution. This is the simplest way to implement the singleton design. It was pretty simple, but you can see how it protects the instantiation of the singleton by forcing the call to go through the public getInstance method. This is how it ensures that there's only ever just one instance of the object.

> [!info]- Semantic Content
>
> **Env Vars:** f10 (9), f11 (3)
> **Code Identifiers:** getinstance (4), givespeech (4)
> **UI Navigation:** go to (2)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Is the Singleton a good pattern?](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=1)** - [Instructor] The Singleton pattern has two major characteristics to it. There's only one instance of it and it is a global object that can be accessed anywhere in a program. These are two characteristics that can be seen as bad programming practices. First of all, by having only one instance of an object can seem like a great idea. Say I'm creating a video game and I use a Singleton to ensure I only have one instance of the main character. This seems like a perfectly reasonable idea. A player moves their single character through a game from one level to the next. Now imagine my game becomes really popular and players are asking for multiplayer modes. This means I'm going to need to allow two or more instances of the character object in the game at a time. Unfortunately, by using the Singleton pattern, I have prevented myself from easily extending the program. This goes against the very reason why we want to use [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). It doesn't allow for the flexibility or the extensibility that patterns are supposed to provide us. The one use case that many developers will use a Singleton for is logging. It's a single resource that will commonly be used by multiple parts of a program. But even then, some will choose to avoid using the Singleton to allow for possible future extension.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=94)** You never know how your program will grow as you get feedback from users. A Singleton's characteristic as a global is the other reason we need to be careful about this design pattern. At first, global seem incredibly useful and makes it easy for different parts of our program to use it. However, this also means it can be changed by anything that accesses it. This can make it very hard to control, debug and maintain as the application grows. This characteristic makes the simple implementation of the Singleton pattern not thread safe. To understand this, imagine I have a Singleton object that has not been instantiated yet. If this happens to be a multi-threaded application, I can very well have a situation where two threads are trying to call getInstance at the same time. thread1 calls getInstance and checks to see if instance is null, which it is. So it enters the statement to create a new Singleton. Now, thread2 calls getInstance. At this point, thread1 may not have completed the creation of the new Singleton especially if it's a particularly complex one. So thread2 sees that instance is null and enters the statement to create a new Singleton. thread1 will complete its creation of the Singleton object and return it.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=187)** Then thread2 will complete its creation of the Singleton object and return it. Thereby overriding the one created by thread1 and potentially losing any information I wanted from thread1. There are two ways I can solve this problem. The first is to use lazy initialization. This is where I create an instance of the Singleton object at the very start of the execution. In this snippet, I've added a call to getInstance right at the start of my program to create and return the Singleton. This means instance will never be null whenever getInstance is called from now on and it will never need to create another instance. This avoids a situation where I accidentally overwrite an instance and potentially lose data. However, what if the Singleton object is expensive to instantiate and during a particular execution, it's never used? This would be a waste of resources. Another way to solve this problem is to protect the block of code where I'm instantiating the Singleton by indicating it to CriticalSection. What this does is allow only one thread to execute the full block of code at a time. So when one thread enters the section, other threads must wait for the first thread to complete before they enter.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=279)** This means once the first thread leaves the section, an instance of the Singleton will have been created and no other threads have entered the CriticalSection of code. This guarantees that when the next thread enters and checks the value of instance, it will see that it is not null and will not overwrite the existing instance of the Singleton. This tends to be the preferred approach but the downside is at designating a CriticalSection is a costly operation which will slow down the application. Not everyone agrees that the Singleton pattern should be used but now you can decide if it's a solution that fits your particular scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Code Identifiers:** getinstance (5)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparing creational patterns](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=0)** - [Instructor] With multiple patterns to pick from, how do you pick which one to use in an application? There aren't any hard and fast rules to follow to determine which pattern is the best to use in a given scenario. As with any design decision, it depends on the particular program you're trying to build. Two different patterns can equally be good. And sometimes the decision just comes down to personal preference. Sometimes a program will start off with one pattern and evolve over time as it grows to another pattern. For example, it's a common occurrence that a program will start out using the factory method. Eventually, it makes sense to start grouping [products](../../Skills/Software%20Development/Microsoft%20Products.md) together and so the program switches over to the abstract factory pattern. It's also possible to use more than one pattern in the same application. For example, the components in a builder could come from the products of an abstract factory. Let's revisit my scenario from the first chapter. I'm working at a company that's building a new adventure game. It has a character that's wandering around looking for treasure and defeating monsters as they go. When a new player starts the game, the first thing they'll do is set up their character. I let them pick out the character's attire, shield, and weapon of choice.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=93)** Each of these choices could be a separate object. Once they've picked the items that they want, their character is placed into the first level of the game. To create the character based on the player's choices, I could use the builder pattern, which allows me to build a complex object out of other objects. If a player updates their character's weapon later in the game, the builder pattern makes it easy to swap objects to create an updated character. To help a player advance through the game, I want to scatter a few different items throughout the levels that will increase the character's health. These items are similar to one another, but I want to manage the creation of the items so they're found in useful areas and not too many come up at once. For this, I can use the factory method to control how the game generates items for the player to find. As a player runs through each level, they'll run into a number of small monsters. They will be more or less the same with slight variations in the speed that they move around. To easily generate these monsters, I could use a prototype pattern and only have to update their speed attributes to get the variations I want. The game is also designed to have multiple levels where every level has a different theme,
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=189)** the prairies, mountains, forest, and underwater. Despite these different environments, there will be common elements such as the monsters and their particular attack item. To keep the theme consistent in each level, I'll use the abstract factory pattern to keep objects in the same family together by having a separate concrete factory for each level. Finally, building a game is no easy undertaking, and to help debug and log logistics, I want a logger. Since I only need one instance of the logger and all parts of my game should be able to add to the log, I'll choose to use the Singleton pattern to implement it. Throughout this example, I have found a way to use all the different types of creational [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md). Not all programs need to be this complex and a design pattern is not necessarily needed for all parts of a program. Remember that design patterns are guidelines to help make code easy to extend and maintain. So I encourage you to experiment and try different implementations. You'll soon discover situations where a pattern will be a big benefit and other situations where it makes things needlessly complex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (2)
> **Analogies:** for example (2), similar to (1), such as (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** later in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Thanks for watching](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=0)** - [Olivia] Thanks for watching this course. I hope you've enjoyed it. And that it's given you some ideas on how to better organize your code. There are a lot of different ways to use the [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) in this course, so it's important to remember that these patterns are really just guidelines. Knowing how to decouple blocks of code from one another is an important programming skill that [Forms](../../Skills/Web%20Development/Forms.md) the basis for design patterns. Going forward, I encourage you to try each pattern with your own projects. Maybe reimplement a feature using two different patterns to see how the same problem can be solved in two different ways. The goal of these patterns is to make your code more maintainable, flexible, and extensible. As you use them more and more, you'll find that you start to naturally structure your code in a way that's easy to update. So when you find yourself spending more time developing features and less on maintaining, you've succeeded. So good luck and see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [olivia] (1)


## Instructor

- [Olivia Chiu Stone](../../Instructors/Software%20Development/Olivia%20Chiu%20Stone.md)

## Resources

- Exercise files available

## Skills Covered

- Design Patterns
- C++

## Path Context

### In [Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)
← [C++ Design Patterns- Behavioral](C%2B%2B%20Design%20Patterns-%20Behavioral.md) | **5 of 6** | [C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices](../Software%20Development/C%2B%2B%20Development-%20Advanced%20Concepts%2C%20Lambda%20Expressions%2C%20and%20Best%20Practices.md) →

## Appears In

- [Master C++](../../Paths/DevOps/Learning%20Paths/Master%20C%2B%2B.md)

## Related Courses

_Courses sharing skills:_

- [Playwright- Design Patterns](../Software%20Development/Playwright-%20Design%20Patterns.md) — Design Patterns
- [Python- Design Patterns](../Software%20Development/Python-%20Design%20Patterns.md) — Design Patterns
- [Nail Your C++ Interview](../Software%20Development/Nail%20Your%20C%2B%2B%20Interview.md) — C++
- [Web Servers and APIs using C++](../Software%20Development/Web%20Servers%20and%20APIs%20using%20C%2B%2B.md) — C++
- [Learning C++](../Software%20Development/Learning%20C%2B%2B.md) — C++

---

[↑ Back to top](#)