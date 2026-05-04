---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: laravel-essential-training
url: "https://www.linkedin.com/learning/laravel-essential-training"
level: Beginner
updated: 8/12/2024
learners: 10281
skills:
  - Laravel
exercise_files: true
github: "https://github.com/LinkedInLearning/laravel-essential-training-2710093/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFMOrRKmmIPEg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722894881815?e=2147483647&amp;v=beta&amp;t=2a9mRtrTqKvssIy7KyDF11ygm2uu5JCPb1LRFfCA10w"
linkedin_topic: Web Development
learning_paths:
  - '[Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)'
next_courses:
  - '[Advanced Laravel](Advanced%20Laravel.md)'
path_nav: '[{"path":"Build Your Laravel Skills","position":1,"total":7,"prev":null,"next":"Advanced Laravel"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/laravel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Laravel%20Essential%20Training.md)

![Laravel Essential Training](https://media.licdn.com/dms/image/v2/D560DAQFMOrRKmmIPEg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722894881815?e=2147483647&amp;v=beta&amp;t=2a9mRtrTqKvssIy7KyDF11ygm2uu5JCPb1LRFfCA10w)

# Laravel Essential Training

> Laravel, the open-source PHP web framework, has become one of the most widely used ecosystems for building scalable apps at lightning-quick speed. If you’re a PHP developer looking to take your career to the next level, this course was made for you. Join instructor Shruti Balasa as she takes you on a journey through the fundamentals of the Laravel framework. Learn about MVC architecture, how the L

> [LinkedIn Learning](https://www.linkedin.com/learning/laravel-essential-training) | Beginner | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Meet Laravel](#meet-laravel)
  - [What you should know](#what-you-should-know)
  - [Understand the MVC architecture](#understand-the-mvc-architecture)
  - [Using Codespaces with this course](#using-codespaces-with-this-course)
- [**1. Laravel Basics: Routes, Views, and Controllers**](#1-laravel-basics-routes-views-and-controllers) (7 videos)
  - [Serve the application](#serve-the-application)
  - [Handle routing](#handle-routing)
  - [Creating a view](#creating-a-view)
  - [Building layouts with Blade](#building-layouts-with-blade)
  - [Working with controllers](#working-with-controllers)
  - [Challenge: Create a controller and a view, then add a route](#challenge-create-a-controller-and-a-view-then-add-a-route)
  - [Solution: Create a controller and a view, then add a route](#solution-create-a-controller-and-a-view-then-add-a-route)
- [**2. Laravel Basics: Configuration, Database, Migrations, and Eloquent**](#2-laravel-basics-configuration-database-migrations-and-eloquent) (6 videos)
  - [Understand Laravel configuration](#understand-laravel-configuration)
  - [Working with the database](#working-with-the-database)
  - [Creating and running migrations](#creating-and-running-migrations)
  - [Creating models and using Eloquent](#creating-models-and-using-eloquent)
  - [Challenge: Create a migration to add a column and update a row](#challenge-create-a-migration-to-add-a-column-and-update-a-row)
  - [Solution: Create a migration to add a column and update a row](#solution-create-a-migration-to-add-a-column-and-update-a-row)
- [**3. Starting Your Project**](#3-starting-your-project) (7 videos)
  - [Understand the project requirements](#understand-the-project-requirements)
  - [Add authentication with Laravel Breeze](#add-authentication-with-laravel-breeze)
  - [Adding styles to the project](#adding-styles-to-the-project)
  - [Create the first model, migration, controller, and routes](#create-the-first-model-migration-controller-and-routes)
  - [Register resource routes](#register-resource-routes)
  - [Challenge: Create a new resource](#challenge-create-a-new-resource)
  - [Solution: Create a new resource](#solution-create-a-new-resource)
- [**4. Creating, Indexing, and Showing**](#4-creating-indexing-and-showing) (9 videos)
  - [Add an index method to fetch all notes](#add-an-index-method-to-fetch-all-notes)
  - [Create an index view to display all notes](#create-an-index-view-to-display-all-notes)
  - [Add pagination and clean up the index view](#add-pagination-and-clean-up-the-index-view)
  - [Add a create method and view to show a form](#add-a-create-method-and-view-to-show-a-form)
  - [Add a store action to save the data](#add-a-store-action-to-save-the-data)
  - [Add a show action and view to display single note](#add-a-show-action-and-view-to-display-single-note)
  - [Create a unique ID for each note](#create-a-unique-id-for-each-note)
  - [Challenge: Add index and create methods for a new resource](#challenge-add-index-and-create-methods-for-a-new-resource)
  - [Solution: Add index and create methods for a new resource](#solution-add-index-and-create-methods-for-a-new-resource)
- [**5. Editing, Updating, and Deleting**](#5-editing-updating-and-deleting) (6 videos)
  - [Add an edit method and view to allow editing of the note](#add-an-edit-method-and-view-to-allow-editing-of-the-note)
  - [Add an update method to update edited data](#add-an-update-method-to-update-edited-data)
  - [Add a destroy method to delete a note](#add-a-destroy-method-to-delete-a-note)
  - [Show flash data to users](#show-flash-data-to-users)
  - [Challenge: Update notes with a new resource](#challenge-update-notes-with-a-new-resource)
  - [Solution: Update notes with a new resource](#solution-update-notes-with-a-new-resource)
- [**6. Relationships**](#6-relationships) (5 videos)
  - [What are Eloquent relationships?](#what-are-eloquent-relationships)
  - [Define relationships](#define-relationships)
  - [Query and save relationships](#query-and-save-relationships)
  - [Challenge: Define a new relationship and use it](#challenge-define-a-new-relationship-and-use-it)
  - [Solution: Define a new relationship and use it](#solution-define-a-new-relationship-and-use-it)
- [**7. Soft Deleting**](#7-soft-deleting) (5 videos)
  - [Enable soft delete](#enable-soft-delete)
  - [Query soft deleted models](#query-soft-deleted-models)
  - [Show soft deleted model](#show-soft-deleted-model)
  - [Restore soft deleted models](#restore-soft-deleted-models)
  - [Permanently delete models](#permanently-delete-models)
- [**Conclusion**](#conclusion) (3 videos)
  - [Optional: Set up a local development environment](#optional-set-up-a-local-development-environment)
  - [Quick summary](#quick-summary)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Meet Laravel](https://www.linkedin.com/learning/laravel-essential-training/meet-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/meet-laravel?u=76281980&t=0)** [Laravel](../../Skills/Web%20Development/Laravel.md) is an open source web FrameWork, one of the most popular among [PHP](../../Skills/Software%20Development/PHP.md) developers currently. It provides a structure and a starting point for your application, so you can focus on building something awesome instead of sweating the details. You can build scalable, robust, and secure full stack web applications with Laravel faster than ever. If you are a PHP developer willing to take your career to the next level, or if you're coming from a different tech stack, this course is for you. We will start by learning the basics of Laravel, and then learn more by building a simple, yet fully functional web application using the FrameWork. I am Shruti Balasa, a tech educator and a full stack web developer. I have worked with Laravel for more than five years and PHP itself for more than 12 years right now. Join me in this course and let's together build something amazing while learning the fundamentals of Laravel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (3)
> **CLI Commands:** php (3)
> **Env Vars:** php (3)
> **Definitions:** is an  (1)

#### [What you should know](https://www.linkedin.com/learning/laravel-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/what-you-should-know?u=76281980&t=0)** Before you proceed with this course, you should have a good understanding of [HTML](../../Skills/Web%20Development/HTML.md) and should have worked with core [PHP](../../Skills/Software%20Development/PHP.md) before. You should also be familiar with object oriented concepts and have some working knowledge of [Databases](../../Skills/Software%20Development/Databases.md) like [MySQL](../../Skills/Software%20Development/MySQL.md) or SQLite. It's also nice to have a good understanding of HTTP requests, but not an absolute requirement. If you know the concepts of MVC architecture, short for Model View Controller, you will be able to pick up [Laravel](../../Skills/Web%20Development/Laravel.md) concepts much faster, but even this is not an absolute requirement. Apart from these knowledge requirements, I recommend having a dedicated computer or a laptop with a good internet connection for a seamless learning experience. You also need a [GitHub](../../Skills/Software%20Development/GitHub.md) account to practice building along with the course. If you don't have one already, create it before you move further. If you're ready, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
> **Env Vars:** html (1), php (1), http (1), mvc (1)
> **CLI Commands:** php (1), mysql (1)
> **Tools:** github (1)
> **Definitions:** short for (1)

#### [Understand the MVC architecture](https://www.linkedin.com/learning/laravel-essential-training/understand-the-mvc-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/understand-the-mvc-architecture?u=76281980&t=0)** [Laravel](../../Skills/Web%20Development/Laravel.md) FrameWork is largely based on the MVC architecture. MVC is a way of building a huge application by splitting it into three parts: models, views, and controllers. This makes maintaining the application easy as it grows and avoids repetition of code, along with a few other benefits. The model contains all the logic related to the application's data, like the schemas, the [Databases](../../Skills/Software%20Development/Databases.md), and their fields. This is the part where you write the code to interact with the database. The view contains the user interface. All the components that the user sees on the web page and interacts with are included in the views. The controller is what connects the model and the view. It handles all the interactions between these two components. So in simpler words, the user interacts with the web page, which is the view. The controller takes the user's input from the view, uses some logic to translate that input into a request for the model, the model grabs the data from the database, interacts with it in any other way, and finally, the controller passes this data back from the model to the view for the user to see it. Once you have this basic concept in mind during the course, you will better understand why a specific block of code is added in a particular file and not elsewhere. Now let's go ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** mvc (2)
> **Definitions:** is a  (1)

#### [Using Codespaces with this course](https://www.linkedin.com/learning/laravel-essential-training/using-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/using-codespaces-with-this-course?u=76281980&t=0)** [Codespaces](../../Skills/Software%20Development/Codespaces.md) is a code editor in the cloud with the full power of Visual Studio Code. This entire course is created using [GitHub](../../Skills/Software%20Development/GitHub.md) Codespaces, so that you can practice along with me from wherever you are without having to install anything in your system. To get started, you can create a Codespace directly from the Course Interface page. Click Open next to GitHub Codespaces. If you're already logged in to GitHub, you'll be directed to a Getting Started with GitHub Codespaces page. If not, you need to log in or create a free GitHub account first. On this page, click on Create Codespaces on main button. The first time you create a Codespace, it takes several minutes to create the virtual machine and set up everything you need. That's what is happening right now. Wait until all the setup is done and you see something like this. This code editor is a special version of Visual Studio Code running on GitHub servers. There are some extensions which are pre-installed for our course. You can look at them in this extensions panel. The File Explorer here will show you all the files of our project in the current branch. We are in the main branch of our repository right now. You can see the branch name right here at the bottom. Click on it. You'll see multiple branches here with names such as 0407, 0304, and so on. Each of these branches is associated with one video
>
> **[1:37](https://www.linkedin.com/learning/laravel-essential-training/using-codespaces-with-this-course?u=76281980&t=97)** in the course. For example, the branch named 0304 is associated with chapter three video four. You'll also see two branches for each video 0304B and 0304E. The branch with the suffix B is the beginning state, whereas the one with E is the ending state. So if you switch to the branch 0304B, that's exactly the state of the project at the beginning of chapter three, video four and 0304E is the state at the end of the same video. So at any point in the course, if you feel lost, you can switch to the corresponding branch and continue from there. But there's one thing to note. The moment you start a new code space, you will get a unique URL. This will become the app URL for [Laravel](../../Skills/Web%20Development/Laravel.md). So if you are developing locally on your system, this will always be localhost, so there's no problem. But since we're using Codespaces we need to set the asset URL configuration in this file called .env for certain things to work correctly. Again, this is automatically taken care of for you. The moment you start a new codespace this line gets added automatically for you. Now this was already existing. This will be overridden with your asset URL with this URL which is unique to you.
>
> **[3:10](https://www.linkedin.com/learning/laravel-essential-training/using-codespaces-with-this-course?u=76281980&t=190)** This project setup is perfect. You don't need to change anything, but whenever you try to switch to a new branch, for example, let me try and switch to 0502E. You might see an alert like this. Your local changes would be overwritten by checkout. That's because this asset URL is the local change. What do you need to do here is click on Migrate changes. Whenever you see an alert like this. Leave the stash message blank. Hit enter and if you see that there are any merge conflicts that will appear here at the right bottom corner. If it does, view the changes and make sure to retain this incoming change. This would be called the incoming change and this would be called the original change. Accept all the incoming changes to make sure that your asset URL in your .env file is always related to your URL, and then you're good to go. Also, while working with Codespaces, if you end up closing the browser window or in my case, I installed the Codespace Chrome app. If I end up closing this window, don't worry, your changes will be automatically saved in your GitHub account. You can go back to GitHub, Codespaces and open it. Continue from wherever you left.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
> **Tools:** github (8), visual studio (2)
> **Env Vars:** url (8)
> **UI Navigation:** click on (3), switch to (3)
> **Prerequisites:** setup (2), install (1), getting started (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)


### 1. Laravel Basics: Routes, Views, and Controllers

[↑ Back to Table of Contents](#table-of-contents)

#### [Serve the application](https://www.linkedin.com/learning/laravel-essential-training/serve-the-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/serve-the-application?u=76281980&t=0)** Whether you're working with [Codespaces](../../Skills/Software%20Development/Codespaces.md) or using an IDE of your choice in your local dev environment, this is the starting point of your [Laravel](../../Skills/Web%20Development/Laravel.md) application. You will see the same set of files and folders in a fresh Laravel app. The first thing to do now is to start the development server. Open a new terminal within your editor. Go to View, Terminal. Any more I will use the keyboard shortcut command J to open or close this terminal. If you're on [Windows](../../Glossary/Service/Windows.md), the shortcut might be Ctrl+J. Now run the command [PHP](../../Skills/Software%20Development/PHP.md) artisan serve The server is now running. You can visit this URL in your browser by pressing the command key on Mac, or Ctrl key on Windows and clicking on it. You will see a wonderful splash screen. This is a new Laravel application. If you scroll to the bottom of the page, you can see which Laravel version is currently installed. In my case, it's Version 11.10. If you're practicing using Codespaces, you will see the same version. But if you install Laravel in your local system, you might see a newer version at the time of installation. Certain things might look different if something has changed, but mostly everything will work the same. Coming back to the terminal, remember we typed this command. PHP Artisan Serve. Laravel provides a command line interface called Artisan. You can view a list of all the helpful artisan commands by using
>
> **[1:38](https://www.linkedin.com/learning/laravel-essential-training/serve-the-application?u=76281980&t=98)** php artisan list command. Click on a new tab, type php artisan list. Of course, if you're using Docker and Sail to run Laravel in your local system, you will have to replace PHP in the commands, wherever I type php, you have to replace and type sail instead. So this is the huge list of commands that Laravel provides out of the box. We will use a lot of these commands, like php artisan migrate, and then make:controller, make:model and many of these. Let's go on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (8), [PHP](../../Skills/Software%20Development/PHP.md) (7), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [Windows](../../Glossary/Service/Windows.md) (2)
> **CLI Commands:** php (7), make (2), docker (1)
> **Tools:** terminal (4), command line (1)
> **Env Vars:** php (2), ide (1), url (1)
> **UI Navigation:** go to (1), click on (1)
> **Versions:** version 11 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [Handle routing](https://www.linkedin.com/learning/laravel-essential-training/handle-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/handle-routing?u=76281980&t=0)** We are looking at a new [Laravel](../../Skills/Web%20Development/Laravel.md) application. Now it's time we look at the code, find out where this content is located and make some edits. This is Visual Studio Code within [Codespaces](../../Skills/Software%20Development/Codespaces.md), you can use an IDE of your choice if you're developing locally outside of Codespaces. This is your Laravel app code base. With these many files and folders, it's easy for a beginner to get overwhelmed at first. For the basic app that we are going to build in this course, we only need to access a few of these and we'll take it step by step. The very first thing we find out is where this content is being fetched from. In a core.[PHP](../../Skills/Software%20Development/PHP.md) project, you need to have an index.php that is fetched when you type localhost or access the root URL. You can find that index.php within the public folder, right here, but you cannot immediately make sense of anything in this. Right? So where is the [HTML](../../Skills/Web%20Development/HTML.md) content that is shown here, coming from? Laravel, just like any other frameworks, has routes, they are defined in a routes file located in the routes directory which is here. You can see two files here, but web.php is the only one we are going to use in this course. This contains all the web routes. You see we have a single route defined here, which is the base URL for our project. This returns the welcome view. Command Click or Control
>
> **[1:31](https://www.linkedin.com/learning/laravel-essential-training/handle-routing?u=76281980&t=91)** Click on this link to open the View file. This is exactly the page we are seeing on the browser. To verify, Let's search for this [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Laracasts here and change it to something else. Here we go. Laracasts and let me change it to Laracasts videos and save the file. Go back and refresh the browser. You can see that it's updated. All right, let's go back to the routes file web.php. Let's just copy this route declaration, paste it below, and change this URL to something else, like let's say we change it to Home. Now go to the browser and type /home. And you see, we see the exact same welcome view. Try accessing some other route like Welcome or something and you'll get a 404 Page Not Found error. If you go back to the routes file and comment out the first route and try accessing the base URL, this time, you get the same error. So web.php is the file where you need to register every single route in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (6), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** php (6), find (3), make (2)
> **File Paths:** web.php (3), index.php (2), core.php (1)
> **Env Vars:** url (4), ide (1), html (1)
> **UI Navigation:** click on (1), open the (1), go to (1)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)

#### [Creating a view](https://www.linkedin.com/learning/laravel-essential-training/creating-a-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/creating-a-view?u=76281980&t=0)** We just saw that a route returns a view. We can even return any [HTML](../../Skills/Web%20Development/HTML.md) code within this function, like return H1 Welcome or something like that. Go to the browser, refresh the page and you see the HTML right here. But since we cannot practically return entire HTML for entire pages like this, we use separate files called Views. Views are located in the resources directory in the views directory welcome.blade.[PHP](../../Skills/Software%20Development/PHP.md) This is the one we opened earlier. Now let's carefully look at the code here. If you scroll to the top and then scroll down bottom slowly, you'll see something on line 27, line 29, line 36, and so on. This is neither HTML or .php. Also, these curly braces on line 31 and 38 and so on. All of this is blade syntax. Blade is a templating engine used in [Laravel](../../Skills/Web%20Development/Laravel.md). Before we talk about blade in detail, let's create another view by creating another view file here. New file and let's name it home.blade.php. Since we wish to create a blade template, the file name has to end with blade.php instead of just .php. Let this be a simple HTML document. With the h1 element.
>
> **[1:39](https://www.linkedin.com/learning/laravel-essential-training/creating-a-view?u=76281980&t=99)** Hello Laravel! To display this page, we need a route. So head over to the routes file web.php Change the home route to return the home view we created just now. So replace this with home. As you might have noticed, you don't have to type home.blade.php It's just home. Now go to the URL /home. You can see the view that we just created. While returning the view you can even pass some variables as second argument. Here in this routes file let's pass in a name variable and a value like so: Name I will put in my name Shruti. Now in the home view, Let's replace Laravel with the name variable. In php you would use echo. You would use the php tags and then echo $name, like so. This works perfectly fine. You can even take a look, refresh, and this works. However, in blade you can simply wrap the variable name in curly braces like so. Now save the file, go to the browser, refresh. You see that the variable data is displayed here. Notice how much more readable this is. Blade also has convenient shortcuts for common PHP structures like @if statements and for loops. For example, you can remove this, add an @if statement here and say
>
> **[3:21](https://www.linkedin.com/learning/laravel-essential-training/creating-a-view?u=76281980&t=201)** if name equals Shruti, say Hello Admin. Else say hello and pass in the name variable. You also have to end this with an @endif directive. These are called blade directives. @if, @else, @endif. Now save the file and go back to the browser and refresh. So this works as expected. These definitely look much neater than plain php. We will come across more blade directives as we go further in our course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (11), [HTML](../../Skills/Web%20Development/HTML.md) (5), [Laravel](../../Skills/Web%20Development/Laravel.md) (3)
> **CLI Commands:** php (11)
> **Env Vars:** html (5), url (1), php (1)
> **File Paths:** home.blade.php (2), welcome.blade.php (1), blade.php (1), web.php (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Building layouts with Blade](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980&t=0)** Blade templates are not only helpful for displaying data and replacing common [PHP](../../Skills/Software%20Development/PHP.md) structures, we can also use them to build and maintain layouts in [Laravel](../../Skills/Web%20Development/Laravel.md). Most web applications have the same generic layout across various pages like header, navigation bar, sidebar, and footer. Blade provides two methods for creating layouts by reusing code. First is by using template inheritance. Second is by using blade components. Let's look at template inheritance first. Consider this web page with a navbar and a main section. The code for the same can be found in home.blade.php. I will quickly access and open files using the keyboard shortcut command+p, so it gives me this place to search for the file I can quickly search and open. So this entire markup is currently in home.blade.php But if we need another view like an About page with the similar navbar and content section, repeating this entire code is not a good idea. So let's create a Layouts folder within Views. New folder Layouts add a file called base.blade.php
>
> **[1:23](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980&t=83)** Copy all the code from home.blade.php into the base file. I will close the file explorer for now. Now let's retain all the common structure. The content that would change is here, right? So let me cut it out and paste it in home.blade.php. Right. We need to define this as a section using the section directive, section. And we can call it whatever we want. So let me call this Content. This has to end with an @endsection blade directive. And now this is our view. We need to specify the layout this view needs to inherit, which can be done using the @extends blade directive. And here you can give the relative path to that layout which is in our layouts folder. So you could say layouts/base or you could even say layouts.base. And now in the layouts file in the place you wish to display the content, use the yield directive wild and then specify the name given to the section: we called it content. So content it is. So this will be replaced with the content from our blade view. You can go to the browser and verify, refresh. Everything still looks the same.
>
> **[2:58](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980&t=178)** Now in the nav bar, let's say you want to get the user's name from the view. So replace this here. Go to the nav bar and replace this with @yield("name"). And now this name we would, we might want to specify from the view. So here you can say... you can add another section directive, call it name and pass in whatever value you want to. So let's say I'll put my name here and now go to the browser and refresh. Notice that the variable has been replaced with the name. All of this makes it easy to add multiple views following the same base layout. So if you want to try this out, let's create another view. Call it about.blade.php. Let's extend the same base layout, layouts.base. And here in the content let's add something else.
>
> **[4:07](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980&t=247)** @endsection. Let's add a heading. And let's simply say About us. Or you can even copy the styling from here. Just change the text to About us. And now we need a view to show this. So go to the web.php routes. We can remove this from here. Copy this route, paste it again. Change it to About. Change the view also to About in the browser. Let's go to the about route and notice that the navbar remains the same. Of course we need to pass in the user variable here as well so we can do that. Copy this section here, paste it here. And now we have two different views About us and Home following the similar layout. So if you wish to change anything in the layout, maybe the color of the nav bar or something, you can do that right here in one single place, which is the base layout. Next, let's look at building layouts using blade components. We'll only cover the basic concept in this video. This time let's create a components folder inside views similar to layouts, let's call it components. The same base.blade.php file. Copy this entire thing or you know you can copy it into the
>
> **[5:42](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980&t=342)** components folder like so. Replace the yield directives with simple variables like within curly braces. Like this. So $name and $content. Now in the home view, replace the extents directive with an x-base tag. This also has to be the closing x-base tag. Let me put it here. Notice that we don't even have to say layouts or components or anything, because when we use blade components, all the files, all the components go in here. So the moment you prefix it with x- (hyphen) it takes in the name from here. This looks very consistent with the markup as compared to the blade directives. Instead of sections here we use the x-slot tags. So you can say x-slot and use the name attribute to specify the name of this. So in our case it will be name again. And the content of the name goes here. This again will be replaced by x-slot. And here the name is content. And this closes with an x-slot closing tag. View this in the browser to verify. Let's go to the home route and notice that nothing has changed. We can have multiple nested components and multiple
>
> **[7:19](https://www.linkedin.com/learning/laravel-essential-training/building-layouts-with-blade?u=76281980&t=439)** slots this way, and this is the most common method followed by Laravel developers right now. So further in the course we will use blade components method for our layouts and learn more as we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (9), [Laravel](../../Skills/Web%20Development/Laravel.md) (2)
> **CLI Commands:** php (9)
> **File Paths:** home.blade.php (4), base.blade.php (2), about.blade.php (1), web.php (1)
> **UI Navigation:** go to (6)
> **Exercise Files:** template (2)
> **Env Vars:** php (1)
> **Analogies:** similar to (1)

#### [Working with controllers](https://www.linkedin.com/learning/laravel-essential-training/working-with-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/working-with-controllers?u=76281980&t=0)** Looking at our routes once again for this request, the only action is returning a view. Hence, adding it as a closure makes sense, but this is not always the case. We usually have a lot of logic that goes on for every request. For example, a login request will contain the logic to check if the user's credentials match, to log the user in or to return an error message, and more. We use controllers to group related logic into a single class. By default, controllers are stored within the App\Http\Controllers directory. This is just a default controller created by [Laravel](../../Skills/Web%20Development/Laravel.md) for you. Now let's create a new controller using the artisan command. [PHP](../../Skills/Software%20Development/PHP.md) artisan make:controller. Now in the older versions you had to pass more parameters here in this command to create controllers or models. But in the newer version you can simply do this and hit enter. You will be prompted asking what the name of your controller should be. And as you can see in the example, this is the convention used by Laravel. It has to follow CamelCase like this. So let's create a new controller calling it WelcomeController and it asks us what type of controller would you like for now, since we don't know what the others are, let's just click empty and the controller has been created for us successfully,
>
> **[1:31](https://www.linkedin.com/learning/laravel-essential-training/working-with-controllers?u=76281980&t=91)** like I said, within the App\Http\Controllers directory. You can command+click and open this directly. As you can see it is here. We can of course create this file manually and add all of this code. But using a command is quicker. Now let's add a method index using public function index (). And here let's return the welcome view using return view ("welcome"); Go back to the routes file. Now this closure can be replaced with the action which is the index action in the controller, like so. WelcomeController::class and the index action goes as the second parameter. Like so. And when I typed WelcomeController, you might have noticed this use statement got added automatically. This is taken care of by the VS code extension PHP intellisense. It's installed here already for you so you don't have to worry. Now save this file. Save both the files. Go to the browser and refresh. Everything works just the same. Instead of returning the view directly here, we went through the welcome controller using an index file. So now we can add more logic into here whenever we need. So we just created our first controller and defined our route to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** php (1)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Challenge: Create a controller and a view, then add a route](https://www.linkedin.com/learning/laravel-essential-training/challenge-create-a-controller-a-view-and-add-a-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/challenge-create-a-controller-a-view-and-add-a-route?u=76281980&t=5)** At the end of most chapters in this course, I've added a quick challenge so you can reinforce whatever you've learned so far. At any point while solving it, if you realize you haven't got your concepts clear, you can always go back to the relevant video and relearn before you've progressed a lot more in the course. Each challenge in the course is explained in a video like this one. You need to first switch to the correct branch in [Codespaces](../../Skills/Software%20Development/Codespaces.md). The challenge branches are named like 01 challenge, 02 challenge, and so on, starting with the chapter number you're currently in. So for this challenge, you need to switch to 01 challenge and start here. Once you've completed the challenge, you can watch the next video where I show you how I would solve it. That way you can compare your solution with mine. Alright, so here's the first challenge. Create a blade file with a simple paragraph: "Hello world!" Then create a controller called Greeting Controller with an index method that renders this blade view you just created. And then create a route called hello, which calls the index method in the greeting controller. So once you've created these, you should be able to go to the Hello URL and be able to see the Hello World greeting. That means your solution is correct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **UI Navigation:** switch to (2), go to (1)
> **Cross-References:** go back to (1), next video (1)
> **Env Vars:** url (1)

#### [Solution: Create a controller and a view, then add a route](https://www.linkedin.com/learning/laravel-essential-training/solution-create-a-controller-a-view-and-add-a-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/solution-create-a-controller-a-view-and-add-a-route?u=76281980&t=5)** Here is a solution to the challenge. The first task is to create a blade view. Navigate to the Resources directory, Views, create a new file and call it greeting.blade.[PHP](../../Skills/Software%20Development/PHP.md). I'll add the basic [HTML](../../Skills/Web%20Development/HTML.md) structure and create a paragraph that says Hello World! All right, now we need a new controller. So I will run the command php artisan make:controller. I can pass the name of the controller right here. GreetingController. This is created. Let me open it. Create an index method here. Public function index. Let me return the blade view that I just created, return view('greeting'). And now we need to call this index method from a route. So open web.php, create a new get route, route::get. And the URL here needs to be hello. Now let's call the index action of the GreetingController GreetingController::class, 'index'. All right. Let's go to the browser, to the URL /hello and see if we see our paragraph Hello Horld! And we do. So our solution is perfect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** php (3), make (1)
> **Env Vars:** url (2), html (1)
> **File Paths:** greeting.blade.php (1), web.php (1)
> **UI Navigation:** navigate to (1), go to (1)
> **Definitions:** is a  (1)


### 2. Laravel Basics: Configuration, Database, Migrations, and Eloquent

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Laravel configuration](https://www.linkedin.com/learning/laravel-essential-training/understand-laravel-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/understand-laravel-configuration?u=76281980&t=0)** Every application has a bunch of configuration values that need to be accessed from different files all across the application, like the name of the app, database credentials, mail service credentials, and so on. To help manage all these environment variables, [Laravel](../../Skills/Web%20Development/Laravel.md) has a .env file at the root of the application. These are some app-related variables like name, environment, application key, which is unique to each project, then the app debug value, which determines how much of the error information should be displayed to the user. In the local environment, this is set to true by default because the error information is helpful for the developer to debug, but in production, this value should be set to false, otherwise, you risk exposing sensitive data. App URL is the base URL. In production, this would contain your domain name. Here is a set of database credentials including the type of connection, username, password. If you're using [Version Control](../../Skills/Web%20Development/Version%20Control.md) like [Git](../../Skills/Software%20Development/Git.md), you need to note that this file should not be committed to your repository. You have to add this file to gitignore. It's not added here because I'm using [Codespaces](../../Skills/Software%20Development/Codespaces.md) and the environment file is very much needed. But if you install a new Laravel application in your local development environment, you will see that this .env file is already added in gitignore. This is not only for security reasons,
>
> **[1:33](https://www.linkedin.com/learning/laravel-essential-training/understand-laravel-configuration?u=76281980&t=93)** it's also because each person in your team might have a different set of configuration values and your production server also, which is why we have a .env.example file which has all the variable names similar to .env file without the values or with default values. This file is committed to the repository, and everybody on the team can use it to create or edit their own .env files. So it's important to make changes to this example file, too, that is, add all of these new variables whenever you add them to your .env file. Now, the values of these .env file are retrieved from various files within the config directory. Look at database.[PHP](../../Skills/Software%20Development/PHP.md), for example. The env helper method returns the value of this key from the .env file. The second argument value is used as a default value in case the key is not found. Now, when we have to access these environment variables, we should not do this directly using the env function. Instead, we should use them through the configuration. For example, if we wish to access the app name, let's say in our welcome blade view, open welcome.blade.php, and let's say we want to replace this title with our app name. You can do so using the config helper method using the dot syntax.
>
> **[3:07](https://www.linkedin.com/learning/laravel-essential-training/understand-laravel-configuration?u=76281980&t=187)** So our app name will be app.name. You can check that right here. If you go to app.php, the application name is a variable in the app.php file. So that's how you access all of these environment variables using the config method. Let's save this file, change our app name here to maybe NewApp, or something like that, and go to the browser, refresh. Notice that this has changed. So I encourage you to browse the contents of all the config files here and get a better hold on what are the configurations available in Laravel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **CLI Commands:** php (4), git (1), make (1)
> **File Paths:** app.php (2), database.php (1), welcome.blade.php (1)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** url (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)

#### [Working with the database](https://www.linkedin.com/learning/laravel-essential-training/working-with-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/working-with-the-database?u=76281980&t=0)** In this course, we will use a [MySQL](../../Skills/Software%20Development/MySQL.md) database with [Laravel](../../Skills/Web%20Development/Laravel.md). This default configuration is ready to work with Laravel Sail, which is what we are using within [Codespaces](../../Skills/Software%20Development/Codespaces.md). So if you're working locally using Herd, this might look slightly different to you, but you don't have to change the defaults. It will work. A database with this name was already created when the app was created and ready to connect. So everything is set up for us to start working with this database. Before we start creating a table and writing some queries, let's use a GUI tool to interact with the database. This Codespace ID already has a database client extension installed. So you should be able to see this database icon here. If you're working locally, you can download and install a tool like TablePlus. In Codespaces, open the database tool. Click on "Create Connection" and change these values to match the ones in the environment config. So host is mysql, username is sail, password is password. Let me change those. Host, mysql, username, sail, and password, and the database name is laravel. Click on "Connect". The connection is successful. If you are able to see this connection here, you can close this and expand this. You can see the Laravel database here with some default tables. Let's see what the users table has.
>
> **[1:35](https://www.linkedin.com/learning/laravel-essential-training/working-with-the-database?u=76281980&t=95)** For the moment, I want to delete some unnecessary columns here and keep this simple. So click on this edit icon and remove all the unnecessary columns like email_verified, password, remember_token. Yeah, even created_at and updated_at. Let me just keep only ID, name and email for the moment. All right, close this tab and refresh. Next, I want to manually create two random users. You can click on the yellow plus icon. You can type in any ID, any name, and email. Insert this column and create another user like 2, [John](../../Glossary/Tool/John%20the%20Ripper.md),
>
> **[2:30](https://www.linkedin.com/learning/laravel-essential-training/working-with-the-database?u=76281980&t=150)** john@[example.com](https://example.com). Now from within our Laravel application, let's execute some raw [SQL](../../Skills/Data%20Science/SQL.md) queries to [Fetch](../../Skills/Web%20Development/Fetch.md) this data. Close this. Close this as well, and open web.[PHP](../../Skills/Software%20Development/PHP.md). Let's reuse this route. Instead of returning a view, let's fetch our users from the database and display them right here. This could be done in three different ways in Laravel. Number one, using raw SQL queries. Number two, query builder. And number three is Eloquent ORM. Let's look at the first two methods in this video. You can execute raw SQL queries in Laravel with the help of the DB facade. A facade is a simplified interface for complex operations. You will encounter more facades offered by Laravel in the upcoming videos. To run a raw select query, we can use the select method and we can specify our select query here. So here, let's simply select star from users, and I will remove the second parameter. We will get all the users. Let's store this. This DB is highlighted because we'll have to import the class. You can right-click and select import class and this will be done for you. Let's assign this to a variable called $users and then dump and die to the browser.
>
> **[4:06](https://www.linkedin.com/learning/laravel-essential-training/working-with-the-database?u=76281980&t=246)** So dd is what we will use a lot to check what we get in this variable, right? Save this file, open the browser, and refresh. So we fetched our users from the database. We can use other methods of the DB facade like delete, insert, update, and more. Next, let's fetch the same users from the database using the query builder instead of raw queries. This is once again done with the DB facade using the table method. Here, you specify the name of the table and you can select only certain columns like say you want only the name and email. And this has to be in an array. You can chain this by further queries of where or whereAll, whereAny, and so on. For example, if we want to get only the users where the email is not null, we can say whereNotNull('email'). You can even order this by any column. So let's say we'd like to order it by name and so on. Finally, let's get the data. Once again, let me store this in the users variable and dd($users). I will have to comment these out for this to work. Okay. Save the file, go back and refresh the browser. Now this time, notice that we don't simply get an array like we did last time,
>
> **[5:40](https://www.linkedin.com/learning/laravel-essential-training/working-with-the-database?u=76281980&t=340)** we get a collection. A lot more can be done with Laravel collections, which we'll explore later in the course. Of course, here we have the data as requested, ordered by name, and only the selected columns. Though the query builder is powerful, for this course, we will use Eloquent ORM, which we'll explore soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (9), [MySQL](../../Skills/Software%20Development/MySQL.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2)
> **Code Identifiers:** email_verified (1), remember_token (1), created_at (1), updated_at (1), whereall (1)
> **UI Navigation:** click on (4), open the (2), right-click (1)
> **Env Vars:** sql (3), orm (2), gui (1)
> **CLI Commands:** mysql (3), php (1)
> **Prerequisites:** set up (1), before we start (1), install (1)
> **File Paths:** web.php (1)
> **URLs:** [example.com](https://example.com) (1)

#### [Creating and running migrations](https://www.linkedin.com/learning/laravel-essential-training/creating-and-running-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/creating-and-running-migrations?u=76281980&t=0)** Using the database client extension or any other GUI tool, we can create tables manually. Like you can click on create a new table and so on. But in production, creating tables manually is definitely not the best approach. Migrations in [Laravel](../../Skills/Web%20Development/Laravel.md) help creating and modifying table structures, acting like [Version Control](../../Skills/Web%20Development/Version%20Control.md). So let's create a new student's table using migrations. Open terminal and type the command [PHP](../../Skills/Software%20Development/PHP.md) artisan make:migration and specify the name of the migration like let's say create_students_table. This could be any name, but this particular name will help Laravel understand that you're trying to create a student's table. Hit "Enter". The migration is created for us. It's within the database directory and migrations. We use the schema facade to create and modify tables. You can see two methods here, up and down. The up method is used to create a table or column, while the down method is used to drop the table or column in case of rollback. The create method of schema facade is used for creating a new table which takes in the first parameter as the name of the table, and the closure is used to define the table structure. As you can see, Laravel has guessed the table name as students and prefilled it for you.
>
> **[1:32](https://www.linkedin.com/learning/laravel-essential-training/creating-and-running-migrations?u=76281980&t=92)** It also knows that you want to create it. For specifying the columns, you can see two methods here, ID and timestamps. Laravel offers multiple such methods for creating different types of columns. The ID method creates the primary key ID column that auto increments, and this timestamps method creates two columns, created_at and updated_at. So you don't have to manually type all of these. These will be auto-updated. Now let's create two columns of our own like name and email. So use the string method to create a name column. Also, the same method to create an email column as well. Okay, let's run this migration now. Open terminal again and type in php artisan migrate. Now this command will run all the migrations that haven't previously been run. So hit "Enter". Currently, we only have one migration that is new. So this is done. You should be able to see a student's table now. Let's refresh tables. And yes, there it is with all the columns that we created. Feel free to explore the structure of the other tables that Laravel created by default, like migrations and password_reset_tokens and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Code Identifiers:** create_students_table (1), created_at (1), updated_at (1), password_reset_tokens (1)
> **CLI Commands:** php (2), make (1)
> **Tools:** terminal (2)
> **Env Vars:** gui (1)
> **UI Navigation:** click on (1)

#### [Creating models and using Eloquent](https://www.linkedin.com/learning/laravel-essential-training/creating-models-and-using-eloquent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/creating-models-and-using-eloquent?u=76281980&t=0)** [Laravel](../../Skills/Web%20Development/Laravel.md)'s Eloquent feature makes it easy and fun to interact with [Databases](../../Skills/Software%20Development/Databases.md). Each table in the database is associated with an Eloquent Model. Through these models, we can retrieve, insert, update, and delete the records from the database. Open the terminal and let's create a model using the command [PHP](../../Skills/Software%20Development/PHP.md) artisan make:model, followed by the name of the model. By convention, this name should be similar to the table name, but should start with an uppercase and be singular. So in our case, the model name associated with the students table will be Student. If your table name is college students, then your model name will be CollegeStudent, like so. All right. So let me remove this and make the student model. This creates your model within the app models directory. This is all you need to be able to interact with your data. Let's look at our students table and refresh. I have inserted some dummy data to be able to [Fetch](../../Skills/Web%20Development/Fetch.md) them. You can do the same. Let's fetch these using Eloquent. Go back to web.php Now here, let's use our student model to get all the data from our students table. We can assign it to students and then dump this to see what we get.
>
> **[1:37](https://www.linkedin.com/learning/laravel-essential-training/creating-models-and-using-eloquent?u=76281980&t=97)** Once again, I'm going to comment this out and save the file. Go to the browser, refresh. Once again, we have a collection here, but this time with an array of student objects. Like so. You can iterate through this collection using foreach, just like an array. So you can say foreach ($students as $student), maybe echo the name
>
> **[2:10](https://www.linkedin.com/learning/laravel-essential-training/creating-models-and-using-eloquent?u=76281980&t=130)** of the student like echo $student->name and maybe a line break.
>
> **[2:19](https://www.linkedin.com/learning/laravel-essential-training/creating-models-and-using-eloquent?u=76281980&t=139)** Let's look at the output. Right. Now using this model class, let me comment this out or remove this. And using this model class, you can also use the same query builder like this and get the same output. So let me copy all of this and paste it here. Just remove this. So student, select name, email, whereNotNull. Everything else will be the same. Now let me dump this. We'll see if we get the same result. Look at the browser, refresh. Yes, we have the exact same result now, but even better with the student objects. Next, let's try and insert some data using Eloquent. Create an object. $student = new student. Student name is, you can give them some name like Jane. Student email, you can give it anything, jane@[example.com](https://example.com). And now let's save this using the model and the method save. We will have to comment this out. Otherwise, this code will not execute. Now let's go to the browser and hit the same route so that this code will execute. Refresh, and we will not see anything here.
>
> **[3:57](https://www.linkedin.com/learning/laravel-essential-training/creating-models-and-using-eloquent?u=76281980&t=237)** But let's look at the database client to see if our data was inserted. And yes, there we have the new student created. We will do more of this once we start our real project next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** php (2), make (2)
> **UI Navigation:** go to (2), open the (1)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** web.php (1)
> **Code Identifiers:** wherenotnull (1)
> **URLs:** [example.com](https://example.com) (1)
> **Cross-References:** go back to (1)

#### [Challenge: Create a migration to add a column and update a row](https://www.linkedin.com/learning/laravel-essential-training/challenge-create-migration-to-add-a-column-and-update-a-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/challenge-create-migration-to-add-a-column-and-update-a-row?u=76281980&t=5)** Now here's a challenge. Create a migration to update the "students" table we created in one of the previous videos to add an additional column "status" of type "string". You might have to search the [Laravel](../../Skills/Web%20Development/Laravel.md) official documentation to see how this is done. Run the migration after creating it. Now use Eloquent to get the student where the email is [john](../../Glossary/Tool/John%20the%20Ripper.md)@[example.com](https://example.com). Update this student's status as "active" and save the model. Dump the student model and check the result in the browser. Also, verify by checking the values in the database GUI tool. This Branch > 02_challenge has some comments in the routes file to help you out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [John](../../Glossary/Tool/John%20the%20Ripper.md) (1)
> **URLs:** [example.com](https://example.com) (1)
> **Env Vars:** gui (1)

#### [Solution: Create a migration to add a column and update a row](https://www.linkedin.com/learning/laravel-essential-training/solution-create-migration-to-add-a-column-and-update-a-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/solution-create-migration-to-add-a-column-and-update-a-row?u=76281980&t=5)** Congratulations if you solved this challenge on your own. But don't be disheartened if you weren't able to find a solution. It is indeed challenging for a beginner. The first task is to create a new migration to update the table. Let's create this migration using the command [PHP](../../Skills/Software%20Development/PHP.md) artisan make:migration. Let's call it update_students_table. Here's the migration file created for us. Open it and now go to [Laravel](../../Skills/Web%20Development/Laravel.md) documentation, [laravel.com](https://laravel.com), documentation. And on the left, scroll down to find Database: Migrations. And here, if you look under Tables, you will find a link Updating Tables. It seems that we need to use the table method on the schema facade for updating existing tables. It looks something like this. So copy these three lines and paste it within the up method of your migration file. Update the table name to students and we need a status column of type string. So change it accordingly. And let's run this migration using php artisan migrate command. All right. The migration is successful. Let's take a look in the database client, students. And here we go. We do have a new status column. All right, let's go back to the routes file and first find the
>
> **[1:41](https://www.linkedin.com/learning/laravel-essential-training/solution-create-migration-to-add-a-column-and-update-a-row?u=76281980&t=101)** model where the email is [john](../../Glossary/Tool/John%20the%20Ripper.md)@[example.com](https://example.com). So $student equals, use the student model. Use the where clause to find the email john@[example.com](https://example.com).
>
> **[1:59](https://www.linkedin.com/learning/laravel-essential-training/solution-create-migration-to-add-a-column-and-update-a-row?u=76281980&t=119)** And to get a single model, we need to use the first method. Okay, this will give us the student. Now update this student's status using the value active. So you can say $student->status = 'active'; And now to save the model, you simply have to do $student->save(); Now let's dump the result and see what happens. Sorry, dd($student). Okay, let's go to the root URL and see if we get the student with updater status. Go to the root, refresh, and let's look at the attributes. And yes, we do have the status active. We can also verify using the database client, students. And yes, you can see that this row is updated with active column.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Laravel](../../Skills/Web%20Development/Laravel.md) (2), [John](../../Glossary/Tool/John%20the%20Ripper.md) (2)
> **CLI Commands:** find (5), php (2), make (1)
> **UI Navigation:** go to (3), scroll down (1)
> **URLs:** [example.com](https://example.com) (2), [laravel.com](https://laravel.com) (1)
> **Code Identifiers:** update_students_table (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)


### 3. Starting Your Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the project requirements](https://www.linkedin.com/learning/laravel-essential-training/understand-the-project-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/understand-the-project-requirements?u=76281980&t=0)** Learning is incomplete without hands-on experience. We now have the basic understanding of [Laravel](../../Skills/Web%20Development/Laravel.md) to start working on a simple project. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course is dedicated to creating a simple note-taking web application, which we call LiteNotes. Let's look at the features of the app we will be building. This is the landing page with two links, login and register. A new user needs to register with name, email, and password. This creates a new account and logs the user in. An existing user can log in from the login page. Let me log in. You will see all your notes listed as soon as you log in, ordered by showing the latest updated notes first. You can see five notes per page, and then a pagination at the bottom to view more. You can create a new node right from here. Give it a title. Add some text. Both these are required fields, so if you leave any of them empty, you will be prompted. Like so. Let me enter it again. Click on "Save". Once you save the note, you'll be able to see the entire note along with when it was created and when it was changed. You can go back to all notes clicking on the notes, and from here, once again, you can open any of the notes
>
> **[1:34](https://www.linkedin.com/learning/laravel-essential-training/understand-the-project-requirements?u=76281980&t=94)** by clicking on the title. Each note has two options, to edit it or move it to trash. Let me click on "Edit Note". You can edit either the title or the text or both. Let me try to edit this and click on "Save". You'll see a flash message, changes saved, that disappears on page refresh. All right, we can even delete a note. That is, you can move it to trash. You'll be asked for confirmation to move this note to trash. Click on "OK", and there's a message "moved to trash" displayed here. Now you can find this note in trash. Clicking on this will again display the full note with two different options. You can either restore this note or delete it permanently. Clicking on restore will immediately move this back to notes and you can once again edit note or move to trash. Let's move it back to trash again so we can delete it permanently. Click "OK". Go to trash, open this again and this time let's delete it forever. Once again, you will be asked for confirmation. Clicking "OK" will delete this note forever. And finally, you can log out. Quick summary. We have the complete login flow with register, login, log out, and reset password.
>
> **[3:07](https://www.linkedin.com/learning/laravel-essential-training/understand-the-project-requirements?u=76281980&t=187)** You can create notes, view the list, view individual notes, edit them, move to trash, restore deleted items, and delete notes forever. Let's start building the LiteNotes app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** click on (4), go to (1)
> **CLI Commands:** node (1), find (1)
> **Cross-References:** go back to (1)

#### [Add authentication with Laravel Breeze](https://www.linkedin.com/learning/laravel-essential-training/add-authentication-with-laravel-breeze?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-authentication-with-laravel-breeze?u=76281980&t=0)** To build our LiteNotes app, we are starting with a new [Laravel](../../Skills/Web%20Development/Laravel.md) project. If you want to follow along practicing in your local setup without using [Codespaces](../../Skills/Software%20Development/Codespaces.md), create a new Laravel app called LiteNotes. If you're using Codespaces, switch to the main branch or switch to the branch 03_02. Now, the first thing to implement in our project is authentication. Register, login, log out, password reset. All of these are part of authentication. It would take us a long time to build these manually. Luckily, Laravel has a few starter kits to make this very simple and quick. As you can see, there are two starter kits available, Breeze and Jetstream. Breeze provides a simple and minimal starting point for authentication, while Jetstream offers more advanced features. Breeze uses Tailwind CSS for styling. Even if you have no prior knowledge of Tailwind CSS, it's fairly easy to work with it. But if you choose not to include Tailwind CSS in your project at all, you can choose a package like Laravel UI to add authentication. This package uses the Bootstrap framework. Breeze is what we'll use for our project, so let's go ahead and install it in our application using this command. So I'll copy this, open the terminal, and paste it. Run this. This might take a while. Once done, let's use the command [PHP](../../Skills/Software%20Development/PHP.md) artisan breeze:install
>
> **[1:38](https://www.linkedin.com/learning/laravel-essential-training/add-authentication-with-laravel-breeze?u=76281980&t=98)** to install it. Here, you'll be asked which stack you prefer. The simplest one is Blade with Alpine, which is what we'll be using in this course. So pick that. I would not choose dark mode support at the moment, so, no. Asks you for testing framework. We won't be covering that in this course. So pick any and proceed. Now Breeze is installing and it's also building the node dependencies. All right. Everything seems to be done for us. Let's simply go to the browser and refresh. Now everything else looks the same. But notice you have two new links, login and register. Let's see if this works. Register. Let me try registering a new person, which is myself. All right, register. And great. Let me log out. Logging out also works. And log in as the person I just registered. All right. Great. So both login and register works. Let me log out. And if I go to log in, you'll also see a link "forgot your password", but this will not work until you set up your email client in the .env file. I'll let you explore that on your own. Now it's time to look at the code that Breeze has added for us. First, open web.php routes file. Let's look at the routes that was added for us.
>
> **[3:14](https://www.linkedin.com/learning/laravel-essential-training/add-authentication-with-laravel-breeze?u=76281980&t=194)** First, we have a dashboard route and we have a set of routes for profile. Note that all of these have the middleware auth, which means only the users who have logged in can access the dashboard route. You can verify this since we are logged out now. Let's try accessing dashboard and notice you'll be redirected to the login page. Back to the routes file. All the authentication-related routes can be found in auth.php. You can open that here. You can find all of these routes here. And let's look at the controllers: App, HTTP, Controllers. And you can see all the authentication-related controllers added here. You can take a look at each of them and try and understand what's here. You can also go and look at the resources, views, all of the blade views that were added by Breeze, auth, and then components, and so much more. We have all these view files combined with components and layouts. If you like to gain a deep understanding of how to build layouts and components with Blade, this is a great example to dig in and learn from. But for now, we're simply going to use Blade and start building our app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2)
> **CLI Commands:** php (3), make (1), node (1), find (1)
> **UI Navigation:** switch to (2), go to (2), open the (1)
> **Prerequisites:** install (3), setup (1), set up (1)
> **Env Vars:** css (3), http (1)
> **File Paths:** web.php (1), auth.php (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Adding styles to the project](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980&t=0)** It's time to change this landing page. While doing so, we learn how to add styles to our views. So let's remove all of this from welcome view. Go to welcome.blade.[PHP](../../Skills/Software%20Development/PHP.md). We don't need any of these styles, so let's remove that. And if you scroll down and carefully look here, this is the block of code that's adding our login and register links. So let's retain this and remove everything else. Scroll down and remove all of this. And let me also remove the nav tags right here. Or we can leave the nav tags. Let me just format this. Let me also remove all the dark mode classes. We'll not be using dark mode here. All right, now go to the browser and refresh. Of course, we've lost all the content, but also lost the styles because we removed the style tag. But if you go to the login page, all the styles are still here. So let's see where the login page is getting all its styles from. Go to login.blade.php, and you can notice that this is using the guest layout. So go to layouts, guest.blade.php. And notice this line here. Even if you don't know what this @vite directive is,
>
> **[1:34](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980&t=94)** we can understand that a CSS file and a JS file is being loaded into this layout. Vite is a modern build tool that [Laravel](../../Skills/Web%20Development/Laravel.md) uses for bundling the assets in production. So we can simply use this @vite directive in any of our views and drop in our CSS and JS files, and Vite will take care of building it for us. So simply copy this line and paste it in the welcome view. Right here. Now let's go back and refresh our browser window and some of our styles are back. All right. Like I mentioned before, Breeze uses Tailwind CSS for styling. Tailwind is already installed and set up, which is why you can directly use Tailwind CSS classes and style this page. But if you want to write regular CSS instead, you can navigate to resources, CSS, app.css, and remove the Tailwind directives and start writing your regular CSS right here. Now let's make the welcome view a simple yet nice-looking page. You don't have to follow these if you're not interested in styling, just skip to the end. But if you want to follow, let's remove all these classes for the links. This one, and let's remove all of this, and this too.
>
> **[3:09](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980&t=189)** And simply for all three of them, let me select all three, let's just add text-indigo-600, hover:text-indigo-800 maybe. Okay. And let me add a wrap, a div around login and register so that it's positioned absolutely. I can say div class absolute top-0 right-0 p-6,
>
> **[3:43](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980&t=223)** so that it's positioned to the top right corner. Let me refresh the page. You will not see some of the changes because we need to build the styles as we change them. And for the login link, add the right margin. Let's say mr-4 just to add some spacing between login and register links. All right. This should look good enough. But how do we refresh the styles in the browser? In development, you can use the command [npm](../../Skills/Web%20Development/npm.md) run dev to make Vite compile the CSS and JS for the local dev environment. But since we're using [Codespaces](../../Skills/Software%20Development/Codespaces.md), it's a little tricky to make this work. So I will use npm run build which is actually used for production. Now this will rebuild the CSS. We can refresh the browser. And yes, we do have all the changes we made, but every time we make a change we want to rebuild the CSS. For this, we can create another command called watch in our package.[JSON](../../Skills/Web%20Development/JSON.md) file. Go to package.json file and after build, add another script called watch. And this would be same as vite build, but we are also watching the files at the same time. So the moment you change any files, Vite will automatically build it for us. All right. So now clear and type npm run watch. This will keep running in the background.
>
> **[5:17](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980&t=317)** So let's open a new terminal tab for anything else that we need to do. All right, let's go back to our welcome view. Along with the login and register links, let's add the name of our app in large text in the center of the page. So below nav or below this if block, type LiteNotes and let's style this with some large text like text-7xl. And let's center this heading in the page using grid on body. So that would be grid place-items-center. And also this needs to have a minimum height of 100 vh for it to work. All right, let's refresh the browser. Sometimes you'll have to refresh it twice because we're using Codespaces. And this looks good except it's not in the center. That's because we have this nav tag. I think it's better we remove this. All right, let me check now. Once again, this is great. Only one last thing is pending. The title of our webpage still says Laravel. We want it to say LiteNotes. To change this everywhere in the app, you can open the .env file and change the name of the app itself to LiteNotes.
>
> **[6:50](https://www.linkedin.com/learning/laravel-essential-training/adding-styles-to-the-project?u=76281980&t=410)** And to make this reflect in our title, you can scroll up and instead of hardcoding it like so, let's use the config method and get the app name directly. Now, refresh the browser and it says LiteNotes. Great, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [npm](../../Skills/Web%20Development/npm.md) (3), [Laravel](../../Skills/Web%20Development/Laravel.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** make (5), php (3), npm (3)
> **UI Navigation:** go to (6), scroll down (2), navigate to (1), open the (1), scroll up (1)
> **Env Vars:** css (10)
> **File Paths:** package.json (2), welcome.blade.php (1), login.blade.php (1), guest.blade.php (1), app.css (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Create the first model, migration, controller, and routes](https://www.linkedin.com/learning/laravel-essential-training/create-the-first-model-migration-controller-and-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/create-the-first-model-migration-controller-and-routes?u=76281980&t=0)** We are creating a notes taking app, so we clearly need a notes table and a corresponding note model. So let's create the note model using the command [PHP](../../Skills/Software%20Development/PHP.md) artisan make:model. You'll be prompted to type in the name of the model. Like we discussed before, by convention, the model name should start with an uppercase letter and should be singular. So it's Note and not Notes. Now we are asked, would you like any of the following? Yes, we'd like a migration. So select that. Hit a space, and if you scroll down, you'll see something called as a resource controller. You might not know what this is, but check that also and hit "Enter". All right, so now our model, migration, and controller was created. Let's take a look at the model. You can command, click on this. Our model is here. And then click on the migration as well. That is also here with some of the required data prefilled for us. We have our primary key and our timestamps. Let's create one of the columns that is our title of the note. So table, let's keep it string and call it title. Let's add another column of long text for the actual text of the note, and let's call it text. Now each note belongs to a particular user,
>
> **[1:33](https://www.linkedin.com/learning/laravel-essential-training/create-the-first-model-migration-controller-and-routes?u=76281980&t=93)** so we also need a foreign key of that user in this table. That can be created using foreign key ID or foreign key for. And you can pass the user model here, user::class, and import the user model if it did not import. And you need to select this. Great. This looks fine. We can go ahead and migrate it. php artisan migrate. All right. The notes table is created, you can go to the database client and refresh the tables. And here we go. Our notes table is right here. All right. Now that we have our model and database table, what do we need? We need some methods to create a note, view the list of notes, modify a note or delete it, and so on. Right. For that we surely need a controller. That is the resource controller that was created for us. So you can go to app, HTTP, controllers, NoteController, and look at this. [Laravel](../../Skills/Web%20Development/Laravel.md) has created the index method, create, store, show, edit, update, and destroy. All of the actions that we need to perform on our notes. This saves us a lot of time. These actions are also known as CRUD operations that are common to every single web application. There's usually at least one resource that needs to be created,
>
> **[3:07](https://www.linkedin.com/learning/laravel-essential-training/create-the-first-model-migration-controller-and-routes?u=76281980&t=187)** displayed, edited, deleted, and so on. So that's what a resource controller is. We will soon start adding functionality to each of these actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
> **UI Navigation:** click on (2), go to (2), scroll down (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** http (1), crud (1)
> **Cross-References:** we discussed (1)
> **Definitions:** known as (1)

#### [Register resource routes](https://www.linkedin.com/learning/laravel-essential-training/register-resource-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/register-resource-routes?u=76281980&t=0)** Before we start adding functionality to these controller actions, we need routes to call each of these actions. So go to the routes file, web.[PHP](../../Skills/Software%20Development/PHP.md). Here, we first need a get route to show all of the notes that points
>
> **[0:20](https://www.linkedin.com/learning/laravel-essential-training/register-resource-routes?u=76281980&t=20)** to our NoteController's index action, index. And then we need a route to show the form that will point to the create action. We need a route to store it, and we need a route to update, and so on. Instead of writing all these multiple route declarations, you can register a single resource route that points to the resource controller like so. We use the resource method and we give the URL like notes. This is the common URL. And then we point it to the entire controller. This single line will create all the resource routes required for us. Let's verify using the command php artisan route:list. Notice all of these routes were created for us. And look at the names of each of these routes: notes.index, notes.store, notes.create, and so on. So it uses notes and then the suffix will be the method, controller method that it points to. There's one more step remaining though. We want all these routes to be available only to logged in users, right? So let's add the auth middleware here, middleware ('auth'). The moment we add these, [Laravel](../../Skills/Web%20Development/Laravel.md) will make sure that none of these routes are available without login. Let's verify.
>
> **[1:52](https://www.linkedin.com/learning/laravel-essential-training/register-resource-routes?u=76281980&t=112)** Go to your root URL /notes. We don't see a 404 error. That means this route exists. We just see a blank page because we are yet to add a view. Now go back to the dashboard, log out and now try accessing the notes URL. Okay, let me refresh. Notice that you are redirected back to the login page. Let's log back in again. And go to the homepage. We see that we did not style this properly. So let me open the welcome route and right here I probably have to add an absolute, the same thing, probably I will add this div on top here so that we won't have a problem. Yeah. Somewhere here. Now let's refresh. Yeah. This isn't the right part. All right. Now, we don't actually need a dashboard route. Instead, we want to redirect the user to the notes page after login. Now this behavior can be changed in the AuthenticatedSessionController. AuthenticatedSessionController. Scroll down. In the store method, change this route to our notes index route, which is notes.index.
>
> **[3:27](https://www.linkedin.com/learning/laravel-essential-training/register-resource-routes?u=76281980&t=207)** Remember, we saw that this was the name of that particular route. And apart from just this file, AuthenticatedSessionController, the intended route dashboard exists in multiple other files. We need to replace all of them with notes.index. So go to Edit, Find in files. Search for dashboard. And you can see that it exists in so many of these places. Select each of them carefully and replace it with notes.index. You can do a replace all as well, but just to be safe, I'd love to do this manually in all the places. The navigation blade and all of these places we will replace in a while. Authentication test, email verification test, and then the registration test. Done. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of it will be modified. Now, any time you log in, you will be directed to this instead of the dashboard route. All right. We have the entire structure ready for adding functionality and views. Let's add all of it, one action and one view at a time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** go to (4), open the (1), scroll down (1)
> **CLI Commands:** php (2), make (1), find (1)
> **Env Vars:** url (4)
> **File Paths:** web.php (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** before we start (1)

#### [Challenge: Create a new resource](https://www.linkedin.com/learning/laravel-essential-training/challenge-create-new-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/challenge-create-new-resource?u=76281980&t=5)** Here's a challenge. Just the way we created a new model, migration, and resource controller for a note, do the same to create a new resource called Notebook. In the future challenges, we will use this notebook resource to organize different notes of each user. So create two columns in the notebooks table, one for the name of the notebook and another for the foreign ID of the user table. Apart from the primary ID key and timestamps, of course. When you complete this challenge, you should have three files: a notebook model, a migration file, and a notebook controller. You should also have seven new CRUD routes for the notebook resource, like so, and you should be able to see a new notebooks table in the database client.

> [!info]- Semantic Content
>
> **Env Vars:** crud (1)

#### [Solution: Create a new resource](https://www.linkedin.com/learning/laravel-essential-training/solution-create-new-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/solution-create-new-resource?u=76281980&t=5)** Let's solve this challenge. First, create a new model using the command [PHP](../../Skills/Software%20Development/PHP.md) artisan make:model Call it notebook. And yes, we would like migration and resource controller. Hit "Enter". Great! Our files are created. Now go to the migration file and we need to add a name column in the notebooks table. So $table->string, and the name is name itself. We also need a foreign ID column for user. So foreignIdFor(User::class); and if the user model is not imported, import it. App, models, user. Great. Let's run this migration using the command php artisan migrate. Let's check the database client to see if this table was created. Refresh tables. And yes, we have a new notebooks table with the name and user ID column. So two tasks are done. Now we need to create the resource routes. So go to the routes file, web.php. Copy the same note's route declaration and paste it down below.
>
> **[1:37](https://www.linkedin.com/learning/laravel-essential-training/solution-create-new-resource?u=76281980&t=97)** Change notes URL to notebooks instead and change NoteController to NotebookController. Once again, either right-click and import this class, or you can use the keyboard shortcut Ctrl + Option + I. All right, now let's check if we have seven new routes related to notebook. Use the command php artisan route:list. And let's verify.
>
> **[2:06](https://www.linkedin.com/learning/laravel-essential-training/solution-create-new-resource?u=76281980&t=126)** And yes, we have all the new routes related to notebooks. Great. This completes the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4)
> **CLI Commands:** php (4), make (1)
> **UI Navigation:** go to (2), right-click (1)
> **File Paths:** web.php (1)
> **Code Identifiers:** foreignidfor (1)
> **Env Vars:** url (1)


### 4. Creating, Indexing, and Showing

[↑ Back to Table of Contents](#table-of-contents)

#### [Add an index method to fetch all notes](https://www.linkedin.com/learning/laravel-essential-training/add-an-index-method-to-fetch-all-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-an-index-method-to-fetch-all-notes?u=76281980&t=0)** As we just saw, our notes page is blank and we're going to change that soon. This route calls the index action in our controller. So open NoteController.[PHP](../../Skills/Software%20Development/PHP.md). This is where we [Fetch](../../Skills/Web%20Development/Fetch.md) our notes and display them. But since we don't have any notes yet, let's manually add a note to the database using GUI. Notes. Click on the yellow plus icon to insert all the data. Let's manually give it an ID, 1, title could be first note. Add some text here, like some text of the note here, and then let the user ID be 1 because we have created one user, we have logged in as registered one user, and that ID would be 1. For the timestamps, you can simply click on it and click "OK". It will enter the current timestamp. Same with updated_at. Insert this. And now that we have a note, let's fetch this in our controllers index action. Each user should be able to view only their notes. So let's get the logged in user's ID first using auth facade,
>
> **[1:19](https://www.linkedin.com/learning/laravel-essential-training/add-an-index-method-to-fetch-all-notes?u=76281980&t=79)** it gives us access to the logged-in user information. So their ID can be fetched using the ID method. Let's import the class here, import class. All right. Now using Eloquent, let's get all the notes of this user with $notes = Note::where ('user_id') is this $user_id and let's get them
>
> **[1:53](https://www.linkedin.com/learning/laravel-essential-training/add-an-index-method-to-fetch-all-notes?u=76281980&t=113)** And let's dd the notes right here to see if we are getting that single note that we created. All right. So go to the browser, refresh. Yes, we do have a collection with a single item that we just created. All right. Let's quickly create another note. Go to notes and create one more. Now go to the browser and refresh to see that we have both the notes here. Yes. All right, let's go back to the NoteController. Now using the collections each method, $notes->each. Let's display only the title of each note. function($note) Here we can simply dump the note's title. All right. And let's go to the browser. Refresh. All right. Now notice that the notes here are fetched in the default order. That is first note and second note, the way we entered them in the database. But we want to show the latest created note first. So let's chain this with the latest method and then get them. Now if you refresh the browser, you have the latest created note first. But what if we update the note. Say, for example, we go to this and
>
> **[3:31](https://www.linkedin.com/learning/laravel-essential-training/add-an-index-method-to-fetch-all-notes?u=76281980&t=211)** simply change the updated_at column of the first note. Probably just add another minute to this. All right. And now if we refresh, we still have the second note first, though we updated this. That's because by default this latest method gets the latest created. But what we want is the latest updated. So you can simply type in the column name, updated_at, so that this is ordered by the updated column. Now if you refresh. Oh sorry, I think I need to update the timestamp to be greater than this. Yeah. So let's make it 12:36. And now if you refresh. Now let's assume we make changes to the first note. Change the updated_at column manually just to test what happens. Since this is 12:35, let me make this a little more like, say, 12:37 or something and commit the changes. And now if you refresh, you will still see the second note first and then the first note. Because by default, this latest method gets the latest created and not the latest updated. But this can be changed by simply passing the updated_at value here. So now it sorts this data using this column. Right now if you refresh, you will see that the latest
>
> **[5:07](https://www.linkedin.com/learning/laravel-essential-training/add-an-index-method-to-fetch-all-notes?u=76281980&t=307)** updated note appears first. All right. Let's go back and remove this. In the next video, we'll create a view to display the notes with the correct styling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** updated_at (5), user_id (2)
> **UI Navigation:** go to (5), click on (2)
> **CLI Commands:** make (3), php (1)
> **Ports:** :36 (1), :35 (1), :37 (1)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** notecontroller.php (1)
> **Env Vars:** gui (1)

#### [Create an index view to display all notes](https://www.linkedin.com/learning/laravel-essential-training/create-an-index-view-to-display-all-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/create-an-index-view-to-display-all-notes?u=76281980&t=0)** It's time to create the view file for displaying all the notes in the index page. Go to resources, views. And here it's best to create another directory called notes to group all the related views. So within the notes directory, create a new blade file, index.blade.[PHP](../../Skills/Software%20Development/PHP.md). The layout that we wish to have on this page is similar to the dashboard view. So open the dashboard blade file, copy everything from here, paste it here. Now these underscores and brackets that you see are used for translation. So if you want to show your app in different languages, you can do that. For now, let's remove this and simply replace the dashboard [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) with notes. And down here, oh, we don't even need this. And down here, let's simply say all notes for now. And in our NoteController's index method, let's return this view. Return view('notes.index'). Now we use the dot notation to access the files, the blade files within the notes directory. All right. Now let's refresh the page. Perfect. We have the layout that we need with notes, title, and all notes. Now go back to the controller. Now this view needs to access the notes data.
>
> **[1:35](https://www.linkedin.com/learning/laravel-essential-training/create-an-index-view-to-display-all-notes?u=76281980&t=95)** To do that, we can simply pass the data using the with helper function. Notes, and the data is notes. So now in the index view, we can access all the notes using @foreach for each blade directive. @foreach($notes as $note). Let's add a div, div and a heading, h2,
>
> **[2:06](https://www.linkedin.com/learning/laravel-essential-training/create-an-index-view-to-display-all-notes?u=76281980&t=126)** for the title. And here we can display the note title and a paragraph where we can display the note text. Okay. Let's look at the browser. And yes, we do have the note, its text, the title and the text again. Let me add some styling to make it look better. I'll add this @foreach directive above this here. So each note is separated and @endforeach down here. And let me just remove all of these divs. We don't need that. Let's simply add a font-bold and text-2xl for this title.
>
> **[3:01](https://www.linkedin.com/learning/laravel-essential-training/create-an-index-view-to-display-all-notes?u=76281980&t=181)** You can also add some color like text-indigo-600. For the paragraph, let's simply add an mt-2, some margin top. And just to space out the notes, let me just add a space-y-6 for the parent div and we need some padding for each of the divs, so let me simply add a padding, p-6. Now let's look at the browser. All right. This now looks good. Now I'd like to add the date and time when each note was updated down here, below each note. So let's add a span tag right here, span. And let's add the note updated_at column. If you refresh the browser, obviously, we get the date and time. But this is definitely not readable by a human. So let's change that. Since our updated_at timestamp is a carbon date, we can use the diffForHumans helper class, diffForHumans, which will convert the date into a readable format. Let's see what this gives us. Refresh. Great, we have one hour ago. Let's add some styling to the span tag, span class block so that I can add a margin top, mt-4, text-sm, and an opacity of 70 just to make
>
> **[4:44](https://www.linkedin.com/learning/laravel-essential-training/create-an-index-view-to-display-all-notes?u=76281980&t=284)** it look a little grayed out. Refresh. Perfect. Now what if we don't have any notes to display? That is, the user hasn't yet created any note. For this, you can change the @foreach to @forelse instead. And you can change this to @endforelse. Now you have another empty directive. So if this is empty, you can add any text that you want to show here. So we can simply add text saying you have no notes yet. All right. So we surely need to make more changes to this view. But it now looks much more closer to our final output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (3), php (1)
> **Code Identifiers:** updated_at (2), diffforhumans (2)
> **UI Navigation:** go to (1), open the (1)
> **File Paths:** index.blade.php (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Add pagination and clean up the index view](https://www.linkedin.com/learning/laravel-essential-training/add-pagination-and-clean-up-the-index-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-pagination-and-clean-up-the-index-view?u=76281980&t=0)** Currently, we're fetching all the notes of the user and passing them to the view. But what if the user has hundreds of notes? We surely need pagination. Since it's very common to add pagination, [Laravel](../../Skills/Web%20Development/Laravel.md) has made it very easy for us. Just replace get here with paginate and pass the count of items you'd like to display in a page. And just for demonstration, let me add 1 here. Save the file and refresh. As you can see, we have one single note, but we also need the links here for navigation. That's also easy. Just go to the view first. At the end, after foreach, you simply have to add $notes->links. Like so. And now refresh. Look at that. Out of the box, we get pagination. And all of this is styled using Tailwind CSS and all the links work as expected. If you wish to customize the styling, you can do so by passing your own pagination view right here. All right, now that we know it works, let's go back to our controller and change this to 5. Back to the browser. This view looks fine right now, but we have a few problems with the display of each node here. Let me show you what it is. Let's go to database client. Go to the notes and let me edit the first note. I will paste four long paragraphs here and save this.
>
> **[1:41](https://www.linkedin.com/learning/laravel-essential-training/add-pagination-and-clean-up-the-index-view?u=76281980&t=101)** And now if you refresh, you'll see that all the four paragraphs try to get displayed in the same place. Yes, this is four different paragraphs, which is not what we want. We just want to show a simple excerpt. To do so, let's go to the view, and instead of displaying the entire note text here, let's use the limit helper of the str facade where you can pass the string. So this would be $note->text. And the limit may be about 200 characters. And at the end of that, you will see three dots, the ellipsis. So now let's check. Yeah. Now you see that we have 200 characters followed by ... We just have one more thing to change. If you noticed, we still have this dashboard link in the navbar. We'd like to replace that with notes instead, along with the hyperlink. Go to navigation.blade.[PHP](../../Skills/Software%20Development/PHP.md). You can find that in resources, views, layouts. Here, search for Dashboard. Make it case sensitive and you can replace this with Notes. Replace and replace and then search for the lower case dashboard. And this would be the route name. We can replace that with notes.index.
>
> **[3:15](https://www.linkedin.com/learning/laravel-essential-training/add-pagination-and-clean-up-the-index-view?u=76281980&t=195)** Replace, replace, replace. And this is in five different places because some of them are for responsive view. Also, while this is the hyperlink, this is used to make sure that the tab is highlighted whenever it's selected. You'll see what I mean. Save this page and now refresh. Yeah. Now dashboard is successfully replaced with notes. And since we are on this exact page, this is highlighted. If you move to a different page, then it will not be. That's why we had those checks like request()->routeIs ('notes.index'). All right. We have this dashboard link in one last place which is if you go to the root URL while you're logged in, you will see dashboard here. We need to remove that as well. So open the welcome blade, blade view. And right here, we can replace this with notes and also replace the
>
> **[4:19](https://www.linkedin.com/learning/laravel-essential-training/add-pagination-and-clean-up-the-index-view?u=76281980&t=259)** link with notes.index. All right, let's check. All right. This is perfect. We have notes here. And dashboard is gone from everywhere. So we can happily remove or delete the dashboard view. Yeah. We can delete this file, delete permanently, and also delete that route from web.php. This one. All right. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
> **UI Navigation:** go to (6), open the (1)
> **CLI Commands:** php (2), make (2), node (1), find (1)
> **File Paths:** navigation.blade.php (1), web.php (1)
> **Env Vars:** css (1), url (1)
> **Code Identifiers:** routeis (1)
> **Cross-References:** go back to (1)

#### [Add a create method and view to show a form](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=0)** Our users should be able to quickly add a new note. So right here in the notes page, above all notes, let's add a link to create a new note that will take the user to a form. We will be using a few more buttons and other pages as well. So let's create a button component and reuse it. If you go to resources, views, components, we actually already have a button component which is primary button and a secondary button. But this uses button type equals submit. What we need is actually a link button. That is a link that looks like the button. We can reuse this styles though. So let me copy all of this. Create a new component and call it link-button.blade.[PHP](../../Skills/Software%20Development/PHP.md). and paste it here and replace this button with a instead. Yeah, a, and then the href will be merged. We have to remove type equal submit and just keep the class. So all of these styles will be applied. Now open the index blade view and add this component at the top before displaying the notes. You can do so using the x-link button component that we just created, and the text could be something like new note. All right. And now for the URL, that would be the create route.
>
> **[1:39](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=99)** So it's route('notes.create'). We're of course yet to add the functionality, but let's just see what this gives us. Refresh. Great. We have the new note button here. Let's click on it. And yes, it does take us to the correct URL. Now open the note controller. And here in the create method, simply return the view('notes.create'). We need to create this view file. So go to resources, views, notes, and new file, create.blade.php. We need the same layout as index. So go to index.blade.php, copy everything and paste it here. Let's just remove all of this. We only need this div with a white background so I will retain that but remove everything else. All right. Save this and let's refresh the browser. Yes, we have the layout as needed. Now it's time to add the form to create a new node. Add the form element. Leave the action blank for now and the method will be post. Also, let me add a class here to restrict the width of the form. So I'll just say max-w-3xl for now.
>
> **[3:17](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=197)** Now we need an input field for the note title and the text area field for the actual note here. We must already have an input component that's being used for the login and register [Forms](../../Skills/Web%20Development/Forms.md). Let's take a look at that. If you go to components, you can see that there is text-input.blade.php. This is the one that's used in all the login pages. We can simply reuse this. So add x-text-input. And give it a name of course. Name equals title. All right, let's save this. Look at the browser and see what we've got. All right. We need to make this a full width. So let's do that by adding a class w-full and give it a placeholder,
>
> **[4:14](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=254)** note title. Now following the input component, let's similarly create a text area component. So go to components and create a new file, textarea.blade.php. You can copy the content from text input component, paste it here and replace input with text area. And here we'll have to close text area. And we can use this in our view file now. x-textarea. And this name would be text because that's what we called it. Placeholder will be, type your note. And then we can even add rows. Number of rows in the text area could be eight or something. Only thing is text areas are slightly different from inputs. Here we don't have a value attribute. We need to specify the value like so. And then here in the component, we need to accept this value. Set it to blank by default, and right here, use that value. All right. Back to the form. We need a button now. For this again, we have the primary button. So we can simply add it here, x-primary-button.
>
> **[5:56](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=356)** And let the button text be save note. And now to the text area and button, just add some margin top. So we can do that here. Class equals mt-6 or something. Same goes for the button as well. All right, now comes the form's action attribute. When you submit this form, we need to send the data to the store route. So specify that using the route helper method and the route is notes.store. I'll try to open the browser, refresh. Okay, there is a syntax error. Let's check. Right here in the text area component, all right, I did forget this fat arrow. Let's go back and refresh. It looks like we didn't add the class properly. So go back to the blade file and yeah, we need to add a w-full here. Let's see. Refresh. All right. This is good. But somehow I think the max-w-3xl isn't working for the form. Let me try max-w-2xl, refresh. And yes, this is working, but I think I'll limit the wrapper div also to 2xl or I will remove this and add that right here instead of 7xl.
>
> **[7:32](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=452)** Now I'll add here. Make it max-w-2xl. Okay, refresh. Great. Now the form looks perfect. Let's just type something here and try submitting the form. First note, some text here. Save note. And yes, we get a 419, page expired error. What does this mean? This actually happens to prevent cross-site request forgery attacks. Let's look at the docs. Go to [laravel.com](https://laravel.com), documentation, and you can search for CSRF. And you can read more about the vulnerability here. Basically, all forms that use post, put, patch, or delete requests are vulnerable to such attacks. So [Laravel](../../Skills/Web%20Development/Laravel.md) automatically generates a CSRF token for each session to make sure that the authenticated user is the one making the request and not someone on the outside. So every form on Laravel with such requests has to include a CSRF token to validate the request, and this can simply be done by adding a CSRF blade directive within the form. Note that any form with the method post, put, patch, delete has to have the CSRF blade directive, otherwise you get the 419, page expired error. Now go back and try refreshing the browser.
>
> **[9:09](https://www.linkedin.com/learning/laravel-essential-training/add-a-create-method-and-view-to-show-a-form?u=76281980&t=549)** You can inspect element and you can inspect the form. Let me close this. You can inspect the form and see that this new hidden input has been added. This is the CSRF token I'm talking about. Okay. Close this. Now create another node. Some text here, text here. And try submitting the form this time. And yes, now we don't get any error. Let's see how to save this note next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (5), [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (2)
> **CLI Commands:** php (5), make (3), node (2)
> **UI Navigation:** go to (6), open the (3), click on (1)
> **Env Vars:** csrf (6), url (2)
> **File Paths:** link-button.blade.php (1), create.blade.php (1), index.blade.php (1), text-input.blade.php (1), textarea.blade.php (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)
> **URLs:** [laravel.com](https://laravel.com) (1)

#### [Add a store action to save the data](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980&t=0)** Now let's add the required functionality in the store method of our controller to save the note. Let's first die and dump this request here to see what we've got. dd $request. Go to the browser and refresh. Click "Continue". Now expand this request and we have three parameters. Yes, we have the token and our title and text. But before we insert this data into the database, we need to validate them. This can be done using the validate method on the request object. Request validate. And we can pass in the rules here. So the rule for title validation rule would be, you know, probably you can say this is required and it could have a max length of 120 characters or something like this. And then for the text, we can simply have required validation. All the available validation rules can be found in the [Laravel](../../Skills/Web%20Development/Laravel.md) documentation right here. So you can take a look at this. All right. If this validation passes, our code will continue executing here normally. But if the validation fails, the user will be redirected to the form with error messages. Let me save this. Go back, and try to leave both of these empty. Let me refresh this once, and try to submit the note.
>
> **[1:35](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980&t=95)** Notice that we are directed to the store method and redirected back, but we don't see anything because we're not displaying the errors yet. Let's display the necessary errors by using the error blade directive. So this also can be done very easily. Let's open the create blade view. Below the text input, if there is an error, we can check that, like so, @error('title'). And we can display the message here by using a div, maybe div class, text-sm, maybe a margin top, one, and text red, 500. And you can display the message by simply using this message variable. It will be filled accordingly, and we can do the same right below the text area as well. Just change this to text instead. So if there is some validation that fails here, this message will be displayed. And if anything fails here, this message will also be displayed. Let's check. Go to the browser, refresh, and let's submit a blank note. And awesome! We do have the message. The title field is required, the text field is required. Now what if we type a valid title, new note and try to save it? We leave the text area blank so this error message is gone. That's great, but the title that we typed is gone.
>
> **[3:10](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980&t=190)** The user obviously expects the valid fields to retain the values after redirection, right? For this, we can set the value of the fields by making use of the old blade directive. I'll show you what this means. So right here for the text input, you can say value equals @old('title'). So what happens is, if there are any validation errors in the other fields, this old value that you entered will be retained if this field was valid. So let's pass in the same thing here as well. @old('text'). Okay. Let's go back to the browser, refresh. All right. Let me type a note here but leave this blank. Try to save the note, and this is retained. Let me try to keep this blank and type something here. Try to save the note. And now this is retained. Great. So let's type both now. Some text here and try to save the note. All right. Now we're not redirected back because our data is valid. Let me just go back and type in some long paragraphs and try to save this. All right. Save note. Now let's go back to the store method of the controller where we save our data.
>
> **[4:46](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980&t=286)** Okay. Right after the validation is where we save our data. We have already seen how to insert data into our table using Eloquent. So create a new note object, new Note. And then we need the attribute's user ID, which is nothing but the authenticated user's ID. We need the note title, which we can get from our request, $request
>
> **[5:20](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980&t=320)** ->title, and then our text would be $request->text. All right. So let's try and save this note, $note -> save. Of course, this needs to have parentheses. That's why we're seeing this error. All right. Now let's refresh, continue. And we seem to have an error, add user ID to fillable property to allow mass assignment. This is again another security feature of Laravel. If you go to the docs and look for mass assignment, you will see that Eloquent models are protected against mass assignment vulnerabilities by default. To get around this, open your note model. And here, you have two options. You can either use a protected variable, protected variable fillable. And you can specify all the fields that you want to be mass-assigned like we just did. Or you can use this protected guarded variable and specify the fields that you don't want to be assigned, which you want to protect from mass assignment. So here, you can simply use guarded and leave it as a blank array to specify that you don't want any of the fields to be guarded. You want all of them to be fillable.
>
> **[6:56](https://www.linkedin.com/learning/laravel-essential-training/add-a-store-action-to-save-the-data?u=76281980&t=416)** Just be careful when you do this, because in case you don't want some of the fields to be filled, you'll have to guard them. All right, now, I think this should work. Just refresh the browser one last time. Let's see what happens. Yes, we do get a blank page, no errors. That means our first note has been saved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (2)
> **UI Navigation:** go to (3), open the (1)
> **Cross-References:** go back to (2)
> **Documentation:** the docs (1)
> **Definitions:** is an  (1)
> **Warnings:** be careful (1)

#### [Add a show action and view to display single note](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=0)** The next thing we implement is a view to display an entire individual note. First, let's turn this note title into a link by wrapping the title in anchor tags. So open index blade view. This is the title. So here, let's just wrap it with anchor tags a href. And here close the a tag. The URL here will be the show route, right? So that is route('notes.show'). And here we need to pass the second parameter. That is we need to pass which note we are trying to show. Now if you open the NoteController and if you go to the show method, this accepts the entire note as the parameter. So here you can pass this note itself as the second argument. All right. Let's save this, go to the browser, refresh, and let's add a class that, on hover, that shows an underline. So we can add a class hover:underline. And now let me refresh. And this is better. All right. Now let's click on the first note. All right. Notice we are redirected to the URL with the note ID. Notice that we didn't have to explicitly provide the note ID here.
>
> **[1:35](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=95)** We simply passed the entire note model. This concept in [Laravel](../../Skills/Web%20Development/Laravel.md) is called route model binding. We can inject models in various places conveniently using this. You can read more about this in the documentation. Now open the NoteController. The show method is where we return the view that displays the specific note. We already have the note here. We can simply return a show view, return view('notes.show').
>
> **[2:06](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=126)** We can either pass the note here as a second argument, or you chain it using the with method. Let me use the second argument here. Note will be $note. All right, but we shouldn't directly return the view. What if this note belongs to a different user? So if I randomly type the ID of another user here, I will be able to see that note if we don't check, right? So let's add a check here before we return the view. Let's check if $note -> user_id, if that is not equal to the Auth::id
>
> **[2:49](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=169)** that is the logged-in user, then you should abort with an error. Abort 403. So that means it's forbidden. Sorry, the codes are not needed. Yeah, abort 403. So the user won't be able to access any other user's notes. So if it's equal, then we return the view. So in our case, the simple if statement works. But once your application grows more complex, you may have a lot more such rules, then you can use something called gates and policies to handle authorization. You can explore that on your own. Now let's create this view('notes.show'). Go to resources, views, notes, new, show.blade.[PHP](../../Skills/Software%20Development/PHP.md). Once again, this layout is similar to that of the index view. So let me copy all of that. Paste it here. Remove the @forelse method and all of these, the unnecessary blocks. And here, remove this link as well. Now remove the href. We don't need that. And then increase this size to maybe 4xl. And then remove the limit. We want to show the entire note text here, increase the margin to probably mt-4, and then remove the last updated timestamp.
>
> **[4:25](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=265)** We will add that elsewhere. Okay. Now let's go back and refresh the browser. Great. We have the full note displayed here, but notice that the line breaks are not shown. To preserve the line breaks and any consecutive spaces, add this class whitespace-pre-wrap to the paragraph, whitespace-pre-wrap This is in Tailwind CSS. You can check the exact CSS rule for this. Okay. Now let's check if this works. Great, now it works. Now, at the top of the note, I'd like to add details of when the note was created and last updated. So go back and add a div here, div with the class flex and a gap of six or something, and then add two paragraphs here.
>
> **[5:23](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=323)** Let's say "Created" and then say "Last changed" or something.
>
> **[5:32](https://www.linkedin.com/learning/laravel-essential-training/add-a-show-action-and-view-to-display-single-note?u=76281980&t=332)** I'll make this bold. So, strong. Sorry, not string, strong. This as well. And then maybe add some class to the paragraph like, you know, just to make it a little more grayed out, opacity, 70. I'll add the same class right here. And now here, we'll pass the timestamp. So you can say $note -> created_at. And, of course, we need to use the diffForHumans to make this date readable. All right. So this would be within curly braces. And here, this would be updated_at, diffForHumans. Okay. Open the browser. And yes, this looks perfect, except for a small space here. Looks like I missed it. Yeah. There you go. Let's refresh one last time. And this is great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** open the (3), go to (2), click on (1)
> **Code Identifiers:** diffforhumans (2), user_id (1), created_at (1), updated_at (1)
> **CLI Commands:** make (3), php (1)
> **Env Vars:** url (2), css (2)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** show.blade.php (1)
> **Documentation:** the documentation (1)

#### [Create a unique ID for each note](https://www.linkedin.com/learning/laravel-essential-training/create-a-unique-id-for-each-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/create-a-unique-id-for-each-note?u=76281980&t=0)** The individual note page we just created looks perfect, except for one thing, this URL. I don't like to expose the auto incrementing ID of the notes table in this URL. It clearly shows how many notes are there in the table in total. We can create either a slug for each note or use a unique ID in addition to the primary key. Let's go for a unique ID. We can create another migration to update the table, but let's start fresh because we don't have the unique IDs for the notes we have entered already. So we can go to the notes table and delete all the notes here. Delete. Confirm. All right. And now open the terminal. Let me close this and do [PHP](../../Skills/Software%20Development/PHP.md) artisan migrate:rollback. So it will roll back one migration, the previous one that we did. Since we created our notes table in the previous migration, let's roll back that. And yes, this was rolled back. Now let's open this migration file, create_notes_table and update
>
> **[1:18](https://www.linkedin.com/learning/laravel-essential-training/create-a-unique-id-for-each-note?u=76281980&t=78)** this with another unique ID. So here, you can say $table->uuid. All right, save this. Now let's migrate this using php artisan migrate Okay. Migration is run. Let's look at the notes table to make sure that the column is added. It's added. All right. And now in our NoteController, when we insert a new note, we should also create a unique ID. Right here. So this can be done very simply using the string facade Str::uuid(); That will create a unique ID for us. We might have to import this. And yes. Now let's see if this works. Go to notes. Create a new note. Great. We see that you have no notes yet. Create a new note. Let me type New note and I'll paste some paragraphs. Click on "SAVE NOTE". Yeah. Of course, we're not yet redirecting it to the notes page. We are still in the store route. We'll fix that soon. Great, our note is created. Let's check if our uuid was entered. We go to the notes table and yes, we do have a uuid.
>
> **[2:53](https://www.linkedin.com/learning/laravel-essential-training/create-a-unique-id-for-each-note?u=76281980&t=173)** Everything was entered perfectly, but if you click on the note to view, you still see the ID itself. That is because route model binding uses ID key by default to resolve the model. We can customize this in the model. Open note model. Here, add a public method, public function getRouteKeyName() and return uuid here. So now any model that you pass using route model binding will be resolved using uuid. So now you go back and refresh. Let's try opening this note. And now great. You'll see that the primary key in the URL has been successfully replaced with the unique ID for each note.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **UI Navigation:** go to (3), click on (2), open the (1)
> **Env Vars:** url (3), save (1), note (1)
> **CLI Commands:** php (2), make (1)
> **Code Identifiers:** create_notes_table (1), getroutekeyname (1)
> **Tools:** terminal (1)

#### [Challenge: Add index and create methods for a new resource](https://www.linkedin.com/learning/laravel-essential-training/challenge-add-index-and-create-methods-for-new-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/challenge-add-index-and-create-methods-for-new-resource?u=76281980&t=5)** Here is a slightly longer challenge. For the notebook resource we created in the previous challenge of chapter two, add a functionality to the index, create, and store actions. Create the respective views, too. You can copy all of the layouts from the notes view. So by the end of this challenge, the user should be able to view all the notebooks at the URL /notebooks. It should look something like this in the notebooks URL. From here, the user should be able to click on a button to create a new notebook. With the notebook name, you can give a name to the notebook and click on "Save". When the user saves, the new notebook should be created like so.

> [!info]- Semantic Content
>
> **Env Vars:** url (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)

#### [Solution: Add index and create methods for a new resource](https://www.linkedin.com/learning/laravel-essential-training/solution-add-index-and-create-methods-for-new-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/solution-add-index-and-create-methods-for-new-resource?u=76281980&t=5)** Let's start adding functionality to the index action of the NotebookController. We can copy this from the index action of the NoteController. So open NoteController. Copy this and paste it here. Change all the instances of note to notebook and import auth.
>
> **[0:30](https://www.linkedin.com/learning/laravel-essential-training/solution-add-index-and-create-methods-for-new-resource?u=76281980&t=30)** And here, we don't need pagination, so you can replace this with get. And this would be notebooks. return view('notebooks.index') ->with('notebooks', $notebooks); All right. And while we are at the controller, let's also edit the create and store method. In the create method, you simply return a view which could be notebooks.create. And in the store method, once again we can copy this from the NoteController's store method. Copy all of this and paste it here. Replace the title with name instead and let the rules simply be required. Remove text, and new notebook would be new Notebook, and you can remove the uuid, you can remove the text. You can replace title with name. This would be $notebook->save(); And once it's saved, let's return to_route ('notebooks.index'); But one thing, to be able to save values like this, that is mass assignment, we need to set the guarded property to an empty array in the notebook model. So open notebook model. And here, set protected $guarded equals an empty array.
>
> **[2:08](https://www.linkedin.com/learning/laravel-essential-training/solution-add-index-and-create-methods-for-new-resource?u=76281980&t=128)** Okay, let's create our views now. Go to resources, views and create a new directory, just like we did for notes and call this notebooks. Here we can copy the create and index views from notes itself. So copy and paste them into notebooks. Here, let's open the index view first. Change all the instances of notes with notebooks like the title, New notebook. And here the creation route has to be notebooks.create. @forelse ($notebooks as $notebook). We don't need a link yet at this moment, so let's just remove the link here. Let's keep the h2 part. Remove this and let's change the styles to probably just text-lg and let the font-bold. Everything else is fine. We can remove the paragraph and the span because all we need here is the notebook's name. Okay. And we don't have pagination, so let's remove this as well. And here you can say you have no notebooks yet. Let's also reduce the padding to P4. All right. Now open the create view in notebooks. Here again, change all instances.
>
> **[3:43](https://www.linkedin.com/learning/laravel-essential-training/solution-add-index-and-create-methods-for-new-resource?u=76281980&t=223)** I think we can change the title to Create Notebook here. And down here, the action will be notebooks.store. Once again, we don't need the text area. Let's remove that. Let's retain the text input. Change the name to name and this would be notebook name, the placeholder. This would be old name and name again. This can be message itself. And here I'll just say save. I'll rename the button to save. This should be it. Let's test it out. Go to the notebook's URL. We see no notebooks. Let's create one. Give it a name like travel or something and click on "Save". And perfect. Our new notebook is saved. Let's create another one like maybe recipes, save. This is also saved. Great. Challenge is complete.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), open the (2), click on (1)
> **Code Identifiers:** to_route (1)
> **Env Vars:** url (1)
> **Analogies:** just like (1)


### 5. Editing, Updating, and Deleting

[↑ Back to Table of Contents](#table-of-contents)

#### [Add an edit method and view to allow editing of the note](https://www.linkedin.com/learning/laravel-essential-training/add-an-edit-method-and-view-to-allow-editing-of-the-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-an-edit-method-and-view-to-allow-editing-of-the-note?u=76281980&t=0)** We are now able to view all the latest notes of the user, create a new note, and view individual notes. Now it's time to add an edit button here and allow the user to make changes to the note. Open the show blade view. On the top here, after the timestamps, let's add a link to edit the note. Let's reuse the link button component that we created. x-link-button. This would be Edit Note. Let's add a class, ml-auto, to push this to the right, since we are using flex. The href for this will be notes.edit. So route notes.edit where the second argument once again will be the note itself, since we're using route model binding. Now let's see what this gives us. Refresh. Great. We have the edit note button. Click on that and you'll notice the change in the URL. It's this note ID/edit. Let's add the required functionality in the edit method of the controller. Open NoteController. Scroll down to the edit method. Here, we only need to return the edit view, but after verifying if the user is authorized. So similar to this, copy all these lines or
>
> **[1:35](https://www.linkedin.com/learning/laravel-essential-training/add-an-edit-method-and-view-to-allow-editing-of-the-note?u=76281980&t=95)** copy everything and paste it here. Change this to notes.edit and everything else is the same. Now let's create this blade view. Go to resources, views, notes, new file, edit.blade.[PHP](../../Skills/Software%20Development/PHP.md). And since most of the layout is very similar to the create view, let's copy all of this and paste it here. We need the similar [Forms](../../Skills/Web%20Development/Forms.md) as well. All right, let's start by changing the title to Edit Note and then down here the action will not be notes.store, it will be notes.update. And then we also need to pass the note model to specify what will be updating. So this has a second argument. And now for the method, we need a put or a patch request for updating a model. But [HTML](../../Skills/Web%20Development/HTML.md) forms cannot make a put, patch or delete request. So let's retain this method as post itself, but spoof the verb using the method blade directive. Like so. So we can use the method blade directive and pass whatever we need here, like put. This just adds a hidden field, just like the CSR of
>
> **[3:11](https://www.linkedin.com/learning/laravel-essential-training/add-an-edit-method-and-view-to-allow-editing-of-the-note?u=76281980&t=191)** blade directive. Then the input value here should be the current title that we are trying to edit. But if we change this and submit a form with empty text, we'll be redirected back without preserving changes. So this should actually be old title. And the second argument will be the note title. So if the, you know, value entered by the user is empty and the user changes the title, then this is preserved. If the old value is empty, then the title that was previously saved is shown. So we can change the same here as well. Sorry, not here... comma $note->text. All right, that should be it. Let's see what this gives us. Refresh. This is good. All our fields are filled with saved data for editing. Let me change the title to Edited New Note, and add some text here like edited text or something and try to save the note. I'll try, it looks like it worked. We are redirected correctly. Let's find out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (2), php (1), find (1)
> **UI Navigation:** open the (1), click on (1), scroll down (1), go to (1)
> **Env Vars:** url (1), html (1), csr (1)
> **Analogies:** similar to (2), just like (1)
> **File Paths:** edit.blade.php (1)
> **Cross-References:** in the next (1)

#### [Add an update method to update edited data](https://www.linkedin.com/learning/laravel-essential-training/add-an-update-method-to-update-edited-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-an-update-method-to-update-edited-data?u=76281980&t=0)** We edited a note in the previous video and tried saving it. Let's verify that we received the edited data first. In the NoteController's update method, let's try and dd the request and see what we get. Go to the browser, refresh, continue. And yes, we have received four parameters with the edited title and edited text. Note that the method blade directive has this input field, which is put. Great. Now once again, similar to inserting a new note, we need to validate the incoming request. So you can copy the same validation rules from here. Paste it here, replace this, paste it. And now this will execute the same way. If our data is valid, then update the note with the new values which
>
> **[1:05](https://www.linkedin.com/learning/laravel-essential-training/add-an-update-method-to-update-edited-data?u=76281980&t=65)** will be title, will be $request->title, and then the text will be $request->text. But even before we do this, once again, we need to check if the note model belongs to the logged in user. So copy the same thing here. You can paste it either here or here. Let's paste it there. I'll write the abort if the authorized user... If this note doesn't belong to this authorized user. And now once it's updated, we want to redirect the person, the user to the show route. So we can do that using return to_route('notes.show'). And we can pass note as the second argument here. And we can do the same in the store method. Remember, we were not redirecting the user. Yes. Now we can, after saving the note, we can return the user to this particular route itself. Okay. Now let's check if all of this works. Go to the browser, refresh, continue. Great. All the updating has happened and we are looking at the edited note here.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **Code Identifiers:** to_route (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Add a destroy method to delete a note](https://www.linkedin.com/learning/laravel-essential-training/add-a-destroy-method-to-delete-a-note?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/add-a-destroy-method-to-delete-a-note?u=76281980&t=0)** The last major functionality pending in our app is the delete option. Right next to Edit note let's give a button to delete it. Open the show blade view, and right here let's add that button. But this cannot be similar to the link. It needs to be an actual form and have a button. So right here, add a form with action being
>
> **[0:33](https://www.linkedin.com/learning/laravel-essential-training/add-a-destroy-method-to-delete-a-note?u=76281980&t=33)** route('notes.destroy'), and pass the entire note model. And here, once again, the method will be post itself. We will have to... I think I need to close this, yeah... ... the method will be post and we will have to spoof the method using the method blade directive. And here this will be delete. And now let's use the primary button component, x-primary-button. And let's say delete button. Let's add some styles to make it look like a danger button. So this would be bg-red-600. All right. Let's also add the CSRF blade directive. Otherwise, it will not work. Okay. Let's also add a hover class, bg-red-500 or something. Or maybe the background can be 500. And on hover, it can be 600. Also, on focus, it can be 600. Great. Let's see what we got in the browser. Refresh. This looks perfect. Click on the delete button now and it looks like we are redirected to the correct URL. But let's add a confirm dialog to make sure that the user really wants to delete the note before submitting. So go here on the button, add an onclick attribute, onclick
>
> **[2:09](https://www.linkedin.com/learning/laravel-essential-training/add-a-destroy-method-to-delete-a-note?u=76281980&t=129)** = "return confirm ('Are you sure you want to delete this note?')" Okay, let's go back and refresh. Let's click on the delete button now. And yes, we are asked for confirmation. Click "OK". Our request is submitted. Let's actually delete this note now. Open the note controller. Scroll down to the destroy method. Similar to the update method, verify if the note actually belongs to the user. Copy, paste it here. And if it does belong, let's delete it here using $note->delete. Great. And then you can return to the index route because the note is deleted. Notes.index. Okay. And let's check this now, refresh the page, continue. And perfect! Our note was deleted.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (2), click on (2), scroll down (1)
> **CLI Commands:** make (2)
> **Env Vars:** csrf (1), url (1)
> **Analogies:** similar to (2)

#### [Show flash data to users](https://www.linkedin.com/learning/laravel-essential-training/show-flash-data-to-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/show-flash-data-to-users?u=76281980&t=0)** We don't have any notes right now, so let's quickly create one. New note. New note. Some text here. Click on "Save". All right. We saved the note, we redirected. We have been editing notes, deleting, creating, all of that. But we are not giving user feedback if the action was a success or not. In [Laravel](../../Skills/Web%20Development/Laravel.md), this can be done with flashed session data. Let's start with the update action. Once the note has been updated, we redirect the user to the show route. Open the NoteController, and right here in the update action, we're redirecting the user to the show route, but the user has no idea if it was a success or not. So here let's pass a success message with success.
>
> **[1:00](https://www.linkedin.com/learning/laravel-essential-training/show-flash-data-to-users?u=76281980&t=60)** You know, something like changes saved. Okay. Now, in the show blade view at the top, let's check if we have any session data with success. We can do that using @if (session('success')).
>
> **[1:25](https://www.linkedin.com/learning/laravel-essential-training/show-flash-data-to-users?u=76281980&t=85)** So if we have any data, @endif, then we display this message. So you can use a paragraph tag. With some styles like, you know, maybe you can first add a margin bottom and then some padding. And let's add a green background to show that it's a success with a light border. border-green-200, text-green-700 or something. And then some slightly rounded corners. And here will be the message which is session success. Okay. Now let's go back, edit this note and see how this works. Some text here. Edit it, save note. And this is amazing. We have a flash data called changes saved. Now refresh this page, and that is gone, which is exactly what we want. Now let's turn this alert into a component so that we can reuse it without repeating all these styles. So go to resources, views, components, and create a new file
>
> **[2:51](https://www.linkedin.com/learning/laravel-essential-training/show-flash-data-to-users?u=76281980&t=171)** called alert-success.blade.[PHP](../../Skills/Software%20Development/PHP.md). Let's copy all of this, including the if statements, and paste them here. Right. Replace this session success with $slot. And then in the show blade view, let's say x-alert-success. Let's use the component. And here we pass the session success. Okay. The next place we need an alert is when we delete a note. So scroll, go to the NoteController, scroll to the destroy method and here, return to route with success
>
> **[3:49](https://www.linkedin.com/learning/laravel-essential-training/show-flash-data-to-users?u=76281980&t=229)** message which is note deleted. And now open the index blade view where we need to show the alert. Copy this alert component with the message and... sorry. sorry, go to the index blade view and probably even before we create the new note, just paste that alert component. And now let's try delete the note and see if this works. We will probably have to refresh. Delete the note. Say "OK". Oh, we have $slot. I think I made a mistake here. And yes, this has to be in curly braces. I'll write. Unfortunately, we deleted, but I'm sure it works. You can verify by rectifying this mistake of mine. Great. This is perfect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (3), open the (2), click on (1)
> **File Paths:** alert-success.blade.php (1)
> **CLI Commands:** php (1)

#### [Challenge: Update notes with a new resource](https://www.linkedin.com/learning/laravel-essential-training/challenge-update-notes-with-new-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/challenge-update-notes-with-new-resource?u=76281980&t=5)** Here's the next challenge. We want the user to be able to organize notes into the newly created notebooks resource. So first, create a new migration to update the notes table with a new column, which is the foreign ID for this notebooks table. The user can choose not to use any notebooks at all, so set this column as nullable. Refer to the documentation to see how it's done. Now in the existing notes, create view, add a select input to choose from the list of notebooks created. Based on this selection, modify the store route of the NoteController to store the selected notebook ID. Verify if it works using the database GUI client. Next, you also need to add the select input in the edit view To change the notebook of an existing note, you need to then change the update method of the NoteController to update this value as well. So in the end, the user should be able to assign a notebook while creating a new note, and while editing it too.

> [!info]- Semantic Content
>
> **Env Vars:** gui (1)
> **Documentation:** the documentation (1)

#### [Solution: Update notes with a new resource](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=5)** Let's first create a new migration to add a new column to the notes table using the command [PHP](../../Skills/Software%20Development/PHP.md) artisan make:migration add_notebook_to_notes_table.
>
> **[0:23](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=23)** Open the migration file and here, add a foreign key,
>
> **[0:32](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=32)** foreignIdFor(Notebook). Sorry. Yeah, Notebook::class. And if this is not imported, import it. It's already imported. Great. And now the user might want to leave this particular row blank. Which is why we need to chain this with nullable. Now in the down method, drop the foreign column using $table ->dropIfExists and the column would be notebook_id. Great. Let's run this migration. php artisan migrate. Right. Let's just view this in the GUI client. Go to notes and check at the end. Yes, we do have a notebook ID with all the initial values as null. Now open the create view of notes, create.blade.php. After the text area here, let me just add some spaces. Yeah. After the text area here, we need a select input to show all the notebooks to select from. Select, and here we need to show all the notebooks in these options. For this, we first must [Fetch](../../Skills/Web%20Development/Fetch.md) all the notebooks and pass it to the create view, right? So open the NoteController create action. And here, let's fetch all the notebooks using notebooks, notebook
>
> **[2:14](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=134)** where user_id is the Auth::id. Get all of them. And here, pass it with notebooks $notebooks.
>
> **[2:28](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=148)** And this should have parentheses. Okay. Now in the create view, let's wrap this in @foreach ($notebooks
>
> **[2:39](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=159)** as $notebook) This option would go inside. Option value would be the notebook ID. Whereas here, what we display is the notebook's name. Let's also add a blank option so the user can leave it blank. Option value would be blank. But let's just show something like select notebook. And for this, the name would be notebook_id and the class, let's style it similar to our text input. So open the text input, blade component. Copy all the styles here. Yeah, copy all of this. And yeah, we could create a select blade component as well, but I'm not doing that in this video. So we've pasted all the styles. Let's add two more styles the way we've added for these here, w-full and mt-6. w-full, mt-6. Some in a full width and margin top. All right, let's see what we've got. Go to the browser, refresh, and it says undefined variable notebook somewhere here. Yeah. This second value should be notebook and not notebooks. Let's change that. Now, it should be perfect. Refresh.
>
> **[4:12](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=252)** And yes, we have the select input with all the three notebooks that we've created. Let's create a new note. Or let's just say hello world. Select the notebook. But for this to work, let me select general. But for this to work, we need to edit the store method first. So go back to the NoteController's store method. And here, along with all of these, let's add a new value which is the notebook_id. It's equal to request notebook_id. Okay.
>
> **[4:55](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=295)** Let's test this out now. Save note. Yeah, this is a different error. Ignore this. It should have worked. Let's verify it in the database client. Let's go to the notes. And this was the last note we created, and you can see that it has the notebook ID 3. Great. Now we want the user to be able to change the notebook also while editing the note. So open the edit blade view. Sorry, this is of the profile. Let me close this. Close this as well. Open the edit blade view within notes and add the same select input. Copy it from create view and paste it within the edit view as well. Once again, let me add some spaces. Yes, paste it here. Also, from the NoteController, we need to pass the notebooks. So copy this and paste it here. Or you can paste it here. You'll have to pass the note and the notebooks. Notebooks $notebooks in the view. So now we are able to iterate through the values and select the notebook. The only change in edit view would be that the user's selected notebook should already be highlighted here. So what we do is option, if notebook_id, that is this ID here while we are iterating,
>
> **[6:34](https://www.linkedin.com/learning/laravel-essential-training/solution-update-notes-with-new-resource?u=76281980&t=394)** if it's same as the note notebook_id, that is the one in the note, then set the attribute selected, and if, so otherwise, it's not selected. Let's see what this looks like. Refresh. Edit note. And yes, we have the general value already selected because that's the notebook it belongs to before editing. Let's change this to maybe travel and try saving the note. But before this, we need to modify the update method in the NoteController. So down here, just like we did before, add another value, notebook_id which is equal to request notebook_id. This should work. Let's save note. And it says change is saved. But once again, let's verify in the database client. Go to notes. Earlier this was three and now the notebook ID has been changed to one. Great. This completes our solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **Code Identifiers:** notebook_id (8), add_notebook_to_notes_table (1), foreignidfor (1), dropifexists (1), user_id (1)
> **UI Navigation:** open the (6), go to (4), select the (2)
> **CLI Commands:** php (3), make (1)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** create.blade.php (1)
> **Env Vars:** gui (1)
> **Cross-References:** go back to (1)


### 6. Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### [What are Eloquent relationships?](https://www.linkedin.com/learning/laravel-essential-training/what-are-eloquent-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/what-are-eloquent-relationships?u=76281980&t=0)** Database tables are often related to one another. For example, a post can have many likes, a student can take many subjects, and in our case, a user can have many notes. When you have too many tables and multiple relations, querying with 'where' clauses like get the notes where belongs to user and so on can get tricky and complex. Eloquent makes it easy to work with such relationships and also supports several types of relationships like one to one, one to many, one of many, many to many, and custom types, too. In our case, the user model has a one to many relationship with the note model. With this basic knowledge, let's look at how to define Eloquent relationships and then use them to query and save the models.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)

#### [Define relationships](https://www.linkedin.com/learning/laravel-essential-training/define-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/define-relationships?u=76281980&t=0)** Once we define relationships in model classes, we can access a related model just like its properties. You'll soon understand what I mean. Let's begin with the user model. Open user.[PHP](../../Skills/Software%20Development/PHP.md) within app, models. To define its relationship with the note model, scroll down to the bottom. Add a public method, public function notes, because a user has many notes, and define the relation using
>
> **[0:38](https://www.linkedin.com/learning/laravel-essential-training/define-relationships?u=76281980&t=38)** $this->hasMany() and pass the note model here, Note::class. And we need to return this. So a user has many notes. That's what we are trying to define here. In case of a one to one relationship, you need to call the hasOne() method instead. And you can change this to singular as well. Now this definition allows us to access notes of a specific user as if notes were a property of this user model. But before we actually do that, let's also define the inverse relationship that lets us access the user of a specific note. So open the note model. And here, define public function user.
>
> **[1:33](https://www.linkedin.com/learning/laravel-essential-training/define-relationships?u=76281980&t=93)** Note that this is singular because note belongs to a single user. And here we return $this->belongsTo a user. Use the User::class here and this is the inverse relationship. With this, we can access the user of the note just like any other property of the note model. You will soon see how useful these relationships are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** hasmany (1), hasone (1), belongsto (1)
> **UI Navigation:** scroll down (1), open the (1)
> **Analogies:** just like (2)
> **File Paths:** user.php (1)
> **CLI Commands:** php (1)
> **Warnings:** note that (1)

#### [Query and save relationships](https://www.linkedin.com/learning/laravel-essential-training/query-and-save-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/query-and-save-relationships?u=76281980&t=0)** We have now defined our one to many relationship in user model, and the inverse relationship belongsTo in note model. Now it's time to make use of these relationships for querying models. Open NoteController. NoteController. In the index method, we use this 'where' clause to get all the notes of the authenticated user. Now, we can simply replace this with auth::user()->notes like so,
>
> **[0:36](https://www.linkedin.com/learning/laravel-essential-training/query-and-save-relationships?u=76281980&t=36)** and this can be removed. And here you will see an error, but this is actually not an error. It's just the editor that is showing it. IntelliSense is not able to understand this. You can ignore this. Notice how we are able to [Fetch](../../Skills/Web%20Development/Fetch.md) the notes that belong to the authenticated user using the relationship. Let's go to the browser and see if this works. And yes, we are able to see the notes exactly as before. And now since [Laravel](../../Skills/Web%20Development/Laravel.md) version 8, we can also use the inverse relation and replace this with Note::whereBelongsTo authenticated user, Auth::user(), get the latest, and so on. Now see how similar this is to the 'where' clause? We're just not using where and then checking the user ID, we are simply using the relationship where notes belonging to the user, we're just fetching them. Let's go back and see if this is also working the same way. And it does. All right. We can delete this line right now. Let's see where else we can make use of the relationships defined. In the show method, instead of checking the ID against the foreign key, we can access the note's user model with $note->user and directly
>
> **[2:17](https://www.linkedin.com/learning/laravel-essential-training/query-and-save-relationships?u=76281980&t=137)** check if this user is the authorized user using is(Auth::user). Like so. This is a way to compare the primary key of the same model. So if it's not the same user then abort. Let's try checking this also. You can refresh and view this. Right, it's working. You can probably create another user, create a note and try accessing this URL with that and it will not work. All right. So since this is much neater, let's replace all the other instances with this. Past it here in the update method and pasted here in the destroy method as well. And now in the store method, instead of manually entering the user ID with the authenticated users ID, we can create this note using... Let me remove this. You can say Auth::user()-> notes and you can use the create method and everything else can remain the same. You don't even need note.save. Yes, this can, of course, be done. When this was there also. Now you can remove the user ID and again there is no error, it just works.
>
> **[3:52](https://www.linkedin.com/learning/laravel-essential-training/query-and-save-relationships?u=76281980&t=232)** You can try verifying this and this returns a note. So you can save this so you are able to pass it to the show route. Let's verify if this works by creating a new note. Go to notes, new note, and just create another one. Some text here as well. Save note. And yes, this is working exactly the way it did before. So we have made the best use of Eloquent relationships to manage our [Databases](../../Skills/Software%20Development/Databases.md)-related tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** belongsto (1), wherebelongsto (1)
> **UI Navigation:** go to (2)
> **Env Vars:** url (1)
> **Versions:** version 8 (1)
> **Definitions:** is a  (1)

#### [Challenge: Define a new relationship and use it](https://www.linkedin.com/learning/laravel-essential-training/challenge-define-new-relationship-and-use-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/challenge-define-new-relationship-and-use-it?u=76281980&t=5)** Here's the last challenge. We created a notebook resource in the previous challenge and helped the user organize notes into notebooks. Now, find out the relation between our note resource and the new notebook resource, and define the relationship in both the models. Using this relationship, in the show view of a note, display the notebook of this note at the top. It should look something like this. This is a quick one. Good luck!

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)

#### [Solution: Define a new relationship and use it](https://www.linkedin.com/learning/laravel-essential-training/solution-define-new-relationship-and-use-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/laravel-essential-training/solution-define-new-relationship-and-use-it?u=76281980&t=5)** The relation between note and notebook is very similar to that of note and user. It's a many-to-one relationship. A notebook has many notes and the note belongs to one notebook. So first, let's define the hasMany relationship in the notebook model. Public function notes. This will be plural because a notebook can have many notes. So return $this->hasMany(Note::). Okay, you might have to import the Note::class, app models note. Yes. Close this. Right. Now let's define the inverse relationship in the note model which would be public function notebook. This is singular because it's our single notebook. And you can copy this, return $this->belongsTo(Notebook::class). Okay. You might have to import if it's not imported. Great. Now go to the browser. And here, we have already added this note into the travel notebook. Let's save it once again. So what we need is we need to display the notebook name here right at the top. So let's open the show view of notes. And right here after the success message, let's add a span tag. And here, these classes are not really important,
>
> **[1:45](https://www.linkedin.com/learning/laravel-essential-training/solution-define-new-relationship-and-use-it?u=76281980&t=105)** but let me just add them. px-2, py-1, some padding and indigo border. So that would be border-indigo-400 or something, and then a very light indigo background, bg-indigo-100, then rounded corners. Let the font be semi-bold and text-sm. So this here, the value, we can get it from the relationship. We have the note model, says this is the show view of the note model. And now we can get the notebook that it belongs to Just like we are accessing a property, notebook, now that we have the notebook model we can simply chain it with name. So this notebook belongs to the note. And the notebook's name is what we want to display here. Let's see what we've got. Refresh. Great. It shows the notebook name exactly like we want. This completes the solution.

> [!info]- Semantic Content
>
> **Code Identifiers:** hasmany (2), belongsto (1)
> **UI Navigation:** go to (1), open the (1)
> **Analogies:** similar to (1), just like (1)


### 7. Soft Deleting

[↑ Back to Table of Contents](#table-of-contents)

#### [Enable soft delete](https://www.linkedin.com/learning/laravel-essential-training/enable-soft-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/enable-soft-delete?u=76281980&t=0)** At this point, when you delete a note, it's permanently gone. But ideally, we would want the notes to be moved to trash so that the user can retrieve them later or remove them permanently. Eloquent provides us an easy way to do this. First, we need to add a column deleted_at to the notes table. This way, when we delete a record, this column gets updated with a timestamp of when it was deleted. If the column is blank, that means it's not deleted. So close this. Open the terminal and create a new migration, [PHP](../../Skills/Software%20Development/PHP.md) artisan make:migration add_soft_deletes to notes. All right, this has created a migration. Open the file and the notes table is pre-filled for us. In the up method, add a column, table_soft_delete That's all you need to do. This will add the deleted_at column for us. And in the down method, let's just dropSoftDeletes. Okay, let's run this migration, php artisan migrate. Okay, the migration is done. Let's check the table notes. And right here at the end, we have a new deleted_at column with the default value as null.
>
> **[1:37](https://www.linkedin.com/learning/laravel-essential-training/enable-soft-delete?u=76281980&t=97)** Now at the same time, in the note model, we need to specify that the note can be soft deleted. So open note model. And very similar to use HasFactory, this is a trait, we also have a SoftDeletes trait. So add this right here. So this note model uses the soft deletes trait. Now we are set. Let's try and delete this note. Click on "Delete", confirm. And yes, it is gone. We also see this 'note deleted' alert message. But let's go to the table and see what has happened. Open the notes table and notice that the note is not completely deleted from the table, we just have this column updated with the timestamp. And now that we are able to move our note to trash, instead of directly deleting it, let's change our button label in the show blade file to instead of delete note. Where is it? Yeah. Let's say move to trash. And also let's change the confirmation
>
> **[2:59](https://www.linkedin.com/learning/laravel-essential-training/enable-soft-delete?u=76281980&t=179)** model to Move to trash? And lastly, let's change the flash message in NoteController's
>
> **[3:12](https://www.linkedin.com/learning/laravel-essential-training/enable-soft-delete?u=76281980&t=192)** destroy method to Note moved to trash. All right. This should be done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **Code Identifiers:** deleted_at (3), add_soft_deletes (1), table_soft_delete (1), dropsoftdeletes (1)
> **UI Navigation:** open the (3), click on (1), go to (1)
> **CLI Commands:** php (2), make (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Query soft deleted models](https://www.linkedin.com/learning/laravel-essential-training/query-soft-deleted-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/query-soft-deleted-models?u=76281980&t=0)** As you can see in the index page, our deleted note doesn't get displayed automatically, which means in our NoteControllers index method, the latest method or get or paginate or any other methods do not [Fetch](../../Skills/Web%20Development/Fetch.md) soft deleted records. So how do we get them? We'll see. But first, let's create another controller for trashed notes. Open terminal, execute [PHP](../../Skills/Software%20Development/PHP.md) artisan make:controller and I will type in the name directly, TrashedNoteController. Yeah, it follows the naming convention. Controller is created. Let's open this file. Add an index method here. Public function index, which will be used for displaying all the trashed notes. For now, just return trash. Okay. Next, let's create the required route for this method in our web.php routes file. Scroll down, Route::get. Let the URL be trashed and we will point this to the TrashedNoteControllers
>
> **[1:22](https://www.linkedin.com/learning/laravel-essential-training/query-soft-deleted-models?u=76281980&t=82)** index method, like so. Now also assign the middleware auth so only the logged in users can access this route and also give it a name. Let's follow the same naming convention as all of these notes. So this would be trashed.index. We didn't have to name these routes manually because we are using the resource controller and routes. So [Laravel](../../Skills/Web%20Development/Laravel.md) takes care of the naming. Next, in the browser, let's navigate to the trashed route to see if the controller method is being called. So type in trashed and yes, we see trash that we return in the controller. All right, before we add the index view to list the deleted notes, let's edit this navigation bar to add another item here called trash. So open navigation.blade.php and wherever we are having notes, I can remove this because we're not using translation. So let's just call this Notes. And yeah, I mean this as well. We can copy this link and paste the same and say trash. This will change to trashed.index, the href, and this as well, right here. And down here in the responsive section,
>
> **[3:01](https://www.linkedin.com/learning/laravel-essential-training/query-soft-deleted-models?u=76281980&t=181)** once again, let's copy this entire thing. Paste it again and say trash once again, change notes to trashed wherever required. All right. Now let's refresh the browser. And yes, we do have trash here. Let's click on it and we see the index method being called. Now let's fetch the trashed notes in the controller. Go to TrashedNoteController. Also, open the note controller for reference. We can copy the stuff from here. Copy this and paste it here. Everything remains the same, but we need one change. We need to fetch the trashed notes and not all notes, right? So here, before latest, you can chain this with only trashed method. So this gets only the trashed models. That's all you need to do. We can reuse the same index page and pass in the same notes. I need to import this model. So let's import. And this as well. Both the classes are imported. Now let me try. Refresh the browser. And great, we do get the trashed note here. We just have to make some changes for the layout, though. Like, for example, we don't need this button here and this title should be trash.
>
> **[4:36](https://www.linkedin.com/learning/laravel-essential-training/query-soft-deleted-models?u=76281980&t=276)** So open the index blade view. Here, let's use the request method and check which route we are in. So if we are in the notes index route, we'll show this. If we are in the trashed index route, then we show trash. So here let's use the request method. Request route is notes.index. And use the ternary operator. If it's a yes, then show notes, otherwise show trash. Let's check if this works. Refresh. And yes, we are able to see trash here. If we navigate to the notes route, we see notes. Great. Let's also hide this button in the similar fashion. So here, I will say if request, let me copy this, if request route is notes.index, then show this. Otherwise, you don't have to say anything. You don't need an else blade directive here. All right. Now, refresh. Perfect. The title is changed and we don't see a new note button. Navigate to notes, and here we see the appropriate title and the new note button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (3), [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
> **UI Navigation:** navigate to (3), open the (2), scroll down (1), click on (1), go to (1)
> **CLI Commands:** php (3), make (2)
> **File Paths:** web.php (1), navigation.blade.php (1)
> **Env Vars:** url (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)

#### [Show soft deleted model](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980&t=0)** We now have the list of trashed items, but if you click on any of the deleted notes, it takes us to the notes route and we get a 404 error because this note is deleted. What we now need is the show route for trashed note and the show method in the controller. Open web.[PHP](../../Skills/Software%20Development/PHP.md). And using Route::get, let's add a show route, /trashed/{note}. We need to pass in the note unique ID, and this will call the controller, TrashedNoteController. Show action. Don't show again. And this will also have to go through the auth middleware. And the name would be trashed.show. Yes, but this isn't sufficient. We do not get a soft deleted model while using route model binding by default, right? So you need to chain this with trashed method to include soft deleted models. Right here. Or you can cut this and put it even before the middleware. Yeah. This is perfect. Now open the TrashedNoteController. Add a new show method. Public function show, and accept
>
> **[1:38](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980&t=98)** the note model here. Let's dump and die this note to see if it's working. Right. Now refresh. We'll have to change this URL. So what we do is let's go back. Let's open the index method. And here, we need to change this link based on the route. So let's do the same thing that we did here. Let me just add some line spaces. So here, if the route is notes.index, we anyway show the same thing. Else, we point it to trashed.show. @endif. All right? Now let's check in the browser, refresh. Click on this and yes, we appointed... Sorry, looks like I made a mistake here. It's not trashed. It must be in web.php. It's here. Yeah. All right. Let's go back, refresh, and click on this. Yes, we have the correct route now and we also have the deleted note. Great. Now let's remove the dd and return the view instead. Return view, notes.show.
>
> **[3:17](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980&t=197)** We can reuse that route, with note. Again, you can pass it as a second parameter here. You can choose whichever method you need. Again, even before we show this, we have to add the same check we used to do in NoteController, which is if the note doesn't belong to the user, then abort. So let me copy the same thing, paste it here, and yes. Now let's open the show view. Let's first see what we get. Refresh. All right. The note display is perfect, but we need to change this data here, and also the buttons and the titles. Everything needs to be changed based on the routes. Open the show blade file. So once again, here we can do the same check as we do in the index. This one, you can copy this and paste it here. And here, you can check if the route is notes.show then show notes, otherwise, trash. Or there's one more thing we can do. You can check if the specific note model, since we have the note model available in the show route, you can check if this note is trashed or not using
>
> **[4:46](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980&t=286)** $note ->trashed() method. So if the note is trashed, then you need to show trash. So what we'll do is we'll add a, you know, "not" to this. So if note is not trashed, show notes, else, show trash. Let's see if this works first. Yes, we see trash here. If we go to notes and click on any of these, we see notes. All right, let's go back to trash and go to the trashed note. We can change these to also based on the same check. So let's copy this. And here, what I'll do is I'll copy this entire div and paste it again
>
> **[5:35](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980&t=335)** and add them with an if and else blocks. So I will say if... Oh sorry, I need to copy this. If note is not trashed, then show this. Else, I will change this soon,
>
> **[5:58](https://www.linkedin.com/learning/laravel-essential-training/show-soft-deleted-model?u=76281980&t=358)** @endif. Okay. Let's hide these buttons for now. And here, we don't want to know the created at, we just want to know when it was deleted. So what you can do is you can remove this and you can see deleted. Change this to deleted_at timestamp. Let's view this in the browser. Refresh. Okay, looks like we have a small error. Yeah, once again, I forgot this. Yeah. Let's refresh. Great. This is perfect. Now we can view the individual trashed note along with the detail of when it was deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **UI Navigation:** click on (4), open the (4), go to (2)
> **File Paths:** web.php (2)
> **CLI Commands:** php (2)
> **Code Identifiers:** deleted_at (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)

#### [Restore soft deleted models](https://www.linkedin.com/learning/laravel-essential-training/restore-soft-deleted-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/restore-soft-deleted-models?u=76281980&t=0)** After viewing the deleted note, the user might wish to either restore this note or delete it permanently. The two buttons we commented out earlier can be modified to display these two options for each trashed note. Here they are. For editing a note, we used a link, but to restore a note, we need a form and a button, just like we did for delete note. So let me uncomment this, remove this, and let me copy this once again. Retain this. So I will comment it out again. I will reuse this form for restoring the note. So the action will be trashed.update because we just have to change the deleted_at column for restoring that note. So trashed.update would be an accurate route. We will be passing the note model. Once again, the method is paused and we can spoof it with put. We can retain the CSRF attribute. And here, we don't need a red color. So let me remove all of this. We can remove the entire class. We can keep the same black color and onclick, you can either keep this or remove it. You don't have to confirm with the user because this is not a damaging action to do. So you can just say Restore Note here.
>
> **[1:35](https://www.linkedin.com/learning/laravel-essential-training/restore-soft-deleted-models?u=76281980&t=95)** All right. Now open the TrashedNoteController and let's create an update method. Public function update. Once again, this takes in the note model. And here also we need to do the same check, authorize the user. And here to restore the note, all we need to do is note restore. Use the restore method and then you can return to route
>
> **[2:11](https://www.linkedin.com/learning/laravel-essential-training/restore-soft-deleted-models?u=76281980&t=131)** notes.show because now this note is restored, you can show this note and probably even add a success session, with('success') saying 'Note restored!'. We didn't create the route. So open web.[PHP](../../Skills/Software%20Development/PHP.md). We can copy the show route, paste it again, and this would be put. This remains the same. Here, the action is update. We don't need withTrashed. Middleware is fine and then this would be trashed.update. Okay. Now let's refresh. We do have a button but we need to push it to the right. So I will add a class here with ml-auto. That is margin left auto. So it goes to the right because it's Flexbox. Refresh. All right. Let me click on this. We get a 404 NOT FOUND error. Looks like we need the withTrashed. Let's add it back. Yeah, because we're using note model binding. Silly me, I forgot that. Yes. Now we should not be getting any error. Continue. And yes, our note is restored. The proof is that you're able to see this in the notes route. Otherwise, you would get a 404 error. And you're also seeing these two buttons: last changed,
>
> **[3:46](https://www.linkedin.com/learning/laravel-essential-training/restore-soft-deleted-models?u=76281980&t=226)** created, and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** withtrashed (2), deleted_at (1)
> **Env Vars:** csrf (1), found (1)
> **UI Navigation:** open the (1), click on (1)
> **File Paths:** web.php (1)
> **CLI Commands:** php (1)
> **Analogies:** just like (1)

#### [Permanently delete models](https://www.linkedin.com/learning/laravel-essential-training/permanently-delete-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/permanently-delete-models?u=76281980&t=0)** We just restored this note, but let's move it to trash once again to delete this permanently. Move to trash. Say "OK". All right. Now go to trash and open this. Right next to restore note, let's add a button to delete it forever. So let's go back to the show blade view and let me uncomment this. Change the route to trashed.destroy. All of the other things will remain the same. And here, you will need to confirm if you want to delete this permanently. You can say, "Are you sure you wish to delete this note forever?
>
> **[0:51](https://www.linkedin.com/learning/laravel-essential-training/permanently-delete-models?u=76281980&t=51)** This action cannot be undone." Okay. And let me change the text to delete forever. Now let's add this route, trashed.destroy in the routes file. Open web.[PHP](../../Skills/Software%20Development/PHP.md), and looks like we can copy this. Paste it down here. This would be delete and the route remains the same. The action would be destroy, withTrashed middleware and name would be trashed.destroy. Okay, great. But if you notice, a lot of code is repeated here. This can be changed using route grouping. If you notice, we have all these URLs prefixed with trashed and we are using the same middleware and the name also is prefixed with "trashed." So we can use the route::prefix method, route::prefix, and specify trashed here, because all the URLs are prefixed with trashed, /trashed. And then chain this with the name method, because all of the names begin with trashed., and then chain this with the middleware('auth'). And then comes the group method where you can specify all the
>
> **[2:29](https://www.linkedin.com/learning/laravel-essential-training/permanently-delete-models?u=76281980&t=149)** individual routes here. So you can add the first get route here, route::get. And now since it's already prefixed with trashed, you can simply add a forward slash and just need to point it to this TrashController index method. And here you need to add a name. We already have trashed. here, so you just have to have the name index. So do the other three as well. You can say route.get trashed note. And then this would be show method. And here, we also need with trashed. So chain it with withTrashed. Change the name to show. Copy this two times and this would be put. This remains the same. The action would be update, name would be update as well. And the last one would be the delete route with the destroy action. And the name would be destroy as well. So I can safely remove all of this. Not this. Yeah, remove the four routes which we have grouped now. Great. The last thing we need to do now is add the destroy method in the controller. So open TrashedNoteController and scroll down.
>
> **[4:06](https://www.linkedin.com/learning/laravel-essential-training/permanently-delete-models?u=76281980&t=246)** Public function destroy. Once again, pass the note model, and down here, you can make the same check. If the user is authorized, this time you can delete the note with force delete, not just delete. We have to force delete it to delete that note permanently. Once that's done, you can return to route trashed.index because the note is deleted and with a success message that the note was deleted forever. Note deleted forever. All right. Let's just test it now, go back to the browser, refresh. We have the button. Click on it. We get a confirmation, are you sure you wish to delete this note forever? Say "OK". And yes, the note is gone. It was deleted forever. It's not in trash, it's not in notes. And if you go and check in your database client GUI, it will be gone forever. All right. This is huge. All the features of our app are now complete. So this finishes our LiteNotes project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **CLI Commands:** php (1), make (1)
> **Code Identifiers:** withtrashed (2)
> **Cross-References:** go back to (2)
> **File Paths:** web.php (1)
> **Env Vars:** gui (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Optional: Set up a local development environment](https://www.linkedin.com/learning/laravel-essential-training/optional-set-up-a-local-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/optional-set-up-a-local-development-environment?u=76281980&t=0)** Now, you might want to start using [Laravel](../../Skills/Web%20Development/Laravel.md) locally in your system. To install Laravel on your system, you first need a local web server like Apache or Nginx, and then you need to install [PHP](../../Skills/Software%20Development/PHP.md), Composer, and a database server like [MySQL](../../Skills/Software%20Development/MySQL.md), and then configure all of them to work together. That's a tedious process where you might run into multiple issues, but thankfully, these days, there are a variety of tools available that help us get started with Laravel within just a few minutes. If you go to [laravel.com](https://laravel.com), visit the documentation and go to creating a Laravel project. You'll see that the official documentation recommends using Laravel Herd. Herd is available on macOS and [Windows](../../Glossary/Service/Windows.md). If you're a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) user, I'll tell you what to do in a while. I see "Download for macOS" button here. If you're using Windows, you might see "Download for Windows". Otherwise, you can go to this page with the Windows icon and you can download Herd for Windows. Install it just like any other application, and you will see a welcome screen and you can proceed with all the default options selected. Since I already have Herd installed, I won't see this welcome screen. Once I open Herd, I will see this icon on the top menu bar. Herd will automatically install the latest PHP version for you along with NVM to manage multiple node versions. However, if you are a Linux user or you cannot install Herd
>
> **[1:38](https://www.linkedin.com/learning/laravel-essential-training/optional-set-up-a-local-development-environment?u=76281980&t=98)** for some reason, you can always use Docker and Sail as a development environment. You can install Docker first and then visit this part of the Laravel documentation for further steps. Next, you need an IDE like Visual Studio Code or PhpStorm. PhpStorm is great for PHP and Laravel development, but that's a paid tool. If you want a free one and if you liked what we did in [Codespaces](../../Skills/Software%20Development/Codespaces.md), you can stick to VS Code. For a database GUI tool, in this course, we used an extension called Database Client, but you can install a separate app called TablePlus which is very easy to set up and quite popular. That's it. Your local development environment is set. To create a new Laravel project, you can open any terminal app, navigate into the Herd directory that was created for you during installation. Now if you look at the documentation, you'll see that there are two ways of creating a Laravel project. One is to use the Composer's create project command, while another is to install the Laravel Installer using Composer. I suggest going for the second method because once we have the Installer, it's easier to create new Laravel apps. So copy this command and paste it here. Not the second one, just the first command. This will take a while.
>
> **[3:12](https://www.linkedin.com/learning/laravel-essential-training/optional-set-up-a-local-development-environment?u=76281980&t=192)** The Installer is installed. Now we can use the command laravel to create a new project like laravel new first-app. All right. Looks like the application already exists. I will just say laravel new app. You will be asked some questions which you might know the answer to if you have watched all the previous videos. So you can go for the default options for now and then a new project is getting created. You can even select the SQLite application or MySQL. You can change any of that later. You can click all of the default options. Everything will be created for you. The migrations are run. And that's it. You can start your local development using this. So let's cd into the app and run php artisan serve. You can open this in your browser and proceed like we did before. From here, you know how everything works. So good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (15), [Windows](../../Glossary/Service/Windows.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (4), [MySQL](../../Skills/Software%20Development/MySQL.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **CLI Commands:** php (4), composer (3), mysql (2), docker (2), apache (1)
> **Prerequisites:** install (8), configure (1), set up (1)
> **Env Vars:** php (3), nvm (1), ide (1), gui (1)
> **UI Navigation:** go to (3), select the (1)
> **Tools:** visual studio (1), vs code (1), terminal (1)
> **Code Identifiers:** macos (2)
> **Documentation:** the documentation (2)

#### [Quick summary](https://www.linkedin.com/learning/laravel-essential-training/quick-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/quick-summary?u=76281980&t=0)** Congratulations! You have built a fully functional, simple notes app using [Laravel](../../Skills/Web%20Development/Laravel.md) 11. Let's quickly run through all that we learned and created. First, we used Laravel Breeze for authentication. The authentication routes and views, all of them got created for us. Then we created our first model and used migrations. We created a resource controller for managing all the CRUD operations on our resource. We used Blade templates for our views and created some Blade components. We learned about multiple Blade directives. We learned how to reuse components as well as entire views based on different routes. We used route model binding for injecting an entire model directly into the route, and also learned how to customize this route key to use for resolving the model. We then used Eloquent relationships to better manage the relations between database tables while querying and saving the models. We then enabled soft deletes on our model to allow for temporary deletion. We also learned how to query soft deleted models, restore them, and also permanently destroy them. Along the way, we saw some naming conventions, best practices, and more. I hope all this learning through hands-on project has set a strong foundation for you to dive deeper and build awesome stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (2)
> **Env Vars:** crud (1)

#### [Next steps](https://www.linkedin.com/learning/laravel-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/laravel-essential-training/next-steps?u=76281980&t=0)** Now that you know enough concepts in [Laravel](../../Skills/Web%20Development/Laravel.md) to build a simple yet functional app, it's time to go deeper. You can try adding some more features to your LiteNotes project. One, help your user add some tags or keywords to each of their notes so they can look for them easily. Two, you could add a feature to optionally make a note public, just in case the user wishes to share it with others. Three, add a search feature to be able to search for text within the notes, and so on. While building these functionalities, you will surely have a lot of questions and it's best to refer to the official documentation when in doubt. The official Laravel channel on YouTube also has some great videos. To go deeper into Laravel, you can watch my Advanced Laravel course right here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. You can also refer to the Laracasts forum where a lot of questions have already been asked and answered. Lastly, Laracon, the official Laravel conferences that happen in four different continents is a good place to network with the amazing Laravel community and learn about the latest Laravel news. Don't forget to follow me on Twitter or the X app, @shrutibalasa, and subscribe to my YouTube channel, Thirus. Wishing you the best for your career in Laravel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Best Practices:** it's best to (1), don't forget (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/laravel-essential-training-2710093/codespaces)

## Skills Covered

- Laravel

## Path Context

### In [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)
**1 of 7** | [Advanced Laravel](Advanced%20Laravel.md) →

## Appears In

- [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Winter CMS with Laravel](Winter%20CMS%20with%20Laravel.md) — Laravel
- [Essential Statamic for PHP and Laravel Developers](Essential%20Statamic%20for%20PHP%20and%20Laravel%20Developers.md) — Laravel
- [Essential Jigsaw for PHP and Laravel Developers](Essential%20Jigsaw%20for%20PHP%20and%20Laravel%20Developers.md) — Laravel
- [Building GraphQL Applications in Laravel](Building%20GraphQL%20Applications%20in%20Laravel.md) — Laravel
- [Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md) — Laravel

---

[↑ Back to top](#)