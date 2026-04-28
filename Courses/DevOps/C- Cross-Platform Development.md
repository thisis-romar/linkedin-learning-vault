---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: c-sharp-cross-platform-development
url: "https://www.linkedin.com/learning/c-sharp-cross-platform-development"
duration_minutes: 51
duration: 51m
level: Intermediate
updated: 8/4/2023
learners: 45099
skills:
  - C#
  - Cross-platform Development
exercise_files: true
github: "https://github.com/LinkedInLearning/c-sharp-cross-platform-development-4407398"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFN2A5GUfqgSw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691011036247?e=2147483647&amp;v=beta&amp;t=ykMwwWkISC0KMJQlfocVsyiEAGVFnGuuFutt19P4m0c"
linkedin_topic: DevOps
learning_paths:
  - '[[Elevating C- Skills- Building Robust Applications]]'
prev_courses:
  - '[[C- Exception and Error Handling]]'
next_courses:
  - '[[C- Unit Testing with xUnit]]'
path_nav: '[{"path":"Elevating C- Skills- Building Robust Applications","position":6,"total":8,"prev":"C- Exception and Error Handling","next":"C- Unit Testing with xUnit"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/mobile-development
  - topic/software-development
  - skill/c
  - skill/cross-platform-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Cross-Platform%20Development.md)

![C# Cross-Platform Development](https://media.licdn.com/dms/image/v2/D560DAQFN2A5GUfqgSw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691011036247?e=2147483647&amp;v=beta&amp;t=ykMwwWkISC0KMJQlfocVsyiEAGVFnGuuFutt19P4m0c)

# C# Cross-Platform Development

> In this course, learn the fundamentals of building cross-platform C# apps that work on Android, macOS/iOS, and Windows while leveraging .NET MAUI. Instructor Jesse Freeman shows you core concepts like setting up a cross-platform dev environment, building simple UI, navigating between app screens (pages), and implementing MVVM concepts with data binding XAML. Follow along with Jesse as he shows you

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development) | 51m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Setting Up** (2 videos)
- **3. 2. Building the Core Application** (3 videos)
- **4. 3. Refactoring and Enhancing the Application** (4 videos)
- **5. 4. Integrating a Database** (2 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Getting started with .NET
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980&t=1)** - Hi, my name is Jesse Freeman, and in this course you'll build a cross platform, note taking console app called HelloNote, using .NET7 and Visual Studio.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980&t=11)** You'll be introduced to essential .NET development practices such as the command pattern, create, read, update, and delete operations, data modeling with EF Core, and setting up an SQLite database.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980&t=23)** In addition, we'll also explore more advanced features like establishing relationships between data models, and implementing a search functionality.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980&t=31)** By the end of this course, you'll have a solid understanding of .NET application development.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980&t=36)** Now let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** net (2), net7 (1)
> **Code Keywords:** delete (1), let (1)
> **Tools:** visual studio (1)
> **Analogies:** such as (1)
> **Speakers:** - hi (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980&t=0)** - [Instructor] Before taking this course, it'd be beneficial to have a basic understanding of C# programming and its syntax, including knowledge of variables, loops, conditions, and functions.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980&t=9)** You should also be familiar with object-oriented programming concepts such as classes and inheritance.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980&t=15)** It's also recommended to have a basic understanding of databases, particularly relational databases, and knowledge of link for querying data in C#.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980&t=24)** Finally, experience with console applications and command line would prove helpful context for understanding how the interactions are handled in this course.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980&t=31)** If you're new to any of these concepts, consider exploring introductory resources in these areas first to build a strong foundation.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Setting Up

#### Installing .NET 7 SDK
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=0)** - [Instructor] If you haven't already downloaded Visual Studio for the Mac, go to Microsoft's website for Visual Studio, click the download button and wait for the installer file to download.
>
> **[0:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=11)** Once downloaded, locate the installer and double click on it to launch it.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=16)** Then file the instructions provided by the installer to complete the installation process.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=21)** Using Visual Studio is perhaps the easiest way to get .NET 7 set up since it's a complete IDE and development environment.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=30)** Once you have Visual Studio installed, or if you already had it installed, make sure to check that you have the correct version of the .NET SDK.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=41)** In Visual Studio for the Mac we can do this by going into the preference menu, scroll down to the SDK Locations, .NET Core, and here you'll see we have two versions of .NET installed, 7.0 and 6.0.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=57)** For this course we're going to use 7.0.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=60)** If you're familiar with the command line or you want to use Visual Studio Code, installing the .NET CLI is probably your best option.
>
> **[1:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=69)** At this point, you should have everything ready for us to create our first project.

> [!info]- Semantic Content
>
> **Env Vars:** net (5), sdk (2), ide (1), cli (1)
> **Tools:** visual studio (6), command line (1)
> **Versions:** 7.0 (2), 6.0 (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating a .NET Core application
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=0)** - [Narrator] Let's go ahead and create our new project.
>
> **[0:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=3)** We're going to select the Console Application from the Template menu, and click Continue.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=9)** We'll make sure to .NET 7 as our target framework.
>
> **[0:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=13)** And here, we're going to name the project Hello Note App.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=17)** Now for the solution name, let's remove the word app.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=21)** And as you can see here, we now have a master folder for the Hello Note solution.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=27)** And then we have a separate folder for the Hello Note application.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=30)** One of the benefits of setting up a project this way is that you can also add additional projects to the Hello Note folder, including unit tests if you're planning on doing that for your own development.
>
> **[0:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=42)** Once you've selected a location for where you want to put your project, click Create.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=48)** Now let's take a look at the solution panel.
>
> **[0:52](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=52)** Here you'll see our Hello Note solution and our Hello Note App project.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=57)** For this course, we're going to need to add two packages using the NuGet package manager.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=64)** Let's right click on the dependencies and go to Manage NuGet packages.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=70)** Here, we'll need to filter it out.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=71)** So let's type in Microsoft.EntityFrameworkCore, SQLite.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=82)** Once you've found the package, check it and then let's add one other package.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=89)** Again, we'll type out Microsoft.EntityFrameworkCore.design
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=97)** and then check this as well.
>
> **[1:40](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=100)** Now we have two packages selected.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=102)** Let's add the packages to our project.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=106)** Accept the license agreement for both of the packages.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=110)** And now you've created your first .NET core console application using Visual Studio and you've added the necessary packages to start working with SQLite and the entity framework Core.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (1)
> **UI Navigation:** select the (1), click on (1), go to (1)
> **Env Vars:** net (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Exercise Files:** template (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)


### 3. 2. Building the Core Application

#### Creating the note model
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=0)** - [Instructor] Now it's time for us to create our note model and the database context.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=5)** We'll start by creating a new class called Note.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=8)** You can do this by right-clicking on the project, going to add, and selecting new class.
>
> **[0:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=14)** Type in the name Note and hit return.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=18)** This will automatically create a new class with a namespace for our application, HelloNoteApp and create a constructor.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=25)** We don't need the constructor so we can delete this, and let's add the three main properties we'll need to represent our note.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=33)** First, we'll add a property for ID.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=36)** This will be the unique ID for each note in the database.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=41)** Next, we'll create a property for the title.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=44)** Each note will have its own unique title.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=49)** And finally, we'll add a property for content.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=53)** This will store the text that each note contains.
>
> **[1:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=60)** Let's save our class and move over to creating the database context.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=65)** Just like before, we're going to use the empty class template and we're going to name this AppDbContext and create the file.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=75)** We want this class to inherit from the Db context class provided by the entity framework core.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=81)** The Db context class is the main class that coordinates the entity framework functionality for a given data model.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=87)** In this case, our data model is going to be the note.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=91)** Let's go ahead and extend the class.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=94)** We'll also need to import the entity framework core.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=98)** So let's do that by selecting use Microsoft Entity Framework Core and Visual Studio will add it to the top of our class.
>
> **[1:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=106)** Next, we need to create a property that'll store the note table in our database.
>
> **[1:52](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=112)** Let's add this above the constructor.
>
> **[1:55](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=115)** Here we're going to create a note's property and we'll use the type DbSet and cast it to note.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=125)** And then we'll use a getter and setter to finish the property.
>
> **[2:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=129)** The DbSet represents a collection for a given entity within the model and is the primary method for interaction with the database.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=138)** Now let's create a new property.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=142)** We're going to call this DbPath and it'll be a string and we're only going to set a getter.
>
> **[2:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=149)** This will store the path that we're about to generate for where the database is stored inside of our application's project folder.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=157)** Now let's go into the constructor and figure out the folder and the path for our database.
>
> **[2:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=163)** Let's create our first variable for the folder.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=166)** And we're going to use Environment.SpecialFolder.LocalApplicationData.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=173)** This refers to the file path for the user's local application data.
>
> **[2:58](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=178)** Since we want this to be a cross-platform application, we can't hard code this.
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=183)** We'll use .net to locate these special folders based on its own environment.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=189)** Next, we'll create a variable for the path.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=193)** We'll do this by calling Environment.GetFolderPath and passing in the value of folder that we previously set.
>
> **[3:23](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=203)** And finally, we're able to set our DbPath and we're going to make this equal to Path.Join.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=211)** We'll pass in the path that we just created and we'll concatenate it with notes.db, which will be the name of our database.
>
> **[3:40](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=220)** There's one last thing we need to do before we finish up this class.
>
> **[3:45](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=225)** Let's go ahead and override the on configuring method from the DB context base class.
>
> **[3:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=233)** This is a protected method, so we'll use protected override.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=238)** The return type is void and we'll override the default on configuring method.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=244)** Visual Studio is going to auto-complete this for us.
>
> **[4:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=247)** So let's go ahead and clean this up a bit.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=251)** We're going to rename the parameter options and we're simply going to map it to Options.UseSQLLite.
>
> **[4:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=262)** And we're going to pass it in a data source.
>
> **[4:25](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=265)** And the data source is going to be the DbPath that we created in the constructor, at this point, we have everything we need to connect to our database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), class. (5), override (3), finally, (2), pass (2)
> **Tools:** visual studio (2)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Establishing the SQLite database connection
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=0)** - [Instructor] Now it's time for us to establish the SQL database connection and set up the migrations.
>
> **[0:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=7)** The Entity Framework Core tools is a powerful package that includes command line tools for database operations, such as migrations and updates.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=16)** In order to install it, we're going to need to do this on the command line.
>
> **[0:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=20)** In Visual Studio, go to View and select Terminal.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=26)** We can also pin this here for the time being while we add in the rest of the commands we need to configure our tools.
>
> **[0:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=34)** We'll start by typing dotnet tool install --global dotnet-ef.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=45)** This command installs the Entity Framework Core tools globally on your machine.
>
> **[0:50](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=50)** Once the command completes successfully, you'll be able to use the .NET EF command from any terminal window inside of Visual Studio.
>
> **[0:58](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=58)** Now that the Entity Framework Core tools are installed, let's create the initial migration.
>
> **[1:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=65)** First, we're going to need to navigate to our project folder.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=71)** Now let's run the following from the command line.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=74)** Type out dotnet ef migrations add InitialCreate.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=81)** This command generates a migration based on the current state of your database context and entity models.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=87)** The migration contains the instructions on how to create the database schema.
>
> **[1:32](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=92)** Now that the migration is created, let's apply it to the database.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=97)** Type out dotnet ef database update.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=103)** This command applies the migration to the database, creating the necessary tables in the process.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=109)** After following these steps, you've now successfully installed the Entity Framework Core tools, created a migration based on your database context and models and applied the migration to the database to create the necessary tables.

> [!info]- Semantic Content
>
> **Tools:** command line (3), visual studio (2), terminal (2)
> **CLI Commands:** dotnet (4)
> **Prerequisites:** install (2), set up (1), configure (1)
> **Code Keywords:** let (3)
> **Env Vars:** sql (1), net (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Building with the command pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=0)** - [Instructor] Now let's take a look at how we can list all the notes that are inside of the database.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=5)** In order to do this, we're going to use the command design pattern in order to implement a list note command.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=12)** Let's go back to our project folder and create a new folder called Commands.
>
> **[0:16](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=16)** We can do this by right clicking on the project, going to Add and selecting New Folder.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=24)** Organizing your project by creating separate directories for commands makes the code base more manageable and readable.
>
> **[0:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=30)** It's common practice in larger projects to keep similar types of code together.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=36)** Now inside of our Commands folder, we're going to create a new interface called ICommand.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=41)** Now, in this step, instead of selecting the Empty Class template, we're going to use the Empty Interface, and we're going to call this ICommand.
>
> **[0:51](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=51)** As you can see, Visual Studios automatically put this in our HelloNoteApp.Commands namespace, since it's inside of the Commands folder.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=61)** Now let's go ahead and create the method that all of our commands will share.
>
> **[1:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=67)** Interfaces are a common tool in object-oriented programming to ensure that certain classes contain particular methods and properties.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=74)** Interfaces are used extensively in the command pattern to provide a common contract for similar classes.
>
> **[1:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=81)** The execute method we just added will be the main function for each command.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=86)** This is where the primary action for each command will be coded.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=91)** Now let's create our first command that implements this interface.
>
> **[1:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=95)** In the Commands folder, create a new class called ListNotesCommand.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=102)** Let's start by having this class extend the ICommand interface.
>
> **[1:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=108)** You'll see that we get an error, and that's because we haven't implemented the execute method yet.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=114)** Let's go ahead and create it for now, and we'll come back and add the code into it later.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=122)** Now you can see that the error goes away since we've added a public execute method, which is part of the ICommand interface contract.
>
> **[2:12](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=132)** Now let's go back to the top of our class and create a dbContext, so that we can interact with our database.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=140)** Here we'll create a private, read-only property that is typed to the appDbContext we created earlier, and we'll call this property _dbContext.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=153)** Since we're going to pass this into our constructor, we can leave it as read-only, since it won't be modified at runtime.
>
> **[2:40](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=160)** Now inside of our constructor, let's accept a reference to the dbContext.
>
> **[2:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=166)** Now that we have a reference to the dbContext that's being passed in the constructor, we can set it to our _dbContext property.
>
> **[2:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=174)** All that's left to do now is to create the code that executes when we call this command.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=181)** We'll start by creating a notes variable in order to store all of our notes.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=187)** We'll do this by referencing the _dbContext.Notes property and calling ToList.
>
> **[3:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=195)** Next, let's make sure that there's actually notes to display.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=200)** Here we're going to check the count of the notes list, and if it's equal to zero, we are going to write Console.WriteLine and display "No notes to list."
>
> **[3:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=213)** We'll also call return, which will stop the execution of this command.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=218)** Now let's do a foreach loop over any of the notes that we found and display them to the console.
>
> **[3:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=226)** Here we'll write foreach.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=228)** We'll set a variable called note and loop through in notes.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=234)** Now we can write console.WriteLine, and we're going to pass it in a string with the title, and we'll substitute the token for note.Title, which we're getting from each note in our loop.
>
> **[4:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=250)** This is a common implementation of the execute method by querying all the notes from the database and printing their details to the console.
>
> **[4:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=258)** The last thing we need to do is add a way to call each of our commands, and we're going to do this by going back into our program's CS file.
>
> **[4:27](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=267)** Let's delete all the code that was added when we created our project.
>
> **[4:32](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=272)** And the first thing we're going to do is set up the database context at the top of our file.
>
> **[4:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=277)** So at the top of our class, let's bring in the HelloNoteApp namespace by typing using HelloNoteApp.
>
> **[4:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=286)** Again, we're going to use the using keyword, and we're going to create a var dbContext and set it equal to a new AppDbContext instance.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=299)** Now it's time for us to register our list command, so that the application is able to use it.
>
> **[5:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=306)** Let's do this by creating a new variable called var commands and we're going to set it equal to a new dictionary with a key type string and a value ICommand, which is our interface.
>
> **[5:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=321)** In order to do this though, we're going to need to import our ICommand namespace.
>
> **[5:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=329)** Now let's pre-configure our dictionary with our first command.
>
> **[5:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=334)** We're going to do this by passing in a key list as a string and a value of a new instance of the ListNotesCommand, which needs a reference to the dbContext.
>
> **[5:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=348)** Now it's time for us to write the main loop for our application.
>
> **[5:51](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=351)** Here we'll create a while command that's always going to run, because we're setting it to true.
>
> **[5:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=357)** After each loop, we're going to clear the console, So let's type Console.Clear.
>
> **[6:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=364)** And since this is the first time running it, let's add a welcome message.
>
> **[6:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=369)** And since this is the beginning of our loop, let's go ahead and call Console.WriteLine and pass in a string, "Welcome to the HelloNote App."
>
> **[6:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=381)** Now let's ask for a command.
>
> **[6:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=384)** Here, we'll call Console.WriteLine, and we'll pass in the string, "What would you like to do?"
>
> **[6:32](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=392)** Enter a command.
>
> **[6:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=395)** And now we need to record the command by creating a new variable called var commandName and setting it equal to the response we get back from the console.
>
> **[6:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=408)** We can do this by typing Console.ReadLine.
>
> **[6:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=413)** Now when the user enters a command, we'll capture it, and we can use a condition to go through and decide what to do for each command.
>
> **[7:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=423)** The first thing we're going to do is look for a hard-coded command called quit in order for us to break the loop.
>
> **[7:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=433)** So now, if a user types in quit, the application will automatically quit, because we're breaking this while loop.
>
> **[7:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=440)** Now let's go and see if we can pair up the commands that are being passed in to the ones that are registered with our app.
>
> **[7:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=450)** We'll create a condition that tests if the commands .TryGetValue command name exists, we're going to output it to a new variable by using the out keyword var command.
>
> **[7:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=466)** And if the command exists, let's go ahead and execute it.
>
> **[7:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=473)** Once the command is executed, we need to tell the user to continue with the app by pressing any key.
>
> **[8:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=485)** And then we'll listen for a console ready key to continue our while loop and go back to the top where we clear and ask the user what they want to do next.
>
> **[8:16](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=496)** Now let's create an else condition in case a command is not found.
>
> **[8:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=501)** Here we'll write Console.WriteLine, and we're going to pass in a string that says "Unknown command," and we'll pass in the name of the command that we captured earlier.
>
> **[8:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=515)** And again, let's ask the user to press any key, so we can continue back to the beginning of the loop and look for a new command.
>
> **[8:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=528)** This loop is the core of the command line application.
>
> **[8:50](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=530)** It continually prompts the user for commands and executes the corresponding command.
>
> **[8:55](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=535)** If the command is not recognized in the command registry, the user will be notified.
>
> **[9:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=540)** The loop will continue indefinitely until the user types quit.
>
> **[9:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=543)** Let's test our application and see if it works.
>
> **[9:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=548)** Once your application has been built, you can open up the terminal panel for the HelloNoteApp and pin it so it always shows up when our application runs.
>
> **[9:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=558)** Now let's go ahead and type in a command.
>
> **[9:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=561)** We'll type out our list command and see that no notes are able to be listed.
>
> **[9:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=566)** Let's press continue, and now let's enter a command that we haven't set up yet, such as new.
>
> **[9:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=573)** Here you'll see it gives us our unknown command, and then we can press any key to continue.
>
> **[9:39](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=579)** And finally, if we type quit and return, it'll exit out of the application, and Visual Studio will stop running it.
>
> **[9:47](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=587)** With these steps, you successfully built a core structure for your application using the command pattern and implemented a command to list all the notes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), interface (6), pass (6), continue (6), var (4)
> **Code Identifiers:** dbcontext (5), appdbcontext (1), commandname (1)
> **Cross-References:** go back to (3)
> **Tools:** command line (1), terminal (1), visual studio (1)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** we call this (1), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)


### 4. 3. Refactoring and Enhancing the Application

#### Creating a note command
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=0)** - [Instructor] Now let's take a look at how to implement a create note command.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=4)** This command allows the user to create a new note in the HelloNote app.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=8)** We'll be using the command pattern introduced in the previous video.
>
> **[0:12](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=12)** To get started, let's create a new class in our commands folder called CreateNoteCommand.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=22)** Next, we need to implement the ICommand interface.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=29)** And remember to add a public execute method which the ICommand interface requires in order for the compiler to not throw an error.
>
> **[0:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=37)** Now, just like in our previous command, we need to get a reference to the AppDbContext.
>
> **[0:44](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=44)** So at the top of the class, create a private read-only property.
>
> **[0:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=48)** We'll type it to AppDbContext and call it _dbContext.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=57)** Now, let's modify our constructor to accept an AppDbContext reference that we'll call dbContext.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=66)** And in the constructor, we'll simply set the _dbContext to the reference of the dbContext that's passed in when the command is created.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=78)** Now it's time to add all the logic we need in order for this command to work in our execute method.
>
> **[1:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=84)** We'll start by writing some instructions for the user.
>
> **[1:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=89)** We'll do this by calling Console.WriteLine and pass in a string that says, provide a title for your note.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=98)** Now we need to read the response that the user inputs.
>
> **[1:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=103)** We'll do this by creating a new variable called title and we'll call Console.ReadLine.
>
> **[1:50](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=110)** Whatever the user puts in, we'll simply save that value into the title variable and use it later on.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=117)** And now let's ask the user for some content for the note.
>
> **[2:02](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=122)** Here we'll call Console.WriteLine again and pass in the string that says, add the content for your note.
>
> **[2:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=131)** Then we'll create a new variable called content and call Console.ReadLine again.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=139)** Now we have the title and the content for our note.
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=142)** It's time for us to create a new note instance.
>
> **[2:25](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=145)** We'll do this by creating a new variable called note and we'll set it equal to a new note instance.
>
> **[2:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=153)** If you remember, our note model doesn't have any values you can pass into the constructor.
>
> **[2:38](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=158)** So we'll use a little shorthand way of setting properties on a new instance of a class by setting them in line after we create the note instance.
>
> **[2:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=169)** We'll start by setting the note title property equal to the title variable we defined above.
>
> **[2:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=177)** And let's do the same thing for the content.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=181)** Now, when this new note is created, the title and the content will automatically be populated.
>
> **[3:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=186)** Now it's time for us to add our note to the database.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=190)** We'll do this by referencing the _dbContext.Notes property and calling Add, then passing the new note in.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=201)** And then next we'll need to save these changes to the database, which we can do by calling _dbContext.SaveChanges.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=211)** Now let's let the user know that the note has successfully been created by displaying a message on the console.
>
> **[3:38](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=218)** Here we'll call Console.WriteLine and we'll pass in a string.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=224)** Your note was created successfully.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=231)** At this point, our CreateNote command is complete and now we need to register it with our program.
>
> **[3:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=237)** Let's go back into our program class and scroll up to the top where we define our commands.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=244)** We'll add a new command with a key of create and we'll set the value equal to new CreateNoteCommand and pass in the dbContext.
>
> **[4:16](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=256)** Let's go ahead and run our application and see what happens.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=261)** Now let's type in the create command and let's give it a title for our note.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=266)** We'll call this note Hello World and we'll set the content to equal this is our first note.
>
> **[4:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=275)** Now let's hit any key to continue and let's list our notes and see what was added to the database.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=283)** As you can see, our Hello World note is now being displayed.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=288)** Let's go ahead and create a second one.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=291)** We'll set the title of this, the Hello World 2 and we'll make the content this is our second note.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=299)** Once the note has been added to the database, hit return and if you call the list command, you'll see that we now have two notes.
>
> **[5:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=308)** Hello World and Hello World 2.
>
> **[5:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=311)** Now we have the two critical functions we need for our app, being able to create a note and being able to see the notes that we've created.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=320)** Over the next few videos, we'll look at how to read them, update them and delete them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (5), interface (2), public (1), throw (1)
> **Code Identifiers:** dbcontext (3)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Reading a note command
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=0)** - [Instructor] Now in this tutorial, we'll look at how to implement the read note command.
>
> **[0:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=5)** This command will allow the user to read an existing note in the HelloNote application.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=10)** As before, we'll be using the command pattern introduced in the previous videos.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=15)** Let's start by creating our new class, and calling it ReadNoteCommand.
>
> **[0:23](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=23)** Next, we'll implement the ICommand interface.
>
> **[0:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=29)** We'll need to create a public Execute method, just like we did in our previous two commands.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=36)** Now let's go ahead and save a reference to the AppDbContext.
>
> **[0:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=43)** We'll create a private read-only property that is typed to the appDbContext, and is set to the property name _dbContext.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=55)** Next, we'll need to pass in a reference of the AppDbContext, and we'll call the reference dbContext.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=63)** And then finally, let's save the reference to the dbContext to the property we just created.
>
> **[1:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=70)** As you can see, this command, just like the previous two, are set up in a very similar way, and this is by design.
>
> **[1:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=78)** One of the advantages of the command design pattern is that each of the commands will function and structurally look very similar to each other.
>
> **[1:27](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=87)** This allows us to focus solely on the business logic that gets put in the execute method, which is unique to each of these different commands.
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=97)** But since we've already gone ahead and seen an example of how to list a note, we now have some of the basic knowledge we need in order to read and display the note as well.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=107)** So let's go into our execute method, and ask the user what they want to read.
>
> **[1:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=113)** We'll do this by calling Console.WriteLine, and we'll pass in a string that says, "What note do you want to read?"
>
> **[2:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=123)** Now in order to find the note, we're going to need the title.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=126)** So let's create a new variable called title, and we'll set it equal to Console.ReadLine.
>
> **[2:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=134)** Now we need to look up our note, and in order to do this, we're going to use link to filter the note collection to find the first note that matches the title.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=144)** We'll start by creating our variable note, and we'll set it equal to _dbcontext.Notes and then we'll call FirstOrDefault.
>
> **[2:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=156)** We're going to pass an n, and then map it to any value where n.Title equals the title we just captured in the previous line.
>
> **[2:47](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=167)** Now let's create a new condition to test if the note does not equal null.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=173)** If the note exists, we're going to want to display it to the console.
>
> **[2:56](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=176)** We'll do this by creating Console.WriteLine, and we're going to pass in a string that replaces the token with the note instances Title.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=188)** We'll do the same thing for the content.
>
> **[3:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=191)** We'll call console.WriteLine, and in this case, the string we use will have the note.content token.
>
> **[3:19](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=199)** Both of these values will now automatically be populated by any note we found in the previous step.
>
> **[3:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=206)** Now, if we don't find a note, we're going to need to display an error message to the user.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=210)** We'll do this by typing console.WriteLine, and we'll pass in the string "No note was found."
>
> **[3:39](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=219)** At this point, we've created all the logic we need in order for us to read a note.
>
> **[3:44](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=224)** It's time for us to register this command, just like we did with the previous commands in our program class.
>
> **[3:51](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=231)** Now we'll create a new item in the dictionary, where the key is set to read, and the value is set to a new instance of the ReadNoteCommand that also has a reference to the dbContext.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=244)** If we save our work and run our app, we should now be able to read any of the notes we've previously added to the database.
>
> **[4:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=251)** To get started, let's list all of the notes we have in the database first.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=257)** As you can see, we still have our Hello World and Hello World 2 notes.
>
> **[4:23](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=263)** Now let's try to read the first note.
>
> **[4:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=266)** Let's type in the read command, and hit return.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=269)** And now it's going to ask us which note we want to read.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=273)** It's important to make sure that the note name that you supply matches the same exact note casing as the note you've created in the database.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=283)** Here we'll type in Hello World, and when we hit return, we'll see the title and the content.
>
> **[4:51](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=291)** We can now do the same thing for the second note that we've created.
>
> **[4:55](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=295)** As you can see, we're going to try to read the Hello World 2 note.
>
> **[5:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=300)** And since it exists, we'll get the title and the content displayed to the console.
>
> **[5:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=305)** Let's see what happens if we try to read a note that we haven't created yet.
>
> **[5:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=310)** As you can see, I entered in the name My Note, which doesn't exist in the database, and now we get the error that no note was found.
>
> **[5:19](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=319)** At this point, you successfully implemented the read note command in the HelloNote application.
>
> **[5:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=324)** Each of these commands are going to follow a very similar pattern, which allows us to easily extend our application by adding new commands anytime that we implement the ICommand interface, and create the logic we need in order to access the database to manipulate the notes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (5), interface (2), class, (1), public (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** dbcontext (3), appdbcontext (1)
> **Analogies:** just like (3), similar to (1)
> **Warnings:** note that (2)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Updating a note command
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=0)** - [Instructor] Now it's time for us to implement the update note command.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=4)** This command allows the user to update an existing note in the HelloNote application.
>
> **[0:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=9)** We'll continue to apply the command pattern we've used for all the other commands in order to get this to work.
>
> **[0:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=15)** Let's go ahead and create a new class called UpdateNoteCommand.
>
> **[0:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=21)** Just like in our previous commands, let's go ahead and implement the ICommand interface.
>
> **[0:27](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=27)** And then we'll also need to add our public execute method.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=33)** At the top of our class, let's go ahead and create a private readonly property to store the AppDbContext.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=45)** Next, we'll need to get a reference to the AppDbContext in the constructor.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=53)** And finally, we'll set the reference to the private property equal to the instance that's being passed into the constructor.
>
> **[1:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=61)** Now let's move over to the main part of our command, which will be inside of our execute method.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=68)** We'll start by asking the user which note they want to update.
>
> **[1:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=74)** We'll do this by calling Console.WriteLine and pass in the string that says "Please provide the title of the note you wish to update".
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=88)** And just like in the previous commands, we'll go ahead and save the note of the title based on what the user inputs.
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=96)** We'll create a new variable called title and we'll set it equal to the value that Console.ReadLine returns.
>
> **[1:45](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=105)** Now it's time for us to find the note.
>
> **[1:47](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=107)** We'll use the same logic we did in our read note command in order to look for the first or default note that matches the title that the user inputs.
>
> **[1:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=117)** We'll create a new variable called note and we'll call _dbContext.Notes.FirstOrDefault.
>
> **[2:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=126)** And again, we'll map the value of n to anything that's equal to n.Title and the title the user just supplied.
>
> **[2:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=137)** Now let's make sure that a note was found.
>
> **[2:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=140)** We'll do this by creating a new condition to test if the note does not equal null.
>
> **[2:28](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=148)** Now we can ask the user to add new content to the note we've just found.
>
> **[2:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=154)** We'll call Console.WriteLine and pass in the string "Please enter the new content for your note", and next we'll create a new variable called newContent and we'll set it equal to the value that Console.ReadLine returns.
>
> **[2:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=173)** Now let's go ahead and update the notes content with the new content we just received.
>
> **[3:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=180)** Set the value of note.Content equal to the newContent variable.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=187)** And then in order to save our changes, we need to call _dbContent.SaveChanges.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=194)** And now that this has worked, let's go ahead and write Console.WriteLine and we'll pass in the string "Your note was updated successfully".
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=210)** The last thing we need to do is handle the error if no note was found.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=215)** Here we'll create an else condition and then use Console.WriteLine to display the string "No note was found with that title".
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=229)** As you can see, now that we've established a pattern for how each of these commands should work and we've already created the core logic by being able to list a note, create a new note, and read a note, making a change to a note is very easy.
>
> **[4:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=246)** All we need to do now is register our new command with the application and test to see that everything still works.
>
> **[4:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=253)** Now let's add our new command to the dictionary.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=257)** We'll set the key to the value update and we'll set the value to a new UpdateNoteCommand and we'll pass in the dbContext.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=269)** Now let's save and run our app.
>
> **[4:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=273)** Let's go ahead and try to update our first note.
>
> **[4:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=276)** We'll type in the command update and hit Return.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=280)** And then we'll need to type in the exact title of the note we wish to update.
>
> **[4:44](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=284)** We'll edit the Hello World note.
>
> **[4:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=288)** As you can see, the application is now asking us to enter new content for our note.
>
> **[4:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=293)** We'll type in a simple message such as "This is an updated note" and hit Return.
>
> **[4:59](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=299)** And now we get a notification that the note was successfully updated.
>
> **[5:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=303)** Let's hit Return again, and now let's try to read the note.
>
> **[5:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=307)** We'll type in the read command and give it the title Hello World.
>
> **[5:12](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=312)** And now you'll see that our hello World note has been updated and it's displaying the content: This is an updated note.
>
> **[5:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=320)** At this point, you successfully implemented the update note command and the HelloNote application.
>
> **[5:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=326)** The last thing we need to do is look at how to delete a note, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), pass (4), private (2), return. (2), continue (1)
> **Code Identifiers:** newcontent (2), dbcontext (1)
> **Analogies:** just like (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Deleting a note command
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=0)** - [Instructor] Now let's go ahead and implement the DeleteNoteCommand.
>
> **[0:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=4)** This command allows the user to delete an existing note in the HelloNote application.
>
> **[0:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=10)** We'll continue to apply the command pattern and the same process we've done for all the previous commands up until this point.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=18)** Let's start by creating a new DeleteNoteCommand.
>
> **[0:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=24)** Let's go ahead and implement the ICommand interface and let's create our public Execute method.
>
> **[0:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=35)** Now we need to create the property to store a reference to our AppDbContext, and next, we'll need to pass in a reference to the AppDbContext in the constructor.
>
> **[0:53](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=53)** Once we modify the constructor, we'll simply set the _dbContext property equal to the dbContext instant that's passed into the constructor.
>
> **[1:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=64)** Now it's time for us to implement the execute method from the ICommand interface.
>
> **[1:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=68)** This method will contain the logic to delete an existing note.
>
> **[1:12](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=72)** We'll start by calling Console.Writeline and pass in the string Please provide the title of the note you wish to delete.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=86)** So we'll create a variable called title and we'll set it equal to the return value of Console.ReadLine.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=94)** Now that we have the title, it's time for us to search for the notes in our database, just like we've done in the previous two commands.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=102)** We'll create a new variable called note and we'll call _dbContext.Notes.FirstOrDefault and map n over to n.Title equals title.
>
> **[2:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=120)** Now let's create the condition to see if our note exists.
>
> **[2:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=125)** Now that we know that we have a note, let's go over to the _dbContext.Notes property and then call the Remove method and pass in the note that we just found.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=138)** Once we've deleted the note, let's go ahead and save the changes to the database.
>
> **[2:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=144)** We'll do this by calling _dbContext.SaveChanges.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=150)** We'll also need an else condition, and let's go ahead and add in the two messages we'll need for whether you've deleted a note or if the note cannot be found.
>
> **[2:41](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=161)** For the first message, we'll type Console.WriteLine and pass in the string your note was deleted successfully.
>
> **[2:52](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=172)** And finally, in the else condition, let's call Console.WriteLine and we'll pass in the string No note was found with that title.
>
> **[3:05](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=185)** Let's save our work and register this command with the main application.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=193)** We'll add a new value to our dictionary and the key will be delete and the value will be a new instance of the DeleteNoteCommand that we supply the dbContext to.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=205)** Let's save our work and run our app and see if the changes have worked.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=210)** Let's go ahead and list out all the notes we have in our database.
>
> **[3:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=215)** At this point, let's go back and delete the Hello World 2 note since we no longer need it.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=222)** Once we type in the delete command, hit return and we'll need to give it the exact title of the note we wish to delete.
>
> **[3:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=229)** As you can see, the note was successfully deleted and we can press any key to continue.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=234)** Let's try it for a title of a note that doesn't exist.
>
> **[3:58](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=238)** We'll use the delete command and hit return.
>
> **[4:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=240)** And then let's use the same title for the note that we just deleted.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=244)** We'll type out Hello World 2 and hit return.
>
> **[4:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=248)** As you can see, the note's already been deleted, so we've been given the error message that no note was found with that title.
>
> **[4:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=255)** At this point, we successfully implemented the DeleteNoteCommand in our HelloNote application.
>
> **[4:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=261)** We have all of the commands that are needed in order to create, read, update and delete an entry in our database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), delete (9), pass (5), continue (2), interface (2)
> **Warnings:** note that (3)
> **Code Identifiers:** dbcontext (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Integrating a Database

#### Implementing note search
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=0)** - Now, it's time for us to implement search capability which will be our last command for application.
>
> **[0:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=6)** We're going to ask the user to input an item to search for, and we're going to look at either a notes title or its content to see if we can find a note that matches.
>
> **[0:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=18)** Let's get started by creating a new search note command class in our commands folder.
>
> **[0:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=26)** And just like before, we'll implement the ICommand interface, and let's create a new public method called Execute.
>
> **[0:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=36)** At the top of the class, we'll create our reference to our app DB context.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=49)** Next, we'll modify our constructor to accept a reference to the app DB context class.
>
> **[0:55](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=55)** And then, we'll set the underscore DB context property equal to the reference we pass into the constructor.
>
> **[1:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=63)** Now that our class is configured, it's time for us to implement the execute method where we'll ask the user to search for a keyword.
>
> **[1:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=71)** At this point, we just prompt for the input and capture it.
>
> **[1:15](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=75)** Let's start by calling console dot right line, and we'll pass in the string that says, please provide a keyword to search for in the notes.
>
> **[1:26](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=86)** Next, we'll capture the keyword by creating a new variable called keyword and setting it to the value that's returned when we call console dot read line.
>
> **[1:38](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=98)** Now that we have the keyword for the user, we can initialize the search process.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=102)** In this step, we'll just write the structure for our link query that we'll use to filter the notes.
>
> **[1:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=109)** Here, we'll create a new variable called, notes query and we'll set it equal to the value of underscore DB context dot notes property.
>
> **[2:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=121)** And then we'll call, where.
>
> **[2:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=124)** And we're going to search for wherever we find n dot title contains the keyword or if n dot content contains the keyword.
>
> **[2:19](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=139)** Now, before we move on, let's set a breakpoint and test our application to see if we actually get a value that's returned to our notes query before we try to display it to the screen.
>
> **[2:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=151)** Make sure to run your application in debug mode, so that the breakpoint will be triggered when we look for the actual keyword.
>
> **[2:39](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=159)** Let's type in search, and as you can see, we just got an error because I forgot to actually add the search to the program.
>
> **[2:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=168)** So let's stop running the app and go back into the program file, and make sure that we add the command to our dictionary.
>
> **[2:55](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=175)** We'll do this by adding a new item to the dictionary using search as the key, and we'll create a new search note command instance as the value and pass in the DB context.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=190)** Now, if we rerun the program in debug mode again, we'll be able to actually search for the notes.
>
> **[3:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=197)** We'll type in search and hit return.
>
> **[3:20](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=200)** And now we see that our search command has properly been registered with the app and it's giving us the message to provide a keyword to search for in the notes.
>
> **[3:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=209)** Let's look for, hello.
>
> **[3:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=211)** As you can see, our breakpoint has been triggered, and if we scroll down, we can roll over the notes query and inspect what's been returned.
>
> **[3:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=223)** If we take a look at the results view, here you'll be able to see the Content, ID, and Title of the note we were searching for that matched the keyword we supplied.
>
> **[3:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=234)** At this point, we have all the logic we need to search our notes, and in the next video, we'll use this information to display the notes that were found to the user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (3), for, (2), interface (1), public (1)
> **CLI Commands:** find (2), make (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - now (1)

#### Executing search and displaying results
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=0)** - [Instructor] In this video, we're going to execute the LINQ query that we prepared in the previous video and present the results to the user.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=8)** If no matching notes are found, we'll also display a message to tell the user that we couldn't find the note based on the keyword they supplied.
>
> **[0:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=17)** In the previous video, we used a breakpoint to test that the query was working.
>
> **[0:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=22)** Let's go ahead and remove that breakpoint, if you still have it, and finish our command with the rest of the code we need to display the notes that have been found.
>
> **[0:32](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=32)** We'll start by creating a new variable called notes, and we're going to set it equal to notesQuery.ToList.
>
> **[0:41](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=41)** ToList is a LINQ method that forces immediate query execution and returns a list that contains the query results.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=49)** This method is often used when it's important to cache the results of a query.
>
> **[0:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=54)** Now we need to make sure that we actually have some notes to display.
>
> **[0:57](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=57)** So let's create a new condition, and we'll test to see if the notes list contains any values.
>
> **[1:06](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=66)** And if this is true, now it's time for us to use a foreach loop and iterate over each note in the notes list.
>
> **[1:16](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=76)** First, we'll call Console.WriteLine, and we're going to supply a string that displays the title, and we'll use a token to replace the value with note.Title.
>
> **[1:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=91)** Next, we'll call Console.WriteLine, and we'll display the content and replace the token with the value of the note.Content property.
>
> **[1:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=102)** And finally, we'll add a new line by calling Console.WriteLine, and we'll add some dashes to separate each of the search results from the others in the list.
>
> **[1:54](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=114)** Now what we need to do is create the else condition to display an error message if no notes have been found and then call Console.WriteLine and pass in the string: No notes found with provided keyword.
>
> **[2:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=133)** At this point, we should have everything we need to display any notes we find by the keyword.
>
> **[2:18](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=138)** So let's go ahead and run our app and add a few more notes so that we have some examples of how to search through different notes based on the keyword and see how many we can list at the same time.
>
> **[2:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=150)** First, let's search for the note we know exists.
>
> **[2:35](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=155)** We'll type in search and hit Return.
>
> **[2:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=157)** Now the app is asking us to provide the keyword, so let's use world.
>
> **[2:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=162)** We'll hit Return, and we can see that the note that's in the database that says Hello World has now been displayed.
>
> **[2:50](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=170)** Let's go ahead and clear this and create a few different notes that have a mix between using the word world in the title and the content to see if they'll show up.
>
> **[3:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=181)** Let's create a note, the title, World War 2, and let's set the content to something like this.
>
> **[3:14](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=194)** Now let's create two more notes, and now let's make sure that the last note doesn't have the word world in it.
>
> **[3:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=201)** Let's create a new note with the title Remember This.
>
> **[3:25](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=205)** And for the content, we can add something like this.
>
> **[3:30](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=210)** And finally, let's add the last note without the word world in the title or the content.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=222)** Now that we've added our notes, let's quickly list them to see if they're all in the database.
>
> **[3:48](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=228)** One thing you may notice when you're testing your app is that if you don't have enough room to display all the content in the console, you can either scroll up or you can increase the size of this panel in order to see everything at once.
>
> **[4:04](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=244)** As you can see, we now have four notes: Hello World, World War 2, Remember This, and My Last Note.
>
> **[4:12](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=252)** Let's hit Return and do a search for the word world.
>
> **[4:17](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=257)** As you can see, only one note came up, and that is the one that has the content that says The world is yours.
>
> **[4:24](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=264)** The reason for this is that our keyword is case-sensitive.
>
> **[4:29](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=269)** So if we were to type in World with a capital W and hit Return, you'll see that other two notes come up, the ones that are the title, Hello World and World War 2.
>
> **[4:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=282)** At this point, we now have a working search command inside of our application.
>
> **[4:47](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=287)** And while there's a lot we can do to refine this to make it a little easier to use, especially if you want to ignore case, this gives you the fundamental knowledge you need in order to continue to modify and add new commands to your application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (3), finally, (2), return, (2), pass (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** linq (2)
> **Cross-References:** previous video (2)
> **Code Identifiers:** notesquery (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)


### 6. Conclusion

#### Leveling up with .NET
> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=1)** - Well done on completing the course.
>
> **[0:02](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=2)** You now have a solid foundation in building a console-based, note-taking app in C#.
>
> **[0:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=8)** For your next steps, consider enhancing the application with note-tagging functionality, explore .Net's CLI options to deploy your app on various platforms, and you may also want to add a graphical user interface using Microsoft's .Net multi-platform app UI.
>
> **[0:25](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=25)** This will take your app to the next level and will give you practice with building multi-platform applications using C#.
>
> **[0:31](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=31)** Keep exploring and pushing your boundaries.
>
> **[0:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=33)** There's so much more to learn.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1)
> **Env Vars:** cli (1)
> **Speakers:** - well (1)


## Instructor

- [[Jesse Freeman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/c-sharp-cross-platform-development-4407398)

## Skills Covered

- C#
- Cross-platform Development

## Path Context

### In [[Elevating C- Skills- Building Robust Applications]]
← [[C- Exception and Error Handling]] | **6 of 8** | [[C- Unit Testing with xUnit]] →

## Appears In

- [[Elevating C- Skills- Building Robust Applications]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Kotlin Multiplatform Development]] — Cross-platform Development
- [[React Native Ecosystem and Workflow]] — Cross-platform Development
- [[Nail Your C- Interview]] — C#

---

[↑ Back to top](#)