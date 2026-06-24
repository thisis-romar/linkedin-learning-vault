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
  - '[Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)'
  - '[Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)'
prev_courses:
  - '[Python for Data Analysis- Solve Real-World Challenges](Python%20for%20Data%20Analysis-%20Solve%20Real-World%20Challenges.md)'
  - '[Level Up- Advanced Python](Level%20Up-%20Advanced%20Python.md)'
next_courses:
  - '[Level Up- Advanced Python](Level%20Up-%20Advanced%20Python.md)'
  - null
path_nav: '[{"path":"Python Hands-On Practice","position":13,"total":14,"prev":"Python for Data Analysis- Solve Real-World Challenges","next":"Level Up- Advanced Python"},{"path":"Master Your Python Skills","position":11,"total":11,"prev":"Level Up- Advanced Python","next":null}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/microservices
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Case%20Study-%20Visualize%20Complex%20Microservice%20Data%20Using%20Python.md)

![Case Study: Visualize Complex Microservice Data Using Python](https://media.licdn.com/dms/image/v2/D4E0DAQHW6oJSW_gA6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694730089192?e=2147483647&amp;v=beta&amp;t=I3Mq81s-VQVXPkz21wG9r1pUodQ8EG0k3Q_EjcJ2Jtc)

# Case Study: Visualize Complex Microservice Data Using Python

> As a software engineer, your day-to-day duties can seem like an endless to-do list, so it’s often difficult to find the time to develop new skills to grow and advance your career. How do you make an impact with your organization while also completing your core work? In this course, Kathryn Hodge takes you through the process of coming up with an idea for an initiative, planning it, and then implem

> [LinkedIn Learning](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python) | 1h 25m | Advanced | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [How to make an impact in your organization as an engineer](#how-to-make-an-impact-in-your-organization-as-an-engineer)
  - [Why use Python to build automation simple tools?](#why-use-python-to-build-automation-simple-tools)
  - [Using GitHub Codespaces](#using-github-codespaces)
- [**1. Defining the Problem and Researching a Solution**](#1-defining-the-problem-and-researching-a-solution) (4 videos)
  - [What are microservices?](#what-are-microservices)
  - [Disadvantages of the microservice architecture](#disadvantages-of-the-microservice-architecture)
  - [How to solve for the challenges introduced by microservices](#how-to-solve-for-the-challenges-introduced-by-microservices)
  - [How to research and find a technology that will help solve technical problems](#how-to-research-and-find-a-technology-that-will-help-solve-technical-problems)
- [**2. Learning PlantUML**](#2-learning-plantuml) (4 videos)
  - [What is PlantUML?](#what-is-plantuml)
  - [Experiment with PlantUML](#experiment-with-plantuml)
  - [How can you work with PlantUML in a maintainable way?](#how-can-you-work-with-plantuml-in-a-maintainable-way)
  - [How to decide if PlantUML will work for a use case](#how-to-decide-if-plantuml-will-work-for-a-use-case)
- [**3. Planning for the Development**](#3-planning-for-the-development) (3 videos)
  - [Create an implementation plan for the initiative](#create-an-implementation-plan-for-the-initiative)
  - [How to convince your team to pursue the initiative](#how-to-convince-your-team-to-pursue-the-initiative)
  - [Divide work into user stories](#divide-work-into-user-stories)
- [**4. Building a Python Script to Convert Data into PlantUML Code**](#4-building-a-python-script-to-convert-data-into-plantuml-code) (9 videos)
  - [Establish input of the script](#establish-input-of-the-script)
  - [Establish the output of the script](#establish-the-output-of-the-script)
  - [Design implementation for script code](#design-implementation-for-script-code)
  - [Load JSON data from a file](#load-json-data-from-a-file)
  - [Iterate through JSON data and store effectively](#iterate-through-json-data-and-store-effectively)
  - [Write simple PlantUML code to a file](#write-simple-plantuml-code-to-a-file)
  - [Export PlantUML code to a PNG diagram with Python](#export-plantuml-code-to-a-png-diagram-with-python)
  - [Add data to each node in the PlantUML graph](#add-data-to-each-node-in-the-plantuml-graph)
  - [Add edges to the PlantUML graph](#add-edges-to-the-plantuml-graph)
- [**5. Going Above and Beyond**](#5-going-above-and-beyond) (4 videos)
  - [Review your code for inefficiencies and unnecessary complication](#review-your-code-for-inefficiencies-and-unnecessary-complication)
  - [Create a README](#create-a-readme)
  - [Add live call to generate live graph](#add-live-call-to-generate-live-graph)
  - [Prepare a demo for greater organization](#prepare-a-demo-for-greater-organization)
- [**Conclusion**](#conclusion) (1 videos)
  - [Contributing to your engineering organization](#contributing-to-your-engineering-organization)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [How to make an impact in your organization as an engineer](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-make-an-impact-in-your-organization-as-an-engineer?u=76281980&t=0)** - [Kathryn] As a software engineer, it's easy to get caught up in the day-to-day, picking up user stories and addressing immediate needs. But in order to grow your career, you must branch out and build tools that make an impact. In this course, we'll walk through the process of coming up with an idea for an initiative, planning it, and then implementing the solution with your team. At the end of the course, we'll discuss how to share these accomplishments with others through demos and leverage your relationships. Hi, I'm Katheryn, and I'm a software engineer. Whether you're an experienced engineer looking to expand your skillset or a junior engineer eager to make an impact, this course will provide you with the tools and knowledge you need to build tools that can make a real difference in your organization. Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Cross-References:** coming up (1)
> **Speakers:** - [kathryn] (1)

#### [Why use Python to build automation simple tools?](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/why-use-python-to-build-automation-simple-tools?u=76281980&t=0)** - [Software Engineer] [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is a great tool for task automation and data visualization because it allows you to do so much with little code. There are also so many compatible libraries you can use to simplify tasks and it has extensive documentation with a great online community. As a software engineer, it's often my language of choice for building simple automation tools because most engineers can read it, understand it, and make small contributions to it. And it's not even the language I use in my day-to-day. Most of the time I use [Java](../../Skills/Software%20Development/Java.md) or TypeScript to build and maintain platform APIs, but Python is great for automating small chore like tasks with little overhead, so I can write a small bit of code and get a lot out of it. Depending on what you're automating and what challenge you're solving, it may not perfectly fit your needs, and that's okay. Other languages exist for that exact reason, but most of the time Python is my language of choice for simple automation and we'll be using it in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** python (3), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [software (1)

#### [Using GitHub Codespaces](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=0)** - [Instructor] Before jumping into the course, there's a few logistics we should talk about. We'll be using [GitHub](../../Skills/Software%20Development/GitHub.md) for the exercise files that'll go along with each video. To access the code for a given video, you'll go to the appropriate branch in GitHub. The format is chapter number underscore video number and then B or E, depending on whether the code is in the beginning state or ending state for that video. For example, the starter code for the second video in chapter four will be found in 04_02B. That stands for chapter four, video two, and B for beginning code. The ending code for this video would be in branch 04_02E,
>
> **[0:54](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=54)** where E is for ending. By clicking the different branches. I can view the code online, which is great, but if you want to work with the code and run it, you have a few options. One option is to go to the branch with the code you want and then download the Z file. Then you'd have to download the dependencies to run that code. This way is the old way of doing things. Recently, a new way was introduced with GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md). GitHub Codespaces is a cloud-powered environment built into GitHub that makes it easier for us to write code and not worry too much about the setup. To set this code up in a GitHub Codespace, I'll fork it over to my own account and create my own version of it. Let's fork it. We'll fork over all of the branches, so we'll uncheck this box. Now I have my own version of all the exercise files. Let's open up a Codespace. We'll go to 04_04B and open it up. This is the beginning code for chapter four, video four. To create a code space, I'll click the code button, code spaces, and create a code space on this branch. Within our Codespace,
>
> **[2:26](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/using-github-codespaces?u=76281980&t=146)** a few things are already set up for you. One is [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3. We can test it with python --version. We have Python 10 installed. Now this is running code from branch 04_04B. If we ever want to make a change in this branch, we can do that right here in the virtual IDE. We'd make our change and then commit it with source control. We'll mostly be using code spaces in chapters four and five to write the implementation for the solution we design in earlier chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (2)
> **Tools:** github (6)
> **CLI Commands:** python (3), make (2)
> **Exercise Files:** exercise files (2), download the (2), starter code (1)
> **UI Navigation:** go to (3)
> **Definitions:** stands for (1), is a  (1)
> **Prerequisites:** setup (1), set up (1)
> **Env Vars:** ide (1)


### 1. Defining the Problem and Researching a Solution

[↑ Back to Table of Contents](#table-of-contents)

#### [What are microservices?](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=0)** - [Instructor] [Microservices](../../Skills/Software%20Development/Microservices.md) are a common architecture in modern [Software Development](../../Topics/Software%20Development.md). They enable quick delivery of large and complex applications by breaking up the software into independent services. Each service runs its own process and it communicates with the client using lightweight protocols. Applications are built as a collection of smaller services, rather than one whole app. Before, everything lived in one monolithic application. If you think of a social network, imagine all the code regarding profile information, the social feed, discover page, login functionality, and more living in one code base. Yikes. If it all lived in one place, it would be much harder to scale because you'd have to scale the entire application, rather than just one component. What happens if one feature breaks in a deployment? It could bring down the entire application. If they were separated into independent services, then only that feature would go down. With a monolith, development also becomes harder because components and layers become more tightly coupled. Although developers might be using SOLID and OOP principles, it might become more tightly coupled just by living in the same code base. The microservices architecture seeks to resolve some of these issues. Instead of focusing on a full application,
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=95)** development teams can focus on specific components or services. This means instead of having one application with the profile information, social feed, discover algorithm, it would be broken up into smaller, independent services. This allows teams to concentrate on the development of their service without needing to coordinate with other teams, except for agreeing on how their components will interact. It also provides more independence, because each microservice can be built on separate servers with whatever technology that makes sense for the problem at hand, not to mention the ability to scale individual features independently and have a higher availability due to everything being less coupled. Now, monoliths did exist for a reason. Big, complex applications weren't created overnight. They took years and years of development. 20 years ago, applications were less complex, and so everything could live in the same code base and there were no problems. As applications have gotten more sophisticated, the need to break them down into separate independent services became more apparent as companies began to prioritize scaling, high availability, and component independence. I challenge you to go online and search for some examples of the microservice architecture being used at large tech companies like Amazon and Netflix. Start a discussion about what you find in the comments
>
> **[3:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-are-microservices?u=76281980&t=190)** or in your next team meeting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** solid (1), oop (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Disadvantages of the microservice architecture](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=0)** - [Instructor] While [Microservices](../../Skills/Software%20Development/Microservices.md) can help increase availability, they do have a few disadvantages. When everything is a separate service, communication with the other services happens over the network. This adds some performance overhead due to network latency. That communication between services will also need to be secure. This means adding additional security in the messaging system that connects the services, whether that's through an HTTP protocol, or queue, or some other system. In general, microservices can be hard to maintain without automation and advanced project management practices, such as [agile](../../Skills/DevOps/Agile%20Development.md). In order for microservices to be successful in an organization, a strong [DevOps](../../Topics/DevOps.md) team must be in place that helps deploy and monitor the microservices. Microservices introduce all the complexities of a distributed system, so there has to be someone making sure all the independent services fit into place. As a distributed system, microservices also make it more difficult to understand the life cycle of an application as a whole. Even though teams are focused on their component, they should understand how their component is used end-to-end in order to create the best product. Without understanding and debugging the full process end-to-end, it can be difficult
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/disadvantages-of-the-microservice-architecture?u=76281980&t=95)** to find bugs and resolve them. Oftentimes, errors can go unnoticed. That being said, no architecture style is perfect. Everything has its pros and cons, so it's important to understand the implications of the architectural approach you take when building or maintaining an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (6), [Agile](../../Skills/DevOps/Agile%20Development.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [How to solve for the challenges introduced by microservices](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=0)** - [Instructor] Being able to identify challenges is an important part of being a software engineer. An even more important part is being influential in deciding when and how to solve them. That's how you can create change in your organization. Taking this approach when considering [Microservices](../../Skills/Software%20Development/Microservices.md), one of the challenges of microservices is that data is spread across many platforms. This means it can be difficult to get a clear picture of the state of an account or a connection of accounts because you have to cross reference many different code bases and log sets. Now, let's say, you find all the logs across the different log sets that give information for a specific account. They probably aren't in an easy to read format. Sure, they might be in [JSON](../../Skills/Web%20Development/JSON.md), but when you're looking at 10 different JSON files, trying to figure out how they're connected and what they represent, it gets difficult. There are other challenges as well as we mentioned in the last video. But in this course, we'll be focusing on this challenge. How do we visualize data spread across many different platforms? This isn't just a microservices problem, it's a distributed computing problem. By nature, the work is distributed across multiple platforms, but there are times when you want to get a full picture of what's going on. Something that might be useful is a diagnostic tool
>
> **[1:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=94)** that combines and visualizes data from different microservices. You could input in accounts identifiers and some authentication and it would output a diagram that visualizes the available data pieces across the entire distributed platform. For example, let's imagine we work at a social media company. There are several different microservices each with their own responsibility. One manages profile information, another manages the social feed, there's one that manages the discover page. Let's say there's a user that automatically got banned from the platform based on what they'd been posting to their account. The user has over 25,000 followers and they want a manual review on their account activity. As the social media company, we could just say, no, we aren't going to give a manual review and you're just banned. But since the user has a substantial following, it appears to be worth the manual review. After all, we do want popular creators on our platform. So, let's say we do the manual review. How are we going to do that in a microservices world. Everything is so distributed and there are many reasons why it could've been banned. The account could have been flagged automatically by an algorithm scanning content posted to the platform. It could've also been reported manually by various users.
>
> **[3:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-solve-for-the-challenges-introduced-by-microservices?u=76281980&t=191)** It could have been hacked and an unauthorized user could have posted content to the account. This is the challenge we aim to solve in this course. How do we solve it? We'll create a diagnostic tool that allows you to feed in logs or live data and visualize the data of an account to figure out why it was banned. It could also be used for other cases but this will be the primary case we'll solve for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Analogies:** picture (2), for example (1), imagine (1)
> **Env Vars:** json (2)
> **Cross-References:** we mentioned (1), in the last (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [How to research and find a technology that will help solve technical problems](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=0)** - [Presenter] Knowing how to research different technologies and decide whether they can be used to solve a given problem is key in [Software Development](../../Topics/Software%20Development.md). Not every technology fits every problem, but finding the right technology can help. Our challenge is to create a diagnostic tool that allows us to visualize the data of an account. The technologies we use to build this tool must be maintainable, easy to use, easy to understand, modern, and secure. It's a tall order, but let's walk through it. Maintainability. It must be maintainable in the sense that it works with modern, commonly used languages. Can you use it with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)? Can you use it with Go? Is it deprecated? Is it an actively maintained open-source project? Will it still work in a year? Are you using the latest version of it? Anytime you introduce a new tool to your team, people will probably question it. Is it secure? Can new software engineers contribute to it and easily use it? How hard is it to add a new feature? A new tool means more complexity to the software that already exists today for your team. It means new software to maintain and upkeep, which means it really has to provide a purpose in order for the team to actually follow through with using it.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-research-and-find-a-technology-that-will-help-solve-technical-problems?u=76281980&t=92)** Ideally, you're building it with a language the team already understands and the new component or new technology might be a library or a framework. That way, they only have to learn one small component rather than a whole new genre of software development. This means that how you build the tool and what technologies you use will likely depend on the team you're on and their skillset as well as your own. The goal is to make the barrier to entry as low as possible. How can you build something that's easy to maintain and easy to build, but still does the job you need it to do? You don't want to add too much additional overhead to your team, but you still want to add value with this new thing you're building. That's the mindset you have to have when deciding how to build your tool and what technologies to use to build it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** means that (1)
> **Speakers:** - [presenter] (1)


### 2. Learning PlantUML

[↑ Back to Table of Contents](#table-of-contents)

#### [What is PlantUML?](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=0)** - [Speaker] PlantUML is an open-source tool that helps you quickly create different types of diagrams, using a human readable language. These could be sequence diagrams, class diagrams, component diagrams, and more. With the sequence diagram, we could represent the different interactions between several services. Let's say we wanted to show these interactions in PlantUML code. It would look something like this. We'd have start and end UML tags and then two participants, a client and a server. The first interaction would be the client requesting data from the server. Since the interaction starts with the client, we would have the client and then an arrow to the server. The description for the interaction would be request for data. Then we'd have a second interaction for the response. The response is sent by the server. So it would start with the server and then go to the client. The description would be response with data. We do this again with a second request response pair where the client requests information and the server sends it. This PlantUML code would generate a nice diagram, showing the interaction between the client and the server. In fact, we can actually render this online with the PlantUML live editor. We'll go to [PlantUML.com/PlantUMLUML](https://PlantUML.com/PlantUMLUML).
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/what-is-plantuml?u=76281980&t=99)** Inside the editor, we'll paste our code. Then we'll click submit. Scrolling down, there's our diagram. Now this is just one example of using PlantUML to generate diagrams, but there are so many different types of diagrams we can create based on different types of data, as we can see here. Each type of diagram is also extensively customizable with robust documentation, allowing you to present information in just the way you want. It's an option, as a tool, to display our microservice data.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **URLs:** [plantuml.com](https://plantuml.com) (1)
> **Env Vars:** uml (1)
> **Definitions:** is an  (1)
> **Speakers:** - [speaker] (1)

#### [Experiment with PlantUML](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=0)** - [Instructor] Before investing in a tool, it's important to experiment with it and see how easy it is to achieve the outcome you want. Let's use it to visualize some microservice data. Let's say our software platform contains three main [Microservices](../../Skills/Software%20Development/Microservices.md). The first is a user profile service that's responsible for managing user profile information. Then we'll have a posts management service that's responsible for managing, creating, deleting, and editing posts. Lastly, we'll have a moderation service, which automates the review process for a post and determines whether or not it violated community guidelines. Given the three microservices, we want to find out how a given account got banned. We'll create a visualizer that shows us the activity of the account and will manually verify if this account deserves to be banned. The first step to visualizing this would be to visualize the profile data using a node. We can create a node with the keyword object and then use the name of the node to add information onto it. Let's paste this in to our PlantUML editor. Here, the account username is Blondiebytes. And we have data associated with the account. It includes a name, bio text, the link_in_bio, and whether or not the account is reported.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=96)** When we render this with PlantUML, we'll get a nice node with different information about the user. And there it is. We have the node with the profile name and different information about it. In addition to this, we'll also want to display information about each report that caused the account to be banned. For this course, we won't be considering the images, only the text. We'll add nodes for each report along with what was in the post that was reported.
>
> **[2:12](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=132)** (keyboard clicking) Here we've added three more nodes. One for each report on the account. Some of them were manual, and others were automatic. For the manual reports, we could also retrieve data about who these reporters were, and what they were posting. Maybe they were the ones that should have been banned in the first place. (keyboard clicking) Now we have a node for the user that reported Blondiebytes. We also have a node for their recent posts. To organize this, we'll add some arrows. We'll add an arrow from the profile node to each node that has associated information. This means adding an arrow from Blondiebytes to each report. (keyboard clicking) We'll also add an arrow from Browniebits (keyboard clicking) to the recent posts. (keyboard clicking) Let's walk through these nodes. Here, we can easily see information about the profile that was reported, and the different reports that occurred. We can also see the posts that were reported, and what their text was. This allows us to manually analyze the account and the reports using visuals. It lets us see if there was any foul play.
>
> **[3:49](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/experiment-with-plantuml?u=76281980&t=229)** This is a hard coded example, but we've proven that it is in fact possible to visualize this data using PlantUML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2)
> **CLI Commands:** node (9), find (1)
> **Non-Speech:** (keyboard clicking) (5)
> **Definitions:** is a  (2)
> **Code Identifiers:** link_in_bio (1)
> **Speakers:** - [instructor] (1)

#### [How can you work with PlantUML in a maintainable way?](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=0)** - [Instructor] When deciding on whether a technology will work for a given use case, it's important to determine the tool's maintainability. Let's consider PlantUML. It's safe to say no one will be writing PlantUML code to generate these diagrams. Instead, we would need to generate this code using a more commonly used technology, such as [Java](../../Skills/Software%20Development/Java.md) or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). If we could generate PlantUML code using Python for example, we could feed it into the PlantUML editor and automate the generation of these diagrams. In fact, after doing some research, there's actually a Python package we can use to generate PlantUML diagrams. All we have to do is feed it a file with PlantUML code and it'll generate the PlantUML diagram. This means if we could create the PlantUML code using Python, we could directly feed it into the generator and it would generate a diagram. This would mean the automation logic would be in Python and that's what would be maintained, not the PlantUML code. Considering this with our use case, we would read and translate the data from the different [Microservices](../../Skills/Software%20Development/Microservices.md) using Python. Then we would also use Python to generate the PlantUML code from this microservice data. This will make it easier to work with PlantUML since software engineers are more familiar
>
> **[1:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-can-you-work-with-plantuml-in-a-maintainable-way?u=76281980&t=94)** with the Python programming language than with PlantUML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8), [Java](../../Skills/Software%20Development/Java.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **CLI Commands:** python (8), make (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [How to decide if PlantUML will work for a use case](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=0)** - We've proven that we can work with PlantUML in a maintainable way. We can use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) as an intermediary tool to translate microservice data into PlantUML code. Now, we also need to prove that the tool is flexible modern, mature, and well-documented. Let's check out the documentation for PlantUML. It's an open source tool available for free. Looking at the description it's meant for users that like using text to generate professional looking diagrams. That sounds like us. From our experimentation with the tool we found out that it's pretty flexible and there are many different ways we can display our data. Each different type of diagram also has extensive documentation. This means it'll be fairly straightforward to add additional visual components to our diagrams, to find out if this tool is modern or mature. Let's see if it's actively being worked on. We want it to be actively maintained, but we don't want big feature changes that could break our diagrams. Let's go back to the FAQ. There's a statement in here that affirms the tool's maturity by sourcing [Google](../../Glossary/Service/Google.md) Trends and the tools mentioned in a few books. This means it's not brand new, which is good. We can also Google PlantUML
>
> **[1:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-decide-if-plantuml-will-work-for-a-use-case?u=76281980&t=94)** and see if it's being asked about on Stack Overflow. This gives us some insight on whether there's a developer community around this tool. It's important that a tool is used within the developer community because it makes it easier to Google and troubleshoot when something goes wrong. In other words, it makes it more likely that there's a stack overflow question answered about a bug you're facing or someone else trying to do what you want to do with the tool. If no one else has adapted the tool. It makes it harder to research and debug when something goes wrong or when you want to use the tool in a unique way. So is this tool good enough for our use case? We've proven the tool is somewhat mature. It is flexible with the diagrams we can create with it. It is maintainable in the sense that we can generate PlantUML code in a diagram using Python. It is well-documented and free to use. These are all good things. There may be a security concern and that we're feeding the microservice data into a Python library so that library might need to be looked at. But overall, this tool appears to check a good number of boxes for us to consider using it for visualizing microservice data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Google](../../Glossary/Service/Google.md) (3)
> **CLI Commands:** python (3), find (1)
> **Documentation:** the documentation (1), stack overflow (1)
> **Env Vars:** faq (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - we (1)


### 3. Planning for the Development

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an implementation plan for the initiative](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=0)** - [Instructor] Once you know the problem you want to solve and how you want to solve it, you need to create a plan for how you and your team will implement the solution. So far, our solution is to create a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script that reads microservice data from various [Microservices](../../Skills/Software%20Development/Microservices.md). Then it'll generate a visual diagram using plant UML code. The first step would be figuring out what we want the input of the script to be. What microservices are we going to call and what data will we read from them? We would start with a minimal proof of concept that reads the core necessary information, and we can always add more data later. The next step would be creating a Python script that reads in the data from the microservices. We'll need to know what format the data is in and how it can be fed into the script. We'll also need to know where we'll get the data. Will it be a live call? Will it be from the logs? Once the data has been read in, we'll want to organize it within the script using structures so we can easily access it when it's time to visualize it. With the data organized, we can move on to the next big step. We'll need to create the plant UML code that will be used to generate the diagram. We could use a temp file or a regular file to store this plant UML code. In this step, we'll be translating the microservice data into the plant UML code format so it can be visualized.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-an-implementation-plan-for-the-initiative?u=76281980&t=96)** The last main step for the implementation is to generate the plant UML diagram from the plant UML code in Python. We've already identified a Python library we can use to do this, but we'll need to know how we can execute it in a Python script, as well as if we need to add any additional parameters to the library call. We can call this phase one: creating a minimal POC. This would be the basic tool that can be used locally on any machine that has Python installed. After phase one, there are a bunch of different directions you could go in. You could spend more time enhancing the diagrams, making them as readable as possible. You could write extensive documentation on what the tool is and how to use it. You could host the tool somewhere and create a UI instead of having people run it locally on their machines. If this diagram is super useful, you could also create a system that generates it automatically as a part of a process that already runs and attaches the diagram to the logs or analytics. The possibilities are endless, but to get a new project off the ground, you have to start with a doable, minimal POC that provides value, which is what we have here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Microservices](../../Skills/Software%20Development/Microservices.md) (3)
> **Env Vars:** uml (6), poc (2)
> **CLI Commands:** python (6)
> **Speakers:** - [instructor] (1)

#### [How to convince your team to pursue the initiative](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=0)** - [Instructor] With the well thought out problem, solution, and implementation plan, you have all the tools you need to propose this idea. Now it's time to convince your team that this initiative is actually worth pursuing. To do that, you need a good pitch. You need to prove that the problem you're solving is actually a problem that needs to be solved. If the problem statement you pitch does not resonate with your team, then they won't see the point in doing the work. In our case, the problem we're solving is that data is distributed through many software systems, making it hard to visualize for the band account use case. If the company doesn't do manual reviews of band accounts or does not want to analyze the data of band accounts, then this is probably not an initiative worth pursuing or at least not worth pursuing for now. However, if you think it's a problem worth solving, it's worth it to bring it to your team for a pitch. Even if they aren't convinced on your main problem statement, parts of it could be used for another initiative. For example, there might be another use case not involving band accounts where the team would want to visualize data that's spread across the distributed system. Once you've convinced your team that the problem is a problem worth solving, you need to prove that the solution actually solves the problem. In our case, would the proposed system
>
> **[1:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=93)** actually make it easier to understand and visualize data that lives in our [Microservices](../../Skills/Software%20Development/Microservices.md)? Maybe your team is confused by the PlantUML diagrams and so you might have to go back to the drawing board on visualization technologies. A teammate might also suggest a different tool which you can research after the meeting and compare with PlantUML. With the problem and solution proven and agreed upon by the team, you need to pitch your plan on how you'll do it. Given bandwidth and priority, you could give several different options with the preferred option based on which way you think the team would be most successful and get the most bang for their buck. This could all be done in a single meeting or you could have separate meetings for discussing the problem and proposing the solution to the problem. No matter what, I would suggest meeting with one of the team leads or others that will be involved in the implementation before proposing it to the entire team. They can provide initial feedback on your pitch and help tailor it to get the best outcome. In our case, the initiative mainly involves backend but you could meet individually with one of the leads that runs the other microservices your team is not in charge of. Getting a second review or a second set of eyes on your proposal, especially someone with more domain knowledge and experience can help you be the most successful
>
> **[3:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/how-to-convince-your-team-to-pursue-the-initiative?u=76281980&t=187)** when you finally do pitch it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Divide work into user stories](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=0)** - [Host] Once your proposal has been approved it's time to break it up into user stories. This assumes your team is using an [agile](../../Skills/DevOps/Agile%20Development.md) like process for their [Software Development](../../Topics/Software%20Development.md) work. A user story is a unit of work in the agile framework used to describe an angle of a particular user's need. In other words, it's a written description of a feature or functionality that a user once included in a software product or system, they're used to capture and prioritize requirements for an initiative, so that work can be done in an incremental manner. It ensures that the development efforts meet the needs of the users and are aligned with the business objectives. There are several different formats for creating user stories, but one of the most common is this one. As a type of user, I want some goal or objective so that some benefit or outcome occurs. We need to break up our initiative into user stories like these, so it can be completed iteratively over time. One example of a user story might be, as a manager I want to know what [Microservices](../../Skills/Software%20Development/Microservices.md) and what microservice data will be used in the visualizer and how we want to retrieve it so that we can better understand what data will be visualized across our distributed system and how we'll access it. In fact, this user story might be done before the initiative is approved, to better understand how
>
> **[1:34](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=94)** the visualizer solution will solve the problem at hand, we identify the story with an acronym and a number, LIL 164, so we can refer to the story as it's being worked on. Another user story might be, as a software engineer, I want to create a basic [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script that reads in the proposal data from user story LIL 164, so that it can later be visualized with PlantUML. This is a smaller user story that involves creating a Python script that reads in data. Depending on how your team is structured, you may want to create smaller user stories or user stories that involve smaller pieces of work instead of big user stories. If your team has lots of junior engineers, smaller user stories are better because they're heavily defined pieces of work that provide more transparency on exactly what is being done. Junior engineers can get lost in a big user story, making it difficult to track true progress each day. If your team has lots of senior engineers they'll need less guidance and will be able to tackle larger portions of work with a larger user story, for this course, each video in chapter four will represent us completing a user story. The video will start by defining the user story at hand. Then we'll perform the work needed to complete
>
> **[3:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/divide-work-into-user-stories?u=76281980&t=189)** the user story and improve our system. Sometimes this will involve coding and other times it will not. It might involve creating a document with requirements or defining a design. We'll tackle it all in order to complete a small POC that visualizes microservice data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Agile](../../Skills/DevOps/Agile%20Development.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Env Vars:** lil (2), poc (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** python (2)
> **Speakers:** - [host] (1)


### 4. Building a Python Script to Convert Data into PlantUML Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Establish input of the script](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=0)** - [Instructor] Before writing the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script, we should establish what the input will be, so we know what will be visualized. This video will complete the following user story: As a software engineer, I want to know what microservice data will be used in the visualizer, and how we'll retrieve that data so that we can establish the input of the Python visualizer script. The output of the story will be documentation, a document containing what data will be used and which microservice that data comes from. While there could be dozens and dozens of [Microservices](../../Skills/Software%20Development/Microservices.md), we'll be focusing on three for the purposes of this course. The first is a user profile service that's responsible for managing user profile information. We can retrieve its data with the username. This is the data it returns. There are fields for username, biography, link, whether the user is reported or not and more. Looking at this data, it seems like most of this information would be useful to know about a user who may have been misreported. The number of followers, following and posts let us know how active they are on this social media service. The boolean values allow us to confirm they've been reported. They also let us know if they've been shadow banned. The link, biography, name and username may also be useful to see if there's anything against
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=95)** the guidelines linked in the profile. We'll use all of this data in our visualizer. The second microservice will be a post management service that's responsible for managing the creation, deletion and modification of posts. We can retrieve information about a set of recent posts by using the username, or we can use the post ID to retrieve a certain post. Here's the data. For each post returned with a given query, there will be a caption, different images and comments. The last will be a moderation service. This microservice automates the review process for a post and determines whether or not it violated community guidelines. To retrieve information, we would give it a post ID, and it would return whether or not it was manually reported and why. Here's the data. Depending on how the post was flagged, one of three types of responses could be returned. If the post was manually reported by another user, we would have is_manual set to true and another field called reported_by that would represent the user that reported this piece of content. If the post was flagged automatically, is_manual would be false, and the reported_by field would not exist. If the post has not been reported,
>
> **[3:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-input-of-the-script?u=76281980&t=187)** then we would get back Less fields, and is_reported would be set to false. Now, each piece of data returned by the microservice is useful, but some of it we already have. the caption, image and post ID would've already been retrieved from the post management service. We don't need those. So we'll only keep track of the is_manual and reason fields and the reported_by field, if it exists. Let's consolidate this all into an easy to read document. Here's the data we want to visualize from the different microservices. By seeing this data all on one page, we'll be able to better understand whether a user was reported accurately or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (2)
> **Code Identifiers:** is_manual (3), reported_by (3), is_reported (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Establish the output of the script](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=0)** - To finalize the requirements, we should also define the output of the script more fully. We want to create bounds for what we'll visualize and how with PlantUML. Given that we know what input data we'll be working with, we can now define the output. We'll be completing the following user story. As a software engineer, I want to have a better idea of what the visualization will look like given the input data, so we can establish the output of the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) visualizer script. Let's craft some input data and use it to create hard coded PlantUML code. This will help us better visualize the data. The Python visualizer script will eventually automate this process. In our code space, we have three [JSON](../../Skills/Web%20Development/JSON.md) files. We have one representing the profile service response. We have another that represents the response from the post management service. The last one represents the moderation service response. This is our sample input data. Let's map it out into a diagram using PlantUML. Considering our data, the first step is to decide what nodes each piece of data will be on. For this example, we'll have two nodes. The first node will represent information about the profile.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=95)** It will have the username, biography, hyperlink, number of followers, and more. Let's create it. (keys clicking)
>
> **[1:57](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/establish-the-output-of-the-script?u=76281980&t=117)** The second node will have information about the reported post. It'll be labeled as "post" with its post ID. On this node, we'll have the caption when the post was published, who it was reported by, and why it was reported. For each comment, we'll create an attribute comment with the username of the user that left the comment. Let's take a look at the diagram. Here we have a profile node and a post node. This example had just one post but if there were multiple posts, they would each have a separate node so we could visualize them together. Let's add an arrow that'll connect the profile node to the post node. Here's the output. This is an example of a diagram we want the script to generate. In the real world, this would be reviewed by our team to ensure this is an agreed upon output diagram. However, given this course, we can say we've officially established what the output of the script should be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** node (8), python (2)
> **Definitions:** is an  (2)
> **Env Vars:** json (1)
> **Speakers:** - to (1)
> **Non-Speech:** (keys clicking) (1)

#### [Design implementation for script code](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=0)** - [Narrator] With the inputs and outputs established, we can decide on the design for the implementation. Here's the user story we'll complete in this video. As a software engineer, I would like to design an implementation plan for the visualizer before we start writing it so that we'll know how we should implement the solution. Let's talk about design. Our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script will convert the format of several data pieces from different [Microservices](../../Skills/Software%20Development/Microservices.md) into one piece of data. Then it'll write out that data into PlantUML code. We will use the variation of the context pattern to do this. We'll retrieve each piece of data from the different microservices and store it in a context object. Once all the data is retrieved, we'll run the operations to write that data into a PlantUML code file. This will allow us to store the data from the microservice in-memory only once and we'll retrieve that data from memory when we need to write it out to PlantUML. Thinking of an implementation plan, here are the steps. Retrieve data from the various microservices. Add this data to the context object. Write out PlantUML code using data from the context object. For step one, we would traditionally do this with an HTTP [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) Call and call the endpoint where the data lives.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/design-implementation-for-script-code?u=76281980&t=95)** To keep things simpler, we'll be reading from [JSON](../../Skills/Web%20Development/JSON.md) files that mock the responses that in theory would be returned by calling these different microservices. Towards the end of the course, I'll show you how to make this a live call. But for most of it, we'll be working with JSON files that mock the return data. Let's start implementing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (1)
> **Env Vars:** json (2), http (1)
> **CLI Commands:** python (1), make (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)

#### [Load JSON data from a file](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=0)** - [Instructor] The PlantUML diagram created from the script will be based on [JSON](../../Skills/Web%20Development/JSON.md) input data. Here's the user story we'll complete in this lesson. As a software engineer, I would like to ingest the JSON data into the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) visualizer so we can use it to create a diagram with PlantUML. Let's read that data into our Python application. In our code space, we have our sample data. That's the data from each microservice. Let's create a Python file to read in this data. We'll call it main.py. We'll ingest the data using the JSON module so we'll import JSON. In order to load the data, we need to open the file within Python and access the file object. We'll do this with the keyword open. Then we'll feed in the file path. For the first response, that's profile_service_response.json. The encoding is UTF 8, and we'll refer to it as profile file. This opens up our file. We'll load the data into a variable using the JSON load method. JSON load profile file. We'll save this in a variable called profile_json.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=99)** We've just read in JSON to our application. Let's do the same for the other files. The second one is posts_management_service.json.
>
> **[2:10](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=130)** And let's modify the moderation service to have underscores instead of dashes. This will make it more uniform to the other responses.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/load-json-data-from-a-file?u=76281980&t=153)** We now have access to JSON data within our application. Before we run it, let's make sure all the names match up. We have moderation service response. That's what we see here. We have profile service response, that looks good. And post management service response. Looks like we need to add response to line six. Now we have access to JSON data within our application. Let's run our application. We'll run Python main.py. We now have access to JSON data within our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (12), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **Env Vars:** json (10), utf (1)
> **CLI Commands:** python (5), make (2)
> **File Paths:** main.py (2), profile_service_response.json (1), posts_management_service.json (1)
> **Code Identifiers:** profile_service_response (1), profile_json (1), posts_management_service (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Iterate through JSON data and store effectively](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=0)** - [Instructor] With our [JSON](../../Skills/Web%20Development/JSON.md) data loaded, let's iterate through it, and store it efficiently. Here's the user story we'll be completing. As a software engineer, I would like to organize the JSON data with the context object so it's easier to access and retrieve when we need it to create the diagram. We'll be storing it in a context object so we don't have to individually access each JSON variable when we need to retrieve information. Instead, we'll have a single place where everything is stored. The first step is to create that context object. It'll only have what we want to keep track of within the script. Most of this will initially come from the profile JSON variable. For each of these attributes, we pull it out of the profile JSON object and store it in our context variable. Let's keep going. For the posts, we initially set it to an empty list within the context. The next step is to iterate through the JSON returned from the post management service and add data for each post to the context object. For each post and the JSON, we'll create a new variable called context post. It'll have information about the post. For each post, we only pull out the necessary information.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=99)** Then we'll append this post to the posts list and the main context object. We'll access the posts and append our variable No matter how many posts we have, this will work since we're using a for loop. For each post, it'll create a variable with the necessary information and add it to the post attribute of the context object. The last piece of data we need to add is the moderation data. We can do this by tracking down the correct moderation info with the post ID. We'll loop through our moderated posts, and if one has the same post ID as our context post, we'll add the appropriate information. In the case of the reported by attribute, sometimes it will exist and sometimes not. We need to check it before adding it to our context object. We'll also remove the parentheses because we don't need them in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Let's print out the context and run the application. We'll run it with Python main.py. In the output, we see A JSON containing our context data. Let's format it using an online formatter. We'll use the formatter from this website, jsonformatter.[curiousconcept.com](https://curiousconcept.com).
>
> **[3:15](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/iterate-through-json-data-and-store-effectively?u=76281980&t=195)** Let's paste in our data. And it's valid. We can see all the data we added to the context object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (8), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** json (8)
> **CLI Commands:** python (2)
> **File Paths:** main.py (1)
> **URLs:** [curiousconcept.com](https://curiousconcept.com) (1)
> **Speakers:** - [instructor] (1)

#### [Write simple PlantUML code to a file](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=0)** - [Instructor] Now that our [JSON](../../Skills/Web%20Development/JSON.md) data has been ingested, let's use part of it to create a simple PlantUML diagram. Here's the user story we'll be working on. As a software engineer, I would like to create simple PlantUML code containing nodes, so we can manually validate visualizations using an online PlantUML editor. For the diagram, all we're going to do is create the nodes that will have the data, so that's a node for the reported user and a node for each of the posts. Creating this image will require us to write out PlantUML code to a file. Let's put this load data into its own function and create a new function for writing out that file. We'll call this load_data.
>
> **[1:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=60)** Then we can click the arrow to collapse this function's implementation. Let's create a function for writing out the PlantUML file. In this function, we'll pass in the context. That means we should return it when we load the data.
>
> **[1:28](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=88)** We'll use both of these functions in our main function.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=99)** We'll load the data and then pass it in to write_plantuml_file. Inside of our new function, we'll create a new file and write to it. We'll write to a file called plantuml.txt and we'll use the write option to create it and write to it. Now, in PlantUML, we can create a new node with object and then the name we want to give the node. Let's create a node for the user's information. We'll access the file and write object, with the username. We'll grab that from the context. We also add a new line because each line of PlantUML code is on a new line. Let's create the nodes for each post. We'll loop through the posts in the context. For each post, we'll create a node with the associated post_id.
>
> **[2:50](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=170)** We'll convert that ID to a string, so it'll be written out correctly. We'll also need to add those start and end tags, that startuml with a new line, and then enduml.
>
> **[3:11](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/write-simple-plantuml-code-to-a-file?u=76281980&t=191)** We'll also add the encoding here. That'll be UTF-8. We'll also rename the context variable in our main method to get rid of that linter error. Perfect. Let's run it and generate some PlantUML code. There's our code. We have a node for the profile and a node for the post. Let's use the PlantUML editor to visualize it. We'll copy it and paste it in to the editor. We'll click Submit and there's our nodes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** node (8)
> **Code Identifiers:** load_data (1), write_plantuml_file (1), post_id (1)
> **Env Vars:** json (1), utf (1)
> **File Paths:** plantuml.txt (1)
> **Speakers:** - [instructor] (1)

#### [Export PlantUML code to a PNG diagram with Python](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=0)** - [Instructor] Instead of copying and pasting the PlantUML code into an online editor, we can automate this process. In this video, we'll be working on the following user story. As a software engineer, I would like to automatically generate the PlantUML diagram using the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script so we can automate the process of copying and pasting the output code into an online editor. Let's generate a PlantUML diagram using Python. We'll be using the PlantUML package to convert our PlantUML code into an actual diagram. Let's install it. In our code space, We'll use the terminal in pip, pip install plantuml. It's installed. Let's take a look at the documentation to learn how to use it. It's actually linked in the PlantUML package link, Documentation. Here, it looks like we can create an instance of PlantUML and then use it to process a file. In creating the instance, we'll provide a URL that the file will go to for processing. This defaults to a PlantUML URL if we don't provide anything. We can process the file by using the processes_file method. We'll feed in the file name that contains the PlantUML code. Let's try it in Python. The first thing we'll do is import PlantUML.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=96)** This will allow us to use it in our application. Then we'll create a new function to create the PlantUML image. Inside this function, we'll create a new PlantUML instance from the PlantUML library. We'll use this instance to process the PlantUML text file. We named it plantuml.txt. Since we've set the out file to None, the PlantUML image will be stored in a file called plantuml.png. It uses the main name of our input file as a default. Let's call it in our main function.
>
> **[2:29](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/export-plantuml-code-to-a-png-diagram-with-python?u=76281980&t=149)** Create_plantuml_image. We're ready to run our Python script. Let's go to the terminal. It looks like we were missing a dependency, so we installed six. Let's try running it again. There's our image. Let's take a look. This is exactly what we saw in the editor. We used the PlantUML library in Python to generate a PlantUML diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **CLI Commands:** python (5), pip (2)
> **Env Vars:** url (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (2)
> **File Paths:** plantuml.txt (1)
> **Code Identifiers:** processes_file (1)

#### [Add data to each node in the PlantUML graph](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=0)** - While seeing the nodes can be useful, having [Metadata](../../Skills/Web%20Development/Metadata.md) on each node can make it easier to visualize. Here's the user story we'll be implementing in this video. As a software engineer, I would like to display the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the context metadata on each node to make it easier to understand what data exists for the profile in each post In PlantUML, we can add an attribute to the node by using the node's name and the new attribute name. We'd use the nameOfNode : nameOfAttribute, and then the new attributeValue. In the case of the user, that would be the context "username" as the node name. The attribute name would be name, and we'll set it to the context ["name"]. Let's do the same for the other profile attributes.
>
> **[1:07](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=67)** We'll also need new lines at the end of these. Each statement is on a new line in PlantUML.
>
> **[1:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=83)** We'll do some data conversion here, so we can write out this data to a file.
>
> **[1:42](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=102)** We'll drag this over so we can see our code more clearly. All right, we've written out the attributes for the profile node. Let's do the same for the post. For the first one, we'll add the "post_caption" attribute, and retrieve its value from the post variable. The name of the node is post with the "post_id". We'll do the same for the other attributes.
>
> **[2:23](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=143)** Here are our attributes, "post_caption", "images", "comments", "hashtags", "date_published", "is_reported", "is_manual", and "reason". Since "reported_by" may, or may, not exist, we add an additional check, and only add it if the data exists. All right, let's run it. We'll collapse the implementation. And execute [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) main.py. And it looks like we have a small error. There's a key error for "number_of_following". Let's take a look at the context data. This is something we didn't add with the context. Let's add it.
>
> **[3:21](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-data-to-each-node-in-the-plantuml-graph?u=76281980&t=201)** We should also make sure it exists in the profile_service. And it does. It's in that response. Let's run it again. Looking at our PlantUML text file, we have a lot more data. We can see the attributes for each node. Some are associated with the profile, and others with the post. Let's take a look at the diagram. Here's our metadata. We can see the profile information on the profile node, and the post information on the post node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** node (10), make (3), python (1)
> **Code Identifiers:** post_caption (2), nameofnode (1), nameofattribute (1), attributevalue (1), post_id (1)
> **File Paths:** main.py (1)
> **Speakers:** - while (1)

#### [Add edges to the PlantUML graph](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=0)** - [Instructor] We have our microservice data visualized in a diagram. The last thing we'll add are edges. Here's the user story we'll be working on. As a software engineer, I would like to add edges that point from the profile to the posts to make it easier to visualize what is post information and what is profile information. Let's jump to the code space. We can add an edge by specifying the two nodes we want to connect. We use the name of NodeOne, an arrow, and then the name of NodeTwo. In this case, it'll be the profile node to each post node. We'll add some code within the post for loop to add this edge. We're inside the indentation for the loop. We'll write pf.write, the name of the profile node, which is the username, and then an arrow to the post node. Its name is post with the post id. Then we'll add a new line. This is another PlantUML statement. Before we generate our diagram, I want to show you that I've added some more data to the post and moderation files. This will make our diagram look more robust. Instead of just one post, we have three.
>
> **[1:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=99)** We also have three entries here, and our moderation service response. Let's run it. We now have arrows. To make this more visually pleasing, we can change it to display as up/down, versus across. Let's go back to our main.py. Instead of just an arrow, we'll add dash down and then run it again.
>
> **[2:20](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-edges-to-the-plantuml-graph?u=76281980&t=140)** Let's look at our diagram. It looks great. We have visualized our data across multiple [Microservices](../../Skills/Software%20Development/Microservices.md) using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and PlantUML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** node (4), make (3), python (1)
> **File Paths:** main.py (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 5. Going Above and Beyond

[↑ Back to Table of Contents](#table-of-contents)

#### [Review your code for inefficiencies and unnecessary complication](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=0)** - [Instructor] The core of the script is complete. Let's review it for any inefficiencies and unnecessary complications. By improving the script in this way it'll be easier to read, understand, and contribute to in the future. A task like this typically would not be its own user story but instead it would be assumed you're doing this with every user story. Every step of the way you should be looking at your code and trying to make it better. If you're working with a team, you might have code reviews where code must be reviewed by others before it's merged or accepted. Let's review our script and see how we can improve it. Here we have a context object that stores all of the data. Most of the code in this file actually has to do with that conversion from the data file to a context object. To make this file less complicated, we could remove the idea of the context object and just pull from the associated data variables. Let's remove it.
>
> **[1:16](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=76)** Instead of returning the context, we'll return a two pull of the different [JSON](../../Skills/Web%20Development/JSON.md) values. That's the profile_json, post_json, and moderation_json.
>
> **[1:32](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=92)** Then we'll remove it from our main function. This will return profile, posts, and moderation. We'll feed these in when we write our PlantUML file. Now, let's modify the right PlantUML file function. We'll scroll up. Instead of the context we'll have profile_data, post_data, and moderation_data. Let's start with the profile data. The profile is used in the profile node. We'll replace each of these instances with profile_data.
>
> **[2:33](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=153)** Scrolling down we'll also want to use it when we write out the edge. Now for the post data. Let's modify the for loop. Instead of reading the posts from the context, we'll read it from the post data. Now, before we were reading all this data from the context object, the context post had information about the post management system and the moderation system. We need to parse that out because now we're reading that data from two different variables. That happens right here. When we start talking about if the user is reported. Here we'll want to loop through the moderated posts.
>
> **[3:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=216)** It'll have the information of whether the user is reported, and the reason. It may also have the user that reported this post.
>
> **[3:56](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=236)** And this will be read from the moderation_data variable. Now, for the edge we'll move this to the first for loop when we write out the post information.
>
> **[4:17](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/review-your-code-for-inefficiencies-and-unnecessary-complication?u=76281980&t=257)** All right, let's run it. If we check out our png, the diagram looks the same and our code is a lot cleaner. Looking at our lines of code, we were able to eliminate quite a bit. We can also see clearly where each piece of data is coming from. Of course there are cons. To see what data is available to pull, we would need to search the spec of each microservice, or we would need to look at the JSON object to see what's available. There are pros and cons to every design. In fact, there's often lots of review that happens before a single piece of code is written. Design documents are created to design a given initiative, and they're reviewed dozens of times before it even gets started. That's why design is so important. By changing the design of this after the fact, we refactored a good portion of the code, which leaves us susceptible to bugs and errors. The best case would be to feel very confident about your design before implementation begins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Code Identifiers:** profile_data (2), moderation_data (2), profile_json (1), post_json (1), moderation_json (1)
> **CLI Commands:** make (2), node (1)
> **Env Vars:** json (2)
> **Documentation:** spec (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a README](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=0)** - [Instructor] A ReadMe file is a text file that contains information about your project and how to set it up to run. It's very useful for other developers and even non-technical folks because it helps them understand what the application is for and how to use it. In this video, we'll be creating a ReadMe for our [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script. It'll have the file Format MD, which stands for Markdown Documentation. It's a lightweight markup language that easily converts to text. The first part of our ReadMe will include the project's title and description. If we wanted to, we could include more background information on why the project was created in the first place. Next, we'll add instructions for how to install the tool. The user will clone the repo from [GitHub](../../Skills/Software%20Development/GitHub.md) and install the required packages using pip. Then they'll run the application with Python main.py. We haven't created a requirements.txt file, so let's do that. A requirements txt file is a plain text file used to specify the dependencies of a Python project. It lists the names and versions of the Python packages required by the project to run correctly. In this case, we'll have two, plantuml and six.
>
> **[1:38](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/create-a-readme?u=76281980&t=98)** We'll require plantuml to be installed and it should be at least version 0.3.0. Six should also be installed with at least version 1.16.0. Next, we'll add a section on usage to tell people how to use the tool. We'll add a space here too. This lets users know how they can use the tool by overriding the data in the example [JSON](../../Skills/Web%20Development/JSON.md) files. In fact, another enhancement could be letting the user input file names for each of the microservice data files. Now the last section, contributing. This will let other users know how to contribute to our project. Other developers can contribute to our application using a forking branching strategy. If you want to learn more about GitHub and branching, I encourage you to check out the GitHub courses here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. This ReadMe file is great. Users will not only know what the tool is about and how to use it, but also how to contribute to the project if they want to continue enhancing it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (4), pip (1)
> **Versions:** version 0 (1), 3.0 (1), version 1 (1), 16.0 (1)
> **Tools:** github (3)
> **Definitions:** is a  (2), stands for (1)
> **File Paths:** main.py (1), requirements.txt (1)
> **Prerequisites:** install (2)
> **Env Vars:** json (1)

#### [Add live call to generate live graph](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=0)** - [Instructor] The tool we created is great at troubleshooting past events. We can take [JSON](../../Skills/Web%20Development/JSON.md) data from old logs to analyze what happened in certain scenarios. But what if I want to troubleshoot a live event and send live calls to these [Microservices](../../Skills/Software%20Development/Microservices.md) to get fresh data? That's what we'll accomplish in this video. We don't have microservices for each of these data pieces up and running, but I'll show you how to generate a live call to create a more simple graph. Here's the API we'll be using. It generates random user data that we can visualize using a PlantUML graph. This is the format it returns: an array with results containing user data. We'll use this to visualize the user's name, age, phone number, and email, all in one node. To call this API, we'll need to use the request module in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Let's add that to our requirements.txt file. Then we'll install them. Pip install requirements.txt. It's been installed. Now to separate this out from our main project, we'll use a separate file. We'll call it app.py. The format of this file will be pretty similar but we'll fill it out with a different implementation.
>
> **[1:36](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=96)** In this file, we'll call the API and then create a diagram using PlantUML to visualize it. We'll load in the data by calling the API using the request module. Let's import it. We'll use it in our load_data function. We'll create a variable called response and run a get request. We'll request information from the randomuser API.
>
> **[2:09](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=129)** If the status code from this request is 200 this means it was a successful call. Let's check that. If it was successful we'll return the response.json with the first user. Otherwise, we'll print out an error and return None.
>
> **[2:39](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=159)** All right, here's our load_data function. We added a timeout to our GET request so we're not always waiting for that response. If we don't get it within five seconds, we'll time out. Let's update the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program to use this new loaded data. We'll only create the PlantUML file If the response.json has valid data. Let's update it. If the response.json is not None, we'll continue with the program. Let's feed in our response.json to our write_plantuml_file. Inside of here, we'll create the node and visualize some data. We'll set the nodeName to be the responses name, first, and last, with an underscore in between. Then we'll use this nodeName to create the node. We'll write object with the nodeName and a new line.
>
> **[4:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/add-live-call-to-generate-live-graph?u=76281980&t=240)** Then we'll add some attributes. We'll add the email, phone, and age. Perfect. Let's run it to visualize the live random user data from the API. We'll run python app.py. Let's take a look at our image. Here we have Kenan that has a phone number and an age. Let's run it again. We should see a different user because this is the random user API. And we have another. The application works as expected. We get different data visualized beautifully. We just generated a PlantUML graph using live data from an API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** api (8), json (1)
> **File Paths:** response.json (4), requirements.txt (2), app.py (2)
> **CLI Commands:** node (3), python (2), pip (1)
> **Code Identifiers:** nodename (3), load_data (2), write_plantuml_file (1)
> **Prerequisites:** install (2)
> **API Endpoints:** get  (1)
> **Warnings:** troubleshoot (1)

#### [Prepare a demo for greater organization](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=0)** - [Instructor] It's one thing to create a tool that helps you or even your team, but it's another thing to build something that impacts your entire organization. By sharing your success you can see where else your project fits into the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the organization and how to make it even better. The more people that know about what you're working on the greater chance you have at making an impact. Typically sharing the outcome or current state of an initiative is done through something called a demo. A demo is where you give a five to 10 minute presentation on your project initiative or whatever you're working on that makes an impact. So let's create a great demo. The first step is to understand your audience. Who will be watching the demo? Are they technical or non-technical? Knowing your audience's technical knowledge, interests and motivations will help you tailor the demo to their needs. Once you've identified your audience you need to decide on the best format for your demo. Will you be presenting this in person or will you be creating a video or a slideshow? While planning for this may seem obvious it can sometimes be forgotten until everyone is searching for a physical room where the presentation is or that [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) link. It's also important to consider whether you're running the demo live or using a prerecorded video.
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/prepare-a-demo-for-greater-organization?u=76281980&t=95)** If you're running the visualizer live you'll want to have good sample working data already set up in the JSONs to best explain your use cases. I often format my demos in a very similar way as I format the initial proposal. I discuss the problem our team was trying to solve, how we solved it, and then show a demo of how it works. At the end, I'll discuss the impact and outcome of our solution to our team's process and application. I also make sure to practice demoing with a lead on my team to see if there's anything else to add or highlight. Getting feedback or initial questions before you demo can be very helpful before you get put on the spot in the meeting. You can even ask people from your team to ask filler or pre known questions at the end of your demo. This can encourage more discussion. While we focused on presenting at the end of your initiative, sometimes you'll be asked to present while the initiative is ongoing. The [Software Development](../../Topics/Software%20Development.md) industry is known for these informal demos where you take pieces of your project and present it slowly over time as it progresses. Mastering this skillset and being able to translate technical initiatives to managers, product owners, and stakeholders can help you stand out and make an impact as a software engineer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** make (3)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Contributing to your engineering organization](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=0)** - [Kathryn] To contribute to an engineering organization, there are several key skills that are essential. Strong technical skills are a must have as engineering involves complex problem solving, data analysis, and programming. We've done this by parsing [JSON](../../Skills/Web%20Development/JSON.md) data in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and translating it into PlantUML code that can be rendered into a visual diagram. Effective communication skills are also crucial. You have to be able to communicate technical concepts to non-technical stakeholders, collaborate with team members, and document their work clearly and effectively. We've done this through demos and documentation, by walking through how to prepare a good demo, and how to create a read me. Something we touched on lightly was a growth mindset. Every time we completed a user story or had to reconsider a design, we embraced the challenge. In reviewing our code, we learned from our mistakes and continuously improved not only our skills, but also the output of our work. This is particularly important in engineering where new technologies and methodologies are constantly emerging and the ability to adapt and learn quickly is essential. A good portion of this course had to do with planning. We looked at the problem at hand and created a plan on how to solve it not only with what technologies we would use and how they would work together,
>
> **[1:35](https://www.linkedin.com/learning/case-study-visualize-complex-microservice-data-using-python/contributing-to-your-engineering-organization?u=76281980&t=95)** but how our team would accomplish the task. These project management skills are incredibly valuable as you become a more senior engineer. It's the ability to prioritize tasks, manage timelines, and communicate progress effectively that are the keys to delivering successful outcomes. Congratulations on finishing the course. Becoming a better software engineer doesn't end with mastering a single project or a programming language. You may have stepped out of your comfort zone by taking this course involving a series of different technologies, and I hope it encourages you to continue stepping out of your comfort zone as a technologist. There's always something new to learn. My name is Kathryn, and I hope to see you again in some of my other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses. You can check them out on my LinkedIn instructor page or follow me on social media at BlondieBytes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Env Vars:** json (1)
> **Speakers:** - [kathryn] (1)


## Instructor

- [Kathryn Hodge](../../Instructors/Software%20Development/Kathryn%20Hodge.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/case-study-visualize-complex-microservice-data-using-python-4400083/codespaces)

## Skills Covered

- Python (Programming Language)
- Microservices

## Path Context

### In [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
← [Python for Data Analysis- Solve Real-World Challenges](Python%20for%20Data%20Analysis-%20Solve%20Real-World%20Challenges.md) | **13 of 14** | [Level Up- Advanced Python](Level%20Up-%20Advanced%20Python.md) →

### In [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)
← [Level Up- Advanced Python](Level%20Up-%20Advanced%20Python.md) | **11 of 11**

## Appears In

- [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
- [Master Your Python Skills](../../Paths/Software%20Development/Learning%20Paths/Master%20Your%20Python%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)