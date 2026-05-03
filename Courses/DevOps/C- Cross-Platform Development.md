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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/C-%20Cross-Platform%20Development.md)

![C# Cross-Platform Development](https://media.licdn.com/dms/image/v2/D560DAQFN2A5GUfqgSw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691011036247?e=2147483647&amp;v=beta&amp;t=ykMwwWkISC0KMJQlfocVsyiEAGVFnGuuFutt19P4m0c)

# C# Cross-Platform Development

> In this course, learn the fundamentals of building cross-platform C# apps that work on Android, macOS/iOS, and Windows while leveraging .NET MAUI. Instructor Jesse Freeman shows you core concepts like setting up a cross-platform dev environment, building simple UI, navigating between app screens (pages), and implementing MVVM concepts with data binding XAML. Follow along with Jesse as he shows you

> [LinkedIn Learning](https://www.linkedin.com/learning/c-sharp-cross-platform-development) | 51m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with .NET](#getting-started-with-net)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up**](#1-setting-up) (2 videos)
  - [Installing .NET 7 SDK](#installing-net-7-sdk)
  - [Creating a .NET Core application](#creating-a-net-core-application)
- [**2. Building the Core Application**](#2-building-the-core-application) (3 videos)
  - [Creating the note model](#creating-the-note-model)
  - [Establishing the SQLite database connection](#establishing-the-sqlite-database-connection)
  - [Building with the command pattern](#building-with-the-command-pattern)
- [**3. Refactoring and Enhancing the Application**](#3-refactoring-and-enhancing-the-application) (4 videos)
  - [Creating a note command](#creating-a-note-command)
  - [Reading a note command](#reading-a-note-command)
  - [Updating a note command](#updating-a-note-command)
  - [Deleting a note command](#deleting-a-note-command)
- [**4. Integrating a Database**](#4-integrating-a-database) (2 videos)
  - [Implementing note search](#implementing-note-search)
  - [Executing search and displaying results](#executing-search-and-displaying-results)
- [**Conclusion**](#conclusion) (1 videos)
  - [Leveling up with .NET](#leveling-up-with-net)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with .NET](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/getting-started-with-dot-net?u=76281980&t=1)** - Hi, my name is Jesse Freeman, and in this course you'll build a cross platform, note taking console app called HelloNote, using .NET7 and Visual Studio. You'll be introduced to essential .NET development practices such as the command pattern, create, read, update, and delete operations, [[Data Modeling]] with EF Core, and setting up an SQLite database. In addition, we'll also explore more advanced features like establishing relationships between data models, and implementing a search functionality. By the end of this course, you'll have a solid understanding of .NET [[Application Development]]. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Modeling]] (1), [[Application Development]] (1)
> **Env Vars:** net (2), net7 (1)
> **Tools:** visual studio (1)
> **Analogies:** such as (1)
> **Speakers:** - hi (1)

#### [What you should know](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/what-you-should-know?u=76281980&t=0)** - [Instructor] Before taking this course, it'd be beneficial to have a basic understanding of C# programming and its syntax, including knowledge of variables, loops, conditions, and functions. You should also be familiar with [[Object-Oriented Programming (OOP)|object-oriented programming]] concepts such as classes and inheritance. It's also recommended to have a basic understanding of [[Databases]], particularly [[Relational Databases]], and knowledge of link for querying data in C#. Finally, experience with console applications and command line would prove helpful context for understanding how the interactions are handled in this course. If you're new to any of these concepts, consider exploring introductory resources in these areas first to build a strong foundation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Databases]] (1), [[Relational Databases]] (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing .NET 7 SDK](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/installing-dot-net-7-sdk?u=76281980&t=0)** - [Instructor] If you haven't already downloaded Visual Studio for the Mac, go to [[Microsoft]]'s website for Visual Studio, click the download button and wait for the installer file to download. Once downloaded, locate the installer and double click on it to launch it. Then file the instructions provided by the installer to complete the installation process. Using Visual Studio is perhaps the easiest way to get .NET 7 set up since it's a complete IDE and development environment. Once you have Visual Studio installed, or if you already had it installed, make sure to check that you have the correct version of the .NET SDK. In Visual Studio for the Mac we can do this by going into the preference menu, scroll down to the SDK Locations, .NET Core, and here you'll see we have two versions of .NET installed, 7.0 and 6.0. For this course we're going to use 7.0. If you're familiar with the command line or you want to use Visual Studio Code, installing the .NET [[CLI]] is probably your best option. At this point, you should have everything ready for us to create our first project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[CLI]] (1)
> **Env Vars:** net (5), sdk (2), ide (1), cli (1)
> **Tools:** visual studio (6), command line (1)
> **Versions:** 7.0 (2), 6.0 (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### [Creating a .NET Core application](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=0)** - [Narrator] Let's go ahead and create our new project. We're going to select the Console Application from the Template menu, and click Continue. We'll make sure to .NET 7 as our target framework. And here, we're going to name the project Hello Note App. Now for the solution name, let's remove the [[Microsoft Word|word]] app. And as you can see here, we now have a master folder for the Hello Note solution. And then we have a separate folder for the Hello Note application. One of the benefits of setting up a project this way is that you can also add additional projects to the Hello Note folder, including unit tests if you're planning on doing that for your own development. Once you've selected a location for where you want to put your project, click Create. Now let's take a look at the solution panel. Here you'll see our Hello Note solution and our Hello Note App project. For this course, we're going to need to add two packages using the NuGet package manager. Let's right click on the dependencies and go to Manage NuGet packages. Here, we'll need to filter it out. So let's type in [[Microsoft]].EntityFrameworkCore, SQLite.
>
> **[1:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=82)** Once you've found the package, check it and then let's add one other package. Again, we'll type out Microsoft.EntityFrameworkCore.design
>
> **[1:37](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-dot-net-core-application?u=76281980&t=97)** and then check this as well. Now we have two packages selected. Let's add the packages to our project. Accept the license agreement for both of the packages. And now you've created your first .NET core console application using Visual Studio and you've added the necessary packages to start working with SQLite and the entity framework Core.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Word|Word]] (1)
> **UI Navigation:** select the (1), click on (1), go to (1)
> **Env Vars:** net (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Exercise Files:** template (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)


### 2. Building the Core Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating the note model](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=0)** - [Instructor] Now it's time for us to create our note model and the database context. We'll start by creating a new class called Note. You can do this by right-clicking on the project, going to add, and selecting new class. Type in the name Note and hit return. This will automatically create a new class with a namespace for our application, HelloNoteApp and create a constructor. We don't need the constructor so we can delete this, and let's add the three main properties we'll need to represent our note. First, we'll add a property for ID. This will be the unique ID for each note in the database. Next, we'll create a property for the title. Each note will have its own unique title. And finally, we'll add a property for content. This will store the text that each note contains. Let's save our class and move over to creating the database context. Just like before, we're going to use the empty class template and we're going to name this AppDbContext and create the file. We want this class to inherit from the Db context class provided by the entity framework core. The Db context class is the main class that coordinates the entity framework functionality for a given data model. In this case, our data model is going to be the note. Let's go ahead and extend the class.
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=94)** We'll also need to import the entity framework core. So let's do that by selecting use [[Microsoft]] Entity Framework Core and Visual Studio will add it to the top of our class. Next, we need to create a property that'll store the note table in our database. Let's add this above the constructor. Here we're going to create a note's property and we'll use the type DbSet and cast it to note. And then we'll use a getter and setter to finish the property. The DbSet represents a collection for a given entity within the model and is the primary method for interaction with the database. Now let's create a new property. We're going to call this DbPath and it'll be a string and we're only going to set a getter. This will store the path that we're about to generate for where the database is stored inside of our application's project folder. Now let's go into the constructor and figure out the folder and the path for our database. Let's create our first variable for the folder. And we're going to use Environment.SpecialFolder.LocalApplicationData. This refers to the file path for the user's local application data. Since we want this to be a cross-platform application, we can't hard code this. We'll use .net to locate these special folders based on its own environment.
>
> **[3:09](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-the-note-model?u=76281980&t=189)** Next, we'll create a variable for the path. We'll do this by calling Environment.GetFolderPath and passing in the value of folder that we previously set. And finally, we're able to set our DbPath and we're going to make this equal to Path.Join. We'll pass in the path that we just created and we'll concatenate it with notes.db, which will be the name of our database. There's one last thing we need to do before we finish up this class. Let's go ahead and override the on configuring method from the DB context base class. This is a protected method, so we'll use protected override. The return type is void and we'll override the default on configuring method. Visual Studio is going to auto-complete this for us. So let's go ahead and clean this up a bit. We're going to rename the parameter options and we're simply going to map it to Options.UseSQLLite. And we're going to pass it in a data source. And the data source is going to be the DbPath that we created in the constructor, at this point, we have everything we need to connect to our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Tools:** visual studio (2)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Establishing the SQLite database connection](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=0)** - [Instructor] Now it's time for us to establish the [[SQL]] database connection and set up the migrations. The Entity Framework Core tools is a powerful package that includes command line tools for database operations, such as migrations and updates. In order to install it, we're going to need to do this on the command line. In Visual Studio, go to View and select Terminal. We can also pin this here for the time being while we add in the [[Representational State Transfer (REST)|rest]] of the commands we need to configure our tools. We'll start by typing dotnet tool install --global dotnet-ef.
>
> **[0:45](https://www.linkedin.com/learning/c-sharp-cross-platform-development/establishing-the-sqlite-database-connection?u=76281980&t=45)** This command installs the Entity Framework Core tools globally on your machine. Once the command completes successfully, you'll be able to use the .NET EF command from any terminal window inside of Visual Studio. Now that the Entity Framework Core tools are installed, let's create the initial migration. First, we're going to need to navigate to our project folder. Now let's run the following from the command line. Type out dotnet ef migrations add InitialCreate. This command generates a migration based on the current state of your database context and entity models. The migration contains the instructions on how to create the database schema. Now that the migration is created, let's apply it to the database. Type out dotnet ef database update. This command applies the migration to the database, creating the necessary tables in the process. After following these steps, you've now successfully installed the Entity Framework Core tools, created a migration based on your database context and models and applied the migration to the database to create the necessary tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** command line (3), visual studio (2), terminal (2)
> **CLI Commands:** dotnet (4)
> **Prerequisites:** install (2), set up (1), configure (1)
> **Env Vars:** sql (1), net (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Building with the command pattern](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=0)** - [Instructor] Now let's take a look at how we can list all the notes that are inside of the database. In order to do this, we're going to use the command design pattern in order to implement a list note command. Let's go back to our project folder and create a new folder called Commands. We can do this by right clicking on the project, going to Add and selecting New Folder. Organizing your project by creating separate directories for commands makes the code base more manageable and readable. It's common practice in larger projects to keep similar types of code together. Now inside of our Commands folder, we're going to create a new interface called ICommand. Now, in this step, instead of selecting the Empty Class template, we're going to use the Empty Interface, and we're going to call this ICommand. As you can see, Visual Studios automatically put this in our HelloNoteApp.Commands namespace, since it's inside of the Commands folder. Now let's go ahead and create the method that all of our commands will share. Interfaces are a common tool in [[Object-Oriented Programming (OOP)|object-oriented programming]] to ensure that certain classes contain particular methods and properties. Interfaces are used extensively in the command pattern to provide a common contract for similar classes. The execute method we just added will be the main function for each command. This is where the primary action for each command will be coded. Now let's create our first command
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=93)** that implements this interface. In the Commands folder, create a new class called ListNotesCommand. Let's start by having this class extend the ICommand interface. You'll see that we get an error, and that's because we haven't implemented the execute method yet. Let's go ahead and create it for now, and we'll come back and add the code into it later. Now you can see that the error goes away since we've added a public execute method, which is part of the ICommand interface contract. Now let's go back to the top of our class and create a dbContext, so that we can interact with our database. Here we'll create a private, read-only property that is typed to the appDbContext we created earlier, and we'll call this property _dbContext. Since we're going to pass this into our constructor, we can leave it as read-only, since it won't be modified at runtime. Now inside of our constructor, let's accept a reference to the dbContext. Now that we have a reference to the dbContext that's being passed in the constructor, we can set it to our _dbContext property. All that's left to do now is to create the code that executes when we call this command. We'll start by creating a notes variable in order to store all of our notes.
>
> **[3:07](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=187)** We'll do this by referencing the _dbContext.Notes property and calling ToList. Next, let's make sure that there's actually notes to display. Here we're going to check the count of the notes list, and if it's equal to zero, we are going to write Console.WriteLine and display "No notes to list." We'll also call return, which will stop the execution of this command. Now let's do a foreach loop over any of the notes that we found and display them to the console. Here we'll write foreach. We'll set a variable called note and loop through in notes. Now we can write console.WriteLine, and we're going to pass it in a string with the title, and we'll substitute the token for note.Title, which we're getting from each note in our loop. This is a common implementation of the execute method by querying all the notes from the database and printing their details to the console. The last thing we need to do is add a way to call each of our commands, and we're going to do this by going back into our program's CS file. Let's delete all the code that was added when we created our project. And the first thing we're going to do is set up the database context at the top of our file. So at the top of our class,
>
> **[4:39](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=279)** let's bring in the HelloNoteApp namespace by typing using HelloNoteApp. Again, we're going to use the using keyword, and we're going to create a var dbContext and set it equal to a new AppDbContext instance. Now it's time for us to register our list command, so that the application is able to use it. Let's do this by creating a new variable called var commands and we're going to set it equal to a new dictionary with a key type string and a value ICommand, which is our interface. In order to do this though, we're going to need to import our ICommand namespace. Now let's pre-configure our dictionary with our first command. We're going to do this by passing in a key list as a string and a value of a new instance of the ListNotesCommand, which needs a reference to the dbContext. Now it's time for us to write the main loop for our application. Here we'll create a while command that's always going to run, because we're setting it to true. After each loop, we're going to clear the console, So let's type Console.Clear. And since this is the first time running it, let's add a welcome message. And since this is the beginning of our loop,
>
> **[6:11](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=371)** let's go ahead and call Console.WriteLine and pass in a string, "Welcome to the HelloNote App." Now let's ask for a command. Here, we'll call Console.WriteLine, and we'll pass in the string, "What would you like to do?" Enter a command. And now we need to record the command by creating a new variable called var commandName and setting it equal to the response we get back from the console. We can do this by typing Console.ReadLine. Now when the user enters a command, we'll capture it, and we can use a condition to go through and decide what to do for each command. The first thing we're going to do is look for a hard-coded command called quit in order for us to break the loop. So now, if a user types in quit, the application will automatically quit, because we're breaking this while loop. Now let's go and see if we can pair up the commands that are being passed in to the ones that are registered with our app. We'll create a condition that tests if the commands .TryGetValue command name exists, we're going to output it to a new variable by using the out keyword var command.
>
> **[7:46](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=466)** And if the command exists, let's go ahead and execute it. Once the command is executed, we need to tell the user to continue with the app by pressing any key. And then we'll listen for a console ready key to continue our while loop and go back to the top where we clear and ask the user what they want to do next. Now let's create an else condition in case a command is not found. Here we'll write Console.WriteLine, and we're going to pass in a string that says "Unknown command," and we'll pass in the name of the command that we captured earlier. And again, let's ask the user to press any key, so we can continue back to the beginning of the loop and look for a new command. This loop is the core of the command line application. It continually prompts the user for commands and executes the corresponding command. If the command is not recognized in the command registry, the user will be notified. The loop will continue indefinitely until the user types quit. Let's test our application and see if it works. Once your application has been built, you can open up the terminal panel for the HelloNoteApp and pin it so it always shows up when our application runs. Now let's go ahead and type in a command.
>
> **[9:21](https://www.linkedin.com/learning/c-sharp-cross-platform-development/building-with-the-command-pattern?u=76281980&t=561)** We'll type out our list command and see that no notes are able to be listed. Let's press continue, and now let's enter a command that we haven't set up yet, such as new. Here you'll see it gives us our unknown command, and then we can press any key to continue. And finally, if we type quit and return, it'll exit out of the application, and Visual Studio will stop running it. With these steps, you successfully built a core structure for your application using the command pattern and implemented a command to list all the notes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **Code Identifiers:** dbcontext (5), appdbcontext (1), commandname (1)
> **Cross-References:** go back to (3)
> **Tools:** command line (1), terminal (1), visual studio (1)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** we call this (1), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)


### 3. Refactoring and Enhancing the Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a note command](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=0)** - [Instructor] Now let's take a look at how to implement a create note command. This command allows the user to create a new note in the HelloNote app. We'll be using the command pattern introduced in the previous video. To get started, let's create a new class in our commands folder called CreateNoteCommand. Next, we need to implement the ICommand interface. And remember to add a public execute method which the ICommand interface requires in order for the compiler to not throw an error. Now, just like in our previous command, we need to get a reference to the AppDbContext. So at the top of the class, create a private read-only property. We'll type it to AppDbContext and call it _dbContext. Now, let's modify our constructor to accept an AppDbContext reference that we'll call dbContext. And in the constructor, we'll simply set the _dbContext to the reference of the dbContext that's passed in when the command is created. Now it's time to add all the logic we need in order for this command to work in our execute method. We'll start by writing some instructions for the user. We'll do this by calling Console.WriteLine and pass in a string that says,
>
> **[1:34](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=94)** provide a title for your note. Now we need to read the response that the user inputs. We'll do this by creating a new variable called title and we'll call Console.ReadLine. Whatever the user puts in, we'll simply save that value into the title variable and use it later on. And now let's ask the user for some content for the note. Here we'll call Console.WriteLine again and pass in the string that says, add the content for your note. Then we'll create a new variable called content and call Console.ReadLine again. Now we have the title and the content for our note. It's time for us to create a new note instance. We'll do this by creating a new variable called note and we'll set it equal to a new note instance. If you remember, our note model doesn't have any values you can pass into the constructor. So we'll use a little shorthand way of setting properties on a new instance of a class by setting them in line after we create the note instance. We'll start by setting the note title property equal to the title variable we defined above. And let's do the same thing for the content. Now, when this new note is created, the title and the content will automatically be populated. Now it's time for us to add our note to the database.
>
> **[3:10](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=190)** We'll do this by referencing the _dbContext.Notes property and calling Add, then passing the new note in. And then next we'll need to save these changes to the database, which we can do by calling _dbContext.SaveChanges. Now let's let the user know that the note has successfully been created by displaying a message on the console. Here we'll call Console.WriteLine and we'll pass in a string. Your note was created successfully. At this point, our CreateNote command is complete and now we need to register it with our program. Let's go back into our program class and scroll up to the top where we define our commands. We'll add a new command with a key of create and we'll set the value equal to new CreateNoteCommand and pass in the dbContext. Let's go ahead and run our application and see what happens. Now let's type in the create command and let's give it a title for our note. We'll call this note Hello World and we'll set the content to equal this is our first note. Now let's hit any key to continue and let's list our notes and see what was added to the database.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/creating-a-note-command?u=76281980&t=283)** As you can see, our Hello World note is now being displayed. Let's go ahead and create a second one. We'll set the title of this, the Hello World 2 and we'll make the content this is our second note. Once the note has been added to the database, hit return and if you call the list command, you'll see that we now have two notes. Hello World and Hello World 2. Now we have the two critical functions we need for our app, being able to create a note and being able to see the notes that we've created. Over the next few videos, we'll look at how to read them, update them and delete them.

> [!info]- Semantic Content
>
> **Code Identifiers:** dbcontext (3)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Reading a note command](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=0)** - [Instructor] Now in this tutorial, we'll look at how to implement the read note command. This command will allow the user to read an existing note in the HelloNote application. As before, we'll be using the command pattern introduced in the previous videos. Let's start by creating our new class, and calling it ReadNoteCommand. Next, we'll implement the ICommand interface. We'll need to create a public Execute method, just like we did in our previous two commands. Now let's go ahead and save a reference to the AppDbContext. We'll create a private read-only property that is typed to the appDbContext, and is set to the property name _dbContext. Next, we'll need to pass in a reference of the AppDbContext, and we'll call the reference dbContext. And then finally, let's save the reference to the dbContext to the property we just created. As you can see, this command, just like the previous two, are set up in a very similar way, and this is by design. One of the advantages of the command design pattern is that each of the commands will function and structurally look very similar to each other. This allows us to focus solely on the business logic that gets put in the execute method,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=93)** which is unique to each of these different commands. But since we've already gone ahead and seen an example of how to list a note, we now have some of the basic knowledge we need in order to read and display the note as well. So let's go into our execute method, and ask the user what they want to read. We'll do this by calling Console.WriteLine, and we'll pass in a string that says, "What note do you want to read?" Now in order to find the note, we're going to need the title. So let's create a new variable called title, and we'll set it equal to Console.ReadLine. Now we need to look up our note, and in order to do this, we're going to use link to filter the note collection to find the first note that matches the title. We'll start by creating our variable note, and we'll set it equal to _dbcontext.Notes and then we'll call FirstOrDefault. We're going to pass an n, and then map it to any value where n.Title equals the title we just captured in the previous line. Now let's create a new condition to test if the note does not equal null. If the note exists, we're going to want to display it to the console. We'll do this by creating Console.WriteLine, and we're going to pass in a string that replaces the token with the note instances Title.
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=188)** We'll do the same thing for the content. We'll call console.WriteLine, and in this case, the string we use will have the note.content token. Both of these values will now automatically be populated by any note we found in the previous step. Now, if we don't find a note, we're going to need to display an error message to the user. We'll do this by typing console.WriteLine, and we'll pass in the string "No note was found." At this point, we've created all the logic we need in order for us to read a note. It's time for us to register this command, just like we did with the previous commands in our program class. Now we'll create a new item in the dictionary, where the key is set to read, and the value is set to a new instance of the ReadNoteCommand that also has a reference to the dbContext. If we save our work and run our app, we should now be able to read any of the notes we've previously added to the database. To get started, let's list all of the notes we have in the database first. As you can see, we still have our Hello World and Hello World 2 notes. Now let's try to read the first note. Let's type in the read command, and hit return. And now it's going to ask us which note we want to read. It's important to make sure that the note name that you supply matches the same exact note casing as the note you've created in the database.
>
> **[4:43](https://www.linkedin.com/learning/c-sharp-cross-platform-development/reading-a-note-command?u=76281980&t=283)** Here we'll type in Hello World, and when we hit return, we'll see the title and the content. We can now do the same thing for the second note that we've created. As you can see, we're going to try to read the Hello World 2 note. And since it exists, we'll get the title and the content displayed to the console. Let's see what happens if we try to read a note that we haven't created yet. As you can see, I entered in the name My Note, which doesn't exist in the database, and now we get the error that no note was found. At this point, you successfully implemented the read note command in the HelloNote application. Each of these commands are going to follow a very similar pattern, which allows us to easily extend our application by adding new commands anytime that we implement the ICommand interface, and create the logic we need in order to access the database to manipulate the notes.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** dbcontext (3), appdbcontext (1)
> **Analogies:** just like (3), similar to (1)
> **Warnings:** note that (2)
> **Best Practices:** the key is (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Updating a note command](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=0)** - [Instructor] Now it's time for us to implement the update note command. This command allows the user to update an existing note in the HelloNote application. We'll continue to apply the command pattern we've used for all the other commands in order to get this to work. Let's go ahead and create a new class called UpdateNoteCommand. Just like in our previous commands, let's go ahead and implement the ICommand interface. And then we'll also need to add our public execute method. At the top of our class, let's go ahead and create a private readonly property to store the AppDbContext. Next, we'll need to get a reference to the AppDbContext in the constructor. And finally, we'll set the reference to the private property equal to the instance that's being passed into the constructor. Now let's move over to the main part of our command, which will be inside of our execute method. We'll start by asking the user which note they want to update. We'll do this by calling Console.WriteLine and pass in the string that says "Please provide the title of the note you wish to update".
>
> **[1:28](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=88)** And just like in the previous commands, we'll go ahead and save the note of the title based on what the user inputs. We'll create a new variable called title and we'll set it equal to the value that Console.ReadLine returns. Now it's time for us to find the note. We'll use the same logic we did in our read note command in order to look for the first or default note that matches the title that the user inputs. We'll create a new variable called note and we'll call _dbContext.Notes.FirstOrDefault. And again, we'll map the value of n to anything that's equal to n.Title and the title the user just supplied. Now let's make sure that a note was found. We'll do this by creating a new condition to test if the note does not equal null. Now we can ask the user to add new content to the note we've just found. We'll call Console.WriteLine and pass in the string "Please enter the new content for your note", and next we'll create a new variable called newContent and we'll set it equal to the value that Console.ReadLine returns. Now let's go ahead and update the notes content with the new content we just received. Set the value of note.Content
>
> **[3:03](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=183)** equal to the newContent variable. And then in order to save our changes, we need to call _dbContent.SaveChanges. And now that this has worked, let's go ahead and write Console.WriteLine and we'll pass in the string "Your note was updated successfully". The last thing we need to do is handle the error if no note was found. Here we'll create an else condition and then use Console.WriteLine to display the string "No note was found with that title". As you can see, now that we've established a pattern for how each of these commands should work and we've already created the core logic by being able to list a note, create a new note, and read a note, making a change to a note is very easy. All we need to do now is register our new command with the application and test to see that everything still works. Now let's add our new command to the dictionary. We'll set the key to the value update and we'll set the value to a new UpdateNoteCommand and we'll pass in the dbContext. Now let's save and run our app. Let's go ahead and try to update our first note. We'll type in the command update and hit Return.
>
> **[4:40](https://www.linkedin.com/learning/c-sharp-cross-platform-development/updating-a-note-command?u=76281980&t=280)** And then we'll need to type in the exact title of the note we wish to update. We'll edit the Hello World note. As you can see, the application is now asking us to enter new content for our note. We'll type in a simple message such as "This is an updated note" and hit Return. And now we get a notification that the note was successfully updated. Let's hit Return again, and now let's try to read the note. We'll type in the read command and give it the title Hello World. And now you'll see that our hello World note has been updated and it's displaying the content: This is an updated note. At this point, you successfully implemented the update note command and the HelloNote application. The last thing we need to do is look at how to delete a note, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** newcontent (2), dbcontext (1)
> **Analogies:** just like (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Deleting a note command](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=0)** - [Instructor] Now let's go ahead and implement the DeleteNoteCommand. This command allows the user to delete an existing note in the HelloNote application. We'll continue to apply the command pattern and the same process we've done for all the previous commands up until this point. Let's start by creating a new DeleteNoteCommand. Let's go ahead and implement the ICommand interface and let's create our public Execute method. Now we need to create the property to store a reference to our AppDbContext, and next, we'll need to pass in a reference to the AppDbContext in the constructor. Once we modify the constructor, we'll simply set the _dbContext property equal to the dbContext instant that's passed into the constructor. Now it's time for us to implement the execute method from the ICommand interface. This method will contain the logic to delete an existing note. We'll start by calling Console.Writeline and pass in the string Please provide the title of the note you wish to delete. So we'll create a variable called title and we'll set it equal to the return value of Console.ReadLine. Now that we have the title, it's time for us
>
> **[1:36](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=96)** to search for the notes in our database, just like we've done in the previous two commands. We'll create a new variable called note and we'll call _dbContext.Notes.FirstOrDefault and map n over to n.Title equals title. Now let's create the condition to see if our note exists. Now that we know that we have a note, let's go over to the _dbContext.Notes property and then call the Remove method and pass in the note that we just found. Once we've deleted the note, let's go ahead and save the changes to the database. We'll do this by calling _dbContext.SaveChanges. We'll also need an else condition, and let's go ahead and add in the two messages we'll need for whether you've deleted a note or if the note cannot be found. For the first message, we'll type Console.WriteLine and pass in the string your note was deleted successfully. And finally, in the else condition, let's call Console.WriteLine and we'll pass in the string No note was found with that title. Let's save our work and register this command with the main application.
>
> **[3:13](https://www.linkedin.com/learning/c-sharp-cross-platform-development/deleting-a-note-command?u=76281980&t=193)** We'll add a new value to our dictionary and the key will be delete and the value will be a new instance of the DeleteNoteCommand that we supply the dbContext to. Let's save our work and run our app and see if the changes have worked. Let's go ahead and list out all the notes we have in our database. At this point, let's go back and delete the Hello World 2 note since we no longer need it. Once we type in the delete command, hit return and we'll need to give it the exact title of the note we wish to delete. As you can see, the note was successfully deleted and we can press any key to continue. Let's try it for a title of a note that doesn't exist. We'll use the delete command and hit return. And then let's use the same title for the note that we just deleted. We'll type out Hello World 2 and hit return. As you can see, the note's already been deleted, so we've been given the error message that no note was found with that title. At this point, we successfully implemented the DeleteNoteCommand in our HelloNote application. We have all of the commands that are needed in order to create, read, update and delete an entry in our database.

> [!info]- Semantic Content
>
> **Warnings:** note that (3)
> **Code Identifiers:** dbcontext (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Integrating a Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Implementing note search](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=0)** - Now, it's time for us to implement search capability which will be our last command for application. We're going to ask the user to input an item to search for, and we're going to look at either a notes title or its content to see if we can find a note that matches. Let's get started by creating a new search note command class in our commands folder. And just like before, we'll implement the ICommand interface, and let's create a new public method called Execute. At the top of the class, we'll create our reference to our app DB context.
>
> **[0:49](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=49)** Next, we'll modify our constructor to accept a reference to the app DB context class. And then, we'll set the underscore DB context property equal to the reference we pass into the constructor. Now that our class is configured, it's time for us to implement the execute method where we'll ask the user to search for a keyword. At this point, we just prompt for the input and capture it. Let's start by calling console dot right line, and we'll pass in the string that says, please provide a keyword to search for in the notes. Next, we'll capture the keyword by creating a new variable called keyword and setting it to the value that's returned when we call console dot read line. Now that we have the keyword for the user, we can initialize the search process. In this step, we'll just write the structure for our link query that we'll use to filter the notes. Here, we'll create a new variable called, notes query and we'll set it equal to the value of underscore DB context dot notes property. And then we'll call, where. And we're going to search for wherever we find n dot title contains the keyword or if n dot content contains the keyword. Now, before we move on, let's set a breakpoint
>
> **[2:22](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=142)** and test our application to see if we actually get a value that's returned to our notes query before we try to display it to the screen. Make sure to run your application in debug mode, so that the breakpoint will be triggered when we look for the actual keyword. Let's type in search, and as you can see, we just got an error because I forgot to actually add the search to the program. So let's stop running the app and go back into the program file, and make sure that we add the command to our dictionary. We'll do this by adding a new item to the dictionary using search as the key, and we'll create a new search note command instance as the value and pass in the DB context. Now, if we rerun the program in debug mode again, we'll be able to actually search for the notes. We'll type in search and hit return. And now we see that our search command has properly been registered with the app and it's giving us the message to provide a keyword to search for in the notes. Let's look for, hello. As you can see, our breakpoint has been triggered, and if we scroll down, we can roll over the notes query and inspect what's been returned. If we take a look at the results view, here you'll be able to see the Content, ID, and Title of the note we were searching for that matched the keyword we supplied. At this point, we have all the logic we need
>
> **[3:56](https://www.linkedin.com/learning/c-sharp-cross-platform-development/implementing-note-search?u=76281980&t=236)** to search our notes, and in the next video, we'll use this information to display the notes that were found to the user.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - now (1)

#### [Executing search and displaying results](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=0)** - [Instructor] In this video, we're going to execute the [[Language Integrated Query (LINQ)|LINQ]] query that we prepared in the previous video and present the results to the user. If no matching notes are found, we'll also display a message to tell the user that we couldn't find the note based on the keyword they supplied. In the previous video, we used a breakpoint to test that the query was working. Let's go ahead and remove that breakpoint, if you still have it, and finish our command with the [[Representational State Transfer (REST)|rest]] of the code we need to display the notes that have been found. We'll start by creating a new variable called notes, and we're going to set it equal to notesQuery.ToList. ToList is a LINQ method that forces immediate query execution and returns a list that contains the query results. This method is often used when it's important to cache the results of a query. Now we need to make sure that we actually have some notes to display. So let's create a new condition, and we'll test to see if the notes list contains any values. And if this is true, now it's time for us to use a foreach loop and iterate over each note in the notes list. First, we'll call Console.WriteLine, and we're going to supply a string that displays the title, and we'll use a token to replace the value with note.Title. Next, we'll call Console.WriteLine,
>
> **[1:33](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=93)** and we'll display the content and replace the token with the value of the note.Content property. And finally, we'll add a new line by calling Console.WriteLine, and we'll add some dashes to separate each of the search results from the others in the list. Now what we need to do is create the else condition to display an error message if no notes have been found and then call Console.WriteLine and pass in the string: No notes found with provided keyword. At this point, we should have everything we need to display any notes we find by the keyword. So let's go ahead and run our app and add a few more notes so that we have some examples of how to search through different notes based on the keyword and see how many we can list at the same time. First, let's search for the note we know exists. We'll type in search and hit Return. Now the app is asking us to provide the keyword, so let's use world. We'll hit Return, and we can see that the note that's in the database that says Hello World has now been displayed. Let's go ahead and clear this and create a few different notes that have a mix between using the [[Microsoft Word|word]] world in the title and the content to see if they'll show up. Let's create a note, the title, World War 2,
>
> **[3:08](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=188)** and let's set the content to something like this. Now let's create two more notes, and now let's make sure that the last note doesn't have the word world in it. Let's create a new note with the title Remember This. And for the content, we can add something like this. And finally, let's add the last note without the word world in the title or the content.
>
> **[3:42](https://www.linkedin.com/learning/c-sharp-cross-platform-development/executing-search-and-displaying-results?u=76281980&t=222)** Now that we've added our notes, let's quickly list them to see if they're all in the database. One thing you may notice when you're testing your app is that if you don't have enough room to display all the content in the console, you can either scroll up or you can increase the size of this panel in order to see everything at once. As you can see, we now have four notes: Hello World, World War 2, Remember This, and My Last Note. Let's hit Return and do a search for the word world. As you can see, only one note came up, and that is the one that has the content that says The world is yours. The reason for this is that our keyword is case-sensitive. So if we were to type in World with a capital W and hit Return, you'll see that other two notes come up, the ones that are the title, Hello World and World War 2. At this point, we now have a working search command inside of our application. And while there's a lot we can do to refine this to make it a little easier to use, especially if you want to ignore case, this gives you the fundamental knowledge you need in order to continue to modify and add new commands to your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Language Integrated Query (LINQ)|Linq]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** linq (2)
> **Cross-References:** previous video (2)
> **Code Identifiers:** notesquery (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Leveling up with .NET](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/c-sharp-cross-platform-development/leveling-up-with-dot-net?u=76281980&t=1)** - Well done on completing the course. You now have a solid foundation in building a console-based, note-taking app in C#. For your next steps, consider enhancing the application with note-tagging functionality, explore .Net's [[CLI]] options to deploy your app on various platforms, and you may also want to add a graphical user interface using [[Microsoft]]'s .Net multi-platform app UI. This will take your app to the next level and will give you practice with building multi-platform applications using C#. Keep exploring and pushing your boundaries. There's so much more to learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[Microsoft]] (1)
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