---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: database-foundations-application-development
url: "https://www.linkedin.com/learning/database-foundations-application-development"
duration_minutes: 114
duration: 1h 54m
level: Intermediate
updated: 2/21/2025
learners: 65707
skills:
  - Database Development
  - Database Applications
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF2QDZxqGhZCg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620230928794?e=2147483647&amp;v=beta&amp;t=w6xKHYfvRQFpzbyQMaRs7mSEDT6-dPAVhwSomXqW_1o"
linkedin_topic: Data Science
learning_paths:
  - '[[Database Foundations- From Concepts to Applications]]'
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Database Foundations- Administration]]'
  - '[[Database Foundations- Administration]]'
next_courses:
  - null
  - '[[SQL Server Fundamentals- Master Basic Query Techniques]]'
path_nav: '[{"path":"Database Foundations- From Concepts to Applications","position":5,"total":5,"prev":"Database Foundations- Administration","next":null},{"path":"Advance Your Database Administration Skills","position":5,"total":11,"prev":"Database Foundations- Administration","next":"SQL Server Fundamentals- Master Basic Query Techniques"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-development
  - skill/database-applications
status: not-started
created: 2026-04-21
---

![Database Foundations: Application Development](https://media.licdn.com/dms/image/v2/C4E0DAQF2QDZxqGhZCg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620230928794?e=2147483647&amp;v=beta&amp;t=w6xKHYfvRQFpzbyQMaRs7mSEDT6-dPAVhwSomXqW_1o)

# Database Foundations: Application Development

> While learning about the individual components of a software development stack like databases, programming languages, and interfaces is important, combining multiple technologies that each contribute a piece to the whole is where all the knowledge really comes together. In this fifth and final course of his Database Foundations series, database expert Adam Wilbert explores the role of relational d

> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development) | 1h 54m | Intermediate | 66K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Database Development
- Database Applications

## Table of Contents

### Introduction

#### Integrating databases with an application
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980&t=0)** - [Adam] Many technology courses focus on individual components of a software development stack database, programming language, interface design.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980&t=9)** The combination of multiple technologies, each contributing a piece to the whole application, is where everything comes together.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980&t=17)** Hi, I'm Adam Wilbert, a database consultant and trainer with over a decade of experience introducing people to the world of relational databases.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980&t=27)** in this fifth and final course in my LinkedIn Learning Database Foundations series, we're going to take what you've learned about databases and explore how these building blocks fit together with other technologies.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980&t=39)** We'll take two different approaches to connecting a database server with a web server and see the components that allow you to build custom interfaces for your data that are accessible from any browser.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-application-development/integrating-databases-with-an-application?u=76281980&t=51)** There's a lot to cover and I'm glad that you're joining me on this journey.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, we're going to take a look at a couple of examples of how you can integrate a database server with a web server in order to provide end users a way to interact with a database over the internet.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=13)** To do this, we're going to add in some new technologies to what we've already learned about relational databases over the previous courses in this series.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=22)** Namely, we're going to be working with HTML, CSS, PHP, and [ASP.NET](https://ASP.NET).
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=29)** Now I don't expect you to have any prior experience with any of these languages.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=34)** We're not going to be writing any code.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=36)** Instead, we're going to take a tour and read through some working examples to see how all the pieces come together to make your databases accessible online.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=47)** To follow along on your own computer, you're going to need to have Docker installed.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=51)** This will allow us to add web servers to the database servers that we've been working with.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=56)** You can download Docker for Windows, Mac OS or Linux at [docker.com/products/dockerdesktop](https://docker.com/products/dockerdesktop).
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=65)** You'll also need a text editor.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=68)** You can either use Notepad or Text Edit or any other plain text editor that you prefer.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=74)** Personally, I'm going to be using Visual Studio Code.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=78)** I like this text editor because it shares some common design attributes with Azure Data Studio that we've already been working with for our database development.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-application-development/what-you-should-know?u=76281980&t=87)** If you'd like, you can download your own copy from code.[visualstudio.com](https://visualstudio.com).

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), php (1), make (1)
> **Env Vars:** html (1), css (1), php (1), asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1), [docker.com](https://docker.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Code Keywords:** this, (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### The exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=0)** - [Instructor] The hands-on portion of this course consists of two separate projects.
>
> **[0:04](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=4)** If you want to follow along you can download the necessary files from the course overview page.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=10)** I've gone ahead and unzipped the files here onto my desktop.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=14)** Now, inside this folder you're going to find everything that you need for the chapter two project on PostgreSQL, and the chapter three project that focuses on SQL Server.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=24)** Now, at this point, there is nothing more that you need to prepare ahead of time.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=28)** There's no databases to install or anything like that.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-application-development/the-exercise-files?u=76281980&t=32)** So just download the files, unzip them into a location that's convenient for you, and we'll dive deeper into each of these folders when the appropriate time comes.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), unzip (1)
> **Exercise Files:** download the (2)
> **Env Vars:** sql (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Application Layers

#### Multitier architectures
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=0)** - [Instructor] Databases are a critical component of many different kinds of applications.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=5)** Understanding how they work is a great first step in the world of software development.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=10)** But they do represent only a single piece of a completed puzzle.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=15)** In order to finish off this database foundations series of courses, I thought it would be a good idea to zoom out a bit and explore how databases are integrated into the larger picture of application development.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=29)** If you've been following this database foundation series since the beginning, well, first of all, congratulations, you've come a long way.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=38)** You may remember way back in the first course that we discussed the client server model that relational database management systems use.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=46)** The database server manages and stores your data, and each user connects to the server using a client.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=54)** This can either be a graphical interface, such as Azure Data Studio that we have been working with, or a command line interface such as SQL Command for working with SQL Server or PSQL for working with PostgreSQL.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=69)** These types of management clients connect you directly with the database server.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=75)** You send the commands, or queries, that you want it to process and the server responds.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=80)** This type of interaction is great for developing a database, or for directly manipulating the data, but it's not the way that most people interact with databases.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=91)** Imagine going to your local library and having to connect to their database and write a select query like this.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=98)** Every time you want to locate the shelf a particular book is on.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=102)** That would create a very complicated system for all of the library's patrons every time they needed to find a book.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=109)** Instead, the library has a customized search portal that you can walk up to, enter in your keywords and other search parameters, and the application uses those inputs behind the scenes to retrieve the requested information from the database.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=125)** The library patron gets the benefit of a custom tailored interface experience and doesn't need to concern themselves with the names of tables or columns or how everything is related.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=135)** Almost every interaction that you have with a database is funneled through this type of custom built, front end user interface or application.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=144)** In the world of software development, applications are commonly split into multiple areas of responsibility or layers.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=152)** You'll hear this referred to as a multi-tier architecture or n-tier architecture.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=158)** With this design pattern, software developers are able to separate the different components of the application, both logically, in code, and physically across different hardware.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=168)** The most common multi-tier architecture uses three different layers.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=173)** A presentation tier, a logic tier and a data tier.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=178)** The end user accesses the application through the interface in the presentation tier.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=184)** You might hear this referred to as the application's front end.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=188)** It's the component of the software that makes the application easy to understand and use.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=193)** In the presentation layer, you'll find interactive buttons and form controls for inputting data and graphics and text that provide navigation hints and organization.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=204)** It's the component of the software that tells the user what they can do and how to do it.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=210)** Once the end user selects their options, or inputs their requests, the logic tier takes over.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=216)** This is the component of the software that sits in the middle and it processes the inputs and outputs.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=222)** It uses programming constructs like logic gates, if then else blocks, or repeating loops to determine the actions that need to be taken.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=232)** The logic tier performs any calculations that need to be made as information is moved from the front end to the backend.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=239)** And finally, we get to the data tier, or the backend, where the information is actually stored.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=245)** This is your database and it's often called the persistence layer of the application.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=251)** It allows the data to be stored for future use.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=254)** The data tier is responsible for saving, managing and retrieving information and passing requested information back through the logic tier and ultimately to the presentation tier, and finally back to the end user.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=268)** There are many benefits to architecting software using these three tiers.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=273)** First, since each component is separate it makes it much easier to update individual tiers.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=279)** For example, you can upgrade the database, or swap it over to a completely different platform with minimal impact on the rest of the application.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=288)** Second, separate tiers can be scaled differently as the system grows.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=293)** You can give the database or the logic tiers additional hardware in response to increased loads without having to touch the presentation layer.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=301)** And finally, the different tiers can have different security contexts, with some being much more locked down and restricted than others.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=310)** This isolation and compartmentalization of each tier, presentation, logic and data, creates an overall software application that's easier to build and maintain over time.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=323)** Now we've already spent a lot of time discussing how databases work throughout this database foundation series.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=329)** So we're not going to be spending too much time talking about them directly in this course.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=334)** The goal of this course is to help give you a glimpse of what comes next.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=339)** Your newfound knowledge about databases can open up the door to a very large world of possibilities in software development.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-application-development/multitier-architectures?u=76281980&t=347)** At the end of this course, it's my hope that you come away with some insights into where to build your next set of skills and the types of technologies that might be worth pursuing as you continue your learning journey.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), finally, (2), this. (1), continue (1)
> **Analogies:** such as (2), picture (1), imagine (1), for example (1)
> **CLI Commands:** find (2), psql (1)
> **Env Vars:** sql (2), psql (1)
> **Cross-References:** we discussed (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Communicate with the data layer
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=0)** - [Instructor] When transitioning to a three-tier application architecture, we need to shift our thinking a little bit in how we interact with the relational database.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=11)** In a multi-tier application, the database layer still functions as a server.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=16)** It accepts connections and processes instructions that are sent to it from a client.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=21)** This is similar to the way that we've been interacting with our database servers all along when we log in using a management GUI client or a command line interface.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=31)** The big difference now is that the end user is no longer directly connecting to the database server.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=37)** Instead, it's the logic tier of the application that becomes the database's client.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=44)** Everything that we've learned about connecting to a database server still applies though.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=48)** The logic tier will need to use a valid login account and password.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=53)** It can have a user account with a specific set of permissions.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=57)** For instance, maybe the logic tier is only granted select permission on the tables in a specific schema so that it can't access data in other schemas that may be present in the database and it can't modify any data.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=70)** This helps secure the database and ensures that the logic tiers account can't be used for any nefarious purposes.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=78)** It may feel strange to think about user accounts that don't represent an actual person, but you'll quickly get used to the idea that an application can be as much of a user as a physical human being.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=90)** As far as the RDBMS is concerned, it doesn't really care if it's processing a request coming from a human or from a robot.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=99)** Since the logic tier is treated as just another client, then it makes sense that it can have access to all of the same database constructs that we've explored.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=109)** The logic layer can call store procedures and functions for executing repeatable commands within the database server.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=116)** If multiple rows of data need to be added or modified, those instructions can still get placed inside of a transaction to ensure that consistency and integrity is maintained, and a logic tiers user account can be granted membership to group roles to make them subject to the same security constraints that can be granted and revoked on other users.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=138)** By funneling all communication to the database server through the logic tier of the application, you gain fine-grained control over the final end user experience.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=149)** It gives you the opportunity to build customized interfaces that include buttons and text boxes and formatted lists of content.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/communicate-with-the-data-layer?u=76281980&t=157)** This arrangement allows everyone to get the most useful information out of the database without them having to know how to write select statements or otherwise be experts in the inner workings of a relational database.

> [!info]- Semantic Content
>
> **Env Vars:** gui (1), rdbms (1)
> **Analogies:** similar to (1), for instance (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Databases on the web
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=0)** - [Instructor] Databases are an important component to the functionality of our modern World Wide Web.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=6)** Online stores use databases for managing inventory and orders, as well as showcasing products on their sites.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=14)** The WordPress publishing platform uses MySQL databases to organize and maintain every article, image and comment that's posted to blogs all over the world.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=26)** In web development, it's common to think of the components of a site as either being the front end or the back end, or the client side versus server side.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=37)** This distinction describes where certain actions occur when a user accesses a webpage.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=43)** When you connect to a website, the web server sends you a series of files.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=48)** Typically HTML, CSS, and JavaScript, as well as any media files, such as images.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=55)** These files are interpreted and combined by your web browser and it renders the page that you see on the screen.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=61)** This makes up the client side of the website, or the presentation layer of our three tiered application.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=68)** The HTML file contains written content and organization information.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=73)** CSS files contain styling instructions such as fonts and colors, and JavaScript is a client side scripting language that allows your computer to execute code that affects the pages layout, without having to send additional requests to the web server.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=90)** Everything else is set to happen on these sites back end, or server-side.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=95)** Code that needs to run server-side can be written in languages, such as PHP, [ASP.NET](https://ASP.NET), Node or Ruby.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=104)** If the website needs to communicate with a database, that also happens server-side, and those interactions are kept separate from the end user accessing the site.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=114)** If data is requested from a database then the web server fetches the information, processes it through server-side scripting languages and writes out brand new HTML formatted files that are sent to the end user.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=129)** At no point is the end user given access to the underlying server-side scripting components that make the communication between the web server and the database server possible.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=140)** Because web development touches on so many different kinds of technologies, it's no surprise that it requires a very broad set of skills.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=148)** Some development work will leverage specialists in each area.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=152)** A back-end developer for the server-side programming, a database developer for creating the data tier, and a front-end developer that's specialized in creating engaging user interfaces.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=163)** Each of these specialist roles will combine their skills to move a project forward together.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=169)** Alternatively, you might have heard of someone describing themselves as a full-stack developer.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=176)** This means that they have experience working with the full range of these technologies and can hook them all together to create a functioning web application all on their own.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=185)** It's not uncommon for someone to start off as a specialist in one area, and then evolve into a full-stack developer over time as they learn additional skills.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=195)** In fact, that might be the trajectory that you're on right now.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=199)** Having progressed through this database foundation series, you're well on your way to specializing in databases.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-application-development/databases-on-the-web?u=76281980&t=206)** This in turn may open doors in other areas of application development as your career progresses.

> [!info]- Semantic Content
>
> **Env Vars:** html (3), css (2), php (1), asp (1), net (1)
> **CLI Commands:** mysql (1), php (1), node (1), ruby (1), make (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [instructor] (1)

#### Project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=0)** - [Narrator] Now that we've discussed the different tiers that go into a common data-centric application, let me take a moment and introduce the two projects that we'll look at over the next couple of chapters.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=13)** Throughout this series, we focused on two different relational database platforms, SQL Server and PostgreSQL.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=20)** We've seen that they share many similarities in how they organize your data in tables and schemas and use common structured query language syntax for storing and retrieving information.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=32)** While they do have the occasional implementation differences, it should be clear that the two platforms are more similar than they are different.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=41)** In fact, it's safe to say that once you have experience with one relational database management system, you're probably at least 80% of the way to understanding how to work with every relational database management system that's available today.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=57)** They all share that much common DNA at their core and the skills that you've developed thus far will transfer to other platforms that you haven't even worked with yet.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=67)** With those commonalities in mind, we're going to explore how each of these platforms can get integrated into a web application.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=76)** Thinking about the three-tier approach to application development, SQL Server and PostgreSQL, we'll provide our data tier.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=85)** Next, we'll expand our use of Docker in order to pull in additional technologies for the logic tier of our application.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=94)** These technologies will differ depending on the database platform that they're connecting to.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=99)** For integration with PostgreSQL, we'll use a server-side scripting language called PHP.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=106)** For integration with SQL Server, we'll use a Microsoft technology called [ASP.NET](https://ASP.NET).
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=112)** In both projects, the presentation tier will make use of standard HTML and CSS that's used everywhere on the internet to create webpages.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=123)** These components will all get hooked together so that communication can flow from the end user to the database through our custom interfaces.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=133)** Now, there's a lot going on here and I don't expect you to have any experience writing PHP or [ASP.NET](https://ASP.NET) code or using HTML and CSS.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=143)** I've given you all of the components that you need to get a working application that passes information between the database server and the end user.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=153)** The goal here is to simply examine how the pieces fit together.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=158)** My hope is that these two projects will give you an overview of what this entire process looks like in the real world.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-application-development/project-overview?u=76281980&t=166)** There are plenty of courses on LinkedIn Learning that'll introduce you to each of these individual components should you be inspired to explore these technologies further.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), php (2), asp (2), net (2), html (2)
> **CLI Commands:** php (2), docker (1), make (1)
> **URLs:** [asp.net](https://asp.net) (2)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)


### 2. PostgreSQL and PHP

#### What is PHP and Apache?
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=0)** - [Narrator] Our first project takes a look at creating a web form that interacts with a PostgreSQL database.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=7)** To do this, we need to create a web server that'll provide the logic and presentation layers of our three-tier application.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=17)** Our web server needs to do two things.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=20)** First, it needs to accept connection requests from an end user's browser and then send the relevant files from the server to the client.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=30)** You know this as hypertext transfer protocol, or HTTP.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=35)** The most popular open source web server is the Apache HTTP Server and we'll use this software to send files to our browsers that creates the presentation layer of our application.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=47)** The second thing that we need is support for a server-side scripting language.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=53)** This will allow us to add programming elements to our application to create the logic tier of the application.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=60)** For that, we'll rely on a language called PHP.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=64)** PHP is great because it has a tight integration with standard HTML documents.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=69)** And you can have a single file that includes HTML and PHP code all mixed together.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=77)** An example of PHP code might look something like this.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=81)** Here, we have an HTML webpage which includes tags that identify the header and the title of the page, as well as the body content of the page.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=91)** Inside of the body, we have a small PHP script.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=95)** This script will fetch the current date from the server and format it according to the pattern in parentheses.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=102)** This is done before the final HTML document is sent to the end user and they won't see any of this code when the page renders in their browser.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=112)** All the end user sees is something like this.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=114)** It'll say Today is Monday, April 12th, 2021.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=119)** The PHP code is executed on the web server and only the final output is sent to the client's browser.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=127)** To make everything work without having to invest in expensive hardware or complicated network configurations, we're going to add to the system of Docker containers that we've been working with.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=137)** This will allow us to build a little virtual network that contains both of our servers.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=143)** We'll start with our PostgreSQL container and specifically use PostgreSQL version 13.2.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=150)** Then we'll add a second container that has the Apache web server with support for PHP.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=157)** When each of these are placed inside of a Docker container, both servers can easily communicate with one another.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=164)** We can then add files to the web server and connect to it using our browser from our local operating system.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=171)** So that's the plan for what we're going to build.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-application-development/what-is-php-and-apache?u=76281980&t=173)** Let's get to it.

> [!info]- Semantic Content
>
> **Env Vars:** php (7), html (4), http (2)
> **CLI Commands:** php (7), apache (2), docker (2), make (1)
> **Code Keywords:** this. (2), this, (1), let (1)
> **Versions:** version 13 (1)
> **Speakers:** - [narrator] (1)

#### Create a PHP web server
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=0)** - [Instructor] Let's get started building our first server cluster.
>
> **[0:03](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=3)** All of the commands that you'll need to execute can be found inside of the chapter two folder and I've written them out in a file here called postgress_setup.text.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=12)** Let me just open that up.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=13)** And you can see all the steps that we're about to move through listed out here, as well as the specific docker commands that we're going to be executing on the command line.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=21)** So let me close that down and we can get started.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=24)** Now first, I want to make sure that docker is in fact running.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=26)** So I'll look down here in my menu bar and I can see the docker icon right there.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=29)** If you're on Mac OS or Linux you'll see the same icon up at the top of your menu bar when docker is running.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=35)** Now we're going to execute commands on the command line.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=37)** So I need to open up my PowerShell window here on Windows.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=42)** Again, if you're on Mac OS or Linux you're going to use the terminal application for this.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=47)** Let me open that up and we can get started.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=50)** Now at first, it's important to know that docker containers are typically kept isolated from one another for security reasons.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=57)** In order for our web server to be able to talk to the database server we need to create a virtual network for them.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=64)** And we do that with the command docker network create.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=69)** And then we named the network.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=71)** I'm going to call mine PGDB_network.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=76)** In order for all of these exercises to work, you need to make sure that you're using the exact same names that I'm using.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=82)** So go ahead and press Enter to execute the command and create the docker network.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=87)** Now we can create our two server containers.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=90)** Let's first set up the database server.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=93)** For that I'll use the command docker run dash dash name and I'll name it PG_DB_server.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=102)** Next, we need to add our database server to the network that we just created.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=106)** So I type in two dashes and network, followed by the name of the network we just created PGDB_network.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=116)** Then I need dash dash publish.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=120)** And this will set up our ports.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=122)** So for this, I'm going to use port 5430 on my local computer, and I'm going to map that to 5432 inside of the docker container.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=132)** Next I need a dash E followed by Postgress_password in all capital letters.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=141)** This will set up the password for the Postgress user account.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=145)** I'm going to use the password, Adam, capital A-D-A-M 123456.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=151)** Again, typically you'll want to your own password but in order for this exercise to work correctly make sure you using the exact same password that I'm using here.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=160)** After we type in the password I need dash D and we'll specify the name of the image that we're going to be using in order to create our container.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=168)** The image that I want is the Postgress image.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=172)** And I want to use a specific version.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=174)** So I'll type in a colon and 13.2.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=177)** I'll press the Enter button.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=179)** So this tells me that it can't find the image locally.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=181)** So it's going to download the Postgress image and create my local container for the Postgress database server.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=192)** All right, that's all set up.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=193)** And now we can set up our web server container.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=197)** To do that we'll run the docker run command again, once again, we'll name the container.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=202)** So dash dash name, I'll name this container PHP_web_server.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=211)** Once again, we need to put it in the same network so dash dash network, followed by PGDB_network.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=222)** Then we'll set our ports with dash dash publish.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=226)** I want to map port 8080 on my local computer to port 80 inside of the container.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=233)** So that's 8080 colon 80.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=236)** Then we need to specify the image so dash D and for this image, we'll use the PHP image colon and a specific version of 8.0.2 dash Apache.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=249)** I'll press Enter to create that container.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=251)** Once again, it tells me that it can't find the image locally so it's going to download that from the internet and this will take just a moment to create my container.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=262)** Okay. So I've got both of my containers set up now.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=265)** And since both the web server and the database server are in the same network they're free to communicate with each other.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=271)** And the ports that we've opened up for each server will allow us to connect to each resource from our own local computer.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=278)** I'm going to run the CLS command just to clear the screen and get all that off of the screen.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=282)** And we'll move on to the next step.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=285)** Next, we need to modify the PHP web server a little bit.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=289)** By default, the PHP docker container doesn't have what it needs in order to connect to a database server.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=295)** So we need to add on a Postgress QL extension.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=298)** To do this I need to log into the web server.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=301)** We do that with docker EXEC dash IT then the name of the web server, so PHP underscore web server is what we named it.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=310)** And I'll use the bash shell.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=313)** I press Enter and that'll move me inside of the container and it puts me inside of the container there at this file path var www dash HTML.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=323)** Now I need to install a little bit of software.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=326)** To do this we use the command apt-get update and and apt-get install dash Y, lib PQ dash dev, two more ampersands, docker dash PHP dash EXT dash install.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=350)** Then PGSQL, then PDO, and finally PDO underscore PGSQL.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=360)** Now this line is a little bit complicated if you've never worked with Linux software installations and you don't really need to concern yourself with what every piece is actually doing.
>
> **[6:10](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=370)** The end result is that we're adding driver support for making PostgreSQL connections with the PHP data object extension or the PDO.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=381)** So I'm just going to make sure that everything is spelled correctly, and press the Enter key to run through that installation.
>
> **[6:27](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=387)** Now, again, this is going to download some information from the internet.
>
> **[6:30](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=390)** It'll take a few moments to install all of the software.
>
> **[6:35](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=395)** After a few moments you should see this line that says, build complete and everything has been installed and configured on the server.
>
> **[6:42](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=402)** Now, all we need to do is run the command exit to get out of the web server container, that will put us back onto the command line at our main PC.
>
> **[6:51](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=411)** And then I can run docker, restart PHP web server.
>
> **[6:58](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=418)** That'll shut down and restart the web server so that the Postgress extension can be enabled.
>
> **[7:04](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=424)** Then I can type in the CLS command again to clear the screen and that'll return me back up here to the top.
>
> **[7:09](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=429)** Finally, we can now copy all of our files from the exercise files chapter two folder up into the web server.
>
> **[7:17](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=437)** To do that, we use the docker CP command, and then I need the file path to the exercise files.
>
> **[7:23](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=443)** So I'm going to minimize this window here and I'm going to find the chapter two folder, and I'm just going to drag in the PHP web server folder I drag that whole thing over here and drop it onto the PowerShell Window.
>
> **[7:35](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=455)** And that'll put it into the file path to that folder.
>
> **[7:39](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=459)** Now, after that, let's go ahead and make sure this is maximized again.
>
> **[7:42](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=462)** Now after the file path, I'm going to type in a period.
>
> **[7:45](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=465)** It's all going to come back here right before the closing quotation mark and I'll type in a another backslash and a period.
>
> **[7:53](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=473)** If you're on Mac OS or Linux, you're going to use a forward slash and a period here after the PHP web server folder name.
>
> **[8:01](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=481)** This will copy all of the containing files and folders that are within this root folder there.
>
> **[8:07](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=487)** So we're going to copy all the files from that folder into our PHP web server container.
>
> **[8:13](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=493)** So I'll come here after the quotation mark, type in a space, the name of the container, PHP underscore web server, then a colon and then we want it to go to a specific file path.
>
> **[8:24](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=504)** So I'll type in a colon slash VAR slash www slash HTML and one more forward slash.
>
> **[8:33](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=513)** Press the Enter button that'll upload all those files from the exercise files and the PHP web server folder up into the PHP web server container.
>
> **[8:43](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=523)** Just to verify that all of those files were copied correctly.
>
> **[8:46](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=526)** We can log back into the web server with docker EXCC dash IT, the name of the PHP web server again, PHP underscore web underscore server.
>
> **[8:56](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=536)** And once again, we'll use the bash shell.
>
> **[8:59](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=539)** That'll put us into that HTML folder and I can just type in LS to list out the contents and we should see the index PHP file, the scripts folder the server test folder, style sheet.CSS and the two trees folder.
>
> **[9:11](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=551)** So everything was copied up correctly.
>
> **[9:13](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=553)** You can type in exit.
>
> **[9:15](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=555)** That will put me back onto my local computer and we're done with our terminal or PowerShell window.
>
> **[9:21](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=561)** Now, if everything worked correctly we should be able to open up our web browser and go to local host, colon 8080.
>
> **[9:31](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=571)** That'll contact the PHP web server that we just set up and you should see this success message.
>
> **[9:37](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=577)** This gives us a little bit of information about the server.
>
> **[9:40](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=580)** It gives me the current date and time in UTC so don't be surprised if this date looks a little bit funny from where you are right now.
>
> **[9:47](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=587)** So this is an UTC time.
>
> **[9:48](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=588)** I have a link here to take a look at some PHP server information.
>
> **[9:52](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=592)** That'll tell me the version of the server that we're working with.
>
> **[9:55](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=595)** And if I scroll down here on this page about halfway down, we should find a section that talks about the PostgreSQL connection.
>
> **[10:02](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=602)** And here we are, we've got the PDO section and it tells us we have PDO driver support for PostgreSQL.
>
> **[10:08](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=608)** And we also have the PDO PGSQL driver listed out right here and we can see that it's enabled.
>
> **[10:14](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=614)** So that is good.
>
> **[10:15](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=615)** Click and close out this tab.
>
> **[10:17](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=617)** And I can also click on the link here to view PostgreSQL information.
>
> **[10:21](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=621)** This will send a simple query to the page and actually this web browser it looks like, it thinks that this is written in Danish which does not make any sense let's go ahead and close that.
>
> **[10:30](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=630)** So it gives me some information about the PostgreSQL server, tells me I'm running PostgreSQL 13.2 running on Debian Linux.
>
> **[10:36](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=636)** I got the name of the default instance there as well as the host name.
>
> **[10:40](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=640)** This is the name of the docker container that we set up as well as the port that we set up.
>
> **[10:46](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=646)** So it looks like everything is working.
>
> **[10:48](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=648)** And with that, our little server cluster is up and running.
>
> **[10:51](https://www.linkedin.com/learning/database-foundations-application-development/create-a-php-web-server?u=76281980&t=651)** And we have successfully communicated between the PHP web server and the PostgreSQL database server.

> [!info]- Semantic Content
>
> **CLI Commands:** php (19), docker (17), make (6), find (4), apt (2)
> **Env Vars:** php (19), pdo (6), html (3), pgsql (3), cls (2)
> **Prerequisites:** set up (9), install (4), you'll need (1)
> **Code Keywords:** let (7), var (2), this. (1), this, (1), default, (1)
> **Tools:** command line (3), powershell (3), terminal (2), bash (2)
> **UI Navigation:** go to (2), scroll down (1), click on (1)
> **Exercise Files:** exercise files (3), download the (1)
> **Ports:** port 5430 (1), port 8080 (1), port 80 (1)

#### Connect to the PHP server
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=0)** - [Instructor] Before we dive into reading some PHP code, let's take a quick look at how the exercise files are structured.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=7)** I'm going to hop over to a terminal window and run the command docker ps -a.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=13)** This will show me the status of my two Docker containers.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=17)** I have a web server named php_web_server and we can access it by going to port 8080.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=23)** We also have a database server named pg_db_server and it can be accessed at port 5430.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=30)** Now when I open up my web browser and navigate to local host:8080, the file that we see here on the screen is the index.php file that you can find inside of the exercise files.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=42)** Let's take a look at that folder.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=44)** Here is our php_web_server folder that we uploaded into the web server inside of Docker, and inside of there are the different files that we're going to be working with.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=52)** This index.php file is the file that we're currently seeing rendered on the screen back here in the web browser.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=59)** We can open up this index.php file inside of our text editor.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=63)** I'm going to be using Visual Studio Code, but you can use whatever text editor you have on your computer.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=70)** Now the PHP file uses standard HTML tags to organize the page structure and then sprinkles in some PHP scripts throughout the page.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=79)** On line number eight is where we have the success message.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=82)** It's written inside of h1 tags, so it gets rendered as a heading one inside of the browser.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=88)** Below that on line number 10, we have the line that calculates the current date and time.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=94)** It starts out with an HTML h3 tag, so this will be rendered as a heading three, but then we have a PHP tag that opens up right here and closes over here with the question mark and a closing bracket.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=107)** Inside of the PHP tag, we have a couple of date functions.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=110)** Here's one that calculates the current date and here's another one that displays the current time.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=116)** The PHP code will get rewritten by the PHP server when the browser fetches the page.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=122)** So here in the file, we see the date function that's calculating and formatting the current date and time, but in our web browser, we just see the result of the function.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=131)** If I switch back into the web browser, we'll see the message here that today is Wednesday, March 17th, 2021.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=138)** We're not seeing that PHP code, we're just seeing the result of the calculation.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=143)** Now in this page, we also have three example scripts.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=146)** I'm going to scroll down here.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=147)** We have PHP Script One.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=149)** If I scroll down further, we'll find Script Two and Script Three.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=153)** We're going to take a look at those in the upcoming movies.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=155)** Let's just go back up here to Script Number One and take a look at it real quick.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=159)** Now each of these scripts have a green button down here at the bottom to run each one.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=165)** These buttons will open up the files that we have in the exercise files folder, so if I switch back over and take a look at that folder structure again, we can go into the scripts folder and here is Script One, Script Two and Script Three.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=177)** Now you can also open up these in your editor to read the contents.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=181)** For convenience, though, I've added all of the code from these files so that it displays inside of the web browser inside of these gray contents boxes.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=189)** This will make things easier to read so that we don't need to constantly jump back and forth between the browser and the text editor.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=196)** Now if you decide to modify any of the exercise files, keep in mind that you'll have to copy them up to the web server again using the docker cp command in order to view the changes here in the browser.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=209)** So that's how our exercise files are organized.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-application-development/connect-to-the-php-server?u=76281980&t=212)** We can now start to explore how the web server communicates with the database server.

> [!info]- Semantic Content
>
> **CLI Commands:** php (12), docker (4), find (2), make (1), cp (1)
> **Env Vars:** php (9), html (2)
> **Code Keywords:** let (3), function (2), switch (2)
> **Exercise Files:** exercise files (5)
> **File Paths:** index.php (3)
> **Code Identifiers:** php_web_server (2), pg_db_server (1)
> **Ports:** port 8080 (1), port 5430 (1), :8080 (1)
> **UI Navigation:** scroll down (2), navigate to (1)

#### PostgreSQL functions
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=0)** - [Narrator] When we created the PHP server, we had to log in and add support for making PostgreSQL database connections.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=8)** When we did that, we enabled a number of PostgreSQL functions that can be used to send requests from the web server to the database server.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=18)** The first lines of the Script 1 PHP file includes some standard HTML header lines that'll set up the page.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=26)** This includes the page's title Query 1 as well as a link to the style sheet.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=31)** The body of the page is made up entirely of a PHP script.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=35)** It starts here with the opening php tag and ends here with the closing php tag.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=42)** This script contains two PostgreSQL functions.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=46)** The first function is pg_connect.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=49)** This is where we fill in the login details that will allow the script to reach out to the database server and make the connection.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=56)** This function takes a number of parameters.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=59)** The host would be the IP address or the network path of the database server.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=64)** In our case, we can use the name of our Docker container since we placed the web server and the database server on the same virtual network.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=73)** So my host is equal to pg_db_server.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=77)** The port 5432 is PostgreSQL's default port that's used inside of that virtual network.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=85)** We're going to connect to the default PostgreSQL database and use the default PostgreSQL user account.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=91)** Finally, we need to specify the password Adam123456, which was also established when we created the Docker container.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=100)** We're using the default PostgreSQL user and password as a matter of convenience here.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=105)** A more secure approach would be to set up a specific and unique user account for the PHP server to use so it has its own login credentials that we put here in the connection string.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=118)** This does add a bit of complication though because we would need to ensure that the new user account has been granted all of the required permissions.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=127)** I want to keep things simplified so we'll stick to the default user account for these examples, which already has administrator level permissions.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=136)** Now, once a connection is made, we can send a query to the PostgreSQL database server.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=141)** We do that with the pg_query function.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=145)** The parameter here is simply the SQL that we want to execute.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=149)** This example creates a new database named test.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=153)** So these are our first two PostgreSQL functions, pg_connect and pg_query.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=160)** There are many other functions that we can use to send communications between the PHP web server and the PostgreSQL database server.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=169)** I've added a link to the full documentation up here in the description.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=174)** This lists out all of the PostgreSQL functions that we can make use of when we write PHP scripts.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=179)** We have a long list of them all right here.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=182)** For instance, we have a function that'll cancel an asynchronous query or that'll close a PostgreSQL connection.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=189)** This is a great page to bookmark for future reference if you plan on writing your own scripts.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=195)** Let's go ahead and close this tab and return back to our example.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=199)** Now, the only other lines in our PHP script are the ones above and below.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=204)** These simply include the echo command which will print out text into our HTML files.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=210)** The first one will print out the text Creating a new database named test, and the second one will echo the line Database created.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=218)** Both of these get wrapped in h3 tags so they'll be formatted by our browser as heading three.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=225)** Let's go ahead and press the Run button to execute the code.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=229)** When it runs, we just see those two lines, Creating a new database named test and Database created.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=235)** We didn't ask for anything to be returned from the PostgreSQL server, so there's no additional information shown on the screen.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=242)** We can press the Back button to return back to our script.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=246)** Now, if you press the Run button again, this time, the PHP server is going to try executing the same functions.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=252)** And this time, you'll see an error message since the test database already exists now.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=258)** We still get the Creating a new database line as well as the Database created line, so this might be a little bit confusing.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=265)** Our script could use a little bit of work to better handle the error and we'll tackle that problem in a few minutes, but this is a good start.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=273)** The fact that this page says that our database already exists confirms that our first execution was successful in creating the database on the PostgreSQL server.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-application-development/postgresql-functions?u=76281980&t=283)** So pg_connect and pg_query are probably the two most commonly used functions when you want a PHP web server to communicate with a PostgreSQL database server.

> [!info]- Semantic Content
>
> **CLI Commands:** php (11), make (2), docker (2)
> **Env Vars:** php (9), html (2), sql (1)
> **Code Keywords:** function (4), let (2), case, (1), finally, (1)
> **Code Identifiers:** pg_connect (3), pg_query (3), pg_db_server (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Ports:** port 5432 (1)
> **Analogies:** for instance (1)

#### Use PHP variables
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=0)** - [Instructor] We can make use of PHP variables to help us reuse elements in our code.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=6)** PHP variables all start with a dollar sign and then you can give them a unique name.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=12)** Let's scroll down on our script page here down to script number two and take a look.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=17)** Now in this example, we're going to add a table to the database that we just created.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=21)** We need to perform similar tasks as before.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=25)** First, we're going to connect to the database server and then send it a query, but we can use variables to hold the details of our PostgreSQL functions.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=34)** First, I'm going to create a new variable called DB Connection.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=39)** The name here starts with the dollar side.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=41)** That's how I know that it's a PHP variable.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=44)** Then, I can set its value to the PG Connect function followed by all of these parameters.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=51)** We're connecting to the same server using the same port and the same username and password as before.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=57)** The only difference here is that this time we're connecting to our new test database that we just created.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=63)** So this fills in the value for our DB Connection variable.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=68)** Next, I'll create a second variable and I'll call it SQL Query.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=73)** This gets the value of the SQL command that I want to execute.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=77)** We're going to create a new table called testing and this table will have a single column called ID that'll hold integer values.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=85)** So far, we've just created the variables and given them their values.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=90)** We haven't actually sent any commands to the database server yet.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=94)** To do that, we can now run the PG Query function.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=97)** Inside of that, we'll pass it the values from our two variables: the DB Connection variable that we set right there and the SQL Query variable that we set right here.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=108)** Essentially, what we're saying is to execute this query on this connection.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=113)** Once that query executes, we can use a new Postgre function to close our connection.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=119)** This will free resources on the database server.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=122)** We'll use the PG Close function and supply it the value of a DB Connection variable that we used right up here.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=129)** This will ensure that the connection that's closed is the same connection that we opened just a moment ago.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=136)** Let me scroll down on the script and then I'll press the run button to run through all of that code.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=140)** I get the message that it's creating the table in the test database and that the table was created.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=146)** Once again, though, if I go back and try and run the script again, this time, I'm going to get an error message.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=152)** It says that the relation, or what's commonly called a table, already exists.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=157)** So that's a good sign that it was previously created successfully.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=161)** Using PHP variables allows you to set up your database connection details and queries ahead of time, and then send all of that to the database server all at once rather than opening a connection and sending the query as two separate requests.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/use-php-variables?u=76281980&t=177)** This can help speed up communication between the web server and the database server and it makes your code easier to manage.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), pass (1)
> **Env Vars:** php (4), sql (3)
> **CLI Commands:** php (4), make (1)
> **UI Navigation:** scroll down (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Use if/else to handle errors
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=0)** - [Instructor] The two scripts that we've created so far haven't responded very well if you try and run the code multiple times.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=7)** To fix this, we can add in some basic error handling to our script using an if-else programming construct.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=14)** Let me scroll down on my page here until I get to PHP Script 3.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=19)** In this example, we're going to drop the database that we just created.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=23)** This time, we're setting up the database connection variable in exactly the same way.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=27)** We have the variable named db_connection and it's equal to the pg_connect function with these parameters.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=34)** The only difference here is that we're connecting back to the Postgres database again, not the test database.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=40)** If we connected to the test database, then we wouldn't be able to drop it, since we would have an open connection.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=46)** I'm also going to set up the sql_query variable again and this time, the syntax of my sql_query will be DROP DATABASE test WITH FORCE.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=56)** The WITH FORCE modifier will force close any open connections that may still be present and is a new addition to PostgreSQL version 13.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=66)** Now, instead of immediately running this query on this connection like we did in the previous example, I'm going to store the pg_query as another variable that I'm going to call result.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=78)** The @ symbol before the pg_query function is a PHP notation that'll suppress any error messages that may otherwise try and display if something goes wrong.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=89)** This allows us to handle the error message in a different way.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=94)** If our DROP DATABASE query is successfully processed, result will be true.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=99)** If the DROP DATABASE query is unsuccessful, then this result will be false.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=105)** We can use this information in an if-else block.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=110)** If the result is true, then we'll print out the message with this echo command that says the database was successfully dropped.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=118)** If the DROP DATABASE command fails though, the result will be false and the code will jump over to the else section.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=126)** Here we'll echo the line the query failed with the following error.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=131)** We can then use a new PostgreSQL function named pg_last_error and give it our current database connection.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=139)** This'll return the specific error message from PostgreSQL so that we can see exactly what the problem is.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=146)** When you're ready, let's go ahead and scroll down and click on the Run script_3 button.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=151)** The first time you do that, you should see that the test database was successfully dropped.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=156)** This is exactly what we wanted to happen.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=159)** Let's press the back button and try and run the script again.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=163)** This time, the else portion of the code is activated and we get a different message.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=168)** The query failed and we get the error message that the test database does not exist.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=173)** So now we have three different scripts that modify our Postgres database.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=177)** One that adds a new database.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=180)** Then we can add a table to the database and then we can drop the database, which returns everything back to the state that the server was in at the very beginning.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=189)** If you want, you can use Azure Data Studio to inspect the server at any point.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=194)** Let me open up Azure Data Studio and connect to it.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=198)** On the server sidebar, I'll click on this button here to set up a new connection.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=203)** We'll connect to a PostgreSQL database.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=206)** The server will be localhost.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=209)** We'll use password authentication with the username postgres and the password adam123456.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=219)** I'll choose the option to remember the password and then click over to the Advanced section where I can type in the port.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=225)** For this, I'll use port 5430.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=228)** This is the external port that we're forwarding into the Docker container.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=232)** Then I can go down here, actually don't need to update ADS right now, so I'm going to go ahead and close that and press the OK button.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=239)** Then I'll press the Connect button to set up my connection.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=242)** That'll connect me back into the PostgreSQL server that's running inside of Docker.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=247)** Now, at this point, I only have the one database, the PostgreSQL database.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=250)** So I can return to my script and we can run through the steps one more time.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=255)** We'll scroll up here and run script_1 to create the database.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=259)** All right, now I can go back.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=260)** I'll scroll down and run script number two to add the table.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=265)** Great, let's go ahead and close that.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=267)** And now I can go into Azure Data Studio, I'll refresh my list of databases and there is the test database.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=275)** If I expand the tables folder, we'll see the testing table with its single column.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-application-development/use-if-else-to-handle-errors?u=76281980&t=281)** So using some PHP scripts, we're able to execute commands by interacting with a basic web form and the web server in turn sends our instructions to the database server for execution.

> [!info]- Semantic Content
>
> **Env Vars:** drop (4), database (4), php (3), force (2), ads (1)
> **Code Keywords:** let (5), function (3), this, (2)
> **Code Identifiers:** sql_query (2), pg_query (2), db_connection (1), pg_connect (1), pg_last_error (1)
> **UI Navigation:** scroll down (3), click on (2), scroll up (1)
> **CLI Commands:** php (3), docker (2)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (2)
> **Ports:** port 5430 (1)

#### Add data to a database
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=0)** - [Narrator] PostgreSQL functions allow us to do more than just connect and send requests to the database server.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=7)** There are additional functions that allow us to work with information that comes back from the server such as the results of a select query.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=16)** To see this in action, scroll down on this page all the way to the bottom until you find the link to the Two Trees Olive Oil database.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=24)** Alternatively, you could just browse to local host:8080/2_trees.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=32)** This will open up another batch of files that we previously uploaded from the exercise files folder up into our web server.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=40)** So that we have some interesting data to look at, the first script on this page will set up a sample database.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=47)** It goes through a couple of different steps.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=49)** The first thing that it's going to do is create a database.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=52)** It does that by creating a connection, connection number one, and it uses the pg_connect function with these parameters.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=60)** Then we'll set up a query that'll create the database two_trees.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=64)** Next, we'll execute that query on connection number one.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=68)** And finally, we'll close the connection.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=71)** So that's the first step.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=73)** Now that the database is created, we can log into it and create the table.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=77)** To do this, we need a second connection and I'm going to call it db_connection_2.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=83)** Once again, it uses the pg_connect function, but this time, we're going to connect to the two_trees database that we set up in the previous lines.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=92)** Once we're logged into that, we can create a schema inside of that database with the CREATE SCHEMA inventory line here and then we'll execute the create_schema_query on connection two.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=103)** Next, we'll create a table.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=105)** We'll set up another variable called create_table_query.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=109)** The contents of this variable will be our CREATE TABLE statement and it's going to create a table called products on the inventory schema.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=117)** This product table will have five different columns: SKU, product name, category ID, size, and price.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=126)** Once we've set up that query syntax, we can execute that query with the create_table_query syntax right here and we'll execute that query on connection number two.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=135)** And finally, we can add data into this table.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=139)** Once again, we'll create one more variable, this time called insert_data_query.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=144)** The text of this variable is going to be INSERT INTO inventory.products and we'll fill in the values for the five different columns.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=152)** The values will be this long list here and you can see that we're inserting a lot of rows into this table.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=159)** So let me go ahead and scroll down on this and you can see there's actually a lot of data there.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=163)** Finally, we get to the bottom.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=165)** We'll run the insert_data_query syntax on connection number two.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=170)** And then at the end of all of that, we'll close connection two.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=174)** Go ahead and press the CREATE the Two Trees Database button.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=177)** It'll go through the process and run through all of those steps.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=180)** It'll create the database, create the schema, create the table, and then add in all the data.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=186)** Now, we're not going to get any messages back from this if it's successful, so you'll just see this screen here.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=190)** Go ahead and press the Back button and the database will be created.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=194)** Now, if you need to, I also created a second script that'll delete the database.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=199)** You can access it from the DROP the Two Trees Database button right there if you wanted to go through and reset the server again.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=206)** As a sanity check, we can verify everything worked correctly by logging in with Azure Data Studio.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=212)** This step is optional though, but if you do have that connection already created to our database server in Azure Data Studio, you can open it up and right-click on the databases folder, choose Refresh, there is the Two Trees database.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=225)** Let's expand tables. There is the table.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=228)** Here are all of the columns.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=230)** And if I right-click on the products table and choose select top 1,000, we should see some data returned and there is all the data that was entered with the PHP script.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-database?u=76281980&t=241)** So now we have a database for the Two Trees Olive Oil company with some product data that we can play with.

> [!info]- Semantic Content
>
> **Env Vars:** create (3), schema (1), table (1), sku (1), insert (1)
> **Code Keywords:** finally, (3), function (2), let (2), this, (1), delete (1)
> **Code Identifiers:** pg_connect (2), two_trees (2), create_table_query (2), insert_data_query (2), create_schema_query (1)
> **Prerequisites:** set up (5)
> **UI Navigation:** scroll down (2), right-click (2)
> **CLI Commands:** find (1), php (1)
> **SQL:** create table (1), insert into (1)
> **Ports:** :8080 (1)

#### Format SELECT query results
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=0)** - [Instructor] Data that's returned from a select query, turns into an array of values that we need to process in PHP before it's usable.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=9)** This will often require a looping routine in order to write out each row of data one row at a time.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=16)** In the two trees database file, let's scroll down until we get to query number one.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=22)** This first query in the two trees database will retrieve all of the values from the products table.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=28)** The procedure starts with these same variables that we've been working with.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=32)** We'll create a variable called db_connection that contains our connection string, we'll then set up a variable called query_db that contains the SQL that we're going to execute.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=43)** The query that I'm going to run is a select statement.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=46)** We'll select the sku, product_name, category_id, size, and price columns from the inventory at our products table.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=55)** Finally, we have the results variable, it'll hold well, whatever comes back from the server when we execute this query on disconnection.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=64)** So that's the setup.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=66)** Now we need to do something with those results in order to read them here in the browser.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=72)** We'll start with an if else block.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=75)** This will allow us to handle any errors that may arise.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=79)** If the result is successfully retrieved, we'll run through all of these lines.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=84)** If the result fails to retrieve data for any reason, we'll jump down to the else portion and run these two lines.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=91)** This will allow us to display the error that's reported by PostgreSQL.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=96)** If the results are successful though, we'll print out two lines of text.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=101)** We'll echo the line, the query executed successfully followed by the line, Two Trees Product Information.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=107)** Now we need to work through the actual data.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=110)** We do that with a for loop.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=113)** This will process each row one by one.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=117)** The first line of the for-loop sets up a counter which determines when to run through the loop again, and when to stop.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=124)** We start with a counter variable called row and set its initial value to zero.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=130)** Then as long as the row counter is less than the number of rows contained in the result, we'll run through the loop again.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=137)** After it's all done, we'll increment the row counter by one.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=141)** That's what this row plus plus portion means.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=145)** For each loop, we'll find the value of each column.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=149)** The pg_fetch_results function we'll get the value from the full results set of the current row in the column called sku.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=157)** We'll then save that value in a new variable called sku.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=162)** We do the same thing for the product name column.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=164)** We'll use the pg_fetch_result function applied to our results set for the current row in the product name column.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=172)** We'll take whatever value that finds and save that as the product name variable.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=177)** We'll, then do the same thing for category_id, the size and the price.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=182)** Once each variable is populated for the first row, we write them out.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=187)** This uses the echo command.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=190)** It'll create a string of text that includes the sku value followed by a space, the product name, another space, category_id space size, space, and then finally price.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=204)** At the end it'll add an HTML line break.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=207)** This will set up the next row of data so that all finishes the first row of data, the loop returns to the top, it increments the counter and runs through the entire statement again for the second row of data from the result set.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=221)** It'll print that all out, using the echo command and then run through it again for row number three.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=227)** It'll keep doing this until all of the rows from the results set are processed.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=232)** To see what this looks like, let's scroll down and find the run query one button.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=237)** This shows all of the data formatted as a simple list.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=242)** This is a good start but the presentation leaves a lot to be desired.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=246)** And this isn't very legible.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=248)** Instead of outputting the values to a list, we can incorporate them into an HTML table.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=254)** Let's press the back button, they'll return to our example code and I'll scroll down to query number two.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=260)** This PHP script starts out exactly the same, we use the same database connection, the same query string and the same results string.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=270)** In the if block is where things start to change.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=273)** This is where we'll construct our HTML table.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=277)** The initial components of the table are built before we start into the loop.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=281)** So we'll echo a new opening table tag and we'll start the first row of data.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=287)** This will be a header row for the table, so we'll use the tag to denote table header rows and this'll just give us a column header for each column of the table.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=296)** So we have the sku column, product_name, category_id, size and price column headers.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=302)** This will clarify what data is in each column.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=306)** Then we start our for-loop.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=309)** This portion is exactly the same as before, the difference is what we do with each variable.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=315)** Instead of echoing them out to a single line, we'll build another table row.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=320)** Each variable gets written out to its own data cell in that table row.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=325)** So we'll set up a new row at the beginning, we'll have a table data cell for the sku, another table data cell for the product name, category_id, size and price and then we'll end the row.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=336)** Each time the loop is processed, another complete row is added to the table.
>
> **[5:42](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=342)** So let's go ahead and scroll down and see what this result looks like.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=345)** I'll press the run query to button and I get a much better presentation of the data.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=351)** All of the values get put into a well formatted HTML table and the CSS styling can be applied to make the header row stand out and give us a better alternating row shading that makes the table easy to read.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=364)** If else, constructs and for loops are just a couple of the many programming techniques that can be applied to your data when you move into an application development role.
>
> **[6:14](https://www.linkedin.com/learning/database-foundations-application-development/format-select-query-results?u=76281980&t=374)** They allow you to process your data in interesting ways apply formatting to increase legibility and help create dynamic interactive presentations.

> [!info]- Semantic Content
>
> **Code Identifiers:** category_id (5), product_name (2), db_connection (1), query_db (1), pg_fetch_results (1)
> **Code Keywords:** let (4), function (2), require (1), finally, (1), break. (1)
> **Env Vars:** html (4), php (2), sql (1), css (1)
> **CLI Commands:** php (2), find (2), make (1)
> **UI Navigation:** scroll down (4), select the (1)
> **Prerequisites:** set up (3), setup (1), before we start (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Filter results with form controls
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=0)** - We can let our end users interact with the database dynamically by providing some form controls.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=7)** Form controls we'll collect input from the user and then insert those values into the query commands before they're executed on the database server.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=16)** I've scrolled down to the third query example in the two trees database.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=20)** Here, we have an example of a form control called a selection box or a dropdown list.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=26)** This allows the user to choose from several different options for the types of products that they want to see.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=32)** The options are number one, olive oils.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=35)** Number two, flavor infused oils or number three bath and beauty products.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=40)** Let's select number two, flavor infused oils.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=44)** Now press the run query three button and we'll see a table that's displayed that only shows the products with a category ID number two.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=53)** If you go back to the example page and make a different selection, let's choose number three this time.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=59)** Run the query again, and the resulting table shows me just the products and category ID number three.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=65)** In order for this to work we need two things.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=69)** First, we need to collect the input from the end user.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=72)** Let's look at the code that creates this selection list.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=76)** In the exercise files of the chapter two folder, go into the PHP web server folder and then into the two trees folder.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=84)** I'm going to open up the index.PHP file in my code editor.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=89)** The lines that I want to look at are all the way down on lines 52 through 60.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=95)** This is where we set up our form controls.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=98)** The selection box is given a name.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=101)** In this case, ours is called category ID value.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=105)** This creates a PHP variable.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=107)** Each option in the selection list is associated with a value.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=112)** When the user makes a selection from the three choices the value of their choice is saved to the variable.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=118)** So if the user selects bath and beauty, the category ID value variable is set to three.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=125)** When the user selects olive oils, the variable is set to one.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=130)** This variable and its value are then posted up to the PHP server when the user pushes the submit button.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=138)** So that's how the browser collects the user input and sends it back to the web server.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=143)** From here, we need to look at the PHP script to see how the input is actually used.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=149)** Let's go back to our example code.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=152)** In order to incorporate user input, we need to slightly modify our approach to sending SQL commands to the database server.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=160)** We start by creating our connection.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=163)** I'll set up a variable called DB connection and it will be equal to our PG connect function with these parameters.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=170)** This part hasn't changed.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=172)** Next, we need to prepare our query.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=176)** This uses a new function called PG prepare.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=180)** This requires three parameters.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=182)** First, we'll send the query to the connection that we just set up.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=185)** Next, we'll give it a query name.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=188)** I'm going to call it my query.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=190)** Finally, we add in the SQL command that we want to execute.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=194)** We'll select all five columns from the inventory.products table.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=199)** In order to filter the results, we'll add in a where clause.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=203)** We want to filter the results to the only those where the category ID is equal to, well, whatever the end user wanted to see as indicated by their selection and the dropdown list.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=215)** To fill in the value, we'll use a numbered variable.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=218)** It starts with dollar sign one.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=220)** Our query only needs to incorporate a single user input variable.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=224)** So that's why we're using the number one.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=226)** This finishes the prepared query and we'll save all of that as result.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=231)** Finally, we get to the point where we actually complete the where clause and execute the query.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=237)** We update the result and use the PG execute function.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=241)** We'll reuse the previously established connection and we'll use the prepared query called my query.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=248)** The final piece fetches the category ID value variable that was posted by the end user to the PHP server.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=256)** This will fill in the dollar sign one variable here in the where clause.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=261)** So when the user selects bath and beauty, the category ID is set to three.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=268)** If the user selects olive oils, the category ID is set to one.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=273)** The database server is then able to return the filter data set back to the web server, where it gets saved as our result.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=281)** After that, we just need to display the results for the end user.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=284)** The structure of the results doesn't change.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=287)** It's the same table, the same number of columns.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=290)** The only thing that's different is the number of rows.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=293)** So we don't actually need to do anything different with our for-loop.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=297)** Let me scroll down in the script a little bit.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=299)** And you'll see that everything here in the if block and the for-loop is exactly the same as what we had in the previous example.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=307)** It formats all those results into an HTML table.
>
> **[5:11](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=311)** This for-loop will process whatever the results that contains.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=315)** It doesn't matter if it's one row or a thousand rows.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=319)** So now we have a dynamic form where the user can make a selection in this dropdown list, press the run button and they'll get a customized view of the data.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=329)** By using form controls that post values back to the web server.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-application-development/filter-results-with-form-controls?u=76281980&t=333)** The PHP script can incorporate those values into its code when it communicates with the database server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3), finally, (2), case, (1)
> **Env Vars:** php (7), sql (2), html (1)
> **CLI Commands:** php (7), make (2)
> **UI Navigation:** dropdown (3), scroll down (1)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (2)
> **File Paths:** index.php (1)
> **Exercise Files:** exercise files (1)

#### Add data to a table with form controls
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=0)** - [Instructor] Using form controls, we can allow end users to add new rows of data to the database, without them having to know anything about how relational databases work or how our specific database is structured.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=14)** Query_4 includes some form controls that accept user input.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=18)** We have four text boxes and one selection list.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=22)** Let's add a new row to the database.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=25)** For the skew I'll fill in SOAP001.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=30)** The product name is Olive Oil Bath Soap.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=35)** We'll put it into the Bath and Beauty products category.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=38)** The size is eight ounces and the price is 599.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=42)** Let's press the Run Query button and the page returns the message that our row is inserted and it confirms the values that we submitted.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=50)** And if you go back and then scroll up to query number three, we can run a select query against everything in the bath and beauty products category.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=61)** And at the bottom, we should see our new product that we just entered.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=65)** So our form is working.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=66)** Let's go ahead and go back and take a look at how it works.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=71)** The process of inserting a row of data into the table uses the same general principles as modifying the where class of the select query.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=81)** We're using form controls to post values back to the web server.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=85)** The web server then incorporates those values into a database query.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=90)** The only difference here is that we're posting multiple values at once.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=94)** Let's go back into the exercise files again and take a look at the code.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=97)** I'm going to go into the PHP web server folder, two trees, and then open up index.php in my code editor.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=107)** This time I'm going to scroll down and we'll take a look at lines 72 through 88.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=114)** Here are our five form controls.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=118)** Most of them are simple text boxes so they have an input type of text.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=122)** They all have names though.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=124)** The first one is the sku_value, the second one is the name_value.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=129)** Then we have our drop-down list for the category_id_value with the three selections inside of it.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=134)** Next, we have the text box for the size_value and a text box for the price_value.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=140)** These all become variables when the user fills them in and they're posted to the web server.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=146)** Now we can return back to the PHP script to see how they're used.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=151)** In the script, we're going to set up the same database connection that we've always been using here with the db connection variable.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=157)** Then we'll prepare our query.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=160)** The SQL command that we're going to execute is an INSERT_INTO command.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=164)** So we're going to insert a row into the inventory.products table and we'll supply values for each of the five columns.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=171)** The values themselves get placeholder variables numbered one through five.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=177)** This is because we don't yet know what data is going into the table.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=181)** That completes the prepared query.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=184)** Finally, we'll fill in the missing values and execute the query with the pg_execute function.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=189)** The variables that were posted by the end user are identified in the same order that they're used in the prepared query.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=197)** So dollar sign one gets replaced with sku_value.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=201)** Dollar sign two gets replaced with name_value.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=205)** That takes all the values coming out of the form and puts them into the insert into command.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=210)** This completes the query and the database server is able to correctly write everything to a new row in the products table.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=217)** Now, at this point, the data entry is complete.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=220)** We don't technically need to return anything to the end user, but it is nice to have some sort of confirmation.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=227)** The next portion of the code reiterate what just happened and tells the end user that the insert was successful.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=235)** It creates a few lines that echo out the same values that the user posted through the form and that were incorporated into the query.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=243)** Of course, the insert command might not be successful, for instance, if the user tries to add a value that violates a table constraint such as a duplicated primary key or a text value when an integer is expected.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=256)** Should that happen, we also have the if else logic to return an error message.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=261)** In fact, we can see the error message if we try and enter in the same soap product again.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=265)** Let me scroll up here where we still have the same values that we filled in a moment ago and I'm just going to try and run this query again.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=272)** This time PostgreSQL complaints that I duplicate primary key value is given.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=276)** So it can't add the new row.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=279)** Let me go back, we'll try and change this up a little bit.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=282)** I'll change this sku to SOAP002, but this time instead of a size eight, I'll type in a size large.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=290)** Once again, I'll run the query and we get a different error message.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=294)** This time the error says that it was expecting an integer but we supplied a text string.
>
> **[5:00](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=300)** This completes our first project working with PHP and PostgreSQL.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=306)** You've seen how the servers communicate with each other using functions, how to format tabular data that's returned from select queries and how don't use form controls to post information back to the server so that it can be used to create customized SQL queries.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-application-development/add-data-to-a-table-with-form-controls?u=76281980&t=322)** These are all solid building blocks that make up the core foundation of any online web application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (1), function (1)
> **Code Identifiers:** sku_value (2), name_value (2), category_id_value (1), size_value (1), price_value (1)
> **Env Vars:** php (3), sql (2), soap001 (1), insert_into (1), soap002 (1)
> **CLI Commands:** php (4), make (1)
> **UI Navigation:** scroll up (2), scroll down (1)
> **Analogies:** for instance (1), such as (1)
> **File Paths:** index.php (1)
> **Exercise Files:** exercise files (1)


### 3. SQL Server and ASP.NET Core

#### What is ASP.NET Core?
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=0)** - [Narrator] It's time to change gears and turn our attention to our second project.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=5)** This time, we're going to focus on SQL Server and a web server technology called [ASP.NET](https://ASP.NET) Core.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=13)** While PHP data objects, or PDO, does have support for connecting to SQL Server databases through specialized drivers and functions, it's more common that SQL Server databases are paired with other Microsoft technologies.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=29)** [ASP.NET](https://ASP.NET) Core is a web framework that takes a different approach to the development of web applications.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=37)** It's open source and unlike the older [ASP.NET](https://ASP.NET) that it replaces, Core is a full rewrite that brings cross-platform support, so it's a solid framework for building web apps no matter what operating system you work on.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=53)** The [ASP.NET](https://ASP.NET) Core framework takes a very modular approach to creating web apps.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=58)** You can think of it as a write once, use everywhere philosophy.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=63)** The three main components, models, views, and controllers, all hook together to create the finished application.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=71)** This modular design makes testing and development easier, but it does spread functionality out across multiple files that all link and reference each other.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=82)** Because of this modular design, when developing an [ASP.NET](https://ASP.NET) Core web app, you're almost certainly going to want to use the Visual Studio IDE, or Integrated Development Environment.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=94)** Visual Studio is available for Windows and Mac OS.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=99)** This will allow you to take advantage of starter projects and templates that help automate the connection of these different components across multiple files.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=109)** So what is a model, a view, or a controller?
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=113)** The controller class can be thought of as the application's logic layer.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=117)** It handles requests from the client's browser and works with data from the model.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=123)** It also determines which views to send back to the client and how to format them.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=128)** Views make up the presentation layer or the user interface that the client sees.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=133)** They organize and format data that's passed in from the controllers.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=138)** And models are representations of the data.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=141)** They read and store data in the database and enforce the business logic that's placed on the data.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=147)** So those are the building blocks that make up an [ASP.NET](https://ASP.NET) Core web application.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-application-development/what-is-asp-dot-net-core?u=76281980&t=153)** Next, we're going to set up a new server, connect a SQL Server database, and see how all of these components work together.

> [!info]- Semantic Content
>
> **Env Vars:** asp (6), net (6), sql (4), php (1), pdo (1)
> **URLs:** [asp.net](https://asp.net) (6)
> **CLI Commands:** make (2), php (1)
> **Definitions:** is a  (3)
> **Tools:** visual studio (2)
> **Code Keywords:** interface (1)
> **Analogies:** think of it as (1)
> **Prerequisites:** set up (1)

#### Create the ASP.NET Core web server with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=0)** - [Instructor] To create our [ASP.NET](https://ASP.NET) Core web app, we already know that we need two components, a web server and a database server.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=9)** We're going to leverage Docker again to compartmentalize everything and make it easy to manage.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=14)** But let's take a different approach from what we did with the PHP project.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=20)** In the first project we created a network then created each server container in that network, we also had to log into the PHP web server to install some additional software drivers.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=31)** We did all of this by running multiple commands in sequence.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=36)** Docker has a very useful feature called compose that will allow us to combine multiple steps into one.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=43)** This makes it much easier to set up applications that require multiple containers working together.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=50)** In the exercise files chapter three folder you'll find the project folder, [ASP.NET](https://ASP.NET).
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=58)** This folder contains all of our project files.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=61)** Now there's three files that I want to focus on.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=65)** Docker-compose.yml, the Dockerfile and entrypoint.sh.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=71)** Let's go ahead and open up all three of these inside of our code editor.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=77)** First let's review the Dockerfile.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=80)** This adds up our main working environment.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=82)** It starts by specifying the image that our container will be built form.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=87)** In this case the Microsoft/dotnet/SDK version 5.0.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=92)** It then lists out additional commands to run on the container to configure it.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=97)** First, we copy all of the project files into the containers app folder.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=101)** Then we set the working directory within the container.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=105)** Next, we run two commands to configure the dotnet server and expose a port.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=110)** And finally we call another script, the entrypoint.shell script.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=115)** If you look at that shell script you'll see that it really doesn't contain that much.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=119)** We have a couple of commands here that are run to start up the dotnet server and the SQL Server container.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=126)** Finally, it let's review the Docker compose YML file.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=130)** This one defines the additional services that our application requires.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=134)** We're setting up two services here a web service and a database service.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=139)** The web service was already defined in the Dockerfile, so we just needs to know what ports to map from our local computer into the container.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=148)** In this project, we'll be connecting to the [ASP.NET](https://ASP.NET) web server on port 8,000.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=155)** The web service depends on the database service and you see that on line number eight, so let's take a look at that service.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=162)** The database container will use the latest version of the SQL Server 2019 image.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=168)** We then have the password for the SA account, Adam123456.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=173)** And the parameter that accepts the end user licensing agreement.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=178)** Finally, our SQL Server container will be accessible from our local computer on port 1450.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=185)** So these three files work together to set up and configure everything that we need for our application.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=192)** All we need to do is kick off the process.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=195)** Let's go ahead and close Visual Studio Code here and we'll take a look inside of the chapter three folder and find the SQL Server setup text file.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=203)** The commands that you need to run on your terminal are all written out here in this file.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=209)** But there's really only one step to setting everything up, I'll close this file down and then open up my PowerShell or terminal application.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=218)** Then we need to switch into the ASP NET project folder.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=223)** I'll type it in the CD and actually let me minimize this.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=226)** And I'll just drag that folder in to my PowerShell window to type in that file path.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=232)** Okay, that'll switch our context into that folder, the ASP NET folder.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=236)** Next I'll run Docker dash compose build.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=242)** This will download the images if you don't have them already and configure all of the services.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=247)** You'll want to run this command once to compose the Docker images or after making any changes to the apps project files.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=255)** Since one of the steps is to copy the project files into the web server.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=260)** So this'll just take a couple of minutes to complete, so we'll just let it do its thing.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=265)** Once it finishes it'll return you back into your command prompt and I'll just type CLS to clear the screen, return back up to the top.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=273)** Once the containers are built you can start everything up.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=276)** To do that we run Docker dash compose up.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=280)** You'll run this command whenever you want to start up the servers.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=283)** For instance, if you reboot your computer or after shutting down the web server.
>
> **[4:51](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=291)** When you get to this screen that has a couple of informational messages you'll know that everything is up and running.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=297)** You'll need to leave the terminal window open in order to maintain the servers.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=301)** When you are done working you'll come back to this window and press Control + C to shut down the servers.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=307)** And there's a message about that right here on this line.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=310)** So I'm going to minimize this window and just leave it open and then we can open up our web browser.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=317)** I'll navigate to local host call in 8,000.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=322)** That'll connect to our [ASP.NET](https://ASP.NET) Core web server and you should see this page.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=328)** At this point the web server is up and running and displaying the files from our project.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=333)** You can use the navigation menu at the top to click to the different pages.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=336)** For instance, I'll click over here to Hello World.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=339)** But if you try and go to the customer's page you're going to get a database error.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=344)** It tells me that I can't connect to the Two Trees database.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=347)** The SQL Server container is set up but we haven't yet created this database.
>
> **[5:52](https://www.linkedin.com/learning/database-foundations-application-development/create-the-asp-dot-net-core-web-server-with-docker?u=76281980&t=352)** So we'll tackle that next.

> [!info]- Semantic Content
>
> **Env Vars:** asp (6), net (6), sql (5), php (2), sdk (1)
> **CLI Commands:** docker (7), dotnet (3), php (2), find (2), make (1)
> **Code Keywords:** let (8), finally, (2), switch (2), require (1), this. (1)
> **Prerequisites:** configure (4), set up (3), install (1), setup (1), you'll need (1)
> **Tools:** terminal (3), powershell (2), visual studio (1), command prompt (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **File Paths:** docker-compose.yml (1), entrypoint.sh (1)
> **Ports:** port 8 (1), port 1450 (1)

#### Add a database to SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=0)** - We need to add our two trees database to the SQL server instance.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=5)** There are two different ways that we can do that using either our graphical management client, Azure data studio or we can use the command line.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=13)** Let's take a look at both methods.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=16)** I'm going to minimize the web browser here and take a look inside of the chapter three folder of the exercise files here.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=22)** We have the two trees.SQL file.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=25)** Let me open that up inside of my code editor.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=28)** Now this script is going to go through and create the two trees database.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=32)** Then create the customer table inside of that database and finally insert some rows of data into the customer table.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=39)** I'm going to press control A on my keyboard to select everything and then copy that to my clipboard.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=45)** Let me go ahead and close out of the code editor now.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=48)** So let's see the graphical user interface method first.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=51)** I'm going to open up Azure data studio, then we'll create a new connection.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=57)** So click on this icon here with a little server and the plus icon.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=59)** That'll open up the connection sidebar.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=62)** We'll connect to a Microsoft SQL server connection and the server will be local hosts.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=68)** We'll use a SQL login, the SA system administrator account with a password Adam 123456.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=79)** I'll choose the option to remember the password.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=81)** Let's go ahead and give this a name.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=82)** I'll call it SQL server [asp.net](https://asp.net).
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=87)** Then we'll click over to the advanced tab.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=90)** Here we'll put in the port that we set up when we configured the Docker container.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=94)** Let me scroll down until I find the port section.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=97)** And the port that we enabled was 1450.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=100)** Press okay.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=101)** And then press the connect button and it should connect into our SQL server instance.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=107)** At this point, I can right click on the server name here, choose new query.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=112)** Then I can paste in the text of our script and press the run button to execute it.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=117)** That'll go through and create the two trees database and fill in all the data.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=121)** Now I'm not actually going to run this script here because I want to show a different method for doing the same thing.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=126)** So I'm actually going to close out of this tab and not save any changes.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=130)** In fact I can close all of these other tabs as well.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=133)** The other way to do the same thing is on the command line.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=136)** Let me go ahead and minimize Azure data studio.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=139)** Now we already have a command line or a PowerShell window open.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=142)** That's got our running server inside of it.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=144)** So I don't want to mess with this window.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=146)** What I do want to do though is open up a second window.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=149)** So I'll open up another PowerShell window.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=153)** Then, we need to review what Docker containers we currently have running.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=157)** I'll run Docker PS.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=160)** That shows me I currently have four containers.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=162)** We have the two for our PHP example running right there.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=165)** The PHP web server and the PG DB server.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=169)** The two new ones that we just created are ASP net web one and ASP net DB one.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=175)** The first one is obviously the web server and the second one is the database server.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=180)** I need to copy that SQL script into my database server.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=185)** We can do that with Docker CP.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=188)** Then I need the file path to the SQL file.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=191)** Let me minimize this here.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=193)** And I'll find the two trees.SQL file and just drag it in.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=198)** That'll put to the path right here.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=200)** So we'll say Docker CP the file path to two trees.SQL.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=205)** Then I want to copy that into my ASP net DB one server.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=212)** I'm just going to put it at the root folder.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=214)** So I'll say colon and then a forward slash.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=217)** Press enter and that'll copy the file into the container.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=220)** Next, we need to login to the container.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=225)** We do that with Docker EXEC-IT, the container name ASP net DB one And I'll use the bash shell.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=236)** That puts me into the container at the root folder.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=238)** And now I need to run SQL command in order to execute the SQL script on the database server.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=245)** The SQL command tool can be found at /opt/MSSQL-tools/bin/SQL CMD.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=260)** So that locates the tool.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=261)** Then I just need a few parameters.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=263)** - U will specify the user account SA,
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=267)** - P we'll type in the password.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=270)** Adam, 123456 with a capital A.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=275)** Then -I will import a script file.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=279)** And the file that I want to import is at the root folder.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=281)** So forward slash and it's two trees.SQL.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=286)** When you import a script file, it'll automatically run on the SQL server instance.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=292)** So when I press enter, I get the message that the database context was changed to two trees and that six rows were affected.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=299)** That's the insert of the data into the customer table.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=303)** At this point, we're done importing our data.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=305)** So I can just say exit.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=307)** That'll remove me from the Docker container.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=309)** And it puts me back at my root folder.
>
> **[5:11](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=311)** At this point, we're done with this PowerShell window.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=313)** We'll go ahead and close it down.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=316)** Now, if you want to verify that the database was in fact created, we can go back into Azure data studio.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=322)** I still have the server connection here.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=324)** Let's go ahead and open up the databases folder.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=326)** You might need you right click on it and choose refresh.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=328)** But, there is the two trees database.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=331)** There is the customer table and I'll right click and choose select top 1000 to see the data.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=337)** So there's all of our customers that we entered into the table.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=341)** Now that our database is in place we can return back to our web browser.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=347)** And I'll refresh this page.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-application-development/add-a-database-to-sql-server?u=76281980&t=350)** It should then successfully make a connection into the SQL server database and reveal my customer data here inside of the web browser.

> [!info]- Semantic Content
>
> **Env Vars:** sql (17), asp (4), php (2), exec (1), mssql (1)
> **CLI Commands:** docker (7), find (2), php (2), cp (2), make (1)
> **Code Keywords:** let (9), interface (1)
> **Tools:** command line (3), powershell (3), bash (1)
> **File Paths:** trees.sql (4)
> **UI Navigation:** click on (3), scroll down (1)
> **Speakers:** - we (1), - u (1), - p (1)
> **URLs:** [asp.net](https://asp.net) (1)

#### ASP.NET modularity
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=0)** - [Narrator] We can get a feel for the modularity of an [ASP.NET](https://ASP.NET) Core application by taking a look at a view object.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=8)** Let's click back to the homepage of our application by clicking on the home link here in the navigation bar.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=14)** Now, this page has a number of distinct sections.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=17)** First at the top, we have the page title, which on my computer reads Home Page-Two Trees.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=24)** At the top of the page, we have a navigation bar with links to the other views of the site.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=30)** The main portion of the screen includes the welcome line, a message that the server is running, as well as a link to the documentation.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=38)** At the bottom, we have a common footer that, like the navigation bar at the top, will appear on every page.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=45)** As we navigate to the different pages of the site, you'll notice that the navigation bar at the top and the footer at the bottom stay the same.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=52)** The only content that's actually changing when you move from one page to the other is the central portion of the screen and the title that appears up here.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=61)** With that in mind, let's dig into the project files.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=64)** I'm going to minimize my browser and go into the exercise files chapter three folder and then go into the [ASP.NET](https://ASP.NET) folder.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=71)** Here, we have all of the files that combine to make up the site.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=75)** You can see that there's a lot of them if you start perusing the different folders.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=80)** The three main folders that we have are the controllers, the models, and the views.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=86)** Let's go into the views folder and then into the home folder.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=89)** Here, we'll find an index file.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=92)** This is the initial page that's shown when we open the site in the browser.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=96)** Let me right-click and open that in my code editor.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=105)** Now, you might be surprised at how short it is.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=108)** At the top, we have a custom title for the page that just reads Home Page.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=112)** Then we have a few lines that control the central portion of the screen.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=116)** We have the line for the welcome message, the line that tells me that the server is running, and the line with the link to the documentation.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=124)** And that's all we have in this file.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=126)** There's no information about the navigation bar that appears at the top of the page or the footer that appears at the bottom.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=132)** That's because those elements are shared across all pages in the site.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=137)** In keeping with the write once use everywhere philosophy, those elements are defined separately and then combined together when the page is accessed by the user.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=147)** So let's close our text editor here and go back into the views folder.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=152)** And this time, we'll go into the shared folder.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=155)** Here, we'll find a file called _Layout.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=158)** I'm going to right-click on that and open that in the code editor.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=164)** This file contains all of the common elements.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=167)** At the top of the page, we have the normal HTML opening tags including the head information.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=172)** Notice that on this line number six that we have the title, but it's incomplete.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=177)** It just has the text dash Two Trees.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=181)** The full title is constructed from the current view's title data, which is defined in the other document.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=187)** In the body section of the page, we have all of the information that sets up the navigation bar.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=193)** It's all of these lines here starting on line 11 and coming down towards line 30.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=197)** Let me scroll down on this page a little bit until I get to line 34.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=202)** Here, we find this function called RenderBody.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=205)** This will get replaced with a code from the current view.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=209)** Finally, at the bottom, we have all of the lines that define the common page footer.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=214)** So these are all of the pieces for our initial view.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=217)** Let's go back into the browser.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=221)** The homepage that we're seeing is made up of code from multiple files on the server.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=227)** Now, most browsers have an option for viewing the source code in the webpage so let's see what that says.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=232)** In the Edge browser that I'm using, I can right-click and choose View Page Source.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=238)** This is the code that my browser actually receives from the web server.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=243)** On line number six, you'll see that we get the full page title.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=246)** It says Home Page-Two Trees.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=249)** We now know that this Home Page portion is the title coming from the index file and the Two Trees portion is defined in the layout file.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=258)** We then have all of the navigation bar lines.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=262)** Starting on line 36, we have the three pieces of text coming out of the index file: the welcome message, the message that the server is running, and the link to the documentation.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=272)** Then we go back to the layout file to get the footer details at the bottom.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=276)** In the browser, it looks like we have a single complete document, but we know by inspecting the source files that the [ASP.NET](https://ASP.NET) server is piecing everything together from information split across multiple files.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=289)** So this should give you a taste for how an [ASP.NET](https://ASP.NET) server works and why our project has so many files and folders for what appears to be a simple site.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=299)** Each file holds a single component of the site: views for presentation, controllers for logic, and models for data.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-application-development/asp-dot-net-modularity?u=76281980&t=308)** And then the server combines the pieces together whenever they're needed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (1), finally, (1)
> **Env Vars:** asp (4), net (4), html (1)
> **UI Navigation:** right-click (3), navigate to (1), open the (1), scroll down (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **Documentation:** the documentation (3)
> **Exercise Files:** exercise files (1), source code (1)
> **Cross-References:** go back to (1)

#### Model tabular data
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=0)** - [Instructor] The modular design of an [asp.net](https://asp.net) site also applies to the database connection, and it controls how data is used throughout the entire site.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=10)** To see how this works, we need to dig into the project files again.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=14)** Now a word of warning before we get started, this is going to be a bit of a journey through a number of different files.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=21)** To simplify things, I'm going to open the entire aspnet folder inside of Visual Studio.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=29)** This will allow me to open and explore the different files without having to go back and forth to the desktop.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=35)** On the left-hand side of the screen, I get this explorer panel, and I can expand the aspnet folder, and see all the different folders and files that the project contains.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=45)** Now your text editor may or may not support this kind of project tree view.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=50)** If it doesn't, that's fine.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=52)** You can open up each file one at a time.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=56)** Okay, I'm going to start by closing the Welcome tab.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=58)** And then I'm going to find the appsettings.json file that's in the root aspnet folder.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=66)** In this file on line 11 is where our initial database connection string is stored.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=72)** The server we're connecting to is named Db.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=75)** You might also use an IP address here.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=78)** This specific name Db is coming from our Docker network.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=83)** If you open up the Docker-compose.yaml file, you'll recall that we created two services, one for web and one for Db.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=92)** So this is where the server name is coming from there that we're using in our project.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=98)** Back in the appsettings.json file, we can read the rest of the connection string.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=102)** So we're connecting to the Db server.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=105)** We're connecting to the database TwoTrees using the user account sa with a password Adam123456.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=114)** We also have another parameter over here on the far right that just says MultipleActiveResultSets=true.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=120)** All of this makes up the server connection string.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=123)** And it's stored as AppDbContext.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=127)** Next, we need to go to another file.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=130)** Let's look at the Startup.cs file.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=132)** It's also in the root aspnet folder.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=136)** Down on lines 26 and 27 is what we want to look at.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=140)** This is where we use the connection string.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=143)** Here, various services are added to the application.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=147)** We add a database context using the SqlServer connector, as opposed to some other database platform.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=154)** This is where the connection string AppDbContext is used.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=159)** So now this creates a connection to the database server, and the TwoTrees database.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=164)** But we don't yet know anything about the tables that the database contains.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=169)** For that, we need to go to another file.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=171)** Let's open up the Data folder.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=174)** Inside of there, we'll find ApplicationDbContext.cs.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=178)** This is a class file, and here it outlines what tables are available inside of our database connection.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=186)** Our database context contains just a single table called Customer.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=191)** On line 14 we're identifying the table, and registering it as an available data set.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=197)** Okay, now we need to tell the application the columns that this table contains.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=202)** If you guessed that we're going to another file, you're absolutely correct.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=207)** Let's head into the Models folder.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=209)** Here, you'll find a model for the customer table.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=212)** Let's open that up.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=214)** In the Customer.cs file, we finally get to a full description of every column in the customer table.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=222)** The public string for each column is the name of the column as it exists in the SQL Server database.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=229)** So we have column names customer_id, company, address, city.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=234)** And if I scroll down we have state and zip.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=237)** The display name property of each column is how it's presented in any views that reference these data columns.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=244)** So on the web application, you won't see customer_id, in all lowercase letters, you'll see Customer ID with proper capitalization.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=255)** We also have some constraints on the data that'll help the application determine if a user is entering valid information when entering or editing values in the web app.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=265)** In the zip code, for example, it has a maximum length of five characters, and a minimum length of five characters.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=273)** In other words, the zip code must be exactly five characters long.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=278)** When a user is entering data through the web form, the [asp.net](https://asp.net) server will be able to validate that data without having to send an insert query to the database, and wait for a potential error message to come back if the submitted value doesn't fit the requirements.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=294)** Other columns have a regular expression pattern that the data must match in order to be validated.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=301)** For example, the Customer ID must have two capital letters followed by three digits.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=308)** This helps encode business rules in the logic of the application.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=312)** We can test this out by going back into our browser.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=316)** From the main page at localhost:8000, click on the Customer's link.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=322)** This displays all of the rows from the customer's table In our SQL Server database.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=327)** You can click the Edit link on the right side of any of these rows.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=331)** We'll just click on the Edit link for Flavorville.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=334)** Now we can try and update the data that's in the SQL Server database.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=339)** Let's come down here to the zip code, and you'll notice if I try and type in additional digits, it won't let you type in more than five.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=345)** If I try and type in less than five digits, I'll just make this say 503, then click to a different text box, I'll immediately get an error message.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=355)** This tells me that the zip code must be five characters long.
>
> **[5:59](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=359)** If we try and edit the Customer ID, let's change it to 12345, and click off of it, you'll get a different error message.
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=368)** This tells me that our value doesn't match the required pattern.
>
> **[6:12](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=372)** Okay, I'll admit that this error isn't very clear, and it's not going to make much sense to most users, but you get the idea.
>
> **[6:19](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=379)** The data validation is handled immediately by the application right here in the browser before we even get to the point where we're trying to update the database.
>
> **[6:29](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=389)** Because these types of data constraints are defined in the site's data model, we can be more proactive in helping end users enter valid information.
>
> **[6:39](https://www.linkedin.com/learning/database-foundations-application-development/model-tabular-data?u=76281980&t=399)** And because these kinds of settings are defined a single time in the application, they will apply everywhere the data model is used throughout the entire site.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (1)
> **CLI Commands:** find (3), docker (2), make (2)
> **UI Navigation:** go to (2), click on (2), open the (1), scroll down (1)
> **File Paths:** appsettings.json (2), docker-compose.yaml (1)
> **URLs:** [asp.net](https://asp.net) (2), [localhost:8000](https://localhost:8000) (1)
> **Env Vars:** sql (3)
> **Code Identifiers:** customer_id (2)
> **Definitions:** is a  (1), in other words (1)

#### Controller classes
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=0)** - [Instructor] We've talked about views and we've explored the apps data model.
>
> **[0:04](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=4)** Now let's turn our attention to the controller class.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=7)** That controller tells the database what to do and it creates the bridge between the user interface presented by the views and the data model.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=17)** In our app, there are five different views that are used to work with the customer data from the two trees database.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=24)** The main page that we're looking at right now lists out all of the rows that the table contains.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=30)** This is the index or the default page in the customer view.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=35)** There's an option on this page to filter the results by a two letter state abbreviation.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=41)** Let's type in the abbreviation oh for Ohio and press the Filter button.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=46)** This sends a query to the database using a where class and we see just the two rows from the state of Ohio.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=53)** To get back to the full list, just press the Filter button again with no input.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=58)** At the top of the page, there's a link to create a new row in the table.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=62)** This opens up the create view.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=64)** The create view includes all the form fields so that the end user can fill in their new values and then press the Create button at the bottom to send the data to the database.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=74)** Let's press the Back to List button.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=77)** The third view is for editing a row and we have links for that on every row in the index view, let's go ahead and click on one of them and we'll see what that view looks like.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=87)** This one is set up identically to the create view.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=89)** We have the same text boxes, the only difference is that we have a Save button at the bottom instead of Create.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=96)** We'll go Back to List and we'll take a look at the details view.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=100)** This view presents the single row of data in a slightly different arrangement.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=104)** We'll go back to List and we'll check out the last one, the Delete view.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=109)** This view is arranged like the details screen but there's a delete button that's been added.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=114)** So those are the five views that we have for working with our data.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=118)** The index, create, edit, delete, and details views.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=124)** Let's go into the project files now and see how the connections are made from these five views to the database through the controller.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=134)** I have the ASP net folder open inside of my code editor, then I'll go into the Views folder, we'll find the folder for customers and here are the five views, create, delete, details, edit and index.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=148)** Let's start with the index file.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=150)** The index page displays all of the tabular data.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=153)** Starting down online number 20, we start building an HTML table.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=158)** This is very similar to what we did when formatting data in the PHP project.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=164)** The first row of the table is the header row.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=167)** This is where we'll list out all the column names.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=170)** The text that's shown is the display name for each column.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=174)** We saw where that was coming from in the previous movie.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=177)** If you go into the models folder and open up the customer model, you'll see that every column in the data model has a unique display name.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=186)** This is where we're getting the really nicely formatted display names in the table results.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=191)** Let's close this down and go back to the index file.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=195)** After the header file down on line number 45, we start a loop.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=200)** In PHP, we use the four-loop here inside of [asp.net](https://asp.net), it's a foreach loop.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=206)** This will go through and read each row from the database and create a new HTML table row every time the program goes through the loop.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=215)** Again, this is exactly the same process that we took with PHP.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=219)** So that's the index view.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=221)** It only needs to read information out of the database.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=224)** So there's no opportunity to send data to the database with this view.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=229)** The create view on the other hand is kind of the opposite.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=232)** Let's open that one up.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=234)** Here, we don't need to read any data out of the database first, we only send values when we enter in a new row.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=241)** The page is set up as an HTML form, starting online 13.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=246)** The form we'll use the create action.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=249)** Each column in the table has its own label that's coming from the column name there as well as an input text box.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=257)** There's also a data validation line to display the red validation text.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=262)** Once again, this is very similar to what we saw in the PHP example when working with form controls.
>
> **[4:29](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=269)** At the bottom of this page, all the way down, on line 46, we have the submit button.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=275)** This will post all of the values that the user entered back to the [asp.net](https://asp.net) server using the create action that was specified back up on line 13.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=285)** Now there's no code here that tells the server what to do with those values.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=289)** That's where the controller comes in.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=292)** In the controller's folder, you'll find the customer's controller file.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=296)** Let's open that one up.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=298)** This lists out all of the different things that you can do with the customer data model.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=303)** This code is written in the C sharp programming language.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=306)** So I don't expect you to have any familiarity with it but we can still read through portions of it and look for some key words to help understand how it's working.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=315)** Line 22 starts with a bit of code that says what to do on the index view.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=320)** Let's scroll down to it.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=322)** Here is where it's displaying the data from the database for the index view and using the state name in a Whereclass, if one is provided.
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=332)** Since data is only coming out of the database for this view, it's called a GET.
>
> **[5:38](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=338)** There is no post for the index view since we can't use it to send data back to the database.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=344)** On line number 60, we have the code that defines what to do in the create view.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=351)** When creating a new row, we don't need to get any information from the database.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=355)** So line 63 just says, return the view there's nothing else that it needs to do.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=360)** What we can do on the create view though, is post data to the database.
>
> **[6:05](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=365)** So on line number 66, we start that bit of code.
>
> **[6:09](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=369)** When posting data to the database, it takes all of these supplied values.
>
> **[6:14](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=374)** First checks, if they're valid and then adds them into the customer table.
>
> **[6:19](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=379)** Now we didn't look at the edit view but we can see what that controller does starting on line number 82.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=386)** It makes sense that the edit view would need to get information from the database first to display all of the original values.
>
> **[6:34](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=394)** So there's a section for getting those values using a specific integer id value.
>
> **[6:40](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=400)** This will pull the details that we're going to edit for the specific row of data.
>
> **[6:44](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=404)** Then after the user makes changes, those new values need to get posted back to the database.
>
> **[6:50](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=410)** And we see that starting on line number 98.
>
> **[6:55](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=415)** Here is where we take all of those inputs and send it back up to the database.
>
> **[6:59](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=419)** So that's a good overview of how the controller class is organized for the two trees customer table.
>
> **[7:05](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=425)** If you want to dig a little bit further, you can find the code for the delete view starting on line 133 and the code for the details view back up on line 42.
>
> **[7:16](https://www.linkedin.com/learning/database-foundations-application-development/controller-classes?u=76281980&t=436)** This one file holds all of the instructions for passing information between the user interface views and the data model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), delete (5), interface (2), class. (1)
> **Env Vars:** php (4), html (3), asp (1)
> **CLI Commands:** php (4), find (3)
> **Cross-References:** go back to (3)
> **URLs:** [asp.net](https://asp.net) (2)
> **UI Navigation:** click on (1), scroll down (1)
> **Prerequisites:** set up (2)
> **Analogies:** similar to (1)

#### URL segments
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=0)** - [Instructor] One of the neat things about an [asp.net](https://asp.net) web application is that the controller classes encode useful information right into the URL segments of the page.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=12)** From the Two Trees Customer Data page, click on any of the edit links.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=18)** The URL in the browser will show Customers/Edit/ and then an ID number of the row that you chose.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=26)** You can easily navigate to the edit page for other rows in the table simply by changing this ID number here in the address bar.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=34)** Let me change it to Customers/Edit/6.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=38)** I'll press enter and that takes me to the edit page for Delish Food.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=43)** You can also use this method to get to other views.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=47)** For instance, I'll change it to Customers/Details/3.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=53)** This takes me to the Customer Detail page for Bread Express.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=58)** This is great because end users can bookmark and navigate directly to a specific action for any record in the table.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=66)** This also works for our filter back on the index page.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=69)** Let's click the back to list link, then I'll filter our list to OH for all of the rows in the state of Ohio.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=77)** You'll notice that the URL bar now says customers?statename=oh.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=83)** We can change this to statename=pa for Pennsylvania.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=88)** This reveals the one customer from the state of Pennsylvania.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=92)** Now we could bookmark this page if we are specifically interested in this filtered list of customers.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=98)** This mapping of URL segments to the controller class is handled by one of the files in the project.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=104)** Let's take a look at it.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=107)** In the aspnet folder, you're going to find a file called Startup.cs.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=113)** Let's open that up in our text editor.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=116)** Way down at the bottom on line number 52, you'll find the line that's doing all the work.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=122)** This shows us the endpoint mappings.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=125)** The default pattern that we're using shows the controller that's used and it uses the home controller if none is specified, then we have a slash followed by the action that it's going to use.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=135)** If no action is applied, it'll use the default index action.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=140)** Finally, we have another slash followed by an ID number for a specific data table row.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=145)** This means that the URL, Customers/Details/3, mapped to the customer's controller, the details action and the row number three.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=157)** So that wraps up our exploration of how an [asp.net](https://asp.net) core site works with a SQL server database.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=164)** When you're done exploring the site and all of the different activities, you can go back into your open PowerShell window or terminal window and press the control+C keyboard shortcut to shut down all of the servers.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=176)** You can always start them back up again by coming to the aspnet folder and running docker/compose up.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=185)** It goes without saying that a full exploration of [asp.net](https://asp.net) would require some additional background in the C sharp programming language and the Visual Studio IDE.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-application-development/url-segments?u=76281980&t=196)** But I hope this has given you some insight into how databases function in an online web app and gives you some ideas about where you could take your database skills next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), require (1), function (1)
> **Env Vars:** url (5), sql (1), ide (1)
> **CLI Commands:** find (2), docker (1)
> **URLs:** [asp.net](https://asp.net) (3)
> **Tools:** powershell (1), terminal (1), visual studio (1)
> **UI Navigation:** click on (1), navigate to (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on reaching the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=3)** And if you joined me through all five courses in this series, then you deserve an extra special round of applause.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=10)** You've come a long way from your first steps in the world of relational databases, all the way up to this introduction to application development and integrating databases with other related technologies.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=22)** You should now have the confidence to dive straight in to any relational database platform that you want to work with.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=29)** If this course has piqued your interest in expanding your skills into app development, then I'd encourage you to check out some of the introductory content in the languages that we explored.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=39)** Learning PHP and [ASP.NET](https://ASP.NET) MVC 5 Essential Training are two great courses to get started with, or if you're feeling ambitious consider tackling the learning path Become a Programmer: Foundations.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=55)** Once again, I'm Adam Wilbert.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-application-development/next-steps?u=76281980&t=57)** I'm glad you've taken this journey with me and I look forward to our next encounter.

> [!info]- Semantic Content
>
> **Env Vars:** php (1), asp (1), net (1), mvc (1)
> **CLI Commands:** php (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Database Foundations- From Concepts to Applications]]
← [[Database Foundations- Administration]] | **5 of 5**

### In [[Advance Your Database Administration Skills]]
← [[Database Foundations- Administration]] | **5 of 11** | [[SQL Server Fundamentals- Master Basic Query Techniques]] →

## Appears In

- [[Database Foundations- From Concepts to Applications]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python- Practical Database Examples]] — Database Development
- [[Introduction to Couchbase]] — Database Development
- [[Vector Databases in Practice- Deep Dive]] — Database Development
- [[Databases for Node.js Developers]] — Database Development
- [[Programming Foundations Databases]] — Database Development

---

[↑ Back to top](#)