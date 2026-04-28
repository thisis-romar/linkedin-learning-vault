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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Building%20Full-Stack%20Apps%20with%20React%20and%20Spring.md)

![Building Full-Stack Apps with React and Spring](https://media.licdn.com/dms/image/v2/C4E0DAQF-K27TCH4AoQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118627641?e=2147483647&amp;v=beta&amp;t=KKUIh9ScJZH1j85bom748v-d6xj8LzjFyXwnIk9sXT4)

# Building Full-Stack Apps with React and Spring

> Pairing a popular front-end framework with a full-featured back-end solution is a natural next step for developers who want to go “full stack”: building interfaces and the code that powers them. In this course, instructor Emmanuel Henri explains how to get a full-stack app up and running with React and Spring. He walks you through a complete sample project: a REST API with a form-based interface. 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring) | 1h 26m | Intermediate | 38K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Initial Setup** (7 videos)
- **3. 2. Spring Models** (4 videos)
- **4. 3. HTTP with Spring** (6 videos)
- **5. 4. Basic Frontend with React** (7 videos)
- **6. Conclusion** (2 videos)

### 1. Introduction

#### Create your own mighty full-stack app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=0)** - [Instructor] Spring and React have become standards in the Java and JavaScript world and using these two technologies into a single project can have its benefits for a developer.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=11)** If you've had some experience developing front end projects, and looking to learn a backend solution in a different language.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=17)** Or as a Spring developer, you've been looking for a course on React and how it integrates with Spring.
>
> **[0:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=23)** If you've answered yes to any of these questions, you've come to the right place.
>
> **[0:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=28)** In this course, we'll explore how to integrate the two frameworks into a single REST API with a React front end.
>
> **[0:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=35)** Hi, I am Emmanuel Henri, and in the past I had to work on several projects where we leveraged Spring as the back-end with a React front-end, which has been my front-end tool for a long time.
>
> **[0:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=47)** It'll be my pleasure to explore how to work with both.
>
> **[0:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=50)** First, we'll take a look at the different pieces we'll use in this course, as well as getting the back-end and front-end initialized.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=58)** Next, we'll dive deep into the Spring models in data persistence and set it up for a project.
>
> **[1:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=64)** Then we'll continue by building our different endpoints to provide a full crawl back-end and how to code them.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=70)** And finally, we'll move to build our React front-end by adding list iterations in the proper forms to add new items.
>
> **[1:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-your-own-mighty-full-stack-app?u=76281980&t=78)** So if you're ready to learn how to build a full-stack application with Spring and React open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), finally, (1), let (1)
> **Env Vars:** rest (1), api (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980&t=0)** - [Instructor] As this course covers building an application with a Java in JavaScript framework, experience with both of these languages is a must.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980&t=7)** And for JavaScript especially ES6 syntax is a must for this course.
>
> **[0:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980&t=12)** If you're struggling with any of those two languages, I suggest you take a few introductory courses to help you there.
>
> **[0:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980&t=19)** You can take this course on a Mac or Windows, as building these frameworks can be done in both.
>
> **[0:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/what-you-should-know?u=76281980&t=25)** Last but not least, being familiar with Terminal commands and MPM isn't must, but definitely will help you when we use these tools.

> [!info]- Semantic Content
>
> **Env Vars:** es6 (1), mpm (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Initial Setup

#### Introduction to Spring
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=0)** - [Emmanuel] Spring has quickly become a strong player in the back-end tools for Java developers.
>
> **[0:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=5)** Its main focus is in simplifying the entire creation of new project with Spring Boot where you can quickly build a back-end for your needs with a few simple steps.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=17)** For example, you can quickly get started with a REST API, a web server, and many more in a few minutes without configuring nor setting up all the required files.
>
> **[0:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=27)** It also supports both types of databases, such as SQL and NoSQL.
>
> **[0:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=32)** So if you're comfortable with Mongo or SQL or whichever database you prefer, Spring supports most of 'em.
>
> **[0:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=41)** And finally, the Spring development team are making great efforts in making sure your ecosystem of tools is also well supported, such as IDEs, such as Spring Tool Suite, IntelliJ IDEA, and NetBeans, server environments, developer tools, and more.
>
> **[1:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=61)** And there are many guides available for all kinds of projects if you're interested in exploring its framework further.
>
> **[1:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-spring?u=76281980&t=67)** So in other words, Spring is a solid offering for the back-end developer.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), rest (1), api (1), idea (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** mongo (1)
> **Code Keywords:** finally, (1)
> **Tools:** intellij (1)
> **Speakers:** - [emmanuel] (1)

#### Introduction to React
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=0)** - [Instructor] Now let's review our front-end piece, React.
>
> **[0:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=3)** React has been a solid offering for building front-end applications and has quickly become the number one framework to use for this purpose.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=11)** In fact, many companies you know, have React components everywhere.
>
> **[0:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=16)** If you've ever watched a Netflix show on the web, you're watching it on a front-end build with React.
>
> **[0:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=23)** Its simplicity of its syntax and best practices around managing the application state, has become a standard amongst developers.
>
> **[0:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=31)** And if you're not familiar with the concept of components, state and props, as we'll build our front-end part we'll go over these basic terms.
>
> **[0:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=41)** And a major advantage of using React in your development is, leveraging your knowledge of React concepts, you can build also mobile applications with React Native.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=52)** And any type of front-end you can think of with a base React application.
>
> **[0:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=57)** And because React uses plain JavaScript functions and classes for its components, it should feel right at home for Java developers.
>
> **[1:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=67)** Also because of its huge popularity, React's ecosystem has grown with many offerings for state management, like Redux and MobX, to routing with React Router, to testing with Jest.
>
> **[1:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=80)** So needless to say, if you've been dying to learn a leading front-end framework React is a good candidate.
>
> **[1:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-react?u=76281980&t=87)** All our project inside of my company and my own personal projects are always built with React first.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Overview of the full-stack and MVC
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=0)** - [Instructor] If you have been programming for a few years you may have heard of the model view controller pattern, but it is often the first thing you learn as you grow more experienced as a developer.
>
> **[0:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=9)** This pattern basically defines how an application should be split and often reflects how your modules are organized within three simple categories, models, views, and controllers.
>
> **[0:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=21)** The model is where your data resides, where you define your schemas and the models for your data.
>
> **[0:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=28)** The views is where you have your views and in most cases the pure HTML of your application, where the visuals are.
>
> **[0:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=35)** And finally the controller is where you have your logic of your application, the functions that makes your application run.
>
> **[0:42](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=42)** Following this pattern most developers put all the files in structure of their application following this pattern and even sometimes name the folders with these labels.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=52)** So if we apply this pattern to the stack we'll be using in this course the models would be handled by spring as long as the controllers which are being in most part handled as well into spring.
>
> **[1:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=65)** And finally the view that will be handled by react.
>
> **[1:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=68)** And when I say most part for controllers, some of the logic sometimes can be handled by react with their high order components, which are the components that wrap some of the logic to create a new component.
>
> **[1:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/overview-of-the-full-stack-and-mvc?u=76281980&t=81)** We want to explore HOCs in this course, but if you'd like more information on them look into reacts documentation.

> [!info]- Semantic Content
>
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### IDE for a Java/JavaScript environment
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=0)** - [Instructor] When looking for an ideal IDEA for development, and especially nowadays, you have multiple options at your disposal, and most of them are free.
>
> **[0:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=8)** It's mostly a question of where you are the most comfortable to work with.
>
> **[0:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=12)** For the frameworks used in this course, you can use NetBeans, IntelliJ IDEA, and many others.
>
> **[0:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=20)** In my case I have been using Visual Studio Code since they introduced it, and it's what I'll use in this course.
>
> **[0:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=27)** So if you already have an IDEA your comfortable with look into their documentations to see what extensions or plugins you need to install to support Java, JavaScript, React, and Spring.
>
> **[0:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=37)** And feel free to skip the remainder of this video, where we'll take a look at the requirements of working with Visual Studio Code.
>
> **[0:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=45)** So for example, go to this link code.[visualstudio.com/docs/java/java](https://visualstudio.com/docs/java/java) dash spring boot.
>
> **[0:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=56)** And on this page, you're going to see the requirements to work with Spring.
>
> **[1:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=60)** So first off all, these are the tools that you can install as extensions inside of Visual Studio Code that will help you work with Spring, but you absolutely need the requirements here.
>
> **[1:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=69)** So you need to have Java Development Kit version 1.8 or above.
>
> **[1:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=73)** You also need to have Apache Maven and you need to install the Java Extension Pack to help you work with Spring.
>
> **[1:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=81)** So follow the instructions on this page to get you set up in Visual Studio Code.
>
> **[1:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=86)** For Windows follow the instructions here and for Mac, it is a simple installation of the JDK and then leverage Homebrew to install MVN or Maven and you should be all set.
>
> **[1:40](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=100)** So for example, if you don't have Homebrew, all you have to do is copy from this page here brew.sh the link you have in here in your terminal like so.
>
> **[1:51](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=111)** So let's go to terminal.
>
> **[1:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=114)** And all you have to do is paste that line and it's going to install Homebrew.
>
> **[2:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=120)** Once you have Homebrew installed, you can literally go and do first java --version.
>
> **[2:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=126)** If you don't have anything here, Mac will suggest a link here that you can click and install Java.
>
> **[2:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=133)** Once you have that installed, you can do mvn --version and, again, if you don't have anything here, what you could do is do brew install maven and then it will install Maven inside of your system.
>
> **[2:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/ide-for-a-java-javascript-environment?u=76281980&t=150)** And once this is done, you are all set to continue to the next video.

> [!info]- Semantic Content
>
> **Prerequisites:** install (8), you need to have (1), set up (1)
> **Tools:** visual studio (4), terminal (2), intellij (1)
> **CLI Commands:** mvn (2), brew (2), apache (1)
> **Env Vars:** idea (3), jdk (1), mvn (1)
> **Code Keywords:** let (1), continue (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **File Paths:** brew.sh (1)

#### Introduction to Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=0)** - [Instructor] In this course, at some point, we'll need to be able to test and use the API endpoints.
>
> **[0:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=5)** A great tool to do this is Postman.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=7)** So let's go ahead and install it.
>
> **[0:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=9)** So go to [getpostman.com](https://getpostman.com) and once you get to this page, what you could do is literally click on get started.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=17)** And download whatever version is for your system.
>
> **[0:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=20)** So it should automatically suggest the right version.
>
> **[0:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=23)** If not, then you can click on the other versions here.
>
> **[0:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=26)** So you can have Linux, Windows, and in this case, Mac.
>
> **[0:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=36)** Then you can extract the downloaded file, and in the case of the other operating system, it's an installation file, and then simply drag and drop the actual program inside of the applications.
>
> **[0:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=50)** Now let's go ahead and open Postman.
>
> **[0:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=53)** When you're first getting into Postman, you need to log in or create an account.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=58)** And the main reason for this is to keep all your API calls inside of a repository, inside of Postman.
>
> **[1:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=66)** So let's go ahead and connect.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=70)** So basically, Postman is a tool to test your API calls.
>
> **[1:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=73)** So if you click at the top here, on the actual methods here, you can see a list of all the methods that are available for APIs.
>
> **[1:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=81)** So for example, if you want to do a Get, you click on Get, and then you enter the name of your API.
>
> **[1:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=87)** So if my endpoint is called local host 3000 contact, then I can simply go ahead and click send, and it's going to test my API.
>
> **[1:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=96)** And you can see all the methods that you can use here.
>
> **[1:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=98)** So you can use Post, Put, and Delete, which are the most common ones, and then if you need to enter any parameters, so let's say, for example, you're doing a Put or a Post, then you need to enter some data, you can use the headers and then the body to enter any types of data inside of your Postcall.
>
> **[1:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=117)** So for example, if you do first name, then you can enter the value and it's going to do the call with those values inside of the headers.
>
> **[2:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=126)** Also, if you're looking for code suggestion, there's a nice tool that comes with Postman that is in this section here, called code.
>
> **[2:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=132)** And what you can do based on the language you're working on, you can get suggestions to make your calls.
>
> **[2:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=137)** So if you want to do an HTTP call, you can select this.
>
> **[2:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=141)** In the case of JAVA, you can do this.
>
> **[2:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=143)** And then you're going to get codes, snippets that you can use inside of your application or your ID.
>
> **[2:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=149)** Same thing with JAVA script, and so on and so forth.
>
> **[2:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=154)** So this is very useful when you're developing and you want to test your API calls directly inside of a tool that's external to, let's say for example, your terminal or your main application.
>
> **[2:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=164)** If you're doing something in your application and it's not working as it should, then you can use that tool to test your API calls.
>
> **[2:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/introduction-to-postman?u=76281980&t=172)** And now that we have Postman installed, let's move on to the next step.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), case, (1), delete (1)
> **Env Vars:** api (7), java (2), http (1)
> **Tools:** postman (7), terminal (1)
> **UI Navigation:** click on (3), go to (1), drag and drop (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **URLs:** [getpostman.com](https://getpostman.com) (1)

#### Initialize a project with Spring Boot
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=0)** - [Instructor] Now that we've got all the requirements completed, let's go ahead and generate a new Spring project leveraging Spring Boot Initializr.
>
> **[0:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=8)** So go to [spring.io](https://spring.io) and then click on Projects and then click on Spring Boot.
>
> **[0:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=18)** And what you want to do is go all the way down to Quick Start and then click on Spring Initializr.
>
> **[0:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=27)** So what we're going to do is select a Maven Project which we install all the dependencies for that.
>
> **[0:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=32)** Language Java.
>
> **[0:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=34)** Leave the Spring Boot at 2.1.4 and then for this guy here, as opposed to example, what we're going to do is call this one crm and then Artifact, I'm going to call this one crm.
>
> **[0:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=50)** And then, we don't need to select anything in the More Options here, but what we're going to do is select a few dependencies that we want to install.
>
> **[0:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=59)** So basically, what this tool is going to do is create a ZIP file that will have everything that we need to get started with initial project.
>
> **[1:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=68)** And this is the advantage of using this tool is that we get everything we need and we don't need to do a whole lot of setup.
>
> **[1:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=75)** So, the items that we need as dependencies, the first one is Rest Repositories, so click on the plus.
>
> **[1:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=83)** You need JPA, so we can have our SQL Database and you also need H2 for the SQL Database Support.
>
> **[1:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=93)** And finally, Lombok, which will simplify our code.
>
> **[1:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=98)** Once you have all this, you can basically click on Generate Project and it's going to create the ZIP file.
>
> **[1:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=105)** This is how simple it is to create a project.
>
> **[1:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=108)** So we can close that window.
>
> **[1:51](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=111)** So the first thing we're going to do is unzip the file that we just downloaded and what we're going to do is right-click to Finder, New Finder Window, and then go to Downloads and then double-click on the ZIP file.
>
> **[2:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=125)** And then what we'll do is go inside of your favorite IDE or Visual Studio Code in my case and then click on the Explorer here which opens up this tab, Open Folder, and then let's go and grab our crm.
>
> **[2:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=142)** And as you can see, when we open the project in VS Code and you have all the right extensions installed, the IDE goes through, setting up all your files for you, so you can see at the bottom that there's a lot of stuff that's happening.
>
> **[2:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=154)** So basically what's happening right now, Maven is downloading all the dependencies and setting up your server so we can run it eventually.
>
> **[2:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-a-project-with-spring-boot?u=76281980&t=163)** So let it run and then let's move on to the next step.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (2), right-click (1), double-click (1), open the (1)
> **Env Vars:** zip (3), sql (2), ide (2), jpa (1)
> **Code Keywords:** let (4), finally, (1), this, (1)
> **Exercise Files:** zip file (3)
> **Prerequisites:** install (2), setup (1)
> **Tools:** visual studio (1), vs code (1)
> **CLI Commands:** unzip (1)
> **URLs:** [spring.io](https://spring.io) (1)

#### Initialize the React client project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=0)** - In this step we'll initialize our React project, but before we do so let's quickly install the node.js dependencies.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=7)** So first, if you don't have node.js already installed, go to [nodejs.org](https://nodejs.org), and then in the download for whatever operating system you're using, download the LTS version.
>
> **[0:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=21)** Once you have that downloaded, click on the installation file, go ahead and install node.js, and it will also install npm.
>
> **[0:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=37)** Once this is done we can actually go back to Visual Studio Code.
>
> **[0:42](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=42)** And now what we're going to do is bring up the terminal, click on view, terminal, and then let's verify that we have npm installed.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=52)** So npm version, and if you see a version you're good to go.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=58)** So what we're going to do next is initialize our React project inside of the CRM project here.
>
> **[1:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=64)** So you need to be inside your project, and you'll see soon the project that we just created with React.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=70)** So what I'm going to do is use the npx command, and then create React app, and then call this client.
>
> **[1:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=80)** So what this command is going to do is temporarily download create React app inside of your system, then create a new client or a new React client inside of this project.
>
> **[1:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=93)** So it's going to be a folder that's called client, and it will be a React project.
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=97)** So you don't need to do npm create React app, and then do create React app, and then create the new client.
>
> **[1:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=104)** So with this simple command npx, it does it all in one shot, and you don't have the dependencies installed globally on your system.
>
> **[1:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=112)** So let's go ahead and hit return on that.
>
> **[1:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=116)** Okay, so now inside of our CRM project we have a new folder called client, and this is where our React dependencies are installed.
>
> **[2:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=125)** So if you take a look inside of that folder, you're going to have a source folder, and this is your React application.
>
> **[2:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=133)** So now we have everything that we need.
>
> **[2:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=135)** So we have our backend which is the whole project here, and then we have our client which is a React client.
>
> **[2:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/initialize-the-react-client-project?u=76281980&t=141)** So now we can move on to the next chapter.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), node (3), npx (2)
> **File Paths:** node.js (3)
> **Code Keywords:** let (3)
> **Env Vars:** crm (2), lts (1)
> **Tools:** terminal (2), visual studio (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (3)
> **URLs:** [nodejs.org](https://nodejs.org) (1)


### 3. 2. Spring Models

#### Data options and JPA
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=0)** - [Instructor] When we set up Spring, we set it up with JPA and also SQL Database, or you can pretty much use whatever database you feel comfortable with.
>
> **[0:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=9)** So go to [spring.io/projects/spring-data](https://spring.io/projects/spring-data) and you can see some of the different options available for SQL or NoSQL on this link.
>
> **[0:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=22)** And if you prefer down the road to set your project with a different database, if you scroll down, you'll see what are the different options available.
>
> **[0:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=29)** So if you look at the list here, you have, for example, MongoDB, Redis and a bunch more.
>
> **[0:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=36)** Then if you want to select a database with a guide in Spring's documentation, you can look into this link here which is [spring.io/guides](https://spring.io/guides) which is basically this section here and once you get to this section, you can actually find any guide based on something.
>
> **[0:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=54)** So for example, if we do MongoDB, we'll have sections based on MongoDB, or you can simply do data like so.
>
> **[1:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=66)** So what is exactly JPA?
>
> **[1:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=69)** JPA stands for Java Persistence API and it's basically the database implementation that defines what object needs to be persistent in a database of your choosing.
>
> **[1:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=80)** In this case, we used a SQL-based database.
>
> **[1:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=83)** Spring's implementation is simplified to make the use of JPA a lot more developer-friendly.
>
> **[1:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/data-options-and-jpa?u=76281980&t=90)** Okay, so now that we've got a better idea of our options, let's move on to code our initial model.

> [!info]- Semantic Content
>
> **Env Vars:** jpa (4), sql (3), api (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** case, (1), let (1)
> **URLs:** [spring.io](https://spring.io) (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** for example (2)
> **Definitions:** stands for (1)
> **Prerequisites:** set up (1)

#### Define first model class
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=0)** - [Instructor] Now let's go ahead and code our initial model.
>
> **[0:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=3)** So if you go in the root directory of our CRM here, you have a source folder.
>
> **[0:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=8)** Now click on this folder, and then go all the way down to the last file on the tree.
>
> **[0:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=15)** So in this CRM folder, we're going to create a new folder, and we're going to call this one model.
>
> **[0:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=21)** And inside of that model folder, we're going to create a new file, and we're going to call this one Contact.Java.
>
> **[0:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=31)** And in this file, we'll define our model.
>
> **[0:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=33)** So first of all, we're going to create the package, which will be com.crm.model, like so, and then what we'll do is import a few things that we'll need momentarily.
>
> **[0:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=49)** So javax.persistence.Entity,
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=58)** and then let's make sure that we import that.
>
> **[1:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=65)** And then let's copy it and paste it two more times, and what we'll do, we'll just change the last here, so this is going to be GeneratedValue, and this one is going to be Id.
>
> **[1:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=83)** And let's just remove double code here.
>
> **[1:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=88)** All right, and also we need to import Lombok.Data.
>
> **[1:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=99)** All right, so now we'll declare Data, and we'll also declare Entity so we can use it, and then we'll define our first class, so let's go ahead and define public class, and we'll call this one Contact.
>
> **[1:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=116)** And then we'll define a few things, so let's define one of the parameters that is going to be called Id, which will use a GeneratedValue automatically, which will be Long and then Id.
>
> **[2:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=131)** So basically what we're doing is declaring all the stuff that we're going to use inside of our class.
>
> **[2:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=137)** So we're declaring also a String firstName.
>
> **[2:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=143)** So this is a contact model that we're creating, so we're going to create basically three items: firstName, lastName, and then an email, and they're all strings.
>
> **[2:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=154)** Not Strong, but String.
>
> **[2:40](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=160)** And then finally, email.
>
> **[2:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=163)** Perfect!
>
> **[2:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=165)** So now we're going to create the function that will return a new contact, which is part of our class.
>
> **[2:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=175)** We don't need to answer anything yet.
>
> **[3:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=181)** And then we will use this new function,
>
> **[3:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=189)** which will pass a String firstName.
>
> **[3:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=194)** Also, another String lastName, so you see the pattern here.
>
> **[3:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=199)** And finally, String of email.
>
> **[3:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=206)** And this will return this.firstName equals their firstName,
>
> **[3:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=214)** and we can pretty much repeat the same thing twice, and we'll just change the values.
>
> **[3:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=221)** So this is control lastName, same thing here, lastName.
>
> **[3:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=228)** This is going to be email, and then finally, email.
>
> **[3:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=236)** Okay, so now let's save this, and now we have our model.
>
> **[4:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=241)** So now that we've defined the basic model, we need to create the repository that will use and connect this model to the database.
>
> **[4:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-first-model-class?u=76281980&t=249)** Let's do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), finally, (3), class, (2), class. (2), function (2)
> **Code Identifiers:** firstname (5), lastname (4)
> **Env Vars:** crm (2)
> **File Paths:** contact.java (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### JPA repository
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=0)** - [Instructor] So now we need to create a repository for a new model.
>
> **[0:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=4)** With the repository file, we're connecting the model and its primary key into Spring's CRUD.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=11)** So I get in the same folder called model, we'll create a brand new file.
>
> **[0:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=15)** So let's go ahead and create a new file and we're going to call this file ContactRepository.java.
>
> **[0:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=29)** And in this file, we'll also use the package.
>
> **[0:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=33)** So if you want to go back to Contact, you can literally copy this line here.
>
> **[0:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=37)** So we're going to use that, copy that and paste it here.
>
> **[0:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=44)** And then we'll import org.springframework
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=55)** dot data.repository dot CrudRepository.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=70)** So it should be an import though, so let's go and make sure we import this.
>
> **[1:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=77)** So org.springframework.data.repository.CrudRepository with a capital R.
>
> **[1:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=86)** Once you have that, you should be able to create the repository.
>
> **[1:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=90)** So let's go ahead and do public interface ContactRepository extends CrudRepository and then we're going to pass to it Contact Long for the ID.
>
> **[1:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=113)** So basically we're passing the model Contact and then we're passing the ID or it's expecting an ID and then we have our ContactRepository created.
>
> **[2:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=126)** So once you save that, basically the connection between the model that we created in the last video and the database has now been made.
>
> **[2:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/jpa-repository?u=76281980&t=135)** So let's move onto the next step.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), public (1), interface (1), extends (1)
> **Cross-References:** go back to (1), in the last (1)
> **File Paths:** contactrepository.java (1)
> **CLI Commands:** make (1)
> **Env Vars:** crud (1)
> **Speakers:** - [instructor] (1)

#### Define example data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=0)** - [Instructor] Now that we have our initial model, and it is connected to our server, or our database, I'd like to pre-load it with some initial data so when we start it we can test that it works.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=11)** So again, in the same folder here, Model, let's create a new file.
>
> **[0:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=15)** And this file, we're going to call it Demoloader.java.
>
> **[0:24](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=24)** And then, let's make sure we connect it to the same package again.
>
> **[0:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=30)** And then let's do some imports.
>
> **[0:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=32)** So we'll do importorg.springframework.beans.
>
> **[0:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=43)** factory.annotation.autowired.
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=55)** And I have some spelling mistake here.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=58)** So we're good.
>
> **[0:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=59)** All right, so let's copy this line and paste it again.
>
> **[1:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=64)** And in this one, let's change from this section here, so instead of beans, it's going to be boot.commandlinerunner.
>
> **[1:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=76)** And then let's copy and paste again.
>
> **[1:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=78)** And from same area, we're going to call sterotype.component.
>
> **[1:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=89)** And then make sure we decorate our class with component.
>
> **[1:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=94)** And then let's go and define our class.
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=97)** Public class demoloader implement command linerunner.
>
> **[1:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=106)** And then this command linerunner.
>
> **[1:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=107)** So basically what we're doing here with command linerunner is we're running a command line with this guy here.
>
> **[1:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=113)** So what we're going to do is basically insert some data inside of our server.
>
> **[1:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=119)** So let's go ahead and create those things.
>
> **[2:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=121)** So private final contactrepositoy repository
>
> **[2:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=131)** and then decorate with autowired, a function that we'll call Demo Loader, which will take a new contact repository, which we'll call Repository.
>
> **[2:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=151)** And then, define this repository as repository.
>
> **[2:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=157)** So we're basically doing much of the initial stuff that we need to do when we're creating functions and so on and so forth.
>
> **[2:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=166)** Override.
>
> **[2:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=168)** And then this is where we're going to run with command linerunner what we need to do.
>
> **[2:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=176)** So it's going to pass strings, and if we have an issue, throws an exception.
>
> **[3:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=187)** Otherwise, go ahead and pass to this repository, so basically our database connection.
>
> **[3:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=194)** Save the following data.
>
> **[3:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=196)** So, we're going to add a new contact, which requires, and you can see already the suggestions that we need.
>
> **[3:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=205)** So we need a first name, a last name, and then an email.
>
> **[3:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=209)** So let's go ahead and do that.
>
> **[3:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=210)** So the first one is going to be my name, the last name, and no, this is not my email, I'm just putting a generic email in here.
>
> **[3:42](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=222)** And there you go, we have our demo script that will run when we first run our application in our server.
>
> **[3:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/define-example-data?u=76281980&t=230)** So now that we have all these steps set up, let's move on to the next step.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (2), class. (1), public (1), private (1)
> **CLI Commands:** make (2)
> **File Paths:** demoloader.java (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. 3. HTTP with Spring

#### Finalize base server
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=0)** - [Narrator] We need to finalize our API endpoints as we'll need to use it for both the front end and the back end.
>
> **[0:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=5)** So let's change this and our main function to run our REST API.
>
> **[0:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=10)** So the first thing we're going to do is create a new file.
>
> **[0:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=13)** And we're going to do this in the model folder again.
>
> **[0:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=16)** So basically click on the model folder, and then click new file.
>
> **[0:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=20)** And we're going to call this one react and spring data rest application dot java.
>
> **[0:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=35)** And again in this file we'll also copy the line package.
>
> **[0:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=39)** So let's go ahead and do it.
>
> **[0:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=41)** Basically the same line that we've had in every single one of our files here, so we can connect all these packages together.
>
> **[0:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=48)** And then we'll import a couple files.
>
> **[0:51](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=51)** So let's go ahead and copy from org spring framework.
>
> **[0:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=59)** Then we'll go to boot dot spring application.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=70)** And select this one.
>
> **[1:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=71)** Okay now let's copy line three, and paste it again.
>
> **[1:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=77)** And then from boot, we'll change it to autoconfigure, and then spring boot application, like so.
>
> **[1:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=90)** Then we'll decorate our class with this spring boot application.
>
> **[1:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=96)** And then create our class.
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=97)** So let's go ahead and create a public class that we'll call react, basically the entire name of the file.
>
> **[1:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=107)** So react and spring data rest application.
>
> **[1:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=117)** And then inside of that we'll have our main function.
>
> **[2:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=123)** So basically this file will allow us to run the server.
>
> **[2:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=128)** So when we first run our server, it's going to call this main function here that will run the server.
>
> **[2:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=142)** And then let's just call spring application dot run.
>
> **[2:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=149)** And then the primary source is going to be the full name here.
>
> **[2:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=153)** So let's copy that just to not have to re-type the whole name again like so.
>
> **[2:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=161)** And for the args, we leave it as is.
>
> **[2:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=164)** And then... and we want to make sure we add the dot class.
>
> **[2:51](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=171)** Perfect.
>
> **[2:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=173)** Now we're all set with this file.
>
> **[2:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=175)** And let's save it.
>
> **[2:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=177)** And now we need to go inside of our resources here.
>
> **[3:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=180)** So if you look into the directory, the main source, and then you scroll all the way down you see the resources folder here, just open that one like so.
>
> **[3:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=190)** And we'll only have a single line here that will allow us to set what is the actual URL for the API.
>
> **[3:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=200)** So rest base path equals forward slash API.
>
> **[3:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=208)** So basically that's going to tell our server that when we actually want to reach the API, we need to do local host port 8080 forward slash API.
>
> **[3:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=218)** And that's how you set it up because we're going to need the forward slash for actually front end.
>
> **[3:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=224)** So when we run our react client, we're going to need that.
>
> **[3:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=228)** So we want to make sure to specify what is the URL for the API, and that's why we're doing this file here.
>
> **[3:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-base-server?u=76281980&t=234)** All right, so now that we have all this we are ready to run our server in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), class. (2), public (1)
> **Env Vars:** api (7), url (2), rest (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), go to (1)
> **Ports:** port 8080 (1)
> **Cross-References:** in the next (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### POST endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=0)** - [Instructor] The beauty of working with Spring is that it creates all your end points for you without writing that much more code.
>
> **[0:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=6)** So let's go ahead and test this out by exploring our post end point with Postman so we can add a few items into our back end.
>
> **[0:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=13)** So the first thing we're going to do is run the server.
>
> **[0:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=15)** So if you're doing this in NetBeans or IntelliJ IDEA, this actually might be little bit easier for you.
>
> **[0:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=22)** You can just run it and it's going to start.
>
> **[0:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=25)** But for Visual Studio Code, you have an extra step.
>
> **[0:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=29)** So what I'm going to do now is basically press F5 to get my server started inside of the Visual Studio environment.
>
> **[0:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=37)** And as you can see, you see that my server's running.
>
> **[0:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=39)** But the one extra step that it is asking is Which file do you want to use as your starting point?
>
> **[0:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=45)** And it's the file that we just created, the react and spring data rest application.
>
> **[0:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=49)** So you're going to use that.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=52)** And now your server is running.
>
> **[0:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=54)** Another caveat.
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=55)** So, let's go into Postman, I'm going to show you what it could do.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=58)** So let's go and open Postman.
>
> **[1:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=65)** And if you go into Postman and you call the API.
>
> **[1:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=69)** So let's say local host 8080 and API and you do get call and then send.
>
> **[1:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=77)** And then if you don't get the actual contacts in the list here, you just get the profile, what you need to do first and that's something that you may have to do, is to go back to your code into the file in the model, the contact Java, and put all your values here as public as opposed to private.
>
> **[1:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=99)** So we'll do something like this just for testing purposes.
>
> **[1:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=103)** This is not a secure way of doing things but for testing purposes you can do that.
>
> **[1:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=108)** So let's do public and then save.
>
> **[1:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=113)** And then show again and just restart your server again.
>
> **[1:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=119)** And then do again, the local host 8080 API.
>
> **[2:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=123)** And if you do contacts, because we created a file that would create a one contact first, let's click there and then do a get on the /API/contacts and if you get some data when you do a get call on this one, that means that you're doing the right thing.
>
> **[2:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=142)** If not, just change values to public as opposed to private in your actual model.
>
> **[2:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=148)** So let's go ahead and add an item.
>
> **[2:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=150)** So the way to add an item is basically to call the same URL and then do a post like so.
>
> **[2:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=159)** And what we're going to do is do in the headers, you want to make sure that in the headers you're using content type and then here you do application json and then in the body select raw.
>
> **[2:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=175)** So what you need to do is create a json formatted object in order to send the data to the database.
>
> **[3:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=181)** So let's go ahead and do this.
>
> **[3:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=182)** So let's do first name.
>
> **[3:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=184)** If you remember there was a first name, last name, and then the email.
>
> **[3:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=191)** So let's do this last name and then let's do email and let's do me@[me.com](https://me.com) and let's do a send.
>
> **[3:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=208)** So if you see the results below here and then you see our created contacts, too that means that has worked.
>
> **[3:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=215)** So let's do a couple.
>
> **[3:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=217)** Let's do Emmanuel Henrio and two and do another send.
>
> **[3:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=225)** We created a contacts three.
>
> **[3:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=227)** And then let's do another one.
>
> **[3:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=234)** And then do a send again.
>
> **[3:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=235)** And then we have our fourth contact.
>
> **[3:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=239)** So this is basically how you can use Postman to do some API calls with the post.
>
> **[4:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=245)** So what we're going to do is follow in the next video with a get call to see this data.
>
> **[4:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/post-endpoint?u=76281980&t=250)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), public (3), private (2), this. (1)
> **Tools:** postman (5), visual studio (2), intellij (1)
> **Env Vars:** api (5), idea (1), url (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **URLs:** [me.com](https://me.com) (1)
> **Warnings:** caveat (1)

#### GET endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=0)** - [Instructor] So the next step is to test, our get endpoint with Postman.
>
> **[0:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=5)** So in the last video, we created a whole bunch of people inside of our Contacts list.
>
> **[0:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=9)** So let's go ahead and get those contacts.
>
> **[0:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=12)** So it's fairly easy to get those contacts.
>
> **[0:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=14)** So basically what you need to do is click the actual method to get, and then keep the same URL and then click Send.
>
> **[0:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=25)** And then if we remove the params, what you can see is that we have our list of people.
>
> **[0:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=32)** So we have Emmanuel, Manny, Emmanuel again, and then Kim.
>
> **[0:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=39)** And these are all the contacts that we've actually posted with our post method.
>
> **[0:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=45)** So if you were to use this inside of React, what you'd do is basically make this call with a get call and then send.
>
> **[0:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=54)** And then you would get a list, or an array, of people or contacts that you could use inside of the application to replicate across multiple components.
>
> **[1:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=63)** I will get to that in the next chapter.
>
> **[1:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-endpoint?u=76281980&t=65)** So now that we've actually explored how to get people, we'll explore how to actually get a specific person in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (2), in the last (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** url (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### GET ID endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=0)** - [Instructor] So the next step is to get a single person.
>
> **[0:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=3)** So whenever you actually make API calls in most cases you're going to need, from time to time, to get a specific person or a specific point of data inside of your database and this is where getting a specific ID comes into play.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=17)** So how do we do this inside of our API that we just created?
>
> **[0:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=21)** Very similarly to getting the list of contacts, all you have to do is basically add the actual contact number at the end of your URL.
>
> **[0:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=30)** So for example, /1 and the cool thing of working with Fring you get the actual link that you can use at each data point so basically here, so the href is actually the actual point that you can get this data and so on and so forth.
>
> **[0:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=48)** Two, three and four so if you'd like to get the data from this person here what you could do is literally click on this link here and then do a get call and you get the information for this single user and the same thing goes when we're going to work with Reat.
>
> **[1:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=67)** So if with want to get the specific item from this contact then all we have to do is add at the end the actual number of the contact and we can get that data point from the href here.
>
> **[1:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=79)** So this is going to be available to us when we get the list of contacts inside of Reat.
>
> **[1:24](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=84)** We'll have all this data that we can play with so if you do _links.self.href you'll have this data that you'll have access to and then you can get the information for this specific contact.
>
> **[1:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=99)** Another item that I wanted to mention again is the code here so if you're actually working out of Reat or any other platforms or frameworks you can actually use the code section here and then get into the language and then get the specific information to the call under that language or protocol.
>
> **[1:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=116)** So for example, if we go into JavaScript, Jquery then you have the code to do an AJAX call to get this specific contact here.
>
> **[2:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=126)** So this is always useful when you're actually working in multiple frameworks or multiple codebays.
>
> **[2:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=132)** You can actually get some code snippets from Postman based on what you're doing inside of Postman.
>
> **[2:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/get-id-endpoint?u=76281980&t=139)** All right so now that we're explored how to get a single ID, next what we're going to do is how to update a specific ID so let's move on.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), url (1), ajax (1)
> **Code Keywords:** self (1), let (1)
> **Tools:** postman (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### PUT endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=0)** - So the next step is to be able to update a specific contact. So the way to do this is to basically first figure out which contact we want to update. So, if we go back to getting a list of contacts first, we would do a get call and then API/contact and do a send, and then we would get the list of contacts. So, if we were to update any of those contacts, lets say the third one, in our array we would have several objects which would be out contact, and inside of that object we would have the underscore link self href, which would give us the actual URL that we need to use to update that contact. So, for example, if we wanted to update this guy here, we would literally, inside of postman, double click here and then do a PUT method. So, we would select in our methods here
>
> **[0:51](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=51)** the PUT method and then make the proper changes to update the contact. So lets go ahead and do that.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=58)** So first off, like when we do a post contact, we need to change the header. So, the first thing that we would need to again select the content type to application json, and then in the body I would select raw and do, like we've done before, so we would create an object which would have the data. So lets say, for example, first name, and I can't remember what was the first name for this one, it was Emmanuel, so lets change this to something else.
>
> **[1:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=91)** Lets do Manuello. Last name lets do Henriette.
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=97)** Last name lets do Henriette.
>
> **[1:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=104)** And then the email. Lets change this to something else.
>
> **[1:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=108)** So lets say, for example, me34@[me.com](https://me.com). Alright, so this is the data. We are sending a PUT call to this address.
>
> **[2:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=120)** Then, lets execute. And now we have the results.
>
> **[2:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=124)** We have the updated third contact with this information.
>
> **[2:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=129)** So, if we go back to our GET call and do a GET again, we get the list with now the third one being updated to what we just changed. So this is basically how you would test a PUT call with out Spring Framework.
>
> **[2:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/put-endpoint?u=76281980&t=145)** So now lets move on.

> [!info]- Semantic Content
>
> **API Endpoints:** put  (4), get  (2)
> **Env Vars:** put (4), api (1), url (1)
> **Code Keywords:** else. (2), self (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **URLs:** [me.com](https://me.com) (1)
> **Tools:** postman (1)

#### DELETE endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=0)** - [Instructor] So now let's go ahead and test our delete method from our backend, just to make sure it works properly.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=7)** So what we need to do first is figure out which item that we want to delete.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=11)** So again we would do a get call, so let's go ahead and do a get for our contacts, and then figure out which item we want to delete.
>
> **[0:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=19)** So for example if we want to delete the third one here we just need to double click inside of Postman but if you're inside of React or any other framework, you would get the data from underscore links.self.href and then get this URL here and then through this URL you could literally just do a delete call without any parameters and this would delete the data, and this is exactly what we're going to do.
>
> **[0:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=48)** Let's go ahead and delete the data, and this is fairly easy and probably the easiest call to make to a backend, so let's say for example, we've done this delete call, let's go ahead and do a get of all our contacts, and now we should only have three people, one, two, and four, and again, it keeps the data the way it is, it doesn't renumber because we just deleted number three, so if we want to delete, let's say, number two or if we add new items to this database, so let's go ahead and add a new one.
>
> **[1:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=85)** Let's do a post and then contacts and then let's go into our Headers and make sure we have Content Type, as application JSON, and then in the Body, raw, let's create an object, let's create something that's fairly new so we can see what happens.
>
> **[2:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=121)** Then email, and then let's add me67@[me.com](https://me.com) OK, so this is a post, we're posting new information into our contacts, let's send it and now let's do a get call, so let's go back to this guy here and let's do a get call for all our contacts, and as you can see, number three is completely gone.
>
> **[2:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=152)** It never replaced number three, so we're removing number three and now it's gone, so we have one, two, four, and five and it'll continue down this path for all new additions to our backend.
>
> **[2:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/delete-endpoint?u=76281980&t=165)** So this is how you can do delete and test your spring backend, so let's move on now to a new chapter on actually doing our client with React.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), delete (10), self (1), type, (1), continue (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (2), json (1)
> **Analogies:** for example (2)
> **URLs:** [me.com](https://me.com) (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Basic Frontend with React

#### Create contact listing component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=0)** - [Instructor] Okay so now that we have a backend that is ready for us to work with, let's get started on creating our front end with React.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=7)** So the first thing we're going to do is get React started so right now if we go inside of our client folder, we have React here, but it's not started.
>
> **[0:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=16)** We only have the actual server for Spring that is started.
>
> **[0:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=20)** So let's go ahead and do that.
>
> **[0:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=21)** So what I can do is open a brand new terminal with this folder here like so, and if it's not showing up, what you can do is Control + ` and then do npm start.
>
> **[0:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=35)** And let's make sure we are in the right folder, so if I do an ls, I'm not in the client, so let's do cd client.
>
> **[0:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=44)** And now I am in the client, so let's go ahead and do npm start.
>
> **[0:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=50)** And now we have our React application started.
>
> **[0:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=53)** Let's make a few changes here, because we're going to work on this application over the next few videos, I want to make sure that we are going to first start at the top.
>
> **[1:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=62)** So let's go back to .vscode, and what I'm going to do is close that for now, and what I'm going to do is go inside of the source folder and then open up app.js.
>
> **[1:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=74)** And then what I'm going to do here is remove all this here at the top, so remove everything from the div class named App all the way down to the last &lt;/div&gt;.
>
> **[1:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=87)** And then what we're going to do is insert a contacts component that we'll create shortly.
>
> **[1:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=94)** And then we're going to make sure that we import it, so let's go ahead and do that.
>
> **[1:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=98)** Import Contacts from, and we're going to create also a components folder shortly, and the contacts will be inside of that folder.
>
> **[1:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=114)** All right.
>
> **[1:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=114)** So if we save this.
>
> **[1:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=116)** Most likely, yeah, the application's going to crash because we don't have the Contacts component created yet.
>
> **[2:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=122)** So let's go ahead and do that.
>
> **[2:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=124)** Inside of our source folder, we're going to create a brand new folder, so we're going to create folder from here.
>
> **[2:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=132)** We're going to make sure we name our folder the same way we've actually typed it here, so let's go ahead and name it that way.
>
> **[2:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=139)** And then inside of the components folder, we'll create a brand new file, which we'll call Contacts.js.
>
> **[2:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=146)** Again, we're following the same thing that we've created here.
>
> **[2:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=151)** And then inside of that folder we're going to create our brand new file and a component, so let's go ahead first by importing React, and also importing component from React, and then we're going to create our class component.
>
> **[2:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=172)** I'm going to do an export default.
>
> **[2:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=176)** And by the way if you plan on doing Redux with this project, do the export default at the end of the file as opposed to the top with the class.
>
> **[3:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=185)** It's going to allow you to actually export it with Redux and connect it to the proper components from Redux.
>
> **[3:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=191)** But if you don't know what I'm talking about, or if you don't plan on using Redux, then you can always do it this way 'cause it tends get a little bit cleaner doing it this way.
>
> **[3:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=203)** In my opinion.
>
> **[3:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=205)** Okay.
>
> **[3:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=206)** Then we're going to create a constructor which will pass props and we're going to create our state in this particular guy here.
>
> **[3:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=215)** So we're passing props to our constructor, and then we're going to create this.state equals to an array of contacts.
>
> **[3:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=228)** Basically we're setting up our state.
>
> **[3:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=230)** If you're not familiar with the state inside of React, this is primarily what holds all the information of your application, so it could hold data that you're going to need to render inside of your components, it could use specific UI through false states that you want to use for UI behaviors.
>
> **[4:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=248)** This is where you hold all your different states for your application and in this case, I'm going to create an array that will be filled with the data from the backend inside of our constructor.
>
> **[4:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=261)** And then we're going to use the render method, which comes from the component class.
>
> **[4:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=269)** And then return whatever HTML we put in there, so for this case we're going to do a simple div, and then inside of that div we'll simply have Hello.
>
> **[4:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=285)** Okay, so that's our first component.
>
> **[4:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=287)** Right now we have this guy calling onto our contacts.
>
> **[4:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=292)** We've created this contact code here, so let's go ahead and see if everything is working as it should.
>
> **[4:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=299)** We have Hello at the top which means that everything is working as fine.
>
> **[5:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=304)** All right, so now we'll continue working on our Contacts component that will render the list of contacts from our backend in the following videos.
>
> **[5:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-contact-listing-component?u=76281980&t=312)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (2), class. (2), from, (1), default. (1)
> **CLI Commands:** make (5), npm (2), ls (1), cd (1)
> **File Paths:** app.js (1), contacts.js (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Add materialize to the project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=0)** - [Instructor] So now we'll add some styles to our project by adding Materialize to our Index.
>
> **[0:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=4)** So lets get to it.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=7)** So first thing you want to do, is get to the page [Materializecss.com](https://Materializecss.com).
>
> **[0:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=12)** Once you get to that page, basically click on the Get Started here or on the section right there.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=17)** So once you click on that section, scroll down until you see the CDN section here, and they copy the code that we have in the box.
>
> **[0:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=26)** So let's Copy this.
>
> **[0:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=28)** And then lets go back to our project, and you want to open the Index.html, which sits in the actual client, so first make sure you are in the client, and then click on the Public folder and then open the Index.html.
>
> **[0:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=43)** And in that file, what we're going to do is Paste the code that we just copied just below the link on Line 12.
>
> **[0:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=50)** So you can delete the green comments here, and then Paste the code.
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=55)** And then, what we're going to do is grab the script code, Cut it, and then Paste it inside of our body.
>
> **[1:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=62)** Again, feel free to get rid of the comments, like so.
>
> **[1:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=66)** Now, Save this, and then lets get back to the Materialize website.
>
> **[1:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=71)** We also need to have the icon scripts, so lets go inside of our Components, and then scroll down to the Icon section, and then basically what you need to do is grab the link here, on the Usage section, Copy that, and then let's go back to our code here, and then we're going to Paste it right below the code on Line 14 here.
>
> **[1:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=97)** So that should do it for the links for the sections we need to add in order to use Materialize.
>
> **[1:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=104)** Now what we're going to do is, start adding some styles to our main App.js file.
>
> **[1:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=109)** So what you want to do first is go to App.js.
>
> **[1:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=112)** If it's not already open, you can find it in the Source folder here.
>
> **[1:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=118)** This one.
>
> **[2:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=120)** And then click on it.
>
> **[2:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=121)** And then what we're going to do is add a few styles to this page.
>
> **[2:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=124)** So the first thing we're going to do is in the first div, instead of doing the app as a style, we're going to do container-fluid.
>
> **[2:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=136)** And then inside of that particular section, we're going to insert a Navigation and then insert another div.
>
> **[2:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=145)** And inside of that div, we're going to insert a className of nav-wrapper, and then center-align like so.
>
> **[2:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=157)** And then inside that section, we're going to insert a href, which will be forward slash and then the className, we're going to insert the brand-logo, so brand dash logo.
>
> **[2:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=177)** And then we're going to call this Contacts.
>
> **[3:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=180)** And then the contacts will be in it's own division, so let's create a new division, with a className of row, and make sure that Contacts is inside of that division.
>
> **[3:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=192)** So let's Cut that line, and then insert it right below like so.
>
> **[3:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-materialize-to-the-project?u=76281980&t=201)** Okay, so that's exactly what we need, and that concludes basically that file, so we can move on to next step, after you saved.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), scroll down (2), open the (2), go to (1)
> **Code Keywords:** let (4), this. (1), public (1), delete (1), this, (1)
> **File Paths:** index.html (2), app.js (2)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** classname (3)
> **Cross-References:** go back to (2)
> **URLs:** [materializecss.com](https://materializecss.com) (1)
> **Env Vars:** cdn (1)

#### Finalize list of contacts component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=0)** - [Instructor] Now we'll finalize our listing by connecting to our server in our contact file.
>
> **[0:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=5)** So the first thing we're going to do is import two files that we're going to create in the following video.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=11)** So let's go ahead and do that while we're working on this specific file here.
>
> **[0:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=16)** So we're going to create a file called SingleContact from SingleContact, so it's not there yet, and then we'll also import AddContacts, which is going to be our form that we'll create shortly to AddContacts.
>
> **[0:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=38)** So we already have our state created here so we're good there.
>
> **[0:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=43)** So what we need to do now is do a component did mount, which is basically the method that runs before it renders our component here.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=52)** So what we're going to do is create that right away.
>
> **[0:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=56)** So component did mount, and what this method is going to allow us is to fetch the data before we actually render our component here.
>
> **[1:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=65)** So basically we'll have access to the data with the fetch method here.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=70)** So basically we're fetching from our server.
>
> **[1:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=74)** So if you remember, the address is local host 8080, api, and then contacts, and then what we're going to do is use the response from the server, and return it as json data so we can have access to that data, and then with the data that we just created we're going to update our state.
>
> **[1:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=104)** So right now our state is an empty array, so we don't have anything in it.
>
> **[1:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=108)** Now we'll fill it with this data that we get.
>
> **[1:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=112)** So set state with the contacts and the data.
>
> **[1:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=119)** So basically we're passing from our fetch to the server.
>
> **[2:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=123)** We're basically returning json data, and then we're passing that json data to our state here in the array, and now we'll have access to the data that's from the server.
>
> **[2:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=135)** So now let's just quickly update our component here to take advantage of the materialize styles.
>
> **[2:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=143)** So what we're going to do first is create a row, and inside of that row we'll insert the component AddContacts.
>
> **[2:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=152)** So we'll have the form at the top before we have the list of our items.
>
> **[2:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=158)** So instead of doing hello here, we're going to insert another row,
>
> **[2:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=169)** and in this row we'll have code that will render each single item that we have inside of our database.
>
> **[2:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=175)** So if we have three items that's coming from our database, every time there's going to be an item we're going to render a single contact component with the data inside of it.
>
> **[3:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=186)** So we're going to pass the state, and the array from the state which is called contact, and we're going to do a map method, which is basically how we iterate through all these items, and then use the single contact component to render each item that we have in our state.
>
> **[3:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=208)** So let's do ID as a single key, and by the way, if you're not familiar with React this is very important, so whenever we return multiple items through an array with a single component we need a key prop, and this key prop needs to have a unique ID.
>
> **[3:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=225)** So if we are leveraging the ideas from the actual database, then we're going to have something that we can use as a unique prop in here.
>
> **[3:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=235)** So we need to pass that in, and then we'll pass the item that we can leverage inside of this component once we create it.
>
> **[4:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=244)** So basically every item that will be in the database will be available as a single item here and iterated through the function that we have in here.
>
> **[4:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-list-of-contacts-component?u=76281980&t=254)** So that basically concludes what we need to do in this particular component, so let's go ahead and save this and keep working on this in the following videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (3), function (1)
> **Definitions:** is an  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Create and structure your components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=0)** - [Instructor] Now, we'll finalize our single contact file, and then get started on the form leveraging Materialize.
>
> **[0:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=7)** So the first thing we're going to do is create a new file inside of our components.
>
> **[0:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=11)** So let's go ahead, in that folder, create a new file, which we'll call Single Contact dot js.
>
> **[0:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=19)** And you want to make sure that you have the same syntax as what you've written here, Single Contact with a capital C.
>
> **[0:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=27)** So if that's the case, then we can continue.
>
> **[0:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=30)** Now, what we're going to do first is import React, and then in this one, we're going to do a stateless component.
>
> **[0:40](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=40)** Because we don't need to do all the methods that we typically do in a statefull component.
>
> **[0:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=46)** So, let's go ahead and create first the functional component.
>
> **[0:55](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=55)** Then we need to pass the item argument that we passed in our list here.
>
> **[1:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=61)** So remember we passed an item argument.
>
> **[1:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=65)** We need to use it here, like so.
>
> **[1:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=70)** Then we'll export it.
>
> **[1:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=77)** So now let's move on to Materialize's website and then go inside of the components in here and then click on cards.
>
> **[1:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=87)** What we'll do is, copy the code from the basic card, right here.
>
> **[1:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=91)** So, copy all this code and then paste it inside of that component here, like so.
>
> **[1:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=99)** So basically you don't need to change anything but just a few things here.
>
> **[1:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=105)** The first thing we're going to change is the card title.
>
> **[1:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=108)** So instead of writing card title, we're going to pass from the item what we get from the database.
>
> **[1:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=114)** So we're going to get, from the database, a first name.
>
> **[1:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=117)** If you remember, when we built the back end, we had a first name, last name, and an email that we can leverage for each person.
>
> **[2:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=125)** So we're going to do the first name and last name.
>
> **[2:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=131)** You want to make sure that your syntax is exactly the same as what we get from the database.
>
> **[2:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=136)** So if you want to check that out, we can always go back to postman and this is what we get.
>
> **[2:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=142)** So first name, last name, and email.
>
> **[2:24](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=144)** All right, so let's go back here. So this is good.
>
> **[2:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=147)** And then for the text here, we're not going to put anything.
>
> **[2:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=153)** And then we're going to go into card action and we're going to insert the email.
>
> **[2:40](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=160)** So we're going to do a p and then insert the item dot email.
>
> **[2:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=168)** That's pretty much what you need to do for the single cards.
>
> **[2:51](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=171)** Let's save that and then what we'll also do is, leverage code from Materialize's creative form and then finalize it in the next video.
>
> **[3:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=181)** So, first we're going to go back to Materialize.
>
> **[3:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=185)** Then, go inside of the forms section, here.
>
> **[3:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=189)** Then, go to the text input section.
>
> **[3:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=192)** We'll copy, basically, the code that represents this particular form here.
>
> **[3:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=198)** And then simply delete what we don't need.
>
> **[3:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=200)** So, let's go and copy all that code here, like so.
>
> **[3:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=206)** Then go here and create a new component.
>
> **[3:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=209)** Again, in the components folder.
>
> **[3:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=211)** So let's go and create a new file.
>
> **[3:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=213)** This one we're going to call it add contacts dot js.
>
> **[3:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=219)** Also, you want to make sure that you're following the same name that we've added to this file.
>
> **[3:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=225)** Then, for this one, we're going to do a statefull component.
>
> **[3:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=229)** So we need to import component from React.
>
> **[3:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=236)** Let's go ahead and export default class add contacts extends component.
>
> **[4:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=251)** Then, let's do the render method.
>
> **[4:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=258)** And then do the return.
>
> **[4:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=261)** Then, inside of that return, we're going to paste all of the code that we just copied.
>
> **[4:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=266)** Let's make sure that we are formatting this properly, like so, perfect.
>
> **[4:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=272)** So, what you need to do is, basically remove everything below line 18.
>
> **[4:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=277)** So you only need the last name and the first name.
>
> **[4:40](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=280)** So let's remove this, let's remove the password.
>
> **[4:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=283)** Let's keep the email and we're going to make some changes to this in the following video.
>
> **[4:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=289)** Then, what you need to do is also remove the last line here.
>
> **[4:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=294)** We're going to keep the row because we're going to insert a button in here, after.
>
> **[5:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=300)** Okay, so now we've got a template that we can work on.
>
> **[5:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/create-and-structure-your-components?u=76281980&t=304)** So, let's save this and then keep working on this in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (2), case, (1), continue (1), delete (1)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (2), in the next (2)
> **UI Navigation:** click on (1), go to (1)
> **Tools:** postman (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Connect the add contact form to server
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=0)** - [Instructor] Okay, so now let's continue working on our add contact file.
>
> **[0:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=4)** So the first thing we're going to do is keep working on our little component here and then go back up and create the function that we need to submit the form.
>
> **[0:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=13)** So the first thing that I'm going to do is add the actual onsubmit function here.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=17)** So let's go ahead and do that.
>
> **[0:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=23)** And we're going to create this function shortly and it's called submit contact and we need to bind it to this.
>
> **[0:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=34)** Okay.
>
> **[0:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=35)** Now the next thing we're going to do is kind of of reorganize this a little bit and on the same token, make sure we have all the reference inside of that form.
>
> **[0:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=43)** So we're going to change the id to ref.
>
> **[0:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=46)** You want to do this on every ids like so.
>
> **[0:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=53)** And then also for the for, it needs to be htmlfor, so let's change that as well.
>
> **[1:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=62)** We'll do it here as well.
>
> **[1:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=68)** Okay.
>
> **[1:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=69)** So now that we've got that and let me just organize this a little bit so it looks cleaner, perfect.
>
> **[1:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=77)** So now we go that, we need to add a button in this row here.
>
> **[1:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=81)** So, remember, I selectively left that space for that so let's go ahead and create the button and the actual styles I want to apply through them are from Materialize, so it's called waves effect, waves light and btn and this is going to be a type of submit so we want to make sure that this button will be the action that will submit our form.
>
> **[1:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=113)** And then do the action and then put the text for the button.
>
> **[2:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=120)** Okay, so the last thing we need to fix, as you can see right now, we have an issue here, is because the input on each line doesn't close out.
>
> **[2:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=128)** So let's make sure we close that element.
>
> **[2:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=132)** Same here and then, I believe that's the last one.
>
> **[2:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=136)** Yeah, the errors are gone.
>
> **[2:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=138)** Okay, so now we need to create the onsubmit function here, the submit contact function.
>
> **[2:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=143)** So let's go ahead and do that.
>
> **[2:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=146)** So basically, just below the export line, you're gong to create the submit function which we called submit contact and we're passing an event and you can shorten that to E if you want.
>
> **[2:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=159)** And then we want to prevent default like so and then we're going to create an object that we'll call contact.
>
> **[2:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=173)** So we can pass the values that we have in our form before we submit them to the back end.
>
> **[2:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=179)** So let's go ahead and do that.
>
> **[3:01](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=181)** So first name, and while we're here we need to also fix the name here so we need to make sure that it's first name with a capital N, same thing here for last name.
>
> **[3:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=192)** Emails are okay.
>
> **[3:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=193)** And then for what we passed here is from the value inside of our form, so this.refs.firstname and the value that's inside of our form.
>
> **[3:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=207)** And then we'll do that for every other value.
>
> **[3:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=209)** So let's copy that line and then paste it here.
>
> **[3:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=213)** So let's do lastname and you need to change it here as well.
>
> **[3:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=221)** And it's not node value, it's value.
>
> **[3:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=229)** And then paste it again, and let's make sure we change that there, too before we forget.
>
> **[3:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=236)** And then here it's email and also for the value here, email.
>
> **[4:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=244)** So now that we have our object, we can actually go ahead and post it.
>
> **[4:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=248)** So we're going to use Fetch again for that and we need to input the URL that we're fetching to which is local host 8080/api/contacts and then what we're going to do is pass a few options.
>
> **[4:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=270)** So the first option is the method that we're using to fetch the API and it's post so we're posting something to our API.
>
> **[4:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=279)** Then we want to make sure we're sending headers pretty much like when we did our calls through Postman.
>
> **[4:47](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=287)** So we want to make sure we set up the content type like we've done with Postman to be, and if you remember, it was application/json.
>
> **[4:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=298)** And then what we're going to do outside of our editors, so make sure you're outside of that particular object here, we're going to do body so basically what's in the body, and then we're going to stringify basically the object that we have here so it's ready to be submitted like so and we're passing contact to it.
>
> **[5:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=323)** Then we're going to do a then so we can get a response from the server and actually and know that it has worked.
>
> **[5:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=333)** Response.json and finally refresh the window.
>
> **[5:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=344)** Okay.
>
> **[5:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=345)** So that completes the code for the add contacts.
>
> **[5:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/connect-the-add-contact-form-to-server?u=76281980&t=349)** So let's move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (6), this. (2), pass (2), continue (1)
> **CLI Commands:** make (8), node (1)
> **Env Vars:** api (2), url (1)
> **Tools:** postman (2)
> **File Paths:** response.json (1)
> **API Endpoints:** /api/contacts (1)
> **Cross-References:** next video (1)
> **Prerequisites:** set up (1)

#### Add server controller for CORS
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=0)** - [Instructor] OK, so now that we've finished this code, let's go ahead and test our application.
>
> **[0:04](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=4)** So the first thing we're going to do is get our server started, so let's go up and bring up our terminal, and let's make sure that we are in the client, and then let's go and do npm start.
>
> **[0:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=22)** And right now, a portion of our application is showing but we're not seeing any data.
>
> **[0:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=27)** So if you look into the browser console, you'll see an error message that mentions CORS right here.
>
> **[0:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=34)** Basically what that means is that our front-end isn't on the same origin as the backend.
>
> **[0:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=39)** In this case, port 3000 and 8080 and as a protection the server won't allow the post, put, delete, and get methods if it comes from another origin, or in this case a different URL.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=52)** If you plan on having your front-end and backend on the same address, you won't have this issue, but if they will be different, we need to address it.
>
> **[1:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=60)** For this to work, we'll add a controller with some syntax to allow CORS for our port 3000.
>
> **[1:07](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=67)** So let's get to it, and while we're on it, we'll also fix this little error here.
>
> **[1:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=73)** Because we copied code directly from materialized within do class name, and we did class instead, so let's quickly fix this, so let's go back to our code, and the first thing we're going to do is change all the class to class names so what we'll do is use a find and replace.
>
> **[1:31](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=91)** So what I did is basically Command + F you can do the same with Windows on Control + F and then we'll find all the class and then make sure that you fix this one after, and then we'll replace it with class name, and then just replace all.
>
> **[1:50](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=110)** And then the only thing you need to fix is make sure that the class for your class is called a class, if that makes any sense.
>
> **[1:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=119)** And then if you check down here, all class have been changed to class name, so we should be good to go here.
>
> **[2:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=125)** And then the same thing where we copied code, so let's do a find and replace again.
>
> **[2:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=132)** Let's do that, and we don't need to fix because this is a functional component, so let's go here and I believe this is OK here because we didn't do copy and paste on this one, so we should be good for that, and there you go.
>
> **[2:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=147)** So we're back to the CORS issue and this is the one that we're going to start fixing now.
>
> **[2:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=152)** So what you need to do is close out these files and now the first thing we're going to do is go inside of the contact repository first.
>
> **[2:42](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=162)** So let's close out of the client and let's go back into our server, and go into the contact repository, and here what we're going to do is add two lines.
>
> **[2:53](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=173)** So the first one will import org data spring framework .data .rest .store and the one you're looking for is CORE annotation.repository rest resource and it's not store, it's core.
>
> **[3:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=209)** Perfect, so now that you have this, you can basically implement it by adding it at the top of your class.
>
> **[3:35](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=215)** What you need to do is repository resource.
>
> **[3:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=219)** So that's the first thing we need to do.
>
> **[3:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=221)** Then what we need to do is create a brand new file, and in this file we'll have our controllers which basically will allow us to return the data to our client and allow CORS to have it.
>
> **[3:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=232)** So inside of our model folder here, what we're going to do is create a brand new file that we're going to call ContactsController.java and then we're going to copy a few lines so let's go ahead and copy the package.
>
> **[4:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=252)** And then what I'm going to do is create the class first and then we'll do all the imports in this video and then continue working on this file in the following video, so let's go ahead and start with creating the class, like so.
>
> **[4:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=268)** And then at the top of it, we're going to add rest controller and then we're going to add request mapping and then we're going to pass the API to it, so basically we're passing the mapping of our API, and then we're going to do cross origin and then pass origin the local host that's trying to access this server.
>
> **[4:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=299)** So basically what we just done is, do the actual API mapping and then pass the actual address that's trying to get resources from this server which is our local host 3000.
>
> **[5:14](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/add-server-controller-for-cors?u=76281980&t=314)** Alright, so now that we've started our class and imported a few things and mapped out the actual address that needs to access the server, let's move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), pass (3), this, (2), class, (2), case, (1)
> **Env Vars:** cors (4), api (3), url (1), core (1)
> **CLI Commands:** make (3), find (3), npm (1)
> **Ports:** port 3000 (2)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is called (1), is a  (1)
> **File Paths:** contactscontroller.java (1)
> **Tools:** terminal (1)

#### Finalize server controller for CORS
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=0)** - [Instructor] Okay, so let's finish our ContactsController, and we'll continue by writing our code for our controllers and make sure that we have everything we need to log course to work with this backup.
>
> **[0:16](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=16)** And the first thing we need to do is get our contactRepository, and then we'll go ahead and create our public class, ContactController, which will take the contactRepository.
>
> **[0:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=36)** And then make sure that we can use it inside here.
>
> **[0:39](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=39)** So, let's do this, contactRepository.
>
> **[0:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=43)** Perfect. So now what we need to do is start doing our mapping for our contacts with our GetMapping, first.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=52)** And as I add the GetMapping, we have the proper imports.
>
> **[0:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=56)** And for this one we're going to specify that it's for the URL or the endpoint contacts, and do a collection of Contact,
>
> **[1:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=72)** and then create the function contacts.
>
> **[1:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=75)** And we may have to import a few things, such as collection, but we'll do that after.
>
> **[1:20](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=80)** And then we'll return a collection of Contact.
>
> **[1:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=88)** So, basically we're returning all the contacts in the database, from the contactRepository, and basically use the function findall to find them all.
>
> **[1:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=101)** And that's basically our GetMapping function done here.
>
> **[1:44](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=104)** So, let's go ahead and fix that right away, before we move on.
>
> **[1:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=108)** And I'm just going to simply import java.util, like so.
>
> **[1:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=114)** And we got our collection.
>
> **[1:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=116)** And then let's do the same for our PostMapping.
>
> **[2:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=120)** So, let's do PostMapping for the same endpoint, so contacts.
>
> **[2:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=128)** So, we're going to be posting to that same URL, and then ResponseEntity.
>
> **[2:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=137)** So, basically this controller, or this function, will be to post new contact.
>
> **[2:24](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=144)** So, we'll create this one, createContact.
>
> **[2:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=148)** And for this one, we'll take some arguments.
>
> **[2:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=152)** So, valid, we'll also take RequestBody,
>
> **[2:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=161)** and pass Contact.
>
> **[2:45](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=165)** And if we have any errors, then we can throw an error URISyntaxException.
>
> **[3:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=182)** So, basically, we're saving all new contact to our contactRepository, basically our database.
>
> **[3:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=189)** And then we want to return the result.
>
> **[3:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=191)** So, I'll make sure that we get some Response to know that it has worked, ok .body and then pass the result.
>
> **[3:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=206)** Okay, so let's make sure we have this guy imported.
>
> **[3:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=209)** So, let's do a quick fix.
>
> **[3:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=210)** Import valid, and we're good to go here.
>
> **[3:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=214)** And everything seems to be fine and dandy, except this here, so let's fix that.
>
> **[3:40](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=220)** And we're all good.
>
> **[3:42](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=222)** All right, so we need to save, and we need to make sure we restart the server here.
>
> **[3:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=226)** So, let's go ahead and do that.
>
> **[3:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=229)** So, you're going to see this thing turn from blue to orange once this is turned on, if you want to check if it's working, you can go into the Debug Console and you can see that the server is running, all right.
>
> **[4:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=242)** And then let's go back to our R application and then do a refresh.
>
> **[4:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=250)** And, as you can see, we have a point of data, it is working.
>
> **[4:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=253)** So, now we have the first point of data.
>
> **[4:15](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=255)** So, if you want to check to make sure, you can go in Postman, and do a get, like we've done before, and you can see that we have one item.
>
> **[4:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=265)** So, as you can see now, it's a little bit different from what we used to have, but at least we get the data with an id, firstName, lastName and email.
>
> **[4:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=274)** So, now let's go back to our application, and we can minimize this to take a look if there's any errors.
>
> **[4:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=281)** And then let's go and add a new name.
>
> **[4:43](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=283)** So Manny Henri, me2@[me.com](https://me.com), and submit.
>
> **[4:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=292)** All right, so we got a small error here.
>
> **[4:54](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=294)** So let's go and check the Add Contact form, because this is coming from AddContacts.
>
> **[4:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=299)** So, let's go and quickly look into our code.
>
> **[5:02](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=302)** And let's go to the AddContacts file.
>
> **[5:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=306)** Let's just close this.
>
> **[5:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=308)** And this seems to be okay.
>
> **[5:10](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=310)** So, I don't have an issue with that.
>
> **[5:13](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=313)** So, let's scroll down, see what we're doing here.
>
> **[5:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=317)** And, as I can see, what we're calling is not even the same as what we have here.
>
> **[5:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=322)** So, let's change that.
>
> **[5:23](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=323)** I definitely changed one earlier, but I didn't change this one.
>
> **[5:27](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=327)** So, let's go in and change this.
>
> **[5:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=330)** And let's do the same for the other input.
>
> **[5:33](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=333)** So, basically I changed the HTML for, but not the actual reference to it.
>
> **[5:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=337)** So, that's why we have this issue.
>
> **[5:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=338)** And email doesn't have to change, so we're good.
>
> **[5:41](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=341)** Okay, so let's save that, and let's go back to our application which should have restarted.
>
> **[5:48](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=348)** And let's go ahead and try to add a new item, 2@[me.com](https://me.com).
>
> **[5:57](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=357)** And boom, and this has disappeared.
>
> **[6:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=360)** And if we scroll down, we're going to have the second one.
>
> **[6:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=363)** So, that basically has resolved the issue.
>
> **[6:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=366)** So, right now, whenever you add new items to this form, you're going to see new people appear here, and then also the form will clear up.
>
> **[6:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=377)** And if you want to check also from Postman, and you do a Get, you're going to see the two point of data.
>
> **[6:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/finalize-server-controller-for-cors?u=76281980&t=385)** So, this concludes building the full stack API, plus the front-end with React and Spring.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), function (4), pass (2), this. (2), continue (1)
> **Code Identifiers:** contactrepository (5), createcontact (1), firstname (1), lastname (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** url (2), html (1), api (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2), go to (1)
> **URLs:** [me.com](https://me.com) (2)
> **Tools:** postman (2)


### 6. Conclusion

#### Context and state
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=0)** - [Instructor] Let's dive into how to efficiently manage state and utilize a contacts API in your React applications, especially when working with Spring backend.
>
> **[0:09](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=9)** This will be a quick guide, so let's get started.
>
> **[0:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=12)** In React, state is crucial for creating dynamic and responsive applications.
>
> **[0:17](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=17)** It's what allows your components to remember information, react to user inputs, and more.
>
> **[0:22](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=22)** Whether it's a form input or loading data from a server, state makes it manageable.
>
> **[0:28](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=28)** But as your application grows, passing state down through multiple components becomes cumbersome.
>
> **[0:34](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=34)** That's where React's contacts API comes in.
>
> **[0:36](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=36)** It provides a way to share values like user data, preferences or themes directly with components, no matter where they are in the component three.
>
> **[0:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=46)** So how would you integrate this with a Spring backend?
>
> **[0:49](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=49)** It's actually simple, because you're doing it from the React application, the backend doesn't have any importance in this implementation.
>
> **[0:58](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=58)** So the way you would do it is first you would create your contacts here.
>
> **[1:03](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=63)** So in this case, we have a contact that we've been using through the application, so we would update it to the contacts here.
>
> **[1:11](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=71)** So you create your contact contacts with create contacts here, and then you would export it as such.
>
> **[1:19](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=79)** Then what you need to do is get into basically which component first that needs to traverse your state to.
>
> **[1:30](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=90)** So what I mean by that is, let's say you want to have this contact state usable across all of your components inside of the app.js.
>
> **[1:42](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=102)** Then you would actually create your contact provider here.
>
> **[1:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=106)** If you needed somewhere down in your application, not necessarily at the top of your application, then you actually pass the contact provider where it needs to be.
>
> **[1:56](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=116)** So you can actually decide where that goes.
>
> **[1:59](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=119)** And then every component inside of where you initiated the contact provider will have access to that data.
>
> **[2:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=128)** So the way it works here, you have your state that you've defined here, and then what you do, in this case, we're actually fetching from our Spring backend here.
>
> **[2:18](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=138)** And then the response, we're actually creating the data.
>
> **[2:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=141)** We're passing that data to the contacts, right?
>
> **[2:25](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=145)** So we're setting the state with set contacts here.
>
> **[2:29](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=149)** So we have access to that state here.
>
> **[2:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=152)** But now what we need to do is pass it down with the contacts through the contact provider.
>
> **[2:38](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=158)** So once we set that up here, every components inside of app.js will have access to it.
>
> **[2:46](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=166)** So now how can we access it inside of, for example, the contacts component.
>
> **[2:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=172)** So we go here in the contacts component, and all we have to do is basically use contacts, contact context, and then we have access to it here, and then we can map it, do whatever we want with it.
>
> **[3:05](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=185)** So this is how you would use it.
>
> **[3:08](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/context-and-state?u=76281980&t=188)** Mastering state management and the contacts API in React can enhance your full stack applications, providing a more organized, efficient way to handle data flow between your React front end and your Spring backend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), pass (2)
> **Env Vars:** api (3)
> **File Paths:** app.js (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=0)** - [Emmanuel] This course was about learning how to build a Full Stack project, leveraging React and Spring.
>
> **[0:06](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=6)** You should be able to apply these techniques you've learned in the course to build your own projects with these two frameworks.
>
> **[0:12](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=12)** If you got lost at any point due to your lack of experience with Java or JavaScript, I suggest you take a few introductory courses on these subjects.
>
> **[0:21](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=21)** And you can find many in our library to enhance your basic knowledge.
>
> **[0:26](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=26)** Also, if you'd like to push your knowledge around React and Spring, there are several courses you can take on the subject.
>
> **[0:32](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=32)** In fact, I have many courses on React so feel free to explore them.
>
> **[0:37](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=37)** And finally, if you'd like to explore other subjects related to building Full Stack applications or would like to build a JavaScript back-end, look for other courses on Node.js, Express, Angular, or any other front-end frameworks we cover in our library.
>
> **[0:52](https://www.linkedin.com/learning/building-full-stack-apps-with-react-and-spring/next-steps?u=76281980&t=52)** Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), node (1)
> **File Paths:** node.js (1)
> **Code Keywords:** finally, (1)
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