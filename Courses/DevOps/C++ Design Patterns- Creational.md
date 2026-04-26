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
  - '[[Master C++]]'
prev_courses:
  - '[[C++ Design Patterns- Behavioral]]'
next_courses:
  - '[[C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices]]'
path_nav: '[{"path":"Master C++","position":5,"total":6,"prev":"C++ Design Patterns- Behavioral","next":"C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/design-patterns
  - skill/c
status: not-started
created: 2026-04-21
---

![C++ Design Patterns: Creational](https://media.licdn.com/dms/image/v2/C4E0DAQH2K0uOcqWipQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568061261682?e=2147483647&amp;v=beta&amp;t=KNCfW_gEMKn0nvczOwD78cDU4jVOIIGJeaNcNnPvOK0)

# C++ Design Patterns: Creational

> Design patterns solve the challenges software developers face over and over again. They are reusable, proven solutions that make your software more reliable and flexible to change. Creational design patterns move the creation of objects out of the main codebase and into separate classes-a best practice known as encapsulation. This course explores the five most popular creational design patterns fo

> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational) | 2h 26m | Intermediate | 87K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Olivia Chiu Stone]]

## Resources

- Exercise files available

## Skills Covered

- Design Patterns
- C++

## Table of Contents

### Introduction

#### Organize your code with creational design patterns in C++
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=1)** - As the programs you develop evolve and grow in size, the code becomes harder to maintain.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=7)** And if you don't structure your program well from the beginning, you'll quickly find yourself spending more time refactoring code than adding new features.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=17)** In this course, I'll introduce you to creational design patterns that will help keep your code organized.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=24)** And more importantly, easy to update an extent.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=27)** These are commonly used structures that address issues that typically occur in software development.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=34)** I'll explain the motivation for each creational pattern, explaining how each one works.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=41)** Then I'll walk you through a simple implementation of each pattern to demonstrate the design in action.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=48)** And finally, I'll dive a little deeper to show what makes each pattern unique so you'll understand when and why to use each one.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=58)** Hi, I'm Olivia Chu and I'm an engineer that's had to maintain more than my fair share of poorly structured code.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/organize-your-code-with-creational-design-patterns-in-c-plus-plus?u=76281980&t=66)** So if you're ready to start, let's design some code.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** find (1)
> **Speakers:** - as (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=0)** - [Instructor] Before starting this course, you should already understand the fundamentals of object-oriented programming, including the concepts of inheritance and polymorphism.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=10)** Although design patterns in this course leverage the power of object-oriented design to build from.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=15)** If you're unfamiliar with these concepts, I recommend checking out the programming foundations object-oriented design first.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=23)** I'll be using class diagrams to help convey the relationships between classes for each pattern.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=30)** And there is a brief introduction to them, but I do not expect you to know UML.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=35)** I've tried to keep things simple and easy to help get the main concepts across.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=39)** I'll be using C++ to implement the patterns that I present.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=43)** But even if you're not familiar with the language, you can still follow along.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=48)** The main focus of this course is to present the concepts of each pattern, the motivation behind them and the relationships between the classes for each one.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=58)** But I will be implementing examples for each using C++.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=63)** So having some understanding of the language will help.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=66)** If you wish to learn some basic C++, first, I recommend the course learning C++.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=74)** If you choose to follow along with my examples, it doesn't matter which IDE or platform you choose to use.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=81)** I'll be using Visual Studio when I demonstrate coding examples, but it's not necessary that you do, too.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=88)** However, I do expect that, you know your way around a computer and the particular IDE that you choose to follow along in.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=97)** As you go through this course with me, keep in mind that these patterns came about after spending a lot of time working with object-oriented designs.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=105)** There are nuances to them and everyone implements them a little differently, depending on their programming needs.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=113)** As you watch these videos, don't worry if you feel like you mostly understand them at a high level, but are a little fuzzy on the details.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=122)** You can always come back and watch these videos again.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=126)** I do strongly recommend that you try applying these concepts on your own projects.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=131)** The best way to understand these patterns is to try them out in different situations.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-you-should-know-14317588?u=76281980&t=136)** You'll quickly discover how they can benefit you and how to modify them for your purposes.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), uml (1)
> **Code Keywords:** from. (1), implements (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Installing Visual Studio for Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=0)** - [Instructor] For this course, I'll be using the Visual Studio Community IDE, which I'll walk you through, getting and installing on your Windows computer.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=10)** To get the installer, go to the download page at www.[visualstudio.com/vs/community](https://visualstudio.com/vs/community).
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=20)** Click on Download VS Community to download the installer, then click Run.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=26)** So the installer will start once the download is complete.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=29)** Click Continue on the privacy prompt.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=34)** From the installation dialogue, select Workloads, and then select the option Desktop Development with C++, then leave all the install options as default and click Install.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=51)** After the installation is complete, I'm taken to the start page.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=56)** Whenever creating a new project, I go to File, New, Project.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=65)** From there, I select Installed, Visual C++, Windows Console Application.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=73)** If I want to open up one of the example projects, I go to File, Open, Project Solution,
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=87)** and navigate to the Exercise Files.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=90)** I can choose an example by double clicking on the folders.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=96)** And to open up one of the solutions, I double click on one of the .sln files.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-visual-studio-for-windows-14317579?u=76281980&t=102)** Now that I have verified that Visual Studio has installed and is working properly, we can start creating programs based on different design patterns.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (2), select the (1), navigate to (1)
> **Code Keywords:** continue (1), new, (1)
> **Tools:** visual studio (2)
> **Exercise Files:** download the (1), exercise files (1)
> **Prerequisites:** install (2)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** ide (1)
> **Speakers:** - [instructor] (1)

#### Installing Xcode on Mac
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=0)** - [Instructor] For this course, I'll be using the Visual Studio Community IDE, but you can also follow along using Xcode, which I'll walk you through getting and installing on your Mac computer.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=13)** From the App Store, search for Xcode, all one word.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=17)** Click on the link and then click Install for the Xcode software.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=22)** Once it's done installing, click Open to open the application.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=26)** To create a new project, click on Create a new Xcode project.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=31)** In the template dialog, navigate to the macOS tab and select Command Line Tool and click Next.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=39)** Fill in the fields with any name or identifier that you'd like, but for the language, select C++.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=47)** Click on Next to create the project template.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=53)** In here, under the Working folder, there's a file called main.cpp, which will not be used if you want to run the exercise files provided.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=64)** So I'll go ahead and delete it.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=67)** To use one of the exercise files, I'll drag the desired .cpp in from the Exercise folder into the Working folder.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=76)** When the dialog comes up, I select Copy items if needed and ensure that Working is selected in the Add to targets field.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=85)** Then, I click on Finish to move the desired files.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/installing-xcode-on-mac?u=76281980&t=89)** Now that Xcode is all set up, we can start creating programs based on different design patterns.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), open the (1), navigate to (1)
> **Exercise Files:** template (2), exercise files (2)
> **Tools:** visual studio (1), command line (1)
> **Prerequisites:** install (1), set up (1)
> **File Paths:** main.cpp (1)
> **Code Keywords:** delete (1)
> **Code Identifiers:** macos (1)
> **Env Vars:** ide (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] If you want to follow along with this course to implement each design pattern, I've included exercise files for you to practice with and use as a reference.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=11)** They're organized into numbered directories for each chapter of the course.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=18)** And within each chapter, there's a numbered directory for each video.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=23)** Inside the video folders, you'll find a start and an end folder named according to the topics of the related video.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=31)** They include the Visual Studio solutions and files corresponding to that particular video.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=38)** I've also included the end state of each solution, so you can look at the final programs.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/how-to-use-the-exercise-files?u=76281980&t=43)** As you go through this course, I encourage you to run the example solutions yourself, and modify them to test out different patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Challenges in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=0)** - [Narrator] During this course, you'll run across a video labeled as a challenge.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=5)** This will be an opportunity for you to practice what you're learning in this course.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=10)** At the beginning of the challenge, I'll give you a clear set of objectives, and I'll show you where to find the sample files you'll need to complete the challenge.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=19)** Once you've completed the challenge, come back and watch the solution video to see how I completed the challenge.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=27)** My solution is just an example of one way to address the challenge.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=31)** So don't worry if your implementation is a little different.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=34)** Challenges are a great opportunity to practice the concepts I'm presenting, and to help solidify what you're learning.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=41)** It's a chance for you to have a little bit of fun.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenges-in-this-course?u=76281980&t=44)** So be sure to check it out.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 1. Design Patterns Overview

#### The need for a design pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=0)** - [Instructor] One of the biggest challenges in software development, is creating something that's flexible, maintainable and extensible.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=8)** Code will undergo many changes, major and minor throughout the development process.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=14)** And even after being released, most modern applications will receive updates to improve features or the fixed newly discovered bugs.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=24)** Things are always changing, let's see how this may play out in a production environment.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=31)** Imagine I work at a video game company where I'm creating a new adventure game with a main character that wanders around looking for treasure and fighting off little zombie creatures along the way.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=45)** Each level of the game has a different theme, and the evil creature found in each level is associated with that theme.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=53)** The first level takes place in the prairies where the character needs to fend off zombie dogs.
>
> **[0:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=59)** The second level is in the mountains with zombie eagles.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=64)** The third in the rainforest with zombie monkeys, and the fourth is underwater was zombie fish.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=73)** The evil creatures in my game have a lot of properties in common.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=77)** So I'll have them all derived from the same base class.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=81)** The difference between them is how they look on screen, but they all share the same attributes and methods.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=89)** As a player wanders around a level, the game generates different numbers of creatures at different locations.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=96)** It does this because I've specified the exact number of creatures to instantiate at different locations in the levels.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=106)** One day, my boss comes by my desk and says that each level should have more creatures.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=112)** And he wants me to have a version ready for the game testers right away.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=117)** So I go through the code and increase the number of creatures that are generated at each location.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=125)** But in my haste, I missed one location.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=129)** A few minutes later, my upset boss comes back and demands that I fix the mistake.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=134)** No big deal, the following day, my boss tells me that beta users mentioned that it would be cool if some of the creatures could throw fireballs.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=144)** Sure, I'll update the base class to include a method to throw a fireball, but then the testers come back asking, why are there fireballs under water?
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=154)** That makes no sense.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=156)** Oops, by adding throw fireball to the base class, all my other classes inherit that behavior.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=163)** So, I'll add a property to disable fireballs if the level happens to be underwater.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=171)** The next round of tests or feedback says that having fireballs and almost every level gets kind of boring, it needs to be switched up a bit and then have it ready ASAP deadlines are coming.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=184)** Okay, I'll keep the fireballs and the prairies, but I'll add snowballs in the mountains, poison berries in the rainforest and spiny coral underwater.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=195)** Again, in my haste, I forget to update some of the places in my code.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=200)** And then an occasional misplaced creature is found throwing the wrong item.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=205)** My boss is furious, "How can there be so many bugs?"
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=210)** There's got to be a better way to manage all this.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=213)** I'm constantly updating code and multiple places and clearly missing some of the locations.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=219)** Soon, the game will likely expand to have more levels, how am I going to keep things straight?
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=226)** And things get even more complicated when there are multiple developers working on the same code.
>
> **[3:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=233)** This is where a design pattern can be really useful.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/the-need-for-a-design-pattern-14324290?u=76281980&t=237)** At the end of the course, I'll come back to the scenario and see how design patterns can help rein in this chaos.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (3), let (1), class. (1), class, (1), this. (1)
> **Env Vars:** asap (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### What are design patterns?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=0)** - [Instructor] A design pattern is a common, repeatable solution for creating software programs.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=6)** One of the biggest challenges in software development is creating code that is flexible, maintainable, and extensible.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=15)** As a developer, I always ask myself, how can I implement a solution that makes it easy to add new features, remove features, replace features, or apply the program in different situations?
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=33)** I like to think of writing good code like building a house.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=37)** The first iteration of my program is like a basic one story house.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=42)** Have I designed and built it so I can add another bedroom?
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=45)** How about adding another level?
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=48)** What about replacing the kitchen with a completely new layout?
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=52)** If the foundation, supports, and plumbing weren't laid out properly from the start, I may have to tear down my entire house and rebuild a completely new one to get my new room.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=66)** There isn't only one way a house should be built.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=69)** It all depends on where it will be built and who will live there.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=74)** Just like there are many ways to build a good house, there are many ways to develop good code.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=82)** Design patterns define these different code structures a developer can use to implement solutions.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=89)** They're not strict standards with exact lines of code to use.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=93)** Rather there are templates and best practices that provide room for interpretation based on the programming language and use cases.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=105)** While design patterns have been in use for years, they become widely adopted and popular thanks to Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, better known as the gang of four.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=119)** They wrote a book called "Design Patterns: "Elements of Reusable Object-Oriented Software," which outline 23 different design patterns.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=129)** Since then, developers all around the world have used and expanded on these patterns.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=137)** When the gang of four introduced their initial set of design patterns, they split them into three classifications: creational, structural, and behavioral patterns.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=149)** Creational patterns are focused on instantiating objects in a way that hides the mechanisms of their creation from the rest of the program.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=159)** Structural patterns simplify the relationships and hierarchies between different classes and how they can be used to build larger and more complex entities.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=170)** Finally, behavioral patterns provide common ways objects can communicate and pass requests with one another.
>
> **[2:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=178)** In this course, I will be focusing on five patterns that all belong to the creational patterns category: the Factory Method, Abstract Factory, Builder, Prototype, and Singleton design pattern.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=192)** My goal is to describe the intent of each pattern and provide analogies to help cement the concept of each pattern.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=200)** I'll demonstrate simple implementations for each that you can expand on and apply to your programs.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/what-are-design-patterns-14323356?u=76281980&t=207)** Using design patterns will make your code easier to maintain and extend so you spend less time refactoring code, or worse, needing to start over from scratch.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), pass (1), abstract (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Creational patterns overview
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=0)** - [Instructor] The goal of creational patterns is to efficiently create objects in a way that increases the flexibility and reuse of existing code.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=9)** It does this by moving the creation of objects out of the main code and into separate classes, thereby encapsulating it.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=18)** The main code would no longer have explicit references to concrete classes and their instantiation.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=25)** It makes the concrete classes independent of the rest of the code base.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=29)** By doing this, it increases the system's flexibility to determine what, who, how, and when objects are created in an application.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=40)** This allows all the logic for specifying which object to create to be in one location and thereby making it easier to maintain the code base.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=51)** This allows us to avoid hard-coding behaviors into an application that would otherwise force us to refactor later when requirements and features will inevitably change.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=63)** Hard-coding doesn't promote reuse and makes it hard to keep track of errors if you need to update things in multiple places.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=71)** So the main code will only be aware of the abstract representation of an object and the encapsulated creators will provide the correct concrete object.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=82)** This allows for decisions to be made at runtime based on inputs and the status of a system that can affect which objects are created.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=91)** There are five different types of creational design patterns that I'll be covering in this course.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/creational-patterns-overview-14321544?u=76281980&t=97)** Each of them emphasizes a different use case that I'll explain as I discuss each type, but they all separate the creation of objects to make your code base more maintainable.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), abstract (1), type, (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 2. Creational Patterns

#### Inheritance vs. composition
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=0)** - [Instructor] One of the first concepts taught in object-oriented programming are classes and inheritance.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=6)** It's a powerful paradigm that helps simplify code and encourages reuse.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=11)** However, it becomes easy to fall into the trap of creating overly complicated classes that makes it difficult to maintain.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=19)** Imagine I want to set up a menu for a coffee shop and the drinks that it could create.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=24)** I'll start with a Drink class with a property for espresso and a method called Make that puts the drink together.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=31)** From it, I create a Latte class that inherits from the Drink class.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=37)** It has an additional property for milk and the Make method is overwritten to include steaming the milk.
>
> **[0:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=45)** I'll create another class that inherits from the Drink class and call it Cappuccino.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=51)** But it has foamed milk instead of steamed milk.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=54)** Again, the Make method is overwritten to make the drink.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=58)** Sometimes the latte or cappuccino needs to be made with soy, so I'll make new classes for those substitutions.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=66)** Other times a drink could have a shot of caramel flavoring.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=70)** So I'll make new Latte and Cappuccino classes that has the caramel property and update those make methods to add the flavor.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=80)** And yet another variation is that the flavor could be a hazelnut.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=85)** So again, I make additional classes for that.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=88)** As you can see, this is getting a little out of hand.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=92)** This is known as class explosion.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=95)** I've got so many classes it's going to be completely unwieldy to maintain and keep track of all of them.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=103)** What if I changed my soy milk supplier and the new supplier adds a little sugar to the milk, then I'll want to tweak my recipes to use less soy milk so they're not going to be too sweet.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=115)** One way to help remedy this is to have my Drink class contain all the possible ad-ons as properties and to use Boolean values to designate slight variations that can be specified when creating the object.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=129)** This simplifies things a little, but now I want to add tea to my menu.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=134)** It could be made with milk or soy, but it's not made with espresso and it makes no sense for it to have flavor shots.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=143)** So those properties will never be used in an instance of a Drink that's meant to be a tea, which would be a waste of memory to include them.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=151)** This also means I'll have to add a property for tea leaves, but tea leaves aren't used in other products.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=159)** A better way to structure my classes is to use composition along with inheritance to make my code more flexible, and I won't have unneeded extra code shared by all classes.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=171)** Composition is when a property is another class that's referenced by a class.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=177)** Inheritance is when one class extends another.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=182)** So a latte is a drink.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=186)** Composition is when one class uses or consists of another.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=190)** So a latte has a flavor shot in it.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=194)** So a latte doesn't inherit a flavor shot, instead it could be composed with one.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=201)** This would be another way to represent my drinks.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=204)** I've made a Milk abstract class that Whole and Soy inherits from, and I've made a Flavor class that None, Caramel, and Hazelnut inherit from.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=214)** This allows me to easily mix and match items as needed.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=219)** And if I want to add almond milk, I don't have to change my Drink classes at all, and this keeps things decoupled.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=226)** The use of composition is really important in programming.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/inheritance-vs-composition-14318552?u=76281980&t=230)** It gives you more flexibility and a number of design patterns take advantage of this concept to make them effective.

> [!info]- Semantic Content
>
> **CLI Commands:** make (10)
> **Code Keywords:** class. (2), extends (1), abstract (1), from, (1), from. (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Composite object example
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=0)** - [Instructor] To help show how to define a class using composition instead of inheritance, I'll create a complex object using simpler objects.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=10)** A common example of a complex object with mixed and matched simpler objects is a fast food combo meal.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=18)** All meals come with a main item, a side and a drink.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=22)** So each of these items are the simple classes that can be used to make a more complex, combo meal object.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=30)** The simple class diagram for the combo meal would look like this.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=34)** The entree, side, and drink objects are properties of the more complex combo meal object.
>
> **[0:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=41)** To show how to define the complex class, I've opened 02_02 Comp_Start.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=47)** I've already defined my simpler classes ahead of time.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=51)** At line 10 is the start of the entree class definition.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=55)** It has one protective property at line 13, the name of the entree and the method at line 15 to return that name.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=63)** This method will be overrided in a later chapter for the derived Entree classes.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=70)** At line 23 is the start of the side class definition.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=74)** And that line 26.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=75)** It also has a protected property and to get method at line 28 to return that property value.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=81)** Finally, the drink class is to find that line 34.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=85)** It has a protected drink property at line 37, which gets updated by the constructor.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=91)** The constructor whose definition starts at line 39.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=95)** We'll print the console and assign the string "soda" to the drink property to start defining my complex meal object.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=102)** I'll go down to line 51 and start typing class, Meal Combo add my curly brackets.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=112)** First, I'll start with the private section.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=114)** So I'll type private a Meal combo consists of three items.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=120)** So I'll start adding them as properties here.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=122)** First is my Entree, lowercase entree below that is my Side object and low case side. Next comes, Drink, and lowercase drink, and finally something to represent the bag that all of this goes into.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=144)** So add another property of type char_bag, which has a hundred characters now for the public section.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=154)** So under all that I'll type public here, I'll start with the constructor. So I'll type Meal Combo, Const Char type.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=169)** Add my curly brackets.
>
> **[2:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=171)** The argument for this constructor is a string that describes a kind of combo this is.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=176)** Maybe it's a burger combo or maybe it's hotdog combo meal.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=180)** The value is added to the underscore bag property in the constructor using sprintf underscore s underscore bag,"/n%s meal combo", and then the type.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=206)** So the slash N starts a new line and the percent S represents a string that I'm going to place in this position, which happens to be the type variable to add the items for my meal. I need some setters.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=219)** So starting at line 63, I'll edit Entree with void set, entree, entree E this method was at the entree property with the object E in my complex object.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=236)** So in the next line, I'll add my curly brackets.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=239)** And within this method, I'll type entree equals E. next comes my side.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=246)** So starting at line 67 of the finite with Void set side side, S add my curly brackets
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=262)** and then set the property side equals S last but not least comes my drink.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=269)** So my setter method for the drink, we'll start with Void set, drink, drink D the usual curly brackets lowercase drink equals D.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=284)** Now I've composed my complex object with simpler objects.
>
> **[4:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=288)** I'm going to add one more method to return the names of the objects.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=292)** So at line 75, I'll start defining the method Const, char, openmealBag, add the curly brackets to get the objects in my meal combo.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=310)** I first combined all the names into a single string variable named underscore bag using sprintf underscore s, underscore bag starting quotes,
>
> **[5:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=330)** and then present S to represent each item that I want to print to the screen.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=336)** So percent S percent S percent S so I'll put present S in four times, and then outside of my quotes I'll list off the variables that will be printed in place of the percent S so underscore bag followed by entree, get entree.
>
> **[6:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=360)** This will return the string.
>
> **[6:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=362)** That's the name of the entree and place it in the second percent S in the string next is side get side, and finally drink, get drink.
>
> **[6:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=377)** And then under all that, I returned underscore bag to get the full string.
>
> **[6:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/composite-object-example-14323353?u=76281980&t=382)** This is an example of how to create a complex object using composition, instead of inheritance by building with simpler objects to make this much more complicated one, I'll use this complex object later in chapter five, as we look at a pattern to help create objects like this.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), class, (2), protected (2), private (2), public (2)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** char_bag (1), openmealbag (1)
> **Cross-References:** in the next (1), later in (1)
> **Speakers:** - [instructor] (1)

#### Concrete vs. abstract
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=0)** - [Instructor] When developers initially start learning about creating classes and subclasses, they start with a parent or base class.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=8)** Take, for example, an Animal class with methods for eat or makeNoise.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=13)** Typically these methods are implemented in the Animal class, but then the Child class will override it.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=20)** For example, a Dog class inherits from animal and overrides the makeNoise method, so the dog barks.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=28)** The method makeNoise will always be overwritten by the classes that inherit from Animal.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=34)** So it shouldn't be necessary to define something in this base class.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=39)** C++ allows me to do that with the virtual keyword.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=43)** This indicates to the compiler, and other programmers, that I expect all subclasses to override this method with their own implementation.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=53)** The ability to define methods in this way is incredibly useful.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=57)** I can use this class as a blueprint for all classes that will inherit from it.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=63)** When defining a method with the virtual keyword, I can choose to leave the curly brackets as I would typically use them, or I can use = 0, since it's understood by the compiler that this method will be overrided and there's no need to define anything in it.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=80)** Since the virtual keyword indicates to the compiler that I expect all subclasses to override it.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=86)** If I happen to forget to do so, I'll get a compiler error when I build my code.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=91)** This way, I can avoid a situation where my Dog object says something generic instead of barking.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=99)** The base classes that have virtual methods are also known as AbstractClasses and the derived subclasses are called ConcreteClasses.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=107)** The concept of abstract and concrete classes is key when working with design patterns.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/concrete-vs-abstract-14322470?u=76281980&t=113)** Many patterns rely on inheritance to provide the ability to easily extend and maintain code.

> [!info]- Semantic Content
>
> **Code Keywords:** override (3), class. (2), class, (1), abstract (1)
> **Code Identifiers:** makenoise (3)
> **Analogies:** for example (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Understanding UML
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=0)** - In this course, I'll be presenting class diagrams in the Unified Modeling Language or UML.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=8)** This is a common way that developers represent the classes in their system and the relationships between them.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=16)** This isn't meant to be a full lesson or course on UML, which includes much more than just class diagrams.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=24)** But I want to explain enough for you to understand the diagrams that I'll be presenting for each design pattern.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=31)** This is an example of a class diagram.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=34)** Each of these blocks represent an abstract or a concrete class.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=39)** The top section is the name of the class.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=43)** The second layer will contain the attributes or properties for that class.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=48)** And finally, the third layer will contain the methods for the class.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=53)** Notice that the method names include parentheses for the argument list.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=58)** This helps differentiate this layer from the one for the properties.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=63)** To help save some space and keep my diagrams from looking too cluttered.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=67)** I will sometimes leave out the second or third layer.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=71)** To show the relationships between the classes arrows with different styles are used.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=77)** A solid line with an arrow at the end represents inheritance the arrow always points from the subclass to the parent class.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=86)** It's assumed that any properties or methods shown in the parent class will be inherited by the subclasses, but they can be repeated in the diagram.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=96)** Any additional properties or methods in the subclass belong only to the subclass itself.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=103)** A dotted line with an arrow at the end represents a dependency between two elements.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=109)** In most cases here, this means one class is calling another and the arrow will always point from the caller to the callee.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=117)** So in this example, the derived class is calling a method in the dependent class.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=124)** A solid line with a diamond at the end indicates an aggregation relationship.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=129)** This is also called a Has-a association.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=133)** This means one element contains one or more other elements.
>
> **[2:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=138)** The arrow will always point to the element that is referenced by the other.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=142)** In this example, FridgeClass contains an element of FoodClass.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=147)** This is not necessarily a one-to-one relationship.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=150)** It's possible to have multiple FoodClass objects as a part of the FridgeClass.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=157)** And it's also possible to have a FoodClass object without an instance of the FridgeClass.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=164)** There are more components and details to a class diagram.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/understanding-uml-14320498?u=76281980&t=167)** But this is all you need to understand the relationships between the elements in the design patterns that I'll be going over in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (6), abstract (1), finally, (1)
> **Env Vars:** uml (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - in (1)


### 3. Factory Method

#### Factory Method concept
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=0)** - The factory method is one of the most used design patterns because it encapsulates the creation of related objects in a single place, that's abstracted away from the rest of the program.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=13)** It provides an interface for the program to create new objects without exposing the underlying creation logic to the rest of the program or other clients that use the object.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=24)** I like to think of the factory method, like a coffee machine.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=27)** There are some that can be used to create several different types of coffee, such as an espresso, latte or cappuccino.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=36)** When the coffee machine is first turned on, it's ready to make coffee, but it doesn't know which type of coffee to make until someone comes along to use it.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=47)** If someone comes up and selects an espresso, the machine will grind the beans and heat up the water to give them the perfect little cup of espresso.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=56)** If a different person selects a cappuccino, the machine goes through a similar process of grinding beans and heating up water, but it also needs to steam and froth some milk.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=70)** The factory method pattern works like the coffee machine because it allows a program to create objects based on parameters at runtime.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=79)** This allows a program to execute without knowing ahead of time, exactly which objects it needs to create.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=86)** If the coffee machine knew which type of coffee a person was going to select that day, it could have the latte or espresso already made and waiting In the same way, if I knew ahead of time which type of object my program will need before running it, I can simply create the object in place.
>
> **[1:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=107)** But when I don't have that ahead of time knowledge, I use the factory method, which waits for specific inputs at runtime to create the appropriate object.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=120)** The factory can create a number of different objects or products as long as they all share the same interface or base class.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=131)** How the coffee machine knows which object to make could be as simple as a button pressed.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=137)** It doesn't matter if the underlying logic used to decide which type of object to create is simple or complex.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=145)** The factory abstracts, all of that away from the collar.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=150)** This is the generic class diagram of the factory method pattern.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=154)** The product defines the interface or the base class of the object that the factory method creates With the coffee machine example, the product can be the coffee cup that I'll get from the machine. It's generic, so it can represent the different types of coffee that I can get, but it doesn't specify exactly which kind.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=177)** The concrete product defines the implementation of a specific object.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=182)** There are a number of different concrete products that can be defined in my coffee machine, and each will include the specific process or recipe for creating that object.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=193)** For example, to create the concrete product of Nespresso, my coffee machine will need to grind enough beans per one shot of espresso To create the cappuccino, my coffee machine will need to grind the same amount of coffee beans and heat up some milk to make foam for the drink.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=213)** Finally, to create a latte, the coffee machine will need to steam the milk instead of frothing it.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=221)** All three of these concrete products inherit the same interface for coffee that define the the generic product that the machine creates On the other side, the creator is an interface that defines a factory that returns the product.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=237)** This is like a schematic of a coffee machine.
>
> **[3:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=239)** It defines that there needs to be a place for beans and milk.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=243)** And that it needs to take in an input that specifies which coffee to make, But it's not a real coffee machine.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=250)** And it won't give me an actual cup of coffee.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=256)** The concrete creator overrides the creator and returns the correct product based on the type that's specified.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=264)** This is the actual coffee machine that will take someone's input, like from a button and produce a proper type of coffee.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=274)** If someone selects a latte, then the machine will follow the latte recipe in the concrete product to produce an actual latte.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=284)** You can think of the product and concrete product as defining how the factory creates an object.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=290)** And the concrete creator defines what to create.
>
> **[4:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=295)** If I want to add another item to the coffee machine, such as an Americano, I only need to define a new concrete product for it and extend the concrete creator to include it.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=309)** The key here is that the factory method pattern lets the subclasses instantiate the object- instead of the main program.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-concept-14318551?u=76281980&t=318)** This allows a programmer to easily add new products or change existing ones without needing to make changes throughout an entire code base.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), class. (1), finally, (1)
> **CLI Commands:** make (6)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)

#### Factory Method implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=0)** - The goal of the FactoryMethod pattern is to separate the creation of objects from the rest of the main application code.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=8)** As a starting point, I'll have defined my Products and I'll walk you through implementing the ConcreteCreator.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=16)** To show this, I'm going to create a program that prompts the user to select a type of Coffee they like and return an object of what they selected.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=26)** As a starting point, I've opened 03_02_Factory_Start.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=31)** I've already set up my base class Coffee at line nine, which all my other products will inherit from.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=39)** And below that I have two classes that inherit from it, Espresso and Cappuccino.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=44)** The Espresso class at line 24 has an updated constructor that grinds and brews the beans.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=51)** And at line 36, the Cappuccino class has a constructor with the added step to heat and foam the milk.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=58)** Now at line 49, I'll create my CoffeeMakerFactory by typing class CoffeeMakerFactory.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=67)** And then the next line, I'll add an open curly bracket and hit enter.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=72)** Next, I set up the private members of my factory, so I type private.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=77)** On the next line, I add a Coffee object with Coffee _Coffee.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=85)** Now to specify the public members, I add the line public.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=90)** For the method that'll return the specified Coffee object, I'll type Coffee GetCoffee.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=99)** And press enter and add the open curly bracket.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=103)** This GetCoffee method returns a Coffee class which is my product's base class.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=108)** Since both Espresso and Cappuccino inherit from the Coffee class, they can also be returned by this method.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=116)** I want to create a cup of Coffee based on input from the main application.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=121)** To do this, I'll prompt the user to specify the type of Coffee they want.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=126)** To store the choice to user selects, I'll define the variable int choice.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=132)** Now to set up the prompt for the user to select the type of Coffee they'd like.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=137)** On the next line, I'll type cout "Select type of coffee to make."
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=154)** And put an end line.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=157)** On the next line, I'll provide the first option with cout "1: Espresso", and end that line.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=172)** The line after that is the second option cout, "2: Cappuccino."
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=185)** End line.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=187)** Next to prompt the user for their selection, I use cout selection:
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=198)** end line.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=200)** And on the next line I'll store the user's selection with cin choice.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=208)** Note, the arrows are pointing in the opposite direction because I want to store the value in the variable choice.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=215)** Now I take this input choice and use a switch statement to decide which of my derived product classes to call.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=223)** so on line 64, I'll start with switch and then brackets choice, put in my curly brackets.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=236)** To handle choice number one, I'll add case one.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=242)** And then on the next line, return new Espresso.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=248)** This will return an Espresso object if the user selected one.
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=253)** On the next line, I handle case two, which will give me a Cappuccino object, so I return new Cappuccino.
>
> **[4:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=268)** Finally, to finish off my case statement, I need to handle the default case.
>
> **[4:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=273)** So default.
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=278)** Here I want to inform the caller that the input was invalid.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=282)** so I do that with cout "Invalid selection,"
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=290)** end line.
>
> **[4:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=292)** And I'll also need to return something, so I'll return null.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=299)** This is all I need for my factory to return a specific product object based on the input it was given.
>
> **[5:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-implementation-14323351?u=76281980&t=305)** In the next video, I'll show you how to use this FactoryMethod in the main program and step through the running code.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), private (2), public (2), switch (2), from. (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - the (1)

#### Running the Factory Method example
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=0)** - To show how to use a defined factory method, I've opened three, three factory run start.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=6)** In here, I've set up my coffee objects and my coffee maker factory from the previous video.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=12)** The factory will prompt the user to select a type of coffee and return the specified object.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=19)** In the main part of my program, I instantiate an instance of my factory by typing coffee maker factory coffee machine.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=30)** On the next line, to declare a coffee variable, I add coffee cup.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=39)** Now, to call my factory's get coffee method to get an instance of the type of coffee the user had asked for, I type cup equals coffee machine, dot get coffee.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=57)** On the next line to double check if the correct object was created in return, I'm adding C out end line, you had asked for, an cup get type, end line.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=84)** This will write to the console with the returned value from the method, get type.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=90)** My code's all set, so I'll build by pressing control shift B.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=97)** I'll add a break point here at line 80, and at line 61 to help see what's going on.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=109)** To give this a whirl, I press F five to run my built application.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=117)** On the console, I see the options that I had coded, and a prompt to pick a drink.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=123)** Hmm, I feel like having a cappuccino.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=126)** So I select number two and press enter.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=131)** Over in visual studio, we see that we've stopped at the break point on line 61.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=137)** So now let's see what my program does with this input.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=141)** Remember, I had selected number two for a cappuccino.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=144)** So when I press F 10, I'm immediately taken to line 66 under case to.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=151)** Here, a new cappuccino object will be instantiated and returned.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=156)** Pressing F10 again, I see the steps to make my drink printed on the console.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=162)** Pressing F ten one more time takes me back to the main.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=166)** Another F10 goes to the next line.
>
> **[2:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=170)** When I press F10 one more time, I see the type of coffee I ordered, which was a cappuccino, on the console.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=177)** To end the execution, I press F five.
>
> **[3:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=180)** I'm going to remove the break point at 61, and run this again by pressing F five.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=191)** But this time I'm going to select an espresso.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=194)** So I'm going to press one, enter.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=199)** In the background an espresso object was returned.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=202)** On the console, I can see printed on the screen, the steps to create an espresso.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=207)** A press of F10, and I see the message that I've asked for an espresso.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=214)** I'll press F five one more time to end the execution.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=220)** So when I run it again, my factory method is able to understand which object I was asking for and promptly return the one that I requested.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=230)** If I want to update my menu of coffees, I only need to define a new class at line 45 and update my factory method to include it in the choices.
>
> **[4:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=241)** This is what makes the factory method so useful.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-factory-method-example-14317576?u=76281980&t=244)** I can decouple the creation of my objects from the main code, which makes it much more maintainable and extensible.

> [!info]- Semantic Content
>
> **Code Keywords:** for, (2), return, (1), type, (1), type. (1), let (1)
> **Env Vars:** f10 (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** visual studio (1)
> **Prerequisites:** set up (1)
> **Speakers:** - to (1)

#### Factory Method variations
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=0)** - [Instructor] The factory method pattern can be used to easily extend the type of objects that can be generated, but it also allows you to update the generation of objects in only one place or even to swap out variations of factories for the same group of objects.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=17)** The standard example is to generate objects based on user input, which is a very common use case.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=25)** But let's suppose I have a game that generates rocks in space that a player needs to avoid and blast away.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=32)** There are three types of rocks: simple, small ones that are easy to blast away, bigger ones that will split into smaller ones once hit, and metallic ones that will need a stronger blaster to destroy.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=47)** Each level could use a different rock or each level could have a different number of each type of rock.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=54)** So now, my factory isn't choosing which rock to create based on user input, but rather which level the game is at.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=62)** In this snippet, I've replaced the prompts with logic to determine what type of rocks to create based on the level that the player is at.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=70)** The factory with the prompt could still be useful in my game.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=74)** Perhaps I want to give players a practice mode where they can practice their aim specific to the rock type.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=81)** In that case, I could easily swap back to the user prompt type of the factory.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=87)** The rest of the program is decoupled from the underlying implementation of the factory and how it decides which objects to create.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/factory-method-variations?u=76281980&t=96)** And thanks to polymorphism, I can easily swap between these factories without changing the rest of my code.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), let (1), type. (1), case, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Abstract Factory

#### Abstract Factory concept
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=0)** - [Instructor] The abstract factory pattern is similar to the factory method where a factory is used to create objects.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=7)** However, unlike the factory method pattern, it emphasizes the creation of a family or suite of classes or products.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=16)** It provides an interface for creating families of related or dependent objects without specifying the concrete classes.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=25)** The objects from one suite or family are not compatible with the objects from another suite.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=31)** And you can think of the abstract factory design as a factory of factories.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=37)** Imagine a set of car manufacturing plants that can create sedan style cars.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=44)** Every brand of car has their own specifications to make their version of a sedan.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=50)** Typically, a factory designed to make gasoline cars is not going to be able to make electric cars or vice versa.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=60)** For example, the door made at an electric car factory isn't going to fit in the gasoline car so all of the car parts need to be kept in the same family.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=72)** The concept of the abstract factory pattern is similar to the car manufacturing plants.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=79)** Most plants or factories will follow a similar layout with materials, molds, plans, and robotic arms, and all can produce the doors, wheels, engines, and bodies.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=91)** But the factory for each brand of car will vary just a little on the details of the materials, molds, plans and robotic arms that they use.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=100)** Each factory is designed for their specific brand of cars.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=105)** The generic class diagram for the abstract factory pattern looks like this.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=111)** There's a lot going on in this diagram.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=113)** So I find it easier to understand the abstract factory if I build it up from the simpler factory method first.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=122)** Similarly, many programming applications start off using the factory method that looks more like this class diagram, but evolve over time towards the abstract factory pattern as they grow and expand.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=136)** The abstract factory is the interface that defines a concrete factories, like the floor plans of a building.
>
> **[2:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=145)** So the concrete factory is like the physical concrete car manufacturing plant.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=151)** And the concrete products it can create are objects like doors and engines.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=158)** This factory method pattern implies that any engine can be matched with any door, but that doesn't really work because an electric engine isn't going to work in a gasoline car.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=169)** So what I need to define are multiple physical concrete factories to manufacture each type of car.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=176)** All of them use the abstract factory interface, but are implemented just a little differently, just as each brand of car will build their manufacturing plant just a little different.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=189)** In the class diagram I've colored each one a different color to help differentiate them more easily.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=196)** And each factory will create their own variation of each concrete product.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=201)** So factory one will create a variation of a door and an engine that will go together in the same brand of car.
>
> **[3:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=211)** And factory two will create a variation of a door and an engine that'll go together in a different brand of car.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=219)** And finally, the same applies to factory three.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=223)** Notice that every factory has their own unique implementation of the concrete product, but they all make use of the same abstract interfaces.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=234)** A specific concrete factory is not able to create the concrete product belonging to another concrete factory.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=243)** The last thing to add to this diagram is the client, which is the top level program that requests a product from the factory.
>
> **[4:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=251)** This is like the person that is buying a car.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=254)** Depending on the type of car they want, a different concrete factory will be used to create the parts of the car for them.
>
> **[4:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=262)** Now, if I want to add another car brand factory to my program, this pattern makes it incredibly easy to do.
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=271)** I just add another concrete factory and the corresponding concrete products that the new concrete factory would create.
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=280)** As you can see, this is an incredibly powerful design pattern that makes expansion easy.
>
> **[4:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-concept-14322469?u=76281980&t=286)** It's no surprise that this is one of the more widely used patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (9), interface (3), this. (1), finally, (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** similar to (2), imagine (1), for example (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Abstract Factory pattern implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=0)** - [Instructor] The AbstractFactory's designs goal is to have different concrete factories creating similar objects.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=6)** But the exact construction of the objects are defined differently by each factory, which allows objects that belong in the same suite or family to be kept together.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=16)** For this implementation, I'm going to create two car factories, one for a gas powered car, and one for an electric car.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=25)** The gas powered car factory will have its own implementation of a car door and its own gas powered engine.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=33)** And the electric car factory will have its own implementation of a car door and its own electric engine.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=40)** To help us get started, I'll have created these products ahead of time; the doors and the engines.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=47)** And we'll focus on creating the factories for this example.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=52)** I've opened 04_02_AbFacImp_Start.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=56)** We have already implemented my base door class at line 10.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=61)** It has a public method cut open that will be overrided by the derived classes.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=67)** I've extended the door class with a derived gas car door at line 19 and another class electric car door at line 32.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=78)** The gas car door has overrided the open method at line 26 and right clicks onto the console when it executes.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=88)** The electric car door on the other hand, writes is silent, gentle :shhhhh' at line 41 when it executes.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=94)** Scrolling down to line 46, I've also implemented my base engine class and the respective derived classes.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=103)** The guest engine class is defined at line 58 and the run method is overrided to print room to the console when it runs.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=112)** The electric engine derived class is defined at line 75 and it overrides the run method by writing "shhhhh" to the console.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=121)** I have all my products, but I need to implement my factories that will create these products.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=130)** I scroll past the products and start the finding a base factory class at line 87 with class CarFactory.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=141)** I'll add my curly bracket and start defining the public members with public.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=148)** All my factories will be derived from this class.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=151)** Since all cars have doors and an engine, I'm adding two virtual methods to build them and return the objects.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=159)** First to build a door, I type virtual Door build door=0.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=166)** And on the next line to build the engine, I add virtual Engine BuildEngine = 0.
>
> **[2:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=179)** Notice I'm using the base classes for the door and the engine objects.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=184)** Remember that the concrete factories are going to specify the concrete implementations of products.
>
> **[3:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=190)** The first factory I'm implementing is a gas car factory since they were around first.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=195)** On line 94, I specified this inherits from the base factory with class GasCarFactory:publicCarFactory, and have my open curly bracket on the next line.
>
> **[3:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=212)** On line 96, I use public to start the public section.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=218)** Now I specify the products that belong within the family of the gas cars.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=223)** For the door, I define a method Door, BuildDoor,
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=234)** add my curly brackets.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=238)** And on the next line I add return new GasCarDoor.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=247)** This will return a GasCarDoor object.
>
> **[4:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=250)** Then on line 101, I'm going to add a method to build the engine.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=256)** So I'll type Engine BuildEngine and below that I'll add return new GasEngine,
>
> **[4:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=271)** and this will get the GasEngine object.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=274)** Notice that I have all the products meant specifically for the gas car altogether.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=279)** Next, I will do the same for the electric car factory.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=285)** On line 107, I start the designing the factory with class ElectricCarFactory:public CarFactory,
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=303)** add my curly bracket and on the next line I'll type public.
>
> **[5:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=310)** Next to override the bill door method with Door BuildDoor.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=318)** Since this is the electric car factory, it will build the electric car door with the line return new ElectricCarDoor.
>
> **[5:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=334)** On line 114, I'll overwrite the build engine method with Engine BuildEngine.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=348)** This time to get the electric engine, I use return new ElectricEngine.
>
> **[5:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/abstract-factory-pattern-implementation-14320497?u=76281980&t=358)** With my two factories all set up, it's time to build some cars in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** public (7), class. (1), override (1)
> **Code Identifiers:** publiccarfactory (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Using the Abstract Factory
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=0)** - [Instructor] With my product and factory classes all defined, it's time to use them in my main program, I have opened 04_03_AbFacRun_Start.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=11)** In main at line 122, I first declare a car factory object called car plant.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=20)** Car factory, car plant.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=24)** I use the base class here since I don't know which type of car to create just yet.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=30)** I want the user to select what kind of car to make.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=34)** So I'll have a variable int choice.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=38)** In the next few lines, I've already set up the prompts to ask the user to pick between a gas and an electric car.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=46)** To initialize a proper derived car factory, based on the input, I use a switch statement at line 132, switch choice.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=60)** Add my curly brackets.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=62)** To handle when the value of choice is one, I'll add case one.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=67)** And under that car plant equals new gas car factory.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=77)** And below that a break to leave the switch statement.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=81)** Next, under that to handle when the choice value is equal to two, I'll type case two and car plant equals new electric car factory.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=98)** And below that another break to leave the switch statement.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=102)** Finally, to handle when the input doesn't match any of the cases, I use default.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=109)** And I'll provide a user with an error message with C out, invalid selection, end line.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=121)** I still need to return something from this case.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=124)** So on the next line I'll use car plant equals null.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=130)** And one more break.
>
> **[2:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=132)** With instantiating the car plant factory all set up, I need to create the proper doors and engine for the selected car type.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=141)** On line 146, I check if the car type selected was valid.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=146)** So I use if car plant not equal to null,
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=158)** put in my curly brackets.
>
> **[2:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=161)** So if the car plant is not null, the first thing my factory will create is a car door.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=167)** With door, my door equals car plant, build door.
>
> **[3:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=184)** Notice that I'm using the base door class to declare the car door.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=189)** Since both the gas and electric car factories are able to create doors that inherit from the base door class, the type of door will depend on the type of factory the user had picked.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=200)** Next on the next line, I create the car engine with a similar use of the base engine class.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=207)** So I'll type engine, my engine,
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=215)** equals car plant, build engine.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=222)** With the specified car created, it's time to take it for a test drive.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=227)** First, the door needs to be open.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=230)** So on line 151 I'll type my door open,
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=238)** and to start the engine on the next line, I'll use my engine run.
>
> **[4:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=246)** Now that my code is complete.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/using-the-abstract-factory-14317578?u=76281980&t=247)** It's time to build it with control shift B, and now it's time to give it a spin.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), finally, (1), default. (1), case. (1), break. (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Running the Abstract Factory
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=0)** - [Instructor] It's time to give my car factories a spin.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=3)** To do that, I've opened four, four AbFacRun Start and I'll add a break point at line 148 and one line 32 to help show how this works.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=20)** To start I'll press F five.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=24)** I had served the break point here at line 132, which is the start of my switched statement.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=31)** I press F10 to step to the next line.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=35)** Remember, I had selected an electric car, so the car plant has become an electric car factory.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=42)** I'll press F five to continue to the next break point at line 148.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=47)** Here, I'll use use F 11 to step into this call to build a door.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=54)** This takes me to the line 111 in the electric car factory where the electric car door is instantiated.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=62)** As I step through the code using F10, I see printed on the console that the door is being made.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=70)** We can also see on the console that the car belongs to an electric car.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=76)** As I continue to step through the code, I'm brought back to the main at line 148.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=82)** I'll press F10 one more time to go to the next line.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=85)** And F11 to step into this call.
>
> **[1:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=89)** I'm taken back to the electric car factory, but this time at line 115, where the electric engine is being instantiated, I press F10 two more times, and I see the message on the console that indicates that the electric engine is being created.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=105)** I press F10 again, and I'm back in the main and I'll step one more time.
>
> **[1:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=112)** Now I'm part of the code where I'm taking the car for a spin.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=116)** I press F10 to execute the open method.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=121)** And I see on the console that the door opens like an electric car, shh.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=126)** Another press of F10, and the console output shows that it runs like an electric car.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=134)** Again, shh.
>
> **[2:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=136)** Now to finish the execution with an F5.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=143)** I'll run this again by pressing F5, but this time I'll ask for a gas car.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=152)** So I'll press one, enter.
>
> **[2:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=155)** I'll step through the code again by pressing F10.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=158)** And you can see in the switch statement this time I'm at line 135, where the car plant becomes a gas car factory instead, I'll press F5 to get to the next break point.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=174)** As I stepped through the code using F10, I can see on the console that the gas car specific door is being made and that the gas engine is being instantiated.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=187)** And when I take it for a test drive the console shows the door acts like a gas car door, click.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=195)** And the engine runs like a gas engine, vroom.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=198)** The abstract factory pattern encapsulates the creation of objects and allows you to keep objects that belong in the same family together.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=207)** This is incredibly flexible and makes it easy to extend.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-abstract-factory-14319523?u=76281980&t=210)** It's no wonder it's one of the most popular creational design patterns.

> [!info]- Semantic Content
>
> **Env Vars:** f10 (9), f11 (1)
> **Code Keywords:** continue (2), switch (1), abstract (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Extending the Abstract Factory
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=0)** - The abstract factory is a powerful pattern.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=3)** The key to this pattern is the emphasis on the family of objects, in particular that the objects from one suite or family, are not compatible with the objects from another suite.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=15)** This pattern is used a lot in GUI design to keep elements consistent and cohesive with one another.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=22)** Imagine an application that allows users to pick the theme for the UI.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=28)** Many IDEs have a light theme and a dark theme.
>
> **[0:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=32)** Notice that the text in the dark theme is a light color and easy to read against the dark background.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=39)** Imagine using that same text over in the light theme, it's not easy to see the text, which makes the application harder to use.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=48)** So if the background is one object, and the text is another object in creating the UI, I would want a way to make sure that the light colored text is always paired with a dark background.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=62)** And the dark text is always paired with the light background.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=67)** Using an abstract factory pattern, can help me keep the correct elements together, as the UI is built at runtime.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=75)** This is what the class diagram would look like for the themes.
>
> **[1:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=78)** There's one concrete factory for the light theme, that has its own concrete implementation for the text and for the background.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=87)** And another concrete factory for the dark theme, with different concrete implementations for the text and background.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=96)** Often times, the class diagram for the abstract factory, depicts each factory, having one concrete product for each abstract product.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=106)** Keep in mind that this is a simple representation.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=111)** When creating a real application, this can become more complex and a concrete factory could be making a suite of products that all come from the same abstract product.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=122)** Going back to my application theme example, my text products can consist of one for the default text, one for the green text, and one for blue.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=133)** However, the shade of green or blue will be different based on the theme to ensure there's enough contrast to see the text.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=142)** So each of my light and dark factories will also dictate the color of the text.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=148)** So now my class diagram is going to become even more complex.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=152)** At its core, this is still the abstract factory pattern, but it gives me multiple ways to easily extend and grow an application.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/extending-the-abstract-factory-14321550?u=76281980&t=162)** This is what makes this pattern so powerful and why it's so frequently used.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (6)
> **Definitions:** is a  (3)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Env Vars:** gui (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - the (1)

#### Challenge: Abstract Factory
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=0)** (upbeat tech music)
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=3)** - [Instructor] Time for a challenge.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=4)** We're going to use what we've learned so far about the Abstract Factory, and extend some of the products that the factories create.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=14)** From the previous video, I had talked about having two different themes from my GUI, light and dark.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=23)** For the light theme, the background is white, and the default text is black.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=29)** And for the dark theme, the background is black, and the default text is white.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=35)** So far, I've implemented a simple solution for this, that is represented by the class diagram shown here.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=44)** The products are the backgrounds and text colors for each of the themes.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=49)** And the light theme and dark theme factories, will instantiate the appropriate backgrounds, and text products.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=57)** I have opened 04_06_AbFacFacFactory_Start, which is what I've implemented so far.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=65)** When I run this, by pressing F5, the console pops up with a blue background and yellow text, prompting me to pick a theme.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=75)** I'll select the dark theme by entering 2.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=79)** And I see that the new lines have black backgrounds, and light colored texts.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=85)** For this challenge, I want to update this application with an additional green text in both themes.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=92)** Remember, the shade of green will be different based on the theme to ensure there's enough contrast to see the text.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=101)** In summary, the objective is to add additional derived Text classes for the green text, update the factories to create the proper green text objects, and finally, write a message to the console using the appropriate green text.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=120)** The class diagram that we end up with should look something like what you see here, where the green text is derived from the abstract Text class.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=130)** To help, the code has been organized into regions to help identify the products and factories, as well as some hints on where to add the new class definitions.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=144)** In the code, I'm using the function SetConsoleTextAttribute, to set the desired colors.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=151)** The argument hConsole is a reference, or handle, to the console so I can change the background, and text colors.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=160)** And the argument value is a numeric value that corresponds to a specific text color.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=167)** The value 10 will give you a light green color, and the value 242 will give you a darker shade of green.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=176)** This is not intended to be an actual GUI for an application.
>
> **[3:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=181)** But it helps to provide some practice with the Abstract Factory.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=186)** If you are using Xcode on a Mac, it does not need to call a separate function to change the color.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=194)** So it doesn't need to get the terminal handle.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=198)** Instead, color code can be used directly in the string output to set the color.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=204)** This table shows the color codes needed for the challenge.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=208)** This line of example code, will set the text color to black.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=214)** This is not intended to be an actual GUI for an application.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=218)** But, it helps to provide some practice with the Abstract Factory.
>
> **[3:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=223)** Feel free to refer back to previous videos, or slides to help you.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=227)** And remember, that your solution doesn't need to be the exact same as what I had come up with.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/challenge-abstract-factory?u=76281980&t=234)** So take some time to think about it, and then be sure to watch my solution video to see how I approach the problem.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (4), this, (2), function (2), finally, (1), class. (1)
> **Env Vars:** gui (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** hconsole (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Solution: Abstract Factory
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=0)** - [Instructor] How did you do on the challenge?
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=8)** I hope you are able to successfully extend the project to include the additional colors.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=13)** I've opened four seven abstract solution to show you my solution.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=18)** But remember, that this is just one way to implement the solution, and yours may look a little different.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=25)** Recall I wanted to derive the additional text classes, so I'll start here in the text region of my code at line 56.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=33)** And actually, I'll scroll down to the end to add my new classes.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=39)** I'll begin with the dark green font, so at line 104, I'll type class DarkGreenText public text.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=57)** And under that, my curly brackets and start with the public section So public, and under that, the start of my constructor.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=70)** So DarkGreenText, and as an argument, HANDLE hConsole.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=85)** Remember, I need to pass the handle for the console so the colors will be updated on the screen.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=93)** I'll add my curly brackets.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=95)** And the first line in the constructor is SetConsoleTextAttribute hConsole, 242.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=114)** This is the function that will set the text colors on the console, and 242 will give the dark green color I want.
>
> **[2:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=122)** Under that, I'll write a note to the console that the color has changed.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=126)** So I'll type cout, making the text dark green,
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=142)** end line.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=144)** Then online 112, I'll override the message method with void message HANDLE hConsole.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=157)** Add my curly brackets.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=158)** Again, I set the text color with SetConsoleTextAttribute
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=167)** hConsole, again for the dark green color, 242, and below that the message that I'll print, cout, this is the green front for the light theme.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=189)** End line.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=191)** That completes the DarkGreenText class that'll be part of the light theme.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=196)** Next is a light green text for the dark theme.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=200)** So I'll start that online 120, I'll start defining the class with class LightGreenText
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=214)** public text, and my curly brackets and start my public section.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=225)** And similar to my dark green constructor, my light green constructor will look like LightGreenText HANDLE hConsole, add my curly brackets.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=243)** Now to set the proper colors with SetConsoleTextAttribute
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=252)** hConsole 10.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=255)** So this time, the value 10 will give me the light green that I'm looking for.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=260)** Below that, I'll add a message to the console.
>
> **[4:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=264)** To see that color, I'll add a line to print a message with cout making the text light green,
>
> **[4:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=280)** end line.
>
> **[4:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=282)** So that's it for the constructor.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=284)** Now to override the message method starting at line 128, I'll type void message handle.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=294)** Again, I'll start with, and in this method, I'll start by setting the text color with SetConsoleTextAttribute hConsole
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=309)** and the value 10 for that bright green, and below that, the message that I'll print to the console with cout.
>
> **[5:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=321)** This is the green font for the dark theme, end line.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=331)** And that completes the tech section with the new derived classes.
>
> **[5:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=336)** Next is onto my factories.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=338)** So I'll scroll down to line 143.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=342)** I'll start with the base factory and add another virtual method to create the green text object.
>
> **[5:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=348)** So online 143, I'll type virtual text
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=356)** getGreenText HANDLE hConsole equals zero.
>
> **[6:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=367)** Now to update the derived factories to instantiate the correct green text object, I'll scroll down to my light theme factory and stop at 158, and add the new method for the green text by typing text getGreenText HANDLE hConsole,
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=390)** and my curly brackets.
>
> **[6:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=392)** In the method, I'll return the dark green text with return new DarkGreenText hConsole.
>
> **[6:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=404)** Since this is the late theme factory, this will return the dark green text, which will have a higher contrast to the white background.
>
> **[6:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=412)** Next comes the dark theme.
>
> **[6:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=416)** So at line 176, I'll add Text getGreenText HANDLE hConsole.
>
> **[7:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=429)** Add my curly brackets, and in the method, I'll return new LightGreenText, hConsole.
>
> **[7:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=440)** And that's all the updates I need for my factories.
>
> **[7:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=443)** The final section to update is in main.
>
> **[7:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=447)** So I'll go to line 220 and I'll instantiate the green text with Text appGreenText
>
> **[7:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=460)** equals app getGreenText hConsole.
>
> **[7:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=470)** And down at line 223, to print the message to console I'll add appGreenText message hConsole.
>
> **[8:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=484)** With all my changes done, I'll press control Shift B to build and F5 to run it.
>
> **[8:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=493)** On the console, I see the prompt to pick a theme.
>
> **[8:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=496)** I'll pick the dark theme by entering two.
>
> **[8:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=500)** Notice that the background switches to black and the text is white for the default text messages, and a bright green for the green messages.
>
> **[8:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=508)** I'll hit enter to continue.
>
> **[8:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=511)** And to run this again, I'll press F5.
>
> **[8:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=515)** This time I'll pick the light theme by entering one.
>
> **[8:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=520)** Now the background has turned white and the default text is black.
>
> **[8:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=524)** The green message is in dark green this time, it shows up better against the white background.
>
> **[8:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/solution-abstract-factory?u=76281980&t=530)** The goal of this challenge was to show how to extend a program that's using the abstract factory, and to show that a base product class can have multiple derived classes.

> [!info]- Semantic Content
>
> **Code Identifiers:** hconsole (14), getgreentext (4), appgreentext (2)
> **Code Keywords:** public (5), abstract (2), override (2), pass (1), function (1)
> **Env Vars:** handle (6)
> **UI Navigation:** scroll down (3), go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Builder

#### Builder concept
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=0)** - [Instructor] The builder design pattern allows us to build complex objects by separating the construction of the object from its representation.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=10)** Unlike the factory or abstract factory, which builds her objects in one shot, this allows us to build a complex object one step at a time.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=21)** It also allows us to use the same steps or process to create different representations of the complex object.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=29)** This is a particularly useful design when creating an object that's made up of other objects.
>
> **[0:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=35)** Each component can be instantiated separately and then put together before it returned to the color.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=43)** Not only does separating an object into individual components help avoid a class explosion, it makes it easier to maintain.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=52)** I like to think of this method of building a complex object as being similar to how a fast food combo meal is put together.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=61)** The final product is given to a customer is one bag, but it contains separate components that are created separately in the kitchen.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=70)** The typical fast food combo meal consists of a main item, a side and a drink.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=77)** Some fast food restaurants have burgers and others have hot dogs or salads, but they all follow a similar process.
>
> **[1:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=85)** They put together a main dish, then put together a side item, fill up a cup with a drink and put it altogether in a bag.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=95)** And all of that gets handed over to the customer.
>
> **[1:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=100)** This is the generic class diagram for the builder pattern.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=104)** The product represents the complex object that's being built one step at a time.
>
> **[1:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=110)** And you can think of this as a bag with the complete meal that's handed over to the customer.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=115)** The builder outlines the steps needed to create a product.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=120)** It knows in general what the individual steps need to be followed to create that final product.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=125)** In my analogy, each step would be the creation of each individual component of the meal, the main item, the side and the drink.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=135)** This is not where to define how to build a burger or hot dog, it's just an interface that knows that some sort of main or side is a step in the process to make the final item.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=148)** The concrete builder is where the implementation of the different components are specified.
>
> **[2:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=153)** This is where the definition for building a burger or frying fries would be located.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=159)** For example, it would have one method to build a cheeseburger, which could consist of grilling the patty, adding cheese and placing it all together in a bun, and a separate method for making fries that would include frying potatoes and seasoning them.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=176)** Each concrete builder could build a slightly different product, I could have a different concrete builder that has a side salad component instead of fries.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=185)** The director invokes the builder to construct the desired product and the concrete builder returns the product to the director.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=194)** In our example, this could be the cashier or server that takes the order from the customer and communicates it to the kitchen where they put it all together.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=204)** For complex objects they're made of separate components.
>
> **[3:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-concept-14324293?u=76281980&t=207)** The builder pattern enables you to encapsulate the build and to build the objects one step at a time before returning it to the caller.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), interface (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Builder pattern setup
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=0)** - [Instructor] The builder pattern allows us to build a complex object one component at a time.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=6)** For the example I'm about to do this is the class diagram for it.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=11)** I will be building a fast food combo meal with two different types of combos, one with a burger and fries, and another with a hotdog and salad.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=20)** Both meals will include a soda drink.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=23)** The class diagram for the ComboMeal looks like this, where the meal has one entree, one side, and one drink.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=31)** The entree could be a burger or hotdog.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=34)** Both of which inherit from the Entree base class.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=36)** Similarly, the side could be fries or a salad, which are derived from the Side base class.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=43)** Finally, there's only one Drink class.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=47)** As a starting point, I'll have all these objects defined ahead of time so we can focus on the builders.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=53)** The Builder class diagram for the example will look like this.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=58)** The MealBuilder provides the interface that outlines the components needed to be put together for a meal, so it includes an entree, a side, and a drink.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=68)** There will be two concrete builders that specify exactly which objects are needed for a meal, a burger, fries, and drink for the burger meal, and a hotdog, salad, and drink for the hotdog meal.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=80)** The product for this example is the meal combo object, which contains the meal components together.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=86)** To show the classes I've predefined for my meal combo, I've opened 05_02_BuildSetUp_Start, which already has the components for the meals defined.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=97)** At line 11, I have my base class for the Entree or main item in the combo meal.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=102)** It has a protected member defined at line 14 that will store the name of the main item.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=109)** At line 16, I've implemented a method to return the name.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=114)** I've derived the Burger class from the Entree class at line 23.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=119)** And it stores the word hamburger in the _entree property when it is instantiated, and it will write to the console how the burger is being made.
>
> **[2:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=128)** At line 34, I've derived another class called Hotdog, and this one will store the string hotdog.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=137)** Similarly, I've defined a base Side class at line 47, that has a protected member called _side defined at line 50 to store the name of the class.
>
> **[2:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=148)** I also have a public method defined at line 52 that will return the value of the protected member.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=156)** The derived Fries class is defined at line 59 with a constructor that will write to the console the process of making fries.
>
> **[2:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=164)** On line 65, we'll write to the _side property the string fries.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=169)** At line 70, I've defined another derived class called Salad that will store the word salad for the _side property.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=177)** And the final item needed in the combo meal is a drink, which I define at line 81.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=183)** It also has a protected field _drink to store the name of the drink at line 84, which is assigned when the object is instantiated.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=193)** At line 91, I've defined the public method to return the value of the property _drink.
>
> **[3:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=200)** Now comes a complex class that comes from combining the simpler classes.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=205)** The MealCombo class definition starts at line 98, and the private members consists of an entree object, a side object, and a drink object as well as a bag that typically goes with the meal.
>
> **[3:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=219)** At line 106, I started the section that defines the public methods that'll set the meal items for a meal combo.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=227)** Finally at line 123, I've added an openMealBag method that will let us see what's in the object.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=236)** If the combo meal structure doesn't seem familiar to you, go check out the videos on inheritance versus composition in chapter two.
>
> **[4:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-setup-14321546?u=76281980&t=244)** With all my meal objects defined, I'll start putting my meal builders together in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), protected (4), public (3), this, (1), finally, (1)
> **Code Identifiers:** openmealbag (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Builder pattern implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=0)** - [Instructor] With all my product components set up from the previous video, it's time to implement my builders.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=6)** I've opened 05_03_BuildImp_Start, which has the meal combo classes all set up.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=13)** To construct a meal combo object, I need builders.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=18)** First thing I need is a base meal builder.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=21)** At line 132, I'll start with class MealBuilder.
>
> **[0:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=30)** I'll add my curly brackets and start my protected section with protected.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=38)** On the next line, MealCombo underscore meal.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=46)** This will be the complex meal combo object that my builder will return when all the components have been created and added to it.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=54)** On the next line comes public and a method to create the entree.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=60)** I'll add virtual void.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=67)** Under that, I'll create the side with virtual void cookSide.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=76)** Next, I'll get the drink with virtual void fillDrink.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=87)** Finally, below all that, a get meal method for returning the completed combo meal.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=93)** I'll type MealCombo getMeal.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=101)** Curly brackets, and then within the curly brackets, return underscore meal.
>
> **[1:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=109)** This completes my base meal builder, and this is what all my other builders will derive from.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=116)** The next thing I want to do is to create the derived builders, which are based off of the meal builder I just created.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=123)** The first concrete builder that's going to be derived from that is the one for the burger.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=129)** I'll type class BurgerMeal public MealBuilder.
>
> **[2:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=140)** Add my curly brackets.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=142)** Now to start the public section with public, and under that, the constructor.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=149)** BurgerMeal. Curly brackets.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=154)** Within the curly brackets for my constructor, I have underscore meal equals new MealCombo burger.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=167)** This will return a new combo meal object that I've called burger.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=172)** Now to override the virtual methods from the base class.
>
> **[2:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=176)** On line 154, I'll type void cookEntree.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=186)** Add my curly brackets below that.
>
> **[3:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=188)** Since this is a burger meal, I want to return a burger.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=193)** Burger lowercase burger equals new burger.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=199)** Below my new burger, I'll set that as my entree for the meal with underscore meal setEntree burger.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=210)** Next comes my side method.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=213)** On line 159, I start with void cookSide.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=220)** Within my curly brackets, the side for the burger meal is going to be fries.
>
> **[3:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=226)** I'll instantiate the fries object with fries lowercase fries equals new uppercase fries.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=236)** To add it to my meal object, under that, I type underscore meal setSide fries.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=247)** Finally, for the drink, I'll start on line 164 and type void fillDrink.
>
> **[4:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=256)** Add my curly brackets for the method.
>
> **[4:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=259)** Within the curly brackets, I type drink lowercase drink equals new uppercase drink.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=269)** Under that, to add it to my meal object, underscore meal setDrink lowercase drink.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=279)** That completes my builder for a burger combo meal.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=284)** In a very similar way, I've already defined my hot dog meal builder.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=290)** If I scroll down here, on line 173 is the start of the hot dog meal builder class.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=299)** The constructor defined starting at line 176 will return a new meal combo object, just like we did with the burger meal.
>
> **[5:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=308)** The over-rided cookEntree method, starting at line 180, creates a hot dog object instead of a burger, since this is, after all, a hot dog meal.
>
> **[5:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=318)** Next, starting on line 185, the cookSide method will create a salad object instead of fries.
>
> **[5:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=326)** Finally, the fillDrink method is the same as in the burger meal.
>
> **[5:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/builder-pattern-implementation-14317577?u=76281980&t=331)** With all my builders implemented, I can start using them in my main code, which I'll show you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), finally, (3), protected (2), class. (2), from. (1)
> **Code Identifiers:** cookside (3), filldrink (3), cookentree (2), getmeal (1), setentree (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Running the Builder example
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=0)** - [Instructor] Now that I have all the participants of my builder design defined, I'll put it altogether in main.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=6)** To show how to do that, I've opened up 05_04_BuildRun_Start.
>
> **[0:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=11)** At line 200, I'll first declare a builder with Meal Builder cook equals new meal builder.
>
> **[0:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=23)** I used the base class here since I don't know which type of builder to create just yet.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=28)** On the next line I'll declare the product that will be returned by my builders.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=33)** So I'll type meal combo, meal.
>
> **[0:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=39)** I want the user to select what kind of meal they want.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=43)** So I'll have a variable int choice.
>
> **[0:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=48)** And the next few lines, I've already set up the prompts to ask the user to pick a meal type.
>
> **[0:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=54)** So below that, to initialize the proper derived meal builder, I want to use a switch statement.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=61)** So at line 213 I'll type switch choice, add my curly brackets.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=70)** To handle when the user selects number one, I'll add case one and on the next line, cook equals new burger meal.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=83)** So when the user selects the value one, they're asking for the burger meal, I'll add a break below that to exit the switch statement.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=91)** And then on the next line I'll handle when the user selects number two.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=96)** So I'll type case two and below that cook equals new hot dog meal.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=106)** So if the user selects number two, they'll get a hot dog meal.
>
> **[1:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=111)** Below that, I had my break to leave the switch statement and finally, to handle when the input doesn't match any of the options that I want, I'll use default.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=125)** And for that situation, I'll add a message to the user to let them know that it's an invalid input.
>
> **[2:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=131)** So see out invalid selection and line.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=141)** I still have to return something.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=143)** So I'll type cook equals no.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=147)** And one more break.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=150)** With instantiating the correct builder all set up, I need to create the proper meal based on what the user selected.
>
> **[2:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=157)** So starting on line 230, I'll start calling the steps to build my meal components.
>
> **[2:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=163)** First I need an entree.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=165)** So add cook, cook entree
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=177)** then for my side, on the next line, it's cook cook side below that I'll need a drink.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=186)** So cook fill, drink.
>
> **[3:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=192)** And finally, I need my builder to give me my meal.
>
> **[3:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=195)** So I'll type meal equals cook, get meal.
>
> **[3:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=204)** These four lines between 230 and 233 could be placed in a separate director class, but I chose to keep it in main to simplify this example.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=213)** And the last thing I want to add to take a look at what's actually in my bag is see out meal, open meal, bag and line.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=230)** What this last line will do is write to the console what is in my bag.
>
> **[3:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=234)** So I know what kind of meal I've gotten.
>
> **[3:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=237)** Now to build my solution with control+shift B.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=242)** To see how this all works, I'm going to put a break point at line 213 and 230
>
> **[4:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=253)** and press F5 to start the execution,
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=261)** Over on the console, I see the prompt asking me which meal I would like to have.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=267)** The hamburger is a pretty classic choice.
>
> **[4:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=269)** So I'm going to go with that by pressing one and enter.
>
> **[4:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=274)** The execution stopped here at line 213 at the start of my switch statement.
>
> **[4:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=278)** When I press F 10, I jumped to line 216 here.
>
> **[4:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=284)** A burger meal builder is being instantiated since this is the meal that I have selected.
>
> **[4:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=290)** To continue to the next break point, I'm going to press F5.
>
> **[4:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=294)** Here on line 230, I'm about to call the builders cook entree method.
>
> **[4:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=299)** When I press F10, I see the steps to build a burger on the console, another press of F10, and I see the side being made.
>
> **[5:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=311)** A step again and I see the drink being filled.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=315)** Finally, on this line, I get the complex meal object back.
>
> **[5:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=320)** To see what's in my meal I'll press F10.
>
> **[5:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=323)** and on the console, I see that I have a burger meal with my hamburger, fries and soda.
>
> **[5:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=329)** I'll go ahead and press F5 to complete this execution.
>
> **[5:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=333)** I'm going to run it again by pressing F5.
>
> **[5:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=338)** And this time I'm going to select the hot dog meal.
>
> **[5:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=342)** So enter two and then enter.
>
> **[5:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=347)** I'll step through my code again, this time I'm taking the line 219 where my hot dog meal builder is going to be instantiated.
>
> **[5:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=356)** When I press F5 to go to the next break point, I end up at line 230 just as before.
>
> **[6:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=363)** As I stepped through my code pressing F10, I see this time my hot dog is being created, followed by my salad, and then following my drink, step two more times to open up my bag.
>
> **[6:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=378)** And I see this time I have the hot dog meal with my hot dog, my salad and the soda.
>
> **[6:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=385)** The builder pattern encapsulates the building of complex objects that are made with other objects.
>
> **[6:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=390)** It allows me to separate the creation of the complex object from the rest of my code base.
>
> **[6:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=396)** So in the past three videos we've implemented and run a builder pattern.
>
> **[6:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-builder-example-14319526?u=76281980&t=401)** As you can see, it allows me to use the same steps to build complex objects made up of simpler objects.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5), finally, (3), type. (1), default. (1), let (1)
> **Env Vars:** f10 (4)
> **UI Navigation:** select the (1), go to (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Steps in the Builder pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=0)** - Unlike other design patterns, the concrete builders can return products that do not share the same interface or base class.
>
> **[0:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=10)** The emphasis of the builder pattern is on the steps to create an object and not necessarily on the class hierarchy of the products.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=20)** This is why when you look at the generic class diagram for the builder pattern, the method getResult is located in the concrete builders and not the abstract builder.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=31)** If products happen to share the same interface, then it would be better to define the getResult method in the abstract builder like I did in the implementation video, but that may not always be the case.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=46)** Think of the steps to make a custom piece of clothing.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=49)** First, I would make measurements.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=52)** Then I would cut pieces based on the measurements.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=56)** Next, I combine the pieces.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=60)** And finally, trim and put finishing touches on it.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=64)** I could use the exact same steps to make a custom table, but I would never associate a shirt with a table.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=75)** If these were classes in my program, they would not be derived from the same base class.
>
> **[1:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=82)** A more application-based example of this would be exporting a report to different file types.
>
> **[1:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=90)** Since file types vary so much, they are not likely going to share the same interface.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=97)** But the steps used to export the data are going to be the same.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=103)** First, create a title, then add a summary.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=108)** Next, format the data, add the table, and finally, we get the report.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/steps-in-the-builder-pattern-14322465?u=76281980&t=116)** By focusing on the steps to build an object, the builder pattern can be useful in cases when complex, unrelated objects are needed.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), class. (2), abstract (2), finally, (2), case. (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** getresult (2)
> **Speakers:** - unlike (1)


### 6. Prototype

#### Prototype concept
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=0)** - The prototype design allows a creation of new objects through cloning or copying existing ones.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=7)** Imagine having an object that has many, many, many properties, and you want a copy of it that has all, or a lot of the same property values.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=16)** If you create the copy by instantiating a new object in the traditional way, you'd have to set a lot of properties.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=24)** There could also be private properties that can't be directly accessed externally.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=29)** This is where having the ability to easily copy an existing object to create a new one comes in handy.
>
> **[0:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=36)** The prototype design is like cell division or cloning in the biological world.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=42)** There are so many traits contained in the DNA of any animal, which are like the properties of an object.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=49)** Mammals like us, humans, sheep, or dogs have tens of thousands of genes that contribute to traits like hair color or size.
>
> **[0:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=58)** You can think of each of these traits, like the properties of a class.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=63)** A sheep class could consist of properties like wool color, wool length, tail length, size of horns, level of intelligence, stubbornness, or aggressiveness, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=76)** To create a new sheep object that is a clone of an existing one would typically mean creating a new object and setting each property individually to match the original.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=87)** And like actual DNA it's not easy for us to know what all of the traits are or how they're defined within it.
>
> **[1:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=95)** However, if the prototype pattern is used.
>
> **[1:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=98)** This can be done easily with a clone method.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=101)** Another advantage to this pattern is when you want to create a similar object, but only one or two properties are different.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=108)** This allows you to easily clone an existing object and then use fewer setters to change the desired properties.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=117)** This is really useful when creating entities in a game where many of them are the same, but you need to create one that's just a little different.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=126)** For example, I could create a game with many sheep and I want to have one boss sheep, that identical to all the other sheep, but has bigger horns than the others.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=139)** It's much simpler to clone a sheep object and update the horn size property than to create a new object from scratch.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=147)** This may sound a lot like using a copy constructor for a class, however, there's one main difference.
>
> **[2:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=154)** And that is for a copy constructor.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=156)** We need to know exactly what object needs to be copied.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=160)** I could update my game to allow the user to choose which animal they want.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=165)** Sheep, deer or cow.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=168)** I don't know ahead of time, which animal I may need to clone for my boss.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=174)** There are ways to do this with casting or conditional statements.
>
> **[2:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=177)** However, if they all share the same base class, making a clone makes us very simple with a single call.
>
> **[3:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=186)** This is what the generic prototype pattern looks like.
>
> **[3:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=189)** The client requests a new object, that's the same as an existing one, asking the prototype to clone itself.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=196)** You can think of this, like the scientist, who's cloning a sheep or represented by the game system that's maintaining all the sheep objects.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=205)** The prototype defines the interface for cloning.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=209)** This allows a client to ask for a clone of an object without knowing exactly how it's implemented.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=216)** You can think of this, like the DNA chain of a sheep.
>
> **[3:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=221)** The interface for the object contains a clone method that's implemented by all concrete classes that use the interface.
>
> **[3:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=229)** The concrete prototype implements the operation of the clone method, which in my example would return a new sheep with the same attributes as the original thereby creating a clone of itself.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=242)** With the prototype design it's simple to make a clone of an existing object.
>
> **[4:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-concept-14317586?u=76281980&t=247)** Not only is it simple, it also allows us to copy the private fields that can't be accessed with a method externally.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), private (2), class, (2), this, (2), class. (1)
> **Env Vars:** dna (3)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Prototype pattern implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=0)** - [Instructor] To show how to implement the prototype pattern, I've opened six two ProtoSetUp Start.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=6)** In here, I've implemented an abstract animal class that has many properties.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=12)** I've divided them up between physical properties, such as hair color, weight and height and personality properties, such as intelligence and stubbornness.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=22)** As I scroll down, notice the multiple setters for many of the properties in the class.
>
> **[0:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=28)** I've only implemented setters for the physical properties, and there is no way to publicly set any of the personality properties.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=37)** Also notice, that I haven't defined any getters, so there's no way to get any of the property values outside of the class.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=46)** The first thing I need to do to implement the prototype pattern is add a clone method.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=52)** So add that at line 18 with virtual, animal, clone, equals zero.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=66)** This is a virtual method, which means any derived classes will need to override it with its implementation of cloning.
>
> **[1:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=75)** Scrolling down to line 53 is my first derived class, which I'm calling sheep.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=81)** In the constructor starting at line 56, the personality properties are set with various values.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=87)** I'm going to override the clone method here at line 63 by typing sheep, clone, add my curly brackets.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=101)** And in the method, I'll return a copy of itself as a new object.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=106)** So I'll type return, new sheep, this.
>
> **[1:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=113)** Below this method, I'm going to add another method, though modify one of the sheep's properties.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=120)** So at line 67, I'll add void, sharing, add my curly brackets.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=129)** When a sheep's wool is sheared, its hair length gets shorter.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=133)** So I'll update this value with something smaller by typing underscore hair length, minus equals two.
>
> **[2:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=143)** So every time this method is called, the value decreases by two.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=149)** That's all the updates I'm going to make to the sheep class.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=152)** So next on line 74 is a start of a cow class that's also derived from the animal class.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=160)** Again, the constructor for this class will set the values for the personality properties for a cow object.
>
> **[2:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=168)** At line 83, I'll override the clone method by adding cow, clone, add my curly brackets.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=182)** And under that the call to clone an existing cow object is return, new cow, this Now all my classes are set up to be easily copied to create new objects.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=196)** In main, I'll first start by instantiating an initial sheep object.
>
> **[3:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=202)** On line 92 I'll start typing sheep, lowercase sheep zero equals new sheep.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=214)** Now to set the physical properties for a sheep.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=217)** I'll start with sheep, zero, set hair color, white.
>
> **[3:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=230)** Followed by sheep, zero, set tail, five.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=243)** And below that sheep zero, set weight, 90.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=254)** Next I'll set the height property with sheep, zero, set height, one.
>
> **[4:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=267)** And finally the age will be sheep, zero, set age, five.
>
> **[4:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=277)** That's quite a number of calls to setters and I'm only halfway done.
>
> **[4:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=281)** The next thing I'll do is instantiate the cow.
>
> **[4:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=285)** So starting at line 100, I'll type cow, lowercase cow zero equals new cow.
>
> **[4:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=297)** For its properties, I'll start with cow zero, set hair color, brown.
>
> **[5:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=309)** And under that, I'll add cow zero, set tail, 20.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=315)** Next it's cow zero, set weight, 790.
>
> **[5:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=322)** And on the next line, cow zero, set height, two.
>
> **[5:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=332)** And last but not least, cow zero, set age, eight.
>
> **[5:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=341)** Whew, that's a lot of properties to set.
>
> **[5:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=344)** As you can tell, this can get pretty tedious for objects that have even more properties.
>
> **[5:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/prototype-pattern-implementation-14324292?u=76281980&t=350)** With my initial objects all set up, I'll show in the next video had to clone and update them.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), override (3), return, (2), abstract (1), class, (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Running the Prototype example
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=0)** - [Instructor] To clone the objects that I've set up in the previous video, I've opened 06_03_ProtoRun_Start.
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=6)** First thing I'm going to do is a new variable at line 107.
>
> **[0:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=12)** I'll type animal farm.
>
> **[0:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=17)** This small array will store the cloned objects that I'm about to create.
>
> **[0:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=22)** At line 10, I'll make my first sheep clone by typing farm zero equals sheep zero clone.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=33)** And below that, I'll also clone my cow, by adding farm one, cow zero, clone.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=47)** I want to adjust the weight property of this cow clone.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=50)** So at line 114, I'll use farm one, set weight 1000.
>
> **[1:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=61)** I think my initial sheep object could use a haircut.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=65)** So down at line 117, I'll add the line sheep zero shearing.
>
> **[1:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=74)** And below that, I want another clone of the sheep.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=77)** So I'll type farm two equals sheep zero clone.
>
> **[1:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=86)** My code is now ready to build, which I'll do by pressing control shift B.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=93)** I'm adding a break point at line 110 to see how this prototype pattern really works.
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=99)** To start writing the code, I press F5.
>
> **[1:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=102)** Notice a local watch window just popped up.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=105)** If it doesn't automatically pop up, you can get to it by going to Debug, Windows, Locals.
>
> **[1:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=117)** This tool lets me see what my local variables look like at this specific point of execution.
>
> **[2:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=124)** This is a pretty handy tool to watch variable values as they change during a program's execution.
>
> **[2:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=130)** It's great when you need to debug code and are looking for changes to the variables.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=137)** When I expand the shape zero class to view the values of its properties, I can see the values that I had assigned it using the setters, along with the values that are set by the constructor.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=151)** Similarly, when I expand the cow zero object, I see the values that I set earlier in execution.
>
> **[2:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=160)** Next, I'm going to press F10 to step to the next line.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=166)** Back at the local window, I can expand the array and look at farm zero.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=172)** I can see that the first element is a sheep object and that it has exact same property values as the original sheep zero.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=182)** So I'm going to take another step in my code, and this time, cow zero was cloned.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=187)** So when I look at farm one, the second element within my farm array, I can see that it's an exact clone of the initial cow zero object.
>
> **[3:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=198)** Another press of F10 and I can see the update to farm one's weight property, but also notice that the initial cow zero object has the same weight as it started with.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=210)** Now onto the next line.
>
> **[3:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=213)** Here, I've called the shear method, which decreases the hair length property in the original sheep object.
>
> **[3:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=220)** Originally, that value was five, and now it's three.
>
> **[3:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=224)** Remember, there was no setter for the hair length.
>
> **[3:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=227)** It can only be modified by the shear method.
>
> **[3:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=231)** So if I wanted to make an exact copy of this object using getters and setters, like I would traditionally do, it wouldn't be possible.
>
> **[4:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=240)** When I step again in the code to make yet another clone, the new object is stored as a third element within my farm array.
>
> **[4:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=248)** And you can see here, it's now taken the new value for the hair length property.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=254)** The prototype pattern makes creating new objects that are copies of other objects much simpler.
>
> **[4:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-prototype-example-14319517?u=76281980&t=260)** It allows us to ensure even the private property values that do not have public getters can be reflected in the new object as well.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Code Keywords:** private (1), public (1)
> **Env Vars:** f10 (2)
> **Cross-References:** previous video (1), earlier in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Shallow vs. deep copies
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=0)** - [Instructor] When cloning an object, all the members of one object is clone into the new one.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=7)** Consider this Barn A object whose properties include a pointer to a Sheep object.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=14)** When it's clone, all the member values are copied over, and that includes the pointer to the Sheep.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=21)** The referred Sheep itself is not copied since Barn A's member is storing the pointer to the Sheep and not the Sheep object itself.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=31)** Since both the original object and the cloned object, both point to the same Sheep object, when Sheep is updated both Barn A and Barn B get the updated value.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=43)** This is referred to as a shallow copy.
>
> **[0:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=47)** Only the members of an object are copied over to the new object and any referenced objects are not copied.
>
> **[0:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=56)** If unaware of this characteristic, this could lead to some unexpected behaviors in an application.
>
> **[1:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=63)** If I want the reference objects to be copied as well, this is called a deep copy.
>
> **[1:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=69)** In this case, any reference objects will also need to be copied, which means the clone method in the class needs to make a copy of the referenced object and assign the pointer to the newly copied reference object.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=84)** This could be a recursive process if the referenced object references yet another object.
>
> **[1:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=92)** So, should I use a shallow copy or a deep copy when implementing the prototype pattern?
>
> **[1:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=99)** That depends on whether the intent is to share the reference object or not.
>
> **[1:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=106)** If the reference object is a log file that both objects need to write to, then a shallow copy is sufficient.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=115)** If the referenced object is a specific instance of a component of a more complex object, then the deep copy would be more appropriate.
>
> **[2:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/shallow-vs-deep-copies?u=76281980&t=125)** Not only does a prototype pattern allow me to copy complex objects, it also allows me to control the complexity of the copy itself.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)


### 7. Singleton

#### Singleton concept
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=0)** - [Instructor] There are situations where an application requires an object that can be globally accessed, but requires one, and only one instance of this object.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=13)** This is the perfect solution for a Singleton.
>
> **[0:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=16)** You can think of a Singleton as being similar to the leader of a country.
>
> **[0:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=21)** There can only ever be one at a given time.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=25)** They're visible to everyone in their country and to the rest of the world.
>
> **[0:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=31)** However, they can be replaced with a new leader after a vote, at which point the old leader is no longer referred to as the leader and the new replacement takes on the role.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=44)** A simple programming example of this could be a global counter that is used in multiple areas of an application.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=51)** At first, it can be tempting to just use a static global variable, which is also accessible anywhere in the application.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=60)** But that's asking for trouble.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=62)** For example, if the global variable is complex to instantiate, I would want to wait until it's actually used before creating an instance.
>
> **[1:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=73)** But if I'm not careful, I could end up having two instances of the same global object with the same name.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=81)** Instead, if the class handles this itself, it frees me up from having to monitor and control that class' instance.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=91)** The class diagram for the Singleton is fairly simple.
>
> **[1:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=96)** The class just contains a pointer to itself for clients to access its unique instance.
>
> **[1:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=103)** And this here is a generic implementation of a Singleton class.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=108)** What makes this pattern particularly unique is that its constructor is private.
>
> **[1:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=114)** This means that only the Singleton itself is able to create a Singleton.
>
> **[2:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=121)** I can't use the call "new Singleton" to instantiate a Singleton object.
>
> **[2:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=126)** Sounds a bit circular, but this is how I can ensure there's only one, and only one instance of the class.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=135)** Since the constructor can't be directly accessed, I need a different way to instantiate the Singleton.
>
> **[2:22](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=142)** This getInstance allows me to do exactly that.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=146)** It's a public method, so I'm allowed to access it outside of a class.
>
> **[2:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=151)** And since it's a method in the Singleton class, it can access its own private constructor.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=159)** Once the instance is created, it's stored in a static variable that I've called instance.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=165)** Since it's a static variable, there can only ever be one instance of it.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=169)** So this is how a Singleton maintains its unique instance.
>
> **[2:54](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-concept-14319525?u=76281980&t=174)** The Singleton pattern is a unique one that ensures an object is globally accessible, but only one instance of it can exist.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), class. (3), private (2), public (1), class, (1)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** getinstance (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Singleton pattern implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=0)** - [Instructor] To demonstrate how to implement a singleton, I've opened 07_02_Singleton_Start.
>
> **[0:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=7)** I'll start by defining my singleton class with class leader, and provide the open curly bracket.
>
> **[0:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=15)** First, I make the private section.
>
> **[0:18](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=18)** In here, I'm going to have a private static property, which is a pointer that points to the unique instance of the class.
>
> **[0:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=26)** I'll type static leader underscore instance.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=34)** Next, the private constructor, leader.
>
> **[0:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=38)** Open curly bracket.
>
> **[0:40](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=40)** In here, I'll put an output message to the console to indicate that the class was instantiated.
>
> **[0:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=46)** I'll type cout new leader elected.
>
> **[0:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=53)** End line.
>
> **[0:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=55)** Below that, at line 17, I'll start my public section.
>
> **[1:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=60)** Here, I'll have a static function for the class, which is used by clients to obtain the single instance.
>
> **[1:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=67)** I'll type static leader getInstance.
>
> **[1:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=76)** I'll add my curly brackets.
>
> **[1:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=79)** In this method, I want to check to see if an instance already exists.
>
> **[1:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=84)** To do that, I'll use if underscore instance is equal to null.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=93)** Beneath that, I have my curly brackets.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=97)** If the instance doesn't exist yet, the class will instantiate it with underscore instance equals new leader.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=108)** And then outside of my if statement, at line 24, I'll return the new instance to the caller with return underscore instance.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=119)** At line 26, I'll also add another method that leaders typically do, such as give speeches.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=127)** I'll define it as void giveSpeech.
>
> **[2:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=133)** Add my curly bracket.
>
> **[2:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=135)** What this method will do is print out a message to the console.
>
> **[2:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=139)** I'll use cout, address the public.
>
> **[2:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=146)** End line.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=147)** That completes the class definition.
>
> **[2:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=150)** Outside my class definition, to avoid linker errors when I compile, I'll initialize instance outside of the class definition.
>
> **[2:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=159)** At line 32, I add leader underscore instance equals null.
>
> **[2:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=169)** Now onto the main section of my code.
>
> **[2:53](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=173)** Here at line 36, I'll instantiate a new leader object by using leader elected equals new leader.
>
> **[3:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=185)** I'll have my leader give a speech, so on the next line, I'll type in elected giveSpeech.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=194)** Now I'm ready to build my example by pressing Ctrl+Shift+B.
>
> **[3:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=199)** Wait, there's an error; cannot access private member declared in class leader.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=205)** Remember, I made the constructor private.
>
> **[3:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=208)** If I try to instantiate a leader object from outside of a class definition, I get this error.
>
> **[3:35](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=215)** Instead, I need to access the singleton exclusively through the public getInstance method.
>
> **[3:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=222)** To fix this, I'll remove lines 36 and 37 and use leader, getInstance, giveSpeech.
>
> **[3:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=235)** Now when I build, it's successful, because I'm now properly accessing the singleton instance through the public method.
>
> **[4:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/singleton-pattern-implementation?u=76281980&t=242)** In the next video, I'll run this code and see how the singleton pattern works.

> [!info]- Semantic Content
>
> **Code Keywords:** private (5), static (4), public (4), class. (1), function (1)
> **Code Identifiers:** getinstance (3), givespeech (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Running the Singleton pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=0)** - [Instructor] Let's pick up where we left off in the last video.
>
> **[0:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=3)** To show how a singleton pattern all works, I've opened 07_03_Singleton.
>
> **[0:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=8)** I'm going to put a break point here at line 36 and start writing the application by pressing F5.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=20)** Here, we've stopped at line 36 and the program is about to access the leader instance for the first time.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=27)** I step into this call by pressing F11, and we end up at line 18 where the getInstance method is going to get the instance of the singleton.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=37)** I press F10 to go to the next line, where it checks to see if an instance already exists yet.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=44)** Since it doesn't exist yet, when I press F10, a new instance is created on line 21.
>
> **[0:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=51)** If I hit F10 one more time, notice on the console, we see the phrase, new leader elected, which means the singleton was created.
>
> **[1:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=62)** Here at line 23, we'll return this instance.
>
> **[1:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=66)** I'll keep pressing F10 to continue on until we end up back in the main.
>
> **[1:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=71)** If I step again by pressing F11, I'm now taken to the giveSpeech method on line 26.
>
> **[1:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=80)** If I continue to press F10 to step through the code, pass line 27, at which point we see the console update with the new phrase, address the public.
>
> **[1:31](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=91)** I'll press F5 to complete the execution.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=97)** To see what happens if I tried to create another variable to access the singleton, I'm going to add a few new lines.
>
> **[1:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=105)** On line 37, I'll add leader elected equals elected get instance.
>
> **[1:59](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=119)** Underneath that, I'll have my object give a speech.
>
> **[2:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=123)** Elected, giveSpeech.
>
> **[2:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=129)** I'll re-build my code with Ctrl+Shift+B and I'll run it again with F5.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=137)** We stop here again at line 36, where we know we will instantiate the leader singleton.
>
> **[2:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=144)** I'll step past that with F10.
>
> **[2:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=147)** Notice the two lines on the console that indicates that the singleton was created and we had called the method giveSpeech.
>
> **[2:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=156)** Now I'm at line 37.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=158)** If I step into this call with F11, I'm again at the getInstance method at line 18.
>
> **[2:47](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=167)** Just like before, I press F10 to go to the next line, where it checks to see if an instance already exists.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=175)** This time, the instance does exist, so when I press F10 again, it skips to line 23.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=183)** At this point, I've already called getInstance once, so the singleton has already been instantiated.
>
> **[3:11](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=191)** It's that same instance that's going to be returned by this line.
>
> **[3:16](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=196)** I'll continue stepping through my code by pressing F10.
>
> **[3:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=201)** Just as before, the singleton's giveSpeech is called.
>
> **[3:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=205)** We can see the expected text over on the console, address the public.
>
> **[3:30](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=210)** I'll press F5 one last time to finish the execution.
>
> **[3:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=214)** This is the simplest way to implement the singleton design.
>
> **[3:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=218)** It was pretty simple, but you can see how it protects the instantiation of the singleton by forcing the call to go through the public getInstance method.
>
> **[3:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/running-the-singleton-pattern-14318555?u=76281980&t=228)** This is how it ensures that there's only ever just one instance of the object.

> [!info]- Semantic Content
>
> **Env Vars:** f10 (9), f11 (3)
> **Code Keywords:** continue (3), public (3), let (1), pass (1)
> **Code Identifiers:** getinstance (4), givespeech (4)
> **UI Navigation:** go to (2)
> **Cross-References:** in the last (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Is the Singleton a good pattern?
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=1)** - [Instructor] The Singleton pattern has two major characteristics to it.
>
> **[0:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=5)** There's only one instance of it and it is a global object that can be accessed anywhere in a program.
>
> **[0:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=13)** These are two characteristics that can be seen as bad programming practices.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=19)** First of all, by having only one instance of an object can seem like a great idea.
>
> **[0:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=25)** Say I'm creating a video game and I use a Singleton to ensure I only have one instance of the main character.
>
> **[0:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=34)** This seems like a perfectly reasonable idea.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=37)** A player moves their single character through a game from one level to the next.
>
> **[0:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=44)** Now imagine my game becomes really popular and players are asking for multiplayer modes.
>
> **[0:50](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=50)** This means I'm going to need to allow two or more instances of the character object in the game at a time.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=57)** Unfortunately, by using the Singleton pattern, I have prevented myself from easily extending the program.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=65)** This goes against the very reason why we want to use design patterns.
>
> **[1:10](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=70)** It doesn't allow for the flexibility or the extensibility that patterns are supposed to provide us.
>
> **[1:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=77)** The one use case that many developers will use a Singleton for is logging.
>
> **[1:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=83)** It's a single resource that will commonly be used by multiple parts of a program.
>
> **[1:28](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=88)** But even then, some will choose to avoid using the Singleton to allow for possible future extension.
>
> **[1:34](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=94)** You never know how your program will grow as you get feedback from users.
>
> **[1:41](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=101)** A Singleton's characteristic as a global is the other reason we need to be careful about this design pattern.
>
> **[1:48](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=108)** At first, global seem incredibly useful and makes it easy for different parts of our program to use it.
>
> **[1:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=115)** However, this also means it can be changed by anything that accesses it.
>
> **[2:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=120)** This can make it very hard to control, debug and maintain as the application grows.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=127)** This characteristic makes the simple implementation of the Singleton pattern not thread safe.
>
> **[2:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=134)** To understand this, imagine I have a Singleton object that has not been instantiated yet.
>
> **[2:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=141)** If this happens to be a multi-threaded application, I can very well have a situation where two threads are trying to call getInstance at the same time.
>
> **[2:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=152)** thread1 calls getInstance and checks to see if instance is null, which it is.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=158)** So it enters the statement to create a new Singleton.
>
> **[2:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=162)** Now, thread2 calls getInstance.
>
> **[2:46](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=166)** At this point, thread1 may not have completed the creation of the new Singleton especially if it's a particularly complex one.
>
> **[2:55](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=175)** So thread2 sees that instance is null and enters the statement to create a new Singleton.
>
> **[3:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=182)** thread1 will complete its creation of the Singleton object and return it.
>
> **[3:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=187)** Then thread2 will complete its creation of the Singleton object and return it.
>
> **[3:13](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=193)** Thereby overriding the one created by thread1 and potentially losing any information I wanted from thread1.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=203)** There are two ways I can solve this problem.
>
> **[3:26](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=206)** The first is to use lazy initialization.
>
> **[3:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=209)** This is where I create an instance of the Singleton object at the very start of the execution.
>
> **[3:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=217)** In this snippet, I've added a call to getInstance right at the start of my program to create and return the Singleton.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=225)** This means instance will never be null whenever getInstance is called from now on and it will never need to create another instance.
>
> **[3:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=236)** This avoids a situation where I accidentally overwrite an instance and potentially lose data.
>
> **[4:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=243)** However, what if the Singleton object is expensive to instantiate and during a particular execution, it's never used?
>
> **[4:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=252)** This would be a waste of resources.
>
> **[4:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=255)** Another way to solve this problem is to protect the block of code where I'm instantiating the Singleton by indicating it to CriticalSection.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=265)** What this does is allow only one thread to execute the full block of code at a time.
>
> **[4:32](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=272)** So when one thread enters the section, other threads must wait for the first thread to complete before they enter.
>
> **[4:39](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=279)** This means once the first thread leaves the section, an instance of the Singleton will have been created and no other threads have entered the CriticalSection of code.
>
> **[4:51](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=291)** This guarantees that when the next thread enters and checks the value of instance, it will see that it is not null and will not overwrite the existing instance of the Singleton.
>
> **[5:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=303)** This tends to be the preferred approach but the downside is at designating a CriticalSection is a costly operation which will slow down the application.
>
> **[5:15](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/is-the-singleton-a-good-pattern-14324288?u=76281980&t=315)** Not everyone agrees that the Singleton pattern should be used but now you can decide if it's a solution that fits your particular scenario.

> [!info]- Semantic Content
>
> **Code Identifiers:** getinstance (5)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Code Keywords:** this, (1)
> **Warnings:** be careful (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Comparing creational patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=0)** - [Instructor] With multiple patterns to pick from, how do you pick which one to use in an application?
>
> **[0:06](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=6)** There aren't any hard and fast rules to follow to determine which pattern is the best to use in a given scenario.
>
> **[0:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=14)** As with any design decision, it depends on the particular program you're trying to build.
>
> **[0:20](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=20)** Two different patterns can equally be good.
>
> **[0:24](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=24)** And sometimes the decision just comes down to personal preference.
>
> **[0:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=29)** Sometimes a program will start off with one pattern and evolve over time as it grows to another pattern.
>
> **[0:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=37)** For example, it's a common occurrence that a program will start out using the factory method.
>
> **[0:43](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=43)** Eventually, it makes sense to start grouping products together and so the program switches over to the abstract factory pattern.
>
> **[0:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=52)** It's also possible to use more than one pattern in the same application.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=57)** For example, the components in a builder could come from the products of an abstract factory.
>
> **[1:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=65)** Let's revisit my scenario from the first chapter.
>
> **[1:08](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=68)** I'm working at a company that's building a new adventure game.
>
> **[1:12](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=72)** It has a character that's wandering around looking for treasure and defeating monsters as they go.
>
> **[1:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=81)** When a new player starts the game, the first thing they'll do is set up their character.
>
> **[1:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=87)** I let them pick out the character's attire, shield, and weapon of choice.
>
> **[1:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=93)** Each of these choices could be a separate object.
>
> **[1:37](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=97)** Once they've picked the items that they want, their character is placed into the first level of the game.
>
> **[1:44](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=104)** To create the character based on the player's choices, I could use the builder pattern, which allows me to build a complex object out of other objects.
>
> **[1:56](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=116)** If a player updates their character's weapon later in the game, the builder pattern makes it easy to swap objects to create an updated character.
>
> **[2:07](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=127)** To help a player advance through the game, I want to scatter a few different items throughout the levels that will increase the character's health.
>
> **[2:17](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=137)** These items are similar to one another, but I want to manage the creation of the items so they're found in useful areas and not too many come up at once.
>
> **[2:29](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=149)** For this, I can use the factory method to control how the game generates items for the player to find.
>
> **[2:38](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=158)** As a player runs through each level, they'll run into a number of small monsters.
>
> **[2:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=165)** They will be more or less the same with slight variations in the speed that they move around.
>
> **[2:52](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=172)** To easily generate these monsters, I could use a prototype pattern and only have to update their speed attributes to get the variations I want.
>
> **[3:03](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=183)** The game is also designed to have multiple levels where every level has a different theme, the prairies, mountains, forest, and underwater.
>
> **[3:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=194)** Despite these different environments, there will be common elements such as the monsters and their particular attack item.
>
> **[3:23](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=203)** To keep the theme consistent in each level, I'll use the abstract factory pattern to keep objects in the same family together by having a separate concrete factory for each level.
>
> **[3:36](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=216)** Finally, building a game is no easy undertaking, and to help debug and log logistics, I want a logger.
>
> **[3:45](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=225)** Since I only need one instance of the logger and all parts of my game should be able to add to the log, I'll choose to use the Singleton pattern to implement it.
>
> **[3:58](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=238)** Throughout this example, I have found a way to use all the different types of creational design patterns.
>
> **[4:05](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=245)** Not all programs need to be this complex and a design pattern is not necessarily needed for all parts of a program.
>
> **[4:14](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=254)** Remember that design patterns are guidelines to help make code easy to extend and maintain.
>
> **[4:21](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=261)** So I encourage you to experiment and try different implementations.
>
> **[4:25](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/comparing-creational-patterns-14322463?u=76281980&t=265)** You'll soon discover situations where a pattern will be a big benefit and other situations where it makes things needlessly complex.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (3), let (2), from, (1), this, (1), finally, (1)
> **Analogies:** for example (2), similar to (1), such as (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** later in (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Thanks for watching
> [LinkedIn Learning](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=0)** - [Olivia] Thanks for watching this course.
>
> **[0:02](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=2)** I hope you've enjoyed it.
>
> **[0:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=4)** And that it's given you some ideas on how to better organize your code.
>
> **[0:09](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=9)** There are a lot of different ways to use the design patterns in this course, so it's important to remember that these patterns are really just guidelines.
>
> **[0:19](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=19)** Knowing how to decouple blocks of code from one another is an important programming skill that forms the basis for design patterns.
>
> **[0:27](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=27)** Going forward, I encourage you to try each pattern with your own projects.
>
> **[0:33](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=33)** Maybe reimplement a feature using two different patterns to see how the same problem can be solved in two different ways.
>
> **[0:42](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=42)** The goal of these patterns is to make your code more maintainable, flexible, and extensible.
>
> **[0:49](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=49)** As you use them more and more, you'll find that you start to naturally structure your code in a way that's easy to update.
>
> **[0:57](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=57)** So when you find yourself spending more time developing features and less on maintaining, you've succeeded.
>
> **[1:04](https://www.linkedin.com/learning/c-plus-plus-design-patterns-creational/thanks-for-watching?u=76281980&t=64)** So good luck and see you next time.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [olivia] (1)


## Path Context

### In [[Master C++]]
← [[C++ Design Patterns- Behavioral]] | **5 of 6** | [[C++ Development- Advanced Concepts, Lambda Expressions, and Best Practices]] →

## Appears In

- [[Master C++]]

## Related Courses

_Courses sharing skills:_

- [[Playwright- Design Patterns]] — Design Patterns
- [[Python- Design Patterns]] — Design Patterns
- [[Nail Your C++ Interview]] — C++
- [[Web Servers and APIs using C++]] — C++
- [[Learning C++]] — C++

---

[↑ Back to top](#)