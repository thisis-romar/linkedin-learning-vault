---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-laravel-22373805
url: "https://www.linkedin.com/learning/advanced-laravel-22373805"
duration_minutes: 194
duration: 3h 14m
level: Advanced
updated: 6/9/2023
learners: 11831
skills:
  - Laravel
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-laravel-4380124"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFlZrRMt3ahvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686070664741?e=2147483647&amp;v=beta&amp;t=ub86ycLJnTNHJBGYPhhHoYry1d2fIBI2FGsp8Kgd4XY"
linkedin_topic: Web Development
learning_paths:
  - '[Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)'
prev_courses:
  - '[Laravel Essential Training](Laravel%20Essential%20Training.md)'
next_courses:
  - '[Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md)'
path_nav: '[{"path":"Build Your Laravel Skills","position":2,"total":7,"prev":"Laravel Essential Training","next":"Building RESTful APIs in Laravel"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/laravel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Advanced%20Laravel.md)

![Advanced Laravel](https://media.licdn.com/dms/image/v2/D560DAQFlZrRMt3ahvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686070664741?e=2147483647&amp;v=beta&amp;t=ub86ycLJnTNHJBGYPhhHoYry1d2fIBI2FGsp8Kgd4XY)

# Advanced Laravel

> As an open-source web application framework, Laravel offers you expressive, elegant syntax and an enjoyable creative experience. But how can you make the most of its features? In this course, full-stack web developer and tech educator Shruti Balasa guides you through advanced concepts in Laravel. Go over how to establish project requirements and set up your project. Learn how to create user roles,

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-laravel-22373805) | 3h 14m | Advanced | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Beyond the basics](#beyond-the-basics)
  - [Prerequisites for the course](#prerequisites-for-the-course)
  - [What's new in Laravel 10?](#whats-new-in-laravel-10)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Starting Your Project**](#1-starting-your-project) (3 videos)
  - [Understand project requirements](#understand-project-requirements)
  - [Set up the project](#set-up-the-project)
  - [Create the database and models](#create-the-database-and-models)
- [**2. Authorization**](#2-authorization) (5 videos)
  - [Create user roles](#create-user-roles)
  - [Write custom middleware](#write-custom-middleware)
  - [Revisit CRUD basics](#revisit-crud-basics)
  - [Use gates](#use-gates)
  - [Write policies](#write-policies)
- [**3. Advanced Eloquent Features**](#3-advanced-eloquent-features) (5 videos)
  - [Seeding and factories](#seeding-and-factories)
  - [Many-to-many relationships](#many-to-many-relationships)
  - [Implement eager loading](#implement-eager-loading)
  - [Attaching and detaching relationships](#attaching-and-detaching-relationships)
  - [Write complex queries and create query scopes](#write-complex-queries-and-create-query-scopes)
- [**4. Do More with Laravel**](#4-do-more-with-laravel) (3 videos)
  - [Write commands](#write-commands)
  - [Create events and listeners](#create-events-and-listeners)
  - [Make use of logs](#make-use-of-logs)
- [**5. Notifications, Queuing, and Scheduling**](#5-notifications-queuing-and-scheduling) (4 videos)
  - [Send emails](#send-emails)
  - [Send notifications](#send-notifications)
  - [Create jobs and queues](#create-jobs-and-queues)
  - [Schedule tasks](#schedule-tasks)
- [**6. Testing**](#6-testing) (4 videos)
  - [Get started with testing](#get-started-with-testing)
  - [Write HTTP tests](#write-http-tests)
  - [Write database tests](#write-database-tests)
  - [Test-driven development](#test-driven-development)
- [**7. Understand How Laravel Works**](#7-understand-how-laravel-works) (4 videos)
  - [Request lifecycle overview](#request-lifecycle-overview)
  - [What is a service container?](#what-is-a-service-container)
  - [Service providers in Laravel](#service-providers-in-laravel)
  - [Get to know Facades](#get-to-know-facades)
- [**Conclusion**](#conclusion) (1 videos)
  - [Quick summary](#quick-summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Beyond the basics](https://www.linkedin.com/learning/advanced-laravel-22373805/beyond-the-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/beyond-the-basics?u=76281980&t=0)** - [Shruti] [Laravel](../../Skills/Web%20Development/Laravel.md) is one of the most popular [PHP](../../Skills/Software%20Development/PHP.md) frameworks known for its simplicity, elegance, and expressive syntax. In this course, we will delve deep into some of the advanced concepts and features of the framework. To help you become a proficient Laravel developer. We will explore a wide range of topics including authorization, advanced login capabilities, events and listeners, jobs and queues, notifications, and the like. What's more, we will put these concepts into practice by building a fully functional web application. Finally, we will cover testing in Laravel, which is a crucial aspect of any development process. By the end of the course, you will have the skills and knowledge to create powerful and efficient Laravel applications. I'm Shruti Balasa, an experienced tech educator and speaker. Join me in this course and together we can unlock your full potential as a Laravel developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [shruti] (1)

#### [Prerequisites for the course](https://www.linkedin.com/learning/advanced-laravel-22373805/prerequisites-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/prerequisites-for-the-course?u=76281980&t=0)** - [Instructor[ To get the most out of this course, you should have a solid understanding of [Laravel](../../Skills/Web%20Development/Laravel.md) basics. This includes installing and setting up Laravel, creating models, working with views and controllers, running migrations, basic Eloquent features, and writing CRUD operations for a resource. I also assume that you have a basic understanding of [PHP](../../Skills/Software%20Development/PHP.md), and [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md), as these are essential skills for any Laravel developer. If you're new to Laravel, or haven't worked with it extensively, I suggest taking the beginner level course first. This will give you a solid foundation, and help you better understand the advanced concepts covered here. You can always come back to this course once you've acquired the necessary skills. I also recommend having a dedicated computer or a laptop with a good internet connection to practice and build your own project while you follow along the course. If you're all set, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **Env Vars:** crud (1), php (1)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor (1)

#### [What's new in Laravel 10?](https://www.linkedin.com/learning/advanced-laravel-22373805/what-s-new-in-laravel-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/what-s-new-in-laravel-10?u=76281980&t=0)** - [Instructor] Let's dive into what's new in [Laravel](../../Skills/Web%20Development/Laravel.md) 10. Firstly, it's important to note that the minimum [PHP](../../Skills/Software%20Development/PHP.md) version for Laravel 10 is now 8.1. This means that if you're using PHP 8.0 or lower, you'll need to upgrade your PHP version before creating a Laravel 10 app. I'll be using Sail with Docker as my local dev environment throughout this course so I don't need to upgrade my PHP version. But if you prefer using any other tool like Homestead, Valet, XAMPP, Laragon, or local Apache server, you might need to upgrade first. Let me open the terminal. I have just installed a new Laravel application using Sail. Let me start Sail in the background using the command 'sail up dash D.' All right, Sail is running. Now, I'll open the project in the browser. Here it is. A fresh new homepage for Laravel 10. This looks really nice. All right, let's talk about the changes in the code base. One of the major changes in Laravel 10 is the switch from Webpack to Vite. This change actually happened in the version 9.19 itself. With Vite, you can expect faster builds and better development experience. So you'll no longer see the webpack.mix.js. Instead, in the new version, we have the Vite configuration. If you're migrating from an earlier version of Laravel, you'll need to upgrade your package.[JSON](../../Skills/Web%20Development/JSON.md) file to use Vite instead of Webpack.
>
> **[1:33](https://www.linkedin.com/learning/advanced-laravel-22373805/what-s-new-in-laravel-10?u=76281980&t=93)** And so now, you don't have to load your CSS and JS files manually. For example, go to Resources, Views, and welcome.blade.php. Earlier, we had to load our styles and scripts from the Assets folder, but now, we can instead use the Vite Blade directive and load our resources like so. Resources slash CSS slash app dot CSS, and then, the JS resource right here. This is one of the major changes. Next new feature in Laravel 10 is native type declarations. Let me go to App, Console, Kernel.php. You will now notice the specification for the return type for every single function throughout the app. This makes your code more readable and less prone to errors. For example, here's the same Kernel class of an older version. Notice that in the older version, the DocBlock suggested the return type and the type of the parameters. But in the new version, that's not required because the function signature itself suggests the types. This is a big change, but it's backward compatible with existing applications, so you don't have to worry about it. Another useful feature in Laravel 10 is the generator [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) prompts. Let me show you in the terminal. To create a controller, we use the command
>
> **[3:06](https://www.linkedin.com/learning/advanced-laravel-22373805/what-s-new-in-laravel-10?u=76281980&t=186)** 'sail artisan make:controller' followed by the name of the controller, for example, user controller. And then, if we need a resource controller, we use the dash dash resource flag. But now, version 10 onwards, you can simply say make:controller, and let's see what happens. You will be prompted for input. What should the controller be named? Let's say PostController. And then, it asks you which type of controller would you like? Let's say Resource. And what model should this resource controller be for? Let's just leave that blank. And now, a resource controller is created successfully. Check it out. So you don't have to remember any options for any of the make commands anymore. Amazing, right? And there are a few more advanced features in this version, some of which I will cover later and some more are out of the scope of this course. That's it. Let's make the best of these new features while we learn about the existing ones in depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (9), [PHP](../../Skills/Software%20Development/PHP.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** php (6), make (4), docker (1), apache (1)
> **Env Vars:** php (4), css (3), xampp (1), cli (1)
> **File Paths:** webpack.mix.js (1), package.json (1), welcome.blade.php (1), kernel.php (1)
> **Versions:** 8.1 (1), php 8 (1), version 9 (1), version 10 (1)
> **UI Navigation:** open the (2), go to (2)
> **Analogies:** for example (3)
> **Tools:** terminal (2)

#### [Using the exercise files](https://www.linkedin.com/learning/advanced-laravel-22373805/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/using-the-exercise-files?u=76281980&t=0)** - [Instructor] All the code that you see me write throughout this course is available in this [GitHub](../../Skills/Software%20Development/GitHub.md) repository. I recommend coding along with me all the way till the end so this repository will serve as a reference. It is organized such that each branch here is associated with a video in the course. For example, the branch 02-03 has the code that you will see in chapter two, video three. But notice that each of these numbers have two branches named with an ending letter, b and e. Now, that's the beginning and ending state of each video. If you're watching chapter two, video three, the branch named 02-03b contains the code the way it is at the beginning of the video, and the code at the end of the video is in the branch named 02-03e. At the end of any video, if you feel your code doesn't work as expected and you need to refer to my code, you can view the files right here in the browser. Let's say you just watched chapter four, video two. Go to the branch 04-02e. And if you want to refer to the file within the routes directory named web.[PHP](../../Skills/Software%20Development/PHP.md), you can view the code right here, compare it with yours, and copy it if needed, and continue with the course once you fixed it. Since we are learning about advanced features, I might skip writing some basic code during some of the videos to save time. In those cases, you might have to fold the required branch or copy the modified or missing files to continue coding along. I'll mention in the video when that's the case.
>
> **[1:34](https://www.linkedin.com/learning/advanced-laravel-22373805/using-the-exercise-files?u=76281980&t=94)** To clone a particular branch and install sale, follow the steps in the README of this repository. Right here. Now, you're all set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **File Paths:** web.php (1)
> **CLI Commands:** php (1)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### 1. Starting Your Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand project requirements](https://www.linkedin.com/learning/advanced-laravel-22373805/understand-project-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/understand-project-requirements?u=76281980&t=0)** - [Instructor] We are now going to build a MyGym web application, it's an app for scheduling and booking gym classes. This app will have three types of users, instructors, members, and admins. Instructors will be able to schedule classes by selecting the type of class, a date, and a time. They can view all their upcoming classes and cancel them if they wish to. Members will be able to view all the scheduled classes, select and book a slot for themselves. They can then view all their upcoming bookings and cancel, if needed. Something like this. And it's canceled. And in case an instructor goes to the upcoming classes and cancels a class, all the members who made a booking will immediately receive a mail saying, this class was canceled. Admins should be able to create users, deactivate membership, et cetera, but we will not be implementing any admin features in this course. To build this application, we'll use some authorization features in built-in [Laravel](../../Skills/Web%20Development/Laravel.md), like custom middleware, gates and policies. We will use advanced eloquent features including many-to-many relationships eager loading, and scoping queries. While building this app, we'll also learn about creating events and listeners, sending user notifications, creating jobs, and queuing them.
>
> **[1:35](https://www.linkedin.com/learning/advanced-laravel-22373805/understand-project-requirements?u=76281980&t=95)** Lastly, we'll learn about testing and go deeper into Laravel architecture concepts. I hope this gives you a good idea of what we'll be building in this course and what you will learn in the process. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (2)
> **Speakers:** - [instructor] (1)

#### [Set up the project](https://www.linkedin.com/learning/advanced-laravel-22373805/set-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/set-up-the-project?u=76281980&t=0)** - [Instructor] By now, you already know how to install [Laravel](../../Skills/Web%20Development/Laravel.md) in your local machine and use a starter kit for authentication. So I'm going to quickly create a new Laravel app for mygym project, and you can do the same. Once installed, cd into the project, and start sail using sail up -d. Once done, let me install Breeze for authentication using composer run sail composer require laravel/breeze
>
> **[0:42](https://www.linkedin.com/learning/advanced-laravel-22373805/set-up-the-project?u=76281980&t=42)** only for dev. Now let me install Breeze, sail artisan breeze install.
>
> **[0:55](https://www.linkedin.com/learning/advanced-laravel-22373805/set-up-the-project?u=76281980&t=55)** Which stack would you like to install? I'll choose blade. Dark mode support? No. Pest test? Not for now. All right, Breeze is installed. Let's run the migrations now, sail artisan migrate. And [npm](../../Skills/Web%20Development/npm.md) install. And npm run dev. Now let this keep running. I'll open a new terminal. Go to localhost in your browser now, and this is what we have. We have the Log in and Register links. Let's try and register some users to check if it's all working. Let me register myself. Shruti@[example.com](https://example.com), password, password, Register. And, yes, I'm logged into the dashboard. Let me log out and quickly register an instructor as well. Let's call him [John](../../Glossary/Tool/John%20the%20Ripper.md), john@[example.com](https://example.com), password and password. And one last user, Log Out. And Register our Admin, admin@[example.com](https://example.com) and the password. Okay, Log out once again. And now use any GUI database tool to view your database. I use TablePlus, so let me open that. Create a new connection, [MySQL](../../Skills/Software%20Development/MySQL.md).
>
> **[2:33](https://www.linkedin.com/learning/advanced-laravel-22373805/set-up-the-project?u=76281980&t=153)** Give it a name, username, password. And the database name is mygym. This is automatically created for us because we're using Sail. Test this. All right, let's connect to it. And now on the users stable, great. We have all the three users we just registered. Now go back to the terminal and let me open this up in Visual Studio Code. Feel free to use the code editor of your choice like PhpStorm, or Sublime Text, or any other. The first thing I do here is open the .env file and change the app name to MyGym. And then let me create a very simple welcome page. Let me replace the existing one with something very simple. So here I change the title to the app name using config method, app.name. And then I'll remove all the fonts in styles. Instead, load the CSS and JS resources using the with Blade directive, resources/css/app.css.
>
> **[3:45](https://www.linkedin.com/learning/advanced-laravel-22373805/set-up-the-project?u=76281980&t=225)** We don't have any JS, but let me still load it, js/app.js. Okay. And now here I'll just remove all the markup and instead replace it with my own. This is something very simple, actually, just a heading. And then if the user is logged in, they'll be able to see the dashboard link, else, the login link. Let's see what this looks like in our browser. Refresh. This is great. A very good start. Note that I have removed the register link from here because we are assuming that all the users are actually created by the admin. You can go ahead and remove all the registration logic too, but I'll skip that part. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [npm](../../Skills/Web%20Development/npm.md) (2), [John](../../Glossary/Tool/John%20the%20Ripper.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **CLI Commands:** composer (2), npm (2), cd (1), mysql (1)
> **Prerequisites:** install (6)
> **Tools:** terminal (2), visual studio (1), sublime (1)
> **URLs:** [example.com](https://example.com) (3)
> **File Paths:** resources/css/app.css (1), js/app.js (1)
> **Env Vars:** gui (1), css (1)
> **UI Navigation:** go to (1), open the (1)

#### [Create the database and models](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=0)** - [Instructor] Now let's start thinking about our database tables and models. We already have our user table ready. Let's think of the next table to create. The first feature of our app is for instructors to be able to schedule classes. That means we need to have a scheduled classes table.
>
> **[0:23](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=23)** This will be associated with the schedule class model, so a schedule class can be created, viewed or deleted, if you think of it that way. This table will have an ID as a primary key and a column for the type of class like yoga, Pilates, dance fitness, and so on, and then one for the date and time of the class. This could be our date/time. We also need a column for the instructor. Now this instructor will actually be one of our users, so instructor can be a foreign key. We can say instructor ID, which is a foreign key that references the user's ID. And let me pull this down here and this is a one-to-many relationship that is one instructor can schedule many classes. Next, the type column cannot be a string because we need more information about the type of class like description, duration, and so on, so let's make this a separate table and let's call it class types with ID as primary key, the name of that class type, which can be a string, then a description, a string again, then duration, or we could just say minutes
>
> **[2:00](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=120)** to be more specific and that would be an int. And now this type column is actually a type ID, which is a foreign key that again references the class types table, the ID key. This also is a one-to-many relationship. Let me bring that down here, this right here, so you can see it better. This is a one-to-many relationship because one class type can belong to multiple scheduled classes. This is our main set of tables. In the future videos, we'll create one more table for booking a class, but for now, this is good to start off with. So head over to the terminal and let's create our first model along with the migration for class types, sail artisan make:model ClassType,
>
> **[2:58](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=178)** and let me add a -M flag so that the migration is created as well. Okay, model and migration created, let's open them both. This is the migration. Open the model class type. In the migration, let me add the other columns needed. String column for the name of the class type. A string column again for the description. Let's add an integer column for the minutes or the duration. Great, back to the terminal, let's create another model and migration for our scheduled classes. Sail artisan make:model ScheduledClass.
>
> **[3:54](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=234)** Done, let's open them to the migration and then open the scheduled class model in the migration. Let's first add the instructor foreignID. We can use the foreignID method. The column name is instructor ID. And we have to chain this with the constrained method, specifying the table as users because we have changed the name to instructor ID. We wouldn't need this if we called it user ID, but if we call it user ID, it's going to confuse us because this is only an instructor, not a member. Let's use another foreignID. Let's create another one. ForeignID, this is for the class type. Let's say class type ID constrained and we don't have to specify the table here because it's already in the name. Lastly, we need a date/time column. Date/time. Let's call this date_time. This is good, now run the migrations. Clear sail artisan migrate. Let's verify if our tables are created correctly. Refresh. We have our scheduled class.
>
> **[5:27](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=327)** Yes, instructor ID, class type ID. You can check the structure and note that they both are referencing, they both are foreign keys, but we needed one more thing. We have to make this date/time unique, so let me change that. I will roll back the migration and then go back here and let's just say unique because we don't want two classes to be be scheduled at the same date and time. Now migrate once again. Okay, this should be good. Let me refresh again, and yes, the date/time is unique and the class type stable with all the required columns. Now let's go back to VS Code and let me close the migration files. And now let's define the one-to-many relationships. First, open the user model and let's define a one-to-many relationship to get all the scheduled classes of a particular instructor. So let's say public function scheduled classes. It has to be plural because we have many scheduled classes of one single instructor. Share, return. This has many scheduled classes. And now very importantly,
>
> **[7:01](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=421)** we have to pass in the column name instructor ID because we have changed it. If it was user ID, then we don't have to pass in the second argument, but we want to resolve this relationship through the column instructor ID. Now let's define the inverse relationship in scheduled class. That is this scheduled class belongs to a user, so public function instructor. That's better than saying just user. Return. This belongs to user. Here again, sorry, not model, user class. Here again, we need to pass the column name, which is instructor ID. Now in the class type model, let's define the has many relationship with scheduled classes, so public function scheduled classes. Return. This has many scheduled classes. Now here we're using the same class type ID as the column name so we don't have to pass the second argument. Now define the inverse relationship here again in schedule classes. We can copy this. Instead of instructor, we want a class type
>
> **[8:37](https://www.linkedin.com/learning/advanced-laravel-22373805/create-the-database-and-models?u=76281980&t=517)** and this schedule class belongs to class type, and remove this. okay, so this is what we have. A schedule class belongs to a class type and to an instructor, and a class type has many scheduled classes, an instructor also has many scheduled classes. We now have our database tables, models and relationships ready. Let's continue building.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **CLI Commands:** make (4)
> **Code Identifiers:** foreignid (3), date_time (1)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** open the (3)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Authorization

[↑ Back to Table of Contents](#table-of-contents)

#### [Create user roles](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=0)** - [Shruti] As I mentioned in the previous video, the first feature of our app is scheduling gym classes. The instructor should be able to do that, and for this, we first need a way to assign roles to our users. Each user is either an instructor, a member, or an admin. There are multiple ways of assigning roles and authorizing the tasks that they can perform on our app. We can create multiple tables and use many to many relationships to assign roles. Then use gates and policies, or we can use third party packages to manage authorization. What method you choose depends on the complexity of the app and the flexibility needed in the future. Our app is not very complicated, so what we will do is we can simply add a column role in our user's table, which will be a string. This can be instructor, admin or member. Now let's create a migration to add this column to the user's table. Open terminal, sail, artisan, make migration, add role to users table. Open this up, and here our table users is already prefilled. Table, string role.
>
> **[1:30](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=90)** And here we can give a default value, and the default can be member. All right, let's run the migration. Yeah, and reversing, we'll have to drop the column. So drop column, this is role. Yeah, and now we can run the migration sail, art design, migrate. Okay, go to table plus, go to users and verify that the role is here. Let me pull this to my left just for convenience, right here. And since the default is member, all three users have got that role. Let me change this manually to instructor and this to admin, commit the changes. Now, just adding this role column does nothing. Any user that logs in will still be redirected to a common dashboard. That is what we need to change first. We need three different [Dashboards](../../Skills/Data%20Science/Dashboards.md), one for each type of user. So head over to the terminal and create a dashboard controller. Sail artisan, make controller, and what's the name of the controller? We want to call it dashboard controller. What type of controller? Let's say invokable, because we only need one method. Now this controller's job is only to redirect a user
>
> **[3:06](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=186)** to their respective dashboard based on the role. These are also called single action controllers because they only have one action. Here we need to check the user role and redirect them accordingly. So switch and take in auth user role.
>
> **[3:32](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=212)** And then if it's an instructor, do something. If it's a member, something else. And if it's an admin, something else. Case instructor, case member, case admin, and default, maybe you could redirect it to log in or something. So here, okay, I have a typo, instructor. So if the rule is instructor, redirect to a named route that is, we don't have this route yet, but we are going to create it soon. Instructor.dashboard, and then instead if the role is member, redirect to member dashboard. If the role is admin, redirect to admin dashboard. By default, you can probably redirect to log in. Now let's create these routes in the web.[PHP](../../Skills/Software%20Development/PHP.md) file. Copy the default dashboard route, and paste it three more times. Get instructor/dashboard, view instructor.dashboard. Again, we don't have this view ready, but we are going to create it in a minute. Name can be instructor.dashboard. So I'm going to do the same to the other two as well.
>
> **[5:07](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=307)** Member/dashboard, member.dashboard, member.dashboard, and here, admin/dashboard. Viewers admin.dashboard, and name is admin.dashboard. We are not really checking if the users are verified, so we can remove this on all four routes.
>
> **[5:34](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=334)** Okay, now let's create the views within resources. Views, create three new directories. Let's call them instructor. Create a new folder member, and another folder for admin. Copy this dashboard view and paste it within all three, admin, instructor, and member. The only things we change is we just say, hey, member, so that we'll know if it's working right? Shall we say, hey, instructor, and here we say, hey, admin. And finally in the web PHP routes, when a user comes to the dashboard route, he should be redirected accordingly, which is handled by the controller. So change this to dashboard controller. And since it's a single action controller, we don't have to specify any method here. All right, this should work. So let me go to local host and try to log in as a member first. Shruti@[example.com](https://example.com), log in and perfect. It says, hey, member, and note that the URL is also member/dashboard. Let me log out and try as an instructor instead. Log in and yes, I see, hey, instructor.
>
> **[7:09](https://www.linkedin.com/learning/advanced-laravel-22373805/create-user-roles?u=76281980&t=429)** The URL is the same as well. So now we can go back and we can delete this general dashboard view. Delete the dash dashboard blade file. We don't need that anymore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **CLI Commands:** make (2), php (2)
> **Env Vars:** php (2), url (2)
> **UI Navigation:** go to (3)
> **Tools:** terminal (2)
> **File Paths:** web.php (1)
> **URLs:** [example.com](https://example.com) (1)
> **Cross-References:** previous video (1)

#### [Write custom middleware](https://www.linkedin.com/learning/advanced-laravel-22373805/write-custom-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/write-custom-middleware?u=76281980&t=0)** - [Instructor] Now, our users are redirected to their respective [Dashboards](../../Skills/Data%20Science/Dashboards.md), like our instructor here can view an instructor dashboard. But nothing is stopping this instructor from accessing the member's dashboard by directly typing in the URL, like so. See, we are able to do this, but this should not be allowed. So how do we restrict our users from accessing routes they're not supposed to? The same way we restrict users who are not logged in to view a logged in user's route using a middleware. We now need to create a custom middleware. First, let me log out and let's create a custom middleware, sail artisan make middleware, and call it something like check user role. Middleware is created. Open it. Now, if you can recall what a middleware does, it acts like a security guard that checks the incoming request, perform some action here before allowing them to proceed to the application or another middleware. In here, we have to add some checks based on the user role, but first we need to register this middleware. We do that in app, http, kernel.[PHP](../../Skills/Software%20Development/PHP.md). You'll find all the http middleware registered here. Let's scroll down fully and in the end, we add our middleware with an alias, role, and add the class here. App, http, middleware,
>
> **[1:37](https://www.linkedin.com/learning/advanced-laravel-22373805/write-custom-middleware?u=76281980&t=97)** check user role, class. Now we can use this role middleware in our routes. Open web.php. Now along with auth, you can add the role middleware as well. Let's do this for all three routes. Now here, inside the handle method, we have to check if the authorized user's role, that is auth, user, role, matches with the route's role. So we need a way to specify which route is for which role, so we can here accept another parameter, string, role. So here in our routes, let's pass in the role. Here, we want our instructor to be able to access, right here, member, and here, admin, so we can pass in additional parameters using colon after role, middleware alias. All right, so back in the handle method, let's check if the authenticated user role is same as the route's role. If it's not, then let's abort with a code like 403, forbidden, else, move on to the next step. This should work. Let's try. Let me log in as an instructor again and let me try to access the member dashboard and see,
>
> **[3:17](https://www.linkedin.com/learning/advanced-laravel-22373805/write-custom-middleware?u=76281980&t=197)** we're forbidden. Let's try to access the admin dashboard and we are forbidden again. We can take this one step further and instead of aborting here, we can redirect to the common dashboard route. Let me remove this. So if we redirect to the common dashboard route, from there, accordingly, the user will be redirected to his or her own dashboard. So let's verify this. So yes, you'll see if I try to access a member dashboard, I'm redirected back to my own dashboard. So now, for all the routes that we want to restrict to a particular role, we can simply add the role middleware with the role value and it will be done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **CLI Commands:** php (2), make (1), find (1)
> **File Paths:** kernel.php (1), web.php (1)
> **Env Vars:** url (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Revisit CRUD basics](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=0)** - [Instructor] Now it's time to add the functionality for instructors to schedule classes, view the upcoming ones, and cancel them if needed. Let's create a resource controller for the same, sail artisan make:controller ScheduledClassController --resource.
>
> **[0:26](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=26)** The controller is created. Next, let's register the resource routes in web.[PHP](../../Skills/Software%20Development/PHP.md). So let's do that down here. Route::resource, and here we can call it /instructor/schedule. Schedule classes will be too long. So let's just minimize that to schedule. And now we just have to point this to the ScheduledClassController. And we don't need all the resource routes like edit and update. They're not needed. So chain this with the only method. And we would need the index action to list all the classes. We need the create and store methods to create a class and save them. And finally, we need the destroy method to cancel a class. And of course, don't forget to chain this with the middleware instructor because only instructors should be able to access these. Okay, let's verify we've got the resource routes correct by checking the route list, sail artisan route:list.
>
> **[1:48](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=108)** And yeah, here we have the routes we just registered. Note that the names of these are schedule.index, schedule.store, and so on. So whenever needed, we have to use these names. Now let's go back to the controller's create method. But before that, let's remove the ones we don't need. We don't need to show a particular resource no need to edit, update. Let me remove all of these. In the create method, let's return the view to display a form, return view instructor, not dashboard, instructor.schedule. Let's create this view and resources, views, instructor.
>
> **[2:38](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=158)** Create a new blade file, schedule.blade.php. Let's copy the contents from the dashboard view itself, change the title to schedule a class. And this part here, I'll copy it from elsewhere and paste it just to save time. You can copy it from [GitHub](../../Skills/Software%20Development/GitHub.md) repository branch associated with this video. Let's see what we get in the browser by directly going to instructor/schedule/create. And yes, here's our form. We first have a select input to display some options of the class type like yoga or dance fitness. And here we can select the date and here the time, all of those are yet to be filled, and then the instructor can schedule the class. So for this select input to display some options of the type of classes, we first need our table class types to have some data. This one. For now, I'll manually fill it with some dummy data. You can do the same.
>
> **[4:01](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=241)** This is done. I have filled in some dummy data. Now back to the code. Let's [Fetch](../../Skills/Web%20Development/Fetch.md) all these class types and display them here as options. For that, let's go to the controller and fetch in the class types. ClassTypes equals ClassType::all and here, chain this, sorry, yeah, chain this with classTypes. And in the view, let's get them. Here, let's wrap it within foreach, foreach classTypes as classType. Add the option here. The value will be classType id, but what we display here is the classType name. All right, let's verify this. Refresh, yeah, we are able to see them here. The date, it's perfect, it's just a date picker. But we need to set this so that only future dates can be selected. So add a min attribute and set it to a future date that is tomorrow.
>
> **[5:38](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=338)** So date Y-m-d. In this format, strtotime tomorrow. All right, so this is the minimum date. All the other dates will be disabled. And for the time, let me add some fixed options like 6:00 AM or 5:00 AM in the morning, which will be 05:00:00. And do the same for 6:00 AM, 7:00 AM, 8:00 AM, and then 5:00 PM in the evening, 6:00 PM, 7:00 PM, and 8:00 PM. Let me quickly change all of this, these values as well, six, seven, eight. And this would be 17, 18 hours, 19 hours, and 20 hours. Let's verify once again. And yes, we have our date. We can't select, all the previous dates are disabled, only from tomorrow, and then our time as well. Right now set the form action right here to the store route, route schedule.store. So now let's schedule a class. Select the type of class, select a date, and time, Schedule. So we hit the store route and the store method. So here in our controllers store method,
>
> **[7:12](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=432)** let's first validate the request that we are receiving, but even before we validate, note that we are taking the date and time inputs separately. But in our database table, it's a single column, so we have to combine them first. So use a date_time variable and combine both the requests, request input date, and add a space, request input time.
>
> **[7:43](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=463)** Then merge this into the request with request merge. The column name is date time, so say date_time is date_time. Okay, let's look at the table. Once schedule classes, we have our date and time. We have our class type id from the form itself. We need the instructor id along with the request parameters. So along with date and time, also merge the instructor_id into the request. This will be our authenticated id. All right, now we can validate the request. Validated equals request, validate class_type_id.
>
> **[8:47](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=527)** This field is required. And then our date_time is required and unique as well.
>
> **[9:03](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=543)** It's unique within the table scheduled_classes. And the column is date_time itself. And also this date_time is after now, right? So it's a future date. Okay, this should be good. Now that it's validated we can insert the row, ScheduledClass::create and pass in the validated array.
>
> **[9:39](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=579)** But before we are able to do this, we need to allow mass assignment in the model. So open ScheduledClass model. And here, let's say protected guarded equals null.
>
> **[10:00](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=600)** Okay, so we are allowing mass assignment. And also right now this date_time value is currently a string, but in our table column the date_time is of type datetime. So it's good to convert this format before storing instead of converting while storing and fetching, we can use date casting. In the model, add this date_time field to a protected casts variable like so. Date_time is of type datetime. So now whenever we store a string also, we will be able to get a datetime type. And even when we retrieve it's the same. Now let's test this. Go back to the browser, refresh, Continue submission, oh, validateRequired does not exist. Sorry, there is a typo. Let me fix that. Controller required, all right, now let's try again, refresh, Continue. It says instructor ID doesn't have a default value. Looks like we forgot to add that here in validated, instructor ID is also required. All right, now this should work. Let's try again, refresh, Continue.
>
> **[11:34](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=694)** Okay, no errors. So let's check TablePlus, refresh. And yes, we have got the class scheduled. Now let me try and schedule one more class for the same date and time. Let me go back. Yeah, create and the same date tomorrow 5:00 AM, Schedule. And obviously it doesn't work, but we are redirected to the same form. Here, we need to show the error, right? Otherwise we don't know what's happening, but you already know how to do that. So I'll leave that to you. Make sure that you display errors. And also when the instructor comes back redirected to the same form these should be filled using the old method. So that's left to you. If you don't know how to do that or if you're confused, you're stuck. You can check the GitHub branch associated with this video, the end state branch, and you can copy the code. So now I'll select a different class, a different time, and then schedule this, and this works. Next in the index route, let's show all the scheduled classes. Here, let's fetch the scheduledClasses equals, we want only this instructor's classes. So we fetch them using the one to many relationship that we just assigned. So this instructor's scheduled classes, get,
>
> **[13:12](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=792)** let's dd and see if we are getting those classes. Go to the browser, schedule, and here we have all the classes, yes. But what if we have a past date or time? We will be getting those classes as well, but we want to show the instructor only the upcoming classes. So let's train the query with where date_time is greater than now.
>
> **[13:48](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=828)** So we get only the upcoming classes. All right, we don't have to test this, great. However, for this to be accurate, you might have to change the time zone of the app. If I assume this gym is in India, it follows Indian Standard Time. So in my app config, app.php, yeah, this one,
>
> **[14:13](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=853)** let me search for time zone and let me change this to Asia/Kolkata, So that this app will be perfect in this time zone. All right, close this. And also here in the controller, let's chain this with oldest, so that it's ordered in that way. But again, you'll have to give the date_time column so that based on this column, you'll see oldest first. That is the most recent ones first. And then you'll see the later ones. Now remove dd and return a view instead, return view instructor.upcoming
>
> **[15:06](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=906)** with scheduledClasses.
>
> **[15:15](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=915)** Okay, let's create this view in resources, instructor,
>
> **[15:24](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=924)** upcoming.blade.php. And once again, I'm going to copy from elsewhere and paste this. You can refer to GitHub just to save time. Okay, let's see what we got. Refresh and great, this is what we see. We are able to get these class type names here because of the relationship. So I'm directly using class, classType name, and also the minutes, which is displayed here. And then we have the date and time formatted correctly right here. And finally we have the cancel button. We have yet to make this work. This is wrapped in a form and everything. So let's just set the action to store route, route schedule.destroy. And a second argument to accept for the model, class. And now go to the destroy method in the controller. And here, since we are passing the model, we need to accept the model, which is ScheduledClass. And then the variable should be named schedule according to the resource route that we've created. So here we quickly check if this class is the one created by our instructor itself by doing if auth user id equals schedule instructor id.
>
> **[17:13](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=1033)** So if it's not, I will say abort with 403 restricted,
>
> **[17:22](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=1042)** else we can just say schedule delete, all right?
>
> **[17:31](https://www.linkedin.com/learning/advanced-laravel-22373805/revisit-crud-basics?u=76281980&t=1051)** And then we can redirect to index route. So named_route, redirect. This will be schedule.index. And here in the store method, we forgot to redirect, here in the store method, we'll be redirecting to the same schedule.index itself after saving it. Let's check now, refresh, cancel a class, and perfect, it's gone. So instructors can now schedule classes, view upcoming ones, and cancel them. I hope this was a good refresher for grad basics for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [Fetch](../../Skills/Web%20Development/Fetch.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Code Identifiers:** date_time (11), classtype (4), classtypes (2), scheduledclasses (2), instructor_id (1)
> **Ports:** :00 (12)
> **CLI Commands:** php (4), make (3)
> **UI Navigation:** go to (3), select the (2)
> **File Paths:** web.php (1), schedule.blade.php (1), app.php (1), upcoming.blade.php (1)
> **Tools:** github (3)
> **Cross-References:** go back to (2)

#### [Use gates](https://www.linkedin.com/learning/advanced-laravel-22373805/use-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/use-gates?u=76281980&t=0)** - [Lecturer] Now that we have our instructor functionality ready, it's time to add some links to our navigation bar to schedule classes and view upcoming ones. Go to VS code and open navigation blade file. We have the navigation links here. Next to the dashboard, let's add two links. So copy this and paste it two times. One is schedule a class, and the other one, view upcoming ones. So let's say upcoming classes. Let's change the routes as well. This would be schedule.create, and this is schedule.index. We have to change the route name here as well to highlight the current route. So schedule.create, and this is schedule.index. Now we have to add these links down here in the responsive section as well, but I'm going to skip that for now. Okay, let's see what this looks like to the browser. And yes, we have the Schedule a Class linked correctly and Upcoming Classes as well. We can view them. However, if we log out and log in as a member,
>
> **[1:27](https://www.linkedin.com/learning/advanced-laravel-22373805/use-gates?u=76281980&t=87)** even a member is able to see Schedule a Class and Upcoming Classes. Of course, we can't access these links because we are using the custom middleware and we are restricting access, but they're present. So how do we make sure that different users see different links here based on their role? Because this navigation blade view is common for all users. For this, we can use something called gates in [Laravel](../../Skills/Web%20Development/Laravel.md). Gates are a way to define permissions which determine if a user is authorized to perform a given action. To define a gate, go to VS code and open AuthServiceProvider within app providers. Down here, within the boot method, use the gate facade to define what action can be performed by whom. So gate define, and the first argument here will be the action. You can call it anything, so let me say schedule class. So I'm defining this action and I'm specifying who are the users or what is the case where this action can be performed? So user closure and pass the user model and specify the condition in which this action can be performed. The condition is that this user's role must be equal to instructor. And return this. So if this is true, then this action can be performed.
>
> **[3:02](https://www.linkedin.com/learning/advanced-laravel-22373805/use-gates?u=76281980&t=182)** All right, let's import the required classes, facades, gate and the user class, app models, user. All right, now the gate is defined. Let's use it in our navigation view. Here, these two links should be visible only if the user can schedule a class. So use the can blade directive and specify the class here. Here, endcan. Okay? Now let's check. Yeah, because I'm logged in as a member, I'm not able to see these two links now. Let me try and log out. Log in as an instructor and great. I'm able to see both the links here. This is a very elegant way to allow authorized users access to certain functionality in your app. We just used gates in a blade view, but we can use it in controllers too, using the allows method. I recommend you to check out more details in the documentation, now that you know how and where to use gates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1)
> **Tools:** vs code (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)

#### [Write policies](https://www.linkedin.com/learning/advanced-laravel-22373805/write-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/write-policies?u=76281980&t=0)** - [Instructor] A while ago, we implemented the feature of canceling a ScheduledClass. Before actually deleting the model, we checked if the authorized user is the one deleting it. This ensures that the instructor can cancel only his or her class and not another user's. Instead of checking it this way, let's write a policy for the same. The first step is to create a policy for the ScheduledClass model, sail artisan make:Policy ScheduledClassPolicy. This allows us to organize all related authorization rules in one place. We have the Policy class. Next we need to register it, but Laderman is capable of automatically discovering policies if you follow the standard naming convention; that is, the policy name must match the name of the model ScheduledClass and the suffix should be Policy. Also, this class must be within the Policies directory within app. As long as you follow these conventions, you don't have to register it, but otherwise, for some reason, if you don't follow them, you can manually register the policy in AuthServiceProvider, right here, this way. Okay, now back to the Policy class. In here, we can add methods for each action that we want to authorize on the ScheduledClass model; that is, for the delete action,
>
> **[1:34](https://www.linkedin.com/learning/advanced-laravel-22373805/write-policies?u=76281980&t=94)** we can say public function delete, accept the User model first, and then the model for which we are creating the policy; that is the ScheduledClass model. Let me type in ScheduledClass, scheduleClass, and then return true if this user can delete the scheduledClass. So return user id equals scheduledClass instructor_id, so only if these two are equal, this return's true. That means the user can delete it. Now let's use this policy to authorize the delete action in the ScheduledClassController. Let me comment this out. Instead of checking manually with the ID, now we use the policy saying if auth user use the can method, if the auth user can delete this model, this is the variable here, schedule, then do something. Or, if the user cannot delete, you can use the cannot method. Abort 403. Okay. You might think this is a longer process than simply checking the user ID directly. Note that this was a very simple example. What if we have different types of instructors, like senior and junior,
>
> **[3:07](https://www.linkedin.com/learning/advanced-laravel-22373805/write-policies?u=76281980&t=187)** and consider that only seniors can delete their classes and some such rules? Then these policies make our app more robust. We can add all our authorization rules with respect to the model in one single place and make changes accordingly. Now, we can actually test if this is working. In our app, I added another instructor and also scheduled another class by this instructor. So now let's try to log in as our first instructor and delete this class, which has ID 2. So go to the browser. We obviously cannot see that class here, but we can inspect element and change this ID to 2. Yeah, so right here, in the action, instead of 1, let's say 2, and let's try and delete this. You see, we see a 403 forbidden error, so it's working. You can continue defining as many methods as needed based on your app requirement. Now you know how to write policies and also implement them when needed. As you can see, compared to gates, policies are most structured and suitable for large applications with lots of models and different checks.

> [!info]- Semantic Content
>
> **Code Identifiers:** scheduledclass (2), scheduleclass (1), instructor_id (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Eloquent Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Seeding and factories](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=0)** - [Instructor] Now it's time to go ahead and implement the member features of being able to view all the scheduled classes and book slots for the same. For that, we need a good amount of data to work with. We need a lot of scheduled classes from multiple users, multiple instructors, and we also later need a lot of members to test other functionalities. You already know how tedious it is to manually sign up instructors and scheduled classes. The good news is we can use seeders and factories to populate dummy data for building our app. Let's seed our user database first with some instructors and members. Let's create a seeder, using sail artisan make:seeder User.
>
> **[0:51](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=51)** Open this. Within this we have a run method. In here we can insert data as we want. If we want to insert users one by one, you can use the query builder like so, DB::table users and manually insert each and every user. But this is again, a lot of work when we need multiple records. So we can use model factories in combination with seeders. A user factory is already created for us in database, factories. Here it is, UserFactory. Look at the definition here. This definition method is used to specify how to create the dummy data. The other values is the [PHP](../../Skills/Software%20Development/PHP.md) library fake for the same. Fake can generate different types of random data for you like names, unique emails, and you know, even words, addresses and so on. Once a factory is defined this way, we can use it in our seeders, like so. User::factory, count, then create. So when you say count, then create, you will get 10 users using the definition, the factory definition. Let me import the user model before I forget. Alright, this creates 10 random users based on the definition.
>
> **[2:22](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=142)** But in our case, additionally, we need to specify a role for each user. So let's define a default role as member right here. And then this will create 10 members for us. What if we need 10 instructors? We can just override the role value here as instructor. Now this will give us 10 instructors. Note that every time we refresh the database for some reason these 10 users are created and every time the users are different. But for us to build features while testing in the browser, we need some fixed user email and password to log in, right? For that reason, let me create some fixed user data as well using User::factory, count. Let me not specify count because if I don't specify, it'll create only one. Create. Now, I'll say I want a fixed user with name Shruti and email shurti@[example.com](https://example.com). So I'll be able to log in with this member every time I need to check. Let me also create another member. Let's say Taylor. Name is Taylor. I'll create a fixed instructor with name [John](../../Glossary/Tool/John%20the%20Ripper.md) and john@[example.com](https://example.com). Here I also need to specify the role as instructor.
>
> **[4:00](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=240)** And lastly an admin, to log in as admin. And sure the role will be admin. Okay, now let's reset our database using sail artisan migrate:refresh.
>
> **[4:24](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=264)** Let's see what this does. Oh, sorry, I have a typo, yes. Migrate:refresh. And now if you look at TablePlus, all our data is gone, all the user's data is gone. So let's seed it using our seeder. Right here. Clear. Sail artisan db:seed and specify the class that you wish to use. UserSeeder. Seeding is done. Now let me go back and refresh the table. This is wonderful. We have 24 random users, actually four fixed users and the remaining 20 are randomly created using our seeders and factory. Now this was just one seeder, UserSeeder. We'll obviously have multiple seeders to see the schedule classes table, the class types and so on. And we cannot individually call each seeder this way. So what we can do is we can go to the DatabaseSeeder, which is right here created for us. And in the run method we can call every single seeder that we want to create at one shot, right? So here I'll say this call and pass in the array of all the seeder. So first we have UserSeeder and then let's create some more seeders next.
>
> **[6:00](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=360)** But before that, let me show you how this works. Let's go back here. And instead of db:seed, let's say sail artisan migrate:refresh, so we are resetting the database and seeding it at the same time. We'll be using this quite a lot during our development. So now you can see it's rolling back all the migrations, running the migrations and seeding the database. If you go back and refresh, you have new set of data but you still have 24 users. All right, let's create seeds for class types table and scheduled classes table too. Clear. Sail artisan make:seeder ClassTypeSeeder.
>
> **[6:47](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=407)** And sail artisan make:seeder ScheduledClassSeeder as well.
>
> **[6:57](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=417)** All right. Oh, there is a small typo. I'm sorry, ClassTypeSeeder. Okay, I'll go back and delete this. All right, open this. Let me delete the typo one. Delete. Okay, so in our ClassTypeSeeder, we don't want any random data. It's better if we have fixed data like we created like yoga, dance, fitness, so that it makes sense. That is why I will not use a factory for this. I will seed the data manually here, like ClassType::create using aloquin. Let me create four different classes. So instead of doing it in TablePlus, we are doing it here. But the thing is we can do it just once. And description, you can use fake for the same, fake text. So that will give us some fake text. And minutes, let's say 60. Okay, so this will create one class. Let me copy past it four more times and change some things. This is 45 minutes, let's say pilates, 16 minutes and boxing for 15 minutes. Okay, this is done. For our ScheduledClassSeeder. Where is that? It's here. We will need a factory because we need too many classes. So let's create a factory for this.
>
> **[8:29](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=509)** Sail artisan make:factory ScheduledClassFactory. Okay, let's add our definition here. Return instructor ID is one thing we need. And this instructor ID can be a random number within 15 to 24. That's because we are anyway seeding the database the same way, right? Let me open up UserSeeder. Yeah, since we are first seeding four different fixed users and then we are seeding 10 members, that's why the instructors will have IDs anywhere between 15 and 24. 'Cause this is not the best way, but for now, let me go with this. It's a random number between 15 and 24. Then the class_type_id is a random number between one and four because we have only four classes. And then comes the date_time, which has to be a random one again. Let me use Carbon::now. And it has to be any future date and time, so let me add some hours to this. AddHours. Anywhere between 24 and 120 so that, you know, hopefully we will not get, duplicate date time. And here I'll say minutes, zero and seconds, also zero
>
> **[10:09](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=609)** so that it starts at the zero minute and zero second. So we get any random hour. Obviously we do get values like 3:00 AM and 12:00 PM when we might not have gym classes but it's okay to work with. So this gives us a random hour within the next five days. All right, now let's use this factory to schedule 10 classes in our ScheduledClassSeeder. Let's say ScheduledClass::factory count, 10, create. We have both our seeders. Let's not forget to include them here in the DatabaseSeeder. UserClass, ClassType, sorry, ClassTypeSeeder::class. And then our ScheduledClassSeeder.
>
> **[11:08](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=668)** You have to include ScheduledClassSeeder after these two because note that we have foreign keys referencing both these tables here. So this should work. Let's try once sail artisan migrate:refresh --seed. Let's see if all three tables are seeded. Rolling back migrations, running migrations. All right, we do have an error. It says unknown column type. I'm so sorry, it was not type. It is supposed to be name. Okay, let's try once again. Okay, rolling back, running. Carbon is not found. Again, I have to include it. Where is that? It's right here. Yes. Hopefully this time it'll work. Okay, there's a duplicate entry but I think this occurs very rarely. It just had to occur now. No problem. Let's try one last time. I think there's one more mistake. I cannot add hours like this. I'll have to have a random function within this. Sorry, yeah. And now this should work. Clear. Rolling back migrations. Running migrations. Great, all three seeders have run successfully. Let me check in TablePlus.
>
> **[12:44](https://www.linkedin.com/learning/advanced-laravel-22373805/seeding-and-factories?u=76281980&t=764)** Close users, scheduled_classes, refresh, and we have 10 classes scheduled. We have four class types as well. Perfect. Now we can continue building all our features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [John](../../Glossary/Tool/John%20the%20Ripper.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (4), php (1)
> **Code Identifiers:** class_type_id (1), date_time (1), scheduled_classes (1)
> **URLs:** [example.com](https://example.com) (2)
> **Ports:** :00 (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)
> **Env Vars:** php (1)

#### [Many-to-many relationships](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980&t=0)** - [Instructor] Now we need the feature to book these scheduled classes by members. Each user can book multiple classes and each class can have multiple users. So, this is a many-to-many relationship. We need an intermediate table, here, to store the user ID and the scheduled class ID. intermediate_table, and let me pull that here. In [Laravel](../../Skills/Web%20Development/Laravel.md), when you define a many-to-many relationship by standard convention, this table's name is a combination of both the tables ordered alphabetically. So this would be scheduled_class_user and not unscheduled classes. It has to be singular, _ and not users, again. But this table name doesn't make sense in our case. Instead, let's use a custom name, and let's call it bookings, all right? So here, the first column is, let's have an ID primary key as always. And then the first column would be our user ID, which is a foreign key referencing our user's tables ID column. Okay, and the second one will be scheduled_class_id, referencing the scheduled classes table ID column. That's a foreign key, yeah.
>
> **[1:35](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980&t=95)** Foreign key, referencing this. So now we have this link. Now let's create this table using the migration sail artisan make:migration. We don't necessarily need the model for this, we don't need a bookings model because we can do all the operations using the relationship itself. make:migration, create_bookings_table. Here's the migration. Let me remove timestamps and instead add foreign id. This would be user_id->constrained. And then, table->foreignId, foreignId for scheduled class id. That would be scheduled_class_id. Constrained again. Okay, let's migrate the sail artisan migrate. This is done. Next, let's define the many-to-many relationship in user model. I'll close this. In user model, as well as our scheduled class model. In the user model, let's call this as bookings, so we can get all the bookings of a particular member. return this->belongsToMany, that's how we define many-to-many relationships,
>
> **[3:09](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980&t=189)** belongsToMany ScheduledClasses. And this, we have to specify the table, here, because we have changed the name of it. If we kept it as ScheduledClass user then this's not required. But otherwise, we have to specify the table through which we're resolving this many-to-many relationship. Let's do the same thing here as well. Scroll down, public function. Let me call them members instead of just users. So we get all the members who have booked this particular scheduled class. So return, this->belongsToMany, again, users. Okay, User: :class. And here, again, past the bookings. We'll soon be using these relationships. Now, let's create a booking controller to make the bookings. sail artisan make:controller Bookings, to make them, cancel them, and so on, BookingsController. Or let me call it BookingController. Yeah, that's the convention. Okay, we have the controller. We can actually make this a resource controller but that'll confuse you. So let me just keep it as a normal controller. Now let's register the routes in web.[PHP](../../Skills/Software%20Development/PHP.md). And this would be...
>
> **[4:42](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980&t=282)** We have a get route to make the booking, member/book. We can just say member/book. And this will point to the booking controller. Create method. Typically, why create method? Typically create methods will have [Forms](../../Skills/Web%20Development/Forms.md) to make the booking. But in our case, we don't have a form. We will instead show a list of scheduled classes to pick and book from. Then give it a... Yeah, we'll have to use the middleware, the same thing. And let me say this name would be booking.create. Okay, now, as you can see, we will have three more member routes, and things are starting to get messy. So since we have common middleware, let me comment this out and instead use the middleware grouping, Route: :middleware. And here let's say auth, middleware, and the role:middleware. Then group this, and then use all the, you know, get routes within this. So here I'll say member/book, create.
>
> **[6:16](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980&t=376)** And in here I can give the name. And then we, of course, have the dashboard route. Just bear with me. Name is member.dashboard. And then we have two more routes, right? Let's create those routes already. One will be to create, then one to store the booking. So that would be post. And let it be member/book itself. This would be booking.store going by the convention, and let it hit the store method. Then we need one get route to view all the bookings, so we can say member/bookings. and let this be the index method. And let me say booking.index. Finally, delete route. And let me again point this to member/book. Or actually, I will just change all of this to bookings. That makes more sense. And here, this will hit the destroy method, and booking.destroy. All right, now this is grouped and this looks much better. We can just add commence here and say Member routes, delete this.
>
> **[7:50](https://www.linkedin.com/learning/advanced-laravel-22373805/many-to-many-relationships?u=76281980&t=470)** And you can do the same for instructor as well, you can group these two. I'll skip that for now. So now we have the relationships defined, the intermediate table created, controller created, and all the routes registered. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Code Identifiers:** belongstomany (3), scheduled_class_id (2), foreignid (2), intermediate_table (1), scheduled_class_user (1)
> **CLI Commands:** make (9), php (1)
> **Definitions:** is a  (3)
> **File Paths:** web.php (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Implement eager loading](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980&t=0)** - [Instructor] Now in this book route, we want our members to choose from the list of scheduled classes and book a class. So let's implement that in our booking controller's create method. Booking controller, public function, create, get all the scheduled classes. Scheduled classes equals scheduled class and we want only the upcoming ones so where date time is greater than now. Let's also order them by oldest first and get. Now return the view, return view members dot book where to create this with scheduled classes, scheduled classes. Okay. Okay, function, yeah. Now create the view. Go to resources, views, member, new file, book dot blade dot [PHP](../../Skills/Software%20Development/PHP.md). Let's copy contents from the dashboard. Paste it here, change the title to book a class. And this view down here we can copy it from our instructor's upcoming view. So, let me copy everything from here
>
> **[1:39](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980&t=99)** until here. Paste it. Yeah, replace this. Most of the view is same, just that for an empty view let's change this text to no glasses are scheduled. Check back later or something like that. And then we can delete, remove this link. And here instead of the cancel button let's change this to book. So we are booking the class. Change this danger to primary. Primary and delete. Remove the delete method. Also change the route to store. Okay. We are not passing any class here. Everything else should be fine. Let's see what this looks like. Let me save it and go to member slash book. This is not members dot book. Where is it? Booking controller, it's member dot book. Okay, refresh. All right. We are able to see all the classes here. We'd like to display a little more information like who's the instructor and what is this class, but do that in a while. So far this is good. However, there is one problem here that's not visible or evident. Let me show you. To see what's happening behind the scenes, let's install a package called telescope. Go to the docs, [laravel.com](https://laravel.com),
>
> **[3:15](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980&t=195)** documentation. Look for telescope, [Laravel](../../Skills/Web%20Development/Laravel.md) Telescope, and let's install it. First we need to require it, composer require. I need to use sail composer require Laravel Telescope. This is done. Let's install it using sail artisan telescope, install, and then sail artisan migrate because telescope needs to use the database. Now it's installed correctly, we should be able to access it on local host slash telescope. Yeah, so here it is. This is the place where you get loads of insights into requests, commands, events, exceptions, mail notifications, and all of it, so you get to see what's happening behind the scenes. Since we just installed it, we don't see much yet. Let's go and refresh this page so we get a request. Refresh here, load new entries, and go to the latest request. You can view all the details here. Scroll down to this query step. Now notice we have made 12 queries and it says nine of which are duplicated. So, we are first making this query,
>
> **[4:51](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980&t=291)** which just gets the user details. That's different. But then we are making the query to get all the schedule classes. And then we are making 10 queries to get 10 class types, right? This is what is duplicated. Let's look at the code and see why this is happening. If you go to the blade view, here we are fetching the class type name and the class type minutes. Now, this is a relation and we are accessing it like a property. So when you use this relation that's when Laravel actually makes the query. That means in Laravel, relations are lazy loaded. This causes the n-plus one problem we just saw. That is one query to get n-rows and then n-quiries to get the relation data. We can use eager loading to avoid this problem. So in the controller, while fetching the schedule classes you can use the with method right here.
>
> **[5:56](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980&t=356)** You can use the with method and specify the relations that you want to eagle load. So we want to eagle load the class type. Right now, let's save this and let's try and refresh it again. We are making a new request. Go back to requests. This is the latest one. Open it. Scroll down. And now you see only three queries are made. Also, you can notice a huge difference in the load time. This will matter when your application is very large and you're loading a lot of relations. Next, let's try and display the instructor's name here. So go back to the blade view and let's add a paragraph, p class text sm and display the instructor's name here, class instructor.
>
> **[6:55](https://www.linkedin.com/learning/advanced-laravel-22373805/implement-eager-loading?u=76281980&t=415)** We are accessing this again using the relation. So let's eager load that also in the controller like so with the class type and instructor. And also let's just display the description of the class here using another paragraph, p class MT-2, just giving a margin and then say class, class type, description. This relation is already loaded, so we don't have to do anything. Let's see what this looks like. And perfect. We have our instructor name and the description. Let's once again look at the requests and check how many queries we are making. And we are still only making four queries, right? So this is perfect and we have the display needed. Make sure to use eager loading whenever you are accessing relationship data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (5), scroll down (2)
> **CLI Commands:** composer (2), php (1), make (1)
> **Prerequisites:** install (4)
> **Cross-References:** go back to (2)
> **URLs:** [laravel.com](https://laravel.com) (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)

#### [Attaching and detaching relationships](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980&t=0)** - [Instructor] Let's implement the booking feature completely. First, we'll add the links in the navigation. Go to navigation.blade.[PHP](../../Skills/Software%20Development/PHP.md). And we need two links. One to book a class, and another one to show booked classes or upcoming classes. So here copy one of these links. Add it here. Change the route to booking.create. And add the same route here as well. Sorry, let's remove the codes. Yeah. And here, let's call it Book a Class. Copy this, paste it again, and say, "Upcoming Classes." Booking.index here as well. And these two routes should only be visible to a member. That is the person who can book classes. Let's say can, book-class. We haven't created this gate yet, so let's do that now in our service provider. Similar to this schedule class. Add another gate definition, book-class. And this time only the user with the role member can book a class. This should work. Let's take a look. Refresh, and yes, Book a Class is the route and that's what is highlighted. And upcoming classes will be here.
>
> **[1:33](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980&t=93)** Now we need to implement this booking feature. Open the book view. Let me close these two. Open book.blade.php and scroll down. This is the form. And when we click on Submit button, it hits the store route. Normally we don't pass any arguments to the store route. All the data is available in the request. So using the same convention let's use a hidden input field to pass the scheduled class ID. Input, hidden. Name is scheduled_class_id. And the value will be class id. And this route is not schedule.store, it's booking.store instead. Now in the booking controller let's create the store method and save the data. Public function store, request. And in here we need to save the data. This is where it gets interesting. We have the auth user trying to make a booking. So we can access the bookings relationship here. And instead of saying something like create, and passing the data, since this is a many-to-many relationship, we can use this method called attach and simply pass in the scheduled class ID.
>
> **[3:08](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980&t=188)** That is in our request. So request scheduled_class_id. That's all we need to do. And then maybe redirect this to a named route which is booking.index so the user can view the upcoming bookings. We can remove this. And let's see what we have. Refresh. Let's try and book this class. We have this error, but let's not worry about this because we don't yet have this index method. Let's see if our data got inserted. This is our bookings table. Refresh. And yes, we do have our user ID 1 who has booked the scheduled class 1. Let's implement that index method now. in BookingController, public function index. And in here, let me get all the bookings simply using the relation. So auth, user. Bookings. But we only need the upcoming ones. So we can limit that here saying where date_time is greater than now. And get. Okay. Let's return view member.upcoming. Again, we have to create this view yet.
>
> **[4:46](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980&t=286)** We'll do that with bookings, $bookings. All right, let's create that view down here. Resources, views, add member. Yeah, member, new file. Upcoming.blade.php. We can copy the same book view and paste it here. Change the title to Upcoming Classes. And here we don't need the description and minutes because the user has already booked the class. Everything else can remain the same except for this button, which is no longer Book. This has to be Cancel. And again, instead of primary-button, let's use danger. Also, use the delete method, right? This route will change too. Booking.destroy. Also remove this input field because normally, for a delete route, we pass the ID as a parameter. So we can pass the class ID here. And let's also change the route to reflect that. Bookings/id. All right, and lastly, you can change this empty view. Let me remove this empty view and say something like, "You haven't booked any classes."
>
> **[6:21](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980&t=381)** Or "You have no upcoming bookings." All right, let's see what this gives us. Refresh the page. Undefined variable scheduledClasses, obviously because we have called it bookings. Everything else can remain the same. Yeah, now we are able to see the booked classes. Let's try and cancel this. And this destroy method doesn't exist. We'll create that. But before we hit the destroyed route, let's add a confirmation here. So let's say onclick, return, confirm. "Are you sure you want to cancel this class?" Okay. Let's go back and then refresh. Try to cancel. Are you sure you want to cancel this class? Say, Okay. Now let's add the destroy method in the controller. Public function destroy. Accept the class ID. Let's say int id. And in here we just have to reverse the what we did in attach. So we can do that using detach. So say, auth, user, bookings, detach.
>
> **[8:00](https://www.linkedin.com/learning/advanced-laravel-22373805/attaching-and-detaching-relationships?u=76281980&t=480)** And you can pass this ID right here. So that rule will be destroyed. And then again, you can return to the same upcoming view. Okay, let's see if this is working. Refresh the page. Continue, and it's gone. You have no upcoming bookings. Isn't this really neat? Now you know how to work with many-to-many relationships using the attach and detach features easily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3)
> **CLI Commands:** php (3), make (1)
> **Code Identifiers:** scheduled_class_id (2), date_time (1), scheduledclasses (1)
> **UI Navigation:** go to (1), open the (1), scroll down (1), click on (1)
> **File Paths:** navigation.blade.php (1), book.blade.php (1), upcoming.blade.php (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Write complex queries and create query scopes](https://www.linkedin.com/learning/advanced-laravel-22373805/write-complex-queries-and-create-query-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/write-complex-queries-and-create-query-scopes?u=76281980&t=0)** - [Shruti] Let's book this class once again. Class is booked, great, but if you come back to the list of classes you'll still see this class appearing. The member shouldn't be able to see this once it's booked, right? So we need to edit the query to remove booked classes from this list. In other words, for each scheduled class we want to check the list of booked members and remove that row if our user ID is found meaning we have to remove that scheduled class if the relationship exists. Eloquent allows us to query the relations using various methods like has, where has, where doesn't have, and so on. You can go to the documentation, search for querying relationship existence, right here. And then you can also look for querying relationship absence. In our case right now, we need to query relationship absence because we need those classes which are not booked by the authenticated user. That means where the relation does not exist. So back to the code. So change this query with where doesn't have pass the relationship members. And we cannot leave it just here. We have to add another constraint because if we don't then all the scheduled classes with at least one member will be excluded where it doesn't have members, right?
>
> **[1:35](https://www.linkedin.com/learning/advanced-laravel-22373805/write-complex-queries-and-create-query-scopes?u=76281980&t=95)** But we only want to exclude those where the user ID is our authenticated user. So further add a query where query where user ID is equal to auth user ID. Because these are the ones we want to exclude. All right, now let's check, refresh. And that class is gone. It doesn't appear anymore. Now go back to the code and notice a couple of things. First, this query has become quite complex and unreadable. Also, we have repeated this where clause of date time greater than now multiple times already. That's definitely not a good practice. What if we want to repeat this also elsewhere?A And repeated code is not good. Thankfully we can use query scopes to avoid this. Since we are frequently using this where clause to [Fetch](../../Skills/Web%20Development/Fetch.md) upcoming classes, let's first create a scope for that. Open schedule class model. And here say public function scope and let's call it upcoming and accept the builder query here and return within this method define the constraint and return the query builder instance. So, return query, you can use the constraint here
>
> **[3:07](https://www.linkedin.com/learning/advanced-laravel-22373805/write-complex-queries-and-create-query-scopes?u=76281980&t=187)** where date time, greater than now. Okay, and now we can use the scope in our query, simply replace this with upcoming. Note that we don't prefix this with scope here but query scopes have to be prefixed with scope in the definition. And now we can replace all the where clauses like this one here with upcoming, much more readable. And remember, we've used this in our scheduled class controller as well. So let me go to schedule class controller. Search for where. Yeah, right here. And replace this with upcoming. And that's it. Now let's check if everything is still working the same. Refresh. It's not. Okay, we forgot to import builder here. Where is that? Yeah, right here. Import this class, Eloquent builder. And now let's try, refresh. Yeah, everything is working fine. You can even log in as an instructor and check if you're able to view only the upcoming classes. Now, similarly for this complex query that we just wrote let's create a scope for this as well. So let me just cut it out from here. Go to scheduled class and define a scope, public function, scope not booked because that's what we are trying to get. We are trying to get all the classes
>
> **[4:42](https://www.linkedin.com/learning/advanced-laravel-22373805/write-complex-queries-and-create-query-scopes?u=76281980&t=282)** that are not booked by that user. Similarly, builder query and add that constraint here. Return query, and I'll paste whatever I copied. And here I can now say not booked. Okay, notice how much more readable this gets and we can reuse this wherever we want without repeating it. Let's recheck, refresh and we are not able to see the class. So we just saw how to define and utilize local scopes. I encourage you to take a look at the documentation and learn about global scopes as well. I hope now you can recognize whenever you're repeating where clauses and avoid that repetition by using query scopes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **UI Navigation:** go to (3)
> **Documentation:** the documentation (2)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Best Practices:** good practice (1)
> **Warnings:** note that (1)
> **Speakers:** - [shruti] (1)


### 4. Do More with Laravel

[↑ Back to Table of Contents](#table-of-contents)

#### [Write commands](https://www.linkedin.com/learning/advanced-laravel-22373805/write-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/write-commands?u=76281980&t=0)** - [Instructor] Before we move on to learning something else, I just noticed that in this view, the dates are not in order. I'd like to see 14th April before 15th April. We did chain the query with oldest, but looks like something isn't working. So let's fix that first. Open booking controller. And here we did chain it with oldest, but the problem is it is ordering based on the timestamp that its created at and not this date time. So we'll have to pass date time sure. And now it should work, let me check. Refresh, and yes, now we have 13th April classes first and then 14th and so on. All right. We have been working on this app for quite a while. Sometimes it takes days to create one feature. Let's say we are working on some member feature, took a break, and came back to it after three or four days. But after four days, all these classes will be pass dated. They will not appear in the list anymore. We will have to refresh the database, see it all over again. So if we had booked any classes, they would be gone. One way to solve this problem is to write a custom command that will change the date of all these classes to a future date, maybe incremented by a date, make it 15th April, or something like that. That way everything, all the relationships, everything will remain the same except for the date. We can run this command whenever we come back
>
> **[1:32](https://www.linkedin.com/learning/advanced-laravel-22373805/write-commands?u=76281980&t=92)** to a project after a break. So to create a custom command, use the command sail artisan, make command, and give it a name. Let me call it increment date. And let's create this. This will be located in the app directory console and commands. Increment date, right here. This signature is the actual command. That is when we run this command, whatever we want it to do, we will be defining it here in the handle method. This is the command description. Change it to something like increment. Increment all the schedule classes date. Yeah, something like that. In the handle method, let's get all the scheduled classes and update the date, right? So scheduled classes equals scheduled class all. And then let's look through this collection. Scheduled classes each, function class, and here get the class date and time. Set it through class date time and add days
>
> **[3:06](https://www.linkedin.com/learning/advanced-laravel-22373805/write-commands?u=76281980&t=186)** one. Since this date time column is of type date time, you can use this method on this. And then simply class, save. Okay, so this should work. But before we go ahead and execute this, we might face one problem here. If we have a class on, let's say 10th April at 5:00 PM and a class on 11th April at 5:00 PM, using this in a four loop in a random order like this might update the 10th April class first and it'll overlap with the 11th April class, and it'll fail, right? So instead, if we try to order it in such a way that the future dates are updated first, their days are incremented, and then the older ones we will not face any issue. So instead of getting all in a random order, let me just say latest, order it by date time, and then get, we will not face any issue. Okay, so let me check in the browser. Right now this class is on 13th April. Let me execute the command sail artisan app increment date. That's what the command was, right? Hit enter. No error. So it must have worked. Go back, refresh, and yes. See all the dates have been pushed one day ahead. This is good, but what if you want to increment the date by four or five days at once? We can use the command options to specify
>
> **[4:40](https://www.linkedin.com/learning/advanced-laravel-22373805/write-commands?u=76281980&t=280)** the number of days. If we want to do that, let's change the signature here to accept days from the user. So we can say, days. We can use the days option, and add an equals. This will accept the user input, and by default let it be one. So if we don't use this flag, then it'll update the days by one. If we use it and specify the number of days in the command, we want it to update by those many days. So here, change this one. Get the input from here. How do you get that input? You can say this option, and use the name, whatever you said here, we've used days, and then it'll add those many days. Okay, now let's try again. Let's go back. Use the same command now along with days equals two. Once again, no errors. Let's see, refresh. Yes, perfect. It's now updated by two more days ahead. You saw how easy it is to automate repetitive tasks during development using custom commands. This was a very unique use case. You can think of writing commands for tasks like sending emails, cleaning up a news database records, and so on.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Ports:** :00 (2)
> **Speakers:** - [instructor] (1)

#### [Create events and listeners](https://www.linkedin.com/learning/advanced-laravel-22373805/create-events-and-listeners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/create-events-and-listeners?u=76281980&t=0)** - [Instructor] We've finished almost all the necessary and advanced features of the app except for one. That is when an instructor cancels a class, all the members who've booked that class need to receive a mail or a notification that the class is canceled. Open ScheduleClassController. And right here, after canceling the class, we need to notify and do other necessary tasks. But imagine writing all that code of sending a mail and everything right here. It's going to get messy and unmaintainable. The main task of this method here is just to delete or cancel the class. We shouldn't complicate it. [Laravel](../../Skills/Web%20Development/Laravel.md) provides a way to manage this. We can create an event when an instructor cancels a class, and then in another place, we can listen to the event and perform required actions. So events serve as a great way to decouple various aspects of your application. Let's create an event and listener for the same. Sail artisan make:event, and let's call it ClassCanceled.
>
> **[1:11](https://www.linkedin.com/learning/advanced-laravel-22373805/create-events-and-listeners?u=76281980&t=71)** Next, let's make a listener for this. Sail artisan make:listener, and let's call it NotifyClassCanceled because that's what the listener's going to do. And also pass the event that you're creating the listener for. The event is ClassCanceled, yeah. So event is created and so is the listener. Let me open both of them. Next, we need to register this event listener in the EventServiceProvider right here, just like this. This is the event and this is the listener. So let's copy the same and use it for our event and listener. Our event is ClassCanceled and our listener is NotifyClassCanceled. Okay. Next, we'll define the event. An event class is simply a data container that will hold information related to the event. In our case, we want to pass the schedule class object to this event. So let's define it here in the Construct. Say public ScheduledClass, scheduledClass. Now I'm using the new feature of [PHP](../../Skills/Software%20Development/PHP.md) 8, Constructive Property Promotion, so we don't have to do this like we used to do before, ScheduledClass, here say public scheduledClass,
>
> **[2:47](https://www.linkedin.com/learning/advanced-laravel-22373805/create-events-and-listeners?u=76281980&t=167)** and then down here, you say this scheduledClass = scheduledClass. Now this is too long. We don't have to do any of that. What we just did before this, simply adding public here, does all that job for us. So that's it. The event contains no other logic. Now our listener will receive the event instance in this handle method. So we can just say scheduledClass, We can access it here using event scheduledClass like so. We will soon write some more logic here, but before that, we need to dispatch the event. That means this event should be fired when the class is canceled. So before we actually delete it, let's fire the event or dispatch the event using the event class ClassCanceled and use the dispatch method and pass the schedule object here like so. But one more thing. We are deleting the schedule class. Let's also delete all the records in the booking table related to this because members might have booked it. Start we can do using schedule members detach. Remember the detach method? Yeah, this works and it removes all the bookings as well. Okay, we have created our event,
>
> **[4:22](https://www.linkedin.com/learning/advanced-laravel-22373805/create-events-and-listeners?u=76281980&t=262)** we have the necessary data, we have created the listener, we've registered both the event and listener, and we've dispatched the event. We don't know if this works yet. Let's find out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** scheduledclass (6)
> **CLI Commands:** make (3), php (1), find (1)
> **Analogies:** imagine (1), just like (1)
> **Env Vars:** php (1)
> **Versions:** php 8 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Make use of logs](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=0)** - [Instructor] I have now logged in as an instructor. Let me schedule a class that we would like to delete. So choose Dance Fitness, choose some later date, choose some time and schedule. All right, now let me make five bookings for this class so that we can build and test the class cancellation feature correctly. And to make the bookings, I'll use Tinker. If you've never used Tinker, it's a command line tool in [Laravel](../../Skills/Web%20Development/Laravel.md) that allows developers to interact with the application's code and data. Let me enter the Tinker environment using sail artisan tinker. Here, we can write any code and execute it just like we do within the application. So let me first get the ID of the class we just scheduled using id equals ScheduleClass::latest
>
> **[0:56](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=56)** first id. Okay, and it is 12. All right, now let me get a collection of five members or even three members. Members equals User::where role is member
>
> **[1:22](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=82)** and take three, get. Okay. And yes, we have a collection of three members. Now, for each member, we can attach a booking, say members, each function member
>
> **[1:46](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=106)** and we say member booking, attach, sorry, bookings.
>
> **[1:54](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=114)** This is. Attach and pass that number, which is 12. And then close the flower braces and close the brackets.
>
> **[2:09](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=129)** All right, this must be done. Let's see. We're not seeing it here. Let's look at TablePlus and check. Yeah, we do have the bookings for our schedule plus 12. All right, now let me exit Tinker by typing exit. Okay, now in the destroy method of the BookingController, we need to check if our event listener is working. So go to BookingController, scroll down, not in the BookingController. We have to go to the ScheduledClassController. And in here, we need to check if this event is firing and if the listener is able to get the scheduled class and so on. To check the working, let's go into the listener. What was that? NotifyClassCanceled. In the listener, let's add a log. You can add logs in your code using the log facade and you can choose from the different log types, like info, error, and so many such types. You can refer to the documentation for the same. Here I will just say info and let me just log in this ScheduledClass object itself. And let's see what we are getting. Logs are stored within storage, logs and you can see the laravel.log file but I'm not going to open this log file and check the logs.
>
> **[3:43](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=223)** Instead, we already have Telescope installed. We can look at that right away in a much better format. So go to localhost/telescope and here logs. Right now it's empty, of course, but even if we fire the event, we won't be able to see the info logs here because by default, this records only the logs that are labeled as error. To change that, let's go to the telescope config, open telescope.[PHP](../../Skills/Software%20Development/PHP.md) within the config directory. And scroll down to the place where it has... Or let me search for it. Search for LogWatcher. Oh yeah, it's right away. And here, it, yeah, LogWatcher, it says level error. So let's remove this line, save it. And now we might be able to see the info logs. All right, let's go to the browser and try canceling the class. But before that, let me comment out this. We don't want to actually cancel the class and keep, you know, saving it again and again. So let me comment this out and see if we are getting the log. Go back, refresh, cancel this class and it says log not found. Of course, I might have not imported it. Yeah, class is imported.
>
> **[5:18](https://www.linkedin.com/learning/advanced-laravel-22373805/make-use-of-logs?u=76281980&t=318)** Now try again. Refresh. Continue. Yeah, no error, which means it might have worked. And yes, we do have the log right here. See, we are getting that scheduled class, 12, instructor ID three and so on, which means our event is being fired and the listener is able to grab the event data. As you can see, Laravel logs are useful for recording important information about what's happening behind the scenes. They're especially handy when something goes wrong and it allows us to retrace the steps and figure out what's causing the issue. Using logs here, we know that the event is firing and everything is working. Now we can move on and build our mailing feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (5), scroll down (2)
> **CLI Commands:** make (2), php (1)
> **File Paths:** telescope.php (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 5. Notifications, Queuing, and Scheduling

[↑ Back to Table of Contents](#table-of-contents)

#### [Send emails](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=0)** - [Instructor] In our event listener, we have our scheduledClass object right here. Using this, we can get all the members who had booked a class. So we can comment out the log or remove it altogether. We don't need this anymore. And we can get all the members who've booked the class using the relationship scheduledClass members or we can even remove this entirely. We can say event scheduledClass members. And to each member, let's loop through the collection. Members each function, let's call them user. Here we send a mail. But before we send a mail, you need to decide which email service provider you wish to use. You can use to send email via SMTP or go for providers like Mailgun, Postmark, Amazon SES, and so on. For starters, SMTP is good to go. Once you choose and sign up for a service, you need to configure the service in app config mail.[PHP](../../Skills/Software%20Development/PHP.md). Yeah, right here. By default it's SMTP, and that's what we're going to use. For other drivers, you can refer to the [Laravel](../../Skills/Web%20Development/Laravel.md) documentation. For local development, it's not necessary to send real emails. We can send mails to a dummy inbox. If you're using Sail like me, Mailpit or FakeServer is available at localhost 8025. Yeah, right here.
>
> **[1:39](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=99)** To configure sending mails through Mailpit, open the .env file. .env file, and scroll down to the mail configuration. Here, yeah, it's already configured. Mail host is Mailpit, Mail port is 1025, everything else is null. You don't have to do anything because I'm using Sail. But if you're not using Sail for your local development, you can use a tool called Mailtrap. So you can go to [mailtrap.io](https://mailtrap.io) That's what I think it is. Yes, you can register, sign in, and you can get the configuration details, and use them here. Replace these with your Mailtrap configuration details and then you can send dummy mails. Once the configuration is done, let's generate a mailable class to send our classCanceled email. So say, Sail Artisan make mail classCanceledMail.
>
> **[2:46](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=166)** It's created. Let me open this. And sure, you can see an envelope that will have the subject to, from, and so on. And here is the content with the actual body of the email. And down here, you can add any attachments if you have. Let's send a simple mail first and then improve on it. So change the subject to, "Sorry, your class was canceled."
>
> **[3:19](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=199)** And then we need to send a view. So let's create a view in our resources, views, create a new folder, call it emails. And within emails, create a new file. Class-canceled.blade.php. In here, let me simply add two paragraphs. "Sorry, your class was canceled by the instructor."
>
> **[3:54](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=234)** Add another paragraph. "Check the schedule and book another. Thank you." Something like that. Just add a greeting, like "Hey" or something. We could combine these two. Yeah. So we created a mailable class. Let's include the view in here. Emails.class-canceled. We have this mailable class ready, we have the Blade view ready. Now, let's send the mail using the mail facade right here. Mail, use the to method, pass in the user. Note that you don't have to pass in an email. You can simply pass the user model and then say, Send new ClassCanceledMail. Let me import the mail facade. Yeah, done. Now, go to the browser and try canceling the class. Let me close this. Go to the browser, refresh, continue. It's back. No errors. And yes, you see all our three members who had registered have received any mail saying, "Hey, sorry your class was canceled by the instructor. "And this is the subject that we used." Return C. These are three different users. And all of them have received mails. So that's it. That's how quickly you can start sending mails in Laravel.
>
> **[5:28](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=328)** Simply configure your mail service, create a mailable class, add a view, and use the mail facade to send emails. Now, obviously, we need to send some data in our emails, like which class was canceled, what time it was? For that, let's create a property up here called details, public array details. We're again using the constructor property promotion feature here. And we need to pass in the details array here. That's why it's showing the error. Ignore that for a moment. Now, what are the details that we need? The first thing we need is the class name. So let's say class name is event scheduledClass. We can get that from the classType relation, ClassType name, right? That's what it is. And then we want the class date and time. So we can say ClassDateTime. And this we can directly get from the scheduled class, date and time like so. And now, let's compact these two into the details. Array, design compact, className, ClassDateTime.
>
> **[6:56](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=416)** And now, we can pass this in here like so. It's showing an error because we need to say, use details here for it to be available. All right, no errors. And this details is now available everywhere here and in our view as well. So directly in our Blade view, we can say, "Sorry, your class," that is className.
>
> **[7:33](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=453)** No, this would be details className because it's in that array. Your whatever class; "Your Dance Fitness class was canceled by the instructor," but we'll say, "Your Dance Fitness class at what time?" On the date. So let's say on details ClassDateTime. And we need to format this. So say format js F. I don't remember this. Don't worry, I'm just looking it up. And then class on this date at, let's say time. We can use the same thing. Format, and this would be g:i a. So it's just a nice way to format the date into human-readable format, right? Now, let's see what this looks like. Have you saved all the files? Yes. And now go refresh, cancel once again. And "undefined property," what is that? Yeah, looks like this shouldn't have braces. Let me check. ClassType name, this should work. Continue, yes, we have received three more mails again. And this time, we have the data. "Sorry, "your Dance Fitness class on 19th April "at 7:00 PM was canceled by the instructor."
>
> **[9:06](https://www.linkedin.com/learning/advanced-laravel-22373805/send-emails?u=76281980&t=546)** This is amazing. So all our members are being notified correctly by mail when the instructor cancels a class.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [Laravel](../../Skills/Web%20Development/Laravel.md) (2)
> **Code Identifiers:** scheduledclass (4), classname (3), classcanceled (1), classcanceledmail (1), classtype (1)
> **UI Navigation:** go to (3), open the (1), scroll down (1)
> **Env Vars:** smtp (3), ses (1)
> **CLI Commands:** php (2), make (1)
> **Prerequisites:** configure (3)
> **File Paths:** mail.php (1), class-canceled.blade.php (1)
> **URLs:** [mailtrap.io](https://mailtrap.io) (1)

#### [Send notifications](https://www.linkedin.com/learning/advanced-laravel-22373805/send-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/send-notifications?u=76281980&t=0)** - [Instructor] What we sent just now is in fact a notification. [Laravel](../../Skills/Web%20Development/Laravel.md) provides support for sending notifications across a variety of delivery channels, including email, SMS, and [Slack](../../Skills/Software%20Development/Slack.md) as well at the same time. You can even store the notifications in the database and display them within your app. In this video, we will explore the email channel and send the same class canceled email using notifications instead. First, generate a notification. Sail artisan make notification, class canceled notification. Open the class. Note that this suffix is actually not required, but I'm using it to avoid confusion. We have too many classes that says class canceled. So now open this, scroll down, and you will see this wire method. This is used to specify the channels to deliver the notifications. By default, mail is included. If you choose email as a channel, you need to define this to mail method which is also included by default for us. This method receives a notifiable entity, and returns a mail message instance. You can use simple methods like line and action to construct a beautiful transactional email. So let's add a subject here. Subject, the same subject, sorry, your class was canceled.
>
> **[1:36](https://www.linkedin.com/learning/advanced-laravel-22373805/send-notifications?u=76281980&t=96)** And then chain it with a greeting. Let's say, hey, add a line, sorry to inform you that your class was canceled by the instructor. View the schedule and book another class. Okay. Now we can add a call to action also and just simply specify the action saying, book a class. And you can specify the URL. This would be member slash book, in our case. And then thank you for using our application. Okay, this can be as it is. Now in the event listener. Let me open the event listener. Notify class canceled. Instead of sending a mail to each of the members, let's send a notification using the notification facade. So I will comment these out. Use the notification facade. This one, notification, send, and this can send to all the members so you don't have to loop through them. You can simply include all of them. New class canceled notification, right here. We'll send the details later. For now, let's send a simple notification first. Okay, let's test this out.
>
> **[3:11](https://www.linkedin.com/learning/advanced-laravel-22373805/send-notifications?u=76281980&t=191)** Go to the browser, refresh, cancel the class, and yeah, call to undefined method. I think I know what the problem is. We are fetching this relation, but we need to say get to actually get the collection because this will not understand that query builder instance. This should work actually. So let's refresh, continue, and yeah we have three more emails, and now look at that. We have a beautifully designed notification out of the box. Hey, sorry to inform you. And then we have a nice call to action and everything. Very beautiful. And now similar to how we sent data to the mailable class, let's do the same for notification as well. Pass the details already here. And in the notification, let's go to the constructor and do the same thing. Public array details. And down here, here you can add the name of that class, your class digits details, class name. Yeah, this details, class name. And then you can add the date and time as well. I'll leave you to fill the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the details. Now we can even get the user name
>
> **[4:46](https://www.linkedin.com/learning/advanced-laravel-22373805/send-notifications?u=76281980&t=286)** from this notifiable object. So you can say something like, hey, notifiable name, and this will use the user's name. So let's check that also once. Refresh, cancel, and let's go back here. Go to the first one. And yeah, you can see that the name has also been added and this data is available. Great, now that you have a basic idea of sending notification, you can explore other channels like database and SMS on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** go to (3), open the (2), scroll down (1)
> **Env Vars:** sms (2), url (1)
> **CLI Commands:** make (1)
> **Tools:** slack (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Create jobs and queues](https://www.linkedin.com/learning/advanced-laravel-22373805/create-jobs-and-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/create-jobs-and-queues?u=76281980&t=0)** - [Instructor] In the last two videos, we sent some emails and notifications to multiple users but since we sent them only to three users and used a fake server, you wouldn't have noticed any delay in canceling a class. But when you use a real mail server, sending mail is too time consuming. Once the instructor cancels a class, the page keeps loading until the mails are sent to all the members, and that's a very bad [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). The instructor shouldn't have to wait. The mailing has to happen in the background, right? The perfect solution for that is creating jobs and queues in [Laravel](../../Skills/Web%20Development/Laravel.md). You can use different queue backends like Amazon SQS or [Redis](../../Skills/Software%20Development/Redis.md) and Laravel provides support for a variety of these. But in this video, we will use our own database for storing the jobs. If you wish to use a different service you might have to edit the configuration in queue.[PHP](../../Skills/Software%20Development/PHP.md) within the conflict directory. Whichever service you choose you need to specify the driver in the .env file .env, crawl up. And here you'll see something called SQ connection. And I'd like to set this to database. When it's set to sync, then it doesn't actually act like a job. This is used for local development only, but now we want to actually make it work like a job. So let me change this to database itself. And now since we need a database table
>
> **[1:33](https://www.linkedin.com/learning/advanced-laravel-22373805/create-jobs-and-queues?u=76281980&t=93)** to hold all the jobs, let's generate a migration for the same sail artisan queue table. So, the migration for that table will be created. You don't have to edit anything. You can directly migrate. Okay, let's check the table plus to see if we have a table. Yes, we do have the jobs table created for us. Now, for us to send the notifications in the background, we first have to create a job and then add it to a queue. To create a job, execute sail artisan make job and let me call it notifyClassCanceledJob. Once again, I'm prefixing it with job only to distinguish it from the notify class canceled event listener that we already have. I don't want any confusion. So let me open this. A job class is very simple. It only contains a handle method. Open up the event listener NotifyClassCanceled. So we can cut this out from here and paste it within the handle method. And here, in the constructor let's create two properties, public members And public Array details.
>
> **[3:08](https://www.linkedin.com/learning/advanced-laravel-22373805/create-jobs-and-queues?u=76281980&t=188)** So here we can access them using this members this details. Now the job is ready. We need to dispatch this job in our event listener instead of sending the notification directly. To dispatch the job use the job plus NotifyClassCanceledJob and use the dispatch method and pass the members collection. And the details array. That's all is needed. Let's test this out. Go back to the browser, refresh, cancel the class. No errors, but we don't have any new mails. Let me delete all and try again. Cancel like yourself. No errors, but we haven't received any emails. Let's check our table plus table refresh. Yes, we canceled twice. So we do have two jobs. That means the jobs were dispatched successfully. But why haven't we received any emails? That's because there's no queue worker running to process the job. There needs to be a process that runs in the background to pull the queue back in for jobs that are yet to be processed. We can start a new worker using the command sail artisan queue work. Or even cue, listen. Let's start this process. And now you see it's running
>
> **[4:41](https://www.linkedin.com/learning/advanced-laravel-22373805/create-jobs-and-queues?u=76281980&t=281)** and it's failed for some reason, it's running and it's again failed. No problem. We can check why our jobs are failing but at least they're being processed. We know that now. Let's go to telescope and let's go to jobs. Yes, it's failed. Let's check. You can scroll down and you can check the exception message class app jobs, notification not found. I'm sure I forgot to import the notification facade here. Right here. I need to import notifications facade and let me import this as well. Otherwise, it's going to fail again. Yeah, the class is imported. Save. Now let's try refresh and cancel. And then I think I had stopped the queue work. Let me restart it. Sail artisan queue work. Let it start listening to the jobs and process them again. Yes, now it's running and done. So we've received the mails and this did run in the background. Now obviously in production you cannot manually start the queue worker this way. You will have to use a program called supervisor. I'll let you explore that on your own. Now that we've explored and tested all different ways to send notifications to our members we can finally go to the Schedule class controller right here and uncommand these two lines
>
> **[6:17](https://www.linkedin.com/learning/advanced-laravel-22373805/create-jobs-and-queues?u=76281980&t=377)** so that the class is actually canceled after all of this happens. But there's one problem; we cannot delete first and then detach. It would've already been deleted. So this won't work. We will have to detach them first and then delete the whole thing. Okay. This video was a very basic introduction to jobs in queues. There's so much more you can do, like creating multiple queues with different priorities and then dispatching jobs to different queues based on how important they are and when they should be processed. You can create job batches, job training and you can handle how to deal with failed jobs. Like do you want to try them? Do you want to ignore the failed jobs and so much more based on your project requirements. So if the need arises know that Laravel has support for all of this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (3), scroll down (1)
> **CLI Commands:** make (2), php (1)
> **Cross-References:** in the last (1), go back to (1)
> **File Paths:** queue.php (1)
> **Code Identifiers:** notifyclasscanceledjob (1)
> **Env Vars:** sqs (1)
> **Speakers:** - [instructor] (1)

#### [Schedule tasks](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=0)** - [Instructor] Usually there will be some tasks in your project that needs to be automated and performed regularly without manual intervention like sending a weekly report to our members of how many classes they attended and approximately how many calories they burned or a friendly reminder at the end of each day to those members who haven't booked a class for the next day. In certain apps, you may want to delete trash records occasionally and so on. In the past you may have used Cron Jobs for every such task that needs to be performed regularly, but it becomes a pain to manage tasks that way because you have to log into your server and schedule a task Using Cron Jobs. Thanks to [Laravel](../../Skills/Web%20Development/Laravel.md)'s scheduler, you can define your command schedule within your application itself. Let me show you. Go to Kernel.[PHP](../../Skills/Software%20Development/PHP.md) within App\Console and you can see an example right here. If you uncomment this, the command inspire can be scheduled to run hourly. That is this command runs every single hour. Now let's create a command to [Fetch](../../Skills/Web%20Development/Fetch.md) all the members who haven't booked any class and send a mail to all of them at the end of each day. In this process, we not only learn task scheduling. We'll also revise most of the concepts we learned in the previous few videos. So first, create a custom command, sail artisan make:command. Let me call this RemindMembers.
>
> **[1:35](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=95)** Open this and let the signature be the same. I'll change the command description to Remind members to book a class. And in the handle method, let's first fetch all the members with no upcoming bookings, right? So members equals user where role is member. So first, we need to get only those users, role as member where doesn't have bookings. You remember we used this query constraint, whereDoesntHave? Bookings, we queried the non-existence of the absence of this relationship bookings and we need to constrain it to only future bookings. So say function query and here, let me put this in the next line, and here let's just say query where date_time is greater than now,
>
> **[2:56](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=176)** and then we can get them. But sure, we only need an email and the name of the user, so let's select name, email and get only those columns. To verify if we've got the correct set of users, let's output this user data to the terminal. Remember this is a command, right? So to output data to the terminal, you can say this. Info, use the info method or you can use the error method line and so on. You can also use a table method to display data something like this in a table format. The first argument will be the column titles like name and email and then comes the data. So members, and we need to convert this to Array. Okay, let's try this out. Sail artisan app:remind-members. That's the command, let's see. User not found, why do I keep forgetting to import the classes? Okay, let's try again. Clear, app:remind-members. Perfect, we have almost all the members who haven't booked a class, but I don't know if this is correct.
>
> **[4:30](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=270)** Yes, so so far only should be that is myself and the only one who has booked a class, so here we will see all the 11 members. This data is correct. Now let's send a mail to all these users using notification. So create a notification, sail artisan make:notification and let me call it RemindMembersNotification. Open this, down here add a subject. The subject could simply be forgot to book a class, and then we could add a greeting and say hey, notifiable name.
>
> **[5:28](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=328)** And we can say looks like you don't have any upcoming bookings, and we can say book now. This could be the action and the same URL member/book, and at the end we can say something like stay healthy or something, okay? Now back to the command and remove this output. Instead of sending the output to the console, we will send the notification. Notification using the facade. Let me import this. Yes, notification, it's already imported, great. Send to members, new RemindMembersNotification.
>
> **[6:22](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=382)** Okay, let's test this out. Go to the console and run the command again. No output, no errors which means it must have worked. Let me check, localhost 8025 occurs, and yes, we have received 11 emails. Forgot to book a class. Looks like you don't have any upcoming bookings, great. Now we executed this command manually. We don't want that. We want to schedule it so that this mail is automatically sent at the end of each day, right? So open Kernel.php, remove this, and instead say schedule command. Use the command which is app:remind-members, and when do we want to send it? We want to send it daily at a specific time. So you can say something like daily at 8:00 PM which would be 20 hours, okay? And if you've set the time zone of your app correctly, this would send at eight o'clock your time zone. Now we can schedule as many such tasks here of any frequency like every hour, every day, or every three days, monthly, and so on. And then on the server, we only need to add a single Cron entry that runs every minute. You can check the documentation for that and then it'll schedule all the tasks
>
> **[7:56](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=476)** that you have listed in the Kernel.php. But how do we test this in development? To run the scheduler locally, use the command sail artisan schedule:work.
>
> **[8:12](https://www.linkedin.com/learning/advanced-laravel-22373805/schedule-tasks?u=76281980&t=492)** This keeps running in the background,. But we can't wait till 8:00 PM today for this to run, so let's change the time for something immediately. Right now the time is 1:15 PM, so I'll change this to 13:16 so that I received this the very next minute. Now let's wait and see. Great, it's 1:16 here and you saw that the command got executed. Seems to be done. Let's once again check mail and yeah, we have received even more emails. So you have scheduled successfully your first task with Laravel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [Laravel](../../Skills/Web%20Development/Laravel.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **CLI Commands:** php (3), make (2)
> **Ports:** :00 (2), :16 (2), :15 (1)
> **File Paths:** kernel.php (3)
> **Code Identifiers:** wheredoesnthave (1), date_time (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (2)
> **Env Vars:** url (1)


### 6. Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Get started with testing](https://www.linkedin.com/learning/advanced-laravel-22373805/get-started-with-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/get-started-with-testing?u=76281980&t=0)** - [Instructor] Testing is an essential part of [Software Development](../../Topics/Software%20Development.md). It allows you to ensure that your code is working as expected and that any changes you make won't break existing functionality. If you're new to testing, don't worry. We'll be covering the basics in the next few videos. When you install [Laravel](../../Skills/Web%20Development/Laravel.md), the testing framework PHPUnit is included out of the box. You don't have to do any additional configuration to start testing right away. You may have noticed a test directory in the root of your application. This includes two different directories for feature tests and unit tests. Unit tests are for testing small units of the application, usually individual methods in isolation. Feature tests are for slightly more complex tests that might cover an entire feature. Generally, most of your tests should be feature tests. These type of tests provide the most confidence that your system as a whole is functioning as intended. You'll notice an example test class right here. Each class has a Test suffix like this and each method within has test as the prefix. And notice the name of this test, test_the_application_returns_a_successful_response. It's very self-explanatory. That's how test cases should be named. So first we try to access this route URL, and then assert that the status is 200. The status code response code is 200.
>
> **[1:36](https://www.linkedin.com/learning/advanced-laravel-22373805/get-started-with-testing?u=76281980&t=96)** Laravel along with PHPUnit has several such assertion methods to test the actual result, which is this, against the expected result. If this is true, our test passes, which means this part of our code works as expected. Apart from this, we have some more tests related to the user profile here. So let's see how to run tests in the terminal. There are two ways to run tests. One is to use the PHPUnit to run tests directly using ./vendor/bin/phpunit. Or you can use the Laravel command sail artisan test. I prefer this because the output of this is much neater and readable. I have started the command. Notice that one by one, all the tests are executed, and they're all passing. On the whole, 24 tests have passed with 56 assertions, and it took about 5.9 seconds to complete all the tasks. For each of the class, we have different methods, and these have been taken from the method name itself. The method name here would be test reset password link can be requested. So we see that each of the methods have passed. Let's see what a failed test looks like. So open this and let me change this to a route that doesn't exist like hello, and let me do the same sail artisan test.
>
> **[3:11](https://www.linkedin.com/learning/advanced-laravel-22373805/get-started-with-testing?u=76281980&t=191)** All these are passing, but right here we see a failed test, and we see why it failed, the application. The expected response status code is 200, but received 404. And now you can see where exactly which assertion failed. Now we want this test to pass, so there has to be a hello route available if we want that. Let me go and add it in the routes file. Let's copy this, paste it, say hello. And let's run the test again. But I don't want to run all the tests. If I want to check if only this test is passing, what I can simply do is to sail artisan test and use the filter option, and specify the name of the test method. Let me copy it from here. Copy, paste it down here, hit enter. Perfect, now it passes. Next, in the next video, we will write a basic test ourselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (3), [Software Development](../../Topics/Software%20Development.md) (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** test_the_application_returns_a_successful_response (1)
> **Env Vars:** url (1)
> **Versions:** 5.9 (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)

#### [Write HTTP tests](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=0)** - [Instructor] We just saw this example test in the previous video. The get method here makes a get request into the application, and the assertStatus method asserts that the return response should have the given HTTP status code. We can also make a post, put, patch, or a delete request, similarly, we can set session data, customize request headers, and use assertions to inspect the response headers, [JSON](../../Skills/Web%20Development/JSON.md) structure, and more. Now let's test some of the instructor features of our app using HTTP tests. First, create a new test class using sail artisan make:test,
>
> **[0:44](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=44)** and let's call this InstructorTest. Okay, there has to be a test suffix. Open this file. Let's first test if the instructor is being redirected correctly to the instructor dashboard. Remove this. public function, let's call it test_instructor_is_redirected_to_instructor_dashboard,
>
> **[1:21](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=81)** to instructor dashboard, yes, these methods will be long, as in the names will be long because we want it to be as descriptive as possible. Now, to check if an instructor is being redirected correctly, we first need to create an instructor, right? So we can use the user factory, and create an instructor, User::factory, create, and we just have to say role as instructor, because remember, the default role is member, instructor. And now that we have the required setup, we can say response equals this, get, dashboard, right?
>
> **[2:11](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=131)** So we are trying to get the dashboard route. This is what we are doing, and now we want this to redirect to instructor/dashboard, but this route requires authentication. So we need to sign in as this user before accessing the route, and this can be done using actingAs method. And then you have to pass the user, access this dashboard link, logged in as this user, that's what this means. Now we need to assert that a redirection happens to the instructor's dashboard. So say response. You can use the method assertRedirect, or you can say assertRedirectToRoute, so you can pass the route name itself. Instructor again, dot dashboard, okay?
>
> **[3:20](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=200)** And before I forget, let me import the user model, otherwise, the test itself will fail. Okay, now let's see if this test passes. Let's say sail artisan test, and I only want to check if this instructor test suite is passing. All right, this is a pass. Instructor is redirected to the instructor dashboard. Note that it says two assertions, though we've used only one assert method, which is assertRedirectToRoute, but it says two because this assertion itself has two assertions. First, it checks if the request returned a redirect code, and second, to see if the ending location is correct. Now, let's take it a step further. We tested that a redirect is happening to this URL. Now we can actually follow the redirect by saying this, followRedirects, pass the response here,
>
> **[4:27](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=267)** and then assert something here, like say assertSee, let's assert that we see a text, "Hey Instructor." Because this is what is displayed in the dashboard. All right, let's test this. Run the same thing. This is also a pass. We have three assertions now. Now let's write another test to see if an instructor is able to schedule a class. So for that, let's write a method. public function test_instructor_can_schedule_a_class.
>
> **[5:12](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=312)** Okay, same thing. We have to once again create an instructor first, and let's try to post through the stored URL as an instructor. So response equals this, post to the URL,
>
> **[5:34](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=334)** the stored URL, which is instructor/schedule. And we need to pass the request array as an argument here. So we can set a class_type_id as 1, and then we can set the date. We have to set the date and time separately, because that's how the request is received. 2023-04-20, and then time, just some time, like maybe 9:00. All right, so if this works fine, we should be redirected to the upcoming classes route. So let's test that. Let's assert, response, assertRedirect. Again, we can say RedirectToRoute, and pass in the name of the route, which is schedule.index. Okay, this should be it. Let's run only this test now, so let me just copy it, test_instructor_can_schedule_a_class, sail artisan test --filter, and type this, and it fails. We were supposed to hit the post route, but we get the login route. That's because we failed to log in as a user. So this, actingAs, user is what we need to do. Let's now see if this is a pass.
>
> **[7:10](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=430)** Try again, but this is also a fail. We get a very huge error response, but the summary is that cannot add or update a child row, foreign key constraint fails. That's because we don't have any data in the class types table, right? We seed that, and we haven't seeded anything into this testing database. We have the table, but we don't have the seed, and we are using class_type_id as 1, so obviously, it fails. Now here, you can also seed the class type data and then test this. So let's say this, seed, ClassTypeSeeder,
>
> **[7:58](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=478)** you can pass the ClassTypeSeeder here, so that way we have four different classes, and here, we can change this to ClassType::first, id.
>
> **[8:14](https://www.linkedin.com/learning/advanced-laravel-22373805/write-http-tests?u=76281980&t=494)** So in case it uses a different ID than 1 for some reason, it doesn't fail again. All right, we have to say class for this to work, and let's import this. Yeah, the class is already imported. Now let's try and run this. Use the command. Finally, it passes. So you can write similar tests for all the get, post, and delete requests related to scheduling classes, booking classes, and so on, and assert the responses. But before we conclude, I want you to observe a pattern every single test follows. The first thing we do is we set up the environment. This could be creating the models, seeding the tables, or something else. Then we take an action. Finally, we make assertions. You can remember this as given, that is given this scenario, when this happens, then this should happen. So every single test case follow this particular pattern, so if you're stuck anytime, you know how to write your test cases, by following given, when, then pattern. Now go ahead and write some tests on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** actingas (2), assertredirect (2), assertredirecttoroute (2), test_instructor_can_schedule_a_class (2), class_type_id (2)
> **Env Vars:** url (4), http (2), json (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1), set up (1)
> **Ports:** :00 (1)
> **Cross-References:** previous video (1)

#### [Write database tests](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980&t=0)** - [Instructor] While writing HTTP tests, we have used some database-related utilities like model factories and seeding in our tests. In this video, we'll explore additional techniques provided by [Laravel](../../Skills/Web%20Development/Laravel.md). We'll use the same tests. When we ran this test a while ago, it passed, right? Now let me try running it again, copy this. Sale artisan test filter. Paste the method, and now it fails. We didn't change anything, so I thought it will pass, right? But no, it says the date and time has already been taken. That means when the test ran for the first time, a class was scheduled for that date and time and that row still exists in the testing database table. We won't be able to test multiple times if that happens, right? So Laravel lets us reset the database for each test by using a trait. Scroll up here and say use RefreshDatabase, and that's it. Now every time you run a test, a database is reset. That means none of the records will be stored. So now let's try and run the same thing again. Perfect, now it passes. All right, next, here after we schedule a class, we just asserted, where is it, yeah? After we scheduled a class, we just asserted that it redirects it to the index store, but we didn't check if an entry
>
> **[1:33](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980&t=93)** exists in the database or not, so let's do that now. Here, even before asserRedirectToRoute, let's say this assertDatabase, we can say assertDatabaseCount or we could say even better, assertDatabaseHas, and we could check if the exact row that we inserted here exists in the database or not. So let's say the same thing. I will type again, copy and paste it here. We are asserting if database has this rule. We need to pass the table as the first argument, scheduled_classes. All right, let me run this once again, clear, sail artisan test, test_instructor_can_schedule_a_class. Okay, there was a mistake. That's not how we test. We need to combine the date and time, right? Because that's how the database exists, so yeah. Now it should run. Clear, and run the test again. Okay, now this passes, perfect, three assertions. Let's write one last test now, scroll down. Public function test_instructor_can delete a class
>
> **[3:01](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980&t=181)** or can cancel a class, all right? And here, let's follow the pattern given when then. So given, we need to create an instructor first, so let me copy this. We also need to see the class type stable. And we also need a ScheduledClass to be inserted in the database row to actually cancel it, right? So let's create it using a log event, ScheduledClass, create, and let's give it some data. Instructor_id will be the user ID and then class type ID. I think we can copy that from here and we can change the date. We can do anything. So this is the setup. We have created an instructor. We've done the seeding for the class type table and we've created a scheduled class. Now the action, we need to hit the delete route signed in as an instructor. That would be, sorry for this typo. Yeah, that would be the action, so this. Let's say response equals this, acting as the user, delete, and the route would be instructor/schedule.
>
> **[4:35](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980&t=275)** And this is appended with the ScheduledClass ID in the delete route. Yeah, so this is the action. Now we need to assert that the class has actually been canceled. That means it's deleted from the database table. We can do that using the method assertDatabaseMissing. We previously used DatabaseHas. Now we can use DatabaseMissing. Pass the table name, scheduled_classes, and then specify the ID of the scheduled plus so that we can crosscheck it's been deleted.
>
> **[5:23](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980&t=323)** Okay, this should work. Let's try and run this test alone. Sail artisan test filter test.
>
> **[5:38](https://www.linkedin.com/learning/advanced-laravel-22373805/write-database-tests?u=76281980&t=338)** Okay, I have made a stupid mistake here. Yeah, should move this. I think that's it. Now it should pass. Yes, one test passed with one assertion, perfect. I guess you have seen a good number of examples of HTTP and database tests to start testing your entire application on your own. There's also something called as browser tests for which you need to install a package called Laravel Task. I'll let you explore that on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (3)
> **Code Identifiers:** scheduled_classes (2), asserredirecttoroute (1), assertdatabase (1), assertdatabasecount (1), assertdatabasehas (1)
> **Env Vars:** http (2)
> **UI Navigation:** scroll up (1), scroll down (1)
> **Prerequisites:** setup (1), install (1)
> **Speakers:** - [instructor] (1)

#### [Test-driven development](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980&t=0)** - Test driven development is an approach that helps you catch bugs earlier in the development process, improve code quality, and increase confidence in your code base. It's a process where you write tests even before you write the code. I'll show an example. Let's say we have a requirement that an instructor cannot cancel a class less than two hours before it starts. But we don't start coding it first. Instead, we write a test case. Open the InstructorTest class. InstructorTest. Scroll down to the bottom. And let's write a test first, public function test_cannot_cancel_class_less_than_two_hours_before.
>
> **[0:49](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980&t=49)** Okay, let's create an instructor. Seed the class types. And all of this will be the same. Just that we need to make sure this is less than two hours from now. So we can use the now method. And add an hour, addHour(1). And then set the minute(0), seconds(0). I think it's minutes. Yeah. So this will create a class that is less than two hours from now. Next, let's take the action, that is $response. $this acting as user. The same thing, we hit the delete route with this scheduled class 'id'. And then we have to assert that this isn't possible. That means we should still have that scheduled class in the room. So $this assertDatabaseHas 'scheduled_classes' table,
>
> **[1:56](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980&t=116)** 'id', $scheduledClass id. All right, now let's copy this and run the test. We obviously already know that it fails, because we haven't even built that feature, but let's test it. This is how test driven approach is. Yep. As expected, failed asserting that the row in the table matches. That means it got deleted. The table is empty. Expected. Now let's add the logic to make this test pass. If you remember, we created a scheduled class policy, and authorized the delete action if the instructor's id, that is the signed in instructor's id, matches the $scheduledClass id. Now here, we can add another condition, saying and the date and time of this $scheduledClass, date_time is greater than now() add two hours. That is, it's more than two hours from now. Only if this is the case, this delete action should be authorized. Now run the test again. You can keep everything the same. Just run the test again. It passes. Great. The instructor cannot delete this class. That's good. But the instructor should not even be able to see the cancel button, right? He's still able to see that cancel button.
>
> **[3:31](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980&t=211)** Let's go to the index view of upcoming.blade.[PHP](../../Skills/Software%20Development/PHP.md). And down here. Let's display this entire dev, only if the instructor is authorized. But even before we do that, we need to assert that instructor is not able to see the cancel button. So that can be done here. $response = this actingAs($user). Let's go to this particular route, instructor/schedule, using the get method. And $response assert cannot see text. assertDontSeeText, yeah. assertDontSeeText. Cancel. Okay. And now this should again fail. Let's see. Yeah. Like we expected, it fails, because we can see cancel right here. Now let's make it pass, like we discussed. We go to the upcoming.blade view. Let's display this dev, only if the instructor is authorized to delete. So we can do that using the @can blade directive. Specify the action. And pass the model here, which is the class. Then @endcan after the div. Right now, let's try and run the test one last time.
>
> **[5:08](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980&t=308)** Now you see this test passes with both the assertions. Great. Let's run the entire instructor test now to ensure that we haven't broken anything meanwhile. So sale artisan test --filter InstructorTest.
>
> **[5:27](https://www.linkedin.com/learning/advanced-laravel-22373805/test-driven-development?u=76281980&t=327)** I think I made that typo all over again. Great. Four tests have passed with nine assertions. So while adding the new feature, we haven't broken anything. That's how test driven development is done. For every feature or requirement of your project, you first write the test case, defining your expectation, and then go ahead and build it. As you can see, it's a nice structured approach, and gives you more confidence while building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Code Identifiers:** scheduledclass (3), assertdontseetext (2), test_cannot_cancel_class_less_than_two_hours_before (1), addhour (1), assertdatabasehas (1)
> **UI Navigation:** go to (3), open the (1), scroll down (1)
> **CLI Commands:** make (3), php (1)
> **File Paths:** upcoming.blade.php (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is an  (1)
> **Speakers:** - test (1)


### 7. Understand How Laravel Works

[↑ Back to Table of Contents](#table-of-contents)

#### [Request lifecycle overview](https://www.linkedin.com/learning/advanced-laravel-22373805/request-lifecycle-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/request-lifecycle-overview?u=76281980&t=0)** - [Instructor] When a user makes a request to a [Laravel](../../Skills/Web%20Development/Laravel.md) application, there are a series of steps that take place before the response is returned to the user. This is what we call a request lifecycle. With a clear understanding of this flow, you could easily debug issues and optimize the performance of your application. So let's understand what Laravel does under the hood. The moment a user visits any URL of your app, the web server is configured to point to the public directory as the entry point for all requests. Let's look at the code of the Laravel application. This is the public directory, and here is the index.[PHP](../../Skills/Software%20Development/PHP.md) file. The first thing Laravel does is it sets the constant LARAVEL_START to the current time in milliseconds. This is used to record the start time of the request processing. Remember we saw the load time for each request in Telescope? This constant is used in such cases to calculate the elapsed time for processing a request. Next thing, Laravel checks if the application is in maintenance mode. That means it checks the presence of this particular file: storage, framework, maintenance.php. We don't have any such file. If a file exists, it requires it, and then the application is put into maintenance mode so that the user cannot access any part of it. Right now, our application is not in maintenance mode, which is why we cannot see this file. Next, we require the auto-load file generated by Composer.
>
> **[1:37](https://www.linkedin.com/learning/advanced-laravel-22373805/request-lifecycle-overview?u=76281980&t=97)** This auto-loads all the PHP classes and functions from external libraries without needing to manually include the files. Now comes the most important part of the application. This file, app.php within bootstrap, is required, and the response is stored in this app variable. Let's see what this file does. Let me open app.php within bootstrap. This line, right here, is creating a new application instance. This application class is the heart of your entire Laravel project. It provides the core functionality for managing service providers, facades, routes, and middleware. Routes and middleware you already know, service providers and facades, we will see in the next few videos. This application class also sets up the configuration, error handling, and logging for the application, and so much more. Basically, this is what is responsible for bootstrapping the application and loading all the required components. And then, down here, Laravel binds some important interfaces so that we can resolve them later when required. Http\Kernel interface is responsible for handling HTTP requests and sending responses, while the Console\Kernel handles the same for your console commands. The ExceptionHandler is responsible for handling errors and exceptions and presenting them to the user in a friendly and informative way. Here Laravel is registering singletons
>
> **[3:13](https://www.linkedin.com/learning/advanced-laravel-22373805/request-lifecycle-overview?u=76281980&t=193)** of all these interfaces and classes. Singletons are nothing but objects that are created only once and then shared across the entire application. So even if you try to create an object again, you get the same instance. Back in the index.php, here we are creating an instance of the app Http\Kernel class that we just registered right here. This one. This Kernel class is the one responsible for handling incoming requests, [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) them to the appropriate controllers, and returning responses. And then, we are calling the handle method on the kernel. Now, let's try and find this handle method so we'll understand what's going on. And since this is an instance of the app Http\Kernel class, we should be able to find the handle method here. And if it's not here, then it must be in the Http\Kernel class that it extends. So go into that. Find the handle method. And yes, right here it is. This is the main line of code here, sendRequestThroughRouter. Let's see what happens within this. And here, these two lines of code make the request variable and the request facade available throughout the application. This line next, bootstrap, does certain initializing, connections, configurations, etcetera. And finally, this Pipeline class
>
> **[4:46](https://www.linkedin.com/learning/advanced-laravel-22373805/request-lifecycle-overview?u=76281980&t=286)** is responsible for sending the request through multiple middleware and then dispatching to the router. You already know what middleware does, we've written our own custom middleware. It takes the request, adds some additional headers, or authorizes, and so on, and then passes it on to the next middleware, and so on, until finally it is dispatched to the router. Let's again go into this method and see what happens. This dispatchToRouter method finds the matching route based on the request method, like get, post, delete, and the request URI, and then calls the appropriate controller method as defined in our web.php routes. And then you already know how we return views within controller methods, which are Blade files. Laravel compiles the Blade code into standard PHP code that can be executed by the server. Server then generates the [HTML](../../Skills/Web%20Development/HTML.md) response that is sent back to the client, and that's what you see in the browser. That's a simplified overview of the request lifecycle. In the next few videos, we'll dive deeper and learn more about what goes on within.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (9), [PHP](../../Skills/Software%20Development/PHP.md) (8), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** php (8), find (3), composer (1), make (1)
> **Env Vars:** php (2), url (1), laravel_start (1), http (1), uri (1)
> **File Paths:** index.php (2), app.php (2), maintenance.php (1), web.php (1)
> **Code Identifiers:** sendrequestthroughrouter (1), dispatchtorouter (1)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [What is a service container?](https://www.linkedin.com/learning/advanced-laravel-22373805/what-is-a-service-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/what-is-a-service-container?u=76281980&t=0)** - [Instructor] A while ago we saw that this application class is the heart of the entire application. This is a subclass of [Laravel](../../Skills/Web%20Development/Laravel.md)'s service container. This service container is responsible for managing the dependencies of an application. But first, let's see why we need something called a service container. When building any application, you will often find yourself needing to create objects that depend on other objects. For example, you might need to create a controller that requires a database connection or an email service. Traditionally, you would create these objects manually passing in all their dependencies as arguments. Something like this where you create a mailer object manually in the controller, in the controller's constructor. This can quickly become too long and error-prone if you have too many dependencies and as your application grows in size and complexity. Instead of creating the mailer object manually like this, what if you could do this? If you could just specify the mailer class as a dependency of the controller and somehow an object gets created only when you need to use it, that's exactly what a service container does. It's like a central box that can be accessed from anywhere in your application. You can tell a service container how to create an object in a different part of the globe. Think of this like putting something into the container and later,
>
> **[1:33](https://www.linkedin.com/learning/advanced-laravel-22373805/what-is-a-service-container?u=76281980&t=93)** whenever you need that object like our mailer in whichever part of your application, you can simply access that object without creating it again manually. Let's see how the service container does this. This is a super simplified version of any service container. At the core, a service container simply is a [PHP](../../Skills/Software%20Development/PHP.md) class that provides two main methods, bind and make. The bind method takes a key and a closure function, and just stores them in this bindings area. And then the main method takes a key, finds the bindings array for that key, gets the closure, and then calls that closure with the container instance as an argument. And the result object is return. I can make use of this container like soap. Container equals new container. I create a new instance of the container itself. Let's bind a string called greeting and pass the closure function container return hello world. This is done once. And then whenever we need, we can use the make method to retrieve the value. So we can anywhere say greeting equals container
>
> **[3:11](https://www.linkedin.com/learning/advanced-laravel-22373805/what-is-a-service-container?u=76281980&t=191)** make greeting. Container calls the closure function associated with this key and returns the resulting string value. So in some ways, the service container in Laravel can be thought of as an array that stores bindings between a class and its implementation, but it's much more powerful than that. Look at the web dot php routes file. In this get route, we have a reference to the dashboard controller. Laravel uses the service container to resolve an instance of this dashboard controller class on its own because we've never used a bind method to bind this class, right? So, Laravel discovers and automatically does all of this. And suppose we have another dependency within the dashboard controller, public function construct. And let's say we have some class, some object dependency, which we are later using it here. Laravel will resolve this also recursively while resolving the dashboard controller class. This allows for easily managing dependencies, less chaotic code, and also provides a way to change the implementations without changing code in too many places. In summary, the service container is a critical component of Laravel framework, providing a way to manage dependencies and resolve objects throughout the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **CLI Commands:** make (4), php (2), find (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (1), it's like (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### [Service providers in Laravel](https://www.linkedin.com/learning/advanced-laravel-22373805/service-providers-in-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-laravel-22373805/service-providers-in-laravel?u=76281980&t=1)** - [Instructor] Now that we know how a service container in [Laravel](../../Skills/Web%20Development/Laravel.md) manages the objects and their dependencies, we can look at something called service providers. A service provider is a class that is responsible for registering the services or dependencies for your application. So service provider is a place where you do the binding part of using the service container. The core Laravel framework provides several built-in service providers that register various services for you, such as [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), database, validation, and encryption. Let's take a look at one of the core service providers in the Laravel. The ViewServiceProvider. This service provider is responsible for registering the view component of Laravel, which is used to render the views in your application. Look at the main register method that calls the registerFactory method. It registers the view component with the service container by binding it to the view key. So this is what happens when we return a view in our controllers. Similar to this ViewServiceProvider, Laravel has several of them responsible for bootstrapping the entire application by registering all of the necessary services and dependencies. When your application starts up, Laravel automatically loads all of the service providers you can find in the config app.[PHP](../../Skills/Software%20Development/PHP.md). Here's all of them that it registers on boot. You can create your own service provider if you like to manage certain dependencies
>
> **[1:34](https://www.linkedin.com/learning/advanced-laravel-22373805/service-providers-in-laravel?u=76281980&t=94)** in a clean and organized way, and add them right here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** find (1), php (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), similar to (1)
> **File Paths:** app.php (1)
> **Code Identifiers:** registerfactory (1)
> **Speakers:** - [instructor] (1)

#### [Get to know Facades](https://www.linkedin.com/learning/advanced-laravel-22373805/get-to-know-facades?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/get-to-know-facades?u=76281980&t=0)** - [Instructor] Now, let's talk about facades and how they work with the service container in [Laravel](../../Skills/Web%20Development/Laravel.md). You have heard about facades and used several of them already. Mail facade, notification facade, auth, request, and so on. So, what exactly are these? In simple words, facades provide a simple and easy to use interface to access the services registered within the Laravel service container. Whatever you put into the service container is like a box, right? You can now take out and actually make use of it using facades. Let's take an example to understand this better. Look at the registered user controller, which is created for us when we install Breeze. Scroll down, and here, we use the hash facade to hash passwords and store them in the database. Notice that we're not creating an instance of the hash class anywhere here, nor are we manually injecting into our class or function. Instead, we're simply calling the static make method on the hash facade. But how does Laravel know which service to instantiate when we call the hash facade? Remember, I mentioned that Laravel loads all of the service providers you can find in the config/app.[PHP](../../Skills/Software%20Development/PHP.md) file. Well, HashServiceProvider is one of them. Take a look in this. Here's the register method of the service provider. The hash service is registered as a singleton with the service container. So, whenever we call the hash facade,
>
> **[1:35](https://www.linkedin.com/learning/advanced-laravel-22373805/get-to-know-facades?u=76281980&t=95)** Laravel results the hash service from the service container, and calls the relevant method inside Hash Manager. In Hash Manager, let's search for the make method, and yeah, here it is. So, this is what is called when you simply say "hash::make" using the facade. So now, you know how the service container is responsible for managing object creation and dependencies, while service providers allow for the registration and booting of the application services and components. Facades provide a simple and easy to use interface for accessing those services registered. I hope you now have a much better understanding of what happens in Laravel under the hood.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (4), find (1), php (1)
> **File Paths:** config/app.php (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Quick summary](https://www.linkedin.com/learning/advanced-laravel-22373805/quick-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-laravel-22373805/quick-summary?u=76281980&t=0)** - [Instructor] Congratulations. You've not only come to an end of a huge course, you've also built a fully functional app making use of many of the advanced features of the [Laravel](../../Skills/Web%20Development/Laravel.md) framework. Let's quickly run through all that we learned in the process. We first created a simple rule-based login and authentication system using custom middleware, gates and policies, while also revisiting CAD basics. Then we learned how to seed our [Databases](../../Skills/Software%20Development/Databases.md), making use of factories. We saw how to define many to many relationships using Eloquent. Learned about attaching and detaching relationships. We also implemented eager loading, wrote some complex queries, and used query scopes to reduce code repetition. And then we saw how we could achieve more with Laravel by writing custom commands, making use of logs, and using events and listeners. We saw how to send mails, notifications, and then create jobs and process them in queues for time consuming tasks. And we also scheduled tasks that run without any manual intervention. We didn't stop at that. We got a good introduction to testing in Laravel, learning about HTTP test database tests, and also tried out the test driven development approach. Lastly, we went into understanding the Laravel architecture itself, getting an overview of the request lifecycle in Laravel, the service containers, service providers, and facades. This must have been a lot to process, but now, you are well equipped
>
> **[1:32](https://www.linkedin.com/learning/advanced-laravel-22373805/quick-summary?u=76281980&t=92)** to tackle complex projects with Laravel. So go forward with confidence and put your new skills to use in building amazing web applications. Don't forget to follow me on Twitter at Shruti Balasa, and subscribe to my YouTube channel (indistinct). Wishing you the best for your career in Laravel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Laravel](../../Skills/Web%20Development/Laravel.md) (7), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** cad (1), http (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Shruti Balasa](../../Instructors/Web%20Development/Shruti%20Balasa.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-laravel-4380124)

## Skills Covered

- Laravel

## Path Context

### In [Build Your Laravel Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20Laravel%20Skills.md)
← [Laravel Essential Training](Laravel%20Essential%20Training.md) | **2 of 7** | [Building RESTful APIs in Laravel](Building%20RESTful%20APIs%20in%20Laravel.md) →

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