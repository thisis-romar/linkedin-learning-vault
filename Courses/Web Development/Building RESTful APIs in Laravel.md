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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20RESTful%20APIs%20in%20Laravel.md)

![Building RESTful APIs in Laravel](https://media.licdn.com/dms/image/v2/C4E0DAQHLRm0wBRFc8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616782627205?e=2147483647&amp;v=beta&amp;t=3h1GYISHp7JIPE3zXeqeVBtAs41PRAADUeI2YoA5lNA)

# Building RESTful APIs in Laravel

> APIs serve as a bridge between different applications or systems, allowing us to efficiently share our data with the world. REST, an architectural style that defines how to build APIs, is popular, modern, and lightweight. In this course, discover how to create a RESTful API of your own. Join instructor Zuzana Kunckova as she demonstrates how to build a RESTful API using Laravel, the popular PHP fr

> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490) | 1h 17m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. An Introduction to APIs in Laravel]]** (4 videos)
- **[[#2. Setting Up Our Application]]** (6 videos)
- **[[#3. Building RESTful API]]** (7 videos)
- **[[#4. Testing Our API with Postman]]** (8 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Building RESTful APIs in Laravel
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=0)** - [Zuzana] In today's global world, we are connected like never before.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=4)** But have you ever wondered what is the best way to share your data with the rest of the world?
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=9)** The best way is by using an API.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=12)** Application programming interfaces allow various devices to interact and exchange data using a simple set of commands.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=21)** RESTful API follows the REST architectural style which defines what API looks like.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=27)** I am Zuzana Kunckova, a Laravel developer and the founder of Larabelles, the Laravel community for women.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=34)** As a full-stack developer, I work with APIs and their integration in my work every day, and I'm excited to share my knowledge with you.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=42)** By joining me in this LinkedIn learning course, you will discover the essentials of APIs, why we need them, how we use them in our daily life, and how we can build a simple RESTful API using one of the most popular, if not the most popular PHP framework, Laravel.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=59)** Given the popularity of PHP and Laravel in particular and the importance of RESTful APIs in today's world, learning how to build RESTful APIs in Laravel will provide you with highly sought-after skills that will help you further your career.
>
> **[1:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/building-restful-apis-in-laravel?u=76281980&t=75)** If that sounds exciting, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), php (2), rest (1)
> **CLI Commands:** php (2)
> **Code Keywords:** let (1)
> **Speakers:** - [zuzana] (1)


### 1. An Introduction to APIs in Laravel

> [[#Table of Contents|↑ Back to Table of Contents]]

#### API overview
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=0)** - [Instructor] Application programming interface or API is an interface that provides a way for us to communicate with an object.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=8)** Whether this object is physical like a TV remote control or a software such as clicking a button to play a song.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=15)** An application programming interface is a set of definitions and protocols for apps or services to communicate with each other.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=23)** It acts as a bridge between them.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=25)** It also has the details of how something works.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=28)** We don't need to know the underlying code and logic.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=30)** We just need to know what we have to do, what method we need to call to implement the desired functionality.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=37)** We use APIs to extend the functionality of our application so that we don't have to code everything ourselves.
>
> **[0:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=43)** One of the features of APIs is that they are standardized.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=48)** They follow a common set of guidelines to make sure that they are consistent in their design and implementation.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=55)** There are different sets of standards such as SOAP or GraphQL.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=59)** But in this course we will look into REST.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=62)** REST stands for Representational State Transfer.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=66)** It is a software architectural style used to create web APIs.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=71)** RESTful API is a service that conforms to the REST architecture and 6 guiding constraints.
>
> **[1:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=77)** These constraints are, client-server architecture, statelessness, cacheability, layered system, code on demand and uniform interface.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=89)** I'm not going to go into any further detail about what a RESTful API is in this course.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=94)** But if you wish to learn more, check out additional courses on LinkedIn learning, The most common used case for web APIs is data retriever.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=103)** Larry Klein which could be a service or an application makes the request to the web server of the API provider.
>
> **[1:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=109)** For example Twitter.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=112)** The web server access is the Twitter database and returns the requested data back in a response.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=118)** This might sound very similar to the request response cycle between a standard webpage and a server.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=125)** The major difference is that a webpage request returns HTML, CSS and JavaScript.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=131)** While an API request returns most commonly JSON objects.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=135)** JSON, which stands for JavaScript Object Notation is meant to be passed by a computer program rather than a person.
>
> **[2:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=144)** Now that you have a basic understanding of what a RESTful API is.
>
> **[2:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/api-overview?u=76281980&t=148)** Let's look at examples of APIs views in our everyday lives.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), rest (3), json (2), soap (1), html (1)
> **Definitions:** is a  (3), stands for (2), is an  (1)
> **Code Keywords:** interface (4), let (1)
> **Analogies:** such as (2), for example (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### APIs in the real world
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=0)** - [Instructor] APIs are everywhere.
>
> **[0:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=2)** Whether you realize it or not, our daily lives are informed by APIs.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=7)** In fact, it might be hard to find a major service that does not provide an API.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=12)** Want to check the weather for any location on earth?
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=15)** The data will be received from a third party weather API.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=20)** My Android phone is using the Weather Channel API.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=23)** Other phones or services might use the AccuWeather API.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=29)** APIs can be used for various reasons.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=32)** To access data so that multiple services can work together, you can look up information about recipes, music, public holidays, fitness, and so on.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=42)** You can also use an API to hide complexity, and extend the functionality of your service.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=49)** You may wonder "Why do services provide their API like this?
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=52)** Isn't data money?"
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=54)** One reason may be that the more people use the API, the more well known and popular the service becomes.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=62)** It's good advertising for the company to have a good quality, secure API.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=67)** Another reason may be that the API can expand the reach of the company by making their data available to users, and to enable developers to build products that are reliant on their service, and to keep them coming back.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=80)** Companies may build an API to be able to reuse the same functionality, and not have to reinvent the wheel over and over.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=89)** Some companies release their API for free, while others may make their API as a premiere access so that companies pay to be able to use it.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=99)** All in all, APIs are everywhere.
>
> **[1:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/apis-in-the-real-world?u=76281980&t=102)** In this course, we will learn how to build a service-side API in Laravel.

> [!info]- Semantic Content
>
> **Env Vars:** api (13)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)

#### Our application: ePetitions API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=0)** - [Instructor] It is much easier to learn a new technology or a new concept by building an actual project.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=6)** In this course we will build a service site API for an ePetitions service.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=12)** Let's say that a company wants to display a list of petitions they support, to encourage their users to consider signing them.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=19)** They can add links to the petitions on their website.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=23)** Or, they can use an ePetition API to embed a petition widget on their website, where the users can view the petitions details, author, and the number of signatures.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=35)** They can customize the design of the widget to reflect the design of their website and their brand.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=41)** They could even analyze the petition's signatures over time, and display a graph of how fast a petition has grown.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=49)** We will build a simple version of the petitions API.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=52)** Our petitions will have a title, a category, a description of a cause, an author, and a number of signatures.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=61)** While building this API, we will learn how to seed databases with fake data, and we will learn how to test our code with Postman, a popular, free app for API development.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/our-application-epetitions-api?u=76281980&t=74)** Having completed this course, you will be able to build a simple RESTful API in Laravel, and test the API using Postman.

> [!info]- Semantic Content
>
> **Env Vars:** api (7)
> **Code Identifiers:** epetitions (1), epetition (1)
> **Tools:** postman (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### The basics of Laravel 8
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=0)** - [Narrator] I will assume that you have a fresh Laravel 8 installation ready.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=4)** If you don't, go to the Laravel documentation and follow the instructions there.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=9)** I am using PHP artisan to run my site locally but feel free to use Valet, Homestead MAMP, Laragon or any other local development environment.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=22)** Once you have a brand new Laravel 8 project running locally, we are ready to begin.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=27)** I am using PhpStorm as my IDE.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=30)** IDE stands for Integrated Development Environment which is a software application with all that a developer may need in a single place.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=38)** It comes with a code editor, a debugger, a terminal, various plugins to make development easier, and many other features.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=46)** PhpStorm is one of the most popular PHP IDEs.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=50)** Before we go any further, make sure you have a database ready.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=54)** And as credentials updated in the Dotenv file.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=57)** To view the data in the database, I am using the Beekeeper Studio which is a free open source SQL editor and database manager available for all operating systems, Mac, Windows, and Linux but feel free to send that application such as TablePlus or phpMyAdmin.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=76)** I've created a new database called E petition which is empty for now.
>
> **[1:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=84)** Change the DB database spill to reflect the name of the database you have to create it in your Dotenv file.
>
> **[1:30](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=90)** As of Laravel 8, the Laravel installer will take the name of your project lowercase and snake case it, in case it's made of multiple words and add it as the database name to your Dotenv file which is a lovely new feature.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=105)** If you haven't heard of snake case before, it's basically adding an underscore between two words.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=111)** In this course, we will mainly be using the following directories.
>
> **[1:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=116)** When we create our petitions controller, the file will be generated here.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=121)** When we create our petitions model, it will be saved in the app models directory, which is a new director in Laravel 8.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=129)** In all earlier versions of Laravel, any newly generated model would be generated in the root of the app directory but as of Laravel 8, modules now have their own place.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=139)** You can of course create a custom directory and move your modules there.
>
> **[2:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=144)** The database directory is where we will create our model factory, our migrations and our Cedar to see the database with some data.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=152)** Migrations are like a version control for our database.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=155)** Every time we want to create a database schema, we use a migration.
>
> **[2:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=159)** If we want to amend an existing database table, we create a new migration with the changes instead of overriding the original one.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=166)** This way we have record of all changes done to the database.
>
> **[2:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=171)** Routes is about all route definitions for our application live.
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=174)** In this course, we will not work in the web dot PHP file which provides session state, CSRF protection and cookie encryption, things you need when creating web routes.
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=186)** We will work in the API dot PHP file which is where all stateless restful API routes live.
>
> **[3:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=192)** And the routes placed in this file are part of the API middleware which offers some API specific services such as rate limiting.
>
> **[3:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=201)** We won't do anything in the resources directory during this course.
>
> **[3:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=204)** And the only testing we will do will be done in Postman.
>
> **[3:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=207)** So we won't do any work in the test directory either.
>
> **[3:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-basics-of-laravel-8?u=76281980&t=211)** Now that we have gone over the basic level, a directory structure, we are ready to start building our API.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), php (4), ide (2), mamp (1), sql (1)
> **CLI Commands:** php (4), make (2)
> **Definitions:** is a  (4), stands for (1)
> **Tools:** terminal (1), postman (1)
> **Analogies:** such as (2)
> **Code Identifiers:** phpmyadmin (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** make sure you have (1)


### 2. Setting Up Our Application

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The project infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=0)** - [Instructor] To get started building our RESTful API, let's create everything we will need during this course.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=6)** We will need a model, a migration, a controller, an API resource, a factory, and a seeder.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=13)** The most important part of our e-petitions application is the petition model.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=17)** Each database table has a corresponding model which is used to query the data or add new data to the table.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=25)** We can use php artisans to create our model by running php artisan: make model Petition in the terminal.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=32)** The convention is to use the singular case.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=34)** So petition, not petitions.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=37)** Before we ran the command, we could also create other classes we will need.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=42)** By adding the -mo-- migration flag, php artisan will also create the migration.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=49)** By adding the -f or --factory flag, it will create a factory.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=55)** The -s or --seed flag will create a seeder, and the -c or --controller flag will create a controller.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=66)** Or we could just run -a or --all flag to create everything all at once.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=72)** We will need all of these classes but I don't want to create a controller this way.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=76)** I'll show you why in a minute.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=78)** For now, let's run the command php artisan make: model Petition -mfs.
>
> **[1:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=86)** As you can see, we now have a migration, a factory, and a seeder ready.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=91)** We will come back to these files in the future videos.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=94)** For now, let's go back to the controller.
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=96)** I could have created a controller while I was creating the model but I didn't want to do that because doing it that way would create a standard resource controller.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=104)** And I want to show you how we can create an API controller instead.
>
> **[1:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=109)** API routes don't use the create and edit methods.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=112)** We can create a controller that will automatically exclude these two methods by adding the flag --API to the artisan commands.
>
> **[2:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=120)** And because we will be using Laravel model route binding, let's also add the --model equal petition flag to specify the resource model.
>
> **[2:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=130)** Let's run this command now.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=133)** Yes, we could have just created a resource controller and delete the create and edit methods.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=137)** But I think it's good to know about this --API flag.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=141)** And specifying the resource model will save us some typing later on.
>
> **[2:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=145)** Finally, let's create an API resource class.
>
> **[2:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=148)** API resources are templates where you define how you want the JSON data to be returned back to the user when they send an API request.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=157)** Let's run php artisan make: resource PetitionResource.
>
> **[2:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=161)** This will create API resource for a single petition.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=166)** When we want to return more than one resource, more than one petition, we need to create a resource collection.
>
> **[2:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=173)** We create a resource collection by running php artisan make: resource PetitionCollection.
>
> **[2:59](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=179)** Laravel will recognize that we are asking for a collection to be created, not just a single API resource.
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=186)** As you can see in the first case, a single resource was created successfully, and when we specified resource collection, with the collection and the name, Laravel created resource collection.
>
> **[3:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=199)** We will spend a lot more time working on our controller and our JSON resources later on.
>
> **[3:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/the-project-infrastructure?u=76281980&t=205)** Fantastic, our model, migration, controller, API resource, factory, and seeder have all been created.

> [!info]- Semantic Content
>
> **Env Vars:** api (12), json (2)
> **Code Keywords:** let (7), case. (1), delete (1), finally, (1), class. (1)
> **CLI Commands:** php (6), make (4)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Creating the database structure
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=0)** - [Instructor] Earlier, we created a brand new database and a migration file that will allow us to define how our petitions table will look like.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=9)** Migrations are not just a convenient way to create a database structure, they also serve as a version control, they are a great way to keep track of any changes to the database structure over time and across a team of developers.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=21)** Every time we or anyone on our team creates a new table or makes changes to an existing table, the record of this action will be saved in our database migrations directory.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=32)** Right here.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=34)** As you can see right now, the table is empty, even if I refresh it, nothing's here.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=41)** So let's define the actual columns we will need in the table.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=45)** To do this, we need to check the create petitions table file.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=48)** The one that we created in the previous video.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=51)** This class consists of two methods.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=53)** The up methods and the down method.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=59)** The up method is where we add what columns we want our table to have and what types of data this columns will contain.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=66)** Right here.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=67)** And the down method is used when we are dropping the table.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=70)** We will not be doing anything in this method.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=74)** So in the up method, we need to add the following fields.
>
> **[1:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=77)** We will need the title, the category, the description, the author, and signees.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=83)** The way we add them is by calling the appropriate fields type method on the table.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=91)** So for the title we will call it the string function, for the category we will call the text function, for the description we will also call the text function, for the author we'll called a string function and for the signees we will call the integer function.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=121)** The difference between the text and the string functions, is that the string has a limit of 255 characters whereas the text field can have many more.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=131)** We could make every field except for the title field nullable.
>
> **[2:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=134)** Which means that these fields may be null and not required in the database.
>
> **[2:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=138)** And we would do that by calling the nullable function on each field like this, but for e_petitions application we will have them all required.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=147)** So let's get rid of these nullable calls.
>
> **[2:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=151)** You can check out old available column types and Laravel documentation.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=155)** There are many more than just string, text and integer.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=160)** Let's see what our database looks like before we run the migration.
>
> **[2:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=164)** As you can see, it's empty there are no tables there.
>
> **[2:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=168)** Now let's run the migration by calling php artisan migrate in the terminal.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=175)** Here as you can see, Laravel is telling us that migration table was created successfully which is this one, the petitions table, and all the other tables they already came with Laravel by default, such as the create users table, create passports resets table and create failed jobs table have all been migrated successfully as well.
>
> **[3:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=194)** Now let's check the database itself.
>
> **[3:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=197)** For now its empty and if I refresh it, there are our tables, failed_jobs, migrations password_resets, our petitions table, and the users table.
>
> **[3:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=206)** The petitions table is the one that we created.
>
> **[3:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=209)** In the structure you can see that it has the id.
>
> **[3:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=211)** And if I show you the file itself that is the table id column, it has a title column, varchar stands for string, It has the category table, which is a text like we defined.
>
> **[3:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=226)** It has the description table, which is also a text.
>
> **[3:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=230)** It has the author table varchar, which stands for string, and it has has the integer table for signees.
>
> **[3:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=238)** It also has two timestamps.
>
> **[4:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=240)** These timestamps function is what creates the created_at and updated_at columns.
>
> **[4:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=246)** Now, what if we decided to modify an existing table?
>
> **[4:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=249)** Maybe change the category column from text to string?
>
> **[4:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=252)** For this, we must require the doctrine dbal library.
>
> **[4:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=255)** Because this library is used to determine the current state of the column and create the required SQL query to modify it as per our instructions.
>
> **[4:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=263)** But it doesn't come at Laravel by default.
>
> **[4:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=267)** To install this library, let's run composer require doctrine dbal in the terminal.
>
> **[4:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=275)** Fantastic.
>
> **[4:36](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=276)** Once we have this installed, we can create another migration call it something like change_category_type.
>
> **[4:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=282)** To tell Laravel which table we are changing, we need to add a dash dash table flag and specify the table name.
>
> **[4:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=290)** But there's another way to do this.
>
> **[4:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=291)** We can call our migration something like change_category_type_in_petitions and Laravel will recognize that we are changing the petitions table which is a really nice feature.
>
> **[5:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=305)** And even though either way will work, I find it more useful to have the table name in the file name so that I can quickly tell which migration modifies which database table.
>
> **[5:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=315)** So let's run this command.
>
> **[5:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=318)** As you can see, the migration has been created.
>
> **[5:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=321)** Let's have a look in the migrations file.
>
> **[5:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=324)** There it is.
>
> **[5:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=325)** And up here, it says that we are changing the table petitions.
>
> **[5:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=329)** So Laravel has prepared everything for us.
>
> **[5:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=332)** Now we add the column that we are modifying to the up method, together with the new column type and call the change method on the column like this.
>
> **[5:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=340)** So instead of text, we now want the column to be a string.
>
> **[5:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=344)** Now in the brackets we define which column we are talking about.
>
> **[5:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=349)** Which is category.
>
> **[5:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=350)** And now we need to call the change method.
>
> **[5:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=353)** Let's run php artisan migrate.
>
> **[6:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=360)** As you can see, Laravel has migrated the migration.
>
> **[6:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=365)** For now it's text.
>
> **[6:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=366)** That's what it was before.
>
> **[6:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=367)** And if I refresh it now says varchar, which stands for string.
>
> **[6:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=373)** Similarly, we could rename a column or drop a column or drop the timestamps.
>
> **[6:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=377)** Just refer to Laravel documentation for more details.
>
> **[6:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=380)** And for every of these changes, use a new migration.
>
> **[6:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=383)** This way, every migration file will be a record of the change we are making.
>
> **[6:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-the-database-structure?u=76281980&t=389)** And here we have it, our database and the petitions table in particular have been created.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (7), this, (3), require (2), this. (2)
> **Code Identifiers:** e_petitions (1), failed_jobs (1), password_resets (1), created_at (1), updated_at (1)
> **Definitions:** stands for (3), is a  (2), means that (1)
> **CLI Commands:** php (2), make (1), composer (1), find (1)
> **Tools:** terminal (2)
> **Env Vars:** sql (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)

#### Creating a model factory and seeder
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=0)** - [Instructor] To test our API, we will need data.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=3)** Yes, we could add it manually to the database but that would be too time consuming and simply annoying.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=9)** Instead, we can use model factories and database seeders to do this work for us.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=14)** Database seeding is the initial process of adding data to the database.
>
> **[0:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=18)** We can use the already created database seeder class and use the DB Facade to insert the data into the petition stable like so.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=27)** So we would use the DB Facade, call the tables static class on the petitions table, and call the insert function, which accepts an array of data.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=40)** This array of data is the array of fields we want in our database.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=44)** So in our case, the title fields which would be a random string, about 10 characters long, then we need the category field which will also be string, random, about 30 characters long.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=63)** And then we would need the description and so on.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=67)** But as you can see, this is quite time-consuming and we can only create one database record at a time.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=74)** So imagine doing this for 100 records.
>
> **[1:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=77)** Luckily there is a better way.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=79)** We can use model factories.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=81)** In fact, you can see that the database seeder already hints that you can use a factory there.
>
> **[1:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=86)** In this case it's telling us you could use the user factory to create 10 records.
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=92)** Model factor is a class that allows us to generate a large amounts of data we want to insert into our database.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=99)** We have already created the factory class in the previous video.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=103)** But for now it's empty.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=106)** Let's define the data we want to insert into our database inside the definition methods.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=111)** We will be using an instance of the PHB faker library which is a library used to generate fake data.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=117)** And which comes bundled with every Lavarel 8 installation.
>
> **[2:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=122)** We'll add some fake data to every column of our petitions stable.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=125)** So let's create the title column.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=128)** And it will be this faker.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=132)** And now we are asking faker to create a word for us.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=137)** For the category, we will run this faker again.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=143)** And in this case we will ask faker to give us a text which is 50 characters long.
>
> **[2:30](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=150)** For the description, we will run this faker and ask faker for text again but this time a longer one, let's say 200 characters long.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=163)** For the author, we will run this faker and ask faker to give us a name instead of a random word.
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=174)** And for the signees, we will run this faker, and we will choose a number between, which is a lovely function.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=184)** So we'll choose number between let's say zero and 1,000,000 signees.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=191)** Fantastic.
>
> **[3:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=193)** You can check out faker's documentation for more properties.
>
> **[3:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=197)** Once we had the factory ready, we need to add it to the seeder to be run when we call the seeder.
>
> **[3:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=201)** There are two ways to run a seeder.
>
> **[3:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=204)** We could call a petition factory from the database seeder file, like this.
>
> **[3:30](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=210)** First of all, let's get rid of this code, we don't need this anymore.
>
> **[3:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=215)** And in here we need to call petition, factory, and we want to create let's say 50 records and then call the create function.
>
> **[3:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=227)** Don't forget to import the petition class to the top of the file, there you go.
>
> **[3:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=233)** And now let's go call the php artisan db command from the terminal.
>
> **[4:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=240)** As you can see, database seeding was completed successfully and let's check out database.
>
> **[4:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=246)** For now it's empty.
>
> **[4:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=247)** But if I refresh, here we go.
>
> **[4:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=250)** We've got 50 records.
>
> **[4:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=253)** The other way to populate a table is by using the petition seeder class we created in a previous video.
>
> **[4:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=259)** Let me show you how.
>
> **[4:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=260)** In here we would call a petition, factory, stuffing methods.
>
> **[4:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=267)** Call the times function where we define how many times you want the factory to run.
>
> **[4:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=273)** So let's say 50 again.
>
> **[4:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=274)** And then call the create function.
>
> **[4:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=278)** Let's not forget to import a petition class again, okay.
>
> **[4:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=283)** If we run a seeder this way, we will need to specify which seeder we are running in the PHP artisan commands.
>
> **[4:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=290)** We do that by calling the --class flag and then saying the name of the seeder.
>
> **[4:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=295)** So petition, seeder.
>
> **[4:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=298)** Before we do that, let's delete the data from the database first.
>
> **[5:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=302)** To do that, we will open a new query and run drop table petitions.
>
> **[5:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=306)** This will drop the table.
>
> **[5:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=310)** Now, if I refresh the database, the table is gone.
>
> **[5:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=316)** Now let's run the command.
>
> **[5:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=318)** Database seeding completed successfully.
>
> **[5:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=320)** And if you refresh the database again, we've got a new set of data.
>
> **[5:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=324)** Fantastic.
>
> **[5:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=326)** As you can see both ways work just fine.
>
> **[5:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=328)** It depends on how you want to seed your database.
>
> **[5:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=331)** While running db seed in the terminal seems simpler, with big applications, you might want to run seeders individually instead of all at once.
>
> **[5:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/creating-a-model-factory-and-seeder?u=76281980&t=339)** And this is where having individual seeders come in handy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (5), static (1), case, (1), this. (1)
> **Definitions:** is a  (4)
> **Env Vars:** api (1), phb (1), php (1)
> **CLI Commands:** php (2)
> **Cross-References:** previous video (2)
> **Tools:** terminal (2)
> **Analogies:** imagine (1)
> **Best Practices:** don't forget (1)

#### Setting up the RESTful API routes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=0)** - [Instructor] As I mentioned earlier in the course, when creating API route, we work in the api.php file.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=8)** Within this file, the api URL prefix is automatically applied to the URL.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=13)** The URL will be different depending on what local development environment you are using.
>
> **[0:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=18)** And if you want to, you can even change this prefix from api to anything else in the RouteServiceProvider class.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=25)** You can find the prefix in the public function boot and you can change it here.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=32)** In the api.php file, we have two options for how to create the routes.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=37)** We can list each individual route and map it to the control actions like this.
>
> **[0:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=43)** Routes::get, so we are getting data from the petitions URL which is associated with the PetitionController class and specifically the index action.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=61)** Let's not forget to import a PetitionController at the top of the file.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=67)** To store a new petition, you would use the Route::post method to the petition's URL which is associated with the PetitionController class, specifically with the store method.
>
> **[1:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=84)** And we could do this for all actions in the petition's controller, but however, there is a faster way to do this.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=91)** Instead of doing each route one by one, we can use the Route::apiResource method, which, again, goes to the petition's URL and is associated with the PetitionController class.
>
> **[1:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=109)** The apiResource method will map all of the actions in the PetitionController with all the HTTP verbs in one line of code, which is amazing.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=121)** There may be a time where the controller only has some actions, such as the index or the show action.
>
> **[2:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=127)** In this case, we can use the Route::resource method to instruct Laravel that we only need specific routes.
>
> **[2:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=134)** We would say Route::resource, then send it to the petitions endpoint associated with the PetitionController, and then we chain the only method that accepts an array of control actions we want to create.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=147)** In our case, the index and the store method.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=152)** In our case, we need all actions.
>
> **[2:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=154)** So let's reroute code back and use the apiResource instead.
>
> **[2:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=159)** To see that this worked, we can run the php artisan route:list in the terminal to check that all routes have been created.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=166)** And, as you can see, yes they have.
>
> **[2:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=169)** Every action has been assigned a correct HTTP method and an endpoint.
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=174)** Endpoint is where the API sends the request.
>
> **[2:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=177)** If you look at these URIs, they all follow the same conventions and they only differ in the method they use and at the end of the endpoint.
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=186)** So this index action, it's URI is /petitions and it uses the GET HTTP method.
>
> **[3:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=195)** We can also send the POST method to the same URI, but this is associated with the store action.
>
> **[3:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=202)** Then if we want to display a specific petition, we need to specify the petition ID and we use to GET method, and this is all associated with the show action in the controller, and so on.
>
> **[3:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=214)** An endpoint is what allows you to customize the request to achieve a specific result or to retrieve specific data.
>
> **[3:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=220)** Each feature of an API needs its own endpoints.
>
> **[3:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=224)** Let's have a look at some of Spotify's API endpoints.
>
> **[3:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=228)** Every API has a base URL to which the various endpoints are added.
>
> **[3:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=233)** Spotify's base URL is [https://api](https://api) .[spotify.com/v1](https://spotify.com/v1).
>
> **[4:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=244)** If you send a GET request to /albums, you will receive JSON response with all albums.
>
> **[4:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=251)** If you send a GET request to /albums/id of an album, you will receive a response with the details of a specific album.
>
> **[4:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=261)** And if you send a GET request to /artists/id of a specific artist, /albums, you will receive a response with a specific artist's albums.
>
> **[4:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/setting-up-the-restful-api-routes?u=76281980&t=274)** Now that we have created a model, the controller, the API resource, the migration, the seed, and the API routes, it's time to implement the controller methods.

> [!info]- Semantic Content
>
> **Env Vars:** url (8), api (7), http (3), uri (2), post (1)
> **Code Keywords:** let (3), case, (3), class. (2), this. (2), public (1)
> **API Endpoints:** get  (5), post  (1)
> **CLI Commands:** php (3), find (1)
> **Code Identifiers:** apiresource (3)
> **File Paths:** api.php (2)
> **URLs:** [https://api](https://api) (1), [spotify.com](https://spotify.com) (1)
> **Cross-References:** earlier in (1)

#### Challenge: Creating an author resource infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=0)** - [Instructor] Welcome to our first challenge.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=7)** Let's practice what we have learned so far.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=9)** In this challenge, I'm going to ask you to create a brand new resource for an author, because as a part of our e-petitions API we might want to allow our users to display all petitions created by one author.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=21)** I'd like you to create an author model, a controller, routes, API resource, migration, factory and a seeder using PHP artisan.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=32)** Don't worry about making all these classes work yet.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=34)** Just create them for now.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=36)** Limit the author controller to only display all authors and an individual author.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=41)** We will not let our users to create, update, or delete authors.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=45)** So go ahead and give it a go.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=48)** If you can't remember how to do something revisit the previous videos or watch my solution video next.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-creating-an-author-resource-infrastructure?u=76281980&t=54)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1)
> **Env Vars:** api (2), php (1)
> **CLI Commands:** php (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Creating an author resource infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=0)** - [Instructor] Hopefully you were able to solve the challenge, but if not, don't worry, let's do it together now.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=10)** We can create the Author model, migration factory, and seeder by using a single php artisan command.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=17)** In our terminal, let's type php artisan make:model: Author, -m for migration, f for factory, s for seeder.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=28)** Next, let's create an API controller and set Laravel route model binding on it.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=34)** In the terminal, let's type php artisan make:controller AuthorController, and because we want this to be an API controller, we add the --api flag, and to set Laravel's route model binding on it, we do --model=Author.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=55)** Enter. Fantastic.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=57)** Now, let's create API resource for Author too.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=60)** And while we add it, let's create the resource collection.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=63)** In the terminal, we will type php artisan make:resource AuthorResource.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=71)** And php artisan make:resource AuthorCollection.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=80)** Fantastic.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=81)** Now let's open our api.php file and use the Route::resource method to map the route to the AuthorController.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=89)** We will type Route::resource, the name is authors, let's add the AuthorController class, and then let's chain the only method which accepts an array of actions that we want to create.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=105)** In our case, we want to create the index and the show action.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=112)** Let's remember to import the AuthorController at the top of the file as well.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=117)** Okay.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=117)** Finally, let's open the AuthorController class and delete everything except for the index and show method.
>
> **[2:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=124)** We'll go to the app, Http, Controllers, AuthorController, and let's have a look.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=132)** We will need index method so we'll leave this as it is.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=135)** We won't need the store method so we can delete this one.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=141)** We will need the show method, but we won't need the update method and we won't need the destroy method either so let's delete that as well.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=152)** And that's it. The Author resource has been set up.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-creating-an-author-resource-infrastructure?u=76281980&t=155)** Well done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), delete (3), class, (1), case, (1), finally, (1)
> **CLI Commands:** php (6), make (4)
> **Env Vars:** api (3)
> **Tools:** terminal (3)
> **UI Navigation:** open the (1), go to (1)
> **File Paths:** api.php (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)


### 3. Building RESTful API

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using API resources to display all petitions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=0)** - [Instructor] Let's work on a petition controller now.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=3)** Open the PetitionController PHP file and let's see the index method.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=8)** If we were building a web application, not an API, we would probably do something like this in our index methods.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=15)** We would fetch all the petitions from the database and save it in the petition variable, and then pass them onto the view.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=32)** However, when building an API, we don't pass data to the front end, we return JSON instead.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=39)** And Laravel offers a very convenient way to structure the JSON data called API resources.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=45)** API resources are templates that define the structure of JSON data returned in the response.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=52)** They allow us to transform the data we send to the user.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=55)** For example, we can hide some fields or add a computed field.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=60)** When the user requests a petition, we get the data from the database, pass it through this template that we defined in the PetitionResource.php file, and this is what's going to be returned to the user.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=74)** When a resource is created, it comes with a toArray method.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=78)** This method has access to the whole request object which means we can customize and transform what will be returned by modifying the return statement.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=87)** If we leave it as it is, all model attributes will be returned.
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=92)** However, let's say we only want to return the id, title, and the author.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=97)** We would define these field like this, omitting the other attributes.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=103)** In the written statement, we will define the id is $this->id, the title will be $this->title, and the author will be $this->author.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=121)** When we are returning a list of resources, such as in the index method, we need to extend a collection resource instead.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=129)** This has access to the already transformed data in the PetitionResource.php file and returns a collection.
>
> **[2:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=136)** We will modify the return statement again and wrap the Collection in a data object.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=143)** Data will be $this->collection.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=147)** Now that we have prepared a API resource template, let's go back to our index method where we will list all resources, or in our case, petitions.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=157)** Instead of returning the view, we can take our petitions, which have been saved in the petitions variable, pass them to the PetitionResource and call the collection method on the resource.
>
> **[2:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=169)** Make sure you have imported a petition model and a PetitionResource at the top of the file.
>
> **[2:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=177)** We can also remove the petitions variable and pass the petitions directly into the PetitionResource.
>
> **[3:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=188)** In a standard web response, we would return a HTTP response which is what PhpStorm is expecting.
>
> **[3:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=195)** We can change this DocBook return value to return anonymous resource collection instead.
>
> **[3:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=203)** There are two ways to return a collection by calling the collection method under resource like we are doing right now, or by returning and new collection.
>
> **[3:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=218)** Let's reset a new collection and view the output in the browser.
>
> **[3:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=222)** If you are using PHP artisan serve, make sure it's running.
>
> **[3:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=226)** Otherwise you won't be able to display the data in the browser.
>
> **[3:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=230)** The URL is my local host/API/petitions as we define in the API.php file.
>
> **[4:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=244)** As you can see, we have all 50 petitions that we created in the previous video.
>
> **[4:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=251)** Notice that we are only seeing the ID, title and author like we defined in the PetitionsResource.php file and the JSON is wrapped in the data object which is really convenient.
>
> **[4:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=263)** The reason for this is that sometimes we want to return other pieces of information along with the data such as some custom headers your API version and so on.
>
> **[4:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=274)** You can attach these extra pieces of data inside a two array method on the petition collection like this.
>
> **[4:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=281)** Let's go back to the PetitionCollection file and let's add for example, version, which could be 0.1.1
>
> **[4:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=294)** and the author, which will be me.
>
> **[5:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=301)** If I go back to the browser and refresh scroll all the way down and here's the version and the author.
>
> **[5:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=309)** This data will now be sent with every API response.
>
> **[5:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=313)** However, if we restart our collection by calling the collection method on the petition of resource it will not return any additional metadata.
>
> **[5:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=322)** Let me show you, let's go back to our index method in the petition controller.
>
> **[5:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=327)** And instead of returning PetitionCollection we will return PetitionResource and call the collection method on it.
>
> **[5:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=335)** Let me save the file, go back to the browser and refresh.
>
> **[5:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=339)** If I scroll all the way down, you can see that the metadata is no longer there.
>
> **[5:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=345)** So keep this in mind when returning collection this way, as for this course, I'll stick to returning and new collection.
>
> **[5:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=351)** So let's revert our code back to what it was.
>
> **[5:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=357)** Now that you know about a differences between these two approaches?
>
> **[6:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/using-api-resources-to-display-all-petitions?u=76281980&t=360)** You can choose to return your collection in any way that works for you and your project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (5), this, (1), case, (1), this. (1)
> **Env Vars:** api (9), json (4), php (2), http (1), url (1)
> **CLI Commands:** php (6), make (2)
> **Cross-References:** go back to (4), previous video (1)
> **File Paths:** petitionresource.php (2), api.php (1), petitionsresource.php (1)
> **Analogies:** for example (2), such as (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** toarray (1)

#### Saving a new petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=0)** - [Instructor] Let's create a new petition.
>
> **[0:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=2)** In our PetitionControl.php file, we need to work inside a store method.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=11)** To create a new petition, we create a new petition variable, use the create method on the petition model, and pass in the fields that we want from the request object.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=23)** In our case, we want to pass in the title, description, category, author, and signees.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=32)** Next, let's reset a new petition resource and pass into petition variable.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=40)** To stop PHP storm complaining, let's also change the return value from response to petition.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=47)** However, before we can actually save a new petition in the database, there is one more data protection action we have to do.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=56)** All Laravel Eloquent models are protected against the mass assignment vulnerabilities by default.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=63)** And by using the create methods, we are sending an array of data to our database.
>
> **[1:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=68)** This array could potentially include some malicious content which is why we need to specify which fields can or cannot be mass assigned on every model.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=78)** Every time the create method is used, it checks for mass assignment.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=82)** Let's open our petition model.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=85)** There are two ways to deal with mass assignment.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=88)** We can either send the fillable property or the guarded property.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=95)** The fillable property is the list of fields that we can allow mass assignment on.
>
> **[1:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=100)** While the guarded property is the list of fields that cannot be mass assigned.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=105)** You need to do one, but not both.
>
> **[1:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=107)** In general, you may want to use the fillable property when you have a small number of fields you want to allow mass assignment on.
>
> **[1:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=114)** And the guarded property when you have a large number of fields and you only want to exclude some of them.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=121)** In our case, we only have a small number of properties we want to allow mass assignment on.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=126)** So I'll use the fillable property.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=135)** Just one more thing to note, the fillable property expects an array.
>
> **[2:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/saving-a-new-petition?u=76281980&t=140)** So even if you only have a single field, you still need to put it in an array.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (3), case, (2), protected (1), default. (1)
> **CLI Commands:** php (2)
> **File Paths:** petitioncontrol.php (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### Displaying a specific petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=0)** - [Instructor] Earlier, when we were setting up our projects infrastructure, we used the dash dash model flag when creating our controller.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=8)** What we did was enabled Lavarel model route binding which is just a convenient way to inject the model instance into our routes.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=19)** If we didn't use the dash dash model we would have an ID as the show method parameter.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=27)** But since we specified the resource model when we created a controller we now have a petition which gives us an access to the entire model, our show method, will return a petition resource, based on the specific petition it works very similarly to the index method except we're returning a single petition resource.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=49)** So let's return a new petition resource and pass in the petition.
>
> **[0:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=58)** Again, to stop our ID from complaining let's also change the doc block.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=66)** Let's go to the browser and fetch details of petition ID number five, before we do that.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=72)** Again, let's remember to make sure that PHP artisan surf is running.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=78)** This is our home page.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=79)** We need to go to /API /Petitions /5 and decide to details of petition, with ID number five the petition is returned according to what we defined in the petition resource.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=95)** So let's go back to the petition resource the PHP file and add all model attributes back.
>
> **[1:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=102)** We want to return the ID, the title.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=105)** We also want to return the description
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=113)** we wants to return the category.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=118)** We want to return the author and even to return the signees.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=125)** Using API resource means that not only we can define which fields we want to return to the user we can also transform the fields or add computed fields.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=135)** A very simple example would be to uppercase the field title by calling the ucwords methods on the title.
>
> **[2:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=144)** Let's see the browser output again.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=147)** This is what it looks like before I refresh the browser window.
>
> **[2:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=151)** And once I do, this is what it looks like now.
>
> **[2:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=154)** So we can see all model attributes are returned back and the title has been upper cased.
>
> **[2:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=161)** Fantastic.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=163)** API resources are a very powerful way to transform the data.
>
> **[2:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/displaying-a-specific-petition?u=76281980&t=167)** And I encourage you to check out the Laravel documentation for more examples.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (1)
> **Env Vars:** api (3), php (2)
> **CLI Commands:** php (2), make (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Updating an existing petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=0)** - [Instructor] Updating an existing petition will be very similar to creating a new one.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=5)** But instead of using post HTTP method, we will be using either PUT or PATCH.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=10)** PUT and PATCH are very similar in what they do.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=14)** Both methods update an existing resource but PUT replaces the entire resource while PATCH applies only partial update to the resource.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=24)** When using the PUT method, you need to send the entire resource.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=28)** And if the resource doesn't already exist, it will be created.
>
> **[0:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=31)** In this way, PUT works similar to post.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=35)** As for PATCH you only need to send the data that you are updating, not the whole resource.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=41)** Laravel will accept either a PUT or a PATCH method when our user wants to update a resource.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=47)** Let's complete our update method now.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=52)** Let's open our petition controller.
>
> **[0:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=58)** We need to call the update method on the petition.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=60)** Paste in the fields we want to update from the request, and then return a new petition resource.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=66)** So we'll do petition update.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=70)** We will will paste the request, and call the only function on the request, which accepts an array of fields.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=78)** In our case, we want all the fields to be updatable.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=82)** So we'll paste in title, description, category, author, and signees.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=91)** We will then return a new petition resource and paste in the updated petition.
>
> **[1:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=98)** If we compared update method to the store method, we consider that very similar.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=104)** The only difference is that in the store method we are going to create method on the petition model itself.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=111)** While in the update method, we are calling update method on the specific petition.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=118)** That is one more thing to note.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=119)** Before you allow a user to update the resource you should add some checks so that the user can only update a resource they created, not just any resource, because we are not implementing any authentication this project.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/updating-an-existing-petition?u=76281980&t=133)** We won't be doing that, but it's definitely something you need to keep in mind.

> [!info]- Semantic Content
>
> **Env Vars:** put (6), patch (5), http (1)
> **API Endpoints:** put  (6), patch  (4)
> **Code Keywords:** let (2), function (1), case, (1)
> **Analogies:** similar to (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Deleting a petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=0)** - [Instructor] We are almost done with our petition control methods.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=3)** The last method we need to implement is the destroy method.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=7)** The destroy method will delete a single resource.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=10)** Similarly to the update methods, when you implement authentication in your API you will need to check if the user is authenticated and authorized to delete a resource.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=21)** But since we are not doing any authentication in this course let me just show you how you would simply delete a petition.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=27)** Let's open our petition control file and scroll down to the destroy methods.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=38)** We will take this petition and call the delete method on it and that's it, very easy.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=46)** Next we have to return a JSON response.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=49)** In the JSON response, the first parameter will be null.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=52)** And the second parameter will be the status code in our case 204, no content.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=69)** The reason we are returning null as the first parameter is because we are not returning anything in the body of the response as for the status code, the most commonly the returned code when a resource is deleted, is 204, no content.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=83)** In fact, you could be more explicit with what status code will be returned in the other methods, too.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=89)** You could wrap the petition resource or petition collection inside the JSON response and specify in HTTP response code.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=97)** Let's do that in the index method.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=104)** Instead of returning to new petition collection we will return a JSON response with the petition collection passed in as the first parameter and the status code as the second parameter in this case 200 HTTP_OK.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=135)** Even better way would be to use the illuminate HTTP response class to return appropriate HTTP response.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=143)** I'm going to replace the status code with a response::HTTP_OK
>
> **[2:36](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=156)** I will put my cursor back on the response and import the class.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=163)** Make sure to import a correct response class the Illuminate HTTP one, because as you can see there are quite a few of them.
>
> **[2:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=172)** Now that we have imported it at the top of the file.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=175)** If I delete the HTTP_OK and start typing PhpStorm, offer all of the other codes and not just the numbers, but the names too
>
> **[3:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=192)** Using the response class instead of the actual status code is better for readability and for testing, knowing that the response will be OK, or in the case of the destroy method, HTTP no content is more descriptive than having a number 200 or 204 there, especially since not everyone is familiar with all status codes but you can do it either way.
>
> **[3:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=215)** Let me use the response cast on the destroyer method too.
>
> **[3:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=218)** I'm going to delete the 204 code and type response:: And now we can see the 204 status code stands for no content.
>
> **[3:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=236)** And here we have it.
>
> **[3:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=238)** We have just created very simple, but functioning restful API in Laravel.
>
> **[4:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=243)** You might want to say this API and add pagination, sorting, authentication better data validation, or rate limiting.
>
> **[4:11](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=251)** These concepts are too advanced for this course but what we have right here is enough to get you started.
>
> **[4:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=258)** Check out the Laravel official documentation for more info.
>
> **[4:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=261)** You have learned essential building blocks of every restful API.
>
> **[4:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/deleting-a-petition?u=76281980&t=266)** Well done.

> [!info]- Semantic Content
>
> **Env Vars:** http (5), api (4), json (4), http_ok (3)
> **Code Keywords:** delete (6), let (4), class. (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** stands for (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Building the author resource
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=0)** - [Instructor] In the previous challenge, I asked you to create the various author files.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=9)** In this challenge, I'd like you to fill the authors database table with the name string fields, migrate the database, add the name fields to the fillable array on the author model, create author factory, and seed database with 10 different authors using the fakest name property.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=29)** Once you do this, return the author collection in the index method of the author controller, add an author resource in the show method of the author controller.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=39)** Before we continue, as you can probably tell, there is one too many relationship between a petition and an author.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=46)** A petition has one author but an author can have many petitions.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=51)** We will not implement any relationships in this course.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=54)** So for the purpose of this challenge assume that author is an independent resource.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=60)** Have a go.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-building-the-author-resource?u=76281980&t=61)** And if you find yourself unsure how to continue, review the videos in this chapter or check out the solution video next.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), this, (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Building the author resource
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=0)** - [Teacher] Let's see how we can create author resource.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=8)** First of all, let's add a name column to the author's table.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=14)** Now we need to migrate the database.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=16)** Let's run php artisan migrate in our terminal.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=21)** Next, let's add a name field to the fillable array on the author model, otherwise seeding our database will fail.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=33)** Now let's open the author factory class, and return name as an instance of the faker name property.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=40)** Let's go to the AuthorSeeder class and create 10 authors.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=53)** Let's import the author model at the top of the file.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=57)** Finally, let's seed the author's table with some fake data.
>
> **[1:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=65)** Now that we have our data ready, let's return an author collection on the index method of the AuthorController.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=79)** Make sure you import AuthorCollection at the top of the file.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=85)** Let's return a single author resource on the show methods,
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=94)** and again, import AuthorResource at the top of the file.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=99)** You could have also wrote the AuthorCollection and the AuthorResource inside a JSON response, and specified the HTTP status code, but either way is fine, and that's it.
>
> **[1:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=110)** We can check our author's endpoint in the browser to see that we get all 10 authors, and any individual authors we might want.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=117)** Let's run php artisan serve in our terminal.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=121)** I'm going to click on this link, go to /API/authors, and here we have all 10 authors, and if I wanted to see the details of the authors with ID number five I'm just going to do /5, and here it is.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-building-the-author-resource?u=76281980&t=141)** Fantastic, well done everyone.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), class, (1), finally, (1)
> **UI Navigation:** go to (2), open the (1), click on (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** json (1), http (1), api (1)
> **Tools:** terminal (2)
> **Speakers:** - [teacher] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Testing Our API with Postman

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Installing Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=0)** - [Instructor] We need to test our API to make sure Endpoints are working and returning the data we expect.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=6)** So far, we have been checking the data in the browser but we cannot easily create or delete a resource through the browser which is why we need a different tool.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=16)** There are many different ways to test an API but in this course, we will be using Postman a free API testing tool.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=24)** With postman we can develop test and document APIs it's the all in one tool one may need when working with APIs.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=32)** Let's create a free account If you don't already have one.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=35)** Just choose a username, add an email and a password and click create account.
>
> **[0:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=43)** You will be asked to share a little bit about yourself to customize the postman experience, but except for the name, everything else is optional.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=53)** You will also be asked to either create a team or continue without a team for our purposes it's fine to continue without a team.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=60)** Once you do that, you will see the browser version of Postman.
>
> **[1:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=65)** To you use the browser version of postman, you will need to install the postman desktop agent as well to avoid browser limitation.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=72)** So, I recommend you download the desktop app instead.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=76)** Postman is available for all Operating Systems Mac, windows, and Linux.
>
> **[1:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=84)** Once you download the Postman app, open it up.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=88)** As you open the app, you will probably see a prompt to open launch path or have launch path already open.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=94)** The launch path displays quick links to all features you may want to use.
>
> **[1:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=98)** It is linked to 'create a request', 'create a collection', 'create an environment', 'create an API', links to Postman documentation', 'recent workspaces' and more.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=113)** Let's see how we can create a simple request.
>
> **[1:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=116)** You could do so from the launch Path, or by clicking on the new button in the top-left corner of the screen.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=123)** If we click on this button, you can see that we can create a new request, collection or environment, and we can also check out the templates tab or the API network tab.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=135)** I encourage you to explore these tabs, but in this course we will only create a new collection and new requests.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=143)** Because Postman saves all requests inside a collection, you either have to suck an already existing collection or create a new one while creating a new request.
>
> **[2:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=153)** Let's create an ePetitions Collection.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=157)** We can write a short description of the collection which is especially useful when working with other people and multiple collections, but I'm going to skip it.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=166)** Our app doesn't have an authorization either nor on a prerequisite script, tests or variables.
>
> **[2:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=172)** However, these options are there for you when you need them.
>
> **[2:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=178)** (mouse clicking) Once you create the collection, you can share it with others run it or view it in the browser.
>
> **[3:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=185)** There is a lot of advanced functionality in Postman that they will not touch upon in this course.
>
> **[3:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=190)** But if you want to learn more about this tool I encourage you to go to Postman official documentation.
>
> **[3:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/installing-postman?u=76281980&t=196)** We are ready to create a new request that will display all petitions.

> [!info]- Semantic Content
>
> **Tools:** postman (12)
> **Code Keywords:** let (3), continue (2), delete (1)
> **Env Vars:** api (5)
> **UI Navigation:** open the (1), click on (1), go to (1)
> **Exercise Files:** download the (2)
> **Prerequisites:** install (1), prerequisite (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** epetitions (1)

#### GET all petitions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=0)** - [Instructor] Let's learn how we can create a new request.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=3)** We can either create it from the launch pad by using the new button or by clicking on these three dots and selecting add request.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=12)** Let's give it a name, GET petitions and save it in the E petitions collection.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=22)** We now have a new empty request.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=24)** The GET method has been selected automatically but as you can see, we have access to all methods.
>
> **[0:31](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=31)** But for now, let's work with GET because we are going to get all petitions from our forward slash API, forward slash petitions endpoint testing the index action on the petitions controller.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=44)** The request URL will be the full URL of our project as we displayed it in the browser.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=49)** But before we send the request, let's make sure we are running PHP artisans server in our terminal.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=57)** I'm going to click on this link which takes me to the project homepage, go to forward slash API, forward slash petitions, to see all petitions in the browser.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=66)** Copy to URL and paste it in the request URL field in Postman.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=72)** If you cannot remember the method or the end point we need to test, run PHP artisan route list in your terminal.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=79)** I'm going to use an additional terminal window so that I can keep PHP artisan server running in this one.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=88)** We need to look at the petitions endpoint not the other one.
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=92)** The method is GET, the URL is API forward slash petitions, and action is the index method of the petition controller.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=104)** Let's go back to Postman and click send.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=108)** If everything works as expected, we will receive a response with all petitions from this API endpoints.
>
> **[1:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=115)** As you can see, the status is 200 okay, which means our request was processed successfully.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=121)** We can also see how long it took to receive the response and what size it is.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=126)** If I hover over the status code, I'll get a pop up with some additional information, which is really useful, especially if we receive an unexpected status code.
>
> **[2:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=136)** We can view the response in different formats, pretty, raw and preview.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=143)** But the pretty one is usually the prettiest.
>
> **[2:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=145)** So let's stick with that.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=147)** If you wanted to visualize the response, Postman has tutorials to tell you how to do it.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=152)** It's a really interesting feature.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-all-petitions?u=76281980&t=155)** Now that we have created this request, let's go to the top by clicking on the X and save changes so that we can come back to it later.

> [!info]- Semantic Content
>
> **Env Vars:** url (5), api (4), php (3)
> **Code Keywords:** let (7)
> **Tools:** terminal (3), postman (3)
> **CLI Commands:** php (3), make (1)
> **API Endpoints:** get  (2), get
 (1)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### POST a new petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=0)** - [Instructor] Let's test the store method to make sure that we can create a new petition.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=4)** Looking at the php artisan route:list output, we can see that the method will be POST, the URI will be api/petitions, and the action is the store method on the petition's controller.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=17)** If everything works, we will be able to create a brand new petition using Postman increasing the total number of petitions from 50 to 51.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=27)** We need to create a new request and I will do that by clicking on the New button.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=32)** I'll call it POST a petition, save it in the ePetitions collection, and I will choose to POST method from the dropdown.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=40)** The request URL is exactly the same as the one we used in our GET petitions request from the last video so I'll just copy it over.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=50)** Sending a POST request is slightly more complicated because we have to create the body of the request ourselves.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=56)** Switch to the Body tab, click raw, and select JSON.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=62)** To make it easier, we can simply copy one of the petitions from the previous GET request, but make sure you include the curly braces and don't have the trailing comma at the end.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=72)** That would break the request.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=73)** Believe me, I've been there many times.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=80)** Let's change the title to Hello and the author to Jane Doe.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=87)** I'm also going to delete the id value because the id will be assigned automatically.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=93)** Let's click Send now.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=99)** We consider the status is 201 Created which is a success status.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=104)** And here in the response window are the details of the petition we just created.
>
> **[1:49](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=109)** Let's go back to the GET petitions request and scroll all the way down to see that we have 50 petitions at the moment.
>
> **[1:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=115)** But as soon as we send the request again, we will receive 51 petitions back.
>
> **[2:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=120)** Our brand new petition will be at the end.
>
> **[2:04](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=124)** Fantastic.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=125)** This means that our store method is working as it should.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/post-a-new-petition?u=76281980&t=128)** Let's close the POST a petition tab by clicking on the X and Save changes.

> [!info]- Semantic Content
>
> **Env Vars:** post (5), uri (1), url (1), json (1)
> **Code Keywords:** let (5), switch (1), delete (1)
> **API Endpoints:** post  (4), get  (3)
> **CLI Commands:** make (3), php (1)
> **UI Navigation:** dropdown (1), switch to (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** epetitions (1)
> **Cross-References:** go back to (1)

#### GET (show) a specific petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=0)** - [Instructor] Let's tests the show method and display a single petition, our newly created petition with ID 51.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=7)** Create a new request, call it a, GET a petition and make sure that the GET method is selected.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=13)** Let's see the route list again to see what our end point is.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=17)** API/petitions/petition is the URI which means we have to add a petition ID at the end of the URL string.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=27)** Let's go back to the first GET request we created to copy the URL again.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=33)** Notice that as we selected, Postman offers us to set it as variable.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=38)** What it means is that instead of copying or typing the whole URL over and over again, we can save it in a shorter and simpler variable.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=47)** In our case, the URL isn't very long and complicated but sometimes you might work with really complex URLs with parameters.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=54)** And in this case, setting it up as a variable might be useful.
>
> **[0:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=58)** Let's do it together just to see how it works.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=61)** Click set as new variable and give it a name.
>
> **[1:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=66)** In our case, I'm going to call it petitions.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=70)** Make sure that the value is correct.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=73)** The value would be the URL you're trying to save as a variable.
>
> **[1:17](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=77)** You will have to select a scope and I'm going to select the global scope so that this variable is available across collections.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=85)** Click set variable now.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=87)** The URL value has now been changed to the name we gave it, petitions, inside double curly braces.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=94)** If you hover over it, you'll get a pop up with the details of this variable.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=99)** Now that we have set it up, we can use this variable for the shared part of the URL.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=104)** Once you start typing it, Postman will suggest possible variables from the ones you might have created, two variables that come with Postman by default.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=112)** Don't forget to add a forward slash after the variable and the ID of our petition, 51.
>
> **[1:58](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=118)** Click send and here we go.
>
> **[2:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=120)** We receive a status code, 200 okay.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=123)** And our response contains the details of a petition with the ID of 51 which means our end point and the store function is working as it should.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=132)** Take a note of what the output looks like.
>
> **[2:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=134)** We can set a data object with a title, category, description, author, and signees.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=142)** Let's go back to PHP storm, and change what the output should look like in the petition resource file.
>
> **[2:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=149)** Let's comment out the author and signees quickly.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=152)** Save the changes, and send a GET request in Postman again.
>
> **[2:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=158)** There you go.
>
> **[2:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=159)** The response has changed accordingly.
>
> **[2:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=161)** We no longer see the author and signees there.
>
> **[2:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=164)** This shows that that our petition JSON resource is working as it should too, well done.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=170)** Before we go, let's change to petition resource back to what it was before.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=175)** Let's send the request again, to make sure that the data is back to what it was.
>
> **[3:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/get-show-a-specific-petition?u=76281980&t=180)** We can now close the GET a petition tab.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (3), default. (1), function (1)
> **Env Vars:** url (7), api (1), uri (1), php (1), json (1)
> **API Endpoints:** get  (5)
> **CLI Commands:** make (3), php (1)
> **Tools:** postman (4)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1)
> **Best Practices:** don't forget (1)

#### PATCH (update) a petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=0)** - [Instructor] Let's test the update method of the petitions controller.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=3)** Create a new request, give it a name, update the petition, and save it in the ePetitions collection.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=9)** By the way, the way I named the request is just a personal preference.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=13)** You can choose your own naming convention.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=16)** When updating a resource, you can choose between the PUT and PATCH HTTP verbs.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=22)** We spoke about a difference between these two earlier in the course.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=25)** But even if you are not sure which one to use, you can look at the route list.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=29)** You can see that Laravel will accept either of them.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=34)** I'm going to choose PATCH.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=37)** The request URL will be the same one as the one we used in saving a new petition.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=42)** We will use the petition variable and add the petition ID at the end.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=46)** Let's update the petition with ID 20.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=50)** Updating a resource is similar to creating a new one in Postman.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=53)** Since we have to create the body of the request ourself.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=57)** Switch to the body tab, click row, and select JSON.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=62)** Let's go to the get a petition request, and request the details of the petition with ID 20.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=72)** I'm going to copy the details of this petition, paste it in our new request, and change the title to "New Title."
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=87)** Again, don't forget to include the curly braces, because there have been many times when I forgot them, and wondered why the request failed.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=95)** I would still get a 200 OK response, because instead of updating the resource, Postman is simply displaying the original data.
>
> **[1:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=102)** Actually, let me show you what I mean.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=104)** Let's remove the curly braces and click send.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=111)** Yes, the status code is still 200 OK, but the title has not changed.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=117)** If we add the curly braces back, and send the request again, it will change.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=129)** This shows that the end point and the update method is working.
>
> **[2:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/patch-update-a-petition?u=76281980&t=136)** Let's close the tabs and save the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), switch (1)
> **Env Vars:** patch (2), put (1), http (1), url (1), json (1)
> **API Endpoints:** put  (1), patch  (1)
> **Tools:** postman (2)
> **UI Navigation:** switch to (1), go to (1)
> **Code Identifiers:** epetitions (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### DELETE a petition
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=0)** - [Instructor] The last method we need to test is the destroy method, which will take a specific resource and delete it.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=7)** Let's create a new request, call it "delete a petition," and select the delete HTTP verb from the drop down.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=14)** We we use the petitions variable and append the ID of the petition we want to delete.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=19)** Let's say, ID number 25.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=22)** Let's click send and see what happens.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=26)** This time, the response we receive contains an empty body, and a status 204 no content.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=34)** This is the status code we define in a destroy method.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=37)** Let's go back to PHP storm, the petition controller, and change it to something else.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=42)** Just to make sure that the status code will change in our response.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=47)** I'm going to use the response class to return the status code.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=51)** A fun code is 418, "I'm a teapot."
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=54)** This response status code is just a joke, and not really implemented in production.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=60)** But it's a fun one to use in this scenario.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=63)** Let's run the request again, and this time let's delete a petition with ID 13.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=69)** And here we have our 418, I'm a teapot status code.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=74)** If you hover over it, the pop up will tell you a little bit more information about where this code came from, and why.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=82)** To make sure this petition has really been deleted, let's reuse our get a petition request, and paste the ID of 13 at the end of the URL string.
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=92)** Let's click send and see what happens.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=95)** The response body we receive back is HTML 404 page.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=99)** And the status code is 404, not found.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=103)** We can also check our database to see that the petition has been deleted, and yes it has.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=108)** There is no petition with ID 13 anymore.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=112)** You now have a good understanding of how to use Postman to test API.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=117)** You can take this further and learn even more about what Postman has to offer to your API development workflow by using the official documentation and tutorials.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/delete-a-petition?u=76281980&t=126)** I'm going to close the tabs now, and save the changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (5), else. (1), from, (1)
> **Env Vars:** api (2), http (1), php (1), url (1), html (1)
> **CLI Commands:** make (2), php (1)
> **Tools:** postman (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Testing APIs with Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=0)** - [Instructor] Welcome to the last challenge of this course.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=8)** In this challenge, I'd like you to use Postman to create a new collection called challenge and create a new petition.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=15)** Let the title be my new petition.
>
> **[0:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=18)** The description b my new petition description.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=22)** The category be nature and you will be the author.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=26)** And let's give it a good headstart with 100 signees.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=30)** Next, I'd like you to edit the title of the petition ID 24 to update its title and check that it has been changed.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=38)** Finally, I'd like you to delete a petition with the ID of 45 and make sure that this petition no longer exists.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=46)** If you are not sure how to do something review the videos from the last chapter, or watch me go through the solutions to this challenge in the next video.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/challenge-testing-apis-with-postman?u=76281980&t=54)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), delete (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Testing APIs with Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=0)** - [Instructor] Welcome to the solutions video of the last challenge of this course.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=9)** In the last video, I asked you to create a resource in Postman and test that you can view, update and delete it.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=16)** Let's get started.
>
> **[0:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=18)** I'm going to create a new request by clicking on the new button.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=21)** I'll call the test and use the create collection link to create a new collection called Challenge.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=29)** You may at first create a collection and then the request.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=32)** Either way is fine.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=33)** Next, I'm going to send a post request to the petitions API which we saved in the variable petitions.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=41)** I would go to the board at top select row and then JSON.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=51)** Inside curly braces, I'll a JSON object with a title, description, category, author, and signees keys and values.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=61)** The title is My New Petition, the description is my new petition description, the category is nature, the author is Susanna, and the signees is 100.
>
> **[1:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=82)** Next, I'll send the request and check that I received a 201 created status code.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=89)** I could create a new request, but I'm going to reuse this one for the next part of the challenge.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=94)** I'll change the HTTP verb to PATCH, append to the number 24 to the end of the URL, go to the body tab, and change the title property to updated title.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=112)** I'm going to delete everything else and keep only the title.
>
> **[1:56](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=116)** I'll send the request and make sure I received a status code of 200, okay.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=125)** And yes, I have.
>
> **[2:07](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=127)** To make sure the petition has been updated, I'll change the HTTP verb to GET again and fetch the details of the petition with ID 24.
>
> **[2:18](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=138)** And yes, the title is the updated title.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=142)** Finally, I'm going to change the HTTP verb to DELETE, and select the petition with ID 45.
>
> **[2:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=152)** I'll press sent and make sure I received a status, 418, I'm a teapot or 204, no content depending on whether we updated our destroy method or not.
>
> **[2:44](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=164)** You could have created a new request for every step of this challenge, or you could just reuse the same one the way I did.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=170)** Postman saves the history of every request you sent in the history tab.
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=174)** And if you decide to save the request after you've already run it, you can do it from there too.
>
> **[3:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/solution-testing-apis-with-postman?u=76281980&t=180)** Well done for completing this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), json (2), api (1), patch (1), url (1)
> **Code Keywords:** delete (3), let (1), finally, (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), select the (1)
> **Tools:** postman (2)
> **API Endpoints:** get  (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Where to go from here
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=0)** - [Zuzana] This brings us to the end of the scores.
>
> **[0:02](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=2)** By completing the scores and building the e-petition API, you now have a foundational understanding of what RESTful APIs are and how we can build APIs in Laravel.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=13)** This is a great starting point to explore RESTful APIs even further, and to build more complex API solutions.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=20)** If you enjoyed what you learned I recommend the book "Build APIs You Won't Hate" by Phil Sturgeon as well as various API courses in the LinkedIn Learning library.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=32)** Also make sure you stay up to date with Laravel as the framework is being actively developed and improved.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=39)** That's all from me.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=40)** You can connect with me on Twitter or you can follow Laravel's , the community for women Laravel developers either on Twitter or on LinkedIn.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-in-laravel-8532490/where-to-go-from-here?u=76281980&t=48)** Thank you for watching and have fun building RESTful APIs in Laravel.

> [!info]- Semantic Content
>
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