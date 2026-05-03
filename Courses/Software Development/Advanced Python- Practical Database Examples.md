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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Python-%20Practical%20Database%20Examples.md)

![Advanced Python: Practical Database Examples](https://media.licdn.com/dms/image/v2/D560DAQGTOqAc5WFE5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683311050722?e=2147483647&amp;v=beta&amp;t=gDIBPsu4C6-ge6rqmOrATTut_YekAZGbkQiCxpWChZg)

# Advanced Python: Practical Database Examples

> Looking for a hands-on opportunity to take your Python skills to the next level? In this course, instructor Kathryn Hodge takes you through a series of practical database examples to help level up your Python applications.Learn how to create an API that serves data from a database using FastAPI, Flask, MySQL, Postman, SQLAlchemy, endpoints, and more. Get proven tips on how to develop analysis appl

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-practical-database-examples) | 1h 48m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Use databases to level up your Python applications](#use-databases-to-level-up-your-python-applications)
- [**1. Creating an API that Serves Data from a Database with FastAPI**](#1-creating-an-api-that-serves-data-from-a-database-with-fastapi) (12 videos)
  - [What is an API?](#what-is-an-api)
  - [API frameworks in Python](#api-frameworks-in-python)
  - [Set up FastAPI in a Python application](#set-up-fastapi-in-a-python-application)
  - [Define a database schema](#define-a-database-schema)
  - [Create a MySQL database](#create-a-mysql-database)
  - [Create an API contract](#create-an-api-contract)
  - [Build a POST endpoint with FastAPI](#build-a-post-endpoint-with-fastapi)
  - [Call a new API using Postman](#call-a-new-api-using-postman)
  - [Add data to a database in Python using SQLAlchemy](#add-data-to-a-database-in-python-using-sqlalchemy)
  - [Integrate a database with a FastAPI application](#integrate-a-database-with-a-fastapi-application)
  - [Challenge: Develop a GET endpoint with FastAPI and a DB](#challenge-develop-a-get-endpoint-with-fastapi-and-a-db)
  - [Solution: Develop a GET endpoint with FastAPI and a Database](#solution-develop-a-get-endpoint-with-fastapi-and-a-database)
- [**2. Developing Analysis Applications with Pandas**](#2-developing-analysis-applications-with-pandas) (8 videos)
  - [Introduction to pandas](#introduction-to-pandas)
  - [Set up pandas and Jupyter Notebook](#set-up-pandas-and-jupyter-notebook)
  - [Analyze data with pandas](#analyze-data-with-pandas)
  - [Analyze data with Matplotlib](#analyze-data-with-matplotlib)
  - [Connect to a DB using SQLAlchemy within Juypter Notebook](#connect-to-a-db-using-sqlalchemy-within-juypter-notebook)
  - [Visualize data using SQLAlchemy, pandas, and Matplotlib](#visualize-data-using-sqlalchemy-pandas-and-matplotlib)
  - [Challenge: Ingest data and visualize it with Matplotlib](#challenge-ingest-data-and-visualize-it-with-matplotlib)
  - [Solution: Ingest data and visualize it using Matplotlib](#solution-ingest-data-and-visualize-it-using-matplotlib)
- [**3. Building a Full-Stack Task List Application with Flask**](#3-building-a-full-stack-task-list-application-with-flask) (14 videos)
  - [Set up Flask in a Python application](#set-up-flask-in-a-python-application)
  - [Create a webpage with Flask](#create-a-webpage-with-flask)
  - [Build a landing page](#build-a-landing-page)
  - [Develop additional routes to enhance your application](#develop-additional-routes-to-enhance-your-application)
  - [Build a project tasks page](#build-a-project-tasks-page)
  - [Create a Postgres database](#create-a-postgres-database)
  - [Instantiate a Postgres table using Python](#instantiate-a-postgres-table-using-python)
  - [Connect a database to a Python Flask project](#connect-a-database-to-a-python-flask-project)
  - [Integrate project data from a Database into Flask](#integrate-project-data-from-a-database-into-flask)
  - [Integrate task data from a database into a Flask app](#integrate-task-data-from-a-database-into-a-flask-app)
  - [Develop add functionality to add a project](#develop-add-functionality-to-add-a-project)
  - [Develop add functionality to add a task](#develop-add-functionality-to-add-a-task)
  - [Challenge: Develop delete functionality](#challenge-develop-delete-functionality)
  - [Solution: Develop delete functionality](#solution-develop-delete-functionality)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue building applications with databases](#continue-building-applications-with-databases)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Use databases to level up your Python applications](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/use-databases-to-level-up-your-python-applications?u=76281980&t=0)** - [Kathryn] When creating [[Python (Programming Language)|Python]] programs, you'll likely want to store data in some way. Whether that's populating data in an application automatically, or saving data between user sessions, [[Databases]] help you do this. They provide an organized structure so you can easily access, store and manage large amounts of data. In this course, we'll create three real-world example projects with integrated databases. The first one is a book API that serves data from a database using the FastAPI web framework. The second project covers how to work with databases in a data analysis setting with Jupyter notebook, [[Pandas (Software)|pandas]] and Matplotlib. The last project is a full stack application built on Flask. It'll be a web application that helps you keep track of a set of projects and associated tasks. Hi, my name is Kathryn Hodge and I'm a software engineer. Join me in my [[LinkedIn]] Learning course all about working with databases and Python so you can level up your Python applications. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Tools:** jupyter (1)
> **Speakers:** - [kathryn] (1)


### 1. Creating an API that Serves Data from a Database with FastAPI

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an API?](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=0)** - [Instructor] In this chapter, we'll be creating an API that serves data from a database. API stands for application programming interface. Let's walk through this acronym. The interface is the contract with which two separate programs agree upon to communicate. Let's say Program A, a mobile app, wants to send data to Program B, a backend service for storage. Program A and Program B will agree on a contract or an interface for how that data will be sent and its format. Once the interface is agreed upon, developers write code so that the data is sent in the correct format with the correct communication protocol. It's used in applications, which is where application comes from in API, so they can communicate and transfer data. It's done through programming; hence, application programming interface. An example where an API is commonly used is in the case of data retrieval. Let's say the mobile app wants to display dynamic data like the weather. They'll likely use an API to communicate with a backend service that has access to live weather information in a database. There are different types of APIs that use different protocols, but the most popular of these are [[Representational State Transfer (REST)|REST]] APIs. With a REST API, the client, in our case, the mobile app, sends requests to the server.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/what-is-an-api?u=76281980&t=96)** The server uses what the client sent to decide what data to return back to the client as a response. Now, you might be wondering why can't the mobile app just have all the data we need within it? It could have a weather database, a database with all the account information, and more. Well, this would make the mobile app very big. It would contain lots of code and it would be hard for several teams to work on at once. The mobile app should be focused on delivering information and visuals to the user, not on how to make data retrieval as efficient as possible. There might also be another system that wants to use the weather information, too, but it might live outside of the mobile app. This is why we often separate components to increase their reusability and decrease the complexity of a single system. In fact, we do this a lot with backend services to create [[Microservices]] that can be reused for many different applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Microservices]] (1)
> **Env Vars:** api (6), rest (2)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [API frameworks in Python](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/api-frameworks-in-python?u=76281980&t=0)** - [Narrator] When building an API, there are a few different libraries and frameworks you can use within [[Python (Programming Language)|Python]]. Flask is one option. It's a Python-based microframework used by developers to make micro web services. We'll be exploring Flask later in this course when we build a full stack application. Another option is [[Django]]. Django is a Python-based [[Representational State Transfer (REST)|REST]] framework that supports templating, [[Routing]], authentication, and management tools by default. It also integrates with [[SQL]] Lite, Mongo DB, and Dynamo DB. There's also Falcon. Falcon is a high-performance REST framework focused on quality control. It's used to build reliable application backends and easily integrates with no SQL. Given all of these, the technology we'll be building our API with is FastAPI. FastAPI is a modern, high-performance, web framework for building APIs with Python 3.7 and higher. It's easy to use, very fast, and minimizes code duplication. It's also fully compatible with open API and [[JSON]]'s schema. There are other API frameworks in Python that I haven't mentioned here, but FastAPI and Flask are the most popular. That's why we'll be focusing on them in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Django]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[SQL]] (2), [[Routing]] (1)
> **Env Vars:** api (4), rest (2), sql (2), json (1)
> **CLI Commands:** python (5), make (1), mongo (1)
> **Definitions:** is a  (3)
> **Versions:** python 3 (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### [Set up FastAPI in a Python application](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=0)** - [Kathryn] Let's create a basic web application in [[Python (Programming Language)|Python]] using FastAPI. To start off, we'll create a virtual environment, and we'll call it books. This will store all of our projects dependencies. Let's cd into it and activate it. Now we can install our dependencies. To use FastAPI, we have to have the FastAPI dependency. We'll also install so we can run our API on a web server. Without the web server, we won't be able to run our API. Let's create a folder for our Python code. We'll call it books-api, and we'll cd into it. Inside of this folder, we'll create a file called main.py. Let's head over to Sublime. Main.py. And we're saving it in our books-api folder. Let's import FastAPI and create a new application, from fastapi import FastAPI. We'll use this to create a new app. This initializes our application. Going back to [[Representational State Transfer (REST)|rest]] endpoints, every rest API is based on a contract. The client knows what URL or what endpoint to send a request in order to get the information they want back.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=94)** This means in creating our books-api, we'll define a contract that tells our clients what endpoints or what URL will retrieve data, as well as what the client will need to send in order to get that data. Before we dive too deep into that, let's create a basic endpoint or route on our API that returns some simple text. We'll put this on the home route of our application. With this piece of code, we say, when the user makes a get request on the home route, we'll run this function. Get is a special type of request that the client makes to retrieve information. The home route is always defined as a slash. When the client hits the endpoint or sends a request to the home route, we'll return a simple welcome string. "Welcome to the books api". Now let's run our application. Since it's an API, we'll need to use the tool in order to run it. will run a server on our computer and we will act as the client that requests information from the home route. Let's return to the main directory of this application, books. From here, we'll run our app, books-api.main:app --reload. In the output.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-fastapi-in-a-python-application?u=76281980&t=189)** We can see our application running on localhost or 127.0.0.1 on port 8000. Let's send a request to this application from the browser. We'll access 127.0.0.1 on port 8000, and there's our message, "Welcome to the books api". We can also see the documentation of this API at the docs route or the docs endpoint, so we'll add docs and here's our documentation. This comes for free with FastAPI. In our application, we allow get requests on the home route. When someone requests information, we return a string or text data. We've just created a very simple Python API using the FastAPI framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** api (7), url (2)
> **CLI Commands:** python (3), cd (2)
> **Documentation:** the docs (2), the documentation (1)
> **File Paths:** main.py (2)
> **Ports:** port 8000 (2)
> **Versions:** 127.0.0 (2)
> **Definitions:** is a  (1), defined as (1)

#### [Define a database schema](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=0)** - [Instructor] The purpose of our API is to host book data and allow different clients to access it. The book data will live in a database. Before we can store it there we need to define the schema for what we will store about a book and how we will store it. We'll be using SQLAlchemy to create our schema and access the data in our database. Let's install it in its dependency [[MySQL]] Connector. We'll be doing this in a virtual environment so let's activate it. And we'll install MySQL Connector. We'll also install SQLAlchemy. Perfect. Now we can look at some SQLAlchemy code that defines the schema. If you're using the exercise files these are located within the books API folder in a file called database.py. SQLAlchemy is a module in [[Python (Programming Language)|Python]] that helps you communicate with your database. Instead of writing raw [[SQL]] statements you can declare the interactions of your application in the database in a more Pythonic way. Let's dive into the code. This application connects to a MySQL database. That's the engine defined at the top. Then it defines some models using the SQLAlchemy ORM. Each model represents a table.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/define-a-database-schema?u=76281980&t=95)** For example, the author model represents a table of authors. It has columns for author_id, first name, and last name. Another table called books is represented with the book model. Each book will have an ID, title and set number of pages. The last model is book authors. Its columns are id, author_id , and book_id. This helps us associate the book data with the author data. To learn more about the SQLAlchemy ORM I encourage you to check out my other database course, [[Advanced Python- Working with Databases]]. This other course goes deeper into the inner workings of SQL Alchemy. While here, we'll briefly touch on it so we can focus on the overall application. Now, before we run this Python file we need to create a books database. That's what we connect to when we run the engine. SQLAlchemy cannot create [[Databases]] on its own. We'll also need to install MySQL. A relational [[Database Management]] system or RDVMS that allows us to create our database. But this is a good start. We know what data we'll be storing and how we'll be storing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), [[Python (Programming Language)|Python]] (3), [[SQL]] (2), [[Databases]] (2), [[Database Management]] (1)
> **CLI Commands:** mysql (4), python (3)
> **Env Vars:** api (2), sql (2), orm (2), rdvms (1)
> **Prerequisites:** install (4)
> **Code Identifiers:** author_id (2), book_id (1)
> **Definitions:** is a  (2)
> **File Paths:** database.py (1)
> **Exercise Files:** exercise files (1)

#### [Create a MySQL database](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=0)** - [Instructor] Let's install and configure the tools to create a [[MySQL]] database. If you don't already have MySQL installed you can download it from this website. I already have it installed, so I won't be installing it but this would be the place to go to install it. Once it's installed, the path needs to be updated so we can use the MySQL Shell in the command line. This will be different if you're on a [[Windows]] computer but on a Mac you can use what type of shell you're running to determine where to update the path. We'll use echo SHELL to find out which shell we're running. In this case, ours is bin/zsh. This means we'll need to update our .zshrc file in our home directory. We can navigate to our home with cd tilde. Then we'll open up the file with nano dot zshrc. Inside of here, we have two entries that tell our shell where MySQL is located. We have the MySQL bin and MySQL support files. We add these to our path so we can execute MySQL in the command line. To save any changes to this file we can do Control O, Enter, and then Control X. This saves our changes and exits out of the editor. With the path set,
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=95)** we can create our database and add some tables. We'll log into our database through the terminal with MySQL. You can use a GUI such as MySQL Workbench instead, but since we don't want to go too deep into tooling, the terminal should work great for us. To log in, we'll use sudo mysql dash U root, so we're logging in with the root user and then dash P. The first password you'll enter is for your machine. So if you're on a Mac machine or Windows machine, what do you use to log in to your system? This is your laptop or desktop password and it's used for sudo. Now we're on the login command. We're logging into MySQL, so we'll use the password we configured when installing MySQL. This might be different from your desktop or laptop password, and we're in. Let's create our database. It'll be called books. In another terminal window, we'll access our virtual environment and run our database.py file. Let's navigate to that file. We'll activate our environment and then run the with [[Python (Programming Language)|Python]] database.py. Now let's check if our tables have been added with our MySQL shell.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=188)** We'll go over to our other terminal tab and query for our data. To see the tables, we can write SHOW TABLES, and there they are. We created them with Python. We can also see their columns with the DESCRIBE keyword.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-mysql-database?u=76281980&t=216)** This is exactly what we set up in Python. We've successfully created a MySQL database with tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (14), [[Python (Programming Language)|Python]] (3), [[Windows]] (2)
> **CLI Commands:** mysql (14), python (3), sudo (2), find (1), cd (1)
> **Tools:** terminal (4), command line (2), zsh (1)
> **Env Vars:** shell (1), gui (1), show (1), tables (1), describe (1)
> **Prerequisites:** install (2), configure (1), set up (1)
> **UI Navigation:** navigate to (2), go to (1)
> **File Paths:** database.py (2)
> **Analogies:** such as (1)

#### [Create an API contract](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=0)** - When a client wants to put a new piece of data into our books database, they'll use our API. Currently, our API only has a hello world type endpoint where the client runs a get request to the home route. We need to add a new endpoint that allows the client to add a book to our database. GET is a type of HTTP method used with [[Representational State Transfer (REST)|REST]] APIs. It's used to request information. Other types of HTTP methods also exist such as POST, PUT, DELETE, PATCH, and a few others. In this chapter, we'll be focusing on POST. When a POST request is made to an API, typically it creates a new resource. In our case, it will create a new book and add it to our database. For the POST endpoint, we need to create a contract for how the client will send us the data. The client will send a POST request to the book endpoint or the book route. In the request, the client will also send a request payload. That's data sent with the request. This payload will contain data on what book to add to the database. The payload will be in [[JSON]] format or [[JavaScript]] Object Notation. This is a common format for transporting data. There will be a field for a book containing title and number of pages values.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-an-api-contract?u=76281980&t=94)** The title will be of type string and number of pages will be an int. There will also be a field for the author with the first and last name as strings. When the user sends a request, they'll send a POST to the book endpoint with the payload similar to this. The keys, which are book, title, number of pages, et cetera, will remain the same but the values will change. In our [[Python (Programming Language)|Python]] code, we'll use these keys to retrieve the values the user sends. That's why it's so important to agree with the client on a contract. The client must send the data in a specific way so that the server code can actually retrieve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1), [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** post (6), api (3), http (2), rest (1), put (1)
> **API Endpoints:** post  (4), get  (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** python (1)
> **Speakers:** - when (1)

#### [Build a POST endpoint with FastAPI](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=0)** - [Instructor] Let's implement the POST endpoint so the client can add a book to our database. The route is book, so we'll add that with the POST method. When the user sends data to this route we'll want to run a function that adds data to the database. The input to this function will be data that the user sends as a part of the request payload. We'll make this the BookAuthorPayLoad data type. In order to use this type we'll need to define it in our application. We'll do that in a separate file called schemas. We'll call it schemas.py, and this will be in the same folder as our main.py. Inside of here, we'll define the BookButhorPayLoad. It'll contain a book and an author. Now let's define the book and the author. Since this payload uses them we'll place them above the payload in our file. The book will have a title as a string and number of pages as an int. The author will have a first_name and a last_name. Both of these will be strings. We've defined our data as classes but in order to make them into models, we need to create them based off the base model from pydanic.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-post-endpoint-with-fastapi?u=76281980&t=94)** Let's import it from the pydanic module. We'll feed the base into our model classes. Our data schema is created. Let's import this into our main application. With this import, we can access the BookAuthorPayLoad data type from our schemas import. So we'll write schemas.BookAuthorPayLoad. Now for the body of the function. We won't access the database just yet. First, we'll confirm that we're able to retrieve data from the client. We'll print out each data piece to the output. That's it. We've just created our first POST endpoint with FastAPI.

> [!info]- Semantic Content
>
> **API Endpoints:** post  (3)
> **Env Vars:** post (3)
> **File Paths:** schemas.py (1), main.py (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** first_name (1), last_name (1)
> **Speakers:** - [instructor] (1)

#### [Call a new API using Postman](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=0)** - [Instructor] Let's test our API. While we were able to make requests to the get endpoint using the browser, most of the time, we'll be using a special software to make API requests. In this case, we'll be using Postman, which is an API platform designed for developers to build and test their APIs. We can install it from the Postman website. Once it's installed, we can set up a collection that contains templates for each of our endpoints. Let's create one. We'll click new, collection. We'll call it Book APIs. Then we'll create a request to our POST API. You can left click on the collection or click the three dots. Add request. We'll call this one Add Book and save it to our collection. Notice it defaults to a get request, so we'll change it to post. For the request URL, we'll use the same host we used in the browser. The main difference is the route. So that's 127.0.0.1 at port 8,000. Then we'll add our route, book. Now for the last piece, the data we want to send
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=93)** and add to the database. We'll click on the body tab, select raw, and we'll be using [[JSON]] format. This is where we'll write the data to send to our [[Python (Programming Language)|Python]] application. We'll send "The Huntress". This is a book by Kate Quinn. Perfect. Our request is ready to be sent. Let's start up our Python app so we can send it. We'll also save our request in Postman so we can use it later on. We'll go to our terminal and make sure we're in the books folder. Looks like we need to cd back into books. Then we'll activate our environment. Source, bin, activate. From here, we'll use uvicorn to start up our app. The app is running. Let's send our request in Postman. Everything is set up, so all we have to do is click send. Let's check out the response. We get a 200 response code back. This means everything is good. Our request went through and it was successful. We also get a text response. It has the dynamic data from our request. Let's try sending a different request. Instead of "The Huntress",
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/call-a-new-api-using-postman?u=76281980&t=188)** we'll send "The Alice Network". Let's send it. Now the title is "The Alice Network". We get a different response back. We can also look at the terminal window to see our request go through. Here, there are two post requests to the book endpoint. Each time, the server returned a 200 OK response code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[JSON]] (1)
> **Env Vars:** api (4), post (1), url (1), json (1)
> **CLI Commands:** make (3), python (2), cd (1)
> **Tools:** postman (4), terminal (2)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** is an  (1), is a  (1)
> **Ports:** port 8 (1)

#### [Add data to a database in Python using SQLAlchemy](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=0)** - [Instructor] Before we can add data dynamically to our database, we need to create an easy way for an outside module to interact with it. In this case, an easy way for an outside module, to add a book. Let's create an addBook function to our database.py file. Eventually, this will be used by the main.py application to add a book to the database. It'll take in a book and an author. Now, to interact with the database we'll need to start a session. In this function, we have three tasks, update the book table, update the author table and update the pairings table. We also don't want to add any data that already exists. This means before we add data we should run a query to check if the data already exists in the database. We'll start with our book data. With [[SQL]] Alchemy, we can use the select function and filter where the book data is the same as the data passed in. Here, we select a book where the title is the same as the title passed in, and the number of pages is the same as the number of pages also passed in. The scalar call at the end means we'll retrieve the first row of the result.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=97)** If any data comes back, we'll want to exit the function because the book has already been added. If the book's been added, we'll also assume the author and its pairing have also been added. That's why we exit here. Now if the book does in fact need to be added, we'll add it with the session. Then we'll do the same thing with the author. We'll check if the author has already been added to the database.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=137)** If the author exists, we'll only add the book. Then we'll create a pairing between the existing author and the new book.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=159)** If the author does not exist, we'll add the author and then create the pairing.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=171)** We have to flush the session because otherwise the author ID on the new author would not exist. Same for the book ID above. That's why we have to flush the session. It updates the object, so the ID is not null. Once we've updated the book and author tables, we need to update the pairing table.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/add-data-to-a-database-in-python-using-sqlalchemy?u=76281980&t=198)** We can do that by adding it to the session. Then we'll commit the changes. At the end, we print the new book information we've added to the database. Now, looking at this file more closely, there are a few things we missed. One thing is we use select, which is a keyword. We need to add this at the top as an import so we can use it without referencing the SQL module. We also use the keyword, session. We can add that at the top. It comes from the SQL ORM module. The last thing we need to add is a reference for a title. Where is title coming from? It's coming from our input, book, so we need to add this in our filters for both title and number of pages. We want to select the book, where the number of pages is equal to our input. This is true for the author as well. We want to use our author input data to decide if the author already exists in the database. Now we've created a function that dynamically adds a book to our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **Env Vars:** sql (3), orm (1)
> **File Paths:** database.py (1), main.py (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** addbook (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Integrate a database with a FastAPI application](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=0)** - [Instructor] We have two components set up in our tech stack. We have the FastAPI [[Python (Programming Language)|Python]] application and the code that interacts with our database. Let's connect these components. In our main application, the main.py file, we'll import the database file. With this import, we'll be able to use the add_book function. We'll call add_book and pass in the requests, book and author. Now, unfortunately, it's not that easy. The book schema from our request is not the same as the database book schema. While they might look the same, our request payload schema is defined in our schemas file and the database book schema is defined with a different base in our database file. This means we need to convert the request data into the database schema format. We'll start with the book first. We have a convert function that takes in a book where the type is defined in the schemas file. We'll convert this into a database book by accessing the database module and instantiating a new book. We'll also do the same for our author. To use these, we'll call them with our request data.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=91)** Now, you might be thinking, "Could I use the same model?" Well, it's probably a good thing they're different. This means that what the frontend sends and what the backend saves in the database are less coupled. If the database wants to add another column, they can do so without the client needing to send additional information. The converter code might need to be changed, but the new column could have default data until the client is ready to send the additional data they want saved in the database. So we've just integrated our database with our FastAPI application. Let's test it out. We'll navigate to our books folder and activate our environment. Looks like we're already there. Then we'll run the uvicorn command to start up our server. Using Postman, we'll send a new book to be added to the database; "Where the Crawdads Sing," by Delia Owens. And it looks like it was successful. Checking the logs, the new book has been added. We can also check with the [[MySQL]] shell. Let's open up another tab in the terminal window. We'll log in to the MySQL shell. Let's select all the data from books. There's our book, "Where the Crawdads Sing" with 386 pages.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-a-database-with-a-fastapi-application?u=76281980&t=190)** What about our author? There's Delia Owens. What about the pairing? We have author_ID two paired with book_ID two. This is exactly how we want our data organized. We just used an API to add data to our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** mysql (2), python (1)
> **Code Identifiers:** add_book (2)
> **Tools:** postman (1), terminal (1)
> **File Paths:** main.py (1)
> **Env Vars:** api (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** means that (1)

#### [Challenge: Develop a GET endpoint with FastAPI and a DB](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-a-get-endpoint-with-fastapi-and-a-db?u=76281980&t=5)** - [Instructor] It's time for a challenge. In our book, "API Application," we've created a post endpoint that allows clients to add books to the database. Sometimes clients will also want to retrieve data from the database. We can develop this functionality by adding a GET endpoint to our application. The client will provide a book id and we'll use that id to retrieve information about the book from the database. We'll also return the author's information associated with the book. Your job is to create a GET endpoint on the route /book/{book_ id} where book id is a path parameter that evaluates to the id of the book. This means if the client wants to retrieve the book with id five, they'll use the /book/5 route. If a client wants to retrieve the book with book id seven, they'll use /book/7. This is the API contract. We didn't cover path parameters in this chapter but this is a good opportunity to use your research skills. Given that you are now familiar with FastAPI, [[Python (Programming Language)|Python]] and integrating dynamic data from a database, can you figure out how to dynamically accept an input within a route? Good luck and happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **API Endpoints:** get  (2)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Develop a GET endpoint with FastAPI and a Database](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=0)** - [Instructor] Let's add a dynamic get endpoint to our book API application. To start off, we'll add a get route. The route will be book and then a path parameter representing the book's ID. To add a path parameter, we'll need to do some research. Let's [[Google]] path parameters in FastAPI. Here, it says we can declare the path variable using the same format as we do [[Python (Programming Language)|Python]] strings. We'll use two curly braces and then also use it as input to the function. Let's add that to our implementation. When someone uses this route, we'll want to run a function. We'll call it retrieve_book. For the input, we'll have book_id from the path. It'll be an int. Now in order to retrieve the book, we'll need to interact with our database. We'll call a function called get_book from our database file. We'll also pass in the book ID so it knows which book to retrieve. Let's implement this get_book function in the database file. It'll be a new function with book_id as a parameter.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=98)** Then, we'll create a session with the database so we can retrieve the book. To find the specific book we're looking for, we'll use a select statement. We'll select the book where the book ID is the same as the one passed in. With the scalar function, we'll return a single object with the book data. Now, in addition to the book data, we also want to return the corresponding author data. Let's query our pairings table to find the ID of the author.
>
> **[2:24](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=144)** Here, we use that book ID again to find the pairing. To find the author, we'll use the author_id from the pairing returned. So now we have our book data and our author data. We just need to return it from the function. We could create a custom object to return it but here, we just use a tuple. Let's test out our new functionality. We'll activate our environment and start our server. To request the book information, we'll use Postman. We'll create a new request inside of our collection.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=201)** We'll retrieve book ID two. That's the book we added in a previous video. Let's request it. There's our book data. We have "Where the Crawdads Sing" as the book and then the author, Delia Owens. Now let's try it with an invalid index. Say eight. We get an error. Let's check the logs to see what happened. It seems like the author and the book were missing from the application. Instead of returning an internal server error, we could actually return a 404 for this case. 404 is an error code that means not found. Since the book or the author was not found, this type of error is ideal. The first step to implement this is to have our database function throw an error when the book does not exist. If upon retrieving the book, its value is none, that means the book does not exist in the database. So if the book is none, it does not exist so we'll raise an exception with the message book does not exist. Then in our main.py file, we can catch this exception and raise a 404 error.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=299)** So we'll try to retrieve the book and if we get an error, we'll output it to the console and turn it in to a 404 error. Now technically, this catches every exception thrown by the get_book method. We could improve upon this by creating a custom database exception that's used for this not found case. Let's try accessing a book that's not found. Since we used the dash dash reload option On the uvicorn command, it automatically reloads the code when we update it. It detects the changes and restarts the server. Let's try this request again. Looks like we need to add an import. From FastAPI, we'll also import HTTPException.
>
> **[6:04](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-a-get-endpoint-with-fastapi-and-a-database?u=76281980&t=364)** Let's try it again and there it is. Our exception that the book does not exist and the error code is 404. We just created a get endpoint with proper error handling that retrieves information from a database. If you want to expand on this application, you could create endpoints where you can retrieve a book by title or the books of an author. You could also organize the code a bit more by moving the converters or the database schema to a separate file. Another option is to add more error checking to the user input. We trust the client's input pretty heavily for the book author payload and that we trust the number of pages is a positive number and that the title is in gibberish. We could add more error checking here to make sure the client's information is valid. We could also add authentication, making sure clients authenticate with an API token when they use the API. There's always something to improve or some addition you can make when working on a Python application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Google]] (1)
> **CLI Commands:** find (4), python (2), make (2)
> **Code Identifiers:** get_book (3), book_id (2), retrieve_book (1), author_id (1)
> **Env Vars:** api (3)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** main.py (1)
> **Cross-References:** previous video (1)
> **Tools:** postman (1)


### 2. Developing Analysis Applications with Pandas

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to pandas](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=0)** - [Instructor] As a [[Python (Programming Language)|Python]] developer, sometimes you might not be developing a consumer product. Instead, you'll use Python to analyze and manipulate data in order to discover new information about that product. Rather than serving up information from a database to a customer, you might want to work with data in memory to find new trends that inform how you build a given application or modify your workflow. You'll often see this type of work in finance, advertising, [[Web Analytics]], and economic domains. So far, we've created a database and a Python web API that interacts with it. In this chapter, we're going to look at interacting with [[Databases]] for the purposes of [[Data Manipulation]] and analysis. We can do this with a tool called [[Pandas (Software)|Pandas]]. Pandas is a library that gives us lots of tools for doing practical, real world data analysis and Python. It features robust built-in [[Data Structures]] that can help you organize your data and memory and gain meaningful insight from that data. Along with these analysis tools, Pandas also has a tight integration with SQLAlchemy for working with databases so you can easily access the data you want to work with. When you're analyzing data with Python, likely, you won't be making a traditional application. Instead, you'll be writing code to make diagrams,
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/introduction-to-pandas?u=76281980&t=97)** plots and calculations and analyzing the visualizations they return. This means we won't be working in sublime but rather in a tool called Jupiter Notebook. Jupyter Notebooks allow you to create and share pages that contain code, visualizations and equations on the fly. Making computing interactive which is very useful if you're analyzing data. Writing Python code with Pandas in a Jupyter Notebook will set us up for success when analyzing data in Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Pandas (Software)|Pandas]] (4), [[Databases]] (2), [[Web Analytics]] (1), [[Data Manipulation]] (1)
> **CLI Commands:** python (7), find (1), make (1)
> **Tools:** jupyter (2), sublime (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Set up pandas and Jupyter Notebook](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=0)** - [Instructor] Let's create a Jupyter Notebook and analyze some data with [[Pandas (Software)|Pandas]]. First, we need to install Pandas in Jupyter. We'll do this in a virtual environment. We'll CD into it and activate it. Inside of here, we'll install our dependencies. The first one will be Pandas. The next one will be Jupyter. We'll also install Matplotlib, which will allow us to create some visualizations. Let's start up our Jupyter Notebook. We can do that with Jupyter Notebook. This starts up a Jupyter Notebook server so we can write interactive [[Python (Programming Language)|Python]] code. Here we can see some information about the notebook server, including the URL we'll use to access and write code in the notebook. Running Jupyter Notebook also opens up this browser with the same URL. If, for some reason, the window didn't open up, you can always use these URLs. This is the notebook dashboard where we'll be able to see all the notebooks and files we've created. Let's create our first. We'll go to New Python 3. Let's try running some code in our first notebook.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-pandas-and-jupyter-notebook?u=76281980&t=96)** We'll call it Pandas Practice. Let's execute a Hello World statement. To run this piece of code, we'll hit Shift + Enter. This runs the Hello World print statement, shows its results, and then selects the next frame for us to edit or run. While this might not seem very exciting for a print statement, it becomes very interesting when creating visualizations with Python for data analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (4), [[Python (Programming Language)|Python]] (3)
> **Tools:** jupyter (7)
> **CLI Commands:** python (3), cd (1)
> **Prerequisites:** install (3)
> **Env Vars:** url (2)
> **Versions:** python 3 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Analyze data with pandas](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=0)** - Let's import the [[Pandas (Software)|pandas]] module and do some analysis. This cell won't have any output but we'll be able to use pandas in this Jupiter notebook now. In order to do some data analysis, we need some data to work with. This data represents some orders from a tech company called Red 30. This is provided in the exercise files and on [[GitHub]]. We'll import it into our application using a function from the pandas library, read_csv. For the input, we'll put the name of the file, red30. The read_csv function returns the data in the form of a data frame. That's why we have the variable name as df. A data frame is a two-dimensional pandas structure, very similar to a table. Let's take a look at the data inside the data frame from the red30 CSV file. We can retrieve the first five entries with df.head. Then, we can retrieve the last five entries with df.tail. To understand the different fields, we can use df.info. We can also use df.describe. This gives us various [[Statistics]]
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=93)** about the values in each column overall. This includes the mean, number of entries, minimum, maximum, and more. While these functions give us general information about the data, we can dive deeper by selecting column in the data frame and running functions on it. In pandas, we can inspect these column variables with a function called value counts to see the most common values for a given variable or column. Let's take a look at what value counts returns for the product category column. We'll select the column from the data frame prodcategory. It looks like eBooks is the most common category for our customers, coming in at 1,296 orders. What about order type? Interesting. Wholesale orders are more common than retail orders. The value counts function works best for variables with a small set of values, but for numerical values, using describe to get a distribution of the data may work better. Let's look at some information about the order total column. This is numerical, so the describe function will work best. It looks like the most frequent purchase is $12 and 90 orders in our [[Databases]]
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-pandas?u=76281980&t=185)** are that number. Let's try using value counts. Interesting. It looks like purchases are all across the board but overall under a hundred dollars for the most part. Given all of this in a few lines of code, we were able to get a better understanding of our data using pandas with [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (6), [[GitHub]] (1), [[Statistics]] (1), [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** read_csv (2), ebooks (1)
> **CLI Commands:** python (1)
> **Env Vars:** csv (1)
> **Tools:** github (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Analyze data with Matplotlib](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=0)** - [Lecturer] Now that we're a little more familiar with the data, let's try creating some visualizations. We'll leverage the Matplotlib module. By using both [[Pandas (Software)|Pandas]] and Matplotlib, we can make a histogram of the values in a given column. Let's try plotting a histogram with the values and the quantity column and see how many [[Microsoft Products|products]] are bought in a given order. We'll select the data frame quantity, and then use hist. It looks like most orders are small, containing under 10 items. We can also make bar graphs. Let's graph the prod category column and see what the top product categories are for orders. We'll use value counts and plot a bar graph.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-practical-database-examples/analyze-data-with-matplotlib?u=76281980&t=56)** We see e-books again, but training videos, blueprints drone kits, and robot kits are also popular. This is only an introduction to Pandas and Matplotlib, and there are so many more methods you can run on your data. There are also several other libraries you can use to learn more about your data. If this interests you, I encourage you to check out some of the courses in the [[LinkedIn]] Learning library that focus on [[Data Manipulation]] and data analysis in [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Microsoft Products|Products]] (1), [[LinkedIn]] (1), [[Data Manipulation]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [lecturer] (1)

#### [Connect to a DB using SQLAlchemy within Juypter Notebook](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=0)** - [Instructor] While reading CSV data and manipulating it with [[Pandas (Software)|Pandas]] is interesting. It would be even more interesting to integrate SQLAlchemy so we can access data from a live database. In our virtual environment, let's install a module that lets us connect to a database from our application. We'll be connecting to a SQLite database but you could connect to a different type of database as well. Let's install SQLAlchemy. Let's start up Jupyter Notebook. Our database is stored in a file called Salespeople SQLite and it's located in the exercise file, specifically in our Panda's workspace. This database has a single table called salespeople that lists different sales representatives working for the company. Let's use SQLAlchemy to connect to this database.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-to-a-db-using-sqlalchemy-within-juypter-notebook?u=76281980&t=66)** We'll use Create Engine to connect to the database. Salespeople SQLite. While this is fine and dandy, we might want to make our application a little more dynamic. Instead of hard coding the database name, we could make it an environment variable for our computer to read into the file. All we have to do is stop our notebook and export the value we want it to be named. We'll export SALESPEOPLE_DB_URI and put in our connection string. Let's restart the notebook. If you happen to get an error in the right hand corner, just refresh the page. We can access our environment variable using the OS module's environ. From OS, we'll import this tool. Then we'll use it to retrieve our environment variable. We'll pass that in to our create_engine function. If you happen to get an error, you can always rerun your cells to make sure everything is imported. And there it goes! Our database is now connected to our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** csv (1), salespeople_db_uri (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** create_engine (1)
> **Tools:** jupyter (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Visualize data using SQLAlchemy, pandas, and Matplotlib](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=0)** - [Instructor] In order to use data in our application, we'll need to import it. In fact, we can load the data directly into a [[Pandas (Software)|Pandas]] data frame making it really easy to work with. We can use the read [[SQL]] table method to load a table from the database. The table is called salespeople and we'll pass in our engine's connection. While adding just these two arguments will work, we can actually be more specific in importing our data. Extra parameters make sure the data's read in as expected. Let's walk through these parameters. The index column allows you to pass your primary key or another column you want to use as an index to your Pandas data frame. Coerce float looks at the columns containing numerical values and tries to convert these columns to use floating point numbers where valid. It's automatically set to true by default. Columns allows us to create a data frame with specific columns from our database, excluding the others. It's similar to the SQL Select on X columns statement. If we have date column types in our database, we need to explicitly state them so they're converted correctly when creating our Pandas data frame. Chunk size allows us to create a generator object
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=95)** where data is streamed a certain number of rows at a time. Here 250 rather than all at once. In analyzing the data, you use the generator to iterate over chunks of the data. For now, we'll comment this out so we have it for reference. It's important to note that SQL Alchemy2 is very new, and with all new things, they're likely to change. If this statement doesn't work for you, consider looking at the linked documentation. Let's take a look at this data frame. Here's our data in a Jupyter notebook. Let's grab the email address data. We'll access our data frame salespeople_df and retrieve the email address column. Lots of emails, these will likely be different for each entry. Let's check out another column. Say the state. There are only 50 states, so some of these are likely duplicated. Let's create a quick visualization to see which states most of the salespeople are from. We'll access that same column and use value counts. It looks like most people are from Texas. Let's see it with a bar graph. For this, we'll import matplotlib.
>
> **[3:15](https://www.linkedin.com/learning/advanced-python-practical-database-examples/visualize-data-using-sqlalchemy-pandas-and-matplotlib?u=76281980&t=195)** It'll be a bar graph. A few from Minnesota, Florida, and Virginia too. It's pretty incredible what you can do with [[Python (Programming Language)|Python]] when you combine several libraries and tools with [[Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[SQL]] (3), [[Python (Programming Language)|Python]] (1), [[Databases]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** salespeople_df (1)
> **Tools:** jupyter (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Challenge: Ingest data and visualize it with Matplotlib](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-ingest-data-and-visualize-it-with-matplotlib?u=76281980&t=5)** - [Instructor] It's time to practice ingesting and visualizing data. In this challenge, you'll be given a new database that you need to visualize the data of. Here's what the data looks like. There are columns for order ID, property ID, state, city, product ID, product category, product type, quantity, product price, and order total. It represents sales for the Landon company. We've already transferred this data into a sqlite database file called landon.sqlite. It lives in a table called sales. Your job is to import this data into a Jupyter notebook. Then you'll create a graph that visualizes a statistic or fact of the data. It could be a bar graph that shows what city most orders came from. It could be a pie chart that shows the least popular product categories. It's up to you. Good luck, and happy coding.

> [!info]- Semantic Content
>
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Ingest data and visualize it using Matplotlib](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=5)** - [Instructor] Let's practice ingesting data from a database in Jupyter Notebook. We'll start by importing SQLAlchemy. SQLAlchemy will help us connect to the database. To connect to the SQLite database, we'll create an engine. The input will be our SQLite file with our data in it. That's sqlite:///landon.sqlite. We'll ingest the data with [[Pandas (Software)|pandas]]. And we need as pd so we can reference it as pd in our file. To read in the table we'll use the read_sql_table function and pass in our table name along with a few other inputs. These include the connection and the index column.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=68)** Order_id will act as our primary key, so that's why we set it in our index column. Let's visualize the data. We can sort the order totals and view them with the sort_values function. We'll use that on the data frame. We'll sort the values by order total. It looks like one of the smallest orders was $3 and the largest for $900. We can also see where the order came from. Let's check out how many orders came from each state. We'll use the property state column and the value_counts function. Most of the orders came from Virginia and California. We can view this as a pie chart with matplotlib. We'll use the pie function to create a pie chart of the top 10 states people ordered from. It'll use the value counts of the property state column and then the associated column values to create the chart. To retrieve the first 10 rows we'll use .head. Now, we'll want to label each piece of the pie using the column value. So that's California, Virginia, Pennsylvania,
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-ingest-data-and-visualize-it-using-matplotlib?u=76281980&t=163)** or whatever the state is. To retrieve this, we'll take the code we just used and then access the index. Then we'll convert that to a list, that'll give us the state labels we want in list form. Let's run it. One thing we forgot here is we need to add labels to the beginning of this. This sets the labels for our data in the pie chart. Here it is. It looks like we're only seeing five, and that's the default if you don't put an argument in for head. We want 10 in there, so we'll put 10 as the argument. And there it is, we have 10 states in the pie chart. It looks like Virginia and California are pretty similar, and Washington is about half of California. If we look at the numerical data, Washington is close to 250 and California is close to 500. So this pie chart looks accurate. Congratulations, you just analyzed and visualized data from a database using [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** read_sql_table (1), sort_values (1), value_counts (1)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Building a Full-Stack Task List Application with Flask

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up Flask in a Python application](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=0)** - [Instructor] Onto our last project, a full stack web application that interacts with the database. We'll be creating a web application that keeps track of ongoing projects and tasks associated with those projects. The first page of our web application will list all the projects we're working on and give us the ability to add a new project. Each project will have a link that takes us to a different page to see the tasks associated with that project. From the task page, we'll be able to add new tasks for that project as well. To keep track of our projects and associated tasks, we'll be using a [[PostgreSQL|Postgres]] database and SQLAlchemy in our [[Python (Programming Language)|Python]] application. We'll also be using Flask which is a Python micro framework. With Flask, we'll be able to connect our routes to our webpages and add functionality to trigger data modifications in our database. Our webpages will be built with basic [[HTML]] and CSS. The goal of this course is to look at how [[Databases]] can be used within a Python application. So while we'll introduce Flask and some other web technologies, the focus is on what you can build by using databases in Python. If any of these other technologies spark your interest, I encourage you to check out the other courses in the library. With an idea of how our project will work, we can start to set up our virtual environment. We'll need to CD into the workspace to activate it.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-practical-database-examples/set-up-flask-in-a-python-application?u=76281980&t=102)** Now, we'll use a few dependencies in this project. The first is psycopg2-binary. This will allow us to connect to the Postgres database. We'll also install SQLAlchemy. This will make it easier for us to interact with our database in Python. The last thing we'll install is Flask. Flask will help us build an API and wire our application together. With these tools installed in our virtual environment, we can begin to create our full stack Python web app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[PostgreSQL|Postgres]] (2), [[Databases]] (2), [[HTML]] (1)
> **CLI Commands:** python (6), cd (1), make (1)
> **Env Vars:** html (1), css (1), api (1)
> **Prerequisites:** install (2), set up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a webpage with Flask](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=0)** - [Instructor] With our virtual environment set up, let's open up Sublime and start setting up our application. The first step is to set up a simple Flask gap. This version won't link to a database. Instead, it'll contain static content that doesn't change. Later, we'll replace the static content with dynamic links to our database. Let's save this file in our workspace. We'll call it app.py. Then we'll import Flask. We also import render_template, which will help us render our [[HTML]] files. Next, we'll initialize our application. We create it with the name of the file and save it in a variable called app. With this app variable, we'll be able to set up all the routes in our application for our website visitors to go to. Like we saw with FastAPI, these routes are the different URL paths in our application we're providing content for. The first route we'll define will be the home route. We'll link it to a function called show projects. This function will render a template and will pass in the file we want it to render, index.html. Let's make this HTML file. First we'll create a folder named Templates.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-webpage-with-flask?u=76281980&t=95)** This is where the render template function looks for a given HTML file, and our index.html will write up a simple HTML page. It just has a header that says Projects. Let's go back to our app.py file and set up our application to run. We'll access our app and call the run function. Here, we set the host to our local IP address, and the port to 3000. This means the app will run locally on our machine at our home address, on port 3000. Let's run this application. We'll head over to our terminal. There are a few ways we can run the app, but to keep things simple we'll just run our application with python3 app.py, and this is with my virtual environment already activated. Let's check it out. We'll copy the URL and put it into a browser. There it is. There's our Projects page. It says Projects right now but soon we'll fill it with dynamic data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6)
> **Env Vars:** html (4), url (2)
> **File Paths:** app.py (3), index.html (2)
> **Prerequisites:** set up (4)
> **CLI Commands:** make (1), python3 (1)
> **Tools:** sublime (1), terminal (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** render_template (1)

#### [Build a landing page](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=0)** - [Instructor] Let's make the project homepage a little more sophisticated. The page will list a set of projects, and each project will link to that project's associated tasks. To start, these will be hard coded, but eventually, we'll populate them using data from a database. On our projects page, we'll add a list of projects. We'll use the ul tag to create an unordered list. Each item in the list will be a project. Now, the tasks associated with each project will be linked as a part of the same application. This means they'll live on the same host. We'll host them on the route project, and then have a path parameter that represents an ID number associated with that project. Let's add the links. Here, we'll associate the first project with ID 1, the second with ID 2, and the third with ID 3. When the link is clinked, we'll be taken to that project's tasks. With that taken care of, we'll add a form for the user to add a new project. When the form is submitted, it'll be directed to the add/project route. This submission will be sending the new project data, so we give it the method, POST. Now let's decide what the form will look like. Here, we'll have the project name and then a text field
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-landing-page?u=76281980&t=97)** for the user to add their new project name. In order to submit the form, we need to add a button. It'll be a submit. And the label on the button will be Add Project. The user will submit their data by pressing this button. Perfect. Our index.[[HTML]] template is set up. We haven't defined the individual project routes or the Add Project route, so none of the links or buttons will work. However, we will be able to run and view this simple page. Let's do it. We'll head over to our terminal and activate our workspace. Then, we'll run the app. Let's check out the landing page. There's our projects. Let's add a header at the top to make it make a little more sense. We'll do that in our index.html. It'll be an h3 header. Let's run our app again. That's better. We have a list of projects and then a way to add a new project. Like we mentioned before, these are hyperlinked, but the links will work in later videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **CLI Commands:** make (3)
> **File Paths:** index.html (2)
> **Env Vars:** post (1)
> **Cross-References:** we mentioned (1)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)

#### [Develop additional routes to enhance your application](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-additional-routes-to-enhance-your-application?u=76281980)

#### [Build a project tasks page](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=0)** - [Instructor] Let's set up the project task's [[HTML]] template so we can add tasks to a project. To keep this simple, we'll start by hard coding some tasks. These will be in an unordered list. To allow the user to add a new task, we'll use a form. This form will redirect you to the add task project ID page. That's the route we defined in the last lesson. We'll be sending the new task information to this route, so that's why we set it as POST. Now, inside the form, we want to give the user the ability to add a name for their task. We'll be able to reference their input later on with task-name. Now that the input's complete, we'll let the user submit their information with a button. It'll have the label Add Task. This marks are templates complete. Let's run our app and take a look at what we've built. We'll activate our virtual environment and run the app.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-practical-database-examples/build-a-project-tasks-page?u=76281980&t=73)** Let's refresh. Here we have a template for showing all of the projects on the homepage. If we click into each page, we can see the tasks for each project as well as a way to add a new task. Project 1 has the ID 1. Let's add a new task, Task 4. We're rerouted to the add task at Project 1's project ID. The task was added successfully. Now, if I go back to the home route, click back into Project 1, it still won't show up yet. We need to link a database in order to get that functionality. The same tasks show up on each page. That's because it's hard coded. Eventually, these will be retrieved from a database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1), post (1)
> **Cross-References:** in the last (1), go back to (1)
> **Exercise Files:** template (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create a Postgres database](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=0)** - [Instructor] We'll be using a [[PostgreSQL|Postgres]] database to store our applications, project, and task data. If you haven't installed it, you can install it from the Postgres website. I've already installed it, so I won't be installing it here. Once it's installed, we need to set up our terminal so we can use it. We can do this by adding it to our path. On Mac, this can be done by adding a line to our zshrc file or our Z profile. We have it in our zshrc file. We add the location of Postgres to our path. Perfect. With Postgres installed and the path setup, we can initialize our database. To activate Postgres, we can use psql -U and log in with the default user.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-practical-database-examples/create-a-postgres-database?u=76281980&t=61)** Let's create our database. We'll create a database called project tracker. To access our Postgres data, we can use specific commands. For example, we can use slash l to list our [[Databases]]. Here we have some default ones along with the one we just created. Similar to [[MySQL]], if you want to manipulate the data in a given database, we have to connect to it. Let's connect to our project tracker database. Slash c and the database we want to connect to. That's project tracker. If you don't provide an input, you'll automatically connect to the default database. And we're connected. We've just created a Postgres database with [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (7), [[Databases]] (1), [[MySQL]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** psql (1), mysql (1), python (1)
> **Prerequisites:** install (1), set up (1), setup (1)
> **Analogies:** for example (1), similar to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Instantiate a Postgres table using Python](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=0)** - [Instructor] With the [[PostgreSQL|Postgres]] database created, we can connect to it and add data to it in our application before we integrate it with our FLAS code. Let's make sure we can interact with it just using [[Python (Programming Language)|Python]] first since we've already used [[Databases]] before in this course with [[SQL]] Alchemy, I've written up some of the starter code to interact with this database. It should look pretty similar to the code we created for our [[MySQL]] database. The main difference will be what connection string we feed into Create Engine. Let's walk through it. To start off, we import a few things from SQL Alchemy and connect to our Postgres database. The driver in the connection is Postgres SQL and the dialect is psycopg2. Then we have our logging credentials. That's Postgres as the user and password. As the password. The database we want to connect to is called Project Tracker and we're running with local host. Now in order to create the classes for our SQL Alchemy tables, we need a base class. This is generated from the registry and then it's used to define two classes, project and task. For the projects class, we have a table named project which has project ID and title columns. The project ID column is the primary key. We also include a string representation for each record.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=96)** For the task class, we have a table called tasks. It'll have task id, project ID, and description columns. The task ID will be the primary key and the project ID will be a foreign key linked to the projects table. Project id. With all our models defined we use the base to create the tables. Then we create a session. This allows us to start transacting on our database. The first thing we do is create a new project. Then we add it to our database. When we flush the session, we create a pending transaction. This will instantiate the primary key or project ID of the Clean House project. This means we'll be able to use it in creating our task, to save these changes to our database. We commit them. All right. That's our database file. We connect to our database and create our tables. Then we add the clean house project with the task, clean bedroom. Let's run the file. We'll start up our virtual environment. Then run our database file. It doesn't look like we have any errors. This is good. Let's use the Postgres Shell to check everything's been added correctly. We'll connect to our database project tracker. We'll select all the projects and all the tasks.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-practical-database-examples/instantiate-a-postgres-table-using-python?u=76281980&t=197)** There's our data. We have a clean house project and a clean bedroom task. Everything's been added as expected. While you could create and integrate your database code directly into the FLAS code I find it's cleaner to have a file outside of your application code where you can test the connection to your database and add database functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (5), [[SQL]] (4), [[Python (Programming Language)|Python]] (1), [[Databases]] (1), [[MySQL]] (1)
> **Env Vars:** sql (4), flas (2)
> **CLI Commands:** make (1), python (1), mysql (1), find (1)
> **Exercise Files:** starter code (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Connect a database to a Python Flask project](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=0)** - [Instructor] We can connect our Flask application to our database using SQLAlchemy. Within our virtual environment, we can install a special extension that allows us to use SQLAlchemy in our Flask code. Let's activate the environment. We'll install Flask-SQLAlchemy. Then we'll add it as an import to our app.py file. Within our app, there's a few things we need to configure. First, we'll configure the SQLALCHEMY_DATABASE_URI. This URI is like a connection string that allows us to connect to our [[PostgreSQL|Postgres]] database. It's what we fed in to the create engine function before when we used SQLAlchemy previously. we'll also add a SECRET_KEY. This will allow us to securely use SQLAlchemy sessions in our Flask application. Now the value for this key is something we set and we can generate one quickly using a [[Python (Programming Language)|Python]] Three shell.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-practical-database-examples/connect-a-database-to-a-python-flask-project?u=76281980&t=79)** Let's open one up. We'll import the os module and use os.urandom24 to generate a random value. Let's copy this. This will be our secret key. Now that the app's configured, we'll create a database object with the app as input. And with that, our Flask application can now be connected to our Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Python (Programming Language)|Python]] (1)
> **Prerequisites:** install (2), configure (2)
> **Env Vars:** sqlalchemy_database_uri (1), uri (1), secret_key (1)
> **File Paths:** app.py (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Integrate project data from a Database into Flask](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=0)** - [Instructor] Let's create some database models so we can reference the data from our database and our flask application. We'll create these models using the Model object from our db variable. We'll set the table name to projects and create our columns. For column and integer, we reference the db object to get access to these types, but otherwise, it looks pretty similar to our SQLAlchemy code. In order to access the task data, we'll also need to create a Model class. But first, let's make sure the project data renders as expected. We'll add the functionality so our homepage displays all of our projects. To do this, we'll need to feed our projects into our index.[[HTML]]. We'll add another argument to our render_template call. project.query.all grabs all of the records in our projects table. Since we're using the Flask SQLAlchemy extension, and basing our models off of the db model, we're able to query all of our projects in this way. With render_template, we feed all of this data into our HTML file. Since we set the name for our passed data as projects, that's how we'll reference it in our HTML file. We also used .all.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-project-data-from-a-database-into-flask?u=76281980&t=94)** This means that projects will be an iterable variable. We'll be able to iterate through all of the projects in the database. Let's modify our index.html file to read this project data. In our index.html file, we'll want to loop through each project and show the project's title. So let's delete these two entries and create a loop. Here, we're saying for each project, we want to render the following HTML code. That's a heading with the given project's title and a hyperlink that links to project and the project's project_id. When the title is clicked, it will redirect to a given project's task page. Let's save it and run our app.py file. We'll activate our virtual environment and run, python3 app.py. There's our project, Clean House, from our database. Let's click it and it doesn't work. We still see the static task. Next, we'll integrate our task data so that each task is displayed on the tasks page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6)
> **File Paths:** index.html (3), app.py (2)
> **Code Identifiers:** render_template (2), project_id (1)
> **Env Vars:** html (3)
> **CLI Commands:** make (1), python3 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Integrate task data from a database into a Flask app](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=0)** - [Instructor] In order to feed the task data into our application, we need a task class. Each record in our task table has a primary key a project ID that links with the project's project ID and a description describing what the task is. We'll also define the task's relationship with the project model. Now let's think about the tasks pages. We'll want to show the title of the project as well as the tasks associated with the project. This means we'll need to pass the project record and all the task records associated with that project via project ID. Let's modify the render template call to have a parameter called project. We'll retrieve the project with the project ID given in the URL. There should only be one project with this ID. So, we'll grab the first then we'll pass in the tasks as tasks. We'll feed it all of the tasks with the project ID from the request. With this render call complete, we just need to modify our project tasks [[HTML]] file to read this data. Since we passed the specific project data as project and the app.py file, we'll reference it as project and the HTML file. We called the project query with dot first
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-practical-database-examples/integrate-task-data-from-a-database-into-a-flask-app?u=76281980&t=96)** which means this project is a single project. It also means we can directly use its project attributes such as project ID and title. Let's show the project's title. We also passed in the tasks so we'll get rid of the two hard-coded tasks and wrap the remaining task in a for loop. Then we'll modify the body of the for loop to read each task's data. Since we're passing in the project itself instead of just the project id, we'll need to modify the link on the add new task form. It should reference the project's project id. Perfect. Let's run the application and see if our template can render the task data. We'll activate the virtual environment and run app.py. Let's refresh the page. We still have our Clean House project and there's our task data. We still have project up here so let's clean up this HTML file. We'll take out project so we only see the project title. Let's run it again and we'll refresh. There's the project title with the task data. All of this is coming from our [[PostgreSQL|Postgres]] database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** html (3), url (1)
> **File Paths:** app.py (2)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Develop add functionality to add a project](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-project?u=76281980)

#### [Develop add functionality to add a task](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=0)** - [Instructor] Let's create some more functionality that lets the user add tasks to their project. We've already written the routes, so now we just need to read in the data from the request and feed it into the database. In our project-tasks.[[HTML]], we named the user's input task name, so that's how we'll access it in the request form in our app.py. We'll want to add some error checking here just like we did with add_project. We'll make sure the user enters a task name. If the user entered a description, we'll create a new task and add it to the database. Since the URL contains the project_id, we can use it to create the task. We'll just pass it in. After saving the data or lack thereof if the description was empty, we'll want to redirect to the individual project page. This means we'll redirect to show tasks and we'll feed in our project id. Of course, we aren't done yet. We still need to modify the project-tasks.html page to render the flash messages. Since the format is exactly the same, we can just copy paste from the index.html file.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=97)** Now we're ready to run the program. We'll activate our environment and run python3 app.py.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-practical-database-examples/develop-add-functionality-to-add-a-task?u=76281980&t=111)** Let's add a task to our project. We'll add clean living room. And it works as expected. What if the description is empty? Nothing happens. We don't crowd our database with empty data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **File Paths:** project-tasks.html (2), app.py (2), index.html (1)
> **CLI Commands:** make (1), python3 (1)
> **Code Identifiers:** add_project (1), project_id (1)
> **Env Vars:** url (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Develop delete functionality](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=0)** (cheerful music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/challenge-develop-delete-functionality?u=76281980&t=5)** - [Instructor] Throughout this chapter, we've been adding more and more functionality to our [[Python (Programming Language)|Python]] Project Tracker web application. In this challenge, you'll develop delete functionality. You should be able to delete individual tasks from a given project as well as entire projects. Here are some of the use cases to watch out for. If a user deletes a task, that task should be deleted from the database. If a user deletes a project without tasks, the project should be deleted from the database. If a user deletes a project with tasks, the project and each task associated with the project should be deleted from the database. It's important to note that adding delete functionality will require changes to your app.py file as well as your [[HTML]] templates. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[HTML]] (1)
> **Warnings:** watch out (1), note that (1)
> **File Paths:** app.py (1)
> **CLI Commands:** python (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful music) (1)

#### [Solution: Develop delete functionality](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=5)** - [Instructor] Let's add delete functionality to this application. We'll start by writing the functionality to delete an individual task. The route for this will be delete/task and then the task-id. Technically, this route could be anything you want but I include the task_id because it'll be useful for the implementation to delete the task from the database. Since we'll be deleting data and not retrieving data, we'll make this a POST method. Since we have the task_id handy, we can query the task table and grab the individual task. We save it in a variable called pending_delete. Then we'll use a session object to delete the task. To save these changes, we'll commit them. With the database operations complete, we'll redirect the user to the individual project page. This'll show all the tasks except the one we just deleted. Now, how do we retrieve the original project ID? You might think we have to feed it in to the URL and the delete_task function, but there is a workaround. If we go to our model classes, we can add back_populates to the project relationship. We'll also add a relationship for the task. Setting it up in this way allows us to reference each model
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=103)** from each other. We can reference the task from the project and the project from the task. The back_populates input references the other relationship, so task corresponds with task, and project corresponds with project. With this implemented, I could write something like pending_delete_task.project.project_id. We referenced the project from the task. Now, unfortunately, we just deleted the task, so this current implementation will not work. Instead, we can save the project_id before deleting the task. Then we'll use it in the redirect URL. That's our delete_task function. Of course, there's nothing in our templates using this route. We need to add a delete form to our task page so we can delete tasks with the user interface of our application. Since we'll want a form for each individual task to delete that task, we'll add a form inside the for loop. Perfect. Let's run the program and delete a task. We'll activate our environment and run the program.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=198)** Here's our project page. We'll click clean house and delete a task, and it's deleted. We finished cleaning the living room. Now let's add functionality to delete a project. We'll create a route that's pretty similar to our other delete route. We'll call it delete/project, and then input the project_id.
>
> **[3:48](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=228)** It'll be a POST method because we're modifying data instead of retrieving data. For the implementation, we'll query the project's table and retrieve the project we want to delete. To find that project, we'll pass in the project_id used in the URL. Then we'll use a session object to delete the project and we'll commit the changes. After the project's deleted, we'll redirect to the homepage. This is great for projects that don't have any tasks but if a project does have a task, we would want to delete that as well, so we don't have any orphan tasks in our task table. All tasks must be associated with a project and if we delete the project, we must delete the associated tasks as well. There are few different ways we can do this but the simplest way is to add on to our relationship inside the project class model. We'll add cascade all delete-orphan. Now, when we delete a project, the associated tasks will automatically be deleted for us. All that's left to do is to add a form to delete the project. We'll add this form to the individual project page.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=328)** Perfect. Let's try deleting a project without tasks and then a project with tasks. We'll restart our program. We'll go back to the homepage and create a new project. Let's delete it. And it's deleted. We were able to delete a project with no tasks. Let's delete a project with tasks. We'll add one more. Clean bathroom. Then we'll delete the project. And it's deleted. Let's double check our data and make sure it's been deleted correctly. We don't want any orphaned tasks. There's our project, and let's check the tasks table. All of the tasks have been deleted. This is exactly what we want. Now, this isn't the end of your application. There are so many more things you could add and develop. For example, you could display a delete project button for each project on the homepage. Instead of deleting projects and tasks, you could develop a way to have them shown as complete. You could also add a way to initialize a project with a series of tasks
>
> **[7:02](https://www.linkedin.com/learning/advanced-python-practical-database-examples/solution-develop-delete-functionality?u=76281980&t=422)** or create a way to add multiple tasks at a time. I encourage you to experiment and create even more functionality for this application.

> [!info]- Semantic Content
>
> **Code Identifiers:** project_id (4), task_id (2), delete_task (2), back_populates (2), pending_delete (1)
> **Env Vars:** url (3), post (2)
> **CLI Commands:** make (2), find (1)
> **API Endpoints:** post  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue building applications with databases](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-practical-database-examples/continue-building-applications-with-databases?u=76281980&t=0)** - Congratulations on finishing the course. By getting practice using [[Databases]] in real world applications, you've become more familiar with how databases can be used in [[Python (Programming Language)|Python]]. From here, I encourage you to check out some of the other Python courses in the library. For diving deeper into databases, try some of the courses focused solely on your database of choice. SQLite, [[MySQL]], or [[PostgreSQL|Postgres]]. Understanding the nuances of the technologies your application interacts with can be the difference between spending a week on a coding problem versus an hour. You may also want to dig deeper into some of the technologies we touched on. These include Flask, [[Pandas (Software)|pandas]], and FastAPI. If you want more practice with databases and Python, I encourage you to take my advanced Python, working with databases course. This one explains more of the specifics of how SQLAlchemy works and the basics of how Python interacts with databases. Becoming a better software engineer doesn't end with mastering a single programming language. You may have stepped out of your comfort zone by taking this course involving databases, and I hope it encourage you to continue stepping out of your comfort zone as a technologist. There's always something new to learn. My name is Kathryn and I hope to see you again in some of my other [[LinkedIn]] learning courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), [[Python (Programming Language)|Python]] (5), [[MySQL]] (1), [[PostgreSQL|Postgres]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (5), mysql (1)
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