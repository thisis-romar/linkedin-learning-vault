---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-practical-database-examples
url: "https://www.linkedin.com/learning/advanced-python-practical-database-examples"
duration_minutes: 108
duration: 1h 48m
level: Advanced
updated: 5/8/2023
learners: 54591
skills:
  - Python (Programming Language)
  - Database Development
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-practical-database-examples-4363655"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGTOqAc5WFE5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683311050722?e=2147483647&amp;v=beta&amp;t=gDIBPsu4C6-ge6rqmOrATTut_YekAZGbkQiCxpWChZg"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Your Python Skills]]'
prev_courses:
  - '[[Python Data Structures- Linked Lists]]'
next_courses:
  - '[[Unit Testing in Python]]'
path_nav: '[{"path":"Master Your Python Skills","position":6,"total":11,"prev":"Python Data Structures- Linked Lists","next":"Unit Testing in Python"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/database-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Practical%20Database%20Examples.md)

![Advanced Python: Practical Database Examples](https://media.licdn.com/dms/image/v2/D560DAQGTOqAc5WFE5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683311050722?e=2147483647&amp;v=beta&amp;t=gDIBPsu4C6-ge6rqmOrATTut_YekAZGbkQiCxpWChZg)

# Advanced Python: Practical Database Examples

> Looking for a hands-on opportunity to take your Python skills to the next level? In this course, instructor Kathryn Hodge takes you through a series of practical database examples to help level up your Python applications.Learn how to create an API that serves data from a database using FastAPI, Flask, MySQL, Postman, SQLAlchemy, endpoints, and more. Get proven tips on how to develop analysis appl

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples) | 1h 48m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Creating an API that Serves Data from a Database with FastAPI]]** (12 videos)
- **[[#3. 2. Developing Analysis Applications with Pandas]]** (8 videos)
- **[[#4. 3. Building a Full-Stack Task List Application with Flask]]** (14 videos)
- **[[#5. Conclusion]]** (1 videos)

### 1. Introduction

#### Use databases to level up your Python applications
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=0)** - [Kathryn] When creating Python programs, you'll likely want to store data in some way.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=5)** Whether that's populating data in an application automatically, or saving data between user sessions, databases help you do this.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=15)** They provide an organized structure so you can easily access, store and manage large amounts of data.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=22)** In this course, we'll create three real-world example projects with integrated databases.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=29)** The first one is a book API that serves data from a database using the FastAPI web framework.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=36)** The second project covers how to work with databases in a data analysis setting with Jupyter notebook, pandas and Matplotlib.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=46)** The last project is a full stack application built on Flask.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=51)** It'll be a web application that helps you keep track of a set of projects and associated tasks.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=57)** Hi, my name is Kathryn Hodge and I'm a software engineer.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=62)** Join me in my LinkedIn Learning course all about working with databases and Python so you can level up your Python applications.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=71)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** this. (1), let (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Tools:** jupyter (1)
> **Speakers:** - [kathryn] (1)


### 2. 1. Creating an API that Serves Data from a Database with FastAPI

#### What is an API?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=0)** - [Instructor] In this chapter, we'll be creating an API that serves data from a database.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=6)** API stands for application programming interface.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=10)** Let's walk through this acronym.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=13)** The interface is the contract with which two separate programs agree upon to communicate.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=20)** Let's say Program A, a mobile app, wants to send data to Program B, a backend service for storage.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=28)** Program A and Program B will agree on a contract or an interface for how that data will be sent and its format.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=36)** Once the interface is agreed upon, developers write code so that the data is sent in the correct format with the correct communication protocol.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=46)** It's used in applications, which is where application comes from in API, so they can communicate and transfer data.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=54)** It's done through programming; hence, application programming interface.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=61)** An example where an API is commonly used is in the case of data retrieval.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=67)** Let's say the mobile app wants to display dynamic data like the weather.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=72)** They'll likely use an API to communicate with a backend service that has access to live weather information in a database.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=81)** There are different types of APIs that use different protocols, but the most popular of these are REST APIs.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=89)** With a REST API, the client, in our case, the mobile app, sends requests to the server.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=96)** The server uses what the client sent to decide what data to return back to the client as a response.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=103)** Now, you might be wondering why can't the mobile app just have all the data we need within it?
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=110)** It could have a weather database, a database with all the account information, and more.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=117)** Well, this would make the mobile app very big.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=120)** It would contain lots of code and it would be hard for several teams to work on at once.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=126)** The mobile app should be focused on delivering information and visuals to the user, not on how to make data retrieval as efficient as possible.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=137)** There might also be another system that wants to use the weather information, too, but it might live outside of the mobile app.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=147)** This is why we often separate components to increase their reusability and decrease the complexity of a single system.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=156)** In fact, we do this a lot with backend services to create microservices that can be reused for many different applications.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), let (3), case, (1)
> **Env Vars:** api (6), rest (2)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### API frameworks in Python
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=0)** - [Narrator] When building an API, there are a few different libraries and frameworks you can use within Python.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=7)** Flask is one option.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=8)** It's a Python-based microframework used by developers to make micro web services.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=14)** We'll be exploring Flask later in this course when we build a full stack application.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=20)** Another option is Django.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=22)** Django is a Python-based REST framework that supports templating, routing, authentication, and management tools by default.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=32)** It also integrates with SQL Lite, Mongo DB, and Dynamo DB.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=37)** There's also Falcon.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=39)** Falcon is a high-performance REST framework focused on quality control.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=44)** It's used to build reliable application backends and easily integrates with no SQL.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=51)** Given all of these, the technology we'll be building our API with is FastAPI.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=58)** FastAPI is a modern, high-performance, web framework for building APIs with Python 3.7 and higher.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=67)** It's easy to use, very fast, and minimizes code duplication.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=72)** It's also fully compatible with open API and JSON's schema.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=77)** There are other API frameworks in Python that I haven't mentioned here, but FastAPI and Flask are the most popular.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=85)** That's why we'll be focusing on them in this course.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), rest (2), sql (2), json (1)
> **CLI Commands:** python (5), make (1), mongo (1)
> **Definitions:** is a  (3)
> **Code Keywords:** default. (1)
> **Versions:** python 3 (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### Set up FastAPI in a Python application
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=0)** - [Kathryn] Let's create a basic web application in Python using FastAPI.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=6)** To start off, we'll create a virtual environment, and we'll call it books.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=13)** This will store all of our projects dependencies.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=16)** Let's cd into it and activate it.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=20)** Now we can install our dependencies.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=24)** To use FastAPI, we have to have the FastAPI dependency.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=29)** We'll also install so we can run our API on a web server.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=34)** Without the web server, we won't be able to run our API.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=38)** Let's create a folder for our Python code.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=42)** We'll call it books-api, and we'll cd into it.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=48)** Inside of this folder, we'll create a file called main.py.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=53)** Let's head over to Sublime.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=57)** Main.py.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=59)** And we're saving it in our books-api folder.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=62)** Let's import FastAPI and create a new application, from fastapi import FastAPI.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=73)** We'll use this to create a new app.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=76)** This initializes our application.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=79)** Going back to rest endpoints, every rest API is based on a contract.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=86)** The client knows what URL or what endpoint to send a request in order to get the information they want back.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=94)** This means in creating our books-api, we'll define a contract that tells our clients what endpoints or what URL will retrieve data, as well as what the client will need to send in order to get that data.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=110)** Before we dive too deep into that, let's create a basic endpoint or route on our API that returns some simple text.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=120)** We'll put this on the home route of our application.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=126)** With this piece of code, we say, when the user makes a get request on the home route, we'll run this function.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=135)** Get is a special type of request that the client makes to retrieve information.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=141)** The home route is always defined as a slash.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=145)** When the client hits the endpoint or sends a request to the home route, we'll return a simple welcome string.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=152)** "Welcome to the books api".
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=155)** Now let's run our application.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=158)** Since it's an API, we'll need to use the tool in order to run it.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=164)** will run a server on our computer and we will act as the client that requests information from the home route.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=173)** Let's return to the main directory of this application, books.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=178)** From here, we'll run our app, books-api.main:app --reload.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=188)** In the output.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=189)** We can see our application running on localhost or 127.0.0.1 on port 8000.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=199)** Let's send a request to this application from the browser.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=203)** We'll access 127.0.0.1 on port 8000, and there's our message, "Welcome to the books api".
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=215)** We can also see the documentation of this API at the docs route or the docs endpoint, so we'll add docs and here's our documentation.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=226)** This comes for free with FastAPI.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=229)** In our application, we allow get requests on the home route.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=234)** When someone requests information, we return a string or text data.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=239)** We've just created a very simple Python API using the FastAPI framework.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (1)
> **Env Vars:** api (7), url (2)
> **CLI Commands:** python (3), cd (2)
> **Documentation:** the docs (2), the documentation (1)
> **File Paths:** main.py (2)
> **Ports:** port 8000 (2)
> **Versions:** 127.0.0 (2)
> **Definitions:** is a  (1), defined as (1)

#### Define a database schema
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=0)** - [Instructor] The purpose of our API is to host book data and allow different clients to access it.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=6)** The book data will live in a database.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=10)** Before we can store it there we need to define the schema for what we will store about a book and how we will store it.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=18)** We'll be using SQLAlchemy to create our schema and access the data in our database.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=24)** Let's install it in its dependency MySQL Connector.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=30)** We'll be doing this in a virtual environment so let's activate it.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=36)** And we'll install MySQL Connector.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=41)** We'll also install SQLAlchemy.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=46)** Perfect.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=50)** Now we can look at some SQLAlchemy code that defines the schema.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=55)** If you're using the exercise files these are located within the books API folder in a file called database.py.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=64)** SQLAlchemy is a module in Python that helps you communicate with your database.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=70)** Instead of writing raw SQL statements you can declare the interactions of your application in the database in a more Pythonic way.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=79)** Let's dive into the code.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=81)** This application connects to a MySQL database.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=85)** That's the engine defined at the top.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=88)** Then it defines some models using the SQLAlchemy ORM.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=92)** Each model represents a table.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=95)** For example, the author model represents a table of authors.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=100)** It has columns for author_id, first name, and last name.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=104)** Another table called books is represented with the book model.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=109)** Each book will have an ID, title and set number of pages.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=113)** The last model is book authors.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=118)** Its columns are id, author_id , and book_id.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=123)** This helps us associate the book data with the author data.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=127)** To learn more about the SQLAlchemy ORM I encourage you to check out my other database course, [[Advanced Python- Working with Databases]].
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=137)** This other course goes deeper into the inner workings of SQL Alchemy.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=142)** While here, we'll briefly touch on it so we can focus on the overall application.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=148)** Now, before we run this Python file we need to create a books database.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=153)** That's what we connect to when we run the engine.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=156)** SQLAlchemy cannot create databases on its own.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=160)** We'll also need to install MySQL.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=162)** A relational database management system or RDVMS that allows us to create our database.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=170)** But this is a good start.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=171)** We know what data we'll be storing and how we'll be storing it.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (4), python (3)
> **Env Vars:** api (2), sql (2), orm (2), rdvms (1)
> **Code Keywords:** let (3), module (1)
> **Prerequisites:** install (4)
> **Code Identifiers:** author_id (2), book_id (1)
> **Definitions:** is a  (2)
> **File Paths:** database.py (1)
> **Exercise Files:** exercise files (1)

#### Create a MySQL database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=0)** - [Instructor] Let's install and configure the tools to create a MySQL database.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=5)** If you don't already have MySQL installed you can download it from this website.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=11)** I already have it installed, so I won't be installing it but this would be the place to go to install it.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=19)** Once it's installed, the path needs to be updated so we can use the MySQL Shell in the command line.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=26)** This will be different if you're on a Windows computer but on a Mac you can use what type of shell you're running to determine where to update the path.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=35)** We'll use echo SHELL to find out which shell we're running.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=41)** In this case, ours is bin/zsh.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=45)** This means we'll need to update our .zshrc file in our home directory.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=53)** We can navigate to our home with cd tilde.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=58)** Then we'll open up the file with nano dot zshrc.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=65)** Inside of here, we have two entries that tell our shell where MySQL is located.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=72)** We have the MySQL bin and MySQL support files.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=76)** We add these to our path so we can execute MySQL in the command line.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=81)** To save any changes to this file we can do Control O, Enter, and then Control X.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=89)** This saves our changes and exits out of the editor.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=93)** With the path set, we can create our database and add some tables.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=98)** We'll log into our database through the terminal with MySQL.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=103)** You can use a GUI such as MySQL Workbench instead, but since we don't want to go too deep into tooling, the terminal should work great for us.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=113)** To log in, we'll use sudo mysql dash U root, so we're logging in with the root user and then dash P.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=124)** The first password you'll enter is for your machine.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=127)** So if you're on a Mac machine or Windows machine, what do you use to log in to your system?
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=133)** This is your laptop or desktop password and it's used for sudo.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=139)** Now we're on the login command.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=141)** We're logging into MySQL, so we'll use the password we configured when installing MySQL.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=148)** This might be different from your desktop or laptop password, and we're in.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=154)** Let's create our database.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=158)** It'll be called books.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=161)** In another terminal window, we'll access our virtual environment and run our database.py file.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=169)** Let's navigate to that file.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=174)** We'll activate our environment and then run the with Python database.py.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=183)** Now let's check if our tables have been added with our MySQL shell.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=188)** We'll go over to our other terminal tab and query for our data.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=195)** To see the tables, we can write SHOW TABLES, and there they are.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=201)** We created them with Python.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=203)** We can also see their columns with the DESCRIBE keyword.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=216)** This is exactly what we set up in Python.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=219)** We've successfully created a MySQL database with tables.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (14), python (3), sudo (2), find (1), cd (1)
> **Tools:** terminal (4), command line (2), zsh (1)
> **Code Keywords:** let (4), case, (1)
> **Env Vars:** shell (1), gui (1), show (1), tables (1), describe (1)
> **Prerequisites:** install (2), configure (1), set up (1)
> **UI Navigation:** navigate to (2), go to (1)
> **File Paths:** database.py (2)
> **Analogies:** such as (1)

#### Create an API contract
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=0)** - When a client wants to put a new piece of data into our books database, they'll use our API.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=7)** Currently, our API only has a hello world type endpoint where the client runs a get request to the home route.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=16)** We need to add a new endpoint that allows the client to add a book to our database.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=23)** GET is a type of HTTP method used with REST APIs.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=28)** It's used to request information.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=31)** Other types of HTTP methods also exist such as POST, PUT, DELETE, PATCH, and a few others.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=39)** In this chapter, we'll be focusing on POST.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=43)** When a POST request is made to an API, typically it creates a new resource.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=49)** In our case, it will create a new book and add it to our database.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=54)** For the POST endpoint, we need to create a contract for how the client will send us the data.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=61)** The client will send a POST request to the book endpoint or the book route.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=66)** In the request, the client will also send a request payload.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=71)** That's data sent with the request.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=74)** This payload will contain data on what book to add to the database.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=79)** The payload will be in JSON format or JavaScript Object Notation.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=84)** This is a common format for transporting data.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=88)** There will be a field for a book containing title and number of pages values.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=94)** The title will be of type string and number of pages will be an int.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=100)** There will also be a field for the author with the first and last name as strings.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=106)** When the user sends a request, they'll send a POST to the book endpoint with the payload similar to this.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=114)** The keys, which are book, title, number of pages, et cetera, will remain the same but the values will change.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=124)** In our Python code, we'll use these keys to retrieve the values the user sends.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=130)** That's why it's so important to agree with the client on a contract.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=135)** The client must send the data in a specific way so that the server code can actually retrieve it.

> [!info]- Semantic Content
>
> **Env Vars:** post (6), api (3), http (2), rest (1), put (1)
> **API Endpoints:** post  (4), get  (1)
> **Code Keywords:** delete (1), case, (1), this. (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** python (1)
> **Speakers:** - when (1)

#### Build a POST endpoint with FastAPI
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=0)** - [Instructor] Let's implement the POST endpoint so the client can add a book to our database.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=5)** The route is book, so we'll add that with the POST method.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=11)** When the user sends data to this route we'll want to run a function that adds data to the database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=19)** The input to this function will be data that the user sends as a part of the request payload.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=25)** We'll make this the BookAuthorPayLoad data type.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=30)** In order to use this type we'll need to define it in our application.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=35)** We'll do that in a separate file called schemas.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=39)** We'll call it schemas.py, and this will be in the same folder as our main.py.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=49)** Inside of here, we'll define the BookButhorPayLoad.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=55)** It'll contain a book and an author.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=58)** Now let's define the book and the author.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=62)** Since this payload uses them we'll place them above the payload in our file.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=70)** The book will have a title as a string and number of pages as an int.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=77)** The author will have a first_name and a last_name.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=81)** Both of these will be strings.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=84)** We've defined our data as classes but in order to make them into models, we need to create them based off the base model from pydanic.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=94)** Let's import it from the pydanic module.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=99)** We'll feed the base into our model classes.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=104)** Our data schema is created.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=107)** Let's import this into our main application.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=113)** With this import, we can access the BookAuthorPayLoad data type from our schemas import.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=120)** So we'll write schemas.BookAuthorPayLoad.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=125)** Now for the body of the function.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=128)** We won't access the database just yet.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=131)** First, we'll confirm that we're able to retrieve data from the client.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=136)** We'll print out each data piece to the output.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=140)** That's it.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=142)** We've just created our first POST endpoint with FastAPI.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), type. (1), module (1), import, (1)
> **API Endpoints:** post  (3)
> **Env Vars:** post (3)
> **File Paths:** schemas.py (1), main.py (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** first_name (1), last_name (1)
> **Speakers:** - [instructor] (1)

#### Call a new API using Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=0)** - [Instructor] Let's test our API.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=3)** While we were able to make requests to the get endpoint using the browser, most of the time, we'll be using a special software to make API requests.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=13)** In this case, we'll be using Postman, which is an API platform designed for developers to build and test their APIs.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=22)** We can install it from the Postman website.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=27)** Once it's installed, we can set up a collection that contains templates for each of our endpoints.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=35)** Let's create one.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=36)** We'll click new, collection.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=40)** We'll call it Book APIs.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=46)** Then we'll create a request to our POST API.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=50)** You can left click on the collection or click the three dots.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=56)** Add request.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=58)** We'll call this one Add Book and save it to our collection.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=64)** Notice it defaults to a get request, so we'll change it to post.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=71)** For the request URL, we'll use the same host we used in the browser.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=76)** The main difference is the route.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=79)** So that's 127.0.0.1 at port 8,000.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=86)** Then we'll add our route, book.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=89)** Now for the last piece, the data we want to send and add to the database.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=95)** We'll click on the body tab, select raw, and we'll be using JSON format.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=104)** This is where we'll write the data to send to our Python application.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=108)** We'll send "The Huntress".
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=115)** This is a book by Kate Quinn.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=117)** Perfect.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=118)** Our request is ready to be sent.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=121)** Let's start up our Python app so we can send it.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=125)** We'll also save our request in Postman so we can use it later on.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=131)** We'll go to our terminal and make sure we're in the books folder.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=135)** Looks like we need to cd back into books.
>
> **[2:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=139)** Then we'll activate our environment.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=141)** Source, bin, activate.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=145)** From here, we'll use uvicorn to start up our app.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=153)** The app is running.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=155)** Let's send our request in Postman.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=158)** Everything is set up, so all we have to do is click send.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=164)** Let's check out the response.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=167)** We get a 200 response code back.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=170)** This means everything is good.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=172)** Our request went through and it was successful.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=176)** We also get a text response.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=178)** It has the dynamic data from our request.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=182)** Let's try sending a different request.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=186)** Instead of "The Huntress", we'll send "The Alice Network".
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=192)** Let's send it.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=193)** Now the title is "The Alice Network".
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=197)** We get a different response back.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=200)** We can also look at the terminal window to see our request go through.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=205)** Here, there are two post requests to the book endpoint.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=210)** Each time, the server returned a 200 OK response code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (1), new, (1)
> **Env Vars:** api (4), post (1), url (1), json (1)
> **CLI Commands:** make (3), python (2), cd (1)
> **Tools:** postman (4), terminal (2)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** is an  (1), is a  (1)
> **Ports:** port 8 (1)

#### Add data to a database in Python using SQLAlchemy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=0)** - [Instructor] Before we can add data dynamically to our database, we need to create an easy way for an outside module to interact with it.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=9)** In this case, an easy way for an outside module, to add a book.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=14)** Let's create an addBook function to our database.py file.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=20)** Eventually, this will be used by the main.py application to add a book to the database.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=28)** It'll take in a book and an author.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=31)** Now, to interact with the database we'll need to start a session.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=37)** In this function, we have three tasks, update the book table, update the author table and update the pairings table.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=46)** We also don't want to add any data that already exists.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=50)** This means before we add data we should run a query to check if the data already exists in the database.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=58)** We'll start with our book data.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=61)** With SQL Alchemy, we can use the select function and filter where the book data is the same as the data passed in.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=73)** Here, we select a book where the title is the same as the title passed in, and the number of pages is the same as the number of pages also passed in.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=86)** The scalar call at the end means we'll retrieve the first row of the result.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=97)** If any data comes back, we'll want to exit the function because the book has already been added.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=105)** If the book's been added, we'll also assume the author and its pairing have also been added.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=111)** That's why we exit here.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=113)** Now if the book does in fact need to be added, we'll add it with the session.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=120)** Then we'll do the same thing with the author.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=124)** We'll check if the author has already been added to the database.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=137)** If the author exists, we'll only add the book.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=141)** Then we'll create a pairing between the existing author and the new book.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=159)** If the author does not exist, we'll add the author and then create the pairing.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=171)** We have to flush the session because otherwise the author ID on the new author would not exist.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=178)** Same for the book ID above.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=181)** That's why we have to flush the session.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=184)** It updates the object, so the ID is not null.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=188)** Once we've updated the book and author tables, we need to update the pairing table.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=198)** We can do that by adding it to the session.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=202)** Then we'll commit the changes.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=209)** At the end, we print the new book information we've added to the database.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=214)** Now, looking at this file more closely, there are a few things we missed.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=219)** One thing is we use select, which is a keyword.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=223)** We need to add this at the top as an import so we can use it without referencing the SQL module.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=231)** We also use the keyword, session.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=235)** We can add that at the top.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=238)** It comes from the SQL ORM module.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=244)** The last thing we need to add is a reference for a title.
>
> **[4:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=248)** Where is title coming from?
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=251)** It's coming from our input, book, so we need to add this in our filters for both title and number of pages.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=261)** We want to select the book, where the number of pages is equal to our input.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=268)** This is true for the author as well.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=271)** We want to use our author input data to decide if the author already exists in the database.
>
> **[4:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=279)** Now we've created a function that dynamically adds a book to our database.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), module (4), case, (1), let (1)
> **Env Vars:** sql (3), orm (1)
> **File Paths:** database.py (1), main.py (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** addbook (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Integrate a database with a FastAPI application
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=0)** - [Instructor] We have two components set up in our tech stack.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=4)** We have the FastAPI Python application and the code that interacts with our database.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=10)** Let's connect these components.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=13)** In our main application, the main.py file, we'll import the database file.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=20)** With this import, we'll be able to use the add_book function.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=25)** We'll call add_book and pass in the requests, book and author.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=32)** Now, unfortunately, it's not that easy.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=36)** The book schema from our request is not the same as the database book schema.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=41)** While they might look the same, our request payload schema is defined in our schemas file and the database book schema is defined with a different base in our database file.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=54)** This means we need to convert the request data into the database schema format.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=61)** We'll start with the book first.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=64)** We have a convert function that takes in a book where the type is defined in the schemas file.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=71)** We'll convert this into a database book by accessing the database module and instantiating a new book.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=78)** We'll also do the same for our author.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=83)** To use these, we'll call them with our request data.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=91)** Now, you might be thinking, "Could I use the same model?"
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=96)** Well, it's probably a good thing they're different.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=99)** This means that what the frontend sends and what the backend saves in the database are less coupled.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=106)** If the database wants to add another column, they can do so without the client needing to send additional information.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=115)** The converter code might need to be changed, but the new column could have default data until the client is ready to send the additional data they want saved in the database.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=126)** So we've just integrated our database with our FastAPI application.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=131)** Let's test it out.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=134)** We'll navigate to our books folder and activate our environment.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=138)** Looks like we're already there.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=142)** Then we'll run the uvicorn command to start up our server.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=150)** Using Postman, we'll send a new book to be added to the database; "Where the Crawdads Sing," by Delia Owens.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=160)** And it looks like it was successful.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=163)** Checking the logs, the new book has been added.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=167)** We can also check with the MySQL shell.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=170)** Let's open up another tab in the terminal window.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=174)** We'll log in to the MySQL shell.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=179)** Let's select all the data from books.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=183)** There's our book, "Where the Crawdads Sing" with 386 pages.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=190)** What about our author?
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=192)** There's Delia Owens.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=195)** What about the pairing?
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=199)** We have author_ID two paired with book_ID two.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=204)** This is exactly how we want our data organized.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=207)** We just used an API to add data to our database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), import, (1), pass (1), module (1)
> **CLI Commands:** mysql (2), python (1)
> **Code Identifiers:** add_book (2)
> **Tools:** postman (1), terminal (1)
> **File Paths:** main.py (1)
> **Env Vars:** api (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** means that (1)

#### Challenge: Develop a GET endpoint with FastAPI and a DB
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=5)** - [Instructor] It's time for a challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=8)** In our book, "API Application," we've created a post endpoint that allows clients to add books to the database.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=16)** Sometimes clients will also want to retrieve data from the database.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=22)** We can develop this functionality by adding a GET endpoint to our application.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=28)** The client will provide a book id and we'll use that id to retrieve information about the book from the database.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=37)** We'll also return the author's information associated with the book.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=41)** Your job is to create a GET endpoint on the route /book/{book_ id} where book id is a path parameter that evaluates to the id of the book.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=53)** This means if the client wants to retrieve the book with id five, they'll use the /book/5 route.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=61)** If a client wants to retrieve the book with book id seven, they'll use /book/7.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=68)** This is the API contract.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=71)** We didn't cover path parameters in this chapter but this is a good opportunity to use your research skills.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=79)** Given that you are now familiar with FastAPI, Python and integrating dynamic data from a database, can you figure out how to dynamically accept an input within a route?
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=92)** Good luck and happy coding.

> [!info]- Semantic Content
>
> **API Endpoints:** get  (2)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Develop a GET endpoint with FastAPI and a Database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=0)** - [Instructor] Let's add a dynamic get endpoint to our book API application.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=10)** To start off, we'll add a get route.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=13)** The route will be book and then a path parameter representing the book's ID.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=19)** To add a path parameter, we'll need to do some research.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=23)** Let's Google path parameters in FastAPI.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=30)** Here, it says we can declare the path variable using the same format as we do Python strings.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=38)** We'll use two curly braces and then also use it as input to the function.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=44)** Let's add that to our implementation.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=50)** When someone uses this route, we'll want to run a function.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=55)** We'll call it retrieve_book.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=59)** For the input, we'll have book_id from the path.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=66)** It'll be an int.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=68)** Now in order to retrieve the book, we'll need to interact with our database.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=73)** We'll call a function called get_book from our database file.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=79)** We'll also pass in the book ID so it knows which book to retrieve.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=85)** Let's implement this get_book function in the database file.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=92)** It'll be a new function with book_id as a parameter.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=98)** Then, we'll create a session with the database so we can retrieve the book.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=105)** To find the specific book we're looking for, we'll use a select statement.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=111)** We'll select the book where the book ID is the same as the one passed in.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=120)** With the scalar function, we'll return a single object with the book data.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=125)** Now, in addition to the book data, we also want to return the corresponding author data.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=132)** Let's query our pairings table to find the ID of the author.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=144)** Here, we use that book ID again to find the pairing.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=150)** To find the author, we'll use the author_id from the pairing returned.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=158)** So now we have our book data and our author data.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=162)** We just need to return it from the function.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=166)** We could create a custom object to return it but here, we just use a tuple.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=172)** Let's test out our new functionality.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=176)** We'll activate our environment and start our server.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=186)** To request the book information, we'll use Postman.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=190)** We'll create a new request inside of our collection.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=201)** We'll retrieve book ID two.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=204)** That's the book we added in a previous video.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=207)** Let's request it.
>
> **[3:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=213)** There's our book data.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=215)** We have "Where the Crawdads Sing" as the book and then the author, Delia Owens.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=222)** Now let's try it with an invalid index.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=225)** Say eight. We get an error.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=230)** Let's check the logs to see what happened.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=234)** It seems like the author and the book were missing from the application.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=240)** Instead of returning an internal server error, we could actually return a 404 for this case.
>
> **[4:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=247)** 404 is an error code that means not found.
>
> **[4:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=252)** Since the book or the author was not found, this type of error is ideal.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=258)** The first step to implement this is to have our database function throw an error when the book does not exist.
>
> **[4:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=266)** If upon retrieving the book, its value is none, that means the book does not exist in the database.
>
> **[4:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=275)** So if the book is none, it does not exist so we'll raise an exception with the message book does not exist.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=289)** Then in our main.py file, we can catch this exception and raise a 404 error.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=299)** So we'll try to retrieve the book and if we get an error, we'll output it to the console and turn it in to a 404 error.
>
> **[5:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=312)** Now technically, this catches every exception thrown by the get_book method.
>
> **[5:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=318)** We could improve upon this by creating a custom database exception that's used for this not found case.
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=326)** Let's try accessing a book that's not found.
>
> **[5:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=332)** Since we used the dash dash reload option On the uvicorn command, it automatically reloads the code when we update it.
>
> **[5:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=341)** It detects the changes and restarts the server.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=345)** Let's try this request again.
>
> **[5:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=351)** Looks like we need to add an import.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=356)** From FastAPI, we'll also import HTTPException.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=364)** Let's try it again and there it is.
>
> **[6:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=368)** Our exception that the book does not exist and the error code is 404.
>
> **[6:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=375)** We just created a get endpoint with proper error handling that retrieves information from a database.
>
> **[6:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=382)** If you want to expand on this application, you could create endpoints where you can retrieve a book by title or the books of an author.
>
> **[6:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=393)** You could also organize the code a bit more by moving the converters or the database schema to a separate file.
>
> **[6:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=402)** Another option is to add more error checking to the user input.
>
> **[6:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=407)** We trust the client's input pretty heavily for the book author payload and that we trust the number of pages is a positive number and that the title is in gibberish.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=420)** We could add more error checking here to make sure the client's information is valid.
>
> **[7:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=427)** We could also add authentication, making sure clients authenticate with an API token when they use the API.
>
> **[7:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=435)** There's always something to improve or some addition you can make when working on a Python application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (8), case. (2), raise (2), pass (1)
> **CLI Commands:** find (4), python (2), make (2)
> **Code Identifiers:** get_book (3), book_id (2), retrieve_book (1), author_id (1)
> **Env Vars:** api (3)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** main.py (1)
> **Cross-References:** previous video (1)
> **Tools:** postman (1)


### 3. 2. Developing Analysis Applications with Pandas

#### Introduction to pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=0)** - [Instructor] As a Python developer, sometimes you might not be developing a consumer product.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=7)** Instead, you'll use Python to analyze and manipulate data in order to discover new information about that product.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=16)** Rather than serving up information from a database to a customer, you might want to work with data in memory to find new trends that inform how you build a given application or modify your workflow.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=30)** You'll often see this type of work in finance, advertising, web analytics, and economic domains.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=39)** So far, we've created a database and a Python web API that interacts with it.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=45)** In this chapter, we're going to look at interacting with databases for the purposes of data manipulation and analysis.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=54)** We can do this with a tool called Pandas.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=57)** Pandas is a library that gives us lots of tools for doing practical, real world data analysis and Python.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=65)** It features robust built-in data structures that can help you organize your data and memory and gain meaningful insight from that data.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=75)** Along with these analysis tools, Pandas also has a tight integration with SQLAlchemy for working with databases so you can easily access the data you want to work with.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=86)** When you're analyzing data with Python, likely, you won't be making a traditional application.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=93)** Instead, you'll be writing code to make diagrams, plots and calculations and analyzing the visualizations they return.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=102)** This means we won't be working in sublime but rather in a tool called Jupiter Notebook.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=109)** Jupyter Notebooks allow you to create and share pages that contain code, visualizations and equations on the fly.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=117)** Making computing interactive which is very useful if you're analyzing data.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=123)** Writing Python code with Pandas in a Jupyter Notebook will set us up for success when analyzing data in Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (7), find (1), make (1)
> **Tools:** jupyter (2), sublime (1)
> **Code Keywords:** return. (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Set up pandas and Jupyter Notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=0)** - [Instructor] Let's create a Jupyter Notebook and analyze some data with Pandas.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=5)** First, we need to install Pandas in Jupyter.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=8)** We'll do this in a virtual environment.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=13)** We'll CD into it and activate it.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=18)** Inside of here, we'll install our dependencies.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=23)** The first one will be Pandas.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=26)** The next one will be Jupyter.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=33)** We'll also install Matplotlib, which will allow us to create some visualizations.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=42)** Let's start up our Jupyter Notebook.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=45)** We can do that with Jupyter Notebook.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=51)** This starts up a Jupyter Notebook server so we can write interactive Python code.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=56)** Here we can see some information about the notebook server, including the URL we'll use to access and write code in the notebook.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=66)** Running Jupyter Notebook also opens up this browser with the same URL.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=71)** If, for some reason, the window didn't open up, you can always use these URLs.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=77)** This is the notebook dashboard where we'll be able to see all the notebooks and files we've created.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=85)** Let's create our first.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=88)** We'll go to New Python 3.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=92)** Let's try running some code in our first notebook.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=96)** We'll call it Pandas Practice.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=102)** Let's execute a Hello World statement.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=105)** To run this piece of code, we'll hit Shift + Enter.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=110)** This runs the Hello World print statement, shows its results, and then selects the next frame for us to edit or run.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=118)** While this might not seem very exciting for a print statement, it becomes very interesting when creating visualizations with Python for data analysis.

> [!info]- Semantic Content
>
> **Tools:** jupyter (7)
> **Code Keywords:** let (5), if, (1)
> **CLI Commands:** python (3), cd (1)
> **Prerequisites:** install (3)
> **Env Vars:** url (2)
> **Versions:** python 3 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Analyze data with pandas
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=0)** - Let's import the pandas module and do some analysis.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=8)** This cell won't have any output but we'll be able to use pandas in this Jupiter notebook now.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=14)** In order to do some data analysis, we need some data to work with.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=21)** This data represents some orders from a tech company called Red 30.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=25)** This is provided in the exercise files and on GitHub.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=30)** We'll import it into our application using a function from the pandas library, read_csv.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=37)** For the input, we'll put the name of the file, red30.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=42)** The read_csv function returns the data in the form of a data frame.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=48)** That's why we have the variable name as df.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=53)** A data frame is a two-dimensional pandas structure, very similar to a table.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=59)** Let's take a look at the data inside the data frame from the red30 CSV file.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=65)** We can retrieve the first five entries with df.head.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=70)** Then, we can retrieve the last five entries with df.tail.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=77)** To understand the different fields, we can use df.info.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=85)** We can also use df.describe.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=91)** This gives us various statistics about the values in each column overall.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=97)** This includes the mean, number of entries, minimum, maximum, and more.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=103)** While these functions give us general information about the data, we can dive deeper by selecting column in the data frame and running functions on it.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=113)** In pandas, we can inspect these column variables with a function called value counts to see the most common values for a given variable or column.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=123)** Let's take a look at what value counts returns for the product category column.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=128)** We'll select the column from the data frame prodcategory.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=135)** It looks like eBooks is the most common category for our customers, coming in at 1,296 orders.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=146)** What about order type?
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=152)** Interesting.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=153)** Wholesale orders are more common than retail orders.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=157)** The value counts function works best for variables with a small set of values, but for numerical values, using describe to get a distribution of the data may work better.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=169)** Let's look at some information about the order total column.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=173)** This is numerical, so the describe function will work best.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=179)** It looks like the most frequent purchase is $12 and 90 orders in our databases are that number.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=187)** Let's try using value counts.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=193)** Interesting.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=194)** It looks like purchases are all across the board but overall under a hundred dollars for the most part.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=201)** Given all of this in a few lines of code, we were able to get a better understanding of our data using pandas with Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), module (1)
> **Code Identifiers:** read_csv (2), ebooks (1)
> **CLI Commands:** python (1)
> **Env Vars:** csv (1)
> **Tools:** github (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Analyze data with Matplotlib
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=0)** - [Lecturer] Now that we're a little more familiar with the data, let's try creating some visualizations.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=6)** We'll leverage the Matplotlib module.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=10)** By using both Pandas and Matplotlib, we can make a histogram of the values in a given column.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=17)** Let's try plotting a histogram with the values and the quantity column and see how many products are bought in a given order.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=26)** We'll select the data frame quantity, and then use hist.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=33)** It looks like most orders are small, containing under 10 items.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=37)** We can also make bar graphs.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=40)** Let's graph the prod category column and see what the top product categories are for orders.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=47)** We'll use value counts and plot a bar graph.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=56)** We see e-books again, but training videos, blueprints drone kits, and robot kits are also popular.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=64)** This is only an introduction to Pandas and Matplotlib, and there are so many more methods you can run on your data.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=72)** There are also several other libraries you can use to learn more about your data.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=77)** If this interests you, I encourage you to check out some of the courses in the LinkedIn Learning library that focus on data manipulation and data analysis in Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (1)
> **CLI Commands:** make (2), python (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [lecturer] (1)

#### Connect to a DB using SQLAlchemy within Juypter Notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=0)** - [Instructor] While reading CSV data and manipulating it with Pandas is interesting.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=5)** It would be even more interesting to integrate SQLAlchemy so we can access data from a live database.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=12)** In our virtual environment, let's install a module that lets us connect to a database from our application.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=20)** We'll be connecting to a SQLite database but you could connect to a different type of database as well.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=27)** Let's install SQLAlchemy.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=30)** Let's start up Jupyter Notebook.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=37)** Our database is stored in a file called Salespeople SQLite and it's located in the exercise file, specifically in our Panda's workspace.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=48)** This database has a single table called salespeople that lists different sales representatives working for the company.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=58)** Let's use SQLAlchemy to connect to this database.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=66)** We'll use Create Engine to connect to the database.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=72)** Salespeople SQLite.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=75)** While this is fine and dandy, we might want to make our application a little more dynamic.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=82)** Instead of hard coding the database name, we could make it an environment variable for our computer to read into the file.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=91)** All we have to do is stop our notebook and export the value we want it to be named.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=98)** We'll export SALESPEOPLE_DB_URI and put in our connection string.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=110)** Let's restart the notebook.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=114)** If you happen to get an error in the right hand corner, just refresh the page.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=119)** We can access our environment variable using the OS module's environ.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=125)** From OS, we'll import this tool.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=130)** Then we'll use it to retrieve our environment variable.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=136)** We'll pass that in to our create_engine function.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=140)** If you happen to get an error, you can always rerun your cells to make sure everything is imported.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=147)** And there it goes!
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=148)** Our database is now connected to our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (2), pass (1), function (1)
> **CLI Commands:** make (3)
> **Env Vars:** csv (1), salespeople_db_uri (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** create_engine (1)
> **Tools:** jupyter (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Visualize data using SQLAlchemy, pandas, and Matplotlib
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=0)** - [Instructor] In order to use data in our application, we'll need to import it.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=5)** In fact, we can load the data directly into a Pandas data frame making it really easy to work with.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=13)** We can use the read SQL table method to load a table from the database.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=20)** The table is called salespeople and we'll pass in our engine's connection.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=29)** While adding just these two arguments will work, we can actually be more specific in importing our data.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=36)** Extra parameters make sure the data's read in as expected.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=42)** Let's walk through these parameters.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=45)** The index column allows you to pass your primary key or another column you want to use as an index to your Pandas data frame.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=54)** Coerce float looks at the columns containing numerical values and tries to convert these columns to use floating point numbers where valid.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=65)** It's automatically set to true by default.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=68)** Columns allows us to create a data frame with specific columns from our database, excluding the others.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=76)** It's similar to the SQL Select on X columns statement.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=81)** If we have date column types in our database, we need to explicitly state them so they're converted correctly when creating our Pandas data frame.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=91)** Chunk size allows us to create a generator object where data is streamed a certain number of rows at a time.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=99)** Here 250 rather than all at once.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=103)** In analyzing the data, you use the generator to iterate over chunks of the data.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=110)** For now, we'll comment this out so we have it for reference.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=114)** It's important to note that SQL Alchemy2 is very new, and with all new things, they're likely to change.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=122)** If this statement doesn't work for you, consider looking at the linked documentation.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=127)** Let's take a look at this data frame.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=130)** Here's our data in a Jupyter notebook.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=134)** Let's grab the email address data.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=138)** We'll access our data frame salespeople_df and retrieve the email address column.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=148)** Lots of emails, these will likely be different for each entry.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=155)** Let's check out another column.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=160)** Say the state.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=163)** There are only 50 states, so some of these are likely duplicated.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=167)** Let's create a quick visualization to see which states most of the salespeople are from.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=174)** We'll access that same column and use value counts.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=181)** It looks like most people are from Texas.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=185)** Let's see it with a bar graph.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=188)** For this, we'll import matplotlib.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=195)** It'll be a bar graph.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=199)** A few from Minnesota, Florida, and Virginia too.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=203)** It's pretty incredible what you can do with Python when you combine several libraries and tools with databases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (2), default. (1), new, (1), from. (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** salespeople_df (1)
> **Tools:** jupyter (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### Challenge: Ingest data and visualize it with Matplotlib
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=5)** - [Instructor] It's time to practice ingesting and visualizing data.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=9)** In this challenge, you'll be given a new database that you need to visualize the data of.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=15)** Here's what the data looks like.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=17)** There are columns for order ID, property ID, state, city, product ID, product category, product type, quantity, product price, and order total.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=31)** It represents sales for the Landon company.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=34)** We've already transferred this data into a sqlite database file called landon.sqlite.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=40)** It lives in a table called sales.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=43)** Your job is to import this data into a Jupyter notebook.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=48)** Then you'll create a graph that visualizes a statistic or fact of the data.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=54)** It could be a bar graph that shows what city most orders came from.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=59)** It could be a pie chart that shows the least popular product categories.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=64)** It's up to you.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=65)** Good luck, and happy coding.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1), from. (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Ingest data and visualize it using Matplotlib
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=5)** - [Instructor] Let's practice ingesting data from a database in Jupyter Notebook.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=10)** We'll start by importing SQLAlchemy.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=17)** SQLAlchemy will help us connect to the database.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=21)** To connect to the SQLite database, we'll create an engine.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=27)** The input will be our SQLite file with our data in it.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=31)** That's sqlite:///landon.sqlite.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=36)** We'll ingest the data with pandas.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=41)** And we need as pd so we can reference it as pd in our file.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=47)** To read in the table we'll use the read_sql_table function and pass in our table name along with a few other inputs.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=59)** These include the connection and the index column.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=68)** Order_id will act as our primary key, so that's why we set it in our index column.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=75)** Let's visualize the data.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=78)** We can sort the order totals and view them with the sort_values function.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=85)** We'll use that on the data frame.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=88)** We'll sort the values by order total.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=95)** It looks like one of the smallest orders was $3 and the largest for $900.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=103)** We can also see where the order came from.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=107)** Let's check out how many orders came from each state.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=112)** We'll use the property state column and the value_counts function.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=120)** Most of the orders came from Virginia and California.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=125)** We can view this as a pie chart with matplotlib.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=133)** We'll use the pie function to create a pie chart of the top 10 states people ordered from.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=140)** It'll use the value counts of the property state column and then the associated column values to create the chart.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=149)** To retrieve the first 10 rows we'll use .head.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=155)** Now, we'll want to label each piece of the pie using the column value.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=160)** So that's California, Virginia, Pennsylvania, or whatever the state is.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=166)** To retrieve this, we'll take the code we just used and then access the index.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=177)** Then we'll convert that to a list, that'll give us the state labels we want in list form.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=186)** Let's run it.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=190)** One thing we forgot here is we need to add labels to the beginning of this.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=196)** This sets the labels for our data in the pie chart.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=203)** Here it is.
>
> **[3:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=205)** It looks like we're only seeing five, and that's the default if you don't put an argument in for head.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=211)** We want 10 in there, so we'll put 10 as the argument.
>
> **[3:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=218)** And there it is, we have 10 states in the pie chart.
>
> **[3:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=222)** It looks like Virginia and California are pretty similar, and Washington is about half of California.
>
> **[3:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=231)** If we look at the numerical data, Washington is close to 250 and California is close to 500.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=239)** So this pie chart looks accurate.
>
> **[4:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=242)** Congratulations, you just analyzed and visualized data from a database using Python.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (4), from. (2), pass (1), this, (1)
> **Code Identifiers:** read_sql_table (1), sort_values (1), value_counts (1)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. 3. Building a Full-Stack Task List Application with Flask

#### Set up Flask in a Python application
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=0)** - [Instructor] Onto our last project, a full stack web application that interacts with the database.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=7)** We'll be creating a web application that keeps track of ongoing projects and tasks associated with those projects.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=15)** The first page of our web application will list all the projects we're working on and give us the ability to add a new project.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=23)** Each project will have a link that takes us to a different page to see the tasks associated with that project.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=31)** From the task page, we'll be able to add new tasks for that project as well.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=36)** To keep track of our projects and associated tasks, we'll be using a Postgres database and SQLAlchemy in our Python application.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=45)** We'll also be using Flask which is a Python micro framework.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=49)** With Flask, we'll be able to connect our routes to our webpages and add functionality to trigger data modifications in our database.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=58)** Our webpages will be built with basic HTML and CSS.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=63)** The goal of this course is to look at how databases can be used within a Python application.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=70)** So while we'll introduce Flask and some other web technologies, the focus is on what you can build by using databases in Python.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=79)** If any of these other technologies spark your interest, I encourage you to check out the other courses in the library.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=86)** With an idea of how our project will work, we can start to set up our virtual environment.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=96)** We'll need to CD into the workspace to activate it.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=102)** Now, we'll use a few dependencies in this project.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=106)** The first is psycopg2-binary.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=110)** This will allow us to connect to the Postgres database.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=114)** We'll also install SQLAlchemy.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=117)** This will make it easier for us to interact with our database in Python.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=123)** The last thing we'll install is Flask.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=127)** Flask will help us build an API and wire our application together.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=133)** With these tools installed in our virtual environment, we can begin to create our full stack Python web app.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), cd (1), make (1)
> **Env Vars:** html (1), css (1), api (1)
> **Prerequisites:** install (2), set up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create a webpage with Flask
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=0)** - [Instructor] With our virtual environment set up, let's open up Sublime and start setting up our application.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=7)** The first step is to set up a simple Flask gap.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=10)** This version won't link to a database.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=13)** Instead, it'll contain static content that doesn't change.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=18)** Later, we'll replace the static content with dynamic links to our database.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=25)** Let's save this file in our workspace.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=28)** We'll call it app.py.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=31)** Then we'll import Flask.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=36)** We also import render_template, which will help us render our HTML files.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=43)** Next, we'll initialize our application.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=48)** We create it with the name of the file and save it in a variable called app.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=52)** With this app variable, we'll be able to set up all the routes in our application for our website visitors to go to.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=60)** Like we saw with FastAPI, these routes are the different URL paths in our application we're providing content for.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=68)** The first route we'll define will be the home route.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=72)** We'll link it to a function called show projects.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=77)** This function will render a template and will pass in the file we want it to render, index.html.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=86)** Let's make this HTML file.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=91)** First we'll create a folder named Templates.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=95)** This is where the render template function looks for a given HTML file, and our index.html will write up a simple HTML page.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=107)** It just has a header that says Projects.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=111)** Let's go back to our app.py file and set up our application to run.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=117)** We'll access our app and call the run function.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=121)** Here, we set the host to our local IP address, and the port to 3000.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=128)** This means the app will run locally on our machine at our home address, on port 3000.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=134)** Let's run this application.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=137)** We'll head over to our terminal.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=140)** There are a few ways we can run the app, but to keep things simple we'll just run our application with python3 app.py, and this is with my virtual environment already activated.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=155)** Let's check it out.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=157)** We'll copy the URL and put it into a browser.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=162)** There it is.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=164)** There's our Projects page.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=166)** It says Projects right now but soon we'll fill it with dynamic data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), static (2), for. (1), pass (1)
> **Env Vars:** html (4), url (2)
> **File Paths:** app.py (3), index.html (2)
> **Prerequisites:** set up (4)
> **CLI Commands:** make (1), python3 (1)
> **Tools:** sublime (1), terminal (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** render_template (1)

#### Build a landing page
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=0)** - [Instructor] Let's make the project homepage a little more sophisticated.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=4)** The page will list a set of projects, and each project will link to that project's associated tasks.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=12)** To start, these will be hard coded, but eventually, we'll populate them using data from a database.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=19)** On our projects page, we'll add a list of projects.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=23)** We'll use the ul tag to create an unordered list.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=27)** Each item in the list will be a project.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=32)** Now, the tasks associated with each project will be linked as a part of the same application.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=38)** This means they'll live on the same host.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=42)** We'll host them on the route project, and then have a path parameter that represents an ID number associated with that project.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=53)** Let's add the links.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=56)** Here, we'll associate the first project with ID 1, the second with ID 2, and the third with ID 3.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=65)** When the link is clinked, we'll be taken to that project's tasks.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=70)** With that taken care of, we'll add a form for the user to add a new project.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=77)** When the form is submitted, it'll be directed to the add/project route.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=82)** This submission will be sending the new project data, so we give it the method, POST.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=88)** Now let's decide what the form will look like.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=93)** Here, we'll have the project name and then a text field for the user to add their new project name.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=100)** In order to submit the form, we need to add a button.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=106)** It'll be a submit.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=109)** And the label on the button will be Add Project.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=113)** The user will submit their data by pressing this button.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=118)** Perfect. Our index.html template is set up.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=122)** We haven't defined the individual project routes or the Add Project route, so none of the links or buttons will work.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=131)** However, we will be able to run and view this simple page.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=136)** Let's do it.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=138)** We'll head over to our terminal and activate our workspace.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=145)** Then, we'll run the app.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=149)** Let's check out the landing page.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=152)** There's our projects.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=155)** Let's add a header at the top to make it make a little more sense.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=159)** We'll do that in our index.html.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=165)** It'll be an h3 header.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=169)** Let's run our app again.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=174)** That's better.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=175)** We have a list of projects and then a way to add a new project.
>
> **[3:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=180)** Like we mentioned before, these are hyperlinked, but the links will work in later videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **CLI Commands:** make (3)
> **File Paths:** index.html (2)
> **Env Vars:** post (1)
> **Cross-References:** we mentioned (1)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)

#### Develop additional routes to enhance your application
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-additional-routes-to-enhance-your-application?u=76281980)

#### Build a project tasks page
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=0)** - [Instructor] Let's set up the project task's HTML template so we can add tasks to a project.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=6)** To keep this simple, we'll start by hard coding some tasks.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=10)** These will be in an unordered list.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=14)** To allow the user to add a new task, we'll use a form.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=19)** This form will redirect you to the add task project ID page.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=25)** That's the route we defined in the last lesson.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=28)** We'll be sending the new task information to this route, so that's why we set it as POST.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=36)** Now, inside the form, we want to give the user the ability to add a name for their task.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=42)** We'll be able to reference their input later on with task-name.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=48)** Now that the input's complete, we'll let the user submit their information with a button.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=55)** It'll have the label Add Task.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=58)** This marks are templates complete.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=61)** Let's run our app and take a look at what we've built.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=65)** We'll activate our virtual environment and run the app.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=73)** Let's refresh.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=76)** Here we have a template for showing all of the projects on the homepage.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=81)** If we click into each page, we can see the tasks for each project as well as a way to add a new task.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=91)** Project 1 has the ID 1.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=95)** Let's add a new task, Task 4.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=100)** We're rerouted to the add task at Project 1's project ID.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=106)** The task was added successfully.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=111)** Now, if I go back to the home route, click back into Project 1, it still won't show up yet.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=119)** We need to link a database in order to get that functionality.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=126)** The same tasks show up on each page.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=129)** That's because it's hard coded.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=132)** Eventually, these will be retrieved from a database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Env Vars:** html (1), post (1)
> **Cross-References:** in the last (1), go back to (1)
> **Exercise Files:** template (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create a Postgres database
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=0)** - [Instructor] We'll be using a Postgres database to store our applications, project, and task data.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=7)** If you haven't installed it, you can install it from the Postgres website.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=12)** I've already installed it, so I won't be installing it here.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=16)** Once it's installed, we need to set up our terminal so we can use it.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=21)** We can do this by adding it to our path.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=25)** On Mac, this can be done by adding a line to our zshrc file or our Z profile.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=34)** We have it in our zshrc file.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=38)** We add the location of Postgres to our path.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=44)** Perfect.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=45)** With Postgres installed and the path setup, we can initialize our database.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=51)** To activate Postgres, we can use psql -U and log in with the default user.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=61)** Let's create our database.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=64)** We'll create a database called project tracker.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=72)** To access our Postgres data, we can use specific commands.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=77)** For example, we can use slash l to list our databases.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=83)** Here we have some default ones along with the one we just created.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=89)** Similar to MySQL, if you want to manipulate the data in a given database, we have to connect to it.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=97)** Let's connect to our project tracker database.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=100)** Slash c and the database we want to connect to.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=105)** That's project tracker.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=108)** If you don't provide an input, you'll automatically connect to the default database.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=114)** And we're connected.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=116)** We've just created a Postgres database with Python.

> [!info]- Semantic Content
>
> **CLI Commands:** psql (1), mysql (1), python (1)
> **Prerequisites:** install (1), set up (1), setup (1)
> **Code Keywords:** let (2)
> **Analogies:** for example (1), similar to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Instantiate a Postgres table using Python
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=0)** - [Instructor] With the Postgres database created, we can connect to it and add data to it in our application before we integrate it with our FLAS code.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=10)** Let's make sure we can interact with it just using Python first since we've already used databases before in this course with SQL Alchemy, I've written up some of the starter code to interact with this database.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=24)** It should look pretty similar to the code we created for our MySQL database.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=30)** The main difference will be what connection string we feed into Create Engine.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=36)** Let's walk through it.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=38)** To start off, we import a few things from SQL Alchemy and connect to our Postgres database.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=45)** The driver in the connection is Postgres SQL and the dialect is psycopg2.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=51)** Then we have our logging credentials.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=54)** That's Postgres as the user and password.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=57)** As the password.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=58)** The database we want to connect to is called Project Tracker and we're running with local host.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=66)** Now in order to create the classes for our SQL Alchemy tables, we need a base class.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=72)** This is generated from the registry and then it's used to define two classes, project and task.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=80)** For the projects class, we have a table named project which has project ID and title columns.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=88)** The project ID column is the primary key.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=92)** We also include a string representation for each record.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=96)** For the task class, we have a table called tasks.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=100)** It'll have task id, project ID, and description columns.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=105)** The task ID will be the primary key and the project ID will be a foreign key linked to the projects table.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=113)** Project id.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=115)** With all our models defined we use the base to create the tables.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=120)** Then we create a session.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=122)** This allows us to start transacting on our database.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=127)** The first thing we do is create a new project.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=130)** Then we add it to our database.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=133)** When we flush the session, we create a pending transaction.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=138)** This will instantiate the primary key or project ID of the Clean House project.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=145)** This means we'll be able to use it in creating our task, to save these changes to our database.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=153)** We commit them.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=155)** All right.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=156)** That's our database file.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=158)** We connect to our database and create our tables.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=161)** Then we add the clean house project with the task, clean bedroom.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=167)** Let's run the file.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=169)** We'll start up our virtual environment.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=172)** Then run our database file.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=175)** It doesn't look like we have any errors.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=178)** This is good.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=179)** Let's use the Postgres Shell to check everything's been added correctly.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=186)** We'll connect to our database project tracker.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=190)** We'll select all the projects and all the tasks.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=197)** There's our data.
>
> **[3:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=199)** We have a clean house project and a clean bedroom task.
>
> **[3:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=204)** Everything's been added as expected.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=207)** While you could create and integrate your database code directly into the FLAS code I find it's cleaner to have a file outside of your application code where you can test the connection to your database and add database functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class, (2), class. (1)
> **Env Vars:** sql (4), flas (2)
> **CLI Commands:** make (1), python (1), mysql (1), find (1)
> **Exercise Files:** starter code (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Connect a database to a Python Flask project
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=0)** - [Instructor] We can connect our Flask application to our database using SQLAlchemy.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=7)** Within our virtual environment, we can install a special extension that allows us to use SQLAlchemy in our Flask code.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=15)** Let's activate the environment.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=18)** We'll install Flask-SQLAlchemy.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=24)** Then we'll add it as an import to our app.py file.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=29)** Within our app, there's a few things we need to configure.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=33)** First, we'll configure the SQLALCHEMY_DATABASE_URI.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=39)** This URI is like a connection string that allows us to connect to our Postgres database.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=45)** It's what we fed in to the create engine function before when we used SQLAlchemy previously.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=56)** we'll also add a SECRET_KEY.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=60)** This will allow us to securely use SQLAlchemy sessions in our Flask application.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=67)** Now the value for this key is something we set and we can generate one quickly using a Python Three shell.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=79)** Let's open one up.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=81)** We'll import the os module and use os.urandom24 to generate a random value.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=91)** Let's copy this.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=95)** This will be our secret key.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=98)** Now that the app's configured, we'll create a database object with the app as input.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=106)** And with that, our Flask application can now be connected to our Postgres database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), module (1), this. (1)
> **Prerequisites:** install (2), configure (2)
> **Env Vars:** sqlalchemy_database_uri (1), uri (1), secret_key (1)
> **File Paths:** app.py (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Integrate project data from a Database into Flask
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=0)** - [Instructor] Let's create some database models so we can reference the data from our database and our flask application.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=6)** We'll create these models using the Model object from our db variable.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=14)** We'll set the table name to projects and create our columns.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=23)** For column and integer, we reference the db object to get access to these types, but otherwise, it looks pretty similar to our SQLAlchemy code.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=34)** In order to access the task data, we'll also need to create a Model class.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=39)** But first, let's make sure the project data renders as expected.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=44)** We'll add the functionality so our homepage displays all of our projects.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=50)** To do this, we'll need to feed our projects into our index.html.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=55)** We'll add another argument to our render_template call.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=61)** project.query.all grabs all of the records in our projects table.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=67)** Since we're using the Flask SQLAlchemy extension, and basing our models off of the db model, we're able to query all of our projects in this way.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=78)** With render_template, we feed all of this data into our HTML file.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=84)** Since we set the name for our passed data as projects, that's how we'll reference it in our HTML file.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=92)** We also used .all.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=94)** This means that projects will be an iterable variable.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=99)** We'll be able to iterate through all of the projects in the database.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=103)** Let's modify our index.html file to read this project data.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=110)** In our index.html file, we'll want to loop through each project and show the project's title.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=117)** So let's delete these two entries and create a loop.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=125)** Here, we're saying for each project, we want to render the following HTML code.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=132)** That's a heading with the given project's title and a hyperlink that links to project and the project's project_id.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=140)** When the title is clicked, it will redirect to a given project's task page.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=146)** Let's save it and run our app.py file.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=150)** We'll activate our virtual environment and run, python3 app.py.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=160)** There's our project, Clean House, from our database.
>
> **[2:44](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=164)** Let's click it and it doesn't work.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=167)** We still see the static task.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=171)** Next, we'll integrate our task data so that each task is displayed on the tasks page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), class. (1), this, (1), delete (1), static (1)
> **File Paths:** index.html (3), app.py (2)
> **Code Identifiers:** render_template (2), project_id (1)
> **Env Vars:** html (3)
> **CLI Commands:** make (1), python3 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Integrate task data from a database into a Flask app
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=0)** - [Instructor] In order to feed the task data into our application, we need a task class.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=8)** Each record in our task table has a primary key a project ID that links with the project's project ID and a description describing what the task is.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=20)** We'll also define the task's relationship with the project model.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=27)** Now let's think about the tasks pages.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=30)** We'll want to show the title of the project as well as the tasks associated with the project.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=36)** This means we'll need to pass the project record and all the task records associated with that project via project ID.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=45)** Let's modify the render template call to have a parameter called project.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=52)** We'll retrieve the project with the project ID given in the URL.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=59)** There should only be one project with this ID.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=62)** So, we'll grab the first then we'll pass in the tasks as tasks.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=70)** We'll feed it all of the tasks with the project ID from the request.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=75)** With this render call complete, we just need to modify our project tasks HTML file to read this data.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=83)** Since we passed the specific project data as project and the app.py file, we'll reference it as project and the HTML file.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=93)** We called the project query with dot first which means this project is a single project.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=99)** It also means we can directly use its project attributes such as project ID and title.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=106)** Let's show the project's title.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=111)** We also passed in the tasks so we'll get rid of the two hard-coded tasks and wrap the remaining task in a for loop.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=119)** Then we'll modify the body of the for loop to read each task's data.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=127)** Since we're passing in the project itself instead of just the project id, we'll need to modify the link on the add new task form.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=136)** It should reference the project's project id.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=140)** Perfect. Let's run the application and see if our template can render the task data.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=146)** We'll activate the virtual environment and run app.py.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=154)** Let's refresh the page.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=157)** We still have our Clean House project and there's our task data.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=162)** We still have project up here so let's clean up this HTML file.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=168)** We'll take out project so we only see the project title.
>
> **[2:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=174)** Let's run it again and we'll refresh.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=181)** There's the project title with the task data.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=185)** All of this is coming from our Postgres database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), class. (1)
> **Env Vars:** html (3), url (1)
> **File Paths:** app.py (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Develop add functionality to add a project
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-project?u=76281980)

#### Develop add functionality to add a task
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=0)** - [Instructor] Let's create some more functionality that lets the user add tasks to their project.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=6)** We've already written the routes, so now we just need to read in the data from the request and feed it into the database.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=14)** In our project-tasks.html, we named the user's input task name, so that's how we'll access it in the request form in our app.py.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=26)** We'll want to add some error checking here just like we did with add_project.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=31)** We'll make sure the user enters a task name.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=38)** If the user entered a description, we'll create a new task and add it to the database.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=45)** Since the URL contains the project_id, we can use it to create the task.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=51)** We'll just pass it in.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=58)** After saving the data or lack thereof if the description was empty, we'll want to redirect to the individual project page.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=67)** This means we'll redirect to show tasks and we'll feed in our project id.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=76)** Of course, we aren't done yet.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=78)** We still need to modify the project-tasks.html page to render the flash messages.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=84)** Since the format is exactly the same, we can just copy paste from the index.html file.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=97)** Now we're ready to run the program.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=101)** We'll activate our environment and run python3 app.py.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=111)** Let's add a task to our project.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=115)** We'll add clean living room.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=120)** And it works as expected.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=122)** What if the description is empty?
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=125)** Nothing happens.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=126)** We don't crowd our database with empty data.

> [!info]- Semantic Content
>
> **File Paths:** project-tasks.html (2), app.py (2), index.html (1)
> **Code Keywords:** let (2), pass (1)
> **CLI Commands:** make (1), python3 (1)
> **Code Identifiers:** add_project (1), project_id (1)
> **Env Vars:** url (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Develop delete functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=0)** (cheerful music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=5)** - [Instructor] Throughout this chapter, we've been adding more and more functionality to our Python Project Tracker web application.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=13)** In this challenge, you'll develop delete functionality.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=17)** You should be able to delete individual tasks from a given project as well as entire projects.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=24)** Here are some of the use cases to watch out for.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=27)** If a user deletes a task, that task should be deleted from the database.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=33)** If a user deletes a project without tasks, the project should be deleted from the database.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=39)** If a user deletes a project with tasks, the project and each task associated with the project should be deleted from the database.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=49)** It's important to note that adding delete functionality will require changes to your app.py file as well as your HTML templates.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=59)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), for. (1), require (1)
> **Warnings:** watch out (1), note that (1)
> **File Paths:** app.py (1)
> **CLI Commands:** python (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful music) (1)

#### Solution: Develop delete functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=5)** - [Instructor] Let's add delete functionality to this application.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=9)** We'll start by writing the functionality to delete an individual task.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=14)** The route for this will be delete/task and then the task-id.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=21)** Technically, this route could be anything you want but I include the task_id because it'll be useful for the implementation to delete the task from the database.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=31)** Since we'll be deleting data and not retrieving data, we'll make this a POST method.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=38)** Since we have the task_id handy, we can query the task table and grab the individual task.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=48)** We save it in a variable called pending_delete.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=52)** Then we'll use a session object to delete the task.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=57)** To save these changes, we'll commit them.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=61)** With the database operations complete, we'll redirect the user to the individual project page.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=68)** This'll show all the tasks except the one we just deleted.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=74)** Now, how do we retrieve the original project ID?
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=78)** You might think we have to feed it in to the URL and the delete_task function, but there is a workaround.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=85)** If we go to our model classes, we can add back_populates to the project relationship.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=93)** We'll also add a relationship for the task.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=99)** Setting it up in this way allows us to reference each model from each other.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=105)** We can reference the task from the project and the project from the task.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=109)** The back_populates input references the other relationship, so task corresponds with task, and project corresponds with project.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=121)** With this implemented, I could write something like pending_delete_task.project.project_id.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=131)** We referenced the project from the task.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=134)** Now, unfortunately, we just deleted the task, so this current implementation will not work.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=141)** Instead, we can save the project_id before deleting the task.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=147)** Then we'll use it in the redirect URL.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=155)** That's our delete_task function.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=158)** Of course, there's nothing in our templates using this route.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=163)** We need to add a delete form to our task page so we can delete tasks with the user interface of our application.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=170)** Since we'll want a form for each individual task to delete that task, we'll add a form inside the for loop.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=181)** Perfect. Let's run the program and delete a task.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=187)** We'll activate our environment and run the program.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=198)** Here's our project page.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=200)** We'll click clean house and delete a task, and it's deleted.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=206)** We finished cleaning the living room.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=209)** Now let's add functionality to delete a project.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=214)** We'll create a route that's pretty similar to our other delete route.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=220)** We'll call it delete/project, and then input the project_id.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=228)** It'll be a POST method because we're modifying data instead of retrieving data.
>
> **[3:55](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=235)** For the implementation, we'll query the project's table and retrieve the project we want to delete.
>
> **[4:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=244)** To find that project, we'll pass in the project_id used in the URL.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=251)** Then we'll use a session object to delete the project and we'll commit the changes.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=261)** After the project's deleted, we'll redirect to the homepage.
>
> **[4:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=268)** This is great for projects that don't have any tasks but if a project does have a task, we would want to delete that as well, so we don't have any orphan tasks in our task table.
>
> **[4:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=280)** All tasks must be associated with a project and if we delete the project, we must delete the associated tasks as well.
>
> **[4:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=289)** There are few different ways we can do this but the simplest way is to add on to our relationship inside the project class model.
>
> **[4:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=298)** We'll add cascade all delete-orphan.
>
> **[5:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=305)** Now, when we delete a project, the associated tasks will automatically be deleted for us.
>
> **[5:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=312)** All that's left to do is to add a form to delete the project.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=317)** We'll add this form to the individual project page.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=328)** Perfect.
>
> **[5:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=330)** Let's try deleting a project without tasks and then a project with tasks.
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=336)** We'll restart our program.
>
> **[5:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=342)** We'll go back to the homepage and create a new project.
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=349)** Let's delete it.
>
> **[5:52](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=352)** And it's deleted.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=354)** We were able to delete a project with no tasks.
>
> **[5:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=358)** Let's delete a project with tasks.
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=360)** We'll add one more.
>
> **[6:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=362)** Clean bathroom.
>
> **[6:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=365)** Then we'll delete the project.
>
> **[6:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=369)** And it's deleted.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=371)** Let's double check our data and make sure it's been deleted correctly.
>
> **[6:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=377)** We don't want any orphaned tasks.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=385)** There's our project, and let's check the tasks table.
>
> **[6:30](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=390)** All of the tasks have been deleted.
>
> **[6:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=393)** This is exactly what we want.
>
> **[6:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=395)** Now, this isn't the end of your application.
>
> **[6:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=399)** There are so many more things you could add and develop.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=403)** For example, you could display a delete project button for each project on the homepage.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=410)** Instead of deleting projects and tasks, you could develop a way to have them shown as complete.
>
> **[6:57](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=417)** You could also add a way to initialize a project with a series of tasks or create a way to add multiple tasks at a time.
>
> **[7:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=426)** I encourage you to experiment and create even more functionality for this application.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (26), let (8), function (2), interface (1), pass (1)
> **Code Identifiers:** project_id (4), task_id (2), delete_task (2), back_populates (2), pending_delete (1)
> **Env Vars:** url (3), post (2)
> **CLI Commands:** make (2), find (1)
> **API Endpoints:** post  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 5. Conclusion

#### Continue building applications with databases
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=0)** - Congratulations on finishing the course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=3)** By getting practice using databases in real world applications, you've become more familiar with how databases can be used in Python.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=12)** From here, I encourage you to check out some of the other Python courses in the library.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=18)** For diving deeper into databases, try some of the courses focused solely on your database of choice.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=25)** SQLite, MySQL, or Postgres.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=29)** Understanding the nuances of the technologies your application interacts with can be the difference between spending a week on a coding problem versus an hour.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=40)** You may also want to dig deeper into some of the technologies we touched on.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=45)** These include Flask, pandas, and FastAPI.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=49)** If you want more practice with databases and Python, I encourage you to take my advanced Python, working with databases course.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=58)** This one explains more of the specifics of how SQLAlchemy works and the basics of how Python interacts with databases.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=67)** Becoming a better software engineer doesn't end with mastering a single programming language.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=74)** You may have stepped out of your comfort zone by taking this course involving databases, and I hope it encourage you to continue stepping out of your comfort zone as a technologist.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=85)** There's always something new to learn.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=87)** My name is Kathryn and I hope to see you again in some of my other LinkedIn learning courses.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), mysql (1)
> **Code Keywords:** continue (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-practical-database-examples-4363655)

## Skills Covered

- Python (Programming Language)
- Database Development

## Path Context

### In [[Master Your Python Skills]]
← [[Python Data Structures- Linked Lists]] | **6 of 11** | [[Unit Testing in Python]] →

## Appears In

- [[Master Your Python Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)