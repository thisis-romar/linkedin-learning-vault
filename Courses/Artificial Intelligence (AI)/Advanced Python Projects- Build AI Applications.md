---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-python-projects-build-ai-applications
url: "https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications"
duration_minutes: 107
duration: 1h 47m
level: Advanced
updated: 11/8/2024
learners: 30071
skills:
  - Python (Programming Language)
  - AI Software Development
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-python-projects-build-ai-applications-4465602-1/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHIPR3VAGQGiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713466120470?e=2147483647&amp;v=beta&amp;t=O9urdkF2PIoZQA21mxBP7VxuCcLRPQ31yIQv6RNX3Eg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop with Python for AI and Machine Learning]]'
prev_courses:
  - '[[Machine Learning with Python- Association Rules]]'
path_nav: '[{"path":"Develop with Python for AI and Machine Learning","position":6,"total":6,"prev":"Machine Learning with Python- Association Rules","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20Python%20Projects-%20Build%20AI%20Applications.md)

![Advanced Python Projects: Build AI Applications](https://media.licdn.com/dms/image/v2/D560DAQHIPR3VAGQGiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713466120470?e=2147483647&amp;v=beta&amp;t=O9urdkF2PIoZQA21mxBP7VxuCcLRPQ31yIQv6RNX3Eg)

# Advanced Python Projects: Build AI Applications

> Python is a versatile programming language that is widely used in a variety of industries, including data science, artificial intelligence, web development, and more. As the demand for Python developers continues to grow, having a portfolio of Python projects can significantly increase your job prospects and marketability. This course with instructor Priya Mohan is designed to equip you with the s

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications) | 1h 47m | Advanced | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Elevate Your Python portfolio with advanced AI applications](#elevate-your-python-portfolio-with-advanced-ai-applications)
  - [What should you know before taking this course](#what-should-you-know-before-taking-this-course)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
  - [A refresher of object-oriented programming concepts](#a-refresher-of-object-oriented-programming-concepts)
- [**1.  NLP: Build a Chatbot with Sentiment Analyzer**](#1-nlp-build-a-chatbot-with-sentiment-analyzer) (5 videos)
  - [Processing user input](#processing-user-input)
  - [Analyzing sentiment](#analyzing-sentiment)
  - [Displaying automated chatbot responses based on sentiment](#displaying-automated-chatbot-responses-based-on-sentiment)
  - [Tailoring chatbot response based on sentiment score](#tailoring-chatbot-response-based-on-sentiment-score)
  - [Intiating the chatbot and printing sentiment-based responses](#intiating-the-chatbot-and-printing-sentiment-based-responses)
- [**2. Machine Learning: Using Python to Find Your Next Business Opportunity**](#2-machine-learning-using-python-to-find-your-next-business-opportunity) (6 videos)
  - [Data analytics using pandas, matplotlib, and scikit-learn](#data-analytics-using-pandas-matplotlib-and-scikit-learn)
  - [Data preprocessing and scaling](#data-preprocessing-and-scaling)
  - [Model selection](#model-selection)
  - [Hyperparameter tuning](#hyperparameter-tuning)
  - [Linear regression, random forest, and gradient boosting](#linear-regression-random-forest-and-gradient-boosting)
  - [Predicting price based on model evaluation results](#predicting-price-based-on-model-evaluation-results)
- [**3. Chat with Your Documents Using LLM: Back-end with OpenAI, Python, AWS, and FastAPI**](#3-chat-with-your-documents-using-llm-back-end-with-openai-python-aws-and-fastapi) (9 videos)
  - [Setting up MongoDB](#setting-up-mongodb)
  - [Generate chat responses using GPT-3.5 and Langchain](#generate-chat-responses-using-gpt-35-and-langchain)
  - [Load conversation history for a given session ID](#load-conversation-history-for-a-given-session-id)
  - [Create new sessions and add chat history to existing sessions](#create-new-sessions-and-add-chat-history-to-existing-sessions)
  - [Setup FastAPI app, CORS, S3 session, and obtain a chat response](#setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response)
  - [Upload files to Amazon S3 storage bucket](#upload-files-to-amazon-s3-storage-bucket)
  - [Deploy and run the chatbot](#deploy-and-run-the-chatbot)
  - [Challenge: Complete the backend code for file upload](#challenge-complete-the-backend-code-for-file-upload)
  - [Solution: Complete the backend code for file upload](#solution-complete-the-backend-code-for-file-upload)
- [**4. Chat with Your Documents Using LLM: Front-end with Streamlit**](#4-chat-with-your-documents-using-llm-front-end-with-streamlit) (8 videos)
  - [Introduction to API communication with Python](#introduction-to-api-communication-with-python)
  - [File uploads and advanced API interactions](#file-uploads-and-advanced-api-interactions)
  - [Streamlit app basics and file handling](#streamlit-app-basics-and-file-handling)
  - [Uploading files to API endpoints with Streamlit](#uploading-files-to-api-endpoints-with-streamlit)
  - [Building a chat interface with Streamlit](#building-a-chat-interface-with-streamlit)
  - [How to run the front end of the chatbot](#how-to-run-the-front-end-of-the-chatbot)
  - [Challenge: Create a front-end UI for file upload](#challenge-create-a-front-end-ui-for-file-upload)
  - [Solution: Create a front-end UI for file upload](#solution-create-a-front-end-ui-for-file-upload)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your next steps](#your-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Elevate Your Python portfolio with advanced AI applications](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=0)** - There's no better way to demonstrate your [[Python (Programming Language)|Python]] and AI skills to your employer or a hiring manager than to showcase a portfolio of projects that you've created.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=10)** Knowing how to build and deploy [[AI Solutions]], is one of the most sought-out skills given the rise in popularity of AI.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=18)** So, at the end of the course, you'll be able to build not one, not two, but three AI solutions using Python.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=25)** You'll gain AI skills such as learning how to use machine learning libraries, NLP techniques, do [[Feature Engineering]], and data analytics.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=34)** And backend skills such as hosting on AWS, setting up database using [[MongoDB]] and integrating with [[OpenAI API]].
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=42)** Also, frontend skills such as Streamlet and much, much more.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=47)** Hi, I am Priya Mohan.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=48)** I hope you're as excited as I am to start building these projects.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=52)** Let's get coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[AI Solutions]] (2), [[Feature Engineering]] (1), [[MongoDB]] (1), [[OpenAI API]] (1)
> **CLI Commands:** python (2), aws (1)
> **Env Vars:** nlp (1), aws (1), api (1)
> **Analogies:** such as (3)
> **Speakers:** - there (1)

#### [What should you know before taking this course](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=0)** - [Narrator] Here's what you should know before diving into the course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=3)** I recommend that you have a solid foundation in [[Python (Programming Language)|Python]].
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=7)** You don't need to be an expert or a professional coder, but if you have a good understanding of data types, [[Control Flow]], and basic [[Data Structures]], you're in good shape.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=16)** We'll be working on some advanced concepts, so having a grasp of [[Object-Oriented Programming (OOP)|object-oriented programming]] will also be beneficial.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=23)** We'll be using [[GitHub]] [[Codespaces]] as our IDE for developing our projects.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=27)** GitHub Codespaces is new to you.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=30)** Don't worry, I'll guide you through the setup in the next video.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=34)** This course is designed to increase in difficulty as you go through each project, but I promise you it'll be rewarding.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=41)** Embrace the challenges, ask questions, and most importantly, enjoy the process.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=47)** Enthusiasm and a hunger for learning are your biggest assets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Codespaces]] (2), [[Python (Programming Language)|Python]] (1), [[Control Flow]] (1), [[Data Structures]] (1)
> **Tools:** github (2)
> **CLI Commands:** python (1)
> **Env Vars:** ide (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=0)** - [Instructor] In this course, we'll be using [[GitHub]] [[Codespaces]] to demonstrate the [[Python (Programming Language)|Python]] projects that we'll be building.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=5)** GitHub Codespaces is an instant cloud developer environment offering the functionality of your favorite IDE without the need for a local machine setup.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=14)** It's a great tool that mirrors [[Software Development]] in the workplace.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=18)** To get started, you can access GitHub Codespaces directly from the course repository.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=25)** Next, you can simply click on the green code button over here.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=29)** Once you've clicked on it, go to the Codespaces tab.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=32)** This allows you to create a new codespace.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=35)** If you've already been working on a project, you might see other codespaces that already exist.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=41)** Here's mine.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=43)** Once loaded, you'll enter a code environment similar to Visual Studio Code, but running on GitHub servers.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=55)** So now let's create a new codespace.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=57)** Click here on the plus sign and it should load up a new codespace environment.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=63)** Once loaded, you'll enter a code editor environment similar to Visual Studio Code, but running on GitHub servers.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=70)** The layout mirrors the code repository with folders corresponding to each chapter or project.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=75)** You'll see here that we have two chapters, one labeled begin, and the other labeled finish.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=81)** Use the files in the begin folder to follow along during the coding sessions and the files in the finish folders for reference that you can refer to after you finish watching the videos.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=94)** While we're going through these chapters, you'll make changes in the start files, and if you want to keep your changes, even after deleting a codespace, consider forking the repository.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=106)** If you want to download the examples and work with them locally, then go back over here and head over to the local tab and you can clone the repository or download a zip file and use your favorite code editor to work on them.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=120)** When working on a branch, you might make changes.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=124)** GitHub Codespaces makes it easy to commit changes and save your progress.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=128)** Use the source code panel over here to state changes, commit them and sync with your forked repository.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=135)** Next, to close a codespace, click on the codespaces button over here and then go over to the three dots and you'll see a stop codespace option.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=147)** This ensures a proper shutdown.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=149)** When you reopen a codespace, it retains your progress, making it convenient for you to pick up where you left off.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=155)** Now that you're familiar with GitHub Codespaces, you're ready to dive into the course projects.
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=160)** Remember, consistent use of same codespace helps save your progress.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=165)** If you have any questions, feel free to reach out in the Q and A section.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=168)** Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (8), [[GitHub]] (7), [[Python (Programming Language)|Python]] (1), [[Software Development]] (1)
> **Tools:** github (7), visual studio (2)
> **CLI Commands:** make (2), python (1)
> **Exercise Files:** download the (1), zip file (1), source code (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** similar to (2)
> **Env Vars:** ide (1)
> **Definitions:** is an  (1)

#### [A refresher of object-oriented programming concepts](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=0)** - [Instructor] In this lesson, I'm going to provide a quick refresher of the fundamental concepts of [[Object-Oriented Programming (OOP)|object-oriented programming]].
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=6)** If you're quite familiar with these concepts, feel free to move directly to the next lesson.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=11)** So let's get started.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=14)** We are going to create a new class called Car, class Car.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=22)** A constructor is a special method in a class that is automatically called when an object is created.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=28)** Let's define def __init__ self, make, model, close it with a colon.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=37)** The self here reference to the car that's being created.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=40)** We're storing the make and the model information in the car.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=43)** The next concept that we'll explore is encapsulation.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=47)** Encapsulation heights the internal details of an object and exposes only what is necessary.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=53)** Think of it as specifying the unique characteristic of each car.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=57)** Self.make equals make, self.model equals model.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=68)** A method is like a function inside the class.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=70)** It's something the car can do, like starting its engine.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=73)** So let's define a method, start_engine self.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=81)** Now let's print using the method.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=82)** Print f the self.make self.model model's engine is running.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=99)** Here it is accessing attributes through self.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=102)** This is like the car performing an action specific to itself.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=106)** Next, let's create instances of the car class.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=110)** Before we do that, the next concept that we'll explore is inheritance.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=115)** Inheritance enables code reuse and creation of hierarchy of classes.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=121)** Car is a class that can be used to create objects.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=124)** So let's create our objects.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=127)** Car1 equals car, Toyota comma Camry, car2 Ford comma Mustang.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=145)** So let's print using the objects we created.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=148)** Print f I have a car1.make car1.model period,
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=160)** and then close the quotations.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=163)** In the next line, we'll print, I also own a car2.make car2.model.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=176)** Next we'll explore polymorphism.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=178)** Polymorphism is the ability of objects of different classes to be treated as objects of a common base class.
>
> **[3:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=185)** This is when different objects such as car1 and car2 can perform the same action, start_engine.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=192)** So car1.start_engine, close parentheses, car2.start_engine.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=203)** This is like instructing each car to engage its engine and they follow their unique set of instructions.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=210)** So now let's run the code to see what happens.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=214)** The first two lines of output are from the print statements in 19 and 20.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=221)** The next two outputs are from the print statement in line 12.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=225)** I hope this lesson provided you a good overview of object-oriented programming concepts to help you prepare for building the projects that are upcoming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (2)
> **CLI Commands:** make (7)
> **Code Identifiers:** start_engine (4)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1), such as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 1.  NLP: Build a Chatbot with Sentiment Analyzer

[↑ Back to Table of Contents](#table-of-contents)

#### [Processing user input](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=0)** - [Instructor] In just 30 lines of code, we are going to build a simple chatbot using [[Python (Programming Language)|Python]] and TextBlob library.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=7)** This chatbot will be capable of understanding user input and providing appropriate responses based on predefined intents.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=16)** Like for example, if the user is asking for hours that a store is open, we would have intents defined, and we would then have a predefined response for those particular keywords.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=30)** We'll also analyze the sentiment of the user's messages to generate responses that fit the emotional tone.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=36)** By the end of this lesson, you'll understand how to implement a basic chatbot and how it processes user input.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=44)** Now let's get started.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=45)** First we'll need to import the TextBlob library, which will help us analyze the sentiment of the user's messages.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=59)** Let's get started.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=61)** Open the code for chapter one in [[GitHub]] [[Codespaces]].
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=64)** Our first step is to install the TextBlob package.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=70)** Go to your terminal and type (keyboard clacking) pip install TextBlob.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=78)** Once the package is installed, go ahead and type from TextBlob, (keyboard clacking) import TextBlob.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=87)** This line imports the TextBlob class from the TextBlob module, and allows us to leverage its functionality within our code.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=96)** Now let's define the intents our chatbot will recognize.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=100)** Intents are the goals or purposes behind user messages, and we will map specific keywords to corresponding responses.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=108)** Now let's go ahead and type intents (keyboard clacking) equals (keyboard clacking) hours.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=118)** Add a colon.
>
> **[1:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=119)** Open another curly braces. (keyboard clacking) (keyboard clacking) Keywords.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=125)** So now let's define the first keywords.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=129)** Now let's imagine a customer or a chat bot user is asking us for the hours that a store is open.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=136)** We will go ahead and define certain keywords that will signal the chat bot to provide responses related to the hours.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=147)** So over here we've defined three keywords, hours, open, and close.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=152)** When a user types these words as part of their message, the response will be, (keyboard clacking) we are open from 9:00 AM to 5:00 PM (keyboard clacking) Monday to Friday.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=179)** Let's define one more intent.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=181)** We're going to label this return.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=186)** Now, anytime we have keywords related to returns such as refund, money back, (keyboard clacking) or return, we will have the chatbot respond with a certain response.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=211)** Add a comma on the previous line.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=214)** And in the response, type, (keyboard clacking) I'd be happy to help you with the return process.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=223)** (keyboard clacking) Let me transfer you to a live agent.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=229)** Based on my personal experience, I find it helpful to always have a live agent help me with my returns, so I will go ahead and enter this message here.
>
> **[4:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=240)** So to summarize, here we are creating a dictionary called intents.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=245)** Each intent, like hours and return, has a set of keywords that the chatbot will look for and use our input and response that it will provide when those keywords are detected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[GitHub]] (1), [[Codespaces]] (1)
> **CLI Commands:** python (1), pip (1), find (1)
> **Analogies:** for example (1), imagine (1), such as (1)
> **Ports:** :00 (2)
> **Tools:** github (1), terminal (1)
> **UI Navigation:** open the (1), go to (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### [Analyzing sentiment](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980)

> [!transcript]- Transcript
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=7)** - [Instructor] Def get_response, and then the brackets, write 'message,' and then type "message = message.lower."
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=17)** And open parentheses.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=19)** What we're doing here is we're taking the user's message and converting it to lowercase.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=24)** Why do we do that?
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=25)** This helps make sure that whether the user types an uppercase open or a lowercase open, the bot treats them the same way.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=34)** In the next line type, "if any," "[[Microsoft Word|word]] in message for word in intent_data,"
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=47)** open bracket, "keywords"... And then end it with a colon.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=58)** And in the next line, type, "return."
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=62)** "intent_data."
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=66)** Open bracket, in parentheses type "response."
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=70)** So what we're doing here is to have the bot check if any of the keywords in the intents matches the user's message.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=79)** Let's say the user types, "I'd like to make a return."
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=82)** The bot will see the word return and check if it's in any of the predefined intents.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=88)** So that's what these two lines do.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=90)** If it finds a match, then it would respond with the response that we've defined over here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3)
> **Code Identifiers:** intent_data (2), get_response (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (2)
> **Speakers:** - [instructor] (1)

#### [Displaying automated chatbot responses based on sentiment](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=0)** - [Instructor] So now what if none of the keywords match?
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=4)** Well, that's when things get interesting.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=6)** The bot uses text blob to analyze the sentiment of the message.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=11)** Let's see how to do that.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=20)** Type, "sentiment = TextBlob", open parentheses, and write "message.sentiment.polarity."
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=36)** This is where the chatbot try to understand if the user is happy, frustrated, or neutral.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=42)** Text blob gives us a score between negative one and positive one where negative values mean the message is unhappy and positive values mean it's happy.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=53)** Based on that score, the bot adjusts its response.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=57)** Now let's return specific messages to output based on the sentiment score.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=62)** Now, let's type in "return."
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=66)** "That's so great to hear!" If it is a positive message.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=72)** So we're going to say, "if sentiment is greater than zero, else."
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=81)** Let's go to the next line.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=86)** "I'm so sorry to hear that.
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=91)** How can I help?"
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=97)** "If sentiment is less than zero, else."
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=106)** "I see. Can you tell me more about that?"
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=113)** If it is neither positive nor negative, meaning if it's more of a neutral response.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=123)** Close the parentheses.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=126)** Next we're going to see how to get the chatbot to talk to the user.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Tailoring chatbot response based on sentiment score](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=0)** - [Instructor] Now let's look at how the conversation works.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=5)** Type "define." Create a function called chat.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=10)** The chat function is what gets the bot talking to the user.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=15)** Now type "print," and we'll start with the greeting message that says, "Chatbot: Hi, How can I help you today?"
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=32)** This starts by greeting the user and asking how the bot can help.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=36)** Now let's start a loop.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=38)** Type in "while," open parentheses, type in, "user_message:= input."
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=47)** Then open another parentheses, and within the parentheses say, "You," this is where the user will type their message, and now say, "strip.lower."
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=66)** Open parentheses again.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=70)** And say, "not in ['exit,' 'quit,' 'bye]."
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=81)** We've defined a few words that indicate that the user wants to quit the chat.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=88)** "Print."
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=91)** In the next line.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=97)** "Chatbot."
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=100)** And then "get_response, user_message."
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=109)** And then we're going to close the parentheses.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=116)** So to recap, what happens here is that the bot enters the loop where it keeps asking for an input and responding until the user types something like exit, quit, or bye.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=127)** Each time the user types a message, the bot will analyze it, find a matching response, and print it out.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=133)** If the user types "bye," the bot exits the chat.

> [!info]- Semantic Content
>
> **Code Identifiers:** user_message (2), get_response (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Intiating the chatbot and printing sentiment-based responses](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=0)** - [Instructor] Now it's finally time for us to go ahead and run the chat bot.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=5)** This line here ensures that the chat function is called, which kicks off the conversation.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=11)** Let's go ahead and run the chat bot.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=17)** We're going to say, I need help with a product I purchased.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=26)** I'm not happy, as it was broken.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=31)** So the chat bot automatically analyzed the sentiment and understood that this was a negative message that we typed in, and it responded back saying, I'm sorry to hear that.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=41)** How can I help?
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=42)** So in response to that, I'm going to say, I would like to return the product.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=48)** Can you please help?
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=52)** It says, I'd be happy to help you process your return.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=56)** Let me transfer you to a live agent.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=58)** The chat bot responded with this message because it saw that the user's message that we typed in contained the [[Microsoft Word|word]] return in it, and this return is part of the keyword response library that we had previously defined.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=73)** So now we've demonstrated that it not only analyzed sentiment, it also provided a response based on the sentiment, and it also provided a predefined response based on the keyword that we've already defined.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=87)** That's it folks.
>
> **[1:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=88)** It's as easy as that to be able to create a sentiment analyzer chat bot that can both understand intent and provide responses and analyze sentiments, and provide responses that are appropriate for the sentiment.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=101)** Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 2. Machine Learning: Using Python to Find Your Next Business Opportunity

[↑ Back to Table of Contents](#table-of-contents)

#### [Data analytics using pandas, matplotlib, and scikit-learn](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=0)** - [Instructor] In this project, we're going to analyze market data to identify top five locations to set up a coffee business in California.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=8)** And we're going to also predict the price of a latte based on the demographics of the population in those locations.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=16)** So you can apply the skills that you learn from this lesson to your own organization to identify optimal locations and prices for your [[Microsoft Products|products]].
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=24)** This is just one example of how you can use these skills that you learn in this lesson.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=29)** There are multiple different ways that you can use these skills to enhance your professional life.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=34)** Let's get started.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=36)** From the begin folder, open up the [[Python (Programming Language)|Python]] notebook CH 2 business prediction.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=42)** So the first step that we're going to do is install necessary Python libraries for data analysis and machine learning.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=49)** [[Pandas (Software)|Pandas]] is for [[Data Manipulation]], scikit-learn is for machine learning tools, and matplotlib is for data visualization.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=57)** Using the pip install command, let's go ahead and install these.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=61)** All right.
>
> **[1:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=63)** In this section we're importing essential Python libraries and classes for various tasks in data analysis and machine learning.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=69)** These include pandas for data manipulation, re for regular expressions, standard scaler for feature scaling, matplotlib.pyplot is for data visualization.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=80)** NumPy is for numerical operations, and several modules from scikit learn such as warnings, means squared error, train test split, grid cv, random forest regressor, gradient boosting regressor, all of this for machine learning tests.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=94)** We're also setting up the environment to ignore warnings during execution.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=98)** Excellent.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=99)** Next, we're going to ingest the datasets and do some analysis.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=103)** Now we use pd.read underscore CSV to read population data from a CSV file named population.csv into another data frame called population.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=115)** So let's now run this.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=117)** The head method here is being used to display the first five rows of the population data frame.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=123)** This allows you to quickly inspect the structure and the content of the data frame.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=126)** So let's see what's in it.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=128)** So in the population data, we have a geography code which contains the zip code but it's in a string format which contains both letters and numbers.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=141)** So the most important data in this data frame is the geography column which contains the zip code but it's in a format that's not so ideal.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=148)** And we are going to do some data analysis to extract the last five digits which is the actual zip code of the locations.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=155)** So we have the zip code of all of the areas in California, and then we have the total population of all of the areas in California and these are in millions.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=167)** So here we see the column total which contains the total population.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=172)** This data was directly obtained from [census.gov](https://census.gov).
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=176)** Next, let's take a look at what's inside the coffee shop data which we stored as df.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=182)** Here in the coffee shop data, we see that we have a list of coffee shops in California.
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=188)** Here are the cities where they're located.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=190)** Here's the zip code, here's the customer rating, and here's the median salary for each of those zip codes and here's the latte price at each of these shops.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=200)** Next, the info method provides information about the data types of each column and the presence of any missing values in the df data frame.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=207)** So let's take a look.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=209)** Here we have the list of all columns in this data frame and the non null values and the data types.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=216)** Next we're going to check the rows and columns in that data frame.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=220)** In order to do that type df.shape, run the code, we see there are a thousand rows and eleven columns.
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=227)** And now let's do the same with the population data.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=230)** In the population data, we have 1,705 rows and 13 columns.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=237)** Next we're going to plot coffee shops across top five cities with the highest number of occurrences in the city column.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=245)** So this line counts the occurrences of each unique value in the city column and selects the top five cities based on the occurrences and creates a bar plot on the selected cities.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=258)** So that's what this means, kind equals bar.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=261)** Next, we set the title of the plot to be top five cities with most coffee shops and then we type plot.show to display the plot.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=270)** So here it is.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=271)** So we see that Sacramento, LA, San Diego, Fresno, and San Jose have the most coffee shops.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=278)** Next we're going to explore the top 10 most famous brands, and we're going to do exactly the same as we did above, let's run this code.
>
> **[4:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=286)** And here we see frothy fusion, steamy moments, these are the top 10 coffee shop brands that occur the most in our dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (2), [[Data Manipulation]] (2), [[Microsoft Products|Products]] (1)
> **CLI Commands:** python (3), pip (1)
> **Prerequisites:** install (3), set up (1)
> **Env Vars:** csv (2)
> **File Paths:** population.csv (1)
> **URLs:** [census.gov](https://census.gov) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data preprocessing and scaling](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=0)** - [Instructor] Next, we're going to be doing Data Preprocessing.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=3)** So this method is used to check the number of null values in each column of the DF data frame.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=9)** In this case, when we run this, we notice that there are no null values.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=15)** Next, let's scroll down.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=18)** We're going to be converting the zip code column in the DF data frame to the object data type str.
>
> **[0:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=25)** This is done to ensure that the zip codes are treated as alphanumeric values when performing operations, such as joining the population with data which we're going to do soon, so let's run this.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=37)** Next, in this block of code, find zip code function is defined.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=41)** This function takes a geocode as input and searches for the five-digit pattern at the end of the string using a regular expression.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=49)** If a match is found, the function returns the extracted zip code.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=53)** Let's run this.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=56)** Next, in this code, the find zip code function is applied to the geography column in the population data using the apply method over here.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=66)** The result is stored in a new zip code column in the population data frame.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=70)** So this process extracts the last five digits of the zip code from the geography column, so let's run this.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=77)** Excellent.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=79)** Over here, we're making a copy of the DF data frame with the name, cafe_data, and then pd.merge function is used to merge cafe_data with the population data frame based on the zip code column.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=95)** The result is stored back in the DF data frame, so now let's run that. All right.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=102)** Here, a list of column names is created by combining the columns from the cafe data data frame and adding it to the total column.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=110)** The DF data frame is then updated to include only the columns specified in the columns list.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=117)** Finally, the total column is renamed to population.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=121)** So now, let's run that. Excellent.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=126)** Next, let's run the data frame to see what it looks like.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=131)** So here's the merged data frame.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=133)** At the end of that data frame, we have the population data as expected.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=137)** As you see over here, we now have 412 rows and 12 columns.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=141)** This reduction in the rows and columns are expected given that we've merged both of the data together.
>
> **[2:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=148)** Now, we're only going to keep the relevant features from that dataset.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=153)** What's relevant to us is the zip code, rating, median salary, latte price, and population, because that's what we will use to identify the top five zip codes and the price of the latte for each of those zip codes that we identify.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=168)** So now let's run this. Excellent.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=171)** As expected, we now have reduced the columns from 12 to five, and here are the columns that are present in the DF data frame.
>
> **[3:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=181)** So next, what we're doing is here, the total number of coffee shops for each zip code is calculated and stored in the coffee shop counts data frame.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=192)** Both zip code columns are insured to be of type string for proper merging.
>
> **[3:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=197)** The counts are merged back into the original DF data frame.
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=202)** The data frame is printed to display the changes.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=206)** Next, we're going to identify the top five zip codes using the criteria listed here.
>
> **[3:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=212)** We're going to make sure that our top five zip codes contain high population, low number of coffee shops, low ratings, and high median salary.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=221)** This is to make sure that the top five zip codes that we choose have a lot of demand and less competition, and we hope that the folks that live in those areas have high median salary, so that they'll be able to afford coffees.
>
> **[3:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=237)** A new data frame sorted_df is created by sorting df based on those specific criteria we just listed.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=245)** We're going to sort population by the highest population, right?
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=251)** And then the coffee shop count is going to be the lowest coffee shop count, low to high, and then rating is going to be also low to high, so that we ensure that the other coffee shops that are existing in those areas have low ratings, so that we have a better chance of establishing a business that's more successful and can receive a higher rating.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=272)** Again, median salary, we're going to sort from high to low, so that we target areas that have higher median salary.
>
> **[4:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=280)** Now, we create a list named LSD to store unique zip codes.
>
> **[4:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=284)** The loop iterates through the sorted data frame, sorted_df, checking if the length of the list is less than five.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=292)** And if the current zip code is not already in the list.
>
> **[4:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=295)** If the both conditions are met, the zip code is then added to LSD.
>
> **[5:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=300)** Finally, sorted_df is filtered to include only rows where the zip code is in lst creating the data frame.
>
> **[5:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=309)** Then we display all the records of the top five zip codes based on the specific criteria that we established.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=315)** Now, let's run these codes.
>
> **[5:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=317)** Here are the sorted values, and here's the output for our top zip codes.
>
> **[5:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=324)** If you notice, our first zip code appears five different times.
>
> **[5:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=328)** This is because there are five different coffee shops in that location, and these are the data related to those coffee shops.
>
> **[5:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=335)** Also notice that the population is stagnant, which is expected because the, there's only one median population for that particular zip code.
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=347)** This is why we see 18 values.
>
> **[5:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=349)** Here's the first zip code. Here's the second zip code.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=354)** Here's the third zip code.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=356)** and here's the fourth zip code.
>
> **[5:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=358)** Last but not least, here's our fifth zip code.
>
> **[6:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=361)** So we've identified the top five zip codes.
>
> **[6:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=366)** Next, we create a feature matrix, which is labeled as X by dropping the columns latte price, and zip code from the DF data frame.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=374)** The target variable Y is assigned value from the latte price column.
>
> **[6:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=379)** This prepares the data for a machine learning model with X representing the features and Y representing the target variable.
>
> **[6:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=387)** Train test split function from scikit-learn is used to split the feature matrix X and the target variable Y into training and testing sets.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=397)** The parameter test size 0.2 specifies that 20% of the data should be used for testing, and the [[Representational State Transfer (REST)|rest]] is for training.
>
> **[6:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=407)** Random state 42 ensures reproducibility by fixing the random seed.
>
> **[6:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=412)** The resulting sets are assigned to X train, X test, Y train, and Y test.
>
> **[7:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=420)** Let's now run both of this.
>
> **[7:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=422)** Next, we're going to be doing feature scaling.
>
> **[7:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=424)** Feature scaling is a method used to normalize the range of independent variables or features of a data.
>
> **[7:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=430)** It's important in machine learning because many [[Algorithms]] like [[Linear Regression]] require features to be on the same scale.
>
> **[7:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=437)** If features are not on the same scale, the algorithm may be more biased toward features with large values.
>
> **[7:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=444)** So in these lines of codes, the standard scaler from scikit-learn is used to standardize the features of the matrices X train and X test.
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=452)** The fit transform method is applied to X train to compute the mean and standard deviation needed for scaling and transforming the training data.
>
> **[7:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=462)** So the transform method over here is then used to scale the testing data based on the parameters learned from the training data.
>
> **[7:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=470)** So what this truly does is that it ensures that the features have a mean of zero in the standard deviation of one, which can be beneficial for certain machine learning algorithms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Linear Regression]] (1)
> **Code Identifiers:** sorted_df (3), cafe_data (2)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** lsd (2)
> **Versions:** 0.2 (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Model selection](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=0)** - [Instructor] Now we're going to be selecting machine learning models for our program.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=5)** So we're going to be choosing three different regression models because regression models are used when you want to predict a continuous outcome variable.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=13)** So what a continuous outcome variable is that it's a variable that can take an infinite number of values within a certain range.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=21)** So in our case here, we're trying to predict the price of the latte for each of the five top zip codes that we've identified.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=30)** On the other hand, if we were to categorize the coffee price as expensive or cheap, then it would be a categorical variable because it only takes two values, expensive or cheap, right?
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=42)** We're not trying to categorize the price into expensive or cheap.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=45)** We're actually trying to predict a number, so that is why we're going to be using regression models.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=50)** So the three regression models that we're going to be using are [[Linear Regression]], random forest, and gradient boosting.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=57)** So now let's set that up.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=60)** Single quote, Linear Regression, colon, LinearRegression, comma, Random Forest, colon, RandomForestRegressor, close the brackets, close the parentheses.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=81)** Gradient Boosting, GradientBoostingRegressor, and that's it.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=89)** So now in this code, a dictionary named models is created.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=92)** And now that contains instances of three regression models, such as linear regression, random forest, gradient boosting.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=100)** Each model is now associated with a key, allowing us for easy reference and selection during the model training and evaluation phase.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=109)** So here's why we chose these three models, and we're going to quickly discuss what these models do.
>
> **[1:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=114)** Here's an example of what linear regression looks like.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=117)** It's a straightforward approach, where the relationship between the input variables and the output variables is modeled as a linear combination.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=125)** The coefficient of the model can be interpreted as the change in the output for a one unit change in the input, holding all other variables constant.
>
> **[2:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=135)** This model assumes that a linear relationship between the input variables and the output variables.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=141)** Next is the random forest regression.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=143)** So this is a collection of [[Decision Trees]] that work together to make a decision.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=149)** Each tree makes its own prediction, and the final prediction is the average of all the individual tree predictions.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=156)** So this model can handle thousands of input variables and can identify which features are most important.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=163)** It's less sensitive to outliers compared to a linear regression.
>
> **[2:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=167)** Next, we're going to explore gradient boosting.
>
> **[2:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=170)** It's similar to random forest.
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=172)** Gradient boosting is an ensemble of weak prediction models, typically decision trees.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=179)** While random forest builds each tree independently, gradient boosting builds trees in a stage-wise fashion with each new tree being built to correct the errors made by the previous tree.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=192)** So with gradient boosting, first we'd have one tree, and then next we have the knowledge from the first tree and the new tree.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=200)** And then the third iteration, we'd have the first two trees plus a third tree.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=206)** So that's how gradient boosting works.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=208)** Gradient boosting can provide feature importance, which can be very useful in understanding which features are most important in the prediction.
>
> **[3:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=215)** Like random forest, gradient boosting is less sensitive to outliers as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (5), [[Decision Trees]] (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Hyperparameter tuning](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=0)** - [Instructor] Next we're going to be doing hyperparameter tuning.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=3)** Hyperparameter tuning in machine learning is like finding the ideal recipe for making the most delicious cake.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=9)** In a machine learning model, hyperparameters are settings that need to be adjusted for optimal performance, similar to adjusting oven temperatures and baking times for a perfect cake.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=18)** This process involves systematically trying different combinations of these settings to maximize the model's accuracy and generalization to new data.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=28)** It's crucial because it ensures the model adapts to specific characteristics of the dataset so that it avoids over fitting or under fitting, and ultimately provides the model's predictive capabilities.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=39)** Just like how adjusting the right ingredients and the cooking condition to transform a good cake into a great one is hyperparameter tuning, fine tune the machine learning model for optimal predictions.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=51)** So let's explore how to do this.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=53)** So the parameter grid dictionaries specifying a grid of hyperparameters for two machine learning models, the random forest and gradient boosting.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=62)** These hyperparameters are used during the hyperparameter tuning process to find the best combination of values that optimize the performance of each model.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=71)** Now let's break down the hyperparameters and the respective values.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=75)** So over here for random forest, the n estimator parameter represents the number of trees in the forest.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=81)** The values 50, 100 and 200 indicate that the grid search will consider models with 50, 100 and 200 trees.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=89)** You can choose any numbers that you would like here.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=92)** The max depth this parameter controls the maximum depth of each tree in the forest.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=98)** The values none, 10 and 20 here imply that the grid search will explore models with unlimited depth, which is why we have none here, as well as trees with maximum depths of 10 and 20.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=111)** So for gradient boosting over here, similar to random forest, this parameter represents the number of boosting stages to be run.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=120)** 50, 100 and 200 indicate the grid search will consider models with 50, 100 and 200 boosting stages.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=128)** The learning tree parameter controls the contribution of each tree of the final prediction.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=132)** The values 0.01, 0.1, 0.2 suggests that the grid search will explore models with different learning rates.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=142)** Lastly, we're going to consider the max depth parameter.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=146)** This controls the maximum depth of each tree in the boosting process.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=150)** So the values 3, 5 and 10 indicate the grid search will consider models with trees of maximum depths 3, 5 and 10.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=158)** So this code block here is performing hyperparameter tuning for machine learning models using GridSearchCV.
>
> **[2:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=165)** So GridSearchCV explores a predefined set of hyperparameter values to find the combination that optimizes the model performance.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=173)** And here's how it does that.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=175)** So in our code, the loop iterates through each model in the model's dictionary that we set up previously.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=182)** And these models include, of course, [[Linear Regression]], random forest, and gradient boosting.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=187)** For each model that has corresponding hyperparameter grid information in param grid, a grid search CV is performed.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=194)** Here, GridSearchCV takes the model hyperparameter grid, cross validation parameter, which is CV equals 5, and this indicates a fivefold cross validation and the scoring method, which is neg_mean_squared_error.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=209)** Next, the fit method is used to run the grid search and find the best combination of hyperparameters that maximizes the mean squared error.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=216)** So the best hyperparameters are obtained using grid_search.best_estimator.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=221)** The best estimator, which is the model with the optimal hyperparameter, is then assigned back to the model's dictionary under the same model name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1)
> **CLI Commands:** find (3)
> **Code Identifiers:** neg_mean_squared_error (1), grid_search (1), best_estimator (1)
> **Versions:** 0.01 (1), 0.1 (1), 0.2 (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Linear regression, random forest, and gradient boosting](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=0)** - [Presenter] Okay, so this is when the magic happens.
>
> **[0:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=2)** We're getting our models ready to make predictions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=6)** For model_name, model in models.items.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=17)** So for each model in our group, we call them models.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=20)** And we're going to do some training.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=23)** Type model.fit, X train, Y train.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=33)** This is like teaching each model, hey, look at these example X train and their answers, Y train.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=40)** And learn from that so that when I give you a new example, you can predict the answer.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=44)** So in simple terms, this is like providing each model some practice with the training data so that they can predict values.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=52)** Now let's run this.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=54)** Now that we've done the model training.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=56)** Next, it's time for us to do some model evaluation so that we can identify which model is better.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=62)** For each model in the collection, we're going to set up a loop to perform the evaluation.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=68)** So Y_pred equals model.predict X_Core test.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=75)** So we're passing through the models and using the X test data to predict the Y values using the models.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=83)** Now let's evaluate the predicted data.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=86)** Next, we're just printing the model name and metrics next to it, it'll say [[Linear Regression]] metrics.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=92)** And after that we're going to print the mean absolute error.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=95)** So type mean_absolute_error, open ended parenthesis, and say why test?
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=105)** Y_test comma Y_pred, and then close the parentheses.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=113)** So we're comparing the Y test value and the Y predicted value.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=117)** So this is the actual value and this is the predicted value.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=121)** We're going to do the same for mean squared error.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=123)** So type mean_squared_error.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=130)** Y_test, comma Y_pred, and then close the parentheses.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=137)** All right, now we're going to do the same for R squared value, R squared score open parenthesis, Y test, comma Y pred, parenthesis.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=153)** Excellent, now let's run the code.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=155)** So mean absolute error measures the average absolute difference between the predicted values and the true values.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=162)** So lower Me indicates better prediction accuracy.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=166)** So for linear regression, the predicted latte prices are off by approximately 0.22 units from the actual prices.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=176)** And for random forest metric, it's 0.235, which is a bit higher.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=182)** And for gradient boosting we see it's 0.218, which is very close to what linear regression was.
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=190)** Let's look at the other scores.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=192)** Next score is the mean squared error.
>
> **[3:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=194)** So what means squared error is it calculates the average of the square differences between the predicted and the true values.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=201)** So MC, this value over here penalizes large errors more than MAE does.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=208)** So let's take a look at the MAE values.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=211)** Over here we have 0.065, which means the average of the squared errors is around 0.066 approximately.
>
> **[3:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=221)** And here we have 0.0781, and then here we have 0.0669.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=226)** So over here as well, we see that the linear regression did much better.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=230)** So our next metric is R squared.
>
> **[3:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=233)** R squared represents the proportion of variants in the target variable that is predictable from the independent variable.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=239)** So R square values that are closer to one indicate a good fit of the model to the data.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=245)** So the ones that we see with the highest R square value is for linear regression.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=251)** Random forest, it was 0.339 and gradient boosting was much closer.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=258)** So the overall verdict is that linear regression is slightly better than the other two models.
>
> **[4:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=262)** So going forward we'll be using linear regression. .

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (7)
> **Versions:** 0.22 (1), 0.235 (1), 0.218 (1), 0.065 (1), 0.066 (1)
> **Code Identifiers:** model_name (1), mean_absolute_error (1), mean_squared_error (1)
> **Env Vars:** mae (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Predicting price based on model evaluation results](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=1)** - [Instructor] Now it's time for us to do some predictions.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=4)** So now we're going to remove the zip code column and the latte price column from this top five zip codes data frame.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=10)** We're dropping these because zip code is just an identifier and latte price is what we're trying to predict.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=17)** Next, we're scaling the remaining columns in the zip code df, using the same scaler, sc that you use to scale your training data.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=27)** This is crucial to maintain consistency in the data format and ensure the model interprets the new data correctly.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=34)** So after all this, zip code df is now formatted compatibly with our training models, and now we can use them to predict latte prices for those specific zip codes that we identified.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=45)** So next, this loop iterates over each model in our models dictionary.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=50)** Using each model, it predicts the latte prices for the top five zip codes based on their features.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=55)** Now let's run this code.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=58)** After that, we initialize an empty dictionary called predictions to store the predicted prices of each model.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=66)** Then we iterate over each model.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=68)** Here, this line predicts the latte price for the top five zip codes using the current model and store the predictions in the predictions dictionary.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=77)** Next, we're converting the predictions dictionary into a data frame called predictions_df, where the column represents the predicted prices from the specific model.
>
> **[1:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=87)** And after that, we're going to add zip codes.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=90)** So over here, we add the zip code column from the top five zip codes df to predictions df.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=98)** Then this line over here defines the decide column order with zip code as the first column.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=105)** Next, this line over here reorders the column predictions_df based on the specified order.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=111)** Lastly, we take a look at what the data frame looks like.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=115)** So now this should contain the predicted latte prices from each model for the top five zip codes, with the zip code column as the first column.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=124)** Let's take a look, now, let's run the code.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=128)** There we go, so now we see that we have all those 18 zip codes.
>
> **[2:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=136)** We have 18 different rows, because this first zip code over here has five different shops.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=143)** So for all of those five different coffee shops, the model has predicted different values.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=149)** So this provides us a range between 4.785 to 4.77.
>
> **[2:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=156)** So these are the ranges that we can have our price for this particular zip code.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=163)** So if we set up a new coffee shop in this zip code, our price can range from this value over this value per the [[Linear Regression]] model, and so on and so forth for the other three models.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=176)** Next, let's scroll down.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=178)** This line groups the data frame by zip code and selects the column containing the predictions from the gradient boosting model.
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=184)** After that, we apply aggregation functions to calculate the maximum highest and the minimum lowest for each group.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=193)** Then we apply the aggregation function to calculate the maximum highest and the minimum lowest value for each group.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=200)** This resets the index of the resulting data frame making zip code as a regular column again.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=206)** This line renames the columns for clarity, replacing the original column names with more descriptive ones.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=211)** Lastly, we display the aggregated data frame showing the highest and lowest predicted prices from the linear regression model for each zip code.
>
> **[3:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=219)** So now let's run the code to see what our predictions look like.
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=223)** Excellent, so for the top five zip codes, it has predicted the highest value and the lowest value ranges for each of the zip codes.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=234)** When we set up our new coffee shops at these locations, we should consider setting the price somewhere between these two numbers for each of those locations.
>
> **[4:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=243)** And there we go, now we have the top five zip codes where we need to set up our next coffee shop to be successful, and we also have predicted the price ranges for the latte at each of these locations.
>
> **[4:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=258)** I hope this was helpful, let's move on to our next project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2)
> **Prerequisites:** set up (3)
> **Code Identifiers:** predictions_df (2)
> **Versions:** 4.785 (1), 4.77 (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 3. Chat with Your Documents Using LLM: Back-end with OpenAI, Python, AWS, and FastAPI

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up MongoDB](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=0)** - [Narrator] In this project, we're going to create an AI application where you can upload any document or PDF, and it will have the ability to answer any questions related to that document.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=12)** Think of it like [[ChatGPT]] that has knowledge about your document.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=16)** So let's begin.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=18)** First, let's install the necessary [[Python (Programming Language)|Python]] packages.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=21)** For this type pip install -r.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=26)** And over here in this file, which is labeled as Requirements.txt, we have the list of all packages that needs to be installed and are going to be used in our program.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=38)** So what we're going to do is we're going to copy the path of this file and we're going to paste it here and run that.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=47)** Now that the packages have been installed, let's get to the next step.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=51)** We're going to hide the Explorer.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=53)** First, we need to install several Python modules to set up the environment for working with pydantic, [[MongoDB]], and handling errors, through traceback.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=64)** So here we're importing pydantic for defining data models and pymongo for MongoDB.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=69)** Next we're importing the traceback for error handling.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=72)** After that, we're importing os and sys for system-related operations.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=77)** After that, we're importing FastAPI components for building the web application.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=84)** FastAPI is a Python-based web framework that makes it easy to create fast and efficient APIs.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=90)** So here we import the necessary components from FastAPI, including FastAPI, UploadFile, status, and HTTPException.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=99)** Next, we import JSONResponse for returning [[JSON]] responses.
>
> **[1:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=103)** After that, we install middleware for CORS handling and modules from custom library called [[LangChain]] Community for text processing and document loading.
>
> **[1:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=115)** Now we import specific classes from the LangChain and LangChain OpenAI libraries.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=122)** LangChain is a framework for building applications powered by language models and LangChain OpenAI is part of LangChain that specifically focuses on integrating with OpenAI APIs.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=133)** Next, we import the gc module for garbage collection so that we can save on memory and the urllib.parse for parsing URLs and awswrangler for simplifying interactions with AWS services, particularly for engineering task.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=149)** Next, we import boto3 library for interacting with AWS services.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=154)** Next let's set up the environment variables and define variables for AWS S3 configuration in Python.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=163)** So over here on line 37, we're going to be inputting our OpenAI key.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=169)** In order for you to obtain your OpenAI key, you would have to sign up for an OpenAI account and sign up for an OpenAI key.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=177)** Once you sign up to obtain your OpenAI key, paste your key here.
>
> **[3:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=183)** Similarly, set up an AWS S3 bucket and obtain the following information from that S3 bucket.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=193)** Follow this link for instructions on how to set up your S3 bucket and obtain this information.
>
> **[3:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=200)** Here we're attempting to connect to MongoDB database using the provided MongoDB connection URL.
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=206)** Before you do this, make sure you download a free version of MongoDB.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=210)** Once you've downloaded the free version of MongoDB, follow this link on how to obtain the MongoDB URL.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=217)** Once you've downloaded MongoDB, replace this with your admin name and replace this with your admin password.
>
> **[3:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=225)** These lines of code create a connection to MongoDB server using PyMongo.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=230)** It connects the chat_with_doc database and accesses the chat-history collection within the database.
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=238)** This line creates an index on session_id field with chat history collection, ensuring uniqueness.
>
> **[4:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=245)** Indexing is often used to improve query performance.
>
> **[4:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=249)** In case of an exception during the MongoDB connection, this block handles the exception by printing detailed error information, including the type of the exception, file name, and line number.
>
> **[4:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=261)** It uses traceback and sys modules for this purpose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (10), [[LangChain]] (6), [[Python (Programming Language)|Python]] (4), [[ChatGPT]] (1), [[JSON]] (1)
> **CLI Commands:** python (4), aws (4), pip (1), make (1)
> **Env Vars:** aws (4), url (2), pdf (1), json (1), cors (1)
> **Prerequisites:** install (4), set up (4)
> **Code Identifiers:** chat_with_doc (1), session_id (1)
> **Definitions:** is a  (2)
> **File Paths:** requirements.txt (1)
> **Analogies:** think of it like (1)

#### [Generate chat responses using GPT-3.5 and Langchain](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=0)** - [Instructor] Here we're defining a pedantic model named ChatMessageSent using the base model class.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=6)** Next, we create a function named get response that takes several parameters.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=11)** This is the name of the file to load data from.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=14)** This is the session ID for tracking conversation history.
>
> **[0:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=18)** This is the user query or question to be used in the conversation.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=22)** Here we're using the model GPT-3.5 Turbo 16K, and then we're setting the temperature of the model to zero.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=31)** Temperature parameter is to control the response randomness.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=36)** The default is set to Zero, which produces a very stable or less random response.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=43)** Then we print the file name and update it by extracting the last part after the slash using this line over here.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=51)** So overall, this function generates a response using a conversational model like GPT-3.5 Turbo.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=57)** It takes a final name to load data, a session ID to track the conversation, a query or question, and optional parameters for model selection and temperature control.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=67)** The open AI embeddings class is used to convert text to numerical representations, and the S3.download function is used to [[Fetch]] a file from the S3 bucket.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=80)** Now we're going to set up document processing based on its file type, either a.docs or a PDF, and then we have the program used to process data to create a conversational retrieval chain with an open AI model.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=98)** Let's see how to do that.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=100)** First, we check the file type of the document, whether it's the .docs or PDF file, and then we load the document using the appropriate loader.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=109)** Next, we load the data and we split the loaded data into chunks that fit the GPT token limit.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=116)** After that, we store the data in a vector database to an enabled search functionality.
>
> **[2:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=123)** F-A-I-S-S is that vector database.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=127)** After that, we initialize an open AI model with specified parameters.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=133)** Then we create a conversational retrieval chain with the OpenAI model and the vector database.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=140)** Once we do that, we use a callback to determine the number of [[Tokens]] used during the query.
>
> **[2:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=147)** After that, we print several metrics related to the tokens.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=151)** After we do that, we collect garbage from the memory to free up some space.
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=157)** Lastly, we write return answer so that it returns answers to the query along with the total tokens used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Fetch]] (1)
> **Env Vars:** gpt (3), pdf (2)
> **Versions:** 3.5 (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Load conversation history for a given session ID](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=0)** - [Instructor] Now we're going to create a [[Python (Programming Language)|Python]] function called load memory to pass and design it to retrieve conversation history associated with a given session ID from a [[MongoDB]] collection.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=15)** And this will return a list of conversation history as a topple that contains both user message and bot response.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=24)** Let's check out how to do that.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=27)** This line queries the MongoDB collection to find a document with a specific session ID.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=34)** The result is stored in the variable data.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=38)** Next, if the data is not none, meaning the document within the given session ID was not found, the function then processes the conversation history.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=48)** It retrieves conversation field from a document and the conversation field is assumed to be a list where even indices represent human messages and odd indices represent AI responses.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=60)** The function then creates topples of these pairs and extends the history list.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=66)** Finally, this function prints the retrieved history and it returns the history list containing topples of user messages and the corresponding bot responses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Create new sessions and add chat history to existing sessions](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=0)** - [Instructor] In this lesson, we're going to explore how to create a new session ID for a chat or how to add conversation history if there's an existing session.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=12)** First, we define a function named get_session that generates a new session ID and return it as a string.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=20)** Next, we use the UUID module to create a universal unique identifier, ensuring the uniqueness in each of these sessions.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=28)** Next, we retrieve the [[MongoDB]] document with the specific session ID using conversationcol.find_one.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=37)** In this line, the function checks if the document exists.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=41)** If it does, it appends the new conversation values to the existing conversation list.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=47)** If not, it inserts a new document with the provided session ID and new values into the MongoDB collection conversationcol.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=56)** This kind of organization is crucial for applications that involve maintaining user interactions or dialogues over multiple sessions.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=65)** So this code allows for seamless storage and retrieval of conversation data tied to specific session IDs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **Code Identifiers:** get_session (1), find_one (1)
> **Env Vars:** uuid (1)
> **Speakers:** - [instructor] (1)

#### [Setup FastAPI app, CORS, S3 session, and obtain a chat response](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=0)** - [Instructor] Here we are initializing a FastAPI application named app.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=5)** Next in this block of code, we're adding the CORS middleware to the FastAPI application.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=10)** This is allowing requests from any origin, credential, HTTP methods or headers.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=16)** Here we are creating AWS S3 session using boto3 with the provided AWS access credentials.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=23)** The AWS S3 variable holds a session configured with AWS access key, secret key, and region.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=31)** Next, we're defining a FastAPI endpoint /chat using the HTTP post method.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=38)** The create_chat_message function is an asynchronous function that handles the /chat endpoint.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=43)** Next, what we're going to do is we are going to create a chat message and obtain a response based on the user input and the session ID.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=51)** If it's a new session, we create a new session ID.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=54)** If it's an existing session, then we add onto the conversation history using the session ID.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=59)** Let's check out how they do that.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=61)** So we're going to check two cases.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=64)** First case is when chats.session_id is none.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=68)** A new session ID is generated using the get_session function.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=73)** And then we prepare the payload with session details and user input.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=76)** So a payload is then created using the ChatMessageSent model, including the new session ID, user input and data source.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=86)** The model dump method is then applied to the payload.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=89)** After that, the get response function is called with the data source, session ID and user input from the payload to obtain a response.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=98)** After that, we add user input and bot response to the session ID.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=102)** So the conversation history is updated with the user input and bot response.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=107)** Next, we're going to return [[JSON]] response with response message and session ID.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=113)** So over here, a JSON response is returned containing the response message and the session ID.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=120)** So the next case that we're going to be looking at is when chats.session_id is not none.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=126)** So we use the existing session ID.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=128)** The payload is created using an existing session ID, user input and data source.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=134)** And then we get response based on user input and session.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=138)** The get response function is called with the data source, session ID and user input from the payload to obtain a response.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=146)** And then after that, what we do is we add user input and bot response to the existing session history.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=153)** The conversation history is updated with the user input and the bot response.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=158)** Lastly, we return the JSON response with response message and session ID just like we did previously.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=166)** Here, JSON response is returned containing the response message and the existing session ID.
>
> **[2:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=173)** In case of an exception, it prints detailed error information, including the trace back and raises HTTP exception with 204 no content status and an error detail.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=186)** So to recap what we did during this lesson, we created a chat message and obtained a response based on the user input session.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=193)** We use a Pydantic model representing the chat message, including the session ID, user input and data source.
>
> **[3:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=198)** And then we return JSON response containing the response message on the session ID based on the chats.session_id value.
>
> **[3:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=207)** If it was none, then it created a new session ID.
>
> **[3:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=210)** If it was not none, then it added onto the existing history.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=214)** And then we set up exception handling for when it encounters an error and have it print detailed error information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5)
> **Env Vars:** json (5), aws (4), http (3), cors (1)
> **Code Identifiers:** session_id (3), create_chat_message (1), get_session (1)
> **CLI Commands:** aws (4)
> **Definitions:** is called (2), is an  (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Upload files to Amazon S3 storage bucket](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=0)** - [Instructor] Next we're going to learn how to upload a file to Amazon S3 storage.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=4)** So we're going to have the /uploadFile FastAPI endpoint asynchronously process the file uploads.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=11)** We're going to have it temporarily saved the file locally, upload it to Amazon S3, remove it from the local file system, and return a [[JSON]] response containing the file name and S3 file path, with the appropriate exception handling at the end.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=27)** Let's check out how to do that.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=29)** So over here in this section, we defined a FastAPI endpoint at /uploadFile that handles the HTTP post request.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=36)** The function upload to S3 is an asynchronous function that takes a file input using the FileUpload type.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=45)** Then we print the file name extracted from the uploaded file path.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=49)** Next, we're going to be uploading our files to the S3.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=53)** This code opens the local file for writing in binary mode, reads the content of the uploaded file, asynchronously writes the content to the local file, and then closes the file.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=64)** This step is important because some S3 upload functions require a local file.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=69)** So here the wr.s3.upload function is used to upload the local file to Amazon S3.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=77)** It specify the local file path, the destination S3 path, and the AWS S3 session.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=82)** Next what we're going to do is we're going to remove the local file.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=86)** After successfully uploading to S3, the local file is being removed from the local file system to avoid unnecessary storage usage.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=95)** Lastly, we prepare a JSON response.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=99)** Here, a dictionary is created containing the file name and the S3 file path.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=104)** After that, we set up exception handling.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=107)** So if the local file is not found, for example, due to an issue with the file creation step, an HTTP exception with the status code of 404 is raised, this indicates the item is not found.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=121)** Finally, a JSON response containing the file name and S3 file path is returned to the client.
>
> **[2:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=127)** And last but not least, we're now ready to run the application.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=131)** So the last part of the script here runs the FastAPI application using Uvicorn when the script is executed directly.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=141)** This allows us to run the application by executing the script.
>
> **[2:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=145)** Now we're all done with the backend of the application.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=149)** It's time for us to run the application to see how it works.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=153)** I hope you're as excited as I am to have this run and test the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3)
> **Env Vars:** json (3), http (2), aws (1)
> **Code Identifiers:** uploadfile (2)
> **CLI Commands:** aws (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Deploy and run the chatbot](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=0)** - [Instructor] Now is the fun part.
>
> **[0:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=2)** Let's run the AI application that we just built.
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=5)** Go to your terminal and type cde Begin.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=9)** Begin is the folder where this program is located, and then click on the run button.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=16)** Wait for the code to run. It's completed running.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=20)** Now go to the ports tab, and this is where our application is located in the port 8000.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=28)** So over here you'll see a globe symbol, or you can click directly on this link.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=32)** Click on this link or this globe symbol.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=35)** It'll take you to the URL.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=38)** So at the very end of this URL type /docs and type enter.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=45)** This should take us to our FastAPI interface.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=48)** The first step is for you to click and expand on the upload file.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=53)** Once you're here, click try it out.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=57)** After you click try it out, you should now be able to choose a file to upload.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=62)** Click on the choose file and navigate to the folder where the file that you want to upload is located.
>
> **[1:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=69)** For now, I'm going to be uploading an employee manual for a fictitious company called Landon Hotel, which we created for the purpose of this demonstration.
>
> **[1:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=79)** Let's click open. After that, click execute.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=84)** Once you've executed it, you'll see here at the very bottom that we'll have an S3 file path.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=93)** This is where our file is stored in the S3 bucket.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=97)** Copy this link or the file path.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=101)** Now go up top over to the /chat.
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=106)** Click on this to expand it. And now again, click try it out.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=111)** Over here, you'll see that when you click try it out, you have these three parameters that pop up.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=117)** We're going to clear out of the session ID because we don't have any other session ID that exists.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=122)** This is our first chat.
>
> **[2:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=124)** So next what we're going to do is we're going to paste the data source that we copied over from the bottom, which is our S3 bucket storage link.
>
> **[2:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=134)** Next, we're going to ask a question about this document.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=138)** So now let's ask a simple question such as, what is this document about?
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=142)** Let's execute to see what happens.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=146)** If you scroll down to the response body, you see that there's an answer that's produced.
>
> **[2:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=150)** So the AI application now turned us an answer that says, "This document is an employee manual for Landon Hotels.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=158)** It provides information about working conditions, benefits, policies affecting employment at the hotel.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=163)** It also includes sections on changes in policy, employment application, communication, definition of employee status."
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=171)** So you get the idea, right?
>
> **[2:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=172)** So we're able to upload a document and ask questions about it.
>
> **[2:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=177)** So you get the idea.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=178)** We're able to upload a document and ask any question about the document, and the AI program will return back an answer related to that.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=187)** So let's try one more question.
>
> **[3:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=191)** "If I go to the Landon Hotel corporate [[Microsoft Office|office]] at 6:00 PM
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=202)** on a Thursday, will it be open?"
>
> **[3:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=206)** So we have no idea about what time the Landon Hotel Corporation is open until, so let's see whether this program will be able to give us an answer.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=217)** Click execute. Let's see what happens.
>
> **[3:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=220)** Yeah, it produced a response stating that, "No, the Landon Hotel corporate offices are open for business from 8:00 AM to 6:00 PM Monday through Friday.
>
> **[3:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=229)** If you go to the office on 6:00 PM it will be closed."
>
> **[3:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=232)** Which is correct. That's it.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=234)** Now this concludes the demonstration of our backend application.
>
> **[3:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=239)** Congratulations on creating the backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2)
> **UI Navigation:** go to (4), click on (4), navigate to (1), scroll down (1)
> **Ports:** :00 (4), port 8000 (1)
> **Env Vars:** url (2)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Complete the backend code for file upload](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=5)** - [Person] It's time for a challenge now.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=7)** Use the knowledge that you've gained in the previous lessons and complete this coding lesson.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=14)** We'd like for you to use the code that's within the "Begin" folder labeled as "CH_3a_challenge."
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=23)** The libraries needed to complete this challenge have been already populated for you.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=28)** Go ahead and initialize the FastAPI app.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=37)** The libraries necessary for you to complete this challenge have already been populated for you.
>
> **[0:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=44)** In this challenge, please go ahead and initialize the FastAPI app, set up the AWS A3 session using your own AWS access key ID and secret access key.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=59)** Install [[MongoDB]] in code-space and start the database.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=64)** Update the S3 bucket and S3 bucket path based on what you've defined in your AWS environment.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=73)** Once you've done that, go ahead and create the upload endpoint.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=81)** Next, extract the file name from the uploaded file, and save the file temporarily to a local file system, then get the file size and get the upload timestamp, once that's done, upload the file to AWS S3 bucket, remove the local file after upload and prepare [[Metadata]] stored in MongoDB.
>
> **[1:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=105)** After that, insert the file metadata into MongoDB, and then, return the response.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=112)** Once that's done, go ahead and configure exception handling.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=118)** So to summarize, in this challenge, you are going to be uploading a file to your S3 bucket and configuring exception handling.
>
> **[2:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=128)** Go ahead and give it a try, and I'll see you with the solution in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[Metadata]] (2)
> **CLI Commands:** aws (4)
> **Env Vars:** aws (4)
> **Prerequisites:** set up (1), install (1), configure (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [person] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Complete the backend code for file upload](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=5)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=6)** I hope you took some time to complete the challenge.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=9)** Now let's take a look at the solution together.
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=12)** We start by importing several libraries which help our app handle file uploads, connect to [[Databases]], and interact with [[Cloud Storage]].
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=20)** FastAPI is the framework we're using to create our API.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=24)** The UploadFile library handles file uploads in FastAPI.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=28)** HTTPException allows us to handle exceptions in a way that returns proper HTTP responses.
>
> **[0:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=34)** JSONResponse helps us send [[JSON]] responses to the client.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=38)** OS is for interacting with operating system, datetime for timestamping events.
>
> **[0:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=46)** Boto3 is the AWS SDK for [[Python (Programming Language)|Python]], which allows us to interact with AWS services.
>
> **[0:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=51)** AWS Wrangler is a utility that simplifies working with AWS services such as S3.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=56)** And then we're importing MongoClient from PyMongo, which is used to connect to a [[MongoDB]] database.
>
> **[1:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=62)** PyMongo provides tools for working with MongoDB.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=65)** Next, let's set up our FastAPI and initialize a session with AWS for interacting with S3.
>
> **[1:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=72)** Type in app = FastAPI.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=82)** And then over here, type in your access key ID from your AWS account and the secret access key that belongs to that key ID.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=92)** Once that's done, let's go ahead and install MongoDB in [[Codespaces]].
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=97)** Copy this command and type it in here.
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=100)** Let that run.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=104)** Once that's completed, type in the next command over here.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=110)** After that, let's go ahead and start the database.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=120)** All right, now type in the S3 bucket name that you've defined in your AWS environment and the S3 path where it's located.
>
> **[2:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=133)** This is my AWS account and I've defined a bucket called docchat.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=137)** Under this bucket, I have a folder called downloads where I would like the document to be uploaded.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=146)** Once you've defined the S3 bucket and the S3 path, we now define our FastAPI route that handles the file upload.
>
> **[2:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=155)** This creates a post route at uploadFile where user sends a file to the URL and uploadto3s3 function will handle the request.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=168)** Next, we extract the file name from the uploaded file.
>
> **[2:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=171)** If the file name includes a path, we only take the last part.
>
> **[2:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=178)** Now let's go ahead and save this file locally.
>
> **[3:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=182)** Type in with open.
>
> **[3:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=186)** Within the parenthesis, type f, quotes, open quotes, open curly braces and type in file_name, comma, wb as out_file.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=211)** We open a new file locally with the same name as the uploaded file.
>
> **[3:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=216)** Type in content = await data_file.read.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=230)** And in the next line write out_file.write(content).
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=238)** This line writes to the disc.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=241)** So to summarize, we open the new file locally and then we read the content of the uploaded file asynchronously and then we write the content to the local file.
>
> **[4:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=255)** Once we do that, we get the file size and the upload timestamp.
>
> **[4:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=259)** After that, this is the main part where we upload the file to the AWS S3 bucket.
>
> **[4:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=265)** Type in wr.s3.upload, open parentheses, go to the next line.
>
> **[4:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=272)** Type in local_file = file_name,
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=283)** and then type path = f, open quotes, s3://, S3_BUCKET.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=299)** This is the S3 bucket name that you had defined, /S3_PATH.
>
> **[5:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=316)** And then file_name.
>
> **[5:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=323)** Type comma.
>
> **[5:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=325)** And in the next line, type in boto3_session=aws_s3,.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=338)** So we use AWS Wrangler's upload function to upload the file to S3 bucket.
>
> **[5:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=344)** The local file parameter is the file where we saved locally, the path parameter specifies where in S3 to upload the bucket.
>
> **[5:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=354)** Then we pass the AWS session we created earlier.
>
> **[5:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=357)** Next, let's remove the local file.
>
> **[6:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=360)** Type in os.remove(file_name).
>
> **[6:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=367)** After successfully uploading the file to S3, we delete the local copy to save some space and for security reasons.
>
> **[6:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=374)** We then store some [[Metadata]] about the file in MongoDB.
>
> **[6:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=378)** This dictionary contains details about the file, including its name, size, the time it was uploaded in the path to the file in S3.
>
> **[6:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=386)** We insert this metadata into the file_metadata collection in our MongoDB database.
>
> **[6:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=391)** The insert_one function returns a result object that tells us whether the insertion was successful.
>
> **[6:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=400)** Then we return the JSON response to the user with details about the file.
>
> **[6:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=404)** We prepare a JSON response that includes the file name, size, upload time, the S3 file path, and whether the MongoDB insertion was successful.
>
> **[6:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=413)** And the last thing that we do is error handling.
>
> **[6:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=416)** We handle any errors that might occur such as if the file is not found or there's a problem during the upload.
>
> **[7:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=423)** So go ahead and type in raise HTTPException, open parenthesis, status_code=404, detail=,
>
> **[7:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=440)** and then we type in a message that says File not found.
>
> **[7:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=448)** If the file is not found, we raise a 404 HTTP exception.
>
> **[7:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=452)** For any other exceptions, we print the error and raise a 500 HTTP exception indicating a server error.
>
> **[7:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=461)** Finally, we return a JSON response containing all the information we prepared in the response dictionary.
>
> **[7:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=468)** Now it's time to run the application to see if we're able to upload a sample file to the S3 bucket.
>
> **[7:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=478)** Now let's type uvicorn Begin, which is the folder that we're in, and then the file name, which is CH_3a_challenge.
>
> **[8:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=497)** And then add a colon and type in app --reload.
>
> **[8:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=502)** Let that code run.
>
> **[8:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=505)** Once you hit Enter, you should see that it says application startup complete.
>
> **[8:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=510)** Under ports, you'll see the URL and an icon that says open in browser, click on that and in the browser URL, type /docs and hit Enter.
>
> **[8:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=522)** Click on the down arrow here where it says upload file and then click try it out.
>
> **[8:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=528)** Select the choose file option and select the file that you'd like to upload.
>
> **[8:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=533)** Click open and click on execute.
>
> **[8:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=537)** Once it's executed, you'll see that in the response body, it says that the file has been uploaded, showing that the mongo_insert_status is true and it also provides the upload time, the file path where it's located.
>
> **[9:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=553)** Now let's take a look at my AWS bucket to see if the file has been uploaded to confirm that our code works.
>
> **[9:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=561)** So here's my AWS buckets.
>
> **[9:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=564)** Under the buckets, I have the docchat bucket open, and within the docchat bucket, I'm on the downloads folder.
>
> **[9:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=571)** And within that folder, we see our Landon Hotel employee manual that's been uploaded.
>
> **[9:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=577)** That's how you would go in and confirm that your document has indeed been uploaded to the S3 bucket.
>
> **[9:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=584)** If you have any additional questions related to this challenge, please drop your comments in the Q&A section of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (6), [[JSON]] (4), [[Metadata]] (2), [[Databases]] (1), [[Cloud Storage]] (1)
> **Env Vars:** aws (13), json (4), http (3), url (3), api (1)
> **CLI Commands:** aws (13), python (1)
> **Code Identifiers:** file_name (4), out_file (2), uploadfile (1), data_file (1), local_file (1)
> **UI Navigation:** click on (3), select the (2), open the (1), go to (1)
> **Cross-References:** in the next (3)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1), install (1)


### 4. Chat with Your Documents Using LLM: Front-end with Streamlit

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to API communication with Python](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=1)** Now we're going to build the frontend for the AI application that we built in the previous chapter.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=6)** In the last lesson, we saw how to build the backend and how it worked.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=10)** Now, before we get coding, I'll give you a quick sneak peek of how the frontend looks.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=15)** So here's how it looks.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=17)** Here you have a browse files button, click on that, and then now we're going to load the same employee manual from a fictitious company that we created to test our application.
>
> **[0:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=29)** Click open, excellent, it's uploaded.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=32)** Now let's ask questions.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=35)** "Hi, what is the employee leave policy?"
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=43)** Excellent, so it says, "Although it doesn't specifically provide employee leave policy, it does mention if an employee requires an extended absence due to medical or personal reasons, they should consult HR."
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=55)** So that's exactly what we wanted it to do.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=58)** We want it to be able to upload a document or A PDF and be able to ask questions regarding the document and obtain intelligent answers.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=67)** So I specifically asked this question about employee leave policy because I knew that there is no employee leave policy that was explicitly mentioned in the document.
>
> **[1:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=75)** So I wanted to see how the chat bot would [[React.js|react]] to a question like this, which wasn't directly in the document, and it did a pretty good job of telling me that there was no specific employee leave policy, but at the same time, provided additional guidance on how to go about obtaining a leave.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=94)** There we go. That's a quick demo of our frontend.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=97)** Great, now let's close our [[Windows]] and go back to our code file.
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=101)** So first we're going to say PIP install Streamlit.
>
> **[1:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=107)** After Streamlit is installed, we're going to import request and [[JSON]] modules.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=111)** These are commonly used for making HTTP request and handling JSON data.
>
> **[1:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=117)** Next, go to the ports tab, and over here port, 8000 contains our backend.
>
> **[2:02](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=122)** So expand this and you'll see the entire address.
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=126)** Click on the copy local address option over here, and then paste it over in the backend URL.
>
> **[2:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=132)** Make sure that we don't have a slash after .dev, if you have a slash, make sure you delete it.
>
> **[2:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=141)** So what we're going to do is we're going to send a user input to a chat API and return the response.
>
> **[2:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=146)** At the end we'll get a tuple containing the response answer and the updated session_id.
>
> **[2:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=151)** So let's see.
>
> **[2:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=153)** Now we're going to create the API endpoint URL for the chat by appending the /chat to the backend URL.
>
> **[2:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=158)** After that, we print the input parameters for debugging purposes.
>
> **[2:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=163)** Then we're going to prepare the payload for API requests.
>
> **[2:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=166)** Here we check if the session ID is provided.
>
> **[2:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=169)** If not, we create a payload, JSON string, with only user_input and data_source.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=176)** If session_id is provided, we include it in the payload.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=179)** Next, we define the headers for the API request, specifying that the client accept JSON and that the content type of the request is JSON.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=189)** Next, we use the request module to make a post request to the chat API with the specified URL header and payload.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=196)** After that, we print the JSON response from the API for debugging purposes.
>
> **[3:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=201)** Lastly, we check off the HTTP status code of the responses 200, which means it's successful.
>
> **[3:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=208)** If yes, return the response answer and the update session_id from the JSON response.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=214)** And to summarize, this code essentially defines a function chat to communicate with the chat API, sending the user input and the data, and receiving a response, along with the updated session identifier.
>
> **[3:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=226)** We also add debugging statements to print input parameters and API responses for troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[React.js|React]] (1), [[Windows]] (1)
> **Env Vars:** api (8), json (7), url (4), http (2), pdf (1)
> **Code Identifiers:** session_id (3), user_input (1), data_source (1)
> **CLI Commands:** make (3), pip (1)
> **Cross-References:** previous chapter (1), in the last (1), go back to (1)
> **UI Navigation:** click on (2), go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [File uploads and advanced API interactions](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=0)** - [Instructor] Now let's define a function called upload_file to upload a file to a specific API endpoint using the request module for making HTTP requests.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=10)** So over here we're defining a function named upload_file that takes one parameter, file_path, representing the path of the file to be uploaded.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=19)** And after that, we print the file path for debugging purposes.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=23)** Next, we extract the file name from the file path by splitting it using the back slash as a separator and taking the last part.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=32)** Then we define the API endpoint for file upload by appending /uploadFile to the BACKEND_URL.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=39)** Also print the constructed URL for debugging.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=43)** Next we're going to prepare the payload and files for the file upload request.
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=47)** In this case, an empty payload is issued and a tuple is created with the file data.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=54)** So the tuple includes the field name data_file, a tuple containing the file name, file object, and the content type.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=64)** Next we define headers for the file upload request, specifying that the client accepts [[JSON]].
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=70)** Next, we use the request module to make a POST request to upload the file with the specified URL, headers, payload, and files.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=82)** Print the HTTP status code of the response for debugging.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=86)** After that, we check if the file upload was successful.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=90)** HTTP status code 200 means it was successful.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=94)** If yes, print the JSON response for debugging and return the file path returned by the API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** api (3), http (3), url (2), json (2), backend_url (1)
> **Code Identifiers:** upload_file (2), file_path (1), uploadfile (1), data_file (1)
> **CLI Commands:** make (1)
> **API Endpoints:** post  (1)
> **Speakers:** - [instructor] (1)

#### [Streamlit app basics and file handling](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=0)** - [Instructor] All right, next, we're going to be importing Streamlit.
>
> **[0:03](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=3)** Streamlit is an open source [[Python (Programming Language)|Python]] library that makes it easy to create and share custom web apps for machine learning and [[Data Science]].
>
> **[0:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=12)** It's designed to help you turn data scripts into shareable web apps in just minutes.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=17)** And here's a quick example of what Streamlit is.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=21)** Imagine you are a chef.
>
> **[0:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=23)** You have a great recipe for a cake, but you want to share it with your friends.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=26)** You could write it down in a cookbook, but that would take a lot of time and effort.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=30)** Instead, you could use a recipe app where you write down your recipe and then you can share it with your friends.
>
> **[0:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=35)** By sending them the link, they can see the recipe and even try making the cake themselves.
>
> **[0:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=41)** Streamlit is just like that.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=42)** It's like that recipe app.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=43)** It's a tool that helps you turn your data analysis or machine learning code into a web app.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=48)** You write your code in Python and Streamlit takes care of the [[Representational State Transfer (REST)|rest]].
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=53)** It automatically generates a web interface for your app and it updates the interface in real time as your code runs.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=60)** So in simple terms, Streamlit is the tool that helps you turn your Python scripts into interactive web applications.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=67)** It's perfect for data scientists, machine learning engineers, and anyone who wants to share their work with others.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=73)** So after we import Streamlit, we also import time, which is a standard Python module for time-related functions and we install os, which is used for interacting with operating systems.
>
> **[1:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=85)** Next, we're going to configure a page setting for the Streamlit app.
>
> **[1:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=89)** This includes setting a page title to Document Chat, and setting a book emoji as a page icon.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=95)** And the layout is set to wide.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=98)** You can change the page title and the page icon to anything that you would like.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=104)** Next, we're going to initialize the chat history and session variables using Streamlit's session_state.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=110)** If the messages and the sessionid variables are not already present in the session_state, then they are created with the initial values.
>
> **[1:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=118)** Next, we're going to create a file uploader widget using Streamlit's file_uploader function.
>
> **[2:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=125)** Here, we're specifying that the user can only upload a single file.
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=129)** You can change this to true if you'd like for the user to upload multiple files, and then we have it accept file types pdf and docx.
>
> **[2:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=138)** Lastly, we insert a horizontal line called divider in the Streamlit app.
>
> **[2:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=143)** This is done using st.divider to visually separate different sections of the app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Data Science]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (4)
> **Code Identifiers:** session_state (2), file_uploader (1)
> **Analogies:** imagine (1), just like (1), it's like (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Uploading files to API endpoints with Streamlit](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=0)** - [Instructor] Now we're going to process the uploaded file, save it temporarily, and upload it to a specified API endpoint and display any chat messages stored in the session state.
>
> **[0:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=11)** So let's check out how to do that.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=14)** First, we check if the data_file, which is the uploaded file, is not none.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=19)** And if that's the case, it indicates that the user has uploaded a file.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=24)** Now we're going to save the uploaded file temporarily.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=27)** This involves creating a file path in the temp directory with the same name as the uploaded file.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=33)** The content of the file is then written using a binary write mode.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=37)** After that, we call the upload_file function to upload the temporary file to a specified API endpoint.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=45)** The result is stored in the variable s3_upload_url.
>
> **[0:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=49)** Once that's done, we extract the file name from the s3_upload_url.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=54)** It assumes that the file name is the last part of the URL after splitting it by slash.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=60)** Now we iterate through the chat message stored in that session state and display them in the Streamlit app.
>
> **[1:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=67)** The st.chat_message content manager is used to specify the role of the chat message, example, whether it's a bot or a user, and the st.markdown is used to render the content of the message.

> [!info]- Semantic Content
>
> **Code Identifiers:** data_file (1), upload_file (1), chat_message (1)
> **Env Vars:** api (2), url (1)
> **Speakers:** - [instructor] (1)

#### [Building a chat interface with Streamlit](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=0)** - [Instructor] In this lesson, we're going to explore how to handle the user input, update the chat history, display user and assistant messages in the Streamlit app.
>
> **[0:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=9)** We're also going to explore how to simulate a streaming effect for the assistant's response.
>
> **[0:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=15)** The assistant's response are going to be added to the chat history for future references.
>
> **[0:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=19)** So let's dive in and see how to do that.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=21)** First we use st.chat input to accept the user input in the Streamlit app.
>
> **[0:27](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=27)** The provided message, "You can ask any question," serves as a placeholder.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=31)** If the user provides input, it is assigned to the variable prompt.
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=36)** Next, we append the user's message, the chat history stored in the session state.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=40)** Then we display the user's message in the Streamlit app using st.chat_message with the role user and the st.markdown to get the content.
>
> **[0:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=52)** Next, we're going to display the assistant's response in the chat message container.
>
> **[0:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=56)** If there's no existing session ID, we start a new session by calling the chat function with the user's prompt and the data from the uploaded file.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=65)** If there's an existing session ID, we continue the session.
>
> **[1:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=68)** An empty Streamlit element message_placeholder is created to be used for dynamic updating of the assistant's response.
>
> **[1:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=77)** After that, we're going to stimulate the display of the assistant's response with the streaming effect.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=82)** The response is split into chunks and each chunk is added to the full response string with a small delay of 50 milliseconds.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=90)** You can increase this delay if you'd like or decrease this.
>
> **[1:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=93)** This creates a typing like effect.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=96)** And over here a blinking cursor is added to simulate the appearance of typing.
>
> **[1:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=102)** Last but not least, we append the assistant's response to the chat history stored in the session state.
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=108)** And that's it.
>
> **[1:49](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=109)** Our front end coding is done.
>
> **[1:51](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=111)** We were trying to create an application that takes in a large document and chats with the user about that document.
>
> **[2:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=121)** Now let's see this application in action.

> [!info]- Semantic Content
>
> **Code Identifiers:** chat_message (1), message_placeholder (1)
> **Speakers:** - [instructor] (1)

#### [How to run the front end of the chatbot](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=0)** - [Instructor] I hope you're excited to run the frontend code to see it in action.
>
> **[0:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=4)** So before we run the frontend code, make sure that the backend code is also running.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=10)** Once the backend is up and running, create a new bash and type cd Begin/.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=17)** Begin is our folder.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=20)** Once that's done, type streamlit run and paste the name of this frontend file and let it run.
>
> **[0:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=30)** There we go.
>
> **[0:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=31)** Once you finish running this, go to the Port tab, and now make sure that you have 8501 as one of your ports because that is the port that our frontend is on, as you see over here.
>
> **[0:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=43)** If you don't see that in the Port tab, go down and add port.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=48)** I've already added this.
>
> **[0:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=50)** So here we see under visibility that both of these ports are private.
>
> **[0:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=54)** Let's make them public.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=57)** 8000 is the port that contains the backend.
>
> **[1:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=61)** 8501 is the one that contains the frontend.
>
> **[1:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=64)** So click on the globe button next to the 8501 port, which should open our application in a new tab.
>
> **[1:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=73)** Click on Browse files.
>
> **[1:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=74)** Now we're going to upload Landon Hotel Employee Manual.
>
> **[1:18](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=78)** This is a fictitious hotel that we've created for the purpose of this course, and here are the contents of the manual.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=86)** Now let's ask a question that's related to the document, but not directly provided in the document.
>
> **[1:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=92)** So let's ask, "If I'm a software developer at Landon Hotels,
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=101)** can I work as a bartender after working hours?"
>
> **[1:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=108)** Let's see what it responds.
>
> **[1:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=110)** You see a little man running.
>
> **[1:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=113)** It shows that the program is working as intended.
>
> **[1:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=116)** All right, now it says, "According to the information provided, employees at Landon Hotel are allowed to hold outside jobs in non-related business or professionals as long as they meet performance standards."
>
> **[2:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=126)** And at the end it says, "Therefore, it would be best to consult with your supervisor or HR department to determine if working as a bartender after working hours would be permissible."
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=137)** So this is exactly what we expected out of the chat bot.
>
> **[2:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=140)** Provide us information about what's written in the manual or the document, and then also provide us information on the next steps.
>
> **[2:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=149)** Now let's check to see if it can answer a question in Spanish.
>
> **[2:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=154)** I'm going to ask what this document is about in Spanish.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=161)** Excellent.
>
> **[2:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=161)** So it says the document is an employee manual for Hotel Landon, which is exactly what it is.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=168)** So it could not only take prompts in English, but it can also take prompts in other languages and respond accordingly.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=175)** And that's it.
>
> **[2:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=175)** Now you've created an end-to-end application where you can upload a document and talk to the chat bot and ask any questions about it, both in English, Spanish, and other additional languages.
>
> **[3:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=187)** Congratulations on successfully building this project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), cd (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a front-end UI for file upload](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=5)** - [Instructor] Now it's time for a new challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=7)** Use the knowledge that you've gained in the previous lessons to complete this file that's labeled CH_4a_Challenge.py.
>
> **[0:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=16)** I've added comments in the file for you to be able to complete this coding challenge.
>
> **[0:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=21)** The objective of this challenge is very similar to the chapter three challenge.
>
> **[0:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=26)** In the chapter three challenge, you had uploaded the file using backend, now you will be creating a front end for the user to select and upload a file to the AWS S3 bucket.
>
> **[0:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=39)** To complete this challenge, import the necessary libraries, set up FastAPI endpoint URL where the file will be uploaded, create a function to handle the file upload, prepare the file to be sent, and send the post request to the FastAPI server.
>
> **[0:55](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=55)** Once sent, check the response status code to ensure that the file was successfully uploaded.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=60)** And if successful, display a successful message.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=65)** If it wasn't successful or if an error occurs, display an error message with the response text.
>
> **[1:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=70)** Configure the page with a title icon and layout just like the way we did in the previous lesson.
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=76)** Allow the user to select a file of specific types.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=80)** You can indicate as many file types as you would like.
>
> **[1:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=84)** If a file is selected and the Upload button is clicked, call the function to upload the selected file.
>
> **[1:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=90)** Once all of this is done, go ahead and run this command to see what happens.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=96)** Go ahead and take a moment to complete this challenge.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=99)** I'll see you in the next lesson with the answers.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), url (1)
> **Prerequisites:** set up (1), configure (1)
> **File Paths:** ch_4a_challenge.py (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a front-end UI for file upload](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=0)** - [Instructor] I hope you took some time to complete the challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=8)** Now let's take a look at the solution.
>
> **[0:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=10)** Let's go ahead and import the necessary libraries.
>
> **[0:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=13)** The first library that we're going to be importing is of course, Streamlit.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=17)** So go ahead and type import streamlit as st.
>
> **[0:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=24)** To recap, Streamlit is the library for building web apps with very little code.
>
> **[0:28](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=28)** It simplifies the process of creating user interfaces.
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=32)** Now let's go ahead and import requests.
>
> **[0:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=38)** And to recap, this [[Python (Programming Language)|Python]] library is used to send HTTP requests.
>
> **[0:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=42)** Here we use it to send files from the Streamlit app to a FastAPI backend.
>
> **[0:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=48)** Next we define the URL of our FastAPI backend where files will be uploaded.
>
> **[0:53](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=53)** This URL over here, points to a local server running FastAPI.
>
> **[0:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=57)** Meaning FastAPI is running on your machine.
>
> **[1:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=60)** Now let's move on to the main function that handles the file upload process.
>
> **[1:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=65)** Here we've defined a function that takes the uploaded file as an argument.
>
> **[1:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=71)** The file's dictionary assigns the file to the key called data_file, which then matches the parameter name in FastAPI.
>
> **[1:21](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=81)** Let's send a POST request to the FastAPI URL with the file.
>
> **[1:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=86)** Type in requests.post FastAPI_URL, files equal files.
>
> **[1:44](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=104)** Now it's time for us to check the response from FastAPI to see if the upload was successful or if there was an error.
>
> **[1:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=112)** So go ahead and type in response.status_code ==200: And if it is indeed successful, we're going to have it display that type in st.success.
>
> **[2:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=131)** And within parentheses, we type file uploaded successfully.
>
> **[2:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=137)** And this is the message that we're going to be displaying.
>
> **[2:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=142)** And then in the next line, type in st [[JSON]] response.json
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=157)** and then close parentheses.
>
> **[2:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=159)** This line displays the message in the front end.
>
> **[2:42](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=162)** If the status is anything other than 200, then something went wrong and we want to indicate that.
>
> **[2:48](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=168)** Within the else statement, go ahead and type st.error and then have it display the message error during file upload, and then have and then concatenate that with response.text.
>
> **[3:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=196)** We display an error message and we include the error details from the FastAPI using the response.text.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=209)** Now let's move on to the Streamlit interface where the user interacts with the web app.
>
> **[3:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=214)** Let's go ahead and set it up.
>
> **[3:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=217)** Go ahead and type in st.set_page_config
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=227)** Type in page title, page_title = and you can label this whatever you would like.
>
> **[3:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=234)** You can label this as my app.
>
> **[3:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=236)** I'm going to label this as challenge.
>
> **[4:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=241)** And I'm going to have the same page icon that we used during our lesson, which is the little notebook symbol.
>
> **[4:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=251)** I'm going to copy paste it from the previous code.
>
> **[4:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=259)** You can use any emoji or symbol of your choice and then say layout = wide.
>
> **[4:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=270)** Excellent.
>
> **[4:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=271)** Now that we've configured the page, it's now time for us to configure the uploader widget.
>
> **[4:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=276)** So go ahead and type uploaded_file = st.file_uploader.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=292)** Open parenthesis, type in choose a file to upload.
>
> **[4:57](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=297)** You can modify this message in any form that you'd like to indicate to the user that they need to choose a file to upload, type in comma, and then type equals.
>
> **[5:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=310)** And this is where you would indicate what type of files you would like to allow the user to upload.
>
> **[5:15](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=315)** I'm going to say docs, csv,
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=326)** text file, PDF
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=336)** Finally, we're going to add a logic to check if a file was uploaded.
>
> **[5:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=340)** And if so, allow the user to click a button to start the upload process.
>
> **[5:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=345)** So let's go ahead and do that.
>
> **[5:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=347)** I've already added a few lines of code here that checks if the user has uploaded a file.
>
> **[5:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=352)** If a file is uploaded, then the following code block runs.
>
> **[5:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=356)** This line over creates an upload button, when clicked, it triggers the upload file function, sending the uploaded file to FastAPI for processing.
>
> **[6:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=367)** Now we need to call a function to upload the selected file.
>
> **[6:11](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=371)** Go ahead and type in upload_file.
>
> **[6:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=376)** Open parentheses, type in uploaded_file.
>
> **[6:25](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=385)** That's it, we're done.
>
> **[6:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=389)** Now it's time for us to go ahead and run this command to check if our code is working.
>
> **[6:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=397)** We're in the begin folder and we're running this file name over here.
>
> **[6:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=403)** Click open in browser, and here we go.
>
> **[6:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=410)** We've created our front end.
>
> **[6:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=412)** Click browse.
>
> **[6:54](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=414)** This time I'm going to upload the PDF version of the same file that we had uploaded in chapter three.
>
> **[7:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=421)** And click open and go ahead and click upload.
>
> **[7:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=426)** We see a message that says File uploaded successfully, and here's the file path where it's been uploaded to our S3 bucket.
>
> **[7:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=433)** Here's the date and time when the file was uploaded.
>
> **[7:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=436)** So let's go ahead and check our S3 bucket to see if we see this PDF version.
>
> **[7:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=443)** Here we are.
>
> **[7:24](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=444)** I'm within my AWS console under the docchat S3 bucket, within the folder downloads.
>
> **[7:30](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=450)** And you see over here that we now have the PDF version of the same file uploaded on the same day.
>
> **[7:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=457)** So this proves to us that our front end is indeed working as intended.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** pdf (4), url (3), http (1), post (1), aws (1)
> **Code Identifiers:** uploaded_file (2), data_file (1), status_code (1), set_page_config (1), page_title (1)
> **CLI Commands:** python (1), aws (1)
> **File Paths:** response.json (1)
> **API Endpoints:** post  (1)
> **Cross-References:** in the next (1)
> **Tools:** aws console (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your next steps](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=0)** - Congratulations on completing this course and creating your [[Python (Programming Language)|Python]] project portfolio.
>
> **[0:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=6)** When time comes for you to show off your Python and AI skills, you'll be glad that you have this portfolio of work that you can exhibit.
>
> **[0:14](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=14)** This project portfolio will serve as a visual representation of your coding skills, creativity, and problem solving abilities.
>
> **[0:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=22)** By now, you should also have a good understanding of data analytics techniques, including data cleanup, preparation, and visualization using Matplotlib, model selection, evaluation, model deployment, and a good introduction to FastAPI and AWS integration.
>
> **[0:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=40)** I hope this experience has expanded your Python skill set.
>
> **[0:45](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=45)** From setting up CORS middleware to building a sophisticated chat interface with Streamlit, you've now completed a journey encompassing API communication, file upload, and advanced interactions.
>
> **[0:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=58)** Together we explored how to create OpenAI-based applications that use [[MongoDB]] and AWS.
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=66)** If you'd like to continue learning about AI tools and keep yourself updated on the latest AI news, check out my newsletter and don't forget to follow me on [[LinkedIn]].
>
> **[1:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=76)** As you move forward, remember, learning doesn't end here.
>
> **[1:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=80)** Keep exploring and have some fun along the way.
>
> **[1:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=83)** Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[MongoDB]] (1), [[LinkedIn]] (1)
> **CLI Commands:** python (3), aws (2)
> **Env Vars:** aws (2), cors (1), api (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Priya Mohan]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-python-projects-build-ai-applications-4465602-1/codespaces)

## Skills Covered

- Python (Programming Language)
- AI Software Development
- Artificial Intelligence (AI)

## Path Context

### In [[Develop with Python for AI and Machine Learning]]
← [[Machine Learning with Python- Association Rules]] | **6 of 6**

## Appears In

- [[Develop with Python for AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Hands-On AI- Image Processing with Python]] — Python (Programming Language), Artificial Intelligence (AI)
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)