---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: case-study-visualize-complex-microservice-data-using-python
url: "https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python"
duration_minutes: 85
duration: 1h 25m
level: Advanced
updated: 7/17/2023
learners: 30071
skills:
  - Python (Programming Language)
  - Microservices
exercise_files: true
github: "https://github.com/LinkedInLearning/case-study-visualize-complex-microservice-data-using-python-4400083/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHW6oJSW_gA6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694730089192?e=2147483647&amp;v=beta&amp;t=I3Mq81s-VQVXPkz21wG9r1pUodQ8EG0k3Q_EjcJ2Jtc"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
  - '[[Master Your Python Skills]]'
prev_courses:
  - '[[Python for Data Analysis- Solve Real-World Challenges]]'
  - '[[Level Up- Advanced Python]]'
next_courses:
  - '[[Level Up- Advanced Python]]'
  - null
path_nav: '[{"path":"Python Hands-On Practice","position":13,"total":14,"prev":"Python for Data Analysis- Solve Real-World Challenges","next":"Level Up- Advanced Python"},{"path":"Master Your Python Skills","position":11,"total":11,"prev":"Level Up- Advanced Python","next":null}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/microservices
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Case%20Study-%20Visualize%20Complex%20Microservice%20Data%20Using%20Python.md)

![Case Study: Visualize Complex Microservice Data Using Python](https://media.licdn.com/dms/image/v2/D4E0DAQHW6oJSW_gA6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694730089192?e=2147483647&amp;v=beta&amp;t=I3Mq81s-VQVXPkz21wG9r1pUodQ8EG0k3Q_EjcJ2Jtc)

# Case Study: Visualize Complex Microservice Data Using Python

> As a software engineer, your day-to-day duties can seem like an endless to-do list, so it’s often difficult to find the time to develop new skills to grow and advance your career. How do you make an impact with your organization while also completing your core work? In this course, Kathryn Hodge takes you through the process of coming up with an idea for an initiative, planning it, and then implem

> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python) | 1h 25m | Advanced | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Defining the Problem and Researching a Solution** (4 videos)
- **3. 2. Learning PlantUML** (4 videos)
- **4. 3. Planning for the Development** (3 videos)
- **5. 4. Building a Python Script to Convert Data into PlantUML Code** (9 videos)
- **6. 5. Going Above and Beyond** (4 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### How to make an impact in your organization as an engineer
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=0)** - [Kathryn] As a software engineer, it's easy to get caught up in the day-to-day, picking up user stories and addressing immediate needs.
>
> **[0:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=8)** But in order to grow your career, you must branch out and build tools that make an impact.
>
> **[0:14](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=14)** In this course, we'll walk through the process of coming up with an idea for an initiative, planning it, and then implementing the solution with your team.
>
> **[0:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=23)** At the end of the course, we'll discuss how to share these accomplishments with others through demos and leverage your relationships.
>
> **[0:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=31)** Hi, I'm Katheryn, and I'm a software engineer.
>
> **[0:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=33)** Whether you're an experienced engineer looking to expand your skillset or a junior engineer eager to make an impact, this course will provide you with the tools and knowledge you need to build tools that can make a real difference in your organization.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=49)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [kathryn] (1)

#### Why use Python to build automation simple tools?
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=0)** - [Software Engineer] Python is a great tool for task automation and data visualization because it allows you to do so much with little code.
>
> **[0:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=9)** There are also so many compatible libraries you can use to simplify tasks and it has extensive documentation with a great online community.
>
> **[0:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=20)** As a software engineer, it's often my language of choice for building simple automation tools because most engineers can read it, understand it, and make small contributions to it.
>
> **[0:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=32)** And it's not even the language I use in my day-to-day.
>
> **[0:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=36)** Most of the time I use Java or TypeScript to build and maintain platform APIs, but Python is great for automating small chore like tasks with little overhead, so I can write a small bit of code and get a lot out of it.
>
> **[0:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=52)** Depending on what you're automating and what challenge you're solving, it may not perfectly fit your needs, and that's okay.
>
> **[1:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=60)** Other languages exist for that exact reason, but most of the time Python is my language of choice for simple automation and we'll be using it in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [software (1)

#### Using GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=0)** - [Instructor] Before jumping into the course, there's a few logistics we should talk about.
>
> **[0:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=5)** We'll be using GitHub for the exercise files that'll go along with each video.
>
> **[0:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=11)** To access the code for a given video, you'll go to the appropriate branch in GitHub.
>
> **[0:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=17)** The format is chapter number underscore video number and then B or E, depending on whether the code is in the beginning state or ending state for that video.
>
> **[0:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=30)** For example, the starter code for the second video in chapter four will be found in 04_02B.
>
> **[0:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=39)** That stands for chapter four, video two, and B for beginning code.
>
> **[0:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=45)** The ending code for this video would be in branch 04_02E,
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=54)** where E is for ending.
>
> **[0:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=58)** By clicking the different branches.
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=59)** I can view the code online, which is great, but if you want to work with the code and run it, you have a few options.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=68)** One option is to go to the branch with the code you want and then download the Z file.
>
> **[1:14](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=74)** Then you'd have to download the dependencies to run that code.
>
> **[1:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=79)** This way is the old way of doing things.
>
> **[1:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=84)** Recently, a new way was introduced with GitHub Codespaces.
>
> **[1:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=89)** GitHub Codespaces is a cloud-powered environment built into GitHub that makes it easier for us to write code and not worry too much about the setup.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=99)** To set this code up in a GitHub Codespace, I'll fork it over to my own account and create my own version of it.
>
> **[1:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=107)** Let's fork it.
>
> **[1:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=109)** We'll fork over all of the branches, so we'll uncheck this box.
>
> **[1:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=116)** Now I have my own version of all the exercise files.
>
> **[2:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=122)** Let's open up a Codespace.
>
> **[2:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=125)** We'll go to 04_04B and open it up.
>
> **[2:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=131)** This is the beginning code for chapter four, video four.
>
> **[2:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=136)** To create a code space, I'll click the code button, code spaces, and create a code space on this branch.
>
> **[2:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=145)** Within our Codespace, a few things are already set up for you.
>
> **[2:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=150)** One is Python 3.
>
> **[2:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=152)** We can test it with python --version.
>
> **[2:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=158)** We have Python 10 installed.
>
> **[2:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=161)** Now this is running code from branch 04_04B.
>
> **[2:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=166)** If we ever want to make a change in this branch, we can do that right here in the virtual IDE.
>
> **[2:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=173)** We'd make our change and then commit it with source control.
>
> **[2:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=178)** We'll mostly be using code spaces in chapters four and five to write the implementation for the solution we design in earlier chapters.

> [!info]- Semantic Content
>
> **Tools:** github (6)
> **CLI Commands:** python (3), make (2)
> **Exercise Files:** exercise files (2), download the (2), starter code (1)
> **UI Navigation:** go to (3)
> **Code Keywords:** let (2)
> **Definitions:** stands for (1), is a  (1)
> **Prerequisites:** setup (1), set up (1)
> **Env Vars:** ide (1)


### 2. 1. Defining the Problem and Researching a Solution

#### What are microservices?
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=0)** - [Instructor] Microservices are a common architecture in modern software development.
>
> **[0:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=5)** They enable quick delivery of large and complex applications by breaking up the software into independent services.
>
> **[0:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=13)** Each service runs its own process and it communicates with the client using lightweight protocols.
>
> **[0:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=20)** Applications are built as a collection of smaller services, rather than one whole app.
>
> **[0:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=27)** Before, everything lived in one monolithic application.
>
> **[0:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=32)** If you think of a social network, imagine all the code regarding profile information, the social feed, discover page, login functionality, and more living in one code base.
>
> **[0:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=43)** Yikes.
>
> **[0:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=45)** If it all lived in one place, it would be much harder to scale because you'd have to scale the entire application, rather than just one component.
>
> **[0:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=55)** What happens if one feature breaks in a deployment?
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=59)** It could bring down the entire application.
>
> **[1:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=62)** If they were separated into independent services, then only that feature would go down.
>
> **[1:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=69)** With a monolith, development also becomes harder because components and layers become more tightly coupled.
>
> **[1:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=77)** Although developers might be using SOLID and OOP principles, it might become more tightly coupled just by living in the same code base.
>
> **[1:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=87)** The microservices architecture seeks to resolve some of these issues.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=92)** Instead of focusing on a full application, development teams can focus on specific components or services.
>
> **[1:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=100)** This means instead of having one application with the profile information, social feed, discover algorithm, it would be broken up into smaller, independent services.
>
> **[1:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=112)** This allows teams to concentrate on the development of their service without needing to coordinate with other teams, except for agreeing on how their components will interact.
>
> **[2:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=123)** It also provides more independence, because each microservice can be built on separate servers with whatever technology that makes sense for the problem at hand, not to mention the ability to scale individual features independently and have a higher availability due to everything being less coupled.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=143)** Now, monoliths did exist for a reason.
>
> **[2:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=146)** Big, complex applications weren't created overnight.
>
> **[2:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=150)** They took years and years of development.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=153)** 20 years ago, applications were less complex, and so everything could live in the same code base and there were no problems.
>
> **[2:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=161)** As applications have gotten more sophisticated, the need to break them down into separate independent services became more apparent as companies began to prioritize scaling, high availability, and component independence.
>
> **[2:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=176)** I challenge you to go online and search for some examples of the microservice architecture being used at large tech companies like Amazon and Netflix.
>
> **[3:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=187)** Start a discussion about what you find in the comments or in your next team meeting.

> [!info]- Semantic Content
>
> **Env Vars:** solid (1), oop (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Disadvantages of the microservice architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=0)** - [Instructor] While microservices can help increase availability, they do have a few disadvantages.
>
> **[0:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=7)** When everything is a separate service, communication with the other services happens over the network.
>
> **[0:14](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=14)** This adds some performance overhead due to network latency.
>
> **[0:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=19)** That communication between services will also need to be secure.
>
> **[0:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=24)** This means adding additional security in the messaging system that connects the services, whether that's through an HTTP protocol, or queue, or some other system.
>
> **[0:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=37)** In general, microservices can be hard to maintain without automation and advanced project management practices, such as agile.
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=48)** In order for microservices to be successful in an organization, a strong DevOps team must be in place that helps deploy and monitor the microservices.
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=59)** Microservices introduce all the complexities of a distributed system, so there has to be someone making sure all the independent services fit into place.
>
> **[1:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=70)** As a distributed system, microservices also make it more difficult to understand the life cycle of an application as a whole.
>
> **[1:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=79)** Even though teams are focused on their component, they should understand how their component is used end-to-end in order to create the best product.
>
> **[1:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=90)** Without understanding and debugging the full process end-to-end, it can be difficult to find bugs and resolve them.
>
> **[1:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=97)** Oftentimes, errors can go unnoticed.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=102)** That being said, no architecture style is perfect.
>
> **[1:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=106)** Everything has its pros and cons, so it's important to understand the implications of the architectural approach you take when building or maintaining an application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### How to solve for the challenges introduced by microservices
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=0)** - [Instructor] Being able to identify challenges is an important part of being a software engineer.
>
> **[0:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=6)** An even more important part is being influential in deciding when and how to solve them.
>
> **[0:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=12)** That's how you can create change in your organization.
>
> **[0:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=17)** Taking this approach when considering microservices, one of the challenges of microservices is that data is spread across many platforms.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=26)** This means it can be difficult to get a clear picture of the state of an account or a connection of accounts because you have to cross reference many different code bases and log sets.
>
> **[0:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=39)** Now, let's say, you find all the logs across the different log sets that give information for a specific account.
>
> **[0:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=46)** They probably aren't in an easy to read format.
>
> **[0:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=50)** Sure, they might be in JSON, but when you're looking at 10 different JSON files, trying to figure out how they're connected and what they represent, it gets difficult.
>
> **[1:01](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=61)** There are other challenges as well as we mentioned in the last video.
>
> **[1:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=66)** But in this course, we'll be focusing on this challenge.
>
> **[1:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=70)** How do we visualize data spread across many different platforms?
>
> **[1:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=75)** This isn't just a microservices problem, it's a distributed computing problem.
>
> **[1:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=80)** By nature, the work is distributed across multiple platforms, but there are times when you want to get a full picture of what's going on.
>
> **[1:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=91)** Something that might be useful is a diagnostic tool that combines and visualizes data from different microservices.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=99)** You could input in accounts identifiers and some authentication and it would output a diagram that visualizes the available data pieces across the entire distributed platform.
>
> **[1:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=111)** For example, let's imagine we work at a social media company.
>
> **[1:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=116)** There are several different microservices each with their own responsibility.
>
> **[2:01](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=121)** One manages profile information, another manages the social feed, there's one that manages the discover page.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=129)** Let's say there's a user that automatically got banned from the platform based on what they'd been posting to their account.
>
> **[2:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=138)** The user has over 25,000 followers and they want a manual review on their account activity.
>
> **[2:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=145)** As the social media company, we could just say, no, we aren't going to give a manual review and you're just banned.
>
> **[2:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=154)** But since the user has a substantial following, it appears to be worth the manual review.
>
> **[2:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=161)** After all, we do want popular creators on our platform.
>
> **[2:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=166)** So, let's say we do the manual review.
>
> **[2:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=170)** How are we going to do that in a microservices world.
>
> **[2:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=174)** Everything is so distributed and there are many reasons why it could've been banned.
>
> **[3:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=180)** The account could have been flagged automatically by an algorithm scanning content posted to the platform.
>
> **[3:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=187)** It could've also been reported manually by various users.
>
> **[3:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=191)** It could have been hacked and an unauthorized user could have posted content to the account.
>
> **[3:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=198)** This is the challenge we aim to solve in this course.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=201)** How do we solve it?
>
> **[3:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=204)** We'll create a diagnostic tool that allows you to feed in logs or live data and visualize the data of an account to figure out why it was banned.
>
> **[3:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=214)** It could also be used for other cases but this will be the primary case we'll solve for.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for. (1)
> **Analogies:** picture (2), for example (1), imagine (1)
> **Env Vars:** json (2)
> **Cross-References:** we mentioned (1), in the last (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### How to research and find a technology that will help solve technical problems
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=0)** - [Presenter] Knowing how to research different technologies and decide whether they can be used to solve a given problem is key in software development.
>
> **[0:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=9)** Not every technology fits every problem, but finding the right technology can help.
>
> **[0:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=17)** Our challenge is to create a diagnostic tool that allows us to visualize the data of an account.
>
> **[0:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=24)** The technologies we use to build this tool must be maintainable, easy to use, easy to understand, modern, and secure.
>
> **[0:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=33)** It's a tall order, but let's walk through it.
>
> **[0:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=37)** Maintainability.
>
> **[0:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=38)** It must be maintainable in the sense that it works with modern, commonly used languages.
>
> **[0:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=44)** Can you use it with Python?
>
> **[0:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=46)** Can you use it with Go?
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=48)** Is it deprecated?
>
> **[0:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=50)** Is it an actively maintained open-source project?
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=54)** Will it still work in a year?
>
> **[0:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=56)** Are you using the latest version of it?
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=59)** Anytime you introduce a new tool to your team, people will probably question it.
>
> **[1:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=65)** Is it secure?
>
> **[1:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=66)** Can new software engineers contribute to it and easily use it?
>
> **[1:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=71)** How hard is it to add a new feature?
>
> **[1:14](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=74)** A new tool means more complexity to the software that already exists today for your team.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=81)** It means new software to maintain and upkeep, which means it really has to provide a purpose in order for the team to actually follow through with using it.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=92)** Ideally, you're building it with a language the team already understands and the new component or new technology might be a library or a framework.
>
> **[1:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=104)** That way, they only have to learn one small component rather than a whole new genre of software development.
>
> **[1:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=113)** This means that how you build the tool and what technologies you use will likely depend on the team you're on and their skillset as well as your own.
>
> **[2:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=124)** The goal is to make the barrier to entry as low as possible.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=129)** How can you build something that's easy to maintain and easy to build, but still does the job you need it to do?
>
> **[2:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=137)** You don't want to add too much additional overhead to your team, but you still want to add value with this new thing you're building.
>
> **[2:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=145)** That's the mindset you have to have when deciding how to build your tool and what technologies to use to build it.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), make (1)
> **Code Keywords:** let (1)
> **Definitions:** means that (1)
> **Speakers:** - [presenter] (1)


### 3. 2. Learning PlantUML

#### What is PlantUML?
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=0)** - [Speaker] PlantUML is an open-source tool that helps you quickly create different types of diagrams, using a human readable language.
>
> **[0:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=9)** These could be sequence diagrams, class diagrams, component diagrams, and more.
>
> **[0:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=15)** With the sequence diagram, we could represent the different interactions between several services.
>
> **[0:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=22)** Let's say we wanted to show these interactions in PlantUML code.
>
> **[0:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=27)** It would look something like this.
>
> **[0:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=30)** We'd have start and end UML tags and then two participants, a client and a server.
>
> **[0:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=37)** The first interaction would be the client requesting data from the server.
>
> **[0:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=42)** Since the interaction starts with the client, we would have the client and then an arrow to the server.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=49)** The description for the interaction would be request for data.
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=54)** Then we'd have a second interaction for the response.
>
> **[0:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=58)** The response is sent by the server.
>
> **[1:01](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=61)** So it would start with the server and then go to the client.
>
> **[1:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=65)** The description would be response with data.
>
> **[1:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=69)** We do this again with a second request response pair where the client requests information and the server sends it.
>
> **[1:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=78)** This PlantUML code would generate a nice diagram, showing the interaction between the client and the server.
>
> **[1:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=86)** In fact, we can actually render this online with the PlantUML live editor.
>
> **[1:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=93)** We'll go to [PlantUML.com/PlantUMLUML](https://PlantUML.com/PlantUMLUML).
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=99)** Inside the editor, we'll paste our code.
>
> **[1:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=104)** Then we'll click submit.
>
> **[1:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=107)** Scrolling down, there's our diagram.
>
> **[1:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=110)** Now this is just one example of using PlantUML to generate diagrams, but there are so many different types of diagrams we can create based on different types of data, as we can see here.
>
> **[2:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=125)** Each type of diagram is also extensively customizable with robust documentation, allowing you to present information in just the way you want.
>
> **[2:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=136)** It's an option, as a tool, to display our microservice data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **UI Navigation:** go to (2)
> **URLs:** [plantuml.com](https://plantuml.com) (1)
> **Env Vars:** uml (1)
> **Definitions:** is an  (1)
> **Speakers:** - [speaker] (1)

#### Experiment with PlantUML
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=0)** - [Instructor] Before investing in a tool, it's important to experiment with it and see how easy it is to achieve the outcome you want.
>
> **[0:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=9)** Let's use it to visualize some microservice data.
>
> **[0:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=13)** Let's say our software platform contains three main microservices.
>
> **[0:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=19)** The first is a user profile service that's responsible for managing user profile information.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=26)** Then we'll have a posts management service that's responsible for managing, creating, deleting, and editing posts.
>
> **[0:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=35)** Lastly, we'll have a moderation service, which automates the review process for a post and determines whether or not it violated community guidelines.
>
> **[0:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=46)** Given the three microservices, we want to find out how a given account got banned.
>
> **[0:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=52)** We'll create a visualizer that shows us the activity of the account and will manually verify if this account deserves to be banned.
>
> **[1:01](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=61)** The first step to visualizing this would be to visualize the profile data using a node.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=68)** We can create a node with the keyword object and then use the name of the node to add information onto it.
>
> **[1:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=76)** Let's paste this in to our PlantUML editor.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=81)** Here, the account username is Blondiebytes.
>
> **[1:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=85)** And we have data associated with the account.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=88)** It includes a name, bio text, the link_in_bio, and whether or not the account is reported.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=96)** When we render this with PlantUML, we'll get a nice node with different information about the user.
>
> **[1:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=103)** And there it is.
>
> **[1:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=105)** We have the node with the profile name and different information about it.
>
> **[1:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=109)** In addition to this, we'll also want to display information about each report that caused the account to be banned.
>
> **[1:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=117)** For this course, we won't be considering the images, only the text.
>
> **[2:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=122)** We'll add nodes for each report along with what was in the post that was reported.
>
> **[2:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=132)** (keyboard clicking) Here we've added three more nodes.
>
> **[2:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=138)** One for each report on the account.
>
> **[2:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=141)** Some of them were manual, and others were automatic.
>
> **[2:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=145)** For the manual reports, we could also retrieve data about who these reporters were, and what they were posting.
>
> **[2:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=152)** Maybe they were the ones that should have been banned in the first place.
>
> **[2:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=158)** (keyboard clicking) Now we have a node for the user that reported Blondiebytes.
>
> **[2:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=164)** We also have a node for their recent posts.
>
> **[2:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=168)** To organize this, we'll add some arrows.
>
> **[2:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=172)** We'll add an arrow from the profile node to each node that has associated information.
>
> **[2:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=179)** This means adding an arrow from Blondiebytes to each report.
>
> **[3:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=185)** (keyboard clicking) We'll also add an arrow from Browniebits (keyboard clicking) to the recent posts.
>
> **[3:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=198)** (keyboard clicking) Let's walk through these nodes.
>
> **[3:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=205)** Here, we can easily see information about the profile that was reported, and the different reports that occurred.
>
> **[3:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=214)** We can also see the posts that were reported, and what their text was.
>
> **[3:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=219)** This allows us to manually analyze the account and the reports using visuals.
>
> **[3:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=225)** It lets us see if there was any foul play.
>
> **[3:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=229)** This is a hard coded example, but we've proven that it is in fact possible to visualize this data using PlantUML.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), find (1)
> **Code Keywords:** let (4), this, (2)
> **Non-Speech:** (keyboard clicking) (5)
> **Definitions:** is a  (2)
> **Code Identifiers:** link_in_bio (1)
> **Speakers:** - [instructor] (1)

#### How can you work with PlantUML in a maintainable way?
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=0)** - [Instructor] When deciding on whether a technology will work for a given use case, it's important to determine the tool's maintainability.
>
> **[0:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=8)** Let's consider PlantUML.
>
> **[0:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=11)** It's safe to say no one will be writing PlantUML code to generate these diagrams.
>
> **[0:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=18)** Instead, we would need to generate this code using a more commonly used technology, such as Java or Python.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=26)** If we could generate PlantUML code using Python for example, we could feed it into the PlantUML editor and automate the generation of these diagrams.
>
> **[0:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=38)** In fact, after doing some research, there's actually a Python package we can use to generate PlantUML diagrams.
>
> **[0:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=46)** All we have to do is feed it a file with PlantUML code and it'll generate the PlantUML diagram.
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=54)** This means if we could create the PlantUML code using Python, we could directly feed it into the generator and it would generate a diagram.
>
> **[1:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=64)** This would mean the automation logic would be in Python and that's what would be maintained, not the PlantUML code.
>
> **[1:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=73)** Considering this with our use case, we would read and translate the data from the different microservices using Python.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=81)** Then we would also use Python to generate the PlantUML code from this microservice data.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=88)** This will make it easier to work with PlantUML since software engineers are more familiar with the Python programming language than with PlantUML.

> [!info]- Semantic Content
>
> **CLI Commands:** python (8), make (1)
> **Code Keywords:** case, (2), let (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### How to decide if PlantUML will work for a use case
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=0)** - We've proven that we can work with PlantUML in a maintainable way.
>
> **[0:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=5)** We can use Python as an intermediary tool to translate microservice data into PlantUML code.
>
> **[0:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=12)** Now, we also need to prove that the tool is flexible modern, mature, and well-documented.
>
> **[0:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=20)** Let's check out the documentation for PlantUML.
>
> **[0:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=25)** It's an open source tool available for free.
>
> **[0:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=29)** Looking at the description it's meant for users that like using text to generate professional looking diagrams.
>
> **[0:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=36)** That sounds like us.
>
> **[0:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=38)** From our experimentation with the tool we found out that it's pretty flexible and there are many different ways we can display our data.
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=48)** Each different type of diagram also has extensive documentation.
>
> **[0:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=53)** This means it'll be fairly straightforward to add additional visual components to our diagrams, to find out if this tool is modern or mature.
>
> **[1:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=65)** Let's see if it's actively being worked on.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=68)** We want it to be actively maintained, but we don't want big feature changes that could break our diagrams.
>
> **[1:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=76)** Let's go back to the FAQ.
>
> **[1:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=79)** There's a statement in here that affirms the tool's maturity by sourcing Google Trends and the tools mentioned in a few books.
>
> **[1:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=87)** This means it's not brand new, which is good.
>
> **[1:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=91)** We can also Google PlantUML and see if it's being asked about on Stack Overflow.
>
> **[1:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=98)** This gives us some insight on whether there's a developer community around this tool.
>
> **[1:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=103)** It's important that a tool is used within the developer community because it makes it easier to Google and troubleshoot when something goes wrong.
>
> **[1:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=112)** In other words, it makes it more likely that there's a stack overflow question answered about a bug you're facing or someone else trying to do what you want to do with the tool.
>
> **[2:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=124)** If no one else has adapted the tool.
>
> **[2:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=127)** It makes it harder to research and debug when something goes wrong or when you want to use the tool in a unique way.
>
> **[2:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=136)** So is this tool good enough for our use case?
>
> **[2:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=139)** We've proven the tool is somewhat mature.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=143)** It is flexible with the diagrams we can create with it.
>
> **[2:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=147)** It is maintainable in the sense that we can generate PlantUML code in a diagram using Python.
>
> **[2:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=154)** It is well-documented and free to use.
>
> **[2:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=158)** These are all good things.
>
> **[2:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=160)** There may be a security concern and that we're feeding the microservice data into a Python library so that library might need to be looked at.
>
> **[2:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=171)** But overall, this tool appears to check a good number of boxes for us to consider using it for visualizing microservice data.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), find (1)
> **Code Keywords:** let (3), new, (1)
> **Documentation:** the documentation (1), stack overflow (1)
> **Env Vars:** faq (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - we (1)


### 4. 3. Planning for the Development

#### Create an implementation plan for the initiative
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=0)** - [Instructor] Once you know the problem you want to solve and how you want to solve it, you need to create a plan for how you and your team will implement the solution.
>
> **[0:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=10)** So far, our solution is to create a Python script that reads microservice data from various microservices.
>
> **[0:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=17)** Then it'll generate a visual diagram using plant UML code.
>
> **[0:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=22)** The first step would be figuring out what we want the input of the script to be.
>
> **[0:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=27)** What microservices are we going to call and what data will we read from them?
>
> **[0:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=33)** We would start with a minimal proof of concept that reads the core necessary information, and we can always add more data later.
>
> **[0:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=41)** The next step would be creating a Python script that reads in the data from the microservices.
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=48)** We'll need to know what format the data is in and how it can be fed into the script.
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=54)** We'll also need to know where we'll get the data.
>
> **[0:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=57)** Will it be a live call?
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=59)** Will it be from the logs?
>
> **[1:01](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=61)** Once the data has been read in, we'll want to organize it within the script using structures so we can easily access it when it's time to visualize it.
>
> **[1:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=71)** With the data organized, we can move on to the next big step.
>
> **[1:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=76)** We'll need to create the plant UML code that will be used to generate the diagram.
>
> **[1:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=82)** We could use a temp file or a regular file to store this plant UML code.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=88)** In this step, we'll be translating the microservice data into the plant UML code format so it can be visualized.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=96)** The last main step for the implementation is to generate the plant UML diagram from the plant UML code in Python.
>
> **[1:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=104)** We've already identified a Python library we can use to do this, but we'll need to know how we can execute it in a Python script, as well as if we need to add any additional parameters to the library call.
>
> **[1:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=118)** We can call this phase one: creating a minimal POC.
>
> **[2:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=123)** This would be the basic tool that can be used locally on any machine that has Python installed.
>
> **[2:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=131)** After phase one, there are a bunch of different directions you could go in.
>
> **[2:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=135)** You could spend more time enhancing the diagrams, making them as readable as possible.
>
> **[2:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=141)** You could write extensive documentation on what the tool is and how to use it.
>
> **[2:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=147)** You could host the tool somewhere and create a UI instead of having people run it locally on their machines.
>
> **[2:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=155)** If this diagram is super useful, you could also create a system that generates it automatically as a part of a process that already runs and attaches the diagram to the logs or analytics.
>
> **[2:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=168)** The possibilities are endless, but to get a new project off the ground, you have to start with a doable, minimal POC that provides value, which is what we have here.

> [!info]- Semantic Content
>
> **Env Vars:** uml (6), poc (2)
> **CLI Commands:** python (6)
> **Code Keywords:** this, (1), super (1)
> **Speakers:** - [instructor] (1)

#### How to convince your team to pursue the initiative
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=0)** - [Instructor] With the well thought out problem, solution, and implementation plan, you have all the tools you need to propose this idea.
>
> **[0:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=8)** Now it's time to convince your team that this initiative is actually worth pursuing.
>
> **[0:14](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=14)** To do that, you need a good pitch.
>
> **[0:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=17)** You need to prove that the problem you're solving is actually a problem that needs to be solved.
>
> **[0:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=23)** If the problem statement you pitch does not resonate with your team, then they won't see the point in doing the work.
>
> **[0:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=30)** In our case, the problem we're solving is that data is distributed through many software systems, making it hard to visualize for the band account use case.
>
> **[0:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=40)** If the company doesn't do manual reviews of band accounts or does not want to analyze the data of band accounts, then this is probably not an initiative worth pursuing or at least not worth pursuing for now.
>
> **[0:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=56)** However, if you think it's a problem worth solving, it's worth it to bring it to your team for a pitch.
>
> **[1:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=63)** Even if they aren't convinced on your main problem statement, parts of it could be used for another initiative.
>
> **[1:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=71)** For example, there might be another use case not involving band accounts where the team would want to visualize data that's spread across the distributed system.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=81)** Once you've convinced your team that the problem is a problem worth solving, you need to prove that the solution actually solves the problem.
>
> **[1:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=91)** In our case, would the proposed system actually make it easier to understand and visualize data that lives in our microservices?
>
> **[1:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=100)** Maybe your team is confused by the PlantUML diagrams and so you might have to go back to the drawing board on visualization technologies.
>
> **[1:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=110)** A teammate might also suggest a different tool which you can research after the meeting and compare with PlantUML.
>
> **[1:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=118)** With the problem and solution proven and agreed upon by the team, you need to pitch your plan on how you'll do it.
>
> **[2:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=126)** Given bandwidth and priority, you could give several different options with the preferred option based on which way you think the team would be most successful and get the most bang for their buck.
>
> **[2:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=139)** This could all be done in a single meeting or you could have separate meetings for discussing the problem and proposing the solution to the problem.
>
> **[2:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=148)** No matter what, I would suggest meeting with one of the team leads or others that will be involved in the implementation before proposing it to the entire team.
>
> **[2:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=159)** They can provide initial feedback on your pitch and help tailor it to get the best outcome.
>
> **[2:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=165)** In our case, the initiative mainly involves backend but you could meet individually with one of the leads that runs the other microservices your team is not in charge of.
>
> **[2:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=177)** Getting a second review or a second set of eyes on your proposal, especially someone with more domain knowledge and experience can help you be the most successful when you finally do pitch it.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), case. (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Divide work into user stories
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=0)** - [Host] Once your proposal has been approved it's time to break it up into user stories.
>
> **[0:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=5)** This assumes your team is using an agile like process for their software development work.
>
> **[0:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=12)** A user story is a unit of work in the agile framework used to describe an angle of a particular user's need.
>
> **[0:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=20)** In other words, it's a written description of a feature or functionality that a user once included in a software product or system, they're used to capture and prioritize requirements for an initiative, so that work can be done in an incremental manner.
>
> **[0:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=36)** It ensures that the development efforts meet the needs of the users and are aligned with the business objectives.
>
> **[0:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=44)** There are several different formats for creating user stories, but one of the most common is this one.
>
> **[0:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=50)** As a type of user, I want some goal or objective so that some benefit or outcome occurs.
>
> **[1:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=60)** We need to break up our initiative into user stories like these, so it can be completed iteratively over time.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=68)** One example of a user story might be, as a manager I want to know what microservices and what microservice data will be used in the visualizer and how we want to retrieve it so that we can better understand what data will be visualized across our distributed system and how we'll access it.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=88)** In fact, this user story might be done before the initiative is approved, to better understand how the visualizer solution will solve the problem at hand, we identify the story with an acronym and a number, LIL 164, so we can refer to the story as it's being worked on.
>
> **[1:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=109)** Another user story might be, as a software engineer, I want to create a basic Python script that reads in the proposal data from user story LIL 164, so that it can later be visualized with PlantUML.
>
> **[2:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=125)** This is a smaller user story that involves creating a Python script that reads in data.
>
> **[2:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=132)** Depending on how your team is structured, you may want to create smaller user stories or user stories that involve smaller pieces of work instead of big user stories.
>
> **[2:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=144)** If your team has lots of junior engineers, smaller user stories are better because they're heavily defined pieces of work that provide more transparency on exactly what is being done.
>
> **[2:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=157)** Junior engineers can get lost in a big user story, making it difficult to track true progress each day.
>
> **[2:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=165)** If your team has lots of senior engineers they'll need less guidance and will be able to tackle larger portions of work with a larger user story, for this course, each video in chapter four will represent us completing a user story.
>
> **[3:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=182)** The video will start by defining the user story at hand.
>
> **[3:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=186)** Then we'll perform the work needed to complete the user story and improve our system.
>
> **[3:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=191)** Sometimes this will involve coding and other times it will not.
>
> **[3:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=196)** It might involve creating a document with requirements or defining a design.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=201)** We'll tackle it all in order to complete a small POC that visualizes microservice data.

> [!info]- Semantic Content
>
> **Env Vars:** lil (2), poc (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** python (2)
> **Speakers:** - [host] (1)


### 5. 4. Building a Python Script to Convert Data into PlantUML Code

#### Establish input of the script
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=0)** - [Instructor] Before writing the Python script, we should establish what the input will be, so we know what will be visualized.
>
> **[0:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=7)** This video will complete the following user story: As a software engineer, I want to know what microservice data will be used in the visualizer, and how we'll retrieve that data so that we can establish the input of the Python visualizer script.
>
> **[0:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=24)** The output of the story will be documentation, a document containing what data will be used and which microservice that data comes from.
>
> **[0:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=35)** While there could be dozens and dozens of microservices, we'll be focusing on three for the purposes of this course.
>
> **[0:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=43)** The first is a user profile service that's responsible for managing user profile information.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=49)** We can retrieve its data with the username.
>
> **[0:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=53)** This is the data it returns.
>
> **[0:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=55)** There are fields for username, biography, link, whether the user is reported or not and more.
>
> **[1:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=63)** Looking at this data, it seems like most of this information would be useful to know about a user who may have been misreported.
>
> **[1:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=72)** The number of followers, following and posts let us know how active they are on this social media service.
>
> **[1:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=80)** The boolean values allow us to confirm they've been reported.
>
> **[1:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=85)** They also let us know if they've been shadow banned.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=88)** The link, biography, name and username may also be useful to see if there's anything against the guidelines linked in the profile.
>
> **[1:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=98)** We'll use all of this data in our visualizer.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=102)** The second microservice will be a post management service that's responsible for managing the creation, deletion and modification of posts.
>
> **[1:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=112)** We can retrieve information about a set of recent posts by using the username, or we can use the post ID to retrieve a certain post.
>
> **[2:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=122)** Here's the data.
>
> **[2:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=123)** For each post returned with a given query, there will be a caption, different images and comments.
>
> **[2:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=131)** The last will be a moderation service.
>
> **[2:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=135)** This microservice automates the review process for a post and determines whether or not it violated community guidelines.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=143)** To retrieve information, we would give it a post ID, and it would return whether or not it was manually reported and why.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=153)** Here's the data.
>
> **[2:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=155)** Depending on how the post was flagged, one of three types of responses could be returned.
>
> **[2:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=161)** If the post was manually reported by another user, we would have is_manual set to true and another field called reported_by that would represent the user that reported this piece of content.
>
> **[2:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=176)** If the post was flagged automatically, is_manual would be false, and the reported_by field would not exist.
>
> **[3:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=185)** If the post has not been reported, then we would get back Less fields, and is_reported would be set to false.
>
> **[3:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=193)** Now, each piece of data returned by the microservice is useful, but some of it we already have.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=201)** the caption, image and post ID would've already been retrieved from the post management service.
>
> **[3:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=208)** We don't need those.
>
> **[3:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=209)** So we'll only keep track of the is_manual and reason fields and the reported_by field, if it exists.
>
> **[3:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=217)** Let's consolidate this all into an easy to read document.
>
> **[3:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=222)** Here's the data we want to visualize from the different microservices.
>
> **[3:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=227)** By seeing this data all on one page, we'll be able to better understand whether a user was reported accurately or not.

> [!info]- Semantic Content
>
> **Code Identifiers:** is_manual (3), reported_by (3), is_reported (1)
> **Code Keywords:** let (3), from. (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Establish the output of the script
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=0)** - To finalize the requirements, we should also define the output of the script more fully.
>
> **[0:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=6)** We want to create bounds for what we'll visualize and how with PlantUML.
>
> **[0:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=12)** Given that we know what input data we'll be working with, we can now define the output.
>
> **[0:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=19)** We'll be completing the following user story.
>
> **[0:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=22)** As a software engineer, I want to have a better idea of what the visualization will look like given the input data, so we can establish the output of the Python visualizer script.
>
> **[0:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=34)** Let's craft some input data and use it to create hard coded PlantUML code.
>
> **[0:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=41)** This will help us better visualize the data.
>
> **[0:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=44)** The Python visualizer script will eventually automate this process.
>
> **[0:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=50)** In our code space, we have three JSON files.
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=54)** We have one representing the profile service response.
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=59)** We have another that represents the response from the post management service.
>
> **[1:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=66)** The last one represents the moderation service response.
>
> **[1:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=72)** This is our sample input data.
>
> **[1:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=75)** Let's map it out into a diagram using PlantUML.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=81)** Considering our data, the first step is to decide what nodes each piece of data will be on.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=88)** For this example, we'll have two nodes.
>
> **[1:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=91)** The first node will represent information about the profile.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=95)** It will have the username, biography, hyperlink, number of followers, and more.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=102)** Let's create it.
>
> **[1:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=105)** (keys clicking)
>
> **[1:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=117)** The second node will have information about the reported post.
>
> **[2:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=122)** It'll be labeled as "post" with its post ID.
>
> **[2:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=128)** On this node, we'll have the caption when the post was published, who it was reported by, and why it was reported.
>
> **[2:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=138)** For each comment, we'll create an attribute comment with the username of the user that left the comment.
>
> **[2:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=148)** Let's take a look at the diagram.
>
> **[2:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=151)** Here we have a profile node and a post node.
>
> **[2:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=155)** This example had just one post but if there were multiple posts, they would each have a separate node so we could visualize them together.
>
> **[2:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=165)** Let's add an arrow that'll connect the profile node to the post node.
>
> **[2:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=173)** Here's the output.
>
> **[2:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=175)** This is an example of a diagram we want the script to generate.
>
> **[3:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=180)** In the real world, this would be reviewed by our team to ensure this is an agreed upon output diagram.
>
> **[3:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=188)** However, given this course, we can say we've officially established what the output of the script should be.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), python (2)
> **Code Keywords:** let (5)
> **Definitions:** is an  (2)
> **Env Vars:** json (1)
> **Speakers:** - to (1)
> **Non-Speech:** (keys clicking) (1)

#### Design implementation for script code
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=0)** - [Narrator] With the inputs and outputs established, we can decide on the design for the implementation.
>
> **[0:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=6)** Here's the user story we'll complete in this video.
>
> **[0:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=10)** As a software engineer, I would like to design an implementation plan for the visualizer before we start writing it so that we'll know how we should implement the solution.
>
> **[0:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=22)** Let's talk about design.
>
> **[0:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=24)** Our Python script will convert the format of several data pieces from different microservices into one piece of data.
>
> **[0:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=32)** Then it'll write out that data into PlantUML code.
>
> **[0:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=37)** We will use the variation of the context pattern to do this.
>
> **[0:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=41)** We'll retrieve each piece of data from the different microservices and store it in a context object.
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=48)** Once all the data is retrieved, we'll run the operations to write that data into a PlantUML code file.
>
> **[0:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=56)** This will allow us to store the data from the microservice in-memory only once and we'll retrieve that data from memory when we need to write it out to PlantUML.
>
> **[1:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=69)** Thinking of an implementation plan, here are the steps.
>
> **[1:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=73)** Retrieve data from the various microservices.
>
> **[1:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=76)** Add this data to the context object.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=81)** Write out PlantUML code using data from the context object.
>
> **[1:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=86)** For step one, we would traditionally do this with an HTTP Rust Call and call the endpoint where the data lives.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=95)** To keep things simpler, we'll be reading from JSON files that mock the responses that in theory would be returned by calling these different microservices.
>
> **[1:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=105)** Towards the end of the course, I'll show you how to make this a live call.
>
> **[1:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=110)** But for most of it, we'll be working with JSON files that mock the return data.
>
> **[1:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=116)** Let's start implementing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **Env Vars:** json (2), http (1)
> **CLI Commands:** python (1), make (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)

#### Load JSON data from a file
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=0)** - [Instructor] The PlantUML diagram created from the script will be based on JSON input data.
>
> **[0:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=6)** Here's the user story we'll complete in this lesson.
>
> **[0:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=10)** As a software engineer, I would like to ingest the JSON data into the Python visualizer so we can use it to create a diagram with PlantUML.
>
> **[0:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=21)** Let's read that data into our Python application.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=26)** In our code space, we have our sample data.
>
> **[0:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=30)** That's the data from each microservice.
>
> **[0:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=34)** Let's create a Python file to read in this data.
>
> **[0:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=40)** We'll call it main.py.
>
> **[0:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=44)** We'll ingest the data using the JSON module so we'll import JSON.
>
> **[0:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=50)** In order to load the data, we need to open the file within Python and access the file object.
>
> **[0:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=57)** We'll do this with the keyword open.
>
> **[1:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=62)** Then we'll feed in the file path.
>
> **[1:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=65)** For the first response, that's profile_service_response.json.
>
> **[1:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=73)** The encoding is UTF 8, and we'll refer to it as profile file.
>
> **[1:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=80)** This opens up our file.
>
> **[1:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=83)** We'll load the data into a variable using the JSON load method.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=88)** JSON load profile file.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=92)** We'll save this in a variable called profile_json.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=99)** We've just read in JSON to our application.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=102)** Let's do the same for the other files.
>
> **[1:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=105)** The second one is posts_management_service.json.
>
> **[2:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=130)** And let's modify the moderation service to have underscores instead of dashes.
>
> **[2:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=135)** This will make it more uniform to the other responses.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=153)** We now have access to JSON data within our application.
>
> **[2:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=158)** Before we run it, let's make sure all the names match up.
>
> **[2:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=165)** We have moderation service response.
>
> **[2:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=167)** That's what we see here.
>
> **[2:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=170)** We have profile service response, that looks good.
>
> **[2:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=172)** And post management service response.
>
> **[2:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=176)** Looks like we need to add response to line six.
>
> **[3:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=180)** Now we have access to JSON data within our application.
>
> **[3:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=184)** Let's run our application.
>
> **[3:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=187)** We'll run Python main.py.
>
> **[3:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=192)** We now have access to JSON data within our application.

> [!info]- Semantic Content
>
> **Env Vars:** json (10), utf (1)
> **CLI Commands:** python (5), make (2)
> **Code Keywords:** let (6), module (1)
> **File Paths:** main.py (2), profile_service_response.json (1), posts_management_service.json (1)
> **Code Identifiers:** profile_service_response (1), profile_json (1), posts_management_service (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Iterate through JSON data and store effectively
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=0)** - [Instructor] With our JSON data loaded, let's iterate through it, and store it efficiently.
>
> **[0:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=5)** Here's the user story we'll be completing.
>
> **[0:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=9)** As a software engineer, I would like to organize the JSON data with the context object so it's easier to access and retrieve when we need it to create the diagram.
>
> **[0:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=19)** We'll be storing it in a context object so we don't have to individually access each JSON variable when we need to retrieve information.
>
> **[0:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=29)** Instead, we'll have a single place where everything is stored.
>
> **[0:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=34)** The first step is to create that context object.
>
> **[0:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=38)** It'll only have what we want to keep track of within the script.
>
> **[0:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=43)** Most of this will initially come from the profile JSON variable.
>
> **[0:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=52)** For each of these attributes, we pull it out of the profile JSON object and store it in our context variable.
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=59)** Let's keep going.
>
> **[1:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=64)** For the posts, we initially set it to an empty list within the context.
>
> **[1:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=69)** The next step is to iterate through the JSON returned from the post management service and add data for each post to the context object.
>
> **[1:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=79)** For each post and the JSON, we'll create a new variable called context post.
>
> **[1:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=89)** It'll have information about the post.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=95)** For each post, we only pull out the necessary information.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=99)** Then we'll append this post to the posts list and the main context object.
>
> **[1:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=107)** We'll access the posts and append our variable No matter how many posts we have, this will work since we're using a for loop.
>
> **[2:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=120)** For each post, it'll create a variable with the necessary information and add it to the post attribute of the context object.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=129)** The last piece of data we need to add is the moderation data.
>
> **[2:14](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=134)** We can do this by tracking down the correct moderation info with the post ID.
>
> **[2:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=141)** We'll loop through our moderated posts, and if one has the same post ID as our context post, we'll add the appropriate information.
>
> **[2:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=154)** In the case of the reported by attribute, sometimes it will exist and sometimes not.
>
> **[2:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=160)** We need to check it before adding it to our context object.
>
> **[2:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=165)** We'll also remove the parentheses because we don't need them in Python.
>
> **[2:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=170)** Let's print out the context and run the application.
>
> **[2:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=175)** We'll run it with Python main.py.
>
> **[2:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=179)** In the output, we see A JSON containing our context data.
>
> **[3:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=184)** Let's format it using an online formatter.
>
> **[3:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=189)** We'll use the formatter from this website, jsonformatter.[curiousconcept.com](https://curiousconcept.com).
>
> **[3:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=195)** Let's paste in our data.
>
> **[3:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=199)** And it's valid.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=201)** We can see all the data we added to the context object.

> [!info]- Semantic Content
>
> **Env Vars:** json (8)
> **Code Keywords:** let (5)
> **CLI Commands:** python (2)
> **File Paths:** main.py (1)
> **URLs:** [curiousconcept.com](https://curiousconcept.com) (1)
> **Speakers:** - [instructor] (1)

#### Write simple PlantUML code to a file
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=0)** - [Instructor] Now that our JSON data has been ingested, let's use part of it to create a simple PlantUML diagram.
>
> **[0:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=8)** Here's the user story we'll be working on.
>
> **[0:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=10)** As a software engineer, I would like to create simple PlantUML code containing nodes, so we can manually validate visualizations using an online PlantUML editor.
>
> **[0:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=23)** For the diagram, all we're going to do is create the nodes that will have the data, so that's a node for the reported user and a node for each of the posts.
>
> **[0:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=34)** Creating this image will require us to write out PlantUML code to a file.
>
> **[0:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=40)** Let's put this load data into its own function and create a new function for writing out that file.
>
> **[0:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=47)** We'll call this load_data.
>
> **[1:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=60)** Then we can click the arrow to collapse this function's implementation.
>
> **[1:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=67)** Let's create a function for writing out the PlantUML file.
>
> **[1:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=73)** In this function, we'll pass in the context.
>
> **[1:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=77)** That means we should return it when we load the data.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=88)** We'll use both of these functions in our main function.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=99)** We'll load the data and then pass it in to write_plantuml_file.
>
> **[1:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=108)** Inside of our new function, we'll create a new file and write to it.
>
> **[1:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=115)** We'll write to a file called plantuml.txt and we'll use the write option to create it and write to it.
>
> **[2:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=124)** Now, in PlantUML, we can create a new node with object and then the name we want to give the node.
>
> **[2:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=131)** Let's create a node for the user's information.
>
> **[2:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=135)** We'll access the file and write object, with the username.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=143)** We'll grab that from the context.
>
> **[2:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=146)** We also add a new line because each line of PlantUML code is on a new line.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=153)** Let's create the nodes for each post.
>
> **[2:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=156)** We'll loop through the posts in the context.
>
> **[2:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=160)** For each post, we'll create a node with the associated post_id.
>
> **[2:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=170)** We'll convert that ID to a string, so it'll be written out correctly.
>
> **[2:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=176)** We'll also need to add those start and end tags, that startuml with a new line, and then enduml.
>
> **[3:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=191)** We'll also add the encoding here.
>
> **[3:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=196)** That'll be UTF-8.
>
> **[3:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=200)** We'll also rename the context variable in our main method to get rid of that linter error.
>
> **[3:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=207)** Perfect.
>
> **[3:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=208)** Let's run it and generate some PlantUML code.
>
> **[3:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=215)** There's our code.
>
> **[3:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=217)** We have a node for the profile and a node for the post.
>
> **[3:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=221)** Let's use the PlantUML editor to visualize it.
>
> **[3:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=226)** We'll copy it and paste it in to the editor.
>
> **[3:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=231)** We'll click Submit and there's our nodes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (7), pass (2), require (1)
> **CLI Commands:** node (8)
> **Code Identifiers:** load_data (1), write_plantuml_file (1), post_id (1)
> **Env Vars:** json (1), utf (1)
> **File Paths:** plantuml.txt (1)
> **Speakers:** - [instructor] (1)

#### Export PlantUML code to a PNG diagram with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=0)** - [Instructor] Instead of copying and pasting the PlantUML code into an online editor, we can automate this process.
>
> **[0:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=8)** In this video, we'll be working on the following user story.
>
> **[0:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=12)** As a software engineer, I would like to automatically generate the PlantUML diagram using the Python script so we can automate the process of copying and pasting the output code into an online editor.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=26)** Let's generate a PlantUML diagram using Python.
>
> **[0:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=31)** We'll be using the PlantUML package to convert our PlantUML code into an actual diagram.
>
> **[0:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=38)** Let's install it.
>
> **[0:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=40)** In our code space, We'll use the terminal in pip, pip install plantuml.
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=48)** It's installed.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=49)** Let's take a look at the documentation to learn how to use it.
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=54)** It's actually linked in the PlantUML package link, Documentation.
>
> **[1:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=62)** Here, it looks like we can create an instance of PlantUML and then use it to process a file.
>
> **[1:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=69)** In creating the instance, we'll provide a URL that the file will go to for processing.
>
> **[1:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=75)** This defaults to a PlantUML URL if we don't provide anything.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=81)** We can process the file by using the processes_file method.
>
> **[1:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=85)** We'll feed in the file name that contains the PlantUML code.
>
> **[1:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=90)** Let's try it in Python.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=92)** The first thing we'll do is import PlantUML.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=96)** This will allow us to use it in our application.
>
> **[1:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=100)** Then we'll create a new function to create the PlantUML image.
>
> **[1:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=109)** Inside this function, we'll create a new PlantUML instance from the PlantUML library.
>
> **[1:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=118)** We'll use this instance to process the PlantUML text file.
>
> **[2:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=123)** We named it plantuml.txt.
>
> **[2:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=127)** Since we've set the out file to None, the PlantUML image will be stored in a file called plantuml.png.
>
> **[2:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=136)** It uses the main name of our input file as a default.
>
> **[2:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=141)** Let's call it in our main function.
>
> **[2:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=149)** Create_plantuml_image.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=153)** We're ready to run our Python script.
>
> **[2:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=156)** Let's go to the terminal.
>
> **[2:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=160)** It looks like we were missing a dependency, so we installed six.
>
> **[2:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=164)** Let's try running it again.
>
> **[2:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=167)** There's our image.
>
> **[2:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=169)** Let's take a look.
>
> **[2:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=171)** This is exactly what we saw in the editor.
>
> **[2:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=174)** We used the PlantUML library in Python to generate a PlantUML diagram.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), default. (1)
> **CLI Commands:** python (5), pip (2)
> **Env Vars:** url (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (2)
> **File Paths:** plantuml.txt (1)
> **Code Identifiers:** processes_file (1)

#### Add data to each node in the PlantUML graph
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=0)** - While seeing the nodes can be useful, having metadata on each node can make it easier to visualize.
>
> **[0:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=7)** Here's the user story we'll be implementing in this video.
>
> **[0:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=10)** As a software engineer, I would like to display the rest of the context metadata on each node to make it easier to understand what data exists for the profile in each post In PlantUML, we can add an attribute to the node by using the node's name and the new attribute name.
>
> **[0:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=30)** We'd use the nameOfNode : nameOfAttribute, and then the new attributeValue.
>
> **[0:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=39)** In the case of the user, that would be the context "username" as the node name.
>
> **[0:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=47)** The attribute name would be name, and we'll set it to the context ["name"].
>
> **[0:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=55)** Let's do the same for the other profile attributes.
>
> **[1:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=67)** We'll also need new lines at the end of these.
>
> **[1:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=71)** Each statement is on a new line in PlantUML.
>
> **[1:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=83)** We'll do some data conversion here, so we can write out this data to a file.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=102)** We'll drag this over so we can see our code more clearly.
>
> **[1:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=107)** All right, we've written out the attributes for the profile node.
>
> **[1:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=110)** Let's do the same for the post.
>
> **[1:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=115)** For the first one, we'll add the "post_caption" attribute, and retrieve its value from the post variable.
>
> **[2:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=122)** The name of the node is post with the "post_id".
>
> **[2:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=130)** We'll do the same for the other attributes.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=143)** Here are our attributes, "post_caption", "images", "comments", "hashtags", "date_published", "is_reported", "is_manual", and "reason".
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=153)** Since "reported_by" may, or may, not exist, we add an additional check, and only add it if the data exists.
>
> **[2:41](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=161)** All right, let's run it.
>
> **[2:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=164)** We'll collapse the implementation.
>
> **[2:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=168)** And execute python main.py.
>
> **[2:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=173)** And it looks like we have a small error.
>
> **[3:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=180)** There's a key error for "number_of_following".
>
> **[3:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=185)** Let's take a look at the context data.
>
> **[3:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=189)** This is something we didn't add with the context.
>
> **[3:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=193)** Let's add it.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=201)** We should also make sure it exists in the profile_service.
>
> **[3:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=207)** And it does. It's in that response.
>
> **[3:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=210)** Let's run it again.
>
> **[3:37](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=217)** Looking at our PlantUML text file, we have a lot more data.
>
> **[3:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=222)** We can see the attributes for each node.
>
> **[3:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=225)** Some are associated with the profile, and others with the post.
>
> **[3:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=231)** Let's take a look at the diagram.
>
> **[3:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=233)** Here's our metadata.
>
> **[3:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=236)** We can see the profile information on the profile node, and the post information on the post node.

> [!info]- Semantic Content
>
> **CLI Commands:** node (10), make (3), python (1)
> **Code Identifiers:** post_caption (2), nameofnode (1), nameofattribute (1), attributevalue (1), post_id (1)
> **Code Keywords:** let (7)
> **File Paths:** main.py (1)
> **Speakers:** - while (1)

#### Add edges to the PlantUML graph
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=0)** - [Instructor] We have our microservice data visualized in a diagram.
>
> **[0:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=4)** The last thing we'll add are edges.
>
> **[0:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=7)** Here's the user story we'll be working on.
>
> **[0:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=11)** As a software engineer, I would like to add edges that point from the profile to the posts to make it easier to visualize what is post information and what is profile information.
>
> **[0:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=23)** Let's jump to the code space.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=26)** We can add an edge by specifying the two nodes we want to connect.
>
> **[0:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=32)** We use the name of NodeOne, an arrow, and then the name of NodeTwo.
>
> **[0:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=38)** In this case, it'll be the profile node to each post node.
>
> **[0:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=43)** We'll add some code within the post for loop to add this edge.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=49)** We're inside the indentation for the loop.
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=54)** We'll write pf.write, the name of the profile node, which is the username, and then an arrow to the post node.
>
> **[1:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=66)** Its name is post with the post id.
>
> **[1:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=72)** Then we'll add a new line.
>
> **[1:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=75)** This is another PlantUML statement.
>
> **[1:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=78)** Before we generate our diagram, I want to show you that I've added some more data to the post and moderation files.
>
> **[1:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=86)** This will make our diagram look more robust.
>
> **[1:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=90)** Instead of just one post, we have three.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=99)** We also have three entries here, and our moderation service response.
>
> **[1:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=107)** Let's run it.
>
> **[1:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=114)** We now have arrows.
>
> **[1:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=117)** To make this more visually pleasing, we can change it to display as up/down, versus across.
>
> **[2:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=124)** Let's go back to our main.py.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=129)** Instead of just an arrow, we'll add dash down and then run it again.
>
> **[2:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=140)** Let's look at our diagram.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=143)** It looks great.
>
> **[2:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=144)** We have visualized our data across multiple microservices using Python and PlantUML.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (3), python (1)
> **Code Keywords:** let (4), case, (1)
> **File Paths:** main.py (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Going Above and Beyond

#### Review your code for inefficiencies and unnecessary complication
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=0)** - [Instructor] The core of the script is complete.
>
> **[0:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=2)** Let's review it for any inefficiencies and unnecessary complications.
>
> **[0:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=7)** By improving the script in this way it'll be easier to read, understand, and contribute to in the future.
>
> **[0:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=15)** A task like this typically would not be its own user story but instead it would be assumed you're doing this with every user story.
>
> **[0:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=25)** Every step of the way you should be looking at your code and trying to make it better.
>
> **[0:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=30)** If you're working with a team, you might have code reviews where code must be reviewed by others before it's merged or accepted.
>
> **[0:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=39)** Let's review our script and see how we can improve it.
>
> **[0:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=44)** Here we have a context object that stores all of the data.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=49)** Most of the code in this file actually has to do with that conversion from the data file to a context object.
>
> **[0:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=58)** To make this file less complicated, we could remove the idea of the context object and just pull from the associated data variables.
>
> **[1:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=67)** Let's remove it.
>
> **[1:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=76)** Instead of returning the context, we'll return a two pull of the different JSON values.
>
> **[1:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=82)** That's the profile_json, post_json, and moderation_json.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=92)** Then we'll remove it from our main function.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=95)** This will return profile, posts, and moderation.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=102)** We'll feed these in when we write our PlantUML file.
>
> **[1:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=108)** Now, let's modify the right PlantUML file function.
>
> **[1:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=115)** We'll scroll up.
>
> **[1:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=116)** Instead of the context we'll have profile_data, post_data, and moderation_data.
>
> **[2:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=127)** Let's start with the profile data.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=129)** The profile is used in the profile node.
>
> **[2:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=133)** We'll replace each of these instances with profile_data.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=153)** Scrolling down we'll also want to use it when we write out the edge.
>
> **[2:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=162)** Now for the post data.
>
> **[2:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=165)** Let's modify the for loop.
>
> **[2:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=168)** Instead of reading the posts from the context, we'll read it from the post data.
>
> **[2:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=173)** Now, before we were reading all this data from the context object, the context post had information about the post management system and the moderation system.
>
> **[3:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=187)** We need to parse that out because now we're reading that data from two different variables.
>
> **[3:13](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=193)** That happens right here.
>
> **[3:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=197)** When we start talking about if the user is reported.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=201)** Here we'll want to loop through the moderated posts.
>
> **[3:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=216)** It'll have the information of whether the user is reported, and the reason.
>
> **[3:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=223)** It may also have the user that reported this post.
>
> **[3:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=236)** And this will be read from the moderation_data variable.
>
> **[4:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=243)** Now, for the edge we'll move this to the first for loop when we write out the post information.
>
> **[4:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=257)** All right, let's run it.
>
> **[4:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=264)** If we check out our png, the diagram looks the same and our code is a lot cleaner.
>
> **[4:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=272)** Looking at our lines of code, we were able to eliminate quite a bit.
>
> **[4:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=279)** We can also see clearly where each piece of data is coming from.
>
> **[4:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=284)** Of course there are cons.
>
> **[4:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=287)** To see what data is available to pull, we would need to search the spec of each microservice, or we would need to look at the JSON object to see what's available.
>
> **[5:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=300)** There are pros and cons to every design.
>
> **[5:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=304)** In fact, there's often lots of review that happens before a single piece of code is written.
>
> **[5:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=310)** Design documents are created to design a given initiative, and they're reviewed dozens of times before it even gets started.
>
> **[5:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=319)** That's why design is so important.
>
> **[5:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=322)** By changing the design of this after the fact, we refactored a good portion of the code, which leaves us susceptible to bugs and errors.
>
> **[5:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=332)** The best case would be to feel very confident about your design before implementation begins.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (2), from. (1)
> **Code Identifiers:** profile_data (2), moderation_data (2), profile_json (1), post_json (1), moderation_json (1)
> **CLI Commands:** make (2), node (1)
> **Env Vars:** json (2)
> **Documentation:** spec (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create a README
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=0)** - [Instructor] A ReadMe file is a text file that contains information about your project and how to set it up to run.
>
> **[0:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=7)** It's very useful for other developers and even non-technical folks because it helps them understand what the application is for and how to use it.
>
> **[0:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=17)** In this video, we'll be creating a ReadMe for our Python script.
>
> **[0:22](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=22)** It'll have the file Format MD, which stands for Markdown Documentation.
>
> **[0:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=29)** It's a lightweight markup language that easily converts to text.
>
> **[0:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=33)** The first part of our ReadMe will include the project's title and description.
>
> **[0:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=43)** If we wanted to, we could include more background information on why the project was created in the first place.
>
> **[0:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=51)** Next, we'll add instructions for how to install the tool.
>
> **[0:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=57)** The user will clone the repo from GitHub and install the required packages using pip.
>
> **[1:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=63)** Then they'll run the application with Python main.py.
>
> **[1:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=69)** We haven't created a requirements.txt file, so let's do that.
>
> **[1:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=77)** A requirements txt file is a plain text file used to specify the dependencies of a Python project.
>
> **[1:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=85)** It lists the names and versions of the Python packages required by the project to run correctly.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=92)** In this case, we'll have two, plantuml and six.
>
> **[1:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=98)** We'll require plantuml to be installed and it should be at least version 0.3.0.
>
> **[1:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=106)** Six should also be installed with at least version 1.16.0.
>
> **[1:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=116)** Next, we'll add a section on usage to tell people how to use the tool.
>
> **[2:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=125)** We'll add a space here too.
>
> **[2:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=130)** This lets users know how they can use the tool by overriding the data in the example JSON files.
>
> **[2:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=137)** In fact, another enhancement could be letting the user input file names for each of the microservice data files.
>
> **[2:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=147)** Now the last section, contributing.
>
> **[2:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=151)** This will let other users know how to contribute to our project.
>
> **[2:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=160)** Other developers can contribute to our application using a forking branching strategy.
>
> **[2:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=166)** If you want to learn more about GitHub and branching, I encourage you to check out the GitHub courses here on LinkedIn Learning.
>
> **[2:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=174)** This ReadMe file is great.
>
> **[2:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=177)** Users will not only know what the tool is about and how to use it, but also how to contribute to the project if they want to continue enhancing it.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), pip (1)
> **Code Keywords:** let (2), case, (1), require (1), continue (1)
> **Versions:** version 0 (1), 3.0 (1), version 1 (1), 16.0 (1)
> **Tools:** github (3)
> **Definitions:** is a  (2), stands for (1)
> **File Paths:** main.py (1), requirements.txt (1)
> **Prerequisites:** install (2)
> **Env Vars:** json (1)

#### Add live call to generate live graph
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=0)** - [Instructor] The tool we created is great at troubleshooting past events.
>
> **[0:04](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=4)** We can take JSON data from old logs to analyze what happened in certain scenarios.
>
> **[0:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=11)** But what if I want to troubleshoot a live event and send live calls to these microservices to get fresh data?
>
> **[0:18](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=18)** That's what we'll accomplish in this video.
>
> **[0:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=21)** We don't have microservices for each of these data pieces up and running, but I'll show you how to generate a live call to create a more simple graph.
>
> **[0:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=31)** Here's the API we'll be using.
>
> **[0:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=34)** It generates random user data that we can visualize using a PlantUML graph.
>
> **[0:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=40)** This is the format it returns: an array with results containing user data.
>
> **[0:46](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=46)** We'll use this to visualize the user's name, age, phone number, and email, all in one node.
>
> **[0:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=55)** To call this API, we'll need to use the request module in Python.
>
> **[1:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=60)** Let's add that to our requirements.txt file.
>
> **[1:05](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=65)** Then we'll install them.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=68)** Pip install requirements.txt.
>
> **[1:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=75)** It's been installed.
>
> **[1:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=77)** Now to separate this out from our main project, we'll use a separate file.
>
> **[1:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=85)** We'll call it app.py.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=88)** The format of this file will be pretty similar but we'll fill it out with a different implementation.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=96)** In this file, we'll call the API and then create a diagram using PlantUML to visualize it.
>
> **[1:44](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=104)** We'll load in the data by calling the API using the request module.
>
> **[1:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=109)** Let's import it.
>
> **[1:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=112)** We'll use it in our load_data function.
>
> **[1:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=115)** We'll create a variable called response and run a get request.
>
> **[2:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=120)** We'll request information from the randomuser API.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=129)** If the status code from this request is 200 this means it was a successful call.
>
> **[2:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=136)** Let's check that.
>
> **[2:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=141)** If it was successful we'll return the response.json with the first user.
>
> **[2:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=149)** Otherwise, we'll print out an error and return None.
>
> **[2:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=159)** All right, here's our load_data function.
>
> **[2:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=162)** We added a timeout to our GET request so we're not always waiting for that response.
>
> **[2:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=169)** If we don't get it within five seconds, we'll time out.
>
> **[2:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=174)** Let's update the rest of the program to use this new loaded data.
>
> **[2:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=179)** We'll only create the PlantUML file If the response.json has valid data.
>
> **[3:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=186)** Let's update it.
>
> **[3:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=190)** If the response.json is not None, we'll continue with the program.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=201)** Let's feed in our response.json to our write_plantuml_file.
>
> **[3:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=208)** Inside of here, we'll create the node and visualize some data.
>
> **[3:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=213)** We'll set the nodeName to be the responses name, first, and last, with an underscore in between.
>
> **[3:47](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=227)** Then we'll use this nodeName to create the node.
>
> **[3:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=232)** We'll write object with the nodeName and a new line.
>
> **[4:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=240)** Then we'll add some attributes.
>
> **[4:03](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=243)** We'll add the email, phone, and age.
>
> **[4:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=250)** Perfect.
>
> **[4:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=251)** Let's run it to visualize the live random user data from the API.
>
> **[4:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=257)** We'll run python app.py.
>
> **[4:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=264)** Let's take a look at our image.
>
> **[4:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=266)** Here we have Kenan that has a phone number and an age.
>
> **[4:30](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=270)** Let's run it again.
>
> **[4:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=272)** We should see a different user because this is the random user API.
>
> **[4:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=280)** And we have another.
>
> **[4:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=282)** The application works as expected.
>
> **[4:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=285)** We get different data visualized beautifully.
>
> **[4:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=289)** We just generated a PlantUML graph using live data from an API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), module (2), function (2), continue (1)
> **Env Vars:** api (8), json (1)
> **File Paths:** response.json (4), requirements.txt (2), app.py (2)
> **CLI Commands:** node (3), python (2), pip (1)
> **Code Identifiers:** nodename (3), load_data (2), write_plantuml_file (1)
> **Prerequisites:** install (2)
> **API Endpoints:** get  (1)
> **Warnings:** troubleshoot (1)

#### Prepare a demo for greater organization
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=0)** - [Instructor] It's one thing to create a tool that helps you or even your team, but it's another thing to build something that impacts your entire organization.
>
> **[0:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=10)** By sharing your success you can see where else your project fits into the rest of the organization and how to make it even better.
>
> **[0:19](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=19)** The more people that know about what you're working on the greater chance you have at making an impact.
>
> **[0:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=26)** Typically sharing the outcome or current state of an initiative is done through something called a demo.
>
> **[0:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=33)** A demo is where you give a five to 10 minute presentation on your project initiative or whatever you're working on that makes an impact.
>
> **[0:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=42)** So let's create a great demo.
>
> **[0:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=45)** The first step is to understand your audience.
>
> **[0:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=49)** Who will be watching the demo?
>
> **[0:51](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=51)** Are they technical or non-technical?
>
> **[0:53](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=53)** Knowing your audience's technical knowledge, interests and motivations will help you tailor the demo to their needs.
>
> **[1:02](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=62)** Once you've identified your audience you need to decide on the best format for your demo.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=68)** Will you be presenting this in person or will you be creating a video or a slideshow?
>
> **[1:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=75)** While planning for this may seem obvious it can sometimes be forgotten until everyone is searching for a physical room where the presentation is or that Microsoft Teams link.
>
> **[1:27](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=87)** It's also important to consider whether you're running the demo live or using a prerecorded video.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=95)** If you're running the visualizer live you'll want to have good sample working data already set up in the JSONs to best explain your use cases.
>
> **[1:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=105)** I often format my demos in a very similar way as I format the initial proposal.
>
> **[1:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=112)** I discuss the problem our team was trying to solve, how we solved it, and then show a demo of how it works.
>
> **[2:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=120)** At the end, I'll discuss the impact and outcome of our solution to our team's process and application.
>
> **[2:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=128)** I also make sure to practice demoing with a lead on my team to see if there's anything else to add or highlight.
>
> **[2:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=136)** Getting feedback or initial questions before you demo can be very helpful before you get put on the spot in the meeting.
>
> **[2:24](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=144)** You can even ask people from your team to ask filler or pre known questions at the end of your demo.
>
> **[2:31](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=151)** This can encourage more discussion.
>
> **[2:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=155)** While we focused on presenting at the end of your initiative, sometimes you'll be asked to present while the initiative is ongoing.
>
> **[2:43](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=163)** The software development industry is known for these informal demos where you take pieces of your project and present it slowly over time as it progresses.
>
> **[2:55](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=175)** Mastering this skillset and being able to translate technical initiatives to managers, product owners, and stakeholders can help you stand out and make an impact as a software engineer.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### Contributing to your engineering organization
> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=0)** - [Kathryn] To contribute to an engineering organization, there are several key skills that are essential.
>
> **[0:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=6)** Strong technical skills are a must have as engineering involves complex problem solving, data analysis, and programming.
>
> **[0:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=15)** We've done this by parsing JSON data in Python and translating it into PlantUML code that can be rendered into a visual diagram.
>
> **[0:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=25)** Effective communication skills are also crucial.
>
> **[0:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=28)** You have to be able to communicate technical concepts to non-technical stakeholders, collaborate with team members, and document their work clearly and effectively.
>
> **[0:40](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=40)** We've done this through demos and documentation, by walking through how to prepare a good demo, and how to create a read me.
>
> **[0:48](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=48)** Something we touched on lightly was a growth mindset.
>
> **[0:52](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=52)** Every time we completed a user story or had to reconsider a design, we embraced the challenge.
>
> **[0:59](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=59)** In reviewing our code, we learned from our mistakes and continuously improved not only our skills, but also the output of our work.
>
> **[1:08](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=68)** This is particularly important in engineering where new technologies and methodologies are constantly emerging and the ability to adapt and learn quickly is essential.
>
> **[1:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=81)** A good portion of this course had to do with planning.
>
> **[1:25](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=85)** We looked at the problem at hand and created a plan on how to solve it not only with what technologies we would use and how they would work together, but how our team would accomplish the task.
>
> **[1:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=98)** These project management skills are incredibly valuable as you become a more senior engineer.
>
> **[1:45](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=105)** It's the ability to prioritize tasks, manage timelines, and communicate progress effectively that are the keys to delivering successful outcomes.
>
> **[1:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=116)** Congratulations on finishing the course.
>
> **[1:58](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=118)** Becoming a better software engineer doesn't end with mastering a single project or a programming language.
>
> **[2:06](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=126)** You may have stepped out of your comfort zone by taking this course involving a series of different technologies, and I hope it encourages you to continue stepping out of your comfort zone as a technologist.
>
> **[2:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=140)** There's always something new to learn.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=143)** My name is Kathryn, and I hope to see you again in some of my other LinkedIn Learning courses.
>
> **[2:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=149)** You can check them out on my LinkedIn instructor page or follow me on social media at BlondieBytes.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** continue (1)
> **Env Vars:** json (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [[Kathryn Hodge]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/case-study-visualize-complex-microservice-data-using-python-4400083/codespaces)

## Skills Covered

- Python (Programming Language)
- Microservices

## Path Context

### In [[Python Hands-On Practice]]
← [[Python for Data Analysis- Solve Real-World Challenges]] | **13 of 14** | [[Level Up- Advanced Python]] →

### In [[Master Your Python Skills]]
← [[Level Up- Advanced Python]] | **11 of 11**

## Appears In

- [[Python Hands-On Practice]]
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