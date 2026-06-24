---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-introduction-java
url: "https://www.linkedin.com/learning/hands-on-introduction-java"
duration_minutes: 80
duration: 1h 20m
level: Intermediate
updated: 11/9/2022
learners: 48312
skills:
  - Java
exercise_files: false
github: "https://github.com/LinkedInLearning/hands-on-java-3080245/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF6nAhBEhw54Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666989653554?e=2147483647&amp;v=beta&amp;t=tw74qmskKZKRB94IWWhpLS1uFrYc3Kb_tjg2hqwa3zM"
linkedin_topic: Software Development
learning_paths:
  - '[A Quick Start Guide to Java Programming](../../Paths/Software%20Development/Learning%20Paths/A%20Quick%20Start%20Guide%20to%20Java%20Programming.md)'
prev_courses:
  - '[Learning Java 17](Learning%20Java%2017.md)'
next_courses:
  - '[Practice It- Java](Practice%20It-%20Java.md)'
path_nav: '[{"path":"A Quick Start Guide to Java Programming","position":4,"total":5,"prev":"Learning Java 17","next":"Practice It- Java"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Hands-On%20Introduction-%20Java.md)

![Hands-On Introduction: Java](https://media.licdn.com/dms/image/v2/D560DAQF6nAhBEhw54Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1666989653554?e=2147483647&amp;v=beta&amp;t=tw74qmskKZKRB94IWWhpLS1uFrYc3Kb_tjg2hqwa3zM)

# Hands-On Introduction: Java

> Java is one of the most popular open-source programming languages that’s currently available on the market. It’s used widely in different industries all over the world, where it’s become something of a must-have for developers. Are you ready to get your skills up to speed? Or are you at risk of falling behind? Join instructor Angie Jones for a hands-on introduction to basic coding in Java. Learn h

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-introduction-java) | 1h 20m | Intermediate | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Getting hands on with Java](#getting-hands-on-with-java)
  - [What you should know](#what-you-should-know)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
  - [Project setup](#project-setup)
- [**1. Model Objects**](#1-model-objects) (3 videos)
  - [Design a solution](#design-a-solution)
  - [Create customer](#create-customer)
  - [Create account](#create-account)
- [**2. External Data Sources**](#2-external-data-sources) (3 videos)
  - [Connect to data source](#connect-to-data-source)
  - [Construct customer from data source](#construct-customer-from-data-source)
  - [Construct account from data source](#construct-account-from-data-source)
- [**3. Utility Classes**](#3-utility-classes) (3 videos)
  - [Create Authenticator](#create-authenticator)
  - [Create menu](#create-menu)
  - [Display menu options](#display-menu-options)
- [**4. State Management**](#4-state-management) (3 videos)
  - [Deposit](#deposit)
  - [Update data source](#update-data-source)
  - [Withdraw](#withdraw)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with Java and project-based learning](#continuing-on-with-java-and-project-based-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting hands on with Java](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/getting-hands-on-with-java?u=76281980&t=0)** - [Angie] [Java](../../Skills/Software%20Development/Java.md) is one of the world's most popular programming languages and it's widely used to build enterprise applications in domains such as web, mobile, [Big Data](../../Skills/Data%20Science/Big%20Data.md), cloud, gaming, and even [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). While learning [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) is an important first step in becoming a Java developer, mastery is obtained by applying those concepts to building applications. That's why in this course, we'll focus on gaining practical experience and developing a Java application using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). We'll visit core concepts of the Java programming language and learn when and how to apply them to real-world problems. I'm Angie Jones, a certified Java developer and Java champion. Join me in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course as we dive into project-based learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [angie] (1)

#### [What you should know](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you should have basic knowledge of [Java](../../Skills/Software%20Development/Java.md) or any other [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) language. We'll focus on exercising that knowledge by building an application to gain practical experience with Java. If you need an introduction to Java, I encourage you to take my Java 17 Essentials courses which cover Java syntax, data types, decision and repetition structures, classes and objects, methods, inheritance, exception handling, and much more. If you already have fundamental knowledge about object-oriented programming, let's jump right in. We'll use [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) in this course, so Ray will walk us through the initial setup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Versions:** java 17 (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos, senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real-world hands-on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a Codespace directly from the course overview page. First, click Open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create codespace on main. The first time you open up a Codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the Extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the Codespace back for this repo right here. Notice that it even remembered that I had opened the Extensions panel. An alternate way to create a Codespace is directly from one of our courses GitHub repositories. From here, click Code and then Create codespace on main. You can also restart a previous Codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens. So we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked
>
> **[3:07](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=187)** on chapter two and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like say 07_03e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the Force Checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the Codespace. To create your own fork, you can click on the Fork button on the repository. I'm going to hit Create fork. I now have my own copy of this repository, and if I want to, I can start a new Codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/hands-on-introduction-java/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the Source Control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the Commit button, and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here. I'll hit OK. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way, it'll automatically sync with your forked repo. Now, that change will be stored in your own version of this repository. Don't worry. If you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Look for additional course-specific tips from the instructor. Now let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (1), go to (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)

#### [Project setup](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=0)** - [Instructor] Most of the heavy lifting to configure our project has already been taken care of by [Codespaces](../../Skills/Software%20Development/Codespaces.md). There's a couple of additional steps we need to cover so that we're ready to build our application. If you haven't already, be sure to fork the repo for this course so that you have your own personal working space. Once you have the editor opened, let's close any panels and popups. So we'll close this one and this one and this one. If you have any others, be sure to close those as well. In this course, we'll use a database, which holds all of the bank's records about customers and their accounts. To view the contents of the database, we'll need to install the SQLite Viewer plugin. To do so, click this Extensions icon on the left navigation menu, and we're going to scroll down to the Recommended section. So I'm just going to collapse these other sections. And you'll see the SQLite Viewer listed here. Go ahead and press Install. Once this is installed, click the Explorer icon on the left, and we're going to expand the Resources folder. Click on the Bank.db file. And this warning is informing us that the file can't be viewed using the default VS Code Editor. If we click Open Anyway,
>
> **[1:34](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=94)** we'll see an option to open this file with the SQLite Viewer plugin. Once we click that, we see the contents of the database. Next, we need to import the [Java](../../Skills/Software%20Development/Java.md) project we'll be working on. We can do this by expanding the Java Projects section under Explorer. And I'll just collapse the very top one. We'll click this Import Projects button, and this will import our empty [Banking](../../Skills/Software%20Development/Banking.md) project. Awesome. Our project has been imported. Now let's create a hierarchy of packages that we'll then add our project files to. So right-click on this Banking project and choose New Package. Then we need to enter a name. So let's enter src.main.java.bank
>
> **[2:34](https://www.linkedin.com/learning/hands-on-introduction-java/project-setup?u=76281980&t=154)** and press Enter. If you don't see the new package hierarchy automatically appear, click the three dots to the right of the Java projects and click Refresh. Awesome. Now we see our structure. Now we have everything we need to get started building our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Banking](../../Skills/Software%20Development/Banking.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **UI Navigation:** scroll down (1), click on (1), right-click (1)
> **Prerequisites:** install (2), configure (1)
> **File Paths:** src.main.java (1)
> **Tools:** vs code (1)
> **Best Practices:** recommended (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 1. Model Objects

[↑ Back to Table of Contents](#table-of-contents)

#### [Design a solution](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=0)** - [Instructor] For this project, our task is to build a basic [Banking](../../Skills/Software%20Development/Banking.md) system that allows customers to view their balance, make deposits, and withdraw funds from their accounts. Before writing any code, let's examine our challenge, design a solution, and identify our assumptions. We have a database with two tables: customers and accounts. These both represent objects within our application that we'll need to interact with, so we can develop [Java](../../Skills/Software%20Development/Java.md) classes that represent both of these. We'll also need to account for the actions or behaviors of our system, so we'll need methods to check the balance of an account, deposit, and withdraw. These are behaviors a customer makes on an account so we'll need a link between these two objects. If we look at our database, the Customers table has a fields called ACCOUNT_ID, and the Accounts table has a field called ID. These two IDs tie the customer to their account, so we can certainly keep that in mind when implementing our application. In fact, for security purposes, we should authenticate the customer before we allow any actions to be taken on an account. The database hosts fields for username and password, so we can create an authenticator class that will verify the customer's credentials. All of this implementation occurs on the backend, so we'll also need to provide an interface
>
> **[1:33](https://www.linkedin.com/learning/hands-on-introduction-java/design-a-solution?u=76281980&t=93)** that allows the user to enter input and let us know what actions they'd like to make. We'll keep it simple and build a menu class that provides a text-based user interface capable of input and output. And finally, because we'll need to read and write from our database, it's best to consolidate the code that does this within one class, so we'll make a data store class as well. Now, let's lay out our assumptions as this will help define the limitations of our system. A customer only has one account, an account only has one customer, and all accounts are checking accounts. The first assumption will eliminate the work of prompting the user to choose which of their accounts they want to make transactions on. The second assumption eliminates the need to track which account holder made a transaction. And the final assumption means we don't have to account for different behaviors that are allowed depending on the account type. Awesome, we have a design. Planning how we'll solve the challenge upfront can save us a lot of time, mistakes, and frustration once we begin implementing the solution. Let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** make (4)
> **Env Vars:** account_id (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Create customer](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=0)** - We need to model the customer object of our system to define the structure of an object, we do so with a class. Classes contain fields and methods. The fields are variables that represent the characteristics of the object. And the methods are functions that describe the behaviors the object is capable of. We'll create our class within a package, which is a folder that holds our class files. Under the source main [Java](../../Skills/Software%20Development/Java.md) directory, we see a package called bank. Bank is all lowercase as it's a Java convention for package names to be lower case. We'll create our Java class within this bank package. Click the plus sign to the right of the bank package, and we'll be prompted to create a class name. We'll name the class Customer with the capital C because in Java it's a convention for classes to begin with a capital letter. Now, let's press enter. Notice the generated file contains a declaration of the package and an empty definition of the class. We can add more details within this set of curly braces as the braces denote the beginning and the end of the implementation for the class. Fortunately, the characteristics of a customer are already captured in our database. Let's have a look.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=95)** So we'll go ahead and look in the resources folder and click on the bank object and then say open anyway. And we're going to choose SQLite Viewer. Here we have the customer's table and we see ID, name, username, password, and account ID. Our fields will be the same as the columns of the customer's table. So let's go back to our class and add those fields. The the first field was the ID, so we'll say Private int ID, semicolon. Private is an access modifier that indicates that this field cannot be directly accessed outside of this class. This is called encapsulation and is a best practice in object oriented programming languages such as Java. Int is the data type of the variable meaning it's an integer number, and ID, is its name. Let's add the other fields as well. So, we'll say private string name private string username, private string password. And then finally, private int account ID. Now, let's add methods to get and set the values of these fields since they are encapsulated. To quickly add getter and setter methods,
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=189)** right click in your class and choose the Java code generators. Next, choose generate getters and setters. And voila, all of the methods for the fields have been generated for us. Great, now we have the fields and the methods for the customer. However, if we wanted to create a customer object using this class, we need to call quite a few methods in order to set all of the field values. As a shortcut to set up our data, we can add a constructor to the class. Constructors are used to initialize an object or set up it's state. We'll make the constructor public so that it can be accessed outside of this class. The access modifier is followed by the name of the constructor. Which must be the exact same name as the class. So, in our case, it's customer. We follow this with a set of parentheses and an optional list of parameters inside of that parentheses. Since we want to give our fields default values, let's ask for those here. So we can see int ID, string name, string username, string password, and int account ID. The inside of the body of the constructor,
>
> **[4:41](https://www.linkedin.com/learning/hands-on-introduction-java/create-customer?u=76281980&t=281)** which is denoted by its curly braces, is where we'll pass these values to their respective setter methods. So, we'll just call each one, we'll say, Set ID and pass an ID. Set name and pass in the name. We'll set the username. And the password. And the account ID. Awesome job. We've created our first class. Don't forget to save it by going to sync your changes to your repo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (6)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Best Practices:** best practice (1), don't forget (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)

#### [Create account](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=0)** - In our database, we have an accounts table that holds multiple records of accounts. The columns are ID, type, and balance. In this video, we'll create a [Java](../../Skills/Software%20Development/Java.md) class to model this object. The steps to complete this task are similar to the ones from the last video, where we created a customer class. So if you'd like, you can pause the video here, and work on the solution independently. (jazz music) Okay. First, we need to create an account class. So we'll go to our bank package, and we'll click the plus sign, and create a new class called "Account." We need to declare the three fields, so we'll say, "private int id, private string type, and private double balance." And let's generate the getter and setter methods for these fields as well. So we'll right click, we'll go to Java Code Generators, and we'll choose generate getters and setters. Finally, we want to create a constructor, so that when someone needs to instantiate a new account object, they can easily do so by passing the values of each of the fields. So we'll go ahead and say, "public Account" and we'll pass in each of the fields.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-java/create-account?u=76281980&t=97)** So we have "id," we have "type," and we have "balance." And then within the curly braces we'll call the setter methods for each of these fields that was passed in to "setType" and then finally "setBalance." Awesome. We've now successfully modeled an account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **Code Identifiers:** settype (1), setbalance (1)
> **UI Navigation:** go to (2)
> **Speakers:** - in (1)
> **Non-Speech:** (jazz music) (1)


### 2. External Data Sources

[↑ Back to Table of Contents](#table-of-contents)

#### [Connect to data source](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=0)** - We have a SQLite database that's holding all of the data for our application. In order to read and write to this database, we need to first connect to it from our [Java](../../Skills/Software%20Development/Java.md) code. Fortunately, we can use the SQLite [JDBC](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) plugin to accomplish this. Let's create a new class under our bank package called Data Source. This class will handle connecting to the database as well as reading and writing from it. So let's make a static method called Connect, which will return the database connection. We can say public static. It'll return a connection object and we'll call this method "connect." We'll need to import the connection class from the Java dot [SQL](../../Skills/Data%20Science/SQL.md) package. So let's just click on this connection, you'll see a little light bulb here, click this and they'll show you some ways that you can fix this error. The one we want is to import connection from Java dot SQL. Inside of the connect method, let's declare the path to our database file. If we look over here, as you can see, we have a bank dot db under the resources folder. This is our database file. So within our method, let's say string DB file and the path must be prefixed with jdbc colon, SQLite, colon, and then the path to the file.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=98)** So we'll say resources, slash, bank dot db. Next, let's declare the connection object. So we'll see connection and we'll also call the object name connection. And we'll set this equal to driver manager, dot get connection and we'll pass in the DB file.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=128)** Notice that the driver manager was automatically imported for me. If this didn't happen for you, be sure to add this import statement. Now notice, if we hover over the GET connection method, we have a compilation error saying that we have an unhandled exception. That's because the GET connection method throws an exception in the case of an error. If a method calls code that throws a runtime exception, that method is obligated to handle the exception or read through it. We can handle the exception by placing the call to get connection within what's called a try block. So let's go ahead and set this equal to null initially and then we'll create a try block. We can do so by writing the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) try, followed by a set of curly braces. Inside of this try block, we're going to set the connection equal to this driver manager dot get connection. So, I'm just going to cut that and paste it there. In the event that this call happens to throw an exception, we can catch it with what's called a catch block. The catch block appears right after the try block. So we'll say catch and then inside of parentheses, we can specify the exception that we want to catch. In our case, it's a SQL exception and we'll name this exception E. Within the catch block, we can do anything we like to make the error a bit more graceful.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=223)** In our case, let's just print the exception stack trace which will give us a log of the code's execution path thus far. So we can say E dot print stack trace. If no exception occurs, let's print a message saying that we're connected and then return that connection. So inside of the try block, after we've connected, let's just go ahead and do system dot out, dot print LN, which will print an output statement and we'll give us a little message, we're connected. Great. And then outside of the try catch block, after all is said and done, we can return our connection object. Awesome. Now let's test our connection by calling this method from the main method. The main method is the starting point of Java applications. It's the first method that is run when we execute our code. So the main method signature is public, static, void, main and inside of a set of parentheses, we can add an array of string, which we'll call args. Within here, let's make a call to connect because methods only execute when they are called. So we'll see. Connect a set of parentheses and then a semicolon. Notice we now have labels run in debug. So we can click run above the name and this will execute this class.
>
> **[5:20](https://www.linkedin.com/learning/hands-on-introduction-java/connect-to-data-source?u=76281980&t=320)** And see our message is printed out to the console which means we're successfully connected to the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Jdbc](../../Skills/Software%20Development/Java%20Database%20Connectivity%20(JDBC).md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** sql (3), jdbc (1)
> **CLI Commands:** make (3)
> **API Endpoints:** get  (2)
> **UI Navigation:** click on (1)
> **Speakers:** - we (1)

#### [Construct customer from data source](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=0)** - [Instructor] We have a database table that represents a customer and we also have a customer class that models this. What we need now is the construction of an object that represents a specific customer. Within the data source class, let's create a new method called get customer. So we'll say public static Customer get customer, and this method will accept the username of the customer. We'll need to craft a [SQL](../../Skills/Data%20Science/SQL.md) query that will get the customer data from the database. We can do that using a string and [Java](../../Skills/Software%20Development/Java.md). So we'll call this SQL, and then within quotes, we put the query. So let's say, select star from customers where username equals, and here we want to pass in the username variable that was passed into us. Technically, we could append it to the string. However, you should never send raw user input as part of a database query because it could be malicious input used as a SQL injection meant to steal data or manipulate your data tables instead. Let's use a question mark here which serves as a placeholder. When we provide the value for the placeholder the technique used to query the database will be safer. Okay, now that we have our query
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=96)** let's connect to the database so that we can execute it. If we look at our previously defined method connect notice that the connection is never closed. It cannot be closed within the connect method itself because then we wouldn't be able to query the database after it's closed. So let's make the call to connect from our Get customer method, and we'll do this within a structure that's called Try with the resources. Try with resources allows us to specify a set of parentheses and inside of the parentheses we can declare a closable resource. Java will automatically close that resource for us after the try block has been completed. So we'll create our connection here and we can do so by calling the Connect method. We'll add our set of curly braces, and as you can see closing this connection has the possibility of throwing a SQL exception. So let's add a catch block for that. We'll say Catch the SQL exception we'll call that E and then print the stack trace. Next, we want to create a proper object for handling our SQL statement which is now only just a string because we have placeholders in our query. The object for this is prepared statement which is part of the Java.SQL package. Prepared statements are also auto closable
>
> **[3:09](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=189)** so we can declare it within our try with resources to specify additional resources you separate them with a semicolon. So let's now at our prepared statement which we'll call statements, and we can set this equal to our connection.prepare statement and pass in the SQL query. And let's go ahead and import the prepared statement from Java.SQL package. Now we need to set the values for the placeholders within our query. Prepared statement has a setter method that enables us to do so because usernames type is a string, we can call set string. So we'll say statement.set string and then we'll send two arguments. The position of the placeholder within our SQL variable we only have one placeholder, so it's the first position and then we pass in the value for that placeholder. So in our case, that's username. Then to execute the query we'll use statement.execute query which will return a result set. Result set is also auto closable so let's add it to another try with resources.
>
> **[4:44](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=284)** So we'll say try and then we'll call this variable results set and then set that equal to this query call. And let's import results set from Java.SQL Now it's time to parse the results and use that data to instantiate a customer object within our code. Let's declare a customer object outside of the tribe block so that we still have access to it when we need to return it. So after our SQL statement, let's go ahead and declare customer and set it equal to no for now. Then within our second try block, we'll instantiate it. So we'll say customer equals new customer and VS code has automatically populated the names of the parameters that are expected. We'll replace these with the values from our database. The first parameter is ID and it's an it. So let's go ahead and use our results set and we'll call get it and then we can pass in the label of the column in our case that is ID. Now let's do the name. This one is a string. So we'll say resultsset.getstring and we'll pass in the column name, which is name.
>
> **[6:24](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=384)** Let's do this quickly for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them as well. So results set username is a string, so we'll see. Get a string and then the password get string passing the column name, which is password. And then finally the account ID. So let's just double check the column name for account ID. Yes, this one is actually account underscore ID. So let's be careful there because the column names must match to get. And this is an it, we'll see it account underscore ID
>
> **[7:14](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=434)** and then we'll close this with a semicolon. Great. Now that we have an instance of a specific customer we can return it on the last line of this method. So after the catch block, let's say Return Customer. Now before we call this done, let's test it out within our main method by printing the customer's need. So down in the main, I'm going to remove this call to connect and instead we're going to call get Customer and we'll need to pass it in a username for the specific customer. So looking in our database, again, let's choose a customer. How about Torren here? So Torren's username is tWest80@[friendfee.com](https://friendfee.com). Now we have to write this exactly like this in order for it to find it. So T West eight zero C, T West eight, Oh, not zero eight.
>
> **[8:16](https://www.linkedin.com/learning/hands-on-introduction-java/construct-customer-from-data-source?u=76281980&t=496)** Oh. And then@[friendfeed.com](https://friendfeed.com). Okay. At friend [feed.com](https://feed.com). Awesome. And we'll set this equal to a customer object. Then from here we can print out the customer's name and that'll prove to us that it was actually able to connect to the database read data, and instantiate the customer object. So we'll say system.out.printlm and then we'll see Customer.getname. Okay, let's run it. Yes. If we look at our terminal we see that the customer's name Torren West was printed out. Awesome job retrieving data from a database and constructing a new Java object using that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (12), [Java](../../Skills/Software%20Development/Java.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (12)
> **Definitions:** is a  (3), is an  (1), we call this (1)
> **File Paths:** java.sql (3)
> **URLs:** [friendfee.com](https://friendfee.com) (1), [friendfeed.com](https://friendfeed.com) (1), [feed.com](https://feed.com) (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** twest80 (1)
> **Tools:** terminal (1)

#### [Construct account from data source](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=0)** - [Instructor] In this video, we'll construct an account object, that represents a specific account from our database. The steps to complete this task are similar to the ones from the last video, where we constructed a customer object. If you like, you can pause the video and work on the solution independently. (soft music) Within the data source class, let's create a new method called get account. So we'll say public static account get account
>
> **[0:40](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=40)** and we'll ask them to provide us with the account id. Our [SQL](../../Skills/Data%20Science/SQL.md) query should target the accounts table by account id. So we'll say string SQL equals and we'll go select everything from accounts where the id equals question mark. Let's declare an account object that will later initialize once we have the results from the database. So we'll call this account and for now we'll set this equal to null. Now, let's create a try with resources structure to connect to the database and create our prepared statement. So we'll say try and inside of here, we will define the connection by calling the connect method. And then let's also define our prepared statement.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=105)** And we can set this equal to connection dot prepare statement. Within the try block, we can set the value of the placeholder to the account id that was passed in. So we'll add curly braces and inside of here we can say statement dot set int. And it's the first placeholder and then the value is account id. Now it's time to execute the query. We can place this statement within another try with resources block. So let's say try, and we'll define our results sets, and we'll set this equal to statement dot execute query. Okay, and let's be sure to add our catch for SQL exception. And we'll print out the stack trace. Awesome, now that we have our results from the database, we can instantiate the account object. So let's say account equals new account. And inside of here we will gather all of the details from the database query and we will pass them into the account. So the first argument is the id we'll say results set dot get int and it's the id column.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-introduction-java/construct-account-from-data-source?u=76281980&t=202)** We'll say results set dot get string. And this is the type column. And then finally we can say result set dot get double. And this is the balance column. Great, and then we can just close this with a semicolon. Finally, we can return the account object by saying return account. Let's test this out by printing the customer's account balance. So within the main, we already have our customer, which was Toren West, and let's call get account, and pass in Toren's account id. So we'll say account equals get account and we can say customer dot get account id. And then in our print statement, instead of printing the customer's name, this time let's print the account's balance. Okay, let's run it. And we can see our account balance here. Perfect. Great job. Now if our application needs to interact with any accounts, we can do so with [Java](../../Skills/Software%20Development/Java.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** sql (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)


### 3. Utility Classes

[↑ Back to Table of Contents](#table-of-contents)

#### [Create Authenticator](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=0)** - [Instructor] When building real world applications, security should be a major concern. For our project, the bank accounts should be secured by a username and password. This information is stored in the customer's table of our database. Normally, passwords are encrypted and not stored in plain text but since this is a toy application, we are okay. Just remember not to store your user's passwords like this when building real world apps. Okay, let's create a method to authenticate the user before allowing them access to any customer data. First, we'll need to create a new class under the bank package. So let's click the plus sign here and we'll name this class authenticator.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=53)** Inside of this class, let's create two methods: login and logout. The login method needs to accept the username and the password for a giving customer and then return a customer object representing that user. So let's say public static customer login and it accepts a username and it also accepts a password. Great. The logout method should accept a customer object. So we'll say public static void logout and then specify a customer. Within the login method, let's call the getCustomer method from our data source class. Because the method is static, we do not need to instantiate a data source object to access the method. We can simply use the class name followed by the dot operator and here we can see the getCustomer method. And we'll go ahead and assign this to a customer object. Then before processing this object, it's best to do an error check to make sure we actually receive data from the database. To do so, we can check to make sure the customer object is not null.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=145)** So we'll say if customer equals null. If the customer is null, we want to stop the program entirely. To do so, we can throw [Java](../../Skills/Software%20Development/Java.md)'s built-in login exception. So we can throw the exception by saying throw new LoginException and we can pass a message into this constructor. Let's say the username not found. Because our method has the possibility of throwing an exception, we need to specify that in the methods header. So let's add that clause here, throws LoginException.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=194)** If an exception is not thrown, we know we have a valid customer object and we need to verify the password at that point. So we can do that. Under this check, we can say if password equals customer.getPassword.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=216)** So that'll compare the two passwords there. Notice here, we use the method equals as opposed to the equal equal operator. That's because when comparing objects, it's safer to use the equals method as it compares the values of the objects and the equal equal operator compares the memory locations. Now that we verify that the customer exists and the password is correct, let's set a flag on this customer object to indicate that they are authenticated. We don't have a method to do so in the customer class yet as this field is not represented in the database. However, it's okay for us to add additional class fields to represent the state of a specific customer. So let's go to our customer class and we'll add a boolean field called authenticated. So let's say private boolean authenticated and let's go ahead and generate the getter and setter methods for that field. So we'll right click Java code generators and generate getters and setters. Notice here we have an isAuthenticated and also a getAuthenticated and they both do the same thing. However, because this method is returning a boolean value, it's a Java convention to have the method name
>
> **[5:10](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=310)** essentially ask a question usually starting with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is. So we'll use the isAuthenticated one and get rid of the getAuthenticated. Also, let's go back to the constructor and initialize authenticated to false.
>
> **[5:36](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=336)** Now back to our authenticator class. And in the login method, if the passwords match, then we can go ahead and set that flag of authenticated to true. So we'll say customer.setAuthenticated in pass and true. And then finally, this decision structure can return the authenticated customer object. So let's say return customer. We have to also account for the case where the password is incorrect. In that case, we'll throw the login exception. So let's say else throw new LoginException and we can specify that they have an incorrect password.
>
> **[6:31](https://www.linkedin.com/learning/hands-on-introduction-java/create-authenticator?u=76281980&t=391)** Great! The logout method is very straightforward. We need to unauthenticate the user and we can do so by setting that authenticated flag to false. So we'll do customer.setAuthenticated and we will pass in false. Excellent work making sure our toy [Banking](../../Skills/Software%20Development/Banking.md) application is secure. In production applications, of course there are additional security measures that should be accounted for. You're welcome to search [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning for courses that cover security and [Software Development](../../Topics/Software%20Development.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Code Identifiers:** getcustomer (2), isauthenticated (2), getauthenticated (2), setauthenticated (2), getpassword (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Create menu](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=0)** - [Instructor] In order for people to use our application, we need to provide a user interface for them. Most applications provide a graphical user interface with form elements such as menu options, text boxes, and buttons. However, to keep things simple we're going to build a text-based user interface that allows the user to enter their credentials and specify what type of transaction they'd like to make. Let's create a new class called Menu under the bank package. So we'll click this plus sign and let's name it Menu. In order to receive input from the text console we can use [Java](../../Skills/Software%20Development/Java.md)'s built-in Scanner class. Let's declare a Scanner object now. So we can say private Scanner and we'll call it scanner. Now let's create a main method. Remember, the main method is the starting point of Java applications. And we need to import the Scanner class and we can do so from the Java util package. Now let's create a main method. Remember, the main method is the starting point of Java applications and that's defined as public static void main with a string array called args. And since this is the first thing that will be executed, let's print a nice little greeting to our users. So we can say System.out.println
>
> **[1:37](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=97)** and we'll say, "Welcome to Globe Bank International!"
>
> **[1:48](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=108)** Now, because the main is a static method, it does not have direct access to its class's non-static fields and methods. Therefore, we need to create an instance of the Menu class to be able to access this Scanner object here. So we simply say Menu and we'll call the object menu equals new Menu. And now we can instantiate the scanner by calling its constructor and passing in where we want to receive the input from, which in our case is from the system. So let's say menu.scanner equals new Scanner and the input from the system is simply System.in. Now before we forget, let's create the final line of the main method which will close this input stream. So I'm going to go down a few lines and we can say menu.scanner.close. Okay. Now can handle everything that goes between opening and closing the scanner. After greeting the user, our next step should be to prompt them for their credentials. And let's do that in another method which we'll call authenticate user. So we'll make this private, it'll return a customer
>
> **[3:21](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=201)** and the name is authenticateUser. We can ask the user to enter their username. So let's say System.out.println, "Please enter your username." Then we can read their response with our scanner and store it into a variable which we can call username. So this is a string and we'll see scanner.next. And we'll do the same for the password. So we can say System.out.println, "Please enter your password" and we can store this inside of variable call password by saying scanner.next. Given this, we can call the Authenticator.login method to validate these credentials. Let's first declare a customer object with the default value of null, and then set it equal to the value we get from the login method. So we'll say customer equals Authenticator.login and we'll pass in our username and pass in our password. Notice we get a compilation error here
>
> **[4:59](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=299)** saying that we have an unhandled exception. So let's place this within a try-catch block. So we'll go try and then we'll move this line inside of the try, and then we'll add the catch as well. So we're catching a login exception. Let's go ahead and print out a message in case we run into this. So it says, "There was an error" and then we can even tell them what the error is by appending getMessage from the exception. Great. Once we're done logging the user in we can return that customer. So let's see, return customer. Awesome. Okay, now back within our main method let's call our newly created authenticateUser method. So we can say Customer customer equals menu.authenticateUser. And if the customer is not null, we're in good shape and we can show them a set of menu options. So let's say if customer is not equal to null, and since we have a customer
>
> **[6:35](https://www.linkedin.com/learning/hands-on-introduction-java/create-menu?u=76281980&t=395)** we can get the customer's account from our data store. So we'll say account equals DataSource.getAccounts and we can say customer.getAccountId. Great. Now we can show the user the menu. So we'll say menu.showMenu and let's pass in a customer in account. Okay, the last step for this class is to create the showMenu method which will accept both a customer and an associated account. So let's create that one. Here we'll say private void showMenu and this accepts the customer and it also accepts an account. Great. We'll provide the implementation of this method in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Code Identifiers:** authenticateuser (3), showmenu (3), getmessage (1), getaccounts (1), getaccountid (1)
> **Definitions:** is a  (2), defined as (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Display menu options](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=0)** - [Instructor] After we allow the user to authenticate, we want to show them a menu of options. Within the showMenu method of the menu class, we'll keep track of the user's selection with the variable which we'll initially set to 0. We can call this variable selection. Let's then provide menu options for deposit, withdrawal, check balance, and exit, where each of the menu options have a corresponding number between 1 and 4. We'll once allow the users to continue with as many transactions as they like, so we can use a loop to continuously show them their menu options after they complete a transaction. Because the loop needs to be controlled by a condition, and we're not sure how many transactions the customer will want to make, a while loop is our best option. So we'll write our while, and we can say continue allowing transactions while the menu option is not equal to 4, so while selection is not equal to 4, and while the user remains authenticated, so we can see customer is authenticated. So this loop will continue executing while both of these conditions are true. Now we can print the option so that the user sees them in the terminal. Let's just go ahead and print a couple of things here, so I'm going to print first off just a divider,
>
> **[1:40](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=100)** and then I'll print out a prompt that asks the user what do they want to select, so please select one of the following options.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=118)** And now we can give them the options, so let's print that as well. The first option is 1, and we'll put a label for deposit, and I'm just going to copy this so I don't have to type so much. The second option is 2, and that is withdrawal,
>
> **[2:23](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=143)** and then the third option is 3, and this one will be check balance, and then the last option is 4, and that is to exit.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=164)** And then finally, I'm going to put another divider, so I'm just going to copy this one and paste it here. And just so that it's long enough for this, I'm just going to add a few more here to make it nice and even. Okay, that looks great. And we'll just copy that again here. Okay, pretty good. Now we need to read their selection as input, so let's go ahead and set selection equals to scanner., and this time we can't just say next because it's not a string that's coming in, it's actually a number, so we want to say nextInt, and that'll read a integer from the console. Okay, now we want to execute different blocks of code depending on the selection the user made, to execute a specific block of code based on a value, we can use the switch decision structure. We write the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) switch, and in parentheses, we provide the variable that we want evaluated, so in our case, that selection, and then we can follow this with a set of curly braces. Inside of the switch statement, we provide cases for all of the possible values of the selection variable. The case that matches the value of selection will be the block of code that is executed, so our first case is 1, so we specify this with case 1;, okay?
>
> **[4:21](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=261)** Case 1 will be executed when the user enters 1 for their selection. 1 is for a deposit, so we can specify what should happen when the customer wants to make a deposit. Well, we can ask them how much they'd like to deposit, so let's do a print statement here and ask, "How much would you like to deposit?"
>
> **[4:51](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=291)** And then we can read their response into a variable called amount, so let's say amount equals scanner, and this is going to be a desmos number, so we'll say nextDouble, okay? Now, we'll need to access the amount variable in multiple cases, so let's not limit its scope to this one particular case, instead, we can declare it before the switch statement and that way we can access it from any case. So right after the selection, I'll go ahead and declare amount as well. Okay, within our deposit case, we'll call the deposit method on account, so account.deposit, and we'll pass in the amount here. Now this method doesn't yet exist, so we can just stub it out for now, and we'll provide the actual implementation in the next video. So let's go to our account class, and inside of here, we're going to create a new method called deposit. So this is public, it won't return anything, and it will accept a double, which is called amount. Okay, back to menu. Now the last line of the case should be a break statement,
>
> **[6:31](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=391)** which let's [Java](../../Skills/Software%20Development/Java.md) know not to continue executing any more cases. Without a break statement after a switch case, the code will fall through to the next case, in fact, it will keep going through all of the cases until it reaches a break statement, even if the case does not match the variable of the switch structure, so be extra careful to include a break statement after each case, unless it is your intention to run multiple blocks of code for specific values. For case two, the user wants to withdraw, so let's go ahead and make that case, and we'll ask them how much they want to withdraw, so this is a print statement that says, "How much would you like to withdraw?" And again, we can read in that value for amount, so amount equals scanner.nextDouble, and then we can call the withdraw method. So account.withdraw, and we'll pass in the amount, and of course, we need to go and stub out the withdraw method within the account class, so let's make another method here, public void withdraw, and this also takes a double, which we'll call amounts. Okay, back to menu.
>
> **[8:07](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=487)** Let's remember to close this case with a break statement. For case 3, the user wants to view their balance, so let's print that for them, we can say system.out.println, current balance, and then we can make a call to account.getBalance, and don't forget to break. And then for selection 4, the user wants to exit the application, so let's log them out and print a farewell message. So we can do authenticator.logout, pass in our customer, and then we'll say system.out.println, "Thanks for [Banking](../../Skills/Software%20Development/Banking.md) at Globe Bank International,"
>
> **[9:09](https://www.linkedin.com/learning/hands-on-introduction-java/display-menu-options?u=76281980&t=549)** and break. While 1 through 4 are the only valid options, it's common for users to make mistakes. As a programmer, it's a good practice to account for likely mistakes and handle them gracefully. The switch structure allows us to use a default case in the event that the value of the variable being evaluated doesn't match any of the cases specified. We specify this case with the word default, followed by a colon, and then continue writing the implementation just as we would with any other case. So in this case, we'll print out a message letting them know that this is an invalid option, and we can say, "Please try again," and break. Excellent job providing an interface for the user to engage with our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** nextdouble (2), showmenu (1), nextint (1), getbalance (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Best Practices:** remember to (1), don't forget (1), good practice (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)


### 4. State Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Deposit](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=0)** - [Instructor] We've provided users with a menu option to deposit funds into their account. Let's provide the backend implementation to make that happen within the Account class. Because the amount is input provided by the user we want to do a bit of error checking to make sure that the input is valid. For example, let's make sure the amount is not zero or a negative number. We can do so by writing an if statement and saying if the amount is less than one do something. If this happens to be the case we shouldn't continue any further. We can stop the program by throwing an exception. To throw an exception we'll write the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) throw followed by new and the name of the exception. Now, [Java](../../Skills/Software%20Development/Java.md) provides a lot of built-in exception classes that you can use, or you can make your own custom exceptions. For this error let's throw our own custom exception. So, this exception we'll call it AmountException, and we'll set a message in case this is thrown. The error message will say the minimum deposit is one.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=78)** Because this is our own custom exception we have to implement it ourselves by creating a new class with the name of the exception. Let's do that. So, we'll open up the explorer and under the Bank package I want to create a new package called Exceptions. So, let's right-click on Bank, select New Package, and our new package will be called Exceptions. And here's our new one. Let's create a new class inside of here, which we'll call it AmountException. Great, I'm just going to close that up. And when creating your own exceptions you can extend from any of Java's built-in exceptions, and that way you'll inherit a lot of the behavior of exceptions. In our case let's inherit from the top-level exception whose name is fittingly Exceptions. We inherit from other classes by using the keyword extends. Because we're inheriting so much from Exception all we need to provide in our custom Exception class is a constructor, which accepts a message and will simply pass that message to our parent class Exception. So, we're going to make this constructor, which again, has to be the same name as the class. And this will take a message. And then we'll call our parent
>
> **[2:55](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=175)** by using the super method, and we'll pass in the message to super. Awesome, we're done with this Exception class. Let's return to the Account class. Now, back in our deposit method we'll need to specify that this method throws an exception in the header. So, we can do that by saying throws AmountException. And because the method now throws an exception we have to fix the methods that call this one. So, if we go back to the Menu class and go down to the deposit call notice now we have an error. So, we have two choices, we can catch the exception or we can rethrow it ourselves. Let's catch it so that we can give the user another opportunity to enter valid data. So, we're going to wrap this inside of a try, and we'll catch it. And then inside of our catch let's let them know what the error is by saying e.getMessage. And then we'll say go ahead and try again. So, we'll do another print statement that says please try again. Okay, so we've handled the case where the input is invalid,
>
> **[4:31](https://www.linkedin.com/learning/hands-on-introduction-java/deposit?u=76281980&t=271)** now let's focus on valid input. We'll return to the Account class. So, back in our deposit method let's do an else clause here. And we're going to update the balance for this account object. Let's first calculate what that is. So, we'll call this newBalance, and that equals balance plus the amount that was passed in. And then we'll call setBalance and pass in our newBalance. Now, most importantly, we need to update the database to reflect the increase. Let's do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** newbalance (2), getmessage (1), setbalance (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** right-click (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Update data source](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=0)** - In the deposit method of the account class, we updated the balance of the account object when a deposit is made. However, we also need to update the database as that is our source of truth. Let's create a utility method in the data source class that will update the database. This method will say public static void, and let's call this updateAccountBalance. To update the account balance, we'll ask for the account ID. As well as the balance that should be reflected in the database. Our query needs to update the balance column of the accounts table. So, we'll say string [SQL](../../Skills/Data%20Science/SQL.md) equals update accounts by setting the balance equal to question mark, where ID equals question mark. So now, we have two place holders. Let's go ahead and connect to our database and prepare the statement. We'll do that within a try with resources. So we'll say connection equals connect and then our prepared statement equals connection dot prepare statement, and we'll pass our query. Now we'll need to add our catch block as well.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=96)** So we're going to catch SQL exception.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=104)** And we'll print the stack trace in case of error. Then we need to update the placeholders within the query with the values that were passed in. So let's do that inside of the try statement and we can see statement dot set double for the first one. And this will be the balance and then statement dot setInt for the second one. And this will be the account ID. Finally, we can execute the statement. This query is different from the ones we've worked with so far as this one is making a change to the database. For insert, update or delete statements we use the execute update method as opposed to the execute query method. So we'll say statement dot execute update.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=169)** Now let's test our code to make sure it's doing what we expect. If we look in our database, we have a customer named Annie. This is her username, this is her password. So we'll have Annie deposit 100. Her current balance is 6,230.49. Within the data source class let's go ahead and get rid of its main method that was only used for testing. Now we have a real main method which is inside of our menu class. So let's open up the menu class. And we'll go to the main method which is up top and we'll run this main method.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-introduction-java/update-data-source?u=76281980&t=220)** Okay. It's prompting us for our user name. So we enter Annie's username. And then it's also prompting us for the password. So we enter her password. And as we can see, it has successfully authenticated us and it's showing us our menu options. We'll choose menu option three to check the balance. So we see that Annie's current balance is 6,230.49. Great. We want to test our deposit method. So let's see, one for deposit. It's asking us how much, we'll say 100. And now we see the menu options again. Let's say we want to check our balance now to make sure it was increased. And yes, now we see the balance is now 6,330.49, which is an increase by 100. Perfect. Now that we have tested this, let's update the deposit method from the account class to call this method. So in account, after we've set the balance for the object itself, we want to call that deposit method so that the information is updated in the database as well. We do so by calling data source dot update account balance and we can pass in the ID from this class. As well as the new balance that we've calculated. Excellent job implementing data persistence within an external source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Versions:** 230.49 (2), 330.49 (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** updateaccountbalance (1), setint (1)
> **Env Vars:** sql (2)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - in (1)

#### [Withdraw](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=0)** - [Instructor] The last part of the project that we need to complete is the withdraw method and this is inside of the account class. Let's make sure the input is valid by checking that it's a positive number. So we'll do a if statement here and say if the amount is less than zero we're going to throw a new AmountException. And we'll say, "The withdrawal amount must be greater than zero."
>
> **[0:39](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=39)** Because the method now throws an exception, let's add that to our method header. So we'll say this throws AmountException and now we need to update calling methods as well. So let's revisit the menu class. Go over here to our explorer and we'll pull up menu which now has an error. If we go down to withdraw, yep, we see that this needs to be in a try catch block. So we'll do that now and we're going to catch the AmountException
>
> **[1:21](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=81)** and we'll print out the error message so we can say e.getMessage, and then we'll also print out a prompt to ask them to try again.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=104)** All right, back to our account class. For withdrawals, not only do we need to make sure that the input is a positive number, we also need to make sure that the account has sufficient funds to honor the withdrawal request. So let's add another check here. So we can say else if the amount is greater than getBalance,
>
> **[2:13](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=133)** we are going to throw the AmountException again. And this time the message will say, "You do not have sufficient funds for this withdrawal."
>
> **[2:33](https://www.linkedin.com/learning/hands-on-introduction-java/withdraw?u=76281980&t=153)** Great. And then if we make it this far, we know the input is valid and we can now complete the transaction. So we'll do another else clause and then inside of here let's calculate the newBalance, which will be the current balance minus the amount that they want to withdraw. We'll set the balance to the newBalance and then we'll update the database to reflect the changes as well. So updateAccountBalance and we can pass in the id and the newBalance. Isn't it great that we were able to reuse the updateAccountBalance method for this case as well? Yes. Excellent work. Our project is now complete. You did an amazing job. Be sure to test various scenarios within your project to make sure everything is working as expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** newbalance (3), updateaccountbalance (2), getmessage (1), getbalance (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with Java and project-based learning](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-introduction-java/continuing-on-with-java-and-project-based-learning?u=76281980&t=0)** - [Angie] Congratulations! You've made it to the end of the course. You've gained practical experience in applying [Java](../../Skills/Software%20Development/Java.md) programming to build actual applications. Hopefully, this project helped to cement your knowledge of the language and provided stronger context on how to solve problems with code. I encourage you to add this project to your portfolio and to continue to build additional projects with your newfound experience. If you're ready for another course, there are some great options here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. This is the first course in a series of courses on Java using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md) so be sure to check out the other courses as well. Thanks so much for taking this course. If you like to keep in contact, you can follow me on LinkedIn or on Twitter where my handle is @techgirl1908. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Tools:** github (1)
> **Speakers:** - [angie] (1)


## Instructor

- [Angie Jones](../../Instructors/Software%20Development/Angie%20Jones.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/hands-on-java-3080245/codespaces)

## Skills Covered

- Java

## Path Context

### In [A Quick Start Guide to Java Programming](../../Paths/Software%20Development/Learning%20Paths/A%20Quick%20Start%20Guide%20to%20Java%20Programming.md)
← [Learning Java 17](Learning%20Java%2017.md) | **4 of 5** | [Practice It- Java](Practice%20It-%20Java.md) →

## Appears In

- [A Quick Start Guide to Java Programming](../../Paths/Software%20Development/Learning%20Paths/A%20Quick%20Start%20Guide%20to%20Java%20Programming.md)

## Related Courses

_Courses sharing skills:_

- [Practice It- Java](Practice%20It-%20Java.md) — Java
- [Learning Java 17](Learning%20Java%2017.md) — Java
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Java
- [Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More](../Data%20Science/Advanced%20Java-%20Hands-on%20with%20Streams%2C%20Lambda%20Expressions%2C%20Collections%2C%20Generics%20and%20More.md) — Java
- [Data Science for Java Developers](../Data%20Science/Data%20Science%20for%20Java%20Developers.md) — Java

---

[↑ Back to top](#)