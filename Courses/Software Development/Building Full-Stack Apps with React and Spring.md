---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-full-stack-apps-with-react-and-spring
url: "https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring"
duration_minutes: 86
duration: 1h 26m
level: Intermediate
updated: 5/1/2024
learners: 38191
skills:
  - Spring Framework
  - Full-Stack Development
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF-K27TCH4AoQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118627641?e=2147483647&amp;v=beta&amp;t=KKUIh9ScJZH1j85bom748v-d6xj8LzjFyXwnIk9sXT4"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started In Spring Development]]'
prev_courses:
  - '[[Spring 6- Spring Security]]'
path_nav: '[{"path":"Getting Started In Spring Development","position":5,"total":5,"prev":"Spring 6- Spring Security","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/spring-framework
  - skill/full-stack-development
  - skill/react-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Building%20Full-Stack%20Apps%20with%20React%20and%20Spring.md)

![Building Full-Stack Apps with React and Spring](https://media.licdn.com/dms/image/v2/C4E0DAQF-K27TCH4AoQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118627641?e=2147483647&amp;v=beta&amp;t=KKUIh9ScJZH1j85bom748v-d6xj8LzjFyXwnIk9sXT4)

# Building Full-Stack Apps with React and Spring

> Pairing a popular front-end framework with a full-featured back-end solution is a natural next step for developers who want to go “full stack”: building interfaces and the code that powers them. In this course, instructor Emmanuel Henri explains how to get a full-stack app up and running with React and Spring. He walks you through a complete sample project: a REST API with a form-based interface. 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring) | 1h 26m | Intermediate | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Create your own mighty full-stack app](#create-your-own-mighty-full-stack-app)
  - [What you should know](#what-you-should-know)
- [**1. Initial Setup**](#1-initial-setup) (7 videos)
  - [Introduction to Spring](#introduction-to-spring)
  - [Introduction to React](#introduction-to-react)
  - [Overview of the full-stack and MVC](#overview-of-the-full-stack-and-mvc)
  - [IDE for a Java/JavaScript environment](#ide-for-a-javajavascript-environment)
  - [Introduction to Postman](#introduction-to-postman)
  - [Initialize a project with Spring Boot](#initialize-a-project-with-spring-boot)
  - [Initialize the React client project](#initialize-the-react-client-project)
- [**2. Spring Models**](#2-spring-models) (4 videos)
  - [Data options and JPA](#data-options-and-jpa)
  - [Define first model class](#define-first-model-class)
  - [JPA repository](#jpa-repository)
  - [Define example data](#define-example-data)
- [**3. HTTP with Spring**](#3-http-with-spring) (6 videos)
  - [Finalize base server](#finalize-base-server)
  - [POST endpoint](#post-endpoint)
  - [GET endpoint](#get-endpoint)
  - [GET ID endpoint](#get-id-endpoint)
  - [PUT endpoint](#put-endpoint)
  - [DELETE endpoint](#delete-endpoint)
- [**4. Basic Frontend with React**](#4-basic-frontend-with-react) (7 videos)
  - [Create contact listing component](#create-contact-listing-component)
  - [Add materialize to the project](#add-materialize-to-the-project)
  - [Finalize list of contacts component](#finalize-list-of-contacts-component)
  - [Create and structure your components](#create-and-structure-your-components)
  - [Connect the add contact form to server](#connect-the-add-contact-form-to-server)
  - [Add server controller for CORS](#add-server-controller-for-cors)
  - [Finalize server controller for CORS](#finalize-server-controller-for-cors)
- [**Conclusion**](#conclusion) (2 videos)
  - [Context and state](#context-and-state)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create your own mighty full-stack app](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=0)** - [Instructor] Spring and [[React.js|React]] have become standards in the [[Java]] and [[JavaScript]] world and using these two technologies into a single project can have its benefits for a developer. If you've had some experience developing front end projects, and looking to learn a backend solution in a different language. Or as a Spring developer, you've been looking for a course on React and how it integrates with Spring. If you've answered yes to any of these questions, you've come to the right place. In this course, we'll explore how to integrate the two frameworks into a single [[Representational State Transfer (REST)|REST]] API with a React front end. Hi, I am Emmanuel Henri, and in the past I had to work on several projects where we leveraged Spring as the back-end with a React front-end, which has been my front-end tool for a long time. It'll be my pleasure to explore how to work with both. First, we'll take a look at the different pieces we'll use in this course, as well as getting the back-end and front-end initialized. Next, we'll dive deep into the Spring models in data persistence and set it up for a project. Then we'll continue by building our different endpoints to provide a full crawl back-end and how to code them. And finally, we'll move to build our React front-end by adding list iterations in the proper [[Forms]] to add new items. So if you're ready to learn how to build a full-stack application with Spring and React open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[Java]] (1), [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Forms]] (1)
> **Env Vars:** rest (1), api (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980&t=0)** - [Instructor] As this course covers building an application with a [[Java]] in [[JavaScript]] framework, experience with both of these languages is a must. And for JavaScript especially ES6 syntax is a must for this course. If you're struggling with any of those two languages, I suggest you take a few introductory courses to help you there. You can take this course on a Mac or [[Windows]], as building these frameworks can be done in both. Last but not least, being familiar with Terminal commands and MPM isn't must, but definitely will help you when we use these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Java]] (1), [[Windows]] (1)
> **Env Vars:** es6 (1), mpm (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Initial Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Spring](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=0)** - [Emmanuel] Spring has quickly become a strong player in the back-end tools for [[Java]] developers. Its main focus is in simplifying the entire creation of new project with [[Spring Boot]] where you can quickly build a back-end for your needs with a few simple steps. For example, you can quickly get started with a [[Representational State Transfer (REST)|REST]] API, a web server, and many more in a few minutes without configuring nor setting up all the required files. It also supports both types of [[Databases]], such as [[SQL]] and [[NoSQL]]. So if you're comfortable with Mongo or SQL or whichever database you prefer, Spring supports most of 'em. And finally, the Spring development team are making great efforts in making sure your ecosystem of tools is also well supported, such as IDEs, such as Spring Tool Suite, IntelliJ IDEA, and NetBeans, server environments, developer tools, and more. And there are many guides available for all kinds of projects if you're interested in exploring its framework further. So in other words, Spring is a solid offering for the back-end developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Java]] (1), [[Spring Boot]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Databases]] (1)
> **Env Vars:** sql (2), rest (1), api (1), idea (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** mongo (1)
> **Tools:** intellij (1)
> **Speakers:** - [emmanuel] (1)

#### [Introduction to React](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=0)** - [Instructor] Now let's review our front-end piece, [[React.js|React]]. React has been a solid offering for building front-end applications and has quickly become the number one framework to use for this purpose. In fact, many companies you know, have React components everywhere. If you've ever watched a Netflix show on the web, you're watching it on a front-end build with React. Its simplicity of its syntax and best practices around managing the application state, has become a standard amongst developers. And if you're not familiar with the concept of components, state and props, as we'll build our front-end part we'll go over these basic terms. And a major advantage of using React in your development is, leveraging your knowledge of React concepts, you can build also mobile applications with [[React Native]]. And any type of front-end you can think of with a base React application. And because React uses plain [[JavaScript]] functions and classes for its components, it should feel right at home for [[Java]] developers. Also because of its huge popularity, React's ecosystem has grown with many offerings for state management, like Redux and MobX, to [[Routing]] with React Router, to testing with Jest. So needless to say, if you've been dying to learn a leading front-end framework React is a good candidate. All our project inside of my company and my own personal projects are always built with React first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (12), [[React Native]] (1), [[JavaScript]] (1), [[Java]] (1), [[Routing]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Overview of the full-stack and MVC](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=0)** - [Instructor] If you have been programming for a few years you may have heard of the model view controller pattern, but it is often the first thing you learn as you grow more experienced as a developer. This pattern basically defines how an application should be split and often reflects how your modules are organized within three simple categories, models, views, and controllers. The model is where your data resides, where you define your schemas and the models for your data. The views is where you have your views and in most cases the pure [[HTML]] of your application, where the visuals are. And finally the controller is where you have your logic of your application, the functions that makes your application run. Following this pattern most developers put all the files in structure of their application following this pattern and even sometimes name the folders with these labels. So if we apply this pattern to the stack we'll be using in this course the models would be handled by spring as long as the controllers which are being in most part handled as well into spring. And finally the view that will be handled by [[React.js|react]]. And when I say most part for controllers, some of the logic sometimes can be handled by react with their high order components, which are the components that wrap some of the logic to create a new component. We want to explore HOCs in this course, but if you'd like more information on them look into reacts documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[HTML]] (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [IDE for a Java/JavaScript environment](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=0)** - [Instructor] When looking for an ideal IDEA for development, and especially nowadays, you have multiple options at your disposal, and most of them are free. It's mostly a question of where you are the most comfortable to work with. For the frameworks used in this course, you can use NetBeans, IntelliJ IDEA, and many others. In my case I have been using Visual Studio Code since they introduced it, and it's what I'll use in this course. So if you already have an IDEA your comfortable with look into their documentations to see what extensions or plugins you need to install to support [[Java]], [[JavaScript]], [[React.js|React]], and Spring. And feel free to skip the remainder of this video, where we'll take a look at the requirements of working with Visual Studio Code. So for example, go to this link code.[visualstudio.com/docs/java/java](https://visualstudio.com/docs/java/java) dash [[Spring Boot]]. And on this page, you're going to see the requirements to work with Spring. So first off all, these are the tools that you can install as extensions inside of Visual Studio Code that will help you work with Spring, but you absolutely need the requirements here. So you need to have Java Development Kit version 1.8 or above. You also need to have Apache Maven and you need to install the Java Extension Pack to help you work with Spring. So follow the instructions on this page to get you set up in Visual Studio Code. For [[Windows]] follow the instructions here and for Mac, it is a simple installation of the JDK and then leverage Homebrew
>
> **[1:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=95)** to install MVN or Maven and you should be all set. So for example, if you don't have Homebrew, all you have to do is copy from this page here brew.sh the link you have in here in your terminal like so. So let's go to terminal. And all you have to do is paste that line and it's going to install Homebrew. Once you have Homebrew installed, you can literally go and do first java --version. If you don't have anything here, Mac will suggest a link here that you can click and install Java. Once you have that installed, you can do mvn --version and, again, if you don't have anything here, what you could do is do brew install maven and then it will install Maven inside of your system. And once this is done, you are all set to continue to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[JavaScript]] (1), [[React.js|React]] (1), [[Spring Boot]] (1), [[Windows]] (1)
> **Prerequisites:** install (8), you need to have (1), set up (1)
> **Tools:** visual studio (4), terminal (2), intellij (1)
> **CLI Commands:** mvn (2), brew (2), apache (1)
> **Env Vars:** idea (3), jdk (1), mvn (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **File Paths:** brew.sh (1)

#### [Introduction to Postman](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=0)** - [Instructor] In this course, at some point, we'll need to be able to test and use the API endpoints. A great tool to do this is Postman. So let's go ahead and install it. So go to [getpostman.com](https://getpostman.com) and once you get to this page, what you could do is literally click on get started. And download whatever version is for your system. So it should automatically suggest the right version. If not, then you can click on the other versions here. So you can have [[Linux]], [[Windows]], and in this case, Mac.
>
> **[0:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=36)** Then you can extract the downloaded file, and in the case of the other operating system, it's an installation file, and then simply drag and drop the actual program inside of the applications. Now let's go ahead and open Postman. When you're first getting into Postman, you need to log in or create an account. And the main reason for this is to keep all your API calls inside of a repository, inside of Postman. So let's go ahead and connect. So basically, Postman is a tool to test your API calls. So if you click at the top here, on the actual methods here, you can see a list of all the methods that are available for APIs. So for example, if you want to do a Get, you click on Get, and then you enter the name of your API. So if my endpoint is called local host 3000 contact, then I can simply go ahead and click send, and it's going to test my API. And you can see all the methods that you can use here. So you can use Post, Put, and Delete, which are the most common ones, and then if you need to enter any parameters, so let's say, for example, you're doing a Put or a Post, then you need to enter some data, you can use the headers and then the body to enter any types of data inside of your Postcall. So for example, if you do first name, then you can enter the value and it's going to do the call with those values inside of the headers. Also, if you're looking for code suggestion, there's a nice tool that comes with Postman
>
> **[2:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=130)** that is in this section here, called code. And what you can do based on the language you're working on, you can get suggestions to make your calls. So if you want to do an HTTP call, you can select this. In the case of [[Java]], you can do this. And then you're going to get codes, snippets that you can use inside of your application or your ID. Same thing with JAVA script, and so on and so forth. So this is very useful when you're developing and you want to test your API calls directly inside of a tool that's external to, let's say for example, your terminal or your main application. If you're doing something in your application and it's not working as it should, then you can use that tool to test your API calls. And now that we have Postman installed, let's move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Linux]] (1), [[Windows]] (1)
> **Env Vars:** api (7), java (2), http (1)
> **Tools:** postman (7), terminal (1)
> **UI Navigation:** click on (3), go to (1), drag and drop (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **URLs:** [getpostman.com](https://getpostman.com) (1)

#### [Initialize a project with Spring Boot](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=0)** - [Instructor] Now that we've got all the requirements completed, let's go ahead and generate a new Spring project leveraging [[Spring Boot]] Initializr. So go to [spring.io](https://spring.io) and then click on Projects and then click on Spring Boot. And what you want to do is go all the way down to Quick Start and then click on Spring Initializr. So what we're going to do is select a Maven Project which we install all the dependencies for that. Language [[Java]]. Leave the Spring Boot at 2.1.4 and then for this guy here, as opposed to example, what we're going to do is call this one crm and then Artifact, I'm going to call this one crm. And then, we don't need to select anything in the More Options here, but what we're going to do is select a few dependencies that we want to install. So basically, what this tool is going to do is create a ZIP file that will have everything that we need to get started with initial project. And this is the advantage of using this tool is that we get everything we need and we don't need to do a whole lot of setup. So, the items that we need as dependencies, the first one is [[Representational State Transfer (REST)|Rest]] Repositories, so click on the plus. You need JPA, so we can have our [[SQL]] Database and you also need H2 for the SQL Database Support. And finally, Lombok,
>
> **[1:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=95)** which will simplify our code. Once you have all this, you can basically click on Generate Project and it's going to create the ZIP file. This is how simple it is to create a project. So we can close that window. So the first thing we're going to do is unzip the file that we just downloaded and what we're going to do is right-click to Finder, New Finder Window, and then go to Downloads and then double-click on the ZIP file. And then what we'll do is go inside of your favorite IDE or Visual Studio Code in my case and then click on the Explorer here which opens up this tab, Open Folder, and then let's go and grab our crm. And as you can see, when we open the project in VS Code and you have all the right extensions installed, the IDE goes through, setting up all your files for you, so you can see at the bottom that there's a lot of stuff that's happening. So basically what's happening right now, Maven is downloading all the dependencies and setting up your server so we can run it eventually. So let it run and then let's move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[SQL]] (2), [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (6), go to (2), right-click (1), double-click (1), open the (1)
> **Env Vars:** zip (3), sql (2), ide (2), jpa (1)
> **Exercise Files:** zip file (3)
> **Prerequisites:** install (2), setup (1)
> **Tools:** visual studio (1), vs code (1)
> **CLI Commands:** unzip (1)
> **URLs:** [spring.io](https://spring.io) (1)

#### [Initialize the React client project](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=0)** - In this step we'll initialize our [[React.js|React]] project, but before we do so let's quickly install the [[Node.js]] dependencies. So first, if you don't have node.js already installed, go to [nodejs.org](https://nodejs.org), and then in the download for whatever operating system you're using, download the LTS version. Once you have that downloaded, click on the installation file, go ahead and install node.js, and it will also install [[npm]].
>
> **[0:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=37)** Once this is done we can actually go back to Visual Studio Code. And now what we're going to do is bring up the terminal, click on view, terminal, and then let's verify that we have npm installed. So npm version, and if you see a version you're good to go. So what we're going to do next is initialize our React project inside of the CRM project here. So you need to be inside your project, and you'll see soon the project that we just created with React. So what I'm going to do is use the npx command, and then create React app, and then call this client. So what this command is going to do is temporarily download create React app inside of your system, then create a new client or a new React client inside of this project. So it's going to be a folder that's called client, and it will be a React project. So you don't need to do npm create React app, and then do create React app, and then create the new client. So with this simple command npx, it does it all in one shot, and you don't have the dependencies installed globally on your system. So let's go ahead and hit return on that. Okay, so now inside of our CRM project we have a new folder called client, and this is where our React dependencies are installed. So if you take a look inside of that folder, you're going to have a source folder,
>
> **[2:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=129)** and this is your React application. So now we have everything that we need. So we have our backend which is the whole project here, and then we have our client which is a React client. So now we can move on to the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (12), [[npm]] (4), [[Node.js]] (3)
> **CLI Commands:** npm (4), node (3), npx (2)
> **File Paths:** node.js (3)
> **Env Vars:** crm (2), lts (1)
> **Tools:** terminal (2), visual studio (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (3)
> **URLs:** [nodejs.org](https://nodejs.org) (1)


### 2. Spring Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Data options and JPA](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=0)** - [Instructor] When we set up Spring, we set it up with JPA and also [[SQL]] Database, or you can pretty much use whatever database you feel comfortable with. So go to [spring.io/projects/spring-data](https://spring.io/projects/spring-data) and you can see some of the different options available for SQL or [[NoSQL]] on this link. And if you prefer down the road to set your project with a different database, if you scroll down, you'll see what are the different options available. So if you look at the list here, you have, for example, [[MongoDB]], [[Redis]] and a bunch more. Then if you want to select a database with a guide in Spring's documentation, you can look into this link here which is [spring.io/guides](https://spring.io/guides) which is basically this section here and once you get to this section, you can actually find any guide based on something. So for example, if we do MongoDB, we'll have sections based on MongoDB, or you can simply do data like so. So what is exactly JPA? JPA stands for [[Java]] Persistence API and it's basically the database implementation that defines what object needs to be persistent in a database of your choosing. In this case, we used a SQL-based database. Spring's implementation is simplified to make the use of JPA a lot more developer-friendly. Okay, so now that we've got a better idea of our options, let's move on to code our initial model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[MongoDB]] (3), [[NoSQL]] (1), [[Redis]] (1), [[Java]] (1)
> **Env Vars:** jpa (4), sql (3), api (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [spring.io](https://spring.io) (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** for example (2)
> **Definitions:** stands for (1)
> **Prerequisites:** set up (1)

#### [Define first model class](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=0)** - [Instructor] Now let's go ahead and code our initial model. So if you go in the root directory of our CRM here, you have a source folder. Now click on this folder, and then go all the way down to the last file on the tree. So in this CRM folder, we're going to create a new folder, and we're going to call this one model. And inside of that model folder, we're going to create a new file, and we're going to call this one Contact.[[Java]]. And in this file, we'll define our model. So first of all, we're going to create the package, which will be com.crm.model, like so, and then what we'll do is import a few things that we'll need momentarily. So javax.persistence.Entity,
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=58)** and then let's make sure that we import that. And then let's copy it and paste it two more times, and what we'll do, we'll just change the last here, so this is going to be GeneratedValue, and this one is going to be Id. And let's just remove double code here. All right, and also we need to import Lombok.Data.
>
> **[1:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=99)** All right, so now we'll declare Data, and we'll also declare Entity so we can use it, and then we'll define our first class, so let's go ahead and define public class, and we'll call this one Contact. And then we'll define a few things, so let's define one of the parameters that is going to be called Id, which will use a GeneratedValue automatically, which will be Long and then Id. So basically what we're doing is declaring all the stuff that we're going to use inside of our class. So we're declaring also a String firstName. So this is a contact model that we're creating, so we're going to create basically three items: firstName, lastName, and then an email, and they're all strings. Not Strong, but String. And then finally, email. Perfect! So now we're going to create the function that will return a new contact, which is part of our class. We don't need to answer anything yet. And then we will use this new function,
>
> **[3:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=189)** which will pass a String firstName. Also, another String lastName, so you see the pattern here. And finally, String of email. And this will return this.firstName equals their firstName,
>
> **[3:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=214)** and we can pretty much repeat the same thing twice, and we'll just change the values. So this is control lastName, same thing here, lastName. This is going to be email, and then finally, email. Okay, so now let's save this, and now we have our model. So now that we've defined the basic model, we need to create the repository that will use and connect this model to the database. Let's do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Code Identifiers:** firstname (5), lastname (4)
> **Env Vars:** crm (2)
> **File Paths:** contact.java (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [JPA repository](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=0)** - [Instructor] So now we need to create a repository for a new model. With the repository file, we're connecting the model and its primary key into Spring's CRUD. So I get in the same folder called model, we'll create a brand new file. So let's go ahead and create a new file and we're going to call this file ContactRepository.[[Java]].
>
> **[0:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=29)** And in this file, we'll also use the package. So if you want to go back to Contact, you can literally copy this line here. So we're going to use that, copy that and paste it here. And then we'll import org.springframework
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=55)** dot data.repository dot CrudRepository.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=70)** So it should be an import though, so let's go and make sure we import this. So org.springframework.data.repository.CrudRepository with a capital R. Once you have that, you should be able to create the repository. So let's go ahead and do public interface ContactRepository extends CrudRepository and then we're going to pass to it Contact Long for the ID. So basically we're passing the model Contact and then we're passing the ID or it's expecting an ID and then we have our ContactRepository created. So once you save that, basically the connection between the model that we created in the last video and the database has now been made. So let's move onto the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Cross-References:** go back to (1), in the last (1)
> **File Paths:** contactrepository.java (1)
> **CLI Commands:** make (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### [Define example data](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=0)** - [Instructor] Now that we have our initial model, and it is connected to our server, or our database, I'd like to pre-load it with some initial data so when we start it we can test that it works. So again, in the same folder here, Model, let's create a new file. And this file, we're going to call it Demoloader.[[Java]].
>
> **[0:24](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=24)** And then, let's make sure we connect it to the same package again. And then let's do some imports. So we'll do importorg.springframework.beans.
>
> **[0:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=43)** factory.annotation.autowired.
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=55)** And I have some spelling mistake here. So we're good. All right, so let's copy this line and paste it again. And in this one, let's change from this section here, so instead of beans, it's going to be boot.commandlinerunner. And then let's copy and paste again. And from same area, we're going to call sterotype.component.
>
> **[1:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=89)** And then make sure we decorate our class with component. And then let's go and define our class. Public class demoloader implement command linerunner.
>
> **[1:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=106)** And then this command linerunner. So basically what we're doing here with command linerunner is we're running a command line with this guy here. So what we're going to do is basically insert some data inside of our server. So let's go ahead and create those things. So private final contactrepositoy repository
>
> **[2:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=131)** and then decorate with autowired, a function that we'll call Demo Loader, which will take a new contact repository, which we'll call Repository. And then, define this repository as repository. So we're basically doing much of the initial stuff that we need to do when we're creating functions and so on and so forth. Override. And then this is where we're going to run with command linerunner what we need to do. So it's going to pass strings, and if we have an issue, throws an exception. Otherwise, go ahead and pass to this repository, so basically our database connection. Save the following data. So, we're going to add a new contact, which requires, and you can see already the suggestions that we need. So we need a first name, a last name, and then an email. So let's go ahead and do that. So the first one is going to be my name, the last name, and no, this is not my email, I'm just putting a generic email in here. And there you go, we have our demo script
>
> **[3:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=225)** that will run when we first run our application in our server. So now that we have all these steps set up, let's move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **CLI Commands:** make (2)
> **File Paths:** demoloader.java (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. HTTP with Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [Finalize base server](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=0)** - [Narrator] We need to finalize our API endpoints as we'll need to use it for both the front end and the back end. So let's change this and our main function to run our [[Representational State Transfer (REST)|REST]] API. So the first thing we're going to do is create a new file. And we're going to do this in the model folder again. So basically click on the model folder, and then click new file. And we're going to call this one [[React.js|react]] and [[Spring Data]] rest application dot [[Java]]. And again in this file we'll also copy the line package. So let's go ahead and do it. Basically the same line that we've had in every single one of our files here, so we can connect all these packages together. And then we'll import a couple files. So let's go ahead and copy from org [[Spring Framework]]. Then we'll go to boot dot spring application. And select this one. Okay now let's copy line three, and paste it again. And then from boot, we'll change it to autoconfigure, and then [[Spring Boot]] application, like so. Then we'll decorate our class
>
> **[1:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=93)** with this spring boot application. And then create our class. So let's go ahead and create a public class that we'll call react, basically the entire name of the file. So react and spring data rest application. And then inside of that we'll have our main function. So basically this file will allow us to run the server. So when we first run our server, it's going to call this main function here that will run the server.
>
> **[2:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=142)** And then let's just call spring application dot run. And then the primary source is going to be the full name here. So let's copy that just to not have to re-type the whole name again like so. And for the args, we leave it as is. And then... and we want to make sure we add the dot class. Perfect. Now we're all set with this file. And let's save it. And now we need to go inside of our resources here. So if you look into the directory, the main source, and then you scroll all the way down you see the resources folder here, just open that one like so. And we'll only have a single line here that will allow us to set what is the actual URL for the API. So rest base path equals forward slash API. So basically that's going to tell our server that when we actually want to reach the API, we need to do local host port 8080 forward slash API. And that's how you set it up because we're going to need the forward slash for actually front end. So when we run our react client, we're going to need that. So we want to make sure to specify what is the URL for the API, and that's why we're doing this file here. All right, so now that we have all this
>
> **[3:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=237)** we are ready to run our server in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[React.js|React]] (4), [[Java]] (1), [[Spring Boot]] (1)
> **Env Vars:** api (7), url (2), rest (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), go to (1)
> **Ports:** port 8080 (1)
> **Cross-References:** in the next (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### [POST endpoint](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=0)** - [Instructor] The beauty of working with Spring is that it creates all your end points for you without writing that much more code. So let's go ahead and test this out by exploring our post end point with Postman so we can add a few items into our back end. So the first thing we're going to do is run the server. So if you're doing this in NetBeans or IntelliJ IDEA, this actually might be little bit easier for you. You can just run it and it's going to start. But for Visual Studio Code, you have an extra step. So what I'm going to do now is basically press F5 to get my server started inside of the Visual Studio environment. And as you can see, you see that my server's running. But the one extra step that it is asking is Which file do you want to use as your starting point? And it's the file that we just created, the [[React.js|react]] and [[Spring Data]] [[Representational State Transfer (REST)|rest]] application. So you're going to use that. And now your server is running. Another caveat. So, let's go into Postman, I'm going to show you what it could do. So let's go and open Postman. And if you go into Postman and you call the API. So let's say local host 8080 and API and you do get call and then send. And then if you don't get the actual contacts in the list here, you just get the profile, what you need to do first and that's something that you may have to do, is to go back to your code into the file in the model, the contact [[Java]],
>
> **[1:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=95)** and put all your values here as public as opposed to private. So we'll do something like this just for testing purposes. This is not a secure way of doing things but for testing purposes you can do that. So let's do public and then save. And then show again and just restart your server again. And then do again, the local host 8080 API. And if you do contacts, because we created a file that would create a one contact first, let's click there and then do a get on the /API/contacts and if you get some data when you do a get call on this one, that means that you're doing the right thing. If not, just change values to public as opposed to private in your actual model. So let's go ahead and add an item. So the way to add an item is basically to call the same URL and then do a post like so. And what we're going to do is do in the headers, you want to make sure that in the headers you're using content type and then here you do application [[JSON]] and then in the body select raw. So what you need to do is create a json formatted object in order to send the data to the database. So let's go ahead and do this. So let's do first name. If you remember there was a first name, last name, and then the email.
>
> **[3:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=191)** So let's do this last name and then let's do email and let's do me@[me.com](https://me.com) and let's do a send. So if you see the results below here and then you see our created contacts, too that means that has worked. So let's do a couple. Let's do Emmanuel Henrio and two and do another send. We created a contacts three. And then let's do another one. And then do a send again. And then we have our fourth contact. So this is basically how you can use Postman to do some API calls with the post. So what we're going to do is follow in the next video with a get call to see this data. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[React.js|React]] (1), [[Spring Data]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Java]] (1)
> **Tools:** postman (5), visual studio (2), intellij (1)
> **Env Vars:** api (5), idea (1), url (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **URLs:** [me.com](https://me.com) (1)
> **Warnings:** caveat (1)

#### [GET endpoint](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=0)** - [Instructor] So the next step is to test, our get endpoint with Postman. So in the last video, we created a whole bunch of people inside of our Contacts list. So let's go ahead and get those contacts. So it's fairly easy to get those contacts. So basically what you need to do is click the actual method to get, and then keep the same URL and then click Send. And then if we remove the params, what you can see is that we have our list of people. So we have Emmanuel, Manny, Emmanuel again, and then Kim. And these are all the contacts that we've actually posted with our post method. So if you were to use this inside of [[React.js|React]], what you'd do is basically make this call with a get call and then send. And then you would get a list, or an array, of people or contacts that you could use inside of the application to replicate across multiple components. I will get to that in the next chapter. So now that we've actually explored how to get people, we'll explore how to actually get a specific person in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
> **Cross-References:** in the next (2), in the last (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### [GET ID endpoint](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=0)** - [Instructor] So the next step is to get a single person. So whenever you actually make API calls in most cases you're going to need, from time to time, to get a specific person or a specific point of data inside of your database and this is where getting a specific ID comes into play. So how do we do this inside of our API that we just created? Very similarly to getting the list of contacts, all you have to do is basically add the actual contact number at the end of your URL. So for example, /1 and the cool thing of working with Fring you get the actual link that you can use at each data point so basically here, so the href is actually the actual point that you can get this data and so on and so forth. Two, three and four so if you'd like to get the data from this person here what you could do is literally click on this link here and then do a get call and you get the information for this single user and the same thing goes when we're going to work with Reat. So if with want to get the specific item from this contact then all we have to do is add at the end the actual number of the contact and we can get that data point from the href here. So this is going to be available to us when we get the list of contacts inside of Reat. We'll have all this data that we can play with so if you do _links.self.href you'll have this data that you'll have access to
>
> **[1:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=94)** and then you can get the information for this specific contact. Another item that I wanted to mention again is the code here so if you're actually working out of Reat or any other platforms or frameworks you can actually use the code section here and then get into the language and then get the specific information to the call under that language or protocol. So for example, if we go into [[JavaScript]], Jquery then you have the code to do an [[AJAX]] call to get this specific contact here. So this is always useful when you're actually working in multiple frameworks or multiple codebays. You can actually get some code snippets from Postman based on what you're doing inside of Postman. All right so now that we're explored how to get a single ID, next what we're going to do is how to update a specific ID so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[AJAX]] (1)
> **Env Vars:** api (2), url (1), ajax (1)
> **Tools:** postman (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [PUT endpoint](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=0)** - So the next step is to be able to update a specific contact. So the way to do this is to basically first figure out which contact we want to update. So, if we go back to getting a list of contacts first, we would do a get call and then API/contact and do a send, and then we would get the list of contacts. So, if we were to update any of those contacts, lets say the third one, in our array we would have several objects which would be out contact, and inside of that object we would have the underscore link self href, which would give us the actual URL that we need to use to update that contact. So, for example, if we wanted to update this guy here, we would literally, inside of postman, double click here and then do a PUT method. So, we would select in our methods here the PUT method and then make the proper changes to update the contact. So lets go ahead and do that. So first off, like when we do a post contact, we need to change the header. So, the first thing that we would need to again select the content type to application [[JSON]], and then in the body I would select raw and do, like we've done before, so we would create an object which would have the data. So lets say, for example, first name, and I can't remember what was the first name for this one, it was Emmanuel, so lets change this to something else. Lets do Manuello. Last name lets do Henriette.
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=97)** Last name lets do Henriette. And then the email. Lets change this to something else. So lets say, for example, me34@[me.com](https://me.com). Alright, so this is the data. We are sending a PUT call to this address. Then, lets execute. And now we have the results. We have the updated third contact with this information. So, if we go back to our GET call and do a GET again, we get the list with now the third one being updated to what we just changed. So this is basically how you would test a PUT call with out [[Spring Framework]]. So now lets move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Spring Framework]] (1)
> **API Endpoints:** put  (4), get  (2)
> **Env Vars:** put (4), api (1), url (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **URLs:** [me.com](https://me.com) (1)
> **Tools:** postman (1)

#### [DELETE endpoint](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=0)** - [Instructor] So now let's go ahead and test our delete method from our backend, just to make sure it works properly. So what we need to do first is figure out which item that we want to delete. So again we would do a get call, so let's go ahead and do a get for our contacts, and then figure out which item we want to delete. So for example if we want to delete the third one here we just need to double click inside of Postman but if you're inside of [[React.js|React]] or any other framework, you would get the data from underscore links.self.href and then get this URL here and then through this URL you could literally just do a delete call without any parameters and this would delete the data, and this is exactly what we're going to do. Let's go ahead and delete the data, and this is fairly easy and probably the easiest call to make to a backend, so let's say for example, we've done this delete call, let's go ahead and do a get of all our contacts, and now we should only have three people, one, two, and four, and again, it keeps the data the way it is, it doesn't renumber because we just deleted number three, so if we want to delete, let's say, number two or if we add new items to this database, so let's go ahead and add a new one. Let's do a post and then contacts and then let's go into our Headers and make sure we have Content Type,
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=97)** as application [[JSON]], and then in the Body, raw, let's create an object, let's create something that's fairly new so we can see what happens.
>
> **[2:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=121)** Then email, and then let's add me67@[me.com](https://me.com) OK, so this is a post, we're posting new information into our contacts, let's send it and now let's do a get call, so let's go back to this guy here and let's do a get call for all our contacts, and as you can see, number three is completely gone. It never replaced number three, so we're removing number three and now it's gone, so we have one, two, four, and five and it'll continue down this path for all new additions to our backend. So this is how you can do delete and test your spring backend, so let's move on now to a new chapter on actually doing our client with React.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[JSON]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (2), json (1)
> **Analogies:** for example (2)
> **URLs:** [me.com](https://me.com) (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Basic Frontend with React

[↑ Back to Table of Contents](#table-of-contents)

#### [Create contact listing component](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=0)** - [Instructor] Okay so now that we have a backend that is ready for us to work with, let's get started on creating our front end with [[React.js|React]]. So the first thing we're going to do is get React started so right now if we go inside of our client folder, we have React here, but it's not started. We only have the actual server for Spring that is started. So let's go ahead and do that. So what I can do is open a brand new terminal with this folder here like so, and if it's not showing up, what you can do is Control + ` and then do [[npm]] start. And let's make sure we are in the right folder, so if I do an ls, I'm not in the client, so let's do cd client. And now I am in the client, so let's go ahead and do npm start. And now we have our React application started. Let's make a few changes here, because we're going to work on this application over the next few videos, I want to make sure that we are going to first start at the top. So let's go back to .vscode, and what I'm going to do is close that for now, and what I'm going to do is go inside of the source folder and then open up app.js. And then what I'm going to do here is remove all this here at the top, so remove everything from the div class named App all the way down to the last &lt;/div&gt;. And then what we're going to do is insert a contacts component that we'll create shortly. And then we're going to make sure that we import it,
>
> **[1:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=96)** so let's go ahead and do that. Import Contacts from, and we're going to create also a components folder shortly, and the contacts will be inside of that folder. All right. So if we save this. Most likely, yeah, the application's going to crash because we don't have the Contacts component created yet. So let's go ahead and do that. Inside of our source folder, we're going to create a brand new folder, so we're going to create folder from here. We're going to make sure we name our folder the same way we've actually typed it here, so let's go ahead and name it that way. And then inside of the components folder, we'll create a brand new file, which we'll call Contacts.js. Again, we're following the same thing that we've created here. And then inside of that folder we're going to create our brand new file and a component, so let's go ahead first by importing React, and also importing component from React, and then we're going to create our class component. I'm going to do an export default. And by the way if you plan on doing Redux with this project, do the export default at the end of the file as opposed to the top with the class. It's going to allow you to actually export it with Redux and connect it to the proper components from Redux.
>
> **[3:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=191)** But if you don't know what I'm talking about, or if you don't plan on using Redux, then you can always do it this way 'cause it tends get a little bit cleaner doing it this way. In my opinion. Okay. Then we're going to create a constructor which will pass props and we're going to create our state in this particular guy here. So we're passing props to our constructor, and then we're going to create this.state equals to an array of contacts. Basically we're setting up our state. If you're not familiar with the state inside of React, this is primarily what holds all the information of your application, so it could hold data that you're going to need to render inside of your components, it could use specific UI through false states that you want to use for UI behaviors. This is where you hold all your different states for your application and in this case, I'm going to create an array that will be filled with the data from the backend inside of our constructor. And then we're going to use the render method, which comes from the component class. And then return whatever [[HTML]] we put in there, so for this case we're going to do a simple div, and then inside of that div we'll simply have Hello. Okay, so that's our first component.
>
> **[4:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=287)** Right now we have this guy calling onto our contacts. We've created this contact code here, so let's go ahead and see if everything is working as it should. We have Hello at the top which means that everything is working as fine. All right, so now we'll continue working on our Contacts component that will render the list of contacts from our backend in the following videos. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (7), [[npm]] (2), [[HTML]] (1)
> **CLI Commands:** make (5), npm (2), ls (1), cd (1)
> **File Paths:** app.js (1), contacts.js (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Add materialize to the project](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=0)** - [Instructor] So now we'll add some styles to our project by adding Materialize to our Index. So lets get to it. So first thing you want to do, is get to the page [Materializecss.com](https://Materializecss.com). Once you get to that page, basically click on the Get Started here or on the section right there. So once you click on that section, scroll down until you see the CDN section here, and they copy the code that we have in the box. So let's Copy this. And then lets go back to our project, and you want to open the Index.[[HTML]], which sits in the actual client, so first make sure you are in the client, and then click on the Public folder and then open the Index.html. And in that file, what we're going to do is Paste the code that we just copied just below the link on Line 12. So you can delete the green comments here, and then Paste the code. And then, what we're going to do is grab the script code, Cut it, and then Paste it inside of our body. Again, feel free to get rid of the comments, like so. Now, Save this, and then lets get back to the Materialize website. We also need to have the icon scripts, so lets go inside of our Components, and then scroll down to the Icon section, and then basically what you need to do is grab the link here, on the Usage section, Copy that, and then let's go back to our code here, and then we're going to Paste it right below the code
>
> **[1:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=94)** on Line 14 here. So that should do it for the links for the sections we need to add in order to use Materialize. Now what we're going to do is, start adding some styles to our main App.js file. So what you want to do first is go to App.js. If it's not already open, you can find it in the Source folder here. This one. And then click on it. And then what we're going to do is add a few styles to this page. So the first thing we're going to do is in the first div, instead of doing the app as a style, we're going to do container-fluid. And then inside of that particular section, we're going to insert a Navigation and then insert another div. And inside of that div, we're going to insert a className of nav-wrapper, and then center-align like so. And then inside that section, we're going to insert a href, which will be forward slash and then the className, we're going to insert the brand-logo, so brand dash logo. And then we're going to call this Contacts. And then the contacts will be in it's own division, so let's create a new division, with a className of row, and make sure that Contacts is inside of that division.
>
> **[3:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=192)** So let's Cut that line, and then insert it right below like so. Okay, so that's exactly what we need, and that concludes basically that file, so we can move on to next step, after you saved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **UI Navigation:** click on (4), scroll down (2), open the (2), go to (1)
> **File Paths:** index.html (2), app.js (2)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** classname (3)
> **Cross-References:** go back to (2)
> **URLs:** [materializecss.com](https://materializecss.com) (1)
> **Env Vars:** cdn (1)

#### [Finalize list of contacts component](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=0)** - [Instructor] Now we'll finalize our listing by connecting to our server in our contact file. So the first thing we're going to do is import two files that we're going to create in the following video. So let's go ahead and do that while we're working on this specific file here. So we're going to create a file called SingleContact from SingleContact, so it's not there yet, and then we'll also import AddContacts, which is going to be our form that we'll create shortly to AddContacts. So we already have our state created here so we're good there. So what we need to do now is do a component did mount, which is basically the method that runs before it renders our component here. So what we're going to do is create that right away. So component did mount, and what this method is going to allow us is to [[Fetch]] the data before we actually render our component here. So basically we'll have access to the data with the fetch method here. So basically we're fetching from our server. So if you remember, the address is local host 8080, api, and then contacts, and then what we're going to do is use the response from the server, and return it as [[JSON]] data so we can have access to that data,
>
> **[1:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=98)** and then with the data that we just created we're going to update our state. So right now our state is an empty array, so we don't have anything in it. Now we'll fill it with this data that we get. So set state with the contacts and the data. So basically we're passing from our fetch to the server. We're basically returning json data, and then we're passing that json data to our state here in the array, and now we'll have access to the data that's from the server. So now let's just quickly update our component here to take advantage of the materialize styles. So what we're going to do first is create a row, and inside of that row we'll insert the component AddContacts. So we'll have the form at the top before we have the list of our items. So instead of doing hello here, we're going to insert another row,
>
> **[2:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=169)** and in this row we'll have code that will render each single item that we have inside of our database. So if we have three items that's coming from our database, every time there's going to be an item we're going to render a single contact component with the data inside of it. So we're going to pass the state, and the array from the state which is called contact, and we're going to do a map method, which is basically how we iterate through all these items, and then use the single contact component to render each item that we have in our state. So let's do ID as a single key, and by the way, if you're not familiar with [[React.js|React]] this is very important, so whenever we return multiple items through an array with a single component we need a key prop, and this key prop needs to have a unique ID. So if we are leveraging the ideas from the actual database, then we're going to have something that we can use as a unique prop in here. So we need to pass that in, and then we'll pass the item that we can leverage inside of this component once we create it. So basically every item that will be in the database will be available as a single item here and iterated through the function that we have in here. So that basically concludes what we need to do in this particular component, so let's go ahead and save this and keep working on this in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[JSON]] (3), [[React.js|React]] (1)
> **Definitions:** is an  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Create and structure your components](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=0)** - [Instructor] Now, we'll finalize our single contact file, and then get started on the form leveraging Materialize. So the first thing we're going to do is create a new file inside of our components. So let's go ahead, in that folder, create a new file, which we'll call Single Contact dot js. And you want to make sure that you have the same syntax as what you've written here, Single Contact with a capital C. So if that's the case, then we can continue. Now, what we're going to do first is import [[React.js|React]], and then in this one, we're going to do a stateless component. Because we don't need to do all the methods that we typically do in a statefull component. So, let's go ahead and create first the functional component. Then we need to pass the item argument that we passed in our list here. So remember we passed an item argument. We need to use it here, like so. Then we'll export it. So now let's move on to Materialize's website and then go inside of the components in here and then click on cards. What we'll do is, copy the code from the basic card, right here. So, copy all this code and then
>
> **[1:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=95)** paste it inside of that component here, like so. So basically you don't need to change anything but just a few things here. The first thing we're going to change is the card title. So instead of writing card title, we're going to pass from the item what we get from the database. So we're going to get, from the database, a first name. If you remember, when we built the back end, we had a first name, last name, and an email that we can leverage for each person. So we're going to do the first name and last name. You want to make sure that your syntax is exactly the same as what we get from the database. So if you want to check that out, we can always go back to postman and this is what we get. So first name, last name, and email. All right, so let's go back here. So this is good. And then for the text here, we're not going to put anything. And then we're going to go into card action and we're going to insert the email. So we're going to do a p and then insert the item dot email.
>
> **[2:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=168)** That's pretty much what you need to do for the single cards. Let's save that and then what we'll also do is, leverage code from Materialize's creative form and then finalize it in the next video. So, first we're going to go back to Materialize. Then, go inside of the [[Forms]] section, here. Then, go to the text input section. We'll copy, basically, the code that represents this particular form here. And then simply delete what we don't need. So, let's go and copy all that code here, like so. Then go here and create a new component. Again, in the components folder. So let's go and create a new file. This one we're going to call it add contacts dot js. Also, you want to make sure that you're following the same name that we've added to this file. Then, for this one, we're going to do a statefull component. So we need to import component from React. Let's go ahead and export default class add contacts extends component.
>
> **[4:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=251)** Then, let's do the render method. And then do the return. Then, inside of that return, we're going to paste all of the code that we just copied. Let's make sure that we are formatting this properly, like so, perfect. So, what you need to do is, basically remove everything below line 18. So you only need the last name and the first name. So let's remove this, let's remove the password. Let's keep the email and we're going to make some changes to this in the following video. Then, what you need to do is also remove the last line here. We're going to keep the row because we're going to insert a button in here, after. Okay, so now we've got a template that we can work on. So, let's save this and then keep working on this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[Forms]] (1)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (2), in the next (2)
> **UI Navigation:** click on (1), go to (1)
> **Tools:** postman (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Connect the add contact form to server](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=0)** - [Instructor] Okay, so now let's continue working on our add contact file. So the first thing we're going to do is keep working on our little component here and then go back up and create the function that we need to submit the form. So the first thing that I'm going to do is add the actual onsubmit function here. So let's go ahead and do that. And we're going to create this function shortly and it's called submit contact and we need to bind it to this. Okay. Now the next thing we're going to do is kind of of reorganize this a little bit and on the same token, make sure we have all the reference inside of that form. So we're going to change the id to ref. You want to do this on every ids like so. And then also for the for, it needs to be htmlfor, so let's change that as well. We'll do it here as well. Okay. So now that we've got that and let me just organize this a little bit so it looks cleaner, perfect. So now we go that, we need to add a button in this row here. So, remember, I selectively left that space for that so let's go ahead and create the button and the actual styles I want to apply through them
>
> **[1:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=94)** are from Materialize, so it's called waves effect, waves light and btn and this is going to be a type of submit so we want to make sure that this button will be the action that will submit our form. And then do the action and then put the text for the button. Okay, so the last thing we need to fix, as you can see right now, we have an issue here, is because the input on each line doesn't close out. So let's make sure we close that element. Same here and then, I believe that's the last one. Yeah, the errors are gone. Okay, so now we need to create the onsubmit function here, the submit contact function. So let's go ahead and do that. So basically, just below the export line, you're gong to create the submit function which we called submit contact and we're passing an event and you can shorten that to E if you want. And then we want to prevent default like so and then we're going to create an object that we'll call contact. So we can pass the values that we have in our form before we submit them to the back end. So let's go ahead and do that. So first name, and while we're here we need to also fix the name here so we need to make sure that it's first name
>
> **[3:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=187)** with a capital N, same thing here for last name. Emails are okay. And then for what we passed here is from the value inside of our form, so this.refs.firstname and the value that's inside of our form. And then we'll do that for every other value. So let's copy that line and then paste it here. So let's do lastname and you need to change it here as well.
>
> **[3:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=221)** And it's not node value, it's value.
>
> **[3:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=229)** And then paste it again, and let's make sure we change that there, too before we forget. And then here it's email and also for the value here, email. So now that we have our object, we can actually go ahead and post it. So we're going to use [[Fetch]] again for that and we need to input the URL that we're fetching to which is local host 8080/api/contacts and then what we're going to do is pass a few options. So the first option is the method that we're using to fetch the API and it's post so we're posting something to our API. Then we want to make sure we're sending headers pretty much like when we did our calls through Postman. So we want to make sure we set up the content type like we've done with Postman to be, and if you remember, it was application/[[JSON]]. And then what we're going to do outside of our editors, so make sure you're outside of that particular object here, we're going to do body so basically what's in the body, and then we're going to stringify basically the object that we have here so it's ready to be submitted like so and we're passing contact to it. Then we're going to do a then
>
> **[5:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=326)** so we can get a response from the server and actually and know that it has worked. Response.json and finally refresh the window.
>
> **[5:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=344)** Okay. So that completes the code for the add contacts. So let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[JSON]] (2)
> **CLI Commands:** make (8), node (1)
> **Env Vars:** api (2), url (1)
> **Tools:** postman (2)
> **File Paths:** response.json (1)
> **API Endpoints:** /api/contacts (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)

#### [Add server controller for CORS](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=0)** - [Instructor] OK, so now that we've finished this code, let's go ahead and test our application. So the first thing we're going to do is get our server started, so let's go up and bring up our terminal, and let's make sure that we are in the client, and then let's go and do [[npm]] start. And right now, a portion of our application is showing but we're not seeing any data. So if you look into the browser console, you'll see an error message that mentions CORS right here. Basically what that means is that our front-end isn't on the same origin as the backend. In this case, port 3000 and 8080 and as a protection the server won't allow the post, put, delete, and get methods if it comes from another origin, or in this case a different URL. If you plan on having your front-end and backend on the same address, you won't have this issue, but if they will be different, we need to address it. For this to work, we'll add a controller with some syntax to allow CORS for our port 3000. So let's get to it, and while we're on it, we'll also fix this little error here. Because we copied code directly from materialized within do class name, and we did class instead, so let's quickly fix this, so let's go back to our code, and the first thing we're going to do is change all the class to class names so what we'll do is use a find and replace. So what I did is basically Command + F
>
> **[1:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=94)** you can do the same with [[Windows]] on Control + F and then we'll find all the class and then make sure that you fix this one after, and then we'll replace it with class name, and then just replace all. And then the only thing you need to fix is make sure that the class for your class is called a class, if that makes any sense. And then if you check down here, all class have been changed to class name, so we should be good to go here. And then the same thing where we copied code, so let's do a find and replace again. Let's do that, and we don't need to fix because this is a functional component, so let's go here and I believe this is OK here because we didn't do copy and paste on this one, so we should be good for that, and there you go. So we're back to the CORS issue and this is the one that we're going to start fixing now. So what you need to do is close out these files and now the first thing we're going to do is go inside of the contact repository first. So let's close out of the client and let's go back into our server, and go into the contact repository, and here what we're going to do is add two lines. So the first one will import org data [[Spring Framework]] .data .[[Representational State Transfer (REST)|rest]]
>
> **[3:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=186)** .store and the one you're looking for is CORE annotation.repository rest resource and it's not store, it's core. Perfect, so now that you have this, you can basically implement it by adding it at the top of your class. What you need to do is repository resource. So that's the first thing we need to do. Then what we need to do is create a brand new file, and in this file we'll have our controllers which basically will allow us to return the data to our client and allow CORS to have it. So inside of our model folder here, what we're going to do is create a brand new file that we're going to call ContactsController.[[Java]] and then we're going to copy a few lines so let's go ahead and copy the package. And then what I'm going to do is create the class first and then we'll do all the imports in this video and then continue working on this file in the following video, so let's go ahead and start with creating the class, like so. And then at the top of it, we're going to add rest controller and then we're going to add request mapping and then we're going to pass the API to it,
>
> **[4:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=284)** so basically we're passing the mapping of our API, and then we're going to do cross origin and then pass origin the local host that's trying to access this server. So basically what we just done is, do the actual API mapping and then pass the actual address that's trying to get resources from this server which is our local host 3000. Alright, so now that we've started our class and imported a few things and mapped out the actual address that needs to access the server, let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[npm]] (1), [[Windows]] (1), [[Spring Framework]] (1), [[Java]] (1)
> **Env Vars:** cors (4), api (3), url (1), core (1)
> **CLI Commands:** make (3), find (3), npm (1)
> **Ports:** port 3000 (2)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is called (1), is a  (1)
> **File Paths:** contactscontroller.java (1)
> **Tools:** terminal (1)

#### [Finalize server controller for CORS](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=0)** - [Instructor] Okay, so let's finish our ContactsController, and we'll continue by writing our code for our controllers and make sure that we have everything we need to log course to work with this backup. And the first thing we need to do is get our contactRepository, and then we'll go ahead and create our public class, ContactController, which will take the contactRepository.
>
> **[0:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=36)** And then make sure that we can use it inside here. So, let's do this, contactRepository. Perfect. So now what we need to do is start doing our mapping for our contacts with our GetMapping, first. And as I add the GetMapping, we have the proper imports. And for this one we're going to specify that it's for the URL or the endpoint contacts, and do a collection of Contact,
>
> **[1:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=72)** and then create the function contacts. And we may have to import a few things, such as collection, but we'll do that after. And then we'll return a collection of Contact.
>
> **[1:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=88)** So, basically we're returning all the contacts in the database, from the contactRepository, and basically use the function findall to find them all. And that's basically our GetMapping function done here. So, let's go ahead and fix that right away, before we move on. And I'm just going to simply import [[Java]].util, like so. And we got our collection. And then let's do the same for our PostMapping. So, let's do PostMapping for the same endpoint, so contacts. So, we're going to be posting to that same URL, and then ResponseEntity. So, basically this controller, or this function, will be to post new contact. So, we'll create this one, createContact. And for this one, we'll take some arguments. So, valid, we'll also take RequestBody,
>
> **[2:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=161)** and pass Contact. And if we have any errors, then we can throw an error URISyntaxException.
>
> **[3:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=182)** So, basically, we're saving all new contact to our contactRepository, basically our database. And then we want to return the result. So, I'll make sure that we get some Response to know that it has worked, ok .body and then pass the result.
>
> **[3:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=206)** Okay, so let's make sure we have this guy imported. So, let's do a quick fix. Import valid, and we're good to go here. And everything seems to be fine and dandy, except this here, so let's fix that. And we're all good. All right, so we need to save, and we need to make sure we restart the server here. So, let's go ahead and do that. So, you're going to see this thing turn from blue to orange once this is turned on, if you want to check if it's working, you can go into the Debug Console and you can see that the server is running, all right. And then let's go back to our R application and then do a refresh. And, as you can see, we have a point of data, it is working. So, now we have the first point of data. So, if you want to check to make sure, you can go in Postman, and do a get, like we've done before, and you can see that we have one item. So, as you can see now, it's a little bit different from what we used to have, but at least we get the data with an id, firstName, lastName and email. So, now let's go back to our application, and we can minimize this to take a look if there's any errors. And then let's go and add a new name. So Manny Henri, me2@[me.com](https://me.com), and submit.
>
> **[4:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=292)** All right, so we got a small error here. So let's go and check the Add Contact form, because this is coming from AddContacts. So, let's go and quickly look into our code. And let's go to the AddContacts file. Let's just close this. And this seems to be okay. So, I don't have an issue with that. So, let's scroll down, see what we're doing here. And, as I can see, what we're calling is not even the same as what we have here. So, let's change that. I definitely changed one earlier, but I didn't change this one. So, let's go in and change this. And let's do the same for the other input. So, basically I changed the [[HTML]] for, but not the actual reference to it. So, that's why we have this issue. And email doesn't have to change, so we're good. Okay, so let's save that, and let's go back to our application which should have restarted. And let's go ahead and try to add a new item, 2@[me.com](https://me.com).
>
> **[5:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=357)** And boom, and this has disappeared. And if we scroll down, we're going to have the second one. So, that basically has resolved the issue. So, right now, whenever you add new items to this form, you're going to see new people appear here, and then also the form will clear up. And if you want to check also from Postman, and you do a Get, you're going to see the two point of data. So, this concludes building the full stack API, plus the front-end with [[React.js|React]] and Spring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[HTML]] (1), [[React.js|React]] (1)
> **Code Identifiers:** contactrepository (5), createcontact (1), firstname (1), lastname (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** url (2), html (1), api (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2), go to (1)
> **URLs:** [me.com](https://me.com) (2)
> **Tools:** postman (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Context and state](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=0)** - [Instructor] Let's dive into how to efficiently manage state and utilize a contacts API in your [[React.js|React]] applications, especially when working with Spring backend. This will be a quick guide, so let's get started. In React, state is crucial for creating dynamic and responsive applications. It's what allows your components to remember information, react to user inputs, and more. Whether it's a form input or loading data from a server, state makes it manageable. But as your application grows, passing state down through multiple components becomes cumbersome. That's where React's contacts API comes in. It provides a way to share values like user data, preferences or themes directly with components, no matter where they are in the component three. So how would you integrate this with a Spring backend? It's actually simple, because you're doing it from the React application, the backend doesn't have any importance in this implementation. So the way you would do it is first you would create your contacts here. So in this case, we have a contact that we've been using through the application, so we would update it to the contacts here. So you create your contact contacts with create contacts here, and then you would export it as such. Then what you need to do is get into basically which component first that needs to traverse your state to. So what I mean by that is,
>
> **[1:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=92)** let's say you want to have this contact state usable across all of your components inside of the app.js. Then you would actually create your contact provider here. If you needed somewhere down in your application, not necessarily at the top of your application, then you actually pass the contact provider where it needs to be. So you can actually decide where that goes. And then every component inside of where you initiated the contact provider will have access to that data. So the way it works here, you have your state that you've defined here, and then what you do, in this case, we're actually fetching from our Spring backend here. And then the response, we're actually creating the data. We're passing that data to the contacts, right? So we're setting the state with set contacts here. So we have access to that state here. But now what we need to do is pass it down with the contacts through the contact provider. So once we set that up here, every components inside of app.js will have access to it. So now how can we access it inside of, for example, the contacts component. So we go here in the contacts component, and all we have to do is basically use contacts, contact context, and then we have access to it here, and then we can map it, do whatever we want with it. So this is how you would use it.
>
> **[3:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=188)** Mastering state management and the contacts API in React can enhance your full stack applications, providing a more organized, efficient way to handle data flow between your React front end and your Spring backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (7)
> **Env Vars:** api (3)
> **File Paths:** app.js (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=0)** - [Emmanuel] This course was about learning how to build a Full Stack project, leveraging [[React.js|React]] and Spring. You should be able to apply these techniques you've learned in the course to build your own projects with these two frameworks. If you got lost at any point due to your lack of experience with [[Java]] or [[JavaScript]], I suggest you take a few introductory courses on these subjects. And you can find many in our library to enhance your basic knowledge. Also, if you'd like to push your knowledge around React and Spring, there are several courses you can take on the subject. In fact, I have many courses on React so feel free to explore them. And finally, if you'd like to explore other subjects related to building Full Stack applications or would like to build a JavaScript back-end, look for other courses on [[Node.js]], Express, [[Angular]], or any other front-end frameworks we cover in our library. Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[JavaScript]] (2), [[Java]] (1), [[Node.js]] (1), [[Angular]] (1)
> **CLI Commands:** find (1), node (1)
> **File Paths:** node.js (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Spring Framework
- Full-Stack Development
- React.js

## Path Context

### In [[Getting Started In Spring Development]]
← [[Spring 6- Spring Security]] | **5 of 5**

## Appears In

- [[Getting Started In Spring Development]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — React.js, Full-Stack Development
- [[React- Creating and Hosting a Full-Stack Site]] — React.js, Full-Stack Development
- [[Advanced Spring- Application Events]] — Spring Framework
- [[Advanced Spring- Spring Boot Actuator]] — Spring Framework
- [[Performance Tuning in Spring Apps]] — Spring Framework

---

[↑ Back to top](#)