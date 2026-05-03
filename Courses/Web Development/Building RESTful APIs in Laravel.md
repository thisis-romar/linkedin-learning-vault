---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-restful-apis-in-laravel-8532490
url: "https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490"
duration_minutes: 77
duration: 1h 17m
level: Intermediate
updated: 3/30/2021
learners: 10281
skills:
  - REST APIs
  - Laravel
exercise_files: true
github: "https://github.com/LinkedInLearning/building-restful-apis-in-laravel-2877241"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHLRm0wBRFc8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616782627205?e=2147483647&amp;v=beta&amp;t=3h1GYISHp7JIPE3zXeqeVBtAs41PRAADUeI2YoA5lNA"
linkedin_topic: Web Development
learning_paths:
  - '[[Build Your Laravel Skills]]'
prev_courses:
  - '[[Advanced Laravel]]'
next_courses:
  - '[[Building GraphQL Applications in Laravel]]'
path_nav: '[{"path":"Build Your Laravel Skills","position":3,"total":7,"prev":"Advanced Laravel","next":"Building GraphQL Applications in Laravel"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/rest-apis
  - skill/laravel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20RESTful%20APIs%20in%20Laravel.md)

![Building RESTful APIs in Laravel](https://media.licdn.com/dms/image/v2/C4E0DAQHLRm0wBRFc8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616782627205?e=2147483647&amp;v=beta&amp;t=3h1GYISHp7JIPE3zXeqeVBtAs41PRAADUeI2YoA5lNA)

# Building RESTful APIs in Laravel

> APIs serve as a bridge between different applications or systems, allowing us to efficiently share our data with the world. REST, an architectural style that defines how to build APIs, is popular, modern, and lightweight. In this course, discover how to create a RESTful API of your own. Join instructor Zuzana Kunckova as she demonstrates how to build a RESTful API using Laravel, the popular PHP fr

> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490) | 1h 17m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building RESTful APIs in Laravel](#building-restful-apis-in-laravel)
- [**1. An Introduction to APIs in Laravel**](#1-an-introduction-to-apis-in-laravel) (4 videos)
  - [API overview](#api-overview)
  - [APIs in the real world](#apis-in-the-real-world)
  - [Our application: ePetitions API](#our-application-epetitions-api)
  - [The basics of Laravel 8](#the-basics-of-laravel-8)
- [**2. Setting Up Our Application**](#2-setting-up-our-application) (6 videos)
  - [The project infrastructure](#the-project-infrastructure)
  - [Creating the database structure](#creating-the-database-structure)
  - [Creating a model factory and seeder](#creating-a-model-factory-and-seeder)
  - [Setting up the RESTful API routes](#setting-up-the-restful-api-routes)
  - [Challenge: Creating an author resource infrastructure](#challenge-creating-an-author-resource-infrastructure)
  - [Solution: Creating an author resource infrastructure](#solution-creating-an-author-resource-infrastructure)
- [**3. Building RESTful API**](#3-building-restful-api) (7 videos)
  - [Using API resources to display all petitions](#using-api-resources-to-display-all-petitions)
  - [Saving a new petition](#saving-a-new-petition)
  - [Displaying a specific petition](#displaying-a-specific-petition)
  - [Updating an existing petition](#updating-an-existing-petition)
  - [Deleting a petition](#deleting-a-petition)
  - [Challenge: Building the author resource](#challenge-building-the-author-resource)
  - [Solution: Building the author resource](#solution-building-the-author-resource)
- [**4. Testing Our API with Postman**](#4-testing-our-api-with-postman) (8 videos)
  - [Installing Postman](#installing-postman)
  - [GET all petitions](#get-all-petitions)
  - [POST a new petition](#post-a-new-petition)
  - [GET (show) a specific petition](#get-show-a-specific-petition)
  - [PATCH (update) a petition](#patch-update-a-petition)
  - [DELETE a petition](#delete-a-petition)
  - [Challenge: Testing APIs with Postman](#challenge-testing-apis-with-postman)
  - [Solution: Testing APIs with Postman](#solution-testing-apis-with-postman)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here](#where-to-go-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building RESTful APIs in Laravel](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=0)** - [Zuzana] In today's global world, we are connected like never before. But have you ever wondered what is the best way to share your data with the [[Representational State Transfer (REST)|rest]] of the world? The best way is by using an API. [[Application Programming Interfaces (API)|Application programming interfaces]] allow various devices to interact and exchange data using a simple set of commands. RESTful API follows the REST architectural style which defines what API looks like. I am Zuzana Kunckova, a [[Laravel]] developer and the founder of Larabelles, the Laravel community for women. As a full-stack developer, I work with APIs and their integration in my work every day, and I'm excited to share my knowledge with you. By joining me in this [[LinkedIn]] learning course, you will discover the essentials of APIs, why we need them, how we use them in our daily life, and how we can build a simple RESTful API using one of the most popular, if not the most popular [[PHP]] framework, Laravel. Given the popularity of PHP and Laravel in particular and the importance of RESTful APIs in today's world, learning how to build RESTful APIs in Laravel will provide you with highly sought-after skills that will help you further your career. If that sounds exciting, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (5), [[Representational State Transfer (REST)|Rest]] (2), [[PHP]] (2), [[Application Programming Interfaces (API)|Application programming interfaces]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (4), php (2), rest (1)
> **CLI Commands:** php (2)
> **Speakers:** - [zuzana] (1)


### 1. An Introduction to APIs in Laravel

[↑ Back to Table of Contents](#table-of-contents)

#### [API overview](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=0)** - [Instructor] Application programming interface or API is an interface that provides a way for us to communicate with an object. Whether this object is physical like a TV remote control or a software such as clicking a button to play a song. An application programming interface is a set of definitions and protocols for apps or services to communicate with each other. It acts as a bridge between them. It also has the details of how something works. We don't need to know the underlying code and logic. We just need to know what we have to do, what method we need to call to implement the desired functionality. We use APIs to extend the functionality of our application so that we don't have to code everything ourselves. One of the features of APIs is that they are standardized. They follow a common set of guidelines to make sure that they are consistent in their design and implementation. There are different sets of standards such as SOAP or [[GraphQL]]. But in this course we will look into [[Representational State Transfer (REST)|REST]]. REST stands for [[Representational State Transfer (REST)|Representational State Transfer]]. It is a software architectural style used to create web APIs. RESTful API is a service that conforms to the REST architecture and 6 guiding constraints. These constraints are, client-server architecture, statelessness, cacheability, layered system, code on demand and uniform interface. I'm not going to go into any further detail about what a RESTful API is in this course.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=94)** But if you wish to learn more, check out additional courses on [[LinkedIn]] learning, The most common used case for web APIs is data retriever. Larry Klein which could be a service or an application makes the request to the web server of the API provider. For example Twitter. The web server access is the Twitter database and returns the requested data back in a response. This might sound very similar to the request response cycle between a standard webpage and a server. The major difference is that a webpage request returns [[HTML]], CSS and [[JavaScript]]. While an API request returns most commonly [[JSON]] objects. JSON, which stands for JavaScript Object Notation is meant to be passed by a computer program rather than a person. Now that you have a basic understanding of what a RESTful API is. Let's look at examples of APIs views in our everyday lives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[JavaScript]] (2), [[JSON]] (2), [[GraphQL]] (1), [[Representational State Transfer (REST)|Representational state transfer]] (1)
> **Env Vars:** api (6), rest (3), json (2), soap (1), html (1)
> **Definitions:** is a  (3), stands for (2), is an  (1)
> **Analogies:** such as (2), for example (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [APIs in the real world](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=0)** - [Instructor] APIs are everywhere. Whether you realize it or not, our daily lives are informed by APIs. In fact, it might be hard to find a major service that does not provide an API. Want to check the weather for any location on earth? The data will be received from a third party weather API. My [[Android]] phone is using the Weather Channel API. Other phones or services might use the AccuWeather API. APIs can be used for various reasons. To access data so that multiple services can work together, you can look up information about recipes, music, public holidays, fitness, and so on. You can also use an API to hide complexity, and extend the functionality of your service. You may wonder "Why do services provide their API like this? Isn't data money?" One reason may be that the more people use the API, the more well known and popular the service becomes. It's good advertising for the company to have a good quality, secure API. Another reason may be that the API can expand the reach of the company by making their data available to users, and to enable developers to build [[Microsoft Products|products]] that are reliant on their service, and to keep them coming back. Companies may build an API to be able to reuse the same functionality, and not have to reinvent the wheel over and over. Some companies release their API for free, while others may make their API as a premiere access
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=96)** so that companies pay to be able to use it. All in all, APIs are everywhere. In this course, we will learn how to build a service-side API in [[Laravel]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[Microsoft Products|Products]] (1), [[Laravel]] (1)
> **Env Vars:** api (13)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Our application: ePetitions API](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=0)** - [Instructor] It is much easier to learn a new technology or a new concept by building an actual project. In this course we will build a service site API for an ePetitions service. Let's say that a company wants to display a list of petitions they support, to encourage their users to consider signing them. They can add links to the petitions on their website. Or, they can use an ePetition API to embed a petition widget on their website, where the users can view the petitions details, author, and the number of signatures. They can customize the design of the widget to reflect the design of their website and their brand. They could even analyze the petition's signatures over time, and display a graph of how fast a petition has grown. We will build a simple version of the petitions API. Our petitions will have a title, a category, a description of a cause, an author, and a number of signatures. While building this API, we will learn how to seed [[Databases]] with fake data, and we will learn how to test our code with Postman, a popular, free app for [[API Development]]. Having completed this course, you will be able to build a simple RESTful API in [[Laravel]], and test the API using Postman.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[API Development]] (1), [[Laravel]] (1)
> **Env Vars:** api (7)
> **Code Identifiers:** epetitions (1), epetition (1)
> **Tools:** postman (2)
> **Speakers:** - [instructor] (1)

#### [The basics of Laravel 8](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=0)** - [Narrator] I will assume that you have a fresh [[Laravel]] 8 installation ready. If you don't, go to the Laravel documentation and follow the instructions there. I am using [[PHP]] artisan to run my site locally but feel free to use Valet, Homestead MAMP, Laragon or any other local development environment. Once you have a brand new Laravel 8 project running locally, we are ready to begin. I am using PhpStorm as my IDE. IDE stands for Integrated Development Environment which is a software application with all that a developer may need in a single place. It comes with a code editor, a debugger, a terminal, various plugins to make development easier, and many other features. PhpStorm is one of the most popular PHP IDEs. Before we go any further, make sure you have a database ready. And as credentials updated in the Dotenv file. To view the data in the database, I am using the Beekeeper Studio which is a free open source [[SQL]] editor and database manager available for all operating systems, Mac, [[Windows]], and [[Linux]] but feel free to send that application such as TablePlus or phpMyAdmin. I've created a new database called E petition which is empty for now. Change the DB database spill to reflect the name of the database you have to create it in your Dotenv file. As of Laravel 8,
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=92)** the Laravel installer will take the name of your project lowercase and snake case it, in case it's made of multiple words and add it as the database name to your Dotenv file which is a lovely new feature. If you haven't heard of snake case before, it's basically adding an underscore between two words. In this course, we will mainly be using the following directories. When we create our petitions controller, the file will be generated here. When we create our petitions model, it will be saved in the app models directory, which is a new director in Laravel 8. In all earlier versions of Laravel, any newly generated model would be generated in the root of the app directory but as of Laravel 8, modules now have their own place. You can of course create a custom directory and move your modules there. The database directory is where we will create our model factory, our migrations and our Cedar to see the database with some data. Migrations are like a [[Version Control]] for our database. Every time we want to create a database schema, we use a migration. If we want to amend an existing database table, we create a new migration with the changes instead of overriding the original one. This way we have record of all changes done to the database. Routes is about all route definitions for our application live. In this course, we will not work in the web dot PHP file which provides session state, CSRF protection and cookie encryption, things you need when creating web routes.
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=186)** We will work in the API dot PHP file which is where all stateless restful API routes live. And the routes placed in this file are part of the API middleware which offers some API specific services such as rate limiting. We won't do anything in the resources directory during this course. And the only testing we will do will be done in Postman. So we won't do any work in the test directory either. Now that we have gone over the basic level, a directory structure, we are ready to start building our API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (8), [[PHP]] (4), [[SQL]] (1), [[Windows]] (1), [[Linux]] (1)
> **Env Vars:** api (5), php (4), ide (2), mamp (1), sql (1)
> **CLI Commands:** php (4), make (2)
> **Definitions:** is a  (4), stands for (1)
> **Tools:** terminal (1), postman (1)
> **Analogies:** such as (2)
> **Code Identifiers:** phpmyadmin (1)
> **UI Navigation:** go to (1)


### 2. Setting Up Our Application

[↑ Back to Table of Contents](#table-of-contents)

#### [The project infrastructure](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=0)** - [Instructor] To get started building our RESTful API, let's create everything we will need during this course. We will need a model, a migration, a controller, an API resource, a factory, and a seeder. The most important part of our e-petitions application is the petition model. Each database table has a corresponding model which is used to query the data or add new data to the table. We can use [[PHP]] artisans to create our model by running php artisan: make model Petition in the terminal. The convention is to use the singular case. So petition, not petitions. Before we ran the command, we could also create other classes we will need. By adding the -mo-- migration flag, php artisan will also create the migration. By adding the -f or --factory flag, it will create a factory. The -s or --seed flag will create a seeder, and the -c or --controller flag will create a controller. Or we could just run -a or --all flag to create everything all at once. We will need all of these classes but I don't want to create a controller this way. I'll show you why in a minute. For now, let's run the command php artisan make: model Petition -mfs. As you can see, we now have a migration, a factory, and a seeder ready. We will come back to these files in the future videos.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=94)** For now, let's go back to the controller. I could have created a controller while I was creating the model but I didn't want to do that because doing it that way would create a standard resource controller. And I want to show you how we can create an API controller instead. API routes don't use the create and edit methods. We can create a controller that will automatically exclude these two methods by adding the flag --API to the artisan commands. And because we will be using [[Laravel]] model route binding, let's also add the --model equal petition flag to specify the resource model. Let's run this command now. Yes, we could have just created a resource controller and delete the create and edit methods. But I think it's good to know about this --API flag. And specifying the resource model will save us some typing later on. Finally, let's create an API resource class. API resources are templates where you define how you want the [[JSON]] data to be returned back to the user when they send an API request. Let's run php artisan make: resource PetitionResource. This will create API resource for a single petition. When we want to return more than one resource, more than one petition, we need to create a resource collection. We create a resource collection by running php artisan make: resource PetitionCollection. Laravel will recognize that we are asking for a collection to be created, not just a single API resource. As you can see in the first case,
>
> **[3:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=188)** a single resource was created successfully, and when we specified resource collection, with the collection and the name, Laravel created resource collection. We will spend a lot more time working on our controller and our JSON resources later on. Fantastic, our model, migration, controller, API resource, factory, and seeder have all been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[Laravel]] (3), [[JSON]] (2)
> **Env Vars:** api (12), json (2)
> **CLI Commands:** php (6), make (4)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Creating the database structure](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=0)** - [Instructor] Earlier, we created a brand new database and a migration file that will allow us to define how our petitions table will look like. Migrations are not just a convenient way to create a database structure, they also serve as a [[Version Control]], they are a great way to keep track of any changes to the database structure over time and across a team of developers. Every time we or anyone on our team creates a new table or makes changes to an existing table, the record of this action will be saved in our database migrations directory. Right here. As you can see right now, the table is empty, even if I refresh it, nothing's here. So let's define the actual columns we will need in the table. To do this, we need to check the create petitions table file. The one that we created in the previous video. This class consists of two methods. The up methods and the down method. The up method is where we add what columns we want our table to have and what types of data this columns will contain. Right here. And the down method is used when we are dropping the table. We will not be doing anything in this method. So in the up method, we need to add the following fields. We will need the title, the category, the description, the author, and signees. The way we add them is by calling the appropriate fields type method on the table. So for the title we will call it the string function,
>
> **[1:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=98)** for the category we will call the text function, for the description we will also call the text function, for the author we'll called a string function and for the signees we will call the integer function. The difference between the text and the string functions, is that the string has a limit of 255 characters whereas the text field can have many more. We could make every field except for the title field nullable. Which means that these fields may be null and not required in the database. And we would do that by calling the nullable function on each field like this, but for e_petitions application we will have them all required. So let's get rid of these nullable calls. You can check out old available column types and [[Laravel]] documentation. There are many more than just string, text and integer. Let's see what our database looks like before we run the migration. As you can see, it's empty there are no tables there. Now let's run the migration by calling [[PHP]] artisan migrate in the terminal. Here as you can see, Laravel is telling us that migration table was created successfully which is this one, the petitions table, and all the other tables they already came with Laravel by default, such as the create users table, create passports resets table and create failed jobs table
>
> **[3:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=190)** have all been migrated successfully as well. Now let's check the database itself. For now its empty and if I refresh it, there are our tables, failed_jobs, migrations password_resets, our petitions table, and the users table. The petitions table is the one that we created. In the structure you can see that it has the id. And if I show you the file itself that is the table id column, it has a title column, varchar stands for string, It has the category table, which is a text like we defined. It has the description table, which is also a text. It has the author table varchar, which stands for string, and it has has the integer table for signees. It also has two timestamps. These timestamps function is what creates the created_at and updated_at columns. Now, what if we decided to modify an existing table? Maybe change the category column from text to string? For this, we must require the doctrine dbal library. Because this library is used to determine the current state of the column and create the required [[SQL]] query to modify it as per our instructions. But it doesn't come at Laravel by default. To install this library, let's run composer require doctrine dbal in the terminal. Fantastic. Once we have this installed, we can create another migration call it something like change_category_type. To tell Laravel which table we are changing,
>
> **[4:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=284)** we need to add a dash dash table flag and specify the table name. But there's another way to do this. We can call our migration something like change_category_type_in_petitions and Laravel will recognize that we are changing the petitions table which is a really nice feature. And even though either way will work, I find it more useful to have the table name in the file name so that I can quickly tell which migration modifies which database table. So let's run this command. As you can see, the migration has been created. Let's have a look in the migrations file. There it is. And up here, it says that we are changing the table petitions. So Laravel has prepared everything for us. Now we add the column that we are modifying to the up method, together with the new column type and call the change method on the column like this. So instead of text, we now want the column to be a string. Now in the brackets we define which column we are talking about. Which is category. And now we need to call the change method. Let's run php artisan migrate. As you can see, Laravel has migrated the migration. For now it's text. That's what it was before. And if I refresh it now says varchar, which stands for string. Similarly, we could rename a column or drop a column or drop the timestamps.
>
> **[6:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=377)** Just refer to Laravel documentation for more details. And for every of these changes, use a new migration. This way, every migration file will be a record of the change we are making. And here we have it, our database and the petitions table in particular have been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (9), [[PHP]] (2), [[Version Control]] (1), [[SQL]] (1)
> **Code Identifiers:** e_petitions (1), failed_jobs (1), password_resets (1), created_at (1), updated_at (1)
> **Definitions:** stands for (3), is a  (2), means that (1)
> **CLI Commands:** php (2), make (1), composer (1), find (1)
> **Tools:** terminal (2)
> **Env Vars:** sql (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)

#### [Creating a model factory and seeder](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=0)** - [Instructor] To test our API, we will need data. Yes, we could add it manually to the database but that would be too time consuming and simply annoying. Instead, we can use model factories and database seeders to do this work for us. Database seeding is the initial process of adding data to the database. We can use the already created database seeder class and use the DB Facade to insert the data into the petition stable like so. So we would use the DB Facade, call the tables static class on the petitions table, and call the insert function, which accepts an array of data. This array of data is the array of fields we want in our database. So in our case, the title fields which would be a random string, about 10 characters long, then we need the category field which will also be string, random, about 30 characters long. And then we would need the description and so on. But as you can see, this is quite time-consuming and we can only create one database record at a time. So imagine doing this for 100 records. Luckily there is a better way. We can use model factories. In fact, you can see that the database seeder already hints that you can use a factory there. In this case it's telling us you could use the user factory to create 10 records. Model factor is a class that allows us
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=94)** to generate a large amounts of data we want to insert into our database. We have already created the factory class in the previous video. But for now it's empty. Let's define the data we want to insert into our database inside the definition methods. We will be using an instance of the PHB faker library which is a library used to generate fake data. And which comes bundled with every Lavarel 8 installation. We'll add some fake data to every column of our petitions stable. So let's create the title column. And it will be this faker. And now we are asking faker to create a [[Microsoft Word|word]] for us. For the category, we will run this faker again. And in this case we will ask faker to give us a text which is 50 characters long. For the description, we will run this faker and ask faker for text again but this time a longer one, let's say 200 characters long. For the author, we will run this faker and ask faker to give us a name instead of a random word. And for the signees, we will run this faker, and we will choose a number between, which is a lovely function. So we'll choose number between
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=186)** let's say zero and 1,000,000 signees. Fantastic. You can check out faker's documentation for more properties. Once we had the factory ready, we need to add it to the seeder to be run when we call the seeder. There are two ways to run a seeder. We could call a petition factory from the database seeder file, like this. First of all, let's get rid of this code, we don't need this anymore. And in here we need to call petition, factory, and we want to create let's say 50 records and then call the create function. Don't forget to import the petition class to the top of the file, there you go. And now let's go call the [[PHP]] artisan db command from the terminal. As you can see, database seeding was completed successfully and let's check out database. For now it's empty. But if I refresh, here we go. We've got 50 records. The other way to populate a table is by using the petition seeder class we created in a previous video. Let me show you how. In here we would call a petition, factory, stuffing methods. Call the times function where we define how many times you want the factory to run. So let's say 50 again. And then call the create function. Let's not forget to import a petition class again, okay.
>
> **[4:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=283)** If we run a seeder this way, we will need to specify which seeder we are running in the PHP artisan commands. We do that by calling the --class flag and then saying the name of the seeder. So petition, seeder. Before we do that, let's delete the data from the database first. To do that, we will open a new query and run drop table petitions. This will drop the table. Now, if I refresh the database, the table is gone. Now let's run the command. Database seeding completed successfully. And if you refresh the database again, we've got a new set of data. Fantastic. As you can see both ways work just fine. It depends on how you want to seed your database. While running db seed in the terminal seems simpler, with big applications, you might want to run seeders individually instead of all at once. And this is where having individual seeders come in handy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[PHP]] (2)
> **Definitions:** is a  (4)
> **Env Vars:** api (1), phb (1), php (1)
> **CLI Commands:** php (2)
> **Cross-References:** previous video (2)
> **Tools:** terminal (2)
> **Analogies:** imagine (1)
> **Best Practices:** don't forget (1)

#### [Setting up the RESTful API routes](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=0)** - [Instructor] As I mentioned earlier in the course, when creating API route, we work in the api.[[PHP]] file. Within this file, the api URL prefix is automatically applied to the URL. The URL will be different depending on what local development environment you are using. And if you want to, you can even change this prefix from api to anything else in the RouteServiceProvider class. You can find the prefix in the public function boot and you can change it here. In the api.php file, we have two options for how to create the routes. We can list each individual route and map it to the control actions like this. Routes::get, so we are getting data from the petitions URL which is associated with the PetitionController class and specifically the index action. Let's not forget to import a PetitionController at the top of the file. To store a new petition, you would use the Route::post method to the petition's URL which is associated with the PetitionController class, specifically with the store method. And we could do this for all actions in the petition's controller, but however, there is a faster way to do this. Instead of doing each route one by one,
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=94)** we can use the Route::apiResource method, which, again, goes to the petition's URL and is associated with the PetitionController class. The apiResource method will map all of the actions in the PetitionController with all the HTTP verbs in one line of code, which is amazing. There may be a time where the controller only has some actions, such as the index or the show action. In this case, we can use the Route::resource method to instruct [[Laravel]] that we only need specific routes. We would say Route::resource, then send it to the petitions endpoint associated with the PetitionController, and then we chain the only method that accepts an array of control actions we want to create. In our case, the index and the store method. In our case, we need all actions. So let's reroute code back and use the apiResource instead. To see that this worked, we can run the php artisan route:list in the terminal to check that all routes have been created. And, as you can see, yes they have. Every action has been assigned a correct HTTP method and an endpoint. Endpoint is where the API sends the request. If you look at these URIs, they all follow the same conventions and they only differ in the method they use and at the end of the endpoint. So this index action, it's URI is /petitions
>
> **[3:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=191)** and it uses the GET HTTP method. We can also send the POST method to the same URI, but this is associated with the store action. Then if we want to display a specific petition, we need to specify the petition ID and we use to GET method, and this is all associated with the show action in the controller, and so on. An endpoint is what allows you to customize the request to achieve a specific result or to retrieve specific data. Each feature of an API needs its own endpoints. Let's have a look at some of Spotify's API endpoints. Every API has a base URL to which the various endpoints are added. Spotify's base URL is [https://api](https://api) .[spotify.com/v1](https://spotify.com/v1). If you send a GET request to /albums, you will receive [[JSON]] response with all albums. If you send a GET request to /albums/id of an album, you will receive a response with the details of a specific album. And if you send a GET request to /artists/id of a specific artist, /albums, you will receive a response with a specific artist's albums. Now that we have created a model, the controller, the API resource, the migration, the seed, and the API routes, it's time to implement the controller methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Laravel]] (1), [[JSON]] (1)
> **Env Vars:** url (8), api (7), http (3), uri (2), post (1)
> **API Endpoints:** get  (5), post  (1)
> **CLI Commands:** php (3), find (1)
> **Code Identifiers:** apiresource (3)
> **File Paths:** api.php (2)
> **URLs:** [https://api](https://api) (1), [spotify.com](https://spotify.com) (1)
> **Cross-References:** earlier in (1)

#### [Challenge: Creating an author resource infrastructure](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=0)** - [Instructor] Welcome to our first challenge. Let's practice what we have learned so far. In this challenge, I'm going to ask you to create a brand new resource for an author, because as a part of our e-petitions API we might want to allow our users to display all petitions created by one author. I'd like you to create an author model, a controller, routes, API resource, migration, factory and a seeder using [[PHP]] artisan. Don't worry about making all these classes work yet. Just create them for now. Limit the author controller to only display all authors and an individual author. We will not let our users to create, update, or delete authors. So go ahead and give it a go. If you can't remember how to do something revisit the previous videos or watch my solution video next. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1)
> **Env Vars:** api (2), php (1)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating an author resource infrastructure](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=0)** - [Instructor] Hopefully you were able to solve the challenge, but if not, don't worry, let's do it together now. We can create the Author model, migration factory, and seeder by using a single [[PHP]] artisan command. In our terminal, let's type php artisan make:model: Author, -m for migration, f for factory, s for seeder. Next, let's create an API controller and set [[Laravel]] route model binding on it. In the terminal, let's type php artisan make:controller AuthorController, and because we want this to be an API controller, we add the --api flag, and to set Laravel's route model binding on it, we do --model=Author. Enter. Fantastic. Now, let's create API resource for Author too. And while we add it, let's create the resource collection. In the terminal, we will type php artisan make:resource AuthorResource. And php artisan make:resource AuthorCollection.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=80)** Fantastic. Now let's open our api.php file and use the Route::resource method to map the route to the AuthorController. We will type Route::resource, the name is authors, let's add the AuthorController class, and then let's chain the only method which accepts an array of actions that we want to create. In our case, we want to create the index and the show action. Let's remember to import the AuthorController at the top of the file as well. Okay. Finally, let's open the AuthorController class and delete everything except for the index and show method. We'll go to the app, Http, Controllers, AuthorController, and let's have a look. We will need index method so we'll leave this as it is. We won't need the store method so we can delete this one. We will need the show method, but we won't need the update method and we won't need the destroy method either so let's delete that as well. And that's it. The Author resource has been set up. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[Laravel]] (2)
> **CLI Commands:** php (6), make (4)
> **Env Vars:** api (3)
> **Tools:** terminal (3)
> **UI Navigation:** open the (1), go to (1)
> **File Paths:** api.php (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)


### 3. Building RESTful API

[↑ Back to Table of Contents](#table-of-contents)

#### [Using API resources to display all petitions](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=0)** - [Instructor] Let's work on a petition controller now. Open the PetitionController [[PHP]] file and let's see the index method. If we were building a web application, not an API, we would probably do something like this in our index methods. We would [[Fetch]] all the petitions from the database and save it in the petition variable, and then pass them onto the view.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=32)** However, when building an API, we don't pass data to the front end, we return [[JSON]] instead. And [[Laravel]] offers a very convenient way to structure the JSON data called API resources. API resources are templates that define the structure of JSON data returned in the response. They allow us to transform the data we send to the user. For example, we can hide some fields or add a computed field. When the user requests a petition, we get the data from the database, pass it through this template that we defined in the PetitionResource.php file, and this is what's going to be returned to the user. When a resource is created, it comes with a toArray method. This method has access to the whole request object which means we can customize and transform what will be returned by modifying the return statement. If we leave it as it is, all model attributes will be returned. However, let's say we only want to return the id, title, and the author. We would define these field like this, omitting the other attributes. In the written statement, we will define the id is $this->id, the title will be $this->title, and the author will be $this->author. When we are returning a list of resources, such as in the index method,
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=125)** we need to extend a collection resource instead. This has access to the already transformed data in the PetitionResource.php file and returns a collection. We will modify the return statement again and wrap the Collection in a data object. Data will be $this->collection. Now that we have prepared a API resource template, let's go back to our index method where we will list all resources, or in our case, petitions. Instead of returning the view, we can take our petitions, which have been saved in the petitions variable, pass them to the PetitionResource and call the collection method on the resource. Make sure you have imported a petition model and a PetitionResource at the top of the file. We can also remove the petitions variable and pass the petitions directly into the PetitionResource.
>
> **[3:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=188)** In a standard web response, we would return a HTTP response which is what PhpStorm is expecting. We can change this DocBook return value to return anonymous resource collection instead. There are two ways to return a collection by calling the collection method under resource like we are doing right now, or by returning and new collection.
>
> **[3:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=218)** Let's reset a new collection and view the output in the browser. If you are using PHP artisan serve, make sure it's running. Otherwise you won't be able to display the data in the browser. The URL is my local host/API/petitions as we define in the API.php file.
>
> **[4:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=244)** As you can see, we have all 50 petitions that we created in the previous video. Notice that we are only seeing the ID, title and author like we defined in the PetitionsResource.php file and the JSON is wrapped in the data object which is really convenient. The reason for this is that sometimes we want to return other pieces of information along with the data such as some custom headers your API version and so on. You can attach these extra pieces of data inside a two array method on the petition collection like this. Let's go back to the PetitionCollection file and let's add for example, version, which could be 0.1.1
>
> **[4:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=294)** and the author, which will be me. If I go back to the browser and refresh scroll all the way down and here's the version and the author. This data will now be sent with every API response. However, if we restart our collection by calling the collection method on the petition of resource it will not return any additional [[Metadata]]. Let me show you, let's go back to our index method in the petition controller. And instead of returning PetitionCollection we will return PetitionResource and call the collection method on it. Let me save the file, go back to the browser and refresh. If I scroll all the way down, you can see that the metadata is no longer there. So keep this in mind when returning collection this way, as for this course, I'll stick to returning and new collection. So let's revert our code back to what it was. Now that you know about a differences between these two approaches? You can choose to return your collection in any way that works for you and your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[JSON]] (4), [[Metadata]] (2), [[Fetch]] (1), [[Laravel]] (1)
> **Env Vars:** api (9), json (4), php (2), http (1), url (1)
> **CLI Commands:** php (6), make (2)
> **Cross-References:** go back to (4), previous video (1)
> **File Paths:** petitionresource.php (2), api.php (1), petitionsresource.php (1)
> **Analogies:** for example (2), such as (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** toarray (1)

#### [Saving a new petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=0)** - [Instructor] Let's create a new petition. In our PetitionControl.[[PHP]] file, we need to work inside a store method. To create a new petition, we create a new petition variable, use the create method on the petition model, and pass in the fields that we want from the request object. In our case, we want to pass in the title, description, category, author, and signees. Next, let's reset a new petition resource and pass into petition variable. To stop PHP storm complaining, let's also change the return value from response to petition. However, before we can actually save a new petition in the database, there is one more data protection action we have to do. All [[Laravel]] Eloquent models are protected against the mass assignment vulnerabilities by default. And by using the create methods, we are sending an array of data to our database. This array could potentially include some malicious content which is why we need to specify which fields can or cannot be mass assigned on every model. Every time the create method is used, it checks for mass assignment. Let's open our petition model. There are two ways to deal with mass assignment. We can either send the fillable property or the guarded property.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=95)** The fillable property is the list of fields that we can allow mass assignment on. While the guarded property is the list of fields that cannot be mass assigned. You need to do one, but not both. In general, you may want to use the fillable property when you have a small number of fields you want to allow mass assignment on. And the guarded property when you have a large number of fields and you only want to exclude some of them. In our case, we only have a small number of properties we want to allow mass assignment on. So I'll use the fillable property.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=135)** Just one more thing to note, the fillable property expects an array. So even if you only have a single field, you still need to put it in an array.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Laravel]] (1)
> **CLI Commands:** php (2)
> **File Paths:** petitioncontrol.php (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### [Displaying a specific petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=0)** - [Instructor] Earlier, when we were setting up our projects infrastructure, we used the dash dash model flag when creating our controller. What we did was enabled Lavarel model route binding which is just a convenient way to inject the model instance into our routes. If we didn't use the dash dash model we would have an ID as the show method parameter. But since we specified the resource model when we created a controller we now have a petition which gives us an access to the entire model, our show method, will return a petition resource, based on the specific petition it works very similarly to the index method except we're returning a single petition resource. So let's return a new petition resource and pass in the petition. Again, to stop our ID from complaining let's also change the doc block. Let's go to the browser and [[Fetch]] details of petition ID number five, before we do that. Again, let's remember to make sure that [[PHP]] artisan surf is running. This is our home page. We need to go to /API /Petitions /5 and decide to details of petition, with ID number five the petition is returned according
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=92)** to what we defined in the petition resource. So let's go back to the petition resource the PHP file and add all model attributes back. We want to return the ID, the title. We also want to return the description
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=113)** we wants to return the category. We want to return the author and even to return the signees. Using API resource means that not only we can define which fields we want to return to the user we can also transform the fields or add computed fields. A very simple example would be to uppercase the field title by calling the ucwords methods on the title. Let's see the browser output again. This is what it looks like before I refresh the browser window. And once I do, this is what it looks like now. So we can see all model attributes are returned back and the title has been upper cased. Fantastic. API resources are a very powerful way to transform the data. And I encourage you to check out the [[Laravel]] documentation for more examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Fetch]] (1), [[Laravel]] (1)
> **Env Vars:** api (3), php (2)
> **CLI Commands:** php (2), make (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Updating an existing petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=0)** - [Instructor] Updating an existing petition will be very similar to creating a new one. But instead of using post HTTP method, we will be using either PUT or PATCH. PUT and PATCH are very similar in what they do. Both methods update an existing resource but PUT replaces the entire resource while PATCH applies only partial update to the resource. When using the PUT method, you need to send the entire resource. And if the resource doesn't already exist, it will be created. In this way, PUT works similar to post. As for PATCH you only need to send the data that you are updating, not the whole resource. [[Laravel]] will accept either a PUT or a PATCH method when our user wants to update a resource. Let's complete our update method now. Let's open our petition controller. We need to call the update method on the petition. Paste in the fields we want to update from the request, and then return a new petition resource. So we'll do petition update. We will will paste the request, and call the only function on the request, which accepts an array of fields. In our case, we want all the fields to be updatable. So we'll paste in title, description, category, author, and signees. We will then return a new petition resource
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=93)** and paste in the updated petition. If we compared update method to the store method, we consider that very similar. The only difference is that in the store method we are going to create method on the petition model itself. While in the update method, we are calling update method on the specific petition. That is one more thing to note. Before you allow a user to update the resource you should add some checks so that the user can only update a resource they created, not just any resource, because we are not implementing any authentication this project. We won't be doing that, but it's definitely something you need to keep in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (1)
> **Env Vars:** put (6), patch (5), http (1)
> **API Endpoints:** put  (6), patch  (4)
> **Analogies:** similar to (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Deleting a petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=0)** - [Instructor] We are almost done with our petition control methods. The last method we need to implement is the destroy method. The destroy method will delete a single resource. Similarly to the update methods, when you implement authentication in your API you will need to check if the user is authenticated and authorized to delete a resource. But since we are not doing any authentication in this course let me just show you how you would simply delete a petition. Let's open our petition control file and scroll down to the destroy methods.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=38)** We will take this petition and call the delete method on it and that's it, very easy. Next we have to return a [[JSON]] response. In the JSON response, the first parameter will be null. And the second parameter will be the status code in our case 204, no content.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=69)** The reason we are returning null as the first parameter is because we are not returning anything in the body of the response as for the status code, the most commonly the returned code when a resource is deleted, is 204, no content. In fact, you could be more explicit with what status code will be returned in the other methods, too. You could wrap the petition resource or petition collection inside the JSON response and specify in HTTP response code. Let's do that in the index method. Instead of returning to new petition collection we will return a JSON response with the petition collection passed in as the first parameter and the status code as the second parameter in this case 200 HTTP_OK.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=135)** Even better way would be to use the illuminate HTTP response class to return appropriate HTTP response. I'm going to replace the status code with a response::HTTP_OK
>
> **[2:36](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=156)** I will put my [[Cursor]] back on the response and import the class. Make sure to import a correct response class the Illuminate HTTP one, because as you can see there are quite a few of them. Now that we have imported it at the top of the file. If I delete the HTTP_OK and start typing PhpStorm, offer all of the other codes and not just the numbers, but the names too
>
> **[3:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=192)** Using the response class instead of the actual status code is better for readability and for testing, knowing that the response will be OK, or in the case of the destroy method, HTTP no content is more descriptive than having a number 200 or 204 there, especially since not everyone is familiar with all status codes but you can do it either way. Let me use the response cast on the destroyer method too. I'm going to delete the 204 code and type response:: And now we can see the 204 status code stands for no content.
>
> **[3:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=236)** And here we have it. We have just created very simple, but functioning restful API in [[Laravel]]. You might want to say this API and add pagination, sorting, authentication better [[Data Validation]], or rate limiting. These concepts are too advanced for this course but what we have right here is enough to get you started. Check out the Laravel official documentation for more info. You have learned essential building blocks of every restful API. Well done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Laravel]] (2), [[Data Validation]] (1)
> **Env Vars:** http (5), api (4), json (4), http_ok (3)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** stands for (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Building the author resource](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=0)** - [Instructor] In the previous challenge, I asked you to create the various author files. In this challenge, I'd like you to fill the authors database table with the name string fields, migrate the database, add the name fields to the fillable array on the author model, create author factory, and seed database with 10 different authors using the fakest name property. Once you do this, return the author collection in the index method of the author controller, add an author resource in the show method of the author controller. Before we continue, as you can probably tell, there is one too many relationship between a petition and an author. A petition has one author but an author can have many petitions. We will not implement any relationships in this course. So for the purpose of this challenge assume that author is an independent resource. Have a go. And if you find yourself unsure how to continue, review the videos in this chapter or check out the solution video next.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Building the author resource](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=0)** - [Teacher] Let's see how we can create author resource. First of all, let's add a name column to the author's table. Now we need to migrate the database. Let's run [[PHP]] artisan migrate in our terminal. Next, let's add a name field to the fillable array on the author model, otherwise seeding our database will fail. Now let's open the author factory class, and return name as an instance of the faker name property. Let's go to the AuthorSeeder class and create 10 authors.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=53)** Let's import the author model at the top of the file. Finally, let's seed the author's table with some fake data. Now that we have our data ready, let's return an author collection on the index method of the AuthorController.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=79)** Make sure you import AuthorCollection at the top of the file. Let's return a single author resource on the show methods,
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=94)** and again, import AuthorResource at the top of the file. You could have also wrote the AuthorCollection and the AuthorResource inside a [[JSON]] response, and specified the HTTP status code, but either way is fine, and that's it. We can check our author's endpoint in the browser to see that we get all 10 authors, and any individual authors we might want. Let's run php artisan serve in our terminal. I'm going to click on this link, go to /API/authors, and here we have all 10 authors, and if I wanted to see the details of the authors with ID number five I'm just going to do /5, and here it is. Fantastic, well done everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[JSON]] (1)
> **UI Navigation:** go to (2), open the (1), click on (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** json (1), http (1), api (1)
> **Tools:** terminal (2)
> **Speakers:** - [teacher] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Testing Our API with Postman

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Postman](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=0)** - [Instructor] We need to test our API to make sure Endpoints are working and returning the data we expect. So far, we have been checking the data in the browser but we cannot easily create or delete a resource through the browser which is why we need a different tool. There are many different ways to test an API but in this course, we will be using Postman a free [[API Testing]] tool. With postman we can develop test and document APIs it's the all in one tool one may need when working with APIs. Let's create a free account If you don't already have one. Just choose a username, add an email and a password and click create account. You will be asked to share a little bit about yourself to customize the postman experience, but except for the name, everything else is optional. You will also be asked to either create a team or continue without a team for our purposes it's fine to continue without a team. Once you do that, you will see the browser version of Postman. To you use the browser version of postman, you will need to install the postman desktop agent as well to avoid browser limitation. So, I recommend you download the desktop app instead. Postman is available for all Operating Systems Mac, [[Windows]], and [[Linux]]. Once you download the Postman app, open it up. As you open the app, you will probably see a prompt to open launch path or have launch path already open.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=94)** The launch path displays quick links to all features you may want to use. It is linked to 'create a request', 'create a collection', 'create an environment', 'create an API', links to Postman documentation', 'recent workspaces' and more. Let's see how we can create a simple request. You could do so from the launch Path, or by clicking on the new button in the top-left corner of the screen. If we click on this button, you can see that we can create a new request, collection or environment, and we can also check out the templates tab or the API network tab. I encourage you to explore these tabs, but in this course we will only create a new collection and new requests. Because Postman saves all requests inside a collection, you either have to suck an already existing collection or create a new one while creating a new request. Let's create an ePetitions Collection. We can write a short description of the collection which is especially useful when working with other people and multiple collections, but I'm going to skip it. Our app doesn't have an authorization either nor on a prerequisite script, tests or variables. However, these options are there for you when you need them. (mouse clicking) Once you create the collection, you can share it with others run it or view it in the browser. There is a lot of advanced functionality in Postman
>
> **[3:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=188)** that they will not touch upon in this course. But if you want to learn more about this tool I encourage you to go to Postman official documentation. We are ready to create a new request that will display all petitions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[API Testing]] (1), [[Windows]] (1), [[Linux]] (1)
> **Tools:** postman (12)
> **Env Vars:** api (5)
> **UI Navigation:** open the (1), click on (1), go to (1)
> **Exercise Files:** download the (2)
> **Prerequisites:** install (1), prerequisite (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** epetitions (1)

#### [GET all petitions](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=0)** - [Instructor] Let's learn how we can create a new request. We can either create it from the launch pad by using the new button or by clicking on these three dots and selecting add request. Let's give it a name, GET petitions and save it in the E petitions collection. We now have a new empty request. The GET method has been selected automatically but as you can see, we have access to all methods. But for now, let's work with GET because we are going to get all petitions from our forward slash API, forward slash petitions endpoint testing the index action on the petitions controller. The request URL will be the full URL of our project as we displayed it in the browser. But before we send the request, let's make sure we are running [[PHP]] artisans server in our terminal. I'm going to click on this link which takes me to the project homepage, go to forward slash API, forward slash petitions, to see all petitions in the browser. Copy to URL and paste it in the request URL field in Postman. If you cannot remember the method or the end point we need to test, run PHP artisan route list in your terminal. I'm going to use an additional terminal window so that I can keep PHP artisan server running in this one. We need to look at the petitions endpoint not the other one. The method is GET,
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=95)** the URL is API forward slash petitions, and action is the index method of the petition controller. Let's go back to Postman and click send. If everything works as expected, we will receive a response with all petitions from this API endpoints. As you can see, the status is 200 okay, which means our request was processed successfully. We can also see how long it took to receive the response and what size it is. If I hover over the status code, I'll get a pop up with some additional information, which is really useful, especially if we receive an unexpected status code. We can view the response in different formats, pretty, raw and preview. But the pretty one is usually the prettiest. So let's stick with that. If you wanted to visualize the response, Postman has tutorials to tell you how to do it. It's a really interesting feature. Now that we have created this request, let's go to the top by clicking on the X and save changes so that we can come back to it later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3)
> **Env Vars:** url (5), api (4), php (3)
> **Tools:** terminal (3), postman (3)
> **CLI Commands:** php (3), make (1)
> **API Endpoints:** get  (2), get
 (1)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [POST a new petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=0)** - [Instructor] Let's test the store method to make sure that we can create a new petition. Looking at the [[PHP]] artisan route:list output, we can see that the method will be POST, the URI will be api/petitions, and the action is the store method on the petition's controller. If everything works, we will be able to create a brand new petition using Postman increasing the total number of petitions from 50 to 51. We need to create a new request and I will do that by clicking on the New button. I'll call it POST a petition, save it in the ePetitions collection, and I will choose to POST method from the dropdown. The request URL is exactly the same as the one we used in our GET petitions request from the last video so I'll just copy it over. Sending a POST request is slightly more complicated because we have to create the body of the request ourselves. Switch to the Body tab, click raw, and select [[JSON]]. To make it easier, we can simply copy one of the petitions from the previous GET request, but make sure you include the curly braces and don't have the trailing comma at the end. That would break the request. Believe me, I've been there many times. Let's change the title to Hello and the author to Jane Doe. I'm also going to delete the id value because the id will be assigned automatically. Let's click Send now.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=99)** We consider the status is 201 Created which is a success status. And here in the response window are the details of the petition we just created. Let's go back to the GET petitions request and scroll all the way down to see that we have 50 petitions at the moment. But as soon as we send the request again, we will receive 51 petitions back. Our brand new petition will be at the end. Fantastic. This means that our store method is working as it should. Let's close the POST a petition tab by clicking on the X and Save changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), [[JSON]] (1)
> **Env Vars:** post (5), uri (1), url (1), json (1)
> **API Endpoints:** post  (4), get  (3)
> **CLI Commands:** make (3), php (1)
> **UI Navigation:** dropdown (1), switch to (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** epetitions (1)
> **Cross-References:** go back to (1)

#### [GET (show) a specific petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=0)** - [Instructor] Let's tests the show method and display a single petition, our newly created petition with ID 51. Create a new request, call it a, GET a petition and make sure that the GET method is selected. Let's see the route list again to see what our end point is. API/petitions/petition is the URI which means we have to add a petition ID at the end of the URL string. Let's go back to the first GET request we created to copy the URL again. Notice that as we selected, Postman offers us to set it as variable. What it means is that instead of copying or typing the whole URL over and over again, we can save it in a shorter and simpler variable. In our case, the URL isn't very long and complicated but sometimes you might work with really complex URLs with parameters. And in this case, setting it up as a variable might be useful. Let's do it together just to see how it works. Click set as new variable and give it a name. In our case, I'm going to call it petitions. Make sure that the value is correct. The value would be the URL you're trying to save as a variable. You will have to select a scope and I'm going to select the global scope so that this variable is available across collections. Click set variable now. The URL value has now been changed to the name we gave it, petitions, inside double curly braces.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=94)** If you hover over it, you'll get a pop up with the details of this variable. Now that we have set it up, we can use this variable for the shared part of the URL. Once you start typing it, Postman will suggest possible variables from the ones you might have created, two variables that come with Postman by default. Don't forget to add a forward slash after the variable and the ID of our petition, 51. Click send and here we go. We receive a status code, 200 okay. And our response contains the details of a petition with the ID of 51 which means our end point and the store function is working as it should. Take a note of what the output looks like. We can set a data object with a title, category, description, author, and signees. Let's go back to [[PHP]] storm, and change what the output should look like in the petition resource file. Let's comment out the author and signees quickly. Save the changes, and send a GET request in Postman again. There you go. The response has changed accordingly. We no longer see the author and signees there. This shows that that our petition [[JSON]] resource is working as it should too, well done. Before we go, let's change to petition resource back to what it was before. Let's send the request again, to make sure that the data is back to what it was. We can now close the GET a petition tab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), [[JSON]] (1)
> **Env Vars:** url (7), api (1), uri (1), php (1), json (1)
> **API Endpoints:** get  (5)
> **CLI Commands:** make (3), php (1)
> **Tools:** postman (4)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1)
> **Best Practices:** don't forget (1)

#### [PATCH (update) a petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=0)** - [Instructor] Let's test the update method of the petitions controller. Create a new request, give it a name, update the petition, and save it in the ePetitions collection. By the way, the way I named the request is just a personal preference. You can choose your own naming convention. When updating a resource, you can choose between the PUT and PATCH HTTP verbs. We spoke about a difference between these two earlier in the course. But even if you are not sure which one to use, you can look at the route list. You can see that [[Laravel]] will accept either of them. I'm going to choose PATCH. The request URL will be the same one as the one we used in saving a new petition. We will use the petition variable and add the petition ID at the end. Let's update the petition with ID 20. Updating a resource is similar to creating a new one in Postman. Since we have to create the body of the request ourself. Switch to the body tab, click row, and select [[JSON]]. Let's go to the get a petition request, and request the details of the petition with ID 20.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=72)** I'm going to copy the details of this petition, paste it in our new request, and change the title to "New Title." Again, don't forget to include the curly braces, because there have been many times when I forgot them, and wondered why the request failed. I would still get a 200 OK response, because instead of updating the resource, Postman is simply displaying the original data. Actually, let me show you what I mean. Let's remove the curly braces and click send. Yes, the status code is still 200 OK, but the title has not changed. If we add the curly braces back, and send the request again, it will change.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=129)** This shows that the end point and the update method is working. Let's close the tabs and save the changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (1), [[JSON]] (1)
> **Env Vars:** patch (2), put (1), http (1), url (1), json (1)
> **API Endpoints:** put  (1), patch  (1)
> **Tools:** postman (2)
> **UI Navigation:** switch to (1), go to (1)
> **Code Identifiers:** epetitions (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [DELETE a petition](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=0)** - [Instructor] The last method we need to test is the destroy method, which will take a specific resource and delete it. Let's create a new request, call it "delete a petition," and select the delete HTTP verb from the drop down. We we use the petitions variable and append the ID of the petition we want to delete. Let's say, ID number 25. Let's click send and see what happens. This time, the response we receive contains an empty body, and a status 204 no content. This is the status code we define in a destroy method. Let's go back to [[PHP]] storm, the petition controller, and change it to something else. Just to make sure that the status code will change in our response. I'm going to use the response class to return the status code. A fun code is 418, "I'm a teapot." This response status code is just a joke, and not really implemented in production. But it's a fun one to use in this scenario. Let's run the request again, and this time let's delete a petition with ID 13. And here we have our 418, I'm a teapot status code. If you hover over it, the pop up will tell you a little bit more information about where this code came from, and why. To make sure this petition has really been deleted, let's reuse our get a petition request, and paste the ID of 13 at the end of the URL string. Let's click send and see what happens.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=95)** The response body we receive back is [[HTML]] 404 page. And the status code is 404, not found. We can also check our database to see that the petition has been deleted, and yes it has. There is no petition with ID 13 anymore. You now have a good understanding of how to use Postman to test API. You can take this further and learn even more about what Postman has to offer to your [[API Development]] workflow by using the official documentation and tutorials. I'm going to close the tabs now, and save the changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (1), [[HTML]] (1), [[API Development]] (1)
> **Env Vars:** api (2), http (1), php (1), url (1), html (1)
> **CLI Commands:** make (2), php (1)
> **Tools:** postman (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Testing APIs with Postman](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=0)** - [Instructor] Welcome to the last challenge of this course. In this challenge, I'd like you to use Postman to create a new collection called challenge and create a new petition. Let the title be my new petition. The description b my new petition description. The category be nature and you will be the author. And let's give it a good headstart with 100 signees. Next, I'd like you to edit the title of the petition ID 24 to update its title and check that it has been changed. Finally, I'd like you to delete a petition with the ID of 45 and make sure that this petition no longer exists. If you are not sure how to do something review the videos from the last chapter, or watch me go through the solutions to this challenge in the next video. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Testing APIs with Postman](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=0)** - [Instructor] Welcome to the solutions video of the last challenge of this course. In the last video, I asked you to create a resource in Postman and test that you can view, update and delete it. Let's get started. I'm going to create a new request by clicking on the new button. I'll call the test and use the create collection link to create a new collection called Challenge. You may at first create a collection and then the request. Either way is fine. Next, I'm going to send a post request to the petitions API which we saved in the variable petitions. I would go to the board at top select row and then [[JSON]].
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=51)** Inside curly braces, I'll a JSON object with a title, description, category, author, and signees keys and values. The title is My New Petition, the description is my new petition description, the category is nature, the author is Susanna, and the signees is 100. Next, I'll send the request and check that I received a 201 created status code. I could create a new request, but I'm going to reuse this one for the next part of the challenge. I'll change the HTTP verb to PATCH, append to the number 24 to the end of the URL, go to the body tab, and change the title property to updated title. I'm going to delete everything else and keep only the title. I'll send the request and make sure I received a status code of 200, okay. And yes, I have. To make sure the petition has been updated, I'll change the HTTP verb to GET again and [[Fetch]] the details of the petition with ID 24. And yes, the title is the updated title. Finally, I'm going to change the HTTP verb to DELETE,
>
> **[2:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=146)** and select the petition with ID 45. I'll press sent and make sure I received a status, 418, I'm a teapot or 204, no content depending on whether we updated our destroy method or not. You could have created a new request for every step of this challenge, or you could just reuse the same one the way I did. Postman saves the history of every request you sent in the history tab. And if you decide to save the request after you've already run it, you can do it from there too. Well done for completing this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Fetch]] (1)
> **Env Vars:** http (3), json (2), api (1), patch (1), url (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), select the (1)
> **Tools:** postman (2)
> **API Endpoints:** get  (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=0)** - [Zuzana] This brings us to the end of the scores. By completing the scores and building the e-petition API, you now have a foundational understanding of what RESTful APIs are and how we can build APIs in [[Laravel]]. This is a great starting point to explore RESTful APIs even further, and to build more complex API solutions. If you enjoyed what you learned I recommend the book "Build APIs You Won't Hate" by Phil Sturgeon as well as various API courses in the [[LinkedIn]] Learning library. Also make sure you stay up to date with Laravel as the framework is being actively developed and improved. That's all from me. You can connect with me on Twitter or you can follow Laravel's , the community for women Laravel developers either on Twitter or on LinkedIn. Thank you for watching and have fun building RESTful APIs in Laravel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Laravel]] (5), [[LinkedIn]] (2)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [zuzana] (1)


## Instructor

- [[Zuzana Kunckova]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-restful-apis-in-laravel-2877241)

## Skills Covered

- REST APIs
- Laravel

## Path Context

### In [[Build Your Laravel Skills]]
← [[Advanced Laravel]] | **3 of 7** | [[Building GraphQL Applications in Laravel]] →

## Appears In

- [[Build Your Laravel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Winter CMS with Laravel]] — Laravel
- [[Essential Statamic for PHP and Laravel Developers]] — Laravel
- [[Essential Jigsaw for PHP and Laravel Developers]] — Laravel
- [[Building GraphQL Applications in Laravel]] — Laravel
- [[Advanced Laravel]] — Laravel

---

[↑ Back to top](#)