---
type: course
slug: creating-a-book-search-engine-from-scratch-using-java-and-github-copilot
url: "https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot"
duration_minutes: 131
duration: 2h 11m
level: Intermediate
updated: 12/11/2024
learners: 3365
skills:
  - GitHub
  - Artificial Intelligence (AI)
  - Spring Boot
  - GitHub Copilot
  - Java
exercise_files: true
github: "https://github.com/hhimanshu/book-search"
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/github
  - skill/artificial-intelligence-ai
  - skill/spring-boot
  - skill/github-copilot
  - skill/java
status: not-started
created: 2026-04-17
---

# Creating a Book Search Engine from Scratch Using Java and GitHub Copilot

> In this intermediate-level course, you will learn how to build a comprehensive book search project using Java, Maven, Spring Boot, PostgreSQL, and Docker. Download and prepare book data from a public archive, then design and implement a PostgreSQL database schema optimized for full-text search. Containerize the database with Docker to streamline the development process. Learn how to create RESTful

> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot) | 2h 11m | Intermediate | 3K learners

## Instructor

- [[Harit Himanshu]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/hhimanshu/book-search)

## Skills Covered

- GitHub
- Artificial Intelligence (AI)
- Spring Boot
- GitHub Copilot
- Java

## Table of Contents

### Introduction

#### Modern Java development
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=0)** - [Harit] Want to build a production grade book search engine?
>
> **[0:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=2)** In this course, you'll create a powerful search application using Java, Spring Boot, PostgreSQL and Docker, the exact tech stack that modern companies use.
>
> **[0:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=10)** This project will make your portfolio stand out.
>
> **[0:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=13)** You will learn to implement full tech search, create restful APIs and containerize your application.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=17)** We will use modern development tools like VS Code and GitHub Copilot to build efficiently following industry best practices every step of the way.
>
> **[0:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=25)** I'm Harit Humanshu, co-founder of Bonsai Labs where we develop AI powered software solutions for startups.
>
> **[0:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=30)** I'll guide you through building a project that you can proudly showcase to your employers.
>
> **[0:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/modern-java-development?u=76281980&t=34)** Let's create a production ready search engine together.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), make (1)
> **Tools:** vs code (1), github (1)
> **Code Keywords:** let (1)
> **Speakers:** - [harit] (1)

#### Course overview and objectives
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=0)** - [Instructor] Welcome to the course on developing a book search engine.
>
> **[0:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=3)** Now, in this course, we are going to create a book search engine with the existing data.
>
> **[0:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=8)** But before we dive into details and start doing things, it makes sense to zoom out a little bit and see how this course will make progress.
>
> **[0:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=16)** So in order for us to start the project, the first thing we would need is a database.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=21)** So every machine works differently, so in order to set up the database correctly and in a repeatable fashion, we are going to set up this database inside a Docker container.
>
> **[0:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=33)** And once we have our Docker container up and running with this database, the next thing that we need to do is to ingest this data with books and authors information.
>
> **[0:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=44)** Now, for this course, we have already created the CSV files that are sitting in the remote.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=52)** And what we need to do in this course is to create the ingestion script that will take this data from CSV and insert in the database.
>
> **[1:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=62)** Now, with that, we will have our setup ready, which means we have a Docker container that is hosting a database, and that database contains the set of CSV files that contains information about books and their authors.
>
> **[1:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=76)** Now, once we have that, the next thing that we are going to do is to, we need to write the business logic.
>
> **[1:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=82)** Now, what's business logic?
>
> **[1:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=83)** The business logic are the set of functions that interact with the database in order to find the information from this database.
>
> **[1:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=92)** Now, as you're building the book search engine, we are going to dive deeper into how the full text search in the case of database would work.
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=100)** But once we have those nitty-gritty details hashed out, we are going to write set of functions that will be utilized to fetch information from this database.
>
> **[1:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=109)** Now, this business logic still is a way to write code, but how would your consumers, or how would the callers will execute this business logic?
>
> **[1:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=117)** And that's where the final piece will come in, where we are going to create the set of APIs, and these APIs will be utilized by consumers, which will call the business logic.
>
> **[2:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=128)** And the business logic will in turn go to the database, fetch this information and send it back to the API callers.
>
> **[2:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=135)** Now, in summary, this is what we are going to create.
>
> **[2:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=138)** There are lot of things that we need to do right from the scratch.
>
> **[2:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=142)** So now that you have the zoomed out view, now let's go back to the next step and see what are some of the things you should know before starting this course and what technologies are we going to make this happen?
>
> **[2:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/course-overview-and-objectives?u=76281980&t=153)** So see you next.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), make (2), find (1)
> **Env Vars:** csv (3), api (1)
> **Prerequisites:** set up (2), setup (1)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Prerequisites and learning goals
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=0)** - [Instructor] In order to continue with this course, let's find out what all technologies we are going to use and what are some of the things that you must know before taking this course.
>
> **[0:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=10)** Now, we are going to write the entire code in Java programming language, so we are going to use the latest Java.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=17)** We may or may not be using or utilizing the latest Java features, but familiarity with the language is important.
>
> **[0:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=24)** So this is not an introductory course on Java.
>
> **[0:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=27)** So knowing Java is going to definitely help you in making progress with this course.
>
> **[0:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=32)** Now, the second thing is that we are going to leverage Spring Boot for majority of our parts when writing the APIs or when interacting with the database.
>
> **[0:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=40)** But we assume that you have interacted with Spring Boot already, and you are going to utilize some of your acquired learning in creating the book search engine.
>
> **[0:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=51)** Now, if Spring Boot is new for you, there are a lot of fantastic courses already available in the library that you may want to search and pursue before you continue with this course.
>
> **[1:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=61)** Now, familiarity with Docker is extremely important.
>
> **[1:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=63)** However, it's not a must have because as we make progress, we are going to provide you with a set of commands that you are going to run after installing the Docker.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=73)** So even if you don't know a lot about Docker, don't worry about it because this course is not about Docker.
>
> **[1:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=79)** We are only going to utilize a part of Docker in order to make progress in this course.
>
> **[1:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=84)** Now, this is also not an introductory course on databases.
>
> **[1:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=88)** So we'll assume that you know how databases work, which means how data gets ingested, writing the SQL queries.
>
> **[1:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=94)** This is all going to be important.
>
> **[1:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=96)** We are going to leverage PostgreSQL, but if you have used MySQL in the past, that is fantastic because there are not a lot of differences between the two when writing the SQL queries.
>
> **[1:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=106)** So you will do just fine.
>
> **[1:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=108)** And, finally, when we create the RESTful APIs, we will assume that you know about the concept of RESTful APIs, what resources are, what instances are, what are HTTP methods, for example.
>
> **[1:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=119)** But if you already know about these concepts, you will make great progress because we are going to leverage the Spring Boot in order to create the GET APIs.
>
> **[2:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=128)** We are not going to create new data, we are just going to query the data.
>
> **[2:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=132)** So if you know what restful APIs are in general, you will do just fine.
>
> **[2:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=135)** Now, one highlight for this course is we are going to leverage GitHub Copilot for this course.
>
> **[2:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=141)** Now, what does this mean?
>
> **[2:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=143)** This means that as we write code, we are going to take the assistance from GitHub Copilot, which will help us assist and write code faster.
>
> **[2:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=151)** It also means that at parts I will show you the ways where you can get operationally efficient by writing more code upfront or do a pair programming with GitHub Copilot by writing more tests, and this will speed up your entire process.
>
> **[2:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=164)** The reason of introducing GitHub Copilot is that more and more, GitHub Copilot has been utilized by organizations of all sizes to speed up the developer productivity.
>
> **[2:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=175)** Now, the version of GitHub Copilot that I'm going to use is the latest one.
>
> **[2:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=179)** So I'm going to work with the GPT-4o model, and I also want to ensure that I communicate this upfront that GitHub Copilot is a paid subscription.
>
> **[3:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=189)** So you would need to have a paid license before you can start writing code with GitHub Copilot.
>
> **[3:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=195)** But if you don't have one and if you really want to see what all things you can do with GitHub Copilot, this is a fantastic course because I'm going to show you all the different ways where GitHub Copilot can help us write the code, test the code, and if we get stuck, how we can interact with the GitHub Copilot to resolve the issues that we may not be even aware of.
>
> **[3:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=215)** Great, so now that we have the logistics part and prerequisites hashed out, let's go into the learning objectives on what are you going to get out of this course.
>
> **[3:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=224)** So the first thing that you will learn is how to design and implement a RESTful API in the context of writing a book search engine.
>
> **[3:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=232)** The other thing that you will learn is how to write the business logic that handles the interaction all the way by taking the inputs from the API and connecting to the database and doing the round trip.
>
> **[4:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=243)** The third thing that you would learn is how to configure a Docker container and host a database locally, which takes away a lot of infrastructure issues away because some of you may be working on Windows and some other people might be working on Linux or Mac.
>
> **[4:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=257)** Docker is a common platform, and this will allow you to have repeatable builds and repeatable infrastructure setups on your local machine.
>
> **[4:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=265)** I'm also going to touch a lot about the full text search capabilities within the Postgres.
>
> **[4:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=270)** So Postgres supports full-text search and a lot of use cases might be handled upfront and you may not need to have a paid subscription for a lot of search services like Elastic or Azure.
>
> **[4:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=282)** So I'm going to dive deeper into this to help you explore the full-text search, and this will help you assess whether or not this is a good use case in your current role and at the current work.
>
> **[4:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=293)** And finally, we are going to look at how to stitch all these components together that we saw in the diagram earlier, starting from scratch and how to have a database and all the way of creating an API that can interact with the database and return research results.
>
> **[5:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=309)** So this is going to be a fantastic journey, and I hope to see you in the next step where we will put on a doing hat and start making progress on the course that we have to make.
>
> **[5:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/prerequisites-and-learning-goals?u=76281980&t=318)** All right, I'll see you next.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (7), make (4), find (1), mysql (1)
> **Tools:** github (11)
> **Env Vars:** api (3), sql (2), http (1), gpt (1)
> **Code Keywords:** continue (2), let (2), finally, (2)
> **Definitions:** is a  (4), means that (2)
> **API Endpoints:** get  (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)


### 1. Setting Up Java, Maven, and Spring Boot

#### Setting up Java
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=1)** In this module, we are going to install all the necessary software that will help us make progress during this course.
>
> **[0:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=7)** The first thing that we will do is install Java.
>
> **[0:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=10)** In order to install and manage multiple Java version, the best thing that we can do is install SDKMAN.
>
> **[0:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=16)** If you visit [sdkman.io](https://sdkman.io), you will see a command here.
>
> **[0:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=20)** This is a curl command, which means, if you are working either on Linux or Mac and possibly on Windows as well, you should be able to take this command, go to the Terminal, hit Enter after pasting it, and install SDKMAN.
>
> **[0:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=33)** Since I'm running on Mac, I will go to the Terminal, paste the command, and hit Enter.
>
> **[0:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=39)** And in few moments, SDKMAN will be installed on my machine.
>
> **[0:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=43)** Now, in order to make sure that it's really installed, I will run sdk version.
>
> **[0:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=49)** And we will see that SDKMAN is indeed installed.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=52)** Now, in order to install Java, we are going to first see what all versions of Java are available.
>
> **[0:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=58)** So, for that, I will run sdk list java.
>
> **[1:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=63)** And you will see that there is a huge list that comes up here.
>
> **[1:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=67)** Now, we are going to focus on the OpenJDK version, so I'm also going to run this command again, and then grep for open.
>
> **[1:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=77)** So, as we can see, we have multiple Java versions available here.
>
> **[1:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=81)** And the first thing that we will do is install the latest Java version.
>
> **[1:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=85)** So I'm going to copy this version over here, run sdk install java, and paste this version.
>
> **[1:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=95)** As we run... In few moments, Java version 24 with patch version 18 will be installed on our machine.
>
> **[1:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=104)** So it's doing its thing, and within few moments, we should have it ready.
>
> **[1:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=109)** So the download is now complete, and one thing that it has done, it has set this Java version as a default Java version.
>
> **[1:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=117)** So if I run java -version, we will see the same version 24 with 18 as a minor or a patch version available to us.
>
> **[2:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=132)** Now if you want to install multiple versions, you can continue with the same exercise, so you can say sdk install java, and paste this version.
>
> **[2:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=142)** And then the same exercise will happen once over again where the JDK version 24 but with patch version 17 will be downloaded and will be further installed on our machine.
>
> **[2:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=155)** So the Java version 24 with patch version 17 has been installed, and now it is asking if we want to make it as a default one, and we will say yes for now.
>
> **[2:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=166)** And if we run the java -version command again, we can see, now, it is using the patch version 17.
>
> **[2:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=175)** So now we have two version of Java installed, and if you want to switch between one versus the other, all you need to do is sdk use java, and then use the Java version that you want to use as the command.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=192)** Now we are using the patch version 18, so if we say java -version, we are back on version 18.
>
> **[3:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=201)** What we've done so far, we have used SDKMAN, we have installed SDKMAN on our machine, and using SDKMAN, we have installed two Java versions.
>
> **[3:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=210)** We have ensured that the Java is working on our machine, and we also saw how we can switch between multiple Java version using SDK.
>
> **[3:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=218)** Fantastic.
>
> **[3:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-java?u=76281980&t=219)** Now that this part is done, we will move on to the next step where we are going to install Maven to start a new project.

> [!info]- Semantic Content
>
> **Prerequisites:** install (11)
> **Versions:** version 24 (4), version 18 (3), version 17 (3)
> **Env Vars:** sdkman (7), jdk (1), sdk (1)
> **CLI Commands:** make (3), curl (1), grep (1)
> **Code Keywords:** switch (2), module (1), continue (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)

#### Installing Maven
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=0)** - [Instructor] In order to manage our Java project for compilation, building, and testing, we are going to leverage Apache Maven, which is the build tool of our choice.
>
> **[0:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=11)** Now, if you go to maven.[apache.org](https://apache.org), you will see a link that says Install.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=17)** If you go to the Install, it has information on how to do that.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=21)** This is important if you are on Linux or Windows.
>
> **[0:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=26)** But for Mac, I'm going to show you a faster way to install Maven on your machine.
>
> **[0:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=31)** Now, if you are not using Homebrew already on Mac, Homebrew is a package manager for Mac operating system.
>
> **[0:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=38)** If you don't have it available on your machine, all you need to do is to copy this command, go to the terminal, paste, and hit Enter.
>
> **[0:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=46)** And in few moments, you will have Homebrew on your machine installed.
>
> **[0:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=50)** To ensure that you have Homebrew running, you type brew -v, and you see a Homebrew version.
>
> **[0:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=57)** Now, in order to install Maven, all you need to do is say brew install maven.
>
> **[1:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=64)** And within few moments, Maven will be installed on your machine.
>
> **[1:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=68)** Now, since Maven is already installed on my machine, I got Maven 3.9.9 is already installed, but you will see a different message.
>
> **[1:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=76)** But at the end of the command, you will have Maven up and running.
>
> **[1:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=79)** To ensure that Maven is up and running, type mvn -v, and hit Enter.
>
> **[1:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=88)** And then it'll show you that it is using Maven home, which is available here, and what Java version it is leveraging.
>
> **[1:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=97)** So, which means, at this point in time, we have Java 24 that is available on our machine, we have installed Maven successfully, and when we checked the version for Maven, it told me that it is 3.9.9, and it was able to successfully locate Java version 24.
>
> **[1:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=116)** So we have two things up and running already.
>
> **[1:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/installing-maven?u=76281980&t=119)** Let's move on to the third step, where we are going to create a new project.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2), brew (2), mvn (1)
> **Prerequisites:** install (5)
> **Versions:** 3.9.9 (2), java 24 (1), version 24 (1)
> **UI Navigation:** go to (3)
> **Code Keywords:** let (1)
> **URLs:** [apache.org](https://apache.org) (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### Setting up a Maven project
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=0)** - [Instructor] All right, now that we have Maven and Java installed, let's create our project.
>
> **[0:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=5)** I'm going to paste the command first and then I'm going to explain what it does.
>
> **[0:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=9)** So I'm using the Maven command and the next part says archetype generate, which means we want to generate a new project based on an archetype, which is a template.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=21)** And the template that we are providing is based on the Maven archetype quick start.
>
> **[0:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=27)** So what this does is when we run this command, it sets up a basic project structure with a single Java file so that it's easier for us to get up and started running and focus on the code that we need to write.
>
> **[0:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=41)** Now we need two more things, which is the group ID, which is generally the reverse domain name, in this case, I've used the initials from my name with com.h2.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=52)** And this is the ID for the project, which is book-search, which is the project that we are working on.
>
> **[0:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=58)** And we've also made the interactive mode false, which means we don't want this in an interactive mode.
>
> **[1:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=63)** We'd rather have the project up and running so that by the end of the command, we have everything set up and it doesn't ask us a bunch of questions.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=73)** All right, now that we have it up and running, let me just run this command.
>
> **[1:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=77)** And in few moments, you will see a build success, which means your project is now ready.
>
> **[1:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=84)** So I can go to book-search and here the command that I'm going to run to make sure everything works fine is mvn clean install.
>
> **[1:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=96)** Now, mvn clean install is two parts: clean and install.
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=100)** Clean does the removal of all the artifacts if they have been created to make sure everything starts from scratch.
>
> **[1:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=107)** And install is a lifecycle wherein Maven first compiles a code base and it builds it, and then runs the test, and finally creates the artifact, which is a JAR file in case of Java projects.
>
> **[1:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=119)** I'll clear the screen and I hit Enter.
>
> **[2:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=122)** And as we see, it ran the entire lifecycle.
>
> **[2:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=126)** It ran one test and nothing failed, which means one test ran and everything was successful.
>
> **[2:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=132)** And it also created the JAR file I was talking about on this location.
>
> **[2:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=136)** So if I do ls of target directory, this is the JAR file that it has created.
>
> **[2:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=143)** Now we can also run this project, but before that, let me show you what code it is going to execute.
>
> **[2:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=148)** So if I do less src/main/java and then com/h2, which is the group ID, and within that there is a file called App.java, which is created by that archetype or the template by default.
>
> **[2:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=164)** So if we are going to run this app class, it should print Hello World on the console.
>
> **[2:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=169)** So let's run that and we'll do mvn exec and we are going to provide the argument on which class we want to run or which is the main class that should execute if we execute the JAR file.
>
> **[3:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=183)** And as I hit Enter, it printed Hello World on the console.
>
> **[3:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=187)** So to summarize what we did, we created a fresh project from scratch using the Maven archetype.
>
> **[3:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=195)** We ran the clean install which made sure that there were no compilation issues that has ran successfully.
>
> **[3:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=201)** Everything worked fine.
>
> **[3:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=202)** And then finally, we ran the project main file to ensure that our main class is executed and printing Hello World on the console.
>
> **[3:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=210)** All right, now that we have the project set up running, it makes sense to switch gears and move from terminal to an IDE where we are going to write code.
>
> **[3:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-a-maven-project?u=76281980&t=219)** So I'll see you next where we are going to review some code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), default. (1), class, (1), finally, (1)
> **Prerequisites:** install (5), set up (2)
> **CLI Commands:** mvn (3), make (2), ls (1)
> **Env Vars:** jar (4), ide (1)
> **Definitions:** is a  (4)
> **Exercise Files:** template (3)
> **File Paths:** app.java (1)
> **Tools:** terminal (1)

#### Setting up Visual Studio Code
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=0)** - [Instructor] Alright, so in this project, I'm going to use Visual Studio Code, which is an IDE of my choice, and it is a very popular IDE available for free for virtually every developer on the planet.
>
> **[0:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=13)** Now, we are going to also use GitHub Copilot, which as I mentioned in my, one of the past videos that this is a paid subscription.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=21)** So if you have it, that's fantastic.
>
> **[0:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=23)** If not, I will show you how you can leverage GitHub Copilot once you have subscription and how it can make you more productive in your day-to-day work.
>
> **[0:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=32)** Now, if you don't have VS Code already installed, you may want to click on this button, I'm on mac.
>
> **[0:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=37)** It's saying macOSX, but it already has the installers for other operating systems too.
>
> **[0:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=43)** Now, since I have already installed VS Code, I'm going to switch gears and go to the VS Code that I have opened already.
>
> **[0:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=51)** Now, this is the file explorer.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=52)** I have not opened anything yet, so I will go back here.
>
> **[0:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=56)** And the important thing that I want to mention here is the concept of extensions.
>
> **[1:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=61)** And the two extensions that I want you to install if you are using the GitHub Copilot, or you might already have them installed is, GitHub Copilot, I've already installed.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=73)** So it's saying uninstall, but if you don't have it installed, there will be an install button here.
>
> **[1:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=78)** So with this, it'll help you to write code in the IDE when you are opening up a file.
>
> **[1:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=84)** And the other one is a GitHub Copilot chat.
>
> **[1:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=87)** This is a chat window separate from your IDE file where you can chat with GitHub Copilot and ask certain questions and it can help you write code and explain things in much better way.
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=100)** So now, since I have both of these extension installed, I will switch gears and show you how this looks like in the chat.
>
> **[1:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=107)** So this is GitHub Copilot chat and you will see it here as part of the icon on the extension.
>
> **[1:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=113)** And the first thing it asks you to do is to sign in.
>
> **[1:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=117)** So I'm going to allow, and this takes me to a page wherein I need to verify my session.
>
> **[2:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=126)** It comes to my [github.com](https://github.com) and I need to continue to allow the extension to use my credentials.
>
> **[2:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=133)** And I'm back on GitHub Copilot chat and I see Ask Copilot, which means I'm successfully authenticated.
>
> **[2:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=141)** And now, I can use GitHub Copilot chat in my IDE.
>
> **[2:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=144)** Now, you may see a very different window, but don't worry about it.
>
> **[2:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=148)** GitHub Copilot is slowly releasing newer versions of GitHub Copilot chat.
>
> **[2:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=152)** So the experience on how to interact with Copilot chat is upgrading almost every single day.
>
> **[2:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=158)** So we are looking at new features coming up soon.
>
> **[2:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=161)** So this is the experience that I have right now.
>
> **[2:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=164)** Now, in order to open the project, I am going to go back to the terminal and I'm going to type in a command code, insiders.
>
> **[2:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=174)** And this is because I'm using the insider build.
>
> **[2:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=177)** If you're using VS Code, this will be code, or otherwise, you can also click open folder and open the code from there.
>
> **[3:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=184)** And once I do that, the code opens up as I move things around.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=192)** This is the explorer window.
>
> **[3:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=194)** I see book search here and I see three things, two directories and one file.
>
> **[3:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=199)** I click on pom.xml.
>
> **[3:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=201)** So this is the main file that holds the blueprint with all the dependencies that we are going to use in our project.
>
> **[3:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=213)** Since we were using an archetype, the only dependency that we have is Junit, and we are going to leverage that when we are going to write the test.
>
> **[3:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=221)** But other than that, there is nothing new here.
>
> **[3:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=224)** Now, the target directory is created when we ran mvn clean install command and it updated everything inside it.
>
> **[3:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=234)** And this is the book search jar file that we saw from the command line.
>
> **[3:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=237)** The most interesting piece where we are going to spend most of our time is under SRC directory and there are two directories inside it: main and test.
>
> **[4:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=246)** Test where all our tests will be located.
>
> **[4:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=249)** And in main, you will see com and h2 as nested directory.
>
> **[4:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=254)** This is the group ID, if you remember, when we were creating the maven create command for the project.
>
> **[4:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=260)** That is being used to create this package.
>
> **[4:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=262)** And outdoor Java is the main class that is executed when we ran mvn run exec command.
>
> **[4:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=269)** So this is pretty much about it.
>
> **[4:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=270)** We have seen our code base, we have extensions installed, so we are all set.
>
> **[4:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=275)** We can start working on our code base starting in the next video.
>
> **[4:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=280)** Alright, so this is all about looking at the code in the editor.
>
> **[4:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=285)** We are not running any code at the moment, but let's make a change.
>
> **[4:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=289)** So if we say hello book search, we want to ensure that the changes that we are making will work fine.
>
> **[4:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=297)** I'm going to open up the terminal and I'm going to run mvn clean install and everything worked fine.
>
> **[5:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=305)** So we will run mvn exec command again.
>
> **[5:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=307)** I'll clean the screen, run again.
>
> **[5:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=310)** And now, it says hello book search.
>
> **[5:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=312)** Alright, so what we have done so far is, we have installed multiple versions of Java, we are using Java version 24 here.
>
> **[5:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=319)** We installed Maven, we created the project using Maven, we ran the entire lifecycle using command line.
>
> **[5:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=326)** We looked at the code in IDE, we installed the extensions.
>
> **[5:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=331)** The extensions are already installed, but I hope that you may have installed the extensions by now, if not already.
>
> **[5:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=336)** And we have made changes to our code and ran it successfully from the command line.
>
> **[5:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=342)** So we are almost done with all the infrastructure work that we need to do before we can start focusing on the project work.
>
> **[5:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=350)** So I'll see you in the next video.
>
> **[5:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=351)** There is one final piece that I want to run through before we start focusing on the project-specific parts.
>
> **[5:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-visual-studio-code?u=76281980&t=358)** So I'll see you next.

> [!info]- Semantic Content
>
> **Tools:** github (12), vs code (4), command line (3), terminal (2), visual studio (1)
> **Env Vars:** ide (6), src (1)
> **CLI Commands:** mvn (4), make (2)
> **Code Keywords:** switch (2), this, (1), continue (1), let (1)
> **UI Navigation:** click on (2), open the (2), go to (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (4), before we start (1)
> **Cross-References:** in the next (2), coming up (1)

#### Introduction to the Spring Boot framework
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=0)** - [Instructor] In this course, we are going to leverage Spring Boot.
>
> **[0:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=3)** If you look at their Featured section, it outlines why this is one of the most popular projects.
>
> **[0:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=9)** First, it enables the creation of self-contained Spring applications.
>
> **[0:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=14)** Then it directly embeds Tomcat, Jetty, or Undertow.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=17)** That eliminates the need of deploying the WAR files in order to create servers.
>
> **[0:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=22)** It also offers an opinionated starter dependencies to streamline the build configuration, and it automatically configures the Spring and third-party libraries whenever possible.
>
> **[0:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=33)** Finally, it provides the production-grade features built into the framework such as metrics, health checks, and externalized configuration.
>
> **[0:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=42)** And one of the most important thing is the community support.
>
> **[0:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=45)** So Spring community is thriving, and if you get stuck in creating your code and understanding any parts of the code base that leverages Spring Boot, the community is always there to help you, which means you will never feel like you are the only one trying to juggle with this problem.
>
> **[1:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=62)** Somebody in the community may have seen before and would be able to help you out.
>
> **[1:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=66)** So I hope that this was useful.
>
> **[1:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=68)** This is not the course on Spring Boot.
>
> **[1:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=70)** We assume that you know Spring Boot before.
>
> **[1:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=74)** If not, there are good courses available on LinkedIn Learning that you can take to get better at these Spring Boot skills.
>
> **[1:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=81)** However, in this course, we will use Spring Boot, and whatever part we are going to touch as part of the framework, we will do our best to make sure that you understand the code that we are writing.
>
> **[1:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-spring-boot-framework?u=76281980&t=92)** All right, with that, I will see you in the next video where we are going to create our first Hello World API using Spring Boot.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), finally, (1)
> **Env Vars:** war (1), api (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Creating a hello world API
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=0)** - [Instructor] As we mentioned that we are going to use Spring Boot for creating our API project, we need to install the Spring Boot dependencies, so that we can continue to make progress in the project.
>
> **[0:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=13)** Now, I've opened up the pom.xml.
>
> **[0:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=15)** This is where all the dependencies must go in.
>
> **[0:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=18)** This is where I'm going to show you the first use case on where GitHub Copilot could be useful.
>
> **[0:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=23)** So for that, I'm going to open up chat, and I'm going to pass in the context, my question, which is, "I'm creating API based project using Spring Boot.
>
> **[0:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=39)** "Help me add necessary dependencies "so that I can create APIs."
>
> **[0:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=49)** And I as a hit enter, GitHub Copilot took our pom.xml as a reference, as an input, and then it created the three steps that we would need, and it created the updated pom.xml, but it did not apply the changes yet.
>
> **[1:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=67)** It just showed us what it would look like.
>
> **[1:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=71)** And on the right, we still have our pom.xml, and on the left is the suggestion or is the code that GitHub Copilot thinks that we would need in order to add Spring Boot dependency.
>
> **[1:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=83)** Now, as I hover on this, you will see this popup coming up with a different set of buttons.
>
> **[1:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=91)** The most important one, which is a new release that has happened is if I click here and click on the plus one, it says, "Apply in Editor."
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=100)** And as I click, there's a dialogue that appears that says it's applying the changes from the left, which was the solution, to the right, which is where our file is.
>
> **[1:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=110)** And it doesn't directly apply, rather it creates a (indistinct) between the suggested and what exists, and it shows the potential changes that we may want to apply.
>
> **[2:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=120)** Now it says that we need the Spring Boot parent, Spring Boot starter web, and Spring Boot starter test with the test dependency, and our original dependency on (indistinct) is still intact.
>
> **[2:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=133)** There are three things that we can do.
>
> **[2:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=135)** We can see show changes, discard if we don't like it, or accept.
>
> **[2:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=138)** And now in this case, I'm going to accept and see what happens.
>
> **[2:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=141)** So our changes have been applied now, but do they work?
>
> **[2:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=145)** So I'll hit save, command S, go to my terminal and run mvn clean install and see if this works.
>
> **[2:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=155)** So, the build was successful, which means now our project has necessary Spring Boot dependencies and our existing code didn't break at all.
>
> **[2:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=165)** So what we are going to do next is we should create a simple Hello World API that runs using Spring Boot and make sure that everything that we have done so far works correctly.
>
> **[2:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=179)** So I'm going to go to src, main, com S2, do a right click and insert a new file called HelloController.java.
>
> **[3:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=190)** And we are going to create the rest controller here.
>
> **[3:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=193)** So for that, what I'm going to do is I'm going to annotate this saying RestController.
>
> **[3:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=199)** As I type Rest, you can see the controller is in italics, and it's grayed out, which means that this is a suggestion that is coming from GitHub Copilot, not GitHub Copilot Chat, rather GitHub Copilot.
>
> **[3:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=212)** If you remember that there were two extensions we installed, GitHub Copilot and GitHub Copilot Chat.
>
> **[3:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=217)** This is GitHub Copilot.
>
> **[3:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=218)** Now, if I want to accept this, all I need to do is hit tab, which is visible here.
>
> **[3:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=225)** So I will hit tab, and two things happened.
>
> **[3:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=228)** The RestController got auto-populated, and there was a necessary dependency that added in the file.
>
> **[3:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=233)** Now the second thing that we need to do is to create a endpoint that will be used when we run our application.
>
> **[4:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=242)** So, I will first create a function, public string C.
>
> **[4:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=246)** GitHub Copilot is now giving a suggestion, say hello as a function name, and hello Spring Boot should be returned as a string.
>
> **[4:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=254)** If I want to accept, I will hit tab, and the code will be completed for me.
>
> **[4:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=259)** So, as you can see, GitHub Copilot is smart, and it understands the context.
>
> **[4:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=264)** And as a developer, when I'm writing code, it paired programs with me, but it thinks faster and ahead of what I'm trying to do and gives us the possible solutions that we can use.
>
> **[4:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=275)** I use the first suggestion, but there are ways we can see other alternatives suggestion that we can use, and I will show you those as we make progress in this project.
>
> **[4:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=285)** Now this is just a function but not the endpoints, which means we need to create the endpoint here.
>
> **[4:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=290)** So I will say add GetMapping, so again, GitHub Copilot is helping us here.
>
> **[4:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=296)** And I hit tab and it says, "This is the endpoint that you need."
>
> **[5:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=300)** Great, so now we have one endpoint.
>
> **[5:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=303)** So if the server is running, /hello is where we should go to make sure our project is working fine.
>
> **[5:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=309)** But before this can be injected into our application, there are two remaining things that we need to do.
>
> **[5:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=314)** So let me make this a bit closer.
>
> **[5:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=318)** The first thing that we need to do is go to our app.
>
> **[5:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=320)** Right now, it's running the system.out.println, which is not what we need moving forward.
>
> **[5:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=327)** We want to make it as a Spring Boot application.
>
> **[5:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=329)** So I'm going to type SpringBoot, and again, GitHub Copilot was fast enough and it says, "You might be thinking about this."
>
> **[5:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=337)** And I will say yes by heading tab, and the necessary import is already added to the file.
>
> **[5:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=344)** So, since this is there, the last thing that we need on this site is we want to say SpringApplication.
>
> **[5:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=351)** And again, GitHub Copilot says, "You want to run the App.class with the args."
>
> **[5:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=357)** And I would say, "Yes, I really want to do this."
>
> **[6:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=360)** So now that we have connected our main application with our Spring Boot application, let's go back and run the application again to make sure that everything works fine.
>
> **[6:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=371)** So I will do a WinClean install here, and everything works fine.
>
> **[6:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=377)** Now in this case, now we should start our server.
>
> **[6:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=380)** So we are going to use a different command, which is ambient spring-boot:run command, and as I hit enter, we will see that necessary dependencies have been downloaded and our application should be up and running in a few moment.
>
> **[6:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=398)** So, as you can see, Spring is here, so Spring Boot Controller is injected at the right place, and it says our application is running on port 8080.
>
> **[6:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=407)** So in order to test that, we are going to go to our browser and change this to local host 8080.
>
> **[6:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=415)** And if you remember, the endpoint was hello, so I will go to the hello endpoint as I hit enter.
>
> **[7:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=421)** Here we go. We get the, Hello, Spring Boot!
>
> **[7:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=423)** So what we've just done is we've created the Spring Boot application.
>
> **[7:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=427)** We have leveraged GitHub Copilot to help us add the dependency, help us create the controller, inject the Spring Boot application at the entry point, and we were able to run the application.
>
> **[7:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=439)** Now, in order to make any change, I can go back and say, "Hello, Spring Boot application," and double exclamation.
>
> **[7:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=447)** But this is not going to change anything if I still go ahead and refresh.
>
> **[7:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=452)** This is still the same output as before.
>
> **[7:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=455)** It's because our application needs to be recompiled and packaged before we can run it.
>
> **[7:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=460)** So what I'm going to do moving forward is I will say mvn string-boot run, but before that I will also run mvn clean install and run both the commands together.
>
> **[7:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=472)** So, the first command will do its job by making sure everything works fine, creating the jar file, and the second one will start the spring application based on the latest jar file.
>
> **[8:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=482)** So now that the application is running, we can go back and if I now hit refresh, we get Hello, Spring Boot application!!
>
> **[8:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=490)** Fantastic, so with that, we have taken care of most of the infrastructure pieces by creating the project from scratch, having the necessary dependencies.
>
> **[8:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=500)** We would need more dependencies as we start interacting with the database.
>
> **[8:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=504)** But the baseline is set.
>
> **[8:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=506)** We already have the application code.
>
> **[8:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=507)** We have the Spring Boot application, and we've created our Hello World API, and all of this is working perfectly fine.
>
> **[8:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=513)** Fantastic, so I will see you in the next module, and we'll shift gears, and we will focus on the database so that we can populate the books before we can start searching on them.
>
> **[8:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/creating-a-hello-world-api?u=76281980&t=523)** All right, I hope that this was useful, and I'll see you next time.

> [!info]- Semantic Content
>
> **Tools:** github (15), terminal (1)
> **Code Keywords:** function (3), this, (2), case, (2), let (2), this. (2)
> **CLI Commands:** make (8), mvn (3)
> **UI Navigation:** go to (5), click on (1)
> **File Paths:** pom.xml (4), hellocontroller.java (1)
> **Env Vars:** api (4)
> **Prerequisites:** install (4)
> **Cross-References:** we mentioned (1), coming up (1), in the next (1)


### 2. Dockerizing the Project with PostgreSQL

#### Setting up Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=0)** - [Instructor] All right. So now let's go back to our project overview.
>
> **[0:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=4)** We want to build a book search API, and when we created this entire diagram, we realized that everything starts from the database.
>
> **[0:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=13)** Because unless and until we have a database that contains set of books, there is no point in writing the APIs or business logic because there is no data that supports this business logic or the APIs.
>
> **[0:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=25)** So, in this module, we are going to build the database.
>
> **[0:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=29)** And in order to do that, we are going to leverage Docker.
>
> **[0:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=33)** Now, if I go to the website for Docker, Docker is the platform for developing, shipping, and running applications in containers.
>
> **[0:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=42)** And these containers are nothing but lightweight, standalone, executable package, which can package any piece of software inside it.
>
> **[0:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=50)** And the most important benefit that we need from Docker in our course is the concept of portability, which means once we have a container running on my machine, when I show you, you will be able to replicate the exact same thing on your own machine.
>
> **[1:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=65)** And best of all, if you are happy with what you see, you can even take the same container in the product and deployment.
>
> **[1:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=72)** So if I click on the Discover Desktop, we'll go to the overview of Docker Desktop, which is what we are going to install in just a moment.
>
> **[1:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=79)** And it contains a lot of different services.
>
> **[1:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=82)** And the one that we are going to use is Docker Compose.
>
> **[1:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=86)** Even though Docker Compose says that it's for defining and running multiple container applications, we are only going to start a single container that contains our Postgres database.
>
> **[1:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=97)** Now, in order to install the Docker technology, you go back to the homepage, to [docker.com](https://docker.com), and over here, you will see this button that says Download Docker Desktop.
>
> **[1:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=108)** Now, the installers are available for almost every operating system.
>
> **[1:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=112)** So go ahead and click on the button that is most relevant for your operating system and continue with the installation process.
>
> **[2:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=120)** Now, I already have Docker installed locally, but once you are finished with your setup and start the Docker Desktop, the way to identify whether or not it's working is by going on the terminal and type docker -V, and you will see the Docker version up and running.
>
> **[2:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=138)** So if you have reached this far, fantastic because now, as per this diagram, you already have the technology up and running on a machine, that is Docker.
>
> **[2:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/setting-up-docker?u=76281980&t=148)** And in the next step, we are going to set up the database container inside Docker and connect with this database.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (16)
> **Tools:** docker desktop (3), terminal (1)
> **UI Navigation:** go to (2), click on (2)
> **Prerequisites:** install (2), setup (1), set up (1)
> **Code Keywords:** let (1), module (1), continue (1)
> **Cross-References:** go back to (1), in the next (1)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** api (1)

#### Configuring PostgreSQL in Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=0)** - [Instructor] All right, so now that the Docker is up and running on our machine, the next thing we need to do is to set up a Postgres database inside the Docker container.
>
> **[0:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=10)** Now in order to do that, we are going to leverage GitHub Copilot.
>
> **[0:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=14)** Let's assume that we don't know anything about Docker.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=17)** All we need to do is to run a Postgres SQL container inside the Docker.
>
> **[0:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=23)** So we are going to ask GitHub Copilot to help us with this task.
>
> **[0:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=27)** So I'm going to say, create a Docker compose yml file.
>
> **[0:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=35)** So docker-compose.yml is a file that is a blueprint of what the infrastructure would look like.
>
> **[0:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=41)** We provide that file as an input to Docker and Docker does the rest of the things.
>
> **[0:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=47)** So we are going to create that blueprint by asking GitHub Copilot to create the docker-compose.yml file.
>
> **[0:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=53)** So we are saying, create the docker-compose.yml file that hosts a Postgres SQL database, latest.
>
> **[1:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=64)** So we are going to use the latest tag, which means the latest version of Postgres database.
>
> **[1:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=70)** The container name should be library-db.
>
> **[1:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=76)** The database name should be library.
>
> **[1:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=81)** The user is admin and password is admin123.
>
> **[1:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=87)** Now this is only for local purposes.
>
> **[1:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=90)** Please do not use this password production.
>
> **[1:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=92)** It's not very secure, but we are just trying to set up everything locally.
>
> **[1:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=96)** This can be externalized into a configuration file later, but that is out of the scope.
>
> **[1:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=101)** So I'm just going to focus on getting the container up and running.
>
> **[1:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=105)** So we asked our GitHub Copilot friend to create the yml file with what database we need, what the container name should be, what the database name and user and password should be.
>
> **[1:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=116)** We also need to expose the port so that we can access the database from our machine.
>
> **[2:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=121)** So we are going to say we also need to expose the db to local port 5432.
>
> **[2:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=131)** This is usually the port where Postgres servers expose their database.
>
> **[2:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=136)** So with this, let's send this to GitHub Copilot and see what output we get.
>
> **[2:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=141)** Interesting.
>
> **[2:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=141)** So within few moments, as we can see, we have this snippet of code.
>
> **[2:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=147)** It's using version 3.8 of Docker desktop.
>
> **[2:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=151)** And then it's taking the image which is Postgres latest, which means that it adheres to our request.
>
> **[2:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=157)** It added the right container name, the database name, the username and password, and it exposed the container port 5432 with our local port 5432.
>
> **[2:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=169)** Fantastic.
>
> **[2:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=170)** But we don't know whether or not it's going to run, and also that this is only a snippet of code.
>
> **[2:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=174)** This is not added to our code base yet.
>
> **[2:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=177)** So for that, what we are going to do as we hover, click on these three dots and say insert into a new file and it comes here.
>
> **[3:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=187)** But as you can see on the top, the file name is nothing.
>
> **[3:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=191)** It's not saved yet.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=192)** So as I hit S, command S, this is where we need to save our Docker compose yml at the root of the project.
>
> **[3:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=202)** So this would be Docker compose, docker-compose.yml file.
>
> **[3:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=207)** So as I saved it, identified that this is docker-compose.yml, let's look at the code structure.
>
> **[3:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=217)** So it's sitting at the root of the project and everything else looks good so far.
>
> **[3:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=224)** So the time has come for us to test it.
>
> **[3:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=227)** So let's open up the terminal and we are going to run the command called docker-compose.
>
> **[3:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=234)** Up is a command to create the containers and down is a command to remove or stop the containers.
>
> **[4:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=241)** So we are going to use Docker compose up and minus D, which means run in a detached mode, which means in a background mode.
>
> **[4:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=249)** So let's run and see what do we get.
>
> **[4:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=252)** Okay, so we got the message that the volume was created.
>
> **[4:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=259)** The volume is where the data is hosted inside the container and it said that the container library DB is running.
>
> **[4:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=266)** So let me just hide a few things so that we can focus on terminal at the moment.
>
> **[4:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=272)** Okay, so now that we have this message, how do we know it's running?
>
> **[4:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=276)** For that, we are going to run docker-ps command.
>
> **[4:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=279)** And as we can see, library-db is actually running with the image for Postgres latest and it has exposed the port 5432 from container on our machine on our local host at 5432.
>
> **[4:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=293)** It's been running, when was it created, what its status is, what the container ID is.
>
> **[4:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=298)** Great.
>
> **[4:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=299)** So now that we know it's up and running, is there a way I can connect it from my own machine and see if this is working?
>
> **[5:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=307)** Turns out that there is a way, by running Docker exec command.
>
> **[5:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=310)** So I will type Docker exec minus I for interactive, T's to attach the terminal.
>
> **[5:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=317)** So Docker exec minus IT.
>
> **[5:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=319)** And then what's the name of the container?
>
> **[5:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=322)** So it's library-db.
>
> **[5:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=325)** And then once it connects to the db, what command do we want to run?
>
> **[5:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=329)** So since it's a Postgres database, we want to run P is equal command, which is to execute the terminal with the user as admin and with the database call library, which is what we created here.
>
> **[5:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=345)** So let's see if this works. Fantastic.
>
> **[5:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=347)** So now as you can see, this database is not on our machine but inside a container.
>
> **[5:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=354)** And the container is hosted by Docker.
>
> **[5:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=356)** So from our own machine, we were able to get into Docker container and were able to execute Postgres command.
>
> **[6:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=364)** And this is telling us that we are inside the database at the moment.
>
> **[6:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=369)** How do we know what database exists?
>
> **[6:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=370)** So \L and hit enter. Didn't work.
>
> **[6:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=376)** So \L is how we run it.
>
> **[6:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=380)** Semicolon is not the right thing to add.
>
> **[6:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=382)** So it lists the database that we created.
>
> **[6:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=386)** So as we can see, we already have the database created for us.
>
> **[6:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=392)** And inside the Docker container, we were able to connect to it, using Docker.
>
> **[6:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=397)** Think about how much time we saved rather than fiddling around with our own machine configuration in order to install the Postgres database.
>
> **[6:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=405)** Now we also need to find out what version of Postgres we are running.
>
> **[6:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=411)** So we'll say select version.
>
> **[6:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=413)** And I think here, I need to do this.
>
> **[6:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=415)** So select version with the semicolon and we know that we are running Postgres 16.4.
>
> **[7:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=422)** So fantastic.
>
> **[7:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=424)** We have reached to the next step of our project, which means we leveraged GitHub Copilot.
>
> **[7:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=431)** Let me just open that up.
>
> **[7:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=432)** We leveraged GitHub Copilot to create the Docker compose AML file for us.
>
> **[7:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=438)** And then using this file, we were able to set up the infrastructure.
>
> **[7:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=442)** We were also able to execute or get into the database terminal and we were able to execute the command successfully.
>
> **[7:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=449)** To exit, I believe we do /q and we are back in our own machines because this is the project route directory.
>
> **[7:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/configuring-postgresql-in-docker?u=76281980&t=457)** All right, so now that we have all these things set up, let's go to our next step.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (26), find (1)
> **Tools:** github (7), terminal (5), docker desktop (1)
> **Code Keywords:** let (9), this, (1), this. (1)
> **Definitions:** is a  (5), means that (1)
> **File Paths:** docker-compose.yml (5)
> **Prerequisites:** set up (4), install (1)
> **Ports:** port 5432 (4)
> **Env Vars:** sql (2), aml (1)


### 3. Designing the Database Schema and Implementing Full-Text Search

#### Designing the book schema
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=0)** - [Instructor] Alright, welcome back.
>
> **[0:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=2)** So far, we have focused on creating a database inside a Docker container.
>
> **[0:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=6)** Now it's a good time for us to move on to the next step where we are going to insert books information in this database.
>
> **[0:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=13)** Now all the books information are available on a CSU file sitting in a remote GitHub gist.
>
> **[0:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=20)** And I'm going to take a small sample of that.
>
> **[0:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=22)** There are data for almost 20,000 books, along with their author information.
>
> **[0:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=27)** I'm copying the first four rows, and going to put that in a spreadsheet so that we can look easily.
>
> **[0:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=34)** So we have lot of dimensions here, starting with book ID, title, author, rating, description, and so on and so forth.
>
> **[0:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=41)** And I've copied four books' information.
>
> **[0:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=43)** And what we need to do is not take this entire CSV and dump in a single database table, because that is not a good design.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=52)** At the very minimum in the context of this course, we want to split the author's table separate from the books table, because one book may have more than one author as a collaborator, and one author can have more than one books.
>
> **[1:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=66)** So we want to map that many to many relationship.
>
> **[1:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=68)** If you look at it visually, how this would look like.
>
> **[1:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=71)** So we will have a books table.
>
> **[1:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=74)** We will have a books table in the database, then we will also have the authors' table in the database.
>
> **[1:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=80)** And then we will have a new table called Books, Authors.
>
> **[1:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=85)** And the ID from the books will map into book ID in book authors, and the author ID from the author table will map as authorized in the books author table.
>
> **[1:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=97)** This way we can map the CSV data into three database tables.
>
> **[1:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=102)** And this will help us create queries that are useful in the context of the business logic, which we will cover in the future module.
>
> **[1:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=110)** So I hope that this was useful.
>
> **[1:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/designing-the-book-schema?u=76281980&t=111)** Now that we have seen what data looks like and how we want to shape it, let's move on to the next step and create the schema in Postgres database.

> [!info]- Semantic Content
>
> **Env Vars:** csv (2), csu (1)
> **Code Keywords:** module (1), let (1)
> **CLI Commands:** docker (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Create a database schema in PostgreSQL
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=0)** - [Instructor] All right, so now I'm back in my VS Code, and we have seen all this code before.
>
> **[0:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=5)** Now, in order to create a schema, I'm going to first create a file inside a folder called DB, and call it create_schema.sql.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=17)** Now, in order to create this schema, we need to know what columns it would contain.
>
> **[0:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=23)** So we are going to go back to the original CSV that we had, and I'm going to copy all the names for the columns.
>
> **[0:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=30)** I will come back to my SQL file, and I will write a comment that we are using, we are using PostgreSQL 16.4, which is the latest one, and CSV Header is below.
>
> **[0:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=48)** And the reason I'm doing that is because I want the help from GitHub Copilot to help me design the schema.
>
> **[0:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=57)** So in the next step, I'm going to write a comment which it already understands, but I'm going to put the comment for clarity, Create the books table, and then I'm going to say Create the authors table, and then I'm going to say Create the book_authors table.
>
> **[1:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=76)** See, all of this gray out content is the context taken by GitHub Copilot as I'm typing, and giving me the suggestion, which is exactly the suggestion that I'm needing right now.
>
> **[1:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=89)** So as I mentioned in the video before, is that we are going to create these three tables, and I have copied the CSV Header from the file that I will show you once again from here.
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=100)** It's a CSV file setting in GitHub Gist, and I pasted it here so that I can get help from GitHub Copilot in designing this schema as well.
>
> **[1:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=108)** And we have already mentioned that we are going to leverage PostgreSQL syntax.
>
> **[1:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=113)** So now as a type CREATE TABLE, in a moment, I should see, or I haven't seen anything yet, so I'm going to say books, and all of a sudden see this greater content has come up, which is taking all the information available in the CSV Header below and assigned a relevant data type for each and every column.
>
> **[2:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=137)** So I will accept it for now, and I don't exactly need all of this information.
>
> **[2:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=142)** For example, since we said that author information is going to be in a different table altogether, so I'm going to delete it, and I also don't like the way it has taken the casing.
>
> **[2:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=153)** I prefer the column names to have underscore between them, all lowercase.
>
> **[2:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=159)** I'm going to say that this is, I will not change it here, but I will change it here.
>
> **[2:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=165)** This is a book_id.
>
> **[2:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=166)** I am going to keep it the way it was before, and I'm going to change this to book_format.
>
> **[2:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=173)** and publish_date, and the first_publish_date, and liked_percent, and this way, everything looks good to me.
>
> **[3:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=187)** Now we are going to create the authors table.
>
> **[3:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=189)** So as I hit enter, GitHub Copilot gave me a suggestion that you want to create the authors table, and it took the author_id, so it understood that I'm no longer interested in the camel casing, so it's using underscore in space, so very smart based on the input that I just gave above, and it is taking the author_id and the author_name as the two important things that we would want to keep.
>
> **[3:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=211)** I will take it here.
>
> **[3:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=213)** I'm only changing the author_name to be name, because we are setting in the context of authors_table, so everything looks good here.
>
> **[3:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=220)** And finally, we need to create the table, so I hit Enter, and again a blob of content as a suggestion came in, and now it's saying that you're creating books_authors, we have book_id and author_id.
>
> **[3:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=231)** They both must not be null.
>
> **[3:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=234)** And the PRIMARY KEY is a candidate key between the book_id and the author_id, and the FOREIGN keys all look good, so I'm going to hit Tab, and that's it.
>
> **[4:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=242)** So as you can see, it was pretty easy taking help from GitHub Copilot to design this schema.
>
> **[4:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=248)** In this case, I've worked with Postgres, but I may not know all the data types, but having the helping hand from GitHub Copilot to do the programming with me is extremely useful.
>
> **[4:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=259)** As you can see, in just a few minutes, we were able to create the schema.
>
> **[4:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=263)** So now that we have created our schema, it's time for us to create the tables in the database.
>
> **[4:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=269)** But before we do that, there is one more thing that we need do to ensure that as soon as we start our database container, these tables are created, and for that, I need to go to docker-compose.yaml file.
>
> **[4:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=282)** And in under volumes, I will add a new part, and I will say from db, take the create_schema.sql, and as you can see, GitHub Copilot is giving me a hint that you want to put this in the docker-entrypoint under the create_schema.sql.
>
> **[5:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=300)** I will say in instead of doing as a create_schema, I will type it as init.sql.
>
> **[5:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=306)** So what this line does is when the container starts for Postgres, it looks for the initialization scripts that it can execute when the container starts.
>
> **[5:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=316)** And all we are saying here is when the container start, take the create_schema.sql which we created right here, and put that under the docker-entrypoint-init.sql.
>
> **[5:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=328)** With that, when we start our container, we will see these database tables getting executed and created.
>
> **[5:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=336)** Now the moment of truth, we have to go ahead and run it, so I will make this screen a little bigger.
>
> **[5:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=341)** I am going to see what's running right now, so I will say docker ps, and only library-db is running, so first thing I need to do is to remove that, so I'm going to say docker-compose down -v, and it is going to remove everything from the docker process, so if I do docker ps, nothing is here.
>
> **[6:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=362)** So now when we are going to run the docker-compose up to bring up the containers -d, which means in detached mode, let's see what happens.
>
> **[6:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=372)** So it says that it has created the volume, it has created the network, and it has created the library-db as well.
>
> **[6:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=380)** So we need to ensure that this is indeed the case, so I'm going to run the docker exec, and I'm inside the Docker container inside the database because I'm looking at the psql, and first thing, I will list all the databases.
>
> **[6:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=395)** So library is there.
>
> **[6:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=396)** You can also make sure that that is indeed your current selected database, but if you see library over here, and then I'm going to slash d, and as a hit Enter, you can see that it has created authors table, books table, and books_authors table, which is exactly what we did in the context of our schema design.
>
> **[6:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=418)** What we can also do is we can say slash d authors, and we can see that author_id and author_name is currently mapping to the schema that we mentioned.
>
> **[7:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=430)** If I do slash d for books, you will see exactly the same amount of information, which is mapping with our schema, which is a blueprint.
>
> **[7:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=440)** Fantastic, so what we've done just now is we took out the CSV Header, and then we took help from GitHub Copilot in designing the schema.
>
> **[7:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=448)** We are creating three different tables, book, authors, and books_authors, and then we updated the docker-compose.yaml file to take the SQL and put that as a part of initialization script.
>
> **[7:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=460)** We removed our existing Docker containers, and when we restarted the initialization script, executed and created all these tables.
>
> **[7:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=468)** Great, so at this point in time, we have our database inside a Docker container, and within the database, we have three tables.
>
> **[7:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/create-database-schema-in-postgresql?u=76281980&t=477)** Now, these three tables are still empty, so in the next step, we are going to insert some data and play around with the query, and I'll see you there to learn more about this full text search.

> [!info]- Semantic Content
>
> **Code Identifiers:** create_schema (5), author_id (5), book_id (3), author_name (3), books_authors (3)
> **CLI Commands:** docker (13), make (2), psql (1)
> **Env Vars:** csv (6), sql (2), create (1), table (1), primary (1)
> **Tools:** github (9), vs code (1)
> **File Paths:** create_schema.sql (4), docker-compose.yaml (2), init.sql (1), docker-entrypoint-init.sql (1)
> **Code Keywords:** case, (2), delete (1), finally, (1), let (1)
> **Cross-References:** in the next (2), go back to (1), we mentioned (1)
> **Definitions:** is a  (3)

#### Navigating the database using a web browser
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=0)** - [Instructor] Now that we have seen we have created all the tables necessary, it's time for us to insert the data in the database.
>
> **[0:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=7)** However, it'll get cumbersome to work with the command line when we are working with a lot of data and running a search query for example.
>
> **[0:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=16)** So in this case, we are going to change our direction a little bit and work with an admin tool, which makes it easier to work with the database.
>
> **[0:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=25)** For that, we are going to install another piece of software, which is called pgAdmin.
>
> **[0:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=30)** PgAdmin is one of the most popular open source software to work with the Postgres database.
>
> **[0:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=37)** Now when you go to the download section, they have a variety of ways where we can download pgAdmin, and we are going to look at the container mode.
>
> **[0:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=46)** It's because we are always trying to be transparent in the way we bring up our infrastructure.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=52)** And if I click on the documentation and then go to the examples, this is how you can actually start pgAdmin inside your Docker container.
>
> **[1:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=64)** Now, one thing that when you start a pgAdmin, it would ask you to connect with an existing database, which is our library database.
>
> **[1:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=74)** But since our library database is inside a Docker container, how are they going to connect to each other?
>
> **[1:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=81)** Visually, what this means is, we are already running our database inside a Docker container.
>
> **[1:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=86)** And if we also start our pgAdmin inside a Docker container, let's say this is our pgAdmin, how will this pgAdmin connect to the database inside a Docker container?
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=100)** So for that, what we need to do is to bring pgAdmin and the database on the same network.
>
> **[1:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=107)** If they're on the same network, they can see each other and they can talk to each other.
>
> **[1:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=111)** What this means is that we are going to create a link between our pgAdmin container with our database container.
>
> **[2:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=120)** Now I showed this to you visually, let's go back to the command line and run this in order to make sure that we are able to manage the database from admin.
>
> **[2:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=131)** I'm going to come back to my IDE and quit this setup right now.
>
> **[2:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=136)** And if I do a docker PS, there is only library-db, so what I need to do is to docker-compose down -v and there is no container running at the moment.
>
> **[2:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=149)** And what we need to do is to, I will start the container once again by saying docker-compose up -d.
>
> **[2:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=157)** And as I hit enter, I like your attention to be paid here.
>
> **[2:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=162)** So when a Docker compose started the container, it automatically creates a network called as book-search_default.
>
> **[2:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=170)** Now since our network already knows about this database, what we need to do is when we start our pgAdmin, is to connect to the same network.
>
> **[3:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=181)** So first thing that we need to do is to pull the image for pgAdmin, and I'm pasting the command here.
>
> **[3:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=188)** It's a docker-pull dpage-pgadmin4.
>
> **[3:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=191)** As I hit enter it is using the latest tag and I have the image downloaded locally.
>
> **[3:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=199)** And the next thing is we need to start the container.
>
> **[3:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=202)** So I'm going to paste the command and explain that in a minute.
>
> **[3:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=205)** So what we are doing is we are running the container on port 80 with all the usual defaults that we saw on this page about the username and the password for the pgAdmin to access.
>
> **[3:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=223)** So when you go to the pgAdmin that I will show you in a moment, you need to log in with the user ID and password.
>
> **[3:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=228)** So this is the user ID and the password.
>
> **[3:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=231)** We use the same pgAdmin username and the default password here.
>
> **[3:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=238)** And I gave a name to the container as well, so that it's easier for us to look at when we do docker PS, and see here.
>
> **[4:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=245)** So we are saying that this container should be available or attached to the network book-search_default, which is this one.
>
> **[4:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=255)** And with that, as a hit enter, the container started.
>
> **[4:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=259)** So if I do a docker ps, I should see two containers.
>
> **[4:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=263)** Let me just slide this down so it's easier to look at.
>
> **[4:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=266)** So one is the library-db, which contains our database and the tables, which are empty at the moment, and the admin, which you're going to run.
>
> **[4:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=274)** And this admin is going to control or manage the database that we created.
>
> **[4:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=280)** Now if we look here, it says the pgAdmin is available locally on port 80.
>
> **[4:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=286)** So which means we should go to our browser, and if I do a local host for 80, I see a login screen.
>
> **[4:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=295)** And this is the login screen for pgAdmin.
>
> **[4:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=297)** Now remember, it has a default email and a password.
>
> **[5:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=301)** So this is what we need.
>
> **[5:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=303)** So I'm going to copy the username, paste it here, and then copy the password and paste it here.
>
> **[5:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=310)** And as we hit login, we have the pgAdmin access at the moment.
>
> **[5:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=315)** Now this is just the admin at the moment.
>
> **[5:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=317)** It doesn't know which database to connect to.
>
> **[5:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=320)** So for that, if you look into the servers, it's currently empty.
>
> **[5:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=323)** We are going to register a new server.
>
> **[5:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=326)** Let's give the name and call it admin.
>
> **[5:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=328)** And in the connection it needs the host name, host name for where your database is installed.
>
> **[5:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=336)** Now, if you remember correctly in the diagram, this host is inside the docker container, and the name of this host is library-db.
>
> **[5:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=344)** How do I know that is when I did the docker PS command, this is where our database is.
>
> **[5:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=351)** So library-db is what we need when connecting with the database here.
>
> **[5:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=357)** So I put the library-db, the user is admin and the password is admin123.
>
> **[6:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=364)** Let me type it again, admin123.
>
> **[6:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=367)** How do I know that?
>
> **[6:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=368)** It's because when we created our container, we gave it a user ID and the password.
>
> **[6:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=374)** Now with this, if I hit save, bam.
>
> **[6:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=377)** So now we are inside our database so we can see the library database.
>
> **[6:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=383)** If I go back to the Docker compose file, the name of the Postgres database was library.
>
> **[6:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=389)** So we are able to find it here.
>
> **[6:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=391)** And if I go to Schemas, and then if I go to tables, we see three tables, authors, books, and book authors.
>
> **[6:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=400)** Fantastic, so what we just did is we created an alternate way to connect to our database running inside the Docker container, so that we no longer have to run longer queries on command line.
>
> **[6:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=415)** Now in the next video, we are going to insert some data and start writing some queries.
>
> **[6:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/navigating-database-using-web-browser?u=76281980&t=418)** So I will see you there.

> [!info]- Semantic Content
>
> **Code Identifiers:** pgadmin (17), search_default (2)
> **CLI Commands:** docker (16), make (1), find (1)
> **Code Keywords:** let (5), case, (1), this, (1)
> **UI Navigation:** go to (6), click on (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** command line (3)
> **Ports:** port 80 (2)
> **Prerequisites:** install (1), setup (1)

#### Introduction to full-text search
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=0)** - [Instructor] So, now we are looking at the three tables, authors, books and books authors in the context of pgAdmin that is running in the browser on local host port 80, if I just press it here again.
>
> **[0:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=12)** So it says you're going to do this, and I'm going to come back to the database under library schemas, and these three tables are here.
>
> **[0:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=22)** So first thing, let's take a look if we have any data available.
>
> **[0:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=26)** When I run this, I don't see anything. The tables are empty.
>
> **[0:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=32)** So the first thing we need to do is we need to insert the data.
>
> **[0:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=35)** And for that, I'm going to make use of this window, which is the query, and I'm going to say, "Yes, I'm manually editing it," so I'm going to delete this.
>
> **[0:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=47)** And I'm going to paste insert statements.
>
> **[0:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=50)** I prepared this early on.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=52)** So, we are inserting into a book's table, and we are inserting all these dimensions, and we are creating one, two, three, four different rows.
>
> **[1:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=62)** So we are inserting four books into the books table right now.
>
> **[1:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=67)** To execute, I'm going to hit this button, and it says you inserted four rows.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=73)** In order to look at it again, let's repeat the process, all rows, and now we have four books' information available and we have all the data populated.
>
> **[1:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=86)** We have the ID, title, rating, description, and so on and so forth.
>
> **[1:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=90)** Now, let's see if we have to query for a book and what that query would look like.
>
> **[1:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=97)** So, there is already setting star from public books, and then we will say where, and let's run from the title.
>
> **[1:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=106)** Title like, and then we are going to say, "We are searching for books on algorithms."
>
> **[1:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=116)** And as a I hit run, I didn't find anything here. Why so?
>
> **[2:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=123)** If you remember correctly, when we inserted the data, if I go look at the data once again, we had books on algorithms, so why it didn't find?
>
> **[2:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=133)** So if we go back, we see that our algorithms is lowercase, but the one available in the database table is capital A.
>
> **[2:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=143)** So if I change this to here and run it again, it'll find the book.
>
> **[2:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=148)** The other way could be is that we make use of lower function available in the database and then change it to lowercase and then run it again, and then we find it again.
>
> **[2:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=164)** So, the idea is that the like queries that we run has to be paired with lower in order to find, or in order to do the case insensitive searches.
>
> **[2:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=175)** Now this can be quite tricky when you are working with the production systems, because you don't know what your user is going to enter as a query.
>
> **[3:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=184)** It's really unlikely that you can enforce the casing and the types and what words they're going to insert.
>
> **[3:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=191)** We have searched for algorithms.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=192)** They may type algorithm or algorithmic.
>
> **[3:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=196)** And in order to have a really good search system, queries like this should always work fine.
>
> **[3:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=202)** Now this is one area where the like queries don't work as much as we want, and we need to change our attention into a full text search engine.
>
> **[3:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=211)** And thankfully, Postgres supports the full text search.
>
> **[3:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=214)** And let's quickly take a look on how full text search index works behind the scene.
>
> **[3:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=220)** For that, I've created a spreadsheet, and I have entered name of 10 books over here, and I've also created the index here.
>
> **[3:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=230)** So before I do a side-by-side comparison, let me just duplicate this tab, open it, and then now I think it'll be easier for me to explain.
>
> **[4:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=243)** So on the left hand side, we have the book names.
>
> **[4:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=246)** So when we search using where name like something, it searches on the raw titles, which means it is doing a table scan, and it is doing its best to find or match the row that matches the user query.
>
> **[4:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=261)** In the cases of the full text search index, an index is a separate entity that is created on the data.
>
> **[4:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=267)** And what a search index does, it breaks the words available in the title or on the dimension that you are interested in.
>
> **[4:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=275)** And what it does, it creates the term, which means what word it found and where it found that.
>
> **[4:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=281)** So for example, let's take the word called concepts.
>
> **[4:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=285)** So it's saying it found the word concept in book ID five.
>
> **[4:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=289)** So if you go and look at the book ID five, the concepts word exist.
>
> **[4:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=295)** Now, if there are more than one book that matches that word, for example, systems, it says systems is available in book ID two and five, so we can go and look at book ID two has systems, and book ID five has systems.
>
> **[5:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=309)** So in the case of full text search, when the user query arrives, a full text search engine performs a lot of different features, such as normalization, stemming, and based on that, it is able to come to the point where it knows what term it needs to look up into this index.
>
> **[5:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=327)** And as you can imagine, scanning is a different ball game.
>
> **[5:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=332)** It takes more time and resources versus doing a lookup where you know what word it is and finding which book ID is, it's much faster and scalable.
>
> **[5:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=340)** So behind the scene, inverted search index is one of the things that search index provides, and there are a lot more features that are useful when working with the full text search engines.
>
> **[5:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=351)** Now as I mentioned, Postgres provides a set of functions that you can use to do the full text search index.
>
> **[5:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=358)** So in the next video we are going to create our own search index in Postgres and run the queries.
>
> **[6:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-full-text-search?u=76281980&t=364)** So I'll see you next, and we will do it together.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), delete (1), this. (1), public (1)
> **CLI Commands:** find (6), make (2)
> **Analogies:** for example (2), such as (1), imagine (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** pgadmin (1)
> **Ports:** port 80 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Implementing full-text search in PostgreSQL
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=0)** - [Instructor] All right, so as we can see we have four books, and now we need to create a full text search index.
>
> **[0:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=9)** And in order to do that, the first thing that we need to do is to create a vector, and we will do that on the books table.
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=17)** So, I'm going to paste the command.
>
> **[0:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=19)** So we are altering the books table, and we are adding a new column called search_vector of type tsvector, and this is where a similar inverted index that we saw in the spreadsheet, that was an example, but this one is where the index will be stored.
>
> **[0:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=36)** So, first thing is we need to create this column.
>
> **[0:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=39)** So I'm going to run this, and it says, "Query return successfully."
>
> **[0:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=44)** So I'm going to see what we have now, so running everything.
>
> **[0:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=48)** So if I go all the way at the end, we have search vector, which is of type tsvector, but all of the data is null.
>
> **[0:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=55)** So the next thing we need to do is to populate this search index.
>
> **[0:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=59)** So, we are going to run the update script, and let me just paste this query first.
>
> **[1:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=66)** So, we are updating the books table, and we are setting the information in the tsvector.
>
> **[1:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=72)** So, we are converting it using the English language, and we are using three columns to create the search index, which is title, description, and ISBN.
>
> **[1:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=83)** And A, B, C refers to the priority, so it means that when the search happens, if the search matches first in the title, it'll get the higher preference over the description and over ISPN and so on and so forth.
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=100)** And we are doing a to_tsvector, which means we are taking the exact content that is available in these columns and performing the rules, such as normalization and stemming so that they are stored in the index in a format which is easier to look up.
>
> **[1:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=117)** Now I'm going to run this query and see what happens.
>
> **[2:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=122)** It gave me an error because I selected only tsvector, so I'm going to select this entire piece of code and then run it again, and it updated the query.
>
> **[2:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=132)** So it says it updated four rows.
>
> **[2:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=135)** So we'll go back to the first select statement, run it, and then go all the way to the right.
>
> **[2:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=143)** And now, as you can see, it created this search index and populated this index for us.
>
> **[2:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=149)** It looks similar, but it's not exactly similar, it is much more involved with regard on how this activity works.
>
> **[2:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=155)** I gave you a very simple example on (indistinct) search index, but this code that is implemented by Postgres is much more involved and advanced.
>
> **[2:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=164)** So now that we have our search vector updated, we need to start making our search queries.
>
> **[2:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=171)** So for that, what I'm going to do is take a query that I already created about a select statement, paste it so that we can talk through it.
>
> **[3:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=180)** So, we are selecting title, and we are also using ts_rank, which is going to provide us the relevance or the ranking score on what the search score was.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=192)** And the way it works is we tell it which column contains our vector and then we are taking our query, which is algorithms in English language, and we are converting that into a query object.
>
> **[3:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=204)** Now, you see this to_tsquery appeared twice.
>
> **[3:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=208)** It's because any query that the user is going to provide you, which is algorithms in this case, needs to pass in through to_tsquery in order to make it a queryable object so that when it is searched against the search vector, they both are doing apples-to-apples comparison.
>
> **[3:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=226)** Now, we are using it two times, first time is to help create the relevance score, and the second time is to actually make the filter query.
>
> **[3:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=235)** So we are first doing the select, what all we need.
>
> **[3:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=238)** We need title and we need the rank.
>
> **[4:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=240)** We are searching in the books table and in the WHERE clause we are saying WHERE search_vector, which is the column which we populated a few minutes ago.
>
> **[4:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=248)** And we are using the user query and converting that into a to_tsquery.
>
> **[4:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=253)** So we are saying select all these things from the table where the search vector is a queryable object based on the user query called algorithms.
>
> **[4:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=260)** And we are ordering by the rank, which is the rank, a ts_rank, and let's go ahead and run this now.
>
> **[4:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=268)** So when we run, we found only one book with a score.
>
> **[4:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=271)** And this is one way where when the user provides algorithms and it matches anywhere in the database, it is being looked up into the search index and getting returned.
>
> **[4:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=281)** Now, this same query can get much more advanced.
>
> **[4:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=285)** So for example, if somebody is searching for anything that has algorithms or designs, so in this case I will say algorithms or design, the pipe is or, and as we have used to_tsquery in two places, I need to make this change at two places.
>
> **[5:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=303)** And if I now go ahead select this and run, we found two rows matching the criteria.
>
> **[5:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=311)** If I move this a little bit here, the first one is matching because of the design keyword, and the second one is matching because of the algorithm's keyword with a different score altogether.
>
> **[5:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=321)** So this is where the user is giving you A or B kind of queries.
>
> **[5:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=325)** The same query can be updated using the pipe operator.
>
> **[5:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=328)** If you want to model A and B, you use the and symbol, and I'm going to change it here again.
>
> **[5:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=335)** And if I select and run it again, nothing matched because there is no such book that contains the word algorithms and design.
>
> **[5:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=342)** But if you go back and change it to or condition, we found two books as we saw a few moments ago.
>
> **[5:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=348)** So let me just run this. We saw two books.
>
> **[5:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=352)** Now the point is that how this to_tsquery works, so in order to find how this works, I'm going to copy this and say select and paste it here.
>
> **[6:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=360)** So we are saying give me the output for calling this function to_tsquery on this query, which is algorithms or design.
>
> **[6:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=368)** So I'm going to select and run it.
>
> **[6:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=371)** So, behind the scenes, see what it did?
>
> **[6:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=374)** From algorithms, it went to algorithm, which means it performed these stemming and from design, it kept design.
>
> **[6:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=381)** So if I change it to designers and algorithms to algorithmic, algorithmic, and then run it again, let's see if anything changes.
>
> **[6:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=393)** So it changed it again.
>
> **[6:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=395)** I think I had a spelling mistake. It was algorithmic.
>
> **[6:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=399)** Let me just run it again.
>
> **[6:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=401)** So changed it back to algorithm and design.
>
> **[6:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=404)** So, the algorithm, the search index creation is smart enough to know how to normalize and how to stem the words so that it's easier to match based on the user query, because the user query is also going through the same function for normalization and stemming.
>
> **[7:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=423)** And the matching is easier, because it does a lookup, finds which book ID it is, and returns the result.
>
> **[7:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=428)** Now, if I changed it to capital Algorithmic and D capital and then run it again, it again changed it to the same word because it normalized from capital A to small a and small d from capital D.
>
> **[7:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=445)** Great, so I hope that this gave you some sense of how full text search in Postgres works.
>
> **[7:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=451)** Now this is a very small subset that I have covered, but if you're interested in finding more or you have a use case which is similar or require more changes, I would recommend looking at the Postgres documentation, chapter 12 on full text search, and you will find all the different sort of things, including the examples.
>
> **[7:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=471)** All right, fantastic.
>
> **[7:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=472)** So to recap what we have done so far, so we have a docker container, we have a database, we are leveraging pgAdmin in Docker to manage the database.
>
> **[8:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=481)** We have successfully inserted four books, and then now we have created a search vector, which is the search index on the books, and we saw how the full text search queries work in the context of Postgres database.
>
> **[8:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=495)** Great, now we are only working in the context of four books.
>
> **[8:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=499)** As I mentioned that, we have 20,000 books that we have to work on.
>
> **[8:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=504)** So, in the next step what we are going to do is we are going to write code that can insert the books information sitting remote somewhere on GitHub servers into our database that is sitting in our Docker containers before we move on to business logic and APIs.
>
> **[8:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-full-text-search-in-postgresql?u=76281980&t=520)** All right, fantastic, and I will see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), this, (1), case, (1), pass (1)
> **Code Identifiers:** to_tsquery (6), search_vector (2), ts_rank (2), to_tsvector (1), pgadmin (1)
> **CLI Commands:** make (3), docker (3), find (2)
> **Env Vars:** where (2), isbn (1), ispn (1)
> **Cross-References:** in the next (2), go back to (1), as we saw (1)
> **Definitions:** is a  (2), refers to (1), means that (1)
> **SQL:** where (2)
> **Analogies:** such as (1), for example (1)


### 4. Ingesting and Validating Data

#### Overview of data ingestion
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980&t=0)** - [Instructor] All right. So, now, in this set of videos, we are going to focus on inserting the data from CSV file that is setting on a GitHub gist, and then inserting that into our database that is running inside Dockerfile.
>
> **[0:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980&t=15)** Now, as we have seen, we already have the CSV file, which is books.csv, and it contains 20,000 books along with their author information, and a lot more things.
>
> **[0:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980&t=29)** And what we need to do, as we saw in the previous videos, we designed the schema that taking that CSV flat file, we want to insert them into three different tables, books, authors, and a mapping between books and their authors.
>
> **[0:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980&t=43)** So in order to achieve that, what we are going to do is focusing on this line that goes from Remote to Docker, we are going to divide this into three steps.
>
> **[0:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980&t=54)** The first step is download, the second step is parse CSV, and the third step is insert in DB.
>
> **[1:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/overview-of-data-ingestion?u=76281980&t=65)** So in the next video, we are going to look at all the three steps that will help us to take the data from a remote file directly into our database in those three different tables as we have talked about.

> [!info]- Semantic Content
>
> **Env Vars:** csv (4)
> **Cross-References:** as we saw (1), in the next (1)
> **File Paths:** books.csv (1)
> **CLI Commands:** docker (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Automating data ingestion
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=0)** - [Instructor] I'm back in VS Code now, and before we look at how this code will run, we need two dependencies.
>
> **[0:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=7)** The first one is to connect with the Postgres database, and the second dependency we need is to parse the CSV file.
>
> **[0:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=15)** So I will head over to pom.xml where all our dependencies are already available.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=21)** And now I'm going to ask GitHub Copilot to help us insert those dependencies.
>
> **[0:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=28)** Now one way to do that is I do a right click here, and I say Copilot, and Editor Inline Chat, and there is a Command + I on Mac as a shortcut.
>
> **[0:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=39)** So I'll click here, and this window pops up.
>
> **[0:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=42)** And I'm going to write my prompt here.
>
> **[0:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=45)** I'm going to say add the dependency of Postgres and OpenCSV.
>
> **[0:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=55)** OpenCSV we will use to parse the CSV file into the Java objects, and Postgres is, once we have those objects and we want to connect to Postgres and insert data, that's when we would need it.
>
> **[1:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=66)** I will hit Enter or I can also click here.
>
> **[1:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=70)** So Copilot is generating, and as you can see it gave us this suggestion.
>
> **[1:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=75)** We can either accept or discard, but let's review that.
>
> **[1:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=77)** So it's taking the Postgres dependency and it's taking the OpenCSV dependencies.
>
> **[1:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=82)** They both look good so I'm going to click Accept.
>
> **[1:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=85)** Now one thing I always make sure is that GitHub Copilot is a model that predicts the next word.
>
> **[1:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=92)** So it may not always have the latest information.
>
> **[1:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=95)** So for example, in this case of version, so if I want to know what the latest version is, I'm currently on VS Code, and I'm going to hit Control + Space, and then a screen will appear, and it'll tell me what is the latest version available.
>
> **[1:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=111)** So as you can see, 42.7.4 was updated on 23rd of August.
>
> **[1:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=117)** So I'm going to hit Tab to take this version, and I'll do the same thing for OpenCSV, Control + Space, and 5.9 is the latest version.
>
> **[2:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=126)** So I'm going to hit Tab and accept.
>
> **[2:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=128)** Once I have that, I need to make sure that the current code compiles well.
>
> **[2:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=132)** So I'm going to open up my terminal, and I have a shortcut here, Option + F12.
>
> **[2:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=138)** So my terminal opened up, so I am going to type mvn clean compile, which will make sure that I have all the dependencies and all the code that I have is compiling well.
>
> **[2:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=151)** So everything looks good.
>
> **[2:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=153)** So now we are ready to look at the code that will do the download, parse, and ingest.
>
> **[2:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=159)** Now for the purposes of this demo and keep the video to a reasonable size, I've already written that code.
>
> **[2:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=164)** So I'm going to work with you and explain how this works.
>
> **[2:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=168)** So the file is called DbImporter.java, and it is sitting inside com.h2 package.
>
> **[2:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=174)** As I click here, this file is fairly long, so it takes some time to write.
>
> **[3:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=180)** So I have done that part already, and I will explain step by step what's exactly is going on.
>
> **[3:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=185)** So this is the class.
>
> **[3:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=186)** So first of all we have set of imports.
>
> **[3:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=189)** These imports are coming from Java directly.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=192)** And line 9 to 13, all the imports are coming from OpenCSV.
>
> **[3:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=196)** Now in order to connect with database, we have three variables, which is the URL, user, and the password.
>
> **[3:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=203)** This is only for the demo purposes.
>
> **[3:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=205)** If you are using a products in grid system, I would request not to check this in into your source control, either GitHub, GitLab, or whatever system you use.
>
> **[3:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=214)** Rather keep this in a configuration file and load them on runtime.
>
> **[3:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=218)** Now the other variable we have is the GitHub gists file, which is exactly the file that we have been working with.
>
> **[3:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=224)** Let me show you. So this URL is copied from here.
>
> **[3:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=228)** This is the same URL that is pasted here.
>
> **[3:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=231)** All right, now this is our main method, which means when we will run this class, this will be the method that will be executed.
>
> **[3:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=238)** I have bunch of System.out.println.
>
> **[4:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=242)** So we will know on the console what step we are on.
>
> **[4:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=244)** So step one is downloading the CSV, step two is parsing, and step three is ingesting into the database.
>
> **[4:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=251)** And finally, we print that, the data ingested.
>
> **[4:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=254)** So going to the first step, which is downloadCSV, it is a method.
>
> **[4:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=258)** If I click here, it's right here from line 47 to 52.
>
> **[4:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=263)** All it does it takes the URL string, which if you see here is a CSV URL, which is nothing but the GitHub gists file pointing to the books.csv.
>
> **[4:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=273)** So downloadCSV takes that URL, it opens the HTTP connection, and then it returns the input stream, which is the series of bytes that comes down through the network.
>
> **[4:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=285)** And we take that in the csvStream variable here and pass that to our second step, which is parseCSV, that takes the csvStream here.
>
> **[4:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=295)** So now let's go and look at the parseCSV.
>
> **[4:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=299)** So parseCSV starts at line 55 and ends at line 74.
>
> **[5:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=304)** The whole purpose of this function is to take the stream and convert them into the list of records where each record is the array of values.
>
> **[5:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=314)** So every row split by comma is the value that we will get.
>
> **[5:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=318)** And the way it does that, the most important thing where we should start is line 63 to 65.
>
> **[5:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=325)** What it does, it creates a CSVReaderBuilder, which means it takes a reader, which is a BufferedReader, and this BufferedReader comes from the original csvStream that we downloaded from the internet.
>
> **[5:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=337)** So it takes that reader, creates a CSV builder, and we also tell him what parser we need to use.
>
> **[5:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=344)** So our parser is a CSV build parser with a separator comma.
>
> **[5:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=348)** So with these two information, our csvReader is ready.
>
> **[5:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=352)** So that is an object.
>
> **[5:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=353)** And with that object we can start iterating on the object from line 68 to 70.
>
> **[5:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=359)** As long as we have anything available in that csvReader, we add it to the records, which is nothing but the list of records.
>
> **[6:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=368)** And finally, when everything is done, we close the csvReader to save on the resources and not to leak our program, and then return that set of records back to the caller.
>
> **[6:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=380)** So if we go to the main function, we looked at the first part which is download, the second part, which is the parse, and this parse returns a list of records.
>
> **[6:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=390)** And third and the final thing is inserting the data into the records.
>
> **[6:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=394)** This is where we have the set of records sitting as Java objects, and now we need to send them to Postgres database.
>
> **[6:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=402)** Now let's look at this code.
>
> **[6:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=404)** So insert data, it looks like a big piece of code, but pretty straightforward to understand.
>
> **[6:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=410)** So let's dive into that.
>
> **[6:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=412)** The first thing is we create the connection to the database by passing in the URL, user, and the password.
>
> **[6:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=419)** Then we have a bunch of SQL statements.
>
> **[7:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=423)** The first SQL statement is how we are going to insert the author name into the database.
>
> **[7:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=428)** The second one is if we have the author in the database already in that table, we get the author_id back.
>
> **[7:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=436)** The third one is it prepares the INSERT statement.
>
> **[7:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=439)** It it's exactly the same INSERT statement that we saw when we were working with pgAdmin.
>
> **[7:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=444)** And once it inserts, we are saying give me the book_id.
>
> **[7:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=447)** So here we get the book_id, and the select author statement, we get the author_id.
>
> **[7:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=452)** And if this is a new author, we insert that into the author and return the author_id.
>
> **[7:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=458)** And finally for the book_authors, we insert into book_authors this book_id and the author_id.
>
> **[7:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=464)** So all in all you have seen the most important piece, which is, what queries are we running?
>
> **[7:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=469)** So the remaining thing that remains is, how do we map the array of objects into these SQL statements?
>
> **[7:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=477)** For that, we start with preparing the PreparedStatement and, for each statement that we saw from line 80 to 83, we prepare the PreparedStatement to work with database.
>
> **[8:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=491)** The first thing that we do from line 92 to line 96 is we read the header row from the CSV and we create an lookup map from the name of the column to the index it is sitting on, because it is ordered.
>
> **[8:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=507)** And that helps us here when we start mapping the data from line 101 to line 114, right here to here.
>
> **[8:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=517)** As you can see, all we are doing here is we are creating these variables by looking up into the headerMap for that specific record in the list of records.
>
> **[8:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=528)** Now that we have mapped everything, we are now ready to execute DB statements.
>
> **[8:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=532)** So the first thing we do is we insert authors into the table from line 117 to line 133, which means if author already exists, we get the ID of the author.
>
> **[9:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=546)** If not, we insert and then we get the author_id.
>
> **[9:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=550)** We keep that in the author_id on line 117, and that's it.
>
> **[9:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=554)** Then on line 135 all the way up until line 176, this is, because books has the most amount of information.
>
> **[9:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=564)** In the PreparedStatement, we start keeping the data on specific indexes.
>
> **[9:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=571)** And with that, once we have all this information available, we execute by sending the data to the database in books table.
>
> **[9:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=580)** Then we get the book_id, and then finally, we are ready to insert data into the books_authors table.
>
> **[9:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=587)** And this is exactly where we do those things.
>
> **[9:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=589)** So we have only two set of information in book_authors, book_id and the author_id, and we set them on the respective order, and then we execute update.
>
> **[9:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=598)** Finally, when all of this is executed, this is still happening in the context of database transaction, so nothing is committed.
>
> **[10:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=605)** So online 178, we do a conn.commit, which means whatever we have done so far, if that is perfectly fine as per ACID rules, you just go ahead and save this in the database.
>
> **[10:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=616)** Since we are working in the context of external system, we have put everything under the try-catch.
>
> **[10:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=623)** So line 87 wraps all the way up until line 179 so that if any wrong thing happens, if there is anything that is not correct, we roll back the connection.
>
> **[10:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=635)** So if there are any partial things that could have updated in the database, we don't keep them.
>
> **[10:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=640)** And finally, we just set the auto commit to true.
>
> **[10:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=644)** So if it's rolled back, auto commit to true, so nothing is persisted.
>
> **[10:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=647)** If everything was fine, you set auto commit to true and it's committed, and we close the connection.
>
> **[10:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=652)** And with that we have seen long set of code, which boils down to three steps, which is download, parse, and insert.
>
> **[10:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=659)** Now that we've seen the three steps, it's time for run it and make sure that everything exists in the database.
>
> **[11:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=666)** However, before we run this code, we should clean up everything in our database so that everything starts fresh and we have consistent clean data available in our database.
>
> **[11:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=677)** So I'm going to pgAdmin, and I'm going to click on books, and say Truncate, Truncate Cascade.
>
> **[11:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=684)** It's because this table has relationship to the other tables, which is books_authors, and we want to truncate all of that data.
>
> **[11:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=692)** So we will say yes.
>
> **[11:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=695)** And we got the message here, table truncated.
>
> **[11:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=699)** I am going to also truncate authors table.
>
> **[11:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=702)** So Truncate Cascade. Yes.
>
> **[11:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=706)** So we got the message, table truncated.
>
> **[11:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=708)** And then finally for the books_authors, I am going to do the same thing just to make sure everything is fine.
>
> **[11:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=716)** All right, so at this point in time, if I click on authors, View, All Rows, nothing should be there, empty.
>
> **[12:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=723)** If I click on books, View/Edit Data, All Rows, nothing, it's empty.
>
> **[12:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=728)** And for the book_authors, View/Edit Data, All Rows, it's all empty, fantastic.
>
> **[12:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=733)** So now let's go back to our code and try to execute the importer and see what we get next.
>
> **[12:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=739)** I'm back into the code now.
>
> **[12:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=740)** I'm going to open up my terminal.
>
> **[12:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=743)** And I'm going to run mvn clean install, and I have this command available for me here.
>
> **[12:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=753)** So we are running mvn clean install, and then we are running the application, main application, which is DbImporter in this context.
>
> **[12:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=764)** So we want to run the com.h2.DbImporter, and that's what exactly we are doing here.
>
> **[12:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=770)** So we'll clean compile, install the package, and execute this class.
>
> **[12:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=775)** Let's run it.
>
> **[12:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=777)** So all well.
>
> **[12:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=779)** Now it is running the ingestion, and inserting into the database.
>
> **[13:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=784)** It may take a little while to complete depending upon the internet speed.
>
> **[13:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=787)** And it said build success, which means all the four steps, which is download, parse, and ingestion.
>
> **[13:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=795)** It's complete. So our program is working perfectly fine.
>
> **[13:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=800)** In the next video, we will go into the database and run some queries to make sure that the data ingested is correct.
>
> **[13:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/automating-data-ingestion?u=76281980&t=806)** So I'll see you there.

> [!info]- Semantic Content
>
> **Code Identifiers:** author_id (7), book_id (5), book_authors (4), csvstream (3), parsecsv (3)
> **Env Vars:** csv (7), url (7), sql (3), insert (2), f12 (1)
> **Code Keywords:** let (7), finally, (5), class. (2), function (2), class, (1)
> **Tools:** github (5), terminal (3), vs code (2), gitlab (1)
> **CLI Commands:** make (6), mvn (3)
> **Definitions:** is a  (7), is called (1), is an  (1)
> **UI Navigation:** click on (3), go to (1)
> **File Paths:** pom.xml (1), dbimporter.java (1), books.csv (1)

#### Validating data integrity
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=0)** - [Instructor] I am back in pgAdmin now, and we want to ensure that we have all the data available.
>
> **[0:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=5)** So, I will first click on Authors, and I will open up the Query Tool.
>
> **[0:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=15)** And with this, we'll be able to query anywhere in all the tables.
>
> **[0:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=18)** I will say select count star from authors and as a run.
>
> **[0:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=27)** So, we have 50 authors, which is correct because when this data was prepared there were 50 authors and then select count star from books.
>
> **[0:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=39)** And as I mentioned that there are 20,000 books.
>
> **[0:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=42)** So, we saw 20,000 books here.
>
> **[0:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=45)** And then finally, we want to know how many books and authors combination we have.
>
> **[0:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=50)** So, we'll say count star from books_authors, and as I run.
>
> **[1:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=60)** It's 20,000, which means that for every book and every author, we have a combination available.
>
> **[1:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=65)** Now, we can also look at the data.
>
> **[1:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=67)** So, I can say select star from authors, limit 10.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=73)** And then if I execute this, we have 10 authors.
>
> **[1:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=77)** We can change this to books and then run it and we have books data.
>
> **[1:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=84)** And then what we need is we need to run it for books_authors and run it again and we have the mapping available.
>
> **[1:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=94)** Great, now, a very simple query could be we want to know, given an author name what all books they have authored.
>
> **[1:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=103)** So, which means that we will need to work with all the three tables, books, authors and book_authors because the data is spread around these three tables.
>
> **[1:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=111)** So, I'm going to write a query for that.
>
> **[1:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=113)** I would say select b.star, which where will be books.
>
> **[1:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=118)** I'm going to write that and a.name as author_name and from books.
>
> **[2:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=131)** So, we are taking the majority of information from books and now we are going to join on books_authors.
>
> **[2:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=142)** I'm going to call this ba on b.book_id which equals to ba.book_id.
>
> **[2:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=154)** And then I'm also going to join authors, woops, join authors a, and this a comes here, authors a and I'm say on ba.author_id
>
> **[2:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=173)** is Equals to a.author_id.
>
> **[2:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=178)** And then we need to find out which author we are talking here.
>
> **[3:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=181)** We'll say where a.name is equals to Steve Wozniak.
>
> **[3:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=187)** And then I'm going to run this query now and let's see what we get.
>
> **[3:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=193)** Okay, so I have a typo here.
>
> **[3:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=195)** So, this is what the book says, and as I run, I'm getting, oh, because I forgot B here.
>
> **[3:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=203)** And then as I hit run again, we got all the books authored by Steve Wozniak and the name of the author is right here.
>
> **[3:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=212)** And if I change it to some other author, let's say Sundar Pichai, and run it again, we got different set of books authored by Sundar Pichai.
>
> **[3:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=222)** Now, all these books that we have created in this dataset are fabricated, which means they're not original books, but we wanted to showcase the ability, if you have a dataset like this in a CSG file and you spread it around into different tables, how you would write the queries.
>
> **[4:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=240)** Great so, we have identified that the data seems correct in this case, so, all good.
>
> **[4:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=248)** So, we are now going to now keep starting our database setup from scratch.
>
> **[4:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=253)** We'll keep it as is because we have most data available.
>
> **[4:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=257)** So, let's go back and look into the books table once more.
>
> **[4:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=260)** So, we'll say star from books and then run it.
>
> **[4:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=266)** Now, as you can see, since we were starting the database from scratch, we have lost our column for search index.
>
> **[4:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=274)** So, let's go ahead and add that on books.
>
> **[4:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=277)** So, we are going to add the ALTER TABLE on books and add the search_vector tsvector.
>
> **[4:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=284)** So, we've got that.
>
> **[4:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=287)** And once we have the vector column available, we need to update our search_vector based on the query that we saw before.
>
> **[4:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=297)** So, I'm going to run that.
>
> **[4:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=298)** So, it takes a bit of time and now it's ready.
>
> **[5:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=302)** So, we can see that for the first 10 columns.
>
> **[5:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=305)** And as you can see now our search_vector is ready.
>
> **[5:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/validating-data-integrity?u=76281980&t=309)** Fantastic, so, now that our database is set up with the right set of books downloaded from GitHub gist and our search index is ready, we are ready to go onto the next step where we are going to write functions in Java to fetch the data based on the user queries.

> [!info]- Semantic Content
>
> **Code Identifiers:** books_authors (3), search_vector (3), book_id (2), author_id (2), pgadmin (1)
> **Code Keywords:** let (4), this, (2), finally, (1), case, (1)
> **Env Vars:** csg (1), alter (1), table (1)
> **Definitions:** means that (2)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** find (1)
> **SQL:** alter table (1)
> **Tools:** github (1)


### 5. Implementing Business Logic and Writing Tests

#### Introduction to business logic
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=0)** - [Instructor] Now we have three tables: Books, Authors, and BooksAuthors, and we need a way where user can ask queries and we can return the relevant information back to the users.
>
> **[0:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=12)** So how do we do that?
>
> **[0:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=13)** Shall we hand over the database access directly to them?
>
> **[0:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=17)** That is not often ideal, because first of all, you want to create an abstraction between what user asks and how that information is given to them.
>
> **[0:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=26)** So consider this example only for the books at the moment.
>
> **[0:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=31)** You want people to be able to search for books given a search term.
>
> **[0:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=37)** Now, you need to define what that query may look like, and you need to create that query.
>
> **[0:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=43)** Query it from the database, and then return the results back to the user.
>
> **[0:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=47)** So whatever I've talked is a set of procedure that we need to write, and that set of procedure sits between the user query and how to get the data specific to that user query.
>
> **[0:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=58)** And that's business logic.
>
> **[1:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=60)** The business logic is a way of saying, given a specific user input, you need to sanitize or make sure that the user input is correct before going and doing the work of identifying what needs to be done to that query.
>
> **[1:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=75)** And whatever is the output of that query, you send it back to the user.
>
> **[1:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=80)** So whenever you abstract the access to your database and internal infrastructure from the user queries, and that's what essentially business logic is.
>
> **[1:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=89)** Now, if you're focusing purely on the books we have, if I zoom out little bit, we have a table for books where this is a simplification, but we have ID and the book title.
>
> **[1:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=100)** So far, we have the table.
>
> **[1:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=102)** But what we need to do is to create the entity using spring data where each entity maps to a specific record in the database table.
>
> **[1:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=113)** And then we need to abstract the concept of entity into a repository where repository maps to the set of rows or all the rows in a specific table.
>
> **[2:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=123)** So, so far, the way we have interacted with the database, we have not made use of spring data.
>
> **[2:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=130)** We have not created any entity or any repository, and this is essential in order to write the business logic.
>
> **[2:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/introduction-to-business-logic?u=76281980&t=136)** So in the next video, we'll start writing the entity repository and we'll create the test to make sure that our code is able to access the database that is running inside the Docker container.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), docker (1)
> **Definitions:** is a  (3)
> **Code Keywords:** abstract (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Developing business logic functions
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=0)** - [Instructor] I'm back in VS Code now, and the first thing I will do is open pom.xml.
>
> **[0:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=4)** And we need to add the dependency for Spring Boot Data JPA, which I've done right now.
>
> **[0:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=11)** And I will make sure that all the code compiles correctly.
>
> **[0:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=19)** And as I hit run, everything is working fine.
>
> **[0:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=22)** Now I will go back to the src, main, this is the package com.h2, and I'm going to create two directories.
>
> **[0:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=30)** The first one is to hold the entity.
>
> **[0:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=33)** The second one is to hold the repository.
>
> **[0:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=38)** And we'll work with the two at the moment.
>
> **[0:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=41)** So I will create a new file called Book.java, and this is where we are going to map to entity books.
>
> **[0:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=51)** And I'm going to call it entity, so it added the import automatically.
>
> **[0:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=57)** And the second is we need to add it to the Table.
>
> **[1:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=61)** And it's taking the name Book, but we know that table name is books, so I'm going to take that.
>
> **[1:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=66)** Now we know that there were a lot of fields in the book, so I'm going to copy and paste to save time.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=73)** And I'm going to fix certain imports.
>
> **[1:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=75)** But the idea is that our bookID is the primary ID.
>
> **[1:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=79)** And the GenerationType is IDENTITY.
>
> **[1:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=82)** And we are going to import the java.sql Date.
>
> **[1:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=86)** And we also have the searchVector, which maps to the column search_vector.
>
> **[1:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=91)** And the columnDefinition is tsvector.
>
> **[1:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=94)** This should not be new to you.
>
> **[1:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=95)** We have already looked into the specific videos in the past, where we have gone through the details of each one of those.
>
> **[1:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=101)** Now that we have all the getters, I'm going to leverage GitHub Copilot to help us write all the getter methods.
>
> **[1:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=110)** So I'm going to do Cmd + I as a shortcut, and I will write, create getter methods for all fields.
>
> **[2:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=120)** And as I hit Enter, GitHub Copilot in a few moments will start creating all the getter methods for every field that we have.
>
> **[2:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=130)** All I need to do here is to click Accept, and we have the entity up and running.
>
> **[2:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=134)** One thing that I also want to do is to override toString.
>
> **[2:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=143)** And then as I hit Enter, it is creating the toString methods so that when we log anything on the terminal, we get all the information here.
>
> **[2:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=154)** I will accept and remove the searchVector because this is not something I would be looking into.
>
> **[2:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=159)** So this is all we have.
>
> **[2:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=161)** So we have the entity ready.
>
> **[2:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=163)** So going back to the diagram, we have the entity, now we need to create the repository that uses this entity.
>
> **[2:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=171)** So as a next step, I'm going to right-click on repository, New File, and this is BookRepository.java.
>
> **[3:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=183)** And this is not the class.
>
> **[3:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=184)** This is the interface that will extend the JpaRepository, and it has a type of Book, which is our entity, with the Long, which represents the ID in our system.
>
> **[3:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=204)** And with that, we have a repository that maps to the entity.
>
> **[3:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=208)** And within this repository, we are going to introduce a function that will search for the books.
>
> **[3:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=214)** So I will write list of book, and GitHub Copilot is giving a suggestion that I don't need right now.
>
> **[3:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=222)** I need searchBooks.
>
> **[3:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=224)** And it's taking the method here and the parameter, but I need the (@Param("searchTerm") String searchTerm).
>
> **[3:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=232)** And I'm going to import the List, java.util.List.
>
> **[3:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=237)** And since the searchBooks is making use of the tsvector, we are going to embed the query that we have used in the past.
>
> **[4:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=245)** So I'm going to hit Tab, and then in the value, it is giving me a template for the query that I should use, and this seems like what we have written in the past, so I'm going to hit Tab.
>
> **[4:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=260)** Then there is a nativeQuery.
>
> **[4:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=262)** This is a nativeQuery because we are going to translate this into Postgres raw query and that is what is going to execute when being called.
>
> **[4:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=272)** So, so far so good.
>
> **[4:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=274)** So what we have right now is we have entity and we have repository.
>
> **[4:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=277)** So, all good so far.
>
> **[4:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=279)** So with that, we have created a system wherein we can interact with our database.
>
> **[4:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-business-logic-functions?u=76281980&t=285)** There is one final thing that is missing, and I will cover that in the next video when we are going to execute the test, so I'll see you there.

> [!info]- Semantic Content
>
> **Code Identifiers:** searchvector (2), tostring (2), searchbooks (2), searchterm (2), nativequery (2)
> **Tools:** github (3), vs code (1), terminal (1)
> **File Paths:** pom.xml (1), book.java (1), java.sql (1), bookrepository.java (1)
> **Code Keywords:** override (1), class. (1), interface (1), function (1)
> **Env Vars:** jpa (1), identity (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### Writing unit tests
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=0)** - [Instructor] We have the entity and we have repository and according to us this should work.
>
> **[0:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=5)** But how do we validate that this indeed is working?
>
> **[0:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=9)** And this is where the idea of testing shines.
>
> **[0:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=12)** Testing is a way to ensure that as a developer, whatever code I'm writing and I'm responsible for, I have an automated way of verifying that the code executes as expected and it returns the results as desired.
>
> **[0:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=26)** So far, we have created the entity and the repository and just by saying this should work doesn't matter, because when it is deployed in the production, we must make sure that this is the correct code.
>
> **[0:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=38)** So what I will do now is I will write a first test for the repository.
>
> **[0:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=43)** We don't need to write the test for the entity because it'll be mostly mocking.
>
> **[0:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=47)** So I want to write the real test that connects with the database, and the book repository is the first place we can do that because we have a meaningful business logic for searchBooks that executes a valid SQL query given a search term.
>
> **[1:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=62)** So in order to do that, I'm going to do a right-click and then says Go to Test.
>
> **[1:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=67)** And there is a window that pops up that says Search files and Generate test.
>
> **[1:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=72)** I'm going to click Generate test because I know I have not written any test so far.
>
> **[1:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=76)** I click here and then it matches the same structure that we have here, which is com.h2.repository.
>
> **[1:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=84)** And then it says BookRepositoryTest, but it is not going to add it in the same src main java, instead it'll put it under src test java.
>
> **[1:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=93)** So you will see in just a moment as I hit Enter.
>
> **[1:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=97)** As I hit Enter, it asks for one more thing that what all methods you would like to test.
>
> **[1:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=102)** Since we have just searchBooks, I'm going to select all and then click OK.
>
> **[1:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=107)** So on the left, as you can see, this came in test directory, java com h2 repository, BookRepositoryTest.
>
> **[1:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=116)** So now that we have the book repository test, we need to ensure that this function is going to connect with the database and will validate that it is able to fetch the books from the collection based on the query.
>
> **[2:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=130)** Since we are testing it at the spring data layer, the first annotation I need is DataJpaTest.
>
> **[2:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=137)** I will hit the Tab, and the import automatically is added.
>
> **[2:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=142)** The second thing that we need is we need to auto-wire the bean.
>
> **[2:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=147)** Auto-wire the bean for the BookRepository.
>
> **[2:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=153)** Copilot is giving the solution.
>
> **[2:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=154)** I'll hit Tab, and I will accept it.
>
> **[2:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=156)** So I have that, and it says that we are not even using it right now, but that is not an issue.
>
> **[2:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=162)** We are just now going to write a test that can test all the books.
>
> **[2:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=166)** So now what we are going to do is List<Books> and I'm hitting Tab and it is calling the searchBooks for search term java.
>
> **[2:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=177)** I'm going to fix the imports.
>
> **[3:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=180)** So we are taking the util.List and the book is coming from the entity.
>
> **[3:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=185)** So I'm going to change the query term to algorithms because this is what we have been using so far.
>
> **[3:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=192)** And then how do we ensure that we do get the test?
>
> **[3:17](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=197)** So just by printing is not going to help because in the case of test, you validate by writing assert statements.
>
> **[3:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=203)** So I'm going to say assertTrue that book size is greater than zero.
>
> **[3:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=208)** And the reason I'm testing that is because I don't know how many books for algorithms exist in that table, but I do know that some exist.
>
> **[3:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=216)** So the size should be at least greater than zero.
>
> **[3:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=218)** What we can also do is you can print the books found on the console, and I can do that by saying System.out.println, and I will say book title is this.
>
> **[3:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=230)** And then I'm going to add these three arrows to ensure that it catches the highlight on the terminal.
>
> **[3:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=237)** Now, the two things that we still need to do, first thing is we have not specified where our database is and we don't want to hard-code it either.
>
> **[4:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=247)** Now, since we are going to run the test, we need to create a properties file and test directory under resources folders.
>
> **[4:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=256)** So this is resources and the file name is application.properties.
>
> **[4:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=266)** And within this application.properties we need to specify a few properties that I've pasted it here, but I will explain what they're doing.
>
> **[4:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=273)** The first one is the datasource.url, which means where our database is, along with the user ID and password and which driver we are using.
>
> **[4:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=281)** So we are using Postgres driver.
>
> **[4:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=283)** Now for JPA, what we are saying is that, when we are using the SQL dialect, we are using the Postgres SQL dialect, we are telling Hibernate to not run any DDL scripts, which means do not create any table because we've already done so.
>
> **[4:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=298)** And the third one, it says either show the SQL on the console or not.
>
> **[5:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=302)** It's false right now, but I can change it to true.
>
> **[5:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=305)** With that, when our test runs because of the DataJpaTest, it'll make sure that it reads the application properties under the test resources file, and this will allow it to connect to the database.
>
> **[5:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=318)** Now there's one final piece, but let's run it first in order to identify what we are missing, and then we will connect to it.
>
> **[5:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=325)** So first thing is I will run mvn clean test.
>
> **[5:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=330)** This will also make sure that the code compiles successfully.
>
> **[5:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=334)** So it's hanging somewhere here and we are not sure where.
>
> **[5:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=339)** So it failed, and let's say why it failed.
>
> **[5:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=342)** So it fails because it's saying IllegalStateException, failed to replace the DataSource with an embedded database for tests.
>
> **[5:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=350)** So by default in the test, Spring Data looks for the embedded database like in-memory S2 database.
>
> **[5:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=357)** But since we are connecting directly with the actual database, we need to tell it to not use the embedded database.
>
> **[6:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=364)** And the way to do that is at the top of the test, we will say AutoConfigTestDatabase, and then we say replace to NONE, which means do not use the embedded database.
>
> **[6:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=379)** We have already provided that in the application.properties.
>
> **[6:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=382)** Please use that.
>
> **[6:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=383)** With that, I'm going to clean the screen and we are going to run the script again and see if that works.
>
> **[6:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=390)** And within few moments, yes it did work.
>
> **[6:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=392)** So we had one test that is running, and as you can see we've got all the books that have word algorithms in it, and there are a lot of them.
>
> **[6:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=404)** More than I can count.
>
> **[6:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=406)** And I will hide this print statement and we will run it again to see if we can see the SQL query that is being run on the console.
>
> **[6:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=416)** So as you can see here, it's connecting, and here is our query.
>
> **[7:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=426)** So it's running the Hibernate SELECT statement that we put on the BookRepository.
>
> **[7:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=434)** Great.
>
> **[7:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=435)** So what we've done so far is that we have validated that every entity and the repository code that we have written, we have an associated automated test to ensure that our business logic is indeed working.
>
> **[7:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=447)** Great progress.
>
> **[7:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=448)** So now there is one final step and we are getting closer to the part where we can create the APIs and take in the user queries.
>
> **[7:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-unit-tests?u=76281980&t=456)** So I will see you next, and we will make progress there.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), jpa (1), ddl (1), none (1), select (1)
> **Code Keywords:** let (2), for, (1), function (1), assert (1), this. (1)
> **CLI Commands:** make (4), mvn (1)
> **Code Identifiers:** searchbooks (3), asserttrue (1)
> **UI Navigation:** right-click (1), go to (1)
> **Definitions:** is a  (2)
> **SQL:** select (1)
> **Tools:** terminal (1)


### 6. Designing and Creating APIs

#### Developing the service layer
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=0)** - Now that we have built our entity and repository that can access the database, we still need a good, clean API design so that the details of our repository or what persistence layer we are using are not exposed to our consumers.
>
> **[0:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=16)** So, before we get onto the RESTful API, we need one level of abstraction.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=21)** So, what we are going to do is we are going to create a service layer, and this service layer is going to connect with the repository layer.
>
> **[0:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=32)** Now, there are many benefits of having the service layer in the API.
>
> **[0:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=36)** First, it abstracts away what the persistence mechanism are we using.
>
> **[0:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=41)** So today, you might be using relational database, but tomorrow you might be going on NoSQL database such as MongoDB.
>
> **[0:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=47)** The other benefit it provides, it gives you an opportunity so that the details of your database objects either one specific record, or if you want to merge the information from two different tables.
>
> **[1:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=62)** All of this is possible in the service layer because repository layer only access one table.
>
> **[1:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=67)** But at the service layer you can connect to multiple tables, merge the results and send it back so you get that opportunity.
>
> **[1:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=75)** And the third and final thing that I see as a benefit is it sanitizes the user input.
>
> **[1:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=80)** So, as you mentioned, that we are building it for users, and users are going to send any information that they like, we would want to take an opportunity in the service layer to ensure that the search term is correct, because if the search term is not correct, what's the point of going all the way to repository and accessing the database?
>
> **[1:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=99)** It's a waste of time and resources.
>
> **[1:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=101)** So, before we jump onto building the RESTful API, let's build the service layer first.
>
> **[1:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=106)** I am back into the code base right now, and we already have the entity in the repository layer.
>
> **[1:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=112)** So, I'm going to create a new folder called Service, and I'm going to create a new file here called BookService.Java.
>
> **[2:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=125)** Now, this is a class, and the first thing that we are going to annotate it with, we are going to call it as Service.
>
> **[2:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=132)** And then, we need to wire the bean.
>
> **[2:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=135)** So, we'll use the Autowired annotation, and we are going to have the bean wired for book repository.
>
> **[2:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=144)** And now, you may have seen that I'm using more and more GitHub Copilot to do the code complete so that I can talk more, explain a bit better.
>
> **[2:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=152)** And the productivity that I'm getting with GitHub Copilot is also accurate.
>
> **[2:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=157)** So, I'm going to import the book repository here.
>
> **[2:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=160)** And the function that we need here is called public list of book.
>
> **[2:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=168)** And we need it for search, so searchBooks.
>
> **[2:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=172)** And it says that you need the keyword, and you call the BookRepository, and you return the searchBooks, whatever information that you get.
>
> **[3:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=183)** So, let me just first import the necessary classes.
>
> **[3:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=187)** So, I got this one, I'm going to rename this to search term 'cause that's the term I like the most.
>
> **[3:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=195)** And as I mentioned that one of the opportunity you get, is if this search term is sent by the user, you may want to validate if it's correct.
>
> **[3:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=203)** So, I'm going to say if.
>
> **[3:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=204)** And see, GitHub Copilot saying is if do you want to do this thing?
>
> **[3:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=208)** Do you want to check for the null and the empty?
>
> **[3:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=210)** I will say yes, this is what I want to do, but I don't want to do a exhaustive search, I don't want to return all the books, rather I want to throw the error.
>
> **[3:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=220)** So, as I type throw, it changed its suggestion, and it said, "Okay, so you want to throw the illegal argument exception that it cannot be empty," and I will say yes, and I need to close the code block.
>
> **[3:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=234)** And now, our code is ready.
>
> **[3:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=236)** So like before, how do we know it's working?
>
> **[3:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=239)** So, we are going to create the test.
>
> **[4:02](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=242)** So, I'm going to do Go to Test, and then Generate test.
>
> **[4:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=248)** And we are going to do it on the same path, but under the test directory, I will hit Enter and I will say searchBooks.
>
> **[4:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=256)** So, it already created some stubs, so first thing that we need to do is we need to tell that this is a SpringBootTest, and it imported the necessary classes.
>
> **[4:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=268)** And the other thing that we need to do, is first, we need to Autowire.
>
> **[4:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=274)** But in this case, we are going to Autowire the service which GitHub Copilot exactly got it.
>
> **[4:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=279)** We don't need the repository, we are abstracting away from repository and going to the service layer.
>
> **[4:44](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=284)** So, we need the BookService.
>
> **[4:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=287)** So, I'm going to change the names so that GitHub Copilot can help me write the test.
>
> **[4:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=292)** testSearchBooks is not exactly demonstrating what use case.
>
> **[4:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=297)** So, I'm going to say when term is empty.
>
> **[5:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=303)** And as I hit Enter, let's see what it has to say, searchTerm, it took the empty string.
>
> **[5:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=311)** And now, it's saying that when you will make a call to searchBooks, you're expecting the illegal argument exception, and this is exactly what I am expecting.
>
> **[5:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=323)** So, I took the necessary report, and that's it!
>
> **[5:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=327)** And we are going to write one more test.
>
> **[5:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=329)** So, GitHub Copilot is helping me out on that, and it's writing the second test case for null.
>
> **[5:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=336)** And the third test case, it is saying, I don't want to do it for the blank, so let's do when the search term is valid.
>
> **[5:45](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=345)** When the search term is valid.
>
> **[5:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=351)** So, in this case, it took the keyword Spring, and I'm going to change it to algorithms, and I'm going to take this into List of book, books.
>
> **[6:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=364)** And I need to have the necessary imports here, so I need a Java (indistinct) and I need this entity.
>
> **[6:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=371)** And now, we need to assert some things.
>
> **[6:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=373)** So, we will say assertTrue that books.size is greater than 0.
>
> **[6:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=380)** This is based on one of the previous tests that we did, but now we are doing it at the service layer.
>
> **[6:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=386)** So, now that we have our service layer code, which abstracts away the repository.
>
> **[6:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=391)** See, because the repositories here, in our test, we are only dealing with a BookService, we don't know what repository we are using.
>
> **[6:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=399)** And then, it also helps us sanitize or validate the search term before it sends the query to the repository.
>
> **[6:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=407)** Now, we have three test.
>
> **[6:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=409)** Now, the moment of truth, we need to go ahead and test it out, so I'm going to type MVN clean test.
>
> **[6:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=419)** And within few moments, all our tests should pass.
>
> **[7:03](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=423)** If not, we'll figure out what's going on.
>
> **[7:05](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=425)** Yep, it passed.
>
> **[7:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=427)** But how do I know if it is working?
>
> **[7:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=429)** So, I'm going to change it to equals 0 just to make it fail.
>
> **[7:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=436)** This will help us assert that this test class is indeed executing.
>
> **[7:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=441)** So, it failed.
>
> **[7:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=442)** So, which means, our test class is indeed executing, I'm going to change it and run it once again so that we ensure that all the tests in this code base are passing.
>
> **[7:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=452)** And this is a way as a developer to verify and communicate that the code is working as expected.
>
> **[7:40](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=460)** Alright, so now this is done, we are good.
>
> **[7:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=462)** So, going back to the example that we started with, we have successfully created the service layer.
>
> **[7:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=467)** Now, the final thing is we need to create the REST API that interacts with the service layer next.
>
> **[7:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/developing-the-service-layer?u=76281980&t=472)** So, let's go ahead and create that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), throw (3), case, (3), assert (2), class, (1)
> **Code Identifiers:** searchbooks (4), testsearchbooks (1), searchterm (1), asserttrue (1)
> **Env Vars:** api (5), mvn (1), rest (1)
> **Tools:** github (6)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (2), mvn (1)
> **File Paths:** bookservice.java (1)
> **Cross-References:** in the next (1)

#### Implementing the book search API
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=0)** - [Instructor] So we are almost there, and we have our user sitting here, and they need to connect with an API, a RESTful API, to search for the books.
>
> **[0:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=10)** So in this piece, what we are going to do, we are going to create a controller layer that defines the RESTful API.
>
> **[0:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=18)** And this controller layer is going to talk to the service layer.
>
> **[0:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=22)** So when user is going to interact with our API, they will connect with the controller layer.
>
> **[0:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=29)** The controller layer is going to pass the information to service layer.
>
> **[0:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=32)** Service layer is going to verify, sanitize the input, search from the database, take the result and give it back to the controller, which goes back to the user.
>
> **[0:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=42)** All right, with that, I will go back to the code base.
>
> **[0:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=47)** And now I'm going to create a new folder called controller.
>
> **[0:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=52)** And within this, I'm going to create my first file, which is BookController.java.
>
> **[0:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=59)** Now this is a class, and the first thing that I need to mention is that this is a RestController.
>
> **[1:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=66)** And once I do that, I also need to tell what endpoint this will expose.
>
> **[1:13](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=73)** So this is going to be provided by RequestMapping and using books.
>
> **[1:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=78)** I'm using the suggestion from GitHub Copilot.
>
> **[1:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=82)** And first I will do the auto wiring.
>
> **[1:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=86)** So I will do this for the BookService.
>
> **[1:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=88)** So now our controller is only going to talk to the service and not repository.
>
> **[1:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=94)** I'm going to add the import here.
>
> **[1:36](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=96)** And now I need the RequestMapping, or I need a GetMapping for search of the books.
>
> **[1:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=107)** So this is the search endpoint under books that our users are going to utilize.
>
> **[1:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=113)** So I will say public list of Book, searchBooks,
>
> **[2:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=121)** and all we are doing is we are calling the BookService and searchBooks.
>
> **[2:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=126)** But before that we need the search term that we can pass in.
>
> **[2:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=130)** First I will import all the necessary classes, and then I also need a RequestParam.
>
> **[2:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=138)** So we are taking this in the RequestParam rather than the body, so RequestParam.
>
> **[2:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=145)** And I would say that this is String searchTerm, and I'm going to import this class as well and pass the searchTerm here.
>
> **[2:35](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=155)** And with that, our search endpoint is ready.
>
> **[2:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=158)** So when the user goes to /books/search?searchTerm and provide the value, this is where the code will be executed.
>
> **[2:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=167)** But we still need to write the test before we can look at from the user's perspective that this is going to work.
>
> **[2:53](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=173)** So I'm going to create a new test.
>
> **[2:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=176)** So, Go to Test, Generate, Enter, and then yes, searchBooks is where we need.
>
> **[3:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=184)** So first thing we need to mention that this is a SpringBootTest.
>
> **[3:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=189)** And then we also need to mention one more thing, which is that we are using the webEnvironment and when the server start it, can assign any random port.
>
> **[3:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=200)** With that, the first thing that we need is, in order to test as the user in an automated fashion, is we need a TestRestTemplate.
>
> **[3:30](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=210)** So I'm going to get that here first.
>
> **[3:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=213)** And private TestRestTemplate.
>
> **[3:37](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=217)** This is what we are going to use to make calls as the user.
>
> **[3:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=222)** Now that I have it here, or I'm going to write the implementation for this testSearchBooks.
>
> **[3:47](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=227)** So first is my searchTerm, searchTerm is algorithms.
>
> **[3:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=236)** And then what we need to do is we need to call the restTemplate.getForEntity, and I'm going to say, /books/search?searchTerm={searchTerm},
>
> **[4:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=258)** that we are going to provide.
>
> **[4:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=260)** Now the responseType is going to be a Book array, not the list, because this is crossing the wire.
>
> **[4:27](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=267)** So this is going to be the Book class, and we are going to pass the searchTerm.
>
> **[4:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=272)** Now let me keep this in the list.
>
> **[4:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=281)** Let me make this a little bit bigger.
>
> **[4:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=283)** So what we need to do is we need to take the response into a variable.
>
> **[4:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=288)** So we'll take that as the response.
>
> **[4:55](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=295)** And now that we have the response, we can start doing the assert.
>
> **[4:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=298)** So first thing is we are going to get all the books from the response, and then we will assert that the books are not null.
>
> **[5:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=306)** And let me take the import, and then we are going to do assertTrue, and then that the books.length is greater than 0, and take that import as well.
>
> **[5:18](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=318)** Now in order to make sure that we do get the response back, let me also print all the searched books on the console.
>
> **[5:26](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=326)** So I will do System.out.println, and run this.
>
> **[5:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=331)** Fantastic. So two things that we did.
>
> **[5:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=334)** We created our controller layer, which will define the entry point for the user query.
>
> **[5:38](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=338)** And then we wrote a test that will start the server on the random port and will test for searchTerm calling algorithms.
>
> **[5:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=346)** Now let's go ahead and run the test.
>
> **[5:52](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=352)** Okay, so it says build succeeded, test passed, which means our test is passing.
>
> **[5:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=356)** Let's go ahead and see if we got the books.
>
> **[5:59](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=359)** So as you can see, we get a lot of books, and we are getting each and every information about the book.
>
> **[6:06](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=366)** It's because we added the override for toString.
>
> **[6:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=370)** So we get all this information. Great.
>
> **[6:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=372)** So with that, we have successfully created our RESTful API to search the books that connects to the database and comes back as the result.
>
> **[6:24](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=384)** Now there's one final piece that I would like to show is, how can you start the server and hit the API endpoint and see the results?
>
> **[6:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/implementing-the-book-search-api?u=76281980&t=393)** So I will show you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (4), class, (2), assert (2), this, (1)
> **Code Identifiers:** searchterm (9), searchbooks (3), webenvironment (1), testsearchbooks (1), resttemplate (1)
> **Env Vars:** api (6)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** bookcontroller.java (1)
> **Tools:** github (1)

#### Writing integration tests
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=0)** - [Instructor] All right, so the whole point of building this entire project is so that you can run the server and your users can interact with it.
>
> **[0:08](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=8)** But so far, we have written all this code and haven't started the server even once.
>
> **[0:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=14)** Now let's do that now.
>
> **[0:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=16)** And to give you some idea, it'll fail first, and I want that to fail so that I can give you idea on why this is failing.
>
> **[0:23](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=23)** So that in future, if you see some issues like that, you will know why that would have happened.
>
> **[0:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=28)** So I'm going to run the mvn spring-boot:run command and I'm expecting that this will work and it is trying to run at the moment, it is trying to bring up the server, but it failed.
>
> **[0:42](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=42)** It failed because it is trying to find the data source which it can connect to and it could not find one.
>
> **[0:51](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=51)** The question is why is it the case that it was not able to find the data source?
>
> **[0:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=56)** I mean, we are running all our tests and everything is working fine.
>
> **[1:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=60)** So turns out when we were running it on the test side, we provided it with a file called test resources, application_properties that contain everything.
>
> **[1:10](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=70)** But it was only working in the context of test and not domain application.
>
> **[1:15](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=75)** So what we need to do is we need to create the same file, and I'm going to call it resources, and copy this file to src main resources as well.
>
> **[1:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=89)** So that is first thing.
>
> **[1:31](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=91)** The second thing is when we start our application, our application is bundled as a JAR file and then deployed on a server, which means the Spring Boot application needs to have all the information baked into one JAR file so that it can find everything before it starts the server.
>
> **[1:49](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=109)** For that, there is one final piece that we need to do, is we need to add the plugin for Spring Boot.
>
> **[1:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=116)** I'm just adding it here now.
>
> **[1:57](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=117)** So in the build process, we are adding the Spring Boot Maven Plugin, which will ensure that when the server starts, it has all the information available to start the server, which means it'll be able to collect information from application properties and start the server and run it.
>
> **[2:14](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=134)** Now with these two things, if we compile the package and run it again, it should work.
>
> **[2:20](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=140)** So let's try it out.
>
> **[2:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=141)** So I'm going to mvn clean install.
>
> **[2:25](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=145)** So we'll first make sure everything works and the package is created successfully.
>
> **[2:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=152)** And that worked.
>
> **[2:33](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=153)** And then we are going to run the same command again.
>
> **[2:34](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=154)** I'm going to clean the screen and start again.
>
> **[2:39](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=159)** So now our server is running, as you can see on this line, it says started on port 8080.
>
> **[2:46](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=166)** So at this point in time, our server is running.
>
> **[2:48](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=168)** So let's go to the browser and test it out.
>
> **[2:50](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=170)** So I'm going to open localhost:8080 and our initial endpoint was hello controller that we wrote when we were starting the project.
>
> **[2:58](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=178)** It is still working, and that is a good testament on the server running and giving us the response.
>
> **[3:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=184)** Now let's go back and add the search.
>
> **[3:07](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=187)** So under the books, we need search term and the search term is algorithms here, exactly how we wrote it in the test.
>
> **[3:16](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=196)** So let me hit Enter.
>
> **[3:19](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=199)** And see, we have a lot of information available here.
>
> **[3:22](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=202)** I will click on Pretty-print so that we can see the JSON-based data here for each and every book.
>
> **[3:28](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=208)** And as you can imagine, there are a lot of books here.
>
> **[3:32](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=212)** Now, when you want to communicate your API with your users, one very popular way is to do it by creating a collection on Postman and send it out.
>
> **[3:43](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=223)** So let me just take this URL, copy it, and let's go back to the Postman and I'm going to paste it here and hit Enter.
>
> **[3:54](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=234)** And we are going to get exactly same response here.
>
> **[3:56](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=236)** So what you can do is you can take this, you can save the request, for example, in a collection, and you can communicate this with your users that the new API for searching the books is now available.
>
> **[4:09](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=249)** So I hope that this was useful.
>
> **[4:11](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/writing-integration-tests?u=76281980&t=251)** Thank you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1)
> **CLI Commands:** find (4), mvn (2), make (1)
> **Env Vars:** jar (2), api (2), json (1), url (1)
> **Ports:** port 8080 (1), :8080 (1)
> **Tools:** postman (2)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** imagine (1), for example (1)
> **Code Identifiers:** application_properties (1)


### Conclusion

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=0)** - [Instructor] Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=1)** We successfully finished our course.
>
> **[0:04](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=4)** To remind, we started with the journey where user can search for the books in the database and along this journey we started with some nitty gritty details.
>
> **[0:12](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=12)** We started setting up the database in a Docker container, then we pulled the CSV files from the remote and inserted that in the database inside a Docker container.
>
> **[0:21](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=21)** We wrote the business logic and APIs and along each step, we ensured that each line of code that we are writing is correct by writing automated test.
>
> **[0:29](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=29)** I hope that you got the value of the time that you spent on this course and if you found this course useful, feel free to share it on LinkedIn with your extended network and let them know that they will find this course useful as well.
>
> **[0:41](https://www.linkedin.com/learning/creating-a-book-search-engine-from-scratch-using-java-and-github-copilot/conclusion?u=76281980&t=41)** Again, thank you very much for your time and I will see you in the future in some other course.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), find (1)
> **Code Keywords:** let (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Master GitHub Copilot]]
← [[Responsible GitHub Copilot- Creating Reliable Code Ethically]] | **6 of 8** | [[Refactoring with GitHub Copilot]] →

## Appears In

- [[Master GitHub Copilot]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub, GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Pair Programming with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Capstone- Building Production Features with Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Responsible AI Development with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
